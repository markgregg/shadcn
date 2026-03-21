'use client'

import { useTheme } from '@/components/theme-provider'
import { MoonIcon, SunIcon } from 'lucide-react'

import { Button } from '@/components/button'

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
      <SunIcon className="example-theme-icon sun-icon" />
      <MoonIcon className="example-theme-icon-overlay moon-icon" />
    </Button>
  )
}
