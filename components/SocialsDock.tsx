"use client"
import { ExternalLink } from "lucide-react"
import {
  SiStrava,
  SiLetterboxd,
  SiSpotify,
  SiFacebook,
  SiInstagram,
} from "react-icons/si"
import type { IconType } from "react-icons"

type SocialLink = {
  href: string
  label: string
  subtitle: string
  accent: string
  Icon: IconType
}

const links: SocialLink[] = [
  {
    href: "https://www.strava.com/athletes/1403203441",
    label: "Strava",
    subtitle: "Football & Fitness",
    accent: "#FC4C02",
    Icon: SiStrava,
  },
  {
    href: "https://letterboxd.com/Erkhembold/",
    label: "Letterboxd",
    subtitle: "Film Reviews",
    accent: "#00E054",
    Icon: SiLetterboxd,
  },
  {
    href: "https://open.spotify.com/user/31i6xns37e3uszqpv3aefhgpvdim",
    label: "Spotify",
    subtitle: "Playlists & Music",
    accent: "#1DB954",
    Icon: SiSpotify,
  },
  {
    href: "https://www.facebook.com/profile.php?id=61579929411947",
    label: "Stark Industries",
    subtitle: "Marvel News Community",
    accent: "#1877F2",
    Icon: SiFacebook,
  },
  {
    href: "https://www.instagram.com/marveldropmongolia/?hl=en",
    label: "Marvel Drop",
    subtitle: "Instagram Community",
    accent: "#E4405F",
    Icon: SiInstagram,
  },
  {
    href: "https://www.instagram.com/oyunlag_french/?hl=en",
    label: "French Club",
    subtitle: "Oyunlag High School",
    accent: "#0055A5",
    Icon: SiInstagram,
  },
]

export default function SocialsDock() {
  return (
    <section className="bg-ink py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-1 bg-accent rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Socials &amp; Activity</h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-md p-4 md:p-6">
          <div className="flex flex-wrap gap-4">
            {links.map(({ href, label, subtitle, accent, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-1 min-w-[220px] basis-[calc(50%-0.5rem)] md:basis-[calc(33.333%-0.75rem)] flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 transition-all duration-200 ease-out hover:-translate-y-1 hover:bg-white/10"
                style={{ ["--accent" as string]: accent }}
              >
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 text-white/70 transition-colors duration-200 group-hover:text-[var(--accent)]"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                >
                  <Icon size={20} />
                </span>

                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-semibold text-white truncate">{label}</span>
                  <span className="block text-xs text-white/50 truncate">{subtitle}</span>
                </span>

                <ExternalLink
                  size={15}
                  className="shrink-0 text-white/30 transition-all duration-200 group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />

                <span
                  className="pointer-events-none absolute inset-0 rounded-xl border border-transparent transition-colors duration-200 group-hover:border-[var(--accent)]/50"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
