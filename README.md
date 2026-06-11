# flawsdj.com

Official static-first artist website for Kai / **FLAWS DJ**.

This first deployable version is built for **Cloudflare Pages** with Astro, TypeScript and Tailwind CSS. The site intentionally avoids CMSs, databases, auth, server functions, Cloudflare Workers and heavy third-party embeds on initial load.

## Stack

- [Astro](https://astro.build/) with `output: "static"`
- TypeScript using Astro's strict config
- Tailwind CSS via the current Vite plugin flow (`@tailwindcss/vite`)
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

No Vercel configuration, server functions or Cloudflare Workers are required for this version.

## Content editing guidance

All placeholder content is local and easy to replace:

- Artist profile and SEO defaults: `src/data/artistProfile.ts`
- Social and music links: `src/data/links.ts`
- Releases and dynamic music pages: `src/data/releases.ts`
- Shows/events: `src/data/shows.ts`
- Videos: `src/data/videos.ts`
- Press quotes: `src/data/press.ts`
- EPK asset links: `src/data/epkAssets.ts`

Placeholder image paths are intentionally referenced but no real images are invented. Add approved assets under `public/images/` and update the relevant data file paths.

## Routes

- `/`
- `/music/`
- `/music/[slug]/`
- `/about/`
- `/shows/`
- `/epk/`
- `/contact/`

## Notes for launch

Before public launch, replace every value marked `PLACEHOLDER`, verify external music/social links, add approved photography/artwork, and replace placeholder contact labels with real approved contact details.
