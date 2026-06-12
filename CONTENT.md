# FLAWS Website Content Guide

This site is a static-first Astro website for FLAWS. Keep content factual, approved and easy to maintain. Do not add invented release details, events, contact details, press quotes or integrations.

## Editing the artist biography

Edit `src/data/artistProfile.ts`:

- `shortBio` controls the shorter public / EPK biography.
- `longBio` controls the full press-ready biography paragraphs.
- `statement`, `highlights`, `location`, `origin` and `genres` drive supporting site copy.

Use “Kai Hickinson” only where the biography needs the real name. The front-facing brand is `FLAWS`.

## Editing social links

Edit `src/data/links.ts`:

- `primaryLinks` and `socialLinks` contain approved public links.
- Current approved links are Instagram, Resident Advisor and Facebook.
- `futureMusicLinks` documents expected future music platforms. Replace placeholders only when approved URLs are supplied.

## Adding releases

Edit `src/data/releases.ts`:

- Add verified releases to `releases`.
- Include only confirmed title, year, label, status, summary, links and track list.
- Put approved release artwork in `public/images/releases/` and reference it with a root-relative path such as `/images/releases/example.jpg`.
- Release detail pages are generated from `src/pages/music/[slug].astro`.

## Adding mixes and live sets

Edit `src/data/releases.ts`:

- Add approved mixes or live recordings to `mixes`.
- Use external links rather than heavy embeds unless a future phase explicitly approves embeds.
- If artwork or thumbnails are supplied, place them in `public/images/releases/` or `public/images/videos/`.

## Adding shows

Edit `src/data/shows.ts`:

- Add confirmed future events to `shows`.
- Add verified archive notes to `pastShowNotes`.
- This project does not scrape Resident Advisor and does not claim auto-sync.
- Resident Advisor auto-sync is a future integration decision only if an official, reliable and tested integration is approved.

## Adding press images and EPK assets

Edit `src/data/press.ts` and `src/data/epkAssets.ts`:

- Add approved press image metadata to `pressImages`.
- Place hero images in `public/images/hero/`.
- Place press images in `public/images/press/`.
- Place EPK downloads such as ZIP files or PDFs in `public/downloads/`.
- Do not create fake download links. Leave `isPlaceholder: true` until files exist and are approved.

## Adding press quotes

Edit `src/data/press.ts`:

- Add quotes to `pressQuotes` only when wording and source are verified.
- Do not paraphrase or invent press coverage.

## Contact details

Contact and booking details are intentionally not published in Phase 2 because no public email address was approved in the content pack.

When an address is approved:

- Add it to the appropriate contact component or data file.
- Use `mailto:` links only for public, approved addresses.
- Do not add a backend form unless a future phase explicitly approves it.

## Asset folders

Preferred folders:

- `public/images/hero/`
- `public/images/press/`
- `public/images/releases/`
- `public/images/videos/`
- `public/images/misc/`
- `public/downloads/`

Use meaningful filenames, compress images before committing, and add meaningful alt text in the relevant data file or component.

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
