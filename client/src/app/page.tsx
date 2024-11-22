import Image from 'next/image'

import { HeroSection } from '@/components/hero-section'
import { Navbar } from '@/components/navbar'

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen md:max-w-6xl">
      <Navbar />
      <main className="relative flex justify-center py-2 md:mx-auto md:my-4 md:max-w-5xl">
        <Image
          src="/panda.webp"
          alt="Panda carrying a bamboo"
          width={100}
          height={100}
          className="absolute -left-24 -top-5 hidden md:block"
        />
        <HeroSection />
      </main>
    </div>
  )
}
