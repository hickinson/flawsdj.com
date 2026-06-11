# Agent instructions for flawsdj.com

## Framework choice

- This repository is a static-first Astro artist website for Kai / FLAWS DJ.
- Use Astro, TypeScript and Tailwind CSS.
- Do not use Next.js.
- Tailwind is configured through `@tailwindcss/vite` in `astro.config.mjs`.

## Repo structure

- `src/pages/` contains route files.
- `src/layouts/BaseLayout.astro` contains shared document structure and SEO metadata output.
- `src/components/` contains reusable presentation components.
- `src/data/` contains local placeholder content for artist profile, links, releases, shows, videos, press and EPK assets.
- `src/styles/global.css` contains Tailwind import, theme tokens and global atmosphere styles.
- `public/` contains static files such as `robots.txt`, `_headers` and future approved image assets.

## Build and test commands

- Install dependencies: `npm install`
- Run locally: `npm run dev`
- Build production output: `npm run build`
- Preview production output: `npm run preview`

## Cloudflare deployment constraints

- Hosting target is Cloudflare Pages.
- Keep `output: "static"` in `astro.config.mjs`.
- Cloudflare Pages build command: `npm run build`.
- Cloudflare Pages output directory: `dist`.
- Do not add Cloudflare Workers, server functions or runtime-only features for this version.
- Do not add Vercel-specific files or configuration.

## Do-not-overengineer rules

- Do not add a CMS, database, authentication or admin system.
- Prefer local TypeScript data files over extra tooling.
- Prefer external music/video links over heavy embeds on initial page load.
- Keep placeholder content clearly marked as `PLACEHOLDER` until verified.
- Do not invent real contact details, press quotes, show details or asset files.
- Keep components small, readable and static-friendly.
