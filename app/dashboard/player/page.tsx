"use client"

import { useState, useEffect } from "react"
import { PlayerDashboardHeader } from "@/components/dashboard/player-dashboard-header"
import { MobileTabBar } from "@/components/dashboard/mobile-tab-bar"
import { OnboardingFlow } from "@/components/dashboard/onboarding-flow"
import { HomeTab } from "@/components/dashboard/tabs/home-tab"
import { LessonsTab } from "@/components/dashboard/tabs/lessons-tab"
import { FindProTab } from "@/components/dashboard/tabs/find-pro-tab"
import { TournamentsTab } from "@/components/dashboard/tabs/tournaments-tab"
import { AcademyTab } from "@/components/dashboard/tabs/academy-tab"

export default function PlayerDashboard() {
  const [activeTab, setActiveTab] = useState("home")
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [isFirstVisit, setIsFirstVisit] = useState(true)

  useEffect(() => {
    // Check if user has completed onboarding
    const hasCompletedOnboarding = localStorage.getItem("caddyme_onboarding_complete")
    if (!hasCompletedOnboarding) {
      setShowOnboarding(true)
    } else {
      setIsFirstVisit(false)
    }
  }, [])

  const handleOnboardingComplete = () => {
    localStorage.setItem("caddyme_onboarding_complete", "true")
    setShowOnboarding(false)
    setIsFirstVisit(false)
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeTab />
      case "lessons":
        return <LessonsTab />
      case "findpro":
        return <FindProTab />
      case "tournaments":
        return <TournamentsTab />
      case "academy":
        return <AcademyTab />
      default:
        return <HomeTab />
    }
  }

  const isAcademyTab = activeTab === "academy"

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: "transparent",
      }}
    >
      {/* Video Background */}
      {!isAcademyTab && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-screen h-screen object-cover pointer-events-none"
          style={{ zIndex: -1 }}
        >
          <source src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/golfballvid.mp4" type="video/mp4" />
        </video>
      )}

      <div className="relative z-[1]">
        <PlayerDashboardHeader activeTab={activeTab} onTabChange={setActiveTab} />

        <main className="pt-[78px] pb-20 md:pb-0">
          <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-10">
            {/* Content area with transparent background - video shows through gaps */}
            <div className="flex flex-col gap-8">{renderTabContent()}</div>
          </div>
        </main>

        {/* Mobile Bottom Tab Bar */}
        <MobileTabBar activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Onboarding overlay */}
        {showOnboarding && <OnboardingFlow onComplete={handleOnboardingComplete} />}
      </div>
    </div>
  )
}
