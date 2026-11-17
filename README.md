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
