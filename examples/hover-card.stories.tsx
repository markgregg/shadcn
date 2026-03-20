import type { Story } from '@ladle/react'
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '../src/components/hover-card'
import { Button } from '../src/components/button'
import { Avatar, AvatarImage, AvatarFallback } from '../src/components/avatar'

export const Default: Story = () => (
  <div style={{ padding: 40 }}>
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div style={{ display: 'flex', gap: 12 }}>
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600 }}>@nextjs</h4>
            <p style={{ fontSize: 13, color: 'var(--color-muted-foreground)', marginTop: 4 }}>
              The React Framework – created and maintained by @vercel.
            </p>
            <p style={{ fontSize: 12, color: 'var(--color-muted-foreground)', marginTop: 8 }}>
              Joined December 2021
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
)

export const TopSide: Story = () => (
  <div style={{ padding: 80 }}>
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">Hover me (top)</Button>
      </HoverCardTrigger>
      <HoverCardContent side="top">
        <p style={{ fontSize: 13 }}>This card appears on top.</p>
      </HoverCardContent>
    </HoverCard>
  </div>
)

export const WithDelay: Story = () => (
  <div style={{ padding: 40 }}>
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover with delay</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <p style={{ fontSize: 13 }}>Opens after 300ms, closes after 100ms.</p>
      </HoverCardContent>
    </HoverCard>
  </div>
)
