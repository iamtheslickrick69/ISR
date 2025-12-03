"use client"

import { useState } from "react"
import {
  MapPin,
  Star,
  ChevronRight,
  Share2,
  Copy,
  Bell,
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageSquare,
} from "lucide-react"

export function ProDashboardTab() {
  const [imageError, setImageError] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://caddyme.com/book/riley-bunker")
    setLinkCopied(true)
    setTimeout(() => setLinkCopied(false), 2000)
  }

  const notifications = [
    { id: "1", type: "booking", message: "New booking request from Sarah M.", time: "10 min ago", unread: true },
    { id: "2", type: "review", message: "John D. left a 5-star review", time: "1 hour ago", unread: true },
    { id: "3", type: "message", message: "New message from Tom K.", time: "2 hours ago", unread: false },
    { id: "4", type: "payout", message: "Payout of $540 processed", time: "1 day ago", unread: false },
  ]

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "booking":
        return <Calendar className="h-4 w-4 text-[#226D50]" />
      case "review":
        return <Star className="h-4 w-4 text-yellow-500" />
      case "message":
        return <MessageSquare className="h-4 w-4 text-[#a29e7b]" />
      case "payout":
        return <DollarSign className="h-4 w-4 text-[#226D50]" />
      default:
        return <Bell className="h-4 w-4 text-gray-400" />
    }
  }

  return (
    <div className="space-y-8">
      {/* Analytics Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          className="bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          style={{
            clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <p className="font-serif text-xs tracking-wider text-gray-400">BOOKINGS</p>
            <TrendingUp className="h-4 w-4 text-[#226D50]" />
          </div>
          <p className="font-serif text-3xl text-black">23</p>
          <p className="text-xs text-[#226D50]">+18% this month</p>
        </div>

        <div
          className="bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          style={{
            clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <p className="font-serif text-xs tracking-wider text-gray-400">CONVERSION</p>
            <CheckCircle className="h-4 w-4 text-[#226D50]" />
          </div>
          <p className="font-serif text-3xl text-black">87%</p>
          <p className="text-xs text-gray-500">Request acceptance rate</p>
        </div>

        <div
          className="bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          style={{
            clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <p className="font-serif text-xs tracking-wider text-gray-400">RETENTION</p>
            <Users className="h-4 w-4 text-[#a29e7b]" />
          </div>
          <p className="font-serif text-3xl text-black">72%</p>
          <p className="text-xs text-gray-500">Students return</p>
        </div>

        <div
          className="bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          style={{
            clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <p className="font-serif text-xs tracking-wider text-gray-400">PEAK HOURS</p>
            <Clock className="h-4 w-4 text-[#a29e7b]" />
          </div>
          <p className="font-serif text-3xl text-black">2-5PM</p>
          <p className="text-xs text-gray-500">Most requested</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Instructor Card */}
          <div
            className="bg-white shadow-[0_4px_24px_rgba(0,0,0,0.12)] overflow-hidden"
            style={{
              clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
            }}
          >
            <div
              className="px-6 pt-12 pb-16 relative"
              style={{ background: "linear-gradient(135deg, #D4AF37 0%, #a29e7b 100%)" }}
            >
              {/* Founding Instructor Badge */}
              <div
                className="absolute top-4 left-4 bg-white/25 backdrop-blur-sm px-3 py-1.5"
                style={{
                  clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                }}
              >
                <span className="text-white font-serif text-[11px] tracking-[0.1em]">FOUNDING INSTRUCTOR</span>
              </div>

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
            <div className="pt-16 pb-6 px-6 text-center">
              <h3 className="font-serif text-2xl tracking-wider text-black mb-1">RILEY BUNKER</h3>
              <p className="text-gray-500 text-sm mb-1">Level 7 • Eagle</p>
              <p className="text-gray-400 text-sm mb-5">PGA Professional</p>

              {/* Progress Bar */}
              <div className="mb-2">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[82%] bg-gradient-to-r from-[#D4AF37] to-[#a29e7b] rounded-full" />
                </div>
              </div>
              <p className="text-gray-400 text-xs mb-5">2,450 / 3,000 XP</p>

              {/* Button Row */}
              <div className="flex gap-3">
                <button
                  className="flex-1 border-2 border-[#D4AF37] text-[#D4AF37] font-serif text-sm tracking-[0.1em] py-3 hover:bg-[#D4AF37] hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                  style={{
                    clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  <Share2 className="h-4 w-4" />
                  SHARE CARD
                </button>
                <button
                  onClick={handleCopyLink}
                  className={`flex-1 font-serif text-sm tracking-[0.1em] py-3 transition-all duration-200 flex items-center justify-center gap-2 ${
                    linkCopied
                      ? "bg-[#226D50] text-white"
                      : "bg-[#a29e7b] text-white hover:bg-[#8a8565]"
                  }`}
                  style={{
                    clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  {linkCopied ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      COPIED!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      BOOKING LINK
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Pending Requests Card */}
          <div
            className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
            style={{
              clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400">PENDING REQUESTS</h4>
              <span className="bg-[#BF2424] text-white text-xs font-medium px-2 py-0.5 rounded-full">2</span>
            </div>

            {/* Request Items */}
            <div className="space-y-4">
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div>
                  <p className="text-sm font-medium text-black">Sarah M.</p>
                  <p className="text-xs text-gray-500">Jan 5, 2025 • Simulator Lesson</p>
                </div>
                <div className="flex gap-2">
                  <button
                    className="bg-[#226D50] text-white font-serif text-xs tracking-wider px-4 py-2 hover:bg-[#1a5a42] transition-colors"
                    style={{
                      clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                    }}
                  >
                    ACCEPT
                  </button>
                  <button
                    className="border border-[#BF2424] text-[#BF2424] font-serif text-xs tracking-wider px-4 py-2 hover:bg-[#BF2424] hover:text-white transition-colors"
                    style={{
                      clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                    }}
                  >
                    DECLINE
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div>
                  <p className="text-sm font-medium text-black">Tom K.</p>
                  <p className="text-xs text-gray-500">Jan 6, 2025 • On-Course Lesson</p>
                </div>
                <div className="flex gap-2">
                  <button
                    className="bg-[#226D50] text-white font-serif text-xs tracking-wider px-4 py-2 hover:bg-[#1a5a42] transition-colors"
                    style={{
                      clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                    }}
                  >
                    ACCEPT
                  </button>
                  <button
                    className="border border-[#BF2424] text-[#BF2424] font-serif text-xs tracking-wider px-4 py-2 hover:bg-[#BF2424] hover:text-white transition-colors"
                    style={{
                      clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                    }}
                  >
                    DECLINE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Notifications Card */}
          <div
            className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
            style={{
              clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400">NOTIFICATIONS</h4>
              <div className="flex items-center gap-2">
                <span className="bg-[#BF2424] text-white text-xs font-medium px-2 py-0.5 rounded-full">2 new</span>
                <button className="text-xs text-[#a29e7b] hover:underline">Mark all read</button>
              </div>
            </div>

            <div className="space-y-0">
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`flex items-start gap-3 py-3 border-b border-gray-100 last:border-0 ${
                    notif.unread ? "bg-[#F0FDF4] -mx-6 px-6" : ""
                  }`}
                >
                  <div className="mt-0.5">{getNotificationIcon(notif.type)}</div>
                  <div className="flex-1">
                    <p className={`text-sm ${notif.unread ? "font-medium text-black" : "text-gray-600"}`}>
                      {notif.message}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{notif.time}</p>
                  </div>
                  {notif.unread && <div className="w-2 h-2 bg-[#226D50] rounded-full mt-2" />}
                </div>
              ))}
            </div>

            <button className="flex items-center gap-1 mt-4 text-[#a29e7b] font-serif text-sm tracking-wider hover:gap-2 transition-all">
              VIEW ALL NOTIFICATIONS
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Quick Stats Card */}
          <div
            className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
            style={{
              clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
            }}
          >
            <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400 mb-5">QUICK STATS</h4>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">STUDENTS</p>
                <p className="font-serif text-4xl text-black">47</p>
              </div>
              <div>
                <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">LESSONS</p>
                <p className="font-serif text-4xl text-black">12</p>
                <p className="text-xs text-[#a29e7b]">this month</p>
              </div>
              <div>
                <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">REVENUE</p>
                <p className="font-serif text-4xl text-black">$1,080</p>
                <p className="text-xs text-[#a29e7b]">this month</p>
              </div>
              <div>
                <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">RATING</p>
                <div className="flex items-baseline gap-2">
                  <p className="font-serif text-4xl text-black">5.0</p>
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-xs text-gray-500">(250 reviews)</p>
              </div>
            </div>
          </div>

          {/* Today's Schedule Card */}
          <div
            className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
            style={{
              clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
            }}
          >
            <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400 mb-5">TODAY'S SCHEDULE</h4>

            <div className="space-y-0">
              <div className="py-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-sm text-black">9:00 AM</span>
                  <span className="text-gray-300">—</span>
                  <span className="text-sm text-black">John D.</span>
                  <span
                    className="ml-auto text-xs bg-[#226D50]/10 text-[#226D50] px-2 py-0.5"
                    style={{
                      clipPath: "polygon(3px 0, 100% 0, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0 100%, 0 3px)",
                    }}
                  >
                    Simulator
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-gray-500">
                  <MapPin className="h-3.5 w-3.5" />
                  <span className="text-xs">Back9 Simulator</span>
                </div>
              </div>

              <div className="py-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-sm text-black">2:00 PM</span>
                  <span className="text-gray-300">—</span>
                  <span className="text-sm text-black">Mike R.</span>
                  <span
                    className="ml-auto text-xs bg-[#a29e7b]/10 text-[#a29e7b] px-2 py-0.5"
                    style={{
                      clipPath: "polygon(3px 0, 100% 0, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0 100%, 0 3px)",
                    }}
                  >
                    On-Course
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-gray-500">
                  <MapPin className="h-3.5 w-3.5" />
                  <span className="text-xs">Fox Hollow GC</span>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-1 mt-4 text-[#a29e7b] font-serif text-sm tracking-wider hover:gap-2 transition-all">
              VIEW FULL CALENDAR
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
