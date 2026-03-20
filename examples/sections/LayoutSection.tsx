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

export function LayoutSection() {
  return (
    <GallerySection id="layout" title="Layout" description="Sidebar and Resizable panels">
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
    </GallerySection>
  )
}
