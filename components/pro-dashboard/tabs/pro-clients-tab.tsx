"use client"

import { useState } from "react"
import { Search, ChevronDown, MessageSquare, Eye, X, Send } from "lucide-react"

interface Client {
  id: string
  name: string
  initials: string
  level: string
  focus: string
  lessons: number
  lastLesson: string
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
    notes: "3-putt frequency has decreased significantly.",
    history: [{ date: "Nov 22", type: "On-Course", notes: "Green reading practice" }],
  },
]

export function ProClientsTab() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [clientNotes, setClientNotes] = useState("")

  const filteredClients = mockClients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.focus.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const openClientDetail = (client: Client) => {
    setSelectedClient(client)
    setClientNotes(client.notes || "")
  }

  return (
    <div>
      <h2 className="font-serif text-2xl tracking-wider text-white mb-6 drop-shadow-lg">CLIENTS</h2>

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

        {/* Filter Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setFilterOpen(!filterOpen)
              setSortOpen(false)
            }}
            className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-3 text-sm shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
            style={{
              clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
            }}
          >
            Filter
            <ChevronDown className="h-4 w-4" />
          </button>
          {filterOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-lg z-10 min-w-[150px]">
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">All Levels</button>
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Beginner</button>
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Intermediate</button>
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Advanced</button>
            </div>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
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
            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-lg z-10 min-w-[150px]">
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Most Lessons</button>
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Recent Activity</button>
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Name A-Z</button>
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
                <h4 className="font-serif text-lg text-black">{client.name}</h4>
                <p className="text-sm text-gray-500">
                  {client.level} • {client.focus}
                </p>
              </div>
            </div>

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
                  <h3 className="font-serif text-xl text-black">{selectedClient.name}</h3>
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
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{lesson.type}</span>
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
    </div>
  )
}
