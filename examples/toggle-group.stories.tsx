import type { Story } from '@ladle/react'
import { ToggleGroup, ToggleGroupItem } from '../src/components/toggle-group'
import { AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline } from 'lucide-react'

export const Single: Story = () => (
  <ToggleGroup type="single" defaultValue={["center"]} aria-label="Text alignment">
    <ToggleGroupItem value="left" aria-label="Align left">
      <AlignLeft />
    </ToggleGroupItem>
    <ToggleGroupItem value="center" aria-label="Align center">
      <AlignCenter />
    </ToggleGroupItem>
    <ToggleGroupItem value="right" aria-label="Align right">
      <AlignRight />
    </ToggleGroupItem>
  </ToggleGroup>
)

export const Multiple: Story = () => (
  <ToggleGroup type="multiple" aria-label="Text formatting">
    <ToggleGroupItem value="bold" aria-label="Bold">
      <Bold />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Italic">
      <Italic />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Underline">
      <Underline />
    </ToggleGroupItem>
  </ToggleGroup>
)

export const Outline: Story = () => (
  <ToggleGroup type="single" variant="outline" defaultValue={["center"]} aria-label="Text alignment">
    <ToggleGroupItem value="left" aria-label="Align left">
      <AlignLeft />
    </ToggleGroupItem>
    <ToggleGroupItem value="center" aria-label="Align center">
      <AlignCenter />
    </ToggleGroupItem>
    <ToggleGroupItem value="right" aria-label="Align right">
      <AlignRight />
    </ToggleGroupItem>
  </ToggleGroup>
)

export const Small: Story = () => (
  <ToggleGroup type="single" size="sm" defaultValue={["center"]} aria-label="Text alignment">
    <ToggleGroupItem value="left" aria-label="Align left">
      <AlignLeft />
    </ToggleGroupItem>
    <ToggleGroupItem value="center" aria-label="Align center">
      <AlignCenter />
    </ToggleGroupItem>
    <ToggleGroupItem value="right" aria-label="Align right">
      <AlignRight />
    </ToggleGroupItem>
  </ToggleGroup>
)

export const Large: Story = () => (
  <ToggleGroup type="single" size="lg" defaultValue={["center"]} aria-label="Text alignment">
    <ToggleGroupItem value="left" aria-label="Align left">
      <AlignLeft />
    </ToggleGroupItem>
    <ToggleGroupItem value="center" aria-label="Align center">
      <AlignCenter />
    </ToggleGroupItem>
    <ToggleGroupItem value="right" aria-label="Align right">
      <AlignRight />
    </ToggleGroupItem>
  </ToggleGroup>
)

export const Vertical: Story = () => (
  <ToggleGroup type="single" orientation="vertical" defaultValue={["center"]} aria-label="Text alignment">
    <ToggleGroupItem value="left" aria-label="Align left">
      <AlignLeft />
    </ToggleGroupItem>
    <ToggleGroupItem value="center" aria-label="Align center">
      <AlignCenter />
    </ToggleGroupItem>
    <ToggleGroupItem value="right" aria-label="Align right">
      <AlignRight />
    </ToggleGroupItem>
  </ToggleGroup>
)

export const WithText: Story = () => (
  <ToggleGroup type="single" defaultValue={["all"]}>
    <ToggleGroupItem value="all">All</ToggleGroupItem>
    <ToggleGroupItem value="active">Active</ToggleGroupItem>
    <ToggleGroupItem value="archived">Archived</ToggleGroupItem>
  </ToggleGroup>
)
