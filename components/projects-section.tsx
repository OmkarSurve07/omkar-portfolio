import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Y2J Money Tree Platform",
      description:
        "Financial platform built using JavaScript and Velo (Wix's proprietary language) for comprehensive money management and investment tracking with interactive user interfaces.",
      image: "/financial-platform-interface.png",
      technologies: ["JavaScript", "Velo", "Wix", "HTML", "CSS", "API Integration"],
      liveUrl: "https://www.y2jmoneytree.in/",
      featured: true,
    },
    {
      title: "Smeltt E-commerce Platform",
      description:
        "Comprehensive e-commerce website using Shopify with custom Liquid templates, JavaScript functionality, and responsive design. Implemented low-code concepts for client self-maintenance.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS", "React", "JSON"],
      liveUrl: "https://smeltt.com/",
      featured: true,
    },
    {
      title: "HR Nexby AI Recruiter",
      description:
        "AI-powered recruitment platform with LLM integration for intelligent candidate screening, resume analysis, and automated interview scheduling with modern React frontend.",
      image: "/ai-recruitment-dashboard.png",
      technologies: ["Python", "FastAPI", "LLM", "RAG", "VectorDB", "React", "JavaScript", "PostgreSQL"],
      liveUrl: "https://hr.nexby.ai/",
      featured: true,
    },
    {
      title: "Nexby AI Expo Platform",
      description:
        "Comprehensive AI showcase platform demonstrating various AI capabilities including natural language processing and machine learning models with interactive React components.",
      image: "/ai-showcase-platform.png",
      technologies: ["Python", "Django", "AI/ML", "PostgreSQL", "React", "JavaScript", "Material-UI"],
      liveUrl: "https://expo.nexby.ai/",
      featured: true,
    },
    {
      title: "Asmita Patel Trading Platform",
      description:
        "Educational trading platform with real-time data processing, user management, and comprehensive learning management system featuring modern frontend interfaces.",
      image: "/trading-education-platform.png",
      technologies: ["Python", "Django", "PostgreSQL", "JWT", "REST API", "React", "JavaScript", "Pandas"],
      liveUrl: "https://www.asmitapatel.com/",
      featured: true,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl text-center mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Featured</Badge>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button asChild size="sm" className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
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
