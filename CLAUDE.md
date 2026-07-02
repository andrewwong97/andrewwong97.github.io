# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A React 18 + Vite SPA deployed to GitHub Pages (custom domain via `public/CNAME`). Only source lives in the repo; the production build is generated and published by GitHub Actions on every push to `master`. No build artifacts are committed.

## Commands

- `yarn dev` (or `yarn start`) — hot-reloading local instance via Vite.
- `yarn build` — production build into `build/` (gitignored).
- `yarn preview` — serve the production build locally.
- `yarn test` — Vitest in jsdom env. Run a single test with `yarn test src/__test__/App.test.jsx`.

## Deploy pipeline

`.github/workflows/deploy.yml` runs on every push to `master`: install → test → `yarn build` → `python3 ../addSPA.py` (from inside `build/`, injects the spa-github-pages redirect decoder into `<head>`) → upload to GitHub Pages via `actions/deploy-pages`. The Pages source must be set to "GitHub Actions" in repo settings for this to work.

Implications:
- **Merging to `master` is deploying.** There is no separate deploy step; land source via a PR and the workflow ships it.
- `public/` contents (favicon, manifest, `404.html`, `CNAME`, profile photo) are copied verbatim into the build root by Vite.
- `index.html` at the repo root is the Vite source template (not a build artifact).

## Git workflow for agents

- **Batch small edits; don't push after every tweak.** When the user is iterating on copy or styling with several messages in a row, accumulate the edits locally (commit them if you like) and push once the iteration has settled. A good rule: push when the user says so, when you've reached a logical checkpoint, or when a reviewer would benefit from seeing the current state. Don't run `yarn build && git commit && git push` after every one-word change — it clutters history and burns time.
- **Branch per change.** Don't commit directly to `master`. Create a feature branch, push it, and open a PR. Scope each branch/PR to one logical change; if you find yourself touching unrelated areas, split into separate PRs.
- **Conventional commit prefixes** on every commit message:
  - `feat:` — new user-facing functionality (new route, new component, new behavior).
  - `chore:` — maintenance with no behavior change (deps, tooling, build script tweaks, formatting, dead-code removal).
  - `fix:` — bug fixes referencing an issue when one exists (`fix: #123 ...`).
- **Worktrees live under `.claude/worktrees/<name>`** inside the repo root. Create the directory with `mkdir -p` if missing. Don't place worktrees as sibling directories of the repo.

## SPA routing on GitHub Pages

GitHub Pages doesn't support client-side routing natively. The repo uses the [spa-github-pages](https://github.com/rafrex/spa-github-pages) trick:
- `public/404.html` captures unknown paths and redirects to `/?p=<path>&q=<query>`.
- The inline script injected by `addSPA.py` (during the CI build) rewrites that back to the original URL via `history.replaceState` before React Router boots.

If you change routes in `src/App.jsx`, no config change is needed — the trick handles arbitrary paths. But `404.html` and the `addSPA.py` script must remain in sync with each other (encoding format).

## Architecture

Tiny React 18 SPA built with Vite (hooks are fine; some older components are still classes). Entry: `src/main.jsx` → `BrowserRouter` → `src/App.jsx`. Routes:
- `/` → `Landing` — quiet editorial homepage with a small set of doors.
- `/tinkering`, `/work`, `/contact` → editorial subpages.
- `/photography` → external redirect to Instagram (matches the Landing door).
- `/pay` → `Venmo` (redirects to venmo.com/andrewwong97).
- Anything else (including `/coffee` and `/now`, whose copy is still placeholder) falls through to `/`.

**Routes vs. nav are deliberately not 1:1.** Only pages with real content get routed and linked from `Nav.jsx` and the Landing doors. Pages that aren't ready (Coffee/Now copy is still placeholder fiction from the design hand-off) keep their component files but are unrouted — direct URLs fall through to `/` until the content is real. The Landing communicates "coming soon" via the `.coming` door pattern (non-interactive div, `WIP` pill in the arrow slot) instead of shipping a dead link. Don't delete a page to hide it — unroute it and keep the component.

**External links beat internal copies for creative work.** Photography isn't an internal gallery; it deep-links to `https://www.instagram.com/awong.photo/` via the `InstagramIcon`/`IG_URL` exports from `Nav.jsx`. When adding something like this, put external-destination doors *last* in the Landing order and render them with an `↗` arrow, not `→`.

**Nav is breadcrumbs, not a menu.** `Nav.jsx` renders `Home / <Current Page>` — a clickable "Home" link on the left, the current page label right-aligned via `margin-left: auto`. "Home" is the word, not "awong.io" — the breadcrumb has to read clearly to non-technical visitors. If you add a new routed page, add its label to `LABELS` in `Nav.jsx`.

`<Shell />` is mounted once in `App.jsx`. It injects Google Fonts on the fly, reads/writes `awong_mode` in `localStorage`, applies `[data-mode="light|dark"]` to `<html>`, and renders a small floating sun/moon button (`.mode-toggle`, bottom-right) that flips the mode. There is no Tweaks panel, no accent/type-pairing switcher (the `[data-accent]`/`[data-type]` CSS hooks are dormant but left in place in case they come back).

There is no service worker. `src/main.jsx` actively unregisters the one the old CRA build shipped so returning visitors stop getting stale cached pages — keep that cleanup in place for a good while.

## Design system — use it, don't reinvent

The whole site is built on `src/design-system.css`. **Default to its tokens and component classes before writing bespoke styles.** It's the canonical visual language; one-off CSS will drift from the rest of the site and break the dark/accent themes.

**Tokens (CSS vars on `:root`):**
- Color: `--paper`, `--paper-2`, `--rule`, `--ink`, `--ink-2`, `--ink-3`, `--ink-4`, `--accent`, `--accent-soft`. Never hard-code hex — colors flip under `[data-mode="dark"]` and `[data-accent="..."]`.
- Type: `--f-display` (Gloock serif), `--f-body` (Space Grotesk sans), `--f-mono` (IBM Plex Mono). There is no italic accent face — `<em>` is normalized to upright via a global reset and gets emphasis from `color: var(--accent)` or `var(--ink)` instead.
- Layout: `--maxw` (860px reading column), `--row-h` line-height.

**Component classes — pick from these first:**
- Page chrome: `.nav` (breadcrumb bar, see Architecture), `.page` (max-width column), `.page-footer`. (`.masthead` exists but is no longer used — the breadcrumb names the page; don't reintroduce `§ <Page>` strips.)
- Editorial heads: `.dek` (mono accent eyebrow), `h1.page-title`, `.lede`, `.sec` + `.sec-head` (`.sec-no` + `h2.sec-title`).
- Body: `.prose` (linked reading text). Use `<em>` inside `.prose` and `.lede` for color-based emphasis (upright, not italic) — but only as sparing emphasis, never on full blurbs or whole paragraphs.
- Patterns: `.proj` (expandable project row — see `ProjectRow.jsx`), `.brew` (coffee log row), `.photos` + `.ph` (mosaic grid w/ hover caption), `.now-list`, `.contact-list`, `.coming` (disabled / WIP Landing door).

**When extending the design:**
- Add new component classes to `src/design-system.css` rather than inline styles or per-component CSS files. The mode toggle themes everything via the shared tokens, so new styles need to use `var(--…)` to participate.
- Reuse existing `Nav`, `PageFooter`, `ProjectRow` components for new pages — they encode the conventions correctly.
- Inline `style={{ }}` is fine for one-off layout overrides (e.g. wider page on Photography), but never for color, font-family, or font-size — those belong in tokens/classes.

## Editorial voice & iteration

Most of the prose came from a Claude Design hand-off and has been progressively stripped. When writing or editing copy on this site:

- **Prefer less.** If a section is only there because a template had one (dates in the masthead, placeholder taglines, "Finished enough to put down." sec-titles under an already-clear label), it belongs on the cutting floor. Don't add decorative copy to fill space.
- **No stale dates in prose.** Hardcoded "Updated 14 · 04 · 2026" or "Nth year in the profession" lines rot. Omit them unless they're auto-generated.
- **Write for non-technical visitors too.** The breadcrumb reads "Home" (not "awong.io") for that reason. Prefer plain-language labels in chrome.
- **Hide, don't delete.** If a page isn't ready, unroute it and remove it from the Nav and Landing doors (and add `.coming` WIP treatment on Landing if it still deserves a door). Keep the component file so future work can pick it back up.
- **Expect iteration on copy.** Don't over-commit to one-shot final wording; the user typically refines in several small passes. Batch consecutive tweaks into a single commit (see Git workflow) rather than shipping a per-word commit.

Names in the editorial copy ("Alex Wong" in the original design exports) have been swapped to **Andrew Wong**.
