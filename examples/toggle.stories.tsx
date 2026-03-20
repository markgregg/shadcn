import type { Story } from '@ladle/react'
import { Toggle } from '../src/components/toggle'
import { Bold, Italic, Underline } from 'lucide-react'

export const Default: Story = () => <Toggle>Toggle</Toggle>

export const Outline: Story = () => <Toggle variant="outline">Outline Toggle</Toggle>

export const Small: Story = () => <Toggle size="sm">Small</Toggle>

export const Large: Story = () => <Toggle size="lg">Large</Toggle>

export const WithIcon: Story = () => (
  <Toggle aria-label="Toggle bold">
    <Bold />
  </Toggle>
)

export const Pressed: Story = () => (
  <Toggle defaultPressed aria-label="Toggle bold">
    <Bold />
  </Toggle>
)

export const Disabled: Story = () => (
  <Toggle disabled aria-label="Toggle italic">
    <Italic />
  </Toggle>
)

export const AllVariants: Story = () => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
    <Toggle aria-label="Bold">
      <Bold />
    </Toggle>
    <Toggle variant="outline" aria-label="Italic">
      <Italic />
    </Toggle>
    <Toggle size="sm" aria-label="Underline">
      <Underline />
    </Toggle>
    <Toggle size="lg" aria-label="Bold Large">
      <Bold />
    </Toggle>
  </div>
)
