'use client'

import * as React from 'react'

import { cn } from '@/utils/index'

const ButtonGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="button-group"
      role="group"
      className={cn('button-group', className)}
      {...props}
    />
  )
)
ButtonGroup.displayName = 'ButtonGroup'

export { ButtonGroup }
