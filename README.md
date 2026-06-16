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

## V6 concept UI preview update

This package adds publication-safe concept UI preview assets to the Home and Product pages.

The images are marked and captioned as:

- concept UI preview;
- illustrative only;
- not live software;
- not live trading data;
- not beta screenshots;
- not performance evidence;
- subject to change.

This update does not activate beta enrollment, analytics, investor solicitation, product downloads, or any commercial workflow.


## V7 robust concept UI gallery update

This package updates the public GitHub Pages website with a fuller concept UI gallery based on the current TT-169 / V2.8 interface direction images supplied by the project owner.

New public-facing additions:

- Dedicated `/interface/` concept gallery page.
- Homepage interface showcase using the updated dashboard, live-trading, backtesting, and risk-center concept panels.
- Product-page gallery covering Dashboard, Live Trading, Strategies, Backtesting, Risk Center, Reporting, and Settings.
- Expanded disclosure language covering all concept interface imagery.
- Updated sitemap entry for `/interface/`.

Publication boundary:

The concept images are included to communicate product direction and planned interface robustness. They are not live software, beta screenshots, live trading data, account records, backtest evidence, performance evidence, or product-readiness evidence.


## V7.1 interface-gallery consolidation update

This package supersedes Website V7 for public website deployment while preserving the Website V7 logo and CSS assets.

V7.1 consolidates prototype/user-interface images into the dedicated `/interface/` page only. The homepage and Product page now use text-only interface callouts that direct visitors to the Interface Gallery.

No logo, icon, CSS, DNS, GitHub Pages setting, beta, analytics, investor, product-download, or live-trading-access change was made.


## V7.2 professional overhaul update

This package supersedes Website V7.1 for public website deployment.

V7.2 keeps GitHub Pages static hosting, but upgrades the presentation layer with richer semantic HTML, professional card/timeline layouts, improved copy, hover effects, and a local JavaScript interface-gallery lightbox.

Key changes:

- Professional homepage copy and control-stack presentation.
- Product page rewritten around the operating model rather than repeated interface visuals.
- Interface page upgraded with click-to-enlarge image previews.
- Roadmap page converted into a phase-gated timeline.
- Trust page converted into safety-architecture cards.
- Disclosures page converted from table-style presentation into disclosure cards.
- Contact page clarified as a general contact channel only.
- Interface images updated so the embedded upper-left brand treatment uses the approved IntelliBot emblem direction.
- No logo asset replacement, favicon replacement, DNS change, beta signup, analytics, investor funnel, product download, or live trading access was added.

## V7.2.1 interface image defect correction

This package supersedes Website V7.2 for public website deployment. It removes the wide logo overlay/label treatment from concept UI images, rebuilds the mockups from the V7.1 source images, limits the correction to the small upper-left icon area, and standardizes the Interface Gallery so all thumbnails display at the same size before enlargement.
