# Restore Points — Kristina-Irwin-Site

| ID | Date | Notes |
|----|------|-------|
| RP-2026-08-22-v2-start | 2026-08-22 | Cut `Kristina-Irwin-Site-Project-v2` at **2.0.0**. Frozen: `Kristina-Irwin-Site-Project-v1` @ `1865e60`. Pre-cut backup: `G:\Hermes_Project_BackUpz\Kristina-Irwin-Site\kristina-irwin-site-project-v1-b`. Restore v1: `git fetch origin && git checkout Kristina-Irwin-Site-Project-v1 && git reset --hard 1865e60`. Restore v2: `git fetch --tags origin && git checkout Kristina-Irwin-Site-Project-v2 && git pull`. |
| RP-2026-08-22-v2-nits-live | 2026-08-22 | v2 photos / email / favicon / OG card live on https://kristinairwin.com. Redeploy: `web:dev:stop` → `site:build:static` → `siteground:deploy:clean` → `siteground:purge-cache`. |
| RP-2026-08-22-seo-meta | 2026-08-22 | Search tags live (`lib/site.ts` + `public/robots.txt` + `public/sitemap.xml`). Google still Senate until recrawl. |

*Leave `main` untouched unless the operator asks to merge.*
