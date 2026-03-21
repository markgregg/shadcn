import type { Story } from '@ladle/react'
import { Box } from '../src/components/box'

export const Default: Story = () => (
  <Box style={{ padding: '1rem', background: 'var(--muted)', borderRadius: 8 }}>
    A Box rendered as a <code>&lt;div&gt;</code>
  </Box>
)

export const AsSection: Story = () => (
  <Box
    component="section"
    style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: 8 }}
  >
    <h3 style={{ margin: 0, marginBottom: '0.5rem', fontSize: '1rem' }}>Section heading</h3>
    <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>
      This Box renders as an HTML <code>&lt;section&gt;</code> element.
    </p>
  </Box>
)

export const AsArticle: Story = () => (
  <Box
    component="article"
    style={{
      padding: '1.5rem',
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 8,
      maxWidth: 400,
    }}
  >
    <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>Article title</h3>
    <p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
      Box renders as <code>&lt;article&gt;</code> and passes through all HTML attributes.
    </p>
  </Box>
)
