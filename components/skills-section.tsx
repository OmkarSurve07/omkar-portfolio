import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Wrench } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Code,
      skills: ["Python", "Django", "FastAPI", "Node.js", "REST APIs", "JWT Authentication"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "VectorDB", "SQL", "ORM"],
    },
    {
      title: "AI/ML & Cloud",
      icon: Cloud,
      skills: ["LLM Integration", "RAG Pipelines", "AWS", "Docker", "CI/CD"],
    },
    {
      title: "Frontend & Tools",
      icon: Wrench,
      skills: ["JavaScript", "React.js", "HTML/CSS", "jQuery", "Figma", "Postman"],
    },
  ]

  const achievements = [
    {
      title: "4⭐ HackerRank Coder",
      description: "Demonstrated strong problem-solving skills",
      link: "https://www.hackerrank.com/profile/OmkarSurve07",
    },
    {
      title: "Research Publication",
      description: "Sentiment analysis using machine learning at IX International Media Summit",
      link: "#",
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl text-center mb-12">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-lg p-8">
            <h3 className="font-space-grotesk font-bold text-2xl mb-6 text-center">Achievements & Recognition</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-6 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 text-primary">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
