import type { Story } from '@ladle/react'
import { Textarea } from '../src/components/textarea'
import { Label } from '../src/components/label'

export const Default: Story = () => (
  <div style={{ width: 350 }}>
    <Textarea placeholder="Type your message here." />
  </div>
)

export const WithLabel: Story = () => (
  <div style={{ display: 'grid', gap: 8, width: 350 }}>
    <Label htmlFor="message">Your message</Label>
    <Textarea id="message" placeholder="Type your message here." />
  </div>
)

export const Disabled: Story = () => (
  <div style={{ width: 350 }}>
    <Textarea disabled placeholder="This textarea is disabled." />
  </div>
)

export const WithValue: Story = () => (
  <div style={{ width: 350 }}>
    <Textarea
      defaultValue="This is some existing content that was pre-populated in the textarea."
      rows={4}
    />
  </div>
)

export const ReadOnly: Story = () => (
  <div style={{ display: 'grid', gap: 8, width: 350 }}>
    <Label htmlFor="readonly">Read-only</Label>
    <Textarea
      id="readonly"
      readOnly
      defaultValue="This content cannot be edited."
    />
  </div>
)
