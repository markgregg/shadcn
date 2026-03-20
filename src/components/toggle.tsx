'use client'

import { Toggle as TogglePrimitive } from '@base-ui/react/toggle'

import { cn } from '@/utils/index'

function Toggle({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: TogglePrimitive.Props & {
  variant?: 'default' | 'outline'
  size?: 'default' | 'sm' | 'lg'
}) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      data-variant={variant}
      data-size={size}
      className={cn(className)}
      {...props}
    />
  )
}

export { Toggle }
