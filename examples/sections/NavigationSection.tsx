'use client'

import { GallerySection } from '../GallerySection'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/breadcrumb'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/pagination'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/accordion'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/collapsible'
import { Button } from '@/components/button'
import { ChevronDownIcon } from 'lucide-react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/menubar'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/navigation-menu'

export function NavigationSection() {
  return (
    <GallerySection
      id="navigation"
      title="Navigation"
      description="Tabs, Breadcrumb, Pagination, Accordion, Collapsible, Menubar, Navigation Menu"
    >
      <div className="example-grid">
        <div className="example-stack-4">
          <h3 className="example-subtitle">Tabs</h3>
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="example-tabs-content">
              Content for tab 1
            </TabsContent>
            <TabsContent value="tab2" className="example-tabs-content">
              Content for tab 2
            </TabsContent>
            <TabsContent value="tab3" className="example-tabs-content">
              Content for tab 3
            </TabsContent>
          </Tabs>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Breadcrumb</h3>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" aria-label="Go to Home">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#" aria-label="Go to Components">
                  Components
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage aria-label="Current page: Breadcrumb">Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Pagination</h3>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Accordion</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the design system.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Collapsible</h3>
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="example-button-justify-between">
                Toggle to expand
                <ChevronDownIcon className="example-theme-icon" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="example-tabs-content">
              <p className="example-text-sm">
                This is the collapsible content. It can be shown or hidden.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Menubar</h3>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New Tab</MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarItem>New Incognito Window</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Undo</MenubarItem>
                <MenubarItem>Redo</MenubarItem>
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Navigation Menu</h3>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="example-navigation-menu-panel">
                    <NavigationMenuLink href="#">Introduction</NavigationMenuLink>
                    <NavigationMenuLink href="#">Installation</NavigationMenuLink>
                    <NavigationMenuLink href="#">Theming</NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="example-navigation-menu-panel">
                    <NavigationMenuLink href="#">Buttons</NavigationMenuLink>
                    <NavigationMenuLink href="#">Forms</NavigationMenuLink>
                    <NavigationMenuLink href="#">Cards</NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </GallerySection>
  )
}
