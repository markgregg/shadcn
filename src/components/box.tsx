'use client'

import * as React from 'react'

import { cn } from '@/utils/index'

/**
 * Props for the Box component.
 */
export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The HTML element or custom component to render.
   *
   * @default 'div'
   * @example
   * // Render as a semantic <section>
   * <Box component="section">…</Box>
   *
   * // Render as a custom React component
   * <Box component={MyCard}>…</Box>
   */
  component?: React.ElementType
}

/**
 * A generic polymorphic container component inspired by MUI Box.
 *
 * Box is the lowest-level layout primitive. It renders as a `<div>` by
 * default and can be polymorphed into any HTML element or React component
 * via the `component` prop, while forwarding all standard HTML attributes
 * and the ref.
 *
 * @example
 * // Default usage
 * <Box style={{ padding: '1rem' }}>Content</Box>
 *
 * // Polymorphic: render as an article
 * <Box component="article">…</Box>
 */
const Box = React.forwardRef<HTMLElement, BoxProps>(function Box(
  { component: Component = 'div', className, ...props },
  ref
) {
  return <Component data-slot="box" ref={ref} className={cn(className)} {...props} />
})

Box.displayName = 'Box'

export { Box }
