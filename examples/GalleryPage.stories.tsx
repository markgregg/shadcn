import type { Story } from '@ladle/react'
import { GalleryPage } from './GalleryPage'
import { ThemeProvider } from '../src/components/theme-provider'

export const Gallery: Story = () => (
  <ThemeProvider defaultTheme="light" storageKey="signal-theme-gallery">
    <GalleryPage />
  </ThemeProvider>
)
