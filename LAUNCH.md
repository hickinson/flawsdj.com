# FLAWS website launch runbook

This runbook covers the production deployment and verification of the static Astro website on Cloudflare Pages.

## Current launch position

The public GitHub repository `hickinson/flawsdj.com` is connected to the Cloudflare Pages project `flawsdjdotcom`. Production and pull-request preview deployments are working, and the initial `pages.dev` deployment has been reviewed successfully.

The remaining launch work is the final release-assurance preview, custom apex domain, DNS, HTTPS and hostname redirects. Treat these steps as incomplete until the public hostnames have been tested from an external network.

## 1. Confirm the connected Pages project

In the Cloudflare dashboard, open **Workers & Pages** and select `flawsdjdotcom`.

Confirm these settings:

- Production branch: `main`
- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: blank / repository root
- Node.js: `22`, also pinned by `.node-version`
- Automatic production deployments: enabled for `main`
- Preview deployments: enabled for pull-request branches

Do not add a Cloudflare adapter, Pages Functions, Workers or server-side rendering. This site builds to static files.

## 2. Validate the final Pages deployment

Before attaching the custom domain, open the latest `flawsdjdotcom.pages.dev` production deployment and check:

- `/`
- `/music/`
- `/music/motion/`
- `/music/float-records-2020-eps/`
- `/about/`
- `/shows/`
- `/epk/`
- `/contact/`
- `/privacy/`
- a deliberately invalid URL to confirm the custom 404 page

Also confirm:

- the mobile navigation opens and all links work;
- the two SoundCloud players load only after first-use activation, restore from a saved choice on later visits and do not autoplay;
- all release, press and hero images load without layout errors;
- Resident Advisor, SoundCloud, Substack and Parabel links reach the intended destinations;
- direct EPK image downloads work;
- keyboard focus remains visible throughout the site;
- no horizontal overflow appears at mobile, tablet or desktop widths;
- the site remains usable at 200% browser zoom and with reduced motion enabled.

## 3. Attach the apex domain

In the Pages project:

1. Open **Custom domains**.
2. Add `flawsdj.com`.
3. Follow Cloudflare's activation steps.
4. If the domain is not already an active Cloudflare zone, update the registrar nameservers to the nameservers provided by Cloudflare.
5. Wait for DNS and certificate activation to complete.

The site configuration, canonical URLs, sitemap and robots file already use `https://flawsdj.com` as the production origin.

## 4. Redirect the `www` hostname

Use `flawsdj.com` as the canonical hostname.

Cloudflare Pages `_redirects` files do not support domain-level redirects. Configure an account-level Bulk Redirect with:

- Source: `www.flawsdj.com`
- Target: `https://flawsdj.com`
- Status: `301`
- Preserve query string: enabled
- Subpath matching: enabled
- Preserve path suffix: enabled

Create the proxied DNS record required for the redirect:

- Type: `A`
- Name: `www`
- IPv4 address: `192.0.2.1`
- Proxy status: proxied

## 5. Redirect the production `pages.dev` hostname

After `flawsdj.com` is active, configure a Bulk Redirect from the generated production hostname to the canonical domain:

- Source: `flawsdjdotcom.pages.dev`
- Target: `https://flawsdj.com`
- Status: `301`
- Preserve query string: enabled
- Subpath matching: enabled
- Preserve path suffix: enabled

Keep **Include subdomains** disabled if pull-request branch previews should remain directly accessible at their generated `*.flawsdjdotcom.pages.dev` addresses. Enable it only if all Pages preview hostnames should also redirect to production.

## 6. Production verification

After DNS and certificate activation, run:

```sh
curl -I https://flawsdj.com/
curl -I https://www.flawsdj.com/
curl -I https://flawsdjdotcom.pages.dev/
curl -I https://flawsdj.com/robots.txt
curl -I https://flawsdj.com/sitemap-index.xml
curl -I https://flawsdj.com/this-page-does-not-exist
```

Expected results:

- `https://flawsdj.com/` returns `200` over HTTPS;
- `https://www.flawsdj.com/...` redirects permanently to the matching apex path;
- `https://flawsdjdotcom.pages.dev/...` redirects permanently to the matching apex path;
- `robots.txt` and `sitemap-index.xml` return `200`;
- an unknown route returns `404` and displays the branded not-found page;
- security headers from `public/_headers` are present;
- hashed `/_astro/` assets use long-lived immutable caching.

Inspect the rendered source on the homepage, release pages and shows page to confirm:

- canonical URLs use `https://flawsdj.com`;
- Open Graph image URLs are absolute and load successfully;
- the artist JSON-LD is present;
- upcoming events, when available, emit matching `MusicEvent` JSON-LD;
- the 404 page includes `noindex, nofollow`.

## 7. Final launch checks

Complete one final pass on a real mobile device and a desktop browser:

- navigation and focus behaviour;
- heading hierarchy and text contrast;
- text zoom at 200%;
- image loading and cropping;
- SoundCloud consent, saved-choice and loading behaviour;
- all booking and professional links;
- EPK image viewing and downloads;
- no private telephone number anywhere in the public site or downloads;
- no unverified events, release claims or press quotations.

Record the final production URL and launch date in `README.md` after successful deployment.
