"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  { step: "01", title: 'PRO SELECTS "HOME COURSE"' },
  { step: "02", title: "COURSE PROVIDES CONSENT" },
  { step: "03", title: "COURSE EARNS REVENUE" },
]

export function CoursesBanner() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-white py-16 border-t border-b border-[#E5E5E5]">
      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2
          className={`font-serif text-3xl sm:text-4xl tracking-wider mb-4 text-black transition-all duration-500 ease-out-expo ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          WE DON'T BYPASS COURSES. WE BRING THEM IN.
        </h2>

        {/* Subheadline */}
        <p
          className={`text-[#666666] text-base sm:text-lg mb-8 transition-all duration-500 ease-out-expo ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Golf courses earn 5% on every lesson booked at their facility.
        </p>

        {/* Steps Row */}
        <div
          className={`flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-12 mb-8 transition-all duration-500 ease-out-expo ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {steps.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="font-serif text-xl sm:text-2xl text-[#226D50] font-bold">{item.step}</span>
              <span className="font-serif text-xs sm:text-sm tracking-wider text-black uppercase">{item.title}</span>
              {index < steps.length - 1 && <span className="hidden sm:inline text-[#CCCCCC] ml-8">•</span>}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className={`group border-2 border-[#226D50] text-[#226D50] px-6 py-3 text-sm font-serif uppercase tracking-wider hover:bg-[#226D50] hover:text-white hover:-translate-y-[2px] transition-all duration-200 ease-out-expo ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
            transitionDelay: "300ms",
          }}
        >
          Bring CaddyMe to Your Course{" "}
          <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </section>
  )
}
