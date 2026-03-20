'use client'

import { toast } from 'sonner'

import { GallerySection } from '../GallerySection'
import { Alert, AlertDescription, AlertTitle } from '@/components/alert'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/alert-dialog'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Spinner } from '@/components/spinner'

export function FeedbackSection() {
  return (
    <GallerySection
      id="feedback"
      title="Feedback"
      description="Alert, AlertDialog, Badge, Sonner toast, Spinner"
    >
      <div className="example-grid">
        <div className="example-stack-4">
          <h3 className="example-subtitle">Alert</h3>
          <div className="example-stack-2">
            <Alert>
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>You can add components to your app using the cli.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
            </Alert>
          </div>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">AlertDialog</h3>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Show Alert Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove
                  your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Badge variants</h3>
          <div className="example-row-wrap">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Toast (Sonner)</h3>
          <div className="example-row-wrap">
            <Button variant="outline" onClick={() => toast.success('Success toast!')}>
              Success toast
            </Button>
            <Button variant="outline" onClick={() => toast.error('Error toast!')}>
              Error toast
            </Button>
          </div>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Spinner</h3>
          <div className="example-row-center">
            <Spinner className="example-spinner-md" />
            <Spinner className="example-spinner-lg" />
            <Button disabled>
              <Spinner className="example-spinner-sm-offset" />
              Loading
            </Button>
          </div>
        </div>
      </div>
    </GallerySection>
  )
}
