# GitHub Pages Deployment Checklist for `intellibot.us`

## Repository and Pages configuration

1. Use your existing **public** GitHub repository under the `IntelliBotHQ` organization.
2. Upload all files in this package to repository root; `index.html` must be at root.
3. Commit the uploaded files to the `main` branch.
4. Open repository **Settings → Pages**.
5. Set:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/(root)`
6. Save and wait for GitHub Pages to publish.
7. GitHub may initially display the site at:
   - `https://intellibothq.github.io/<repository-name>/`
8. In Pages settings, enter the custom domain:
   - `intellibot.us`
9. Retain the root `CNAME` file containing:
   - `intellibot.us`

## Important URL distinction

| Item | Address pattern |
| --- | --- |
| Repository files | `https://github.com/IntelliBotHQ/<repository-name>` |
| Hosted GitHub Pages project site | `https://intellibothq.github.io/<repository-name>/` |
| Final custom public website | `https://intellibot.us` |

The `github.com` repository page is not the public website URL.

## GoDaddy DNS records for GitHub Pages

Before modifying DNS, screenshot or export your current GoDaddy DNS records.

### Preserve existing records

Do not delete or alter:

- Microsoft 365 `MX` record(s).
- Microsoft 365 SPF `TXT` record.
- `autodiscover` CNAME.
- DKIM CNAME records, if present.
- DMARC TXT record, if present.
- Microsoft verification TXT record, if present.
- GitHub organization/domain verification TXT record already added.

### Remove or replace only conflicting website-parking records

Remove or replace only records currently sending the website to GoDaddy parking/forwarding, such as an old `@` website `A` record or an old `www` website CNAME.

### Add GitHub Pages apex A records

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

### Add the `www` CNAME

| Type | Host | Value |
| --- | --- | --- |
| CNAME | `www` | `intellibothq.github.io` |

Do not include the repository name in the CNAME target.

### Optional IPv6 records

| Type | Host | Value |
| --- | --- | --- |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

## Verification after DNS changes

In Windows PowerShell:

```powershell
Resolve-DnsName intellibot.us -Type A
Resolve-DnsName www.intellibot.us -Type CNAME
Resolve-DnsName intellibot.us -Type MX
```

Expected:

- `intellibot.us` A records resolve to GitHub Pages IP addresses.
- `www.intellibot.us` CNAME resolves to `intellibothq.github.io`.
- The MX record still resolves to Microsoft 365 mail service.

## Final tests

- Open `https://intellibot.us`.
- Open `https://www.intellibot.us`.
- Confirm HTTPS is enabled in GitHub Pages.
- Send a test email to `info@intellibot.us`.
- Send a test email from `info@intellibot.us`.
- Confirm no parked-page advertising remains.
