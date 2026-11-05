import { Reveal } from "@/components/reveal"
import { GraduationCap, MapPin } from "lucide-react"

const education = [
  {
    degree: "Master of Science in Information Technology",
    institution: "Kishinchand Chellaram College",
    university: "University of Mumbai",
    location: "Mumbai, Maharashtra",
    period: "2019 — 2021",
    description:
      "Focused on web development and software engineering, with hands-on projects across modern technologies.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Guru Nanak Khalsa College",
    university: "University of Mumbai",
    location: "Mumbai, Maharashtra",
    period: "2016 — 2019",
    description:
      "Built a comprehensive foundation in computer science, web development and practical application engineering.",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="relative py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <Reveal>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              Education
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              The foundation
            </h2>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Formal computer science training in Mumbai — then a lot of shipping to
              make it useful.
            </p>
          </Reveal>

          <div className="space-y-4 border-l border-border pl-6 sm:pl-8">
            {education.map((edu, index) => (
              <Reveal key={edu.degree} delay={80 * index}>
                <div className="relative rounded-2xl border border-border bg-card p-5 sm:p-6">
                  <span className="absolute -left-[38px] top-6 grid size-8 place-items-center rounded-full border border-border bg-background text-primary sm:-left-[46px]">
                    <GraduationCap className="size-4" />
                  </span>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                      <MapPin className="size-3" /> {edu.location}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-base font-semibold leading-snug sm:text-lg">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{edu.institution}</span> ·{" "}
                    {edu.university}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {edu.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
