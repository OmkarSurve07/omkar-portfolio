import { Card, CardContent } from "@/components/ui/card"
import {
  ShieldCheck,
  Rocket,
  MessageCircle,
  Bot,
  CloudCog,
  Handshake,
} from "lucide-react"

export function WhyWorkWithMe() {
  const reasons = [
    {
      icon: Rocket,
      title: "End-to-End Development",
      description:
        "From planning and architecture to deployment and long-term support.",
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description:
        "Regular updates, transparent timelines, and quick responses throughout the project.",
    },
    {
      icon: Bot,
      title: "AI Expertise",
      description:
        "Specialized in OpenAI, LangChain, RAG pipelines, AI Agents, and workflow automation.",
    },
    {
      icon: ShieldCheck,
      title: "Production-Ready Code",
      description:
        "Clean architecture, secure APIs, authentication, and scalable backend systems.",
    },
    {
      icon: CloudCog,
      title: "Deployment & DevOps",
      description:
        "Deploy and manage applications on AWS, Railway, Docker, and Vercel.",
    },
    {
      icon: Handshake,
      title: "Reliable Support",
      description:
        "Available for maintenance, improvements, bug fixes, and long-term collaboration.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">

          <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold">
            Why Work With Me
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I focus on delivering scalable, maintainable, and business-oriented
            solutions that help clients launch faster and grow confidently.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {reasons.map((item, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="pt-8">

                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">

                  <item.icon className="w-8 h-8 text-primary" />

                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-muted-foreground">
                  {item.description}
                </p>

              </CardContent>
            </Card>
          ))}

        </div>
      </div>
    </section>
  )
}