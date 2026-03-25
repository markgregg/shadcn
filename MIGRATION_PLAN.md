# Signal CSS migration plan (`feat/remove-tailwind` → this repo)

## Phase 2 — Investigation summary

### Token naming conflicts (old repo vs Signal)

| Old (removed / legacy) | Signal semantic |
| --- | --- |
| `--ds-space-*`, `--ds-text-*`, `--ds-font-*` | `--space-*`, `--font-size-*`, `--font-weight-*` |
| `--background`, `--foreground`, `--border`, `--muted`, `--card`, … | `--color-bg`, `--color-fg`, `--color-border`, `--color-muted`, `--color-card`, … |
| `--control-height-*`, `--control-px-*`, `--control-gap` | `--size-control-*`, `--space-control-x-*`, `--space-gap-control` |

**Mitigation:** `src/styles/legacy-aliases.css` maps old names used by `examples/examples.css` and inline gallery styles to Signal semantics so stories keep working without a full examples rewrite.

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
