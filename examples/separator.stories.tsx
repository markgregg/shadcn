import type { Story } from '@ladle/react'
import { Separator } from '../src/components/separator'

export const Horizontal: Story = () => (
  <div style={{ width: 300 }}>
    <div style={{ marginBottom: 16 }}>
      <h4 style={{ fontSize: 15, fontWeight: 500 }}>Radix Primitives</h4>
      <p style={{ fontSize: 13, color: 'var(--color-muted-foreground)', marginTop: 4 }}>
        An open-source UI component library.
      </p>
    </div>
    <Separator />
    <div style={{ display: 'flex', height: 20, alignItems: 'center', gap: 16, marginTop: 16 }}>
      <span style={{ fontSize: 13 }}>Blog</span>
      <Separator orientation="vertical" />
      <span style={{ fontSize: 13 }}>Docs</span>
      <Separator orientation="vertical" />
      <span style={{ fontSize: 13 }}>Source</span>
    </div>
  </div>
)

export const Vertical: Story = () => (
  <div style={{ display: 'flex', height: 100, alignItems: 'center', gap: 24 }}>
    <div>Section 1</div>
    <Separator orientation="vertical" />
    <div>Section 2</div>
    <Separator orientation="vertical" />
    <div>Section 3</div>
  </div>
)
