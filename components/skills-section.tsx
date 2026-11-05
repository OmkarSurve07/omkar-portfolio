import { Reveal } from "@/components/reveal"
import { SpotlightCard } from "@/components/spotlight-card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Wrench, Trophy, FileText } from "lucide-react"

const skillCategories = [
  {
    title: "Backend Development",
    icon: Code,
    skills: ["Python", "Django", "FastAPI", "Node.js", "REST APIs", "JWT Auth"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "VectorDB", "SQL", "ORM", "Redis"],
  },
  {
    title: "AI & Cloud",
    icon: Cloud,
    skills: ["LLM Integration", "RAG Pipelines", "LangChain", "AWS", "Docker", "CI/CD"],
  },
  {
    title: "Frontend & Tools",
    icon: Wrench,
    skills: ["TypeScript", "React.js", "Next.js", "Tailwind", "Figma", "Postman"],
  },
]

const achievements = [
  {
    icon: Trophy,
    title: "4★ HackerRank Coder",
    description: "Strong problem-solving track record in competitive coding.",
    link: "https://www.hackerrank.com/profile/OmkarSurve07",
  },
  {
    icon: FileText,
    title: "Research Publication",
    description:
      "Sentiment analysis using machine learning — IX International Media Summit.",
    link: "#",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative bg-muted/40 py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-10 max-w-2xl">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              Skills
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              The stack under the hood
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tools I reach for daily — chosen for reliability, speed and how well they
              get out of the way.
            </p>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <Reveal key={category.title} delay={50 * index}>
                <SpotlightCard className="h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                        <category.icon className="size-4" />
                      </span>
                      <h3 className="font-display text-sm font-semibold">
                        {category.title}
                      </h3>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[10px] text-muted-foreground transition-colors duration-300 hover:border-primary/30 hover:text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {achievements.map((achievement) => (
              <Reveal key={achievement.title}>
                <a
                  href={achievement.link}
                  target={achievement.link.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 card-hover"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 ease-bounce group-hover:-rotate-6">
                    <achievement.icon className="size-4.5" />
                  </span>
                  <div>
                    <Badge
                      variant="outline"
                      className="mb-1.5 rounded-full border-border font-mono text-[9px] font-normal uppercase tracking-wider text-muted-foreground"
                    >
                      {achievement.icon === Trophy ? "Achievement" : "Research"}
                    </Badge>
                    <h3 className="font-display text-sm font-semibold transition-colors group-hover:text-primary">
                      {achievement.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
