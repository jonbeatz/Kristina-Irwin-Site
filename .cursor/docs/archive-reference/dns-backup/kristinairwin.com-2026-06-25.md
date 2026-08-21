# DNS Backup — kristinairwin.com (captured 2026-06-25, pre-cutover)

Snapshot of the **current live DNS** before pointing the domain to SiteGround.
Source: public resolver `8.8.8.8` (Google). Use this to roll back if needed.

## Topology (current)
- **Registrar:** Namecheap (account `kristinairwin2022`)
- **DNS host / nameservers:** **Wix** — `ns10.wixdns.net`, `ns11.wixdns.net`
- **Web hosting:** **Netlify** (Movement Makers' site `grand-tiramisu-1df3fe.netlify.app`)
- **Email:** **Google Workspace** (MX → google) — ⚠️ MUST be preserved through any cutover

## Records (authoritative values to preserve / restore)

### Nameservers (NS) — set at Namecheap registrar
```
ns10.wixdns.net
ns11.wixdns.net
```

### Apex A — kristinairwin.com
```
A   @   75.2.60.5          # Netlify apex load balancer
```

### www
```
CNAME   www   grand-tiramisu-1df3fe.netlify.app
```

### MX — Google Workspace (PRESERVE EXACTLY)
```
MX  @  10  aspmx.l.google.com
MX  @  20  alt1.aspmx.l.google.com
MX  @  30  alt2.aspmx.l.google.com
MX  @  40  alt3.aspmx.l.google.com
MX  @  50  alt4.aspmx.l.google.com
```

### TXT (PRESERVE EXACTLY)
```
TXT  @  "v=spf1 include:_spf.google.com ~all"
TXT  @  "google-site-verification=UVE7YHxujm4EduypU2AZjpRQwIyxyta-LyCqUDJefgo"
```

### SOA
```
PrimaryServer: ns10.wixdns.net   Admin: support.wix.com   Serial: 2026010719
```

### Not present (checked)
- No `_dmarc` TXT, no `google._domainkey` TXT (standard selector), no `mail`/`ftp`/`webmail` records.

## SiteGround target (where we're pointing)
- **Site IP:** `35.215.107.60`
- **SiteGround nameservers:** `ns1.siteground.net` (75.2.77.104), `ns2.siteground.net` (99.83.229.113)
- **Web root:** `/kristinairwin.com/kristinairwin.com/public_html`

## Rollback
- **If we changed Namecheap nameservers:** set them back to `ns10.wixdns.net`, `ns11.wixdns.net`.
- **If we edited records in Wix DNS:** restore apex A `75.2.60.5` and www CNAME `grand-tiramisu-1df3fe.netlify.app`.
- Email is unaffected as long as the 5 Google MX records + SPF TXT above remain intact.

> ⚠️ Before cutover, also export the FULL record set from the **Wix DNS panel**
> (login needed) to catch anything not visible publicly (extra subdomains, DKIM
> with a non-standard selector, CNAME verification records, etc.).
