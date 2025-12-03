"use client"

import { useState } from "react"
import { ProDashboardHeader } from "@/components/pro-dashboard/pro-dashboard-header"
import { ProDashboardTab } from "@/components/pro-dashboard/tabs/pro-dashboard-tab"
import { ProProfileTab } from "@/components/pro-dashboard/tabs/pro-profile-tab"
import { ProClientsTab } from "@/components/pro-dashboard/tabs/pro-clients-tab"
import { ProEarningsTab } from "@/components/pro-dashboard/tabs/pro-earnings-tab"
import { ProAcademyTab } from "@/components/pro-dashboard/tabs/pro-academy-tab"
import { ProCalendarTab } from "@/components/pro-dashboard/tabs/pro-calendar-tab"
import { ProMessagesTab } from "@/components/pro-dashboard/tabs/pro-messages-tab"

export default function ProDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <ProDashboardTab />
      case "profile":
        return <ProProfileTab />
      case "clients":
        return <ProClientsTab />
      case "earnings":
        return <ProEarningsTab />
      case "academy":
        return <ProAcademyTab />
      case "calendar":
        return <ProCalendarTab />
      case "messages":
        return <ProMessagesTab />
      default:
        return <ProDashboardTab />
    }
  }

  const isAcademyTab = activeTab === "academy"

  return (
    <div className="min-h-screen relative">
      {!isAcademyTab && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover"
          style={{ zIndex: -1 }}
        >
          <source src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/golfballvid.mp4" type="video/mp4" />
        </video>
      )}

      <ProDashboardHeader activeTab={activeTab} onTabChange={setActiveTab} />

      <main className={`pt-[90px] pb-20 relative z-[1] ${isAcademyTab ? "" : "px-4 md:px-8"}`}>
        {isAcademyTab ? (
          // Academy tab has its own full-width dark mode layout
          renderTabContent()
        ) : (
          // Other tabs have floating cards on video background
          <div className="max-w-[1200px] mx-auto">{renderTabContent()}</div>
        )}
      </main>
    </div>
  )
}
