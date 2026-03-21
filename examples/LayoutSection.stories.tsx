import type { Story } from '@ladle/react'
import { LayoutSection } from './sections/LayoutSection'
import { ThemeProvider } from '../src/components/theme-provider'

export const Default: Story = () => (
  <ThemeProvider defaultTheme="light" storageKey="signal-theme-gallery">
    <LayoutSection />
  </ThemeProvider>
)
