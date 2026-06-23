# Analytics Setup — GA4

**Agent:** `@analytics-reporter`

---

## Environment

Add to Vercel production:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Implementation: [`components/analytics/GoogleAnalytics.jsx`](../../components/analytics/GoogleAnalytics.jsx) in root layout.

---

## Recommended events

| Event | Trigger | Parameters |
|-------|---------|------------|
| `form_submit` | Lead API success | `form_type`: roof-score, sample-report |
| `book_inspection_click` | Pricing CTA / mobile CTA | `location`: header, pricing, mobile_bar |
| `generate_lead` | GA4 recommended | `value`, `currency` optional |

---

## Conversions (GA4 admin)

Mark as conversions:

- `form_submit`
- `generate_lead`

---

## Verification

1. Install [Google Analytics Debugger](https://chrome.google.com/webstore) or Tag Assistant
2. Submit test form on staging/production
3. Check Realtime report

---

## Weekly review

See `WEEKLY_RHYTHM.md` — Tuesday `@analytics-reporter` reviews funnel:

Visitors → form submit → booking email → inspection confirmed

Log in `docs/launch/METRICS_LOG.md`.
