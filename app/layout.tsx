import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const orbitron = Orbitron({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-futuristic",
})

export const metadata: Metadata = {
  title: "CaddyMe | The Premier Golf Community Platform",
  description:
    "Connect with verified golf instructors, book lessons, and take your game to the next level. The #1 platform for golf instruction.",
  generator: "v0.app",
  keywords: ["golf", "golf lessons", "golf instruction", "PGA", "golf community", "golf instructors"],
}

export const viewport: Viewport = {
  themeColor: "#226D50",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${orbitron.variable}`}>{children}</body>
    </html>
  )
}
