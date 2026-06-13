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

Lead capture forms are UI placeholders in v1. Submit shows a local success state with no network calls. Wire to API/email in v2.

## Environment (future)

Copy `.env.example` when integrating backend services:

```
NEXT_PUBLIC_MAPBOX_TOKEN=
RESEND_API_KEY=
DATABASE_URL=
```

## Assets

Add brand assets to `public/images/`:

- `SpatioFos_Logo.png`
- `SpatioFos_Banner.png`

## Manual setup

- Create and verify Google Business Profile for "SpatioFos" in Brisbane
- Replace placeholder email addresses with live inboxes before launch

## Editorial calendar

See `lib/content.js` → `editorialCalendar` for the 6-month SEO content roadmap.
