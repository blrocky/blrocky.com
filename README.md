# BL Rocky

BL Rocky is the website for the Barely Legal Rocky Horror shadow cast. The public site presents upcoming events, venue-specific marquee designs, promotions, cast information, and audience details in a responsive static homepage.

The public deployment is intentionally limited to the static site and its public assets:

- `index.html` and public assets: the audience-facing site, deployed through GitHub Pages.
- Public JSON data and uploaded media: served from the configured HTTPS storage host, with a public snapshot included so the homepage remains usable while storage HTTPS is being finalized.
- The PHP editor, private originals, backups, deployment credentials, and working notes remain outside this public repository.

The site is a static frontend, so GitHub Pages can serve it without a PHP runtime. Event and venue data are loaded from the public storage endpoint configured in `public-data-config.js`.

## Local Layout

- `index.html`: public homepage entry point.
- `public-data-config.js`: public data/media host configuration for the static page.
- `assets/`: public images, videos, icons, marquee layers, and switch frames used by the homepage.
- `fonts/`: public web fonts and the generated `fonts/site-fonts.css` file.
- `stuffworked-on-a-bit/rhps/data/`: local editable JSON data mirror.
- `stuffworked-on-a-bit/rhps/editor/public/`: PHP editor prototype.
- `scripts/`: deployment, storage sync, backup, and smoke-test helpers.
- `ops/`: VM, nginx, systemd, cron, and Google Cloud support files.
- `tools/`: reusable workbench pages such as marquee grid selectors and responsive previews.
- `docs/deployment/`: DNS, hosting, and deployment notes.
- `docs/notes/`: project notes, user handoffs, and future-work planning.
- `docs/archive/`: retired reference pages and old one-off artifacts kept for recovery.

## Local Preview

Run the static page and PHP editor together:

```sh
./start-python-server.sh
```

By default that serves the homepage at `http://127.0.0.1:8082/index.html` and the editor at `http://127.0.0.1:8080/?page=settings`.

## Deploy Safety

Before pushing the public page, run:

```sh
git diff --check
php -l stuffworked-on-a-bit/rhps/editor/public/index.php
```

Generated preview files, local temp files, editor uploads, editor-downloaded fonts, backup snapshots, and local credentials are intentionally ignored.
