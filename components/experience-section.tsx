"use client"

import { useState } from "react"
import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Bot, Code2, ServerCog, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const tracks = [
  {
    id: "full-stack",
    title: "Full Stack Developer",
    icon: Code2,
    period: "2021 — Present",
    tagline: "Design → code → deploy → iterate.",
    summary:
      "I own the whole slice: interface, API contract, data model and deployment. Fewer hand-offs, faster feedback and products that feel cohesive from the first screen to the last query.",
    bullets: [
      "Production interfaces in React, Next.js, TypeScript and Tailwind — accessible and fast.",
      "End-to-end feature delivery: auth, dashboards, payments, file pipelines and admin tooling.",
      "Performance and SEO discipline — server components, caching and Core Web Vitals.",
      "Reusable design systems that keep products consistent as they grow.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "REST", "Vercel"],
    stats: [
      { value: "15+", label: "products shipped" },
      { value: "E2E", label: "ownership" },
      { value: "1.1s", label: "typical LCP" },
    ],
  },
  {
    id: "ai",
    title: "AI Developer",
    icon: Bot,
    period: "2023 — Present",
    tagline: "LLMs that survive production.",
    summary:
      "I build AI features that are grounded, observable and useful — not demos. RAG pipelines, tool-calling agents, embeddings and evaluation loops wired into real product workflows.",
    bullets: [
      "Retrieval-augmented generation over private knowledge bases with vector search.",
      "Agentic workflows with tool calling, structured outputs and safe fallbacks.",
      "Prompt design, evaluation and guardrails so quality is measurable.",
      "LLM-powered automation for documents, assistants and content pipelines.",
    ],
    stack: ["OpenAI", "LangChain", "RAG", "Vector DB", "Embeddings", "Python", "FastAPI"],
    stats: [
      { value: "RAG", label: "grounded answers" },
      { value: "Agents", label: "tool calling" },
      { value: "Evals", label: "quality loops" },
    ],
  },
  {
    id: "backend",
    title: "Backend Developer",
    icon: ServerCog,
    period: "2021 — Present",
    tagline: "APIs and data that hold up.",
    summary:
      "The backend is where products earn trust. I design APIs, schemas and background jobs that stay predictable under load — secure by default and easy for the next engineer.",
    bullets: [
      "REST APIs with Django, Django REST Framework, FastAPI and Node.js.",
      "JWT and role-based authentication, permission boundaries and secure data handling.",
      "PostgreSQL and MongoDB schema design, query tuning, migrations and ORM discipline.",
      "Async workloads with Celery and Redis, containerised with Docker on AWS.",
    ],
    stack: ["Python", "Django", "FastAPI", "PostgreSQL", "Celery", "Redis", "Docker", "AWS"],
    stats: [
      { value: "99.9%", label: "API uptime" },
      { value: "JWT", label: "auth by default" },
      { value: "Docker", label: "repeatable deploys" },
    ],
  },
] as const

const milestones = [
  { year: "2021", title: "Started shipping for real users", note: "Web platforms & dashboards" },
  { year: "2023", title: "Went deep on AI engineering", note: "LLMs, RAG & automation" },
  { year: "2024", title: "Scaled into product ownership", note: "Full-stack delivery end to end" },
  { year: "Now", title: "Building AI-native products", note: "Open to new collaborations" },
]

export function ExperienceSection() {
  const [active, setActive] = useState(0)
  const track = tracks[active]
  const Icon = track.icon

  return (
    <section id="experience" className="relative bg-muted/40 py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-10 max-w-2xl">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              Experience
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Three disciplines.{" "}
              <span className="text-muted-foreground">One engineer.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Most teams need a frontend hire, an AI specialist and a backend engineer.
              I work across all three — which is why I can take a rough idea and turn it
              into something real, deployed and maintainable.
            </p>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="flex flex-col gap-2.5">
              {tracks.map((item, index) => {
                const ItemIcon = item.icon
                const isActive = index === active
                return (
                  <button
                    key={item.id}
                    onClick={() => setActive(index)}
                    className={cn(
                      "bouncy rounded-xl border p-4 text-left",
                      isActive
                        ? "border-primary/30 bg-card shadow-[0_10px_30px_-24px_rgba(20,60,40,0.5)]"
                        : "border-transparent bg-transparent hover:border-border hover:bg-card/60"
                    )}
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        className={cn(
                          "grid size-10 shrink-0 place-items-center rounded-xl border transition-colors",
                          isActive
                            ? "border-primary/20 bg-primary/10 text-primary"
                            : "border-border bg-card text-muted-foreground"
                        )}
                      >
                        <ItemIcon className="size-4.5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-3">
                          <h3 className="font-display text-base font-semibold">
                            {item.title}
                          </h3>
                          <span className="hidden font-mono text-[9px] uppercase tracking-wider text-muted-foreground sm:block">
                            {item.period}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{item.tagline}</p>
                      </div>
                    </div>
                  </button>
                )
              })}

              <div className="mt-1 flex items-center justify-between rounded-xl border border-dashed border-border px-4 py-3">
                <p className="text-xs text-muted-foreground">
                  Full time · Freelance · Contract
                </p>
                <Button
                  variant="link"
                  className="h-auto p-0 text-xs"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Hire me <ArrowUpRight className="size-3.5" />
                </Button>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 sm:p-8">
                <div
                  key={track.id}
                  className="animate-in fade-in-0 slide-in-from-bottom-2 duration-400"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                        {track.period}
                      </p>
                      <h3 className="font-display text-lg font-semibold">{track.title}</h3>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    {track.summary}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {track.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                          <Check className="size-3" />
                        </span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {track.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="rounded-full border-border bg-background font-mono text-[10px] font-normal uppercase tracking-wider text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-3 divide-x divide-border rounded-xl bg-muted/50">
                    {track.stats.map((stat) => (
                      <div key={stat.label} className="px-3 py-3 text-center">
                        <p className="font-display text-base font-bold text-primary">
                          {stat.value}
                        </p>
                        <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={60} className="mt-12">
            <div className="grid gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {milestones.map((milestone) => (
                <div key={milestone.year}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                    {milestone.year}
                  </p>
                  <p className="mt-2 font-display text-sm font-semibold leading-snug">
                    {milestone.title}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{milestone.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
