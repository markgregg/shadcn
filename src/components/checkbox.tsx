'use client'

import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox'

import { cn } from '@/utils/index'
import { CheckIcon } from 'lucide-react'

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root data-slot="checkbox" className={cn(className)} {...props}>
      <CheckboxPrimitive.Indicator data-slot="checkbox-indicator">
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
