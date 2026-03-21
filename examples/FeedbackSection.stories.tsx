import type { Story } from '@ladle/react'
import { FeedbackSection } from './sections/FeedbackSection'
import { ThemeProvider } from '../src/components/theme-provider'

export const Default: Story = () => (
  <ThemeProvider defaultTheme="light" storageKey="signal-theme-gallery">
    <FeedbackSection />
  </ThemeProvider>
)
