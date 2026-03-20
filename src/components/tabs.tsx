'use client'

import { Tabs as TabsPrimitive } from '@base-ui/react/tabs'

import { cn } from '@/utils/index'

function Tabs({ className, orientation = 'horizontal', ...props }: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  variant = 'default',
  ...props
}: TabsPrimitive.List.Props & {
  variant?: 'default' | 'line'
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return <TabsPrimitive.Tab data-slot="tabs-trigger" className={cn(className)} {...props} />
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return <TabsPrimitive.Panel data-slot="tabs-content" className={cn(className)} {...props} />
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
