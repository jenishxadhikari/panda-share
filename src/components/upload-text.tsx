"use client"

import React, { useState } from "react"

import { toast } from "sonner"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"

export default function UploadText() {
  const [text, setText] = useState<string>("")
  const [copy, setCopy] = useState<boolean>(false)
  const [clear, setClear] = useState<boolean>(false)

  function onCopy() {
    if (!text) {
      toast.error("No Message to Copy")
      return
    }
    setCopy(true)
    toast.success("Copied to Clipboard")
    navigator.clipboard.writeText(text)
    setTimeout(() => setCopy(false), 1000)
  }

  function onClear() {
    if (!text) {
      toast.error("No Message to Clear")
      return
    }
    setClear(true)
    setText("")
    toast.success("Cleared Textbox")
    setTimeout(() => setClear(false), 1000)
  }

  return (
    <section className="relative">
      <div className="flex flex-col items-center justify-between gap-2 py-4 sm:flex-row">
        <h2 className="text-lg font-semibold">Start Typing</h2>
        <div className="space-x-2">
          <Button onClick={onCopy}>
            {copy ? <Icons.checkCheck /> : <Icons.copy />}
            Copy
          </Button>
          <Button variant="outline" onClick={onClear}>
            {clear ? <Icons.eraser /> : <Icons.delete />}
            Clear
          </Button>
        </div>
      </div>
      <Textarea
        placeholder="Enter your message here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="min-h-[50vh] border-2 border-zinc-800 p-4 focus:border-none"
      />
    </section>
  )
}
