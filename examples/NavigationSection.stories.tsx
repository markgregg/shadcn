import type { Story } from '@ladle/react'
import { NavigationSection } from './sections/NavigationSection'
import { ThemeProvider } from '../src/components/theme-provider'

export const Default: Story = () => (
  <ThemeProvider defaultTheme="light" storageKey="signal-theme-gallery">
    <NavigationSection />
  </ThemeProvider>
)
