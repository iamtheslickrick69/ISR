"use client"

import { useState } from "react"
import {
  Search,
  ChevronDown,
  MessageSquare,
  Eye,
  X,
  Send,
  Plus,
  Calendar,
  Tag,
  Clock,
  User,
  Filter,
} from "lucide-react"

interface Client {
  id: string
  name: string
  initials: string
  level: string
  focus: string
  lessons: number
  lastLesson: string
  nextLesson?: string
  tags?: string[]
  notes?: string
  history?: { date: string; type: string; notes: string }[]
}

const mockClients: Client[] = [
  {
    id: "1",
    name: "John Davidson",
    initials: "JD",
    level: "Intermediate",
    focus: "Short Game Focus",
    lessons: 12,
    lastLesson: "Dec 1",
    nextLesson: "Jan 5, 2:00 PM",
    tags: ["VIP", "Package"],
    notes: "Working on chipping consistency. Good progress on distance control.",
    history: [
      { date: "Dec 1", type: "Simulator", notes: "Focused on wedge distances" },
      { date: "Nov 25", type: "On-Course", notes: "Practiced bunker shots" },
      { date: "Nov 18", type: "Simulator", notes: "Full swing analysis" },
    ],
  },
  {
    id: "2",
    name: "Sarah Mitchell",
    initials: "SM",
    level: "Beginner",
    focus: "Full Swing",
    lessons: 8,
    lastLesson: "Nov 28",
    nextLesson: "Jan 6, 10:00 AM",
    tags: ["New"],
    notes: "New to golf. Building fundamentals. Great attitude.",
    history: [
      { date: "Nov 28", type: "Simulator", notes: "Grip and stance basics" },
      { date: "Nov 20", type: "Virtual", notes: "Video review session" },
    ],
  },
  {
    id: "3",
    name: "Mike Roberts",
    initials: "MR",
    level: "Advanced",
    focus: "Competition Prep",
    lessons: 23,
    lastLesson: "Nov 25",
    tags: ["VIP", "Tournament"],
    notes: "Preparing for club championship. Focus on pressure situations.",
    history: [
      { date: "Nov 25", type: "On-Course", notes: "Course management strategy" },
      { date: "Nov 20", type: "Simulator", notes: "Driver consistency" },
    ],
  },
  {
    id: "4",
    name: "Tom Kennedy",
    initials: "TK",
    level: "Intermediate",
    focus: "Putting",
    lessons: 15,
    lastLesson: "Nov 22",
    nextLesson: "Jan 8, 3:00 PM",
    tags: ["Package"],
    notes: "3-putt frequency has decreased significantly.",
    history: [{ date: "Nov 22", type: "On-Course", notes: "Green reading practice" }],
  },
]

const allTags = ["VIP", "New", "Package", "Tournament", "Inactive", "Junior"]

const tagColors: { [key: string]: string } = {
  VIP: "bg-[#D4AF37] text-black",
  New: "bg-[#226D50] text-white",
  Package: "bg-[#a29e7b] text-white",
  Tournament: "bg-[#BF2424] text-white",
  Inactive: "bg-gray-400 text-white",
  Junior: "bg-blue-500 text-white",
}

export function ProClientsTab() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [clientNotes, setClientNotes] = useState("")
  const [showAddClientModal, setShowAddClientModal] = useState(false)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const filteredClients = mockClients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.focus.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter = !activeFilter || client.tags?.includes(activeFilter)

    return matchesSearch && matchesFilter
  })

  const openClientDetail = (client: Client) => {
    setSelectedClient(client)
    setClientNotes(client.notes || "")
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl tracking-wider text-white drop-shadow-lg">CLIENTS</h2>
        <button
          onClick={() => setShowAddClientModal(true)}
          className="flex items-center gap-2 bg-[#226D50] text-white font-serif text-sm tracking-wider px-5 py-3 hover:bg-[#1a5a42] transition-colors shadow-lg"
          style={{
            clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
          }}
        >
          <Plus className="h-4 w-4" />
          ADD CLIENT
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div
          className="bg-white p-4 shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
          style={{
            clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
          }}
        >
          <p className="font-serif text-xs tracking-wider text-gray-400">TOTAL CLIENTS</p>
          <p className="font-serif text-3xl text-black">{mockClients.length}</p>
        </div>
        <div
          className="bg-white p-4 shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
          style={{
            clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
          }}
        >
          <p className="font-serif text-xs tracking-wider text-gray-400">ACTIVE THIS MONTH</p>
          <p className="font-serif text-3xl text-black">12</p>
        </div>
        <div
          className="bg-white p-4 shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
          style={{
            clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
          }}
        >
          <p className="font-serif text-xs tracking-wider text-gray-400">VIP CLIENTS</p>
          <p className="font-serif text-3xl text-[#D4AF37]">2</p>
        </div>
        <div
          className="bg-white p-4 shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
          style={{
            clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
          }}
        >
          <p className="font-serif text-xs tracking-wider text-gray-400">UPCOMING LESSONS</p>
          <p className="font-serif text-3xl text-[#226D50]">3</p>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* Search Input */}
        <div className="relative flex-1 max-w-[300px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search Clients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-200 pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#a29e7b] shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
            style={{
              clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
            }}
          />
        </div>

        {/* Tag Filter Pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-3 py-2 text-xs font-medium transition-all ${
              !activeFilter ? "bg-[#a29e7b] text-white" : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
            style={{
              clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
            }}
          >
            All
          </button>
          {allTags.slice(0, 4).map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(activeFilter === tag ? null : tag)}
              className={`px-3 py-2 text-xs font-medium transition-all ${
                activeFilter === tag ? tagColors[tag] : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
              style={{
                clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="relative ml-auto">
          <button
            onClick={() => {
              setSortOpen(!sortOpen)
              setFilterOpen(false)
            }}
            className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-3 text-sm shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
            style={{
              clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
            }}
          >
            Sort
            <ChevronDown className="h-4 w-4" />
          </button>
          {sortOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 shadow-lg z-10 min-w-[150px]">
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Most Lessons</button>
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Recent Activity</button>
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Name A-Z</button>
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Next Lesson</button>
            </div>
          )}
        </div>
      </div>

      {/* Client List Card */}
      <div
        className="bg-white shadow-[0_4px_24px_rgba(0,0,0,0.12)] overflow-hidden"
        style={{
          clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
        }}
      >
        {filteredClients.map((client, index) => (
          <div
            key={client.id}
            className={`flex flex-col sm:flex-row sm:items-center justify-between px-6 py-5 hover:bg-[#FAFAFA] transition-colors ${
              index !== filteredClients.length - 1 ? "border-b border-[#F0F0F0]" : ""
            }`}
          >
            {/* Left Side - Avatar + Info */}
            <div className="flex items-center gap-4 mb-4 sm:mb-0">
              <div className="w-12 h-12 bg-[#a29e7b] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-serif text-lg text-white">{client.initials}</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-serif text-lg text-black">{client.name}</h4>
                  {/* Tags */}
                  {client.tags?.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] px-2 py-0.5 font-medium ${tagColors[tag] || "bg-gray-200 text-gray-600"}`}
                      style={{
                        clipPath: "polygon(3px 0, 100% 0, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0 100%, 0 3px)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  {client.level} • {client.focus}
                </p>
              </div>
            </div>

            {/* Middle - Next Lesson */}
            {client.nextLesson && (
              <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-[#226D50]/10 mr-4">
                <Calendar className="h-4 w-4 text-[#226D50]" />
                <span className="text-sm text-[#226D50] font-medium">Next: {client.nextLesson}</span>
              </div>
            )}

            {/* Right Side - Stats + Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="flex gap-6 text-sm">
                <span className="text-gray-500">{client.lessons} lessons</span>
                <span className="text-gray-400">Last: {client.lastLesson}</span>
              </div>
              <div className="flex gap-2">
                <button
                  className="flex items-center gap-1 border border-[#a29e7b] text-[#a29e7b] font-serif text-xs tracking-wider px-4 py-2 hover:bg-[#a29e7b] hover:text-white transition-colors"
                  style={{
                    clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                  }}
                >
                  <MessageSquare className="h-3 w-3" />
                  MESSAGE
                </button>
                <button
                  onClick={() => openClientDetail(client)}
                  className="flex items-center gap-1 bg-[#226D50] text-white font-serif text-xs tracking-wider px-4 py-2 hover:bg-[#1a5a42] transition-colors"
                  style={{
                    clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                  }}
                >
                  <Eye className="h-3 w-3" />
                  VIEW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Client Detail Modal */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div
            className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            style={{
              clipPath: "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
            }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#a29e7b] rounded-full flex items-center justify-center">
                  <span className="font-serif text-xl text-white">{selectedClient.initials}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-xl text-black">{selectedClient.name}</h3>
                    {selectedClient.tags?.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] px-2 py-0.5 font-medium ${tagColors[tag] || "bg-gray-200 text-gray-600"}`}
                        style={{
                          clipPath: "polygon(3px 0, 100% 0, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0 100%, 0 3px)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">
                    {selectedClient.level} • {selectedClient.focus}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedClient(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Next Lesson Alert */}
              {selectedClient.nextLesson && (
                <div
                  className="bg-[#226D50]/10 border border-[#226D50]/20 p-4 flex items-center gap-3"
                  style={{
                    clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  <Calendar className="h-5 w-5 text-[#226D50]" />
                  <div>
                    <p className="text-sm font-medium text-[#226D50]">Upcoming Lesson</p>
                    <p className="text-sm text-gray-600">{selectedClient.nextLesson}</p>
                  </div>
                </div>
              )}

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="bg-[#FAFAFA] p-4"
                  style={{
                    clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  <p className="font-serif text-xs tracking-wider text-gray-400">TOTAL LESSONS</p>
                  <p className="font-serif text-3xl text-black">{selectedClient.lessons}</p>
                </div>
                <div
                  className="bg-[#FAFAFA] p-4"
                  style={{
                    clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  <p className="font-serif text-xs tracking-wider text-gray-400">LAST LESSON</p>
                  <p className="font-serif text-3xl text-black">{selectedClient.lastLesson}</p>
                </div>
              </div>

              {/* Tags Section */}
              <div>
                <h4 className="font-serif text-sm tracking-wider text-gray-400 mb-3">TAGS</h4>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => {
                    const isActive = selectedClient.tags?.includes(tag)
                    return (
                      <button
                        key={tag}
                        className={`px-3 py-1.5 text-xs font-medium transition-all ${
                          isActive ? tagColors[tag] : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        }`}
                        style={{
                          clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                        }}
                      >
                        {tag}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Private Notes */}
              <div>
                <h4 className="font-serif text-sm tracking-wider text-gray-400 mb-3">PRIVATE NOTES</h4>
                <textarea
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  className="w-full bg-[#FAFAFA] border border-gray-200 p-4 text-sm min-h-[100px] focus:outline-none focus:border-[#a29e7b]"
                  style={{
                    clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                  placeholder="Add notes about this client..."
                />
              </div>

              {/* Lesson History */}
              <div>
                <h4 className="font-serif text-sm tracking-wider text-gray-400 mb-3">LESSON HISTORY</h4>
                <div className="space-y-0">
                  {selectedClient.history?.map((lesson, idx) => (
                    <div key={idx} className="py-3 border-b border-gray-100 last:border-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-black">{lesson.date}</span>
                        <span
                          className="text-xs bg-gray-100 px-2 py-1"
                          style={{
                            clipPath: "polygon(3px 0, 100% 0, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0 100%, 0 3px)",
                          }}
                        >
                          {lesson.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{lesson.notes}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Message */}
              <div>
                <h4 className="font-serif text-sm tracking-wider text-gray-400 mb-3">QUICK MESSAGE</h4>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Send a quick message..."
                    className="flex-1 bg-[#FAFAFA] border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a29e7b]"
                    style={{
                      clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                    }}
                  />
                  <button
                    className="bg-[#226D50] text-white p-3 hover:bg-[#1a5a42] transition-colors"
                    style={{
                      clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                    }}
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Client Modal */}
      {showAddClientModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div
            className="bg-white w-full max-w-md"
            style={{
              clipPath: "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
            }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="font-serif text-xl tracking-wider">ADD NEW CLIENT</h3>
              <button
                onClick={() => setShowAddClientModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">Client Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-[#a29e7b] focus:outline-none"
                  style={{
                    clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                  }}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-[#a29e7b] focus:outline-none"
                  style={{
                    clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                  }}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">Skill Level</label>
                <select
                  className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-[#a29e7b] focus:outline-none"
                  style={{
                    clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                  }}
                >
                  <option value="">Select level...</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">Focus Area</label>
                <select
                  className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-[#a29e7b] focus:outline-none"
                  style={{
                    clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                  }}
                >
                  <option value="">Select focus...</option>
                  <option value="full-swing">Full Swing</option>
                  <option value="short-game">Short Game</option>
                  <option value="putting">Putting</option>
                  <option value="course-management">Course Management</option>
                  <option value="mental-game">Mental Game</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">Tags</label>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-500 hover:bg-gray-200 transition-all"
                      style={{
                        clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                      }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">Notes</label>
                <textarea
                  rows={3}
                  placeholder="Initial notes about this client..."
                  className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-[#a29e7b] focus:outline-none resize-none"
                  style={{
                    clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                  }}
                />
              </div>

              <button
                onClick={() => setShowAddClientModal(false)}
                className="w-full bg-[#226D50] text-white font-serif text-sm tracking-[0.1em] py-4 hover:bg-[#1a5a42] transition-all mt-4"
                style={{
                  clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                }}
              >
                ADD CLIENT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
