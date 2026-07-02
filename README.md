# andrewwong97.github.io

Source for [awong.io](https://awong.io) — a React 18 + Vite SPA served by GitHub Pages.

- `yarn dev` — hot-reloading local instance.
- `yarn test` — run the Vitest suite.
- `yarn build` — production build into `build/`.

Deploys are automatic: every push to `master` triggers `.github/workflows/deploy.yml`, which tests, builds, injects the SPA redirect script (`addSPA.py`), and publishes to GitHub Pages. No build artifacts are committed to the repo.
