"use client"

import { useState, useEffect, useRef } from "react"
import {
  Star,
  Trophy,
  Users,
  ChevronRight,
  TrendingDown,
  TrendingUp,
  MessageCircle,
  Flag,
  Sparkles,
  Plus,
  Edit3,
} from "lucide-react"

const cardBaseStyles = {
  background: "#FFFFFF",
  borderRadius: "16px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
}

export function HomeTab() {
  return (
    <>
      {/* 3-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - 45% */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <TourCardSection />
          <MyGoalsSection />
        </div>

        {/* Middle Column - 30% */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <QuickStatsSection />
          <UpcomingLessonSection />
        </div>

        {/* Right Column - 25% */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          <MyCaddieSection />
          <AchievementsSection />
          <RewardsSection />
          <InviteFriendsSection />
        </div>
      </div>

      <MyBagSection />

      {/* Bottom - Recent Activity Feed */}
      <RecentActivitySection />
    </>
  )
}

function TourCardSection() {
  const [progress, setProgress] = useState(0)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate progress bar on load
    const timer = setTimeout(() => setProgress(82), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="p-8" style={cardBaseStyles}>
      {/* Tour Card */}
      <div
        className="w-full max-w-[450px] mx-auto overflow-hidden"
        style={{
          borderRadius: "16px",
          background: "linear-gradient(135deg, #2A8561 0%, #226D50 100%)",
          boxShadow: "0 4px 16px rgba(34, 109, 80, 0.3)",
        }}
      >
        <div className="p-8">
          {/* Founding Member Badge */}
          <span
            className="inline-block bg-[#ADDA98] text-black text-[12px] px-3 py-1 uppercase tracking-wider font-semibold mb-6"
            style={{ borderRadius: "4px" }}
          >
            Founding Member
          </span>

          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-[#226D50] shadow-lg overflow-hidden relative">
              <img
                src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaBIG.JPG"
                alt="Blake A."
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                }}
              />
              <span className="absolute">BA</span>
            </div>
          </div>

          <h4 className="font-serif text-[28px] tracking-wider text-white text-center font-bold">BLAKE A.</h4>
          <p className="text-[16px] text-white/90 text-center mb-6">Level 7 • Eagle</p>

          {/* Progress Bar */}
          <div className="h-2 bg-white/20 rounded-full mb-2 overflow-hidden">
            <div
              ref={progressRef}
              className="h-full rounded-full transition-all duration-[1500ms] ease-out"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #FFFFFF 0%, #E0E0E0 100%)",
                boxShadow: progress > 75 ? "0 0 10px rgba(255,255,255,0.5)" : "none",
              }}
            />
          </div>
          <p className="text-[14px] text-white/80 text-center mb-6">2,450 / 3,000 XP to Level 8</p>

          {/* Share Button */}
          <button className="w-full border-2 border-white text-white py-3 text-[12px] font-medium uppercase tracking-wider hover:bg-white/10 transition-all duration-150 rounded-lg">
            Share Card
          </button>
        </div>
      </div>
    </div>
  )
}

function MyGoalsSection() {
  return (
    <div className="p-6" style={cardBaseStyles}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[18px] font-bold text-black">MY GOALS</h3>
        <button className="text-[14px] text-[#226D50] hover:underline font-medium">Edit</button>
      </div>

      {/* Goal 1 - Handicap */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[24px]">🎯</span>
          <div className="flex-1">
            <span className="text-[14px] font-semibold text-black">Handicap Goal</span>
            <span className="text-[14px] text-gray-500 ml-2">12.4 → 10.0</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden max-w-[220px]">
            <div
              className="h-full rounded-full"
              style={{
                width: "73%",
                background: "linear-gradient(90deg, #226D50 0%, #2d8a68 100%)",
                boxShadow: "0 0 8px rgba(34, 109, 80, 0.4)",
              }}
            />
          </div>
          <span className="text-[14px] font-bold text-[#226D50]">73%</span>
        </div>
        <div className="flex items-center gap-1 mt-2 text-[#226D50]">
          <TrendingDown className="h-4 w-4" />
          <span className="text-[14px]">↓ 0.8 this month</span>
        </div>
      </div>

      {/* Goal 2 - Monthly Lessons */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[24px]">📅</span>
          <div className="flex-1">
            <span className="text-[14px] font-semibold text-black">Monthly Lessons</span>
            <span className="text-[14px] text-gray-500 ml-2">2 / 4 completed</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden max-w-[220px]">
            <div
              className="h-full rounded-full"
              style={{
                width: "50%",
                background: "linear-gradient(90deg, #ADDA98 0%, #c4e8b0 100%)",
              }}
            />
          </div>
          <span className="text-[14px] font-bold text-[#ADDA98]">50%</span>
        </div>
        <p className="text-[12px] text-[#ADDA98] mt-2">On track!</p>
      </div>
    </div>
  )
}

function QuickStatsSection() {
  return (
    <div className="p-6" style={cardBaseStyles}>
      <h3 className="text-[18px] font-bold text-black mb-6">QUICK STATS</h3>

      <div className="space-y-4">
        {/* Handicap */}
        <div className="p-4 bg-[#F5F5F5] rounded-lg">
          <p className="text-[12px] uppercase tracking-widest text-gray-500 mb-1">HANDICAP</p>
          <div className="flex items-center justify-between">
            <span className="font-serif text-[32px] font-bold text-black">12.4</span>
            <MiniSparkline trend="down" />
          </div>
          <div className="flex items-center gap-1 text-[#226D50] mt-1">
            <TrendingDown className="h-3 w-3" />
            <span className="text-[12px]">▼ 0.8 this month</span>
          </div>
        </div>

        {/* Rounds Logged */}
        <div className="p-4 bg-[#F5F5F5] rounded-lg">
          <p className="text-[12px] uppercase tracking-widest text-gray-500 mb-1">ROUNDS LOGGED</p>
          <div className="flex items-center justify-between">
            <span className="font-serif text-[32px] font-bold text-black">52</span>
            <MiniHeatmap />
          </div>
          <p className="text-[12px] text-[#ADDA98] mt-1">Top 15% in your group</p>
        </div>

        {/* Avg Score */}
        <div className="p-4 bg-[#F5F5F5] rounded-lg">
          <p className="text-[12px] uppercase tracking-widest text-gray-500 mb-1">AVG SCORE</p>
          <div className="flex items-center justify-between">
            <span className="font-serif text-[32px] font-bold text-black">87</span>
            <MiniBarChart />
          </div>
          <div className="flex items-center gap-1 text-[#BF2424] mt-1">
            <TrendingUp className="h-3 w-3" />
            <span className="text-[12px]">+2 from last round</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function MiniSparkline({ trend }: { trend: "up" | "down" }) {
  return (
    <svg width="60" height="24" viewBox="0 0 60 24" className="overflow-visible">
      <path
        d="M0 20 L10 18 L20 16 L30 14 L40 10 L50 8 L60 4"
        fill="none"
        stroke="#226D50"
        strokeWidth="2"
        style={{ filter: "drop-shadow(0 0 3px rgba(34, 109, 80, 0.3))" }}
      />
    </svg>
  )
}

function MiniHeatmap() {
  const days = Array.from({ length: 35 }, (_, i) => Math.random() > 0.6)
  return (
    <div className="grid grid-cols-7 gap-[2px]">
      {days.map((hasRound, i) => (
        <div key={i} className={`w-[6px] h-[6px] rounded-sm ${hasRound ? "bg-[#226D50]" : "bg-gray-300"}`} />
      ))}
    </div>
  )
}

function MiniBarChart() {
  const bars = [85, 88, 86, 90, 87]
  const max = Math.max(...bars)
  return (
    <div className="flex items-end gap-1 h-6">
      {bars.map((val, i) => (
        <div key={i} className="w-2 bg-[#226D50] rounded-t" style={{ height: `${(val / max) * 100}%` }} />
      ))}
    </div>
  )
}

function UpcomingLessonSection() {
  return (
    <div
      className="p-6"
      style={{
        ...cardBaseStyles,
        border: "2px solid #226D50",
      }}
    >
      <h3 className="text-[14px] uppercase tracking-widest text-gray-500 mb-4">UPCOMING LESSON</h3>

      <p className="text-[18px] font-bold text-black mb-1">TOMORROW • DEC 3 • 2:00 PM</p>
      <div className="flex items-center gap-2 text-[#226D50] mb-4">
        <span className="text-[14px]">⏱️ In 22 hours 15 minutes</span>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
          <img
            src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaridog.png"
            alt="Riley Bunker"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-[16px] font-semibold text-black">RILEY BUNKER</p>
          <p className="text-[14px] text-gray-500">Short Game & Putting</p>
          <p className="text-[14px] text-gray-500">Back9 - American Fork • 60 min</p>
        </div>
      </div>

      <span className="inline-block bg-[#226D50] text-white text-[10px] px-3 py-1.5 uppercase tracking-wider rounded mb-4">
        Simulator
      </span>

      <div className="flex flex-wrap gap-2">
        <button className="flex-1 bg-[#226D50] text-white py-2.5 text-[12px] font-medium uppercase tracking-wider rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all">
          Join
        </button>
        <button className="flex-1 border-2 border-[#226D50] text-[#226D50] py-2.5 text-[12px] font-medium uppercase tracking-wider rounded-lg hover:bg-[#226D50]/5 transition-all">
          Reschedule
        </button>
        <button className="flex-1 border-2 border-gray-300 text-gray-600 py-2.5 text-[12px] font-medium uppercase tracking-wider rounded-lg hover:border-gray-400 transition-all">
          Message
        </button>
      </div>
    </div>
  )
}

function MyCaddieSection() {
  return (
    <div className="p-6 text-center" style={cardBaseStyles}>
      {/* Photo */}
      <div className="w-[120px] h-[120px] mx-auto rounded-full overflow-hidden mb-4 border-4 border-[#226D50]/20">
        <img
          src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaridog.png"
          alt="Riley Bunker"
          className="w-full h-full object-cover"
        />
      </div>

      <h4 className="text-[20px] font-bold text-black">RILEY BUNKER</h4>
      <p className="text-[14px] text-gray-500 mb-2">Your Caddie since Oct 2024</p>
      <div className="flex items-center justify-center gap-1 text-[14px] mb-4">
        <Star className="h-4 w-4 fill-[#FFD700] text-[#FFD700]" />
        <span className="font-medium text-black">5.0</span>
        <span className="text-gray-400">• 8 lessons together</span>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 border-2 border-[#226D50] text-[#226D50] py-2 text-[11px] font-medium uppercase tracking-wider rounded-lg hover:bg-[#226D50]/5 transition-all">
          Message
        </button>
        <button className="flex-1 bg-[#226D50] text-white py-2 text-[11px] font-medium uppercase tracking-wider rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all">
          Book Lesson
        </button>
      </div>
    </div>
  )
}

function AchievementsSection() {
  const achievements = [
    { emoji: "🏆", label: "10 Lessons", isNew: false },
    { emoji: "🎯", label: "1st Birdie", isNew: true },
    { emoji: "💼", label: "Full Bag", isNew: false },
  ]

  return (
    <div className="p-6" style={cardBaseStyles}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[18px] font-bold text-black">RECENT ACHIEVEMENTS</h3>
      </div>
      <p className="text-[14px] text-[#226D50] mb-4">12 / 50 Unlocked</p>

      <div className="flex gap-3 mb-4">
        {achievements.map((a) => (
          <div
            key={a.label}
            className={`flex-1 h-20 bg-[#F5F5F5] flex flex-col items-center justify-center rounded-lg relative ${
              a.isNew ? "animate-pulse-subtle" : ""
            }`}
          >
            <span className="text-[32px] mb-1">{a.emoji}</span>
            <span className="text-[10px] font-semibold text-center leading-tight">{a.label}</span>
          </div>
        ))}
      </div>

      {/* Next Achievement Progress */}
      <div className="p-3 bg-[#F5F5F5] rounded-lg">
        <p className="text-[12px] text-gray-600 mb-2">Next: Break 85 (3 rounds under 85 needed)</p>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full w-[40%] bg-[#226D50] rounded-full" />
          </div>
          <span className="text-[12px] text-gray-500">2/5</span>
        </div>
      </div>

      <button className="text-[#226D50] text-[14px] font-medium hover:underline flex items-center gap-1 mt-4">
        View All <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}

function RewardsSection() {
  return (
    <div className="p-6" style={cardBaseStyles}>
      <h3 className="text-[18px] font-bold text-black mb-4">REWARDS</h3>

      <div className="flex items-center gap-2 mb-4">
        <Trophy className="h-6 w-6 text-[#226D50]" />
        <span className="text-[32px] font-bold text-black">2,450 XP</span>
      </div>
      <p className="text-[14px] text-gray-500 mb-4">Total XP Earned</p>

      <p className="text-[12px] uppercase tracking-widest text-gray-500 mb-1">NEXT REWARD:</p>
      <div className="flex items-center gap-2 mb-3">
        <span>💳</span>
        <span className="text-[16px] font-semibold text-black">$5 Lesson Credit</span>
      </div>

      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
        <div
          className="h-full w-[98%] rounded-full"
          style={{ background: "linear-gradient(90deg, #ADDA98 0%, #c4e8b0 100%)" }}
        />
      </div>
      <p className="text-[14px] text-[#ADDA98] mb-4">50 XP away! (at 2,500 XP)</p>

      <button className="w-full border-2 border-[#ADDA98] text-[#226D50] py-2.5 text-[12px] font-medium uppercase tracking-wider rounded-lg hover:bg-[#ADDA98]/10 transition-all">
        View Rewards
      </button>
    </div>
  )
}

function InviteFriendsSection() {
  return (
    <div
      className="p-6"
      style={{
        ...cardBaseStyles,
        background: "#F0F9F4",
      }}
    >
      <h3 className="text-[18px] font-bold text-black mb-4">INVITE FRIENDS</h3>

      <div className="flex items-center gap-2 mb-4">
        <Users className="h-5 w-5 text-[#226D50]" />
        <span className="text-[16px] text-black">Earn 250 XP for each friend who joins!</span>
      </div>

      <div className="text-[14px] text-black mb-3">
        <p>
          You've invited: <span className="font-bold text-[#226D50]">2</span>
        </p>
        <p>
          They've joined: <span className="font-bold text-[#226D50]">2</span>
        </p>
      </div>

      <p className="text-[12px] text-gray-500 mb-4">2,847 golfers joined via referral this month</p>

      <button className="w-full bg-[#226D50] text-white py-3 text-[12px] font-medium uppercase tracking-wider rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all">
        Invite Friends, Earn XP →
      </button>
    </div>
  )
}

function MyBagSection() {
  const clubs = [
    { name: "Driver", brand: "TaylorMade", model: "Stealth 2 Plus", filled: true },
    { name: "3-Wood", brand: "Callaway", model: "Paradym", filled: true },
    { name: "5-Iron", brand: "Mizuno", model: "JPX 923", filled: true },
    { name: "Putter", brand: "Scotty Cameron", model: "Phantom X 5", filled: true },
  ]

  return (
    <div className="p-8" style={cardBaseStyles}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[20px] font-bold text-black">MY BAG</h3>
        <button className="flex items-center gap-2 text-[14px] text-[#226D50] hover:underline font-medium">
          <Edit3 className="h-4 w-4" />
          EDIT
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {clubs.map((club) => (
          <div
            key={club.name}
            className="bg-[#F5F5F5] rounded-xl p-4 text-center hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer"
          >
            <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-full flex items-center justify-center shadow-sm">
              <span className="text-2xl">🏌️</span>
            </div>
            <p className="text-[14px] font-bold text-black">{club.name}</p>
            <p className="text-[12px] text-gray-500">{club.brand}</p>
            <p className="text-[11px] text-gray-400">{club.model}</p>
          </div>
        ))}
      </div>

      <button className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-[#226D50] text-[#226D50] rounded-xl hover:bg-[#226D50]/5 transition-all w-full justify-center">
        <Plus className="h-5 w-5" />
        <span className="text-[14px] font-medium uppercase tracking-wider">Add Club</span>
      </button>
    </div>
  )
}

function RecentActivitySection() {
  const activities = [
    {
      icon: <Flag className="h-4 w-4 text-[#226D50]" />,
      iconBg: "#E8F5E9",
      title: "You logged a round at Fox Hollow - 87",
      subtitle: "↓2 from last round! 🎯",
      subtitleColor: "#226D50",
      time: "2 hours ago",
    },
    {
      icon: <MessageCircle className="h-4 w-4 text-[#2196F3]" />,
      iconBg: "#E3F2FD",
      title: "Riley commented on your Tour Card",
      subtitle: '"Great progress on short game!"',
      subtitleColor: "#6B7280",
      time: "5 hours ago",
    },
    {
      icon: <Trophy className="h-4 w-4 text-[#FFD700]" />,
      iconBg: "#FFFDE7",
      title: "Sarah M. unlocked 'First Birdie' achievement",
      subtitle: "",
      subtitleColor: "",
      time: "1 day ago",
    },
    {
      icon: <Sparkles className="h-4 w-4 text-[#9C27B0]" />,
      iconBg: "#F3E5F5",
      title: "New tips posted in Short Game Masters community",
      subtitle: "",
      subtitleColor: "",
      time: "2 days ago",
    },
  ]

  return (
    <div className="p-8" style={cardBaseStyles}>
      <h3 className="text-[20px] font-bold text-black mb-6">RECENT ACTIVITY</h3>

      <div className="space-y-4">
        {activities.map((activity, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#FAFAFA] cursor-pointer transition-colors"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: activity.iconBg }}
            >
              {activity.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[16px] text-black hover:text-[#226D50] transition-colors">{activity.title}</p>
              {activity.subtitle && (
                <p className="text-[14px] italic" style={{ color: activity.subtitleColor }}>
                  {activity.subtitle}
                </p>
              )}
            </div>
            <span className="text-[12px] text-gray-400 flex-shrink-0">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
