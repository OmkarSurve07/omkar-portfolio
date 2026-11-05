"use client"

import { useRef, type CSSProperties, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type SpotlightCardProps = {
  children: ReactNode
  className?: string
  glowClassName?: string
  as?: "div" | "article" | "li"
}

export function SpotlightCard({
  children,
  className,
  glowClassName,
  as: Tag = "div",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty("--mx", `${event.clientX - rect.left}px`)
    node.style.setProperty("--my", `${event.clientY - rect.top}px`)
  }

  return (
    <Tag
      ref={ref as never}
      onMouseMove={handleMove}
      style={{ "--mx": "50%", "--my": "0%" } as CSSProperties}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/80 bg-card text-card-foreground card-hover",
        className
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          glowClassName
        )}
        style={{
          background:
            "radial-gradient(340px circle at var(--mx) var(--my), color-mix(in oklab, var(--primary) 6%, transparent), transparent 70%)",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </Tag>
  )
}
