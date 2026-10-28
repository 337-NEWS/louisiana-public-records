---
layout: default
title: Browse records
nav_order: 2
permalink: /browse/
description: "Search source-document collections and download original files."
---

# Browse & download records

Find a collection by subject, agency, project, or filename. Choose **Download file** to get a document directly, without navigating the GitHub interface.

<div class="archive-browser" id="archive-browser" data-manifest="{{ '/assets/data/catalog.json' | relative_url }}">
  <label for="archive-query">Search the archive</label>
  <input id="archive-query" class="archive-query" type="search" autocomplete="off" placeholder="Try: Vernon, carbon capture, CPSB, agreement, or U-37882">
  <div class="archive-controls">
    <label for="archive-section">Subject <select id="archive-section"><option value="">All subjects</option></select></label>
    <span class="archive-count" id="archive-count" role="status" aria-live="polite">Loading documents…</span>
  </div>
  <div id="archive-results"></div>
</div>

<noscript>This searchable interface requires JavaScript. The [GitHub catalog](https://github.com/337-NEWS/louisiana-public-records/blob/main/CATALOG.md) remains available without scripts.</noscript>

<span class="archive-note">Files open through GitHub's direct raw-file endpoint. Depending on your browser and file format, a PDF may open in a viewer before it can be saved. The secondary "Source details" link preserves its GitHub path and collection context.</span>

<script defer src="{{ '/assets/js/records.js' | relative_url }}"></script>
