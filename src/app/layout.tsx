import type React from "react"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import "./globals.css"
import I18nProvider from "@/locales/I18nProvider"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"


const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-quicksand",
})

export const metadata: Metadata = {
  title: "Gabriel Henrique Lins",
  description: "Portfolio pessoal de Gabriel Henrique Lins",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={quicksand.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="font-quicksand antialiased">
        <I18nProvider>{children}</I18nProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
