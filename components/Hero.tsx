"use client"

function BubblyText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block bubbly-letter"
          style={{ animationDelay: `${i * 0.12}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-ink">
      <h1 className="font-serif font-black text-6xl md:text-8xl lg:text-9xl text-center leading-none tracking-tight">
        <BubblyText text="Erkhembold" className="block text-white" />
        <BubblyText text="Narankhuu" className="block text-gold" />
      </h1>
    </section>
  )
}
