# Issues Resolved — Kristina-Irwin-Site

| Date | Issue | Fix |
|------|-------|-----|
| 2026-09-03 | Bare https://kristinairwin.com/ unstyled / missing Involve polish after `--clean` deploy; `?v=ship` looked correct | SuperCacher Dynamic Cache held stale HTML (old CSS hashes deleted). Site Tools → Speed → Caching → Dynamic Cache → Flush. Automated `siteground:purge-cache` failed (loopback PURGE dead). |
| 2026-08-21 | Bare URL still Senate homepage after SFTP upload | SuperCacher flush via one-shot PHP PURGE (later broken 2026-09-03) / Site Tools Flush |
