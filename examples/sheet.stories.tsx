import type { Story } from '@ladle/react'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from '../src/components/sheet'
import { Button } from '../src/components/button'
import { Input } from '../src/components/input'
import { Label } from '../src/components/label'

export const Right: Story = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open Sheet (Right)</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit Profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <div style={{ display: 'grid', gap: 16, padding: '24px 0' }}>
        <div style={{ display: 'grid', gap: 6 }}>
          <Label htmlFor="sheet-name">Name</Label>
          <Input id="sheet-name" defaultValue="Pedro Duarte" />
        </div>
        <div style={{ display: 'grid', gap: 6 }}>
          <Label htmlFor="sheet-username">Username</Label>
          <Input id="sheet-username" defaultValue="@peduarte" />
        </div>
      </div>
      <SheetFooter>
        <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
        <Button>Save changes</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
)

export const Left: Story = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open Sheet (Left)</Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>Navigation</SheetTitle>
        <SheetDescription>Browse the application.</SheetDescription>
      </SheetHeader>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
        <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>Dashboard</Button>
        <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>Analytics</Button>
        <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>Settings</Button>
      </nav>
    </SheetContent>
  </Sheet>
)

export const Top: Story = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open Sheet (Top)</Button>
    </SheetTrigger>
    <SheetContent side="top">
      <SheetHeader>
        <SheetTitle>Announcement</SheetTitle>
        <SheetDescription>New features are available.</SheetDescription>
      </SheetHeader>
      <div style={{ padding: '16px 0' }}>
        <p style={{ fontSize: 13 }}>Check out the latest updates in our changelog.</p>
      </div>
    </SheetContent>
  </Sheet>
)

export const Bottom: Story = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open Sheet (Bottom)</Button>
    </SheetTrigger>
    <SheetContent side="bottom">
      <SheetHeader>
        <SheetTitle>Cookie Consent</SheetTitle>
        <SheetDescription>We use cookies to improve your experience.</SheetDescription>
      </SheetHeader>
      <SheetFooter style={{ marginTop: 16 }}>
        <SheetClose render={<Button variant="outline" />}>Decline</SheetClose>
        <SheetClose render={<Button />}>Accept All</SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
)
