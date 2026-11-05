import { Reveal } from "@/components/reveal"
import { SpotlightCard } from "@/components/spotlight-card"
import {
  Code,
  Database,
  Brain,
  Cloud,
  Monitor,
  MapPin,
  CheckCircle2,
} from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Backend",
    description: "Python, Django and FastAPI — secure APIs and clean domain logic.",
  },
  {
    icon: Monitor,
    title: "Frontend",
    description: "React, Next.js and Tailwind — considered, fast interfaces.",
  },
  {
    icon: Brain,
    title: "AI/ML",
    description: "LLMs, RAG and agents integrated into real product workflows.",
  },
  {
    icon: Database,
    title: "Data",
    description: "PostgreSQL, MongoDB and vector databases, modelled properly.",
  },
  {
    icon: Cloud,
    title: "Cloud",
    description: "AWS, Docker and CI/CD — calm, repeatable releases.",
  },
]

const facts = [
  "4+ years building for real users",
  "15+ web, mobile and AI products shipped",
  "Comfortable owning delivery end to end",
  "Clear communication with agencies and clients",
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 max-w-2xl">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              About
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Engineer by trade.{" "}
              <span className="text-muted-foreground">Product thinker by habit.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Based in Mumbai, working with teams everywhere. I care about the whole
              product — not just the part that fits in a ticket.
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-card p-7 sm:p-8">
                <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                  <p>
                    I&apos;m{" "}
                    <strong className="font-medium text-foreground">Omkar Suhas Surve</strong>,
                    a developer who likes the full picture. On the backend I build with
                    Python, Django and FastAPI — secure APIs with real authentication,
                    background jobs and data models that stay clean as products grow. On
                    the frontend I work with React, Next.js, TypeScript and Tailwind.
                  </p>
                  <p>
                    In between sits the work I enjoy most:{" "}
                    <span className="text-foreground">AI features that actually ship</span>.
                    LLM integration, retrieval-augmented generation, vector search and
                    agents — treated like engineering, not magic. Grounded, evaluated and
                    observable.
                  </p>
                  <p>
                    I work well with agencies, consultancies and startup teams who need a
                    reliable development partner: someone who can take a brief, ask the
                    right questions and return something production-ready.
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-primary" /> Mumbai, India
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" /> Available for
                    freelance &amp; contract
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-primary/20 bg-primary/[0.035] p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                  At a glance
                </p>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-display text-3xl font-bold tracking-tight">4+</p>
                    <p className="mt-1 text-xs text-muted-foreground">Years building</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold tracking-tight">15+</p>
                    <p className="mt-1 text-xs text-muted-foreground">Products shipped</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 border-t border-primary/10 pt-5">
                  {facts.map((fact) => (
                    <li key={fact} className="flex gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={60 * index}>
                <SpotlightCard className="h-full">
                  <div className="p-5">
                    <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="size-4.5" />
                    </span>
                    <h3 className="mt-4 font-display text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
