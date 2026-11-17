# WATCHTOWER AI | Public vs. private information boundary

The repository and Pages deployment are public. Local browser storage is neither encrypted nor a managed business database; clearing it can permanently remove research data.

## Safe to publish here
- Synthetic demo opportunities and vendors, static UI, publicly licensed or original code.
- Public procurement notices with correct attribution and API redistribution rights.
- General product strategy, technical interfaces, *non-sensitive* test data and documented decision rules.
- Sanitized aggregate performance metrics **after evidence supports them and publication is approved**.

## Must NOT be committed, published, or pasted into the public demo
- Actual vendor pricing agreements, client proposals, unpublished buyer request details, identity verification documents.
- Names, emails, phone numbers, client notes or other private contact records without lawful purpose and permission.
- API keys, login credentials, SAM.gov keys, bank details or access tokens.
- Unpublished deal strategies, proprietary scoring experiments, sensitive matching methods or private customer datasets.
- Financial ledgers, signed agreements, NDA material, privileged legal advice or nonpublic supplier evaluation.

## Immediate data-control tasks
1. Make a **private, access-controlled evidence repository** or secure business document store for actual source snapshots, quote records, private financial and time logs. The public repository should contain templates only.
2. Keep identifiers in public-facing demonstrations fictional. Do not accidentally export private browser data into public GitHub commits.
3. Retain proof of source licenses, supplier permission, buyer communication and quote issuance.
4. Before allowing additional team members, define owner / reviewer / analyst permissions and audit events.
5. Establish regular private backups, retention and deletion policy, and a migration process to the production backend.
6. If sensitive information is accidentally pushed to public GitHub, assume it was exposed, revoke affected secrets immediately and follow an incident response process; history rewriting alone does not guarantee removal from copies.

## Future buyer / enterprise conditions
- Independently verified RLS and access-control tests, confidential source artifacts separated from public notice feeds.
- Export/deletion controls, data-processing agreements where necessary and clear data ownership.
- Explicit rights to transfer client/supplier records at asset sale; do not assume a buyer inherits personal data or existing contracts.
- Controlled publishing workflow that rejects secrets/PII and avoids publishing an entire repository tree when private material could enter it.
