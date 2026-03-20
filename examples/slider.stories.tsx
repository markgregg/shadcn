import * as React from 'react'
import type { Story } from '@ladle/react'
import { Slider } from '../src/components/slider'

export const Default: Story = () => (
  <div style={{ width: 300, padding: '20px 0' }}>
    <Slider defaultValue={[50]} max={100} step={1} />
  </div>
)

export const Range: Story = () => (
  <div style={{ width: 300, padding: '20px 0' }}>
    <Slider defaultValue={[20, 80]} max={100} step={1} />
  </div>
)

export const StepSize: Story = () => (
  <div style={{ width: 300, padding: '20px 0' }}>
    <Slider defaultValue={[0]} max={100} step={10} />
  </div>
)

export const Disabled: Story = () => (
  <div style={{ width: 300, padding: '20px 0' }}>
    <Slider defaultValue={[40]} max={100} disabled />
  </div>
)

export const Controlled: Story = () => {
  const [value, setValue] = React.useState([33])
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
      <Slider value={value} onValueChange={(v) => setValue(Array.isArray(v) ? [...v] : [v])} max={100} step={1} />
      <p style={{ fontSize: 13, color: 'var(--color-muted-foreground)' }}>
        Value: {value[0]}
      </p>
    </div>
  )
}

export const Vertical: Story = () => (
  <div style={{ height: 200, padding: '0 20px' }}>
    <Slider defaultValue={[50]} max={100} orientation="vertical" style={{ height: '100%' }} />
  </div>
)
