import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BeliefSection } from "@/components/belief-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { ForGolfersSection } from "@/components/for-golfers-section"
import { PartnershipsSection } from "@/components/partnerships-section"
import { ForInstructorsSection } from "@/components/for-instructors-section"
import { CoursesBanner } from "@/components/courses-banner"
import { SocialProofSection } from "@/components/social-proof-section"
import { PricingSection } from "@/components/pricing-section"
import { OurJourneySection } from "@/components/our-journey-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <OurJourneySection />
      <ForGolfersSection />
      <ProblemSolutionSection />
      <PartnershipsSection />
      <ForInstructorsSection />
      <CoursesBanner />
      <SocialProofSection />
      <PricingSection />
      <BeliefSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
