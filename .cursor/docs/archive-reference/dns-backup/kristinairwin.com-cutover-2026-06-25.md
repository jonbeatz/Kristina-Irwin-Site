# DNS Cutover Log — kristinairwin.com (2026-06-25)

## What was done

### SiteGround (pre-cutover — zone was inactive until NS switch)
- Static site deployed to `public_html` (WordPress replaced)
- DNS zone prepared with:
  - **A** `@` + `www` → `35.215.107.60`
  - **MX** → `smtp.google.com` (priority 1) via SiteGround "Switch to Google MX"
  - **TXT** SPF → `v=spf1 include:_spf.google.com ~all`
  - **TXT** Google verification → `google-site-verification=UVE7YHxujm4EduypU2AZjpRQwIyxyta-LyCqUDJefgo`

### Namecheap (cutover — 2026-06-25 ~15:30 PT)
- Nameservers changed from Wix → SiteGround:
  - **Before:** `ns10.wixdns.net`, `ns11.wixdns.net`
  - **After:** `ns1.siteground.net`, `ns2.siteground.net`

## Rollback
At Namecheap → Domain List → Manage `kristinairwin.com` → Nameservers → Custom DNS:
```
ns10.wixdns.net
ns11.wixdns.net
```

## SSL fix (2026-06-25 ~16:00 PT)
The old `*.kristinairwin.com` Let's Encrypt **Wildcard** cert was **EXPIRED**
(03/31/2026) → browsers showed `NET::ERR_CERT_DATE_INVALID`.
- Issued a fresh **Let's Encrypt** cert for `kristinairwin.com` via SiteGround
  Site Tools → Security → SSL Manager → Install. Status **ACTIVE**, expires **09/23/2026**.
- **HTTPS Enforce** confirmed **ON** (Security → HTTPS Enforce).
- Verified against SiteGround IP (`--resolve`): apex + www both return
  `200 OK` over HTTPS, `ssl_verify=0` (valid), and `http://` → `301` → `https://`.
- Page title served: "Kristina Irwin for California State Senate, District 24".

## Post-cutover checklist
- [x] DNS NS propagates to SiteGround (NS + www confirmed on 8.8.8.8)
- [x] https://kristinairwin.com serves new static build (200 OK, our title)
- [x] SiteGround SSL Manager issues Let's Encrypt cert (ACTIVE → 09/23/2026)
- [x] HTTPS Enforce on (http → https 301)
- [x] Apex A propagates to SiteGround (`35.215.107.60` on 8.8.8.8 + 1.1.1.1)
- [x] MX resolves to Google (`smtp.google.com` pri 1) — valid modern Google Workspace MX
- [x] SPF + Google site-verification TXT intact
- [x] DMARC present (`p=none`)
- [x] Preview at https://kristina-irwin.myvizionstudio.com/ remains available (Netlify)
