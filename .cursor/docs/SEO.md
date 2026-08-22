# SEO — search snippets for kristinairwin.com

Google and DuckDuckGo are still showing **old Senate District 24** copy because they cached the previous site. We cannot push a live SERP update; we publish the tags, then they recrawl.

## What we control (on the site)

| Tag | What it usually becomes | Where to edit |
|-----|-------------------------|---------------|
| `<title>` | Blue headline | `SITE.title` in `lib/site.ts` |
| `<meta name="description">` | Gray snippet under the title | `SITE.description` in `lib/site.ts` |
| `og:title` / `og:description` / `og:image` | Facebook, iMessage, LinkedIn cards | same `SITE` fields + `app/opengraph-image.jpg` |
| Canonical | Preferred URL (apex, not `www`) | `SITE.url` |
| `robots.txt` + `sitemap.xml` | Crawl hints | `public/robots.txt`, `public/sitemap.xml` |
| JSON-LD (`Person` + `WebSite`) | Extra context for Google | `app/layout.tsx` |

**To change copy later:** edit `SITE.title` / `SITE.description` in `lib/site.ts` only, then `site:build:static` → `siteground:deploy:clean` → `siteground:purge-cache`.

Google often truncates descriptions around **150–160 characters**. The current bio is longer (~192) so the end may be cut in results until shorter official copy exists.

## What we do not control

- **Crawl timing** — days to weeks; sometimes longer for a low-traffic domain.
- **Sitelinks** (About / Issues / Endorsements / Events) — leftover from the old multi-page Senate site. Those URLs now 404; Google drops them after recrawl. Do not rebuild fake Senate pages to “fill” them.
- **Exact wording** — Google may quote a page paragraph instead of the meta description.

## After each live ship (best practice)

1. Confirm live HTML: view-source on https://kristinairwin.com/ — `meta name="description"` should match `SITE.description`.
2. Open [Google Search Console](https://search.google.com/search-console) for this domain (verify once via DNS or HTML file).
3. **URL inspection** → `https://kristinairwin.com/` → **Request indexing**.
4. Submit `https://kristinairwin.com/sitemap.xml` under Sitemaps.
5. Optional: [Rich Results Test](https://search.google.com/test/rich-results) for the JSON-LD.

DuckDuckGo and Bing lag independently; Bing Webmaster Tools is the equivalent request-index path there.

## Canonical: apex vs www

This site’s canonical is **`https://kristinairwin.com`** (no `www`). Google currently displays `www.kristinairwin.com` from the old site. Both hosts should serve the same files; the canonical tag tells Google to prefer apex.
