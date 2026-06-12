# Phase 2 Codex Prompt — FLAWS Official Website

Act as a senior front-end architect, Astro developer, Tailwind CSS specialist, creative technologist, UX designer, SEO specialist, accessibility reviewer and Cloudflare Pages deployment expert.

We are entering Phase 2 of the official artist website build for FLAWS.

## Repository

https://github.com/hickinson/flawsdj.com.git

## Hosting Target

Cloudflare Pages.

## Current Status

The Astro site already runs locally. Phase 1 created the working structure. Phase 2 is focused on:

* design refinement
* brand identity
* content integration
* SEO
* accessibility
* performance
* mobile responsiveness
* public-launch polish

## Important Hosting Constraint

This is a Cloudflare Pages static Astro site.

Do not introduce:

* Vercel-specific code
* Vercel adapters
* Vercel analytics
* serverless assumptions
* unnecessary SSR
* unnecessary backend functionality

Keep deployment compatible with:

* build command: `npm run build`
* output directory: `dist`

## Before Editing

Before changing files:

1. Inspect the repository structure.
2. Read `docs/phase-2-content-pack.md`.
3. Inspect `package.json`.
4. Inspect `astro.config.mjs`.
5. Inspect any Tailwind configuration.
6. Inspect `src/pages`.
7. Inspect `src/components`.
8. Inspect `src/layouts`.
9. Inspect `src/data`.
10. Inspect `public`.

Then produce a short implementation plan covering:

* current structure
* current strengths
* obvious gaps
* proposed changes
* files you expect to modify

After that, implement the changes.

## Primary Goal

Transform the existing starter site into a high-end, minimal, fast-loading official artist website for FLAWS, a hypnotic / deep / rhythm-led techno DJ and producer.

The site should feel like a proper official artist website, not a Linktree clone and not a generic web template.

## Brand

Artist name:

* FLAWS

Real name for biography only:

* Kai Hickinson

Type:

* DJ / Producer

Genre / identity:

* hypnotic techno
* deep techno
* rhythm-led techno
* underground techno

The site should feel:

* minimal
* luxury
* underground
* serious
* editorial
* atmospheric
* music-first
* credible

Directional references:

* Berghain
* DVS1
* high-end fashion editorial
* minimal techno labels
* underground European techno culture

Avoid:

* EDM clichés
* neon overload
* generic nightclub imagery
* visual clutter
* gimmicky animation
* template-like layouts

## Visual Direction

Use:

* black / near-black foundation
* off-white typography
* soft grey accents
* subtle grain or texture if lightweight
* large imagery
* strong typography
* tight, confident spacing
* editorial composition
* minimal page furniture
* clear hierarchy
* intentional empty space

Everything should feel deliberate.

## Typography

Use a clean sans-serif direction similar to Neue Haas / Inter.

If web fonts would add unnecessary complexity, use a strong system or existing font stack. Prioritise performance and consistency.

## Core Pages

The site should include or improve these pages:

* Homepage
* Biography / About
* Music
* Gigs
* Press / Media / EPK
* Contact / Booking

If the existing routes use slightly different names, keep the structure simple and avoid duplication.

## Homepage Requirements

The homepage is the most important page.

### Above the Fold

Create a strong hero section with:

* full-screen or near-full-screen layout
* approved hero / press image if available
* artist name: `FLAWS`
* subtext: `DJ / Producer`
* minimal CTA links:

  * Listen
  * Gigs
  * EPK
  * Booking

Optional:

* subtle grain
* subtle image treatment
* subtle transitions

Do not add heavy animation libraries.

### Homepage Sections

Include:

1. Latest Releases
2. Latest Mixes
3. Upcoming Shows
4. Featured Press / Media Image
5. Booking / EPK CTA

If real content is missing, use tasteful empty states or structure the section ready for content. Do not make the artist look inactive.

## Biography Page

Use the supplied biography content from:

`docs/phase-2-content-pack.md`

Create:

* short bio
* long press-ready bio
* strong opening section
* clear readable layout
* editorial pacing
* image placement if approved images exist

Cover:

* UK origins
* early influences
* production/DJ development
* FLAWS moniker
* DVS1 / Berghain influence
* Eerste Communie residency
* Platform 22
* FLOAT Records
* international development
* current Netherlands base

Do not invent facts.

## Music Page

Create a clean structure for:

* releases
* DJ mixes
* live sets

Support:

* artwork
* title
* date
* label
* description
* streaming links
* purchase links
* detail pages if already supported

Use supplied links if present.

If data is missing, create a tasteful structure and empty states rather than invented content.

## Gigs Page

Create a clean structure for:

* upcoming events
* past events / archive
* Resident Advisor profile link

Important:

Do not implement Resident Advisor scraping.

Do not claim Resident Advisor auto-sync works unless an official, reliable integration is implemented and tested.

For Phase 2:

* use manually maintained `shows` data
* include the RA artist link as an external source
* add a documentation note explaining that RA auto-sync is a future integration decision

## Press / Media / EPK Page

This should be one of the strongest pages.

Include:

* artist overview
* short bio
* long bio
* press image grid
* download links if approved assets exist
* music links if supplied
* social links
* booking/contact area
* selected highlights if supplied
* Resident Advisor link
* clear EPK structure

If ZIP or high-resolution download files are not supplied, build the section ready for them but do not fake file downloads.

## Contact / Booking Page

Create a clean minimal page supporting:

* booking enquiries
* press enquiries
* general contact
* promo submissions if supplied later
* social links

Do not add a backend form unless explicitly instructed.

If there is no backend, use mailto links only where approved or create a clear static contact section.

Do not publish private phone numbers or email addresses unless `docs/phase-2-content-pack.md` explicitly marks them as approved for public use.

## SEO Requirements

Target keyword:

* FLAWS DJ

Support:

* FLAWS
* FLAWS techno
* FLAWS DJ & Producer
* FLAWS music

Implement:

* homepage title: `FLAWS | DJ & Producer`
* unique meta descriptions for all main pages
* logical heading hierarchy
* image alt text
* Open Graph metadata if supported by the existing architecture
* structured data for a performing artist / music artist if simple and appropriate
* natural language, no keyword stuffing

## Accessibility Requirements

Ensure:

* good colour contrast
* keyboard focus states
* semantic HTML
* meaningful alt text
* logical heading order
* accessible navigation
* mobile navigation works clearly
* no essential information is hidden behind hover-only interactions

## Performance Requirements

Keep the site lightweight.

Use:

* static-first Astro patterns
* minimal JavaScript
* minimal dependencies
* responsive image handling
* clean CSS / Tailwind usage

Avoid:

* heavy animation libraries
* unnecessary client-side scripts
* excessive embeds above the fold
* huge unoptimised images in critical layout
* backend dependencies

## Cloudflare Pages Requirements

Keep the deployment simple and static.

Expected production settings:

* production branch: `main`
* build command: `npm run build`
* output directory: `dist`

Do not introduce server-only code.

Do not introduce Vercel-specific files or assumptions.

## Data Structure

Use or improve existing data files under `src/data`, likely including:

* `artistProfile.ts`
* `links.ts`
* `releases.ts`
* `shows.ts`
* `videos.ts`
* `press.ts`
* `epkAssets.ts`

The data structure should be:

* typed
* simple
* easy to edit
* suitable for non-developer updates
* not over-engineered

If new data fields are needed, add them carefully and update the consuming components/pages.

## Asset Handling

Use approved images and artwork from `public`.

Preferred folders:

* `public/images/hero/`
* `public/images/press/`
* `public/images/releases/`
* `public/images/misc/`
* `public/downloads/`

Use meaningful filenames and alt text.

Do not distort images.

Do not rely on random external image URLs.

If images are missing, use layout placeholders only where necessary and document what assets are still needed.

## Documentation

Create or update:

* `CONTENT.md`

Explain in plain English:

* where to edit the artist bio
* where to edit social links
* where to add releases
* where to add mixes
* where to add shows
* where to add press images
* where to place assets
* how to run the site locally
* how to build before deployment
* which features are future-phase integrations

## Implementation Constraints

Do not invent:

* factual claims
* release dates
* venues
* labels
* press quotes
* achievements
* contact details
* social links
* music links

Do not build yet:

* Resident Advisor scraping
* SMTP form backend
* CMS
* password-protected promo page
* newsletter platform integration
* Google Analytics
* heavy animation system
* SSR unless required

Prepare the structure for future features, but keep Phase 2 focused on a polished launchable static site.

## Quality Checks

After making changes:

1. Run `npm install` only if dependencies changed.
2. Run `npm run build`.
3. Fix all build errors.
4. If there is a lint or typecheck script, run it.
5. Fix any errors introduced by the changes.

## Final Response Required

At the end, provide:

* summary of what changed
* design improvements
* content integrated
* files changed
* assumptions made
* missing content still needed
* commands to test locally
* Cloudflare Pages deployment reminder

## Design Quality Bar

The finished result should feel like a credible, launchable v1 official artist website for FLAWS.

It should be:

* minimal
* premium
* underground
* atmospheric
* mobile-first
* fast
* accessible
* SEO-aware
* easy to maintain
* useful for fans, promoters, venues, press and collaborators

Prefer clean, understandable components and data files over clever abstractions.
