# BL Rocky

this is the website for the BL Rocky Horror shadow cast. The public site presents upcoming events, venue-specific marquee designs, promotions, cast information, and audience details in a responsive static homepage.

The public deployment is intentionally limited to the static site and its public assets:

- `index.html` and public assets: the audience-facing site, deployed through GitHub Pages.
- Public JSON data and uploaded media: served from the configured HTTPS storage host (In Google Cloud)
- The PHP editor, private originals, backups, deployment credentials, and working notes remain outside this public repository.

The site is a static frontend, so GitHub Pages can serve it without a PHP runtime. Event and venue data are loaded from the public storage endpoint configured in `public-data-config.js`.

Code Developed and deployed in part by OpenAI's Codex 

