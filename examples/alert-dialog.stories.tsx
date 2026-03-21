import type { Story } from '@ladle/react'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from '../src/components/alert-dialog'
import { Button } from '../src/components/button'

export const Default: Story = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Open Alert Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)

export const SmallSize: Story = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Open Small Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent size="sm">
      <AlertDialogHeader>
        <AlertDialogTitle>Delete item?</AlertDialogTitle>
        <AlertDialogDescription>This will permanently remove the item.</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>No</AlertDialogCancel>
        <AlertDialogAction variant="destructive">Yes, delete</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)

export const Destructive: Story = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="destructive">Delete Account</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete Account</AlertDialogTitle>
        <AlertDialogDescription>
          All your data will be permanently removed. This action cannot be reversed.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction variant="destructive">Delete Account</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)
