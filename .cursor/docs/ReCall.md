# ReCall.md — Kristina-Irwin-Site Memory

## Current Focus

- [2026-09-07] **Active:** `Kristina-Irwin-Site-Project-v4` (4.0.0). **Frozen:** `Kristina-Irwin-Site-Project-v3` @ `dd06fdd`. Pre-cut backup `kristina-irwin-site-project-v1-f`.
- **LIVE** https://kristinairwin.com — District map + college list + endorsement ticker; footer paid-for-by + MSC credit. Latest HEAD `bdb02fd`. Hero `KI-New-HomeBg2` + Involve polish remain.
- Redeploy: `site:build:static` → `siteground:deploy:clean` → **Site Tools Dynamic Cache Flush** (`siteground:purge-cache` still broken — loopback PURGE dead).
- After `--clean`, bare `/` can look **unstyled** (stale HTML → deleted CSS hashes). Verify with `?v=ship` until flush; then bare URL.
- Client contact spelling: **Yolando** (not Yolanda) + Kristina.
- **Next:** official FPPC ID number when Kristina sends (disclosure already names committee line); SSL before **2026-09-23**; Google recrawl when access exists.
- Local: `web:dev` **:3000**. Never `web:build` while `:3000` is up.
- Left untracked on purpose: `CREDENTIALS-MANIFEST.md`, `CampaignMark.tsx`, `__pycache__/`, Maps screenshot.

## One-pager (what shipped)

Single page: sticky/full-width nav, hero, vote bar, Why, Priorities, About, Involve, **endorsement ticker**, **District map + college list**, footer, back-to-top.

| Piece | Lock |
|-------|------|
| Office | LACCD Board of Trustees, **Seat 2**, election **November 3, 2026** |
| Nav | Text **KRISTINA** (red) **IRWIN** (navy). Includes **District** → `#district`. Graphic Senate/star mark **commented out** in `SiteNav.tsx`. |
| Hero logo | `public/images/ki-logo-b.png`. ~368px desktop. `mix-blend-mode: lighten`. |
| Hero photo | `kristina-hero.png` from `KI-New-HomeBg2.png`. `object-fit: cover`, `object-position: center 28%`, frame **no margin**, panel `--ki-hero-photo-bg: #fefefe`. Navy caption bar kept. |
| About photos | Main: `kristina-phone.png` (tweed). Inset: `kristina-work.png` (red blazer). Frames stay 3:4 + square. Main `object-position: left 18%`. |
| Email | `kristina@kristinairwin.com` (`lib/site.ts`). Join / Endorse mailto that. Email under Download Form as `.ki-note`. |
| Involve | Join + Endorse buttons; Donate by Check box (payee + Ventura mail); Download Form → `/media/Kristina-Irwin-contribution-form.docx`. Box fill `#15263D`; stroke matches footer hairline. |
| Endorsements | Thin navy band `#15263D` above District (`EndorsementTicker`). Soft top hairline `rgba(255,255,255,0.08)` — not footer `0.4`. Data: `lib/endorsements.ts` (Romero, Antonovich, Hernandez, ICAN). CSS marquee; pause on hover; reduced-motion = static wrap. |
| District | `#district` — Leaflet + OpenStreetMap (colorful streets; **not** Esri dark gray — Jon preferred color). Nine red pins; list↔map select (`activeId`). College slider scrolls **list only** (`scrollTo` on track — never `scrollIntoView`). ↑/↓ always steps a **full row** (no tiny mid-row snap). Stack under ~1100px; list full width when stacked. Data: `lib/colleges.ts`. Mobile: OSM tiles can lag briefly (empty blue box) then fill — confirmed OK in Safari/Chrome/Brave/Vivaldi iPhone. |
| Check payee | `Kristina Irwin for LACC Trustee 2026` |
| Check mail | `20121 Ventura Blvd., Suite 307` / `Woodland Hills, CA 91364` |
| Favicon | Cropped **LA + book** in `app/icon.png` / `app/favicon.ico` / `app/apple-icon.png`. Tab slot is fixed; fill the square. **Never** also put `public/favicon.ico` (Next 500 conflict). Source pack: `.cursor/assets/KI-Photos/favicon_io/`. |
| Link preview | `app/opengraph-image.jpg` + `app/twitter-image.jpg` from `.cursor/assets/KI-Photos/Mobile/mobileLink.jpg` (1200×630). iMessage caches old cards — send a **new** message to see it. |
| Headline | Community = peach **script**; Colleges. = same peach, **serif**. Involve h2: `Los&nbsp;Angeles&nbsp;students`. Donate by Check heading matches Involve h2 size; peach like labels. |
| SEO | `SITE.title` / `SITE.description` in `lib/site.ts`. Canonical apex. `public/robots.txt` + `public/sitemap.xml` (not `app/robots.ts` — static export rejects those routes). JSON-LD Person + WebSite in `app/layout.tsx`. |
| Gutter | `--ki-gutter: 52px` |
| Footer | Full-width `#15263D` + top hairline. Disclosure: `SITE.disclosure` — **Paid For By Kristina Irwin for Los Angeles Community College District- ID# pending** (box **50% opacity**). Below: `© 2026 · Website design and development by My Studio Channel.` (`SITE.credit` → mailto `createmystudiochannel@gmail.com`). |

Assets stay under **`.cursor/assets/`**. Client notes: `.cursor/assets/Notes/KI-notes-v1.md`.

## SiteGround go-live

Full steps: `.cursor/docs/SiteGround-Deploy.md`.

- Auth: SSH **key + passphrase**, port **18765**. SFTP works; **SSH `exec` is denied**.
- After upload, Dynamic Cache can still show the **old** homepage (or unstyled HTML if `--clean` deleted old CSS hashes). Flush **required**.
- **Primary flush (2026-09-03, reconfirmed 2026-09-07):** Site Tools → Speed → Caching → **Dynamic Cache** → **Flush Cache** for kristinairwin.com.
- **Script** `npm run siteground:purge-cache` (one-shot PHP → `127.0.0.1` PURGE) **still failed** 2026-09-07. Treat as broken; use Site Tools.
- Cache-bust verify: `https://kristinairwin.com/?v=ship` (or any query) bypasses SuperCacher while bare `/` stays stale.
- `--clean` on `public_html` only — this SFTP home has ~16 other domains.
- DNS: A `35.215.107.60`; MX `smtp.google.com` — **do not touch MX**. SSL expires **2026-09-23**.

## Decisions

- Full-width nav; type wordmark only; District in nav after About.
- Never `web:build` while `web:dev` is running.
- Production is SiteGround static, not GitHub Pages, not a Node app.
- SuperCacher flush is part of every deploy, not optional — Site Tools Dynamic Cache is primary.
- Map basemap: keep **OpenStreetMap color** (reject Esri dark gray for this brand).
- Endorsement ticker soft top stroke (not matching footer heavy hairline).
- College list ↑/↓ must scroll the list container only (`el.scrollTo`), not `scrollIntoView`; step a full row (no mid-row snap).
- Jon approved live ship **with** FPPC ID still pending (disclosure names the committee line).
- Client: **Yolando** + Kristina.

## Git

- Working branch: `Kristina-Irwin-Site-Project-v4`
- Latest HEAD: `bdb02fd` MSC footer credit (after `7a73ada` disclosure + ↑ scroll, `6157fec` district ship)
- Frozen restore: `Kristina-Irwin-Site-Project-v3` @ `dd06fdd`
- `archive/` gitignored and skipped by backups.

---

*Last Entry: 2026-09-07 (End Project — district + footer live)*
