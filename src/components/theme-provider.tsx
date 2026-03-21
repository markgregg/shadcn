'use client'

import * as React from 'react'

type Theme = 'light' | 'dark'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme | 'system'
  storageKey?: string
}

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined)

function resolveTheme(defaultTheme: Theme | 'system', storageKey: string): Theme {
  if (typeof window === 'undefined') return 'light'

  const stored = window.localStorage.getItem(storageKey)
  if (stored === 'light' || stored === 'dark') return stored

  if (defaultTheme === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  return defaultTheme
}

function applyThemeClass(theme: Theme) {
  if (typeof document === 'undefined') return
  document.documentElement.setAttribute('data-theme', theme)
}
export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'signal-theme',
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(() => resolveTheme(defaultTheme, storageKey))

  const setTheme = React.useCallback(
    (nextTheme: Theme) => {
      setThemeState(nextTheme)
      applyThemeClass(nextTheme)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(storageKey, nextTheme)
      }
    },
    [storageKey]
  )

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  React.useEffect(() => {
    applyThemeClass(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
