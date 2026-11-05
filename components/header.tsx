"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Services", id: "services" },
  { label: "Work", id: "projects" },
  { label: "Agencies", id: "clients" },
  { label: "Contact", id: "contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [active, setActive] = useState("about")

  useEffect(() => {
    let frame = 0

    const update = () => {
      setIsScrolled(window.scrollY > 16)

      const viewportHeight = window.innerHeight
      let bestId = ""
      let bestArea = 0

      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        const visible = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
        if (visible > bestArea) {
          bestArea = visible
          bestId = item.id
        }
      }

      if (bestId) setActive(bestId)
      frame = 0
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          isScrolled ? "glass border-b border-border/70" : "bg-transparent"
        )}
      >
        <nav className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:h-[4.5rem]">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2.5"
            aria-label="Back to top"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground transition-transform duration-500 ease-bounce group-hover:-rotate-6">
              OS
            </span>
            <span className="hidden text-left sm:block">
              <span className="block font-display text-sm font-semibold leading-none tracking-tight">
                Omkar Surve
              </span>
              <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Full Stack · AI · Backend
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                data-active={active === item.id}
                className={cn(
                  "link-underline text-sm transition-colors duration-300",
                  active === item.id
                    ? "font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              className="hidden h-9 rounded-full px-4 sm:inline-flex"
              onClick={() => scrollToSection("contact")}
            >
              Let&apos;s talk
              <ArrowUpRight className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 transition-all duration-400 md:hidden",
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div
          className="absolute inset-0 bg-background/90 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="relative flex h-full flex-col justify-center px-8">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Menu
          </p>
          <div>
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{ transitionDelay: isMenuOpen ? `${index * 45}ms` : "0ms" }}
                className={cn(
                  "flex w-full items-center justify-between border-b border-border/70 py-4 text-left font-display text-2xl font-semibold transition-all duration-500 ease-bounce",
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                  active === item.id ? "text-primary" : "text-foreground"
                )}
              >
                {item.label}
                <ArrowUpRight className="size-4 text-muted-foreground" />
              </button>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Available for agency partners &amp; startups
          </div>
        </div>
      </div>
    </>
  )
}
