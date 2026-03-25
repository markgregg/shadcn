import type { Story } from '@ladle/react'
import { Grid } from '../src/components/grid'

const Cell = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      padding: '1rem',
      background: 'var(--color-muted)',
      borderRadius: 6,
      fontSize: '0.875rem',
      textAlign: 'center',
    }}
  >
    {children}
  </div>
)

export const TwelveColumns: Story = () => (
  <Grid container spacing={2}>
    {Array.from({ length: 12 }, (_, i) => (
      <Grid key={i} size={1}>
        <Cell>{i + 1}</Cell>
      </Grid>
    ))}
  </Grid>
)

export const TwoThirdsOneThird: Story = () => (
  <Grid container spacing={2}>
    <Grid size={8}>
      <Cell>size=8 (two-thirds)</Cell>
    </Grid>
    <Grid size={4}>
      <Cell>size=4 (one-third)</Cell>
    </Grid>
  </Grid>
)

export const HalfAndHalf: Story = () => (
  <Grid container spacing={3}>
    <Grid size={6}>
      <Cell>Left half</Cell>
    </Grid>
    <Grid size={6}>
      <Cell>Right half</Cell>
    </Grid>
  </Grid>
)

export const Thirds: Story = () => (
  <Grid container spacing={2}>
    <Grid size={4}>
      <Cell>Col 1</Cell>
    </Grid>
    <Grid size={4}>
      <Cell>Col 2</Cell>
    </Grid>
    <Grid size={4}>
      <Cell>Col 3</Cell>
    </Grid>
  </Grid>
)

export const MixedSizes: Story = () => (
  <Grid container spacing={2}>
    <Grid size={12}>
      <Cell>Full width (12)</Cell>
    </Grid>
    <Grid size={6}>
      <Cell>Half (6)</Cell>
    </Grid>
    <Grid size={3}>
      <Cell>Quarter (3)</Cell>
    </Grid>
    <Grid size={3}>
      <Cell>Quarter (3)</Cell>
    </Grid>
    <Grid size={4}>
      <Cell>Third (4)</Cell>
    </Grid>
    <Grid size={8}>
      <Cell>Two thirds (8)</Cell>
    </Grid>
  </Grid>
)

export const WithOffset: Story = () => (
  <Grid container spacing={2}>
    <Grid size={6} offset={3}>
      <Cell>Centered — size=6, offset=3</Cell>
    </Grid>
    <Grid size={4} offset={2}>
      <Cell>size=4, offset=2</Cell>
    </Grid>
    <Grid size={4} offset={6}>
      <Cell>size=4, offset=6</Cell>
    </Grid>
  </Grid>
)

export const Responsive: Story = () => (
  <div>
    <p style={{ marginBottom: '1rem', fontSize: '0.875rem', color: 'var(--color-muted-fg)' }}>
      Resize the window: stacks at xs, two-column at sm, three-column at md.
    </p>
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Cell>Responsive A</Cell>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Cell>Responsive B</Cell>
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 4 }}>
        <Cell>Responsive C</Cell>
      </Grid>
    </Grid>
  </div>
)

export const RowAndColumnSpacing: Story = () => (
  <Grid container columnSpacing={4} rowSpacing={1}>
    {Array.from({ length: 6 }, (_, i) => (
      <Grid key={i} size={4}>
        <Cell>Item {i + 1}</Cell>
      </Grid>
    ))}
  </Grid>
)

export const NestedGrid: Story = () => (
  <Grid container spacing={2}>
    <Grid size={8}>
      <Cell>Outer col (8)</Cell>
    </Grid>
    <Grid size={4}>
      <Grid container spacing={1}>
        <Grid size={6}>
          <Cell>Inner A</Cell>
        </Grid>
        <Grid size={6}>
          <Cell>Inner B</Cell>
        </Grid>
        <Grid size={12}>
          <Cell>Inner full</Cell>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)

export const AutoSized: Story = () => (
  <Grid container spacing={2}>
    <Grid size="auto">
      <Cell>Auto A</Cell>
    </Grid>
    <Grid size="auto">
      <Cell>Auto — longer label</Cell>
    </Grid>
    <Grid size={4}>
      <Cell>Fixed (4)</Cell>
    </Grid>
  </Grid>
)
