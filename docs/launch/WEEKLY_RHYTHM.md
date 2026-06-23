# SpatioFos Weekly Operating Rhythm (Post-Launch)

After go-live, run this cadence. Update [`TASKLIST.md`](TASKLIST.md) or a rolling `docs/launch/BACKLOG.md` for non-urgent work.

---

## Weekly schedule

| Day | Agent | Prompt |
|-----|-------|--------|
| **Monday** | `@project-shepherd` | Review open tasks, inspection calendar, blockers. Output 3 priorities for the week. |
| **Tuesday** | `@analytics-reporter` | Summarise leads, form conversions, booking emails. Compare to prior week. |
| **Wednesday** | `@content-creator` | Draft 1 piece from `lib/content.js` editorialCalendar or location SEO update. |
| **Thursday** | `@sales-outreach` | Follow up open pipeline; log outcomes in CRM or `docs/launch/sales/PIPELINE.md`. |
| **Friday** | `@reality-checker` | Spot-check site claims vs evidence after any copy/deploy change. |

---

## Monthly

| When | Agent | Task |
|------|-------|------|
| 1st week | `@gis-technical-consultant` | Review field data maturity vs platform roadmap |
| 1st week | `@finance-tracker` | Reconcile inspections invoiced vs flown |
| Quarterly | `@legal-compliance-checker` | ACL + insurance/CASA documentation refresh |

---

## Triggers (ad-hoc)

| Event | Agent |
|-------|-------|
| New feature on website | `@reality-checker` + `@legal-compliance-checker` |
| Customer complaint | `@support-responder` |
| Production incident | `@devops-automator` |
| New defect class found in field | `@geoai-ml-engineer` → update `DEFECT_TAXONOMY.md` |

---

## Optional automation

When stable, create a **Cursor Automation** (Monday 8am AEST):

- **Trigger:** Schedule weekly  
- **Tools:** Read repo files  
- **Prompt:** Read `docs/launch/TASKLIST.md` and `docs/launch/sales/PIPELINE.md`; post standup summary with blocked items and suggested agent assignments per `AGENT_PLAYBOOK.md`.

See Cursor Automations UI or `automate` skill for setup.

---

## Metrics to track

- Leads / week (roof score + sample report + contact)
- Bookings confirmed / week
- Inspections flown / week
- Reports delivered within 24hr target / %
- Revenue (Essential vs Premium mix)

Log in `docs/launch/METRICS_LOG.md` (create first Tuesday after launch).
