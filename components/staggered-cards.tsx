"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface StaggeredCardsProps {
  children: ReactNode[]
  className?: string
  cardClassName?: string
  staggerDelay?: number
}

export function StaggeredCards({ children, className, cardClassName, staggerDelay = 75 }: StaggeredCardsProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={cn(
            "transition-all duration-500 ease-out-expo",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]",
            cardClassName,
          )}
          style={{ transitionDelay: `${index * staggerDelay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
