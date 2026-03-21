import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'jest-axe'

import {
  Box,
  Button,
  Dialog,
  Divider,
  DialogContent,
  DialogDescription,
  DialogTitle,
  Grid,
  Stack,
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

  it('Box has no obvious violations', async () => {
    const { container } = render(
      <Box component="section" aria-label="layout-box">
        <p>Content</p>
      </Box>
    )
    const results = await axe(container)
    expect(results.violations).toHaveLength(0)
  })

  it('Stack has no obvious violations', async () => {
    const { container } = render(
      <Stack direction="row" spacing={2} aria-label="layout-stack">
        <span>Item A</span>
        <span>Item B</span>
        <span>Item C</span>
      </Stack>
    )
    const results = await axe(container)
    expect(results.violations).toHaveLength(0)
  })

  it('Grid has no obvious violations', async () => {
    const { container } = render(
      <Grid container spacing={2} aria-label="grid-root">
        <Grid size={6}>
          <p>Left</p>
        </Grid>
        <Grid size={6}>
          <p>Right</p>
        </Grid>
      </Grid>
    )
    const results = await axe(container)
    expect(results.violations).toHaveLength(0)
  })

  it('Divider horizontal has no obvious violations', async () => {
    const { container } = render(
      <div>
        <p>Above</p>
        <Divider />
        <p>Below</p>
      </div>
    )
    const results = await axe(container)
    expect(results.violations).toHaveLength(0)
  })

  it('Divider vertical has no obvious violations', async () => {
    const { container } = render(
      <div style={{ display: 'flex', height: 40 }}>
        <span>Left</span>
        <Divider orientation="vertical" />
        <span>Right</span>
      </div>
    )
    const results = await axe(container)
    expect(results.violations).toHaveLength(0)
  })

  it('Divider with text has no obvious violations', async () => {
    const { container } = render(
      <div>
        <Divider>OR</Divider>
      </div>
    )
    const results = await axe(container)
    expect(results.violations).toHaveLength(0)
  })
})
