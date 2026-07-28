"use client"
import Link from "next/link"

type Section = { label: string; href: string; image: string | null }

const sections: Section[] = [
  {
    label: "Football & Sport",
    href: "/sports",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/83877c74-b90a-4275-8a31-3485c9eba2c1-Mmy5DBHvvI95M7fasF90SMWZx3VQ8l.jpg",
  },
  {
    label: "Education",
    href: "/education",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/550764c4-ba05-4cf3-9393-03f6eac63553-D2prBhJNpL6VCl6Met7RdD7G5VQF13.jpg",
  },
  {
    label: "Projects",
    href: "/projects",
    image: null, // no original photo existed for this section — add one when ready
  },
]

export default function ScrollSections() {
  return (
    <div className="flex flex-col">
      {sections.map((s) => (
        <Link
          key={s.label}
          href={s.href}
          className="relative h-[50vh] md:h-[70vh] overflow-hidden group block"
        >
          {s.image ? (
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              style={{ backgroundImage: `url(${s.image})` }}
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center font-display text-white/15 text-sm tracking-widest uppercase"
              style={{ background: "linear-gradient(135deg, #0d1f0d 0%, #1a3a1a 100%)" }}
            >
              [ Add {s.label.toLowerCase()} photo ]
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-all duration-500 group-hover:from-black/80" />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-paper/15 border border-white/35 backdrop-blur-lg px-8 py-4 rounded-full transition-all duration-400 group-hover:scale-105 group-hover:-translate-y-2">
            <span className="font-display text-sm md:text-base font-bold tracking-widest uppercase text-white flex items-center gap-3">
              {s.label}
              <span className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all inline-block">→</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
