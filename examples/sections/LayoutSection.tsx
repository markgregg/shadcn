'use client'

import { GallerySection } from '../GallerySection'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
} from '@/components/sidebar'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/resizable'
import { Box } from '@/components/box'
import { Stack } from '@/components/stack'
import { Grid } from '@/components/grid'
import { Separator } from '@/components/separator'

export function LayoutSection() {
  return (
    <GallerySection id="layout" title="Layout" description="Box, Stack, Grid, Sidebar and Resizable panels">
      <div className="example-stack-4">

      {/* Box */}
      <h3 className="example-subtitle">Box</h3>
      <div className="example-grid">
        <Box style={{ padding: '1rem', background: 'var(--muted)', borderRadius: 8 }}>
          Default <code>&lt;div&gt;</code>
        </Box>
        <Box component="section" style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: 8 }}>
          As <code>&lt;section&gt;</code>
        </Box>
        <Box component="article" style={{ padding: '1rem', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8 }}>
          As <code>&lt;article&gt;</code>
        </Box>
      </div>

      {/* Stack */}
      <h3 className="example-subtitle">Stack</h3>
      <div className="example-grid">
        <div>
          <p className="example-text-xs-muted" style={{ marginBottom: '0.5rem' }}>Column (default)</p>
          <Stack spacing={2}>
            {['Item 1', 'Item 2', 'Item 3'].map((label) => (
              <Box key={label} style={{ padding: '0.5rem 0.75rem', background: 'var(--muted)', borderRadius: 6, fontSize: '0.875rem' }}>{label}</Box>
            ))}
          </Stack>
        </div>
        <div>
          <p className="example-text-xs-muted" style={{ marginBottom: '0.5rem' }}>Row</p>
          <Stack direction="row" spacing={2} alignItems="center">
            {['A', 'B', 'C'].map((label) => (
              <Box key={label} style={{ padding: '0.5rem 0.75rem', background: 'var(--muted)', borderRadius: 6, fontSize: '0.875rem' }}>{label}</Box>
            ))}
          </Stack>
        </div>
        <div>
          <p className="example-text-xs-muted" style={{ marginBottom: '0.5rem' }}>With divider</p>
          <Stack spacing={2} divider={<Separator />}>
            {['First', 'Second', 'Third'].map((label) => (
              <Box key={label} style={{ fontSize: '0.875rem' }}>{label}</Box>
            ))}
          </Stack>
        </div>
      </div>

      {/* Grid */}
      <h3 className="example-subtitle">Grid</h3>
      <Grid container spacing={2}>
        {([12, 6, 6, 4, 4, 4, 3, 3, 3, 3, 8, 4] as const).map((size, i) => (
          <Grid key={i} size={size}>
            <Box style={{ padding: '0.5rem', background: 'var(--muted)', borderRadius: 6, fontSize: '0.75rem', textAlign: 'center' }}>
              {size}
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Sidebar + Resizable */}
      <div className="example-grid">
        <div className="example-stack-4">
          <h3 className="example-subtitle">Sidebar</h3>
          <div className="example-panel">
            <SidebarProvider>
              <Sidebar>
                <SidebarHeader>
                  <span className="example-font-medium example-text-sm">Sidebar</span>
                </SidebarHeader>
                <SidebarContent>
                  <nav className="example-nav-list">
                    <a href="#" className="example-nav-link">
                      Item 1
                    </a>
                    <a href="#" className="example-nav-link">
                      Item 2
                    </a>
                    <a href="#" className="example-nav-link">
                      Item 3
                    </a>
                  </nav>
                </SidebarContent>
                <SidebarFooter>
                  <span className="example-text-xs-muted">Footer</span>
                </SidebarFooter>
              </Sidebar>
            </SidebarProvider>
          </div>
        </div>

        <div className="example-grid-span-2 example-stack-4">
          <h3 className="example-subtitle">Resizable panels</h3>
          <div className="example-panel">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={50} minSize={20}>
                <div className="example-resizable-pane-a">
                  <span className="example-text-sm-muted">Panel 1</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50} minSize={20}>
                <div className="example-resizable-pane-b">
                  <span className="example-text-sm-muted">Panel 2</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </div>

      </div>
    </GallerySection>
  )
}
