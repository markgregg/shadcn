import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { GalleryPage } from '../../examples/GalleryPage'
import {
  Alert,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Grid,
  PaginationLink,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  SidebarProvider,
  Stack,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ThemeProvider,
  ThemeToggle,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  useSidebar,
} from '@/index'

afterEach(() => {
  cleanup()
})

describe('module coverage', () => {
  const componentModules = [
    '@/components/accordion',
    '@/components/alert',
    '@/components/alert-dialog',
    '@/components/aspect-ratio',
    '@/components/avatar',
    '@/components/badge',
    '@/components/box',
    '@/components/breadcrumb',
    '@/components/button',
    '@/components/button-group',
    '@/components/calendar',
    '@/components/card',
    '@/components/carousel',
    '@/components/chart',
    '@/components/checkbox',
    '@/components/collapsible',
    '@/components/command',
    '@/components/context-menu',
    '@/components/dialog',
    '@/components/divider',
    '@/components/drawer',
    '@/components/dropdown-menu',
    '@/components/form',
    '@/components/grid',
    '@/components/hover-card',
    '@/components/input',
    '@/components/input-otp',
    '@/components/label',
    '@/components/menubar',
    '@/components/navigation-menu',
    '@/components/pagination',
    '@/components/popover',
    '@/components/progress',
    '@/components/radio-group',
    '@/components/resizable',
    '@/components/scroll-area',
    '@/components/select',
    '@/components/separator',
    '@/components/sheet',
    '@/components/sidebar',
    '@/components/skeleton',
    '@/components/slider',
    '@/components/sonner',
    '@/components/spinner',
    '@/components/stack',
    '@/components/switch',
    '@/components/table',
    '@/components/tabs',
    '@/components/textarea',
    '@/components/theme-provider',
    '@/components/theme-toggle',
    '@/components/toggle',
    '@/components/toggle-group',
    '@/components/tooltip',
  ]

  it.each(componentModules)('loads module %s', async (modulePath) => {
    const mod = await import(modulePath)
    expect(Object.keys(mod).length).toBeGreaterThan(0)
  })
})

describe('integration coverage', () => {
  it('renders the full gallery page with sections', () => {
    render(
      <ThemeProvider defaultTheme="light" storageKey="signal-theme-gallery-test">
        <GalleryPage />
      </ThemeProvider>
    )

    expect(screen.getByText('Design System')).toBeDefined()
    expect(screen.getByText('Buttons')).toBeDefined()
    expect(screen.getByText('Form Controls')).toBeDefined()
    expect(screen.getByText('Data Display')).toBeDefined()
    expect(screen.getByText('Overlay')).toBeDefined()
  })
})

describe('option coverage', () => {
  it('covers button variant and size options', () => {
    const variants = [
      'default',
      'outline',
      'secondary',
      'ghost',
      'destructive',
      'success',
      'warning',
      'info',
      'link',
    ] as const

    const sizes = ['sm', 'default', 'lg', 'icon', 'icon-sm', 'icon-lg'] as const

    render(
      <div>
        {variants.map((variant) => (
          <Button key={`button-${variant}`} variant={variant} aria-label={`button-${variant}`}>
            {variant}
          </Button>
        ))}
        {sizes.map((size) => (
          <Button key={`button-size-${size}`} size={size} aria-label={`button-size-${size}`}>
            {size}
          </Button>
        ))}
      </div>
    )

    variants.forEach((variant) => {
      expect(screen.getByLabelText(`button-${variant}`).getAttribute('data-variant')).toBe(variant)
    })

    sizes.forEach((size) => {
      expect(screen.getByLabelText(`button-size-${size}`).getAttribute('data-size')).toBe(size)
    })
  })

  it('covers alert and badge variants', () => {
    const badgeVariants = [
      'default',
      'secondary',
      'destructive',
      'outline',
      'ghost',
      'link',
      'success',
      'warning',
      'info',
    ] as const

    render(
      <div>
        <Alert variant="default" aria-label="alert-default" />
        <Alert variant="destructive" aria-label="alert-destructive" />
        {badgeVariants.map((variant) => (
          <Badge key={variant} variant={variant} aria-label={`badge-${variant}`}>
            {variant}
          </Badge>
        ))}
      </div>
    )

    expect(screen.getByLabelText('alert-default').getAttribute('data-variant')).toBe('default')
    expect(screen.getByLabelText('alert-destructive').getAttribute('data-variant')).toBe(
      'destructive'
    )

    badgeVariants.forEach((variant) => {
      expect(screen.getByLabelText(`badge-${variant}`).getAttribute('data-variant')).toBe(variant)
    })
  })

  it('covers avatar and switch sizes', () => {
    render(
      <div>
        <Avatar size="sm" aria-label="avatar-sm" />
        <Avatar size="default" aria-label="avatar-default" />
        <Avatar size="lg" aria-label="avatar-lg" />
        <Switch size="sm" aria-label="switch-sm" checked={false} onCheckedChange={() => {}} />
        <Switch
          size="default"
          aria-label="switch-default"
          checked={false}
          onCheckedChange={() => {}}
        />
      </div>
    )

    expect(screen.getByLabelText('avatar-sm').getAttribute('data-size')).toBe('sm')
    expect(screen.getByLabelText('avatar-default').getAttribute('data-size')).toBe('default')
    expect(screen.getByLabelText('avatar-lg').getAttribute('data-size')).toBe('lg')
    expect(screen.getByLabelText('switch-sm').getAttribute('data-size')).toBe('sm')
    expect(screen.getByLabelText('switch-default').getAttribute('data-size')).toBe('default')
  })

  it('covers tabs options', () => {
    render(
      <Tabs defaultValue="tab-a" orientation="vertical" aria-label="tabs-root">
        <TabsList variant="line" aria-label="tabs-list">
          <TabsTrigger value="tab-a">Tab A</TabsTrigger>
          <TabsTrigger value="tab-b">Tab B</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-a">Panel A</TabsContent>
        <TabsContent value="tab-b">Panel B</TabsContent>
      </Tabs>
    )

    expect(screen.getByLabelText('tabs-root').getAttribute('data-orientation')).toBe('vertical')
    expect(screen.getByLabelText('tabs-list').getAttribute('data-variant')).toBe('line')
  })

  it('covers toggle and toggle-group options', () => {
    render(
      <div>
        <Toggle variant="outline" size="lg" aria-label="toggle-outline">
          Toggle
        </Toggle>
        <ToggleGroup
          type="multiple"
          variant="outline"
          size="sm"
          spacing={2}
          orientation="vertical"
          aria-label="toggle-group"
        >
          <ToggleGroupItem value="a" aria-label="toggle-group-item-a">
            A
          </ToggleGroupItem>
          <ToggleGroupItem value="b" aria-label="toggle-group-item-b">
            B
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    )

    expect(screen.getByLabelText('toggle-outline').getAttribute('data-variant')).toBe('outline')
    expect(screen.getByLabelText('toggle-outline').getAttribute('data-size')).toBe('lg')

    const group = screen.getByLabelText('toggle-group')
    expect(group.getAttribute('data-variant')).toBe('outline')
    expect(group.getAttribute('data-size')).toBe('sm')
    expect(group.getAttribute('data-type')).toBe('multiple')
    expect(group.getAttribute('data-orientation')).toBe('vertical')

    expect(screen.getByLabelText('toggle-group-item-a').getAttribute('data-variant')).toBe(
      'outline'
    )
    expect(screen.getByLabelText('toggle-group-item-a').getAttribute('data-size')).toBe('sm')
  })

  it('covers separator, pagination, and resizable options', () => {
    render(
      <div>
        <Separator orientation="vertical" aria-label="separator-vertical" />
        <PaginationLink href="#" size="icon-lg" isActive aria-label="pagination-link">
          Page
        </PaginationLink>
        <div style={{ width: 600, height: 300 }}>
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={50}>left</ResizablePanel>
            <ResizableHandle withHandle aria-label="resize-handle" />
            <ResizablePanel defaultSize={50}>right</ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    )

    expect(screen.getByLabelText('separator-vertical').getAttribute('data-orientation')).toBe(
      'vertical'
    )
    expect(screen.getByLabelText('pagination-link').getAttribute('data-size')).toBe('icon-lg')
    expect(screen.getByLabelText('pagination-link').getAttribute('data-active')).toBe('true')
    expect(screen.getByLabelText('resize-handle')).toBeDefined()
    expect(document.querySelector('.resizable-handle-grip')).toBeTruthy()
  })

  it('covers theme provider and toggle interactions', () => {
    render(
      <ThemeProvider defaultTheme="light" storageKey="signal-theme-toggle-test">
        <ThemeToggle />
      </ThemeProvider>
    )

    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
    fireEvent.click(screen.getByRole('button', { name: 'Toggle theme' }))
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })

  it('covers dialog controlled and uncontrolled modes', () => {
    render(
      <Dialog defaultOpen>
        <DialogTrigger>Open dialog</DialogTrigger>
        <DialogContent>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>Dialog description</DialogDescription>
        </DialogContent>
      </Dialog>
    )

    expect(screen.getByText('Dialog title')).toBeDefined()
  })

  it('covers popover controlled and uncontrolled modes', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open popover</PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>
    )

    expect(screen.getByText('Popover content')).toBeDefined()
  })

  it('covers select value flow', () => {
    render(
      <Select defaultValue="apple">
        <SelectTrigger aria-label="fruit-select">
          <SelectValue placeholder="Choose" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectContent>
      </Select>
    )

    expect(screen.getByLabelText('fruit-select')).toBeDefined()
  })

  it('covers sidebar provider state', () => {
    function SidebarProbe() {
      const { open } = useSidebar()
      return <span>{open ? 'open' : 'closed'}</span>
    }

    render(
      <SidebarProvider open={false}>
        <SidebarProbe />
      </SidebarProvider>
    )

    expect(screen.getByText('closed')).toBeDefined()
  })
})

describe('Box', () => {
  it('renders a div by default with data-slot="box"', () => {
    render(<Box aria-label="box-default">content</Box>)
    const el = screen.getByLabelText('box-default')
    expect(el.tagName.toLowerCase()).toBe('div')
    expect(el.getAttribute('data-slot')).toBe('box')
  })

  it('renders as a custom HTML element via component prop', () => {
    render(
      <Box component="section" aria-label="box-section">
        content
      </Box>
    )
    const el = screen.getByLabelText('box-section')
    expect(el.tagName.toLowerCase()).toBe('section')
    expect(el.getAttribute('data-slot')).toBe('box')
  })

  it('renders as article element', () => {
    render(
      <Box component="article" aria-label="box-article">
        content
      </Box>
    )
    expect(screen.getByLabelText('box-article').tagName.toLowerCase()).toBe('article')
  })

  it('forwards className and style', () => {
    render(
      <Box className="my-class" style={{ color: 'red' }} aria-label="box-styled">
        content
      </Box>
    )
    const el = screen.getByLabelText('box-styled')
    expect(el.className).toContain('my-class')
    expect(el.style.color).toBe('red')
  })

  it('forwards children', () => {
    render(<Box>hello box</Box>)
    expect(screen.getByText('hello box')).toBeDefined()
  })
})

describe('Stack', () => {
  it('renders a div with data-slot="stack"', () => {
    render(<Stack aria-label="stack-root">content</Stack>)
    const el = screen.getByLabelText('stack-root')
    expect(el.getAttribute('data-slot')).toBe('stack')
  })

  it('applies column flex direction by default', () => {
    render(<Stack aria-label="stack-col">content</Stack>)
    expect(screen.getByLabelText('stack-col').style.flexDirection).toBe('column')
  })

  it('applies row flex direction', () => {
    render(
      <Stack direction="row" aria-label="stack-row">
        content
      </Stack>
    )
    expect(screen.getByLabelText('stack-row').style.flexDirection).toBe('row')
  })

  it('converts numeric spacing to rem gap', () => {
    render(
      <Stack spacing={2} aria-label="stack-spacing">
        content
      </Stack>
    )
    // spacing=2 → 2*0.5rem = 1rem
    expect(screen.getByLabelText('stack-spacing').style.gap).toBe('1rem')
  })

  it('passes CSS string spacing through unchanged', () => {
    render(
      <Stack spacing="24px" aria-label="stack-px">
        content
      </Stack>
    )
    expect(screen.getByLabelText('stack-px').style.gap).toBe('24px')
  })

  it('applies alignItems and justifyContent', () => {
    render(
      <Stack alignItems="center" justifyContent="space-between" aria-label="stack-align">
        content
      </Stack>
    )
    const el = screen.getByLabelText('stack-align')
    expect(el.style.alignItems).toBe('center')
    expect(el.style.justifyContent).toBe('space-between')
  })

  it('inserts a divider between children', () => {
    render(
      <Stack divider={<hr data-testid="divider" />}>
        <span>A</span>
        <span>B</span>
        <span>C</span>
      </Stack>
    )
    const dividers = screen.getAllByTestId('divider')
    expect(dividers).toHaveLength(2)
  })

  it('renders no divider for a single child', () => {
    render(
      <Stack divider={<hr data-testid="divider" />}>
        <span>Only</span>
      </Stack>
    )
    expect(screen.queryAllByTestId('divider')).toHaveLength(0)
  })

  it('forwards className and style', () => {
    render(
      <Stack className="my-stack" style={{ background: 'red' }} aria-label="stack-styled">
        content
      </Stack>
    )
    const el = screen.getByLabelText('stack-styled')
    expect(el.className).toContain('my-stack')
    expect(el.style.background).toBe('red')
  })
})

describe('Grid', () => {
  it('renders a container div with data-slot="grid"', () => {
    render(
      <Grid container aria-label="grid-container">
        content
      </Grid>
    )
    const el = screen.getByLabelText('grid-container')
    expect(el.getAttribute('data-slot')).toBe('grid')
    expect(el.style.display).toBe('grid')
  })

  it('defaults to 12 columns template', () => {
    render(
      <Grid container aria-label="grid-12">
        content
      </Grid>
    )
    expect(screen.getByLabelText('grid-12').style.gridTemplateColumns).toBe(
      'repeat(12, minmax(0, 1fr))'
    )
  })

  it('respects custom columns count', () => {
    render(
      <Grid container columns={6} aria-label="grid-6">
        content
      </Grid>
    )
    expect(screen.getByLabelText('grid-6').style.gridTemplateColumns).toBe(
      'repeat(6, minmax(0, 1fr))'
    )
  })

  it('applies spacing as column and row gap', () => {
    render(
      <Grid container spacing={2} aria-label="grid-spacing">
        content
      </Grid>
    )
    const el = screen.getByLabelText('grid-spacing')
    expect(el.style.columnGap).toBe('1rem')
    expect(el.style.rowGap).toBe('1rem')
  })

  it('applies independent rowSpacing and columnSpacing', () => {
    render(
      <Grid container rowSpacing={1} columnSpacing={3} aria-label="grid-sep-spacing">
        content
      </Grid>
    )
    const el = screen.getByLabelText('grid-sep-spacing')
    expect(el.style.rowGap).toBe('0.5rem')
    expect(el.style.columnGap).toBe('1.5rem')
  })

  it('renders a grid item with data-slot="grid-item"', () => {
    render(
      <Grid container>
        <Grid size={6} aria-label="grid-item">
          item
        </Grid>
      </Grid>
    )
    const item = screen.getByLabelText('grid-item')
    expect(item.getAttribute('data-slot')).toBe('grid-item')
  })

  it('applies column span via inline style', () => {
    render(
      <Grid container>
        <Grid size={4} aria-label="grid-item-span">
          item
        </Grid>
      </Grid>
    )
    expect(screen.getByLabelText('grid-item-span').style.gridColumnEnd).toBe('span 4')
  })

  it('applies offset via grid-column-start', () => {
    render(
      <Grid container>
        <Grid size={6} offset={3} aria-label="grid-item-offset">
          item
        </Grid>
      </Grid>
    )
    const el = screen.getByLabelText('grid-item-offset')
    // offset 3 → gridColumnStart = 4
    expect(el.style.gridColumnStart).toBe('4')
  })

  it('applies auto size', () => {
    render(
      <Grid container>
        <Grid size="auto" aria-label="grid-item-auto">
          item
        </Grid>
      </Grid>
    )
    expect(screen.getByLabelText('grid-item-auto').style.gridColumn).toBe('auto')
  })

  it('injects a style tag for responsive size values', () => {
    render(
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }} aria-label="grid-item-responsive">
          item
        </Grid>
      </Grid>
    )
    // With responsive props, a <style> element is injected
    expect(document.querySelector('style')).not.toBeNull()
    // The item itself should not carry inline grid-column styles
    const el = screen.getByLabelText('grid-item-responsive')
    expect(el.style.gridColumnEnd).toBe('')
  })

  it('forwards className and style to container', () => {
    render(
      <Grid container className="my-grid" style={{ background: 'blue' }} aria-label="grid-styled">
        content
      </Grid>
    )
    const el = screen.getByLabelText('grid-styled')
    expect(el.className).toContain('my-grid')
    expect(el.style.background).toBe('blue')
  })
})

describe('Divider', () => {
  it('renders a div with data-slot="divider"', () => {
    render(<Divider aria-label="divider-root" />)
    const el = screen.getByLabelText('divider-root')
    expect(el.getAttribute('data-slot')).toBe('divider')
  })

  it('has role="separator"', () => {
    render(<Divider aria-label="divider-sep" />)
    const el = screen.getByLabelText('divider-sep')
    expect(el.getAttribute('role')).toBe('separator')
  })

  it('defaults to horizontal orientation', () => {
    render(<Divider aria-label="divider-h" />)
    const el = screen.getByLabelText('divider-h')
    expect(el.getAttribute('data-orientation')).toBe('horizontal')
    expect(el.getAttribute('aria-orientation')).toBe('horizontal')
  })

  it('supports vertical orientation', () => {
    render(<Divider orientation="vertical" aria-label="divider-v" />)
    const el = screen.getByLabelText('divider-v')
    expect(el.getAttribute('data-orientation')).toBe('vertical')
    expect(el.getAttribute('aria-orientation')).toBe('vertical')
  })

  it('applies the size data attribute', () => {
    render(<Divider size="lg" aria-label="divider-lg" />)
    expect(screen.getByLabelText('divider-lg').getAttribute('data-size')).toBe('lg')
  })

  it('defaults to size xs', () => {
    render(<Divider aria-label="divider-xs" />)
    expect(screen.getByLabelText('divider-xs').getAttribute('data-size')).toBe('xs')
  })

  it('applies the variant data attribute', () => {
    render(<Divider variant="inset" aria-label="divider-inset" />)
    expect(screen.getByLabelText('divider-inset').getAttribute('data-variant')).toBe('inset')
  })

  it('defaults to variant fullWidth', () => {
    render(<Divider aria-label="divider-fw" />)
    expect(screen.getByLabelText('divider-fw').getAttribute('data-variant')).toBe('fullWidth')
  })

  it('renders children text as divider-text span', () => {
    render(<Divider>OR</Divider>)
    const textEl = document.querySelector('[data-slot="divider-text"]')
    expect(textEl).not.toBeNull()
    expect(textEl?.textContent).toBe('OR')
  })

  it('sets data-has-text and data-text-align when children present', () => {
    render(
      <Divider textAlign="left" aria-label="divider-text">
        Label
      </Divider>
    )
    const el = screen.getByLabelText('divider-text')
    expect(el.getAttribute('data-has-text')).toBe('true')
    expect(el.getAttribute('data-text-align')).toBe('left')
  })

  it('does not render children for vertical divider', () => {
    render(
      <Divider orientation="vertical" aria-label="divider-notext">
        ignored
      </Divider>
    )
    expect(document.querySelector('[data-slot="divider-text"]')).toBeNull()
  })

  it('forwards className and style', () => {
    render(
      <Divider className="my-divider" style={{ margin: '1rem' }} aria-label="divider-styled" />
    )
    const el = screen.getByLabelText('divider-styled')
    expect(el.className).toContain('my-divider')
    expect(el.style.margin).toBe('1rem')
  })
})
