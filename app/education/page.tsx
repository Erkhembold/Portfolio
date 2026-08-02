import Footer from "@/components/Footer"
import RevealText from "@/components/RevealText"

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-paper pt-20">
      <div className="relative bg-gradient-to-br from-accent/25 via-accent/5 to-transparent border-b border-border py-20 md:py-28 px-6 md:px-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-1.5 bg-accent rounded-full" />
        </div>
        <RevealText as="h1" className="text-[clamp(3rem,11vw,8rem)] font-black leading-none tracking-tight text-ink">Education</RevealText>
        <p className="mt-5 text-lg text-muted max-w-2xl">My academic journey and achievements.</p>
      </div>

      <section className="px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/550764c4-ba05-4cf3-9393-03f6eac63553-D2prBhJNpL6VCl6Met7RdD7G5VQF13.jpg"
              alt="Erkhembold teaching a Chinese lesson"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="w-8 h-1 bg-accent rounded-full mb-4" />
            <RevealText as="h2" className="text-2xl font-bold mb-4">Academic Background</RevealText>
            <p className="text-muted leading-relaxed mb-6">
              I have been studying at Oyunlag School since Grade 1 (2016–Present), building a strong academic foundation across STEM subjects, languages, and interdisciplinary learning. Throughout my education, I have consistently participated in national and international academic competitions, earning multiple awards and recognitions.
            </p>
            <h3 className="text-xl font-semibold mb-4">Key Academic Achievements</h3>
            <div className="space-y-5">
              {[
                { title: "Best Student Award (Oyunlag School)", body: "2016, 2018, 2019" },
                { title: "World Scholar's Cup (International Round) — 2026", body: "Gold Medal — Team Writing · Silver Medal — Team Scholar's Bowl · Invited to Global Rounds (international stage with ~10,000 scholars from 60+ countries, Yale-affiliated qualification pathway)" },
                { title: "STEM Competitions (STEMCO 2024)", body: "Gold Medal — Physics · Silver Medal — Biology · Silver Medal — Mathematics" },
                { title: "OWLYPIA International Science & Technology Competition (2025)", body: "Silver Medal — Round 1 · Silver Medal — Round 2" },
                { title: "Mathematics Competitions", body: "International Mathematical Kangaroo (2019, 2024, 2025) — Participant · STEMCO Mathematics — Silver Medal (2024) · KIMC — Grade III Diploma (2019)" },
                { title: "Geography Competitions", body: "NUM Geography Map Knowledge Contest — Bronze Medal (2025) · National Geography Olympiad — District & School Qualification (2024–2025)" },
                { title: "English Competitions", body: "International Hippo English Olympiad — Semi-finalist (2019–2025) · National English Olympiad — District Qualification (2023, 2024)" },
              ].map((a) => (
                <div key={a.title} className="p-4 rounded-lg hover:bg-accent/10 transition-colors duration-200">
                  <h4 className="font-medium text-ink mb-1">{a.title}</h4>
                  <p className="text-muted text-sm">{a.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <div className="w-8 h-1 bg-accent rounded-full mb-4" />
            <RevealText as="h2" className="text-2xl font-bold mb-4">Languages &amp; Skills</RevealText>

            <h3 className="font-medium mb-3">Languages</h3>
            <ul className="space-y-2 text-muted mb-6">
              <li><span className="font-medium text-ink">English</span> — Studying since Grade 1 (2016–Present). Developed through continuous academic learning, communication practice, and international competition experience, reaching fluent proficiency.</li>
              <li><span className="font-medium text-ink">Chinese</span> — Studying since Grade 7 (2021–Present). Includes structured learning and practical teaching experience with beginner-level learners.</li>
              <li><span className="font-medium text-ink">French</span> — Studying since 2024 at Alliance Française Ulaanbaatar. Currently B1 level (DELF A2 certified), with focus on grammar, communication, and cultural understanding.</li>
            </ul>

            <h3 className="font-medium mb-3">Technical Skills</h3>
            <ul className="space-y-1 text-muted ml-4 mb-6 list-disc">
              <li>Python — Programming for problem-solving, automation, and foundational AI concepts</li>
              <li>HTML &amp; CSS — Web development and personal website creation</li>
              <li>JavaScript (Basic) — Interactive web functionality for projects</li>
              <li>Competitive Programming — Participant in CodeX programming Olympiads</li>
            </ul>

            <h3 className="font-medium mb-3">Digital Media &amp; Content Creation</h3>
            <ul className="space-y-1 text-muted ml-4 mb-6 list-disc">
              <li>Content creation for pop culture and Marvel-related platforms</li>
              <li>Design of digital posters and visual materials for online publishing</li>
              <li>Management of large online communities (22,000+ members)</li>
            </ul>

            <h3 className="font-medium mb-3">Other Skills</h3>
            <ul className="space-y-1 text-muted ml-4 list-disc">
              <li>Drone Operation (DJI Mini 2) — Aerial photography and cinematic city footage</li>
              <li>Analytical Thinking — Developed through mathematics, science, and geography Olympiads</li>
              <li>Multidisciplinary Problem Solving — Connecting STEM, languages, and digital media</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
