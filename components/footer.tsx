"use client"

import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
                Omkar Surve
              </p>
              <p className="mt-3 max-w-md font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                Let&apos;s make something{" "}
                <span className="text-muted-foreground">worth shipping.</span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              {[
                { href: "https://github.com/OmkarSurve07", icon: Github, label: "GitHub" },
                {
                  href: "https://www.linkedin.com/in/omkar-surve/",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                { href: "mailto:omkarsuhassurve@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 ease-bounce hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                className="ml-1 grid size-9 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 ease-bounce hover:-translate-y-0.5"
              >
                <ArrowUp className="size-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
            <p className="flex flex-wrap items-center gap-1">
              © {year} Omkar Suhas Surve · Built with
              <Heart className="size-3 fill-primary text-primary" /> and far too much coffee
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em]">
              Next.js · Tailwind · TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
