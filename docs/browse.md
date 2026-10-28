---
layout: default
title: Find a document
nav_order: 3
permalink: /browse/
description: "Fast local filename and collection search, with direct source-file links."
---

# Find a document

**For the easiest path, [browse records by topic]({{ '/topics/' | relative_url }}).** Each topic and collection page has permanent direct links to the source documents. Use this search only when you know a project name, agency, docket number, or filename.

<div class="archive-browser" id="archive-browser" data-manifest="{{ '/assets/data/catalog.json' | relative_url }}" data-record-root="{{ '/records/' | relative_url }}">
  <label for="archive-query">Find a collection or filename</label>
  <input id="archive-query" class="archive-query" type="search" autocomplete="off" placeholder="Examples: Vernon, Persimmon, carbon capture, U-37483">
  <div class="archive-controls">
    <label for="archive-section">Filter by subject <select id="archive-section"><option value="">All subjects</option></select></label>
    <span class="archive-count" id="archive-count" role="status" aria-live="polite">Loading the small index…</span>
  </div>
  <div id="archive-results"><p>Loading the local document index.</p></div>
</div>

<noscript>Search requires JavaScript, but the entire archive can be browsed without it. [Start with the topic guides]({{ '/topics/' | relative_url }}).</noscript>

<span class="archive-note">This search covers collection titles and archived filenames, not the text inside PDFs. It reads a small index hosted with this website and makes no external GitHub API calls. Files remain in the original public repository.</span>

<script defer src="{{ '/assets/js/records.js' | relative_url }}"></script>
