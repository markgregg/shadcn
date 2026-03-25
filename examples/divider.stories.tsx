import type { Story } from '@ladle/react'
import { Divider } from '../src/components/divider'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const Box = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div
    style={{
      padding: '0.5rem 0.75rem',
      background: 'var(--color-muted)',
      borderRadius: 6,
      fontSize: '0.875rem',
      ...style,
    }}
  >
    {children}
  </div>
)

// ---------------------------------------------------------------------------
// Orientation
// ---------------------------------------------------------------------------

export const Horizontal: Story = () => (
  <div style={{ width: 320 }}>
    <Box>Above</Box>
    <Divider style={{ margin: '1rem 0' }} />
    <Box>Below</Box>
  </div>
)

export const Vertical: Story = () => (
  <div style={{ display: 'flex', alignItems: 'center', height: 48, gap: 16 }}>
    <span>Left</span>
    <Divider orientation="vertical" />
    <span>Centre</span>
    <Divider orientation="vertical" />
    <span>Right</span>
  </div>
)

// ---------------------------------------------------------------------------
// Sizes — thickness
// ---------------------------------------------------------------------------

export const Sizes: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 320 }}>
    {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
      <div key={size}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-muted-fg)', marginBottom: 8 }}>
          size="{size}"
        </p>
        <Divider size={size} />
      </div>
    ))}
  </div>
)

export const VerticalSizes: Story = () => (
  <div style={{ display: 'flex', alignItems: 'center', height: 64, gap: 24 }}>
    {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
      <div
        key={size}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          height: '100%',
        }}
      >
        <Divider orientation="vertical" size={size} />
        <span style={{ fontSize: '0.625rem', color: 'var(--color-muted-fg)' }}>{size}</span>
      </div>
    ))}
  </div>
)

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

export const FullWidth: Story = () => (
  <div
    style={{
      width: 320,
      border: '1px dashed var(--color-border)',
      borderRadius: 8,
      padding: '0.5rem 0',
    }}
  >
    <Box>Content</Box>
    <Divider variant="fullWidth" style={{ margin: '0.5rem 0' }} />
    <Box>Content</Box>
  </div>
)

export const Inset: Story = () => (
  <div
    style={{
      width: 320,
      border: '1px dashed var(--color-border)',
      borderRadius: 8,
      padding: '0.5rem 0',
    }}
  >
    <Box>Content</Box>
    <Divider variant="inset" style={{ margin: '0.5rem 0' }} />
    <Box>Content</Box>
  </div>
)

export const Middle: Story = () => (
  <div
    style={{
      width: 320,
      border: '1px dashed var(--color-border)',
      borderRadius: 8,
      padding: '0.5rem 0',
    }}
  >
    <Box>Content</Box>
    <Divider variant="middle" style={{ margin: '0.5rem 0' }} />
    <Box>Content</Box>
  </div>
)

// ---------------------------------------------------------------------------
// With text (children)
// ---------------------------------------------------------------------------

export const WithTextCenter: Story = () => (
  <div style={{ width: 320 }}>
    <Divider>OR</Divider>
  </div>
)

export const WithTextLeft: Story = () => (
  <div style={{ width: 320 }}>
    <Divider textAlign="left">New section</Divider>
  </div>
)

export const WithTextRight: Story = () => (
  <div style={{ width: 320 }}>
    <Divider textAlign="right">End</Divider>
  </div>
)

export const WithTextAndSize: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 320 }}>
    {(['xs', 'sm', 'md'] as const).map((size) => (
      <Divider key={size} size={size}>
        size="{size}"
      </Divider>
    ))}
  </div>
)

// ---------------------------------------------------------------------------
// Composed example
// ---------------------------------------------------------------------------

export const InAList: Story = () => (
  <div style={{ width: 280 }}>
    {['Dashboard', 'Reports', 'Settings'].map((item, i, arr) => (
      <div key={item}>
        <div style={{ padding: '0.75rem 1rem', fontSize: '0.875rem' }}>{item}</div>
        {i < arr.length - 1 && <Divider />}
      </div>
    ))}
  </div>
)
