import type { Story } from '@ladle/react'
import { Sidebar, SidebarProvider, SidebarHeader, SidebarContent, SidebarFooter } from '../src/components/sidebar'
import { Button } from '../src/components/button'

export const Default: Story = () => (
  <SidebarProvider>
    <div style={{ display: 'flex', height: 400, width: 600, border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
      <Sidebar style={{ width: 240, borderRight: '1px solid var(--color-border)', flexShrink: 0 }}>
        <SidebarHeader style={{ padding: 16, borderBottom: '1px solid var(--color-border)' }}>
          <span style={{ fontWeight: 600, fontSize: 15 }}>My App</span>
        </SidebarHeader>
        <SidebarContent style={{ padding: 8, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button variant="ghost" style={{ justifyContent: 'flex-start', width: '100%' }}>Dashboard</Button>
          <Button variant="ghost" style={{ justifyContent: 'flex-start', width: '100%' }}>Analytics</Button>
          <Button variant="ghost" style={{ justifyContent: 'flex-start', width: '100%' }}>Projects</Button>
          <Button variant="ghost" style={{ justifyContent: 'flex-start', width: '100%' }}>Team</Button>
          <Button variant="ghost" style={{ justifyContent: 'flex-start', width: '100%' }}>Settings</Button>
        </SidebarContent>
        <SidebarFooter style={{ padding: 16, borderTop: '1px solid var(--color-border)' }}>
          <Button variant="outline" size="sm" style={{ width: '100%' }}>Logout</Button>
        </SidebarFooter>
      </Sidebar>
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-muted-foreground)', fontSize: 14 }}>
        Main content area
      </main>
    </div>
  </SidebarProvider>
)

export const Collapsed: Story = () => (
  <SidebarProvider open={false}>
    <div style={{ display: 'flex', height: 300, width: 500, border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
      <Sidebar style={{ width: 56, borderRight: '1px solid var(--color-border)', flexShrink: 0 }}>
        <SidebarContent style={{ padding: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <Button variant="ghost" size="icon">📊</Button>
          <Button variant="ghost" size="icon">📁</Button>
          <Button variant="ghost" size="icon">👥</Button>
          <Button variant="ghost" size="icon">⚙️</Button>
        </SidebarContent>
      </Sidebar>
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-muted-foreground)', fontSize: 14 }}>
        Main content area
      </main>
    </div>
  </SidebarProvider>
)
