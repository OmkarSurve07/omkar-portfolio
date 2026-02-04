import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Brain, Cloud, Monitor  } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Backend Development",
      description: "Expert in Python, Django, and FastAPI for building robust APIs",
    },
    {
      icon: Monitor,
      title: "Frontend Development",
      description: "Skilled in React, Next.js, Tailwind, and Material UI for modern UIs",
    },
    {
      icon: Brain,
      title: "AI/ML Specialist",
      description: "LLM integration, RAG pipelines, and intelligent automation",
    },
    {
      icon: Database,
      title: "Database Expert",
      description: "PostgreSQL, MongoDB, and VectorDB for efficient data management",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "AWS deployment and scalable cloud architecture",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I am <strong>Omkar Suhas Surve</strong> Software Engineer with expertise in both backend and frontend technologies. 
                On the backend, I work with Python, Django, and FastAPI to build secure, scalable APIs with JWT authentication. 
                On the frontend, I create modern, responsive UIs using React, Next.js, Tailwind CSS, and Material UI.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                My journey also includes working with cutting-edge AI/ML technologies such as LLMs, RAG pipelines, 
                and vector databases to build intelligent systems. I believe in continuous learning and staying 
                up-to-date with modern development practices.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Based in Mumbai, Maharashtra, I'm passionate about building applications that merge 
                robust backend systems with seamless frontend experiences, delivering complete end-to-end solutions.
              </p>
            </div>

            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Code className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-medium">Full-Stack Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
