import Footer from "@/components/Footer"

const gallery = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0800-LsCMadwISLdapR1lFd9KTT8CLoPTpx.jpeg", alt: "Erkhembold with MFF U14 League trophy" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0830-nlIQJ39FKV7PTGmzR12dDlz0SFs9La.jpeg", alt: "Team celebrating with fans in the stands" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2425-ZfQSsTyosNLKhgoLDt4caRf7781n9W.jpeg", alt: "Erkhembold in futsal action" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0803-kdGj1AbP2Q4XetZArOj7hUGSwz1lvT.jpeg", alt: "Team photo with fans celebrating" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3270-mIBTXRAF2oItc6jTd3E1Qfebk4yWVy.jpeg", alt: "Erkhembold portrait in jersey" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3260-ZY7qf51SmIxVeeiVDE3RYz0j04FrbK.jpeg", alt: "Teammates walking together" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4172-Mmd41avqdxBxJRWFHGz9dZWsMiISol.jpeg", alt: "Erkhembold in defensive stance" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3721-3SuoGJH2aaR6wmGBm2AbjsR95e417W.jpeg", alt: "Erkhembold playing against opponents" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4001-dSlbbbikbj5vcCl4tMZjii5KXlyCVA.jpeg", alt: "Action near the goal" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5759%20%281%29-kzfznoa81frt9EyUlp2hLzyLO6IfD4.jpeg", alt: "Erkhembold in aerial duel" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0872-oiI7ChmeFkUlE504z4ESkbi0XXv0o6.jpeg", alt: "Team at Gothia Cup stadium with Mongolian flags" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0628%20%281%29-FcQgNyeeu6cVPmyxVZCVutmCp3YeEc.jpeg", alt: "Erkhembold dribbling past defender" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5758%20%281%29-99rJHMUSc796xq9ZxIORKTkfmodqKD.jpeg", alt: "Erkhembold scoring past goalkeeper" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5761%20%281%29-p0JMRdETqrvcO7AR8yjymaPtvgKd8D.jpeg", alt: "Goal line action" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5167-b9aMHGlOTJyoadXj7SKyYTHxyRAfQ7.jpeg", alt: "Erkhembold dribbling against defender" },
]

export default function SportsPage() {
  return (
    <main className="min-h-screen bg-paper pt-20">
      <div className="relative bg-gradient-to-br from-accent/25 via-accent/5 to-transparent border-b border-border py-20 md:py-28 px-6 md:px-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-1.5 bg-accent rounded-full" />
        </div>
        <h1 className="text-[clamp(3rem,11vw,8rem)] font-black leading-none tracking-tight text-ink">Football &amp; Sport</h1>
        <p className="mt-5 text-lg text-muted max-w-2xl">My journey through competitive football and athletics.</p>
      </div>

      <section className="px-4 md:px-8 py-8">
        <div className="max-w-7xl mx-auto columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {gallery.map((img) => (
            <div key={img.src} className="break-inside-avoid overflow-hidden rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 bg-ink text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-1 bg-accent rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">My Football Journey</h2>
            <div className="w-8 h-1 bg-accent rounded-full" />
          </div>
          <div className="space-y-6 leading-relaxed text-white/80">
            <p>At Deren FC, I received higher-quality training under experienced coaches from countries such as Australia and Serbia, which significantly improved both my technical and tactical understanding of football.</p>
            <p>In September 2022, I participated in my very first official football tournament — a grassroots U12 competition between football academies across Mongolia. Competing in that tournament was already a meaningful milestone for me, but winning the gold medal made the experience unforgettable. Receiving my first football medal after years of training, waiting, and working through setbacks filled me with excitement and pride. It was one of the first moments that made me truly feel that my hard work was paying off, and it motivated me to continue pushing myself further.</p>
            <p>Later that same year, in November 2022, I had the opportunity to travel abroad to Germany and Spain for international football experiences and tournaments. In Germany, my teammates and I trained for a week under FC Düren, where we experienced a different level of football intensity and professionalism. Afterwards, we traveled to Salou, Spain to compete in Surf Cup International, an international youth tournament featuring academy teams associated with clubs such as FC Barcelona, Paris Saint-Germain F.C., Arsenal F.C., and Real Madrid CF. Although our team did not return home with medals, the experience itself was unforgettable. One of our proudest moments was earning a convincing 4–1 victory against a Finnish team, proving to ourselves that we could compete internationally despite coming from a smaller footballing nation.</p>
            <p>Between 2023 and 2025, our team continued to improve year after year as we matured and competed in higher age divisions such as U14 and U16 tournaments. Throughout those years, our team consistently achieved strong performances in Mongolian football competitions. We successfully won gold medals in multiple MFF Football League seasons, while also earning bronze medals in the 2023 and 2025 MFF Futsal League and winning gold in the 2024 futsal season. These achievements reflected not only our growth as players, but also the chemistry, discipline, and teamwork we built together over the years.</p>
            <p>In the summer of 2024, I participated in the official FC Barcelona Academy Camp Ulaanbaatar, where I trained under coaches connected to FC Barcelona and competed alongside many talented players my age. The experience exposed me to new styles of training and further deepened my passion for football.</p>
            <p>Shortly after the Barcelona camp, my U14 teammates and I once again traveled abroad — this time to compete in tournaments across Scandinavia, including Sweden, Norway, Finland, and Denmark. Among all the tournaments we attended, the most remarkable was Gothia Cup, widely recognized as one of the largest and most prestigious youth football tournaments in the world. Competing there allowed me to witness the incredible level of talent and dedication displayed by young athletes from across the globe. Playing against international teams and seeing so many passionate players motivated me to continue improving both as a footballer and as an individual.</p>
            <p>Today, I still proudly train and compete with Deren FC. Football has shaped my character, taught me discipline and perseverance, and introduced me to unforgettable experiences and friendships. No matter where life takes me in the future, I hope to continue doing what I love for as long as I possibly can.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
