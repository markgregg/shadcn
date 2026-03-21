import type { Story } from '@ladle/react'
import { ButtonGroup } from '../src/components/button-group'
import { Button } from '../src/components/button'

export const Default: Story = () => (
  <ButtonGroup>
    <Button variant="outline">Left</Button>
    <Button variant="outline">Center</Button>
    <Button variant="outline">Right</Button>
  </ButtonGroup>
)

export const Primary: Story = () => (
  <ButtonGroup>
    <Button>Save</Button>
    <Button>Save &amp; Close</Button>
  </ButtonGroup>
)

export const Mixed: Story = () => (
  <ButtonGroup>
    <Button variant="outline">Bold</Button>
    <Button variant="outline">Italic</Button>
    <Button variant="outline">Underline</Button>
    <Button variant="outline">Strike</Button>
  </ButtonGroup>
)
