# One-pager — design locks

Living notes for the LACCD Seat 2 campaign page. **TRUTH.md** still wins if this drifts.

## Status (2026-09-07)

**Active branch** `Kristina-Irwin-Site-Project-v4` @ **4.0.0**. **Live** https://kristinairwin.com: District map + college list + endorsement ticker; footer `SITE.disclosure` + MSC credit mailto; Involve polish; hero `KI-New-HomeBg2`. HEAD `bdb02fd`. FPPC ID# still pending. Email: `kristina@kristinairwin.com`.

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
- Footer full-width `#15263D` + top hairline
- Disclosure box (**50% opacity**): `Paid For By Kristina Irwin for Los Angeles Community College District- ID# pending`
- Credit under box: `© 2026 · Website design and development by My Studio Channel.` → mailto `createmystudiochannel@gmail.com`

## Endorsements + District (live 2026-09-07)

- **Ticker** above District: navy `#15263D`, soft top stroke; names in `lib/endorsements.ts`
- **Map:** Leaflet + OpenStreetMap (keep color streets — not Esri dark). Pins + list share `activeId`
- **List:** `lib/colleges.ts`; ↑/↓ scroll list via `scrollTo` only; stack full-width ≤1100px
- Nav link: **District** → `#district`

## Do not

- Mix `archive/live-site-2026-06/` (Senate multi-page) into root `app/`
- Run `web:build` while `web:dev` is on `:3000`
- Ship without SuperCacher purge after SiteGround upload
- Use `scrollIntoView` inside the college list (scrolls the page)
- Switch map to dark Esri tiles without Jon approving
