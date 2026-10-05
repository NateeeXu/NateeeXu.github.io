# Nate Xu — Portfolio

Personal site at https://nateeexu.github.io, in English (`/`) and Chinese (`/zh/`).
Next.js static export, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit content

All copy for both languages lives in `app/content.js`. Facts there follow the
product and hardware résumés in `public/`. Page structure is in
`components/Portfolio.js`; styles are in `app/globals.css`.

Images live in `public/images/` as WebP (≤1400px long edge).

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the static
site into `out/` and publishes it to the `gh-pages` branch.

To check a production build locally:

```bash
npm run build
npm run preview
```
