import * as React from 'react'
import type { Story } from '@ladle/react'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from '../src/components/select'

export const Default: Story = () => (
  <Select>
    <SelectTrigger style={{ width: 200 }}>
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
)

export const WithGroups: Story = () => (
  <Select>
    <SelectTrigger style={{ width: 240 }}>
      <SelectValue placeholder="Select a timezone" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>North America</SelectLabel>
        <SelectItem value="eastern">Eastern Standard Time</SelectItem>
        <SelectItem value="central">Central Standard Time</SelectItem>
        <SelectItem value="mountain">Mountain Standard Time</SelectItem>
        <SelectItem value="pacific">Pacific Standard Time</SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup>
        <SelectLabel>Europe</SelectLabel>
        <SelectItem value="gmt">Greenwich Mean Time</SelectItem>
        <SelectItem value="cet">Central European Time</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
)

export const Disabled: Story = () => (
  <Select disabled>
    <SelectTrigger style={{ width: 200 }}>
      <SelectValue placeholder="Disabled select" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="option">Option</SelectItem>
    </SelectContent>
  </Select>
)

export const WithDefaultValue: Story = () => (
  <Select defaultValue="banana">
    <SelectTrigger style={{ width: 200 }}>
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </SelectContent>
  </Select>
)

export const Controlled: Story = () => {
  const [value, setSelect] = React.useState('')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Select value={value} onValueChange={(v) => setSelect(v ?? '')}>
        <SelectTrigger style={{ width: 200 }}>
          <SelectValue placeholder="Select a color" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="red">Red</SelectItem>
          <SelectItem value="green">Green</SelectItem>
          <SelectItem value="blue">Blue</SelectItem>
        </SelectContent>
      </Select>
      <p style={{ fontSize: 13, color: 'var(--color-muted-foreground)' }}>
        Selected: {value || 'none'}
      </p>
    </div>
  )
}
