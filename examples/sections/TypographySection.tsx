import { GallerySection } from '../GallerySection'

export function TypographySection() {
  return (
    <GallerySection
      id="typography"
      title="Typography"
      description="Typography scale using design tokens"
    >
      <div className="example-grid">
        <div className="example-stack-4">
          <h3 className="example-subtitle">Headings</h3>
          <div className="example-stack-2">
            <h1 className="example-text-3xl-bold example-leading-tight">Heading 1</h1>
            <h2 className="example-text-2xl-semibold example-leading-tight">Heading 2</h2>
            <h3 className="example-text-xl-semibold">Heading 3</h3>
            <h4 className="example-text-lg-medium">Heading 4</h4>
          </div>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Body text</h3>
          <div className="example-stack-2">
            <p className="example-text-base example-leading-normal">
              Base body text at 1rem with normal line height.
            </p>
            <p className="example-text-sm example-leading-relaxed">
              Small text at 0.875rem with relaxed line height.
            </p>
            <p className="example-text-xs-muted">Extra small text at 0.75rem.</p>
          </div>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Weights</h3>
          <div className="example-stack-2">
            <p className="example-font-normal">Normal (400)</p>
            <p className="example-font-medium">Medium (500)</p>
            <p className="example-font-semibold">Semibold (600)</p>
            <p className="example-font-bold">Bold (700)</p>
          </div>
        </div>
      </div>
    </GallerySection>
  )
}
