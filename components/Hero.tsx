"use client"
import { useEffect, useRef } from "react"

export default function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const onScroll = () => {
      if (!textRef.current) return
      const offset = window.scrollY * 0.15
      textRef.current.style.transform = `translateY(${offset}px)`
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-ink">
      <h1
        ref={textRef}
        className="hero-text font-serif font-black text-6xl md:text-8xl lg:text-9xl text-center leading-none tracking-tight will-change-transform"
      >
        Erkhembold
        <br />
        <span className="text-gold">Narankhuu</span>
      </h1>
    </section>
  )
}
