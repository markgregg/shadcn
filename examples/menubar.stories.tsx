import type { Story } from '@ladle/react'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarShortcut,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from '../src/components/menubar'

export const Default: Story = () => (
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          New Window <MenubarShortcut>⌘N</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          Print <MenubarShortcut>⌘P</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Undo <MenubarShortcut>⌘Z</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          Cut <MenubarShortcut>⌘X</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Copy <MenubarShortcut>⌘C</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Paste <MenubarShortcut>⌘V</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>View</MenubarTrigger>
      <MenubarContent>
        <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
        <MenubarCheckboxItem defaultChecked>Always Show Full URLs</MenubarCheckboxItem>
        <MenubarSeparator />
        <MenubarGroup>
          <MenubarLabel>Tabs</MenubarLabel>
        </MenubarGroup>
        <MenubarRadioGroup value="browser">
          <MenubarRadioItem value="browser">Browser</MenubarRadioItem>
          <MenubarRadioItem value="editor">Editor</MenubarRadioItem>
        </MenubarRadioGroup>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>Help</MenubarTrigger>
      <MenubarContent>
        <MenubarSub>
          <MenubarSubTrigger>Documentation</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Getting Started</MenubarItem>
            <MenubarItem>API Reference</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarSeparator />
        <MenubarItem>About</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
)
