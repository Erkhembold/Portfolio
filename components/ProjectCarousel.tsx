"use client"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

type CarouselItem = { title: string; category: string; image: string }

const items: CarouselItem[] = [
  { title: "Chinese Teaching", category: "Language education", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66a90e9f-3702-40fc-95ae-998d2040c619-ZcWENVQo9Na0WeE8Pg3ezwiiShd9gL.jpg" },
  { title: "French Club", category: "Founded & taught", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3266-5GI407DxSTdHVC4vQtIhJQmmZBdAUa.jpeg" },
  { title: "Earth School", category: "Environmental program", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/646037335_2775528102806365_2071652113600654282_n-xJqyAhh0r1cKstw5HAH76RnYrm4Ohr.jpg" },
  { title: "Drone Videography", category: "Aerial cinematography", image: "/projects/drone-thumbnail.png" },
]

export default function ProjectCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 4000)
    return () => clearInterval(id)
  }, [])

  const active = items[index]

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="flex items-center justify-between mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
        <span>Case Study</span>
        <span>
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
      </div>

      <div className="relative aspect-video">
        {/* Stacked cards peeking behind, mimicking the layered deck */}
        <div className="absolute inset-0 rounded-xl bg-accent/20 translate-x-3 translate-y-3 rotate-1" />
        <div className="absolute inset-0 rounded-xl bg-accent/40 translate-x-1.5 translate-y-1.5 -rotate-1" />

        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-lg font-bold text-ink">{active.title}</p>
            <p className="text-sm text-muted">{active.category}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-2">
          {items.map((item, i) => (
            <button
              key={item.title}
              onClick={() => setIndex(i)}
              aria-label={`Show ${item.title}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-accent w-6" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
