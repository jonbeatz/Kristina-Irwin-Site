# ReCall.md — Kristina-Irwin-Site Memory

## Current Focus

- [2026-08-22] **Active:** `Kristina-Irwin-Site-Project-v2` (2.0.0). **Frozen:** `Kristina-Irwin-Site-Project-v1` @ `1865e60`.
- **LIVE** https://kristinairwin.com — v2 nits + SEO tags (new meta description, canonical, robots/sitemap, JSON-LD). Involve headline keeps **Los Angeles students** on one line.
- **Google/DuckDuckGo** still show old Senate D24 copy until they recrawl. Playbook: `.cursor/docs/SEO.md`. Change snippet via `SITE.title` / `SITE.description` in `lib/site.ts` then redeploy. Yolando asked about WP Settings title/tagline — site is not WordPress; those fields are already on the new site.
- Client contact spelling: **Yolando** (not Yolanda) + Kristina.
- **Next:** official search-bio if they send one; committee / FPPC / donate vs volunteer / Endorse. Google Search Console request-indexing when Jon has access.
- **Fleet:** left running (LiteLLM :4000, ngrok :4040, LM Studio :1234) — use Open Project in next workspace.
- Local: `web:dev` **:3000**. Never `web:build` while `:3000` is up.
- SiteGround keys in `_core-scripts/.env.local.master` section **52**. Backup `kristina-irwin-site-project-v1-c`. Git HEAD `9ecffb0`.

## One-pager (what shipped)

Single page: sticky/full-width nav, hero, vote bar, Why, Priorities, About, Involve, footer, back-to-top.

| Piece | Lock |
|-------|------|
| Office | LACCD Board of Trustees, **Seat 2**, election **November 3, 2026** |
| Nav | Text **KRISTINA** (red) **IRWIN** (navy). Graphic Senate/star mark **commented out** in `SiteNav.tsx`. |
| Hero logo | `public/images/ki-logo-b.png`. ~368px desktop. `mix-blend-mode: lighten`. |
| Hero photo | `kristina-hero.png` from `image1b.png`. `object-fit: cover`, `object-position: center 22%`, frame **no margin**, panel `--ki-hero-photo-bg: #fefefe`. Navy caption bar kept. |
| About photos | `kristina-work.png` ← `image2b.png`; `kristina-phone.png` ← `image3b.png`. |
| Email | `kristina@kristinairwin.com` (`lib/site.ts`). Join / Endorse mailto that. Email shown under buttons as `.ki-note`. |
| Favicon | Cropped **LA + book** in `app/icon.png` / `app/favicon.ico` / `app/apple-icon.png`. Tab slot is fixed; fill the square. **Never** also put `public/favicon.ico` (Next 500 conflict). Source pack: `.cursor/assets/KI-Photos/favicon_io/`. |
| Link preview | `app/opengraph-image.jpg` + `app/twitter-image.jpg` from `.cursor/assets/KI-Photos/Mobile/mobileLink.jpg` (1200×630). iMessage caches old cards — send a **new** message to see it. |
| Headline | Community = peach **script**; Colleges. = same peach, **serif**. Involve h2: `Los&nbsp;Angeles&nbsp;students`. |
| SEO | `SITE.title` / `SITE.description` in `lib/site.ts`. Canonical apex. `public/robots.txt` + `public/sitemap.xml` (not `app/robots.ts` — static export rejects those routes). JSON-LD Person + WebSite in `app/layout.tsx`. |
| Gutter | `--ki-gutter: 52px` |
| Placeholders | Footer committee/FPPC at **50% opacity**; donate deferred. |

Assets stay under **`.cursor/assets/`**. Client notes: `.cursor/assets/KI-notes-v1.md`.

## SiteGround go-live

Full steps: `.cursor/docs/SiteGround-Deploy.md`.

- Auth: SSH **key + passphrase**, port **18765**. SFTP works; **SSH `exec` is denied**.
- After upload, Dynamic Cache can still show the **old** homepage. Flush with `npm run siteground:purge-cache`.
- `--clean` on `public_html` only — this SFTP home has ~16 other domains.
- DNS: A `35.215.107.60`; MX `smtp.google.com` — **do not touch MX**. SSL expires **2026-09-23**.

## GitHub cleanup (2026-08-21)

- Removed GitHub Pages workflow (fail email). Closed Dependabot PRs #1–#6.
- Backups: `kristina-irwin-site-project-v1-a`, then **v1-b** before the v2 branch cut.

## Decisions

- Full-width nav; type wordmark only.
- Never `web:build` while `web:dev` is running.
- Production is SiteGround static, not GitHub Pages, not a Node app.
- SuperCacher flush is part of every deploy, not optional.
- Jon approved live ship **with** FPPC placeholder still on the page.
- Tab favicons cannot be made larger than the browser slot — crop the mark to fill the square.
- Search snippets: we publish tags; Google recrawls on its own. Do not rebuild old Senate sitelink pages.
- Client: **Yolando** + Kristina.

## Git

- Working branch: `Kristina-Irwin-Site-Project-v2`
- `archive/` gitignored and skipped by backups.

---

*Last Entry: 2026-08-22*
