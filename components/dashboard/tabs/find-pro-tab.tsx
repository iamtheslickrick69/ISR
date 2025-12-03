"use client"

import type React from "react"
import { useState } from "react"
import { Star, MapPin, ChevronRight, Clock } from "lucide-react"

// Pro Dashboard style card - chamfered corners, deeper shadow
const cardStyle = {
  clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
}

export function FindProTab() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]" style={cardStyle}>
        <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400 mb-2">FIND A PRO</h4>
        <h2 className="font-serif text-2xl tracking-wider text-black">MEET RILEY BUNKER</h2>
        <p className="text-sm text-gray-500 mt-1">Your Founding Instructor</p>
      </div>

      {/* Riley's Profile Card */}
      <div className="bg-white shadow-[0_4px_24px_rgba(0,0,0,0.12)]" style={cardStyle}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Left - Photo & Quick Info */}
          <div className="space-y-6">
            {/* Tour Card Style */}
            <div
              className="overflow-hidden"
              style={cardStyle}
            >
              <div
                className="px-6 pt-12 pb-16 relative"
                style={{ background: "linear-gradient(135deg, #D4AF37 0%, #a29e7b 100%)" }}
              >
                {/* Founding Pro Badge */}
                <div
                  className="absolute top-4 left-4 bg-white/25 backdrop-blur-sm px-3 py-1.5"
                  style={{
                    clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                  }}
                >
                  <span className="text-white font-serif text-[11px] tracking-[0.1em]">FOUNDING PRO</span>
                </div>

                {/* Avatar */}
                <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.15)] border-4 border-white">
                  {!imageError ? (
                    <img
                      src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaridog.png"
                      alt="Riley Bunker"
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-[#a29e7b] flex items-center justify-center">
                      <span className="font-serif text-3xl text-white">RB</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="pt-16 pb-6 px-6 text-center bg-white">
                <h3 className="font-serif text-2xl tracking-wider text-black mb-1">RILEY BUNKER</h3>
                <p className="text-gray-500 text-sm mb-1">PGA Professional</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5.0</span>
                  <span className="text-sm text-gray-400">(250 reviews)</span>
                </div>
                <p className="font-serif text-2xl text-[#226D50]">$90/hr</p>
              </div>
            </div>

            {/* Location Card */}
            <div
              className="bg-[#FAFAFA] p-5"
              style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
            >
              <h4 className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-3">TEACHES AT</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#226D50]" />
                  <span className="text-sm text-black">Back9 - American Fork</span>
                  <span className="text-xs text-[#226D50]">Primary</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Fox Hollow Golf Course</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Details */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">EXPERIENCE</p>
                <p className="font-serif text-3xl text-black">15y</p>
              </div>
              <div>
                <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">STUDENTS</p>
                <p className="font-serif text-3xl text-black">2,500+</p>
              </div>
              <div>
                <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">CERTIFIED</p>
                <p className="font-serif text-3xl text-black">PGA</p>
              </div>
            </div>

            {/* Specialties */}
            <div>
              <h4 className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-3">SPECIALTIES</h4>
              <div className="flex gap-2">
                <span
                  className="text-xs font-serif tracking-[0.1em] px-3 py-1.5 bg-[#226D50] text-white"
                  style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
                >
                  SHORT GAME
                </span>
                <span
                  className="text-xs font-serif tracking-[0.1em] px-3 py-1.5 bg-[#a29e7b] text-white"
                  style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
                >
                  MENTAL COACHING
                </span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h4 className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-3">ABOUT</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Riley specializes in short game mastery and mental coaching. Over 15 years, he's helped 2,500+ golfers at all skill levels improve their game and build lasting confidence on the course.
              </p>
            </div>

            {/* Availability */}
            <div>
              <h4 className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-3">AVAILABILITY</h4>
              <p className="text-sm text-gray-600 mb-2">Mon-Sat, 8am-6pm</p>
              <div className="flex items-center gap-2 text-[#226D50]">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">Next available: Tomorrow 2:00 PM</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <button
                className="flex-1 border-2 border-[#226D50] text-[#226D50] font-serif text-sm tracking-[0.1em] py-3 hover:bg-[#226D50] hover:text-white transition-all"
                style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
              >
                VIEW PROFILE
              </button>
              <button
                className="flex-1 bg-[#226D50] text-white font-serif text-sm tracking-[0.1em] py-3 hover:bg-[#1a5a42] transition-colors flex items-center justify-center gap-2"
                style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
              >
                BOOK LESSON
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div
        className="bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.12)] text-center"
        style={{
          ...cardStyle,
          border: "2px dashed #E5E7EB",
        }}
      >
        <h4 className="font-serif text-xl tracking-wider text-black mb-2">MORE INSTRUCTORS COMING SOON</h4>
        <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
          We're onboarding elite instructors across Utah. Join the waitlist to get notified.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#226D50] text-white font-serif text-sm tracking-[0.1em]" style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}>
            <Star className="w-4 h-4" />
            YOU'RE ON THE WAITLIST
          </div>
        ) : (
          <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-[280px] px-4 py-3 border-2 border-gray-200 text-sm focus:outline-none focus:border-[#226D50] transition-colors"
              style={{ clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)" }}
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#226D50] text-white font-serif text-sm tracking-[0.1em] px-6 py-3 hover:bg-[#1a5a42] transition-colors flex items-center justify-center gap-2"
              style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
            >
              JOIN WAITLIST
              <ChevronRight className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
