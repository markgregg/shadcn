import type { Story } from '@ladle/react'
import { SelectionSection } from './sections/SelectionSection'
import { ThemeProvider } from '../src/components/theme-provider'

export const Default: Story = () => (
  <ThemeProvider defaultTheme="light" storageKey="signal-theme-gallery">
    <SelectionSection />
  </ThemeProvider>
)
