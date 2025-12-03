"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const playersData = {
  current: [
    "Hunt for coaches on Instagram hoping someone responds",
    "No idea who's qualified or what they charge",
    "Weeks of back-and-forth texts to find a time",
    "Pay cash or Venmo and hope for the best",
    "No feedback tracking — just vague memories",
  ],
  caddyme: [
    "Search 500+ verified instructors by location and specialty",
    "See credentials, reviews, and transparent pricing upfront",
    "Book instantly — virtual, simulator, or on-course",
    "Secure payments with instant receipts and 24-hour cancellation",
    "Track progress after every lesson with detailed feedback",
  ],
}

const prosData = {
  current: [
    "Chase clients on social media and hope they DM you",
    "Give 30-50% to golf facilities or academies",
    "Manage schedules in notebooks or spreadsheets",
    "Hustle for every client, repeat every year",
    "Compete with every pro at your facility",
  ],
  caddyme: [
    "Motivated golfers find you and book directly",
    "Keep 80-88% with transparent, fair pricing tiers",
    "Professional dashboard for scheduling, payments, and analytics",
    "Build a loyal client base with progress tracking",
    "Get discovered by your teaching style and specialty",
  ],
}

export function ProblemSolutionSection() {
  const [activeTab, setActiveTab] = useState<"players" | "pros">("players")
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayData, setDisplayData] = useState(playersData)
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  const handleTabChange = (tab: "players" | "pros") => {
    if (tab === activeTab) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveTab(tab)
      setDisplayData(tab === "players" ? playersData : prosData)
      setIsAnimating(false)
    }, 200)
  }

  return (
    <section className="relative overflow-hidden py-[120px] bg-white">
      {/* Content */}
      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef}>
          <h2
            className={`font-serif text-4xl sm:text-5xl md:text-6xl text-center tracking-wider mb-4 text-black transition-all duration-500 ease-out-expo ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            PRACTICE WITH PURPOSE.
            <br />
            TEACH WITH CONFIDENCE.
          </h2>
          <p
            className={`text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-lg transition-all duration-500 ease-out-expo ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Every golfer deserves access to world-class instruction. Every teaching pro deserves the tools to thrive.
            We're building the community that makes both possible.
          </p>
        </div>

        <div
          className={`flex justify-center mb-12 transition-all duration-500 ease-out-expo ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="inline-flex relative">
            <button
              onClick={() => handleTabChange("players")}
              className={`px-8 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 ease-out-expo ${
                activeTab === "players"
                  ? "bg-[#226D50] text-white"
                  : "bg-transparent text-gray-500 border border-gray-300 hover:bg-gray-100"
              }`}
              style={{
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            >
              Players
            </button>
            <button
              onClick={() => handleTabChange("pros")}
              className={`px-8 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 ease-out-expo ${
                activeTab === "pros"
                  ? "bg-[#a29e7b] text-white"
                  : "bg-transparent text-gray-500 border border-gray-300 hover:bg-gray-100"
              }`}
              style={{
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            >
              Pros
            </button>
          </div>
        </div>

        <div
          ref={contentRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-200 ease-out-expo ${
            isAnimating ? "opacity-0 -translate-x-2" : "opacity-100 translate-x-0"
          }`}
        >
          <div
            className={`p-8 bg-white shadow-lg border border-gray-100 transition-all duration-500 ease-out-expo ${
              contentVisible && !isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
            }}
          >
            <h3 className="font-serif text-2xl tracking-wider mb-6 text-center text-black uppercase">CURRENT SYSTEM</h3>
            <ul className="space-y-4">
              {displayData.current.map((item, index) => (
                <li key={index} className="flex items-start gap-3" style={{ animationDelay: `${index * 50}ms` }}>
                  <X className="h-5 w-5 text-[#BF2424] flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`p-8 bg-white shadow-lg border border-gray-100 hover:border-[#226D50] hover:-translate-y-[6px] transition-all duration-250 ease-out-expo ${
              contentVisible && !isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
              transitionDelay: "75ms",
            }}
          >
            <h3 className="font-serif text-2xl tracking-wider mb-6 text-center text-[#226D50] uppercase">CADDYME</h3>
            <ul className="space-y-4">
              {displayData.caddyme.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check
                    className={`h-5 w-5 text-[#226D50] flex-shrink-0 mt-0.5 ${
                      contentVisible && !isAnimating ? "check-animate" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    strokeWidth={2}
                  />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
