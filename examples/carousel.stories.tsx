import type { Story } from '@ladle/react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../src/components/carousel'
import { Card, CardContent } from '../src/components/card'

export const Horizontal: Story = () => (
  <div style={{ width: 360, margin: '20px auto' }}>
    <Carousel>
      <CarouselContent>
        {Array.from({ length: 5 }, (_, i) => (
          <CarouselItem key={i}>
            <Card>
              <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
                <span style={{ fontSize: 40, fontWeight: 700 }}>{i + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
)

export const Vertical: Story = () => (
  <div style={{ width: 240, margin: '40px auto' }}>
    <Carousel orientation="vertical" style={{ height: 300 }}>
      <CarouselContent style={{ height: 300 }}>
        {Array.from({ length: 5 }, (_, i) => (
          <CarouselItem key={i} style={{ flexBasis: '100%' }}>
            <Card>
              <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
                <span style={{ fontSize: 40, fontWeight: 700 }}>{i + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
)

export const MultipleVisible: Story = () => (
  <div style={{ width: 500, margin: '20px auto' }}>
    <Carousel opts={{ align: 'start' }}>
      <CarouselContent>
        {Array.from({ length: 8 }, (_, i) => (
          <CarouselItem key={i} style={{ flexBasis: '33.333%' }}>
            <Card>
              <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
                <span style={{ fontWeight: 700 }}>{i + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
)
