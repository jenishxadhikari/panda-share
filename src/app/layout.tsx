import type { Metadata } from "next"
import { Recursive } from "next/font/google"

import { Toaster } from "@/components/ui/sonner"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

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
      <body
        className={`${recursive.className} flex min-h-screen flex-col antialiased`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Toaster
          toastOptions={{
            classNames: {
              error: "text-red-400 bg-zinc-50",
              success: "text-green-400 bg-zinc-50",
            },
          }}
        />
        <Footer />
      </body>
    </html>
  )
}
