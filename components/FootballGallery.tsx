"use client"
import { motion } from "framer-motion"

type Photo = { src: string; top: string; bottom: string }

const photos: Photo[] = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0800-LsCMadwISLdapR1lFd9KTT8CLoPTpx.jpeg", top: "MFF U14", bottom: "League Trophy" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0830-nlIQJ39FKV7PTGmzR12dDlz0SFs9La.jpeg", top: "Team", bottom: "Celebration" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2425-ZfQSsTyosNLKhgoLDt4caRf7781n9W.jpeg", top: "Futsal", bottom: "Action" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0803-kdGj1AbP2Q4XetZArOj7hUGSwz1lvT.jpeg", top: "Team Photo", bottom: "With Fans" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3270-mIBTXRAF2oItc6jTd3E1Qfebk4yWVy.jpeg", top: "Erkhembold", bottom: "In Jersey" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3260-ZY7qf51SmIxVeeiVDE3RYz0j04FrbK.jpeg", top: "Teammates", bottom: "Walking" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4172-Mmd41avqdxBxJRWFHGz9dZWsMiISol.jpeg", top: "Defensive", bottom: "Stance" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3721-3SuoGJH2aaR6wmGBm2AbjsR95e417W.jpeg", top: "Against", bottom: "Opponents" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4001-dSlbbbikbj5vcCl4tMZjii5KXlyCVA.jpeg", top: "Near The", bottom: "Goal" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5759%20%281%29-kzfznoa81frt9EyUlp2hLzyLO6IfD4.jpeg", top: "Aerial", bottom: "Duel" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0872-oiI7ChmeFkUlE504z4ESkbi0XXv0o6.jpeg", top: "Gothia Cup", bottom: "Stadium" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0628%20%281%29-FcQgNyeeu6cVPmyxVZCVutmCp3YeEc.jpeg", top: "Dribbling", bottom: "Past Defender" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5758%20%281%29-99rJHMUSc796xq9ZxIORKTkfmodqKD.jpeg", top: "Scoring", bottom: "Past Keeper" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5761%20%281%29-p0JMRdETqrvcO7AR8yjymaPtvgKd8D.jpeg", top: "Goal Line", bottom: "Action" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5167-b9aMHGlOTJyoadXj7SKyYTHxyRAfQ7.jpeg", top: "Dribbling", bottom: "Vs Defender" },
]

export default function FootballGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo, i) => (
        <motion.a
          key={photo.src}
          href={photo.src}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-[4/5] overflow-hidden"
          initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: (i % 3) * 0.08 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={`${photo.top} ${photo.bottom}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />

          <span className="absolute top-4 left-4 text-white text-xs font-bold uppercase tracking-widest opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {photo.top}
          </span>
          <span className="absolute bottom-4 right-4 text-white text-xs font-bold uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {photo.bottom}
          </span>
        </motion.a>
      ))}
    </div>
  )
}
