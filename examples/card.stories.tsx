import type { Story } from '@ladle/react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from '../src/components/card'
import { Button } from '../src/components/button'

export const Default: Story = () => (
  <div style={{ width: 380 }}>
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content area.</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  </div>
)

export const Small: Story = () => (
  <div style={{ width: 300 }}>
    <Card size="sm">
      <CardHeader>
        <CardTitle>Small Card</CardTitle>
        <CardDescription>A compact card variant.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Compact content.</p>
      </CardContent>
    </Card>
  </div>
)

export const WithAction: Story = () => (
  <div style={{ width: 380 }}>
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">Mark all read</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Notification content here.</p>
      </CardContent>
    </Card>
  </div>
)

export const Simple: Story = () => (
  <div style={{ width: 300 }}>
    <Card>
      <CardContent>
        <p>A simple card with only content.</p>
      </CardContent>
    </Card>
  </div>
)
