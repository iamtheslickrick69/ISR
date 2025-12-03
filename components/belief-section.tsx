"use client"

import { Users, TrendingUp, Briefcase } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const pillars = [
  { icon: Users, title: "BELONGING", desc: "Golf is a community, not a solo sport." },
  { icon: TrendingUp, title: "GROWTH", desc: "The only competition is the player you were yesterday." },
  { icon: Briefcase, title: "OPPORTUNITY", desc: "Pros deserve a business that supports their families." },
]

export function BeliefSection() {
  const { ref: headlineRef, isVisible: headlineVisible } = useScrollAnimation()
  const { ref: bodyRef, isVisible: bodyVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()

  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={headlineRef}
          className={`font-serif text-4xl sm:text-5xl md:text-6xl text-center tracking-wider mb-8 text-black transition-all duration-500 ease-out-expo ${
            headlineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          THE GAME THAT BRIDGES GENERATIONS.
        </h2>
        <p
          ref={bodyRef}
          className={`text-center text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed text-lg transition-all duration-500 ease-out-expo ${
            bodyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Golf is the only sport where you can play 18 holes with your grandfather and teach your daughter on the same
          day. You can't do that with football. You can't do that with basketball. Golf is more than a game — it's life
          lessons on a fairway. The greatest competition is always yourself.
        </p>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`card-hover chamfer bg-white p-10 shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:-translate-y-[6px] hover:border hover:border-[#226D50] transition-all duration-250 ease-out-expo ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <pillar.icon className="card-icon h-12 w-12 mx-auto mb-6 text-[#226D50]" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl tracking-wider mb-4 text-black">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
