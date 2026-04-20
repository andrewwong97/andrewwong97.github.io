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

Tiny React 16.2 SPA bootstrapped with `react-scripts` 1.0.15 (very old CRA, **no hooks** — use class components). Entry: `src/index.js` → `BrowserRouter` → `src/App.js`. Routes:
- `/` → `Landing` — quiet editorial homepage with a small set of doors.
- `/tinkering`, `/work`, `/coffee`, `/now`, `/contact`, `/photography` → editorial subpages (components exist; not all are linked from the nav, see below).
- `/pay` → `Venmo` (redirects to venmo.com/andrewwong97).

**Routes vs. nav are deliberately not 1:1.** Only pages with real content get linked from `Nav.js` and the Landing doors. Pages that aren't ready (e.g. Coffee/Now/Contact copy is still placeholder) keep their routes and components but are hidden from the menus. The Landing communicates "coming soon" via the `.coming` door pattern (non-interactive div, `WIP` pill in the arrow slot) instead of shipping a dead link. Don't delete a page to hide it — hide it from the nav.

**External links beat internal copies for creative work.** Photography isn't an internal gallery; it deep-links to `https://www.instagram.com/awong.photo/` via the `InstagramIcon`/`IG_URL` exports from `Nav.js`. When adding something like this, put external-destination doors *last* in the Landing order and render them with an `↗` arrow, not `→`.

**Nav is breadcrumbs, not a menu.** `Nav.js` renders `Home / <Current Page>` — a clickable "Home" link on the left, the current page label right-aligned via `margin-left: auto`. "Home" is the word, not "awong.io" — the breadcrumb has to read clearly to non-technical visitors. If you add a new routed page, add its label to `LABELS` in `Nav.js`.

`<Shell />` is mounted once in `App.js`. It injects Google Fonts on the fly, reads/writes `awong_mode` in `localStorage`, applies `[data-mode="light|dark"]` to `<html>`, and renders a small floating sun/moon button (`.mode-toggle`, bottom-right) that flips the mode. There is no Tweaks panel, no accent/type-pairing switcher (the `[data-accent]`/`[data-type]` CSS hooks are dormant but left in place in case they come back).

Service worker registers via `registerServiceWorker.js` (and ships as `service-worker.js` post-build).

## Design system — use it, don't reinvent

The whole site is built on `src/design-system.css`. **Default to its tokens and component classes before writing bespoke styles.** It's the canonical visual language; one-off CSS will drift from the rest of the site and break the dark/accent themes.

**Tokens (CSS vars on `:root`):**
- Color: `--paper`, `--paper-2`, `--rule`, `--ink`, `--ink-2`, `--ink-3`, `--ink-4`, `--accent`, `--accent-soft`. Never hard-code hex — colors flip under `[data-mode="dark"]` and `[data-accent="..."]`.
- Type: `--f-display` (Fraunces serif), `--f-body` (Inter sans), `--f-mono` (JetBrains Mono), `--f-italic` (Instrument Serif — use for `<em>` accents, not whole paragraphs).
- Layout: `--maxw` (860px reading column), `--row-h` line-height.

**Component classes — pick from these first:**
- Page chrome: `.nav` (breadcrumb bar, see Architecture), `.page` (max-width column), `.page-footer`. (`.masthead` exists but is no longer used — the breadcrumb names the page; don't reintroduce `§ <Page>` strips.)
- Editorial heads: `.dek` (mono accent eyebrow), `h1.page-title`, `.lede`, `.sec` + `.sec-head` (`.sec-no` + `h2.sec-title`).
- Body: `.prose` (linked, italic-aware reading text). Use `<em>` inside `.prose` and `.lede` for the italic Instrument Serif — but only as sparing emphasis, never on full blurbs or whole paragraphs.
- Patterns: `.proj` (expandable project row — see `ProjectRow.js`), `.brew` (coffee log row), `.photos` + `.ph` (mosaic grid w/ hover caption), `.now-list`, `.contact-list`, `.coming` (disabled / WIP Landing door).

**When extending the design:**
- Add new component classes to `src/design-system.css` rather than inline styles or per-component CSS files. The mode toggle themes everything via the shared tokens, so new styles need to use `var(--…)` to participate.
- Reuse existing `Nav`, `PageFooter`, `ProjectRow` components for new pages — they encode the conventions correctly.
- Inline `style={{ }}` is fine for one-off layout overrides (e.g. wider page on Photography), but never for color, font-family, or font-size — those belong in tokens/classes.

## Editorial voice & iteration

Most of the prose came from a Claude Design hand-off and has been progressively stripped. When writing or editing copy on this site:

- **Prefer less.** If a section is only there because a template had one (dates in the masthead, placeholder taglines, "Finished enough to put down." sec-titles under an already-clear label), it belongs on the cutting floor. Don't add decorative copy to fill space.
- **No stale dates in prose.** Hardcoded "Updated 14 · 04 · 2026" or "Nth year in the profession" lines rot. Omit them unless they're auto-generated.
- **Write for non-technical visitors too.** The breadcrumb reads "Home" (not "awong.io") for that reason. Prefer plain-language labels in chrome.
- **Hide, don't delete.** If a page isn't ready, remove it from the Nav and Landing doors (and add `.coming` WIP treatment on Landing if it still deserves a door). Keep the route + component so direct URLs and future work still function.
- **Expect iteration on copy.** Don't over-commit to one-shot final wording; the user typically refines in several small passes. For multiple small tweaks in a row, a plain `chore:` commit per change is fine.

Names in the editorial copy ("Alex Wong" in the original design exports) have been swapped to **Andrew Wong**.
