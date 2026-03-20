import * as React from 'react'
import type { Story } from '@ladle/react'
import { Checkbox } from '../src/components/checkbox'
import { Label } from '../src/components/label'

export const Default: Story = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <Checkbox id="default" />
    <Label htmlFor="default">Accept terms and conditions</Label>
  </div>
)

export const Checked: Story = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <Checkbox id="checked" defaultChecked />
    <Label htmlFor="checked">Already checked</Label>
  </div>
)

export const Disabled: Story = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <Checkbox id="disabled" disabled />
    <Label htmlFor="disabled">Disabled</Label>
  </div>
)

export const DisabledChecked: Story = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <Checkbox id="disabled-checked" disabled defaultChecked />
    <Label htmlFor="disabled-checked">Disabled and checked</Label>
  </div>
)

export const Controlled: Story = () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Checkbox
          id="controlled"
          checked={checked}
          onCheckedChange={(v) => setChecked(v === true)}
        />
        <Label htmlFor="controlled">Controlled checkbox</Label>
      </div>
      <p style={{ fontSize: 14, color: 'var(--color-muted-foreground)' }}>
        State: {checked ? 'checked' : 'unchecked'}
      </p>
    </div>
  )
}
