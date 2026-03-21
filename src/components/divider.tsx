'use client'

import * as React from 'react'

import { cn } from '@/utils/index'

/** The axis along which the dividing line is drawn. */
export type DividerOrientation = 'horizontal' | 'vertical'

/**
 * Thickness of the dividing line.
 *
 * | Size | Thickness |
 * |------|-----------|
 * | `xs` | 1 px      |
 * | `sm` | 2 px      |
 * | `md` | 4 px      |
 * | `lg` | 8 px      |
 * | `xl` | 16 px     |
 *
 * @default 'xs'
 */
export type DividerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/**
 * How the divider's extent is applied within its container (horizontal only).
 *
 * - `fullWidth` — stretches edge-to-edge (default)
 * - `inset`     — indented from the left / top by 1 rem
 * - `middle`    — indented by 1 rem on both sides
 */
export type DividerVariant = 'fullWidth' | 'inset' | 'middle'

/** Horizontal alignment of optional child text (horizontal orientation only). */
export type DividerTextAlign = 'left' | 'center' | 'right'

/**
 * Props for the Divider component.
 */
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Direction of the dividing line.
   * @default 'horizontal'
   */
  orientation?: DividerOrientation
  /**
   * Thickness of the line.
   * @default 'xs'
   */
  size?: DividerSize
  /**
   * Extent variant. Applies 1 rem indent to `inset`, 1 rem both sides for `middle`.
   * Only affects horizontal dividers.
   * @default 'fullWidth'
   */
  variant?: DividerVariant
  /**
   * Alignment of optional text children. Only applies when `orientation="horizontal"`
   * and children are provided.
   * @default 'center'
   */
  textAlign?: DividerTextAlign
  /**
   * Optional label text rendered inside a horizontal divider.
   * Ignored when `orientation="vertical"`.
   *
   * @example
   * <Divider>Section title</Divider>
   */
  children?: React.ReactNode
}

/**
 * A visual dividing line between content sections. Supports horizontal and
 * vertical orientations, five thickness sizes, three width variants, and an
 * optional inline text label (horizontal only).
 *
 * The component renders a `<div role="separator">` and is fully accessible
 * via `aria-orientation`.
 *
 * @example
 * // Simple horizontal rule
 * <Divider />
 *
 * // Thick vertical divider inside a flex row
 * <div style={{ display: 'flex', height: 48 }}>
 *   <span>Left</span>
 *   <Divider orientation="vertical" size="md" />
 *   <span>Right</span>
 * </div>
 *
 * // Horizontal divider with a centred label
 * <Divider>OR</Divider>
 *
 * // Left-aligned label with medium thickness
 * <Divider size="sm" textAlign="left">New section</Divider>
 */
const Divider = React.forwardRef<HTMLDivElement, DividerProps>(function Divider(
  {
    orientation = 'horizontal',
    size = 'xs',
    variant = 'fullWidth',
    textAlign = 'center',
    className,
    children,
    ...props
  },
  ref
) {
  const hasText = !!children && orientation === 'horizontal'

  return (
    <div
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      data-slot="divider"
      data-orientation={orientation}
      data-size={size}
      data-variant={variant}
      data-text-align={hasText ? textAlign : undefined}
      data-has-text={hasText ? 'true' : undefined}
      className={cn(className)}
      {...props}
    >
      {hasText && <span data-slot="divider-text">{children}</span>}
    </div>
  )
})

Divider.displayName = 'Divider'

export { Divider }
