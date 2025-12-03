"use client"

import { useState, useEffect } from "react"
import {
  Play,
  Users,
  Search,
  Bell,
  BookOpen,
  Home,
  Compass,
  GraduationCap,
  Target,
  MessageSquare,
  Menu,
  X,
  Clock,
  MapPin,
  Check,
  Heart,
  MessageCircle,
  Eye,
  Flame,
  Star,
  TrendingUp,
  ChevronRight,
  BarChart3,
  Sparkles,
  Award,
  Zap,
} from "lucide-react"

type SidebarView = "home" | "my-communities" | "discover" | "courses" | "drills" | "discussions"

// Chamfered card style
const cardStyle = {
  clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
}

const smallCardStyle = {
  clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
}

export function AcademyTab() {
  const [activeView, setActiveView] = useState<SidebarView>("home")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 300)
    return () => clearTimeout(timer)
  }, [])

  const navItems = [
    { id: "home" as SidebarView, label: "HOME", icon: Home },
    { id: "my-communities" as SidebarView, label: "MY COMMUNITIES", icon: Users },
    { id: "discover" as SidebarView, label: "DISCOVER", icon: Compass },
    { id: "courses" as SidebarView, label: "COURSES", icon: GraduationCap },
    { id: "drills" as SidebarView, label: "DRILLS", icon: Target },
    { id: "discussions" as SidebarView, label: "DISCUSSIONS", icon: MessageSquare },
  ]

  const myCommunities = [
    { icon: Users, name: "Beginner Golfers" },
    { icon: Target, name: "Short Game Masters" },
  ]

  return (
    <div
      className={`min-h-screen -m-8 transition-all duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
    >
      {/* Dark Background */}
      <div className="fixed inset-0 z-0 bg-[#0A0A0A]" />

      <div className="relative z-10 flex">
        {/* Mobile hamburger */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-black/60 backdrop-blur-sm border border-white/10"
          style={smallCardStyle}
        >
          <Menu className="w-6 h-6 text-white" />
        </button>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/80 z-40" onClick={() => setSidebarOpen(false)} />
        )}

        {/* LEFT SIDEBAR */}
        <aside
          className={`
            fixed lg:sticky top-0 left-0 h-screen w-[280px]
            bg-black/30 backdrop-blur-md border-r border-white/10
            flex flex-col z-50 transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
        >
          {/* Close button mobile */}
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden absolute top-4 right-4 p-2">
            <X className="w-5 h-5 text-white/70" />
          </button>

          {/* Logo - Inverted: white background, black icon/text */}
          <div className="p-6 flex justify-center border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white flex items-center justify-center" style={smallCardStyle}>
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <span className="font-serif text-xl tracking-[0.15em] text-white">ACADEMY</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="px-3 py-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeView === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveView(item.id)
                    setSidebarOpen(false)
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 transition-all duration-200
                    ${isActive
                      ? "bg-white text-black"
                      : "text-white/70 hover:text-white hover:bg-white/10"}
                  `}
                  style={isActive ? smallCardStyle : undefined}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-serif text-sm tracking-[0.1em]">{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Divider */}
          <div className="mx-4 my-2 border-t border-white/10" />

          {/* My Communities */}
          <div className="px-4 py-2">
            <span className="font-serif text-xs tracking-[0.15em] text-white/40">MY COMMUNITIES</span>
            <div className="mt-3 space-y-1">
              {myCommunities.map((c, i) => {
                const Icon = c.icon
                return (
                  <button
                    key={i}
                    className="w-full flex items-center gap-3 px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{c.name}</span>
                  </button>
                )
              })}
              <button className="w-full flex items-center gap-3 px-3 py-2 text-white text-sm hover:text-white/80 transition-colors">
                <Zap className="w-4 h-4" />
                Join More Communities
              </button>
            </div>
          </div>

          {/* Stats - pushed to bottom */}
          <div className="mt-auto p-4 border-t border-white/10">
            <span className="font-serif text-xs tracking-[0.15em] text-white/40 flex items-center gap-2">
              <BarChart3 className="w-3 h-3" /> YOUR STATS
            </span>
            <div className="mt-3 space-y-1 text-sm">
              <p className="text-white">12 posts this month</p>
              <p className="text-white/50">45 comments</p>
              <p className="text-white/50">234 likes</p>
              <p className="text-white flex items-center gap-2 mt-2">
                <Bell className="w-4 h-4" /> 3 unread
              </p>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 min-h-screen p-8 lg:pl-8">
          {activeView === "home" && <HomeView />}
          {activeView === "my-communities" && <MyCommunitiesView />}
          {activeView === "discover" && <DiscoverView />}
          {activeView === "courses" && <CoursesView />}
          {activeView === "drills" && <DrillsView />}
          {activeView === "discussions" && <DiscussionsView />}
        </main>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// HOME VIEW
// ═══════════════════════════════════════════════════════════

function HomeView() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <div
        className="text-center py-12 px-6 bg-black/40 backdrop-blur-sm border border-white/10"
        style={cardStyle}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-white flex items-center justify-center" style={smallCardStyle}>
            <Sparkles className="w-6 h-6 text-black" />
          </div>
        </div>
        <h1 className="font-serif text-4xl tracking-[0.15em] text-white">ACADEMY</h1>
        <p className="text-white/60 text-lg mt-2 tracking-wide">Learn. Connect. Grow.</p>

        {/* Search bar */}
        <div className="max-w-[600px] mx-auto mt-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <input
            type="text"
            placeholder="Search communities, courses, drills..."
            className="w-full h-[52px] bg-black/40 border border-white/20 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-white transition-all"
            style={cardStyle}
          />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Flame, value: 12, label: "POSTS", trend: "+3 this week" },
          { icon: MessageCircle, value: 45, label: "COMMENTS", trend: "+12 this week" },
          { icon: Heart, value: 234, label: "LIKES", trend: "+28 this week" },
        ].map((stat, i) => {
          const Icon = stat.icon
          return (
            <div
              key={i}
              className="bg-black/40 backdrop-blur-sm border border-white/10 p-8 text-center hover:border-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              style={cardStyle}
            >
              <Icon className="w-10 h-10 mx-auto text-white" />
              <p className="font-serif text-4xl text-white mt-4">{stat.value}</p>
              <p className="font-serif text-xs tracking-[0.15em] text-white/50 mt-1">{stat.label}</p>
              <p className="text-sm mt-2 text-white/70">{stat.trend}</p>
            </div>
          )
        })}
      </div>

      {/* Trending Discussions */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-serif text-xl tracking-[0.1em] text-white flex items-center gap-2">
            <Flame className="w-5 h-5 text-white" />
            TRENDING DISCUSSIONS
          </h2>
          <button className="font-serif text-sm tracking-wider text-white hover:text-white/80 flex items-center gap-1">
            VIEW ALL <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-4">
          {[
            { title: "What's the hardest par 3 you've played?", community: "General Golf Talk", comments: 234, views: "1.2k", author: "Alex M." },
            { title: "Share your latest swing video for feedback", community: "Swing Analysis", comments: 89, views: "445", author: "Riley B." },
            { title: "Best drills to practice at home?", community: "Practice Tips", comments: 156, views: "892", author: "Mike T." },
          ].map((d, i) => (
            <div
              key={i}
              className="bg-black/40 backdrop-blur-sm border border-white/10 p-5 hover:border-white hover:-translate-y-0.5 transition-all cursor-pointer"
              style={cardStyle}
            >
              <div className="flex gap-4">
                <div className="w-[100px] h-[70px] bg-white/5 border border-white/10 flex-shrink-0" style={smallCardStyle} />
                <div className="flex-1">
                  <h3 className="font-serif text-lg text-white">{d.title}</h3>
                  <p className="text-white/50 text-sm mt-1">in {d.community}</p>
                  <p className="text-white/30 text-xs mt-2">
                    {d.comments} comments · {d.views} views · Posted by {d.author}
                  </p>
                </div>
                <button className="font-serif text-sm text-white self-center flex items-center gap-1">
                  READ <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Communities */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-serif text-xl tracking-[0.1em] text-white flex items-center gap-2">
            <Star className="w-5 h-5 text-white" />
            RECOMMENDED FOR YOU
          </h2>
          <button className="font-serif text-sm tracking-wider text-white hover:text-white/80 flex items-center gap-1">
            VIEW ALL <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CommunityCard
            icon={Target}
            name="BREAKING 90"
            members={1245}
            activity="234 posts this week"
            description="Share tips and celebrate breaking 90 together"
          />
          <CommunityCard
            icon={Zap}
            name="MENTAL GAME MASTERY"
            members={892}
            activity="156 posts this week"
            description="Master the mental side of golf"
            trending
          />
        </div>
      </div>
    </div>
  )
}

function CommunityCard({
  icon: Icon,
  name,
  members,
  activity,
  description,
  trending,
}: {
  icon: any
  name: string
  members: number
  activity: string
  description: string
  trending?: boolean
}) {
  return (
    <div
      className="bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-white hover:-translate-y-1 transition-all duration-200 cursor-pointer"
      style={cardStyle}
    >
      {/* Cover */}
      <div className="h-[140px] relative bg-gradient-to-br from-white/5 to-transparent">
        {trending && (
          <span className="absolute top-3 right-3 px-2 py-1 bg-white/20 border border-white text-white text-xs font-serif tracking-wider flex items-center gap-1" style={smallCardStyle}>
            <TrendingUp className="w-3 h-3" /> TRENDING
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 border border-white/50 flex items-center justify-center" style={smallCardStyle}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-serif text-lg tracking-wider text-white">{name}</h3>
            <p className="text-white/50 text-sm">{members.toLocaleString()} members</p>
          </div>
        </div>
        <p className="text-white/70 text-sm mt-3 flex items-center gap-1">
          <Flame className="w-3 h-3" /> {activity}
        </p>
        <p className="text-white/40 text-sm italic mt-2">"{description}"</p>

        <button
          className="w-full mt-4 py-3 bg-white text-black font-serif text-sm tracking-[0.1em] hover:bg-white/90 transition-all"
          style={smallCardStyle}
        >
          JOIN COMMUNITY
        </button>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// MY COMMUNITIES VIEW
// ═══════════════════════════════════════════════════════════

function MyCommunitiesView() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="font-serif text-2xl tracking-[0.1em] text-white">MY COMMUNITIES (2)</h1>
        <button
          className="px-5 py-2.5 border border-white text-white font-serif text-sm tracking-[0.1em] hover:bg-white hover:text-black transition-all"
          style={smallCardStyle}
        >
          + JOIN MORE
        </button>
      </div>

      <div className="space-y-6">
        <MyCommunityCard
          icon={Users}
          name="BEGINNER GOLFERS"
          members={1245}
          newPosts={12}
          badge="TOP CONTRIBUTOR"
          myPosts={8}
        />
        <MyCommunityCard
          icon={Target}
          name="SHORT GAME MASTERS"
          members={892}
          newPosts={5}
          badge="FOUNDING MEMBER"
          myPosts={3}
        />
      </div>

      {/* Recent Activity */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-serif text-xl tracking-[0.1em] text-white flex items-center gap-2">
            <Bell className="w-5 h-5 text-white" />
            RECENT ACTIVITY
          </h2>
        </div>
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden" style={cardStyle}>
          {[
            { user: "Alex M.", action: "commented on your post", community: "Beginner Golfers", time: "2h ago" },
            { user: "Sarah K.", action: "liked your comment", community: "Short Game Masters", time: "4h ago" },
            { user: "Mike T.", action: "replied to your discussion", community: "Beginner Golfers", time: "1d ago" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-sm">
                {item.user.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="text-white text-sm">
                  <span className="font-medium">{item.user}</span>{" "}
                  <span className="text-white/60">{item.action}</span>
                  <span className="text-white/40"> in {item.community}</span>
                </p>
              </div>
              <span className="text-white/30 text-xs">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MyCommunityCard({
  icon: Icon,
  name,
  members,
  newPosts,
  badge,
  myPosts,
}: {
  icon: any
  name: string
  members: number
  newPosts: number
  badge: string
  myPosts: number
}) {
  return (
    <div
      className="bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-white transition-all"
      style={cardStyle}
    >
      <div className="h-[160px] relative bg-gradient-to-br from-white/5 to-transparent">
        <div className="absolute bottom-4 left-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 border border-white/50 flex items-center justify-center" style={smallCardStyle}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-serif text-xl tracking-wider text-white">{name}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-white/50">{members.toLocaleString()} members · {newPosts} new posts today</p>

        <div
          className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 text-xs font-serif tracking-wider bg-white/20 border border-white text-white"
          style={smallCardStyle}
        >
          <Award className="w-3 h-3" />
          {badge}
        </div>

        <p className="text-white/30 text-sm mt-2">You've posted {myPosts} times this month</p>

        <button
          className="w-full mt-4 py-3 bg-white text-black font-serif text-sm tracking-[0.1em] hover:bg-white/90 transition-all"
          style={smallCardStyle}
        >
          OPEN COMMUNITY
        </button>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// DISCOVER VIEW
// ═══════════════════════════════════════════════════════════

function DiscoverView() {
  const [activeFilter, setActiveFilter] = useState("All")
  const filters = ["All", "Beginner", "Intermediate", "Advanced", "Short Game", "Putting", "Driving"]

  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-serif text-2xl tracking-[0.1em] text-white mb-6">DISCOVER COMMUNITIES</h1>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-3 mb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 font-serif text-sm tracking-wider transition-all ${
                activeFilter === f
                  ? "bg-white text-black"
                  : "bg-black/40 border border-white/20 text-white/60 hover:border-white"
              }`}
              style={smallCardStyle}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Users, name: "Beginner Golfers", members: 1245 },
            { icon: Target, name: "Short Game", members: 892 },
            { icon: Zap, name: "Mental Game", members: 567 },
            { icon: Compass, name: "Course Strategy", members: 423 },
            { icon: Award, name: "Tournament Prep", members: 312 },
            { icon: Flame, name: "Golf Fitness", members: 678 },
          ].map((c, i) => {
            const Icon = c.icon
            return (
              <div
                key={i}
                className="bg-black/40 backdrop-blur-sm border border-white/10 p-6 hover:border-white hover:-translate-y-0.5 transition-all cursor-pointer"
                style={cardStyle}
              >
                <div className="w-12 h-12 bg-white/20 border border-white/50 flex items-center justify-center mb-4" style={smallCardStyle}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-lg text-white">{c.name}</h3>
                <p className="text-white/50 text-sm mt-1">{c.members.toLocaleString()} members</p>
                <button
                  className="w-full mt-4 py-2 border border-white text-white font-serif text-xs tracking-[0.1em] hover:bg-white hover:text-black transition-all"
                  style={smallCardStyle}
                >
                  JOIN
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// COURSES VIEW
// ═══════════════════════════════════════════════════════════

function CoursesView() {
  return (
    <div className="space-y-10">
      {/* Free Tips */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-serif text-xl tracking-[0.1em] text-white flex items-center gap-2">
            <Play className="w-5 h-5 text-white" />
            FREE TIPS FROM PROS
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "3 Drills to Fix Your Slice", author: "Riley Bunker", duration: "8:32", views: 234 },
            { title: "Perfect Your Putting", author: "Mike Thompson", duration: "12:45", views: 512 },
            { title: "Driver Distance Secrets", author: "Sarah Kim", duration: "10:20", views: 189 },
            { title: "Bunker Basics", author: "Alex Johnson", duration: "6:15", views: 156 },
          ].map((v, i) => (
            <div
              key={i}
              className="bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-white transition-all cursor-pointer"
              style={cardStyle}
            >
              <div className="h-[120px] bg-white/5 relative">
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white flex items-center justify-center" style={smallCardStyle}>
                    <Play className="w-5 h-5 text-black ml-0.5" fill="black" />
                  </div>
                </button>
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {v.duration}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-sm text-white">{v.title}</h3>
                <p className="text-white/50 text-xs mt-1">by {v.author}</p>
                <p className="text-white/30 text-xs mt-1 flex items-center gap-1">
                  <Eye className="w-3 h-3" /> {v.views} views
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Courses */}
      <div>
        <h2 className="font-serif text-xl tracking-[0.1em] text-white flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-white" />
          PREMIUM COURSES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PremiumCourseCard
            title="SHORT GAME MASTERY"
            author="Riley Bunker"
            lessons={12}
            hours={6.5}
            students={234}
            price={49}
            features={["Master chipping technique", "Perfect bunker shots", "Develop touch around greens"]}
          />
          <PremiumCourseCard
            title="BREAKING 80 BLUEPRINT"
            author="Mike Johnson"
            badge="PGA Pro"
            lessons={24}
            hours={12}
            students={1023}
            price={99}
            features={["Complete scoring system", "Course management", "Mental game mastery"]}
          />
        </div>
      </div>
    </div>
  )
}

function PremiumCourseCard({
  title,
  author,
  badge,
  lessons,
  hours,
  students,
  price,
  features,
}: {
  title: string
  author: string
  badge?: string
  lessons: number
  hours: number
  students: number
  price: number
  features: string[]
}) {
  return (
    <div
      className="bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-white hover:-translate-y-1 transition-all"
      style={cardStyle}
    >
      <div className="h-[160px] bg-gradient-to-br from-white/20 to-transparent relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/30 border border-white/50 backdrop-blur-sm flex items-center justify-center" style={cardStyle}>
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl tracking-wider text-white">{title}</h3>
        <p className="text-white/50 mt-1">
          by {author}
          {badge && (
            <span className="ml-2 px-2 py-0.5 bg-white/20 border border-white text-white text-xs tracking-wider">
              {badge}
            </span>
          )}
        </p>
        <p className="text-white/30 text-sm mt-2">{lessons} lessons · {hours} hours · {students.toLocaleString()} students</p>

        <div className="mt-4 space-y-2">
          {features.map((f, i) => (
            <p key={i} className="text-white/50 text-sm flex items-center gap-2">
              <Check className="w-4 h-4 text-white" /> {f}
            </p>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6">
          <span className="font-serif text-3xl text-white">${price}</span>
          <button
            className="px-6 py-3 bg-white text-black font-serif text-sm tracking-[0.1em] hover:bg-white/90 transition-all"
            style={smallCardStyle}
          >
            ENROLL NOW
          </button>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// DRILLS VIEW
// ═══════════════════════════════════════════════════════════

function DrillsView() {
  const filters = ["Driver", "Irons", "Wedges", "Putting", "Beginner", "Advanced"]

  return (
    <div className="space-y-8">
      <h1 className="font-serif text-2xl tracking-[0.1em] text-white">DRILL LIBRARY (500+)</h1>

      {/* Search */}
      <div className="relative max-w-[600px]">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
        <input
          type="text"
          placeholder="Search 500+ practice drills..."
          className="w-full h-[52px] bg-black/40 border border-white/20 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-white transition-all"
          style={cardStyle}
        />
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            className="px-4 py-2 bg-black/40 border border-white/20 text-white/60 font-serif text-sm tracking-wider hover:border-white transition-all"
            style={smallCardStyle}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Drill cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "GATE DRILL - PUTTING ACCURACY", duration: "10 min", location: "Putting Green", difficulty: 3, completedBy: 234, isCompleted: true },
          { title: "TOWEL DRILL - IRON CONTACT", duration: "15 min", location: "Range", difficulty: 2, completedBy: 189, isCompleted: false },
          { title: "ALIGNMENT STICK DRILL", duration: "20 min", location: "Range", difficulty: 4, completedBy: 312, isCompleted: false },
        ].map((drill, i) => (
          <div
            key={i}
            className={`bg-black/40 backdrop-blur-sm border p-5 transition-all ${drill.isCompleted ? "border-l-4 border-l-white border-white/10" : "border-white/10 hover:border-white"}`}
            style={cardStyle}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 border border-white/50 flex items-center justify-center flex-shrink-0" style={smallCardStyle}>
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-sm text-white truncate">{drill.title}</h3>
                <div className="flex items-center gap-2 mt-2 text-xs text-white/50">
                  <Clock className="w-3 h-3" /> {drill.duration}
                  <span>·</span>
                  <MapPin className="w-3 h-3" /> {drill.location}
                </div>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className={`w-3 h-3 ${idx < drill.difficulty ? "text-white fill-white" : "text-white/20"}`} />
                  ))}
                </div>
                <p className="text-white/70 text-xs mt-2 flex items-center gap-1">
                  <Check className="w-3 h-3" /> {drill.completedBy} completed
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                className="flex-1 py-2 border border-white text-white font-serif text-xs tracking-[0.1em] hover:bg-white hover:text-black transition-all"
                style={smallCardStyle}
              >
                VIEW
              </button>
              <button
                className={`flex-1 py-2 font-serif text-xs tracking-[0.1em] transition-all ${
                  drill.isCompleted ? "bg-white text-black" : "border border-white text-white hover:bg-white hover:text-black"
                }`}
                style={smallCardStyle}
              >
                {drill.isCompleted ? "DONE" : "COMPLETE"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// DISCUSSIONS VIEW
// ═══════════════════════════════════════════════════════════

function DiscussionsView() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="font-serif text-2xl tracking-[0.1em] text-white">DISCUSSIONS</h1>
        <button
          className="px-5 py-2.5 bg-white text-black font-serif text-sm tracking-[0.1em] hover:bg-white/90 transition-all"
          style={smallCardStyle}
        >
          + NEW POST
        </button>
      </div>

      <div className="space-y-4">
        {[
          { title: "What's the hardest par 3 you've played?", community: "General Golf Talk", author: "Alex M.", comments: 234, views: 1200, likes: 89, time: "2h ago", hot: true },
          { title: "Share your latest swing video for feedback", community: "Swing Analysis", author: "Riley B.", comments: 89, views: 445, likes: 45, time: "4h ago", hot: false },
          { title: "Best drills to practice at home?", community: "Practice Tips", author: "Mike T.", comments: 156, views: 892, likes: 67, time: "8h ago", hot: true },
          { title: "How to stop 3-putting?", community: "Putting", author: "Sarah K.", comments: 78, views: 356, likes: 34, time: "1d ago", hot: false },
        ].map((d, i) => (
          <div
            key={i}
            className="bg-black/40 backdrop-blur-sm border border-white/10 p-5 hover:border-white transition-all cursor-pointer"
            style={cardStyle}
          >
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-serif flex-shrink-0">
                {d.author.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-lg text-white truncate">{d.title}</h3>
                  {d.hot && (
                    <span className="px-2 py-0.5 bg-white/20 border border-white text-white text-xs font-serif tracking-wider flex items-center gap-1 flex-shrink-0" style={smallCardStyle}>
                      <Flame className="w-3 h-3" /> HOT
                    </span>
                  )}
                </div>
                <p className="text-white/50 text-sm mt-1">in {d.community} · by {d.author}</p>
                <div className="flex items-center gap-4 mt-3 text-white/30 text-sm">
                  <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> {d.comments}</span>
                  <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> {d.views}</span>
                  <span className="flex items-center gap-1"><Heart className="w-4 h-4" /> {d.likes}</span>
                  <span className="ml-auto">{d.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
