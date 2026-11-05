import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
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

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://omkar-portfolio-five.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  verification: {
    google: "7I-iDWiHIQM8JKqwxtejOcT77a21BCFCjY_M4yzpnYM",
  },

  title: {
    default:
      "Omkar Surve | Full Stack, AI & Backend Developer for Agencies & Startups",
    template: "%s | Omkar Surve",
  },
  description:
    "Omkar Suhas Surve is a Full Stack, AI and Backend Developer who partners with digital, branding, web, SEO and social agencies, IT consultancies and startups to deliver web & mobile apps, custom software, CRM/ERP, AI & GenAI solutions, automation, SaaS MVPs, API integrations and cloud deployment.",
  applicationName: "Omkar Surve Portfolio",
  keywords: [
    "Omkar Suhas Surve",
    "Full Stack Developer",
    "AI Developer",
    "Backend Developer",
    "freelance developer for agencies",
    "white label development partner",
    "outsourced web development",
    "outsourced app development",
    "software development partner India",
    "digital marketing agency developer",
    "branding agency development partner",
    "web design agency developer",
    "SEO agency technical partner",
    "IT outsourcing partner",
    "startup MVP developer",
    "custom software development",
    "CRM development",
    "ERP development",
    "AI and GenAI solutions",
    "automation and digital transformation",
    "SaaS product development",
    "API integration services",
    "cloud deployment DevOps",
    "React developer",
    "Next.js developer",
    "Django developer",
    "FastAPI developer",
    "Python developer",
    "Mumbai developer",
  ],
  authors: [{ name: "Omkar Suhas Surve", url: siteUrl }],
  creator: "Omkar Suhas Surve",
  publisher: "Omkar Suhas Surve",
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Omkar Surve | Full Stack, AI & Backend Developer",
    description:
      "Development partner for agencies, consultancies and startups — web & mobile apps, custom software, CRM/ERP, AI & automation, SaaS MVPs, integrations and DevOps.",
    url: siteUrl,
    siteName: "Omkar Surve Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Omkar Surve — Full Stack, AI and Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omkar Surve | Full Stack, AI & Backend Developer",
    description:
      "Development partner for agencies, consultancies and startups. Web & mobile apps, custom software, CRM/ERP, AI & automation, SaaS MVPs, integrations and DevOps.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfcf9" },
    { media: "(prefers-color-scheme: dark)", color: "#1b2b22" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Omkar Suhas Surve",
        url: siteUrl,
        jobTitle: "Full Stack, AI & Backend Developer",
        image: `${siteUrl}/og-image.png`,
        description:
          "Full Stack, AI and Backend Developer partnering with agencies, consultancies and startups to deliver web and mobile applications, custom software, CRM/ERP, AI & GenAI solutions, automation, SaaS MVPs, API integrations and cloud deployment.",
        email: "mailto:omkarsuhassurve@gmail.com",
        telephone: "+91-9619655282",
        nationality: { "@type": "Country", name: "India" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        knowsAbout: [
          "Full Stack Development",
          "AI and GenAI Solutions",
          "Backend Development",
          "Web Applications",
          "Mobile Applications",
          "Custom Software",
          "CRM and ERP Development",
          "Automation and Digital Transformation",
          "SaaS and MVP Development",
          "API and System Integrations",
          "Cloud and DevOps",
          "React",
          "Next.js",
          "TypeScript",
          "Python",
          "Django",
          "FastAPI",
          "Node.js",
          "PostgreSQL",
          "LLMs",
          "RAG pipelines",
        ],
        sameAs: [
          "https://github.com/OmkarSurve07",
          "https://www.linkedin.com/in/omkar-surve/",
          "https://www.hackerrank.com/profile/OmkarSurve07",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: "Omkar Surve — Full Stack & AI Development Partner",
        url: siteUrl,
        image: `${siteUrl}/og-image.png`,
        description:
          "Freelance and white-label development partner for digital marketing, branding, advertising, web design, SEO and social media agencies, business and IT consultancies, software companies and startups.",
        founder: { "@id": `${siteUrl}/#person` },
        email: "mailto:omkarsuhassurve@gmail.com",
        telephone: "+91-9619655282",
        priceRange: "$$",
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "Place", name: "Worldwide (remote)" },
        ],
        knowsAbout: [
          "Digital marketing agencies",
          "Branding and advertising agencies",
          "Web design and SEO agencies",
          "Social media agencies",
          "Business and management consultants",
          "Startup and product consultants",
          "IT and software companies",
          "Freelance designers and marketers",
          "Startups and product teams",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Development services",
          itemListElement: [
            ["Web & Mobile Applications", "React, Next.js and cross-platform mobile applications."],
            ["Custom Software, CRM & ERP", "Tailored internal tools and business systems."],
            ["AI & GenAI Solutions", "LLM features, RAG pipelines, agents and intelligent assistants."],
            ["Automation & Digital Transformation", "Workflow automation and process digitisation."],
            ["SaaS, MVP & Product Development", "From validated idea to launched product."],
            ["API & System Integrations", "Payments, WhatsApp, CRMs, Google and third-party APIs."],
            ["Existing Product Enhancement", "Performance, refactors and feature expansion."],
            ["Cloud, Deployment & DevOps", "AWS, Docker, CI/CD and managed releases."],
          ].map(([name, description]) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name,
              description,
              provider: { "@id": `${siteUrl}/#service` },
              areaServed: "Worldwide",
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Omkar Surve Portfolio",
        description:
          "Portfolio and service overview of Omkar Surve, a full stack, AI and backend developer for agencies and startups.",
        publisher: { "@id": `${siteUrl}/#person` },
        inLanguage: "en",
      },
    ],
  }

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
