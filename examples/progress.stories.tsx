import type { Story } from '@ladle/react'
import {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
} from '../src/components/progress'

export const Default: Story = () => (
  <div style={{ width: 400 }}>
    <Progress value={50}>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  </div>
)

export const WithLabel: Story = () => (
  <div style={{ width: 400 }}>
    <Progress value={66}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <ProgressLabel>Loading…</ProgressLabel>
        <ProgressValue />
      </div>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  </div>
)

export const Complete: Story = () => (
  <div style={{ width: 400 }}>
    <Progress value={100}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <ProgressLabel>Complete</ProgressLabel>
        <ProgressValue />
      </div>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  </div>
)

export const Empty: Story = () => (
  <div style={{ width: 400 }}>
    <Progress value={0}>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  </div>
)

export const AllValues: Story = () => (
  <div style={{ width: 400, display: 'flex', flexDirection: 'column', gap: 16 }}>
    {[0, 25, 50, 75, 100].map((v) => (
      <Progress key={v} value={v}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 13 }}>
          <ProgressLabel>{v}%</ProgressLabel>
        </div>
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>
    ))}
  </div>
)
