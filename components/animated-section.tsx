"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale-up"
  delay?: number
}

export function AnimatedSection({ children, className, animation = "fade-up", delay = 0 }: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  const animationStyles = {
    "fade-up": {
      initial: "opacity-0 translate-y-[30px]",
      visible: "opacity-100 translate-y-0",
    },
    "fade-left": {
      initial: "opacity-0 -translate-x-[40px]",
      visible: "opacity-100 translate-x-0",
    },
    "fade-right": {
      initial: "opacity-0 translate-x-[40px]",
      visible: "opacity-100 translate-x-0",
    },
    "scale-up": {
      initial: "opacity-0 scale-95",
      visible: "opacity-100 scale-100",
    },
  }

  const style = animationStyles[animation]

  return (
    <div
      ref={ref}
      className={cn("transition-all duration-500 ease-out-expo", isVisible ? style.visible : style.initial, className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
