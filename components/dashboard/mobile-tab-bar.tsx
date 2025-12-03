"use client"

import { Home, Calendar, Search, Trophy, GraduationCap } from "lucide-react"

interface MobileTabBarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function MobileTabBar({ activeTab, onTabChange }: MobileTabBarProps) {
  const tabs = [
    { id: "home", label: "My Tour", icon: Home },
    { id: "lessons", label: "Lessons", icon: Calendar },
    { id: "findpro", label: "Pro", icon: Search },
    { id: "tournaments", label: "Tourney", icon: Trophy },
    { id: "academy", label: "Academy", icon: GraduationCap },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-[#E5E5E5] z-[1000] md:hidden pb-[env(safe-area-inset-bottom)]">
      <div className="h-full flex justify-around items-center">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          const isAcademy = tab.id === "academy"
          const activeColor = isAcademy ? "#BF2424" : "#226D50"
          const color = isActive ? activeColor : "#999999"

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center gap-1 relative"
            >
              {isActive && (
                <span className="absolute -top-2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeColor }} />
              )}
              <tab.icon className="w-6 h-6" style={{ color }} strokeWidth={1.5} />
              <span className="font-sans text-[10px]" style={{ color }}>
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
