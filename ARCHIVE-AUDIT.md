# Archive audit — October 11, 2026

## Inventory

| Measure | Count |
| --- | ---: |
| Archived source files | 114 |
| Source collections | 37 |
| Collections with a README | 37 |
| Collections without a README | 0 |
| Project index pages | 8 |
| People index pages | 2 |
| Organization index pages | 7 |
| Agency index pages | 7 |
| Topic index pages | 10 |
| Infrastructure index pages | 4 |
| Documented request or production entries in `REQUESTS.md` | 3 |

All 114 archived source files are PDFs. Each source file is under a collection with a README. The root [catalog](CATALOG.md) links to all 37 collections. The new indexes link to canonical files or collections without copying source PDFs. A SHA-256 comparison of the original 100 files found no byte-identical source files at different archive paths; the 14 newly supplied Sulphur council PDFs were separately checked against that inventory and were new. The previously supplied duplicate of the Zelenak Document 35 ruling remains unarchived, as noted in its collection README.

## Link and navigation review

The repository's Markdown link checker examined 241 local links after the navigation changes and found no broken targets. Every collection has a path from the catalog. Every subject index page has a path from its category README and the top-level index. External source links were not included in the local-file check.

## Collection status and provenance limits

- The FAA and USACE Starbase/Pecan Island collections contain request files without archived responses.
- The Governor's Office carbon-capture collection contains production parts 4 and 5 only. Earlier parts were not reconstructed.
- LPSC docket directories hold selected filings, orders, testimony, or notices; they do not claim to be complete docket mirrors.
- Company/project pages under `other-public-documents/` are separately identified from agency records. The Beauregard Electric Cooperative collection contains organizational records rather than a single agency production.
- Publication-redacted copies, agency-redacted filings, and the correction history in LPSC U-37483 remain disclosed in collection READMEs.
- The Waterford 3 permit package is marked draft. Its archived notice and package do not establish a final decision.
- The Sulphur City Council collection contains selected 2026 records. Three campaign-finance PDFs in the same supplied ZIP were held back because they include residential addresses and personal telephone numbers; the ZIP manifest was not archived as an official record.

## Structural issues retained for provenance

The mixed source classes in `other-public-documents/` and the earlier source-oriented path names are left in place to preserve established citations. Some collections lack a known original retrieval URL or exact acquisition date; no missing metadata was inferred. Names of issuing energy departments are preserved as they appear in the underlying solar permits. New Markdown uses lowercase kebab-case names; existing source filenames were not changed for cosmetic consistency. See [repository structure](REPOSITORY-STRUCTURE.md) for any future path migration approach.
