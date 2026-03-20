import * as React from 'react'
import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'

import { cn } from '@/utils/index'

function Badge({
  className,
  variant = 'default',
  asChild,
  render,
  children,
  ...props
}: useRender.ComponentProps<'span'> & {
  variant?:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'ghost'
    | 'link'
    | 'success'
    | 'warning'
    | 'info'
  asChild?: boolean
}) {
  return useRender({
    defaultTagName: 'span',
    props: mergeProps<'span'>(
      {
        className: cn(className),
        children,
      },
      props
    ),
    render: asChild && React.isValidElement(children) ? children : render,
    state: {
      slot: 'badge',
      variant,
    },
  })
}

export { Badge }
