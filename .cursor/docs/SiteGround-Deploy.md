# SiteGround Deploy — Kristina Irwin Site

Production host for **https://kristinairwin.com**. Static Next export (`out/`) uploads over **SFTP**.

> Secrets live only in **`.env.local`** (gitignored) and  
> `D:\Hermes\projects\_core-scripts\siteground-access\SiteGround_SFTP.md`.

**Live (2026-08-22):** LACCD Board Seat 2 one-pager on `public_html` (v2 photos, email, favicon, OG card, search meta). Google SERP still Senate until recrawl. Placeholders (committee / FPPC / donate) are still on the page.

## Full ship process (repeat this)

Local is Next.js. SiteGround is **files only** — shared hosting does not run Node. Ignore leftover `.env.local` `FTP_REMOTE_PATH=/nodejs/...`.

1. Stop `:3000` if `web:dev` is running (`npm run web:dev:stop`) — a production build while dev is up 500s localhost.
2. `npm run site:build:static` — writes `out/`.
3. `npm run site:preview` — check **http://localhost:5066/** (this is what will go live).
4. `npm run siteground:deploy:dryrun` — lists remote, no changes.
5. `npm run siteground:deploy:clean` — **wipes** `public_html` then uploads `out/`. Needed so old Senate `.html` / `_next` files do not remain. Do **not** `--clean` any other domain on this SFTP account.
6. `npm run siteground:purge-cache` — flush SuperCacher (see below). Bare `https://kristinairwin.com/` can keep serving the **old** HTML until this runs.
7. Verify in a private window. Do not change DNS MX (`smtp.google.com`).

```powershell
cd D:\Hermes\projects\Kristina-Irwin-Site
npm run web:dev:stop
npm run site:build:static
npm run site:preview
npm run siteground:deploy:dryrun
npm run siteground:deploy:clean
npm run siteground:purge-cache
```

Optional staging subfolder (no `--clean` on web root):

```powershell
node scripts/siteground-deploy.mjs --remote /kristinairwin.com/kristinairwin.com/public_html/preview --confirm
```

## SuperCacher flush (2026-08-21 — what actually worked)

After upload, nginx Dynamic Cache kept the Senate homepage on the bare URL even though SFTP `index.html` was already the new page. Cache-bust `?nocache=` showed the new title.

| Approach | Result |
|----------|--------|
| Site Tools → Speed → Caching → Flush | Official UI. Works. Not required if the script below works. |
| SSH `exec` of `curl -X PURGE http://127.0.0.1/* -H "Host: kristinairwin.com"` | **Denied.** This account is SFTP-only (`Unable to exec`). |
| One-shot PHP in `public_html` that PURGEs `127.0.0.1` with Host `kristinairwin.com` and `www.kristinairwin.com`, then **delete the PHP file** | **Worked.** Response title `Successful purge`. Script: `npm run siteground:purge-cache`. |

The helper PHP uses a random name (`ki-purge-<hex>.php`) and is deleted in a `finally` block. Do not leave purge scripts on the server.

Fallback if the script fails: Site Tools → Speed → Caching → Dynamic Cache → Flush for this site.

## Env keys (must be SET in `.env.local`)

| Key | Purpose |
|-----|---------|
| `SITEGROUND_SFTP_HOST` | SFTP host |
| `SITEGROUND_SFTP_PORT` | Usually `18765` |
| `SITEGROUND_SFTP_USER` | SFTP username |
| `SITEGROUND_SFTP_PASSWORD` | Passphrase for key (or password if no key) |
| `SITEGROUND_SFTP_KEY` | Path to PEM reference file under `_core-scripts\siteground-access\` |
| `SITEGROUND_REMOTE_PATH` | Web root `/kristinairwin.com/kristinairwin.com/public_html` |

## DNS / SSL

See `.cursor/docs/archive-reference/`. Nameservers are SiteGround; Google Workspace **MX must stay intact**. Let’s Encrypt from the June cutover expires **2026-09-23**.

## Archive vs this repo

| | Archive | This project |
|--|---------|--------------|
| Path | `_archive\Kristina-Irwin` | `Kristina-Irwin-Site` |
| Scope | Multi-page Senate campaign | **LACCD Seat 2 one-pager** (live 2026-08-21) |
| Deploy | Same SiteGround account / domain | Same SFTP `public_html` |
