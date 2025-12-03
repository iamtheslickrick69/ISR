"use client"

import { useState, useEffect } from "react"
import {
  Star,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Video,
  MapPin,
  Target,
  DollarSign,
  User,
  Flame,
  ChevronDown,
  ChevronUp,
  Check,
  Calendar,
  Clock,
  Cloud,
  Play,
  Edit3,
} from "lucide-react"

type SubTab = "upcoming" | "past" | "calendar"
type CalendarView = "month" | "week" | "day"

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
    address: "123 Example St, American Fork, UT 84003",
    duration: 60,
    price: 90,
    prep: {
      equipment: "Putter, wedges",
      proNote: "Bring your old putter so we can compare strokes and see the improvement!",
      checklist: [
        { id: 1, text: "Equipment needed: Putter, wedges", completed: true },
        { id: 2, text: "Reviewed Riley's last feedback", completed: true },
        { id: 3, text: "Watch warmup video (5 min)", completed: false },
        { id: 4, text: "Complete pre-lesson questionnaire", completed: false },
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
    address: "1400 N 200 E, American Fork, UT 84003",
    duration: 90,
    price: 135,
    weather: {
      temp: 72,
      condition: "Partly Cloudy",
      wind: "5mph",
      alert: null,
    },
    prep: {
      equipment: "Full bag",
      proNote: "We'll play 9 holes focusing on decision making.",
      checklist: [
        { id: 1, text: "Full bag ready", completed: true },
        { id: 2, text: "Check weather forecast", completed: true },
        { id: 3, text: "Review course layout", completed: false },
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
      title: "PGA Professional",
      avatar: "https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaridog.png",
    },
    focus: "Short Game & Putting",
    duration: 60,
    price: 90,
    userRating: 5,
    feedback: {
      text: "Great session today! Your putting stroke has improved significantly. Focus this week on:",
      bullets: [
        "Distance control on 20-30 foot putts",
        "Pre-shot routine consistency",
        "Lag putting drill (see video I sent)",
      ],
    },
    media: [
      { type: "video", thumbnail: "/golf-swing-sequence.png", duration: "6:32", title: "Swing Analysis" },
      { type: "photo", thumbnail: "/golf-stance-photo.jpg", title: "Setup Position" },
      { type: "video", thumbnail: "/putting-drill.jpg", duration: "2:15", title: "Lag Drill" },
    ],
    notes: "Struggled with 30-footers but nailed the lag drill. Want to work on bunker shots next time.",
  },
  {
    id: 102,
    date: "NOV 19, 2025",
    time: "2:00 PM",
    type: "ON-COURSE",
    instructor: {
      name: "Riley Bunker",
      title: "PGA Professional",
      avatar: "https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaridog.png",
    },
    focus: "Driver & Woods",
    duration: 60,
    price: 90,
    userRating: 5,
    feedback: {
      text: "Excellent progress on your driver today! Your swing path is much more consistent.",
      bullets: ["Keep the tempo slow on backswing", "Focus on weight transfer", "Practice the alignment drill at home"],
    },
    media: [],
    notes: "",
  },
]

const lessonsCalendar: Record<
  string,
  { time: string; focus: string; instructor: string; location: string; duration: number; type: string }
> = {
  "2025-12-03": {
    time: "2:00 PM",
    focus: "Short Game & Putting",
    instructor: "Riley Bunker",
    location: "Back9 - American Fork",
    duration: 60,
    type: "SIMULATOR",
  },
  "2025-12-10": {
    time: "10:00 AM",
    focus: "Course Management",
    instructor: "Riley Bunker",
    location: "Fox Hollow Golf Course",
    duration: 90,
    type: "ON-COURSE",
  },
  "2025-11-28": {
    time: "2:00 PM",
    focus: "Short Game & Putting",
    instructor: "Riley Bunker",
    location: "Back9 - American Fork",
    duration: 60,
    type: "SIMULATOR",
  },
  "2025-11-21": {
    time: "2:00 PM",
    focus: "Driver & Woods",
    instructor: "Riley Bunker",
    location: "Back9 - American Fork",
    duration: 60,
    type: "SIMULATOR",
  },
}

const cardBaseStyles = {
  background: "#FFFFFF",
  borderRadius: "16px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
}

export function LessonsTab() {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>("upcoming")

  return (
    <>
      <div style={cardBaseStyles} className="p-6 mb-8">
        <LessonStatsBanner />
      </div>

      <div style={cardBaseStyles} className="p-6 mb-8">
        <StreakBanner />
      </div>

      {/* Sub-tabs */}
      <div style={cardBaseStyles} className="mb-8">
        <div className="border-b border-[#E5E5E5] px-6">
          <div className="flex gap-0">
            {(["upcoming", "past", "calendar"] as SubTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSubTab(tab)}
                className={`relative px-6 py-4 text-sm font-medium uppercase tracking-wider transition-colors duration-150 ${
                  activeSubTab === tab ? "text-black font-bold" : "text-gray-500 hover:text-[#226D50]"
                }`}
              >
                {tab}
                {activeSubTab === tab && <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#226D50]" />}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6 animate-fadeIn">
          {activeSubTab === "upcoming" && <UpcomingLessons lessons={upcomingLessons} />}
          {activeSubTab === "past" && <PastLessons lessons={pastLessons} />}
          {activeSubTab === "calendar" && <CalendarViewComponent lessons={lessonsCalendar} />}
        </div>
      </div>
    </>
  )
}

function LessonStatsBanner() {
  const stats = [
    { icon: Target, value: "23", label: "LESSONS", context: "Since Oct 2025", color: "#226D50" },
    { icon: Star, value: "5.0", label: "AVG RATING", context: "You give", color: "#FFD700" },
    { icon: DollarSign, value: "$2,070", label: "INVESTED", context: "This year", color: "#226D50" },
    { icon: User, value: "Riley", label: "TOP PRO", context: "8 lessons together", color: "#226D50" },
    { icon: Flame, value: "4 WEEKS", label: "STREAK", context: "Keep it up!", color: "#F97316", bgColor: "#FFF7ED" },
  ]

  return (
    <div className="bg-white rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] mb-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-4 rounded-lg transition-all hover:scale-105"
            style={{ backgroundColor: stat.bgColor || "transparent" }}
          >
            <stat.icon className="h-10 w-10 mb-3" style={{ color: stat.color }} />
            <span className="text-2xl md:text-3xl font-bold text-black">{stat.value}</span>
            <span className="text-xs uppercase tracking-wider text-gray-500 mt-1">{stat.label}</span>
            <span className="text-xs text-gray-400 mt-0.5">{stat.context}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function StreakBanner() {
  return (
    <div className="bg-gradient-to-r from-[#FFF7ED] to-[#FFEDD5] border-2 border-[#FB923C] rounded-xl p-5 mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <p className="text-lg font-bold text-orange-800 flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />
            4-WEEK STREAK! Keep the momentum going!
          </p>
          <p className="text-sm text-gray-600 mt-1">
            You've had a lesson every week this month. +50 XP earned and added to your Tour Card.
          </p>
        </div>
        <div className="flex-shrink-0">
          <p className="text-sm font-semibold text-orange-800 mb-2">Next milestone: 8-week streak (+100 XP)</p>
          <div className="flex items-center gap-2">
            <div className="w-32 h-2 bg-orange-200 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-orange-500 rounded-full" />
            </div>
            <span className="text-xs text-orange-700 font-medium">4/8 weeks</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function UpcomingLessons({ lessons }: { lessons: typeof upcomingLessons }) {
  if (lessons.length === 0) return <UpcomingEmptyState />

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
  const [countdownColor, setCountdownColor] = useState("#226D50")

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const diff = lesson.dateObj.getTime() - now.getTime()

      if (diff <= 0) {
        setCountdown("NOW")
        setCountdownColor("#226D50")
        return
      }

      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

      const isToday = lesson.dateObj.toDateString() === now.toDateString()
      const isTomorrow = lesson.dateObj.toDateString() === new Date(now.getTime() + 86400000).toDateString()

      const prefix = isToday ? "TODAY" : isTomorrow ? "TOMORROW" : lesson.date
      setCountdown(`${prefix} in ${hours} hours ${minutes} minutes`)

      // Color coding
      if (hours < 12) setCountdownColor("#EF4444")
      else if (hours < 24) setCountdownColor("#ADDA98")
      else setCountdownColor("#226D50")
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 60000)
    return () => clearInterval(interval)
  }, [lesson.dateObj, lesson.date])

  const toggleChecklistItem = (id: number) => {
    setChecklist((prev) => prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border-2 border-[#E5E7EB] hover:border-[#226D50] transition-all duration-200">
      {/* Section 1: Date/Time Header with Countdown */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <p className="text-xl font-bold text-black">
            {lesson.date} • {lesson.time}
          </p>
          <p className="text-base font-bold mt-1 flex items-center gap-2" style={{ color: countdownColor }}>
            <Clock className="h-4 w-4" />
            {countdown}
          </p>
        </div>
        <LessonTypeBadge type={lesson.type} />
      </div>

      {/* Section 2: Instructor Info */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={lesson.instructor.avatar || "/placeholder.svg"}
          alt={lesson.instructor.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-lg font-bold text-black uppercase">{lesson.instructor.name}</p>
          <p className="text-sm text-gray-500">
            {lesson.instructor.title} • <Star className="inline h-3 w-3 fill-[#FFD700] text-[#FFD700]" />{" "}
            {lesson.instructor.rating.toFixed(1)}
          </p>
        </div>
      </div>

      {/* Section 3: Lesson Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <p className="text-sm text-gray-500">Focus:</p>
          <p className="text-base text-black">{lesson.focus}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Location:</p>
          <p className="text-base text-black flex items-center gap-1">
            {lesson.location}
            <MapPin className="h-4 w-4 text-[#226D50] cursor-pointer hover:scale-110 transition-transform" />
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Duration:</p>
          <p className="text-base text-black">
            {lesson.duration} min • <span className="font-bold">${lesson.price}</span>
          </p>
        </div>
      </div>

      {/* Section 4: Weather (ON-COURSE only) */}
      {lesson.type === "ON-COURSE" && lesson.weather && (
        <div className="bg-[#F0F9F4] rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-[#226D50] flex items-center gap-2 mb-2">
            <Cloud className="h-4 w-4" /> WEATHER FORECAST
          </p>
          <p className="text-sm text-gray-700">
            {lesson.weather.temp}°F • {lesson.weather.condition} • {lesson.weather.wind} wind
          </p>
          <p className="text-sm text-[#226D50] mt-1">Perfect conditions for your lesson!</p>
        </div>
      )}

      {/* Section 5: Lesson Prep (Collapsible) */}
      <div className="border border-[#E5E5E5] rounded-lg mb-6 overflow-hidden">
        <button
          onClick={() => setPrepExpanded(!prepExpanded)}
          className="w-full flex items-center justify-between p-4 bg-[#FAFAFA] hover:bg-gray-100 transition-colors"
        >
          <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">⚙️ LESSON PREP</span>
          {prepExpanded ? (
            <ChevronUp className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-500" />
          )}
        </button>

        {prepExpanded && (
          <div className="p-4 space-y-3">
            {checklist.map((item) => (
              <label key={item.id} className="flex items-center gap-3 cursor-pointer group">
                <div
                  onClick={() => toggleChecklistItem(item.id)}
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                    item.completed ? "bg-[#226D50] border-[#226D50]" : "border-gray-300 group-hover:border-[#226D50]"
                  }`}
                >
                  {item.completed && <Check className="h-3 w-3 text-white" />}
                </div>
                <span className={`text-sm ${item.completed ? "text-gray-500 line-through" : "text-black"}`}>
                  {item.text}
                </span>
              </label>
            ))}

            <div className="bg-blue-50 rounded-lg p-3 mt-4">
              <p className="text-sm font-semibold text-blue-800 mb-1">💬 RILEY SAYS:</p>
              <p className="text-sm text-blue-700 italic">"{lesson.prep.proNote}"</p>
            </div>
          </div>
        )}
      </div>

      {/* Section 6: Action Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <button className="bg-[#226D50] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider hover:-translate-y-[2px] hover:shadow-lg transition-all duration-200">
          Join Lesson
        </button>
        <button className="border-2 border-[#226D50] text-[#226D50] px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#226D50]/5 transition-all">
          Reschedule
        </button>
        <button className="border-2 border-[#EF4444] text-[#EF4444] px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-red-50 transition-all">
          Cancel
        </button>
        <button className="border-2 border-gray-300 text-gray-600 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:border-gray-400 transition-all">
          Message Pro
        </button>
      </div>
    </div>
  )
}

function PastLessons({ lessons }: { lessons: typeof pastLessons }) {
  if (lessons.length === 0) return <PastEmptyState />

  return (
    <div className="space-y-8">
      {/* Lesson Journey Graph */}
      <LessonJourneyGraph />

      {/* Past Lesson Cards */}
      {lessons.map((lesson) => (
        <PastLessonCard key={lesson.id} lesson={lesson} />
      ))}
    </div>
  )
}

function LessonJourneyGraph() {
  const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"]
  const ratings = [4, 5, 5, 5, 5, 5] // Sample data

  return (
    <div className="bg-white rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] mb-8">
      <h3 className="text-xl font-bold text-black mb-6">YOUR LESSON JOURNEY</h3>

      <div className="relative h-40 mb-4">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500">
          <span>5★</span>
          <span>4★</span>
          <span>3★</span>
          <span>2★</span>
          <span>1★</span>
        </div>

        {/* Graph area */}
        <div className="ml-10 h-full flex items-end justify-between border-l border-b border-gray-200">
          {months.map((month, idx) => (
            <div key={month} className="flex flex-col items-center flex-1">
              <div className="relative h-32 w-full flex items-end justify-center">
                <div
                  className="w-3 h-3 bg-[#FFD700] rounded-full shadow-lg relative z-10"
                  style={{ marginBottom: `${(ratings[idx] - 1) * 25}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* X-axis labels */}
      <div className="ml-10 flex justify-between text-xs text-gray-500">
        {months.map((month, idx) => (
          <span key={month} className="flex-1 text-center">
            {month}
            <br />
            2025
          </span>
        ))}
      </div>

      {/* Summary stats */}
      <div className="mt-6 pt-4 border-t border-gray-100 text-sm text-gray-500 flex flex-wrap gap-4">
        <span>📊 23 lessons</span>
        <span>• 100% with Riley</span>
        <span>• 92% completion rate</span>
      </div>
    </div>
  )
}

function PastLessonCard({ lesson }: { lesson: (typeof pastLessons)[0] }) {
  const [notes, setNotes] = useState(lesson.notes)
  const [isEditingNotes, setIsEditingNotes] = useState(false)
  const [editedNotes, setEditedNotes] = useState(lesson.notes)

  const saveNotes = () => {
    setNotes(editedNotes)
    setIsEditingNotes(false)
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-transparent hover:border-[#226D50] transition-all duration-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-bold text-black">
          {lesson.date} • {lesson.time}
        </p>
        <LessonTypeBadge type={lesson.type} />
      </div>

      {/* Instructor */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={lesson.instructor.avatar || "/placeholder.svg"}
          alt={lesson.instructor.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-base font-bold text-black uppercase">{lesson.instructor.name}</p>
          <p className="text-sm text-gray-500">
            {lesson.focus} • {lesson.duration} min • ${lesson.price}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-4">
        <span className="text-xs uppercase tracking-wider text-gray-500 mr-2">Your Rating:</span>
        <span className="inline-flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-5 w-5 ${star <= lesson.userRating ? "fill-[#FFD700] text-[#FFD700]" : "text-gray-300"}`}
            />
          ))}
        </span>
      </div>

      {/* Feedback */}
      {lesson.feedback && (
        <div className="bg-[#FAFAFA] rounded-lg p-4 mb-4">
          <p className="text-sm font-bold text-[#226D50] mb-2 flex items-center gap-2">📝 INSTRUCTOR FEEDBACK</p>
          <p className="text-sm text-gray-700 italic mb-3">"{lesson.feedback.text}"</p>
          <ul className="space-y-1">
            {lesson.feedback.bullets.map((bullet, idx) => (
              <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-[#226D50]">•</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Media Gallery */}
      {lesson.media && lesson.media.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-bold text-black mb-3 flex items-center gap-2">📸 LESSON MEDIA</p>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {lesson.media.map((item, idx) => (
              <div
                key={idx}
                className="relative flex-shrink-0 w-36 h-24 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              >
                <img
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {item.type === "video" && (
                  <>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Play className="h-8 w-8 text-white fill-white" />
                    </div>
                    <span className="absolute bottom-1 left-1 text-xs text-white bg-black/60 px-1 rounded">
                      {item.duration}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Notes Section */}
      <div className="bg-[#F9FAFB] rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-bold text-black flex items-center gap-2">📝 YOUR NOTES</p>
          {!isEditingNotes && notes && (
            <button
              onClick={() => setIsEditingNotes(true)}
              className="text-xs text-[#226D50] hover:underline flex items-center gap-1"
            >
              <Edit3 className="h-3 w-3" /> EDIT
            </button>
          )}
        </div>

        {isEditingNotes ? (
          <div className="space-y-3">
            <textarea
              value={editedNotes}
              onChange={(e) => setEditedNotes(e.target.value)}
              placeholder="What did you learn? What do you want to work on next?"
              className="w-full p-3 border border-gray-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#226D50]"
              rows={3}
            />
            <div className="flex gap-2">
              <button
                onClick={saveNotes}
                className="px-4 py-2 bg-[#226D50] text-white text-xs font-bold rounded-lg hover:bg-[#1a5a42]"
              >
                SAVE NOTES
              </button>
              <button
                onClick={() => {
                  setIsEditingNotes(false)
                  setEditedNotes(notes)
                }}
                className="px-4 py-2 text-gray-600 text-xs font-bold rounded-lg hover:bg-gray-100"
              >
                CANCEL
              </button>
            </div>
          </div>
        ) : notes ? (
          <p className="text-sm text-gray-700 italic">"{notes}"</p>
        ) : (
          <button onClick={() => setIsEditingNotes(true)} className="text-sm text-gray-500 hover:text-[#226D50]">
            + Add personal notes about this lesson
          </button>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <button className="border-2 border-[#226D50] text-[#226D50] px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#226D50]/5 transition-all flex items-center gap-2">
          <Video className="h-4 w-4" /> View Drill Videos
        </button>
        <button className="border-2 border-gray-300 text-gray-600 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:border-gray-400 transition-all flex items-center gap-2">
          <MessageSquare className="h-4 w-4" /> Message Riley
        </button>
        <button className="bg-[#226D50] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:-translate-y-[2px] hover:shadow-lg transition-all">
          Book Again
        </button>
      </div>
    </div>
  )
}

function CalendarViewComponent({ lessons }: { lessons: typeof lessonsCalendar }) {
  const [view, setView] = useState<CalendarView>("month")
  const [currentDate, setCurrentDate] = useState(new Date(2025, 11, 1))
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1))
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1))

  const formatDateKey = (day: number) => `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`

  const today = new Date()
  const todayKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`

  const days: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) days.push(null)
  for (let i = 1; i <= daysInMonth; i++) days.push(i)

  return (
    <div className="space-y-6">
      {/* View Toggle */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex border border-gray-200 rounded-lg overflow-hidden">
          {(["month", "week", "day"] as CalendarView[]).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-6 py-2.5 text-sm font-medium uppercase tracking-wider transition-all ${
                view === v ? "bg-[#226D50] text-white" : "bg-white text-gray-600 hover:bg-[#F0F9F4]"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={prevMonth}
            className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:border-[#226D50] hover:text-[#226D50] transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h3 className="text-2xl font-bold text-black tracking-wider">
            {monthNames[month].toUpperCase()} {year}
          </h3>
          <button
            onClick={nextMonth}
            className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:border-[#226D50] hover:text-[#226D50] transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {view === "month" && (
          <>
            {/* Day Headers */}
            <div className="grid grid-cols-7 mb-2">
              {dayNames.map((day) => (
                <div key={day} className="text-center text-xs uppercase tracking-wider text-gray-500 py-3 font-medium">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 border-t border-l border-gray-200">
              {days.map((day, idx) => {
                const dateKey = day ? formatDateKey(day) : null
                const lessonData = dateKey ? lessons[dateKey] : null
                const isToday = dateKey === todayKey
                const isSelected = dateKey === selectedDate

                return (
                  <div
                    key={idx}
                    onClick={() => day && setSelectedDate(dateKey)}
                    className={`border-r border-b border-gray-200 min-h-[100px] p-2 cursor-pointer transition-colors duration-150
                      ${!day ? "bg-gray-50" : ""}
                      ${isToday && !isSelected ? "bg-[#F0F9F4] ring-2 ring-inset ring-[#226D50]" : ""}
                      ${isSelected ? "bg-[#226D50]" : "hover:bg-gray-50"}
                    `}
                  >
                    {day && (
                      <div className="h-full flex flex-col">
                        <span className={`text-sm font-medium ${isSelected ? "text-white" : "text-black"}`}>{day}</span>
                        {lessonData && (
                          <div className="mt-1 flex flex-col items-start">
                            <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-white" : "bg-[#226D50]"} mb-1`} />
                            <span className={`text-xs ${isSelected ? "text-white/90" : "text-gray-600"}`}>
                              {lessonData.time}
                            </span>
                            <span
                              className={`text-xs ${isSelected ? "text-white/80" : "text-gray-500"} truncate max-w-full`}
                            >
                              {lessonData.instructor.split(" ")[0]}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#226D50]" /> Scheduled lesson
              </span>
              <span className="flex items-center gap-1">
                <span className="w-4 h-4 ring-2 ring-[#226D50] rounded" /> Today
              </span>
            </div>
          </>
        )}

        {view === "week" && (
          <div className="text-center py-12 text-gray-500">
            <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p className="font-medium">Week View</p>
            <p className="text-sm">Detailed week view coming soon</p>
          </div>
        )}

        {view === "day" && (
          <div className="text-center py-12 text-gray-500">
            <Clock className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p className="font-medium">Day View</p>
            <p className="text-sm">Detailed day view coming soon</p>
          </div>
        )}
      </div>

      {/* Selected Date Detail */}
      {selectedDate && lessons[selectedDate] && (
        <div className="bg-[#FAFAFA] rounded-xl p-6">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
            SELECTED:{" "}
            {new Date(selectedDate)
              .toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
              .toUpperCase()}
          </p>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-black mb-1">
                  {lessons[selectedDate].time} • {lessons[selectedDate].focus}
                </p>
                <p className="text-sm text-gray-600">with {lessons[selectedDate].instructor}</p>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                  <MapPin className="h-3 w-3" /> {lessons[selectedDate].location} • {lessons[selectedDate].duration} min
                </p>
              </div>
              <div className="flex gap-2">
                <LessonTypeBadge type={lessons[selectedDate].type} />
                <button className="bg-[#226D50] text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:-translate-y-[1px] hover:shadow-lg transition-all">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function LessonTypeBadge({ type }: { type: string }) {
  const styles: Record<string, string> = {
    SIMULATOR: "bg-[#226D50] text-white",
    "ON-COURSE": "bg-[#a29e7b] text-white",
    VIRTUAL: "bg-gray-600 text-white",
  }

  return (
    <span
      className={`text-xs uppercase tracking-wider px-4 py-1.5 font-bold rounded-md ${styles[type] || styles.VIRTUAL}`}
    >
      {type}
    </span>
  )
}

function UpcomingEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center bg-white rounded-xl">
      <span className="text-7xl mb-6">🏌️</span>
      <h2 className="text-2xl font-bold text-black mb-3">No upcoming lessons scheduled</h2>
      <p className="text-base text-gray-500 max-w-md mb-6">Book a lesson with Riley or explore other pros</p>
      <div className="flex gap-3">
        <button className="bg-[#226D50] text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:-translate-y-[2px] hover:shadow-lg transition-all">
          Book with Riley
        </button>
        <button className="border-2 border-[#226D50] text-[#226D50] px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-[#226D50]/5 transition-all">
          Find Other Pros
        </button>
      </div>
    </div>
  )
}

function PastEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center bg-white rounded-xl">
      <span className="text-7xl mb-6">📚</span>
      <h2 className="text-2xl font-bold text-black mb-3">Start your golf journey today!</h2>
      <p className="text-base text-gray-500 max-w-md mb-6">Book your first lesson and track your progress</p>
      <button className="bg-[#226D50] text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:-translate-y-[2px] hover:shadow-lg transition-all">
        Book First Lesson
      </button>
    </div>
  )
}
