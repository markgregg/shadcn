'use client'

import * as React from 'react'

type Theme = 'light' | 'dark'
type Density = 'high' | 'super-high'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme | 'system'
  defaultDensity?: Density
  storageKey?: string
  densityStorageKey?: string
}

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  density: Density
  setDensity: (density: Density) => void
  toggleDensity: () => void
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

function resolveDensity(defaultDensity: Density, densityStorageKey: string): Density {
  if (typeof window === 'undefined') return defaultDensity

  const stored = window.localStorage.getItem(densityStorageKey)
  if (stored === 'high' || stored === 'super-high') return stored

  return defaultDensity
}

function applyThemeClass(theme: Theme) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  root.setAttribute('data-theme', theme)
  root.classList.toggle('dark', theme === 'dark')
}

function applyDensityClass(density: Density) {
  if (typeof document === 'undefined') return
  document.documentElement.setAttribute('data-density', density)
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
  defaultDensity = 'high',
  storageKey = 'signal-theme',
  densityStorageKey = 'signal-density',
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(() => resolveTheme(defaultTheme, storageKey))
  const [density, setDensityState] = React.useState<Density>(() =>
    resolveDensity(defaultDensity, densityStorageKey)
  )

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

  const setDensity = React.useCallback(
    (nextDensity: Density) => {
      setDensityState(nextDensity)
      applyDensityClass(nextDensity)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(densityStorageKey, nextDensity)
      }
    },
    [densityStorageKey]
  )

  const toggleDensity = React.useCallback(() => {
    setDensity(density === 'super-high' ? 'high' : 'super-high')
  }, [density, setDensity])

  React.useEffect(() => {
    applyThemeClass(theme)
  }, [theme])

  React.useEffect(() => {
    applyDensityClass(density)
  }, [density])

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, toggleTheme, density, setDensity, toggleDensity }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
