import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import Navbar from "@/components/Navbar"
import "./globals.css"

export const metadata = {
  title: "Erkhembold Narankhuu",
  description: "Portfolio of Erkhembold Narankhuu — Football. Languages. Code. Cinema.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans bg-paper text-ink antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
