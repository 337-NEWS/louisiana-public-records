# Archive audit — October 12, 2026

## Inventory

| Measure | Count |
| --- | ---: |
| Archived source files | 151 |
| Source collections | 47 |
| Collections with a README | 47 |
| Collections without a README | 0 |
| Project index pages | 11 |
| People index pages | 2 |
| Organization index pages | 9 |
| Agency index pages | 7 |
| Topic index pages | 10 |
| Infrastructure index pages | 5 |
| Documented request or production entries in `REQUESTS.md` | 3 |

All 151 archived source files comprise 143 PDFs, seven DOCX files, and one XLSX file. Each source file is under a collection with a README. The root [catalog](CATALOG.md) links to all 47 collections. The indexes link to canonical files or collections without copying source files. A SHA-256 comparison found no byte-identical source files at different archive paths. Exact duplicate standalone copies of three Lacassine agreements were not added twice. The previously supplied duplicate of the Zelenak Document 35 ruling remains unarchived, as noted in its collection README.

## Link and navigation review

The repository's Markdown link checker examined 445 local links after the navigation changes and found no broken targets. Every archived source file is linked from its collection README. Every collection has a path from the catalog. Every subject index page has a path from its category README and the top-level index. External source links were not included in the local-file check.

## Collection status and provenance limits

- The FAA and USACE Starbase/Pecan Island collections contain request files without archived responses.
- The Governor's Office carbon-capture collection contains production parts 4 and 5 only. Earlier parts were not reconstructed.
- LPSC docket directories hold selected filings, orders, testimony, or notices; they do not claim to be complete docket mirrors.
- Company/project pages under `other-public-documents/` are separately identified from agency records. The Beauregard Electric Cooperative collection contains organizational records rather than a single agency production.
- Publication-redacted copies, agency-redacted filings, and the correction history in LPSC U-37483 remain disclosed in collection READMEs.
- The Waterford 3 permit package is marked draft. Its archived notice and package do not establish a final decision.
- The Sulphur City Council collection contains selected 2026 records. Three campaign-finance PDFs in the same supplied ZIP were held back because they include residential addresses and personal telephone numbers; the ZIP manifest was not archived as an official record.
- The MISO collections contain selected service agreements, public planning material, and facility data. They are organizational publications, not complete FERC dockets. The 1803 network-operating-agreement PDF contains blank fields in its form text and is not described as proof of a fully completed agreement.
- LPSC R-36262 is a selected general order. The separate 1803 Electric IRP initiation collection contains a request and proposed exhibits; it does not establish a final IRP process schedule or adopted confidentiality agreement.
- LPSC X-37665 contains an 1803 Electric RFP filing. A separate collection contains three third-party article/data-page prints with publisher attribution; their claims are not treated as agency findings.
- LPSC U-35927, U-37134, and U-37441 contain portal document-list prints only, not the underlying filings. A supplied 1803 local-planning-criteria PDF matched the archived MISO copy byte-for-byte and was not added again.
- The MISO BPM-020 collection holds public transmission-planning manuals (revisions 33 and 34) and the revision 34 redline. These are organizational guidance documents, not Louisiana agency orders or project approvals.

## Structural issues retained for provenance

The mixed source classes in `other-public-documents/` and the earlier source-oriented path names are left in place to preserve established citations. Some collections lack a known original retrieval URL or exact acquisition date; no missing metadata was inferred. Names of issuing energy departments are preserved as they appear in the underlying solar permits. New Markdown uses lowercase kebab-case names; existing source filenames were not changed for cosmetic consistency. See [repository structure](REPOSITORY-STRUCTURE.md) for any future path migration approach.
