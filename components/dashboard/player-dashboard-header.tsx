"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { ProfileDropdown } from "./header-dropdowns"

interface PlayerDashboardHeaderProps {
  activeTab: string
  onTabChange: (tabId: string) => void
}

export function PlayerDashboardHeader({ activeTab, onTabChange }: PlayerDashboardHeaderProps) {
  const router = useRouter()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [imageError, setImageError] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  // Close dropdown on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null)
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [])

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const tabs = [
    { id: "home", label: "MY TOUR" },
    { id: "lessons", label: "LESSONS" },
    { id: "findpro", label: "FIND PRO" },
    { id: "tournaments", label: "TOURNAMENTS" },
  ]

  const handleTabClick = (tabId: string) => {
    onTabChange(tabId)
    setMobileMenuOpen(false)
  }

  const handleCaddyMeLogoClick = () => {
    router.push("/")
  }

  const handleAcademyLogoClick = () => {
    onTabChange("academy")
  }

  const isInAcademy = activeTab === "academy"

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-2 border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
      style={{
        height: "70px",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <div className="h-full px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Mobile hamburger menu */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#F3F4F6] transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#6B7280]" /> : <Menu className="w-6 h-6 text-[#6B7280]" />}
          </button>

          {/* CaddyMe Logo - FIRST */}
          <button
            onClick={handleCaddyMeLogoClick}
            className="relative cursor-pointer transition-transform duration-200 hover:scale-[1.02] overflow-hidden"
            style={{
              boxShadow: !isInAcademy ? "0 0 12px rgba(34, 109, 80, 0.2)" : "none",
              clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
            }}
          >
            <Image
              src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/logocaddybaby.png"
              alt="CaddyMe"
              width={140}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </button>

          {/* Academy Logo - SECOND, next to CaddyMe */}
          <button
            onClick={handleAcademyLogoClick}
            className="relative cursor-pointer transition-transform duration-200 hover:scale-[1.02] overflow-hidden"
            style={{
              boxShadow: isInAcademy ? "0 0 12px rgba(191, 36, 36, 0.4)" : "none",
              clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
            }}
          >
            <Image
              src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaablack1.png"
              alt="Academy"
              width={140}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </button>
        </div>

        {/* CENTER SECTION - Navigation Tabs (Desktop only) */}
        <nav className="hidden lg:flex items-center gap-8">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.id
            return (
              <div key={tab.id} className="flex items-center gap-8">
                <button
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative py-1 text-[16px] font-bold uppercase tracking-[0.5px] transition-all duration-200 hover:-translate-y-0.5 ${
                    isActive ? "text-[#226D50]" : "text-[#6B7280] hover:text-[#226D50] hover:opacity-80"
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#226D50]"
                      style={{
                        animation: "slideInFromLeft 200ms ease",
                      }}
                    />
                  )}
                </button>
                {index < tabs.length - 1 && <span className="text-[#E5E7EB] font-light">|</span>}
              </div>
            )
          })}
        </nav>

        <div className="flex items-center">
          {/* Profile Avatar */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("profile")}
              className="flex items-center gap-2 px-3 py-2 rounded-[20px] hover:bg-[#F3F4F6] transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                {!imageError ? (
                  <img
                    src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaBIG.JPG"
                    alt="Blake A."
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  /* Fallback: show initials only if image fails to load */
                  <div className="w-full h-full bg-[#226D50] flex items-center justify-center">
                    <span className="text-white text-sm font-bold">BA</span>
                  </div>
                )}
              </div>
              <span className="hidden md:block text-sm font-medium text-[#374151]">Blake A.</span>
              <ChevronDown className="hidden md:block w-4 h-4 text-[#6B7280]" />
            </button>
            <ProfileDropdown isOpen={openDropdown === "profile"} onClose={() => setOpenDropdown(null)} />
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[70px] left-0 right-0 bg-white border-b-2 border-[#E5E7EB] shadow-[0_4px_16px_rgba(0,0,0,0.1)] animate-slideDown">
          <nav className="py-4">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`w-full px-6 py-4 text-left text-[16px] font-bold uppercase tracking-[0.5px] transition-colors duration-200 ${
                    isActive
                      ? "text-[#226D50] bg-[#F0FDF4] border-l-4 border-[#226D50]"
                      : "text-[#6B7280] hover:bg-[#F3F4F6]"
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
