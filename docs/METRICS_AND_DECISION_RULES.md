# WATCHTOWER AI | Measurement contract and decision rules
**Status:** Definitions and empty schema, **not observed performance**.

## Funnel definitions (no double-counting)
| Metric | Definition / numerator | Denominator |
|---|---|---|
| Discovered lead | Unique opportunity with source URL, posted/observed date and buyer/issuer | Number by source and period |
| Verified demand | Original-source buyer need checked with timestamped note; not a trend article | Discovered leads |
| Qualified | Real demand, in-scope delivery, plausible partner and applicable restrictions reviewed | Verified leads |
| Written vendor quote | Real dated supplier response naming price, scope and validity | Supplier requests approved/sent |
| Approved proposal | Owner explicitly permits preparing/sending a specific proposal under distinct approval steps | Qualified proposals prepared |
| Won deal | Signed engagement / purchase order, not a verbal promise | Proposals actually submitted |
| Paid deal | Customer funds **actually received**, recorded in a private, reconcilable ledger | Won deals |
| Realized contribution | Collected receipts less direct project expenses actually paid/incurred, with appropriate adjustments for refunds and open obligations | Paid deals |
| Research pilot | Actual paid engagement with an agreed scope | Prospects approached |
| Retained research client | Active paying renewal after initial pilot | Pilot customers eligible to renew |

## Financial guardrails
- Pre-decision contribution forecast = contract amount – direct supplier cost – other direct costs – contingency. **Unknown material inputs block decision.**
- Conservative capital screen = upfront vendor outlay + other upfront cash + reserve. Never assume a proposed client deposit is risk-free.
- **Important known model gap:** the current public UI does NOT model every committed obligation, milestone liability, refund risk, cash lag or downside scenario. The active-exposure prototype uses stages, not a true commitments ledger. Keep real committed amounts in a **private manual ledger** and do not rely on the dashboard alone to authorize payments.
- Actual outstanding commitments can persist after a contract's status changes; exposure must be released by evidence of settlement, not stage labels or optimism.
- For service delivery, accrued/unpaid vendor invoices and refunds can make cash-only 'received minus paid' numbers temporarily overstate economic contribution. Report collected cash, direct costs incurred, unpaid obligations, and adjusted economic result separately.
- No projected client receipt can be counted as realized contribution. A cash waterfall is a scenario, not a financial guarantee.
- Always include customer acquisition cost, fixed overhead and owner time in operating-profit analysis.

## Owner-time accounting
Time categories:
1. Discovery and source checking
2. Supplier sourcing, due diligence and quotes
3. Buyer outreach, sales and proposal writing
4. Delivery oversight, fixes and disputes
5. Collections, invoicing and accounting
6. Platform development and administration
7. Research service client delivery

Record time in minutes and associate with a deal or pilot where relevant; a monthly total without task attribution hides expensive tasks.

**Core ratios:**
- Verification minutes per confirmed opportunity.
- Founder hours per paid deal and per retained research client.
- **Realized contribution per founder hour** = realized contribution / founder operating hours, with founder time separated from platform build time.
- Source-to-qualified percentage, qualified-to-proposal percentage, proposal-to-win percentage.
- Collected cash lag (days between contract/milestone and funds received).
- Quote-to-actual direct cost variance.
- Reported disputes/refunds and source errors.
- Revenue concentration and cancellations for recurring research fees.

## Kill / narrow / scale rules
- **After 20 verified candidates:** if zero quote-backed, cash-compatible demand, document the failure and change segment/source; do not invest in autonomous agents.
- **After 5–10 prospect conversations:** if nobody will pay for a bounded research pilot, revise the offer and pricing before building multi-tenant SaaS.
- **On any deal:** if source, buyer, eligible execution structure, written quote or cash timing is unknown, do research only—do not approve spend.
- **After any paid pilot:** if founder time, refunds, quality complaints or actual contribution fail the case, stop expansion and analyze causes.
- **Before expansion:** repeat a positive result, verify independence from one unusually favorable client, and document legitimate data-use rights.

## Evidence quality
Use four explicit labels: **DEMO**, **HYPOTHESIS**, **OWNER-REPORTED**, and **INDEPENDENTLY VERIFIED**. The prototype can collect owner-reported notes but cannot independently verify them. Keep supporting documents private, and record a redacted source reference or artifact ID in public-safe research.

## Monthly review template (fill with actual records only)
- Period:
- Leads discovered / verified / qualified / quoted / proposed / won / collected:
- Research pilots proposed / sold / renewed:
- Gross revenue invoiced / gross cash collected:
- Actual direct expenses paid / accrued but unpaid:
- Realized contribution (cash) / adjusted contribution (including accrued obligations):
- Fixed overhead and pre-tax operating profit:
- Peak actual capital at risk and refundable deposit exposure:
- Founder hours by category / contribution per founder hour:
- Biggest source errors / failed gates / buyer objections:
- Decision to proceed / narrow / stop and owner authorization:
