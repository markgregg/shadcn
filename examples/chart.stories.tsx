import type { Story } from '@ladle/react'
import { Bar, BarChart, CartesianGrid, XAxis, Area, AreaChart, Line, LineChart } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '../src/components/chart'

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]

const chartConfig: ChartConfig = {
  desktop: { label: 'Desktop', color: 'var(--color-primary)' },
  mobile: { label: 'Mobile', color: 'var(--color-secondary)' },
}

export const BarChartStory: Story = () => (
  <ChartContainer config={chartConfig} style={{ height: 300, width: '100%' }}>
    <BarChart data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Bar dataKey="desktop" fill="var(--color-primary)" radius={4} />
      <Bar dataKey="mobile" fill="var(--color-secondary)" radius={4} />
    </BarChart>
  </ChartContainer>
)
BarChartStory.storyName = 'Bar Chart'

export const AreaChartStory: Story = () => (
  <ChartContainer config={chartConfig} style={{ height: 300, width: '100%' }}>
    <AreaChart data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Area dataKey="desktop" type="natural" fill="var(--color-primary)" fillOpacity={0.2} stroke="var(--color-primary)" />
      <Area dataKey="mobile" type="natural" fill="var(--color-secondary)" fillOpacity={0.2} stroke="var(--color-secondary)" />
    </AreaChart>
  </ChartContainer>
)
AreaChartStory.storyName = 'Area Chart'

export const LineChartStory: Story = () => (
  <ChartContainer config={chartConfig} style={{ height: 300, width: '100%' }}>
    <LineChart data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Line dataKey="desktop" type="natural" stroke="var(--color-primary)" strokeWidth={2} dot={false} />
      <Line dataKey="mobile" type="natural" stroke="var(--color-secondary)" strokeWidth={2} dot={false} />
    </LineChart>
  </ChartContainer>
)
LineChartStory.storyName = 'Line Chart'

export const WithLegend: Story = () => (
  <ChartContainer config={chartConfig} style={{ height: 300, width: '100%' }}>
    <BarChart data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <ChartLegend content={<ChartLegendContent />} />
      <Bar dataKey="desktop" fill="var(--color-primary)" radius={4} />
      <Bar dataKey="mobile" fill="var(--color-secondary)" radius={4} />
    </BarChart>
  </ChartContainer>
)
