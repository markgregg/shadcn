import type { Story } from '@ladle/react'
import { OverlaySection } from './sections/OverlaySection'
import { ThemeProvider } from '../src/components/theme-provider'

export const Default: Story = () => (
  <ThemeProvider defaultTheme="light" storageKey="signal-theme-gallery">
    <OverlaySection />
  </ThemeProvider>
)
