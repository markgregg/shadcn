'use client'

import { Button } from '@/components/button'
import { useTheme } from '@/components/theme-provider'

export function DensityToggle() {
  const { density, toggleDensity } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleDensity}
      aria-label="Toggle density"
      title={`Switch to ${density === 'super-high' ? 'high' : 'super-high'} density`}
    >
      <span aria-hidden style={{ fontSize: '0.625rem', fontWeight: 700, lineHeight: 1 }}>
        {density === 'super-high' ? 'SH' : 'HD'}
      </span>
    </Button>
  )
}
