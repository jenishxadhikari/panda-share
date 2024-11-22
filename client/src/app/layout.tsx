import type { Metadata } from 'next'
import { Recursive } from 'next/font/google'

import { Toaster } from '@/components/ui/sonner'

import './globals.css'

const recursive = Recursive({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Panda Share',
  description: 'Share text and files across all your devices on your WIFI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${recursive.className} antialiased`}>
        {children}
        <Toaster
          toastOptions={{
            classNames: {
              toast: 'bg-background',
              error: 'text-red-400',
              success: 'text-green-400',
            },
          }}
        />
      </body>
    </html>
  )
}
