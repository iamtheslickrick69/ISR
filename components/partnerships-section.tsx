"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useRef, useEffect, useState } from "react"

const pills = [
  { title: "VIRTUAL COURSES", desc: "Pebble Beach to St. Andrews" },
  { title: "INSTANT FEEDBACK", desc: "Real-time swing data" },
  { title: "YEAR-ROUND", desc: "Train 365 days a year" },
  { title: "PRO-GRADE TECH", desc: "Professional technology" },
  { title: "400+ LOCATIONS", desc: "Nationwide coverage" },
]

export function PartnershipsSection() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation()

  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current && !videoLoaded) {
            videoRef.current.src = "https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaglobeblack.mp4"
            videoRef.current.load()
            videoRef.current.play().catch(() => {})
            setVideoLoaded(true)
          }
        })
      },
      { rootMargin: "200px" },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [videoLoaded])

  return (
    <section ref={containerRef} className="relative overflow-hidden py-24 sm:py-32 bg-black">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="w-[72%] h-[72%] object-contain"
        />
      </div>

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 20%, rgba(0, 0, 0, 0.85) 60%)",
        }}
      />

      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={leftRef}
          className={`text-center transition-all duration-500 ease-out-expo ${
            leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="inline-block bg-white/10 backdrop-blur-[12px] px-8 sm:px-12 py-8 mb-8 border border-white/20"
            style={{
              clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
            }}
          >
            <h2 className="font-serif text-3xl sm:text-5xl tracking-wider text-white mb-3">
              TRAIN AT 400+ PREMIUM LOCATIONS.
            </h2>
            <p className="text-white/80 leading-relaxed text-lg max-w-[900px] mx-auto">
              Our exclusive partnership with Back Nine gives you access to state-of-the-art simulator venues nationwide.
              Year-round training with verified instructors.
            </p>
          </div>

          <div className="flex justify-center items-center my-12">
            <img
              src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/back9.png"
              alt="Back9"
              className="w-[320px] sm:w-[400px] h-auto"
            />
          </div>

          <div className="flex flex-wrap gap-4 mb-12 justify-center mt-12">
            {pills.map((item, index) => (
              <div
                key={index}
                className={`bg-white/15 backdrop-blur-[16px] border border-white/20 px-6 py-5 sm:px-7 sm:py-6 min-w-[160px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.2)] transition-all duration-200 ease-out-expo hover:-translate-y-1 hover:bg-white/25 hover:border-white/40 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.3)] ${
                  leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${200 + index * 50}ms`,
                  clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                }}
              >
                <p className="font-serif text-base tracking-wider text-white uppercase mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  {item.title}
                </p>
                <p className="text-sm text-white/70 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">{item.desc}</p>
              </div>
            ))}
          </div>

          <button
            className="group bg-[#226D50] text-white px-8 py-4 text-base font-serif uppercase tracking-wider hover:bg-[#1a5a42] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(34,109,80,0.3)] active:translate-y-[-1px] transition-all duration-200 ease-out-expo mt-12"
            style={{
              clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
            }}
          >
            FIND LOCATIONS NEAR YOU{" "}
            <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
