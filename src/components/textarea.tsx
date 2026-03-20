import * as React from 'react'

import { cn } from '@/utils/index'

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({ className, ...props }, ref) => {
    return <textarea data-slot="textarea" className={cn(className)} ref={ref} {...props} />
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
