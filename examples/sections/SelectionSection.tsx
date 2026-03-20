'use client'

import { GallerySection } from '../GallerySection'
import { Checkbox } from '@/components/checkbox'
import { Label } from '@/components/label'
import { RadioGroup, RadioGroupItem } from '@/components/radio-group'
import { Switch } from '@/components/switch'
import { Slider } from '@/components/slider'

export function SelectionSection() {
  return (
    <GallerySection
      id="selection"
      title="Selection"
      description="Checkbox, RadioGroup, Switch, Slider"
    >
      <div className="example-grid">
        <div className="example-stack-4">
          <h3 className="example-subtitle">Checkbox</h3>
          <div className="example-row-tight">
            <Checkbox id="check1" />
            <Label htmlFor="check1">Accept terms and conditions</Label>
          </div>
          <div className="example-row-tight">
            <Checkbox id="check2" defaultChecked />
            <Label htmlFor="check2">Subscribe to newsletter</Label>
          </div>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Radio group</h3>
          <RadioGroup defaultValue="option1">
            <div className="example-row-tight">
              <RadioGroupItem value="option1" id="option1" />
              <Label htmlFor="option1">Option 1</Label>
            </div>
            <div className="example-row-tight">
              <RadioGroupItem value="option2" id="option2" />
              <Label htmlFor="option2">Option 2</Label>
            </div>
            <div className="example-row-tight">
              <RadioGroupItem value="option3" id="option3" />
              <Label htmlFor="option3">Option 3</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Switch</h3>
          <div className="example-row-tight">
            <Switch id="switch1" />
            <Label htmlFor="switch1">Enable notifications</Label>
          </div>
          <div className="example-row-tight">
            <Switch id="switch2" defaultChecked />
            <Label htmlFor="switch2">Dark mode</Label>
          </div>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Slider</h3>
          <div className="example-stack-2">
            <Slider defaultValue={[50]} max={100} step={1} />
            <Slider defaultValue={[25, 75]} max={100} step={1} />
          </div>
        </div>
      </div>
    </GallerySection>
  )
}
