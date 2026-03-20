'use client'

import { ScrollArea as ScrollAreaPrimitive } from '@base-ui/react/scroll-area'

import { cn } from '@/utils/index'

function ScrollArea({ className, children, ...props }: ScrollAreaPrimitive.Root.Props) {
  return (
    <ScrollAreaPrimitive.Root data-slot="scroll-area" className={cn(className)} {...props}>
      <ScrollAreaPrimitive.Viewport data-slot="scroll-area-viewport">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = 'vertical',
  ...props
}: ScrollAreaPrimitive.Scrollbar.Props) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(className)}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb data-slot="scroll-area-thumb" />
    </ScrollAreaPrimitive.Scrollbar>
  )
}

export { ScrollArea, ScrollBar }
