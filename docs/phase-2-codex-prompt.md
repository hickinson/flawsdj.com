Act as a senior front-end architect, Astro developer, Tailwind CSS specialist, creative technologist, UX designer, SEO specialist, accessibility reviewer and Cloudflare Pages deployment expert.

We are entering Phase 2 of the official artist website build for FLAWS.

Repository:
https://github.com/hickinson/flawsdj.com.git

Hosting target:
Cloudflare Pages.

Current status:
The Astro site already runs locally. Phase 1 created the working structure. Phase 2 is focused on design refinement, brand identity, content integration, SEO, accessibility, performance and public-launch polish.

Important:
This is a Cloudflare Pages static Astro site. Do not introduce Vercel-specific code, adapters, assumptions, analytics or deployment settings.

Before editing:
1. Inspect the repository structure.
2. Read `docs/phase-2-content-pack.md`.
3. Inspect the current data files under `src/data`.
4. Inspect current pages, layouts and components.
5. Produce a short implementation plan before making changes.

Primary goal:
Transform the existing starter site into a high-end, minimal, fast-loading official artist website for FLAWS, a hypnotic / deep techno DJ and producer.

Brand:
- Artist name: FLAWS
- Real name for biography only: Kai Hickinson
- Type: DJ / Producer
- Genre / identity: hypnotic, deep, rhythm-led techno
- The site should feel minimal, luxury, underground, serious and editorial.
- Directional references: Berghain, DVS1, high-end fashion editorial, minimal techno labels.
- Avoid EDM clichés, generic club visuals, neon overload, unnecessary animation or template-like layouts.

Visual direction:
- Black / near-black foundation
- Off-white typography
- Soft grey accents
- Subtle grain or texture if lightweight
- Large imagery
- Strong typography
- Tight, confident spacing
- Editorial composition
- No clutter
- Everything intentional

Typography:
Use a clean sans-serif direction similar to Neue Haas / Inter. If using web fonts would add unnecessary complexity, use a strong system/font-stack approach or existing project font setup. Prioritise performance.

Core pages:
- Homepage
- Biography / About
- Music
- Gigs
- Press / Media / EPK
- Contact / Booking

Homepage requirements:
This is the most important page.

Above the fold:
- Fullscreen or near-fullscreen hero using the latest supplied press shot if available.
- Artist name: FLAWS
- Subtext: DJ / Producer
- Minimal, confident CTA links:
  - Listen
  - Gigs
  - EPK
  - Booking
- Optional subtle grain/motion only if lightweight and tasteful.

Homepage scroll sections:
1. Latest Releases
2. Latest Mixes
3. Upcoming Shows
4. Featured Press / Media image
5. Contact / booking prompt

Biography page:
Use the supplied biography content from `docs/phase-2-content-pack.md`.

Create:
- Short bio for quick reading.
- Long press-ready bio.
- Strong opening section.
- Clear sections covering:
  - UK origins
  - early influences
  - production/DJ development
  - FLAWS moniker
  - DVS1/Berghain influence
  - Eerste Communie residency
  - Platform 22
  - FLOAT Records
  - international development
  - current Netherlands base

Do not invent facts. Only use supplied content.

Music page:
Create a clean structure for:
- Releases
- DJ mixes
- Live sets

Use supplied links if present. If release/mix data is missing, create the data structure and tasteful empty states without making the artist look inactive.

Gigs page:
Create a clean layout for:
- Upcoming events
- Past events/archive

Important:
Do not implement scraping. Do not claim Resident Advisor auto-sync works unless an official, reliable integration is implemented and tested.

For now:
- Use manually maintained `shows` data.
- Include the RA artist link as an external source.
- Add a clear TODO/comment or documentation note explaining that RA auto-sync requires a future integration decision.

Press / Media / EPK page:
This should be one of the strongest pages.

Include:
- Short bio
- Long bio
- Press shots grid
- Download links if assets exist
- Music links
- Social links
- Booking/contact details
- Selected highlights if supplied
- External links to RA, Instagram, Facebook etc.
- Clear section for downloadable EPK assets if supplied

If ZIP or high-res downloads are not supplied yet, build the page structure ready for them but do not fake files.

Contact / Booking page:
Create a clean minimal page with:
- Booking contact
- Representation details if approved in the content pack
- General contact
- Social links
- Promo submission note if supplied

Do not add a backend form unless explicitly instructed. If there is no backend, use mailto links or a simple non-functional placeholder clearly documented as needing a form backend later.

SEO requirements:
Target keyword:
- FLAWS DJ

Support:
- FLAWS
- FLAWS techno
- FLAWS DJ & Producer

Implement:
- Page title: “FLAWS | DJ & Producer”
- Unique meta descriptions for all main pages
- Good heading hierarchy
- Image alt text
- Open Graph metadata if the current architecture supports it
- Structured data for a MusicGroup or Person/performing artist where appropriate
- Clean, non-spammy copy

Accessibility:
Ensure:
- Good contrast
- Keyboard focus states
- Semantic HTML
- Meaningful alt text
- Logical heading order
- Clear mobile navigation
- No hover-only essential information

Performance:
Keep it lightweight:
- Static-first Astro
- No unnecessary JavaScript
- No heavy animation libraries
- Optimised image usage
- No unnecessary dependencies
- `npm run build` must pass

Cloudflare Pages:
Keep:
- Build command: `npm run build`
- Output directory: `dist`
- Static output
- No server-only code

Data structure:
Use or improve existing files under `src/data`, likely:
- `artistProfile.ts`
- `links.ts`
- `releases.ts`
- `shows.ts`
- `videos.ts`
- `press.ts`
- `epkAssets.ts`

The data should be:
- typed
- easy to edit
- simple
- suitable for non-developer updates
- not over-engineered

Documentation:
Update or create:
- `CONTENT.md`

Explain:
- where to edit biography
- where to edit social links
- where to add releases
- where to add mixes
- where to add shows
- where to add press images
- where to place assets
- how to run locally
- how to build before deployment
- which integrations are future-phase items

Implementation constraints:
- Do not invent factual claims.
- Do not invent release dates, venues, labels, press quotes or achievements.
- Do not publish private contact details unless the content pack marks them as approved for publication.
- Do not implement RA scraping.
- Do not implement SMTP/contact backend yet unless the repo already has a safe static-compatible pattern.
- Do not add a CMS yet. Prepare the structure so a CMS can be added later.
- Do not add Google Analytics yet unless explicitly requested. Add a documented placeholder only.

Quality checks:
After changes:
1. Run `npm install` only if dependencies changed.
2. Run `npm run build`.
3. Fix build errors.
4. Provide a final summary.

Final response should include:
- What changed
- Files changed
- Design improvements
- Content integrated
- Any assumptions
- Missing content still needed
- Commands to test locally
- Cloudflare Pages deployment reminder
