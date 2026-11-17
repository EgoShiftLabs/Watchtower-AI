# Optional public research feed — GitHub Actions

**Current default: unconfigured and OFF.** An empty public JSON file is intentionally not the same thing as an active scan.

## Why it exists

The site is hosted on GitHub Pages. A scheduled GitHub Actions job can fetch **public** federal procurement notices from SAM.gov, sanitize fields and publish only publicly available information as `data/public-feed.json`. This is an intermediate solution, not a private backend. Do not use it for customer accounts, supplier quotes or other confidential intelligence.

## Setup

1. Obtain your own SAM.gov Public Opportunities API key from your SAM.gov account. Verify current rate and usage limits at https://open.gsa.gov/api/get-opportunities-public-api/.
2. GitHub repository → Settings → Secrets and variables → Actions → New repository secret → Name: `SAM_API_KEY`. Paste the value **only there**, never in chat, README, commit history, HTML or JS.
3. Actions → **Public opportunity hunt (opt-in)** → Run workflow. The scheduled workflow also runs on weekdays (UTC; start time not guaranteed).
4. Inspect workflow logs. A successful configured scan produces a sanitized `data/public-feed.json` and triggers a Pages deployment. An unconfigured scan leaves the placeholder unchanged.
5. Confirm each notice at its source. Treat results as research leads, never as bid-ready opportunities.

## Source coverage and limits

- Initially limited to **NAICS 541511 and 541512**, 14-day posted-date lookback, two requests per run and at most 60 resulting notices.
- Excludes known award notices, expired/undated responses and obviously inactive records.
- Dates, procurement type and ID are parsed from SAM.gov records. Frontend must still clearly label every item **unverified**.
- Key never appears in output, and point-of-contact information is intentionally excluded.
- This is federal digital-contract market intelligence only, not a private SMB demand scanner, blanket eligibility check, bid submission bot or autonomous agent.
- API outages: script refuses to publish a pretend success; old feed can become stale. The UI must display retrieval age and distinguish empty feed from unconfigured/stale feed.
- GitHub Actions scheduled jobs may be delayed; do not rely on exact time.

## SECURITY / SALE READINESS

The **repository and feed are PUBLIC**, even if the owner's personal workspace is browser-local. Public reports must never contain customer confidential data, vendor quotes, email addresses or unpublished opportunity research. GitHub Pages can serve static data but **cannot** securely store client records or secrets.

When upgrading to a real backend, move this API access and data storage behind authenticated private services, and disable direct publication of proprietary research.
