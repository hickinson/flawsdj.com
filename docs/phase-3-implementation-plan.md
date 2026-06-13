# Phase 3 Implementation Plan — Content Completion

## Current structure

The site is a static Astro / TypeScript / Tailwind build for Cloudflare Pages. Phase 2 created the main routes, shared layout, reusable components, and typed content files under `src/data`.

Key content surfaces:

- `src/data/artistProfile.ts` — biography, artist metadata, default SEO.
- `src/data/links.ts` — approved public profile links.
- `src/data/releases.ts` — releases and mix/live-set data.
- `src/data/shows.ts` — manually maintained show/event data.
- `src/data/press.ts` — press images and quote data.
- `src/data/epkAssets.ts` — downloadable EPK assets.
- `src/components/*` and `src/pages/*` — visible page rendering.

## Current strengths

- The visual system is already minimal, dark, editorial and appropriate for FLAWS.
- Routes are simple and Cloudflare Pages-compatible.
- Content is separated from templates and easy to maintain.
- SEO and structured data foundations exist.

## Obvious gaps identified

- Several Phase 2 empty states still used `PLACEHOLDER`, `pending`, `TBC`, or Phase 2-specific wording in visible copy and data files.
- Approved press imagery was not yet referenced by the site.
- Contact/booking copy did not yet use the supplied representation email.
- Mixes, events and music-platform links were represented by placeholder records rather than clean empty states.
- Documentation still referred to replacing placeholder content rather than maintaining a real Phase 3 content baseline.

## Proposed changes

1. Replace placeholder data with real biography, representation, social links, release facts and press imagery from the supplied promotional materials.
2. Remove fake/future music platform records, fake mix cards and fake event cards.
3. Add tasteful empty states where approved data is genuinely missing.
4. Add optimised, repository-safe press/hero assets generated only from supplied FLAWS imagery.
5. Update visible components so they show real images where available and never render missing image paths or empty links.
6. Update SEO, EPK and README/CONTENT documentation for a launch-ready v1.

## Files expected to change

- `CONTENT.md`
- `README.md`
- `src/data/artistProfile.ts`
- `src/data/links.ts`
- `src/data/releases.ts`
- `src/data/shows.ts`
- `src/data/press.ts`
- `src/data/epkAssets.ts`
- `src/data/videos.ts`
- `src/components/Hero.astro`
- `src/components/BioSection.astro`
- `src/components/MusicLinks.astro`
- `src/components/ReleaseCard.astro`
- `src/components/LatestRelease.astro`
- `src/components/VideoFeature.astro`
- `src/components/ShowsList.astro`
- `src/components/ContactCta.astro`
- `src/components/EpkPreview.astro`
- `src/pages/music/index.astro`
- `src/pages/music/[slug].astro`
- `src/pages/contact.astro`
- `src/pages/epk.astro`
- `public/images/hero/*`
- `public/images/press/*`
