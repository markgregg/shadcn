import * as React from 'react'
import type { Story } from '@ladle/react'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '../src/components/collapsible'
import { Button } from '../src/components/button'

export const Default: Story = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <div style={{ width: 320 }}>
      <Collapsible open={open} onOpenChange={setOpen}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h4 style={{ fontSize: 14, fontWeight: 500 }}>@johndoe starred 3 repositories</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon-sm">
              {open ? '▲' : '▼'}
            </Button>
          </CollapsibleTrigger>
        </div>
        <div style={{ borderRadius: 6, border: '1px solid var(--color-border)', padding: '8px 12px', fontFamily: 'monospace', fontSize: 13 }}>
          @radix-ui/primitives
        </div>
        <CollapsibleContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 4 }}>
            <div style={{ borderRadius: 6, border: '1px solid var(--color-border)', padding: '8px 12px', fontFamily: 'monospace', fontSize: 13 }}>
              @radix-ui/colors
            </div>
            <div style={{ borderRadius: 6, border: '1px solid var(--color-border)', padding: '8px 12px', fontFamily: 'monospace', fontSize: 13 }}>
              @stitches/react
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export const OpenByDefault: Story = () => (
  <div style={{ width: 320 }}>
    <Collapsible defaultOpen>
      <CollapsibleTrigger asChild>
        <Button variant="outline" style={{ width: '100%', justifyContent: 'space-between' }}>
          Click to collapse
          <span>▲</span>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div style={{ padding: '12px 0', fontSize: 14 }}>
          This content is visible by default. Click the trigger to collapse it.
        </div>
      </CollapsibleContent>
    </Collapsible>
  </div>
)
