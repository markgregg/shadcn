import type { Story } from '@ladle/react'
import { TradingBlotter } from '@/components/trading-blotter'

export const Default: Story = () => (
  <div style={{ padding: '1rem', maxWidth: '100%' }}>
    <TradingBlotter />
  </div>
)
