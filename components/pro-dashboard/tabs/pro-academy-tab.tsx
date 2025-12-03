"use client"

import { Plus, FileText, MessageCircle, ChevronRight } from "lucide-react"

const mockContent = [
  { id: "1", title: "Short Game 101", price: 29, sales: 234, thumbnail: true },
  { id: "2", title: "Putting Mastery", price: 49, sales: 89, thumbnail: true },
  { id: "3", title: "Mental Game", price: 39, sales: 12, thumbnail: true },
]

const resources = ["Teaching Best Practices", "Platform Guide", "Marketing Your Brand", "Video Production 101"]

const discussions = [
  { id: "1", message: "Anyone have tips for teaching juniors?", author: "Coach Mike", time: "2 hours ago" },
  { id: "2", message: "New Back9 location opening in Denver!", author: "Sarah T.", time: "5 hours ago" },
  { id: "3", message: "Best drills for fixing a slice?", author: "Tom P.", time: "1 day ago" },
]

export function ProAcademyTab() {
  return (
    <div>
      {/* Academy Header */}
      <div className="text-center mb-10">
        <div
          className="inline-block p-3 mb-4"
          style={{
            clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
          }}
        >
          <img
            src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaablack1.png"
            alt="Academy"
            className="h-[60px]"
          />
        </div>
        <p className="text-gray-500 text-base max-w-[500px] mx-auto">
          Welcome to the Academy — your hub for growth, content, and community.
        </p>
      </div>

      {/* MY CONTENT Card */}
      <div
        className="bg-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)] mb-6"
        style={{
          clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
        }}
      >
        <div className="flex items-center justify-between mb-6">
          <h4 className="font-serif text-sm tracking-wider text-gray-400">MY CONTENT</h4>
          <button
            className="flex items-center gap-2 bg-[#BF2424] text-white font-serif text-sm tracking-wider px-5 py-2.5 hover:bg-[#a01f1f] transition-colors"
            style={{
              clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
            }}
          >
            <Plus className="h-4 w-4" />
            CREATE NEW
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {mockContent.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAFAFA] p-4 text-center hover:shadow-md transition-shadow cursor-pointer"
              style={{
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            >
              {/* Thumbnail */}
              <div
                className="w-full aspect-video bg-gray-200 mb-3 flex items-center justify-center"
                style={{
                  clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                }}
              >
                <span className="text-gray-400 text-xs">Thumbnail</span>
              </div>
              <h5 className="font-serif text-base text-black mb-1">{item.title}</h5>
              <p className="font-serif text-lg text-[#BF2424] mb-1">${item.price}</p>
              <p className="text-xs text-gray-500">{item.sales} sold</p>
            </div>
          ))}

          {/* Add New Card */}
          <div
            className="border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center cursor-pointer hover:border-[#BF2424] hover:bg-[#BF2424]/5 transition-colors min-h-[180px]"
            style={{
              clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
            }}
          >
            <Plus className="h-12 w-12 text-gray-300 mb-2" />
            <span className="text-sm text-gray-400">Add New</span>
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Content Stats */}
        <div
          className="bg-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
          style={{
            clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
          }}
        >
          <h4 className="font-serif text-sm tracking-wider text-gray-400 mb-5">CONTENT STATS</h4>
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-[#F0F0F0]">
              <span className="text-sm text-gray-600">Total Views</span>
              <span className="font-serif text-lg text-[#BF2424]">12,450</span>
            </div>
            <div className="flex justify-between py-3 border-b border-[#F0F0F0]">
              <span className="text-sm text-gray-600">Total Sales</span>
              <span className="font-serif text-lg text-[#BF2424]">335</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-sm text-gray-600">Revenue</span>
              <span className="font-serif text-lg text-[#BF2424]">$8,240</span>
            </div>
          </div>
        </div>

        {/* Resource Library */}
        <div
          className="bg-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
          style={{
            clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
          }}
        >
          <h4 className="font-serif text-sm tracking-wider text-gray-400 mb-5">RESOURCE LIBRARY</h4>
          <div className="space-y-0">
            {resources.map((resource, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 py-3 border-b border-[#F0F0F0] last:border-0 cursor-pointer hover:text-[#BF2424] transition-colors group"
              >
                <FileText className="h-4 w-4 text-gray-400 group-hover:text-[#BF2424]" />
                <span className="text-sm text-black group-hover:text-[#BF2424]">{resource}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pro Community Card */}
      <div
        className="bg-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
        style={{
          clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
        }}
      >
        <h4 className="font-serif text-sm tracking-wider text-gray-400 mb-5">PRO COMMUNITY</h4>
        <div className="space-y-0">
          {discussions.map((disc) => (
            <div key={disc.id} className="py-4 border-b border-[#F0F0F0] last:border-0">
              <div className="flex items-start gap-3">
                <MessageCircle className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-700 italic mb-1">"{disc.message}"</p>
                  <p className="text-xs text-gray-400">
                    — {disc.author}, {disc.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="flex items-center gap-1 mt-4 text-[#BF2424] font-serif text-sm tracking-wider hover:gap-2 transition-all">
          VIEW ALL DISCUSSIONS
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
