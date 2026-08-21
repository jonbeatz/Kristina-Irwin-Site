# ReCall.md — Kristina-Irwin-Site Memory

## Current Focus

- [2026-08-21] **In-repo archive:** live multi-page site copied to `archive/live-site-2026-06/` (app/components/public/out/DesignMD). Fleet original at `_archive\Kristina-Irwin` left untouched. Root stays Hermes + one-pager scaffold — did **not** move root `node_modules` / `.next` (those belong to the new site).
- **SiteGround:** SFTP verified read-only; no deploy yet. Live files on SG match the June 2026 `out/` export.
- **Mockups:** `.cursor/assets/KI-MockUps/` (irwin 1–5) + `.cursor/assets/KI-Photos/`. Canonical asset folder is `.cursor/assets` — do not recreate root `Assets/`.
- **Backups / Git:** `archive/` is excluded from all `backup:*` runs and from GitHub (local reference only).
- **Next:** build the one-pager using archived look-and-feel (red `#C41E3A` / navy `#1B2A4A` / Georgia + Arial Black) + mockups. Then `site:build:static` → dry-run → deploy.

---

*Last Entry: 2026-08-21*
