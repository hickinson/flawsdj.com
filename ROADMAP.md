# FLAWS Website Roadmap

Last updated: 31 July 2026

## Current position

The main construction and stakeholder-feedback phases are complete. The site is now in final release assurance and domain launch.

Completed work includes:

- static Astro architecture for Cloudflare Pages;
- approved biography, representation and contact details;
- approved photography, logo assets and release artwork;
- EPK media presentation and image downloads;
- typed release and unified event data;
- five verified Resident Advisor archive dates;
- metadata, structured data, sitemap, privacy page and branded 404 page;
- automated production-build checks;
- Kai's content-decluttering feedback;
- the accepted interactive, photography-led homepage;
- one remembered SoundCloud choice that loads both playlists together without autoplay;
- semantic page-heading hardening across the principal routes;
- a connected Cloudflare Pages project and reviewed `pages.dev` deployment.

## Current release package — launch copy and documentation alignment

This package completes the remaining low-risk content and project-control work identified during release assurance.

Implemented outcomes:

- removes maintenance and approval-workflow wording from visitor-facing release, feature, EPK and contact copy;
- removes empty track-list panels rather than publishing unavailable-data messages;
- makes the homepage Gigs status match the current absence of announced future dates;
- aligns `AGENTS.md` with the accepted first-visit and returning-visit SoundCloud behaviour;
- updates this roadmap to reflect the launch phase;
- updates `LAUNCH.md` for the connected public repository, active Pages project and final hostname redirects.

Validation for this package:

- run `npm ci` and `npm run build`;
- review the Cloudflare branch preview;
- check the homepage, Music release cards and both release-detail pages;
- check About, EPK and Contact copy;
- confirm empty track-list sections are not rendered;
- confirm no biography, release, event, link, SoundCloud or binary-asset data has changed.

## Next phase — domain cutover and final launch verification

### Final Pages assurance

- Confirm the latest `main` build and Cloudflare production deployment succeed.
- Complete a final mobile, tablet and desktop review.
- Keyboard-test navigation, homepage interactions, SoundCloud controls and downloads.
- Verify every internal route, external destination and EPK image download.
- Verify titles, descriptions, canonical URLs, Open Graph images, structured data, sitemap, robots metadata and 404 handling.

### Production domain

- Add `flawsdj.com` to the Pages project's custom domains.
- Complete Cloudflare zone, nameserver, DNS and certificate activation where required.
- Configure `www.flawsdj.com` to redirect permanently to the matching apex path.
- Redirect the production `flawsdjdotcom.pages.dev` hostname to the matching apex path after the custom domain is active.
- Verify HTTPS, canonical-domain output, redirects and public smoke tests.
- Record the production URL and launch date in `README.md`.

## Later, only when justified

- Extend the homepage interaction language to Music, Gigs or EPK where it improves discovery rather than adding decoration.
- Add confirmed upcoming shows through the existing unified event model.
- Add verified release titles, track lists and listen/buy links.
- Add press quotations only when their source and wording are approved.
- Add downloadable EPK PDFs, riders or ZIP packs only when supplied and approved.
- Process new binary media in small asset-only pull requests.
- Consider an event-date rebuild reminder or scheduled deployment once upcoming shows are published.

## Out of scope for launch v1

- CMS, database, authentication or user accounts;
- backend event scraping or undocumented Resident Advisor integration;
- autoplaying audio;
- scroll-jacking, custom cursors or heavy animation frameworks;
- invented content used to fill known gaps.
