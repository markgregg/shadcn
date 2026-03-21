'use client'

import { ThemeToggle } from './ThemeToggle'
import { DensityToggle } from './DensityToggle'
import { TokensDownloadButton } from './TokensDownloadButton'
import { ButtonsSection } from './sections/ButtonsSection'
import { TypographySection } from './sections/TypographySection'
import { FormControlsSection } from './sections/FormControlsSection'
import { FeedbackSection } from './sections/FeedbackSection'
import { DataDisplaySection } from './sections/DataDisplaySection'
import { ChartsSection } from './sections/ChartsSection'
import { NavigationSection } from './sections/NavigationSection'
import { LayoutSection } from './sections/LayoutSection'
import { OverlaySection } from './sections/OverlaySection'
import { SelectionSection } from './sections/SelectionSection'
import { MediaSection } from './sections/MediaSection'

export function GalleryPage() {
  return (
    <main className="gallery-page">
      <header className="gallery-page-header">
        <div className="gallery-page-header-inner">
          <div>
            <h1 className="gallery-page-title">Design System</h1>
            <p className="gallery-page-subtitle">Token-driven shadcn/ui component gallery</p>
          </div>
          <div className="gallery-page-actions">
            <TokensDownloadButton />
            <DensityToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="gallery-sections">
        <ButtonsSection />
        <TypographySection />
        <FormControlsSection />
        <FeedbackSection />
        <DataDisplaySection />
        <ChartsSection />
        <NavigationSection />
        <LayoutSection />
        <OverlaySection />
        <SelectionSection />
        <MediaSection />
      </div>
    </main>
  )
}
