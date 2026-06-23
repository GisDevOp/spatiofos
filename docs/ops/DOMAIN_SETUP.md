# Domain Setup — spatiofos.com

**Canonical domain:** `https://spatiofos.com`  
**Agent:** `@devops-automator`  
**Source of truth:** `lib/content.js` → `site.url`

---

## Vercel

1. Vercel project → **Settings → Domains**
2. Set **primary:** `spatiofos.com`
3. Add `www.spatiofos.com` (optional) and redirect to apex (recommended)
4. Remove or redirect legacy hosts (`spatiofos.vercel.app`, `spatiofos.com.au` if ever added)

---

## DNS (registrar)

| Type | Name | Value |
|------|------|-------|
| A | `@` | Vercel IP from dashboard (e.g. `76.76.21.21`) |
| CNAME | `www` | `cname.vercel-dns.com` |

---

## Verification

- [x] `https://spatiofos.com` loads (site live — **deploy compliant build from this repo**)
- [ ] Production serves **this** git branch (not stale marketing copy — see ops `PRODUCTION_DRIFT.md`)
- [ ] `www.spatiofos.com` resolves and redirects to apex (if used)
- [x] SSL certificate active on apex
- [x] `LocalBusinessSchema` uses `site.url`
- [x] `sitemap.xml` / `robots.txt` use `site.url`
- [ ] Resend domain verified for `spatiofos.com`
- [ ] MX/SPF/DKIM for `@spatiofos.com` mailboxes

---

## Redirect

Redirect `spatiofos.vercel.app` → `https://spatiofos.com` in Vercel.

If you own `spatiofos.com.au`, 301 redirect to `https://spatiofos.com`.

---

## Email DNS

Add MX, SPF, DKIM per provider — required for `bookings@spatiofos.com` deliverability.

See ops repo: `docs/company/EMAIL_INBOX_SETUP.md`.
