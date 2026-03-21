import type { Story } from '@ladle/react'
import { DataDisplaySection } from './sections/DataDisplaySection'
import { ThemeProvider } from '../src/components/theme-provider'

export const Default: Story = () => (
  <ThemeProvider
    defaultTheme="light"
    storageKey="signal-theme-gallery"
    defaultDensity="high"
    densityStorageKey="signal-density-gallery"
  >
    <DataDisplaySection />
  </ThemeProvider>
)
