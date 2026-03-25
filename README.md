# Signal Component Library

A Vite-based React component library with pure CSS theming, TypeScript declarations, and Ladle examples.

## Stack

- Vite library mode (ESM + source maps)
- React 19 + TypeScript
- Pure CSS tokens and component styles
- Ladle for interactive component examples
- Vitest + Testing Library + jest-axe
- Playwright visual regression scaffolding
- ESLint + Prettier + Husky + lint-staged

## Project Structure

- `src/components` — all exported components
- `src/tokens.css` — token barrel (primitives → semantic → component maps)
- `src/styles/main.css` — single entry: layers, tokens, reset, base, `components/<name>/`, density, `global.css`. Ladle imports `ladle-preview.css` in addition for preview chrome.
- `src/styles/tokens/` — `primitives.css`, `semantic.css`, `component-tokens.css`
- `src/styles/components/<name>/` — per-component `.css` / `.tokens.css`
- `src/index.ts` — public exports
- `examples` — Ladle stories and migrated gallery examples
- `.ladle` — Ladle global provider/config
- `tests/visual` — Playwright visual snapshot tests
- `.changeset` — release/versioning automation config
- `tokens/light.json`, `tokens/dark.json` — generated Figma Variables export (`npm run tokens`)

## Design tokens and CSS (Signal migration)

This library uses **pure CSS** (no Tailwind runtime). Styling is layered and token-driven, matching the Signal design-system approach.

### Token layers (`src/tokens.css` → `src/styles/tokens/`)

1. **`primitives.css`** — raw palette (`--primitive-*`), neutrals, and fixed scales. No light/dark meaning.
2. **`semantic.css`** — product meaning: `--color-bg`, `--color-fg`, `--color-primary`, spacing, radius, typography, motion, z-index, etc. Light defaults live on `:root`; dark overrides use `:is(html.dark, html[data-theme='dark'])` so both class and `data-theme` strategies work.
3. **`component-tokens.css`** — `@import`s per-component `*.tokens.css` files (e.g. `--input-bg`, `--dialog-overlay-bg`) that map to semantic variables. Add a new `*.tokens.css` here when a component needs shared aliases.

**Runtime theme:** `ThemeProvider` sets `dark` on `<html>` and `data-theme` / `data-density`. Components consume `var(--…)` only; no hard-coded light/dark branches in TSX.

### Stylesheet cascade (`src/styles/main.css`)

| Order | File / area | Role |
| --- | --- | --- |
| 1 | `layers.css` | Declares `@layer` order: reset → base → components → utilities |
| 2 | `tokens.css` | Custom properties (unlayered so variables win predictably) |
| 3 | `reset.css` | `@layer reset` — box model, element defaults |
| 4 | `base.css` | `@layer base` — `html`/`body`, typography, focus, selection |
| 5 | `components/<name>/*.css` | `@layer components` — UI patterns |
| 6 | `density-super-high.css` | `[data-density='super-high']` size overrides |
| 7 | `global.css` | `@layer utilities` (`focus-ring`, `sr-only`) + rare cross-cutting rules |

**Ladle only:** `.ladle/components.tsx` also imports `ladle-preview.css` so the preview canvas uses `--color-bg` (not shipped in `dist/style.css`).

### Figma export

- **`npm run tokens`** runs `scripts/export-tokens.cjs`, which parses the same CSS sources as the barrel (primitives, semantic, and every file listed in `component-tokens.css`) and writes **`tokens/light.json`** and **`tokens/dark.json`** for Figma’s native Variables import.
- Regenerate after changing token CSS so design tooling stays in sync.

## Scripts

- `npm run dev` — run Ladle examples
- `npm run build` — build component library
- `npm run build:ladle` — build Ladle static preview
- `npm run lint` — lint `src` and `examples`
- `npm run lint:scripts` — lint `scripts/*.{js,cjs}`
- `npm run typecheck` — run TypeScript type checks
- `npm run test` — run Vitest test suite
- `npm run test:coverage` — run tests with coverage thresholds
- `npm run test:a11y` — run accessibility tests (`jest-axe`)
- `npm run test:visual` — run Playwright visual tests
- `npm run format` — format source files
- `npm run tokens` — regenerate `tokens/light.json` + `tokens/dark.json` for Figma Variables
- `npm run changeset` — create version change notes
- `npm run version:packages` — apply changeset versions
- `npm run release` — publish packages via changesets

## CI Quality Gates

- Lint (`src`, `examples`, and `scripts`)
- TypeScript typecheck
- Production build
- Test run with coverage thresholds:
  - lines: 65%
  - functions: 55%
  - statements: 65%
  - branches: 50%

## Component Contract (Core)

| Component | Key Props | Defaults | Notes |
| --- | --- | --- | --- |
| `Button` | `variant`, `size` | `default`, `default` | Variant/size matrix covered in tests |
| `Badge` | `variant` | `default` | Semantic status variants |
| `Tabs` | `orientation` | `horizontal` | `TabsList` supports `variant` |
| `Toggle` | `variant`, `size` | `default`, `default` | Works standalone or in group |
| `ToggleGroup` | `type`, `variant`, `size`, `orientation`, `spacing` | `single`, `default`, `default`, `horizontal`, `0` | Context-propagated item styling |
| `ThemeProvider` | `defaultTheme`, `storageKey`, `defaultDensity`, `densityStorageKey` | `light`, `signal-theme`, `high`, `signal-density` | Supports persisted light/dark mode and high/super-high density |

## Migration Checklist

If migrating from older project setups:

1. Replace `next-themes` usage with `ThemeProvider`, `ThemeToggle`, and `DensityToggle` from this library.
2. Import the package entry (or `styles.css`) so CSS tokens/components are loaded.
3. Use ESM imports (`import { Button } from 'signal'` or `import { Button } from 'signal/button'`).
4. If using examples, ensure example-only dependencies remain in `devDependencies`.
5. Run `npm run test:coverage` and `npm run test:a11y` before publishing.

## Usage

```tsx
import { Button, DensityToggle, Input, ThemeProvider, ThemeToggle } from 'signal'

export function App() {
  return (
    <ThemeProvider defaultTheme="light" defaultDensity="high">
      <ThemeToggle />
      <DensityToggle />
      <Button>Action</Button>
      <Input placeholder="Type here" />
    </ThemeProvider>
  )
}
```

The library bundles CSS via `src/index.ts`, so consumers get base styles when importing the package entry.
