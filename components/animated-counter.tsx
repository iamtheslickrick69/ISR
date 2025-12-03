"use client"

import { useEffect, useState, useRef } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedCounterProps {
  target: number
  duration?: number
  className?: string
}

export function AnimatedCounter({ target, duration = 1500, className }: AnimatedCounterProps) {
  const [count, setCount] = useState(target + 150)
  const { ref, isVisible } = useScrollAnimation()
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true

    const start = target + 150
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(start - (start - target) * easeOut)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  )
}
