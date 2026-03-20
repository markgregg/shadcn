import { cn } from '@/utils/index'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="skeleton" className={cn(className)} {...props} />
}

export { Skeleton }
