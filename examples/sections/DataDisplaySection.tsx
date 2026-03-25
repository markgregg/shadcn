'use client'

import { GallerySection } from '../GallerySection'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar'
import { Skeleton } from '@/components/skeleton'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table'
import { AspectRatio } from '@/components/aspect-ratio'
import { TradingBlotter } from '@/components/trading-blotter'

const tableData = [
  { name: 'Alice', email: 'alice@example.com', role: 'Admin' },
  { name: 'Bob', email: 'bob@example.com', role: 'User' },
  { name: 'Carol', email: 'carol@example.com', role: 'User' },
]

export function DataDisplaySection() {
  return (
    <GallerySection
      id="data-display"
      title="Data Display"
      description="Table, Card, Avatar, Skeleton, Data Table, AspectRatio"
    >
      <div className="example-grid">
        <div className="example-stack-4">
          <h3 className="example-subtitle">Card</h3>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="example-text-sm">
                This is the card content area. It can contain any content.
              </p>
            </CardContent>
            <CardFooter>
              <p className="example-text-xs-muted">Card footer</p>
            </CardFooter>
          </Card>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Avatar sizes</h3>
          <div className="example-row-center">
            <Avatar size="sm">
              <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Avatar size="default">
              <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Skeleton</h3>
          <div className="example-stack-2">
            <Skeleton className="example-skeleton-line-lg" />
            <Skeleton className="example-skeleton-line-md" />
            <Skeleton className="example-skeleton-block" />
          </div>
        </div>

        <div className="example-grid-full example-stack-4">
          <h3 className="example-subtitle">Data Table</h3>
          <div className="example-box-md">
            <Table>
              <TableCaption>A sample data table</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.email}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.role}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="example-grid-full example-stack-4">
          <h3 className="example-subtitle">Trading Blotter</h3>
          <TradingBlotter />
        </div>

        <div className="example-stack-4">
          <h3 className="example-subtitle">Aspect ratio</h3>
          <AspectRatio ratio={16 / 9} className="example-aspect-muted">
            <div className="example-center-fill-muted">16:9</div>
          </AspectRatio>
        </div>
      </div>
    </GallerySection>
  )
}
