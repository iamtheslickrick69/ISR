"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"

interface ProDashboardHeaderProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function ProDashboardHeader({ activeTab, onTabChange }: ProDashboardHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
  const [imageError, setImageError] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setProfileDropdownOpen(false)
    }
    if (profileDropdownOpen) {
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [profileDropdownOpen])

  const tabs = [
    { id: "dashboard", label: "DASHBOARD" },
    { id: "profile", label: "PROFILE" },
    { id: "clients", label: "CLIENTS" },
    { id: "earnings", label: "EARNINGS" },
    { id: "academy", label: "ACADEMY" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "h-[60px] md:h-[65px] bg-white/80 backdrop-blur-[20px] shadow-[0_2px_16px_rgba(0,0,0,0.1)]"
          : "h-[70px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
      }`}
    >
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E5E7EB]" />

      <div className="h-full px-6 md:px-12 flex items-center justify-between">
        {/* LEFT - Logos */}
        <div className="flex items-center gap-6">
          {/* CaddyMe Logo */}
          <button onClick={() => router.push("/")} className="flex-shrink-0">
            <img
              src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/logocaddybaby.png"
              alt="CaddyMe"
              className={`transition-all duration-300 ${isScrolled ? "h-[32px]" : "h-[36px]"}`}
              style={{
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            />
          </button>

          {/* Academy Logo (black) */}
          <button onClick={() => onTabChange("academy")} className="flex-shrink-0">
            <img
              src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaablack1.png"
              alt="Academy"
              className={`transition-all duration-300 ${isScrolled ? "h-[32px]" : "h-[36px]"}`}
              style={{
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            />
          </button>
        </div>

        {/* CENTER - Navigation Tabs (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {tabs.map((tab, index) => (
            <div key={tab.id} className="flex items-center gap-8">
              <button
                onClick={() => onTabChange(tab.id)}
                className={`font-bold text-[14px] tracking-wide transition-all relative ${
                  activeTab === tab.id ? "text-[#226D50]" : "text-[#6B7280] hover:text-[#226D50]/80"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute -bottom-[22px] left-0 right-0 h-[3px] bg-[#226D50]" />
                )}
              </button>
              {index < tabs.length - 1 && <span className="text-gray-300">|</span>}
            </div>
          ))}
        </nav>

        {/* RIGHT - Profile */}
        <div className="flex items-center gap-4">
          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setProfileDropdownOpen(!profileDropdownOpen)
              }}
              className="flex items-center gap-2"
            >
              {/* Avatar - Riley's photo only, no initials */}
              <div
                className={`rounded-full overflow-hidden flex-shrink-0 transition-all duration-300 ${
                  isScrolled ? "w-9 h-9" : "w-11 h-11"
                }`}
              >
                {!imageError ? (
                  <img
                    src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaridog.png"
                    alt="Riley Bunker"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-[#a29e7b] flex items-center justify-center">
                    <span className="text-white font-serif text-sm">RB</span>
                  </div>
                )}
              </div>
              <span className="hidden md:block text-sm font-medium text-gray-700">Riley B.</span>
              <ChevronDown className="hidden md:block h-4 w-4 text-gray-400" />
            </button>

            {/* Profile Dropdown Menu */}
            {profileDropdownOpen && (
              <div
                className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-[1001]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="font-medium text-gray-900">Riley Bunker</p>
                  <p className="text-sm text-gray-500">riley@caddyme.com</p>
                </div>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  View Profile
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Settings</button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Help & Support
                </button>
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">Log Out</button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-gray-600">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg animate-slideDown">
          <nav className="flex flex-col py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  onTabChange(tab.id)
                  setMobileMenuOpen(false)
                }}
                className={`px-6 py-3 text-left font-bold text-sm tracking-wide ${
                  activeTab === tab.id ? "text-[#226D50] bg-green-50" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
