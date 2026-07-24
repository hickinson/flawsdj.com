# flawsdj.com

Official static-first artist website and EPK for **FLAWS**.

This pre-launch v1 is built for **Cloudflare Pages** with Astro, TypeScript and Tailwind CSS. It uses only approved local content. Do not add invented releases, shows, quotes, contacts, links or imagery.

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
- Approved social, music, press and booking destinations: `src/data/links.ts`
- Releases and generated music pages: `src/data/releases.ts`
- Shows/events and supporting notes: `src/data/shows.ts`
- Mix/live-set records: `src/data/videos.ts` and `src/data/releases.ts`
- Press images and quote records: `src/data/press.ts`
- Downloadable EPK assets: `src/data/epkAssets.ts`

Approved public assets are stored under:

- `public/brand/`
- `public/images/hero/`
- `public/images/press/`
- `public/images/releases/`
- `public/images/misc/`
- `public/downloads/`

Keep binary media in small, dedicated asset PRs. Do not combine large image or PDF additions with broad code/content changes.

## SoundCloud players

The Music page uses official SoundCloud embedded players for the approved releases/collaborations and podcasts/interviews playlists. The main profile remains available through the homepage listening action and official-profile links. Players are click-to-load rather than loaded during the initial page request. This protects initial performance and gives visitors a clear choice before their browser connects to SoundCloud.

- Player destinations are managed in `src/data/links.ts`.
- Player presentation and loading behaviour are managed by `src/components/SoundCloudEmbed.astro` and `src/components/SoundCloudPlayers.astro`.
- Keep the external SoundCloud fallback link for every player.
- The privacy disclosure is published at `/privacy/`.

## Events architecture

All confirmed dates live in the single typed `shows` collection in `src/data/shows.ts`.

- Resident Advisor and non-RA events use the same `Show` type and shared rendering components.
- Dates use the strict `YYYY-MM-DD` format and are validated during the static build.
- Upcoming and past lists are derived automatically rather than stored with an `isPast` flag.
- RA listings use `raUrl`; ticketing and other official destinations use `ticketUrl` and `eventUrl`.
- The source field is internal metadata and is not shown to visitors.
- Upcoming events generate `MusicEvent` structured data from the same local records.
- The site does not scrape Resident Advisor or depend on an undocumented event feed.

## Routes

- `/`
- `/music/`
- `/music/[slug]/`
- `/about/`
- `/shows/`
- `/epk/`
- `/contact/`
- `/privacy/`

## Launch content status

Included:

- Approved FLAWS biography facts.
- Approved SoundCloud, Instagram, Resident Advisor and Facebook profiles.
- Embedded SoundCloud destinations for releases/labels/collaborations and podcasts/interviews.
- Approved Substack feature link.
- Approved Parabel agency profile and representation email for Linda Nilsson / Parabel.
- Verified release facts and approved cover artwork for `Motion` and the grouped FLOAT Records 2020 EPs.
- Web-ready hero, portrait, press and live photography with safe missing-asset handling.
- Direct EPK image downloads using approved local photography.
- Production-ready black, white and square-avatar SVG brand assets.
- Privacy disclosure and click-to-load handling for third-party SoundCloud players.
- Unified RA and non-RA event architecture with automatic sorting and structured data.

Still missing until supplied, verified and approved for publication:

- Individual FLOAT EP titles, track lists and external listen/buy links.
- Confirmed upcoming event records and verified archive details.
- Press quotes and publication references beyond the approved feature link.
- Downloadable EPK PDFs, ZIP packs, technical riders or hospitality riders.
- Production Cloudflare Pages deployment and final domain/DNS validation.

Never add fake content to fill these gaps. Intentional empty states should remain factual and visitor-facing.
