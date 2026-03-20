'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/drawer'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/sheet'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/tooltip'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/hover-card'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/context-menu'
import { Button } from '@/components/button'
import { GallerySection } from '../GallerySection'

export function OverlaySection() {
  return (
    <GallerySection
      id="overlay"
      title="Overlay"
      description="Dialog, Drawer, Sheet, Popover, Tooltip, Dropdown, HoverCard, Context Menu"
    >
      <TooltipProvider>
        <div className="example-grid">
          <div className="example-stack-4">
            <h3 className="example-subtitle">Dialog</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog Title</DialogTitle>
                  <DialogDescription>
                    This is a dialog. It can contain any content.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="example-stack-4">
            <h3 className="example-subtitle">Drawer</h3>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Drawer Title</DrawerTitle>
                  <DrawerDescription>
                    This is a drawer that slides up from the bottom.
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button>Submit</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>

          <div className="example-stack-4">
            <h3 className="example-subtitle">Sheet</h3>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Sheet Title</SheetTitle>
                  <SheetDescription>
                    This is a sheet that slides in from the right.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          <div className="example-stack-4">
            <h3 className="example-subtitle">Popover</h3>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="example-stack-2">
                  <h4 className="example-font-medium">Popover content</h4>
                  <p className="example-text-sm-muted">This appears when you click the trigger.</p>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="example-stack-4">
            <h3 className="example-subtitle">Tooltip</h3>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover for tooltip</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="example-stack-4">
            <h3 className="example-subtitle">Dropdown</h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Dropdown</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="example-stack-4">
            <h3 className="example-subtitle">HoverCard</h3>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline">Hover for card</Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="example-stack-2">
                  <h4 className="example-text-sm example-font-semibold">Hover card</h4>
                  <p className="example-text-sm-muted">
                    This appears when you hover over the trigger.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          <div className="example-stack-4">
            <h3 className="example-subtitle">Context Menu (right-click)</h3>
            <ContextMenu>
              <ContextMenuTrigger asChild>
                <div className="example-context-target">
                  <span className="example-text-sm-muted">Right-click here</span>
                </div>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>Copy</ContextMenuItem>
                <ContextMenuItem>Paste</ContextMenuItem>
                <ContextMenuItem>Cut</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </div>
      </TooltipProvider>
    </GallerySection>
  )
}
