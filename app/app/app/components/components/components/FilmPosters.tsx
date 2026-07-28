// components/FilmPosters.tsx
"use client"

type Poster = { title: string; tag: string; image: string; href: string }

const posters: Poster[] = [
  {
    title: "Thunderbolts*",
    tag: "Marvel",
    image: "https://a.ltrbxd.com/resized/film-poster/8/8/7/6/5/3/887653-thunderbolts-0-230-0-345-crop.jpg?v=80380bc773",
    href: "#",
  },
  {
    title: "FILL IN TITLE",
    tag: "Marvel",
    image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12798844_p_v8_ao.jpg",
    href: "#",
  },
  {
    title: "Avengers: Infinity War",
    tag: "Marvel",
    image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/11/Avengers_Infinity_war_poster.jpeg/revision/latest?cb=20180316141550",
    href: "#",
  },
  {
    title: "FILL IN TITLE",
    tag: "Marvel",
    image: "https://resizing.flixster.com/n05rzJetP10tJg-Ngmc4xgi7PoY=/206x305/v2/https://resizing.flixster.com/F4qdcvTFMYoEmut3WmhBVmYeSVI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzlhZDg3ZjU1LTk3ZTAtNDMzMC04MzliLTNiMzE5YmQ3ZDQ4OC53ZWJw",
    href: "#",
  },
]

export default function FilmPosters({ posters: items = posters }: { posters?: Poster[] }) {
  return (
    <div className="flex flex-wrap gap-10 justify-center py-16">
      {items.map((p, i) => (
        
          key={p.title}
          href={p.href}
          className="poster-float relative w-56 md:w-64 aspect-[2/3] rounded-lg overflow-hidden shadow-xl group"
          style={{ animationDelay: `${i * 0.4}s` }}
        >
          <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

          <span className="absolute top-4 right-4 bg-accent text-paper text-xs font-display font-bold uppercase tracking-wide px-3 py-1 rounded-full">
            {p.tag}
          </span>

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-paper/15 border border-white/35 backdrop-blur-lg text-white text-xs font-display font-bold uppercase tracking-widest px-4 py-2 rounded-full whitespace-nowrap">
            Click to view →
          </span>
        </a>
      ))}
    </div>
  )
}
