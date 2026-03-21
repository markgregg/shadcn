import type { Story } from '@ladle/react'
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from '../src/components/avatar'

export const Default: Story = () => (
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
    <AvatarFallback>SC</AvatarFallback>
  </Avatar>
)

export const Fallback: Story = () => (
  <Avatar>
    <AvatarImage src="/broken-image.jpg" alt="User" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
)

export const Small: Story = () => (
  <Avatar size="sm">
    <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
    <AvatarFallback>SC</AvatarFallback>
  </Avatar>
)

export const Large: Story = () => (
  <Avatar size="lg">
    <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
    <AvatarFallback>SC</AvatarFallback>
  </Avatar>
)

export const AllSizes: Story = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Avatar size="sm">
      <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
      <AvatarFallback>SM</AvatarFallback>
    </Avatar>
    <Avatar size="default">
      <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
      <AvatarFallback>MD</AvatarFallback>
    </Avatar>
    <Avatar size="lg">
      <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
      <AvatarFallback>LG</AvatarFallback>
    </Avatar>
  </div>
)

export const WithBadge: Story = () => (
  <div style={{ position: 'relative', display: 'inline-block' }}>
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
      <AvatarFallback>SC</AvatarFallback>
    </Avatar>
    <AvatarBadge />
  </div>
)

export const Group: Story = () => (
  <AvatarGroup>
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
      <AvatarFallback>U1</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>U2</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>U3</AvatarFallback>
    </Avatar>
    <AvatarGroupCount>+5</AvatarGroupCount>
  </AvatarGroup>
)
