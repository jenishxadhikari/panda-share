import Link from "next/link"

import MaxWidthWrapper from "./max-width-wrapper"
import { buttonVariants } from "./ui/button"

export function Navbar() {
  return (
    <nav className="h-16 border-b border-zinc-200 bg-white/80">
      <MaxWidthWrapper className="flex items-center justify-between">
        <Link href="/" className="font-semibold text-zinc-900">
          Panda<span className="text-primary">Share</span>
        </Link>

        <div>
          <Link
            href="/room"
            className={buttonVariants({
              variant: "ghost",
            })}
          >
            Room
          </Link>

          <Link
            href="/about"
            className={buttonVariants({
              variant: "ghost",
            })}
          >
            About
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
