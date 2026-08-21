# TRUTH.md — Kristina-Irwin-Site

**Version:** 1.0.0  
**Profile root:** `D:\Hermes\projects\Kristina-Irwin-Site`  
**Live:** https://kristinairwin.com (SiteGround — client-owned)  
**GitHub:** https://github.com/jonbeatz/Kristina-Irwin-Site (private)  
**Archive (live multi-page site):** `archive/live-site-2026-06/` (local only — not git, not backups)  
**Fleet original (untouched):** `D:\Hermes\projects\_archive\Kristina-Irwin`

## What this is

Client website for **Kristina Irwin** (CA State Senate, District 24).  
This repo is a **fresh one-page site** rebuild. The multi-page campaign that is **currently live** on SiteGround is parked in **`archive/live-site-2026-06/`** (source + `out/` static export + brand tokens). Root `app/` is the new one-pager — do not mix the two. The earlier project also remains at `D:\Hermes\projects\_archive\Kristina-Irwin` (read-only fleet archive).

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

Kristina Irwin — California State Senate, District 24. Committee / disclaimer and donation processor: confirm with client before shipping compliance copy (see archive `Wix-Site` snapshot).

## Doc order

1. `TRUTH.md` (this file)
2. `.cursor/docs/START-HERE.md`
3. `.cursor/docs/SiteGround-Deploy.md`
4. `.cursor/docs/ReCall.md`
5. Archive refs under `.cursor/docs/archive-reference/` (read-only history)

## Isolation

- This profile is self-contained in `D:\Hermes\projects\Kristina-Irwin-Site`.
- Do not run fleet sync *from* the archived folder.

---

*Created: 2026-08-21 · Bootstrapped from shared-profile-content + SiteGround carry from archive*
