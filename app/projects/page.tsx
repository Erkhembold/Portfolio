import Footer from "@/components/Footer"
import RevealText from "@/components/RevealText"
import ProjectCarousel from "@/components/ProjectCarousel"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-paper pt-20">
      <div className="relative bg-gradient-to-br from-accent/25 via-accent/5 to-transparent border-b border-border py-20 md:py-28 px-6 md:px-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-1.5 bg-accent rounded-full" />
        </div>
        <RevealText as="h1" className="text-[clamp(3rem,11vw,8rem)] font-black leading-none tracking-tight text-ink">Projects</RevealText>
        <RevealText as="p" className="mt-5 text-lg text-muted max-w-2xl" delay={0.1}>Initiatives, clubs, and community work I am involved in.</RevealText>
      </div>

      <ProjectCarousel />

      <section className="px-6 md:px-12 py-12">
        <div className="max-w-5xl mx-auto space-y-16">

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start p-6 rounded-xl hover:bg-accent/5 transition-colors duration-300">
            <div className="flex-1 space-y-4">
              <div className="w-6 h-1 bg-accent rounded-full" />
              <RevealText as="h3" className="text-2xl md:text-3xl font-bold">Chinese Language Teaching Initiative</RevealText>
              <p className="text-muted leading-relaxed">I independently teach Chinese to approximately 20 students from grades 4-5 at the 87th Rural Secondary School during the second half of 2025 and continuing to the present. The initiative focuses on introducing foundational language skills such as basic vocabulary, pronunciation, and simple sentence structures.</p>
              <p className="text-muted leading-relaxed">I design and deliver beginner-friendly lessons tailored for young learners with no prior exposure to Chinese, helping them develop early confidence in foreign language learning. This project aims to improve access to structured language education in a rural environment where such opportunities are limited.</p>
            </div>
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66a90e9f-3702-40fc-95ae-998d2040c619-ZcWENVQo9Na0WeE8Pg3ezwiiShd9gL.jpg" alt="Erkhembold teaching Chinese lesson to students" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500" />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-start p-6 rounded-xl hover:bg-accent/5 transition-colors duration-300">
            <div className="flex-1 space-y-4">
              <div className="w-6 h-1 bg-accent rounded-full" />
              <RevealText as="h3" className="text-2xl md:text-3xl font-bold">Oyunlag French Club</RevealText>
              <p className="text-muted leading-relaxed">Founder and organizer of the French Club at Oyunlag School. I prepare structured lessons based on the Edito 2022 textbook and teach French to students in grades 8-11.</p>
              <p className="text-muted leading-relaxed">The club focuses on building foundational grammar, vocabulary, and speaking skills while encouraging cultural understanding and consistent language practice among students interested in French.</p>
            </div>
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3266-5GI407DxSTdHVC4vQtIhJQmmZBdAUa.jpeg" alt="Erkhembold teaching French class" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500" />
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl hover:bg-accent/5 transition-colors duration-300 space-y-4">
            <div className="w-6 h-1 bg-accent rounded-full" />
            <RevealText as="h3" className="text-2xl md:text-3xl font-bold">Media &amp; Digital Content Platforms</RevealText>
            <p className="text-muted leading-relaxed">I operate a pop culture media platform where I publish the latest entertainment and Marvel-related news and articles, supported by self-designed digital posters for fast and engaging content delivery.</p>
            <p className="text-muted leading-relaxed">In addition, I serve as a moderator in the 22,000+ member Mongolian Marvel community, where I contribute posts, discussions, and curated content to maintain engagement and information flow within the group.</p>
            <div className="flex flex-wrap gap-4 pt-2 text-sm font-semibold">
              <a href="https://www.facebook.com/starkindustries" target="_blank" rel="noopener noreferrer" className="text-accent hover:opacity-70 transition-opacity">Facebook: Stark Industries →</a>
              <a href="https://www.instagram.com/marveldropmongolia" target="_blank" rel="noopener noreferrer" className="text-accent hover:opacity-70 transition-opacity">Instagram: @marveldropmongolia →</a>
              <a href="https://www.facebook.com/groups/mcumoviecommunity" target="_blank" rel="noopener noreferrer" className="text-accent hover:opacity-70 transition-opacity">MCU Movie Community (22,000+) →</a>
            </div>
          </div>

          <div className="p-6 rounded-xl hover:bg-accent/5 transition-colors duration-300 space-y-4">
            <div className="w-6 h-1 bg-accent rounded-full" />
            <RevealText as="h3" className="text-2xl md:text-3xl font-bold">Oyunlag School Red Cross Club</RevealText>
            <p className="text-muted leading-relaxed">Active member of the school Red Cross Club, responsible for research work and managing the club&apos;s Instagram page by publishing educational content, news, and awareness-based articles.</p>
            <p className="text-muted leading-relaxed">Key activities include: Santa Challenge Initiative collaborating with Zurh NGO to provide donations to 20-30 children; Cancer Week Awareness Program organizing a school-wide educational event for 100+ students; delivering disaster preparedness and emergency response training sessions for younger students; and the Green Pulse Event (28 March 2026) — an environmental initiative focused on waste reduction, ecological education, and youth volunteer participation.</p>
            <a href="https://www.instagram.com/oyunlag_redcross/" target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-semibold text-accent hover:opacity-70 transition-opacity">Instagram: @oyunlag_redcross →</a>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start p-6 rounded-xl hover:bg-accent/5 transition-colors duration-300">
            <div className="flex-1 space-y-4">
              <div className="w-6 h-1 bg-accent rounded-full" />
              <RevealText as="h3" className="text-2xl md:text-3xl font-bold">Earth School Mongolia</RevealText>
              <p className="text-muted leading-relaxed">Participant in the Earth School Mongolia 2026 program, an environmental education initiative organized by the UN Association of Mongolia. The program promotes youth leadership in climate action through training, seminars, and hands-on environmental activities.</p>
              <p className="text-muted leading-relaxed">Key components include: E-learning modules (20 academic hours) on climate and sustainability; field activities such as bird watching, zoo visits, and ecological observation; participation in eco-club initiatives across 70 schools and 1,500+ students nationwide; engagement in environmental campaigns such as recycling programs and the &quot;RePlastic&quot; contest; and collaboration with environmental partners including the Breathe Mongolia Clean Air Coalition.</p>
            </div>
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/646037335_2775528102806365_2071652113600654282_n-xJqyAhh0r1cKstw5HAH76RnYrm4Ohr.jpg" alt="Earth School Mongolia participants planting trees" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500" />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-start p-6 rounded-xl hover:bg-accent/5 transition-colors duration-300">
            <div className="flex-1 space-y-4">
              <div className="w-6 h-1 bg-accent rounded-full" />
              <RevealText as="h3" className="text-2xl md:text-3xl font-bold">Aerial Photography &amp; Drone Videography</RevealText>
              <p className="text-muted leading-relaxed">I have been flying drones for over a year, using my DJI Mini 2 to capture aerial photographs and cinematic videos of Mongolia&apos;s landscapes, cities, and cultural landmarks. My work focuses on showcasing the country&apos;s natural beauty and urban environments through high-quality aerial cinematography, combining technical flight skills with visual storytelling.</p>
              <p className="text-muted leading-relaxed">I document and publish my footage on my YouTube channel, where I share drone videos featuring locations across Mongolia, including city skylines, historical monuments, and scenic natural destinations. Through this hobby, I have developed experience in drone operation, aerial composition, camera control, post-production editing, and creating engaging visual content for online audiences.</p>
              <a href="https://www.youtube.com/@Starkindustries15" target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-semibold text-accent hover:opacity-70 transition-opacity">
                YouTube: Stark Industries →
              </a>
            </div>
            <div className="flex-1 w-full">
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/projects/drone-thumbnail.png" alt="Ulaanbaatar, Mongolia aerial drone footage at night" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500" />
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
