# Signal CSS migration plan (`feat/remove-tailwind` → this repo)

## Phase 2 — Investigation summary

### Token naming conflicts (old repo vs Signal)

| Old (removed / legacy) | Signal semantic |
| --- | --- |
| `--ds-space-*`, `--ds-text-*`, `--ds-font-*` | `--space-*`, `--font-size-*`, `--font-weight-*` |
| `--background`, `--foreground`, `--border`, `--muted`, `--card`, … | `--color-bg`, `--color-fg`, `--color-border`, `--color-muted`, `--color-card`, … |
| `--control-height-*`, `--control-px-*`, `--control-gap` | `--size-control-*`, `--space-control-x-*`, `--space-gap-control` |

Gallery and Ladle examples use Signal tokens directly (`--color-*`, `--font-size-*`, etc.); no legacy variable bridge.

### Signal component token files vs this repo

| Signal `*.tokens.css` | In this repo |
| --- | --- |
| alert-dialog, calendar, data-table, dialog, drawer, input, sheet, sidebar, slider, sonner, switch, table | Same set registered in `src/styles/tokens/component-tokens.css` |

### Gallery section → Ladle story mapping

| Signal `components/gallery/sections/*` | This repo `examples/*.stories.tsx` |
| --- | --- |
| ButtonsSection | `ButtonsSection.stories.tsx` |
| ChartsSection | `ChartsSection.stories.tsx` |
| DataDisplaySection | `DataDisplaySection.stories.tsx` |
| FeedbackSection | `FeedbackSection.stories.tsx` |
| FormControlsSection | `FormControlsSection.stories.tsx` |
| LayoutSection | `LayoutSection.stories.tsx` |
| MediaSection | `MediaSection.stories.tsx` |
| NavigationSection | `NavigationSection.stories.tsx` |
| OverlaySection | `OverlaySection.stories.tsx` |
| SelectionSection | `SelectionSection.stories.tsx` |
| TypographySection | `TypographySection.stories.tsx` |

**Added:** `examples/trading-blotter.stories.tsx` (Signal-style `TradingBlotter` in `src/components/trading-blotter`).

### Dependencies

- This repo already used **`clsx`** for `cn()` in `src/utils/index.ts` (no `tailwind-merge` / `cva`).
- Signal reference app used **Next.js**, **next-themes**, **Radix** in places; **not** migrated — library remains **Vite + @base-ui/react** with granular entry points (`@base-ui/react/button`, etc.).

### Stays behind in Signal (not migrated)

- Next.js app router, API routes, `layout.tsx`, `next/font`, `next.config.ts`, `middleware`, etc.

---

## Execution notes (post-migration)

### Completed

- **Phase 1:** Branch `feat/signal-token-migration`; clone `../signal-reference` (`feat/remove-tailwind`).
- **Phases 3–5:** `src/tokens.css` barrel; `src/styles/tokens/{primitives,semantic,component-tokens}.css`; per-component CSS under `src/styles/components/<name>/`; layout-only components: `box`, `grid`, `stack`, `divider` CSS files; `data-table` + `gallery` from Signal.
- **Phase 6:** UI components aligned with Signal by copying `signal-reference/components/ui/*.tsx` with `@/lib/utils` → `@/utils/index`, `@/components/ui/*` → `@/components/*`, and `@base-ui/react` → `@base-ui/react/button` for `Button` only.
- **Phase 7:** Single entry stylesheet `src/styles/main.css` (layers → tokens → reset → base → components → density → `global.css`); `src/index.ts` imports it; `.ladle/components.tsx` imports it plus `ladle-preview.css`; `ThemeProvider` toggles **`dark` class** on `documentElement` for `.dark` token overrides.
- **Phase 8:** `scripts/export-tokens.cjs` (merged `:root` / `.dark` from token files + semantic→Variables Pro key mapping); `scripts/export-tokens-figma.cjs` paths → `src/styles/tokens/*`; `npm run tokens` runs both (`.cjs` because `package.json` is `"type": "module"`).
- **Phase 9:** `src/components/trading-blotter` from Signal; duplicate `examples/trading-blotter/*` removed; `DataDisplaySection` imports `@/components/trading-blotter`; exported from `src/index.ts`.
- **Phase 10:** New Ladle story for trading blotter; gallery sections already covered by existing `*Section.stories.tsx`.
- **Phase 11:** `typecheck`, `lint`, `test`, `test:coverage`, `build`, `tokens` verified locally.

### Small deviations / follow-ups

- **Accordion `collapsible`:** Accepted in props for API compatibility; Base UI root has no `collapsible` prop — value is ignored (`void collapsible`).
- **Spinner:** Optional `width` / `height` restored for Ladle stories (SVG sizing).
- **ESLint:** `react/no-unescaped-entities` disabled for `examples/**/*.tsx` only.
- **Figma script:** WARN lines for a few component-only tokens without semantic mapping (expected unless mappings are extended).
- **Cleanup:** Removed `legacy-aliases.css`, pre-migration `global.css` / `components.css` monoliths; `examples/examples.css` and story inline styles now reference Signal semantic tokens only.
