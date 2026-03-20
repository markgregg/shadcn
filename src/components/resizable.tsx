'use client'

import * as React from 'react'
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
  disableGlobalCursorStyles,
} from 'react-resizable-panels'
import { GripVerticalIcon } from 'lucide-react'

import { cn } from '@/utils/index'

disableGlobalCursorStyles()

const clearStaleResizeCursor = (doc: Document) => {
  const styleElements = Array.from(doc.querySelectorAll('style'))
  for (const styleElement of styleElements) {
    const cssText = styleElement.textContent ?? ''
    if (/\*\s*\{\s*cursor:\s*[^;]+!important;\s*\}/.test(cssText)) {
      styleElement.remove()
    }
  }

  doc.documentElement.style.cursor = ''
  if (doc.body) {
    doc.body.style.cursor = ''
  }
}

if (typeof document !== 'undefined') {
  clearStaleResizeCursor(document)
}

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof PanelGroup>) => (
  <PanelGroup
    data-slot="resizable-panel-group"
    className={cn('flex h-full w-full data-[panel-group-direction=vertical]:flex-col', className)}
    {...props}
  />
)

const ResizablePanel = Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof PanelResizeHandle> & {
  withHandle?: boolean
}) => {
  React.useEffect(() => {
    const clearCursor = () => clearStaleResizeCursor(document)

    clearCursor()

    document.addEventListener('pointerup', clearCursor)
    document.addEventListener('mouseup', clearCursor)
    document.addEventListener('touchend', clearCursor)
    document.addEventListener('dragend', clearCursor)
    document.addEventListener('visibilitychange', clearCursor)
    window.addEventListener('blur', clearCursor)

    return () => {
      document.removeEventListener('pointerup', clearCursor)
      document.removeEventListener('mouseup', clearCursor)
      document.removeEventListener('touchend', clearCursor)
      document.removeEventListener('dragend', clearCursor)
      document.removeEventListener('visibilitychange', clearCursor)
      window.removeEventListener('blur', clearCursor)
      clearCursor()
    }
  }, [])

  return (
    <PanelResizeHandle data-slot="resizable-handle" className={cn(className)} {...props}>
      {withHandle && (
        <div className="resizable-handle-grip">
          <GripVerticalIcon />
        </div>
      )}
    </PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
