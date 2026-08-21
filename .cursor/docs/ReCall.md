# ReCall.md — Kristina-Irwin-Site Memory

## Current Focus

- [2026-08-21] **LIVE** https://kristinairwin.com — LACCD Board of Trustees, Seat 2 one-pager. Uploaded with `--clean` + SuperCacher PURGE. Placeholders still on the page (committee / FPPC / donate).
- Working branch: `Kristina-Irwin-Site-Project-v1`.
- **Local:** Next.js + Node (`web:dev` :3000). **Live:** static `out/` via SFTP. Shared SiteGround does **not** run Node.js.
- **Next:** real committee name, FPPC ID, donate/email/socials when Kristina provides them; then rebuild + `siteground:deploy:clean` + `siteground:purge-cache`.

## One-pager (what shipped)

Single page: sticky/full-width nav, hero, vote bar, Why, Priorities, About, Involve, footer, back-to-top.

| Piece | Lock |
|-------|------|
| Office | LACCD Board of Trustees, **Seat 2**, election **November 3, 2026** |
| Nav | Text **KRISTINA** (red) **IRWIN** (navy). Graphic Senate/star mark **commented out** in `SiteNav.tsx`. |
| Hero logo | `public/images/ki-logo-b.png`. ~368px desktop. `mix-blend-mode: lighten`. |
| Photos | `.cursor/assets/KI-Photos/` → `public/images/`. Hero uses **contain**. |
| Headline | Community = peach **script**; Colleges. = same peach, **serif**. |
| Gutter | `--ki-gutter: 52px` |
| Placeholders | `info@kristinairwin.com`; footer committee/FPPC; donate deferred. |

Assets stay under **`.cursor/assets/`**.

## SiteGround go-live (2026-08-21)

Full steps: `.cursor/docs/SiteGround-Deploy.md`.

- Auth: SSH **key + passphrase**, port **18765**. SFTP works; **SSH `exec` is denied**.
- After upload, Dynamic Cache can still show the **old** homepage. Flush with `npm run siteground:purge-cache` (one-shot PHP PURGE on `127.0.0.1`, then delete the file). Site Tools Flush is the UI fallback.
- `--clean` on `public_html` only — this SFTP home has ~16 other domains.
- DNS: A `35.215.107.60`; MX `smtp.google.com` — **do not touch MX**. SSL expires **2026-09-23**.

## GitHub cleanup (2026-08-21)

- Removed GitHub Pages workflow (fail email). Closed Dependabot PRs #1–#6.
- First G: backup `kristina-irwin-site-project-v1-a`.

## Decisions

- Full-width nav; type wordmark only.
- Never `web:build` while `web:dev` is running.
- Production is SiteGround static, not GitHub Pages, not a Node app.
- SuperCacher flush is part of every deploy, not optional.

## Git

- Working branch: `Kristina-Irwin-Site-Project-v1`
- `archive/` gitignored and skipped by backups.

---

*Last Entry: 2026-08-21*
