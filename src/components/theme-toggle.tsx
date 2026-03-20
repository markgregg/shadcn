'use client'

import { MoonIcon, SunIcon } from 'lucide-react'

import { Button } from '@/components/button'
import { useTheme } from '@/components/theme-provider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <SunIcon className="size-4 sun-icon" />
      <MoonIcon className="absolute size-4 moon-icon" />
    </Button>
  )
}
