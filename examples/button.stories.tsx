import type { Story } from '@ladle/react'
import { Button } from '../src/components/button'

export const Default: Story = () => <Button>Button</Button>
export const Outline: Story = () => <Button variant="outline">Outline</Button>
export const Secondary: Story = () => <Button variant="secondary">Secondary</Button>
export const Ghost: Story = () => <Button variant="ghost">Ghost</Button>
export const Destructive: Story = () => <Button variant="destructive">Destructive</Button>
export const Success: Story = () => <Button variant="success">Success</Button>
export const Warning: Story = () => <Button variant="warning">Warning</Button>
export const Info: Story = () => <Button variant="info">Info</Button>
export const Link: Story = () => <Button variant="link">Link</Button>

export const Small: Story = () => <Button size="sm">Small</Button>
export const Large: Story = () => <Button size="lg">Large</Button>
export const Icon: Story = () => <Button size="icon">★</Button>
export const IconSm: Story = () => <Button size="icon-sm">★</Button>
export const IconLg: Story = () => <Button size="icon-lg">★</Button>

export const Disabled: Story = () => <Button disabled>Disabled</Button>

export const AllVariants: Story = () => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
    <Button>Default</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="success">Success</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="info">Info</Button>
    <Button variant="link">Link</Button>
  </div>
)

export const AllSizes: Story = () => (
  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
    <Button size="icon">★</Button>
    <Button size="icon-sm">★</Button>
    <Button size="icon-lg">★</Button>
  </div>
)
