(function () {
  "use strict";
  var root = document.getElementById("archive-browser");
  if (!root) return;
  var search = document.getElementById("archive-query");
  var filter = document.getElementById("archive-section");
  var result = document.getElementById("archive-results");
  var counter = document.getElementById("archive-count");
  var repo = "337-NEWS/louisiana-public-records";
  var data = [];
  var supported = /[.](pdf|docx|txt|html|tsv|json|xlsx|md)$/i;
  var excluded = /(?:^|\/)README\.md$/i;
  var urlFile = function (path) { return path.split("/").map(encodeURIComponent).join("/"); };
  var nice = function (path) { return path.split("/").pop().replace(/[-_]/g, " "); };
  var size = function (n) { return n >= 1048576 ? (n / 1048576).toFixed(1) + " MB" : Math.max(1, Math.round(n / 1024)) + " KB"; };
  var a = function (href, label, cls) {
    var el = document.createElement("a"); el.href = href; el.textContent = label;
    el.target = "_blank"; el.rel = "noopener noreferrer"; if (cls) el.className = cls; return el;
  };
  function render() {
    var q = search.value.trim().toLowerCase();
    var s = filter.value;
    result.replaceChildren();
    var shown = 0, records = 0;
    data.forEach(function (c) {
      if (s && s !== c.section) return;
      var hasMatch = (c.title + " " + c.section + " " + c.path).toLowerCase().includes(q);
      var files = q && !hasMatch ? c.files.filter(function (f) { return f.path.toLowerCase().includes(q); }) : c.files;
      if (!files.length) return;
      shown++; records += files.length;
      var section = document.createElement("details"); section.className = "archive-collection";
      if (q) section.open = true;
      var summary = document.createElement("summary"); summary.textContent = c.title + " (" + files.length + " files)";
      section.appendChild(summary);
      var sub = document.createElement("small"); sub.textContent = c.section; section.appendChild(sub);
      var list = document.createElement("ul"); list.className = "archive-items";
      files.forEach(function (file) {
        var li = document.createElement("li");
        var name = document.createElement("span"); name.className = "archive-file-name"; name.textContent = nice(file.path);
        var meta = document.createElement("span"); meta.className = "archive-file-meta";
        meta.textContent = file.ext.toUpperCase() + " · " + size(file.size); name.appendChild(meta); li.appendChild(name);
        var buttons = document.createElement("span"); buttons.className = "archive-file-actions";
        var path = urlFile(file.path);
        buttons.appendChild(a("https://github.com/" + repo + "/raw/refs/heads/main/" + path, "Download file", "download"));
        buttons.appendChild(a("https://github.com/" + repo + "/blob/main/" + path, "Source details"));
        li.appendChild(buttons); list.appendChild(li);
      });
      section.appendChild(list); result.appendChild(section);
    });
    counter.textContent = shown + " collections · " + records + " downloadable files";
    if (!shown) {
      var p = document.createElement("p"); p.textContent = "No files match this search. Try a project name, agency, docket number, or shorter term."; result.appendChild(p);
    }
  }
  function applyCollections(cs) {
    data = cs.filter(function (c) { return c.files && c.files.length; });
    var current = filter.value;
    filter.replaceChildren(new Option("All subjects", ""));
    Array.from(new Set(data.map(function (c) { return c.section; }))).sort().forEach(function (s) {
      filter.add(new Option(s, s));
    });
    filter.value = current;
    render();
  }
  function refresh(snapshot, entries) {
    var col = snapshot.map(function (c) {
      return { title: c.title, section: c.section, path: c.path, files: [] };
    });
    var known = {};
    col.forEach(function (c) { known[c.path] = true; });
    entries.forEach(function (e) {
      if (e.type !== "blob" || !e.path.endsWith("/README.md") || e.path.startsWith("indexes/") || known[e.path]) return;
      var name = e.path.replace(/\/README\.md$/, "").split("/").slice(-2).join(" / ").replace(/[-_]/g, " ");
      col.push({ title: name, section: "New / additional collections", path: e.path, files: [] });
      known[e.path] = true;
    });
    entries.forEach(function (e) {
      if (e.type !== "blob" || !supported.test(e.path) || excluded.test(e.path) || e.path.startsWith("indexes/")) return;
      var owner = null;
      col.forEach(function (c) {
        var dir = c.path.slice(0, -9);
        if (e.path.startsWith(dir) && (!owner || c.path.length > owner.path.length)) owner = c;
      });
      if (owner) owner.files.push({ path: e.path, size: e.size || 0, ext: e.path.split(".").pop().toLowerCase() });
    });
    applyCollections(col);
  }
  search.addEventListener("input", render);
  filter.addEventListener("change", render);
  var params = new URLSearchParams(window.location.search);
  search.value = params.get("q") || "";
  fetch(root.dataset.manifest).then(function (r) { if (!r.ok) throw Error("catalog"); return r.json(); }).then(function (manifest) {
    applyCollections(manifest.collections);
    // Live refresh keeps new source files visible without duplicating PDFs on Pages.
    return fetch("https://api.github.com/repos/" + repo + "/git/trees/main?recursive=1",
      { headers: { Accept: "application/vnd.github+json" } }).then(function (r) {
        if (!r.ok) return null; return r.json();
      }).then(function (live) {
        if (live && !live.truncated && Array.isArray(live.tree)) refresh(manifest.collections, live.tree);
      }).catch(function () { /* Keep the bundled catalog if GitHub limits the live API. */ });
  }).catch(function () {
    counter.textContent = "The document listing is temporarily unavailable. The source catalog remains available through the repository link below.";
    var p = document.createElement("p");
    p.appendChild(a("https://github.com/" + repo + "/blob/main/CATALOG.md", "Open the repository catalog"));
    result.appendChild(p);
  });
})();