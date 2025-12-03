"use client"

import { useRef, useEffect, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function OurJourneySection() {
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation()

  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (shouldLoadVideo && videoRef.current) {
      videoRef.current.playbackRate = 0.5 // Set playback rate to 0.5x speed
      videoRef.current.play().catch(() => {})
    }
  }, [shouldLoadVideo])

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 flex justify-center items-center">
      {/* Video Background */}
      {shouldLoadVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaamicrogrid.mp4" type="video/mp4" />
        </video>
      )}

      <div
        ref={cardRef}
        className={`relative z-10 bg-white py-12 px-8 sm:py-16 sm:px-20 max-w-[1100px] w-[90%] mx-auto text-center shadow-[0_16px_64px_rgba(0,0,0,0.15)] transition-all duration-500 ease-out-expo ${
          cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{
          clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
        }}
      >
        {/* Headline */}
        <h2 className="font-serif text-4xl sm:text-5xl tracking-wider mb-3 text-black">GOLF IS LIKE LIFE.</h2>

        {/* Updated Text */}
        <p
          className="text-sm sm:text-lg md:text-xl text-[#333333] mb-8 tracking-[0.1em] sm:tracking-[0.15em] uppercase text-balance px-4"
          style={{ fontFamily: "var(--font-futuristic), sans-serif", fontWeight: "700" }}
        >
          The purpose is not to be perfect, <span className="text-[#D4AF37]">but to get better every day.</span>
        </p>

        {/* Divider 1 */}
        <div className="w-[120px] h-px bg-[#E5E5E5] mx-auto mb-8" />

        {/* CaddyMe Logo */}
        <div
          className="inline-block mb-8"
          style={{
            clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
          }}
        >
          <img
            src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/logocaddybaby.png"
            alt="CaddyMe"
            className="h-[60px] sm:h-[80px] w-auto"
          />
        </div>

        {/* Divider 2 */}
        <div className="w-[120px] h-px bg-[#E5E5E5] mx-auto mb-10" />

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-16">
          {/* For Golfers */}
          <div className="text-center max-w-[280px]">
            <p className="font-serif text-sm text-[#226D50] tracking-[2px] mb-3 uppercase">FOR GOLFERS</p>
            <p className="text-[#666666] text-base leading-relaxed mb-5">Find your pro. Elevate your game.</p>
            <button
              className="group bg-[#226D50] text-white font-serif text-sm tracking-wider px-7 py-3.5 uppercase hover:bg-[#1a5a42] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(34,109,80,0.3)] transition-all duration-200 ease-out-expo"
              style={{
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            >
              Start Your Journey <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Vertical Divider (hidden on mobile) */}
          <div className="hidden sm:block w-px h-[100px] bg-[#E5E5E5]" />

          {/* For Instructors */}
          <div className="text-center max-w-[280px]">
            <p className="font-serif text-sm text-[#a29e7b] tracking-[2px] mb-3 uppercase">FOR INSTRUCTORS</p>
            <p className="text-[#666666] text-base leading-relaxed mb-5 whitespace-nowrap">
              Build your business. Grow the game.
            </p>
            <button
              className="group bg-[#a29e7b] text-white font-serif text-sm tracking-wider px-7 py-3.5 uppercase hover:bg-[#8a8568] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(162,158,123,0.3)] transition-all duration-200 ease-out-expo"
              style={{
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            >
              Join as Instructor <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
