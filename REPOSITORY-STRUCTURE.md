# Repository structure

## Archive layer

`federal/`, `state/`, `parish/`, `municipal/`, and `courts/` organize records by source or custodian. Collection READMEs describe provenance, record type, archive status, and limits. Request and response subdirectories remain within their collection. Original PDFs are kept in their canonical locations.

`other-public-documents/` currently contains public-facing company and project publications as well as organizational records. A company webpage is not an agency finding. The collection README identifies the publisher and capture where known. No mass migration is performed here because changing established paths would disrupt citations and provenance. If a future source-class migration is warranted, maintain redirects or compatibility links and document the old and new paths.

## Knowledge layer

`indexes/` contains portable Markdown pages for projects, people, organizations, agencies, topics, and infrastructure. Pages link to canonical archive records. A cross-reference is based on the archived documents and does not imply a project, financial, or operational relationship beyond what the source establishes.

## Naming and linking

New Markdown filenames use lowercase kebab-case. New source filenames are neutral and descriptive; existing source files are not renamed for cosmetic consistency. Relative Markdown links keep the repository portable to static documentation systems. The root [CATALOG.md](CATALOG.md) lists every collection, and [REQUESTS.md](REQUESTS.md) tracks documented requests.
