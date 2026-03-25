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
      className="gallery-theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <SunIcon className="gallery-theme-icon gallery-theme-icon--sun" />
      <MoonIcon className="gallery-theme-icon gallery-theme-icon--moon" />
    </Button>
  )
}
