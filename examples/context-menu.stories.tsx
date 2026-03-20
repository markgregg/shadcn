import type { Story } from '@ladle/react'
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from '../src/components/context-menu'

export const Default: Story = () => (
  <ContextMenu>
    <ContextMenuTrigger>
      <div
        style={{
          width: 300,
          height: 150,
          border: '2px dashed var(--color-border)',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 14,
          color: 'var(--color-muted-foreground)',
        }}
      >
        Right-click here
      </div>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>
        Back <ContextMenuShortcut>⌘[</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        Forward <ContextMenuShortcut>⌘]</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        Reload <ContextMenuShortcut>⌘R</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuSub>
        <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
        <ContextMenuSubContent>
          <ContextMenuItem>Save Page As…</ContextMenuItem>
          <ContextMenuItem>Create Shortcut…</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Developer Tools</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuGroup>
        <ContextMenuLabel>Appearance</ContextMenuLabel>
        <ContextMenuCheckboxItem>Always Show Bookmarks Bar</ContextMenuCheckboxItem>
      </ContextMenuGroup>
      <ContextMenuSeparator />
      <ContextMenuRadioGroup value="pedro">
        <ContextMenuGroup>
          <ContextMenuLabel>People</ContextMenuLabel>
        </ContextMenuGroup>
        <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
        <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
      </ContextMenuRadioGroup>
    </ContextMenuContent>
  </ContextMenu>
)

export const Destructive: Story = () => (
  <ContextMenu>
    <ContextMenuTrigger>
      <div
        style={{
          width: 300,
          height: 120,
          border: '2px dashed var(--color-border)',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 14,
          color: 'var(--color-muted-foreground)',
        }}
      >
        Right-click for actions
      </div>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Edit</ContextMenuItem>
      <ContextMenuItem>Duplicate</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
)
