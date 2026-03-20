import type { Story } from '@ladle/react'
import { Input } from '../src/components/input'
import { Label } from '../src/components/label'

export const Default: Story = () => <Input placeholder="Email" type="email" />

export const WithLabel: Story = () => (
  <div style={{ display: 'grid', gap: 8, width: 280 }}>
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="name@example.com" />
  </div>
)

export const Disabled: Story = () => (
  <div style={{ width: 280 }}>
    <Input disabled placeholder="Disabled input" />
  </div>
)

export const ReadOnly: Story = () => (
  <div style={{ width: 280 }}>
    <Input readOnly defaultValue="Read-only value" />
  </div>
)

export const Password: Story = () => (
  <div style={{ display: 'grid', gap: 8, width: 280 }}>
    <Label htmlFor="password">Password</Label>
    <Input id="password" type="password" placeholder="Enter password" />
  </div>
)

export const File: Story = () => (
  <div style={{ display: 'grid', gap: 8, width: 280 }}>
    <Label htmlFor="file">Upload File</Label>
    <Input id="file" type="file" />
  </div>
)

export const Number: Story = () => (
  <div style={{ display: 'grid', gap: 8, width: 200 }}>
    <Label htmlFor="amount">Amount</Label>
    <Input id="amount" type="number" defaultValue={42} min={0} max={100} />
  </div>
)
