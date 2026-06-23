# SpatioFos Launch Specification — Asset Intelligence Go-Live

**Target:** 21 days from kickoff  
**Launch date (fill in):** _______________  
**Product:** Roof Intelligence (commercial)  
**Brand:** SpatioFos Asset Intelligence™

---

## P0 — Must ship (launch blockers)

| ID | Requirement | Acceptance criteria |
|----|-------------|---------------------|
| P0-1 | Bookable inspections | Site forms POST to `/api/leads`; booking enquiries reach `bookings@spatiofos.com` |
| P0-2 | Compliant marketing | No unsubstantiated stats, fake testimonials, or court-admissible claims (`showTestimonials: false`) |
| P0-3 | Field SOP | Documented capture → process → report workflow with 24hr **target** SLA |
| P0-4 | Report deliverable | PDF template + defect taxonomy; at least one dry-run report |
| P0-5 | Legal pages | Privacy policy + terms published on site |
| P0-6 | Domain | `spatiofos.com` on Vercel (or documented blocker) |
| P0-7 | Credentials | RePL-licensed pilots, CASA-aligned ops, public liability insurance documented internally |
| P0-8 | Finance | Invoice template + pricing ledger for $199 / $349 launch tiers |

---

## P1 — Stretch (week 2–3)

| ID | Requirement | Notes |
|----|-------------|-------|
| P1-1 | GA4 analytics | Form submit + pricing CTA events |
| P1-2 | Google Business Profile | Submitted, pending verification |
| P1-3 | Client report link | Password/link delivery (minimal portal) |
| P1-4 | 2 SEO articles | From `lib/content.js` editorial calendar |

---

## Out of scope (post-launch)

- Full Asset Intelligence Platform (GIS dashboard, digital twin SaaS)
- Predictive maintenance automation
- Portfolio analytics dashboard
- Native mobile apps
- Aviation / infrastructure product lines

---

## SLAs (customer-facing — use “target” language)

| Metric | Target |
|--------|--------|
| Report turnaround | 24 hours from capture (target) |
| Booking response | Within 4 business hours |
| General enquiry | Within 1 business day |

---

## Pricing (launch)

| Tier | Launch | Standard |
|------|--------|----------|
| Residential Essential | $199 | $399 |
| Residential Premium | $349 | $699 |

---

## Compliance boundaries

- Do **not** guarantee insurer acceptance, court admissibility, or detection accuracy %.
- Use: AI-**assisted**, insurance-**structured**, RePL-**licensed**, CASA-**aligned**.
- Roof Intelligence Score remains “register interest” until automated scoring ships.

---

## Success (day 21)

- [ ] Paid booking received and fulfilled end-to-end
- [ ] Dry-run + at least 1 paying or pilot customer inspection completed
- [ ] Agent workflow in daily use (`TASKLIST` + weekly rhythm)
