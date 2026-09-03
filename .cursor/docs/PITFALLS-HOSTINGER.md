# Hostinger Pitfalls — Kristina-Irwin-Site

| Mistake | Fix |
|---------|-----|
| Staging updated, live stale | Sync to `KRISTINA_IRWIN_SITE_APP_ROOT`, hPanel Restart |
| Partial `.next` upload | Upload complete build folder |
| Wrong repo for MSC deploy | MSC = MyStudioChannel; this profile = Kristina-Irwin-Site |
| Committed `.env.local` | Never — gitignored |
| MCP red after env change | `npm run sync:mcp-env` + reload Cursor MCP |

---

*Bootstrap template — 2026-08-26*
