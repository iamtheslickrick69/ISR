"use client"

import { useState, useRef, useEffect } from "react"
import { Star, Check, X, Flag, Monitor, GraduationCap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const standardsBadges = [
  { title: "VERIFIED CREDENTIALS", subtitle: "Teaching background" },
  { title: "BACKGROUND CHECKED", subtitle: "Student safety" },
  { title: "RATED & REVIEWED", subtitle: "Real students" },
  { title: "TRANSPARENT PRICING", subtitle: "No hidden fees" },
  { title: "COMMITTED", subtitle: "To your progress" },
]

export function SocialProofSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()
  const { ref: standardsRef, isVisible: standardsVisible } = useScrollAnimation()

  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [showConnectModal, setShowConnectModal] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !videoLoaded && videoRef.current) {
          videoRef.current.src = "https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/golfballvid.mp4"
          videoRef.current.load()
          setVideoLoaded(true)
        }
      },
      { rootMargin: "200px" },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [videoLoaded])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-[120px]"
      style={{
        background: videoError ? "#f5f5f5" : undefined,
      }}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        onError={() => setVideoError(true)}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "radial-gradient(circle at center, transparent 50%, rgba(0, 0, 0, 0.4) 100%)" }}
      />

      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef}>
          <h2
            className={`font-serif text-[48px] md:text-[56px] lg:text-[64px] text-center tracking-wider mb-4 text-black transition-all duration-500 ease-out-expo ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            ELITE INSTRUCTORS
          </h2>
          <p
            className={`text-center text-black/70 max-w-[800px] mx-auto mb-16 leading-relaxed text-[18px] transition-all duration-500 ease-out-expo ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            From PGA pros to community coaches — all verified, background-checked, and rated by real golfers. Quality
            instruction, transparent standards.
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`max-w-[600px] mx-auto mb-16 p-8 transition-all duration-500 ease-out-expo ${
            cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            background: "#FFFFFF",
            border: "3px solid #a29e7b",
            boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15)",
            clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
            position: "relative",
          }}
        >
          {/* Badges in top-right corner */}
          <div className="absolute top-8 right-8 flex items-center gap-2 z-10">
            {/* Academy Badge */}
            <div
              className="h-[28px] px-3 flex items-center bg-[#000000]"
              style={{
                clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
              }}
            >
              <span className="text-white text-[11px] font-bold uppercase tracking-wider">ACADEMY</span>
            </div>

            {/* PGA Professional Badge */}
            <div
              className="h-[28px] px-3 flex items-center bg-[#a29e7b]"
              style={{
                clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
              }}
            >
              <span className="text-white text-[11px] font-semibold tracking-wider">PGA PROFESSIONAL</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Photo */}
            <div
              className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] flex-shrink-0 mx-auto md:mx-0 rounded-lg"
              style={{
                backgroundImage: `url('https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaridog.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Info */}
            <div className="flex-1">
              <h3 className="font-serif text-[28px] tracking-[1px] text-black mb-2">RILEY BUNKER</h3>

              {/* Rating + Location */}
              <div className="flex items-center gap-3 mb-4">
                <Star className="h-4 w-4 fill-[#a29e7b] text-[#a29e7b]" />
                <span className="text-black text-[14px]">5.0 (250)</span>
                <span className="text-[#666666] text-[14px]">American Fork, UT</span>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap gap-6 mb-4">
                <span className="text-[#666666] text-[13px]">15y exp</span>
                <span className="text-[#666666] text-[13px]">1,200+ students</span>
                <span className="text-[#666666] text-[13px]">PGA Certified</span>
              </div>

              {/* Status badge */}
              <div className="inline-flex items-center gap-[6px] bg-[#E8F5E9] text-[#2E7D32] px-3 py-[6px] rounded text-[12px] mb-4">
                <Check className="h-3 w-3" />
                Accepting new lessons
              </div>
            </div>
          </div>

          {/* About section */}
          <div className="border-t border-[#E5E5E5] pt-4 mt-4">
            <p className="text-[11px] font-semibold text-[#999999] uppercase tracking-[1px] mb-2">ABOUT</p>
            <p className="text-[#666666] text-[14px] leading-[1.5]">
              15 years teaching at Back Nine locations. Specializes in short game and mental coaching. Teaches all skill
              levels from beginners to collegiate athletes.
            </p>
          </div>

          {/* Bottom section - price + button */}
          <div className="border-t border-[#E5E5E5] pt-6 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="font-serif text-[32px] text-black">$90/HOUR</span>
            <button
              onClick={() => setShowConnectModal(true)}
              className="group bg-[#BF2424] text-white font-semibold text-[14px] uppercase px-6 py-3 hover:-translate-y-[2px] hover:bg-[#A01F1F] hover:shadow-[0_6px_24px_rgba(191,36,36,0.3)] transition-all duration-200"
              style={{
                clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
              }}
            >
              CONNECT →
            </button>
          </div>
        </div>

        {/* Five standard badges */}
        <div
          ref={standardsRef}
          className={`flex justify-center gap-4 flex-wrap mb-12 transition-all duration-500 ease-out-expo ${
            standardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {standardsBadges.map((badge, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#E5E5E5] p-5 text-center min-w-[180px] hover:border-[#a29e7b] hover:-translate-y-[2px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-200"
              style={{
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            >
              <p className="font-serif text-[16px] text-black tracking-[0.5px] mb-1">{badge.title}</p>
              <p className="text-[13px] text-[#666666]">{badge.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Two CTA buttons */}
        <div
          className={`flex justify-center gap-4 flex-wrap transition-all duration-500 ease-out-expo ${
            standardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <button
            className="group bg-[#a29e7b] text-white text-[16px] font-medium px-8 py-4 hover:-translate-y-[2px] hover:bg-[#95927c] hover:shadow-[0_6px_24px_rgba(162,158,123,0.3)] transition-all duration-200"
            style={{
              clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
            }}
          >
            GROW THE COMMUNITY →
          </button>
          <button
            className="group bg-[#a29e7b] text-white text-[16px] font-medium px-8 py-4 hover:-translate-y-[2px] hover:bg-[#95927c] hover:shadow-[0_6px_24px_rgba(162,158,123,0.3)] transition-all duration-200"
            style={{
              clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
            }}
          >
            BROWSE ALL INSTRUCTORS →
          </button>
        </div>
      </div>

      {/* Connect Modal */}
      {showConnectModal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-[4px] z-[1000] flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setShowConnectModal(false)}
        >
          <div
            className="bg-white p-10 max-w-[400px] w-full relative animate-scaleIn"
            style={{
              clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
              boxShadow: "0 24px 64px rgba(0, 0, 0, 0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowConnectModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#999999] hover:text-black transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <h3 className="font-serif text-[24px] text-black text-center mb-8">
              How would you like to connect with Riley?
            </h3>

            <button
              className="w-full p-5 mb-4 bg-[#F8F8F8] border-2 border-transparent text-center hover:border-[#226D50] hover:bg-white hover:-translate-y-[2px] transition-all duration-200"
              style={{
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            >
              <Flag className="h-6 w-6 mx-auto mb-2 text-[#226D50]" />
              <p className="font-serif text-[18px] text-black">COURSE</p>
              <p className="text-[14px] text-[#666666]">On-course lesson</p>
            </button>

            <button
              className="w-full p-5 mb-4 bg-[#F8F8F8] border-2 border-transparent text-center hover:border-[#226D50] hover:bg-white hover:-translate-y-[2px] transition-all duration-200"
              style={{
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            >
              <Monitor className="h-6 w-6 mx-auto mb-2 text-[#226D50]" />
              <p className="font-serif text-[18px] text-black">SIMULATOR</p>
              <p className="text-[14px] text-[#666666]">Back9 simulator</p>
            </button>

            <button
              className="w-full p-5 bg-[#F8F8F8] border-2 border-transparent text-center hover:border-[#BF2424] hover:bg-[#FFF5F5] hover:-translate-y-[2px] transition-all duration-200"
              style={{
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            >
              <GraduationCap className="h-6 w-6 mx-auto mb-2 text-[#BF2424]" />
              <p className="font-serif text-[18px] text-black">ACADEMY</p>
              <p className="text-[14px] text-[#666666]">Online courses</p>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
