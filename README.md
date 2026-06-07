# IntelliBot — Pre-Formation Informational Website

This repository is the publication-safe interim website for **IntelliBot**, a product initiative in development.

## Publication posture

This public repository intentionally contains only website-public materials:

- Public static HTML pages and styling.
- Emblem-only branding without a corporate suffix.
- General product direction, roadmap, trust/safety, disclosures, privacy, terms, and contact pages.
- GitHub Pages configuration files.

It intentionally excludes:

- TPMS or application-development repositories.
- Internal compliance documents or incident-response plans.
- Investor brochures, offering materials, SAFE terms, valuation data, or funding workflows.
- Beta enrollment forms or waitlist collection.
- Optional analytics or advertising pixels.
- Trading credentials, API keys, secrets, or private account data.

## Hosting platform

This site is deployed using **GitHub Pages** from a public repository owned by the `IntelliBotHQ` GitHub Organization.

This package is not configured for Vercel and contains no Vercel deployment file.

## Expected web addresses

Replace `<repository-name>` below with the exact GitHub repository name you created.

| Purpose | Address format |
| --- | --- |
| Public repository source | `https://github.com/IntelliBotHQ/<repository-name>` |
| GitHub Pages preview/default project URL | `https://intellibothq.github.io/<repository-name>/` |
| Intended custom-domain website | `https://intellibot.us` |
| Intended `www` redirect/variant | `https://www.intellibot.us` |

A special repository named `intellibothq.github.io` is **not required** for this project-site deployment because the intended final website uses the verified custom domain `intellibot.us`.

## Upload requirement

Upload the **contents** of this ZIP to the root of the public website repository so that `index.html` is at repository root.

Required root-level items include:

```text
.nojekyll
CNAME
index.html
404.html
assets/
product/
roadmap/
trust/
disclosures/
privacy/
terms/
contact/
robots.txt
sitemap.xml
README.md
GITHUB_PAGES_DEPLOYMENT_CHECKLIST.md
PUBLICATION_SAFETY_MANIFEST.md
WEBSITE_V5_PRODUCT_ROADMAP_UPDATE_NOTES.md
```

## GitHub Pages settings

In the public website repository:

1. Open **Settings → Pages**.
2. Set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/(root)`.
4. Save.
5. Under **Custom domain**, enter `intellibot.us`.
6. Confirm that the repository retains a root `CNAME` file containing `intellibot.us`.
7. Enable **Enforce HTTPS** when GitHub makes the option available.

## DNS safety

Preserve all Microsoft 365 email records and the existing GitHub organization-domain verification TXT record. Add or replace only the website routing records necessary for GitHub Pages. See `GITHUB_PAGES_DEPLOYMENT_CHECKLIST.md`.

## Development restriction

No beta form, optional analytics, investor funnel, trading functionality, or commercial workflow should be added to this interim public site until the applicable governance and legal review gates are satisfied.

## V5 Product/Roadmap Update

This package updates the Product and Roadmap pages to replace generic placeholder language with professional, detailed, public-safe product and roadmap content aligned to the current TT-169 V2.8 product direction.
