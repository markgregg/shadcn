import './examples.css'

import { cn } from '@/utils/index'

interface GallerySectionProps {
  id: string
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function GallerySection({
  id,
  title,
  description,
  children,
  className,
}: GallerySectionProps) {
  return (
    <section id={id} className={cn('gallery-section', className)}>
      <div className="gallery-section-content">
        <div className="gallery-section-heading">
          <h2 className="gallery-section-title">{title}</h2>
          {description && <p className="gallery-section-description">{description}</p>}
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}
