export default function Footer() {
  return (
    <footer className="bg-ink text-white py-14 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <p className="text-4xl md:text-6xl font-black mb-10">
          Let&apos;s <span className="text-accent">talk.</span>
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent mb-2">Email</p>
            <a
              href="mailto:erkhemboldnarankhuuu@gmail.com"
              className="text-lg md:text-2xl font-medium hover:text-accent transition-colors duration-200 break-all"
            >
              erkhemboldnarankhuuu@gmail.com
            </a>
          </div>
          <p className="text-xs uppercase tracking-widest text-white/40">© 2026 Erkhembold Narankhuu</p>
        </div>
      </div>
    </footer>
  )
}
