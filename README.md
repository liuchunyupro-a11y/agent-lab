# Agent Lab

Bilingual (English / 中文) technical portal built with Vue 3, Vite, and vue-i18n. Default language: English. Deploys to GitHub Pages.

## Tech Stack

- **Vue 3** (Composition API)
- **Vite 5**
- **vue-i18n 9** — English (default) and 中文
- **Static build** — output in `dist/`, suitable for GitHub Pages

## Project Structure

```
.
├── index.html          # Vite entry
├── package.json
├── vite.config.js
├── src/
│   ├── main.js
│   ├── App.vue         # Layout, sidebar, content, language switcher
│   ├── i18n/index.js   # i18n config, default locale: en
│   ├── locales/
│   │   ├── en.js       # English strings and article bodies
│   │   └── zh-CN.js    # 中文
│   └── ...
├── .github/workflows/
│   └── deploy.yml      # Build and deploy to GitHub Pages
└── README.md
```

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:5173
```

## Build

```bash
npm run build
# Output: dist/
```

- For **user/org site** (`https://<user>.github.io`): use default base `/`.
- For **project site** (`https://<user>.github.io/<repo>/`): set `VITE_BASE_URL=/your-repo-name/` when building, or rely on the GitHub Action (it sets base from the repo name).

## Deploy to GitHub Pages

### Option A: GitHub Actions (recommended)

1. Push the repo to GitHub.
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. On each push to `main`, the workflow builds the Vue app and deploys to Pages.
5. Site URL:
   - Project site: `https://<username>.github.io/<repo>/`
   - User site: if the repo name is `<username>.github.io`, then `https://<username>.github.io/`

### Option B: Deploy from branch

1. Run `npm run build` locally.
2. If the site is a **project site**, set base first, e.g. in `vite.config.js`: `base: '/agent-lab/'`.
3. Push the contents of `dist/` to a branch (e.g. `gh-pages`) or to the root of `main`.
4. **Settings → Pages**: Source = **Deploy from a branch**, choose that branch and `/ (root)` or `/docs` if you put files in `docs/`.

## Bilingual Content

- **Default language**: English. Switch via the **EN | 中文** buttons in the top-right of the content area.
- Edit copy in `src/locales/en.js` and `src/locales/zh-CN.js`. Article bodies use a block format: `{ t: 'p'|'h2'|'ul', c: string | string[] }`. Use `**bold**` and `` `code` `` in strings; they are rendered as HTML.

## Changelog

- **2025-03**: Vue 3 + Vite + vue-i18n; bilingual EN/中文, default EN; GitHub Actions deploy to Pages.
