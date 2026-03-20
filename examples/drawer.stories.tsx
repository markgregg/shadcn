import type { Story } from '@ladle/react'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from '../src/components/drawer'
import { Button } from '../src/components/button'

export const Bottom: Story = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open Drawer (Bottom)</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Edit Profile</DrawerTitle>
        <DrawerDescription>Make changes to your profile.</DrawerDescription>
      </DrawerHeader>
      <div style={{ padding: '0 16px 16px' }}>
        <p>Drawer content goes here.</p>
      </div>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
)

export const Top: Story = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open Drawer (Top)</Button>
    </DrawerTrigger>
    <DrawerContent side="top">
      <DrawerHeader>
        <DrawerTitle>Notifications</DrawerTitle>
        <DrawerDescription>Your recent notifications.</DrawerDescription>
      </DrawerHeader>
      <div style={{ padding: '0 16px 16px' }}>
        <p>Notification content here.</p>
      </div>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="outline">Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
)

export const Right: Story = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open Drawer (Right)</Button>
    </DrawerTrigger>
    <DrawerContent side="right">
      <DrawerHeader>
        <DrawerTitle>Settings</DrawerTitle>
        <DrawerDescription>Configure your preferences.</DrawerDescription>
      </DrawerHeader>
      <div style={{ padding: '0 16px 16px' }}>
        <p>Settings content here.</p>
      </div>
      <DrawerFooter>
        <Button>Save</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
)

export const Left: Story = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open Drawer (Left)</Button>
    </DrawerTrigger>
    <DrawerContent side="left">
      <DrawerHeader>
        <DrawerTitle>Navigation</DrawerTitle>
        <DrawerDescription>Browse menu items.</DrawerDescription>
      </DrawerHeader>
      <div style={{ padding: '0 16px 16px' }}>
        <p>Navigation items here.</p>
      </div>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="outline">Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
)
