import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'jest-axe'

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ThemeProvider,
} from '@/index'

describe('accessibility', () => {
  it('button has no obvious violations', async () => {
    const { container } = render(<Button>Action</Button>)
    const results = await axe(container)
    expect(results.violations).toHaveLength(0)
  })

  it('tabs has no obvious violations', async () => {
    const { container } = render(
      <Tabs defaultValue="first">
        <TabsList>
          <TabsTrigger value="first">First</TabsTrigger>
          <TabsTrigger value="second">Second</TabsTrigger>
        </TabsList>
        <TabsContent value="first">First content</TabsContent>
        <TabsContent value="second">Second content</TabsContent>
      </Tabs>
    )

    const results = await axe(container)
    expect(results.violations).toHaveLength(0)
  })

  it('dialog content has no obvious violations when open', async () => {
    const { container } = render(
      <ThemeProvider>
        <Dialog defaultOpen>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogContent>
        </Dialog>
      </ThemeProvider>
    )

    const results = await axe(container)
    expect(results.violations).toHaveLength(0)
  })
})
