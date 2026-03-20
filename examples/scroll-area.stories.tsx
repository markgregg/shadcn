import type { Story } from '@ladle/react'
import { ScrollArea, ScrollBar } from '../src/components/scroll-area'
import { Separator } from '../src/components/separator'

const tags = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`)

const works = [
  { title: 'Ode to My Codebase', artist: 'The Debuggers', year: '2024' },
  { title: 'Async/Await Blues', artist: 'The Callbacks', year: '2023' },
  { title: 'TypeScript Dreams', artist: 'The Interfaces', year: '2023' },
  { title: 'Merge Conflict', artist: 'The Git Stashers', year: '2022' },
  { title: 'Promise Resolved', artist: 'The Event Loop', year: '2022' },
  { title: 'Runtime Error', artist: 'The Stack Traces', year: '2021' },
  { title: 'Undefined Behavior', artist: 'The Null Pointers', year: '2021' },
]

export const Vertical: Story = () => (
  <ScrollArea style={{ height: 200, width: 280 }}>
    <div style={{ padding: '0 4px' }}>
      {tags.map((tag, i) => (
        <div key={tag}>
          <div style={{ padding: '8px 0', fontSize: 13 }}>{tag}</div>
          {i < tags.length - 1 && <Separator />}
        </div>
      ))}
    </div>
    <ScrollBar orientation="vertical" />
  </ScrollArea>
)

export const Horizontal: Story = () => (
  <ScrollArea style={{ width: 300, whiteSpace: 'nowrap', borderRadius: 8, border: '1px solid var(--color-border)' }}>
    <div style={{ display: 'flex', width: 'max-content', gap: 16, padding: 16 }}>
      {works.map((work) => (
        <figure key={work.title} style={{ width: 160, flexShrink: 0 }}>
          <div style={{ overflow: 'hidden', borderRadius: 8, background: 'var(--color-muted)', height: 120, marginBottom: 8 }} />
          <figcaption style={{ fontSize: 12 }}>
            <p style={{ fontWeight: 500 }}>{work.title}</p>
            <p style={{ color: 'var(--color-muted-foreground)' }}>{work.artist}</p>
          </figcaption>
        </figure>
      ))}
    </div>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
)
