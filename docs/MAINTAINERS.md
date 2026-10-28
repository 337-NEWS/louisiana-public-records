# Public site deployment (maintainers)

The public-facing site is isolated in `docs/`. **Do not migrate, rename, or copy the archival PDFs into this directory.** The download interface links to canonical files on GitHub.

## Publish

1. Merge the accompanying branch/PR.
2. Open **Repository → Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**; select `main` and `/docs`, then Save.
4. Visit `https://337-news.github.io/louisiana-public-records/` once GitHub finishes deployment.
5. If the project already publishes from another source, change the source deliberately after merging; the connector cannot read or change the current Pages setting.

## Maintenance

- The canonical archive remains under `federal/`, `state/`, `parish/`, `municipal/`, `courts/`, and `other-public-documents/`.
- The bundled `docs/assets/data/catalog.json` supplies a fast initial index and fallback. The browser also reads the live public repository tree to discover newly committed files (subject to GitHub's unauthenticated API rate limit). New collections appear in the "New / additional collections" group until the snapshot is refreshed.
- Refresh the snapshot when editing curated names or section headings; the live tree does not infer the semantic catalog's title/section edits.
- Maintain the source `CATALOG.md`, `REQUESTS.md`, and collection READMEs as authoritative records. Public pages contain simplified navigation summaries, not independent evidentiary findings.
- Download links use the canonical GitHub raw-file route to avoid GitHub's file-view page. Git LFS originals are not copied to GitHub Pages (which does not support serving LFS objects natively).
- If a custom domain is set later, change `url` and `baseurl` in `docs/_config.yml` before publishing.

## Topic-first navigation (October 28, 2026)

- Public visitors start at `/topics/`, then select one of seven featured topic guides or a subject category.
- The ten pages under `docs/subjects/` list the 82 source collections. Each source collection has an HTML index at `docs/records/<canonical-folder>/index.md` with direct links to its original archived files and a source-notes link.
- `/browse/` uses **only** the 52 KB bundled `docs/assets/data/catalog.json`; it does not call GitHub APIs, display every file at once, or load any PDF. Results are capped at 25 collection cards at a time and show up to four direct source-file links per result.
- The catalog and static collection pages are a **published snapshot**, not an automatically updating live mirror. When adding records or editing collection metadata, regenerate the affected documentation pages and update `docs/assets/data/catalog.json` in the same change. The canonical archival source READMEs remain under their existing folders.
- Do not restore the GitHub recursive-tree fetch to the browser; it causes unnecessary network requests and repeated rendering.
