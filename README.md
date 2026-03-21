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
- `src/styles` — `tokens.css`, `global.css`, `components.css`
- `src/index.ts` — public exports
- `examples` — Ladle stories and migrated gallery examples
- `.ladle` — Ladle global provider/config
- `tests/visual` — Playwright visual snapshot tests
- `.changeset` — release/versioning automation config

## Scripts

- `npm run dev` — run Ladle examples
- `npm run build` — build component library
- `npm run build:ladle` — build Ladle static preview
- `npm run lint` — lint `src` and `examples`
- `npm run lint:scripts` — lint `scripts/*.js`
- `npm run typecheck` — run TypeScript type checks
- `npm run test` — run Vitest test suite
- `npm run test:coverage` — run tests with coverage thresholds
- `npm run test:a11y` — run accessibility tests (`jest-axe`)
- `npm run test:visual` — run Playwright visual tests
- `npm run format` — format source files
- `npm run tokens` — export token JSON for Figma
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
| `ThemeProvider` | `defaultTheme`, `storageKey` | `light`, `signal-theme` | Supports persisted light/dark mode |

## Migration Checklist

If migrating from older project setups:

1. Replace `next-themes` usage with `ThemeProvider` / `ThemeToggle` from this library.
2. Import the package entry (or `styles.css`) so CSS tokens/components are loaded.
3. Use ESM imports (`import { Button } from 'signal'` or `import { Button } from 'signal/button'`).
4. If using examples, ensure example-only dependencies remain in `devDependencies`.
5. Run `npm run test:coverage` and `npm run test:a11y` before publishing.

## Usage

```tsx
import { Button, Input, ThemeProvider, ThemeToggle } from 'signal'

export function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <ThemeToggle />
      <Button>Action</Button>
      <Input placeholder="Type here" />
    </ThemeProvider>
  )
}
```

The library bundles CSS via `src/index.ts`, so consumers get base styles when importing the package entry.
