# FLAWS Website Content Guide

This site is a static-first Astro website for FLAWS. Keep content factual, approved and easy to maintain. Do not add invented release details, events, contact details, press quotes, asset links or integrations.

## Editing the artist biography

Edit `src/data/artistProfile.ts`:

- `shortBio` controls the shorter public / EPK biography.
- `longBio` controls the full press-ready biography paragraphs.
- `statement`, `highlights`, `location`, `origin` and `genres` drive supporting site copy.
- `bookingEmail`, `pressEmail` and `representation` drive public contact copy.
- `heroImage`, `portraitImage` and related alt text must reference files that exist in `public/images/...`.

Use “Kai Hickinson” only where the biography needs the real name. The front-facing brand is `FLAWS`.

## Editing social/contact links

Edit `src/data/links.ts` for approved public links. Current approved links are Instagram, Resident Advisor and Facebook.

Representation/contact details are in `src/data/artistProfile.ts`. The approved public email is `linda@parabelmusic.se` for Linda Nilsson / Parabel. Do not publish telephone numbers unless explicitly approved for public website use. Do not add a contact form or backend handling.

## Adding releases

Edit `src/data/releases.ts`:

- Add verified releases to `releases`.
- Include only confirmed title, year, label, status, summary, links and track list.
- Put approved release artwork in `public/images/releases/` and reference it with a root-relative path such as `/images/releases/example.jpg`.
- Release detail pages are generated from `src/pages/music/[slug].astro`.

Current verified release records are `Motion` and a grouped FLOAT Records 2020 EPs entry. Add individual FLOAT EP details only when verified.

## Adding mixes and live sets

Edit `src/data/releases.ts` and/or `src/data/videos.ts`:

- Add approved mixes or live recordings only when real URLs are supplied.
- Use external links rather than heavy embeds unless a future phase explicitly approves embeds.
- If thumbnails are supplied, place them in `public/images/releases/`, `public/images/press/` or another appropriate public image folder.

## Adding shows

Edit `src/data/shows.ts`:

- Add confirmed future events to `shows`.
- Add verified archive notes only when date, venue and city details are approved.
- This project does not scrape Resident Advisor and does not claim automatic sync.
- Resident Advisor remains an external source link for users.

## Adding press images and EPK assets

Edit `src/data/press.ts` and `src/data/epkAssets.ts`:

- Add approved press image metadata to `pressImages`.
- Place hero images in `public/images/hero/`.
- Place press images in `public/images/press/`.
- Place release artwork in `public/images/releases/`.
- Place EPK downloads such as ZIP files or PDFs in `public/downloads/`.
- Do not create fake download buttons. Leave the clean no-download note until approved files exist.

## Adding press quotes

Edit `src/data/press.ts`:

- Add quotes to `pressQuotes` only when wording and source are verified.
- Do not paraphrase or invent press coverage.

## Running locally

Install dependencies if needed:

```bash
npm install
```

Run the local dev server:

```bash
npm run dev
```

Build before deployment:

```bash
npm run build
```

Preview the production output:

```bash
npm run preview
```

## Cloudflare Pages deployment

Use these Cloudflare Pages settings:

- Build command: `npm run build`
- Output directory: `dist`
- Keep Astro output static.

Do not add Vercel-specific config, server functions, SSR-only features, a CMS, analytics scripts, newsletter integrations or scraping in this version.
