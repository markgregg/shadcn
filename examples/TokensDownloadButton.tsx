'use client'

import { DownloadIcon } from 'lucide-react'

import { Button } from '@/components/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/tooltip'

import darkTokens from '../tokens/dark.json'
import lightTokens from '../tokens/light.json'

function downloadJson(filename: string, data: unknown) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export function TokensDownloadButton() {
  const handleDownload = () => {
    downloadJson('signal-tokens-light.json', lightTokens)
    requestAnimationFrame(() => downloadJson('signal-tokens-dark.json', darkTokens))
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={handleDownload}
            aria-label="Download Figma token JSON (light and dark)"
          >
            <DownloadIcon className="example-theme-icon" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Download light.json + dark.json for Figma Variables</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
