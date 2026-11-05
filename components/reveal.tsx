"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  distance?: number
  once?: boolean
}

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 24,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once])

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        "--reveal-distance": `${distance}px`,
      } as React.CSSProperties}
      className={cn(
        "transition-[opacity,transform] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-[var(--reveal-distance)] scale-[0.985] opacity-0",
        className
      )}
    >
      {children}
    </div>
  )
}

export function RevealStagger({
  children,
  className,
  step = 80,
  start = 0,
}: {
  children: ReactNode[]
  className?: string
  step?: number
  start?: number
}) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <Reveal key={index} delay={start + index * step}>
          {child}
        </Reveal>
      ))}
    </div>
  )
}
