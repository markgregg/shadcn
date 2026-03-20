import * as React from 'react'
import type { Story } from '@ladle/react'
import { Switch } from '../src/components/switch'
import { Label } from '../src/components/label'

export const Default: Story = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <Switch id="switch-default" />
    <Label htmlFor="switch-default">Toggle feature</Label>
  </div>
)

export const Checked: Story = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <Switch id="switch-checked" defaultChecked />
    <Label htmlFor="switch-checked">Feature enabled</Label>
  </div>
)

export const Small: Story = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <Switch id="switch-sm" size="sm" />
    <Label htmlFor="switch-sm">Small switch</Label>
  </div>
)

export const Disabled: Story = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <Switch id="switch-disabled" disabled />
    <Label htmlFor="switch-disabled">Disabled switch</Label>
  </div>
)

export const AllSizes: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Switch id="sz-sm" size="sm" defaultChecked />
      <Label htmlFor="sz-sm">Small</Label>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Switch id="sz-default" defaultChecked />
      <Label htmlFor="sz-default">Default</Label>
    </div>
  </div>
)

export const Controlled: Story = () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Switch
          id="switch-controlled"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label htmlFor="switch-controlled">Airplane Mode</Label>
      </div>
      <p style={{ fontSize: 13, color: 'var(--color-muted-foreground)' }}>
        Status: {checked ? 'On' : 'Off'}
      </p>
    </div>
  )
}
