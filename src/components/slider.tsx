'use client'

import * as React from 'react'
import { Slider as SliderPrimitive } from '@base-ui/react/slider'

import { cn } from '@/utils/index'

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderPrimitive.Root.Props) {
  const _values = React.useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      className={cn(className)}
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      {...props}
    >
      <SliderPrimitive.Control data-slot="slider-control">
        <SliderPrimitive.Track data-slot="slider-track">
          <SliderPrimitive.Indicator data-slot="slider-range" />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb data-slot="slider-thumb" key={index} />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

export { Slider }
