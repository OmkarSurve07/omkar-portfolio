import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Bot,
  Code2,
  Globe,
  Cloud,
  PlugZap,
  Wrench,
} from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "AI & LLM Development",
      icon: Bot,
      description:
        "Build AI-powered applications using OpenAI, LangChain, RAG, AI Agents, embeddings, and intelligent automation.",
    },
    {
      title: "Backend Development",
      icon: Code2,
      description:
        "Scalable backend development using Python, Django, FastAPI, REST APIs, authentication, and database design.",
    },
    {
      title: "Web Development",
      icon: Globe,
      description:
        "Modern responsive websites and admin dashboards using React, Next.js, Tailwind CSS, and JavaScript.",
    },
    {
      title: "Cloud Deployment",
      icon: Cloud,
      description:
        "Deploy applications using AWS, Docker, Railway, Vercel, DigitalOcean, and CI/CD pipelines.",
    },
    {
      title: "API Integration",
      icon: PlugZap,
      description:
        "Integrate payment gateways, Google Sheets API, WhatsApp API, Email services, and third-party APIs.",
    },
    {
      title: "Maintenance & Support",
      icon: Wrench,
      description:
        "Ongoing maintenance, performance optimization, bug fixes, feature enhancements, and technical support.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold">
            Services
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Helping businesses build scalable web applications, AI-powered
            products, and reliable backend systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>

                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">

                  <service.icon className="w-7 h-7 text-primary" />

                </div>

                <CardTitle>{service.title}</CardTitle>

              </CardHeader>

              <CardContent>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

              </CardContent>
            </Card>
          ))}

        </div>
      </div>
    </section>
  )
}