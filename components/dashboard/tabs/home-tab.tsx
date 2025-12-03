"use client"

import { useState, useEffect } from "react"
import { Star, ChevronRight, MapPin } from "lucide-react"

// Pro Dashboard style card - chamfered corners, deeper shadow
const cardStyle = {
  clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
}

export function HomeTab() {
  return (
    <div className="space-y-8">
      {/* 2-Column Layout - Pro Style */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <TourCardSection />
          <MyGoalsSection />
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <QuickStatsSection />
          <UpcomingLessonSection />
          <MyCaddieSection />
        </div>
      </div>

      {/* Full Width Sections */}
      <MyBagSection />
      <RecentActivitySection />
    </div>
  )
}

function TourCardSection() {
  const [progress, setProgress] = useState(0)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(82), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="bg-white shadow-[0_4px_24px_rgba(0,0,0,0.12)] overflow-hidden"
      style={cardStyle}
    >
      {/* Header with gradient */}
      <div
        className="px-6 pt-12 pb-16 relative"
        style={{ background: "linear-gradient(135deg, #2A8561 0%, #226D50 100%)" }}
      >
        {/* Founding Member Badge */}
        <div
          className="absolute top-4 left-4 bg-white/25 backdrop-blur-sm px-3 py-1.5"
          style={{
            clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
          }}
        >
          <span className="text-white font-serif text-[11px] tracking-[0.1em]">FOUNDING MEMBER</span>
        </div>

        {/* Avatar */}
        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.15)] border-4 border-white">
          {!imageError ? (
            <img
              src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaBIG.JPG"
              alt="Blake A."
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-[#226D50] flex items-center justify-center">
              <span className="font-serif text-3xl text-white">BA</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="pt-16 pb-6 px-6 text-center">
        <h3 className="font-serif text-2xl tracking-wider text-black mb-1">BLAKE A.</h3>
        <p className="text-gray-500 text-sm mb-1">Level 7 • Eagle</p>
        <p className="text-gray-400 text-sm mb-5">12.4 Handicap</p>

        {/* Progress Bar */}
        <div className="mb-2">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-[1500ms] ease-out"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #226D50 0%, #2A8561 100%)",
              }}
            />
          </div>
        </div>
        <p className="text-gray-400 text-xs mb-5">2,450 / 3,000 XP</p>

        {/* Share Card Button */}
        <button
          className="w-full border-2 border-[#226D50] text-[#226D50] font-serif text-sm tracking-[0.1em] py-3 hover:bg-[#226D50] hover:text-white transition-all duration-200"
          style={{
            clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
          }}
        >
          SHARE CARD
        </button>
      </div>
    </div>
  )
}

function MyGoalsSection() {
  return (
    <div
      className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
      style={cardStyle}
    >
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400">MY GOALS</h4>
        <button className="font-serif text-sm tracking-wider text-[#226D50] hover:underline">EDIT</button>
      </div>

      <div className="space-y-6">
        {/* Handicap Goal */}
        <div className="py-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm font-medium text-black">Handicap Goal</p>
              <p className="text-xs text-gray-500">12.4 → 10.0</p>
            </div>
            <span className="font-serif text-2xl text-black">73%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[73%] bg-[#226D50] rounded-full" />
          </div>
          <p className="text-xs text-[#226D50] mt-2">-0.8 this month</p>
        </div>

        {/* Monthly Lessons Goal */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm font-medium text-black">Monthly Lessons</p>
              <p className="text-xs text-gray-500">2 / 4 completed</p>
            </div>
            <span className="font-serif text-2xl text-black">50%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[50%] bg-[#226D50] rounded-full" />
          </div>
          <p className="text-xs text-gray-500 mt-2">On track</p>
        </div>
      </div>
    </div>
  )
}

function QuickStatsSection() {
  return (
    <div
      className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
      style={cardStyle}
    >
      <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400 mb-5">QUICK STATS</h4>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">HANDICAP</p>
          <p className="font-serif text-4xl text-black">12.4</p>
          <p className="text-xs text-[#226D50]">-0.8 this month</p>
        </div>
        <div>
          <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">ROUNDS</p>
          <p className="font-serif text-4xl text-black">52</p>
          <p className="text-xs text-gray-500">this year</p>
        </div>
        <div>
          <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">AVG SCORE</p>
          <p className="font-serif text-4xl text-black">87</p>
          <p className="text-xs text-gray-500">last 10 rounds</p>
        </div>
        <div>
          <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">LESSONS</p>
          <p className="font-serif text-4xl text-black">8</p>
          <p className="text-xs text-gray-500">with Riley</p>
        </div>
      </div>
    </div>
  )
}

function UpcomingLessonSection() {
  return (
    <div
      className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
      style={cardStyle}
    >
      <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400 mb-5">UPCOMING LESSON</h4>

      <div className="space-y-0">
        <div className="py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <span className="font-serif text-sm text-black">Tomorrow</span>
            <span className="text-gray-300">—</span>
            <span className="text-sm text-black">2:00 PM</span>
          </div>
          <div className="flex items-center gap-1 mt-1 text-gray-500">
            <MapPin className="h-3.5 w-3.5" />
            <span className="text-xs">Back9 - American Fork</span>
          </div>
        </div>

        <div className="py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaridog.png"
                alt="Riley Bunker"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-serif text-sm text-black">RILEY BUNKER</p>
              <p className="text-xs text-gray-500">Short Game & Putting • 60 min</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <button
          className="flex-1 bg-[#226D50] text-white font-serif text-xs tracking-wider py-3 hover:bg-[#1a5a42] transition-colors"
          style={{
            clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
          }}
        >
          JOIN
        </button>
        <button
          className="flex-1 border border-[#226D50] text-[#226D50] font-serif text-xs tracking-wider py-3 hover:bg-[#226D50] hover:text-white transition-colors"
          style={{
            clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
          }}
        >
          RESCHEDULE
        </button>
        <button
          className="flex-1 border border-gray-300 text-gray-600 font-serif text-xs tracking-wider py-3 hover:border-gray-400 transition-colors"
          style={{
            clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
          }}
        >
          MESSAGE
        </button>
      </div>
    </div>
  )
}

function MyCaddieSection() {
  const [imageError, setImageError] = useState(false)

  return (
    <div
      className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
      style={cardStyle}
    >
      <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400 mb-5">MY CADDIE</h4>

      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          {!imageError ? (
            <img
              src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaridog.png"
              alt="Riley Bunker"
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-[#226D50] flex items-center justify-center">
              <span className="font-serif text-xl text-white">RB</span>
            </div>
          )}
        </div>
        <div className="flex-1">
          <h4 className="font-serif text-lg tracking-wider text-black">RILEY BUNKER</h4>
          <p className="text-sm text-gray-500">Your Caddie since Oct 2024</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <span className="text-sm text-gray-600">5.0</span>
            <span className="text-sm text-gray-400">• 8 lessons</span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-5">
        <button
          className="flex-1 border border-[#226D50] text-[#226D50] font-serif text-xs tracking-wider py-3 hover:bg-[#226D50] hover:text-white transition-colors"
          style={{
            clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
          }}
        >
          MESSAGE
        </button>
        <button
          className="flex-1 bg-[#226D50] text-white font-serif text-xs tracking-wider py-3 hover:bg-[#1a5a42] transition-colors"
          style={{
            clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
          }}
        >
          BOOK LESSON
        </button>
      </div>
    </div>
  )
}

function MyBagSection() {
  const clubs = [
    { name: "Driver", brand: "TaylorMade", model: "Stealth 2 Plus" },
    { name: "3-Wood", brand: "Callaway", model: "Paradym" },
    { name: "5-Iron", brand: "Mizuno", model: "JPX 923" },
    { name: "Putter", brand: "Scotty Cameron", model: "Phantom X 5" },
  ]

  return (
    <div
      className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
      style={cardStyle}
    >
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400">MY BAG</h4>
        <button className="font-serif text-sm tracking-wider text-[#226D50] hover:underline flex items-center gap-1">
          EDIT <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {clubs.map((club) => (
          <div
            key={club.name}
            className="bg-[#FAFAFA] p-4 hover:bg-[#F5F5F5] transition-colors cursor-pointer"
            style={{
              clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
            }}
          >
            <p className="font-serif text-sm tracking-wider text-black mb-1">{club.name}</p>
            <p className="text-xs text-gray-500">{club.brand}</p>
            <p className="text-xs text-gray-400">{club.model}</p>
          </div>
        ))}
      </div>

      <button
        className="w-full mt-4 border-2 border-dashed border-gray-300 text-gray-500 font-serif text-xs tracking-wider py-4 hover:border-[#226D50] hover:text-[#226D50] transition-colors"
        style={{
          clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
        }}
      >
        + ADD CLUB
      </button>
    </div>
  )
}

function RecentActivitySection() {
  const activities = [
    { action: "Logged a round", detail: "Fox Hollow - 87", time: "2 hours ago" },
    { action: "Riley commented", detail: "Great progress on short game!", time: "5 hours ago" },
    { action: "Achievement unlocked", detail: "First Birdie", time: "1 day ago" },
    { action: "Lesson completed", detail: "Short Game with Riley", time: "2 days ago" },
  ]

  return (
    <div
      className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
      style={cardStyle}
    >
      <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400 mb-5">RECENT ACTIVITY</h4>

      <div className="space-y-0">
        {activities.map((activity, idx) => (
          <div
            key={idx}
            className={`py-4 ${idx !== activities.length - 1 ? "border-b border-gray-100" : ""}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-black">{activity.action}</p>
                <p className="text-xs text-gray-500">{activity.detail}</p>
              </div>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="flex items-center gap-1 mt-4 text-[#226D50] font-serif text-sm tracking-wider hover:gap-2 transition-all">
        VIEW ALL ACTIVITY
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}
