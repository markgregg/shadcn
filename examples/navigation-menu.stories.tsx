import type { Story } from '@ladle/react'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuPositioner,
  NavigationMenuIndicator,
} from '../src/components/navigation-menu'

const components = [
  { title: 'Alert Dialog', href: '#', description: 'A modal dialog that interrupts the user.' },
  { title: 'Hover Card', href: '#', description: 'Preview content on hover.' },
  { title: 'Progress', href: '#', description: 'A progress indicator component.' },
  { title: 'Tabs', href: '#', description: 'Switch between views with tabs.' },
  { title: 'Tooltip', href: '#', description: 'A popup with additional information.' },
]

export const Default: Story = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
        <NavigationMenuPositioner>
          <NavigationMenuIndicator />
          <NavigationMenuContent>
            <div style={{ display: 'grid', gap: 8, padding: 24, width: 400 }}>
              <NavigationMenuLink href="#">
                <div style={{ fontWeight: 600, marginBottom: 4 }}>Signal UI</div>
                <div style={{ fontSize: 13, color: 'var(--color-muted-foreground)' }}>
                  Beautifully designed components for your app.
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">Introduction</NavigationMenuLink>
              <NavigationMenuLink href="#">Installation</NavigationMenuLink>
              <NavigationMenuLink href="#">Typography</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuPositioner>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
        <NavigationMenuPositioner>
          <NavigationMenuIndicator />
          <NavigationMenuContent>
            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: 16, width: 480 }}>
              {components.map((c) => (
                <li key={c.title}>
                  <NavigationMenuLink href={c.href}>
                    <div style={{ fontWeight: 500, fontSize: 14 }}>{c.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--color-muted-foreground)', marginTop: 2 }}>
                      {c.description}
                    </div>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuPositioner>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)
