(function () {
  "use strict";
  const root = document.getElementById("archive-browser");
  if (!root) return;
  const input = document.getElementById("archive-query");
  const select = document.getElementById("archive-section");
  const output = document.getElementById("archive-results");
  const count = document.getElementById("archive-count");
  const repo = "337-NEWS/louisiana-public-records";
  const segment = s => s.split("/").map(encodeURIComponent).join("/");
  const link = (url, text, className) => {
    const a = document.createElement("a");
    a.href = url; a.textContent = text;
    if (className) a.className = className;
    return a;
  };
  const add = (parent, tag, text, className) => {
    const el = document.createElement(tag);
    if (text !== undefined) el.textContent = text;
    if (className) el.className = className;
    parent.appendChild(el);
    return el;
  };
  const size = n => n >= 1048576 ? (n / 1048576).toFixed(1) + " MB" : Math.max(1, Math.round(n / 1024)) + " KB";
  const raw = p => "https://github.com/" + repo + "/raw/refs/heads/main/" + segment(p);
  const all = [];
  let limit = 25, timer;
  function collectionHref(c) {
    const directory = c.path.replace(/\/README\.md$/, "");
    return root.dataset.recordRoot + directory.split("/").map(encodeURIComponent).join("/") + "/";
  }
  function render() {
    const query = input.value.trim().toLowerCase();
    const section = select.value;
    output.replaceChildren();
    if (!query && !section) {
      count.textContent = all.length + " collections indexed · search available";
      const p = add(output, "p");
      p.appendChild(document.createTextNode("Enter a search term or choose a subject. Or "));
      p.appendChild(link(root.dataset.recordRoot.replace(/records\/?$/, "topics/"), "browse by topic"));
      p.appendChild(document.createTextNode(" without searching."));
      return;
    }
    const matches = all.map(c => {
      if (section && section !== c.section) return null;
      const sectionMatch = (c.title + " " + c.section + " " + c.path).toLowerCase().includes(query);
      const files = !query || sectionMatch ? c.files : c.files.filter(f => f.path.toLowerCase().includes(query));
      return files.length ? { collection: c, files } : null;
    }).filter(Boolean);
    const total = matches.reduce((n, r) => n + r.files.length, 0);
    count.textContent = matches.length + " matching collections · " + total + " files";
    if (!matches.length) {
      add(output,"p","No matching records. Try a shorter term, a docket number, or a different subject.");
      return;
    }
    const fragment = document.createDocumentFragment();
    matches.slice(0, limit).forEach(({collection:c, files}) => {
      const article = add(fragment, "article", undefined, "archive-result");
      const heading = add(article, "h3");
      heading.appendChild(link(collectionHref(c), c.title));
      add(article, "p", c.section + " · " + files.length + " matching files", "archive-result-count");
      const list = add(article, "ul");
      files.slice(0, 4).forEach(f => {
        const item = add(list, "li");
        const filename = f.path.split("/").pop().replace(/[-_]/g, " ");
        item.appendChild(link(raw(f.path), filename, "archive-direct"));
        add(item, "span", " · " + f.ext.toUpperCase() + " · " + size(f.size), "archive-file-meta");
      });
      if (files.length > 4) {
        add(article, "p", "And " + (files.length - 4) + " more files in this collection.", "archive-result-count");
      }
      const more = add(article, "p");
      more.appendChild(link(collectionHref(c), "View all files in this collection"));
    });
    output.appendChild(fragment);
    if (matches.length > limit) {
      const b = add(output, "button", "Show more collections", "archive-show-more");
      b.type = "button";
      b.addEventListener("click", () => { limit += 25; render(); });
    }
  }
  function changed() {
    limit = 25;
    clearTimeout(timer);
    timer = setTimeout(render, 120);
  }
  input.addEventListener("input", changed);
  select.addEventListener("change", changed);
  input.value = new URLSearchParams(location.search).get("q") || "";
  fetch(root.dataset.manifest).then(response => {
    if (!response.ok) throw new Error("Could not fetch document index");
    return response.json();
  }).then(data => {
    all.push(...data.collections.filter(c => c.files && c.files.length));
    [...new Set(all.map(c => c.section))].sort().forEach(s => select.appendChild(new Option(s, s)));
    render();
  }).catch(() => {
    count.textContent = "Search unavailable";
    output.replaceChildren();
    const p = add(output, "p", "The document index could not load. ");
    p.appendChild(link(root.dataset.recordRoot.replace(/records\/?$/, "topics/"), "Browse all topics and direct document links"));
  });
})();