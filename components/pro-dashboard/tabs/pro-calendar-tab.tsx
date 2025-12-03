"use client"

import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  User,
  Plus,
  Calendar,
  Filter,
  Video,
  Users,
  X,
  Check,
  AlertCircle,
  Bell,
  Settings,
  Repeat,
} from "lucide-react"

// Types
interface Lesson {
  id: string
  client: string
  clientInitials: string
  type: "in-person" | "virtual" | "simulator"
  time: string
  duration: number
  location: string
  status: "confirmed" | "pending" | "cancelled"
  notes?: string
}

interface DaySchedule {
  date: number
  lessons: Lesson[]
}

// Mock data
const mockLessons: Record<string, Lesson[]> = {
  "2025-01-06": [
    { id: "1", client: "John Davis", clientInitials: "JD", type: "in-person", time: "9:00 AM", duration: 60, location: "Back9 Denver", status: "confirmed" },
    { id: "2", client: "Sarah Miller", clientInitials: "SM", type: "virtual", time: "11:00 AM", duration: 45, location: "Zoom", status: "confirmed" },
    { id: "3", client: "Mike Roberts", clientInitials: "MR", type: "simulator", time: "2:00 PM", duration: 60, location: "TrackMan Bay 3", status: "pending" },
  ],
  "2025-01-07": [
    { id: "4", client: "Lisa Wong", clientInitials: "LW", type: "in-person", time: "10:00 AM", duration: 90, location: "Back9 Denver", status: "confirmed" },
    { id: "5", client: "Tom Kennedy", clientInitials: "TK", type: "virtual", time: "3:00 PM", duration: 45, location: "Zoom", status: "confirmed" },
  ],
  "2025-01-08": [
    { id: "6", client: "Alex Johnson", clientInitials: "AJ", type: "simulator", time: "1:00 PM", duration: 60, location: "TrackMan Bay 1", status: "confirmed" },
  ],
  "2025-01-10": [
    { id: "7", client: "Rachel Green", clientInitials: "RG", type: "in-person", time: "9:00 AM", duration: 60, location: "Back9 Denver", status: "confirmed" },
    { id: "8", client: "Chris Park", clientInitials: "CP", type: "in-person", time: "11:00 AM", duration: 60, location: "Back9 Denver", status: "pending" },
    { id: "9", client: "Emma Stone", clientInitials: "ES", type: "virtual", time: "2:00 PM", duration: 45, location: "Zoom", status: "confirmed" },
    { id: "10", client: "James Wilson", clientInitials: "JW", type: "simulator", time: "4:00 PM", duration: 90, location: "TrackMan Bay 2", status: "confirmed" },
  ],
}

const upcomingLessons = [
  { client: "John Davis", time: "Today, 9:00 AM", type: "in-person" as const, location: "Back9 Denver" },
  { client: "Sarah Miller", time: "Today, 11:00 AM", type: "virtual" as const, location: "Zoom" },
  { client: "Mike Roberts", time: "Today, 2:00 PM", type: "simulator" as const, location: "TrackMan Bay 3" },
  { client: "Lisa Wong", time: "Tomorrow, 10:00 AM", type: "in-person" as const, location: "Back9 Denver" },
]

const typeColors = {
  "in-person": { bg: "bg-[#226D50]", text: "text-[#226D50]", border: "border-[#226D50]" },
  "virtual": { bg: "bg-[#3B82F6]", text: "text-[#3B82F6]", border: "border-[#3B82F6]" },
  "simulator": { bg: "bg-[#a29e7b]", text: "text-[#a29e7b]", border: "border-[#a29e7b]" },
}

const typeIcons = {
  "in-person": MapPin,
  "virtual": Video,
  "simulator": Users,
}

export function ProCalendarTab() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 6)) // January 6, 2025
  const [selectedDate, setSelectedDate] = useState<string>("2025-01-06")
  const [view, setView] = useState<"month" | "week" | "day">("week")
  const [showNewLessonModal, setShowNewLessonModal] = useState(false)
  const [filterType, setFilterType] = useState<"all" | "in-person" | "virtual" | "simulator">("all")

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const getWeekDays = () => {
    const startOfWeek = new Date(currentDate)
    const day = startOfWeek.getDay()
    startOfWeek.setDate(startOfWeek.getDate() - day)

    const days = []
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek)
      date.setDate(startOfWeek.getDate() + i)
      days.push(date)
    }
    return days
  }

  const formatDateKey = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
  }

  const navigateWeek = (direction: number) => {
    const newDate = new Date(currentDate)
    newDate.setDate(currentDate.getDate() + direction * 7)
    setCurrentDate(newDate)
  }

  const weekDays = getWeekDays()
  const selectedLessons = mockLessons[selectedDate] || []
  const filteredLessons = filterType === "all" ? selectedLessons : selectedLessons.filter(l => l.type === filterType)

  const getTotalLessonsThisWeek = () => {
    let total = 0
    weekDays.forEach(day => {
      const key = formatDateKey(day)
      total += (mockLessons[key] || []).length
    })
    return total
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="font-serif text-2xl tracking-wider text-white drop-shadow-lg">CALENDAR</h2>
        <button
          onClick={() => setShowNewLessonModal(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#226D50] text-white font-serif text-sm tracking-wider shadow-[0_4px_24px_rgba(0,0,0,0.12)] hover:bg-[#1a5a40] transition-colors"
          style={{
            clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
          }}
        >
          <Plus className="h-4 w-4" />
          NEW LESSON
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "This Week", value: getTotalLessonsThisWeek(), icon: Calendar },
          { label: "Pending", value: 2, icon: AlertCircle },
          { label: "Today", value: 3, icon: Clock },
          { label: "Revenue Est.", value: "$540", icon: Users },
        ].map((stat, i) => {
          const Icon = stat.icon
          return (
            <div
              key={i}
              className="bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
              style={{
                clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#226D50]/10 flex items-center justify-center" style={{ clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)" }}>
                  <Icon className="h-5 w-5 text-[#226D50]" />
                </div>
                <div>
                  <p className="font-serif text-xs tracking-wider text-gray-400">{stat.label.toUpperCase()}</p>
                  <p className="font-serif text-2xl text-[#226D50]">{stat.value}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar Section */}
        <div className="lg:col-span-2">
          {/* Week Navigation */}
          <div
            className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)] mb-6"
            style={{
              clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => navigateWeek(-1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <h3 className="font-serif text-lg tracking-wider text-black">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              <button
                onClick={() => navigateWeek(1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            {/* Week View */}
            <div className="grid grid-cols-7 gap-2">
              {weekDays.map((day, i) => {
                const dateKey = formatDateKey(day)
                const dayLessons = mockLessons[dateKey] || []
                const isSelected = dateKey === selectedDate
                const isToday = dateKey === "2025-01-06"

                return (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(dateKey)}
                    className={`p-3 rounded-lg text-center transition-all ${
                      isSelected
                        ? "bg-[#226D50] text-white"
                        : isToday
                        ? "bg-[#226D50]/10 text-[#226D50]"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <p className={`text-xs font-medium ${isSelected ? "text-white/70" : "text-gray-400"}`}>
                      {dayNames[day.getDay()]}
                    </p>
                    <p className={`text-xl font-serif mt-1 ${isSelected ? "text-white" : "text-black"}`}>
                      {day.getDate()}
                    </p>
                    {dayLessons.length > 0 && (
                      <div className="flex justify-center gap-1 mt-2">
                        {dayLessons.slice(0, 3).map((lesson, j) => (
                          <div
                            key={j}
                            className={`w-2 h-2 rounded-full ${isSelected ? "bg-white" : typeColors[lesson.type].bg}`}
                          />
                        ))}
                        {dayLessons.length > 3 && (
                          <span className={`text-xs ${isSelected ? "text-white/70" : "text-gray-400"}`}>+{dayLessons.length - 3}</span>
                        )}
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Day Schedule */}
          <div
            className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
            style={{
              clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-serif text-sm tracking-wider text-gray-400">
                {new Date(selectedDate).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }).toUpperCase()}
              </h4>
              <div className="flex gap-2">
                {(["all", "in-person", "virtual", "simulator"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`px-3 py-1.5 font-serif text-xs tracking-wider transition-colors ${
                      filterType === type
                        ? "bg-[#226D50] text-white"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                    style={{
                      clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                    }}
                  >
                    {type === "all" ? "ALL" : type.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {filteredLessons.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-400 font-serif">No lessons scheduled</p>
                <button
                  onClick={() => setShowNewLessonModal(true)}
                  className="mt-4 px-4 py-2 border border-[#226D50] text-[#226D50] font-serif text-sm tracking-wider hover:bg-[#226D50] hover:text-white transition-colors"
                  style={{
                    clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                  }}
                >
                  + ADD LESSON
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredLessons.map((lesson) => {
                  const TypeIcon = typeIcons[lesson.type]
                  return (
                    <div
                      key={lesson.id}
                      className={`p-4 border-l-4 ${typeColors[lesson.type].border} bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer`}
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 ${typeColors[lesson.type].bg} text-white flex items-center justify-center font-serif text-sm`} style={{ clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)" }}>
                            {lesson.clientInitials}
                          </div>
                          <div>
                            <h5 className="font-serif text-base text-black">{lesson.client}</h5>
                            <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" /> {lesson.time}
                              </span>
                              <span>{lesson.duration} min</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <TypeIcon className={`h-3 w-3 ${typeColors[lesson.type].text}`} />
                              <span className={`text-xs ${typeColors[lesson.type].text}`}>{lesson.location}</span>
                            </div>
                          </div>
                        </div>
                        <span className={`px-2 py-1 text-xs font-serif tracking-wider ${
                          lesson.status === "confirmed" ? "bg-[#226D50]/10 text-[#226D50]" :
                          lesson.status === "pending" ? "bg-[#a29e7b]/20 text-[#a29e7b]" :
                          "bg-red-100 text-red-600"
                        }`} style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}>
                          {lesson.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Lessons */}
          <div
            className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
            style={{
              clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
            }}
          >
            <h4 className="font-serif text-sm tracking-wider text-gray-400 mb-5">UPCOMING</h4>
            <div className="space-y-4">
              {upcomingLessons.map((lesson, i) => {
                const TypeIcon = typeIcons[lesson.type]
                return (
                  <div key={i} className="flex items-center gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className={`w-10 h-10 ${typeColors[lesson.type].bg}/10 flex items-center justify-center`} style={{ clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)" }}>
                      <TypeIcon className={`h-5 w-5 ${typeColors[lesson.type].text}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-sm text-black truncate">{lesson.client}</p>
                      <p className="text-xs text-gray-400">{lesson.time}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div
            className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
            style={{
              clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
            }}
          >
            <h4 className="font-serif text-sm tracking-wider text-gray-400 mb-5">QUICK ACTIONS</h4>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left" style={{ clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)" }}>
                <Repeat className="h-5 w-5 text-[#226D50]" />
                <span className="text-sm text-black">Set Recurring Availability</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left" style={{ clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)" }}>
                <Bell className="h-5 w-5 text-[#226D50]" />
                <span className="text-sm text-black">Reminder Settings</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left" style={{ clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)" }}>
                <Settings className="h-5 w-5 text-[#226D50]" />
                <span className="text-sm text-black">Booking Preferences</span>
              </button>
            </div>
          </div>

          {/* Legend */}
          <div
            className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
            style={{
              clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
            }}
          >
            <h4 className="font-serif text-sm tracking-wider text-gray-400 mb-5">LESSON TYPES</h4>
            <div className="space-y-3">
              {(["in-person", "virtual", "simulator"] as const).map((type) => {
                const TypeIcon = typeIcons[type]
                return (
                  <div key={type} className="flex items-center gap-3">
                    <div className={`w-3 h-3 ${typeColors[type].bg} rounded-full`} />
                    <TypeIcon className={`h-4 w-4 ${typeColors[type].text}`} />
                    <span className="text-sm text-gray-600 capitalize">{type.replace("-", " ")}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* New Lesson Modal */}
      {showNewLessonModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowNewLessonModal(false)} />
          <div
            className="relative bg-white p-8 w-full max-w-lg shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
            style={{
              clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
            }}
          >
            <button
              onClick={() => setShowNewLessonModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-gray-400" />
            </button>

            <h3 className="font-serif text-xl tracking-wider text-black mb-2">SCHEDULE NEW LESSON</h3>
            <p className="text-sm text-gray-500 mb-6">Fill in the details to book a new lesson</p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs text-gray-500 mb-2">CLIENT</label>
                <select
                  className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#226D50]"
                  style={{
                    clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                  }}
                >
                  <option>Select client...</option>
                  <option>John Davis</option>
                  <option>Sarah Miller</option>
                  <option>Mike Roberts</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-2">DATE</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#226D50]"
                    style={{
                      clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-2">TIME</label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#226D50]"
                    style={{
                      clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-2">LESSON TYPE</label>
                <div className="flex gap-3">
                  {(["in-person", "virtual", "simulator"] as const).map((type) => {
                    const TypeIcon = typeIcons[type]
                    return (
                      <button
                        key={type}
                        className={`flex-1 py-3 border ${typeColors[type].border} ${typeColors[type].text} font-serif text-xs tracking-wider hover:${typeColors[type].bg} hover:text-white transition-colors flex items-center justify-center gap-2`}
                        style={{
                          clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                        }}
                      >
                        <TypeIcon className="h-4 w-4" />
                        {type.toUpperCase()}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-2">DURATION</label>
                <div className="flex gap-3">
                  {[30, 45, 60, 90].map((dur) => (
                    <button
                      key={dur}
                      className="flex-1 py-2 bg-gray-100 text-gray-600 font-serif text-sm hover:bg-[#226D50] hover:text-white transition-colors"
                      style={{
                        clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                      }}
                    >
                      {dur} min
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-2">NOTES (OPTIONAL)</label>
                <textarea
                  rows={2}
                  placeholder="Any special instructions or focus areas..."
                  className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#226D50] resize-none"
                  style={{
                    clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                  }}
                />
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowNewLessonModal(false)}
                className="flex-1 py-3 border border-gray-300 text-gray-600 font-serif text-sm tracking-wider hover:bg-gray-50 transition-colors"
                style={{
                  clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                }}
              >
                CANCEL
              </button>
              <button
                onClick={() => setShowNewLessonModal(false)}
                className="flex-1 py-3 bg-[#226D50] text-white font-serif text-sm tracking-wider hover:bg-[#1a5a40] transition-colors"
                style={{
                  clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                }}
              >
                SCHEDULE LESSON
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
