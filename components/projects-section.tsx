import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { ProjectDemoDialog } from "@/components/project-demo-dialog";

type Screenshot = {
  image: string;
  title: string;
};

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  featured: boolean;

  demoType: "live" | "gallery";

  liveUrl?: string;
  screenshots?: Screenshot[];
};

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Y2J Money Tree Platform",
      description:
        "Financial platform built using JavaScript and Velo (Wix's proprietary language) for comprehensive money management and investment tracking with interactive user interfaces.",
      image: "/financial-platform-interface.png",
      technologies: ["JavaScript", "Velo", "Wix", "HTML", "CSS", "API Integration"],
      featured: true,

      demoType: "live",
      liveUrl: "https://www.y2jmoneytree.in/",
    },
    {
      title: "Ankur Mental Health – Therapy & Counselling Website",
      description:
        "A calm, trust-centric web experience for a multidisciplinary mental health practice in South Mumbai and Thane.",
      image: "/ankur-mental-health-care.png",
      technologies: ["JavaScript", "ReactJS", "HTML", "CSS", "API Integrations"],
      featured: true,

      demoType: "live",
      liveUrl: "https://ankurmentalhealth.com/",
    },
    {
      title: "Rushabhayan Conference Platform",
      description:
        "International conference and art forum website showcasing India's civilizational roots.",
      image: "/rushabhayan-website.png",
      technologies: ["Wix", "Velo", "JavaScript"],
      featured: true,

      demoType: "live",
      liveUrl: "https://rushabhayan.org/",
    },
    {
      title: "Dream City Properties",
      description:
        "Modern real estate platform designed to simplify property discovery and legal assistance.",
      image: "/dream-city-properties.png",
      technologies: [
        "ReactJS",
        "JavaScript",
        "HTML",
        "CSS",
        "API Integration",
        "Responsive Design",
      ],
      featured: true,

      demoType: "live",
      liveUrl: "https://dreamcityproperties.in/",
    },
    {
      title: "Trading Platform with Education & Learning Management System",
      description:
        "Educational trading platform with real-time data processing and LMS.",
      image: "/trading-education-platform.png",
      technologies: [
        "Python",
        "Django",
        "PostgreSQL",
        "JWT",
        "REST API",
        "React",
        "JavaScript",
        "Pandas",
      ],
      featured: true,

      demoType: "gallery",

      screenshots: [
        {
          image: "/trading/login.png",
          title: "Login"
        },
        {
          image: "/trading/dashboard.png",
          title: "Dashboard"
        },
        {
          image: "/trading/courses.png",
          title: "Courses"
        },
        {
          image: "/trading/live-chart.png",
          title: "Live Chart"
        }
      ]
    },
    {
      title: "Global Marine Exports – Mix Optimization Platform",
      description:
        "Enterprise web application developed for a global marine exports company.",
      image: "/global-marine-exports-dashboard.png",
      technologies: [
        "Python",
        "Django REST Framework",
        "ReactJS",
        "JavaScript",
        "PostgreSQL",
        "Pandas",
        "SciPy",
        "Celery",
        "Redis",
        "Docker",
        "AWS",
        "Git",
      ],
      featured: true,

      demoType: "gallery",

      screenshots: [
        {
          image: "/gme/global-marine-exports-dashboard.png",
          title: "Dashboard"
        },
        {
          image: "/gme/all-orders.png",
          title: "Orders"
        },
        {
          image: "/gme/mix-engine.png",
          title: "Mix Optimization"
        },
        {
          image: "/gme/bulk-upload.png",
          title: "Bulk Upload"
        },
        {
          image: "/gme/all-samples.png",
          title: "Samples"
        }
      ]
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

                    {project.demoType === "live" ? (

                      <Button asChild size="sm" className="flex-1">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>

                    ) : (

                      <ProjectDemoDialog
                        title={project.title}
                        screenshots={project.screenshots}
                      />

                    )}

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
