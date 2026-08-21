# SiteGround Deploy — Kristina Irwin Site

Production host for **https://kristinairwin.com**. Static Next export (`out/`) uploads over **SFTP**.

> Carried from archived project `D:\Hermes\projects\_archive\Kristina-Irwin` (2026-08-21).  
> Secrets live only in **`.env.local`** (gitignored) and  
> `D:\Hermes\projects\_core-scripts\siteground-access\SiteGround_SFTP.md`.

## Pre-deploy gate (2026-08-21)

Do **not** upload until all of these are true:

1. Kristina has reviewed localhost / a preview
2. Official **committee name** and **FPPC ID** replace the footer placeholder
3. Real **email**, **donate** URL, and socials replace the involve sample note
4. `npm run site:build:static` succeeds and `siteground:deploy:dryrun` looks right
5. Operator confirms this should **replace** the live Senate D24 site on the same `public_html`

Live domain is still the old campaign until that upload.

**How we ship:** Next.js only on the PC. `site:build:static` writes `out/` (HTML/CSS/JS). SFTP copies that folder. SiteGround does **not** run Node. Ignore `.env.local` `FTP_REMOTE_PATH=/nodejs/...` (leftover). After a real upload, flush SuperCacher (Site Tools → Speed → Caching). Prefer `--clean` so old Senate `.html` / `_next` files do not remain. Do not change MX (`smtp.google.com`).

## Quick commands

```powershell
cd D:\Hermes\projects\Kristina-Irwin-Site
npm run site:build:static        # out/
npm run siteground:test          # read-only SFTP check
npm run siteground:deploy:dryrun # list remote, no changes
npm run siteground:deploy        # upload out/ → SITEGROUND_REMOTE_PATH
```

Optional staging subfolder:

```powershell
node scripts/siteground-deploy.mjs --remote /kristinairwin.com/kristinairwin.com/public_html/preview --confirm
```

`--clean` wipes the remote target first (dangerous if WordPress still lives there).

## Env keys (must be SET in `.env.local`)

| Key | Purpose |
|-----|---------|
| `SITEGROUND_SFTP_HOST` | SFTP host |
| `SITEGROUND_SFTP_PORT` | Usually `18765` |
| `SITEGROUND_SFTP_USER` | SFTP username |
| `SITEGROUND_SFTP_PASSWORD` | Passphrase for key (or password if no key) |
| `SITEGROUND_SFTP_KEY` | Path to PEM reference file under `_core-scripts\siteground-access\` |
| `SITEGROUND_REMOTE_PATH` | Web root (typically `…/public_html`) |

Namecheap / Netlify preview tokens were also merged from the archive for DNS/registrar reference — not required for every deploy.

## DNS / SSL (historical)

See `.cursor/docs/archive-reference/` (Wix-Site snapshot + `dns-backup/` if present).  
Live cutover previously switched nameservers to SiteGround; Google Workspace email MX must stay intact.

## Archive vs this repo

| | Archive | This project |
|--|---------|--------------|
| Path | `_archive\Kristina-Irwin` | `Kristina-Irwin-Site` |
| Scope | Multi-page campaign rebuild (2026) | **New one-page site** |
| Deploy | Same SiteGround account / domain | Same SFTP path when ready |
