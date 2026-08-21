# Wix Site Migration — Kristina (via Yolando)

**Status:** 🟢 Domain owned (Namecheap). ⚠️ **Live-site recon (2026-06-25b): kristinairwin.com is NOT Wix** — it's a finished, multi-page **static site on Netlify built by Movement Makers**, and donations run through **eFundraising Connections (not WinRed)**. The "migrate off Wix" premise no longer applies to this URL — confirm scope with client. Brand extracted exactly → `.cursor/DesignMD/DESIGN-KRISTINAIRWIN.md`; demo re-themed. Awaiting platform confirmation + brand originals + timeline.
**Logged:** 2026-06-25
**Source:** Email intro from Yolando ("The Starting Blocks" / startthepossible@gmail.com) connecting Jon + Kristina.
**Live site:** https://kristinairwin.com

---

## Intake log

### 2026-06-25b — Live-site recon (Jon-side, direct inspection of kristinairwin.com)
- **Platform: NOT Wix.** Hand-coded static site (`style.css` + `script.js`), hosted on **Netlify**, built by **Movement Makers** (`movementmakers.vote`). Multi-page: `/about /issues /endorsements /events /media /district /contact /privacy`.
- **Donations: eFundraising Connections**, not WinRed — `https://www.efundraisingconnections.com/c/KristinaIrwinforStateSenate2026` (site-wide). **Contradicts Yolando's WinRed claim — confirm.**
- **Brand (exact, from CSS):** red `#C41E3A`/`#9e1830`, navy `#1B2A4A`/`#162240`, white, paper `#f9f9f7`; Georgia body + Arial Black display; "IRWIN" red-serif wordmark + navy-star/red-swoosh mark. No gold/orange. → `.cursor/DesignMD/DESIGN-KRISTINAIRWIN.md`.
- **Action:** before any Phase 1 archive, confirm whether there's a separate older Wix site, or if kristinairwin.com is the live site and what Jon's engagement is (rebuild / maintain / build next). Asked in `.cursor/docs/intake/2026-06-25-reply-to-yolando.md`.

### 2026-06-25 — Yolando reply (screenshot: `.cursor/docs/intake/2026-06-25-yolando-reply.png`)
- **Domain:** registered to **Kristina at Namecheap** — Yolando confirmed he made sure of it. (Phase 0 resolved.)
- **Logo:** Yolando made it; in his **Canva** files (he'll check); Kristina should also have it in her **Google Drive**.
- **Photos:** shot by Yolando/associate; **originals in Kristina's Google Drive** (he sent them to her).
- **Donations:** **WinRed confirmed** — "not ActBlue, that blue is Democrat… I set up winRED for her." (She moved her donations; get the current WinRed URL.)
- **Meeting:** Yolando proposed a quick call (2:30 his time / 11:30 Jon's). Jon to decide on joining.
- **Open:** confirm current platform (Wix vs. already-migrated), email/SMS provider, timeline + budget, self-edit vs. Jon-maintained.

---

## Live site snapshot (reviewed 2026-06-25)

- **Candidate:** Kristina Irwin — **California State Senate, District 24**, 2026.
- **Affiliation:** Conservative Republican. **Committee:** "Irwin for State Senate 2026."
- **Tagline:** "Freedom. Family. Future."
- **Bio themes:** wife, working mother of three, first-generation immigrant (born in former Yugoslavia), real-estate professional, community advocate; activated by COVID lockdown / school / medical-freedom issues.
- **Priorities (4):** Medical Freedom & MAHA · Parental Rights · Clean Environment (geoengineering/water transparency) · Government Accountability (lower taxes, election integrity, fiscal responsibility).
- **Conversion:** email + SMS opt-in signup form (TCPA consent language), "Donate Today" CTA.
- **Donation:** assume **WinRed**.
- **Note:** the current live site already looks like a built campaign site (possibly already migrated off Wix, or a newer Wix build). **Confirm with Kristina/Yolando whether kristinairwin.com is the Wix site to migrate, or a separate/newer site.** Either way the content above is the source material to preserve + rebuild.

A demo starter rebuilt from this snapshot lives in `app/` (patriotic navy/red, original copy). Replace placeholder copy/photos with her approved assets when intake lands.

---

## The ask

1. **Now:** Move Kristina's website **off Wix** (her campaign team controls the current Wix hosting) and **preserve all her content**.
2. **Soon:** Build a **PAC website**, a **new campaign website**, and eventually an **app** (she may run for Congress).
3. **Big picture:** Jon + Yolando team up to **market web / app / graphics services to political candidates** — a business line, not just a one-off favor.

**Context:** Kristina was "robbed" of an election (a candidate added to the ballot late). She's non-technical and "didn't listen" to Yolando earlier, hence the rushed Wix situation.

> **CORRECTION (2026-06-25, from live site review of https://kristinairwin.com):**
> Kristina is running as a **conservative Republican** for **California State Senate, District 24** — platform: MAHA / medical freedom, parental rights, election integrity, government accountability, lower taxes. Tagline: **"Freedom. Family. Future."** Committee: **"Irwin for State Senate 2026."**
> Donation processor is therefore almost certainly **WinRed** (the Republican equivalent of ActBlue), **not ActBlue**. Confirm with her, but assume WinRed everywhere below.

---

## The honest truth about Wix (expectation-setting)

- **Wix is a closed, proprietary platform.** There is **no clean export** of a Wix site to HTML/CSS. The rendered code is machine-generated and not reusable for a rebuild.
- "Save the HTML and move it" is **not literally possible** the way she's picturing.
- **What IS possible (and better):**
  - **Full content archive** of the live site — every page's copy, all images, full-page screenshots — into a clean local folder (Firecrawl tooling: scrape / crawl / download / map / website-design-clone).
  - **Design-system extraction** (colors, fonts, layout, brand feel) into a spec so the rebuild looks like *her*.
  - **Wix blog** content specifically *can* be exported properly, if she has one.
  - **Domain** can be moved to her own control (most urgent piece).
- **Deliverable:** preserve 100% of content + brand, then **rebuild clean on a platform she owns**.

---

## The plan (phased)

**Phase 0 — Domain ownership: ✅ RESOLVED (per Yolando, 2026-06-25).**
`kristinairwin.com` is registered to **Kristina herself at Namecheap** (Yolando confirmed he made sure of this). No transfer scramble needed. **Action:** just confirm Kristina can log into her Namecheap account (or has the credentials) so we can repoint DNS when the rebuild is ready.

**Phase 1 — Archive everything: ✅ DONE (2026-06-25b).**
Faithful local mirror of the live static site (all 8 pages + `style.css` + `script.js` + 23 images,
~20 MB) at `_live-mirror/`, regenerable via `npm run site:mirror`, previewable at
`npm run site:mirror:preview` (→ http://localhost:5070). This is a byte-faithful copy (the live site
is plain static HTML/CSS/JS), so it doubles as the safety-net archive **and** the exact thing we'd own
and redeploy to her hosting. Screenshots in `.cursor/design-references/` (`shoot` script via Playwright).
Design spec: `.cursor/DesignMD/DESIGN-KRISTINAIRWIN.md`.

**Phase 2 — Rebuild on owned hosting.** Two routes:
- **WordPress on Hostinger** — she self-edits, easy donation embeds, cheap, fast. Best for a frequently-updated campaign site.
- **Custom Next.js (Jon's signature look)** — premium, cleanest; Jon maintains edits. Best as the flagship.

**Phase 3 — PAC site, campaign site, app.** Bigger paid engagements. PAC + campaign sites must be **legally distinct**.

---

## What we need FROM Kristina (intake checklist)

| # | Item | Status |
|---|------|--------|
| 1 | **Domain ownership** | ✅ **Resolved** — Kristina owns `kristinairwin.com` at **Namecheap**. Just confirm she has the login. |
| 2 | **Platform login / editor access** (or live URL + page list) | ⚠️ **Resolved (recon):** `kristinairwin.com` is a **Netlify static site built by Movement Makers — not Wix.** Confirm whether a separate older Wix exists, who controls the current site, and what Jon's job is (rebuild/maintain/build next). |
| 3 | **Logo files** | 🟡 Yolando made it — in his **Canva** files; Kristina should also have it in her **Google Drive**. Get the source/export. |
| 4 | **Photos** | 🟡 Shot by Yolando/associate; **originals in Kristina's Google Drive** (he sent them to her). Get the high-res originals. |
| 5 | **Connected services** — email/SMS list, contact forms, analytics | ⏳ Site has an email + SMS opt-in form (TCPA consent). Identify the provider to reconnect. |
| 6 | **Donation setup** | ⚠️ **Conflict:** live site uses **eFundraising Connections** (`/c/KristinaIrwinforStateSenate2026`), but Yolando said he set up **WinRed**. Confirm which is canonical + get the live donate URL. |
| 7 | **Timeline + budget**, self-edit vs. Jon-maintained | ⏳ Still needed — decides WordPress vs. custom Next.js. |
| 8 | **Exact colors / fonts** | 🟡 Derive from Canva logo + live site; confirm with Kristina. |

---

## Compliance flags (political work)

- Campaign + PAC sites legally need a **"Paid for by [Committee Name]" disclaimer**.
- Donations must route through a **compliant processor** — **WinRed** for Kristina (Republican). ActBlue is the Democratic equivalent (not used here).
- **FEC / PAC registration is her lawyer's job** — our job is only making the site compliant-looking. Mentioning this up front signals we've done political work.

---

## Tooling — evaluated 2026-06-25

### Decision: route picks the tool

| If Kristina wants… | Route | Primary tool |
|--------------------|-------|--------------|
| To **self-edit** her site, easy donations, low cost | **WordPress** | **data-liberation-agent** (export + rebuild) |
| A **premium flagship** in Jon's signature look, Jon maintains | **Custom Next.js** | **Firecrawl** (archive + DESIGN.md, build by hand) |

### ⭐ Installed & ready: Automattic data-liberation-agent

- **Repo:** https://github.com/Automattic/data-liberation-agent (Automattic / WordPress; actively maintained, updated Jun 2026).
- **Why:** dedicated **Wix adapter** — intercepts Wix's internal `/_api/` + `wixapis.com` calls and window globals (`__WIX_DATA__`), not just DOM scraping. Produces a **WordPress WXR** + media + `redirect-map.json` (protects SEO) + screenshots + design tokens. AI/MCP-driven.
- **Local path:** `tools/data-liberation-agent/` (gitignored — cloned + `npm install` done, Playwright Chromium downloaded). NOT committed to JonBeatz repo.
- **Wix playbook:** `tools/data-liberation-agent/prompts/wix.md` (6-step: inspect → extract → verify → setup WP → import → verify import). All content imports as **drafts** for review.
- **Quickstart (run from `tools/data-liberation-agent/`):**
  ```bash
  npm run inspect  -- [WIX URL]                              # detect platform, scan sitemap, feature flags
  npm run liberate -- [WIX URL] --output ./output --verbose  # full extract (resume with --resume)
  npm run verify   -- ./output/[site-dir]                    # QA before import
  npm run setup    -- --site [WP] --username [U] --token [APP-PW]
  npm run liberate -- import ./output/[site-dir]/output.wxr --site [WP] --username [U] --token [APP-PW]
  ```
- **Needs for full pipeline:** WordPress target (Hostinger WP or WordPress.com) + an **Application Password**. Extraction alone needs no WordPress. Optional **Automattic Studio** for local preview/import.
- **Wix login bonus:** with Kristina's editor login it can hit 10 authenticated content endpoints (`docs/wix-content-endpoints.md`) for more than a public scrape.

### Firecrawl (custom Next.js route)

`firecrawl-crawl`, `firecrawl-download`, `firecrawl-map`, `firecrawl-website-design-clone` → archive + `DESIGN.md`, then Jon builds on Hostinger. Use when the deliverable is the premium custom site, not WordPress.

### Tools rejected (do not re-research)

| Tool | Why not |
|------|---------|
| `wix-incubator/corvid` | Official Wix local-dev CLI — **deprecated since Jul 2021**, dead. (Successor "Velo" is in-platform only, can't export out.) |
| `wixtoolset/*` (WiX Toolset) | Name collision — Windows `.msi` installer builder, unrelated to Wix.com |
| `github.com/wix` org | Wix.com's open source = React Native mobile libs, not site export |
| CMS2CMS migrator plugin | Paid, **content only (no design)**, ancient (WP 4.0) |
| SiteForge / BrowserCat | Paid SaaS — our free tooling covers it |
| AntmanBI Python WixScraper | OK blog-only backup technique (sitemap + JSON-LD, `--render`); not primary |

---

## Next action when info arrives

1. Confirm **domain ownership** and start transfer if needed (Phase 0 — most urgent).
2. Get Kristina's **live URL** → pick route:
   - **WordPress:** `cd tools/data-liberation-agent` → `npm run inspect -- [URL]` → follow `prompts/wix.md`.
   - **Custom:** Firecrawl archive (crawl + download + screenshots + DESIGN.md).
3. Collect brand assets + donation processor (**WinRed**) → quote.

**Hosting/domain:** Hostinger MCP. The moment Jon hands over the URL, extraction can start immediately.

---

## Optional follow-up (not yet done)

- Draft a separate, more formal **first email to Kristina** with the full intake checklist (to send once Yolando connects them directly).
- If WordPress route chosen: install **Automattic Studio** for local preview before going live.
