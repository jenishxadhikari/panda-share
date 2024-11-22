'use client'

import { ReactNode, useState } from 'react'

import { toast } from 'sonner'

import { Icons } from './icons'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'

export function HandleText() {
  const [text, setText] = useState<string>('')
  const [icon, setIcon] = useState<ReactNode>(<Icons.copy strokeWidth={3} />)

  const copyText = () => {
    if (!text) {
      toast.error('Nothing to copy')
      return
    }
    navigator.clipboard.writeText(text).then(() => {
      toast.success('Copied to Clipboard')
      setIcon(<Icons.check strokeWidth={3} />)
      setTimeout(() => {
        setIcon(<Icons.copy strokeWidth={3} />)
      }, 1000)
    })
  }

  const clearText = () => {
    if (!text) {
      toast.error('Nothing to clear')
      return
    }
    setText('')
    toast.success('Cleared Textarea')
  }

  return (
    <section className="flex flex-col gap-4 p-4 md:gap-8">
      <div className="flex gap-2 md:justify-between">
        <h1 className="font-semibold underline decoration-primary underline-offset-4 md:text-2xl">
          Start Typing!
        </h1>
        <div className="hidden gap-4 md:flex">
          <Button className="w-full md:w-fit" onClick={copyText}>
            {icon}
            <span>Copy</span>
          </Button>
          <Button
            variant="outline"
            className="w-full md:w-fit"
            onClick={clearText}
          >
            <Icons.delete strokeWidth={3} />
            <span>Clear</span>
          </Button>
        </div>
      </div>
      <Textarea
        placeholder="Type your message here."
        className="h-[50vh] border-muted-foreground p-4 focus:border-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex gap-4 md:hidden">
        <Button className="w-full md:w-fit" onClick={copyText}>
          {icon}
          <span>Copy</span>
        </Button>
        <Button
          variant="outline"
          className="w-full md:w-fit"
          onClick={clearText}
        >
          <Icons.delete strokeWidth={3} />
          <span>Clear</span>
        </Button>
      </div>
    </section>
  )
}
