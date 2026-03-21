import type { Story } from '@ladle/react'
import { ChartsSection } from './sections/ChartsSection'
import { ThemeProvider } from '../src/components/theme-provider'

export const Default: Story = () => (
  <ThemeProvider
    defaultTheme="light"
    storageKey="signal-theme-gallery"
    defaultDensity="high"
    densityStorageKey="signal-density-gallery"
  >
    <ChartsSection />
  </ThemeProvider>
)
