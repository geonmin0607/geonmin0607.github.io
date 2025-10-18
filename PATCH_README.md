# Patch Instructions

## Delete (to avoid conflicts)
- `projects/` **if** it contains legacy static pages (we provide a new listing index). If you keep our new index, remove old ones under `projects/`.
- One of `index.html` or `index.md` (keep only one; recommend keeping `index.md`).
- Any `_pages` that redefine `/projects`, `/pocs`, or `/patents` routes.

## Add/Replace
- Replace `_config.yml` with the included one.
- Add `_data/navigation.yml`.
- Add listing pages: `projects/index.md`, `pocs/index.md`, `patents/index.md`.
- Add entries under `/_projects`, `/_pocs`, `/_patents`.

## Build
Commit & push, then verify GitHub Pages build in Actions → pages-build-deployment.
