"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Marquee } from "@/components/marquee"
import { Parallax } from "@/components/parallax"
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Bot,
  Braces,
  Server,
  Sparkles,
  MapPin,
} from "lucide-react"

const roles = ["Full Stack Developer", "AI Developer", "Backend Engineer"]

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Django",
  "FastAPI",
  "Node.js",
  "PostgreSQL",
  "LLMs",
  "RAG",
  "Docker",
  "AWS",
]

const pillars = [
  {
    icon: Braces,
    title: "Full Stack",
    detail: "React, Next.js and product-ready interfaces wired to real APIs.",
    stack: "Frontend · APIs · Delivery",
  },
  {
    icon: Bot,
    title: "AI Engineering",
    detail: "LLM features, RAG pipelines and agents that reach production.",
    stack: "LLMs · RAG · Agents",
  },
  {
    icon: Server,
    title: "Backend",
    detail: "Django, FastAPI and Node systems with data models that hold up.",
    stack: "Python · Data · Cloud",
  },
]

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [typed, setTyped] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = roles[roleIndex]
    const done = typed === target
    let delay = done ? 1800 : deleting ? 32 : 70

    const timer = setTimeout(() => {
      if (!deleting) {
        if (done) {
          setDeleting(true)
        } else {
          setTyped(target.slice(0, typed.length + 1))
        }
      } else if (typed.length === 0) {
        setDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      } else {
        setTyped(target.slice(0, typed.length - 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [typed, deleting, roleIndex])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pb-28 pt-28 sm:pt-32"
    >
      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
          {/* Copy */}
          <div>
            <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                Available for new projects
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5" />
                Mumbai, India · Remote
              </span>
            </div>

            <h1 className="text-balance font-display text-[clamp(2.6rem,5.6vw,4.4rem)] font-bold leading-[1.02] tracking-[-0.035em]">
              Digital products,{" "}
              <span className="text-gradient">built end to end.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m <span className="font-medium text-foreground">Omkar Surve</span> — a full
              stack, AI and backend developer. I partner with agencies, consultancies and
              startups to ship web and mobile apps, custom software, AI features and the
              systems that keep them running.
            </p>

            <div className="mt-5 flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <Sparkles className="size-4 text-primary" />
              <span className="sr-only">Current role:</span>
              <span className="text-foreground">{typed}</span>
              <span className="inline-block h-4 w-[2px] animate-blink bg-primary" />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                onClick={() => scrollTo("projects")}
                className="group h-11 rounded-full px-6 transition-transform duration-300 ease-bounce hover:-translate-y-0.5 active:scale-[0.98]"
              >
                View my work
                <ArrowRight className="size-4 transition-transform duration-300 ease-bounce group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("contact")}
                className="h-11 rounded-full border-border px-6 transition-transform duration-300 ease-bounce hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Start a project
                <ArrowUpRight className="size-4" />
              </Button>

              <div className="ml-1 flex items-center gap-1">
                {[
                  { href: "https://github.com/OmkarSurve07", icon: Github, label: "GitHub" },
                  {
                    href: "https://www.linkedin.com/in/omkar-surve/",
                    icon: Linkedin,
                    label: "LinkedIn",
                  },
                  { href: "mailto:omkarsuhassurve@gmail.com", icon: Mail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <Button
                    key={label}
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-muted-foreground transition-transform duration-300 ease-bounce hover:-translate-y-0.5 hover:text-primary"
                    asChild
                  >
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon className="size-[18px]" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
              {[
                { value: "4+", label: "Years experience" },
                { value: "15+", label: "Products shipped" },
                { value: "4★", label: "HackerRank" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold tracking-tight">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual */}
          <Parallax speed={0.035} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div className="absolute inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-transparent to-accent/15 blur-2xl" />

              <div className="rounded-3xl border border-border bg-card p-6 shadow-[0_30px_80px_-50px_rgba(20,60,40,0.4)] sm:p-7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-2xl bg-primary font-display text-base font-bold text-primary-foreground">
                      OS
                    </span>
                    <div>
                      <p className="font-display text-sm font-semibold">Omkar Surve</p>
                      <p className="text-xs text-muted-foreground">Product engineer</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                    Open
                  </span>
                </div>

                <div className="my-6 h-px bg-border" />

                <div className="space-y-4">
                  {pillars.map((pillar) => (
                    <div key={pillar.title} className="group flex gap-3.5">
                      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl border border-border bg-background text-primary transition-transform duration-300 ease-bounce group-hover:-rotate-6 group-hover:scale-105">
                        <pillar.icon className="size-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                          <p className="font-display text-sm font-semibold">{pillar.title}</p>
                          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                            {pillar.stack}
                          </p>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {pillar.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-muted/60 px-4 py-3">
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">Currently:</span> building
                    AI-native products and long-term development partnerships.
                  </p>
                </div>
              </div>

            </div>
          </Parallax>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-y border-border/70 bg-card/50 py-2.5">
        <Marquee>
          {stack.map((item) => (
            <span
              key={item}
              className="mx-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
            >
              <span className="size-1 rounded-full bg-primary/40" />
              {item}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
