"use client"

import { useState, useEffect } from "react"
import {
  Play,
  Users,
  Search,
  Bell,
  BookOpen,
  Home,
  BarChart3,
  MessageSquare,
  Menu,
  X,
  Clock,
  Eye,
  Heart,
  MessageCircle,
  TrendingUp,
  ChevronRight,
  Sparkles,
  Award,
  Zap,
  Plus,
  FileText,
  Video,
  DollarSign,
  Settings,
  Upload,
  Edit2,
  Trash2,
  ExternalLink,
  Download,
  Star,
  Target,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

type SidebarView = "home" | "my-content" | "analytics" | "resources" | "community" | "settings"

// Chamfered card style
const cardStyle = {
  clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
}

const smallCardStyle = {
  clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
}

// Mock data
const mockContent = [
  { id: "1", title: "Short Game 101", type: "course", price: 29, sales: 234, views: 1245, status: "published", thumbnail: true },
  { id: "2", title: "Putting Mastery", type: "course", price: 49, sales: 89, views: 567, status: "published", thumbnail: true },
  { id: "3", title: "Mental Game", type: "course", price: 39, sales: 12, views: 234, status: "draft", thumbnail: true },
  { id: "4", title: "3 Tips for Better Drives", type: "video", price: 0, sales: 0, views: 892, status: "published", thumbnail: true },
]

const analyticsData = {
  totalViews: 12450,
  totalSales: 335,
  totalRevenue: 8240,
  avgRating: 4.8,
  subscribers: 1245,
  monthlyGrowth: 23,
}

const recentActivity = [
  { user: "John D.", action: "purchased", item: "Short Game 101", time: "2h ago" },
  { user: "Sarah M.", action: "completed", item: "Putting Mastery", time: "4h ago" },
  { user: "Mike R.", action: "reviewed", item: "Short Game 101", rating: 5, time: "6h ago" },
  { user: "Lisa W.", action: "purchased", item: "Putting Mastery", time: "1d ago" },
]

const resources = [
  { title: "Content Creator Guide", description: "Learn how to create engaging golf content", icon: BookOpen },
  { title: "Video Production Tips", description: "Professional filming techniques", icon: Video },
  { title: "Marketing Your Brand", description: "Grow your audience and reach", icon: TrendingUp },
  { title: "Pricing Strategies", description: "Optimize your pricing for maximum revenue", icon: DollarSign },
]

const communityDiscussions = [
  { title: "Best practices for teaching short game?", author: "Coach Mike", replies: 23, time: "2h ago", hot: true },
  { title: "New Back9 location opening in Denver!", author: "Sarah T.", replies: 45, time: "5h ago", hot: true },
  { title: "Equipment recommendations for lessons?", author: "Tom P.", replies: 12, time: "1d ago", hot: false },
  { title: "How to handle difficult students", author: "Alex R.", replies: 34, time: "2d ago", hot: false },
]

export function ProAcademyTab() {
  const [activeView, setActiveView] = useState<SidebarView>("home")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 300)
    return () => clearTimeout(timer)
  }, [])

  const navItems = [
    { id: "home" as SidebarView, label: "HOME", icon: Home },
    { id: "my-content" as SidebarView, label: "MY CONTENT", icon: Video },
    { id: "analytics" as SidebarView, label: "ANALYTICS", icon: BarChart3 },
    { id: "resources" as SidebarView, label: "RESOURCES", icon: BookOpen },
    { id: "community" as SidebarView, label: "COMMUNITY", icon: Users },
    { id: "settings" as SidebarView, label: "SETTINGS", icon: Settings },
  ]

  const quickStats = [
    { label: "Total Sales", value: "335" },
    { label: "Revenue", value: "$8,240" },
    { label: "Avg Rating", value: "4.8" },
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

          {/* Logo - Red accent for Pro/Creator */}
          <div className="p-6 flex justify-center border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#BF2424] flex items-center justify-center" style={smallCardStyle}>
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-serif text-xl tracking-[0.15em] text-white">ACADEMY</span>
                <span className="block text-xs text-[#BF2424] tracking-wider">CREATOR STUDIO</span>
              </div>
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
                      ? "bg-[#BF2424] text-white"
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

          {/* Quick Stats */}
          <div className="px-4 py-2">
            <span className="font-serif text-xs tracking-[0.15em] text-white/40">QUICK STATS</span>
            <div className="mt-3 space-y-2">
              {quickStats.map((stat, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-white/50">{stat.label}</span>
                  <span className="text-white font-serif">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA - pushed to bottom */}
          <div className="mt-auto p-4 border-t border-white/10">
            <button
              className="w-full py-3 bg-[#BF2424] text-white font-serif text-sm tracking-[0.1em] hover:bg-[#a01f1f] transition-all flex items-center justify-center gap-2"
              style={smallCardStyle}
            >
              <Plus className="w-4 h-4" />
              CREATE NEW
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 min-h-screen p-8 lg:pl-8">
          {activeView === "home" && <HomeView />}
          {activeView === "my-content" && <MyContentView />}
          {activeView === "analytics" && <AnalyticsView />}
          {activeView === "resources" && <ResourcesView />}
          {activeView === "community" && <CommunityView />}
          {activeView === "settings" && <SettingsView />}
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
          <div className="w-12 h-12 bg-[#BF2424] flex items-center justify-center" style={smallCardStyle}>
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>
        <h1 className="font-serif text-4xl tracking-[0.15em] text-white">CREATOR STUDIO</h1>
        <p className="text-white/60 text-lg mt-2 tracking-wide">Build. Share. Earn.</p>

        {/* Quick Actions */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button
            className="px-6 py-3 bg-[#BF2424] text-white font-serif text-sm tracking-[0.1em] hover:bg-[#a01f1f] transition-all flex items-center gap-2"
            style={smallCardStyle}
          >
            <Upload className="w-4 h-4" />
            UPLOAD CONTENT
          </button>
          <button
            className="px-6 py-3 border border-white text-white font-serif text-sm tracking-[0.1em] hover:bg-white hover:text-black transition-all flex items-center gap-2"
            style={smallCardStyle}
          >
            <Video className="w-4 h-4" />
            CREATE COURSE
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: Eye, value: "12,450", label: "TOTAL VIEWS", trend: "+12% this month" },
          { icon: DollarSign, value: "$8,240", label: "REVENUE", trend: "+23% this month" },
          { icon: Users, value: "335", label: "STUDENTS", trend: "+18 this week" },
          { icon: Star, value: "4.8", label: "AVG RATING", trend: "89 reviews" },
        ].map((stat, i) => {
          const Icon = stat.icon
          return (
            <div
              key={i}
              className="bg-black/40 backdrop-blur-sm border border-white/10 p-6 text-center hover:border-[#BF2424] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              style={cardStyle}
            >
              <Icon className="w-8 h-8 mx-auto text-[#BF2424]" />
              <p className="font-serif text-3xl text-white mt-3">{stat.value}</p>
              <p className="font-serif text-xs tracking-[0.15em] text-white/50 mt-1">{stat.label}</p>
              <p className="text-sm mt-2 text-[#BF2424]">{stat.trend}</p>
            </div>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-serif text-xl tracking-[0.1em] text-white flex items-center gap-2">
            <Bell className="w-5 h-5 text-[#BF2424]" />
            RECENT ACTIVITY
          </h2>
          <button className="font-serif text-sm tracking-wider text-white hover:text-[#BF2424] flex items-center gap-1">
            VIEW ALL <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden" style={cardStyle}>
          {recentActivity.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#BF2424]/20 flex items-center justify-center text-[#BF2424] text-sm font-serif">
                {item.user.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="text-white text-sm">
                  <span className="font-medium">{item.user}</span>{" "}
                  <span className="text-white/60">{item.action}</span>{" "}
                  <span className="text-[#BF2424]">{item.item}</span>
                  {item.rating && (
                    <span className="text-white/40 ml-1">
                      ({item.rating} <Star className="w-3 h-3 inline text-[#D4AF37]" />)
                    </span>
                  )}
                </p>
              </div>
              <span className="text-white/30 text-xs">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Performing Content */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-serif text-xl tracking-[0.1em] text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#BF2424]" />
            TOP PERFORMING
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockContent.filter(c => c.status === "published").slice(0, 3).map((content) => (
            <ContentCard key={content.id} content={content} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ContentCard({ content }: { content: typeof mockContent[0] }) {
  return (
    <div
      className="bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-[#BF2424] hover:-translate-y-0.5 transition-all cursor-pointer"
      style={cardStyle}
    >
      <div className="h-[120px] bg-white/5 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-[#BF2424] flex items-center justify-center" style={smallCardStyle}>
            <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
          </div>
        </div>
        {content.type === "course" && (
          <span className="absolute top-2 left-2 px-2 py-1 bg-[#BF2424] text-white text-xs font-serif tracking-wider" style={smallCardStyle}>
            COURSE
          </span>
        )}
        {content.price > 0 && (
          <span className="absolute top-2 right-2 px-2 py-1 bg-black/80 text-white text-xs font-serif">
            ${content.price}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-serif text-base text-white">{content.title}</h3>
        <div className="flex items-center gap-4 mt-2 text-xs text-white/50">
          <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {content.views}</span>
          <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" /> {content.sales} sales</span>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// MY CONTENT VIEW
// ═══════════════════════════════════════════════════════════

function MyContentView() {
  const [filter, setFilter] = useState<"all" | "published" | "draft">("all")

  const filteredContent = mockContent.filter(c => {
    if (filter === "all") return true
    return c.status === filter
  })

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="font-serif text-2xl tracking-[0.1em] text-white">MY CONTENT ({mockContent.length})</h1>
        <button
          className="px-5 py-2.5 bg-[#BF2424] text-white font-serif text-sm tracking-[0.1em] hover:bg-[#a01f1f] transition-all flex items-center gap-2"
          style={smallCardStyle}
        >
          <Plus className="w-4 h-4" />
          CREATE NEW
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        {(["all", "published", "draft"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 font-serif text-sm tracking-wider transition-all ${
              filter === f
                ? "bg-[#BF2424] text-white"
                : "bg-black/40 border border-white/20 text-white/60 hover:border-white"
            }`}
            style={smallCardStyle}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((content) => (
          <div
            key={content.id}
            className="bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-[#BF2424] transition-all"
            style={cardStyle}
          >
            <div className="h-[140px] bg-white/5 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-[#BF2424]/80 flex items-center justify-center" style={smallCardStyle}>
                  <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                </div>
              </div>
              <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-serif tracking-wider ${
                content.status === "published" ? "bg-[#226D50] text-white" : "bg-white/20 text-white"
              }`} style={smallCardStyle}>
                {content.status.toUpperCase()}
              </span>
              {content.price > 0 && (
                <span className="absolute top-2 right-2 px-2 py-1 bg-black/80 text-white text-sm font-serif">
                  ${content.price}
                </span>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-serif text-lg text-white">{content.title}</h3>
              <p className="text-white/50 text-sm mt-1 capitalize">{content.type}</p>

              <div className="flex items-center gap-4 mt-3 text-sm text-white/50">
                <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> {content.views}</span>
                <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> {content.sales}</span>
              </div>

              <div className="flex gap-2 mt-4">
                <button
                  className="flex-1 py-2 border border-white text-white font-serif text-xs tracking-[0.1em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-1"
                  style={smallCardStyle}
                >
                  <Edit2 className="w-3 h-3" /> EDIT
                </button>
                <button
                  className="flex-1 py-2 border border-white/30 text-white/50 font-serif text-xs tracking-[0.1em] hover:border-[#BF2424] hover:text-[#BF2424] transition-all flex items-center justify-center gap-1"
                  style={smallCardStyle}
                >
                  <BarChart3 className="w-3 h-3" /> STATS
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Card */}
        <div
          className="border-2 border-dashed border-white/20 p-6 flex flex-col items-center justify-center cursor-pointer hover:border-[#BF2424] hover:bg-[#BF2424]/5 transition-colors min-h-[280px]"
          style={cardStyle}
        >
          <Plus className="h-16 w-16 text-white/20 mb-3" />
          <span className="text-white/40 font-serif tracking-wider">ADD NEW CONTENT</span>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// ANALYTICS VIEW
// ═══════════════════════════════════════════════════════════

function AnalyticsView() {
  const chartData = [
    { month: "Sep", value: 420 },
    { month: "Oct", value: 580 },
    { month: "Nov", value: 720 },
    { month: "Dec", value: 890 },
    { month: "Jan", value: 1080 },
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="font-serif text-2xl tracking-[0.1em] text-white">ANALYTICS</h1>
        <button
          className="px-5 py-2.5 border border-white text-white font-serif text-sm tracking-[0.1em] hover:bg-white hover:text-black transition-all flex items-center gap-2"
          style={smallCardStyle}
        >
          <Download className="w-4 h-4" />
          EXPORT REPORT
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Views", value: analyticsData.totalViews.toLocaleString(), icon: Eye },
          { label: "Total Sales", value: analyticsData.totalSales, icon: DollarSign },
          { label: "Revenue", value: `$${analyticsData.totalRevenue.toLocaleString()}`, icon: TrendingUp },
          { label: "Subscribers", value: analyticsData.subscribers.toLocaleString(), icon: Users },
        ].map((stat, i) => {
          const Icon = stat.icon
          return (
            <div
              key={i}
              className="bg-black/40 backdrop-blur-sm border border-white/10 p-5"
              style={cardStyle}
            >
              <Icon className="w-6 h-6 text-[#BF2424] mb-3" />
              <p className="font-serif text-2xl text-white">{stat.value}</p>
              <p className="text-white/50 text-sm mt-1">{stat.label}</p>
            </div>
          )
        })}
      </div>

      {/* Revenue Chart */}
      <div
        className="bg-black/40 backdrop-blur-sm border border-white/10 p-6"
        style={cardStyle}
      >
        <h3 className="font-serif text-lg tracking-wider text-white mb-6">REVENUE TREND</h3>
        <div className="h-[200px] flex items-end justify-around gap-4 border-b border-white/10 pb-4">
          {chartData.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2 flex-1">
              <div
                className="w-full max-w-[60px] bg-gradient-to-t from-[#BF2424] to-[#FF4444] transition-all duration-300"
                style={{
                  height: `${(item.value / 1200) * 160}px`,
                  clipPath: "polygon(4px 0, 100% 0, 100% 100%, 0 100%, 0 4px)",
                }}
              />
              <span className="text-xs text-white/50">{item.month}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <span className="text-white/40 text-sm">+{analyticsData.monthlyGrowth}% vs last month</span>
          <span className="text-[#BF2424] text-sm font-serif">$1,080 this month</span>
        </div>
      </div>

      {/* Content Performance */}
      <div
        className="bg-black/40 backdrop-blur-sm border border-white/10 p-6"
        style={cardStyle}
      >
        <h3 className="font-serif text-lg tracking-wider text-white mb-6">CONTENT PERFORMANCE</h3>
        <div className="space-y-4">
          {mockContent.filter(c => c.status === "published").map((content) => (
            <div key={content.id} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10" style={smallCardStyle}>
              <div className="w-12 h-12 bg-[#BF2424]/20 flex items-center justify-center flex-shrink-0" style={smallCardStyle}>
                <Play className="w-5 h-5 text-[#BF2424]" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-serif truncate">{content.title}</h4>
                <p className="text-white/50 text-sm">{content.type}</p>
              </div>
              <div className="text-right">
                <p className="text-white font-serif">{content.views.toLocaleString()} views</p>
                <p className="text-[#BF2424] text-sm">${(content.sales * content.price).toLocaleString()} earned</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// RESOURCES VIEW
// ═══════════════════════════════════════════════════════════

function ResourcesView() {
  return (
    <div className="space-y-8">
      <h1 className="font-serif text-2xl tracking-[0.1em] text-white">CREATOR RESOURCES</h1>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, i) => {
          const Icon = resource.icon
          return (
            <div
              key={i}
              className="bg-black/40 backdrop-blur-sm border border-white/10 p-6 hover:border-[#BF2424] hover:-translate-y-0.5 transition-all cursor-pointer"
              style={cardStyle}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#BF2424]/20 flex items-center justify-center flex-shrink-0" style={smallCardStyle}>
                  <Icon className="w-6 h-6 text-[#BF2424]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-white">{resource.title}</h3>
                  <p className="text-white/50 text-sm mt-1">{resource.description}</p>
                </div>
              </div>
              <button className="w-full mt-4 py-3 border border-white text-white font-serif text-sm tracking-[0.1em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2" style={smallCardStyle}>
                READ GUIDE <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          )
        })}
      </div>

      {/* Video Tutorials */}
      <div>
        <h2 className="font-serif text-xl tracking-[0.1em] text-white mb-4 flex items-center gap-2">
          <Video className="w-5 h-5 text-[#BF2424]" />
          VIDEO TUTORIALS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Setting Up Your First Course", duration: "12:45" },
            { title: "Recording Quality Video", duration: "18:30" },
            { title: "Pricing Your Content", duration: "8:15" },
            { title: "Growing Your Audience", duration: "22:00" },
          ].map((video, i) => (
            <div
              key={i}
              className="bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-[#BF2424] transition-all cursor-pointer"
              style={cardStyle}
            >
              <div className="h-[100px] bg-white/5 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-[#BF2424] flex items-center justify-center" style={smallCardStyle}>
                    <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {video.duration}
                </span>
              </div>
              <div className="p-3">
                <h4 className="font-serif text-sm text-white truncate">{video.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div
        className="bg-black/40 backdrop-blur-sm border border-white/10 p-6"
        style={cardStyle}
      >
        <h3 className="font-serif text-lg tracking-wider text-white mb-4">FREQUENTLY ASKED QUESTIONS</h3>
        <div className="space-y-3">
          {[
            "How do I get paid?",
            "What's the revenue split?",
            "Can I offer free content?",
            "How do I promote my courses?",
          ].map((q, i) => (
            <div key={i} className="flex items-center gap-3 py-3 border-b border-white/10 last:border-0 cursor-pointer hover:text-[#BF2424] transition-colors group">
              <FileText className="w-4 h-4 text-white/40 group-hover:text-[#BF2424]" />
              <span className="text-white group-hover:text-[#BF2424]">{q}</span>
              <ChevronRight className="w-4 h-4 text-white/30 ml-auto group-hover:text-[#BF2424]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// COMMUNITY VIEW
// ═══════════════════════════════════════════════════════════

function CommunityView() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="font-serif text-2xl tracking-[0.1em] text-white">PRO COMMUNITY</h1>
        <button
          className="px-5 py-2.5 bg-[#BF2424] text-white font-serif text-sm tracking-[0.1em] hover:bg-[#a01f1f] transition-all flex items-center gap-2"
          style={smallCardStyle}
        >
          <Plus className="w-4 h-4" />
          NEW POST
        </button>
      </div>

      {/* Discussions */}
      <div className="space-y-4">
        {communityDiscussions.map((disc, i) => (
          <div
            key={i}
            className="bg-black/40 backdrop-blur-sm border border-white/10 p-5 hover:border-[#BF2424] transition-all cursor-pointer"
            style={cardStyle}
          >
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#BF2424]/20 flex items-center justify-center text-[#BF2424] font-serif flex-shrink-0">
                {disc.author.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-lg text-white truncate">{disc.title}</h3>
                  {disc.hot && (
                    <span className="px-2 py-0.5 bg-[#BF2424]/20 border border-[#BF2424] text-[#BF2424] text-xs font-serif tracking-wider flex items-center gap-1 flex-shrink-0" style={smallCardStyle}>
                      <Zap className="w-3 h-3" /> HOT
                    </span>
                  )}
                </div>
                <p className="text-white/50 text-sm mt-1">by {disc.author}</p>
                <div className="flex items-center gap-4 mt-3 text-white/30 text-sm">
                  <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> {disc.replies} replies</span>
                  <span className="ml-auto">{disc.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pro Network */}
      <div
        className="bg-black/40 backdrop-blur-sm border border-white/10 p-6"
        style={cardStyle}
      >
        <h3 className="font-serif text-lg tracking-wider text-white mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-[#BF2424]" />
          CONNECT WITH PROS
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Riley B.", title: "PGA Pro", location: "Denver" },
            { name: "Mike T.", title: "Teaching Pro", location: "Austin" },
            { name: "Sarah K.", title: "LPGA Pro", location: "Phoenix" },
            { name: "Alex J.", title: "Club Pro", location: "Seattle" },
          ].map((pro, i) => (
            <div key={i} className="text-center p-4 bg-white/5 border border-white/10 hover:border-[#BF2424] transition-all cursor-pointer" style={smallCardStyle}>
              <div className="w-12 h-12 rounded-full bg-[#BF2424]/20 mx-auto flex items-center justify-center text-[#BF2424] font-serif text-lg">
                {pro.name.charAt(0)}
              </div>
              <h4 className="text-white font-serif mt-2">{pro.name}</h4>
              <p className="text-white/50 text-xs">{pro.title}</p>
              <p className="text-white/30 text-xs">{pro.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// SETTINGS VIEW
// ═══════════════════════════════════════════════════════════

function SettingsView() {
  return (
    <div className="space-y-8">
      <h1 className="font-serif text-2xl tracking-[0.1em] text-white">CREATOR SETTINGS</h1>

      {/* Profile Settings */}
      <div
        className="bg-black/40 backdrop-blur-sm border border-white/10 p-6"
        style={cardStyle}
      >
        <h3 className="font-serif text-lg tracking-wider text-white mb-6 flex items-center gap-2">
          <Users className="w-5 h-5 text-[#BF2424]" />
          CREATOR PROFILE
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-white/50 text-sm mb-2">Display Name</label>
            <input
              type="text"
              defaultValue="Blake Anderson"
              className="w-full bg-black/40 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[#BF2424] transition-all"
              style={smallCardStyle}
            />
          </div>
          <div>
            <label className="block text-white/50 text-sm mb-2">Bio</label>
            <textarea
              defaultValue="PGA Professional with 10+ years of teaching experience"
              rows={3}
              className="w-full bg-black/40 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[#BF2424] transition-all resize-none"
              style={smallCardStyle}
            />
          </div>
          <div>
            <label className="block text-white/50 text-sm mb-2">Specialties</label>
            <div className="flex flex-wrap gap-2">
              {["Short Game", "Putting", "Course Strategy", "Mental Game"].map((s, i) => (
                <span key={i} className="px-3 py-1 bg-[#BF2424]/20 border border-[#BF2424] text-[#BF2424] text-sm" style={smallCardStyle}>
                  {s}
                </span>
              ))}
              <button className="px-3 py-1 border border-white/30 text-white/50 text-sm hover:border-white hover:text-white transition-all" style={smallCardStyle}>
                + Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Payout Settings */}
      <div
        className="bg-black/40 backdrop-blur-sm border border-white/10 p-6"
        style={cardStyle}
      >
        <h3 className="font-serif text-lg tracking-wider text-white mb-6 flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-[#BF2424]" />
          PAYOUT SETTINGS
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10" style={smallCardStyle}>
            <div>
              <p className="text-white font-serif">Bank Account</p>
              <p className="text-white/50 text-sm">Chase ****4521</p>
            </div>
            <button className="px-4 py-2 border border-white text-white font-serif text-xs tracking-wider hover:bg-white hover:text-black transition-all" style={smallCardStyle}>
              EDIT
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10" style={smallCardStyle}>
            <div>
              <p className="text-white font-serif">Payout Schedule</p>
              <p className="text-white/50 text-sm">Monthly (15th of each month)</p>
            </div>
            <button className="px-4 py-2 border border-white text-white font-serif text-xs tracking-wider hover:bg-white hover:text-black transition-all" style={smallCardStyle}>
              CHANGE
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/50 text-sm">Revenue Share</p>
              <p className="text-white font-serif text-2xl">85%</p>
            </div>
            <div className="text-right">
              <p className="text-white/50 text-sm">Platform Fee</p>
              <p className="text-white font-serif text-2xl">15%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div
        className="bg-black/40 backdrop-blur-sm border border-white/10 p-6"
        style={cardStyle}
      >
        <h3 className="font-serif text-lg tracking-wider text-white mb-6 flex items-center gap-2">
          <Bell className="w-5 h-5 text-[#BF2424]" />
          NOTIFICATIONS
        </h3>
        <div className="space-y-4">
          {[
            { label: "New Sale", description: "Get notified when someone purchases your content", enabled: true },
            { label: "New Review", description: "Get notified when someone leaves a review", enabled: true },
            { label: "Community Mentions", description: "Get notified when mentioned in discussions", enabled: false },
            { label: "Weekly Analytics", description: "Receive weekly performance summary", enabled: true },
          ].map((setting, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/10" style={smallCardStyle}>
              <div>
                <p className="text-white font-serif">{setting.label}</p>
                <p className="text-white/50 text-sm">{setting.description}</p>
              </div>
              <button
                className={`w-12 h-6 rounded-full transition-all ${
                  setting.enabled ? "bg-[#BF2424]" : "bg-white/20"
                }`}
              >
                <div className={`w-5 h-5 rounded-full bg-white transition-all ${
                  setting.enabled ? "ml-6" : "ml-0.5"
                }`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <button
        className="w-full py-4 bg-[#BF2424] text-white font-serif text-sm tracking-[0.1em] hover:bg-[#a01f1f] transition-all"
        style={cardStyle}
      >
        SAVE CHANGES
      </button>
    </div>
  )
}
