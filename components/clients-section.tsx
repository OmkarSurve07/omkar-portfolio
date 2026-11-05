"use client"

import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import {
  ArrowUpRight,
  Check,
  Building2,
  Megaphone,
  Palette,
  Search,
  Users,
  Briefcase,
} from "lucide-react"

const partners = [
  {
    icon: Megaphone,
    title: "Marketing, branding & advertising agencies",
    note: "Digital marketing, brand, creative and social media teams.",
  },
  {
    icon: Palette,
    title: "Web design & SEO agencies",
    note: "Design studios and search teams needing reliable builds.",
  },
  {
    icon: Briefcase,
    title: "Business, startup & IT consultants",
    note: "Management, product and technology advisors.",
  },
  {
    icon: Users,
    title: "Freelance designers & marketers",
    note: "Independent specialists who need a development partner.",
  },
  {
    icon: Building2,
    title: "Software & outsourcing companies",
    note: "Web development firms and IT teams needing extra capacity.",
  },
  {
    icon: Search,
    title: "Startup & product ecosystem",
    note: "Founders, product consultants and early-stage teams.",
  },
]

const deliverables = [
  "Web & Mobile Applications",
  "Custom Software / CRM / ERP",
  "AI & GenAI Solutions",
  "Automation & Digital Transformation",
  "SaaS / MVP / Product Development",
  "API & System Integrations",
  "Existing Product Enhancement",
  "Cloud / Deployment / DevOps",
]

export function ClientsSection() {
  return (
    <section id="clients" className="relative bg-muted/40 py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-10 max-w-2xl">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              For agencies &amp; consultants
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Your delivery partner{" "}
              <span className="text-muted-foreground">behind the scenes.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              When a client needs an app, website, CRM, automation or AI solution, you
              need someone who can scope it, build it and support it. I work as a
              white-label development partner so you can say yes with confidence.
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-card p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold">
                    Who I work with
                  </h3>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-primary">
                    Partner network
                  </span>
                </div>

                <div className="mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                  {partners.map((partner) => (
                    <div key={partner.title} className="flex gap-3">
                      <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-muted text-primary">
                        <partner.icon className="size-4" />
                      </span>
                      <div>
                        <p className="text-sm font-medium leading-snug">{partner.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                          {partner.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl bg-primary/[0.04] p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">
                      You bring the client relationship.
                    </span>{" "}
                    I bring scoping, engineering, deployment and support — under your
                    brand, on your timeline.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-7">
                <h3 className="font-display text-lg font-semibold">What I can handle</h3>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm">
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                        <Check className="size-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-border pt-5">
                  <Button
                    className="group h-11 w-full rounded-full transition-transform duration-300 ease-bounce hover:-translate-y-0.5 active:scale-[0.98]"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Discuss a partnership
                    <ArrowUpRight className="size-4 transition-transform duration-300 ease-bounce group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Button>
                  <p className="mt-3 text-center text-[11px] text-muted-foreground">
                    NDAs welcome · White-label friendly · Remote worldwide
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
