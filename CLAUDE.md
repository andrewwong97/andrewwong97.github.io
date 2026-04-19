# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A React 16 SPA that **must be compiled to static files committed to `master`** so GitHub Pages can serve them. The repo root therefore holds *both* source (`src/`, `public/`, `package.json`) and built artifacts (`index.html`, `asset-manifest.json`, `service-worker.js`, `static/`, `404.html`). Editing source alone won't change the live site — you must run the deploy pipeline below to regenerate and commit the static output.

## Commands

- `yarn dev` (or `yarn start`) — hot-reloading local instance via `react-scripts`.
- `yarn build` — production build into `build/`.
- `yarn test` — Jest in jsdom env. Run a single test with `yarn test --testPathPattern App.test`.
- `yarn deploy` — runs `predeploy` (build) then `./runDeploy.sh`. **This is destructive** (see below).

## Deploy pipeline

This is a GitHub Pages site served from `master` (CNAME, custom domain). There is no `gh-pages` branch flow despite the dependency name; built assets are committed to `master` itself.

`runDeploy.sh` does, in order:
1. `git rm -r static && rm -rf static` — wipes the existing built assets.
2. `rsync -a build/ ./` — flattens the new build into the repo root.
3. `python3 addSPA.py` — injects an inline `<script>` (the spa-github-pages redirect decoder) into `<head>` of the new `index.html`.
4. `git commit -am "Update deploy" && git push`.

Implications:
- **Push source changes to `master` before `yarn deploy`.** The deploy commit will sweep up anything else dirty in the tree alongside the build artifacts.
- The repo root intentionally contains build output (`index.html`, `asset-manifest.json`, `service-worker.js`, `static/`, `404.html`) committed alongside source (`src/`, `public/`, `package.json`). Don't "clean up" these top-level files — the live site serves them.
- `index.html` at the root is a generated artifact patched by `addSPA.py`. The source template lives in `public/index.html`.

## Git workflow for agents

- **Always run `yarn build` (or `yarn deploy`) before pushing.** The live site is the compiled output in the repo root — pushing source changes without rebuilding leaves `master` and the deployed site out of sync.
- **Branch per change.** Don't commit directly to `master`. Create a feature branch, push it, and open a PR. Scope each branch/PR to one logical change; if you find yourself touching unrelated areas, split into separate PRs.
- **Conventional commit prefixes** on every commit message:
  - `feat:` — new user-facing functionality (new route, new component, new behavior).
  - `chore:` — maintenance with no behavior change (deps, tooling, build script tweaks, formatting, dead-code removal).
  - `fix:` — bug fixes referencing an issue when one exists (`fix: #123 ...`).
- **Deploy commits are separate.** `runDeploy.sh` produces its own `Update deploy` commit containing only regenerated static assets. Don't mix source edits into that commit — land source via a PR first, then deploy.

## SPA routing on GitHub Pages

GitHub Pages doesn't support client-side routing natively. The repo uses the [spa-github-pages](https://github.com/rafrex/spa-github-pages) trick:
- `404.html` captures unknown paths and redirects to `/?p=<path>&q=<query>`.
- The inline script injected by `addSPA.py` rewrites that back to the original URL via `history.replaceState` before React Router boots.

If you change routes in `src/App.js`, no config change is needed — the trick handles arbitrary paths. But `404.html` and the `addSPA.py` script must remain in sync with each other (encoding format).

## Architecture

Tiny React 16 SPA bootstrapped with `react-scripts` 1.0.15 (very old CRA). Entry: `src/index.js` → `BrowserRouter` → `src/App.js`, which routes:
- `/` → `Home`
- `/pay` → `Venmo`

`Project.js` is a presentational component used by `Home`. Styling is a single `src/main.css`. A service worker is registered (`registerServiceWorker.js`, also present at the root as `service-worker.js` post-build).
