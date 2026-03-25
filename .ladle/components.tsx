import type { GlobalProvider } from '@ladle/react'
import * as React from 'react'
import { createPortal } from 'react-dom'
import '../src/styles/main.css'
import '../src/styles/ladle-preview.css'
import { useTheme } from '../src/components/theme-provider'
import { ThemeProvider } from '../src/components/theme-provider'

function LadleDensityToggle() {
  const { density, toggleDensity } = useTheme()
  const [toolbarTarget, setToolbarTarget] = React.useState<Element | null>(null)

  React.useEffect(() => {
    const resolveTarget = () => {
      const currentDocument = document.querySelector('.ladle-addons ul')
      if (currentDocument) {
        setToolbarTarget(currentDocument)
        return
      }

      if (window.parent && window.parent !== window) {
        const parentDocument = window.parent.document.querySelector('.ladle-addons ul')
        if (parentDocument) {
          setToolbarTarget(parentDocument)
          return
        }
      }

      setToolbarTarget(null)
    }

    resolveTarget()
    const timer = window.setInterval(resolveTarget, 500)

    return () => {
      window.clearInterval(timer)
    }
  }, [])

  if (!toolbarTarget) return null

  return createPortal(
    <li>
      <button
        aria-label={`Switch to ${density === 'super-high' ? 'high' : 'super-high'} density`}
        title={`Switch to ${density === 'super-high' ? 'high' : 'super-high'} density`}
        onClick={toggleDensity}
        type="button"
        className={density === 'super-high' ? 'ladle-active' : ''}
      >
        {density === 'super-high' ? 'SH' : 'HD'}
        <span className="ladle-addon-tooltip">
          Switch to {density === 'super-high' ? 'high' : 'super-high'} density
        </span>
        <label>Toggle density</label>
      </button>
    </li>,
    toolbarTarget
  )
}

export const Provider: GlobalProvider = ({ children }) => {
  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="signal-theme-gallery"
      defaultDensity="high"
      densityStorageKey="signal-density-gallery"
    >
      <LadleDensityToggle />
      <div>{children}</div>
    </ThemeProvider>
  )
}
