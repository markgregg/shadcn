import type { Story } from '@ladle/react'
import { Label } from '../src/components/label'
import { Input } from '../src/components/input'
import { Checkbox } from '../src/components/checkbox'

export const Default: Story = () => <Label>Email address</Label>

export const WithInput: Story = () => (
  <div style={{ display: 'grid', gap: 6, width: 280 }}>
    <Label htmlFor="email-label">Email</Label>
    <Input id="email-label" type="email" placeholder="name@example.com" />
  </div>
)

export const WithCheckbox: Story = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <Checkbox id="terms-label" />
    <Label htmlFor="terms-label">Accept terms and conditions</Label>
  </div>
)

export const Required: Story = () => (
  <div style={{ display: 'grid', gap: 6, width: 280 }}>
    <Label htmlFor="required-input">
      Full Name <span style={{ color: 'var(--color-destructive)' }}>*</span>
    </Label>
    <Input id="required-input" required placeholder="John Doe" />
  </div>
)
