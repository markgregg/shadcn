import type { Story } from '@ladle/react'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '../src/components/tooltip'
import { Button } from '../src/components/button'

export const Default: Story = () => (
  <div style={{ padding: 40 }}>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
)

export const TopSide: Story = () => (
  <div style={{ padding: 80 }}>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Tooltip on top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>This appears on top</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
)

export const RightSide: Story = () => (
  <div style={{ padding: 80 }}>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Tooltip on right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>This appears on the right</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
)

export const BottomSide: Story = () => (
  <div style={{ padding: 80 }}>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Tooltip on bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>This appears on bottom</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
)

export const WithDelay: Story = () => (
  <div style={{ padding: 40 }}>
    <TooltipProvider delay={500}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">500ms delay</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Appears after 500ms</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
)

export const MultipleTooltips: Story = () => (
  <div style={{ display: 'flex', gap: 16, padding: 40 }}>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline">📋</Button>
        </TooltipTrigger>
        <TooltipContent>Copy</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline">✏️</Button>
        </TooltipTrigger>
        <TooltipContent>Edit</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline">🗑️</Button>
        </TooltipTrigger>
        <TooltipContent>Delete</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
)
