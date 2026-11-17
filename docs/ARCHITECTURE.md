# Architecture — staged implementation

## Release A (GitHub Pages; built now)
Vanilla ES modules + CSS for maximum portability. Data is stored in browser localStorage with an exportable JSON schema. `core.js` is pure, testable business logic; `app.js` handles DOM and interactions; `seed.js` provides **synthetic** data and never implies live sources.

- No API keys.
- No server, login, authentication, AI model calls or sensitive data storage.
- No privileged automation. Save local research and export files manually.
- XSS protections: user-provided strings escaped before being put in HTML, and URLs strictly vetted to HTTPS/HTTP.
- Defensive localStorage parse; import payload shape check and size limit.
- Read-only outbound links to sources with safe rel attributes.

## Release B (next; secure operations)
1. Supabase Auth + Postgres with row-level security (RLS).
2. Tables: opportunities, sources, vendor_profiles, vendor_checks, quotes, payments, expenses, approvals, risk_gates, activities, source_runs.
3. Server-side connectors: SAM.gov API (secret in backend only); approved email/RFP/manual imports; versioned ingestion and deduplication.
4. LLM research via server-side functions; all cited facts linked to specific records and marked verified / inferred / hypothetical.
5. Email notifications and a five-item weekly owner approval briefing; no automatic vendor outreach.
6. Cash ledger, conservative exposure schedule, risk escalation, audit trail and encrypted backups.
7. Provider rates/quotes verified directly and licensed directory terms respected.

## Later
- Source connector adapters for USAspending, authorized state/local notices, vendor data, procurement history.
- Dedicated verification/negotiation/legal-diligence agent roles with evaluation tests.
- Safely delegated execution and multi-project aggregate exposure planning.
- Automated draft proposals (never auto-send) and owner identity verification.

## Deployment
The `pages.yml` GitHub Actions workflow uploads static root to Pages. Repository is **public**; Pages is not a private vault. Server-side tasks cannot be implemented securely by modifying the Pages bundle alone.

## Configuration
`config/watchtower.json` documents owner defaults. Frontend stores locally edited values; never confuse those with server-enforced security rules.
