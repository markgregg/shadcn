import type { Story } from '@ladle/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from '../src/components/popover'
import { Button } from '../src/components/button'
import { Input } from '../src/components/input'
import { Label } from '../src/components/label'

export const Default: Story = () => (
  <div style={{ padding: 40 }}>
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
        </PopoverHeader>
        <div style={{ display: 'grid', gap: 8, paddingTop: 8 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', alignItems: 'center', gap: 8 }}>
            <Label htmlFor="pop-width">Width</Label>
            <Input id="pop-width" defaultValue="100%" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', alignItems: 'center', gap: 8 }}>
            <Label htmlFor="pop-height">Height</Label>
            <Input id="pop-height" defaultValue="25px" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </div>
)

export const TopSide: Story = () => (
  <div style={{ padding: 80 }}>
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Popover on top</Button>
      </PopoverTrigger>
      <PopoverContent side="top">
        <p style={{ fontSize: 13 }}>This popover appears on top.</p>
      </PopoverContent>
    </Popover>
  </div>
)

export const LeftSide: Story = () => (
  <div style={{ padding: 80 }}>
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Popover on left</Button>
      </PopoverTrigger>
      <PopoverContent side="left">
        <p style={{ fontSize: 13 }}>This popover appears on the left.</p>
      </PopoverContent>
    </Popover>
  </div>
)
