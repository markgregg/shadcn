'use client'

import * as React from 'react'

import { cn } from '@/utils/index'

/**
 * The flex-direction value for a Stack.
 * `'row'` lays children out horizontally; `'column'` (default) vertically.
 */
export type StackDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'

/** Converts a spacing value to a CSS string. One unit = 8px (0.5rem). */
function resolveSpacing(spacing: number | string): string {
  return typeof spacing === 'string' ? spacing : `${spacing * 0.5}rem`
}

/**
 * Props for the Stack component.
 */
export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Direction children are laid out.
   * @default 'column'
   */
  direction?: StackDirection
  /**
   * Gap between children. Numbers are multiplied by 8 px (e.g. `2` → 16 px).
   * Accepts any valid CSS length string (e.g. `'1rem'`).
   * @default 0
   */
  spacing?: number | string
  /**
   * An element inserted between each child — typically a `<Separator />`.
   * The divider is wrapped in a `React.Fragment` keyed by index.
   */
  divider?: React.ReactNode
  /** CSS `align-items` applied to the flex container. */
  alignItems?: React.CSSProperties['alignItems']
  /** CSS `justify-content` applied to the flex container. */
  justifyContent?: React.CSSProperties['justifyContent']
  /** CSS `flex-wrap` applied to the flex container. */
  flexWrap?: React.CSSProperties['flexWrap']
}

/**
 * A one-dimensional flexbox layout component inspired by MUI Stack.
 *
 * Stack lays its children out along a single axis (column by default) with
 * consistent spacing. An optional `divider` element is inserted between each
 * child, and all standard flexbox alignment props are exposed directly.
 *
 * The spacing scale mirrors MUI's 8px grid: `spacing={2}` produces a 16px gap.
 *
 * @example
 * // Vertical stack with 16 px gap
 * <Stack spacing={2}>
 *   <Box>Item 1</Box>
 *   <Box>Item 2</Box>
 * </Stack>
 *
 * // Horizontal stack with a divider
 * <Stack direction="row" spacing={2} divider={<Separator orientation="vertical" />}>
 *   <span>A</span>
 *   <span>B</span>
 * </Stack>
 */

const Stack = React.forwardRef<HTMLDivElement, StackProps>(function Stack(
  {
    direction = 'column',
    spacing = 0,
    divider,
    alignItems,
    justifyContent,
    flexWrap,
    className,
    style,
    children,
    ...props
  },
  ref
) {
  const gap = resolveSpacing(spacing)

  const stackStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: direction,
    gap,
    alignItems,
    justifyContent,
    flexWrap,
    ...style,
  }

  let content: React.ReactNode = children

  if (divider) {
    const childArray = React.Children.toArray(children).filter(Boolean)
    content = childArray.reduce<React.ReactNode[]>((acc, child, index) => {
      if (index > 0) {
        acc.push(
          <React.Fragment key={`stack-divider-${index}`}>{divider}</React.Fragment>
        )
      }
      acc.push(child)
      return acc
    }, [])
  }

  return (
    <div
      data-slot="stack"
      ref={ref}
      className={cn(className)}
      style={stackStyle}
      {...props}
    >
      {content}
    </div>
  )
})

Stack.displayName = 'Stack'

export { Stack }
