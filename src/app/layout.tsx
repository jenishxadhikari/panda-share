import type { Metadata } from "next"
import { Recursive } from "next/font/google"

import "./globals.css"

const recursive = Recursive({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Panda Share",
  description: "Share files and text effortlessly across devices on your WiFi.",
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
