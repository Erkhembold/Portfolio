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
    <nav className="fixed top-0 inset-x-0 z-[100] bg-paper border-b border-border">
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 md:px-12 py-4">
        <Link href="/" className="w-10 h-10 flex items-center justify-center bg-ink text-accent font-black text-sm rounded-md shrink-0">
          EN
        </Link>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm md:text-base font-semibold text-black hover:text-accent transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="mailto:erkhemboldnarankhuuu@gmail.com"
          className="text-sm font-bold bg-accent text-black px-6 py-2.5 rounded-full hover:brightness-95 transition-all duration-200 shrink-0"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  )
}
