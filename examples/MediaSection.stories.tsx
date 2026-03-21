import type { Story } from '@ladle/react'
import { MediaSection } from './sections/MediaSection'
import { ThemeProvider } from '../src/components/theme-provider'

export const Default: Story = () => (
  <ThemeProvider defaultTheme="light" storageKey="signal-theme-gallery">
    <MediaSection />
  </ThemeProvider>
)
