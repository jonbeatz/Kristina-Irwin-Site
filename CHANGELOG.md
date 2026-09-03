# Changelog — Kristina-Irwin-Site

## Unreleased — branch `Kristina-Irwin-Site-Project-v3`

- Still waiting on Kristina: official committee name, FPPC ID; optional shorter official Google bio.
- Fix or retire `scripts/siteground-purge-cache.mjs` (loopback PHP PURGE dead on this box as of 2026-09-03).
- **2026-09-03 hero:** live photo is `KI-New-HomeBg2.png` → `public/images/kristina-hero.png` (`object-position: center 28%`). SiteGround `--clean` + Site Tools Dynamic Cache Flush.

## v3.0.0 — 2026-09-03

- Branch cut: freeze `Kristina-Irwin-Site-Project-v2` @ `f1fac14`; active `Kristina-Irwin-Site-Project-v3`.
- Pre-cut backup `kristina-irwin-site-project-v1-d`.
- Involve: Donate by Check box (payee + Woodland Hills mail address), Download Form (Word contribution card), matched stroke + footer `#15263D` band.
- About: swap photos (tweed main / red-blazer inset); nav wordmark slightly larger.
- Commit on freeze line: `f1fac14` feat(involve) mail-in donate + form download + about polish.
- **Live ship (same day):** `siteground:deploy:clean` **UPLOAD_OK**; SuperCacher flushed via Site Tools (Dynamic Cache). Bare URL matches polish. `?v=ship` was cache-bust only.

## v2.0.0 — 2026-08-22

- Branch cut: freeze `Kristina-Irwin-Site-Project-v1` @ `1865e60`; active `Kristina-Irwin-Site-Project-v2`.
- Pre-cut backup `kristina-irwin-site-project-v1-b`.
- **Live ship (same day):** hero/about photos (`image1b/2b/3b`), email `kristina@kristinairwin.com`, cropped LA+book favicon, FPPC box at 50% opacity, OG/Twitter card from `mobileLink.jpg`.

## v1.0.0 — 2026-08-21

- One-page LACCD Board of Trustees (Seat 2) campaign site from `.cursor/assets/KI-MockUps/`
- Hero logo `ki-logo-b.png`, original KI photos, full-width nav, mobile menu + back-to-top
- **LIVE 2026-08-21** on SiteGround `public_html` (static SFTP + SuperCacher PURGE)
- Placeholders: committee / FPPC / donate — still on the live page
- Removed GitHub Pages workflow + Dependabot (failing `main` email); v1 synced with main
- Commits: `d270591`, `9ac42e8`, `5f01e47`, `08b043b`, `6341719`, `668da58`, `1865e60`
