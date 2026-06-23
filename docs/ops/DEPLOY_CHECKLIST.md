# Production Deploy Checklist — spatiofos.com

**Agent:** `@devops-automator`  
**Goal:** Replace non-compliant live copy at [spatiofos.com](https://spatiofos.com) with this repo.

Ops cross-reference: `spatiofos-operations/docs/company/PRODUCTION_DRIFT.md`

---

## Pre-deploy

- [ ] `git status` clean on `main` (or your production branch)
- [ ] `npm run build` passes locally
- [ ] `lib/content.js` — `showTestimonials: false`, no 98% / court-admissible claims
- [ ] Legal review: ops `docs/company/LEGAL_COMPLIANCE_CHECKLIST.md`

---

## Vercel project

- [ ] Correct Git repo connected (`SpatioFos`)
- [ ] **Production branch** = branch you intend to ship
- [ ] Domain **primary:** `spatiofos.com`
- [ ] `www` → apex redirect configured (optional)

### Environment variables (Production)

| Variable | Required | Example |
|----------|----------|---------|
| `RESEND_API_KEY` | Yes | `re_...` |
| `RESEND_FROM` | Yes | `SpatioFos <hello@spatiofos.com>` |
| `LEADS_EMAIL_BOOKINGS` | Yes | `bookings@spatiofos.com` |
| `LEADS_EMAIL_HELLO` | Yes | `hello@spatiofos.com` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | P1 | `G-...` |

---

## Deploy

```bash
# Option A: push to production branch (Vercel auto-deploy)
git push origin main

# Option B: Vercel CLI
vercel --prod
```

- [ ] Deployment URL shows new build (check Vercel deployment hash / time)
- [ ] **Promote to production** if using preview first

---

## Post-deploy smoke test (production)

| Check | URL / action | Pass |
|-------|----------------|------|
| Homepage | `https://spatiofos.com` | [ ] Says **AI-assisted** (not "AI-Powered" / 98%) |
| Stats | Homepage | [ ] No 500+ / 98% stats; testimonials hidden |
| Workflow | Homepage process | [ ] Digital twin = roadmap, not step 4 |
| Privacy | `/privacy` | [ ] References `spatiofos.com` |
| Terms | `/terms` | [ ] |
| Roof score | `/get-roof-score` | [ ] Register interest wording |
| Booking form | `/contact` | [ ] Submit test → `bookings@spatiofos.com` |
| API | Network tab on form | [ ] `POST /api/leads` → 200, `emailed: true` |
| Sitemap | `/sitemap.xml` | [ ] URLs use `https://spatiofos.com` |
| Portal | `/app` | [ ] Coming soon (not live dashboard) |

---

## Rollback

Vercel → Deployments → previous deployment → **Promote to Production**

---

## After deploy

- [ ] Update ops `docs/TASKLIST.md` W1-02, W1-05 notes
- [ ] Re-run `@evidence-collector` on production URLs
- [ ] Mark W1-04 production email verified when Resend test passes
