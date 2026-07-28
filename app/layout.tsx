import { Playfair_Display, DM_Sans, Syne } from "next/font/google"
import Navbar from "@/components/Navbar"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" })

export const metadata = {
  title: "Erkhembold Narankhuu",
  description: "Personal portfolio of Erkhembold Narankhuu",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${syne.variable}`}>
      <body className="font-sans bg-paper text-ink">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
