# OfferGrid — Cloudflare Pages static marketing directory

This folder is a standalone mobile-responsive static affiliate resources directory. It has no dependencies, database, tracking service, or server-side code. It is suitable for Cloudflare Pages Git deployment.

## Cloudflare Pages configuration

- GitHub repository: `affiliaterepo/affiliate`
- Production branch: `offergrid-pages`
- Build command: leave blank (or `exit 0`)
- Build output directory: `offergrid`
- Framework preset: None
- Project name: `offergrid` if available; otherwise choose another available short name.

Go to https://dash.cloudflare.com/?to=/:account/workers-and-pages and select Create > Pages > Connect to Git. Authorize only this repo when prompted. Use the values above. Cloudflare assigns an actual `*.pages.dev` URL after a successful deployment; do not assume it in advance.

Pages at `/`, `/privacy.html`, `/disclosure.html`, `/about.html`. No external form submission on this static directory. It contains external promotional links and no earnings guarantees.

When the actual production hostname is confirmed, add the verified canonical and sitemap URLs, check response status and outbound links, and submit the exact live URL to search engines if desired.

The site was split from the existing ClickReels directory so no live Netlify project is needed or touched for future Cloudflare deployments.
