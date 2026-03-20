'use client'

import { GallerySection } from '../GallerySection'
import { Progress } from '@/components/progress'
import { Separator } from '@/components/separator'
import { ScrollArea } from '@/components/scroll-area'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/carousel'

export function MediaSection() {
  return (
    <GallerySection
      id="media"
      title="Media"
      description="Progress, Separator, ScrollArea, Carousel"
    >
      <div className="example-grid">
        <div className="example-stack-4">
          <h3 className="example-subtitle">Progress</h3>
          <div className="example-stack-4">
            <Progress value={0} />
            <Progress value={33} />
            <Progress value={66} />
            <Progress value={100} />
          </div>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Separator</h3>
          <div className="example-stack-4">
            <div>
              <p className="example-text-sm-muted">Content above</p>
              <Separator className="example-separator-block" />
              <p className="example-text-sm-muted">Content below</p>
            </div>
            <div className="example-inline-separator-row">
              <span className="example-text-sm">Item 1</span>
              <Separator orientation="vertical" />
              <span className="example-text-sm">Item 2</span>
              <Separator orientation="vertical" />
              <span className="example-text-sm">Item 3</span>
            </div>
          </div>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">ScrollArea</h3>
          <ScrollArea className="example-scroll-area">
            <div className="example-stack-2" style={{ padding: '1rem' }}>
              {Array.from({ length: 20 }).map((_, i) => (
                <p key={i} className="example-text-sm">
                  Item {i + 1}
                </p>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Carousel</h3>
          <Carousel className="example-carousel" opts={{ loop: true }}>
            <CarouselContent>
              {Array.from({ length: 3 }).map((_, i) => (
                <CarouselItem key={i}>
                  <div className="example-carousel-item">
                    <span className="example-text-4xl-semibold">{i + 1}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </GallerySection>
  )
}
