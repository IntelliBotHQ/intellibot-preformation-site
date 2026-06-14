# IntelliBot V8.3 Restore V7 Logo and CSS Patch

## Purpose

This patch restores the correct Website V7 assets and stylesheet.

It corrects the prior bad logo changes by reverting the website's active logo/icon/CSS surface back to the V7 package assets.

## Replace these files in GitHub

Upload/replace the following files in the public GitHub Pages repository:

- `assets/style.css`
- `assets/intellibot-emblem.png`
- `assets/favicon.png`
- `assets/icon-192.png`
- `index.html`
- `404.html`
- `product/index.html`
- `interface/index.html`
- `roadmap/index.html`
- `trust/index.html`
- `disclosures/index.html`
- `privacy/index.html`
- `terms/index.html`
- `contact/index.html`

## Delete these incorrect files if present

Delete these files from the public GitHub Pages repository if they exist:

- `assets/intellibot-shield-badge-tt169-v8.png`

## What this patch does

- Restores `assets/style.css` from Website V7.
- Restores the correct V7 logo asset: `assets/intellibot-emblem.png`.
- Restores the correct V7 favicon and mobile icon.
- Restores HTML logo references so the header/brand image points back to `assets/intellibot-emblem.png`.
- Removes dependence on the incorrect V8 shield/check badge asset.
- Does not alter DNS, GitHub Pages settings, Microsoft 365 email, TPMS files, investor materials, or website content strategy.

## Deployment recommendation

Use this patch directly over the current public repo. Then delete `assets/intellibot-shield-badge-tt169-v8.png` if it remains in the repository.
