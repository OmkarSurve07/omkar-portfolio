"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { flushSync } from "react-dom"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => {
    ready: Promise<void>
    finished: Promise<void>
  }
}

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === "dark"

  const toggleTheme = useCallback(() => {
    const next = isDark ? "light" : "dark"
    const doc = document as ViewTransitionDocument
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // Fallback: a short global colour cross-fade when View Transitions or
    // motion support is unavailable.
    if (!doc.startViewTransition || reduceMotion) {
      if (!reduceMotion) {
        document.documentElement.classList.add("theme-switching")
        window.setTimeout(
          () => document.documentElement.classList.remove("theme-switching"),
          450
        )
      }
      setTheme(next)
      return
    }

    const rect = buttonRef.current?.getBoundingClientRect()
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth - 48
    const y = rect ? rect.top + rect.height / 2 : 40
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const transition = doc.startViewTransition(() => {
      // Flush React/next-themes synchronously so the snapshot captures the
      // new theme rather than the old one.
      flushSync(() => setTheme(next))
    })

    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 620,
            easing: "cubic-bezier(0.34, 1.1, 0.64, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        )
      })
      .catch(() => {
        // Transition was skipped — the theme is already applied.
      })
  }, [isDark, setTheme])

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
      className={cn(
        "relative grid size-9 place-items-center overflow-hidden rounded-full border border-border/70 bg-card/60 text-foreground transition-colors hover:border-primary/50 hover:text-primary",
        className
      )}
    >
      <span
        className={cn(
          "absolute transition-all duration-500",
          mounted && isDark
            ? "translate-y-0 rotate-0 opacity-100"
            : "-translate-y-6 rotate-90 opacity-0"
        )}
      >
        <Sun className="size-4" />
      </span>
      <span
        className={cn(
          "absolute transition-all duration-500",
          mounted && !isDark
            ? "translate-y-0 rotate-0 opacity-100"
            : "translate-y-6 -rotate-90 opacity-0"
        )}
      >
        <Moon className="size-4" />
      </span>
    </button>
  )
}
