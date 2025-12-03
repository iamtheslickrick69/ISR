"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Copy, Mail, MessageSquare, User, Settings, CreditCard, Bell, HelpCircle, LogOut } from "lucide-react"

interface DropdownProps {
  isOpen: boolean
  onClose: () => void
}

const dropdownBaseStyles =
  "absolute top-full right-0 mt-3 bg-white border border-[#E5E5E5] rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.15)] animate-dropdownIn z-[1001]"

// Rewards Dropdown
export function RewardsDropdown({ isOpen, onClose }: DropdownProps) {
  if (!isOpen) return null

  const rewards = [
    { emoji: "🎟️", name: "$5 Lesson Credit", cost: 500 },
    { emoji: "🏆", name: "Tournament Entry Credit", cost: 1000 },
    { emoji: "👕", name: "CaddyMe Hat", cost: 2500 },
  ]

  return (
    <div className={`${dropdownBaseStyles} w-80 p-5`} onClick={(e) => e.stopPropagation()}>
      <div className="flex justify-between items-center mb-4">
        <span className="font-sans text-sm font-bold">MY REWARDS</span>
        <button className="font-sans text-xs text-[#226D50] hover:underline">View All</button>
      </div>

      <div className="mb-4">
        <span className="font-sans text-xs text-gray-500 uppercase">XP Balance</span>
        <p className="font-serif text-[28px] text-[#226D50]">🏆 2,450 XP</p>
      </div>

      <div className="border-t border-[#E5E5E5] pt-4 mb-4">
        <span className="font-sans text-xs text-gray-500 uppercase mb-3 block">Available Rewards</span>
        <div className="space-y-2">
          {rewards.map((reward, i) => (
            <div key={i} className="flex items-center justify-between bg-[#FAFAFA] rounded-md p-3">
              <div>
                <span className="font-sans text-sm font-bold">
                  {reward.emoji} {reward.name}
                </span>
                <p className="font-sans text-xs text-gray-500">{reward.cost.toLocaleString()} XP</p>
              </div>
              <button className="px-3 py-1.5 border border-[#226D50] rounded-md font-sans text-[10px] uppercase text-[#226D50] hover:bg-[rgba(34,109,80,0.05)]">
                Redeem
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#E5E5E5] pt-4">
        <span className="font-sans text-xs font-bold text-gray-500 mb-2 block">EARN MORE XP</span>
        <ul className="font-sans text-xs text-gray-500 space-y-1">
          <li>
            • Complete a lesson: <span className="text-[#226D50]">+100 XP</span>
          </li>
          <li>
            • Log a round: <span className="text-[#226D50]">+50 XP</span>
          </li>
          <li>
            • Invite a friend: <span className="text-[#226D50]">+250 XP</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

// Invite Dropdown
export function InviteDropdown({ isOpen, onClose }: DropdownProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("caddyme.com/invite/blake123")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!isOpen) return null

  return (
    <div className={`${dropdownBaseStyles} w-80 p-5`} onClick={(e) => e.stopPropagation()}>
      <span className="font-sans text-sm font-bold block mb-3">INVITE FRIENDS</span>
      <p className="font-sans text-sm text-gray-500 mb-4">
        Share your referral link and earn 250 XP for each friend who joins!
      </p>

      <div className="flex items-center gap-2 bg-[#FAFAFA] border border-[#E5E5E5] rounded-md p-3 mb-4">
        <span className="font-sans text-xs text-gray-600 flex-1 truncate">caddyme.com/invite/blake123</span>
        <button
          onClick={handleCopy}
          className="px-3 py-1.5 bg-[#a29e7b] rounded-md font-sans text-[10px] uppercase text-white flex items-center gap-1"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" /> Copied!
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" /> Copy
            </>
          )}
        </button>
      </div>

      <div className="flex gap-3 mb-4">
        <button className="flex-1 py-2.5 border border-[#a29e7b] rounded-md font-sans text-xs uppercase text-[#a29e7b] flex items-center justify-center gap-2 hover:bg-[rgba(162,158,123,0.05)]">
          <Mail className="w-3 h-3" /> Email
        </button>
        <button className="flex-1 py-2.5 border border-[#a29e7b] rounded-md font-sans text-xs uppercase text-[#a29e7b] flex items-center justify-center gap-2 hover:bg-[rgba(162,158,123,0.05)]">
          <MessageSquare className="w-3 h-3" /> Text
        </button>
      </div>

      <div className="border-t border-[#E5E5E5] pt-4 mb-4">
        <span className="font-sans text-xs font-bold text-gray-500 mb-3 block">YOUR REFERRALS</span>
        <div className="space-y-2 font-sans text-xs">
          <p>
            <span className="text-[#226D50]">✅</span> Mike T. joined — <span className="text-[#226D50]">+250 XP</span>
          </p>
          <p>
            <span className="text-[#226D50]">✅</span> Sarah K. joined — <span className="text-[#226D50]">+250 XP</span>
          </p>
          <p>
            <span className="text-gray-400">⏳</span> John D. — pending
          </p>
        </div>
        <p className="font-sans text-xs text-gray-500 mt-2">
          Total earned: <span className="font-bold">500 XP</span>
        </p>
      </div>

      <div className="border-t border-[#E5E5E5] pt-4">
        <span className="font-sans text-xs font-bold block">🎁 INVITE 5 FRIENDS BONUS</span>
        <p className="font-sans text-xs text-gray-500">Get a FREE lesson credit!</p>
        <div className="mt-2">
          <div className="flex justify-between font-sans text-xs text-gray-500 mb-1">
            <span>Progress: 2/5</span>
          </div>
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#a29e7b] w-[40%]" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Notifications Dropdown
export function NotificationsDropdown({ isOpen, onClose }: DropdownProps) {
  if (!isOpen) return null

  const todayNotifications = [
    {
      emoji: "🏆",
      title: "Achievement Unlocked!",
      body: 'You earned "10 Lessons" badge',
      time: "2 hours ago",
      unread: true,
    },
    {
      emoji: "📅",
      title: "Lesson Reminder",
      body: "Tomorrow at 2:00 PM with Riley",
      time: "3 hours ago",
      unread: true,
    },
  ]

  const yesterdayNotifications = [
    {
      emoji: "💬",
      title: "New message from Riley B.",
      body: '"Great progress on your..."',
      time: "Yesterday at 4:32 PM",
      unread: false,
    },
  ]

  return (
    <div className={`${dropdownBaseStyles} w-80 p-5`} onClick={(e) => e.stopPropagation()}>
      <div className="flex justify-between items-center mb-4">
        <span className="font-sans text-sm font-bold">NOTIFICATIONS</span>
        <button className="font-sans text-xs text-gray-500 hover:text-black">Mark Read</button>
      </div>

      <div className="mb-4">
        <span className="font-sans text-[10px] uppercase text-gray-500 block mb-2">TODAY</span>
        <div className="space-y-2">
          {todayNotifications.map((n, i) => (
            <div
              key={i}
              className={`rounded-md p-3 hover:bg-[#FAFAFA] cursor-pointer ${n.unread ? "border-l-[3px] border-l-[#226D50] bg-white" : "bg-white"}`}
            >
              <p className="font-sans text-sm">
                <span className="mr-1">{n.emoji}</span> <span className="font-bold">{n.title}</span>
              </p>
              <p className="font-sans text-xs text-gray-500">{n.body}</p>
              <p className="font-sans text-[10px] text-gray-400 mt-1">{n.time}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <span className="font-sans text-[10px] uppercase text-gray-500 block mb-2">YESTERDAY</span>
        <div className="space-y-2">
          {yesterdayNotifications.map((n, i) => (
            <div key={i} className="rounded-md p-3 hover:bg-[#FAFAFA] cursor-pointer bg-white">
              <p className="font-sans text-sm">
                <span className="mr-1">{n.emoji}</span> <span className="font-bold">{n.title}</span>
              </p>
              <p className="font-sans text-xs text-gray-500">{n.body}</p>
              <p className="font-sans text-[10px] text-gray-400 mt-1">{n.time}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full font-sans text-xs text-[#226D50] hover:underline text-center">
        VIEW ALL NOTIFICATIONS →
      </button>
    </div>
  )
}

// Messages Dropdown
export function MessagesDropdown({ isOpen, onClose }: DropdownProps) {
  if (!isOpen) return null

  const messages = [
    {
      name: "Riley Bunker",
      preview: "Great session today! Here are some drills to practice...",
      time: "2 hours ago",
      unread: true,
    },
    {
      name: "Mike Thompson",
      preview: "Thanks for booking! Looking forward to our lesson.",
      time: "Yesterday",
      unread: false,
    },
  ]

  return (
    <div className={`${dropdownBaseStyles} w-80 p-5`} onClick={(e) => e.stopPropagation()}>
      <div className="flex justify-between items-center mb-4">
        <span className="font-sans text-sm font-bold">MESSAGES</span>
        <button className="font-sans text-xs text-[#226D50] hover:underline">View All</button>
      </div>

      <div className="space-y-2 mb-4">
        {messages.map((m, i) => (
          <div key={i} className="flex gap-3 p-3 hover:bg-[#FAFAFA] cursor-pointer rounded-md">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-sans text-sm font-bold">{m.name}</span>
                {m.unread && <span className="w-2 h-2 bg-[#226D50] rounded-full" />}
              </div>
              <p className="font-sans text-xs text-gray-500 line-clamp-2">{m.preview}</p>
              <p className="font-sans text-[10px] text-gray-400 mt-1">{m.time}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full font-sans text-xs text-[#226D50] hover:underline text-center">OPEN INBOX →</button>
    </div>
  )
}

// Profile Dropdown
export function ProfileDropdown({ isOpen, onClose }: DropdownProps) {
  if (!isOpen) return null

  const menuItems = [
    { icon: User, label: "View Profile", href: "#" },
    { icon: Settings, label: "Settings", href: "/settings" },
    { icon: CreditCard, label: "Payment Methods", href: "#" },
    { icon: Bell, label: "Notification Preferences", href: "#" },
    { icon: HelpCircle, label: "Help & Support", href: "#" },
  ]

  return (
    <div className={`${dropdownBaseStyles} w-64 overflow-hidden`} onClick={(e) => e.stopPropagation()}>
      {/* User Header */}
      <div className="p-4 border-b border-[#E5E5E5]">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-[#226D50] flex items-center justify-center">
            <img
              src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaBIG.JPG"
              alt="Blake A."
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none"
                e.currentTarget.nextElementSibling?.classList.remove("hidden")
              }}
            />
            <span className="hidden text-white font-bold">BA</span>
          </div>
          <div>
            <p className="font-sans text-base font-bold">BLAKE A.</p>
            <p className="font-sans text-xs text-gray-500">Level 7 • Eagle</p>
            <p className="font-sans text-xs text-gray-500">blake@email.com</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="py-2">
        {menuItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="flex items-center gap-3 px-5 py-3 font-sans text-sm hover:bg-[#FAFAFA] transition-colors"
            onClick={onClose}
          >
            <item.icon className="w-4 h-4 text-gray-500" />
            {item.label}
          </Link>
        ))}
      </div>

      {/* Log Out */}
      <div className="border-t border-[#E5E5E5] py-2">
        <button className="flex items-center gap-3 px-5 py-3 w-full font-sans text-sm text-[#BF2424] hover:bg-[#FAFAFA] transition-colors">
          <LogOut className="w-4 h-4" />
          Log Out
        </button>
      </div>
    </div>
  )
}
