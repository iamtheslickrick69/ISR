"use client"

import { useState, useEffect } from "react"
import {
  Plus,
  MapPin,
  Users,
  Trophy,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Clock,
  Calendar,
  Target,
  TrendingUp,
  TrendingDown,
  Camera,
  MessageSquare,
  ArrowRight,
} from "lucide-react"

type SubTab = "upcoming" | "my-tournaments" | "leaderboards" | "past"

export function TournamentsTab() {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>("upcoming")

  const subTabs = [
    { id: "upcoming" as SubTab, label: "UPCOMING" },
    { id: "my-tournaments" as SubTab, label: "MY TOURNAMENTS" },
    { id: "leaderboards" as SubTab, label: "LEADERBOARDS" },
    { id: "past" as SubTab, label: "PAST" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="font-serif text-[28px] tracking-wider text-black">TOURNAMENTS</h1>
        <button
          className="flex items-center gap-2 px-5 py-2.5 bg-[#226D50] font-sans text-xs uppercase tracking-wider text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
          style={{
            clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
          }}
        >
          <Plus className="w-4 h-4" />
          Create League
        </button>
      </div>

      {/* Sub-tabs */}
      <div className="flex gap-6 border-b border-[#E5E5E5]">
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id)}
            className={`pb-3 font-sans text-sm uppercase tracking-wider transition-colors relative ${
              activeSubTab === tab.id ? "text-[#226D50]" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab.label}
            {activeSubTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#226D50]" />}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        {activeSubTab === "upcoming" && <UpcomingSubTab />}
        {activeSubTab === "my-tournaments" && <MyTournamentsSubTab />}
        {activeSubTab === "leaderboards" && <LeaderboardsSubTab />}
        {activeSubTab === "past" && <PastSubTab />}
      </div>
    </div>
  )
}

function UpcomingSubTab() {
  const [countdown, setCountdown] = useState({ days: 13, hours: 15, minutes: 30, seconds: 45 })

  // Live countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
        }
        if (minutes < 0) {
          minutes = 59
          hours--
        }
        if (hours < 0) {
          hours = 23
          days--
        }
        if (days < 0) {
          days = 0
          hours = 0
          minutes = 0
          seconds = 0
        }
        return { days, hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const upcomingTournaments = [
    {
      id: "1",
      title: "WINTER CHAMPIONSHIP",
      date: "Dec 8, 2025",
      location: "Back9 - American Fork",
      entry: 25,
      prizePool: 500,
      spotsLeft: 12,
      totalSpots: 32,
      format: "Stroke Play",
      holes: 18,
      skillLevel: "All skill levels",
      type: "back9",
      featured: true,
    },
    {
      id: "2",
      title: "BACK9 MONTHLY MEDAL",
      date: "Dec 12, 2025",
      location: "Fox Hollow Golf Course",
      entry: 75,
      prizePool: 1500,
      spotsLeft: 8,
      totalSpots: 48,
      format: "Best Ball",
      holes: 18,
      skillLevel: "All skill levels",
      type: "course",
      featured: false,
    },
    {
      id: "3",
      title: "BLAKE'S LEAGUE",
      date: "Nov 28, 2025",
      location: "Various Locations",
      entry: 0,
      prizePool: 0,
      spotsLeft: 2,
      totalSpots: 8,
      format: "Match Play",
      holes: 9,
      skillLevel: "Invite Only",
      type: "private",
      featured: false,
    },
  ]

  const getBorderColor = (type: string) => {
    switch (type) {
      case "back9":
        return "#226D50"
      case "course":
        return "#a29e7b"
      case "private":
        return "#3B82F6"
      default:
        return "#E5E7EB"
    }
  }

  return (
    <div className="space-y-8">
      {/* Featured Event */}
      <div>
        <span className="font-sans text-xs uppercase tracking-widest text-[#226D50] font-bold mb-4 block">
          FEATURED EVENT
        </span>
        <div className="bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] overflow-hidden">
          {/* Hero Image with gradient overlay */}
          <div className="h-[400px] relative">
            <img
              src="/golf-tournament-championship-aerial-course-view.jpg"
              alt="Tournament banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Event info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="font-serif text-[36px] tracking-wider">BACK9 WINTER CHAMPIONSHIP</h2>
              <p className="font-sans text-lg opacity-90 mt-1">December 15-17, 2025</p>

              {/* Countdown */}
              <div className="flex items-center gap-4 mt-4">
                <span className="font-sans text-sm uppercase tracking-wider opacity-80">Registration Closes In:</span>
                <div className="flex gap-2">
                  {[
                    { value: countdown.days, label: "DAYS" },
                    { value: countdown.hours, label: "HRS" },
                    { value: countdown.minutes, label: "MIN" },
                    { value: countdown.seconds, label: "SEC" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-[60px] h-[60px] bg-white/10 backdrop-blur-sm border-2 border-[#226D50] rounded-lg flex items-center justify-center">
                        <span className="font-bold text-2xl">{String(item.value).padStart(2, "0")}</span>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider mt-1 opacity-70">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center gap-2 font-sans text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-[#226D50]" />
                Back9 - American Fork
              </div>
              <div className="flex items-center gap-2 font-sans text-sm text-gray-600">
                <Users className="w-4 h-4 text-[#226D50]" />
                64 / 128 spots filled
              </div>
              <div className="flex items-center gap-2 font-sans text-sm text-gray-600">
                <Trophy className="w-4 h-4 text-[#226D50]" />
                $5,000 prize pool
              </div>
              <div className="flex items-center gap-2 font-sans text-sm text-gray-600">
                <DollarSign className="w-4 h-4 text-[#226D50]" />
                $50 entry fee
              </div>
            </div>

            <div className="flex gap-4">
              <button
                className="px-6 py-3 border-2 border-[#226D50] font-sans text-sm uppercase tracking-wider text-[#226D50] hover:bg-[rgba(34,109,80,0.05)] transition-colors"
                style={{
                  clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                }}
              >
                View Details
              </button>
              <button
                className="px-6 py-3 bg-[#226D50] font-sans text-sm uppercase tracking-wider text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                style={{
                  clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                }}
              >
                Register Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Social Proof Section */}
          <div className="bg-white border-t border-[#E5E5E5] p-6 rounded-b-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-orange-500">🔥</span>
              <span className="font-sans text-sm font-bold">64 / 128 spots filled</span>
              <span className="font-sans text-sm text-orange-500 font-bold">• Filling fast!</span>
            </div>

            {/* Avatars */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                    <img
                      src={`/golfer-avatar-.jpg?height=48&width=48&query=golfer avatar ${i}`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="font-sans text-sm text-gray-500">+59 golfers</span>
            </div>
            <p className="font-sans text-sm text-gray-500">Riley Bunker, Mike T., Sarah K., and 61 others registered</p>

            {/* Defending Champion */}
            <div className="mt-4 pt-4 border-t border-[#E5E5E5]">
              <p className="font-sans text-sm text-[#a29e7b] font-bold">
                🏆 DEFENDING CHAMPION: Mike Thompson • 71 (-1)
              </p>
              <p className="font-sans text-sm text-gray-500 italic mt-1">"Can you beat last year's winner?"</p>
              <p className="font-sans text-sm text-gray-400 italic mt-2">
                💬 "Best tournament of the season!" - 2024 Winner
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Tournaments Grid */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-sans text-xl font-bold uppercase">Upcoming Tournaments</h3>
          <button className="font-sans text-sm text-[#226D50] hover:underline flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingTournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="bg-white rounded-xl border-2 border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer relative"
              style={{ borderLeftWidth: "4px", borderLeftColor: getBorderColor(tournament.type) }}
            >
              {/* Thumbnail */}
              <div className="h-[160px] relative">
                <img
                  src={`/.jpg?height=160&width=400&query=${tournament.type === "back9" ? "golf simulator interior" : tournament.type === "course" ? "fox hollow golf course" : "friends playing golf together"}`}
                  alt={tournament.title}
                  className="w-full h-full object-cover"
                />
                {tournament.featured && (
                  <span
                    className="absolute top-3 right-3 bg-[#a29e7b] text-white font-bold text-xs uppercase px-3 py-1"
                    style={{
                      clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-5 h-5 text-[#226D50]" />
                  <h3 className="font-sans text-lg font-bold uppercase">{tournament.title}</h3>
                </div>

                <div className="space-y-1 text-sm text-gray-500">
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {tournament.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {tournament.location}
                  </p>
                </div>

                <div className="mt-3 space-y-1">
                  <p className="font-sans text-base font-bold">
                    {tournament.entry > 0 ? `$${tournament.entry}` : "Free"}
                    {tournament.prizePool > 0 && (
                      <span className="text-[#226D50]"> • ${tournament.prizePool} prize pool</span>
                    )}
                  </p>
                  <p
                    className={`font-sans text-sm font-bold ${tournament.spotsLeft < 20 ? "text-orange-500" : "text-gray-600"}`}
                  >
                    👥 {tournament.spotsLeft} spots left
                  </p>
                </div>

                <div className="mt-3 text-sm text-gray-500">
                  <p className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    FORMAT: {tournament.format}
                  </p>
                  <p className="mt-1">
                    ⛳ {tournament.holes} holes • {tournament.skillLevel}
                  </p>
                </div>

                <button
                  className={`w-full mt-4 py-3 font-sans text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 ${
                    tournament.skillLevel === "Invite Only"
                      ? "border-2 border-[#226D50] text-[#226D50] hover:bg-[rgba(34,109,80,0.05)]"
                      : "bg-[#226D50] text-white hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#1A5840]"
                  }`}
                  style={{
                    clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                  }}
                >
                  {tournament.skillLevel === "Invite Only" ? "View" : "Join Now"} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MyTournamentsSubTab() {
  const [hasRegistrations] = useState(true)

  if (!hasRegistrations) {
    return <TournamentsEmptyState />
  }

  return (
    <div className="space-y-8">
      {/* Registered Tournaments */}
      <div>
        <span className="font-sans text-xs uppercase tracking-widest text-gray-500 block mb-4">
          Registered Tournaments
        </span>
        <div
          className="bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border-2 border-[#E5E5E5] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
          style={{ borderLeftWidth: "4px", borderLeftColor: "#226D50" }}
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">🏆</span>
            <div className="flex-1">
              <h3 className="font-sans text-[20px] font-bold uppercase">BACK9 WINTER CHAMPIONSHIP</h3>
              <p className="font-sans text-sm text-gray-500">December 15-17, 2025 • Back9 - American Fork</p>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-[#F0F9F4] border-2 border-[#226D50] rounded-lg">
                <span className="font-sans text-sm font-bold text-[#226D50]">✅ Registered (#27)</span>
              </div>

              <div className="flex items-center gap-2 text-[#226D50] mt-3">
                <Clock className="w-4 h-4" />
                <span className="font-sans text-sm font-medium">⏱️ Starts in 13 days 15 hours</span>
              </div>

              <div className="mt-4 space-y-1">
                <p className="font-sans text-sm">👥 64 / 128 spots filled</p>
                <p className="font-sans text-sm">🏆 $5,000 prize pool</p>
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  className="px-5 py-2.5 border-2 border-[#226D50] font-sans text-xs uppercase tracking-wider text-[#226D50] hover:bg-[rgba(34,109,80,0.05)] transition-colors"
                  style={{
                    clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  View Details
                </button>
                <button
                  className="px-5 py-2.5 border-2 border-[#a29e7b] font-sans text-xs uppercase tracking-wider text-[#226D50] hover:bg-[rgba(173,218,152,0.1)] transition-colors"
                  style={{
                    clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  Invite Friends
                </button>
                <button
                  className="px-5 py-2.5 border-2 border-[#BF2424] font-sans text-xs uppercase tracking-wider text-[#BF2424] hover:bg-[rgba(191,36,36,0.05)] transition-colors"
                  style={{
                    clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Past Tournaments Table */}
      <div>
        <span className="font-sans text-xs uppercase tracking-widest text-gray-500 block mb-4">Past Tournaments</span>
        <div className="bg-white rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#E5E5E5]">
          <table className="w-full">
            <thead className="bg-[#FAFAFA] border-b border-[#E5E5E5]">
              <tr>
                <th className="text-left px-6 py-3 text-[12px] uppercase tracking-widest text-gray-500 font-medium">
                  Tournament
                </th>
                <th className="text-left px-6 py-3 text-[12px] uppercase tracking-widest text-gray-500 font-medium">
                  Date
                </th>
                <th className="text-left px-6 py-3 text-[12px] uppercase tracking-widest text-gray-500 font-medium">
                  Placement
                </th>
                <th className="text-left px-6 py-3 text-[12px] uppercase tracking-widest text-gray-500 font-medium">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E5E5E5] bg-[#FFF9E6] hover:bg-[#FFF5D6]">
                <td className="px-6 py-4 text-sm font-medium">Back9 Weekly</td>
                <td className="px-6 py-4 text-sm text-gray-500">Dec 1, 2025</td>
                <td className="px-6 py-4 text-sm">
                  <span className="text-3xl mr-2">🏆🥇</span>
                  <span className="font-bold text-[#FFD700]">1st</span>
                </td>
                <td className="px-6 py-4 text-sm">72</td>
              </tr>
              <tr className="border-b border-[#E5E5E5] bg-[#F5F5F5] hover:bg-[#EFEFEF]">
                <td className="px-6 py-4 text-sm font-medium">Fox Hollow M-G</td>
                <td className="px-6 py-4 text-sm text-gray-500">Nov 24, 2025</td>
                <td className="px-6 py-4 text-sm">
                  <span className="text-3xl mr-2">🥈</span>
                  <span className="font-bold text-[#C0C0C0]">2nd</span>
                </td>
                <td className="px-6 py-4 text-sm">75</td>
              </tr>
              <tr className="hover:bg-[#F3F4F6]">
                <td className="px-6 py-4 text-sm font-medium">Blake's League</td>
                <td className="px-6 py-4 text-sm text-gray-500">Nov 28, 2025</td>
                <td className="px-6 py-4 text-sm">5th</td>
                <td className="px-6 py-4 text-sm">87</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* My Tournament Stats with Trends */}
      <div>
        <span className="font-sans text-xs uppercase tracking-widest text-gray-500 block mb-4">
          My Tournament Stats
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Tournaments Entered */}
          <div className="bg-[#FFF9E6] border-2 border-[#a29e7b] rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="flex items-start justify-between">
              <span className="text-5xl">🏆</span>
              <div className="text-right">
                <div className="flex items-center gap-1">
                  <span className="text-[36px] font-bold">8</span>
                  <TrendingUp className="w-5 h-5 text-[#226D50]" />
                </div>
                <p className="text-sm text-gray-500">Tournaments Entered</p>
                <p className="text-xs text-[#226D50] font-bold mt-1">+2 this month</p>
              </div>
            </div>
            {/* Mini sparkline */}
            <div className="mt-4 h-6 flex items-end gap-1">
              {[3, 5, 4, 6, 7, 8].map((val, idx) => (
                <div key={idx} className="flex-1 bg-[#a29e7b] rounded-sm" style={{ height: `${val * 4}px` }} />
              ))}
            </div>
          </div>

          {/* Wins */}
          <div className="bg-[#F0F9F4] border-2 border-[#226D50] rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="flex items-start justify-between">
              <span className="text-5xl">🥇</span>
              <div className="text-right">
                <div className="flex items-center gap-1">
                  <span className="text-[36px] font-bold">2</span>
                  <TrendingUp className="w-5 h-5 text-[#226D50]" />
                </div>
                <p className="text-sm text-gray-500">Wins</p>
                <p className="text-xs text-[#a29e7b] font-bold mt-1">Better than 85% of players</p>
              </div>
            </div>
          </div>

          {/* Avg Place */}
          <div className="bg-[#EFF6FF] border-2 border-[#3B82F6] rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="flex items-start justify-between">
              <span className="text-5xl">📊</span>
              <div className="text-right">
                <div className="flex items-center gap-1">
                  <span className="text-[36px] font-bold">4.2</span>
                  <TrendingDown className="w-5 h-5 text-[#226D50]" />
                </div>
                <p className="text-sm text-gray-500">Avg Place</p>
                <p className="text-xs text-[#226D50] font-bold mt-1">Improving! 📈</p>
              </div>
            </div>
            {/* Mini bar chart */}
            <div className="mt-4 h-8 flex items-end gap-2">
              {[6, 4, 5, 3, 4].map((val, idx) => (
                <div key={idx} className="flex-1 bg-[#3B82F6] rounded-sm" style={{ height: `${(8 - val) * 4}px` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Create Your Own Section */}
      <div>
        <h3 className="font-sans text-2xl font-bold mb-8">CREATE YOUR OWN</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Start League Card */}
          <div className="bg-white rounded-xl border-2 border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-lg hover:-translate-y-0.5 hover:border-[#226D50] transition-all duration-200">
            <div className="h-[200px]">
              <img src="/friends-golf-group-socializing.jpg" alt="Golf league" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h4 className="font-sans text-xl font-bold uppercase mb-3">Start Your Own League</h4>
              <p className="font-sans text-base text-gray-500 mb-4">
                Invite friends, set custom rules, track standings all season long
              </p>
              <p className="font-sans text-sm font-bold mb-2">Perfect for:</p>
              <ul className="font-sans text-sm text-gray-500 space-y-1 mb-4">
                <li>• Weekly golf groups</li>
                <li>• Office leagues</li>
                <li>• Friend competitions</li>
              </ul>
              <button
                className="w-full py-3 bg-[#226D50] font-sans text-sm font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#1A5840] transition-all duration-200"
                style={{
                  clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                }}
              >
                <Plus className="w-4 h-4" /> Create League <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Host Tournament Card */}
          <div className="bg-white rounded-xl border-2 border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-lg hover:-translate-y-0.5 hover:border-[#226D50] transition-all duration-200">
            <div className="h-[200px]">
              <img
                src="/golf-trophy-on-course-green.jpg"
                alt="Golf tournament"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-sans text-xl font-bold uppercase mb-3">Host A Tournament</h4>
              <p className="font-sans text-base text-gray-500 mb-4">
                One-time event with custom format, automated scoring and leaderboards
              </p>
              <p className="font-sans text-sm font-bold mb-2">Perfect for:</p>
              <ul className="font-sans text-sm text-gray-500 space-y-1 mb-4">
                <li>• Charity events</li>
                <li>• Corporate outings</li>
                <li>• Special occasions</li>
              </ul>
              <button
                className="w-full py-3 border-2 border-[#226D50] font-sans text-sm font-bold uppercase tracking-wider text-[#226D50] flex items-center justify-center gap-2 hover:bg-[#F0F9F4] transition-all duration-200"
                style={{
                  clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                }}
              >
                <Plus className="w-4 h-4" /> Host Tournament <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LeaderboardsSubTab() {
  const [selectedLeague, setSelectedLeague] = useState("sunday-hackers")
  const [expandedRow, setExpandedRow] = useState<number | null>(null)

  const leaderboardData = [
    { rank: 1, name: "Mike Johnson", rounds: 4, score: -3, points: 320, roundDetails: [] },
    { rank: 2, name: "Sarah Kim", rounds: 4, score: -1, points: 298, roundDetails: [] },
    {
      rank: 3,
      name: "Blake A.",
      rounds: 4,
      score: 2,
      points: 245,
      isYou: true,
      roundDetails: [
        { round: 1, date: "Nov 7", score: 89, par: 2, points: 60 },
        { round: 2, date: "Nov 14", score: 87, par: 0, points: 65 },
        { round: 3, date: "Nov 21", score: 85, par: -2, points: 70, best: true },
        { round: 4, date: "Nov 28", score: 91, par: 4, points: 50 },
      ],
    },
    { rank: 4, name: "John Davis", rounds: 4, score: 4, points: 230, roundDetails: [] },
    { rank: 5, name: "Emily Chen", rounds: 3, score: 5, points: 198, roundDetails: [] },
    { rank: 6, name: "Alex Rivera", rounds: 4, score: 7, points: 175, roundDetails: [] },
  ]

  const getRankDisplay = (rank: number) => {
    if (rank === 1) return <span className="text-3xl">🏆🥇</span>
    if (rank === 2) return <span className="text-3xl">🥈</span>
    if (rank === 3) return <span className="text-3xl">🥉</span>
    return <span className="font-bold text-lg">{rank}</span>
  }

  return (
    <div className="space-y-6">
      {/* League Selector */}
      <div className="bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#E5E5E5]">
        <div className="flex justify-between items-center mb-2">
          <label className="font-sans text-xs uppercase tracking-widest text-gray-500">
            Select Tournament / League
          </label>
          <button className="font-sans text-sm text-[#226D50] hover:underline flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="relative">
          <select
            value={selectedLeague}
            onChange={(e) => setSelectedLeague(e.target.value)}
            className="w-full h-[52px] bg-white border-2 border-[#E5E5E5] rounded-lg px-4 pr-10 font-sans text-base text-black focus:outline-none focus:border-[#226D50] transition-colors appearance-none cursor-pointer"
          >
            <option value="sunday-hackers">Sunday Hackers League - Season 2</option>
            <option value="back9-weekly">Back9 Weekly - December</option>
            <option value="winter-championship">Back9 Winter Championship</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
        <p className="font-sans text-sm text-gray-500 mt-2">
          📊 League Stats: 6 players • 4 rounds • Season ends Jan 15, 2026
        </p>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-white rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#E5E5E5]">
        {/* Header */}
        <div className="grid grid-cols-6 bg-[#FAFAFA] border-b border-[#E5E5E5] px-6 py-4">
          <span className="font-sans text-xs uppercase tracking-widest text-gray-500">Rank</span>
          <span className="font-sans text-xs uppercase tracking-widest text-gray-500 col-span-2">Player</span>
          <span className="font-sans text-xs uppercase tracking-widest text-gray-500 text-center">Rounds</span>
          <span className="font-sans text-xs uppercase tracking-widest text-gray-500 text-center">Score</span>
          <span className="font-sans text-xs uppercase tracking-widest text-gray-500 text-right">Points</span>
        </div>

        {/* Rows */}
        {leaderboardData.map((player, index) => (
          <div key={player.rank}>
            <div
              onClick={() => setExpandedRow(expandedRow === player.rank ? null : player.rank)}
              className={`grid grid-cols-6 px-6 py-4 border-b border-[#E5E5E5] cursor-pointer transition-colors ${
                player.isYou
                  ? "bg-[#F0F9F4]"
                  : player.rank === 1
                    ? "bg-[#FFF9E6]"
                    : player.rank === 2
                      ? "bg-[#F5F5F5]"
                      : index % 2 === 1
                        ? "bg-[#F9FAFB]"
                        : "bg-white"
              } hover:bg-[#F3F4F6]`}
              style={player.isYou ? { borderLeftWidth: "4px", borderLeftColor: "#226D50" } : {}}
            >
              <span className="font-sans text-sm flex items-center">{getRankDisplay(player.rank)}</span>
              <span className={`font-sans text-sm col-span-2 flex items-center ${player.isYou ? "font-bold" : ""}`}>
                {player.name}
                {player.isYou && <span className="text-[#226D50] ml-1">(You)</span>}
              </span>
              <span className="font-sans text-sm text-center flex items-center justify-center">{player.rounds}</span>
              <span className="font-sans text-sm text-center flex items-center justify-center">
                {player.score > 0 ? `+${player.score}` : player.score}
              </span>
              <span
                className={`font-sans text-sm text-right flex items-center justify-end gap-2 ${player.isYou ? "font-bold" : ""}`}
              >
                {player.points}
                {player.roundDetails.length > 0 &&
                  (expandedRow === player.rank ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  ))}
              </span>
            </div>

            {/* Expanded Details */}
            {expandedRow === player.rank && player.roundDetails.length > 0 && (
              <div className="bg-[#F9FAFB] px-6 py-6 border-b-2 border-[#E5E5E5]">
                <h4 className="font-sans text-sm font-bold uppercase mb-4">Round Breakdown:</h4>
                <div className="space-y-2">
                  {player.roundDetails.map((round, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between bg-white rounded-lg px-4 py-3 border border-[#E5E5E5]"
                    >
                      <span className="font-sans text-sm">
                        Round {round.round} • {round.date}
                      </span>
                      <span
                        className={`font-sans text-sm font-bold ${round.par < 0 ? "text-[#226D50]" : round.par > 0 ? "text-[#BF2424]" : "text-gray-600"}`}
                      >
                        {round.score} ({round.par > 0 ? `+${round.par}` : round.par === 0 ? "E" : round.par})
                      </span>
                      <span className="font-sans text-sm">{round.points} points</span>
                      {round.best && <span className="text-sm bg-[#FFF9E6] px-2 py-1 rounded">⭐ Best</span>}
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-[#E5E5E5]">
                  <p className="font-sans text-sm text-gray-500">
                    📊 <strong>STATS:</strong> Best Round: {Math.min(...player.roundDetails.map((r) => r.score))} •
                    Worst Round: {Math.max(...player.roundDetails.map((r) => r.score))} • Average:{" "}
                    {Math.round(player.roundDetails.reduce((a, b) => a + b.score, 0) / player.roundDetails.length)} •
                    Trend: <span className="text-[#226D50]">Improving 📈</span>
                  </p>
                </div>

                <div className="flex gap-3 mt-4">
                  <button className="px-4 py-2 border-2 border-[#226D50] rounded-lg font-sans text-xs uppercase tracking-wider text-[#226D50] hover:bg-[#F0F9F4] transition-colors">
                    View Full Scorecard
                  </button>
                  <button className="px-4 py-2 border-2 border-[#E5E7EB] rounded-lg font-sans text-xs uppercase tracking-wider text-gray-600 hover:bg-[#F9FAFB] transition-colors">
                    Compare With Leader
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function PastSubTab() {
  const [typeFilter, setTypeFilter] = useState("all")
  const [yearFilter, setYearFilter] = useState("2025")
  const [placementFilter, setPlacementFilter] = useState("all")

  const pastTournaments = [
    {
      id: "1",
      title: "BACK9 THANKSGIVING CLASSIC",
      date: "November 23, 2025",
      finish: "5th of 32",
      finishNum: 5,
      score: "+4 (76)",
      winnings: 0,
      photos: [],
      notes: "Great competition! Need to work on putting under pressure. Loved the course setup.",
    },
    {
      id: "2",
      title: "FOX HOLLOW FALL OPEN",
      date: "October 15, 2025",
      finish: "2nd of 24",
      finishNum: 2,
      score: "-2 (70)",
      winnings: 250,
      photos: [1, 2],
      notes: "",
    },
  ]

  const hasActiveFilters = typeFilter !== "all" || yearFilter !== "2025" || placementFilter !== "all"

  return (
    <div className="space-y-6">
      {/* Filter Row */}
      <div className="flex flex-wrap items-center gap-4">
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="h-10 px-4 pr-8 bg-white border-2 border-[#E5E5E5] rounded-lg font-sans text-sm focus:outline-none focus:border-[#226D50] appearance-none cursor-pointer"
          style={{ minWidth: "200px" }}
        >
          <option value="all">All Tournaments</option>
          <option value="back9">Back9 Events</option>
          <option value="course">Golf Course Events</option>
          <option value="private">Private Leagues</option>
        </select>

        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="h-10 px-4 pr-8 bg-white border-2 border-[#E5E5E5] rounded-lg font-sans text-sm focus:outline-none focus:border-[#226D50] appearance-none cursor-pointer"
          style={{ minWidth: "120px" }}
        >
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="all">All Time</option>
        </select>

        <select
          value={placementFilter}
          onChange={(e) => setPlacementFilter(e.target.value)}
          className="h-10 px-4 pr-8 bg-white border-2 border-[#E5E5E5] rounded-lg font-sans text-sm focus:outline-none focus:border-[#226D50] appearance-none cursor-pointer"
          style={{ minWidth: "180px" }}
        >
          <option value="all">All Placements</option>
          <option value="top3">Top 3 Only</option>
          <option value="top10">Top 10 Only</option>
          <option value="won">Won (1st place)</option>
        </select>

        {hasActiveFilters && (
          <button
            onClick={() => {
              setTypeFilter("all")
              setYearFilter("2025")
              setPlacementFilter("all")
            }}
            className="font-sans text-sm text-gray-500 hover:text-gray-700"
          >
            Reset
          </button>
        )}
      </div>

      {/* Past Tournament Cards */}
      {pastTournaments.length > 0 ? (
        <div className="space-y-4">
          {pastTournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border-2 border-[#E5E7EB] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              style={{
                clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏆</span>
                <div className="flex-1">
                  <h3 className="font-sans text-lg font-bold uppercase">{tournament.title}</h3>
                  <p className="font-sans text-sm text-gray-500">{tournament.date}</p>

                  <div className="mt-4 space-y-1">
                    <p className="font-sans text-lg font-bold">Your Finish: {tournament.finish} 🎯</p>
                    <p className="font-sans text-base font-bold">Score: {tournament.score}</p>
                    <p
                      className={`font-sans text-sm ${tournament.winnings > 0 ? "text-[#226D50] font-bold" : "text-gray-500"}`}
                    >
                      Winnings: {tournament.winnings > 0 ? `$${tournament.winnings}` : "$0"}
                    </p>
                  </div>

                  {/* Photos Section */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-sans text-sm text-gray-500">
                        📸 TOURNAMENT PHOTOS ({tournament.photos.length})
                      </span>
                      <button className="font-sans text-sm text-[#226D50] hover:underline flex items-center gap-1">
                        <Camera className="w-4 h-4" /> Add Photos
                      </button>
                    </div>
                    {tournament.photos.length > 0 && (
                      <div className="flex gap-2">
                        {tournament.photos.map((_, idx) => (
                          <div key={idx} className="w-[120px] h-[120px] bg-gray-100 rounded-lg overflow-hidden">
                            <img
                              src={`/golf-tournament-photo-.jpg?height=120&width=120&query=golf tournament photo ${idx + 1}`}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Notes Section */}
                  {tournament.notes && (
                    <div className="mt-4">
                      <span className="font-sans text-sm text-gray-500">💭 YOUR NOTES:</span>
                      <p className="font-sans text-sm text-gray-600 italic mt-1">"{tournament.notes}"</p>
                    </div>
                  )}

                  <div className="flex gap-3 mt-4">
                    <button
                      className="px-5 py-2.5 border-2 border-[#226D50] font-sans text-xs uppercase tracking-wider text-[#226D50] hover:bg-[#F0F9F4] transition-colors"
                      style={{
                        clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                      }}
                    >
                      View Full Results
                    </button>
                    {!tournament.notes && (
                      <button
                        className="px-5 py-2.5 border-2 border-[#E5E7EB] font-sans text-xs uppercase tracking-wider text-gray-600 hover:bg-[#F9FAFB] transition-colors flex items-center gap-2"
                        style={{
                          clipPath:
                            "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                        }}
                      >
                        <MessageSquare className="w-4 h-4" /> Add Notes
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <span className="text-6xl text-gray-300 mb-4">🏆</span>
          <h2 className="font-sans text-2xl font-bold text-black mb-3">No past tournaments yet!</h2>
          <p className="font-sans text-lg text-gray-500 mb-6">Compete in tournaments to build your golf legacy</p>
          <button
            className="px-8 py-3 bg-[#226D50] font-sans text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            style={{
              clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
            }}
          >
            Browse Upcoming Tournaments <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}

function TournamentsEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center max-w-[400px] mx-auto">
      <span className="text-6xl mb-6">🏆</span>
      <h2 className="font-serif text-2xl tracking-wider text-black mb-3">YOU HAVEN'T JOINED ANY TOURNAMENTS YET</h2>
      <p className="font-sans text-base text-gray-500 mb-4">
        Competition is where growth happens. Join a tournament or create your own league with friends.
      </p>
      <p className="font-sans text-sm text-[#226D50] mb-6">🎁 Place in your first tournament to earn 500 XP!</p>
      <div className="flex gap-4">
        <button
          className="px-6 py-3 bg-[#226D50] font-sans text-sm uppercase tracking-wider text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
          style={{
            clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
          }}
        >
          Browse Tournaments
        </button>
        <button
          className="px-6 py-3 border-2 border-[#226D50] font-sans text-sm uppercase tracking-wider text-[#226D50] hover:bg-[#F0F9F4] transition-colors"
          style={{
            clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
          }}
        >
          Create League
        </button>
      </div>
    </div>
  )
}
