# One-pager — design locks

Living notes for the LACCD Seat 2 campaign page. **TRUTH.md** still wins if this drifts.

## Status (2026-08-21)

Ready for **client review**. Not live. Placeholders remain (email, donate, FPPC).

## Brand

| Token | Value |
|-------|--------|
| Red | `#c41230` |
| Navy | `#1a2b48` |
| Peach / script | `#f5d5c5` |
| Champagne (hero photo panel) | `#e6dfd4` |
| Gutter | `--ki-gutter: 52px` |
| Display | Cormorant Garamond |
| UI | Source Sans 3 |
| Script (Community) | Allura |

## Nav

- Wordmark text only. Graphic `logo-nav-mix.png` is in `public/images/` and **commented out** in `components/SiteNav.tsx`.
- Full width; padding matches hero copy.

## Hero

- Logo: `ki-logo-b.png`
- Photo: `kristina-portrait.jpg`, `object-fit: contain`
- “Community” peach script; “Colleges.” peach serif

## Do not

- Deploy until committee name, FPPC ID, and donate URL are confirmed
- Mix `archive/live-site-2026-06/` (Senate multi-page) into root `app/`
- Run `web:build` while `web:dev` is on `:3000`
