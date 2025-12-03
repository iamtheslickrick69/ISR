"use client"

import { useState } from "react"
import { Camera, Upload, Check, Star, ChevronRight } from "lucide-react"

export function ProProfileTab() {
  const [imageError, setImageError] = useState(false)
  const [availability, setAvailability] = useState({
    mon: { active: true, start: "9:00", end: "17:00" },
    tue: { active: true, start: "9:00", end: "17:00" },
    wed: { active: false, start: "", end: "" },
    thu: { active: true, start: "9:00", end: "17:00" },
    fri: { active: true, start: "9:00", end: "17:00" },
    sat: { active: true, start: "9:00", end: "12:00" },
    sun: { active: false, start: "", end: "" },
  })

  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

  return (
    <div className="space-y-8">
      {/* Top Row - Preview + Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Preview Card */}
        <div
          className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          style={{
            clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
          }}
        >
          <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400 mb-5">PROFILE PREVIEW</h4>

          {/* Preview Card with Gold Border */}
          <div className="border-4 border-[#a29e7b] p-4">
            <div className="flex gap-4">
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                {!imageError ? (
                  <img
                    src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaridog.png"
                    alt="Riley Bunker"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400">RB</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-serif text-lg tracking-wider">RILEY BUNKER</h4>
                </div>
                <p className="text-gray-500 text-sm mb-2">PGA Professional</p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5.0 (250)</span>
                </div>
                <p className="text-[#a29e7b] font-serif text-lg">$90/hr</p>
              </div>
            </div>

            {/* Badges Row */}
            <div className="flex gap-2 mt-4">
              <div
                className="bg-black/10 px-3 py-1"
                style={{
                  clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                }}
              >
                <img
                  src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaablack1.png"
                  alt="Academy"
                  className="h-5"
                />
              </div>
              <div className="bg-gradient-to-r from-amber-100 to-yellow-50 px-3 py-1 text-xs font-medium text-amber-800">
                PGA CERTIFIED
              </div>
            </div>

            {/* Bio Preview */}
            <p className="text-sm text-gray-600 mt-4 line-clamp-2">
              15 years teaching at Back Nine locations. Specializes in short game and mental coaching...
            </p>
          </div>
        </div>

        {/* Profile Settings Card */}
        <div
          className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          style={{
            clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
          }}
        >
          <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400 mb-5">PROFILE SETTINGS</h4>

          <div className="space-y-4">
            {/* Photo Upload */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-2">Profile Photo</label>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img
                    src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaridog.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="flex items-center gap-2 text-sm text-[#a29e7b] hover:underline">
                  <Camera className="h-4 w-4" />
                  Change Photo
                </button>
              </div>
            </div>

            {/* Name Input */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-2">Display Name</label>
              <input
                type="text"
                defaultValue="Riley Bunker"
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-[#a29e7b] focus:ring-2 focus:ring-[#a29e7b]/15 outline-none transition-all"
                style={{
                  clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                }}
              />
            </div>

            {/* Hourly Rate */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-2">Hourly Rate</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                <input
                  type="number"
                  defaultValue="90"
                  className="w-full pl-8 pr-4 py-3 border border-gray-200 text-sm focus:border-[#a29e7b] focus:ring-2 focus:ring-[#a29e7b]/15 outline-none transition-all"
                  style={{
                    clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                  }}
                />
              </div>
            </div>

            {/* Bio Textarea */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-2">Bio (max 500 chars)</label>
              <textarea
                rows={3}
                maxLength={500}
                defaultValue="15 years teaching at Back Nine locations. Specializes in short game and mental coaching. Teaches all skill levels from beginners to collegiate athletes."
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-[#a29e7b] focus:ring-2 focus:ring-[#a29e7b]/15 outline-none transition-all resize-none"
                style={{
                  clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                }}
              />
            </div>

            {/* Credentials Upload */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-2">Credentials</label>
              <button
                className="flex items-center gap-2 px-4 py-3 border border-dashed border-gray-300 text-sm text-gray-500 hover:border-[#a29e7b] hover:text-[#a29e7b] transition-all w-full"
                style={{
                  clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                }}
              >
                <Upload className="h-4 w-4" />
                Upload PGA Card or Credentials
              </button>
              <div className="flex items-center gap-1.5 mt-2 text-xs text-green-600">
                <Check className="h-3.5 w-3.5" />
                PGA Certification Verified
              </div>
            </div>

            {/* Save Button */}
            <button
              className="w-full bg-[#226D50] text-white font-serif text-sm tracking-[0.1em] py-4 hover:bg-[#1a5a42] transition-all mt-2"
              style={{
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            >
              SAVE CHANGES
            </button>
          </div>
        </div>
      </div>

      {/* Availability Card - Full Width */}
      <div
        className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
        style={{
          clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
        }}
      >
        <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400 mb-5">AVAILABILITY</h4>

        <div className="grid grid-cols-7 gap-2 overflow-x-auto">
          {days.map((day) => {
            const dayKey = day.toLowerCase().slice(0, 3) as keyof typeof availability
            const isActive = availability[dayKey]?.active

            return (
              <div key={day} className="text-center min-w-[80px]">
                <p className="font-serif text-xs tracking-wider text-gray-500 mb-2">{day}</p>
                <button
                  onClick={() => {
                    setAvailability((prev) => ({
                      ...prev,
                      [dayKey]: { ...prev[dayKey], active: !prev[dayKey].active },
                    }))
                  }}
                  className={`w-full py-3 text-sm font-medium transition-all ${
                    isActive ? "bg-[#a29e7b] text-white" : "bg-gray-100 text-gray-400"
                  }`}
                  style={{
                    clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                  }}
                >
                  {isActive
                    ? `${availability[dayKey].start?.split(":")[0]}-${availability[dayKey].end?.split(":")[0]}`
                    : "OFF"}
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Reviews Card - Full Width */}
      <div
        className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
        style={{
          clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
        }}
      >
        <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400 mb-5">REVIEWS</h4>

        <div className="space-y-4">
          <div className="py-4 border-b border-gray-100">
            <div className="flex text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-2">
              "Best instructor I've ever had! Riley completely transformed my short game in just 3 lessons."
            </p>
            <p className="text-sm text-gray-400">— John D., Jan 1, 2025</p>
          </div>

          <div className="py-4 border-b border-gray-100">
            <div className="flex text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-2">
              "Riley helped me drop 5 strokes off my handicap. His mental game coaching is top-notch."
            </p>
            <p className="text-sm text-gray-400">— Sarah M., Dec 28, 2024</p>
          </div>
        </div>

        <button className="flex items-center gap-1 mt-4 text-[#a29e7b] font-serif text-sm tracking-wider hover:gap-2 transition-all">
          VIEW ALL REVIEWS
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
