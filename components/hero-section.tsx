"use client"

import { useState, useEffect, useRef } from "react"
import { Monitor, Flag, ChevronDown, Check } from "lucide-react"

function GolfClubIcon({ className, strokeWidth }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2L12 18" />
      <path d="M8 18C8 18 8 22 12 22C16 22 16 18 16 18" />
      <path d="M12 2L17 7L12 8L12 2Z" fill="currentColor" opacity="0.3" />
    </svg>
  )
}

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Trigger animations after mount
    const timer = setTimeout(() => setIsLoaded(true), 100)

    // Parallax effect for video
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const formatCards = [
    { icon: Monitor, title: "VIRTUAL", desc: "Learn from anywhere, anytime" },
    { icon: Check, title: "SIMULATOR", desc: "Premium simulators nationwide" },
    { icon: Flag, title: "ON-COURSE", desc: "Traditional lessons on the course" },
  ]

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <source src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/golf.background.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.55) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 text-center flex flex-col flex-1 justify-center">
        <h1
          className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wider mb-4 transition-all duration-600 ease-out-expo ${
            isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.98]"
          }`}
          style={{ transitionDelay: "200ms", letterSpacing: isLoaded ? "0.02em" : "0.05em" }}
        >
          PRACTICE WITH PURPOSE.
        </h1>

        <p
          className={`text-white/90 text-lg sm:text-xl max-w-[650px] mx-auto mb-8 leading-relaxed transition-all duration-500 ease-out-expo ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          Join the #1 golf community that takes every player to the next level and every instructor to their next
          lesson.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 transition-all duration-500 ease-out-expo ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          <button className="group chamfer bg-[#226D50] text-white px-8 py-4 text-sm font-medium uppercase tracking-wider hover:-translate-y-[3px] hover:shadow-[0_6px_20px_rgba(34,109,80,0.35)] active:translate-y-[-1px] active:shadow-[0_2px_8px_rgba(34,109,80,0.25)] transition-all duration-200 ease-out-expo w-full sm:w-auto">
            Create Free Account <span className="btn-arrow inline-block">→</span>
          </button>
          <button className="group chamfer border-2 border-white text-white px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-white/10 hover:-translate-y-[2px] transition-all duration-200 ease-out-expo w-full sm:w-auto">
            For Instructors
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-4 mb-8">
          {formatCards.map((card, index) => (
            <div
              key={card.title}
              className={`card-hover chamfer p-8 text-center transition-all duration-250 ease-out-expo
                bg-white/15 backdrop-blur-[16px] border border-white/25
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.2)]
                hover:bg-white/20 hover:-translate-y-[6px] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_12px_40px_rgba(0,0,0,0.25)]
                ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${650 + index * 75}ms` }}
            >
              <card.icon className="card-icon h-10 w-10 mx-auto mb-4 text-white drop-shadow-lg" strokeWidth={1.5} />
              <h3 className="font-serif text-xl tracking-wider mb-2 text-white drop-shadow-md">{card.title}</h3>
              <p className="text-white/80 text-sm drop-shadow-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        <div
          className={`transition-all duration-500 ease-out-expo ${isLoaded ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "900ms" }}
        >
          <ChevronDown className="h-8 w-8 mx-auto text-white/50 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
