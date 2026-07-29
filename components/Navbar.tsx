"use client"
import Link from "next/link"

const links = [
  { href: "/", label: "Home" },
  { href: "/sports", label: "Football" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-[100] flex items-center justify-between px-6 md:px-12 py-4 bg-paper/90 backdrop-blur-md border-b border-border">
      <Link href="/" className="w-10 h-10 flex items-center justify-center bg-ink text-accent font-black text-sm rounded-md">
        EN
      </Link>

      <ul className="hidden md:flex items-center gap-9">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm font-medium tracking-wide text-ink/70 hover:text-ink transition-colors duration-200"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="mailto:erkhemboldnarankhuuu@gmail.com"
        className="text-sm font-semibold bg-accent text-ink px-6 py-2.5 rounded-full hover:brightness-95 transition-all duration-200"
      >
        Contact Me
      </Link>
    </nav>
  )
}
