# WATCHTOWER AI | Product, validation and commercial exit roadmap
**Version:** 1.1 • **Prepared:** 2026-11-17 • **Owner:** MLive Digital Solutions LLC (ownership documentation to be confirmed)
**Scope:** Private opportunity-to-profit system with a publicly demonstrable frontend. **No revenue, customers, profits, valuations, live API integration, or autonomous deal-closing capability is asserted.**

## North star
Discover real demand → verify primary sources → identify 3 delivery candidates → obtain actual quotes → validate contract and cash economics → give founder a maximum-five-item decision queue → track real cash collected and delivery results.

### Founder guardrails (must survive acquisition/white-label proposals until renegotiated)
- ≤$1,000 conservative cash outlay **per deal and across simultaneous deals**.
- ≥25% target project contribution margin **after all direct project costs and reserve**.
- Goal $2,500 **realized monthly contribution**, not projected sales or valuation.
- Target founder oversight 1–2 hours/week **after** operations are validated/delegated; initial time will be higher.
- No outreach, bids, hiring, payments or contract signature without explicit human authorization.

## Maturity gates (buyer-readable)

| Gate | What must exist | Objective exit evidence | Status |
|---|---|---|---|
| **0. Concept documented** | Product charter, decision rules, UI and roadmap | Public repo & accessible Pages prototype | **Implemented** |
| **1. Credible prototype** | Evidence-first entry, hard finance tests, decision export, public research adapter | CI pass and deployed UI; browser QA remains open | **Partly implemented** |
| **2. Real market evidence** | 20 real sourced leads, five diligence dossiers, ≥2 written vendor quotes | Original notices + recorded false positives + owner time measured | **Not validated** |
| **3. First paid contribution** | A legitimate paid project sourced through Watchtower | Bank-reconciled receipts, actual direct expenses, written scope | **Not achieved** |
| **4. Secure operations** | Auth, protected database, server-held keys, auditable workflow | Auth/RLS tests, restore drill, source freshness and approvals | **Not built** |
| **5. Repeatable deal economics** | Multiple paid deals with verified vendor repeatability | Real conversion rates, collection lag, project margin, owner hours | **Not achieved** |
| **6. Transfer-ready asset** | Documented IP rights, deploy instructions, licensed dependencies, data-room package | Independent technical diligence + buyer-usable handover + commercial evidence | **Not prepared** |

## Track A — Practical deal revenue

### Sprint A1: Validate 20 opportunities (priority: critical)
- [ ] Manual sources: buyer-requested digital service scopes, authorized RFPs, relevant procurement.
- [ ] Capture valid original URL, issuer, posted/response dates, demand proof and qualification notes.
- [ ] Reject expired, spam, unsupported, high-touch and cash-heavy opportunities.
- [ ] Produce five structured dossiers; shortlist at least three candidate suppliers per promising deal when feasible.
- [ ] Obtain ≥2 genuine vendor quotes after owner-approved outreach, without accepting directory estimates as bids.
- [ ] Track research hours, response rates, sources, quote validity, price changes and owner attention.
- [ ] Test at least one owner-reviewed proposal pathway without assuming the project was won.

**Exit:** At least one credible, quote-backed, cash-compatible candidate or a documented pivot based on negative findings.

### Sprint A2: Execute one safe pilot
- [ ] Client-specific scope and acceptance conditions.
- [ ] Contract terms, refundable deposits, milestone liability and supplier obligations independently reviewed.
- [ ] Aggregate and per-deal peak cash exposure model; stage-specific reserve.
- [ ] Supplier references, deliverables, licensing/insurance and availability.
- [ ] Owner authorizes the actual proposal, contract and payments separately.
- [ ] Project acceptance recorded; cash receipt and direct expenses reconciled.
- [ ] Capture actual contribution, owner time and rework.

**Exit:** Realized cash-based contribution, even if small. No projection counts as win.

## Track B — Intelligence automation (keep intellectually adventurous)

### Sprint B1: GitHub Pages+Actions (current intermediary)
- [x] Public static frontend with explicit demo separation.
- [x] Deterministic underwriting engine and financial tests.
- [x] Evidence fields and government eligibility notes.
- [x] Hypothetical cash waterfall and a Markdown decision brief export.
- [x] Public-feed adapter code, GitHub Actions schedule, and sanitized read-only JSON schema.
- [ ] **Configure SAM.gov API key as a GitHub Actions secret**; run manual test; verify real data and freshness. Never commit key.
- [ ] End-to-end iPhone/desktop QA, real-source links, valid import behavior and offline failure states.
- [ ] Evidence-backed supplier comparison view with dates, quote references and independent sources.
- [ ] Detect stale feed/deadlines and implement false-positive feedback.

**Important:** Scheduled GitHub Actions may be delayed, source APIs can fail, and Pages is a public demo—not protected customer infrastructure.

### Sprint B2: Private backend
- [ ] Supabase Auth (or equivalent) with strong identity and RLS, private database, secure backups.
- [ ] Separate public-feed data, privately verified supplier records and confidential project/contract records.
- [ ] Backend ingestion, retries, deduplication, evidence provenance, source access policy.
- [ ] Payment schedule and **peak funding gap**, not just stage labels or deposit estimates.
- [ ] Versioned owner approvals, append-only audit events, external-action permission scopes.
- [ ] Controlled weekly brief and private notifications.

**Exit:** Independent security review of backend permissions, secrets, import path and audit.

### Sprint B3: Narrow research agents
- [ ] Schema-validated source normalizer; citation-first summaries; never invent amounts/dates.
- [ ] Supplier discovery agent using permitted data, source links and verification status.
- [ ] Government eligibility *flagger* (not attorney/eligibility certificate).
- [ ] Market-signal and venture-hypothesis agent; demand tests before software spend.
- [ ] Executive briefing agent: 5 items/week with explicit no-go recommendations and uncertainty.
- [ ] Human-only contract/bid/payment actions.
- [ ] Benchmark with ≥20 labeled real leads; track precision, time savings, cost/lead and errors.

## Track C — Commercialization or sale readiness

### Option 1: Asset acquisition
Sell code, documentation, brand assets where transferable, and legitimately owned IP through an asset purchase agreement. Buyer may want exclusivity and assignment of rights; specific customer data/third-party contracts need separate permissions.

### Option 2: White-label / enterprise license
License a secure hosted system to economic-development groups, small-business advisers or niche government contracting teams. Requires multi-tenant isolation, support commitments, privacy terms, reliable source permissions and production uptime.

### Option 3: Strategic integration
License the deal-scoring and supplier-evaluation workflow as a module to an existing procurement/CRM platform. Differentiate with *demonstrated* cash-flow underwriting and vendor execution loops rather than generic leads.

### Option 4: Revenue-share pilot
Operate for partners on preagreed, documented revenue share. Requires fee model, enforceable agreements, compliance/ethics assessment and evidence of real deal performance.

**Priority:** Validate revenue and ownership first; prepare the asset license pathway second. A concept or prompt alone rarely supports an attractive acquisition price.

## The sale-readiness scorecard

A potential buyer should receive:
1. Technical architecture, release tags, deployment instructions, passing tests and threat model.
2. IP ownership records: LLC assignments, contributor agreements, third-party open-source and data license register.
3. Exact rights being sold or licensed; distinction between brand, code, datasets, client relationships and trade secrets.
4. Product demo, feature matrix, limitations, documented backlog, security controls and support requirements.
5. Verified market funnel: leads → validated → quotes → proposals → wins → collected → contribution.
6. Actual vendor due diligence, performance history, permissions to transfer records and anonymized evidence.
7. Income/expense statements and cost-to-operate, **only when true**.
8. Trademarks/domain clearances and any infringement disputes after professional review.
9. Pricing/valuation rationale based on documented assets, adoption and profit—not speculative AI market size.
10. Buyer onboarding, transition SLA, credentials transfer and a support plan.

### Public code/IP caution
**This repository is currently public**. No license is granted by default, but outsiders can read the code and GitHub permits viewing/forking under its terms. Publicly revealed material generally cannot later be treated as a trade secret merely by making the repo private. Consider separating a **public demonstration repository** from a **private proprietary core** before adding unique supplier data, customer relationships, scoring know-how or other confidential differentiation. Evaluate visibility and Pages plan implications with GitHub settings. Seek legal advice on IP chain-of-title, trademark clearance and sale agreements.

## Kill / pivot criteria
- At 20 legitimate leads, no credible sourced opportunity satisfies the owner's available capital and time → narrow segment, adjust cash structures or change business model.
- Written vendor quotes eliminate projected ≥25% contribution → stop the packaging strategy for that segment.
- Owner repeatedly exceeds the 2-hour target despite delegation → budget a delivery manager or abandon high-touch deal categories.
- AI research does not improve accuracy/time over a simple spreadsheet → do not fund further agent complexity.

## Definition of success
Not UI metrics, simulated contract values, or model-generated opportunity scores. Success means repeatable paid contribution with defensible source evidence, manageable cash exposure, independently qualified delivery partners and documented founder time. Commercial sale readiness adds transferable rights, clean data provenance and a buyer-ready operating package.

See [Commercialization Strategy](COMMERCIALIZATION.md), [Asset Register](ASSET_REGISTER.md), [Source Adapter Setup](PUBLIC-FEED.md), [Product Charter](PRODUCT.md), and [Workflow](WORKFLOW.md).
