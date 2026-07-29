import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata = {
  title: "Erkhembold Narankhuu",
  description: "Portfolio of Erkhembold Narankhuu — Football. Languages. Code. Cinema.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-paper text-ink antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
