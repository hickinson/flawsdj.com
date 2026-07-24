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

## Editing public destinations

Edit `src/data/links.ts` for approved public links.

The data is grouped by purpose so that playlists, articles and booking pages do not appear automatically on every surface:

- `socialLinks` drives the footer and general official-profile presentation.
- `officialProfileLinks` drives `sameAs` structured data.
- `musicDestinations` drives the SoundCloud playlist players on the Music page.
- `pressFeatures` drives approved editorial features.
- `bookingLinks` and `contactLinks` drive the Contact page.
- `epkLinks` drives the professional-links panel on the EPK page.

Store canonical destinations without clipboard, referral or campaign tracking parameters. Do not change the destination meaning.

Representation/contact details are in `src/data/artistProfile.ts`. The approved public email is `linda@parabelmusic.se` for Linda Nilsson / Parabel. Do not publish telephone numbers unless explicitly approved for public website use. Do not add a contact form or backend handling.

## SoundCloud players

The Music page uses approved click-to-load SoundCloud playlist embeds:

- `src/components/SoundCloudPlayers.astro` controls the section layout.
- `src/components/SoundCloudEmbed.astro` builds the official player URL and loads the iframe only after the visitor chooses to do so.
- The main FLAWS profile remains available through the homepage listening action and official-profile links rather than a third embedded block.
- Every player must retain an accessible external SoundCloud fallback link.
- Do not enable autoplay.
- Do not replace the click-to-load behaviour with automatically loaded third-party iframes without a new privacy and performance review.
- Keep the `/privacy/` disclosure accurate whenever third-party services change.

## Adding releases

Edit `src/data/releases.ts`:

- Add verified releases to `releases`.
- Include only confirmed title, year, label, status, summary, links and track list.
- Put approved release artwork in `public/images/releases/`.
- Use `artwork` and `artworkAlt` for a single cover image.
- Use `artworks` for an approved multi-cover collection; the shared `ReleaseArtwork.astro` component will present it as a collage.
- Use exact case-sensitive root-relative paths such as `/images/releases/Motion1.jpg`.
- Release detail pages are generated from `src/pages/music/[slug].astro`.

Current verified release records are `Motion` and a grouped FLOAT Records 2020 EPs entry. Add individual FLOAT EP details only when verified.

## Adding mixes and live sets

Edit `src/data/releases.ts` and/or `src/data/videos.ts`:

- Add approved mixes or live recordings only when real URLs are supplied.
- Use lightweight external links unless a specific SoundCloud destination has been approved for the existing click-to-load embed pattern.
- If thumbnails are supplied, place them in `public/images/releases/`, `public/images/press/` or another appropriate public image folder.

## Adding shows

Edit the single `shows` collection in `src/data/shows.ts`. Use the shared `Show` type in `src/data/types.ts`.

Required fields:

- `id`: a stable, URL-safe identifier.
- `startDate`: a valid date in `YYYY-MM-DD` format.
- `title`: the published event or billing title.
- `city`: the confirmed city.
- `venue`: the confirmed venue.

Optional fields:

- `endDate`: the final date of a multi-day event, also in `YYYY-MM-DD` format.
- `country`: the published country name or code.
- `status`: `scheduled`, `sold-out`, `cancelled` or `postponed`.
- `ticketUrl`: the official ticket destination.
- `eventUrl`: an official event or promoter destination.
- `raUrl`: the direct Resident Advisor event URL.
- `source`: `resident-advisor`, `official`, `promoter` or `manual`; this is internal metadata and is not rendered.

Handling rules:

- Add only confirmed and approved event records.
- Use the same schema for RA and non-RA events.
- Do not add `isPast`; upcoming and past events are derived automatically from the date.
- Do not put `TBC` or free text into `startDate`; wait for a confirmed date before publishing the record.
- Use `raUrl` only for a direct RA event page, not the general artist profile.
- Prefer `ticketUrl` for ticketing and `eventUrl` for non-ticket event information.
- The shared card prioritises Tickets, then Event details, then Resident Advisor.
- Cancelled, postponed and sold-out statuses remain visible and suppress misleading ticket actions.
- Upcoming records generate `MusicEvent` JSON-LD from the same local data.
- This project does not scrape Resident Advisor and does not claim automatic sync.

The static build validates date values. An invalid date should fail the build rather than publish broken `<time>` or structured-data output.

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
