# flawsdj.com

Official static-first artist website and EPK for **FLAWS**.

This launch-ready v1 is built for **Cloudflare Pages** with Astro, TypeScript and Tailwind CSS. It uses only approved local content and supplied promotional imagery. Do not add invented releases, shows, quotes, contacts, links or imagery.

## Stack

- [Astro](https://astro.build/) with `output: "static"`
- TypeScript using Astro's strict config
- Tailwind CSS via `@tailwindcss/vite`
- `@astrojs/sitemap` for sitemap generation
- Static hosting on Cloudflare Pages

## Local setup

```sh
npm install
npm run dev
```

Astro will print a local development URL, usually `http://localhost:4321`.

## Build

```sh
npm run build
```

The production output is written to `dist/`.

Preview a production build locally with:

```sh
npm run preview
```

## Cloudflare Pages deployment

Use the standard Cloudflare Pages static-site settings:

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** repository root
- **Node.js version:** `22` or newer

No Vercel configuration, server functions, SSR, Cloudflare Workers, CMS, database or authentication are required for this version.

## Content editing guidance

Real content lives in local TypeScript data files:

- Artist profile, biography, contact email and SEO defaults: `src/data/artistProfile.ts`
- Approved social links: `src/data/links.ts`
- Releases and generated music pages: `src/data/releases.ts`
- Shows/events and manual data notes: `src/data/shows.ts`
- Mix/live-set records: `src/data/videos.ts` and `src/data/releases.ts`
- Press images and quote records: `src/data/press.ts`
- Downloadable EPK assets: `src/data/epkAssets.ts`

Approved public assets are stored under:

- `public/images/hero/`
- `public/images/press/`
- `public/images/releases/`
- `public/images/misc/`
- `public/downloads/`

## Routes

- `/`
- `/music/`
- `/music/[slug]/`
- `/about/`
- `/shows/`
- `/epk/`
- `/contact/`

## Launch content status

Included:

- Approved FLAWS biography facts.
- Approved Instagram, Resident Advisor and Facebook links.
- Approved representation email for Linda Nilsson / Parabel.
- Verified release facts for `Motion` and the grouped FLOAT Records 2020 EPs.
- Supplied hero, press portrait and live images.

Still missing until supplied and approved:

- Individual FLOAT EP titles, artwork, track lists and external listen/buy links.
- Approved mixes or live recordings.
- Confirmed upcoming event cards and verified archive details.
- Press quotes and publication references.
- Downloadable EPK PDFs, ZIPs, logo packs or riders.

Never add fake content to fill these gaps. Empty states are intentional and should remain factual.
