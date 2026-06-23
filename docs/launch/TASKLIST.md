# SpatioFos Launch Tasklist

Mark complete: `### [x]`. In progress: `### [~]`.  
Align tasks to [`LAUNCH_SPEC.md`](LAUNCH_SPEC.md) IDs.

**Repo status (implementation):** Engineering artifacts for W1–W3 are in place. Items marked `[x]` below have deliverables committed in this repository. Human gates (DNS, Resend domain, field dry-run, legal sign-off) remain open where noted.

---

## Week 1 — Foundation (Days 1–7)

### [ ] W1-01 | P0 | Launch planning — Finalise launch date and assign human owners
**Agent:** `@senior-project-manager`  
**Deliverable:** Dates filled in `LAUNCH_SPEC.md`

### [~] W1-02 | P0 | Legal — ACL claims audit
**Agent:** `@legal-compliance-checker`  
**Deliverable:** [`docs/ops/LEGAL_COMPLIANCE_CHECKLIST.md`](../ops/LEGAL_COMPLIANCE_CHECKLIST.md) signed off  
**Note:** Checklist created; founder + counsel sign-off pending.

### [x] W1-03 | P0 | Legal — Privacy + Terms pages live
**Agent:** `@frontend-developer`  
**Deliverable:** `/privacy`, `/terms` routes

### [x] W1-04 | P0 | Engineering — Lead API + Resend
**Agent:** `@backend-architect`  
**Deliverable:** `POST /api/leads`, forms wired, `RESEND_API_KEY` in Vercel  
**Note:** Code complete; set env vars in Vercel and verify Resend domain.

### [~] W1-05 | P0 | DevOps — Custom domain
**Agent:** `@devops-automator`  
**Deliverable:** [`docs/ops/DOMAIN_SETUP.md`](../ops/DOMAIN_SETUP.md) completed  
**Note:** Runbook written; DNS + SSL configuration pending.

### [x] W1-06 | P0 | GIS — Inspection SOP
**Agent:** `@drone-reality-mapping-specialist` + `@technical-consultant`  
**Deliverable:** [`docs/ops/INSPECTION_SOP.md`](../ops/INSPECTION_SOP.md)

### [x] W1-07 | P0 | Finance — Launch ledger + invoicing
**Agent:** `@finance-tracker`  
**Deliverable:** [`docs/ops/FINANCE_SETUP.md`](../ops/FINANCE_SETUP.md)

### [ ] W1-08 | P1 | Email — Live inboxes verified
**Agent:** `@email-intelligence-engineer`  
**Deliverable:** bookings / hello / enterprise receiving mail

---

## Week 2 — Pipeline + GTM (Days 8–14)

### [x] W2-01 | P0 | GIS — Defect taxonomy + severity rubric
**Agent:** `@geoai-ml-engineer`  
**Deliverable:** [`docs/ops/DEFECT_TAXONOMY.md`](../ops/DEFECT_TAXONOMY.md)

### [x] W2-02 | P0 | GIS — Report pipeline + PDF template
**Agent:** `@spatial-data-engineer`  
**Deliverable:** [`docs/ops/REPORT_PIPELINE.md`](../ops/REPORT_PIPELINE.md) + template in branding-kit  
**Note:** PDF template to be built in local `branding-kit/` (gitignored).

### [x] W2-03 | P0 | Sales — Outreach sequences
**Agent:** `@sales-outreach`  
**Deliverable:** [`docs/launch/sales/OUTREACH_SEQUENCES.md`](sales/OUTREACH_SEQUENCES.md)

### [x] W2-04 | P0 | Marketing — Launch content pack
**Agent:** `@content-creator` + `@growth-hacker`  
**Deliverable:** [`docs/launch/marketing/LAUNCH_CONTENT.md`](marketing/LAUNCH_CONTENT.md)

### [x] W2-05 | P0 | Support — Transactional email templates
**Agent:** `@support-responder`  
**Deliverable:** [`docs/launch/support/EMAIL_TEMPLATES.md`](support/EMAIL_TEMPLATES.md)

### [ ] W2-06 | P1 | SEO — First 2 editorial pieces drafted
**Agent:** `@content-creator`  
**Deliverable:** Drafts linked from TASKLIST comments or `/resources/blog`

### [ ] W2-07 | P1 | Portal — Minimal report delivery stub
**Agent:** `@frontend-developer` + `@backend-architect`  
**Deliverable:** Scoped MVP or deferred with sign-off  
**Note:** Deferred per P0 scope; `/app` remains coming soon.

---

## Week 3 — Hardening + Go-Live (Days 15–21)

### [ ] W3-01 | P0 | QA — Full site evidence pass
**Agent:** `@evidence-collector`  
**Deliverable:** Screenshots + notes in [`QA_LAUNCH_CHECKLIST.md`](QA_LAUNCH_CHECKLIST.md)

### [ ] W3-02 | P0 | QA — Reality Checker gate
**Agent:** `@reality-checker`  
**Deliverable:** PASS or documented exceptions in `QA_LAUNCH_CHECKLIST.md`

### [~] W3-03 | P0 | Security — API + PII review
**Agent:** `@legal-compliance-checker` + `@backend-architect`  
**Deliverable:** Rate limits, env secrets, privacy alignment  
**Note:** Rate limiting + validation in `app/api/leads/route.js`; production env audit pending.

### [~] W3-04 | P0 | Analytics — GA4 events
**Agent:** `@analytics-reporter`  
**Deliverable:** [`ANALYTICS_SETUP.md`](ANALYTICS_SETUP.md) + events firing  
**Note:** `form_submit`, `booking_click`, `generate_lead` wired; set `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

### [ ] W3-05 | P0 | Dry-run inspection
**Agent:** `@drone-reality-mapping-specialist`  
**Deliverable:** [`DRY_RUN_CHECKLIST.md`](DRY_RUN_CHECKLIST.md) completed

### [ ] W3-06 | P0 | Go-live
**Agent:** `@agents-orchestrator` + `@project-shepherd`  
**Deliverable:** [`GO_LIVE_RUNBOOK.md`](GO_LIVE_RUNBOOK.md) executed

### [ ] W3-07 | P1 | Feedback — First 5 inspection retros
**Agent:** `@product-manager`  
**Deliverable:** Notes in `docs/launch/feedback/`

---

## Post-launch

See [`WEEKLY_RHYTHM.md`](WEEKLY_RHYTHM.md).
