"use client"

import React, { useState } from "react"

import Dropzone, { FileRejection } from "react-dropzone"

import { cn } from "@/lib/utils"

export default function UploadFiles() {
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDropAccepted = (acceptedFiles: File[]) => {
    console.log("Accepted Files:", acceptedFiles)
  }

  const handleDropRejected = (rejectedFiles: FileRejection[]) => {
    console.error("Rejected Files:", rejectedFiles)
  }

  return (
    <div className="flex flex-col items-center gap-8 pt-6">
      <Dropzone
        onDropAccepted={handleDropAccepted}
        onDropRejected={handleDropRejected}
        accept={{
          "image/*": [".png", ".gif", ".jpeg", ".jpg"],
          "application/pdf": [".pdf"],
        }}
        onDragEnter={() => setIsDragOver(true)}
        onDragLeave={() => setIsDragOver(false)}
      >
        {({ getRootProps, getInputProps }) => (
          <section
            className={cn(
              "flex min-h-[10vh] w-5/6 items-center justify-center rounded-md border-2 border-dashed p-6",
              isDragOver
                ? "border-blue-400 bg-blue-100"
                : "border-red-400 bg-red-100"
            )}
          >
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p className="text-center text-sm md:text-base">
                Drag and drop files here,
                <br />
                or click to select files
              </p>
            </div>
          </section>
        )}
      </Dropzone>
      <section className="min-h-[50vh] w-5/6 rounded-md border-2 border-dashed border-zinc-800 p-2 md:p-4">
        <h2 className="font-medium">Downloads</h2>
        <p className="mt-2 text-center text-sm md:text-base">
          No Files to Download
        </p>
      </section>
    </div>
  )
}
