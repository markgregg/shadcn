import * as React from 'react'

import { cn } from '@/utils/index'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('skeleton', className)} {...props} />
}

export { Skeleton }
