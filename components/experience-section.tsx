import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Atishay LTD",
      location: "Mumbai, Maharashtra",
      period: "May 2024 - Present",
      description:
        "Currently working as a Backend Developer, focusing on scalable backend solutions and API development using modern Python frameworks.",
      technologies: ["Python", "Django", "FastAPI", "PostgreSQL", "REST APIs", "React", "JavaScript"],
    },
    {
      title: "Backend Developer",
      company: "Asmita Patel Global School of Trading",
      location: "Mumbai, Maharashtra",
      period: "Sept 2022 - May 2024",
      description:
        "Experienced Backend Developer proficient in Python, Django, and FastAPI, specializing in creating secure APIs with JWT token-based authentication. Skilled in data analysis and visualization using Pandas and Tableau.",
      technologies: [
        "Python",
        "Django",
        "FastAPI",
        "PostgreSQL",
        "MongoDB",
        "JWT",
        "Pandas",
        "Tableau",
        "React",
        "JavaScript",
      ],
    },
    {
      title: "Python Developer and LLM & GenAI Specialist",
      company: "Squid Software Technology Pvt. Ltd.",
      location: "Mumbai, Maharashtra",
      period: "Sept 2021 - Sept 2022",
      description:
        "Built high-performance synchronous and asynchronous APIs using Django and FastAPI. Integrated LLMs like GPT-4 for translation, transcription, and chatbot development. Developed RAG pipelines and vector-based search solutions.",
      technologies: [
        "Python",
        "Django",
        "FastAPI",
        "LLM",
        "RAG",
        "VectorDB",
        "AWS",
        "OpenAI",
        "Langchain",
        "React",
        "JavaScript",
      ],
    },
    {
      title: "Software Developer",
      company: "Ajackus LLP",
      location: "Mumbai, Maharashtra",
      period: "Jun 2021 - Aug 2021",
      description:
        "Developed applications using Python, Django, FastAPI, JSON, and jQuery. Utilized Django forms, templates, and ORM for seamless database communication with PostgreSQL.",
      technologies: ["Python", "Django", "FastAPI", "PostgreSQL", "jQuery", "JSON", "HTML", "CSS"],
    },
    {
      title: "Associate Software Developer (Freelance)",
      company: "Digiskull",
      location: "Mumbai, Maharashtra",
      period: "Feb 2021 - Jun 2021",
      description:
        "Developed and maintained an e-commerce website using Shopify, Liquid language, JSON, JavaScript, HTML, CSS, and GIT. Implemented low-code concepts enabling clients to self-maintain the website.",
      technologies: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS", "JSON", "Git"],
    },
    {
      title: "Technical Support Engineer Level 2",
      company: "Wipro Limited",
      location: "Mumbai, Maharashtra",
      period: "Jan 2020 - Feb 2021",
      description:
        "Diagnosed and resolved software and hardware issues efficiently. Tracked computer system issues to resolution within specified time limits. Leveraged internal databases and external sources for accurate tech solutions.",
      technologies: ["Technical Support", "Hardware Troubleshooting", "Software Debugging", "Database Management"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl text-center mb-12">
            Professional Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-xl font-semibold">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium text-primary">{exp.company}</span>
                    <span>• {exp.location}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
