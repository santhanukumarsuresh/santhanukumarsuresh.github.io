# Santhanu Kumar S — Portfolio

Personal portfolio site for Santhanu Kumar S, built with [Astro](https://astro.build).
Static output, zero client-side JavaScript, deployed to GitHub Pages via GitHub Actions.

Live at: https://santhanukumarsuresh.github.io/

## Project structure

```text
/
├── public/
│   ├── admin/          # Sveltia CMS (content editor at /admin)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/     # Page sections (Hero, About, Skills, ...)
│   ├── content/         # CMS-editable content (YAML)
│   ├── content.config.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .github/workflows/deploy.yml
└── astro.config.mjs
```

## Editing content

All page content lives in `src/content/` as YAML files and is editable in two ways:

1. **Directly in the repo** — edit the YAML files under `src/content/` and push. The site rebuilds automatically.
2. **Via the CMS** — go to `/admin` on the live site, sign in with GitHub, and edit content through a form-based UI. Changes are committed straight to this repo.

| Content | Location |
| --- | --- |
| Name, tagline, hero/about text, contact info | `src/content/site/settings.yaml` |
| Skill categories | `src/content/skills/*.yaml` |
| Career timeline | `src/content/experience/*.yaml` |
| Projects | `src/content/projects/*.yaml` |
| Certifications | `src/content/certifications/*.yaml` |
| Impact stats | `src/content/stats/*.yaml` |

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages. No manual deploy step required.
