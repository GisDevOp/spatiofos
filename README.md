# SpatioFos Website

Marketing website for SpatioFos — an Inspection Intelligence Platform for South East Queensland.

**Tagline:** Spatial Intelligence. Real Impact.

## Stack

- Next.js 15 (App Router)
- JavaScript only (no TypeScript)
- Tailwind CSS v4
- Space Grotesk + Inter fonts

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project structure

- `app/` — Pages and routes
- `components/` — React components (home sections, layout, forms, UI)
- `lib/content.js` — Centralized copy, pricing, navigation, SEO data

## Active product (v1)

**Roof Intelligence** — `/solutions/roof-intelligence`

Launch pricing: Essential $199 (was $399), Premium $349 (was $699).

## Forms

Lead capture forms POST to `/api/leads` and notify via [Resend](https://resend.com) when `RESEND_API_KEY` is set:

- **Roof Score** — `/get-roof-score` → `type: roof-score`
- **Sample report** — `/resources/sample-reports` → `type: sample-report`

In development without Resend configured, submissions succeed locally and log to the server console.

## Environment

Copy `.env.example` to `.env.local` for local development. Set these in Vercel for production:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Send lead notification emails |
| `RESEND_FROM` | Verified sender address |
| `LEADS_EMAIL_HELLO` | Roof score / sample report inbox |
| `LEADS_EMAIL_BOOKINGS` | Booking inquiries inbox |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 measurement ID |

## Agentic launch workflow

SpatioFos uses [agency-agents](https://github.com/msitarzewski/agency-agents) (git submodule at `tools/agency-agents/`) with a curated Cursor rule roster in `.cursor/rules/`.

**Start here:**

1. Read [`AGENTS.md`](AGENTS.md) — org chart and escalation
2. Load [`.cursor/skills/spatiofos-launch-orchestrator/SKILL.md`](.cursor/skills/spatiofos-launch-orchestrator/SKILL.md) — routes work to agents with quality gates
3. Track work in [`docs/launch/TASKLIST.md`](docs/launch/TASKLIST.md) against [`docs/launch/LAUNCH_SPEC.md`](docs/launch/LAUNCH_SPEC.md)

Reinstall or update agent rules:

```bash
bash scripts/install-agency-agents.sh
```

Post-launch cadence: [`docs/launch/WEEKLY_RHYTHM.md`](docs/launch/WEEKLY_RHYTHM.md).

## Ops documentation

Field and business runbooks live under `docs/ops/` (inspection SOP, defect taxonomy, report pipeline, legal checklist, domain setup, finance).

## Assets

Add brand assets to `public/images/`:

- `SpatioFos_Logo.png`
- `SpatioFos_Banner.png`

## Manual setup

- Create and verify Google Business Profile for "SpatioFos" in Brisbane
- Replace placeholder email addresses with live inboxes before launch

## Editorial calendar

See `lib/content.js` → `editorialCalendar` for the 6-month SEO content roadmap.
