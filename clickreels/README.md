# ClickReels — Git-connected Netlify static site
This is a separate, self-contained marketing-education website within the repository. Existing root files and the `main` branch are not changed by this site.


## One-click Netlify setup

[Deploy ClickReels on Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/affiliaterepo/affiliate&branch=clickreels-netlify)

This official Netlify deployment flow preselects the GitHub repository and `clickreels-netlify` branch; Netlify might offer to create a copy of the repository. Log in and grant the requested GitHub access yourself, then confirm deployment. The root `netlify.toml` on this branch automatically publishes the `clickreels/` directory. **Do not paste a Netlify personal access token into the GitHub repo or chat.**

A Netlify URL is only real once Netlify finishes publishing. Choose a short site name if available under Netlify project settings.

**Alternative manual import:** Open https://app.netlify.com/start, choose **Import an existing project**, **GitHub**, and repository **affiliaterepo/affiliate**. If prompted, authorize the Netlify GitHub App only for this repo. Choose the production branch **clickreels-netlify**, leave **Base directory** blank, leave **Build command** blank, and set **Publish directory** to **clickreels**. Publish, then choose a short available site name such as **clickreels** (or `reelpath` or `tapreels`).

Once Netlify confirms the exact domain, the intended pages are `/`, `/reels`, `/go`, `/free`, `/privacy`, `/about` and `/disclosure`.

**Automatic behavior:** JavaScript determines Vancouver's local clock hour and features 1 of 24 original animated text lessons. Pages rotate without a server, scheduler, Instagram API, Metricool or hourly Git commits. Site updates made to the `clickreels-netlify` Git branch trigger Netlify rebuilds **after you authorize this Git connection**.

**Claims and limits:** These are Instagram-style animated web cards, not downloadable video reels and not posts on Instagram. Outbound buttons are voluntary with affiliate disclosure and no guaranteed visitors, leads, sales or earnings. /go and /free are transparent noindex intermediary resource pages, not forced redirects.

**Safety:** No API tokens or secrets are needed in this repository. Do not put a Netlify personal access token in Git or chat. Verify the live URL and terms after publishing.
