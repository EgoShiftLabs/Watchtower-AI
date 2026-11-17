# WATCHTOWER AI
**Opportunity-to-Profit Engine • MLive Digital Solutions LLC**

> Find the opportunity. Find the partner. Run the numbers. Control the risk.

Watchtower is a private-decision-support concept with a public static prototype at **https://egoshiftlabs.github.io/Watchtower-AI/**. It is not a public SaaS business, a guarantee of income, or an autonomous contractor. The owner uses it to find and evaluate digital-services engagements, government-contract opportunities, and AI microventures and to assemble outsourced execution.

## Live prototype (GitHub Pages)

The dashboard provides: a mobile-friendly command center, opportunity inbox, source links, a structured intake form, fictional demo scenarios, vendor bench and vendor-fit matching, finance modeling, hard risk gates, a decision desk, a research-source directory, activity history, browser-local settings, and JSON import/export.

**Security warning:** GitHub Pages is public, with no authentication or private database. Prototype data stays in the browser's localStorage (unless exported). It is **not encrypted or synchronized**. Do **not** enter client confidences, sensitive contract details, credentials, or API keys. Demo buyers, budgets and vendors are fictional and are visibly labeled. No live opportunity feed or vendor directory is connected yet. Nobody is contacted and no bids are submitted.

## Non-negotiable owner requirements

- **Upfront cash:** $1,000 conservative maximum **per deal AND across active portfolio**.
- **Goal:** $2,500/month **realized project contribution**; not a revenue forecast.
- **Owner effort:** target 1–2 hours per week once the service is established.
- **Hunt mix:** digital services 60%, government contracts 25%, AI ventures 15%.
- **Approval:** human sign-off before customer/vendor outreach, bids, contracts, hires, payments or venture spend.
- **Gates beat scores:** no unverified source, unqualified vendor, illegal procurement structure, unaffordable cash flow or unsupported numbers can pass.

## Quick start

Open the Pages URL (after GitHub Actions deployment), choose **Demo mode** to explore. Choose **Live workspace** for your own entries; browser storage remains local. Use **Add opportunity**, **Add partner**, **Decision desk** and **Export backup**.

Local: `python3 -m http.server 8000` and open `http://localhost:8000`. Tests: `npm test` on Node 20+.

## Files

| Path | Role |
| --- | --- |
| `index.html`, `styles.css`, `app.js` | Static dashboard |
| `core.js`, `seed.js` | Pure scoring / gates and fictional samples |
| `config/watchtower.json` | Versioned mission / financial defaults |
| `docs/PRODUCT.md` | Product principles & acceptance tests |
| `docs/WORKFLOW.md` | Stage-gated deal process |
| `docs/ARCHITECTURE.md` | Static now; secure backend later |
| `docs/SOURCES.md` | Approved sources, usage policy |
| `docs/ROADMAP.md` | Prioritized build plan |
| `.github/workflows/pages.yml` | Pages deployment |
| `tests/core.test.js` | Core automated tests |

## GitHub Pages setup

The repository ships a GitHub Actions deployment workflow. If the Pages URL is not live, open **Settings → Pages → Build and deployment → Source: GitHub Actions**. Confirm the latest Pages deployment in **Actions**. The workflow cannot give the public site server-side privacy or grant authenticated access.

## Production upgrade

Move opportunity and vendor records to a private database (Supabase/Postgres), add secure identity and row-level authorization, server-side source adapters, secrets and rate limits, a human-reviewed research pipeline, and audited approvals. Never put a SAM.gov API key or any credential in frontend JavaScript.

**Status: working browser prototype, not a deployed production intelligence backend.**

## Release 0.2: evidence and risk-control improvements

- Material cost and reserve inputs must be explicitly supplied (zero is only accepted if deliberately entered).
- Source, buyer, supplier quote and compliance evidence notes are required for the proposal-draft screening gate.
- Deal cash-flow forecast waterfall is scenario-only and **does not net proposed client deposits from risk**.
- Decision desk exports a five-item Markdown briefing for manual review.
- Optional [public SAM.gov source collector](docs/PUBLIC-FEED.md) is committed but **not enabled until the owner configures a GitHub Actions API secret**. Public notices are imported only as **unverified** leads.

### Business / sale preparation

- [Buyer-friendly one-page description](docs/ONE_PAGER.md)
- [Detailed product + commercial exit roadmap](docs/ROADMAP.md)
- [Commercialization and licensing options](docs/COMMERCIALIZATION.md)
- [Transferable asset inventory & ownership gaps](docs/ASSET_REGISTER.md)

**Important:** This is a public source repository, not a protected trade-secret vault. Any potential asset purchase or license requires verified IP ownership, third-party rights review, and evidence of actual business outcomes. No sale value is claimed.

## First 90 days: prove a business, not a demo

The next milestone is a controlled, measured comparison of **two revenue tracks**: (A) selectively outsourced digital projects, and (B) fixed-fee, source-backed opportunity research services. No income, customer retention, or market valuation is claimed.

- [90-day operating plan](docs/90_DAY_OPERATING_PLAN.md) — dated milestones, first research tests, stop/go gates.
- [Two revenue tracks](docs/TWO_REVENUE_TRACKS.md) — what customers actually buy, assumptions, risks.
- [Metrics and decision rules](docs/METRICS_AND_DECISION_RULES.md) — owner time, funnel, contribution, cash liabilities.
- [Valuation and buyer readiness](docs/VALUATION_AND_BUYER_READINESS.md) — distinguish replacement cost, asset price and recurring-business value.
- [Public/private data boundary](docs/PRIVATE_DATA_BOUNDARY.md) — no confidential quotes, credentials, client data, or proprietary work in the public site.

**Known open risks:** the current aggregate-exposure logic is based on deal stages rather than an actual commitments ledger; the monthly contribution ledger should be reconciled for unpaid expenses and refund obligations. These limitations are documented, not assumed resolved.
