import type { Metadata } from 'next'
import { Recursive } from 'next/font/google'

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
      <body className={`${recursive.className} antialiased`}>{children}</body>
    </html>
  )
}
