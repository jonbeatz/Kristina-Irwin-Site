# ReCall.md — Kristina-Irwin-Site Memory

## Current Focus

- [2026-09-03] **LIVE** https://kristinairwin.com — hero photo swapped to `KI-New-HomeBg2.png` (`object-position: center 28%`). Involve polish still live. Branch `Kristina-Irwin-Site-Project-v3` (3.0.0). Frozen v2 @ `f1fac14`. Backup `kristina-irwin-site-project-v1-e`.
- Redeploy: `site:build:static` → `siteground:deploy:clean` → **Site Tools Dynamic Cache Flush** (`siteground:purge-cache` broken).
- Client contact spelling: **Yolando** (not Yolanda) + Kristina.
- **Next:** official committee / FPPC when Kristina sends; SSL before **2026-09-23**; Google recrawl when access exists; optional purge-script fix.
- Local: `web:dev` **:3000**. Never `web:build` while `:3000` is up.
- Left untracked on purpose: `CREDENTIALS-MANIFEST.md`, `CampaignMark.tsx`, `__pycache__/`. Extra KI photo candidates in `.cursor/assets/KI-Photos/` (`Front_K_Irwin`, `KI-New-HomeBg1`, UUID PNG) not yet used.

## One-pager (what shipped)

Single page: sticky/full-width nav, hero, vote bar, Why, Priorities, About, Involve, footer, back-to-top.

| Piece | Lock |
|-------|------|
| Office | LACCD Board of Trustees, **Seat 2**, election **November 3, 2026** |
| Nav | Text **KRISTINA** (red) **IRWIN** (navy). Graphic Senate/star mark **commented out** in `SiteNav.tsx`. |
| Hero logo | `public/images/ki-logo-b.png`. ~368px desktop. `mix-blend-mode: lighten`. |
| Hero photo | `kristina-hero.png` from `KI-New-HomeBg2.png`. `object-fit: cover`, `object-position: center 28%`, frame **no margin**, panel `--ki-hero-photo-bg: #fefefe`. Navy caption bar kept. |
| About photos | Main: `kristina-phone.png` (tweed). Inset: `kristina-work.png` (red blazer). Frames stay 3:4 + square. Main `object-position: left 18%`. |
| Email | `kristina@kristinairwin.com` (`lib/site.ts`). Join / Endorse mailto that. Email under Download Form as `.ki-note`. |
| Involve | Join + Endorse buttons; Donate by Check box (payee + Ventura mail); Download Form → `/media/Kristina-Irwin-contribution-form.docx`. Box fill `#15263D`; stroke matches footer hairline. |
| Check payee | `Kristina Irwin for LACC Trustee 2026` |
| Check mail | `20121 Ventura Blvd., Suite 307` / `Woodland Hills, CA 91364` |
| Favicon | Cropped **LA + book** in `app/icon.png` / `app/favicon.ico` / `app/apple-icon.png`. Tab slot is fixed; fill the square. **Never** also put `public/favicon.ico` (Next 500 conflict). Source pack: `.cursor/assets/KI-Photos/favicon_io/`. |
| Link preview | `app/opengraph-image.jpg` + `app/twitter-image.jpg` from `.cursor/assets/KI-Photos/Mobile/mobileLink.jpg` (1200×630). iMessage caches old cards — send a **new** message to see it. |
| Headline | Community = peach **script**; Colleges. = same peach, **serif**. Involve h2: `Los&nbsp;Angeles&nbsp;students`. Donate by Check heading matches Involve h2 size; peach like labels. |
| SEO | `SITE.title` / `SITE.description` in `lib/site.ts`. Canonical apex. `public/robots.txt` + `public/sitemap.xml` (not `app/robots.ts` — static export rejects those routes). JSON-LD Person + WebSite in `app/layout.tsx`. |
| Gutter | `--ki-gutter: 52px` |
| Footer | Full-width `#15263D` + top hairline. Committee/FPPC box at **50% opacity**. |

Assets stay under **`.cursor/assets/`**. Client notes: `.cursor/assets/KI-notes-v1.md`.

## SiteGround go-live

Full steps: `.cursor/docs/SiteGround-Deploy.md`.

- Auth: SSH **key + passphrase**, port **18765**. SFTP works; **SSH `exec` is denied**.
- After upload, Dynamic Cache can still show the **old** homepage (or unstyled HTML if `--clean` deleted old CSS hashes). Flush **required**.
- **Primary flush (2026-09-03):** Site Tools → Speed → Caching → **Dynamic Cache** → **Flush Cache** for kristinairwin.com.
- **Script** `npm run siteground:purge-cache` (one-shot PHP → `127.0.0.1` PURGE) **failed** 2026-09-03 (loopback PURGE no longer connects; external PURGE → 403). Treat as broken until fixed; use Site Tools.
- Cache-bust verify: `https://kristinairwin.com/?v=ship` (or any query) bypasses SuperCacher while bare `/` stays stale.
- `--clean` on `public_html` only — this SFTP home has ~16 other domains.
- DNS: A `35.215.107.60`; MX `smtp.google.com` — **do not touch MX**. SSL expires **2026-09-23**.

## GitHub cleanup (2026-08-21)

- Removed GitHub Pages workflow (fail email). Closed Dependabot PRs #1–#6.
- Backups: `kristina-irwin-site-project-v1-a`, then **v1-b** before the v2 branch cut; **v1-d** before v3 cut.

## Decisions

- Full-width nav; type wordmark only.
- Never `web:build` while `web:dev` is running.
- Production is SiteGround static, not GitHub Pages, not a Node app.
- SuperCacher flush is part of every deploy, not optional.
- Jon approved live ship **with** FPPC placeholder still on the page.
- Tab favicons cannot be made larger than the browser slot — crop the mark to fill the square.
- Search snippets: we publish tags; Google recrawls on its own. Do not rebuild old Senate sitelink pages.
- Client: **Yolando** + Kristina.
- Mail-in donate copy is live (payee + Woodland Hills address); still awaiting official committee / FPPC text.

## Git

- Working branch: `Kristina-Irwin-Site-Project-v3`
- `archive/` gitignored and skipped by backups.

---

*Last Entry: 2026-09-03*
