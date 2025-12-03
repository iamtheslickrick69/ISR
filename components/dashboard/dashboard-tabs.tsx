"use client"

interface Tab {
  id: string
  label: string
}

interface DashboardTabsProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
}

export function DashboardTabs({ tabs, activeTab, onTabChange }: DashboardTabsProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-8">
      <div className="flex gap-0 overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          const isAcademy = tab.id === "academy"

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative px-6 py-5 text-sm font-semibold uppercase tracking-[0.05em] transition-colors duration-200 whitespace-nowrap ${
                isActive ? (isAcademy ? "text-[#BF2424]" : "text-[#226D50]") : "text-gray-500 hover:text-black"
              }`}
            >
              {tab.label}
              {isActive && (
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[3px] ${isAcademy ? "bg-[#BF2424]" : "bg-[#226D50]"}`}
                  style={{
                    boxShadow: isAcademy ? "0 2px 8px rgba(191, 36, 36, 0.3)" : "0 2px 8px rgba(34, 109, 80, 0.3)",
                  }}
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
