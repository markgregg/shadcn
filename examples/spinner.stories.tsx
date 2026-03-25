import type { Story } from '@ladle/react'
import { Spinner } from '../src/components/spinner'

export const Default: Story = () => <Spinner />

export const Small: Story = () => <Spinner width={16} height={16} />

export const Large: Story = () => <Spinner width={48} height={48} />

export const AllSizes: Story = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
    <Spinner width={16} height={16} />
    <Spinner width={24} height={24} />
    <Spinner width={32} height={32} />
    <Spinner width={48} height={48} />
  </div>
)

export const InButton: Story = () => (
  <button
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 16px',
      borderRadius: 6,
      background: 'var(--color-primary)',
      color: 'var(--color-primary-fg)',
      border: 'none',
      cursor: 'not-allowed',
      fontSize: 14,
    }}
    disabled
  >
    <Spinner width={16} height={16} />
    Loading…
  </button>
)
