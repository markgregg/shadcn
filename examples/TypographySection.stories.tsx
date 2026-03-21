import type { Story } from '@ladle/react'
import { TypographySection } from './sections/TypographySection'
import { ThemeProvider } from '../src/components/theme-provider'

export const Default: Story = () => (
  <ThemeProvider
    defaultTheme="light"
    storageKey="signal-theme-gallery"
    defaultDensity="high"
    densityStorageKey="signal-density-gallery"
  >
    <TypographySection />
  </ThemeProvider>
)
