# Louisiana Public Records Archive

A public source-document archive maintained by **337.NEWS** for records concerning Louisiana government, public bodies, courts, public infrastructure, regulation, development, and matters of public interest.

This repository is the **source archive**. Reporting, analysis, and editorial context belong on 337.NEWS and are kept separate from the underlying records.

## What belongs here

The archive may include:

- Records produced in response to Louisiana Public Records Law requests
- Records produced under the federal Freedom of Information Act (FOIA)
- Meeting agendas and minutes
- Court filings and judicial opinions
- Permits, regulatory records, audits, contracts, correspondence, reports, and other official public documents
- Other public records whose provenance can be reasonably established

A document does **not** need to have been obtained by 337.NEWS to be included.

## Archive principles

1. **Preserve the source.** Files received from an agency or obtained from an official/public source should be archived without substantive alteration.
2. **Separate records from reporting.** Inclusion in this repository is not an endorsement of any allegation, interpretation, or conclusion.
3. **Document provenance.** Each collection should identify the source agency or body, record type, relevant dates, and how the material was obtained when known.
4. **Protect restricted information.** Do not publish information that is legally protected from disclosure or that creates an unnecessary privacy or safety risk. If a publication copy must be redacted, preserve that fact in the collection metadata.
5. **No editorialized source files.** Filenames and collection descriptions should identify records neutrally.
6. **Corrections are documented.** Do not silently replace materially different source records. Note corrections, supplemental productions, or replacement files in the collection README.

## Repository structure

```text
federal/
  <agency>/
    <subject-or-request>/

state/
  <agency>/
    <subject-or-request>/

parish/
  <parish-name>/
    <agency-or-body>/
      <subject-or-request>/

municipal/
  <municipality>/
    <agency-or-body>/
      <subject-or-request>/

courts/
  federal/
  louisiana/

other-public-documents/
  <source-or-subject>/
```

Collections may contain a `request/` directory, a `response/` directory, and a `README.md` describing provenance.

## Using these records

Readers should review the underlying documents directly and in context. A record may contain allegations, statements by third parties, preliminary findings, superseded information, or material later disputed or corrected. Publication here does not convert those statements into findings of fact.

When 337.NEWS has reporting related to a collection, the collection README may link to that coverage.

## Contributing

Public contributions are welcome but moderated. See [CONTRIBUTING.md](CONTRIBUTING.md).

## About 337.NEWS

337.NEWS is an independent Southwest Louisiana publication. This repository exists to make source material easier for the public to inspect, cite, and preserve.
