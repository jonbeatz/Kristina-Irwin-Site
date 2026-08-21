# ReCall.md — Kristina-Irwin-Site Memory

## Current Focus

- [2026-08-21] **One-pager is built** on branch `Kristina-Irwin-Site-Project-v1` (GitHub private). Commits `d270591` (ship) + `9ac42e8` (nav/polish). **Do not deploy to SiteGround** until Kristina reviews and committee / FPPC / donate URLs are real.
- **Live kristinairwin.com** is still the old **Senate D24** static export. Upload will replace it.
- **Local:** `npm run web:dev` → http://localhost:3000/ (iPhone on LAN: `http://192.168.0.222:3000` when that adapter is up).
- **Next:** client review → fill placeholders → `site:build:static` → `siteground:deploy:dryrun` → confirm → `siteground:deploy`.

## One-pager (what shipped)

Single page: sticky/full-width nav, hero, vote bar, Why, Priorities, About, Involve, footer, back-to-top.

| Piece | Lock |
|-------|------|
| Office | LACCD Board of Trustees, **Seat 2**, election **November 3, 2026** |
| Nav | Text **KRISTINA** (red) **IRWIN** (navy). Graphic Senate/star mark **commented out** in `SiteNav.tsx` — do not use in the bar (duplicates the hero logo; jagged raster). |
| Hero logo | `public/images/ki-logo-b.png` (tight crop). Size ~368px desktop. `mix-blend-mode: lighten` for black PNG on navy. |
| Photos | Originals from `.cursor/assets/KI-Photos/` → `public/images/` (`kristina-portrait.jpg`, `kristina-work.jpg`, `kristina-phone.jpg`). Hero uses **contain** so waist/books show. |
| Headline | Community = peach **script**; Colleges. = same peach, **serif**. |
| Gutter | `--ki-gutter: 52px` — nav wordmark, Meet Kristina, vote bar left/right share it. |
| Mobile menu | Cream row + red left bar for current section; Get Involved stays full-width red CTA; dim scrim to close. |
| Placeholders | `info@kristinairwin.com`; footer “Paid for by [Official Committee Name] • FPPC ID #[Number]”; involve note says sample links. **Donate button deferred** until she reviews. |

Assets stay under **`.cursor/assets/`** (mockups `KI-MockUps/`, photos `KI-Photos/`). Do not recreate root `Assets/`.

## Decisions

- Full-width nav (not 1280 centered) so it matches the full-bleed hero.
- Keep nav as type, not the old Senate lockup.
- No SiteGround upload this session.
- Never `npm run web:build` while `web:dev` is running — production `.next` 500s the dev server. Stop `:3000`, wipe `.next`, restart `web:dev`.

## Git

- Branch: `Kristina-Irwin-Site-Project-v1`
- `archive/` still gitignored and skipped by backups.

---

*Last Entry: 2026-08-21*
