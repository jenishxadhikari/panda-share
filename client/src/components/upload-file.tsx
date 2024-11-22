'use client'

import { useState } from 'react'

import Dropzone from 'react-dropzone'

import { cn } from '@/lib/utils'

import { Icons } from './icons'

export function UploadFile() {
  const [isDragOver, setIsDragOver] = useState<boolean>(false)

  return (
    <Dropzone
      onDrop={(acceptedFiles) => console.log(acceptedFiles)}
      onDragEnter={() => setIsDragOver(true)}
      onDragLeave={() => setIsDragOver(false)}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          className={cn(
            'flex flex-col items-center justify-center rounded-md border-2 border-dashed border-red-300 bg-red-100',
            {
              'border-blue-300 bg-blue-100': isDragOver,
            }
          )}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <Icons.upload className="h-6 w-6" />
          <p>
            <span className="font-semibold md:text-lg">Click to upload</span> or
            drag and drop
          </p>
          <p className="text-xs tracking-wide text-muted-foreground md:text-sm">
            PNG, JPG, JPEG & PDF
          </p>
        </div>
      )}
    </Dropzone>
  )
}
