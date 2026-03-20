import * as React from 'react'
import type { Story } from '@ladle/react'
import { RadioGroup, RadioGroupItem } from '../src/components/radio-group'
import { Label } from '../src/components/label'

export const Default: Story = () => (
  <RadioGroup defaultValue="option-one">
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <RadioGroupItem value="option-one" id="option-one" />
      <Label htmlFor="option-one">Option One</Label>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <RadioGroupItem value="option-two" id="option-two" />
      <Label htmlFor="option-two">Option Two</Label>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <RadioGroupItem value="option-three" id="option-three" />
      <Label htmlFor="option-three">Option Three</Label>
    </div>
  </RadioGroup>
)

export const Disabled: Story = () => (
  <RadioGroup defaultValue="one" disabled>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <RadioGroupItem value="one" id="dis-one" />
      <Label htmlFor="dis-one">Option One (disabled)</Label>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <RadioGroupItem value="two" id="dis-two" />
      <Label htmlFor="dis-two">Option Two (disabled)</Label>
    </div>
  </RadioGroup>
)

export const Controlled: Story = () => {
  const [value, setValue] = React.useState('comfortable')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <RadioGroup value={value} onValueChange={setValue}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <RadioGroupItem value="default" id="r-default" />
          <Label htmlFor="r-default">Default</Label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <RadioGroupItem value="comfortable" id="r-comfortable" />
          <Label htmlFor="r-comfortable">Comfortable</Label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <RadioGroupItem value="compact" id="r-compact" />
          <Label htmlFor="r-compact">Compact</Label>
        </div>
      </RadioGroup>
      <p style={{ fontSize: 13, color: 'var(--color-muted-foreground)' }}>
        Selected: {value}
      </p>
    </div>
  )
}
