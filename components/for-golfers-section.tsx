"use client"

import { BarChart3, Backpack, Search, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: BarChart3,
    title: "MY TOUR CARD",
    desc: "Track your progress, earn achievements, and watch your handicap drop. Log rounds, complete lessons, unlock rewards.",
  },
  {
    icon: Backpack,
    title: "MY BAG",
    desc: "Digitally build and show off your gear. Get pro-level advice on what equipment fits your game — just like Tiger has with his caddy.",
  },
  {
    icon: Search,
    title: "FIND YOUR PRO",
    desc: "Search by location, specialty, and reviews. Get matched with the right coach for your goals.",
  },
  {
    icon: Users,
    title: "COMMUNITY",
    desc: "Join groups, share wins, and connect with golfers who get it. From beginners to competitors.",
  },
]

const achievements = [
  { icon: "🏆", label: "10 Lessons" },
  { icon: "🐦", label: "First Birdie" },
  { icon: "🎒", label: "Full Bag" },
]

export function ForGolfersSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()
  const { ref: mockupRef, isVisible: mockupVisible } = useScrollAnimation()

  return (
    <section id="community" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className="max-w-[900px] mx-auto mb-12 text-center"
          style={{
            background: "#226D50",
            padding: "48px 64px",
            clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
          }}
        >
          <p
            className={`text-white/70 text-sm font-medium uppercase tracking-[2px] mb-3 transition-all duration-500 ease-out-expo ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            FOR GOLFERS
          </p>
          <h2
            className={`font-serif text-4xl sm:text-5xl tracking-wider mb-4 text-white transition-all duration-500 ease-out-expo ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "75ms" }}
          >
            YOUR PROFESSIONAL CADDY EXPERIENCE.
            <br />
            GAMIFIED.
          </h2>
          <p
            className={`text-white/85 max-w-[700px] mx-auto leading-relaxed text-base transition-all duration-500 ease-out-expo ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Track your journey from first lesson to first birdie. Build your bag, earn achievements, and connect with
            the pros who will take your game to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`bg-white border-2 border-[#E5E5E5] p-7 transition-all duration-250 ease-out-expo cursor-pointer hover:border-[#226D50] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,109,80,0.15)] ${
                  cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 75}ms`,
                  clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
                }}
              >
                <feature.icon className="h-7 w-7 mb-4 text-[#226D50]" strokeWidth={1.5} />
                <h3 className="font-serif text-lg tracking-wider mb-3 text-[#226D50]">{feature.title}</h3>
                <p className="text-black/70 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Tour Card Preview - stays white */}
          <div
            ref={mockupRef}
            className={`flex justify-center lg:justify-start transition-all duration-600 ease-out-expo ${
              mockupVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div
              className="bg-white p-8 w-full h-full flex flex-col justify-center border-4 border-[#a29e7b]"
              style={{
                clipPath: "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 bg-[#226D50] flex items-center justify-center"
                  style={{
                    clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                  }}
                >
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-serif text-base tracking-wider text-black">MY TOUR CARD</h4>
                  <p className="text-[#226D50] text-xs">Founding Member</p>
                </div>
              </div>

              {/* Stats */}
              <div className="mb-6">
                <div className="flex justify-between py-3 border-b border-[#F0F0F0]">
                  <span className="text-[#666666] text-sm">Handicap</span>
                  <span className="font-serif text-xl text-black">12.4</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#F0F0F0]">
                  <span className="text-[#666666] text-sm">Rounds Logged</span>
                  <span className="font-serif text-xl text-black">52</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#F0F0F0]">
                  <span className="text-[#666666] text-sm">Next Level</span>
                  <span className="font-serif text-xl text-black">75%</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 bg-[#E5E5E5] rounded-sm overflow-hidden mb-6">
                <div className="w-3/4 h-full bg-[#226D50]" />
              </div>

              {/* Achievements */}
              <div>
                <p className="font-serif text-sm text-[#999999] tracking-wider mb-3">ACHIEVEMENTS</p>
                <div className="flex gap-3 flex-wrap">
                  {achievements.map((achievement, index) => (
                    <span
                      key={index}
                      className="bg-[#F5F5F5] px-3 py-2 text-xs text-[#666666] flex items-center gap-1.5 rounded"
                    >
                      <span>{achievement.icon}</span>
                      {achievement.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`text-center mt-12 transition-all duration-500 ease-out-expo ${
            cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <button
            className="group bg-[#a29e7b] text-white px-10 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#8a8769] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(162,158,123,0.3)] active:translate-y-[-1px] transition-all duration-200 ease-out-expo"
            style={{
              clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
            }}
          >
            Start Your Journey — Free <span className="btn-arrow inline-block ml-1">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
