import type { Story } from '@ladle/react'
import { Badge } from '../src/components/badge'

export const Default: Story = () => <Badge>Default</Badge>
export const Secondary: Story = () => <Badge variant="secondary">Secondary</Badge>
export const Destructive: Story = () => <Badge variant="destructive">Destructive</Badge>
export const Outline: Story = () => <Badge variant="outline">Outline</Badge>
export const Ghost: Story = () => <Badge variant="ghost">Ghost</Badge>
export const Link: Story = () => <Badge variant="link">Link</Badge>
export const Success: Story = () => <Badge variant="success">Success</Badge>
export const Warning: Story = () => <Badge variant="warning">Warning</Badge>
export const Info: Story = () => <Badge variant="info">Info</Badge>

export const AllVariants: Story = () => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
    <Badge>Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="ghost">Ghost</Badge>
    <Badge variant="link">Link</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="info">Info</Badge>
  </div>
)
