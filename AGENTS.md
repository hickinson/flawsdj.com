# Agent instructions for flawsdj.com

## Framework choice

- This repository is a static-first Astro artist website for Kai / FLAWS DJ.
- Use Astro, TypeScript and Tailwind CSS.
- Do not use Next.js.
- Tailwind is configured through `@tailwindcss/vite` in `astro.config.mjs`.

## Repo structure

- `src/pages/` contains route files.
- `src/layouts/BaseLayout.astro` contains shared document structure and SEO metadata output.
- `src/components/` contains reusable presentation components.
- `src/data/` contains approved local content, intentionally empty collections and media metadata for the artist profile, links, releases, shows, videos, press and EPK assets.
- `src/utils/shows.ts` validates, sorts and maps event data to structured data.
- `src/styles/global.css` contains Tailwind import, theme tokens and global atmosphere styles.
- `public/` contains static files such as `robots.txt`, `_headers` and approved web-ready image/download assets.

## Build and test commands

- Install dependencies: `npm install`
- Run locally: `npm run dev`
- Build production output: `npm run build`
- Preview production output: `npm run preview`

## Cloudflare deployment constraints

- Hosting target is Cloudflare Pages.
- Keep `output: "static"` in `astro.config.mjs`.
- Cloudflare Pages build command: `npm run build`.
- Cloudflare Pages output directory: `dist`.
- Do not add Cloudflare Workers, server functions or runtime-only features for this version.
- Do not add Vercel-specific files or configuration.

## Content and asset rules

- Do not add invented releases, shows, quotes, venues, labels, links, contacts, achievements, catalogue details or image assets.
- Keep intentional empty states factual and visitor-facing; never expose internal PR, checkout, build or asset-workflow language in public components.
- Do not publish telephone numbers unless explicitly approved.
- Keep binary images and PDFs in small, dedicated asset PRs rather than mixing them into broad code/content PRs.
- Verify that local image paths exist before emitting image elements, Open Graph metadata or structured-data image URLs.
- Keep all confirmed RA and non-RA events in the single `shows` collection.
- Never scrape Resident Advisor or call undocumented event endpoints.
- Use valid `YYYY-MM-DD` dates and direct approved URLs; do not store `TBC` as a date or maintain a manual `isPast` flag.

## Do-not-overengineer rules

- Do not add a CMS, database, authentication or admin system.
- Prefer local TypeScript data files over extra tooling.
- SoundCloud embeds are approved only through the privacy-aware click-to-load components; do not add automatically loaded third-party players.
- Keep an accessible external SoundCloud fallback link for every embedded player.
- Keep components small, readable and static-friendly.
