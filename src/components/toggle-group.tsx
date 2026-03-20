'use client'

import * as React from 'react'
import { Toggle as TogglePrimitive } from '@base-ui/react/toggle'
import { ToggleGroup as ToggleGroupPrimitive } from '@base-ui/react/toggle-group'

import { cn } from '@/utils/index'

const ToggleGroupContext = React.createContext<{
  size?: 'default' | 'sm' | 'lg'
  variant?: 'default' | 'outline'
  spacing?: number
  orientation?: 'horizontal' | 'vertical'
}>({
  size: 'default',
  variant: 'default',
  spacing: 0,
  orientation: 'horizontal',
})

function ToggleGroup({
  className,
  variant = 'default',
  size = 'default',
  spacing = 0,
  orientation = 'horizontal',
  type = 'single',
  children,
  ...props
}: ToggleGroupPrimitive.Props & {
  variant?: 'default' | 'outline'
  size?: 'default' | 'sm' | 'lg'
  spacing?: number
  orientation?: 'horizontal' | 'vertical'
  type?: 'single' | 'multiple'
}) {
  return (
    <ToggleGroupPrimitive
      multiple={type === 'multiple'}
      data-slot="toggle-group"
      data-variant={variant}
      data-type={type}
      data-size={size}
      data-spacing={spacing}
      data-orientation={orientation}
      style={{ '--gap': spacing } as React.CSSProperties}
      className={cn(className)}
      {...props}
    >
      <div className={cn(className)}>
        <ToggleGroupContext.Provider value={{ variant, size, spacing, orientation }}>
          {children}
        </ToggleGroupContext.Provider>
      </div>
    </ToggleGroupPrimitive>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant = 'default',
  size = 'default',
  ...props
}: TogglePrimitive.Props & {
  variant?: 'default' | 'outline'
  size?: 'default' | 'sm' | 'lg'
}) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <TogglePrimitive
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      data-spacing={context.spacing}
      className={cn(className)}
      {...props}
    >
      {children}
    </TogglePrimitive>
  )
}

export { ToggleGroup, ToggleGroupItem }
