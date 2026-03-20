import type { Story } from '@ladle/react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '../src/components/dialog'
import { Button } from '../src/components/button'
import { Input } from '../src/components/input'
import { Label } from '../src/components/label'

export const Default: Story = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Open Dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div style={{ display: 'grid', gap: 16, padding: '16px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', alignItems: 'center', gap: 16 }}>
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Pedro Duarte" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', alignItems: 'center', gap: 16 }}>
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="@peduarte" />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)

export const WithoutCloseButton: Story = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Open (no close button)</Button>
    </DialogTrigger>
    <DialogContent showCloseButton={false}>
      <DialogHeader>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogDescription>Please confirm or cancel this action.</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
        <Button>Confirm</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)

export const Alert: Story = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button>Show Info</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Information</DialogTitle>
        <DialogDescription>
          Your subscription has been renewed successfully. You will be charged $29.99 on the 15th of
          each month.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose render={<Button />}>Got it</DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)
