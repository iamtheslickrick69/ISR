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
} from "lucide-react"

type SidebarView = "home" | "my-communities" | "discover" | "courses" | "drills" | "discussions"

export function AcademyTab() {
  const [activeView, setActiveView] = useState<SidebarView>("home")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(true)

  // Smooth transition into dark mode
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
    { emoji: "🏌️", name: "Beginner Golfers" },
    { emoji: "🎯", name: "Short Game Masters" },
  ]

  return (
    <div
      className={`min-h-screen -m-8 transition-all duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
      style={{ background: "#0A0A0A" }}
    >
      <div className="flex">
        {/* Mobile hamburger */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#1A1A1A] rounded-lg border border-[#2A2A2A]"
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
            fixed lg:sticky top-0 left-0 h-screen w-[280px] bg-[#0A0A0A] border-r border-[#2A2A2A]
            flex flex-col z-50 transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
        >
          {/* Close button mobile */}
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden absolute top-4 right-4 p-2">
            <X className="w-5 h-5 text-white/70" />
          </button>

          {/* Logo */}
          <div className="p-6 flex justify-center">
            <img
              src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaablack1.png"
              alt="Academy"
              className="h-[60px] object-contain animate-pulse-subtle"
              style={{ filter: "invert(1)" }}
            />
          </div>

          {/* Navigation */}
          <nav className="px-3 space-y-1">
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
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                    ${isActive ? "bg-[#BF2424] text-white" : "text-white/70 hover:text-white hover:bg-[#1A1A1A]"}
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Divider */}
          <div className="mx-4 my-4 border-t border-[#2A2A2A]" />

          {/* My Communities */}
          <div className="px-4">
            <span className="text-xs text-[#666666] uppercase tracking-wider">MY COMMUNITIES</span>
            <div className="mt-3 space-y-1">
              {myCommunities.map((c, i) => (
                <button
                  key={i}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-[#1A1A1A] transition-all"
                >
                  <span className="text-xl">{c.emoji}</span>
                  <span className="text-sm">{c.name}</span>
                </button>
              ))}
              <button className="w-full flex items-center gap-3 px-3 py-2 text-[#BF2424] text-sm hover:underline">
                + Join More Communities
              </button>
            </div>
          </div>

          {/* Stats - pushed to bottom */}
          <div className="mt-auto p-4 border-t border-[#2A2A2A]">
            <span className="text-xs text-[#666666] uppercase tracking-wider">📊 YOUR STATS</span>
            <div className="mt-3 space-y-1 text-sm">
              <p className="text-white">12 posts this month</p>
              <p className="text-[#A0A0A0]">45 comments</p>
              <p className="text-[#A0A0A0]">234 likes</p>
              <p className="text-[#BF2424] flex items-center gap-2 mt-2">
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
    <div className="space-y-12">
      {/* Hero */}
      <div
        className="text-center py-16 rounded-2xl"
        style={{ background: "linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)" }}
      >
        <img
          src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaablack1.png"
          alt="Academy"
          className="h-[80px] mx-auto animate-pulse-subtle"
          style={{ filter: "invert(1)" }}
        />
        <h1 className="text-white text-5xl font-bold mt-6 tracking-wide">ACADEMY</h1>
        <p className="text-[#A0A0A0] text-xl mt-2">Learn. Connect. Grow.</p>

        {/* Search bar */}
        <div className="max-w-[600px] mx-auto mt-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666666]" />
          <input
            type="text"
            placeholder="Search communities, courses, drills..."
            className="w-full h-[52px] bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl pl-12 pr-4 text-white placeholder-[#666666] focus:outline-none focus:border-[#BF2424] transition-all"
          />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { emoji: "🔥", value: 12, label: "POSTS", trend: "+3 this week", trendColor: "#22C55E" },
          { emoji: "💬", value: 45, label: "COMMENTS", trend: "+12 this week", trendColor: "#22C55E" },
          { emoji: "❤️", value: 234, label: "LIKES", trend: "+28 this week", trendColor: "#22C55E" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-8 text-center hover:border-[#BF2424] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            style={{
              clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
            }}
          >
            <span className="text-5xl">{stat.emoji}</span>
            <p className="text-white text-4xl font-bold mt-4">{stat.value}</p>
            <p className="text-[#A0A0A0] text-sm uppercase tracking-wider mt-1">{stat.label}</p>
            <p className="text-sm mt-2" style={{ color: stat.trendColor }}>
              {stat.trend}
            </p>
          </div>
        ))}
      </div>

      {/* Trending Discussions */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold flex items-center gap-2">🔥 TRENDING DISCUSSIONS</h2>
          <button className="text-[#BF2424] text-sm hover:underline">View All →</button>
        </div>
        <div className="space-y-4">
          {[
            {
              title: "What's the hardest par 3 you've played?",
              community: "General Golf Talk",
              comments: 234,
              views: "1.2k",
              author: "Alex M.",
            },
            {
              title: "Share your latest swing video for feedback",
              community: "Swing Analysis",
              comments: 89,
              views: "445",
              author: "Riley B.",
            },
            {
              title: "Best drills to practice at home?",
              community: "Practice Tips",
              comments: 156,
              views: "892",
              author: "Mike T.",
            },
          ].map((d, i) => (
            <div
              key={i}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-5 hover:border-[#BF2424] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <div className="flex gap-4">
                <div className="w-[120px] h-[80px] bg-[#2A2A2A] rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-white text-lg font-bold">{d.title}</h3>
                  <p className="text-[#A0A0A0] text-sm mt-1">in {d.community}</p>
                  <p className="text-[#666666] text-xs mt-2">
                    {d.comments} comments • {d.views} views • Posted by {d.author}
                  </p>
                </div>
                <button className="text-[#BF2424] text-sm font-medium self-center">Read →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Communities */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold flex items-center gap-2">⭐ RECOMMENDED FOR YOU</h2>
          <button className="text-[#BF2424] text-sm hover:underline">View All →</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RecommendedCommunityCard
            icon="🎯"
            name="BREAKING 90"
            members={1245}
            activity="234 posts this week"
            description="Share tips and celebrate breaking 90 together"
          />
          <RecommendedCommunityCard
            icon="🧠"
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

function RecommendedCommunityCard({
  icon,
  name,
  members,
  activity,
  description,
  trending,
}: {
  icon: string
  name: string
  members: number
  activity: string
  description: string
  trending?: boolean
}) {
  return (
    <div
      className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl overflow-hidden hover:border-[#BF2424] hover:-translate-y-1 transition-all duration-200 cursor-pointer"
      style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
    >
      {/* Cover image */}
      <div
        className="h-[180px] relative"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, #0A0A0A 100%), linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)",
        }}
      >
        {trending && (
          <span className="absolute top-3 right-3 px-2 py-1 bg-[rgba(245,158,11,0.2)] border border-[#F59E0B] text-[#F59E0B] text-xs font-bold uppercase rounded">
            🔥 TRENDING
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3">
          <span className="text-5xl">{icon}</span>
          <div>
            <h3 className="text-white text-xl font-bold">{name}</h3>
            <p className="text-[#A0A0A0] text-sm">{members.toLocaleString()} members at your level</p>
          </div>
        </div>
        <p className="text-[#22C55E] text-sm mt-2">Active: {activity} 🔥</p>
        <p className="text-[#A0A0A0] text-sm italic mt-2">"{description}"</p>

        {/* Avatar stack */}
        <div className="flex items-center mt-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-[#2A2A2A] border-2 border-[#1A1A1A]" />
            ))}
          </div>
          <span className="text-[#666666] text-xs ml-2">+{members - 3} members</span>
        </div>

        <button
          className="w-full mt-4 py-3 bg-[#BF2424] text-white font-bold text-sm uppercase rounded-lg hover:bg-[#D62828] hover:-translate-y-0.5 transition-all"
          style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
        >
          JOIN COMMUNITY →
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
        <h1 className="text-white text-3xl font-bold">MY COMMUNITIES (2)</h1>
        <button className="px-5 py-2.5 border-2 border-[#BF2424] text-[#BF2424] rounded-lg text-sm font-bold uppercase hover:bg-[#BF2424] hover:text-white transition-all">
          + JOIN MORE
        </button>
      </div>

      {/* Community cards */}
      <div className="space-y-6">
        <MyCommunityCard
          coverGradient="linear-gradient(135deg, #1a3d2e 0%, #0A0A0A 100%)"
          icon="🏌️"
          name="BEGINNER GOLFERS"
          members={1245}
          newPosts={12}
          badge="👍 TOP CONTRIBUTOR"
          myPosts={8}
        />
        <MyCommunityCard
          coverGradient="linear-gradient(135deg, #3d2e1a 0%, #0A0A0A 100%)"
          icon="🎯"
          name="SHORT GAME MASTERS"
          members={892}
          newPosts={5}
          badge="⭐ FOUNDING MEMBER"
          badgeColor="#FBBF24"
          myPosts={3}
        />
      </div>

      {/* Recent Activity */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold">📬 RECENT ACTIVITY</h2>
          <button className="text-[#BF2424] text-sm hover:underline">View All →</button>
        </div>
        <div className="bg-[#1A1A1A] rounded-xl overflow-hidden">
          {[
            { user: "Alex M.", action: "commented on your post", community: "Beginner Golfers", time: "2h ago" },
            { user: "Sarah K.", action: "liked your comment", community: "Short Game Masters", time: "4h ago" },
            { user: "Mike T.", action: "replied to your discussion", community: "Beginner Golfers", time: "1d ago" },
            { user: "Riley B.", action: "mentioned you in a post", community: "Short Game Masters", time: "2d ago" },
            { user: "Jordan L.", action: "started following you", community: "", time: "3d ago" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 border-b border-[#2A2A2A] last:border-0 hover:bg-[#2A2A2A] transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#2A2A2A]" />
              <div className="flex-1">
                <p className="text-white text-sm">
                  <span className="font-bold">{item.user}</span> {item.action}
                  {item.community && <span className="text-[#A0A0A0]"> in {item.community}</span>}
                </p>
              </div>
              <span className="text-[#666666] text-xs">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MyCommunityCard({
  coverGradient,
  icon,
  name,
  members,
  newPosts,
  badge,
  badgeColor = "#BF2424",
  myPosts,
}: {
  coverGradient: string
  icon: string
  name: string
  members: number
  newPosts: number
  badge: string
  badgeColor?: string
  myPosts: number
}) {
  return (
    <div
      className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl overflow-hidden hover:border-[#BF2424] transition-all"
      style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
    >
      <div
        className="h-[200px] relative"
        style={{ background: `linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.9) 100%), ${coverGradient}` }}
      >
        <div className="absolute bottom-4 left-6 flex items-center gap-4">
          <span className="text-5xl">{icon}</span>
          <h3 className="text-white text-2xl font-bold">{name}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-[#A0A0A0]">
          {members.toLocaleString()} members • {newPosts} new posts today
        </p>

        <div
          className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded text-xs font-bold uppercase"
          style={{
            background: `rgba(${badgeColor === "#BF2424" ? "191,36,36" : "251,191,36"},0.2)`,
            border: `1px solid ${badgeColor}`,
            color: badgeColor,
          }}
        >
          {badge}
        </div>

        <p className="text-[#666666] text-sm mt-2">You've posted {myPosts} times this month</p>

        <button
          className="w-full mt-4 py-3 bg-[#BF2424] text-white font-bold text-sm uppercase rounded-lg hover:bg-[#D62828] transition-all"
          style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
        >
          OPEN COMMUNITY →
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
    <div className="space-y-12">
      {/* Recommended */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-white text-3xl font-bold">RECOMMENDED FOR YOU</h1>
          <button className="text-[#BF2424] text-sm hover:underline">Refresh →</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RecommendedCommunityCard
            icon="🎯"
            name="BREAKING 90"
            members={1245}
            activity="234 posts this week"
            description="Share tips and celebrate breaking 90 together"
          />
          <RecommendedCommunityCard
            icon="🧠"
            name="MENTAL GAME"
            members={892}
            activity="156 posts this week"
            description="Master the mental side of golf"
          />
          <RecommendedCommunityCard
            icon="🏌️"
            name="SWING TIPS"
            members={2341}
            activity="312 posts this week"
            description="Perfect your swing with community feedback"
          />
        </div>
      </div>

      {/* Trending */}
      <div>
        <h2 className="text-white text-2xl font-bold mb-4 flex items-center gap-2">🔥 TRENDING THIS WEEK</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RecommendedCommunityCard
            icon="⛳"
            name="COURSE STRATEGY"
            members={567}
            activity="89 posts this week"
            description="Learn to think your way around the course"
            trending
          />
          <RecommendedCommunityCard
            icon="🎯"
            name="PUTTING MASTERS"
            members={1102}
            activity="198 posts this week"
            description="Become deadly on the greens"
            trending
          />
        </div>
      </div>

      {/* Browse All */}
      <div>
        <h2 className="text-white text-2xl font-bold mb-4">BROWSE ALL COMMUNITIES</h2>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-3 mb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === f
                  ? "bg-[#BF2424] text-white"
                  : "bg-[#1A1A1A] border border-[#2A2A2A] text-[#A0A0A0] hover:border-[#BF2424]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "🏌️", name: "Beginner Golfers", members: 1245 },
            { icon: "🎯", name: "Short Game", members: 892 },
            { icon: "🧠", name: "Mental Game", members: 567 },
            { icon: "⛳", name: "Course Strategy", members: 423 },
            { icon: "🏆", name: "Tournament Prep", members: 312 },
            { icon: "💪", name: "Golf Fitness", members: 678 },
          ].map((c, i) => (
            <div
              key={i}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#BF2424] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <span className="text-4xl">{c.icon}</span>
              <h3 className="text-white font-bold mt-3">{c.name}</h3>
              <p className="text-[#A0A0A0] text-sm mt-1">{c.members.toLocaleString()} members</p>
              <button className="w-full mt-4 py-2 border border-[#BF2424] text-[#BF2424] rounded-lg text-xs font-bold uppercase hover:bg-[#BF2424] hover:text-white transition-all">
                Join
              </button>
            </div>
          ))}
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
    <div className="space-y-12">
      {/* Free Tips */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold">🎥 FREE TIPS FROM PROS</h2>
          <button className="text-[#BF2424] text-sm hover:underline">View All →</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "3 Drills to Fix Your Slice", author: "Riley Bunker", duration: "8:32", rating: 4.8, views: 234 },
            { title: "Perfect Your Putting", author: "Mike Thompson", duration: "12:45", rating: 4.9, views: 512 },
            { title: "Driver Distance Secrets", author: "Sarah Kim", duration: "10:20", rating: 4.7, views: 189 },
            { title: "Bunker Basics", author: "Alex Johnson", duration: "6:15", rating: 4.6, views: 156 },
          ].map((v, i) => (
            <VideoCard key={i} {...v} />
          ))}
        </div>
      </div>

      {/* Premium Courses */}
      <div>
        <h2 className="text-white text-2xl font-bold mb-4">💎 PREMIUM COURSES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PremiumCourseCard
            title="SHORT GAME MASTERY"
            author="Riley Bunker"
            lessons={12}
            hours={6.5}
            students={234}
            rating={4.9}
            reviews={89}
            price={49}
            features={[
              "Master chipping technique",
              "Perfect bunker shots",
              "Develop touch around greens",
              "Score-saving strategies",
            ]}
          />
          <PremiumCourseCard
            title="BREAKING 80 BLUEPRINT"
            author="Mike Johnson"
            badge="PGA Pro"
            lessons={24}
            hours={12}
            students={1023}
            rating={5.0}
            reviews={312}
            price={99}
            features={["Complete scoring system", "Course management", "Mental game mastery", "Practice routines"]}
          />
        </div>
      </div>
    </div>
  )
}

function VideoCard({
  title,
  author,
  duration,
  rating,
  views,
}: { title: string; author: string; duration: string; rating: number; views: number }) {
  return (
    <div
      className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl overflow-hidden hover:border-[#BF2424] transition-all cursor-pointer"
      style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
    >
      <div className="h-[140px] bg-[#2A2A2A] relative">
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-[#BF2424] rounded-full flex items-center justify-center">
            <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
          </div>
        </button>
        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">⏱️ {duration}</span>
      </div>
      <div className="p-4">
        <h3 className="text-white font-bold">{title}</h3>
        <p className="text-[#A0A0A0] text-sm mt-1">by {author}</p>
        <p className="text-[#666666] text-xs mt-1">
          ⭐ {rating} ({views} views)
        </p>
        <button className="w-full mt-3 py-2 border border-[#BF2424] text-[#BF2424] rounded-lg text-xs font-bold uppercase hover:bg-[#BF2424] hover:text-white transition-all">
          Watch Free
        </button>
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
  rating,
  reviews,
  price,
  features,
}: {
  title: string
  author: string
  badge?: string
  lessons: number
  hours: number
  students: number
  rating: number
  reviews: number
  price: number
  features: string[]
}) {
  return (
    <div
      className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl overflow-hidden hover:border-[#BF2424] hover:-translate-y-1 transition-all"
      style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
    >
      <div className="h-[200px] bg-gradient-to-br from-[#BF2424] to-[#8B0000] relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="text-[#A0A0A0] text-lg mt-1">
          by {author}
          {badge && (
            <span className="ml-2 px-2 py-0.5 bg-[rgba(251,191,36,0.2)] border border-[#FBBF24] text-[#FBBF24] text-xs uppercase rounded">
              {badge}
            </span>
          )}
        </p>
        <p className="text-[#666666] text-sm mt-2">
          {lessons} video lessons • {hours} hours
        </p>
        <p className="text-[#666666] text-sm">{students.toLocaleString()} students enrolled</p>
        <p className="text-white text-sm mt-2">
          ⭐ {rating} ({reviews} reviews)
        </p>

        <div className="mt-4">
          <p className="text-white font-bold text-sm mb-2">What you'll learn:</p>
          <ul className="space-y-1">
            {features.map((f, i) => (
              <li key={i} className="text-[#A0A0A0] text-sm flex items-center gap-2">
                <Check className="w-4 h-4 text-[#22C55E]" /> {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between mt-6">
          <span className="text-white text-3xl font-bold">${price}</span>
          <button
            className="px-6 py-3 bg-[#BF2424] text-white font-bold text-sm uppercase rounded-lg hover:bg-[#D62828] hover:-translate-y-0.5 transition-all"
            style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
          >
            Enroll Now →
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
  const filters = ["Driver", "Irons", "Wedges", "Putting", "Beginner", "Advanced", "<15 min", "30+ min"]

  return (
    <div className="space-y-8">
      <h1 className="text-white text-3xl font-bold">DRILL LIBRARY (500+)</h1>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666666]" />
        <input
          type="text"
          placeholder="Search 500+ practice drills..."
          className="w-full max-w-[600px] h-[52px] bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl pl-12 pr-4 text-white placeholder-[#666666] focus:outline-none focus:border-[#BF2424] transition-all"
        />
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-[#A0A0A0] rounded-full text-sm hover:border-[#BF2424] hover:text-white transition-all"
          >
            {f}
          </button>
        ))}
      </div>

      {/* Drill cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "GATE DRILL - PUTTING ACCURACY",
            duration: "10 minutes",
            location: "Putting Green",
            difficulty: 3,
            description: "Improve straight-back-straight-through stroke",
            completedBy: 234,
            isCompleted: true,
          },
          {
            title: "TOWEL DRILL - IRON CONTACT",
            duration: "15 minutes",
            location: "Range",
            difficulty: 2,
            description: "Develop proper ball-first contact",
            completedBy: 189,
            isCompleted: false,
          },
          {
            title: "ALIGNMENT STICK DRILL",
            duration: "20 minutes",
            location: "Range",
            difficulty: 4,
            description: "Perfect your alignment and swing path",
            completedBy: 312,
            isCompleted: false,
          },
          {
            title: "COIN DRILL - CHIPPING",
            duration: "10 minutes",
            location: "Short Game Area",
            difficulty: 2,
            description: "Improve strike consistency on chips",
            completedBy: 145,
            isCompleted: true,
          },
          {
            title: "FEET TOGETHER DRILL",
            duration: "15 minutes",
            location: "Range",
            difficulty: 3,
            description: "Develop balance and tempo",
            completedBy: 267,
            isCompleted: false,
          },
          {
            title: "LADDER DRILL - PUTTING",
            duration: "20 minutes",
            location: "Putting Green",
            difficulty: 4,
            description: "Master distance control on putts",
            completedBy: 198,
            isCompleted: false,
          },
        ].map((drill, i) => (
          <DrillCard key={i} {...drill} />
        ))}
      </div>
    </div>
  )
}

function DrillCard({
  title,
  duration,
  location,
  difficulty,
  description,
  completedBy,
  isCompleted,
}: {
  title: string
  duration: string
  location: string
  difficulty: number
  description: string
  completedBy: number
  isCompleted: boolean
}) {
  return (
    <div
      className={`bg-[#1A1A1A] border rounded-xl p-5 hover:border-[#BF2424] transition-all ${isCompleted ? "border-l-4 border-l-[#22C55E] border-[#2A2A2A]" : "border-[#2A2A2A]"}`}
      style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-[#BF2424]/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <BookOpen className="w-6 h-6 text-[#BF2424]" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-bold text-sm truncate">{title}</h3>
          <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-[#A0A0A0]">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {duration}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {location}
            </span>
          </div>
          <div className="mt-1">
            {"⭐".repeat(difficulty)}
            {"☆".repeat(5 - difficulty)}
          </div>
          <p className="text-[#666666] text-xs mt-2 line-clamp-2">{description}</p>
          <p className="text-[#22C55E] text-xs mt-2">✓ {completedBy} completed</p>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <button className="flex-1 py-2 border border-[#BF2424] text-[#BF2424] rounded-lg text-xs font-bold uppercase hover:bg-[#BF2424] hover:text-white transition-all">
          View
        </button>
        <button
          className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
            isCompleted
              ? "bg-[#22C55E] text-white"
              : "border border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E] hover:text-white"
          }`}
        >
          {isCompleted ? "✓ Done" : "Complete"}
        </button>
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
        <h1 className="text-white text-3xl font-bold">DISCUSSIONS</h1>
        <button
          className="px-5 py-2.5 bg-[#BF2424] text-white rounded-lg text-sm font-bold uppercase hover:bg-[#D62828] transition-all"
          style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
        >
          + NEW POST
        </button>
      </div>

      {/* Discussion threads */}
      <div className="space-y-4">
        {[
          {
            title: "What's the hardest par 3 you've played?",
            community: "General Golf Talk",
            author: "Alex M.",
            avatar: "A",
            comments: 234,
            views: 1200,
            likes: 89,
            time: "2h ago",
            hot: true,
          },
          {
            title: "Share your latest swing video for feedback",
            community: "Swing Analysis",
            author: "Riley B.",
            avatar: "R",
            comments: 89,
            views: 445,
            likes: 45,
            time: "4h ago",
            hot: false,
          },
          {
            title: "Best drills to practice at home?",
            community: "Practice Tips",
            author: "Mike T.",
            avatar: "M",
            comments: 156,
            views: 892,
            likes: 67,
            time: "8h ago",
            hot: true,
          },
          {
            title: "How to stop 3-putting?",
            community: "Putting",
            author: "Sarah K.",
            avatar: "S",
            comments: 78,
            views: 356,
            likes: 34,
            time: "1d ago",
            hot: false,
          },
          {
            title: "Mental game tips for pressure situations",
            community: "Mental Game",
            author: "Jordan L.",
            avatar: "J",
            comments: 123,
            views: 678,
            likes: 56,
            time: "2d ago",
            hot: false,
          },
        ].map((d, i) => (
          <div
            key={i}
            className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-5 hover:border-[#BF2424] transition-all cursor-pointer"
          >
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center text-white font-bold flex-shrink-0">
                {d.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-bold text-lg truncate">{d.title}</h3>
                  {d.hot && (
                    <span className="px-2 py-0.5 bg-[rgba(245,158,11,0.2)] border border-[#F59E0B] text-[#F59E0B] text-xs font-bold uppercase rounded flex-shrink-0">
                      🔥 HOT
                    </span>
                  )}
                </div>
                <p className="text-[#A0A0A0] text-sm mt-1">
                  in {d.community} • by {d.author}
                </p>
                <div className="flex items-center gap-4 mt-3 text-[#666666] text-sm">
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" /> {d.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" /> {d.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" /> {d.likes}
                  </span>
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
