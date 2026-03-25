import * as React from 'react'

import { cn } from '@/utils/index'

export type SpinnerProps = React.HTMLAttributes<HTMLSpanElement> & {
  width?: number
  height?: number
}

function Spinner({ className, width, height, style, ...props }: SpinnerProps) {
  const w = width ?? 24
  const h = height ?? 24
  return (
    <span
      className={cn('spinner-rotator', className)}
      role="status"
      aria-label="Loading"
      style={style}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={w}
        height={h}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="spinner-svg"
        aria-hidden
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    </span>
  )
}

export { Spinner }
