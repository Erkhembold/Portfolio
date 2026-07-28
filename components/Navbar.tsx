"use client"
import Link from "next/link"

const links = [
  { href: "/", label: "Home" },
  { href: "/sports", label: "Sports" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-paper/70 backdrop-blur-lg border-b border-border/40">
      <Link href="/" className="w-10 h-10 flex items-center justify-center bg-ink text-paper font-display font-black text-sm rounded-md">
        EN
      </Link>

      <ul className="hidden md:flex items-center gap-10">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="font-display text-xs font-semibold tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors duration-200"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/resume"
        className="font-display text-xs font-bold tracking-wide uppercase bg-ink text-paper px-6 py-3 rounded-full hover:bg-accent transition-colors duration-200"
      >
        Get in touch
      </Link>
    </nav>
  )
}
