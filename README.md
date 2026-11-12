# Doctor Appointment Web App

Book hospital appointments across Puducherry. Angular 22 (standalone components, signals, zoneful change detection with `OnPush`), Tailwind CSS v4, and a component library documented in Storybook.

## Getting started

```bash
npm install
npm start            # app at http://localhost:4300
npm run storybook    # component library at http://localhost:6006
```

A demo account is available on the sign-in page ("Use demo account"). Auth is **demo-only**: accounts live in `localStorage` and there is no backend.

## Scripts

| Command                   | What it does                                      |
| ------------------------- | ------------------------------------------------- |
| `npm start`               | Dev server on port 4300                           |
| `npm run build`           | Production build to `dist/`                       |
| `npm run storybook`       | Storybook dev server on port 6006                 |
| `npm run build-storybook` | Static Storybook to `storybook-static/`           |
| `npm run lint`            | ESLint (TypeScript, Angular, template a11y rules) |
| `npm run format`          | Prettier (use `format:check` in CI)               |
| `npm run typecheck`       | Strict type-check of the app and Storybook config |

## Project structure

```
src/app/
  pages/       Routed, lazy-loaded screens (dashboard, hospitals, doctors, book, appointments, sign in/up)
  services/    Auth, appointment store, theme, route guards
  data/        Seed data and helpers
  ui/          Component library (see below)
.storybook/    Storybook configuration
figma/         Figma Code Connect templates (design <-> code mapping)
scripts/       Build helpers
```

## Component library

Everything in `src/app/ui/` is exported from `@/ui` and has stories (`*.stories.ts`) next to it.

- Components use `app-` selectors; attribute directives use the `app` prefix (`appButton`, `appCheckbox`).
- Native controls are enhanced through directives (`<input type="checkbox" appCheckbox>`) so forms and accessibility keep working.
- Styling uses the design tokens in `src/theme.css`, never hard-coded colours.
- Overlays (dialog, sheet, drawer, popover, menus, tooltip) are built on `@angular/cdk`.
- Event values are read with the typed helpers in `ui/dom-events.ts` instead of `$any`.

## Design system

The Figma file "Doctor Appointment Design System" is mapped to these components with Code Connect (`figma/*.figma.ts`, config in `figma.config.json`). Open a component in Figma Dev Mode to see the Angular snippet.

## Code standards

- TypeScript `strict` plus `noUncheckedIndexedAccess`, `noImplicitOverride` and `noImplicitReturns`; Angular `strictTemplates`.
- ESLint with `typescript-eslint` and `angular-eslint` (including template accessibility rules); Prettier for formatting (no semicolons, single quotes, 140 columns).
- Run `npm run lint`, `npm run typecheck` and `npm run build` before committing; CI runs the same checks.
