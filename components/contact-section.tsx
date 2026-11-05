"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Reveal } from "@/components/reveal"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "omkarsuhassurve@gmail.com",
    href: "mailto:omkarsuhassurve@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 96196 55282",
    href: "tel:+919619655282",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, Maharashtra · IST",
    href: "#",
  },
]

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/OmkarSurve07" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/omkar-surve/" },
  { icon: Mail, label: "Email", href: "mailto:omkarsuhassurve@gmail.com" },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project enquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:omkarsuhassurve@gmail.com?subject=${subject}&body=${body}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="relative bg-muted/40 py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-10 max-w-2xl">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              Contact
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Have an idea?{" "}
              <span className="text-muted-foreground">Let&apos;s build it.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Open to freelance projects, agency partnerships, product collaborations
              and full-time roles. Tell me what you&apos;re working on — I usually reply
              within a day.
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="flex flex-col gap-4">
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                  </span>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    Currently available
                  </p>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  Booking new work for the next quarter. AI products, full-stack builds
                  and backend rescues all welcome.
                </p>
              </div>

              <div className="flex-1 divide-y divide-border rounded-2xl border border-border bg-card px-2">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-3.5 px-3 py-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                      <info.icon className="size-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {info.label}
                      </p>
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="block truncate text-sm font-medium transition-colors hover:text-primary"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="truncate text-sm font-medium">{info.value}</p>
                      )}
                    </div>
                    {info.href !== "#" && (
                      <ArrowUpRight className="size-4 text-muted-foreground/50" />
                    )}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card py-3.5 text-muted-foreground transition-all duration-300 ease-bounce hover:-translate-y-1 hover:border-primary/30 hover:text-primary"
                  >
                    <social.icon className="size-4" />
                    <span className="text-[10px] uppercase tracking-[0.12em]">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 sm:p-7">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold">Send a message</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Opens your mail client — no forms lost in a void.
                    </p>
                  </div>
                  <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Send className="size-4" />
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-xs text-muted-foreground">
                        Your name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Ada Lovelace"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-10 rounded-lg"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-xs text-muted-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-10 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-xs text-muted-foreground">
                      What are you building?
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="A short brief, a rough idea, or a link — anything works."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="resize-none rounded-lg"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="h-11 w-full rounded-full transition-transform duration-300 ease-bounce hover:-translate-y-0.5 active:scale-[0.99]"
                  >
                    Send message
                    <Send className="size-4" />
                  </Button>

                  <p className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
                    <CheckCircle2 className="size-3 text-primary" />
                    No spam. No newsletters. Just a reply.
                  </p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
