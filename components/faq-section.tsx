"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const golferFaqs = [
  {
    question: "How do I find the right instructor for my goals?",
    answer:
      "Use our advanced search filters to find instructors by location, specialty (short game, driving, mental coaching), price range, and availability. Read reviews from real students and view instructor credentials before booking.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel any lesson up to 24 hours before your scheduled time for a full refund. Cancellations within 24 hours may be subject to a 50% fee at the instructor's discretion.",
  },
  {
    question: "How does payment work?",
    answer:
      "All payments are processed securely through our platform. You pay when you book, and the instructor receives payment after the lesson is completed. You'll receive an instant receipt via email.",
  },
  {
    question: "Can I message instructors before booking?",
    answer:
      "Yes! You can send messages to any instructor to ask questions about their teaching style, discuss your goals, or clarify any details before booking a lesson.",
  },
  {
    question: "Is CaddyMe really free for golfers?",
    answer:
      "Absolutely. There's no subscription or platform fee for golfers. You only pay for the lessons you book. Our revenue comes from a small percentage of each lesson paid by instructors.",
  },
]

const instructorFaqs = [
  {
    question: "What are the platform fees?",
    answer:
      "We offer three tiers: Starter (free, 15% fee), Pro ($79/month, 8% fee), and Elite ($199/month, 5% fee coming 2026). Choose the plan that fits your teaching volume.",
  },
  {
    question: "When and how do I get paid?",
    answer:
      "Payments are processed within 24 hours of lesson completion. Funds are deposited directly to your bank account weekly (Starter) or daily (Pro/Elite).",
  },
  {
    question: "How do I set my rates and availability?",
    answer:
      "You have complete control over your rates and schedule through your instructor dashboard. Set different rates for virtual, simulator, and on-course lessons. Block out unavailable times easily.",
  },
  {
    question: "How does CaddyMe help me get more students?",
    answer:
      "Our platform connects you with motivated golfers actively searching for instruction. Pro members get priority search placement, and all instructors benefit from our marketing efforts and community building.",
  },
  {
    question: "Can I teach at multiple locations?",
    answer:
      "Yes! You can list multiple teaching locations including courses, simulator facilities, and virtual lessons. Each location can have its own availability and pricing.",
  },
]

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left hover:bg-[#226D50]/5 transition-colors duration-200 px-2 -mx-2"
      >
        <span className="font-medium text-black">{question}</span>
        <span className={`transition-transform duration-250 ease-out-expo ${isOpen ? "rotate-45" : "rotate-0"}`}>
          <Plus className="h-5 w-5 text-gray-500 flex-shrink-0" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out-expo ${
          isOpen ? "max-h-[200px] opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export function FaqSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: faqsRef, isVisible: faqsVisible } = useScrollAnimation()

  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={headerRef}
          className={`font-serif text-4xl sm:text-5xl md:text-6xl text-center tracking-wider mb-16 text-black transition-all duration-500 ease-out-expo ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          FAQ
        </h2>

        <div ref={faqsRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Golfers FAQs */}
          <div
            className={`transition-all duration-500 ease-out-expo ${
              faqsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-[#226D50] font-serif text-lg font-bold uppercase tracking-wider mb-6 text-center">
              FOR GOLFERS
            </p>
            <div className="chamfer bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              {golferFaqs.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} index={index} />
              ))}
            </div>
          </div>

          {/* Instructors FAQs */}
          <div
            className={`transition-all duration-500 ease-out-expo ${
              faqsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <p className="text-[#a29e7b] font-serif text-lg font-bold uppercase tracking-wider mb-6 text-center">
              FOR INSTRUCTORS
            </p>
            <div className="chamfer bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              {instructorFaqs.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
