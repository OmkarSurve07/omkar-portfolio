import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/reveal"
import { SpotlightCard } from "@/components/spotlight-card"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import { ProjectDemoDialog } from "@/components/project-demo-dialog"

type Screenshot = {
  image: string
  title: string
}

type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  demoType: "live" | "gallery"
  liveUrl?: string
  screenshots?: Screenshot[]
}

const projects: Project[] = [
  {
    title: "Y2J Money Tree Platform",
    description:
      "Financial platform built with JavaScript and Velo for comprehensive money management and investment tracking, with interactive dashboards.",
    image: "/financial-platform-interface.png",
    technologies: ["JavaScript", "Velo", "Wix", "HTML", "CSS", "API Integration"],
    demoType: "live",
    liveUrl: "https://www.y2jmoneytree.in/",
  },
  {
    title: "Ankur Mental Health",
    description:
      "A calm, trust-centric web experience for a multidisciplinary mental health practice in South Mumbai and Thane.",
    image: "/ankur-mental-health-care.png",
    technologies: ["JavaScript", "ReactJS", "HTML", "CSS", "API Integrations"],
    demoType: "live",
    liveUrl: "https://ankurmentalhealth.com/",
  },
  {
    title: "Rushabhayan Conference Platform",
    description:
      "International conference and art forum website showcasing India's civilizational roots, with a content-rich editorial layout.",
    image: "/rushabhayan-website.png",
    technologies: ["Wix", "Velo", "JavaScript"],
    demoType: "live",
    liveUrl: "https://rushabhayan.org/",
  },
  {
    title: "Dream City Properties",
    description:
      "Modern real estate platform designed to simplify property discovery and legal assistance for buyers and sellers.",
    image: "/dream-city-properties.png",
    technologies: [
      "ReactJS",
      "JavaScript",
      "HTML",
      "CSS",
      "API Integration",
      "Responsive Design",
    ],
    demoType: "live",
    liveUrl: "https://dreamcityproperties.in/",
  },
  {
    title: "Trading Platform + LMS",
    description:
      "Educational trading platform pairing real-time market data with a full learning management system.",
    image: "/trading-education-platform.png",
    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "JWT",
      "REST API",
      "React",
      "Pandas",
    ],
    demoType: "gallery",
    screenshots: [
      { image: "/trading/login.png", title: "Login" },
      { image: "/trading/dashboard.png", title: "Dashboard" },
      { image: "/trading/courses.png", title: "Courses" },
      { image: "/trading/live-chart.png", title: "Live Chart" },
    ],
  },
  {
    title: "Global Marine Exports",
    description:
      "Enterprise mix-optimization platform for a global marine exports company — orders, samples and bulk uploads at scale.",
    image: "/global-marine-exports-dashboard.png",
    technologies: [
      "Python",
      "Django REST",
      "ReactJS",
      "PostgreSQL",
      "Pandas",
      "SciPy",
      "Celery",
      "Redis",
      "Docker",
      "AWS",
    ],
    demoType: "gallery",
    screenshots: [
      { image: "/gme/global-marine-exports-dashboard.png", title: "Dashboard" },
      { image: "/gme/all-orders.png", title: "Orders" },
      { image: "/gme/mix-engine.png", title: "Mix Optimization" },
      { image: "/gme/bulk-upload.png", title: "Bulk Upload" },
      { image: "/gme/all-samples.png", title: "Samples" },
    ],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
                Selected work
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Things I&apos;ve shipped
              </h2>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              A mix of live platforms, internal tools and full-stack products.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={(index % 2) * 70}>
                <SpotlightCard className="flex h-full flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-3 top-3 flex items-start justify-between">
                      <Badge className="rounded-full border border-border bg-card/90 font-mono text-[9px] font-normal uppercase tracking-wider text-foreground backdrop-blur">
                        {project.demoType === "live" ? "Live" : "Case study"}
                      </Badge>
                      <span className="font-mono text-[10px] text-foreground/50">
                        /{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-base font-semibold leading-snug transition-colors group-hover:text-primary sm:text-lg">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-bounce group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>

                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-muted px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="rounded-full bg-muted px-2 py-0.5 font-mono text-[9px] text-muted-foreground">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    <div className="mt-5">
                      {project.demoType === "live" ? (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="w-full rounded-full transition-transform duration-300 ease-bounce hover:-translate-y-0.5"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit live site
                            <ExternalLink className="size-3.5" />
                          </a>
                        </Button>
                      ) : (
                        <ProjectDemoDialog
                          title={project.title}
                          screenshots={project.screenshots ?? []}
                        />
                      )}
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
