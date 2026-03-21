import type { Story } from '@ladle/react'
import { Alert, AlertTitle, AlertDescription } from '../src/components/alert'

export const Default: Story = () => (
  <div style={{ width: 400 }}>
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
    </Alert>
  </div>
)

export const Destructive: Story = () => (
  <div style={{ width: 400 }}>
    <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
  </div>
)

export const TitleOnly: Story = () => (
  <div style={{ width: 400 }}>
    <Alert>
      <AlertTitle>Note</AlertTitle>
    </Alert>
  </div>
)

export const DescriptionOnly: Story = () => (
  <div style={{ width: 400 }}>
    <Alert>
      <AlertDescription>Everything is working as expected.</AlertDescription>
    </Alert>
  </div>
)
