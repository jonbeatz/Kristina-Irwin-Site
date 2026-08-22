# One-pager — design locks

Living notes for the LACCD Seat 2 campaign page. **TRUTH.md** still wins if this drifts.

## Status (2026-08-22)

**Live** at https://kristinairwin.com (v2 nits shipped). Placeholders remain (donate, committee/FPPC). Email: `kristina@kristinairwin.com`.

## Brand

| Token | Value |
|-------|--------|
| Red | `#c41230` |
| Navy | `#1a2b48` |
| Peach / script | `#f5d5c5` |
| Hero photo panel | `--ki-hero-photo-bg: #fefefe` (not champagne) |
| Champagne (unused on hero) | `#e6dfd4` |
| Gutter | `--ki-gutter: 52px` |
| Display | Cormorant Garamond |
| UI | Source Sans 3 |
| Script (Community) | Allura |

## Nav

- Wordmark text only. Graphic `logo-nav-mix.png` is in `public/images/` and **commented out** in `components/SiteNav.tsx`.
- Full width; padding matches hero copy.

## Hero

- Logo: `ki-logo-b.png`
- Photo: `kristina-hero.png` (from `.cursor/assets/KI-Photos/image1b.png`)
- `object-fit: cover`, `object-position: center 22%`, frame **no margin**
- “Community” peach script; “Colleges.” peach serif

## About photos

- Main: `kristina-work.png` ← `image2b.png` (1178×1335)
- Inset: `kristina-phone.png` ← `image3b.png` (1254×1254)

## Favicon + share card

- Favicon: crop the district seal to **LA + book** so it fills the tab square. Files: `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`. Do **not** also add `public/favicon.ico`.
- Link preview: `app/opengraph-image.jpg` / `app/twitter-image.jpg` from `Mobile/mobileLink.jpg` (1200×630 navy campaign lockup).

## Search snippet (Google / DuckDuckGo)

Edit **`SITE.title`** and **`SITE.description`** in `lib/site.ts`, then redeploy. Details: `.cursor/docs/SEO.md`. Google still shows old Senate copy until it recrawls.

## Involve / footer

- Join + Endorse mailto `kristina@kristinairwin.com`
- Email repeated under buttons (`.ki-note`)
- FPPC disclosure box stays until official copy; **opacity 50%**

## Do not

- Mix `archive/live-site-2026-06/` (Senate multi-page) into root `app/`
- Run `web:build` while `web:dev` is on `:3000`
- Ship without SuperCacher purge after SiteGround upload
