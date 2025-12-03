"use client"

import { useState, useEffect } from "react"
import {
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin,
  ChevronDown,
  ChevronUp,
  Check,
  Calendar,
  Clock,
} from "lucide-react"

type SubTab = "upcoming" | "past" | "calendar"

// Pro Dashboard style card - chamfered corners, deeper shadow
const cardStyle = {
  clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
}

const upcomingLessons = [
  {
    id: 1,
    date: "DEC 3, 2025",
    dateObj: new Date(2025, 11, 3, 14, 0),
    time: "2:00 PM",
    type: "SIMULATOR",
    instructor: {
      name: "Riley Bunker",
      title: "PGA Professional",
      rating: 5.0,
      avatar: "https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaridog.png",
    },
    focus: "Short Game & Putting",
    location: "Back9 - American Fork",
    duration: 60,
    price: 90,
    prep: {
      equipment: "Putter, wedges",
      proNote: "Bring your old putter so we can compare strokes and see the improvement!",
      checklist: [
        { id: 1, text: "Putter and wedges ready", completed: true },
        { id: 2, text: "Reviewed last feedback", completed: true },
        { id: 3, text: "Watch warmup video", completed: false },
      ],
    },
  },
  {
    id: 2,
    date: "DEC 10, 2025",
    dateObj: new Date(2025, 11, 10, 10, 0),
    time: "10:00 AM",
    type: "ON-COURSE",
    instructor: {
      name: "Riley Bunker",
      title: "PGA Professional",
      rating: 5.0,
      avatar: "https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaridog.png",
    },
    focus: "Course Management",
    location: "Fox Hollow Golf Course",
    duration: 90,
    price: 135,
    prep: {
      equipment: "Full bag",
      proNote: "We'll play 9 holes focusing on decision making.",
      checklist: [
        { id: 1, text: "Full bag ready", completed: true },
        { id: 2, text: "Review course layout", completed: false },
      ],
    },
  },
]

const pastLessons = [
  {
    id: 101,
    date: "NOV 26, 2025",
    time: "3:00 PM",
    type: "SIMULATOR",
    instructor: {
      name: "Riley Bunker",
      avatar: "https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaridog.png",
    },
    focus: "Short Game & Putting",
    duration: 60,
    price: 90,
    userRating: 5,
    feedback: "Great session! Putting stroke improved. Focus on distance control this week.",
  },
  {
    id: 102,
    date: "NOV 19, 2025",
    time: "2:00 PM",
    type: "ON-COURSE",
    instructor: {
      name: "Riley Bunker",
      avatar: "https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaridog.png",
    },
    focus: "Driver & Woods",
    duration: 60,
    price: 90,
    userRating: 5,
    feedback: "Excellent progress on driver. Keep tempo slow on backswing.",
  },
]

const lessonsCalendar: Record<string, { time: string; focus: string; instructor: string; type: string }> = {
  "2025-12-03": { time: "2:00 PM", focus: "Short Game & Putting", instructor: "Riley Bunker", type: "SIMULATOR" },
  "2025-12-10": { time: "10:00 AM", focus: "Course Management", instructor: "Riley Bunker", type: "ON-COURSE" },
}

export function LessonsTab() {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>("upcoming")

  const subTabs = [
    { id: "upcoming" as SubTab, label: "UPCOMING" },
    { id: "past" as SubTab, label: "PAST" },
    { id: "calendar" as SubTab, label: "CALENDAR" },
  ]

  return (
    <div className="space-y-8">
      {/* Stats Card */}
      <div className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]" style={cardStyle}>
        <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400 mb-5">LESSON STATS</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">TOTAL LESSONS</p>
            <p className="font-serif text-4xl text-black">23</p>
            <p className="text-xs text-gray-500">since Oct 2024</p>
          </div>
          <div>
            <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">AVG RATING</p>
            <div className="flex items-baseline gap-2">
              <p className="font-serif text-4xl text-black">5.0</p>
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            </div>
            <p className="text-xs text-gray-500">you give</p>
          </div>
          <div>
            <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">INVESTED</p>
            <p className="font-serif text-4xl text-black">$2,070</p>
            <p className="text-xs text-gray-500">this year</p>
          </div>
          <div>
            <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">STREAK</p>
            <p className="font-serif text-4xl text-black">4</p>
            <p className="text-xs text-[#226D50]">weeks in a row</p>
          </div>
        </div>
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
          {activeSubTab === "upcoming" && <UpcomingLessons lessons={upcomingLessons} />}
          {activeSubTab === "past" && <PastLessons lessons={pastLessons} />}
          {activeSubTab === "calendar" && <CalendarView lessons={lessonsCalendar} />}
        </div>
      </div>
    </div>
  )
}

function UpcomingLessons({ lessons }: { lessons: typeof upcomingLessons }) {
  if (lessons.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="font-serif text-lg text-gray-400 mb-4">No upcoming lessons scheduled</p>
        <button
          className="bg-[#226D50] text-white font-serif text-sm tracking-[0.1em] px-6 py-3 hover:bg-[#1a5a42] transition-colors"
          style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
        >
          BOOK A LESSON
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {lessons.map((lesson) => (
        <UpcomingLessonCard key={lesson.id} lesson={lesson} />
      ))}
    </div>
  )
}

function UpcomingLessonCard({ lesson }: { lesson: (typeof upcomingLessons)[0] }) {
  const [prepExpanded, setPrepExpanded] = useState(false)
  const [checklist, setChecklist] = useState(lesson.prep.checklist)
  const [countdown, setCountdown] = useState("")

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const diff = lesson.dateObj.getTime() - now.getTime()
      if (diff <= 0) {
        setCountdown("NOW")
        return
      }
      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      setCountdown(`in ${hours}h ${minutes}m`)
    }
    updateCountdown()
    const interval = setInterval(updateCountdown, 60000)
    return () => clearInterval(interval)
  }, [lesson.dateObj])

  const toggleChecklistItem = (id: number) => {
    setChecklist((prev) => prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }

  return (
    <div
      className="bg-[#FAFAFA] p-6"
      style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <p className="font-serif text-lg tracking-wider text-black">{lesson.date} — {lesson.time}</p>
          <p className="text-sm text-[#226D50] mt-1">{countdown}</p>
        </div>
        <span
          className={`text-xs font-serif tracking-[0.1em] px-3 py-1.5 ${
            lesson.type === "SIMULATOR" ? "bg-[#226D50] text-white" : "bg-[#a29e7b] text-white"
          }`}
          style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
        >
          {lesson.type}
        </span>
      </div>

      {/* Instructor */}
      <div className="flex items-center gap-3 mb-5 pb-5 border-b border-gray-200">
        <img
          src={lesson.instructor.avatar}
          alt={lesson.instructor.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-serif text-sm tracking-wider text-black">{lesson.instructor.name.toUpperCase()}</p>
          <p className="text-xs text-gray-500">{lesson.instructor.title}</p>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-3 gap-4 mb-5">
        <div>
          <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">FOCUS</p>
          <p className="text-sm text-black">{lesson.focus}</p>
        </div>
        <div>
          <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">LOCATION</p>
          <p className="text-sm text-black flex items-center gap-1">
            {lesson.location}
            <MapPin className="h-3 w-3 text-[#226D50]" />
          </p>
        </div>
        <div>
          <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-1">DURATION</p>
          <p className="text-sm text-black">{lesson.duration} min — ${lesson.price}</p>
        </div>
      </div>

      {/* Prep Section */}
      <div className="border border-gray-200 mb-5">
        <button
          onClick={() => setPrepExpanded(!prepExpanded)}
          className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
        >
          <span className="font-serif text-xs tracking-[0.1em] text-gray-500">LESSON PREP</span>
          {prepExpanded ? <ChevronUp className="h-4 w-4 text-gray-400" /> : <ChevronDown className="h-4 w-4 text-gray-400" />}
        </button>
        {prepExpanded && (
          <div className="p-4 bg-white border-t border-gray-200 space-y-3">
            {checklist.map((item) => (
              <label key={item.id} className="flex items-center gap-3 cursor-pointer">
                <div
                  onClick={() => toggleChecklistItem(item.id)}
                  className={`w-5 h-5 border-2 flex items-center justify-center transition-all ${
                    item.completed ? "bg-[#226D50] border-[#226D50]" : "border-gray-300"
                  }`}
                  style={{ clipPath: "polygon(2px 0, 100% 0, 100% calc(100% - 2px), calc(100% - 2px) 100%, 0 100%, 0 2px)" }}
                >
                  {item.completed && <Check className="h-3 w-3 text-white" />}
                </div>
                <span className={`text-sm ${item.completed ? "text-gray-400 line-through" : "text-black"}`}>
                  {item.text}
                </span>
              </label>
            ))}
            <div className="mt-4 p-3 bg-[#FAFAFA]">
              <p className="text-xs text-gray-500 mb-1">Riley says:</p>
              <p className="text-sm text-gray-700 italic">"{lesson.prep.proNote}"</p>
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          className="flex-1 bg-[#226D50] text-white font-serif text-xs tracking-[0.1em] py-3 hover:bg-[#1a5a42] transition-colors"
          style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
        >
          JOIN
        </button>
        <button
          className="flex-1 border border-[#226D50] text-[#226D50] font-serif text-xs tracking-[0.1em] py-3 hover:bg-[#226D50] hover:text-white transition-colors"
          style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
        >
          RESCHEDULE
        </button>
        <button
          className="flex-1 border border-gray-300 text-gray-600 font-serif text-xs tracking-[0.1em] py-3 hover:border-gray-400 transition-colors"
          style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
        >
          MESSAGE
        </button>
      </div>
    </div>
  )
}

function PastLessons({ lessons }: { lessons: typeof pastLessons }) {
  if (lessons.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="font-serif text-lg text-gray-400">No past lessons yet</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          className="py-5 border-b border-gray-100 last:border-0"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <img
                src={lesson.instructor.avatar}
                alt={lesson.instructor.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-serif text-sm tracking-wider text-black">
                  {lesson.date} — {lesson.time}
                </p>
                <p className="text-xs text-gray-500">{lesson.focus} with {lesson.instructor.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${star <= lesson.userRating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600 italic ml-13">"{lesson.feedback}"</p>
          <div className="flex gap-2 mt-4">
            <button className="text-sm text-[#226D50] font-serif tracking-wider hover:underline">
              VIEW DETAILS
            </button>
            <span className="text-gray-300">|</span>
            <button className="text-sm text-[#226D50] font-serif tracking-wider hover:underline">
              BOOK AGAIN
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

function CalendarView({ lessons }: { lessons: typeof lessonsCalendar }) {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 11, 1))
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1))
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1))

  const formatDateKey = (day: number) => `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`

  const days: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) days.push(null)
  for (let i = 1; i <= daysInMonth; i++) days.push(i)

  return (
    <div className="space-y-6">
      {/* Month Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={prevMonth}
          className="p-2 border border-gray-200 hover:border-[#226D50] transition-colors"
          style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
        >
          <ChevronLeft className="h-5 w-5 text-gray-500" />
        </button>
        <h3 className="font-serif text-xl tracking-wider text-black">
          {monthNames[month].toUpperCase()} {year}
        </h3>
        <button
          onClick={nextMonth}
          className="p-2 border border-gray-200 hover:border-[#226D50] transition-colors"
          style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
        >
          <ChevronRight className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7">
        {dayNames.map((day) => (
          <div key={day} className="text-center font-serif text-xs tracking-[0.1em] text-gray-400 py-3">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 border-t border-l border-gray-200">
        {days.map((day, idx) => {
          const dateKey = day ? formatDateKey(day) : null
          const lessonData = dateKey ? lessons[dateKey] : null
          const isSelected = dateKey === selectedDate

          return (
            <div
              key={idx}
              onClick={() => day && setSelectedDate(dateKey)}
              className={`border-r border-b border-gray-200 min-h-[80px] p-2 cursor-pointer transition-colors
                ${!day ? "bg-gray-50" : ""}
                ${isSelected ? "bg-[#226D50]" : "hover:bg-gray-50"}
              `}
            >
              {day && (
                <div className="h-full flex flex-col">
                  <span className={`font-serif text-sm ${isSelected ? "text-white" : "text-black"}`}>{day}</span>
                  {lessonData && (
                    <div className="mt-1">
                      <span className={`w-2 h-2 rounded-full inline-block ${isSelected ? "bg-white" : "bg-[#226D50]"}`} />
                      <span className={`text-xs ml-1 ${isSelected ? "text-white/90" : "text-gray-600"}`}>
                        {lessonData.time}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Selected Date Detail */}
      {selectedDate && lessons[selectedDate] && (
        <div className="bg-[#FAFAFA] p-5" style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}>
          <p className="font-serif text-xs tracking-[0.1em] text-gray-400 mb-3">SELECTED</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-serif text-lg text-black">{lessons[selectedDate].time} — {lessons[selectedDate].focus}</p>
              <p className="text-sm text-gray-500">with {lessons[selectedDate].instructor}</p>
            </div>
            <button
              className="bg-[#226D50] text-white font-serif text-xs tracking-[0.1em] px-4 py-2 hover:bg-[#1a5a42] transition-colors"
              style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
            >
              VIEW
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
