# Product charter — Watchtower AI

## Why it exists
Build a private deal-orchestration desk for MLive Digital Solutions LLC. Research demand, identify executing firms, screen economics and risks, and leave owner with only the highest-quality approvals. Hunting good deals and building independent intellectual property should be intellectually stimulating without creating a full-time job.

## User limits
- Per-deal peak *conservative* cash exposure <= $1,000.
- Across simultaneously active deals: total exposure <= $1,000.
- Target: $2,500 per month *realized contribution* after direct costs, before operating overhead, tax and owner compensation.
- Owner time target <= 2 hrs/week after onboarding; early vendor work will realistically take longer.
- Digital service 60%, public procurement 25%, AI venture research 15%.

## MVP acceptance criteria
1. User can create and edit an opportunity with source URL, buyer, dates, category, terms and assumptions.
2. Demo records and verified personal records are visually distinguished; **demo counts never imply real earnings**.
3. User can add vendor profiles and compare matched skills, location, verification, quote and availability.
4. Cost calculator reports revenue, direct cost, contingency, contribution, gross contribution %, and conservative cash exposure.
5. Four hard gates can block decision: source/buyer, vendor & quote, economics/cash, and compliance/terms.
6. User can explicitly approve *research only* or reject, with local audit history; the app never claims to send messages or place bids.
7. Dashboard shows realized contribution only when actual cash receipts and expenses are recorded, otherwise zero.
8. User can download JSON backup and restore (strict shape validation).
9. Keyboard-operable responsive navigation and accessible form labels.
10. No secrets or private info in the public repository or Pages scripts.

## Scope separation
- **Deal Hunter:** validated private-sector requests, remote delivery, fixed scope, client deposit or milestone before outsourcing payments.
- **Contract Hunter:** publicly posted government contracts; flag set-asides, NAICS, deadlines, small-business participation requirements and limitations on subcontracting.
- **Venture Hunter:** problem hypotheses; no build before proof of customer interest. Venture test spending above $100 requires separate owner approval.

## Score vs gates
Research priority score: verified demand 25, contribution 20, cashflow 20, vendor coverage 15, owner time 10, evidence 10. High score is *not* permission to act. Unknowns are penalized; gates always override.

## Explicit non-features
No real-time SAM.gov connection yet, no autonomous outreach, no private login, no vendor vetting certification, no contract submission, no guaranteed financing, no legally binding approval, no business banking integration.
