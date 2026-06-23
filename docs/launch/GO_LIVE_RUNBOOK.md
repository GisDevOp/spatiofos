# Go-Live Runbook

**Agents:** `@agents-orchestrator`, `@project-shepherd`  
**Launch window:** _______________

---

## T-7 days

- [ ] `TASKLIST` Week 1–2 items complete or explicitly deferred
- [ ] `LEGAL_COMPLIANCE_CHECKLIST` signed off
- [ ] Dry-run inspection scheduled

---

## T-3 days

- [ ] `QA_LAUNCH_CHECKLIST` evidence collected
- [ ] `@reality-checker` PASS (or documented exceptions)
- [ ] GA4 firing (if P1)
- [ ] Domain live or comms plan for vercel.app

---

## T-1 day

- [ ] Resend `RESEND_API_KEY` set in Vercel production
- [ ] Test booking email end-to-end on production URL
- [ ] Pilot + equipment ready for first paid job
- [ ] Support templates copied to mail client

---

## Launch day (T-0)

| Time | Action | Owner |
|------|--------|-------|
| 08:00 | Final smoke test: forms + homepage | Founder |
| 09:00 | Publish launch post (LinkedIn) | Founder |
| 09:30 | Google Business post (if live) | Founder |
| 10:00 | Send Sequence A emails to warm list | Founder |
| All day | Monitor bookings@ inbox | Founder |

---

## T+1

- [ ] Log metrics in `METRICS_LOG.md`
- [ ] `@project-shepherd` standup: blockers + week 1 post-launch priorities
- [ ] Customer feedback capture started

---

## Rollback

If critical form failure:

1. Add site banner: "Booking via email: bookings@spatiofos.com"
2. Fix API; re-run QA checklist item
3. Do not revert ethics copy fixes

---

## Announcement text (internal)

"SpatioFos Roof Intelligence is live for SEQ residential bookings. Essential $199 / Premium $349. All field work per INSPECTION_SOP.md."
