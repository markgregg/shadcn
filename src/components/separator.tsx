'use client'

import { Separator as SeparatorPrimitive } from '@base-ui/react/separator'

import { cn } from '@/utils/index'

function Separator({ className, orientation = 'horizontal', ...props }: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(className)}
      {...props}
    />
  )
}

export { Separator }
