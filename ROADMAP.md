# FLAWS Website Roadmap

Last updated: 31 July 2026

## Current position

The site has moved beyond initial construction and is now in stakeholder-led refinement and release assurance.

Completed foundations include:

- static Astro architecture for Cloudflare Pages;
- approved biography, representation and contact details;
- approved photography, logo assets and release artwork;
- EPK media presentation and downloads;
- typed release and event data;
- verified Resident Advisor archive dates;
- metadata, structured data, sitemap, privacy page and branded 404 page;
- automated production-build checks;
- Kai's first content-decluttering feedback;
- the accepted interactive, photography-led homepage direction.

## Current package — SoundCloud playlist experience

Status: **implemented for review**

Stakeholder requirement:

> Reduce the friction created by separate “Load SoundCloud player” buttons on the Music page.

Implemented outcome:

- one page-level control enables both SoundCloud playlists together;
- the visitor's choice is stored in browser local storage;
- both players load automatically on later visits in the same browser;
- the saved choice can be cleared from the Music page;
- audio remains configured not to autoplay;
- direct SoundCloud fallback links remain available;
- privacy and repository documentation reflect the behaviour.

Validation before merge:

- run `npm ci` and `npm run build`;
- test the Music page on desktop and mobile;
- confirm one activation loads both playlists;
- refresh and confirm both playlists load automatically;
- disable automatic loading and confirm the page returns to the disconnected state;
- test normal, private-browsing and blocked-storage behaviour;
- keyboard-test both controls and the embedded players;
- verify no audio starts automatically;
- review the Cloudflare Pages preview.

## Next phase — Post-feedback release assurance

The next controlled phase should verify the accepted site as a complete launch candidate rather than introduce another broad redesign.

### Functional assurance

- Verify every internal route, homepage destination and external link.
- Confirm SoundCloud players and direct fallbacks.
- Confirm event ordering and Resident Advisor links.
- Confirm EPK image viewing and downloads.
- Confirm booking and representation links.
- Confirm the custom 404 recovery routes.

### Responsive and interaction assurance

- Review homepage, Music, About, Gigs, EPK and Contact on mobile, tablet and desktop.
- Keyboard-test navigation, interactive homepage rows, controls and embedded players.
- Verify visible focus states.
- Verify touch alternatives where hover is unavailable.
- Verify `prefers-reduced-motion` behaviour.
- Check for unexpected layout movement and horizontal overflow.

### Content and identity assurance

- Confirm biography currency with Kai.
- Confirm representation email and agency profile.
- Confirm release summaries and artwork.
- Confirm all published event records remain factual and current.
- Review alt text and public-facing labels.

### SEO and deployment assurance

- Verify titles, descriptions, canonical URLs and Open Graph images.
- Verify `MusicGroup` and `MusicEvent` structured data.
- Verify sitemap, robots metadata and 404 `noindex` handling.
- Complete the Cloudflare Pages and domain steps in `LAUNCH.md`.
- Verify `flawsdj.com`, HTTPS and the `www` redirect after deployment.

## Later, only when justified

- Extend the homepage interaction language to Music, Gigs or EPK where it improves discovery rather than adding decoration.
- Add confirmed upcoming shows through the existing unified event model.
- Add verified release titles, track lists and listen/buy links.
- Add press quotations only when the source and wording are approved.
- Add downloadable EPK PDFs, riders or ZIP packs only when supplied and approved.
- Process new binary media in small asset-only pull requests.

## Out of scope for launch v1

- CMS, database, authentication or user accounts;
- backend event scraping or undocumented Resident Advisor integration;
- autoplaying audio;
- scroll-jacking, custom cursors or heavy animation frameworks;
- invented content used to fill known gaps.
