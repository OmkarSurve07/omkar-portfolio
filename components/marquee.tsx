import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type MarqueeProps = {
  children: ReactNode
  className?: string
  reverse?: boolean
  /** Hide the fade masks on the edges. */
  noMask?: boolean
}

export function Marquee({ children, className, reverse, noMask }: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden",
        !noMask && "mask-fade-x",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max shrink-0 items-center",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "group-hover:[animation-play-state:paused]"
        )}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center">
          {children}
        </div>
      </div>
    </div>
  )
}
