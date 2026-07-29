"use client"
import { useEffect, useRef } from "react"

function BubblyText({ text }: { text: string }) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const RADIUS = 140 // px — how close the mouse needs to be to affect a letter
    const MAX_LIFT = 22 // px — max upward movement
    const MAX_SCALE = 1.35

    const onMouseMove = (e: MouseEvent) => {
      lettersRef.current.forEach((el) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = e.clientX - cx
        const dy = e.clientY - cy
        const dist = Math.sqrt(dx * dx + dy * dy)
        const proximity = Math.max(0, 1 - dist / RADIUS)

        const lift = proximity * MAX_LIFT
        const scale = 1 + proximity * (MAX_SCALE - 1)
        el.style.transform = `translateY(${-lift}px) scale(${scale})`
      })
    }

    const onMouseLeave = () => {
      lettersRef.current.forEach((el) => {
        if (el) el.style.transform = "translateY(0) scale(1)"
      })
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseleave", onMouseLeave)
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [])

  return (
    <span ref={containerRef} className="inline-block">
      {text.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => { lettersRef.current[i] = el }}
          className="inline-block transition-transform duration-150 ease-out will-change-transform"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0628%20%281%29-FcQgNyeeu6cVPmyxVZCVutmCp3YeEc.jpeg')",
        }}
      />
      <div className="absolute inset-0 bg-black/55" />

      <h1 className="relative z-10 font-sans font-black text-6xl md:text-8xl lg:text-9xl text-center leading-none tracking-tight text-white">
        <BubblyText text="Erkhembold" />
        <br />
        <span className="text-accent">
          <BubblyText text="Narankhuu" />
        </span>
      </h1>
    </section>
  )
}
