"use client"

import { useState, useEffect } from "react"
import { Plus, MapPin, Users, Trophy, ChevronDown, ChevronUp, ChevronRight } from "lucide-react"

type SubTab = "upcoming" | "my-tournaments" | "leaderboards" | "past"

// Pro Dashboard style card - chamfered corners, deeper shadow
const cardStyle = {
  clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
}

export function TournamentsTab() {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>("upcoming")

  const subTabs = [
    { id: "upcoming" as SubTab, label: "UPCOMING" },
    { id: "my-tournaments" as SubTab, label: "MY TOURNAMENTS" },
    { id: "leaderboards" as SubTab, label: "LEADERBOARDS" },
    { id: "past" as SubTab, label: "PAST" },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-serif text-2xl tracking-wider text-white drop-shadow-lg">TOURNAMENTS</h2>
        <button
          className="flex items-center gap-2 px-5 py-2.5 bg-[#226D50] font-serif text-xs tracking-[0.1em] text-white hover:bg-[#1a5a42] transition-colors"
          style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
        >
          <Plus className="w-4 h-4" />
          CREATE LEAGUE
        </button>
      </div>

      {/* Sub-tabs Card */}
      <div className="bg-white shadow-[0_4px_24px_rgba(0,0,0,0.12)]" style={cardStyle}>
        {/* Tab Navigation */}
        <div className="flex gap-6 border-b border-gray-100 px-6">
          {subTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`pb-4 pt-6 font-serif text-sm tracking-[0.1em] transition-colors relative ${
                activeSubTab === tab.id ? "text-[#226D50]" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.label}
              {activeSubTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#226D50]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeSubTab === "upcoming" && <UpcomingSubTab />}
          {activeSubTab === "my-tournaments" && <MyTournamentsSubTab />}
          {activeSubTab === "leaderboards" && <LeaderboardsSubTab />}
          {activeSubTab === "past" && <PastSubTab />}
        </div>
      </div>
    </div>
  )
}

function UpcomingSubTab() {
  const [countdown, setCountdown] = useState({ days: 13, hours: 15, minutes: 30, seconds: 45 })

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) { seconds = 59; minutes-- }
        if (minutes < 0) { minutes = 59; hours-- }
        if (hours < 0) { hours = 23; days-- }
        if (days < 0) { days = 0; hours = 0; minutes = 0; seconds = 0 }
        return { days, hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const upcomingTournaments = [
    { id: "1", title: "WINTER CHAMPIONSHIP", date: "Dec 8, 2025", location: "Back9 - American Fork", entry: 25, prizePool: 500, spotsLeft: 12, totalSpots: 32, format: "Stroke Play", type: "back9" },
    { id: "2", title: "BACK9 MONTHLY MEDAL", date: "Dec 12, 2025", location: "Fox Hollow Golf Course", entry: 75, prizePool: 1500, spotsLeft: 8, totalSpots: 48, format: "Best Ball", type: "course" },
    { id: "3", title: "BLAKE'S LEAGUE", date: "Nov 28, 2025", location: "Various Locations", entry: 0, prizePool: 0, spotsLeft: 2, totalSpots: 8, format: "Match Play", type: "private" },
  ]

  return (
    <div className="space-y-8">
      {/* Featured Event */}
      <div>
        <h4 className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-4">FEATURED EVENT</h4>
        <div
          className="bg-[#FAFAFA] p-6"
          style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl tracking-wider text-black mb-2">BACK9 WINTER CHAMPIONSHIP</h3>
              <p className="text-sm text-gray-500 mb-4">December 15-17, 2025</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-[#226D50]" />
                  Back9 - American Fork
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4 text-[#226D50]" />
                  64 / 128 spots
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Trophy className="w-4 h-4 text-[#226D50]" />
                  $5,000 prize pool
                </div>
                <div className="text-sm text-gray-600">$50 entry fee</div>
              </div>

              <div className="flex gap-3">
                <button
                  className="border-2 border-[#226D50] text-[#226D50] font-serif text-xs tracking-[0.1em] px-5 py-3 hover:bg-[#226D50] hover:text-white transition-all"
                  style={{ clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)" }}
                >
                  VIEW DETAILS
                </button>
                <button
                  className="bg-[#226D50] text-white font-serif text-xs tracking-[0.1em] px-5 py-3 hover:bg-[#1a5a42] transition-colors flex items-center gap-2"
                  style={{ clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)" }}
                >
                  REGISTER NOW
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Countdown */}
            <div className="text-center lg:text-right">
              <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-3">REGISTRATION CLOSES IN</p>
              <div className="flex gap-2 justify-center lg:justify-end">
                {[
                  { value: countdown.days, label: "DAYS" },
                  { value: countdown.hours, label: "HRS" },
                  { value: countdown.minutes, label: "MIN" },
                  { value: countdown.seconds, label: "SEC" },
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div
                      className="w-14 h-14 bg-white border border-gray-200 flex items-center justify-center shadow-sm"
                      style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
                    >
                      <span className="font-serif text-xl text-black">{String(item.value).padStart(2, "0")}</span>
                    </div>
                    <span className="text-[10px] text-gray-400 mt-1 block">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming List */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-serif text-xs tracking-[0.1em] text-gray-400">UPCOMING TOURNAMENTS</h4>
          <button className="font-serif text-sm tracking-wider text-[#226D50] hover:underline flex items-center gap-1">
            VIEW ALL <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          {upcomingTournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="py-5 border-b border-gray-100 last:border-0"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-serif text-lg tracking-wider text-black">{tournament.title}</h4>
                    <span
                      className={`text-xs font-serif tracking-[0.1em] px-2 py-1 ${
                        tournament.type === "back9" ? "bg-[#226D50] text-white" :
                        tournament.type === "course" ? "bg-[#a29e7b] text-white" :
                        "bg-blue-500 text-white"
                      }`}
                      style={{ clipPath: "polygon(3px 0, 100% 0, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0 100%, 0 3px)" }}
                    >
                      {tournament.type.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{tournament.date} — {tournament.location}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{tournament.entry > 0 ? `$${tournament.entry} entry` : "Free"}</span>
                    {tournament.prizePool > 0 && <span className="text-[#226D50]">${tournament.prizePool} prize pool</span>}
                    <span className={tournament.spotsLeft < 10 ? "text-orange-500" : ""}>
                      {tournament.spotsLeft} spots left
                    </span>
                  </div>
                </div>
                <button
                  className="bg-[#226D50] text-white font-serif text-xs tracking-[0.1em] px-4 py-2 hover:bg-[#1a5a42] transition-colors"
                  style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
                >
                  JOIN
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
  return (
    <div className="space-y-8">
      {/* Registered Tournament */}
      <div>
        <h4 className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-4">REGISTERED</h4>
        <div
          className="bg-[#FAFAFA] p-6"
          style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-serif text-xl tracking-wider text-black mb-1">BACK9 WINTER CHAMPIONSHIP</h3>
              <p className="text-sm text-gray-500">December 15-17, 2025 — Back9 - American Fork</p>
            </div>
            <span
              className="bg-[#226D50] text-white font-serif text-xs tracking-[0.1em] px-3 py-1.5"
              style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
            >
              REGISTERED #27
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-5">
            <div>
              <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">STARTS IN</p>
              <p className="font-serif text-2xl text-black">13 days</p>
            </div>
            <div>
              <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">SPOTS</p>
              <p className="font-serif text-2xl text-black">64/128</p>
            </div>
            <div>
              <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">PRIZE POOL</p>
              <p className="font-serif text-2xl text-black">$5,000</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              className="border border-[#226D50] text-[#226D50] font-serif text-xs tracking-[0.1em] px-4 py-2 hover:bg-[#226D50] hover:text-white transition-all"
              style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
            >
              VIEW DETAILS
            </button>
            <button
              className="border border-gray-300 text-gray-600 font-serif text-xs tracking-[0.1em] px-4 py-2 hover:border-gray-400 transition-colors"
              style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
            >
              INVITE FRIENDS
            </button>
            <button
              className="border border-red-300 text-red-500 font-serif text-xs tracking-[0.1em] px-4 py-2 hover:border-red-400 transition-colors"
              style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
            >
              WITHDRAW
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div>
        <h4 className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-4">MY STATS</h4>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">TOURNAMENTS</p>
            <p className="font-serif text-4xl text-black">8</p>
            <p className="text-xs text-[#226D50]">+2 this month</p>
          </div>
          <div>
            <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">WINS</p>
            <p className="font-serif text-4xl text-black">2</p>
            <p className="text-xs text-gray-500">top 15%</p>
          </div>
          <div>
            <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">AVG PLACE</p>
            <p className="font-serif text-4xl text-black">4.2</p>
            <p className="text-xs text-[#226D50]">improving</p>
          </div>
        </div>
      </div>

      {/* Past Results */}
      <div>
        <h4 className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-4">RECENT RESULTS</h4>
        <div className="space-y-3">
          {[
            { name: "Back9 Weekly", date: "Dec 1, 2025", place: "1st", score: "72" },
            { name: "Fox Hollow M-G", date: "Nov 24, 2025", place: "2nd", score: "75" },
            { name: "Blake's League", date: "Nov 28, 2025", place: "5th", score: "87" },
          ].map((result, idx) => (
            <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div>
                <p className="font-serif text-sm text-black">{result.name}</p>
                <p className="text-xs text-gray-500">{result.date}</p>
              </div>
              <div className="text-right">
                <p className={`font-serif text-lg ${result.place === "1st" ? "text-yellow-500" : result.place === "2nd" ? "text-gray-400" : "text-black"}`}>
                  {result.place}
                </p>
                <p className="text-xs text-gray-500">{result.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function LeaderboardsSubTab() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null)

  const leaderboardData = [
    { rank: 1, name: "Mike Johnson", rounds: 4, score: -3, points: 320 },
    { rank: 2, name: "Sarah Kim", rounds: 4, score: -1, points: 298 },
    { rank: 3, name: "Blake A.", rounds: 4, score: 2, points: 245, isYou: true },
    { rank: 4, name: "John Davis", rounds: 4, score: 4, points: 230 },
    { rank: 5, name: "Emily Chen", rounds: 3, score: 5, points: 198 },
  ]

  return (
    <div className="space-y-6">
      {/* League Selector */}
      <div>
        <h4 className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-3">SELECT TOURNAMENT</h4>
        <div className="relative">
          <select
            className="w-full bg-[#FAFAFA] border border-gray-200 px-4 py-3 font-serif text-sm text-black focus:outline-none focus:border-[#226D50] transition-colors appearance-none cursor-pointer"
            style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
          >
            <option>Sunday Hackers League - Season 2</option>
            <option>Back9 Weekly - December</option>
            <option>Back9 Winter Championship</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
        <p className="text-xs text-gray-500 mt-2">6 players — 4 rounds — Season ends Jan 15, 2026</p>
      </div>

      {/* Leaderboard */}
      <div>
        {/* Header */}
        <div className="grid grid-cols-6 py-3 border-b border-gray-200">
          <span className="font-serif text-xs tracking-[0.1em] text-gray-400">RANK</span>
          <span className="font-serif text-xs tracking-[0.1em] text-gray-400 col-span-2">PLAYER</span>
          <span className="font-serif text-xs tracking-[0.1em] text-gray-400 text-center">ROUNDS</span>
          <span className="font-serif text-xs tracking-[0.1em] text-gray-400 text-center">SCORE</span>
          <span className="font-serif text-xs tracking-[0.1em] text-gray-400 text-right">POINTS</span>
        </div>

        {/* Rows */}
        {leaderboardData.map((player) => (
          <div key={player.rank}>
            <div
              onClick={() => setExpandedRow(expandedRow === player.rank ? null : player.rank)}
              className={`grid grid-cols-6 py-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-gray-50 ${
                player.isYou ? "bg-[#F0F9F4]" : ""
              }`}
            >
              <span className="font-serif text-sm text-black">
                {player.rank === 1 ? "🥇" : player.rank === 2 ? "🥈" : player.rank === 3 ? "🥉" : player.rank}
              </span>
              <span className={`font-serif text-sm col-span-2 ${player.isYou ? "text-[#226D50] font-medium" : "text-black"}`}>
                {player.name} {player.isYou && "(You)"}
              </span>
              <span className="text-sm text-gray-600 text-center">{player.rounds}</span>
              <span className={`text-sm text-center ${player.score < 0 ? "text-[#226D50]" : player.score > 0 ? "text-gray-600" : ""}`}>
                {player.score > 0 ? `+${player.score}` : player.score}
              </span>
              <span className="font-serif text-sm text-black text-right flex items-center justify-end gap-1">
                {player.points}
                {player.isYou && (expandedRow === player.rank ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
              </span>
            </div>

            {/* Expanded Details for You */}
            {expandedRow === player.rank && player.isYou && (
              <div className="bg-[#FAFAFA] p-5 border-b border-gray-200">
                <h4 className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-4">ROUND BREAKDOWN</h4>
                <div className="space-y-2">
                  {[
                    { round: 1, date: "Nov 7", score: 89, points: 60 },
                    { round: 2, date: "Nov 14", score: 87, points: 65 },
                    { round: 3, date: "Nov 21", score: 85, points: 70, best: true },
                    { round: 4, date: "Nov 28", score: 91, points: 50 },
                  ].map((round) => (
                    <div key={round.round} className="flex items-center justify-between py-2 px-3 bg-white border border-gray-100">
                      <span className="text-sm text-gray-600">Round {round.round} — {round.date}</span>
                      <span className="font-serif text-sm text-black">{round.score}</span>
                      <span className="text-sm text-gray-500">{round.points} pts</span>
                      {round.best && <span className="text-xs text-yellow-500">Best</span>}
                    </div>
                  ))}
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
  const pastTournaments = [
    { id: "1", title: "BACK9 THANKSGIVING CLASSIC", date: "November 23, 2025", finish: "5th of 32", score: "+4 (76)", winnings: 0 },
    { id: "2", title: "FOX HOLLOW FALL OPEN", date: "October 15, 2025", finish: "2nd of 24", score: "-2 (70)", winnings: 250 },
  ]

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex gap-4">
        <select
          className="bg-[#FAFAFA] border border-gray-200 px-4 py-2 font-serif text-sm focus:outline-none focus:border-[#226D50] appearance-none cursor-pointer"
          style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
        >
          <option>All Tournaments</option>
          <option>Back9 Events</option>
          <option>Course Events</option>
        </select>
        <select
          className="bg-[#FAFAFA] border border-gray-200 px-4 py-2 font-serif text-sm focus:outline-none focus:border-[#226D50] appearance-none cursor-pointer"
          style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
        >
          <option>2025</option>
          <option>2024</option>
          <option>All Time</option>
        </select>
      </div>

      {/* Past Tournaments */}
      <div className="space-y-4">
        {pastTournaments.map((tournament) => (
          <div
            key={tournament.id}
            className="py-5 border-b border-gray-100 last:border-0"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-serif text-lg tracking-wider text-black mb-1">{tournament.title}</h4>
                <p className="text-sm text-gray-500 mb-3">{tournament.date}</p>
                <div className="flex items-center gap-6">
                  <div>
                    <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">FINISH</p>
                    <p className="font-serif text-xl text-black">{tournament.finish}</p>
                  </div>
                  <div>
                    <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">SCORE</p>
                    <p className="font-serif text-xl text-black">{tournament.score}</p>
                  </div>
                  <div>
                    <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">WINNINGS</p>
                    <p className={`font-serif text-xl ${tournament.winnings > 0 ? "text-[#226D50]" : "text-gray-400"}`}>
                      {tournament.winnings > 0 ? `$${tournament.winnings}` : "$0"}
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="border border-[#226D50] text-[#226D50] font-serif text-xs tracking-[0.1em] px-4 py-2 hover:bg-[#226D50] hover:text-white transition-all"
                style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
              >
                VIEW RESULTS
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (if needed) */}
      {pastTournaments.length === 0 && (
        <div className="py-16 text-center">
          <p className="font-serif text-lg text-gray-400 mb-4">No past tournaments yet</p>
          <button
            className="bg-[#226D50] text-white font-serif text-sm tracking-[0.1em] px-6 py-3 hover:bg-[#1a5a42] transition-colors"
            style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
          >
            BROWSE TOURNAMENTS
          </button>
        </div>
      )}
    </div>
  )
}
