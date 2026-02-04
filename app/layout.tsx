import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://omkar-portfolio-five.vercel.app"),
  title: {
    default: "Omkar Suhas Surve | Full Stack Web & App Developer",
    template: "%s | Omkar Suhas Surve"
  },
  description:
    "Omkar Suhas Surve is a Full Stack Developer building scalable web and mobile applications with modern frontend, backend, APIs, databases, and cloud technologies.",
  keywords: [
    "Omkar Suhas Surve",
    "Software Engineer",
    "Backend and Frontend Developer",
    "Full Stack Developer",
    "API Development",
    "Cloud Applications",
    "Web Developer",
    "App Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio"
  ],
  authors: [{ name: "Omkar Suhas Surve" }],
  creator: "Omkar Suhas Surve",
  openGraph: {
    title: "Omkar Suhas Surve | Full Stack Developer",
    description:
      "Portfolio of Omkar Suhas Surve – Full Stack Web & App Developer",
    url: "https://omkar-portfolio-five.vercel.app/",
    siteName: "Omkar Suhas Surve Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Omkar Suhas Surve Portfolio"
      }
    ],
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://omkar-portfolio-five.vercel.app/#person",
    name: "Omkar Suhas Surve",
    url: "https://omkar-portfolio-five.vercel.app/",
    jobTitle: "Full Stack Developer",
    image: "https://omkar-portfolio-five.vercel.app/og-image.png", // or better: a dedicated profile photo URL
    description:
      "Full Stack Developer specializing in React, Next.js, Django, FastAPI, Node.js, web and mobile applications.",
    knowsAbout: [
      "Web Development",
      "App Development",
      "Python",
      "Django",
      "FastAPI",
      "AI/ML",
      "LLMs",
      "RAG pipelines",
      "vector databases",
      "PostgreSQL",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "REST APIs"
      // feel free to expand
    ],
    sameAs: [
      "https://github.com/OmkarSurve07",     // ← replace
      "https://linkedin.com/in/omkar-surve/", // ← replace
      // add more: "https://twitter.com/...", "https://x.com/..."
    ],
    // optional but helpful additions:
    email: "mailto:omkarsuhassurve@gmail.com",
    nationality: { "@type": "Country", name: "India" },
  }

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body className="font-sans">
        {/* Structured data for the whole site (Person = you) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        {children}
      </body>
    </html>
  )
}
