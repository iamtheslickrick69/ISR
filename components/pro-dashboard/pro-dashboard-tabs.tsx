"use client"

interface Tab {
  id: string
  label: string
  isAcademy?: boolean
}

interface ProDashboardTabsProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
}

export function ProDashboardTabs({ tabs, activeTab, onTabChange }: ProDashboardTabsProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-4 md:px-8">
      <div className="flex gap-6 md:gap-8">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          const isAcademy = tab.isAcademy

          // Academy tab uses logo image
          if (isAcademy) {
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="relative py-5 transition-all duration-200"
              >
                <div
                  className="px-2"
                  style={{
                    clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                  }}
                >
                  <img
                    src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaablack1.png"
                    alt="Academy"
                    className="h-6"
                  />
                </div>
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#BF2424]"
                    style={{
                      boxShadow: "0 2px 8px rgba(191, 36, 36, 0.3)",
                    }}
                  />
                )}
              </button>
            )
          }

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative py-5 text-sm font-serif tracking-[0.1em] transition-colors duration-200 whitespace-nowrap ${
                isActive ? "text-[#a29e7b]" : "text-gray-500 hover:text-[#a29e7b]"
              }`}
            >
              {tab.label}
              {isActive && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#a29e7b]"
                  style={{
                    boxShadow: "0 2px 8px rgba(162, 158, 123, 0.3)",
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
