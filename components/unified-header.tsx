"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Gift, UserPlus, Bell, MessageSquare, ChevronDown } from "lucide-react"
import { RoleSelectionModal } from "./role-selection-modal"
import {
  RewardsDropdown,
  InviteDropdown,
  NotificationsDropdown,
  MessagesDropdown,
  ProfileDropdown,
} from "./dashboard/header-dropdowns"

type HeaderVariant = "landing" | "dashboard"
type DropdownType = "rewards" | "invite" | "notifications" | "messages" | "profile" | null

const navLinks = [
  { name: "Community", href: "#community" },
  { name: "Instructors", href: "#instructors" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Login", href: "#login" },
]

interface UnifiedHeaderProps {
  variant?: HeaderVariant
}

export function UnifiedHeader({ variant = "landing" }: UnifiedHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (openDropdown && !(e.target as Element).closest(".dropdown-container")) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [openDropdown])

  const toggleDropdown = (dropdown: DropdownType) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-[1000] w-[95%] md:w-[85%] max-w-[1190px] transition-all duration-300 ease-out origin-top ${
          isScrolled
            ? "top-3 h-[68px] md:h-[75px] px-7 md:px-8 bg-white/70 backdrop-blur-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
            : "top-5 h-[78px] md:h-[85px] px-7 md:px-10 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
        }`}
        style={{
          border: "2px solid #000000",
          clipPath: isScrolled
            ? "polygon(17px 0, 100% 0, 100% calc(100% - 17px), calc(100% - 17px) 100%, 0 100%, 0 17px)"
            : "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
          overflow: "visible", // Added overflow visible to allow dropdowns to show outside header
        }}
      >
        <div className="h-full flex items-center justify-between">
          {/* Logo (Left) */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/logocaddybaby.png"
              alt="CaddyMe"
              width={240}
              height={60}
              className={`w-auto transition-all duration-300 ${
                isScrolled ? "h-[34px] md:h-[37px]" : "h-[41px] md:h-[44px]"
              }`}
              priority
            />
          </Link>

          {/* Center Nav Links (Landing only, Desktop) */}
          {variant === "landing" && (
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-sans text-[15px] font-medium uppercase tracking-[0.05em] transition-colors duration-200 ${
                    isScrolled ? "text-black hover:text-[#a29e7b]" : "text-[#226D50] hover:text-[#a29e7b]"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          )}

          {/* Right side content */}
          <div className="flex items-center gap-3">
            {/* Landing: Get Started button (Desktop) */}
            {variant === "landing" && (
              <button
                onClick={() => setIsRoleModalOpen(true)}
                className={`hidden md:block px-4 py-1.5 font-sans text-[14px] font-semibold uppercase tracking-[0.05em] transition-all duration-200 ease-out bg-[#a29e7b] text-white hover:bg-[#8a8565] hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(162,158,123,0.4)]`}
                style={{
                  clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                }}
              >
                Get Started <span className="inline-block ml-1">→</span>
              </button>
            )}

            {/* Dashboard: Icons + Profile (Desktop) */}
            {variant === "dashboard" && (
              <div className="hidden md:flex items-center gap-3">
                {/* Rewards */}
                <div className="relative dropdown-container">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleDropdown("rewards")
                    }}
                    className={`transition-colors duration-200 ${
                      isScrolled ? "text-black hover:text-[#a29e7b]" : "text-[#226D50] hover:text-[#a29e7b]"
                    }`}
                    title="Rewards"
                  >
                    <Gift className="h-6 w-6" strokeWidth={1.5} />
                  </button>
                  <RewardsDropdown isOpen={openDropdown === "rewards"} onClose={() => setOpenDropdown(null)} />
                </div>

                {/* Invite */}
                <div className="relative dropdown-container">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleDropdown("invite")
                    }}
                    className={`transition-colors duration-200 ${
                      isScrolled ? "text-black hover:text-[#a29e7b]" : "text-[#226D50] hover:text-[#a29e7b]"
                    }`}
                    title="Invite Friends"
                  >
                    <UserPlus className="h-6 w-6" strokeWidth={1.5} />
                  </button>
                  <InviteDropdown isOpen={openDropdown === "invite"} onClose={() => setOpenDropdown(null)} />
                </div>

                {/* Notifications */}
                <div className="relative dropdown-container">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleDropdown("notifications")
                    }}
                    className={`relative transition-colors duration-200 ${
                      isScrolled ? "text-black hover:text-[#a29e7b]" : "text-[#226D50] hover:text-[#a29e7b]"
                    }`}
                    title="Notifications"
                  >
                    <Bell className="h-6 w-6" strokeWidth={1.5} />
                    <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-[#BF2424] rounded-full" />
                  </button>
                  <NotificationsDropdown
                    isOpen={openDropdown === "notifications"}
                    onClose={() => setOpenDropdown(null)}
                  />
                </div>

                {/* Messages */}
                <div className="relative dropdown-container">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleDropdown("messages")
                    }}
                    className={`relative transition-colors duration-200 ${
                      isScrolled ? "text-black hover:text-[#a29e7b]" : "text-[#226D50] hover:text-[#a29e7b]"
                    }`}
                    title="Messages"
                  >
                    <MessageSquare className="h-6 w-6" strokeWidth={1.5} />
                    <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-[#BF2424] rounded-full" />
                  </button>
                  <MessagesDropdown isOpen={openDropdown === "messages"} onClose={() => setOpenDropdown(null)} />
                </div>

                {/* Profile */}
                <div className="relative dropdown-container ml-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleDropdown("profile")
                    }}
                    className={`flex items-center gap-2 transition-colors duration-200 ${
                      isScrolled ? "text-black hover:text-[#a29e7b]" : "text-[#226D50] hover:text-[#a29e7b]"
                    }`}
                  >
                    <div className="h-8 w-8 rounded-full bg-[#226D50] flex items-center justify-center text-white text-[14px] font-bold">
                      CS
                    </div>
                    <span className="font-sans text-[15px] font-medium">Cooper S.</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${openDropdown === "profile" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <ProfileDropdown isOpen={openDropdown === "profile"} onClose={() => setOpenDropdown(null)} />
                </div>
              </div>
            )}

            {/* Mobile: Dashboard icons (simplified) */}
            {variant === "dashboard" && (
              <div className="flex md:hidden items-center gap-3">
                <button className={`relative ${isScrolled ? "text-black" : "text-[#226D50]"}`}>
                  <Bell className="h-7 w-7" strokeWidth={1.5} />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-[#BF2424] rounded-full" />
                </button>
                <div className="h-8 w-8 rounded-full bg-[#226D50] flex items-center justify-center text-white text-[14px] font-bold">
                  CS
                </div>
              </div>
            )}

            {/* Mobile: Hamburger menu (Landing only) */}
            {variant === "landing" && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 ${isScrolled ? "text-black" : "text-[#226D50]"}`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile menu overlay (Landing only) */}
      {variant === "landing" && isMobileMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-white animate-fadeIn">
          <div className="absolute top-4 right-4">
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-[#226D50] p-2">
              <X className="h-10 w-10" />
            </button>
          </div>
          <nav className="h-full flex flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-2xl font-medium text-[#226D50] hover:text-[#a29e7b] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                setIsRoleModalOpen(true)
              }}
              className="mt-6 w-[80%] max-w-[350px] bg-[#a29e7b] text-white px-8 py-4 font-sans text-[20px] font-semibold uppercase tracking-[0.05em]"
              style={{
                clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
              }}
            >
              Get Started →
            </button>
          </nav>
        </div>
      )}

      {/* Role Selection Modal */}
      <RoleSelectionModal isOpen={isRoleModalOpen} onClose={() => setIsRoleModalOpen(false)} />
    </>
  )
}
