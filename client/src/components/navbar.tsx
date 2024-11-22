import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="mx-auto flex justify-center py-3 md:justify-start md:py-6">
      <Link href="/" className="text-center text-xl font-extrabold md:text-3xl">
        Panda<span className="text-primary">Share</span>
      </Link>
    </nav>
  )
}
