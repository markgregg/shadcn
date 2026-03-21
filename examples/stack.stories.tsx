import type { Story } from '@ladle/react'
import { Separator } from '../src/components/separator'
import { Stack } from '../src/components/stack'

const Item = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      padding: '0.75rem 1rem',
      background: 'var(--muted)',
      borderRadius: 6,
      fontSize: '0.875rem',
    }}
  >
    {children}
  </div>
)

export const ColumnDefault: Story = () => (
  <Stack spacing={2}>
    <Item>Item one</Item>
    <Item>Item two</Item>
    <Item>Item three</Item>
  </Stack>
)

export const Row: Story = () => (
  <Stack direction="row" spacing={2} alignItems="center">
    <Item>Left</Item>
    <Item>Center</Item>
    <Item>Right</Item>
  </Stack>
)

export const RowWrap: Story = () => (
  <Stack direction="row" spacing={2} flexWrap="wrap" style={{ maxWidth: 300 }}>
    {Array.from({ length: 6 }, (_, i) => (
      <Item key={i}>Item {i + 1}</Item>
    ))}
  </Stack>
)

export const WithDivider: Story = () => (
  <Stack spacing={2} divider={<Separator />}>
    <Item>First section</Item>
    <Item>Second section</Item>
    <Item>Third section</Item>
  </Stack>
)

export const WithRowDivider: Story = () => (
  <Stack direction="row" spacing={2} divider={<Separator orientation="vertical" style={{ height: 'auto' }} />} alignItems="stretch">
    <Item>Alpha</Item>
    <Item>Beta</Item>
    <Item>Gamma</Item>
  </Stack>
)

export const JustifyContent: Story = () => (
  <Stack direction="row" spacing={2} justifyContent="space-between">
    <Item>Start</Item>
    <Item>Middle</Item>
    <Item>End</Item>
  </Stack>
)

export const ZeroSpacing: Story = () => (
  <Stack spacing={0}>
    <Item>No gap above</Item>
    <Item>No gap here either</Item>
  </Stack>
)
