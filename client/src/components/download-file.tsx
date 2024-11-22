'use client'

import { ScrollArea } from './ui/scroll-area'
import { Separator } from './ui/separator'

export function DownloadFile() {
  return (
    <ScrollArea className="rounded-md border-2 border-dashed border-foreground p-4 shadow-2xl">
      <h4 className="font-semibold md:text-xl">Download</h4>
      <Separator className="my-3 md:my-4" />
      <p className="text-center">You have not uploaded any files yet.</p>
    </ScrollArea>
  )
}
