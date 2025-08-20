import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "Master of Science in Information Technology",
      institution: "Kishinchand Chellaram College, University of Mumbai",
      location: "Mumbai, Maharashtra",
      period: "2019 - 2021",
      description:
        "Focused on web development and software engineering with hands-on projects in various technologies.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Guru Nanak Khalsa College, University of Mumbai",
      location: "Mumbai, Maharashtra",
      period: "2016 - 2019",
      description:
        "Comprehensive knowledge in web development and software engineering with practical application development experience.",
    },
  ]

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl text-center mb-12">Education</h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold mb-2">{edu.degree}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="font-medium text-primary">{edu.institution}</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{edu.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
