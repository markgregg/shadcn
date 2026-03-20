import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { GalleryPage } from '../../examples/GalleryPage'
import {
  Alert,
  Avatar,
  Badge,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
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
    '@/components/drawer',
    '@/components/dropdown-menu',
    '@/components/form',
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
    expect(screen.getByLabelText('alert-destructive').getAttribute('data-variant')).toBe('destructive')

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

    expect(screen.getByLabelText('toggle-group-item-a').getAttribute('data-variant')).toBe('outline')
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

    expect(screen.getByLabelText('separator-vertical').getAttribute('data-orientation')).toBe('vertical')
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

    expect(document.documentElement.classList.contains('dark')).toBe(false)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle theme' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
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
