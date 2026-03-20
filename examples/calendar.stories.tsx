import * as React from 'react'
import type { Story } from '@ladle/react'
import type { DateRange } from 'react-day-picker'
import { Calendar } from '../src/components/calendar'

export const SingleMode: Story = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}

export const MultipleMode: Story = () => {
  const [dates, setDates] = React.useState<Date[] | undefined>()
  return (
    <Calendar
      mode="multiple"
      selected={dates}
      onSelect={setDates}
      className="rounded-md border"
    />
  )
}

export const RangeMode: Story = () => {
  const [range, setRange] = React.useState<DateRange | undefined>()
  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      className="rounded-md border"
    />
  )
}

export const DropdownLayout: Story = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      captionLayout="dropdown"
      className="rounded-md border"
    />
  )
}

export const HideOutsideDays: Story = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      showOutsideDays={false}
      className="rounded-md border"
    />
  )
}
