'use client'

import * as React from 'react'

import { cn } from '@/utils/index'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/**
 * Named breakpoints matching MUI's responsive grid breakpoints.
 *
 * | Breakpoint | Min-width |
 * |------------|-----------|
 * | `xs`       | 0 px      |
 * | `sm`       | 600 px    |
 * | `md`       | 900 px    |
 * | `lg`       | 1200 px   |
 * | `xl`       | 1536 px   |
 */
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/**
 * Column span for a grid item.
 * Use a number (1–`columns`, default 12) or `'auto'` to let the
 * browser auto-place the item.
 */
export type GridSize = number | 'auto'

/**
 * A value that can either be a scalar or a per-breakpoint map.
 *
 * @example
 * // Scalar
 * size={6}
 * // Responsive
 * size={{ xs: 12, sm: 6, md: 4 }}
 */
export type Responsive<T> = T | Partial<Record<Breakpoint, T>>

type Spacing = number | string

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const BREAKPOINT_PX: Record<Breakpoint, number> = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
}

const BREAKPOINTS_ASC: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl']

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Converts a spacing number to a CSS length. 1 unit = 8px (0.5rem). */
function resolveSpacing(spacing: Spacing): string {
  return typeof spacing === 'string' ? spacing : `${spacing * 0.5}rem`
}

/**
 * Builds `grid-column-start` and `grid-column-end` values for an item.
 * @param size   Column span count or 'auto'. Undefined = leave unset.
 * @param offset Columns to skip before this item. Undefined = leave unset.
 */
function buildItemStyles(
  size: GridSize | undefined,
  offset: number | undefined
): React.CSSProperties {
  const styles: React.CSSProperties = {}

  if (size === 'auto') {
    styles.gridColumn = 'auto'
    return styles
  }

  if (size !== undefined) {
    styles.gridColumnEnd = `span ${size}`
  }
  if (offset !== undefined) {
    styles.gridColumnStart = offset + 1
  }

  return styles
}

/**
 * Generates scoped CSS rules for responsive grid items.
 * Rules are sorted ascending by breakpoint width so that mobile-first
 * media queries cascade correctly.
 */
function generateResponsiveCSS(
  id: string,
  size: Responsive<GridSize> | undefined,
  offset: Responsive<number> | undefined
): string {
  const rules: string[] = []

  const isResponsiveSize = size !== null && typeof size === 'object'
  const isResponsiveOffset = offset !== null && typeof offset === 'object'

  for (const bp of BREAKPOINTS_ASC) {
    const declarations: string[] = []

    if (isResponsiveSize) {
      const sizeVal = (size as Partial<Record<Breakpoint, GridSize>>)[bp]
      if (sizeVal !== undefined) {
        if (sizeVal === 'auto') {
          declarations.push('grid-column:auto')
        } else {
          declarations.push(`grid-column-end:span ${sizeVal}`)
        }
      }
    }

    if (isResponsiveOffset) {
      const offsetVal = (offset as Partial<Record<Breakpoint, number>>)[bp]
      if (offsetVal !== undefined) {
        declarations.push(`grid-column-start:${offsetVal + 1}`)
      }
    }

    if (declarations.length === 0) continue

    const px = BREAKPOINT_PX[bp]
    const block = `[data-grid-item-id="${id}"]{${declarations.join(';')};}`
    rules.push(px === 0 ? block : `@media(min-width:${px}px){${block}}`)
  }

  return rules.join('\n')
}

// ---------------------------------------------------------------------------
// Grid props
// ---------------------------------------------------------------------------

/**
 * Props for the Grid component.
 *
 * The same component is used for both the **container** and **item** roles
 * (matching MUI's API). Add `container` to make an element a CSS Grid
 * container; omit it on children to treat them as grid items.
 */
export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Makes this element a CSS Grid container.
   * Direct `<Grid>` children will be treated as grid items.
   * @default false
   */
  container?: boolean

  /**
   * Total number of columns in the grid.
   * @default 12
   * @container
   */
  columns?: number

  /**
   * Uniform gap between items (both row and column).
   * Numbers are multiplied by 8 px; CSS length strings are used as-is.
   * Overridden per-axis by `rowSpacing` / `columnSpacing`.
   * @default 0
   * @container
   */
  spacing?: Spacing

  /**
   * Row gap (vertical). Overrides the row portion of `spacing`.
   * @container
   */
  rowSpacing?: Spacing

  /**
   * Column gap (horizontal). Overrides the column portion of `spacing`.
   * @container
   */
  columnSpacing?: Spacing

  /**
   * CSS `align-items` on the grid container.
   * @container
   */
  alignItems?: React.CSSProperties['alignItems']

  /**
   * CSS `justify-content` on the grid container.
   * @container
   */
  justifyContent?: React.CSSProperties['justifyContent']

  /**
   * Number of columns this item spans, or `'auto'` for browser auto-placement.
   * Accepts a responsive object to change the span at different breakpoints.
   *
   * @example
   * // Fixed span
   * <Grid size={6} />
   * // Responsive: full-width on mobile, half on sm, third on md
   * <Grid size={{ xs: 12, sm: 6, md: 4 }} />
   * @item
   */
  size?: Responsive<GridSize>

  /**
   * Number of columns to skip before this item (0-based).
   * Can be responsive: `{ xs: 0, md: 2 }`.
   * @item
   */
  offset?: Responsive<number>
}

/**
 * A 12-column responsive CSS Grid layout component inspired by MUI Grid.
 *
 * The same `<Grid>` component handles both the **container** and **item** roles:
 * - Add `container` to create the grid wrapper.
 * - Omit `container` on children to act as grid items with `size` / `offset`.
 *
 * Responsive `size` and `offset` values accept a breakpoint map that generates
 * scoped `@media` rules at runtime using `React.useId()`.
 *
 * The spacing scale mirrors MUI's 8px grid: `spacing={2}` = 16px gap.
 *
 * @example
 * // Basic 8/4 split
 * <Grid container spacing={2}>
 *   <Grid size={8}><Cell /></Grid>
 *   <Grid size={4}><Cell /></Grid>
 * </Grid>
 *
 * // Responsive: stacked on mobile, two columns on sm
 * <Grid container spacing={2}>
 *   <Grid size={{ xs: 12, sm: 6 }}><Cell /></Grid>
 *   <Grid size={{ xs: 12, sm: 6 }}><Cell /></Grid>
 * </Grid>
 */
const Grid = React.forwardRef<HTMLDivElement, GridProps>(function Grid(
  {
    container,
    columns = 12,
    spacing = 0,
    rowSpacing,
    columnSpacing,
    alignItems,
    justifyContent,
    size,
    offset,
    className,
    style,
    children,
    ...props
  },
  ref
) {
  // Stable id used to scope per-item responsive styles.
  const rawId = React.useId()
  const id = rawId.replace(/:/g, '_')

  if (container) {
    const containerStyle: React.CSSProperties = {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      columnGap:
        columnSpacing !== undefined
          ? resolveSpacing(columnSpacing)
          : resolveSpacing(spacing),
      rowGap:
        rowSpacing !== undefined ? resolveSpacing(rowSpacing) : resolveSpacing(spacing),
      alignItems,
      justifyContent,
      ...style,
    }

    return (
      <div
        data-slot="grid"
        ref={ref}
        className={cn(className)}
        style={containerStyle}
        {...props}
      >
        {children}
      </div>
    )
  }

  // ---- Item mode ----
  const isResponsiveSize = size !== null && typeof size === 'object'
  const isResponsiveOffset = offset !== null && typeof offset === 'object'
  const needsStyleTag = isResponsiveSize || isResponsiveOffset

  const itemStyle: React.CSSProperties = {
    minWidth: 0,
    ...(!needsStyleTag
      ? buildItemStyles(size as GridSize | undefined, offset as number | undefined)
      : {}),
    ...style,
  }

  const generatedCSS = needsStyleTag ? generateResponsiveCSS(id, size, offset) : ''

  return (
    <>
      {generatedCSS && <style>{generatedCSS}</style>}
      <div
        data-slot="grid-item"
        data-grid-item-id={needsStyleTag ? id : undefined}
        ref={ref}
        className={cn(className)}
        style={itemStyle}
        {...props}
      >
        {children}
      </div>
    </>
  )
})

Grid.displayName = 'Grid'

export { Grid }
