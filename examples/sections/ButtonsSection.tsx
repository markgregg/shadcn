'use client'

import { ArrowRightIcon, PlusIcon } from 'lucide-react'

import { GallerySection } from '../GallerySection'
import { Button } from '@/components/button'
import { ButtonGroup } from '@/components/button-group'
import { Toggle } from '@/components/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/toggle-group'

export function ButtonsSection() {
  return (
    <GallerySection
      id="buttons"
      title="Buttons"
      description="Button variants, sizes, and button groups"
    >
      <div className="example-grid">
        <div className="example-stack-4">
          <h3 className="example-subtitle">Variants</h3>
          <div className="example-row-wrap">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="info">Info</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Sizes</h3>
          <div className="example-row-wrap-center">
            <Button variant="secondary" size="sm">
              Small
            </Button>
            <Button variant="secondary">Medium</Button>
            <Button variant="secondary" size="lg">
              Large
            </Button>
          </div>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Icon buttons</h3>
          <div className="example-row-wrap-center">
            <Button variant="secondary" size="icon-sm" aria-label="Add">
              <PlusIcon />
            </Button>
            <Button variant="secondary" size="icon" aria-label="Add">
              <PlusIcon />
            </Button>
            <Button variant="secondary" size="icon-lg" aria-label="Add">
              <PlusIcon />
            </Button>
          </div>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">With icon</h3>
          <div className="example-row-wrap">
            <Button variant="secondary">
              Next
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </div>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Button group</h3>
          <ButtonGroup>
            <Button variant="outline">One</Button>
            <Button variant="outline">Two</Button>
            <Button variant="outline">Three</Button>
          </ButtonGroup>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Toggle</h3>
          <div className="example-row-wrap">
            <Toggle>Toggle</Toggle>
            <Toggle variant="outline">Outline</Toggle>
          </div>
          <ToggleGroup type="single">
            <ToggleGroupItem value="a">Option A</ToggleGroupItem>
            <ToggleGroupItem value="b">Option B</ToggleGroupItem>
            <ToggleGroupItem value="c">Option C</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </GallerySection>
  )
}
