# FLAWS website launch runbook

This runbook covers the production deployment and verification of the static Astro website on Cloudflare Pages.

## Current launch position

The repository is ready for a standard Git-integrated Cloudflare Pages deployment.

At the start of the launch review on 24 July 2026, neither `flawsdj.com` nor `www.flawsdj.com` resolved publicly. Treat the custom-domain and DNS steps below as incomplete until both hostnames have been tested from a public network.

## 1. Connect the repository to Cloudflare Pages

In the Cloudflare dashboard:

1. Open **Workers & Pages**.
2. Create or open the Pages project.
3. Connect the private GitHub repository `hickinson/flawsdj.com`.
4. Use these build settings:

   - Production branch: `main`
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: leave blank / repository root
   - Node.js: `22`, also pinned by `.node-version`

5. Keep automatic production deployments enabled for `main`.
6. Keep preview deployments enabled for pull-request branches.

Do not add a Cloudflare adapter, Pages Functions, Workers or server-side rendering. This site builds to static files.

## 2. Validate the first Pages deployment

Before attaching the custom domain, open the generated `*.pages.dev` production URL and check:

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
- the two SoundCloud players load only after activation and do not autoplay;
- all release, press and hero images load without layout errors;
- Resident Advisor, SoundCloud, Substack and Parabel links reach the intended destinations;
- direct EPK image downloads work;
- keyboard focus remains visible throughout the site.

## 3. Attach the apex domain

In the Pages project:

1. Open **Custom domains**.
2. Add `flawsdj.com`.
3. Follow Cloudflare's activation steps.
4. If the domain is not already an active Cloudflare zone, update the registrar nameservers to the nameservers provided by Cloudflare.
5. Wait for DNS and certificate activation to complete.

The site configuration, canonical URLs, sitemap and robots file already use `https://flawsdj.com` as the production origin.

## 4. Handle the `www` hostname

Use `flawsdj.com` as the canonical hostname.

Cloudflare Pages `_redirects` files do not support domain-level redirects. Configure the `www.flawsdj.com` to `https://flawsdj.com` redirect in Cloudflare using a Bulk Redirect or equivalent zone-level redirect rule, preserving the path and query string.

Ensure `www` has the proxied DNS record required by the chosen Cloudflare redirect configuration.

## 5. Production verification

After DNS activation, run:

```sh
curl -I https://flawsdj.com/
curl -I https://www.flawsdj.com/
curl -I https://flawsdj.com/robots.txt
curl -I https://flawsdj.com/sitemap-index.xml
curl -I https://flawsdj.com/this-page-does-not-exist
```

Expected results:

- `https://flawsdj.com/` returns `200` over HTTPS;
- `https://www.flawsdj.com/...` redirects permanently to the matching apex path;
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

## 6. Final launch checks

Complete one final pass on a real mobile device and a desktop browser:

- navigation and focus behaviour;
- text contrast and zoom at 200%;
- image loading and cropping;
- SoundCloud consent/loading behaviour;
- all booking and professional links;
- no private telephone number anywhere in the public site or downloads;
- no unverified events, release claims or press quotations.

Record the final production URL and launch date in the README after successful deployment.
