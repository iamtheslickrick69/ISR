"use client"

import { Check, Star, Rocket } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const starterFeatures = [
  "Unlimited lesson bookings",
  "Secure payment processing",
  "Student reviews & ratings",
  "Basic analytics dashboard",
  "Weekly direct deposit",
]

const proFeatures = [
  "Priority search placement",
  "Advanced analytics & insights",
  "Email marketing tools",
  "Automated booking reminders",
  "Student progress tracking",
  "Group lesson management",
]

const academyFeatures = [
  "Create & sell video courses",
  "Upload unlimited training content",
  "Private student community",
  "Membership subscription revenue",
  "Live virtual coaching sessions",
  "Branded instructor experience",
  "Professional business dashboard",
]

export function PricingSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()

  return (
    <section id="pricing" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef}>
          <h2
            className={`font-serif text-4xl sm:text-5xl md:text-6xl text-center tracking-wider mb-4 text-black transition-all duration-500 ease-out-expo ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            INSTRUCTOR PRICING PLANS
          </h2>
          <p
            className={`text-center text-gray-700 max-w-2xl mx-auto mb-16 text-lg transition-all duration-500 ease-out-expo ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Choose the plan that fits your teaching business.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
          {/* Starter */}
          <div
            className={`chamfer bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-8 flex flex-col overflow-visible border border-[#226D50] hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)] hover:-translate-y-[8px] transition-all duration-250 ease-out-expo ${
              cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-serif text-2xl tracking-wider mb-2 text-black">STARTER</h3>
            <div className="mb-4">
              <span className="font-serif text-4xl text-black">FREE</span>
            </div>
            <p className="text-[#226D50] font-medium mb-4">15% fee</p>
            <p className="text-gray-600 text-sm mb-8">Perfect for new instructors or testing the platform.</p>
            <ul className="space-y-3 mb-8">
              {starterFeatures.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#226D50] flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mb-6">
              Keep <span className="font-semibold text-black">85%</span> of every lesson
            </p>
            <button className="group chamfer mt-auto w-full border-2 border-[#226D50] text-[#226D50] px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-[#226D50]/10 hover:-translate-y-[2px] transition-all duration-200 ease-out-expo">
              Get Started <span className="btn-arrow inline-block">→</span>
            </button>
          </div>

          {/* Pro - Featured */}
          <div
            className={`chamfer bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-8 border border-[#a29e7b] relative flex flex-col overflow-visible hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)] hover:-translate-y-[8px] transition-all duration-250 ease-out-expo ${
              cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "75ms" }}
          >
            <h3 className="font-serif text-2xl tracking-wider mb-2 text-black">PRO</h3>
            <div className="mb-4 flex items-center gap-3 flex-wrap">
              <div>
                <span className="font-serif text-4xl text-black">$79</span>
                <span className="text-gray-600">/month</span>
              </div>
              <span className="chamfer-sm bg-[#a29e7b] text-white text-xs font-medium uppercase tracking-wider px-3 py-1.5 flex items-center gap-1.5 whitespace-nowrap">
                <Star className="h-3 w-3" /> MOST POPULAR
              </span>
            </div>
            <p className="text-[#226D50] font-medium mb-4">8% fee</p>
            <p className="text-gray-600 text-sm mb-8">For active instructors doing 12+ lessons per month.</p>
            <p className="text-sm text-gray-600 mb-4">Everything in Starter, PLUS:</p>
            <ul className="space-y-3 mb-8">
              {proFeatures.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#226D50] flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mb-2">
              Keep <span className="font-semibold text-black">92%</span> of every lesson
            </p>
            <p className="text-xs text-gray-500 mb-6">Break-even at 12 lessons/month</p>
            <button className="group chamfer mt-auto w-full bg-[#a29e7b] text-white px-6 py-3 text-sm font-medium uppercase tracking-wider hover:-translate-y-[3px] hover:shadow-[0_6px_20px_rgba(162,158,123,0.35)] active:translate-y-[-1px] transition-all duration-200 ease-out-expo">
              Start Pro <span className="btn-arrow inline-block">→</span>
            </button>
          </div>

          {/* Academy */}
          <div
            className={`chamfer bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-8 border border-[#BF2424] relative flex flex-col overflow-visible hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)] hover:-translate-y-[8px] transition-all duration-250 ease-out-expo ${
              cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <h3 className="font-serif text-2xl tracking-wider mb-2 text-black">ACADEMY</h3>
            <div className="mb-4 flex items-center gap-3 flex-wrap">
              <div>
                <span className="font-serif text-4xl text-black">$199</span>
                <span className="text-gray-600">/month</span>
              </div>
              <span className="chamfer-sm bg-[#BF2424] text-white text-xs font-medium uppercase tracking-wider px-3 py-1.5 flex items-center gap-1.5 whitespace-nowrap">
                <Rocket className="h-3 w-3" /> COMING 2026
              </span>
            </div>
            <p className="text-[#226D50] font-medium mb-4">5% fee</p>
            <p className="text-gray-600 text-sm mb-8">For elite instructors building digital coaching businesses.</p>
            <p className="text-sm text-gray-600 mb-4">Everything in Pro, PLUS:</p>
            <ul className="space-y-3 mb-8 flex-1">
              {academyFeatures.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#226D50] flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mb-2">
              Keep <span className="font-semibold text-black">95%</span> of every lesson
            </p>
            <p className="text-xs text-gray-500 mb-6">Build recurring revenue streams</p>
            <button className="group chamfer mt-auto w-full border-2 border-[#BF2424] text-[#BF2424] px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-[#BF2424]/10 hover:-translate-y-[2px] transition-all duration-200 ease-out-expo">
              Join Waitlist <span className="btn-arrow inline-block">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
