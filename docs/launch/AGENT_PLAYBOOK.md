# SpatioFos Agent Playbook

Copy-paste prompts for Cursor. Always attach context: `docs/launch/LAUNCH_SPEC.md`, `docs/launch/TASKLIST.md`.

---

## Orchestration

### Daily standup
```
@project-shepherd Review docs/launch/TASKLIST.md. List blocked items, today's P0 focus, and which agent should own each open task. Do not add scope outside LAUNCH_SPEC P0.
```

### Full pipeline (large feature)
```
@agents-orchestrator Execute launch pipeline for docs/launch/LAUNCH_SPEC.md: senior-project-manager → implementer → evidence-collector per TASKLIST item. Max 3 retries per task.
```

---

## Week 1

### Planning
```
@senior-project-manager Read docs/launch/LAUNCH_SPEC.md and convert P0 requirements into dated tasks in docs/launch/TASKLIST.md. Quote exact requirements — no platform MVP scope.
```

### Legal
```
@legal-compliance-checker Audit lib/content.js and all app/ pages against Australian Consumer Law. Update docs/ops/LEGAL_COMPLIANCE_CHECKLIST.md with findings and required fixes.
```

### Forms + API
```
@backend-architect Implement POST /api/leads with Resend for roof-score, sample-report, and booking types. Wire RoofScoreForm and SampleReportForm. Document env vars in .env.example.
```

### Domain
```
@devops-automator Guide spatiofos.com DNS on Vercel per docs/ops/DOMAIN_SETUP.md. Verify SSL and redirects from spatiofos.vercel.app.
```

### Inspection SOP
```
@drone-reality-mapping-specialist Draft docs/ops/INSPECTION_SOP.md for SEQ residential roof capture: pre-flight, RTK, weather limits, deliverables, 24hr target SLA handoff to report team.
```

### Finance
```
@finance-tracker Create docs/ops/FINANCE_SETUP.md: launch pricing ledger, invoice fields, GST notes for AU, Xero/QuickBooks setup steps.
```

---

## Week 2

### Defect taxonomy
```
@geoai-ml-engineer Create docs/ops/DEFECT_TAXONOMY.md aligned to Roof Intelligence reports: categories, severity (critical/moderate/low), photo requirements, maintenance recommendations.
```

### Report pipeline
```
@spatial-data-engineer Document docs/ops/REPORT_PIPELINE.md: ortho → AI assist → human review → PDF using branding-kit templates. Include file naming and QA gate.
```

### Sales
```
@sales-outreach Write docs/launch/sales/OUTREACH_SEQUENCES.md for SEQ strata managers and homeowners post-storm: 3-touch email + LinkedIn sequence with discovery questions.
```

### Marketing
```
@content-creator Produce docs/launch/marketing/LAUNCH_CONTENT.md: homepage launch post, Google Business description, 2 location page hooks for Brisbane and Gold Coast.
```

### Support emails
```
@support-responder Write docs/launch/support/EMAIL_TEMPLATES.md: booking confirmation, inspection scheduled, report delivered, enquiry received.
```

---

## Week 3

### QA evidence
```
@evidence-collector Test all forms, mobile CTA bar, pricing CTAs, and key routes. Document screenshots and issues in docs/launch/QA_LAUNCH_CHECKLIST.md.
```

### Launch gate
```
@reality-checker Certify production readiness against docs/launch/LAUNCH_SPEC.md P0. Default NEEDS WORK unless evidence proves otherwise. Update QA_LAUNCH_CHECKLIST.md.
```

### Analytics
```
@analytics-reporter Implement GA4 per docs/launch/ANALYTICS_SETUP.md: form_submit, book_inspection_click, pricing_tier_view.
```

### Go-live
```
@agents-orchestrator Run docs/launch/GO_LIVE_RUNBOOK.md step by step. Confirm each P0 checkbox before announcing launch.
```

---

## GIS / technical

```
@technical-consultant Review Asset Intelligence roadmap vs Week 1–3 P0. Ensure we are not over-promising digital twin or platform features on the marketing site.
```

```
@web-gis-developer Spec minimal defect map export for PDF reports (static image from GeoJSON). Defer live dashboard to post-launch.
```

---

## Scope guard (use when agents drift)

```
@product-manager Reject any task not listed as P0 or P1 in docs/launch/LAUNCH_SPEC.md. Move platform MVP items to post-launch backlog.
```
