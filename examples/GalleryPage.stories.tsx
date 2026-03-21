import type { Story } from '@ladle/react'
import { GalleryPage } from './GalleryPage'
import { ThemeProvider } from '../src/components/theme-provider'

export const Gallery: Story = () => (
  <ThemeProvider
    defaultTheme="light"
    storageKey="signal-theme-gallery"
    defaultDensity="high"
    densityStorageKey="signal-density-gallery"
  >
    <GalleryPage />
  </ThemeProvider>
)
