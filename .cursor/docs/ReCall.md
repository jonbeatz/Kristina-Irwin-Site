# ReCall.md — Kristina-Irwin-Site Memory

## Current Focus

- [2026-08-21] **One-pager is on `Kristina-Irwin-Site-Project-v1`** (HEAD `6341719`, in sync with `main`’s CI cleanup). **Do not deploy to SiteGround** until Kristina reviews and committee / FPPC / donate URLs are real.
- **Live kristinairwin.com** is still the old **Senate D24** static Next export in `public_html` (Last-Modified 25 Jun 2026). SFTP **CONNECT_OK**. Upload will replace those files.
- **Local:** Next.js + Node (`npm run web:dev` → http://localhost:3000/). **Live:** static HTML/CSS/JS only. SiteGround shared hosting does **not** run Node.js.
- **Next:** client review → placeholders → `site:build:static` → Site Tools backup → `siteground:deploy:dryrun` → `--confirm` (prefer `--clean`) → SuperCacher flush.

## One-pager (what shipped)

Single page: sticky/full-width nav, hero, vote bar, Why, Priorities, About, Involve, footer, back-to-top.

| Piece | Lock |
|-------|------|
| Office | LACCD Board of Trustees, **Seat 2**, election **November 3, 2026** |
| Nav | Text **KRISTINA** (red) **IRWIN** (navy). Graphic Senate/star mark **commented out** in `SiteNav.tsx`. |
| Hero logo | `public/images/ki-logo-b.png` (tight crop). Size ~368px desktop. `mix-blend-mode: lighten`. |
| Photos | `.cursor/assets/KI-Photos/` → `public/images/`. Hero uses **contain**. |
| Headline | Community = peach **script**; Colleges. = same peach, **serif**. |
| Gutter | `--ki-gutter: 52px` |
| Placeholders | `info@kristinairwin.com`; footer committee/FPPC; donate deferred. |

Assets stay under **`.cursor/assets/`**. Do not recreate root `Assets/`.

## SiteGround (verified, not uploaded)

- Auth: SSH key + passphrase in `.env.local` / `SiteGround_SFTP.md`. Port **18765**.
- Web root: `/kristinairwin.com/kristinairwin.com/public_html` (Senate `.html` + `_next` + `images`).
- Ignore leftover `FTP_REMOTE_PATH=/nodejs/kristina-irwin-site` — Hostinger merge junk.
- DNS: A `35.215.107.60`; MX `smtp.google.com` — **do not touch MX**. SSL Let’s Encrypt expires **2026-09-23**.
- Merge-only upload would leave old Senate pages. Use `--clean` after a Site Tools backup.
- Old `/about` 404s; `/about.html` 200 (no `trailingSlash`). After cutover, 301/410 Senate routes.

## GitHub cleanup (2026-08-21)

- Removed bootstrap **Deploy GitHub Pages** workflow (that was the fail email on `main` `a80de7c`).
- Closed Dependabot PRs #1–#6; deleted those branches; removed `dependabot.yml`.
- `main` + v1 both have the CI cleanup. v1 merged `main` so it is **not behind**.

## Decisions

- Full-width nav; type wordmark only.
- No SiteGround upload this session.
- Never `web:build` while `web:dev` is running.
- Production is SiteGround static, not GitHub Pages, not a Node app.

## Git

- Working branch: `Kristina-Irwin-Site-Project-v1`
- `archive/` gitignored and skipped by backups.

---

*Last Entry: 2026-08-21*
