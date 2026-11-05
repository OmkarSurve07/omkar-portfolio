import { Reveal } from "@/components/reveal"
import {
  ShieldCheck,
  Rocket,
  MessageCircle,
  Bot,
  CloudCog,
  Handshake,
} from "lucide-react"

const reasons = [
  {
    icon: Rocket,
    title: "End-to-end delivery",
    description: "Planning, build and deployment owned by one accountable partner.",
  },
  {
    icon: MessageCircle,
    title: "Clear communication",
    description: "Regular updates, honest timelines and quick answers.",
  },
  {
    icon: Bot,
    title: "AI expertise",
    description: "OpenAI, LangChain, RAG and automation applied pragmatically.",
  },
  {
    icon: ShieldCheck,
    title: "Production-ready code",
    description: "Secure APIs, authentication and architecture that scales.",
  },
  {
    icon: CloudCog,
    title: "Deployment & DevOps",
    description: "AWS, Docker and Vercel with repeatable release pipelines.",
  },
  {
    icon: Handshake,
    title: "Reliable support",
    description: "Maintenance, improvements and long-term collaboration.",
  },
]

export function WhyWorkWithMe() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <Reveal>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              Why me
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Good code.{" "}
              <span className="text-muted-foreground">Zero drama.</span>
            </h2>
            <p className="mt-4 max-w-sm text-muted-foreground">
              A dependable development partner for teams that value clarity,
              maintainability and delivery without the usual overhead.
            </p>
          </Reveal>

          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {reasons.map((item, index) => (
              <Reveal key={item.title} delay={55 * index}>
                <div className="group flex gap-3.5">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-card text-primary transition-transform duration-300 ease-bounce group-hover:-translate-y-0.5 group-hover:scale-105">
                    <item.icon className="size-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
