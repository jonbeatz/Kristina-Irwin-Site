# TRUTH.md — Kristina-Irwin-Site

**Version:** 2.0.0  
**Profile root:** `D:\Hermes\projects\Kristina-Irwin-Site`  
**Active branch:** `Kristina-Irwin-Site-Project-v2`  
**Frozen:** `Kristina-Irwin-Site-Project-v1` @ `1865e60`  
**Live:** https://kristinairwin.com (SiteGround — client-owned)  
**GitHub:** https://github.com/jonbeatz/Kristina-Irwin-Site (private)  
**Archive (live multi-page site):** `archive/live-site-2026-06/` (local only — not git, not backups)  
**Fleet original (untouched):** `D:\Hermes\projects\_archive\Kristina-Irwin`

## What this is

Client website for **Kristina Irwin** — **LACCD Board of Trustees, Seat 2** (November 3, 2026).  
This repo is a **one-page** rebuild from `.cursor/assets/KI-MockUps/`. The old multi-page Senate campaign is parked in **`archive/live-site-2026-06/`**. Do not mix the two.

## Hard boundaries

- Separate from JonBeatz personal and MyStudioChannel. No shared deploy paths.
- **Mem0:** `kristina-irwin-site` / `kristina-irwin-site_memories` only (not `jonbeatz_personal`, not archive `kristina_irwin` unless Jon migrates).
- Secrets only in `.env.local` — never commit. SiteGround SFTP key reference: `_core-scripts\siteground-access\`.
- Windows PowerShell environment.

## Stack

- **Site:** Next.js App Router + React + Tailwind v4 (+ optional Three.js scaffold from bootstrap).
- **Prod deploy:** Static export (`KI_STATIC=1`) → `out/` → SiteGround SFTP (`npm run siteground:*`).
- **Reference mocks:** `.cursor/assets/KI-MockUps/` (irwin 1–5.png) and `.cursor/assets/KI-Photos/`.
- **Look-and-feel source:** `archive/live-site-2026-06/DesignMD/DESIGN-KRISTINAIRWIN.md` + `archive/live-site-2026-06/app/globals.css`.
- **Archive reference docs:** `archive/README.md`, `.cursor/docs/archive-reference/` + `.cursor/docs/SiteGround-Deploy.md`.
- **Backups / Git:** never include `archive/` — local look-and-feel reference only (`npm run backup:*` and `.gitignore`).

## Candidate (standing facts)

Kristina Irwin — Los Angeles Community College District Board of Trustees, **Seat 2** (election **November 3, 2026**). Committee name, FPPC ID, and donation/endorse URLs: confirm with client before shipping (placeholders on the page).

**Build status (2026-08-22):** Active line is `Kristina-Irwin-Site-Project-v2` (2.0.0). Live https://kristinairwin.com has v2 photos, email, favicon, OG card, and **new search meta** (see `.cursor/docs/SEO.md`). Google still caches Senate D24 until recrawl. Placeholders remain until Kristina supplies committee / FPPC / donate vs volunteer. Redeploy: `site:build:static` → `siteground:deploy:clean` → `siteground:purge-cache`.

**How it runs:** Local = Next.js + Node (`web:dev`). SiteGround = static export only (`KI_STATIC=1` → `out/` → SFTP). Shared SiteGround does not host Node.js.

## Doc order

1. `TRUTH.md` (this file)
2. `.cursor/docs/START-HERE.md`
3. `.cursor/docs/SiteGround-Deploy.md`
4. `.cursor/docs/ONE-PAGER.md` — design locks
5. `.cursor/docs/SEO.md` — search snippet / meta description
6. `.cursor/docs/ReCall.md`
7. Archive refs under `.cursor/docs/archive-reference/` (read-only history)

## Isolation

- This profile is self-contained in `D:\Hermes\projects\Kristina-Irwin-Site`.
- Do not run fleet sync *from* the archived folder.

---

*Created: 2026-08-21 · Bootstrapped from shared-profile-content + SiteGround carry from archive*
