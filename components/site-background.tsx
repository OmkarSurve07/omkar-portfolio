"use client"

import { useEffect, useRef } from "react"

/**
 * Fixed page backdrop: soft brand washes, a fine grid, and a dot field whose
 * bright "torch" layer follows the pointer. Colours come from the theme tokens,
 * so the effect works in both light and dark mode.
 */
export function SiteBackground() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    let frame = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight * 0.38

    const apply = () => {
      node.style.setProperty("--mx", `${x}px`)
      node.style.setProperty("--my", `${y}px`)
      frame = 0
    }

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return
      x = event.clientX
      y = event.clientY
      node.dataset.active = "true"
      if (!frame) frame = window.requestAnimationFrame(apply)
    }

    const hide = () => {
      node.dataset.active = "false"
    }
    const show = () => {
      node.dataset.active = "true"
    }

    apply()
    node.dataset.active = "true"

    window.addEventListener("pointermove", onPointerMove, { passive: true })
    window.addEventListener("pointerdown", onPointerMove, { passive: true })
    document.addEventListener("pointerleave", hide)
    window.addEventListener("blur", hide)
    window.addEventListener("focus", show)

    return () => {
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerdown", onPointerMove)
      document.removeEventListener("pointerleave", hide)
      window.removeEventListener("blur", hide)
      window.removeEventListener("focus", show)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      data-active="true"
      className="site-background pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />

      {/* Soft brand wash */}
      <div className="absolute -right-40 -top-40 size-[34rem] rounded-full bg-primary/[0.07] blur-[100px]" />
      <div className="absolute -left-32 top-[42%] size-[26rem] rounded-full bg-accent/[0.09] blur-[110px]" />
      <div className="absolute bottom-[-10%] right-[18%] size-[28rem] rounded-full bg-primary/[0.04] blur-[120px]" />

      {/* Fine grid, fading out */}
      <div className="bg-subtle-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_75%)]" />

      {/* Dot field: dim base dots + a bright torch that tracks the pointer */}
      <div className="bg-dot-base absolute inset-0" />
      <div className="bg-dot-torch absolute inset-0" />
      <div className="bg-cursor-glow absolute inset-0" />
    </div>
  )
}
