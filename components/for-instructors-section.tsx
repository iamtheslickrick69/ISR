"use client"

import { User, DollarSign, Calendar, TrendingUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: User,
    title: "OWN YOUR PROFILE",
    desc: "Showcase your credentials, PGA certification, reviews, and teaching style.",
  },
  {
    icon: DollarSign,
    title: "SET YOUR RATES",
    desc: "You decide what you're worth. Keep the majority of what you earn.",
  },
  {
    icon: Calendar,
    title: "MANAGE YOUR BUSINESS",
    desc: "Bookings, clients, earnings, analytics — all in one professional dashboard.",
  },
  {
    icon: TrendingUp,
    title: "GROW YOUR REACH",
    desc: "Get discovered by motivated golfers actively searching for instruction.",
  },
]

export function ForInstructorsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  return (
    <section id="instructors" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className="bg-[#a29e7b] py-12 px-8 sm:px-16 max-w-[900px] mx-auto mb-12 text-center"
          style={{
            clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
          }}
        >
          <p
            className={`text-white/70 text-sm font-medium uppercase tracking-[2px] mb-3 transition-all duration-500 ease-out-expo ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            FOR INSTRUCTORS
          </p>
          <h2
            className={`font-serif text-4xl sm:text-5xl tracking-wider mb-4 text-white transition-all duration-500 ease-out-expo ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "75ms" }}
          >
            YOUR BRAND. YOUR BUSINESS.
            <br />
            YOUR LEGACY.
          </h2>
          <p
            className={`text-white/85 max-w-[700px] mx-auto leading-relaxed text-base transition-all duration-500 ease-out-expo ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Stop giving away your earnings. CaddyMe is your business-in-a-box — set your own rates, manage your
            students, and build a teaching legacy that supports your family.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1100px] mx-auto px-4 sm:px-8 transition-all duration-500 ease-out-expo ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* LEFT SIDE - Academy Preview Card with RED border */}
          <div
            className="bg-white border-4 border-[#BF2424] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center text-center h-full"
            style={{
              clipPath: "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
            }}
          >
            {/* Academy Logo */}
            <div
              className="mb-6"
              style={{
                clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
              }}
            >
              <img
                src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaablack1.png"
                alt="CaddyMe Academy"
                className="h-12 w-auto"
              />
            </div>

            {/* Launch Text */}
            <p className="text-[#666666] text-base max-w-[300px] leading-relaxed mb-6">
              Launch your Academy → Build courses, grow your audience, and turn your expertise into a brand.
            </p>

            {/* Feature List */}
            <ul className="flex flex-col gap-3 text-left">
              <li className="flex items-center gap-2 text-[#333333] text-sm">
                <span className="text-[#BF2424] text-base">•</span>
                Create video courses
              </li>
              <li className="flex items-center gap-2 text-[#333333] text-sm">
                <span className="text-[#BF2424] text-base">•</span>
                Build your community
              </li>
              <li className="flex items-center gap-2 text-[#333333] text-sm">
                <span className="text-[#BF2424] text-base">•</span>
                Leverage your talents
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE - 2x2 Feature Cards Grid with WHITE backgrounds and GOLD text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white border-2 border-[#E5E5E5] p-7 hover:border-[#a29e7b] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(162,158,123,0.15)] transition-all duration-200 ease-out-expo"
                style={{
                  clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                  transitionDelay: `${index * 75}ms`,
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
                }}
              >
                <feature.icon className="h-7 w-7 mb-4 text-[#a29e7b]" strokeWidth={1.5} />
                <h3 className="font-serif text-lg tracking-[1px] mb-3 text-[#a29e7b] uppercase">{feature.title}</h3>
                <p className="text-black/70 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`text-center mt-12 transition-all duration-500 ease-out-expo ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <button
            className="group bg-[#BF2424] text-white px-10 py-4 text-base font-serif uppercase tracking-[1px] hover:bg-[#9a1d1d] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(191,36,36,0.3)] active:translate-y-[-1px] transition-all duration-200 ease-out-expo"
            style={{
              clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
            }}
          >
            Build Your Business — Free to Start{" "}
            <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
