import type { Story } from '@ladle/react'
import { Skeleton } from '../src/components/skeleton'

export const Default: Story = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, width: 340 }}>
    <Skeleton style={{ height: 48, width: 48, borderRadius: '50%' }} />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
      <Skeleton style={{ height: 16, width: '80%' }} />
      <Skeleton style={{ height: 12, width: '60%' }} />
    </div>
  </div>
)

export const Card: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 300, padding: 16, border: '1px solid var(--color-border)', borderRadius: 8 }}>
    <Skeleton style={{ height: 160, borderRadius: 6 }} />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <Skeleton style={{ height: 16, width: '90%' }} />
      <Skeleton style={{ height: 12, width: '70%' }} />
      <Skeleton style={{ height: 12, width: '50%' }} />
    </div>
  </div>
)

export const List: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 340 }}>
    {Array.from({ length: 4 }, (_, i) => (
      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Skeleton style={{ height: 40, width: 40, borderRadius: '50%', flexShrink: 0 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
          <Skeleton style={{ height: 14, width: '70%' }} />
          <Skeleton style={{ height: 12, width: '50%' }} />
        </div>
      </div>
    ))}
  </div>
)

export const Text: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 400 }}>
    <Skeleton style={{ height: 24, width: '60%' }} />
    <Skeleton style={{ height: 14 }} />
    <Skeleton style={{ height: 14 }} />
    <Skeleton style={{ height: 14, width: '80%' }} />
  </div>
)
