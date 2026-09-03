# SiteGround Deploy — Kristina Irwin Site

Production host for **https://kristinairwin.com**. Static Next export (`out/`) uploads over **SFTP**.

> Secrets live only in **`.env.local`** (gitignored) and  
> `D:\Hermes\projects\_core-scripts\siteground-access\SiteGround_SFTP.md`.

**Live (2026-09-03):** LACCD Board Seat 2 one-pager with Involve polish (Donate by Check, Download Form, About photo swap, footer band). Committee / FPPC placeholders still on the page. Google SERP may still show Senate until recrawl.

## Full ship process (repeat this)

Local is Next.js. SiteGround is **files only** — shared hosting does not run Node. Ignore leftover `.env.local` `FTP_REMOTE_PATH=/nodejs/...`.

1. Stop `:3000` if `web:dev` is running (`npm run web:dev:stop`) — a production build while dev is up 500s localhost.
2. `npm run site:build:static` — writes `out/`.
3. `npm run site:preview` — check **http://localhost:5066/** (this is what will go live).
4. `npm run siteground:deploy:dryrun` — lists remote, no changes.
5. `npm run siteground:deploy:clean` — **wipes** `public_html` then uploads `out/`. Needed so old Senate `.html` / `_next` files do not remain. Do **not** `--clean` any other domain on this SFTP account.
6. **Flush SuperCacher** — bare `https://kristinairwin.com/` can keep serving **stale HTML** (or unstyled HTML if `--clean` removed old CSS hashes). See below.
7. Verify in a private window (or hard refresh). Do not change DNS MX (`smtp.google.com`).

```powershell
cd D:\Hermes\projects\Kristina-Irwin-Site
npm run web:dev:stop
npm run site:build:static
npm run site:preview
npm run siteground:deploy:dryrun
npm run siteground:deploy:clean
# Then flush Dynamic Cache in Site Tools (primary as of 2026-09-03)
# Optional: npm run siteground:purge-cache  — currently fails on this box
```

Optional staging subfolder (no `--clean` on web root):

```powershell
node scripts/siteground-deploy.mjs --remote /kristinairwin.com/kristinairwin.com/public_html/preview --confirm
```

## SuperCacher flush

After upload, nginx Dynamic Cache can keep the **previous** homepage on the bare URL even though SFTP `index.html` is already new. A query-string cache-bust (`?v=ship`, `?nocache=1`) shows the new page while bare `/` stays stale — **same files**, different cache key. That is not a second site.

| Approach | Result (as of 2026-09-03) |
|----------|---------------------------|
| **Site Tools → Speed → Caching → Dynamic Cache → Flush Cache** | **Primary. Works.** Confirmed after Involve polish ship. |
| SSH `exec` of `curl -X PURGE http://127.0.0.1/* -H "Host: kristinairwin.com"` | **Denied.** This account is SFTP-only (`Unable to exec`). |
| One-shot PHP in `public_html` that PURGEs `127.0.0.1` (`npm run siteground:purge-cache`) | **Broken on this box (2026-09-03):** loopback PURGE no longer connects; external PURGE → **403**. Do not rely on it until the script is fixed. |

If you try the PHP helper and it somehow uploads: it uses a random name (`ki-purge-<hex>.php`) and should delete itself in a `finally` block. Do not leave purge scripts on the server.

**Verify after flush:** curl/browser with a normal UA to `https://kristinairwin.com/` (not only `?v=ship`). Expect Donate by Check + current `_next/static/css/*.css` hashes. PowerShell `Invoke-WebRequest` without a browser User-Agent may get SiteGround **403** — use `curl.exe -A Mozilla/...` or a real browser.

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
| Scope | Multi-page Senate campaign | **LACCD Seat 2 one-pager** (live 2026-08-21; Involve polish 2026-09-03) |
| Deploy | Same SiteGround account / domain | Same SFTP `public_html` |
