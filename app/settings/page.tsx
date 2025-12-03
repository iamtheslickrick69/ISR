"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Camera } from "lucide-react"
import { UnifiedHeader } from "@/components/unified-header"

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    firstName: "Cooper",
    lastName: "Slick",
    email: "cooper@email.com",
    location: "American Fork, UT",
  })

  const [golfInfo, setGolfInfo] = useState({
    handicap: "12.4",
    goalHandicap: "10.0",
    homeCourse: "fox-hollow",
  })

  const [notifications, setNotifications] = useState({
    lessonReminders: true,
    achievementAlerts: true,
    tournamentUpdates: true,
    communityActivity: false,
    marketingEmails: false,
  })

  const [privacy, setPrivacy] = useState({
    showHandicap: true,
    showOnLeaderboards: true,
    allowMessages: false,
  })

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <UnifiedHeader variant="dashboard" />

      <div className="max-w-[600px] mx-auto px-4 py-8 pt-[88px]">
        {/* Back Link */}
        <Link
          href="/dashboard/player"
          className="inline-flex items-center gap-2 font-sans text-sm text-[#226D50] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        {/* Page Title */}
        <h1 className="font-serif text-[32px] tracking-wider text-black mb-8">SETTINGS</h1>

        {/* Profile Section */}
        <section className="bg-white chamfer-md p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
          <h2 className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-4">PROFILE</h2>

          {/* Avatar */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gray-200 rounded-full" />
              <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#226D50] rounded-full flex items-center justify-center">
                <Camera className="w-3 h-3 text-white" />
              </button>
            </div>
            <button className="font-sans text-xs text-[#226D50] hover:underline">Change Photo</button>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="font-sans text-xs text-gray-500 block mb-1">First Name</label>
              <input
                type="text"
                value={profile.firstName}
                onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                className="w-full h-11 border-2 border-[#E5E5E5] chamfer-sm px-4 font-sans text-sm focus:border-[#226D50] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="font-sans text-xs text-gray-500 block mb-1">Last Name</label>
              <input
                type="text"
                value={profile.lastName}
                onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                className="w-full h-11 border-2 border-[#E5E5E5] chamfer-sm px-4 font-sans text-sm focus:border-[#226D50] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="font-sans text-xs text-gray-500 block mb-1">Email</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="w-full h-11 border-2 border-[#E5E5E5] chamfer-sm px-4 font-sans text-sm focus:border-[#226D50] focus:outline-none transition-colors"
            />
          </div>

          {/* Location */}
          <div className="mb-6">
            <label className="font-sans text-xs text-gray-500 block mb-1">Location</label>
            <input
              type="text"
              value={profile.location}
              onChange={(e) => setProfile({ ...profile, location: e.target.value })}
              className="w-full h-11 border-2 border-[#E5E5E5] chamfer-sm px-4 font-sans text-sm focus:border-[#226D50] focus:outline-none transition-colors"
            />
          </div>

          <button className="px-6 py-3 bg-[#226D50] chamfer-sm font-sans text-sm uppercase tracking-wider text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
            Save Changes
          </button>
        </section>

        {/* Golf Info Section */}
        <section className="bg-white chamfer-md p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
          <h2 className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-4">GOLF INFO</h2>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="font-sans text-xs text-gray-500 block mb-1">Handicap</label>
              <input
                type="text"
                value={golfInfo.handicap}
                onChange={(e) => setGolfInfo({ ...golfInfo, handicap: e.target.value })}
                className="w-full h-11 border-2 border-[#E5E5E5] chamfer-sm px-4 font-sans text-sm focus:border-[#226D50] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="font-sans text-xs text-gray-500 block mb-1">Goal Handicap</label>
              <input
                type="text"
                value={golfInfo.goalHandicap}
                onChange={(e) => setGolfInfo({ ...golfInfo, goalHandicap: e.target.value })}
                className="w-full h-11 border-2 border-[#E5E5E5] chamfer-sm px-4 font-sans text-sm focus:border-[#226D50] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="font-sans text-xs text-gray-500 block mb-1">Home Course</label>
            <select
              value={golfInfo.homeCourse}
              onChange={(e) => setGolfInfo({ ...golfInfo, homeCourse: e.target.value })}
              className="w-full h-11 border-2 border-[#E5E5E5] chamfer-sm px-4 font-sans text-sm focus:border-[#226D50] focus:outline-none transition-colors appearance-none bg-white"
            >
              <option value="fox-hollow">Fox Hollow Golf Course</option>
              <option value="thanksgiving-point">Thanksgiving Point Golf Club</option>
              <option value="alpine-country">Alpine Country Club</option>
            </select>
          </div>

          <button className="px-6 py-3 bg-[#226D50] chamfer-sm font-sans text-sm uppercase tracking-wider text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
            Save Changes
          </button>
        </section>

        {/* Payment Methods Section */}
        <section className="bg-white chamfer-md p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
          <h2 className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-4">PAYMENT METHODS</h2>

          <div className="flex items-center justify-between py-3 border-b border-[#E5E5E5]">
            <div className="flex items-center gap-3">
              <span className="text-xl">💳</span>
              <div>
                <p className="font-sans text-sm">•••• •••• •••• 4242</p>
                <p className="font-sans text-xs text-gray-500">Exp 12/26</p>
              </div>
            </div>
            <button className="font-sans text-xs text-[#BF2424] hover:underline">REMOVE</button>
          </div>

          <button className="mt-4 px-6 py-3 border-2 border-[#226D50] chamfer-sm font-sans text-sm uppercase tracking-wider text-[#226D50] hover:bg-[rgba(34,109,80,0.05)] transition-colors">
            + Add Payment Method
          </button>
        </section>

        {/* Notifications Section */}
        <section className="bg-white chamfer-md p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
          <h2 className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-4">NOTIFICATIONS</h2>

          <ToggleRow
            label="Lesson Reminders"
            checked={notifications.lessonReminders}
            onChange={(checked) => setNotifications({ ...notifications, lessonReminders: checked })}
          />
          <ToggleRow
            label="Achievement Alerts"
            checked={notifications.achievementAlerts}
            onChange={(checked) => setNotifications({ ...notifications, achievementAlerts: checked })}
          />
          <ToggleRow
            label="Tournament Updates"
            checked={notifications.tournamentUpdates}
            onChange={(checked) => setNotifications({ ...notifications, tournamentUpdates: checked })}
          />
          <ToggleRow
            label="Community Activity"
            checked={notifications.communityActivity}
            onChange={(checked) => setNotifications({ ...notifications, communityActivity: checked })}
          />
          <ToggleRow
            label="Marketing Emails"
            checked={notifications.marketingEmails}
            onChange={(checked) => setNotifications({ ...notifications, marketingEmails: checked })}
            isLast
          />
        </section>

        {/* Privacy Section */}
        <section className="bg-white chamfer-md p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
          <h2 className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-4">PRIVACY</h2>

          <ToggleRow
            label="Show my handicap publicly"
            checked={privacy.showHandicap}
            onChange={(checked) => setPrivacy({ ...privacy, showHandicap: checked })}
          />
          <ToggleRow
            label="Show on leaderboards"
            checked={privacy.showOnLeaderboards}
            onChange={(checked) => setPrivacy({ ...privacy, showOnLeaderboards: checked })}
          />
          <ToggleRow
            label="Allow messages from anyone"
            checked={privacy.allowMessages}
            onChange={(checked) => setPrivacy({ ...privacy, allowMessages: checked })}
            isLast
          />
        </section>

        {/* Delete Account */}
        <div className="text-center pt-4">
          <button className="font-sans text-sm text-[#BF2424] hover:underline">DELETE ACCOUNT</button>
        </div>
      </div>
    </div>
  )
}

function ToggleRow({
  label,
  checked,
  onChange,
  isLast = false,
}: {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  isLast?: boolean
}) {
  return (
    <div className={`flex items-center justify-between py-3 ${!isLast ? "border-b border-[#E5E5E5]" : ""}`}>
      <span className="font-sans text-sm">{label}</span>
      <button
        onClick={() => onChange(!checked)}
        className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
          checked ? "bg-[#226D50]" : "bg-[#CCCCCC]"
        }`}
      >
        <span
          className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
            checked ? "translate-x-[26px]" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  )
}
