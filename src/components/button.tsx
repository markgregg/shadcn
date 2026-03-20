'use client'

import { Button as ButtonPrimitive } from '@base-ui/react/button'

import { cn } from '@/utils/index'

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & {
  variant?:
    | 'default'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'destructive'
    | 'success'
    | 'warning'
    | 'info'
    | 'link'
  size?: 'sm' | 'default' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg'
}) {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(className)}
      {...props}
    />
  )
}

export { Button }
