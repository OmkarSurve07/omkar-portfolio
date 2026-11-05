import { Header } from "@/components/header"
import { SiteBackground } from "@/components/site-background"
import { ScrollProgress } from "@/components/scroll-progress"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { WhyWorkWithMe } from "@/components/why-work-with-me"
import { ServicesSection } from "@/components/services-section"
import { ClientsSection } from "@/components/clients-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <SiteBackground />
      <ScrollProgress />
      <main className="relative min-h-screen">
        <Header />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <WhyWorkWithMe />
        <ServicesSection />
        <ClientsSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
