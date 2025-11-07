import type React from "react"
import type { Metadata } from "next"
import { Poppins, Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { EnhancedThemeProvider } from "@/components/enhanced-theme-provider"
import "./globals.css"

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Babit Kumar - Full Stack Developer & AI Enthusiast",
  description: "Immersive portfolio showcasing full-stack development, AI/ML projects, and innovative web solutions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.style.colorScheme = 'dark';
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${geist.variable} ${geistMono.variable} font-sans antialiased dark bg-background text-foreground relative`}
      >
        <EnhancedThemeProvider>{children}</EnhancedThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
