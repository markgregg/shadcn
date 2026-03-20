import type { Story } from '@ladle/react'
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '../src/components/resizable'

export const Horizontal: Story = () => (
  <ResizablePanelGroup
    direction="horizontal"
    style={{ height: 200, width: 500, border: '1px solid var(--color-border)', borderRadius: 8 }}
  >
    <ResizablePanel defaultSize={50}>
      <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 13 }}>Left Panel</span>
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize={50}>
      <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 13 }}>Right Panel</span>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
)

export const Vertical: Story = () => (
  <ResizablePanelGroup
    direction="vertical"
    style={{ height: 300, width: 400, border: '1px solid var(--color-border)', borderRadius: 8 }}
  >
    <ResizablePanel defaultSize={50}>
      <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 13 }}>Top Panel</span>
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize={50}>
      <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 13 }}>Bottom Panel</span>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
)

export const WithHandle: Story = () => (
  <ResizablePanelGroup
    direction="horizontal"
    style={{ height: 200, width: 500, border: '1px solid var(--color-border)', borderRadius: 8 }}
  >
    <ResizablePanel defaultSize={33}>
      <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 13 }}>One</span>
      </div>
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel defaultSize={33}>
      <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 13 }}>Two</span>
      </div>
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel defaultSize={34}>
      <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 13 }}>Three</span>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
)

export const ThreeColumns: Story = () => (
  <ResizablePanelGroup
    direction="horizontal"
    style={{ height: 200, width: 600, border: '1px solid var(--color-border)', borderRadius: 8 }}
  >
    <ResizablePanel defaultSize={25} minSize={15}>
      <div style={{ display: 'flex', height: '100%', padding: 12, flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-muted-foreground)' }}>Sidebar</span>
      </div>
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel defaultSize={50}>
      <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 13 }}>Main Content</span>
      </div>
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel defaultSize={25} minSize={15}>
      <div style={{ display: 'flex', height: '100%', padding: 12, flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-muted-foreground)' }}>Properties</span>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
)
