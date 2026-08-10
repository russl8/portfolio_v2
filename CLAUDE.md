# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `yarn dev` — start the dev server (Next.js, App Router)
- `yarn build` — production build
- `yarn start` — run the production build
- `yarn lint` — ESLint (flat config via `eslint.config.mjs`, extends `eslint-config-next`)

There is no test suite configured in this repo.

## Architecture

This is a single-page personal portfolio site (Next.js 16 App Router, React 19, Tailwind v4). Nearly everything renders from one page.

- `app/page.tsx` is the entire app: it renders `Navigation` plus four stacked sections — `AboutSection`, `ExperienceSection`, `ProjectSection`, `EtcSection` — inside a `NavContext.Provider`.
- **Scroll-spy navigation**: `NavContext` (`components/context/NavContext.ts`) holds `currentSection`/`setCurrentSection`, set from `app/page.tsx` state. Each section wraps its content in the shared `Section` component (`components/components/Section.tsx`), which uses an `IntersectionObserver` (threshold 0.85) to call `onEnter(sectionName)` as the user scrolls it into view. `Navigation` reads `currentSection` via `useNavContext()` to highlight the active nav link. `SectionName` (`components/lib/types.ts`) is the single source of truth for valid section ids — used by `Section`, `Navigation`, and the context.
- **Content-as-data pattern**: page content lives in typed data files, not JSX — `components/lib/experience.ts` and `components/lib/projects.ts` export arrays typed by `Experience`/`Project` (`components/lib/types.ts`). `ExperienceSection`/`ProjectSection` map over these arrays and render `ExperienceCard`/`ProjectRow` per entry. To add/edit a job or project, edit the data file, not a component. Every `Project` has an `images: string[]` (paths into `public/`) — `images[0]` is the row-hover thumbnail, and the full array feeds the click-through modal's slideshow.
- Folder convention: components are grouped by section (`about/`, `experience/`, `intro/`, `projects/`) plus a generic `components/components/` folder for cross-section primitives (`Section`, `MyLink`, `Headshot`).
- `lib/utils.ts` exports `cn()` (clsx + tailwind-merge) for conditional class composition — the shadcn/ui convention (`components.json` is configured for shadcn, style "new-york", though no `components/ui/` directory exists yet).
- Path alias `@/*` maps to the repo root (see `tsconfig.json`).
- Static assets (headshot, company logos referenced by `logoPath` in `experience.ts`) live in `public/`.
- **Hover-preview / modal pattern**: there are two independent implementations of "hover to preview a photo, click to open a modal," and they are not shared components — match the one closest to what you're editing rather than trying to unify them.
  - `components/etc/PhotoReveal.tsx` — used inline in prose (`EtcSection`), one `Photo` (`components/lib/types.ts`) per instance, single-image modal.
  - `components/projects/ProjectRow.tsx` + `components/projects/ProjectModal.tsx` — the whole `<tr>` is hoverable/clickable (highlights + shows a flyout thumbnail to the left of the project-name cell on `lg:`+), and the click-through modal is a slideshow over `Project.images` (arrows + dot indicators, only shown when there's more than one image).
  - Because `ProjectRow` renders from inside a `<tbody>`, `ProjectModal`'s fixed-overlay JSX is rendered via `createPortal(..., document.body)` — a plain `<div>` can't be a direct sibling of a `<tr>` (invalid HTML / hydration mismatch). Any future modal triggered from inside a table row should do the same.
  - Row-level click-to-open-modal + a nested `<Link>` that should still navigate on its own coexist via `stopPropagation()` on the `Link`'s `onClick`.
  - Nested hover states use Tailwind's named groups: the `<tr>` carries the plain `group` (drives the row highlight + thumbnail flyout), while the inner project-name `<Link>` uses a separate `group/link` (drives its own hover effects) so the two hover scopes don't collide.
