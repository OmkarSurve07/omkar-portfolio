import { Reveal } from "@/components/reveal"
import { SpotlightCard } from "@/components/spotlight-card"
import { Bot, Code2, Globe, Cloud, PlugZap, Wrench } from "lucide-react"

const services = [
  {
    title: "AI & GenAI Solutions",
    icon: Bot,
    description:
      "LLM features, RAG, agents, embeddings and intelligent automation built into real products.",
    tags: ["RAG", "Agents", "OpenAI"],
  },
  {
    title: "Backend Development",
    icon: Code2,
    description:
      "Scalable APIs with Python, Django, FastAPI and Node.js, plus authentication and database design.",
    tags: ["Django", "FastAPI", "REST"],
  },
  {
    title: "Web & Mobile Apps",
    icon: Globe,
    description:
      "Modern websites, admin dashboards and mobile-ready experiences with React and Next.js.",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description:
      "Deployment and management on AWS, Docker, Railway, Vercel and DigitalOcean with CI/CD.",
    tags: ["AWS", "Docker", "CI/CD"],
  },
  {
    title: "API & Integrations",
    icon: PlugZap,
    description:
      "Payment gateways, Google Sheets, WhatsApp, email and third-party APIs wired reliably.",
    tags: ["Payments", "WhatsApp", "Webhooks"],
  },
  {
    title: "Enhancement & Support",
    icon: Wrench,
    description:
      "Performance work, feature expansion, bug fixes and long-term maintenance for existing products.",
    tags: ["Perf", "Fixes", "Support"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
                Services
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                What I build
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Available for direct projects and as a white-label development partner
              for agencies and consultancies.
            </p>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={50 * index}>
                <SpotlightCard className="h-full">
                  <div className="flex h-full flex-col p-6">
                    <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 ease-bounce group-hover:-translate-y-0.5 group-hover:scale-105">
                      <service.icon className="size-4.5" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-4">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
