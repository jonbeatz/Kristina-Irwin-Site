# One-pager — design locks

Living notes for the LACCD Seat 2 campaign page. **TRUTH.md** still wins if this drifts.

## Status (2026-09-03)

**Active branch** `Kristina-Irwin-Site-Project-v3` @ **3.0.0**. Live https://kristinairwin.com still prior ship until next SiteGround deploy. Local: mail-in donate box, contribution form download, About photo swap. Email: `kristina@kristinairwin.com`. Committee/FPPC placeholders remain.

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
- Photo: `kristina-hero.png` (from `.cursor/assets/KI-Photos/KI-New-HomeBg2.png`)
- Crop: `object-fit: cover`, `object-position: center 28%`, frame **no margin**
- “Community” peach script; “Colleges.” peach serif

## About photos

- Main: `kristina-phone.png` ← `image3b.png` (tweed / phone) — portrait frame 3:4, `object-position: left 18%`
- Inset: `kristina-work.png` ← `image2b.png` (red blazer) — square

## Favicon + share card

- Favicon: crop the district seal to **LA + book** so it fills the tab square. Files: `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`. Do **not** also add `public/favicon.ico`.
- Link preview: `app/opengraph-image.jpg` / `app/twitter-image.jpg` from `Mobile/mobileLink.jpg` (1200×630 navy campaign lockup).

## Search snippet (Google / DuckDuckGo)

Edit **`SITE.title`** and **`SITE.description`** in `lib/site.ts`, then redeploy. Details: `.cursor/docs/SEO.md`. Google still shows old Senate copy until it recrawls.

## Involve / footer

- Join + Endorse mailto `kristina@kristinairwin.com`
- Donate by Check box (`SITE.checkPayee` / `SITE.checkMail`) width-matched to Involve lede
- Download Form → `/media/Kristina-Irwin-contribution-form.docx`
- Email under form (`.ki-note`)
- Footer full-width `#15263D` + top hairline; FPPC disclosure box stays until official copy; **opacity 50%**

## Do not

- Mix `archive/live-site-2026-06/` (Senate multi-page) into root `app/`
- Run `web:build` while `web:dev` is on `:3000`
- Ship without SuperCacher purge after SiteGround upload
