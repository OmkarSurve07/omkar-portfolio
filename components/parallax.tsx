"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Lightweight scroll parallax. Moves its children a small amount as the
 * element passes through the viewport. Disabled for reduced-motion users.
 */
export function Parallax({
  children,
  className,
  speed = 0.12,
}: {
  children: ReactNode
  className?: string
  /** Positive values move slower than scroll; negative moves against it. */
  speed?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    let frame = 0

    const update = () => {
      const rect = node.getBoundingClientRect()
      const progress = rect.top + rect.height / 2 - window.innerHeight / 2
      node.style.transform = `translate3d(0, ${(-progress * speed).toFixed(2)}px, 0)`
      frame = 0
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [speed])

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  )
}
