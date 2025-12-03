"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Plus, Lightbulb, ChevronDown, Star, MessageCircle } from "lucide-react"

// Sample club data
const initialClubs = {
  driver: {
    brand: "TaylorMade",
    model: "Stealth 2 Plus",
    specs: { loft: "10.5°", flex: "Stiff", length: '45.5"' },
    favorite: true,
    roundsUsed: 45,
    totalRounds: 52,
    avgDistance: 275,
  },
  woods: [
    { slot: "3 Wood", brand: "Callaway", model: "Paradym", specs: { loft: "15°" } },
    { slot: "5 Wood", brand: null, model: null, specs: null },
  ],
  irons: [
    { slot: "5I", brand: "Mizuno", model: "JPX 923", fullModel: "JPX 923 Forged", shaft: "Steel shaft" },
    { slot: "6I", brand: "Mizuno", model: "JPX 923", fullModel: "JPX 923 Forged", shaft: "Steel shaft" },
    { slot: "7I", brand: "Mizuno", model: "JPX 923", fullModel: "JPX 923 Forged", shaft: "Steel shaft" },
    { slot: "8I", brand: "Mizuno", model: "JPX 923", fullModel: "JPX 923 Forged", shaft: "Steel shaft" },
    { slot: "9I", brand: "Mizuno", model: "JPX 923", fullModel: "JPX 923 Forged", shaft: "Steel shaft" },
    { slot: "PW", brand: "Mizuno", model: "JPX 923", fullModel: "JPX 923 Forged", shaft: "Steel shaft" },
  ],
  wedges: [
    { slot: "52° Gap Wedge", brand: "Vokey", model: "SM9" },
    { slot: "56° Sand Wedge", brand: "Vokey", model: "SM9" },
  ],
  putter: {
    brand: "Scotty Cameron",
    model: "Phantom X 5",
    specs: { length: '34"', balance: "Face Balanced" },
    practiceNote: "Most used on practice green",
  },
  ball: {
    brand: "Titleist",
    model: "Pro V1",
    roundsUsed: 48,
    totalRounds: 52,
  },
}

const equipmentHistory = [
  {
    date: "Oct 2024",
    action: "Added Taylormade Stealth 2 Plus",
    replaced: "Callaway Rogue (2020)",
    reason: "More distance needed",
    hasComparison: true,
  },
  {
    date: "Sep 2024",
    action: "Added Vokey SM9 56° wedge",
    replaced: "New addition (was using 60°)",
    isRecommendation: true,
  },
  {
    date: "Aug 2024",
    action: "Switched to Titleist Pro V1",
    replaced: "From: Callaway Chrome Soft",
  },
]

const clubTypes = [
  "Driver",
  "3 Wood",
  "5 Wood",
  "7 Wood",
  "Hybrid",
  "4 Iron",
  "5 Iron",
  "6 Iron",
  "7 Iron",
  "8 Iron",
  "9 Iron",
  "Pitching Wedge",
  "Gap Wedge",
  "Sand Wedge",
  "Lob Wedge",
  "Putter",
  "Ball",
]

const brands = [
  "TaylorMade",
  "Callaway",
  "Titleist",
  "Ping",
  "Cobra",
  "Mizuno",
  "Srixon",
  "Cleveland",
  "Bridgestone",
  "Scotty Cameron",
  "Odyssey",
  "Vokey",
  "Other",
]

const flexOptions = ["Stiff", "Regular", "Senior", "Ladies"]

export function MyBagTab() {
  const [clubs] = useState(initialClubs)
  const [showAddModal, setShowAddModal] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showHistory, setShowHistory] = useState(false)
  const [showAskPro, setShowAskPro] = useState(false)
  const [hoveredIron, setHoveredIron] = useState<string | null>(null)

  useEffect(() => {
    // Animate progress bar
    const timer = setTimeout(() => setProgress(79), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Show floating Ask Pro button after 3 seconds
    const timer = setTimeout(() => setShowAskPro(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const filledCount = 11
  const totalSlots = 14

  return (
    <div className="space-y-8 animate-fadeIn pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="font-serif text-[28px] tracking-wider text-black">MY BAG</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-[#226D50] text-white px-5 py-3 text-xs font-medium uppercase tracking-wider hover:-translate-y-[2px] hover:shadow-lg transition-all duration-200 flex items-center gap-2 w-fit rounded-lg"
        >
          <Plus className="h-4 w-4" />
          Add Club
        </button>
      </div>

      {/* 1. BAG COMPLETION BANNER */}
      <div className="bg-white p-6 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <span className="text-base font-bold text-black">
            BAG COMPLETION: {filledCount}/{totalSlots} clubs
          </span>
          <div className="flex items-center gap-4 flex-1 max-w-[600px]">
            <div className="flex-1 h-4 bg-[#E5E7EB] rounded-lg overflow-hidden">
              <div
                className="h-full rounded-lg transition-all duration-[1500ms] ease-out"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #226D50 0%, #2d8a68 50%, #226D50 100%)",
                  backgroundSize: "200% 100%",
                }}
              />
            </div>
            <span className="text-base font-bold text-[#226D50] min-w-[45px]">{progress}%</span>
          </div>
          <span className="text-sm text-gray-500">Complete your bag to earn 200 XP!</span>
        </div>
      </div>

      {/* 2. DRIVER SECTION (HERO) */}
      <ClubSection title="DRIVER">
        <div
          className="bg-white p-8 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] transition-all duration-200 cursor-pointer"
          style={{ maxWidth: "600px", minHeight: "200px" }}
        >
          <div className="flex gap-8">
            {/* Driver Image */}
            <div className="w-[150px] h-[150px] bg-[#F5F5F5] rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
              <img
                src="/taylormade-stealth-2-plus-driver-club-head.jpg"
                alt="TaylorMade Stealth 2 Plus"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Driver Info */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-black uppercase">
                  {clubs.driver.brand} {clubs.driver.model}
                </h3>
                <p className="text-base text-gray-500 mt-1">
                  {clubs.driver.specs.loft} • {clubs.driver.specs.flex} Flex • {clubs.driver.specs.length}
                </p>
                {clubs.driver.favorite && (
                  <div className="flex items-center gap-1 mt-2">
                    <Star className="h-4 w-4 text-[#a29e7b] fill-[#a29e7b]" />
                    <span className="text-sm text-[#a29e7b] font-medium">Favorite</span>
                  </div>
                )}
                <p className="text-sm text-gray-500 mt-1">
                  Used in {clubs.driver.roundsUsed}/{clubs.driver.totalRounds} rounds
                </p>
                <p className="text-sm text-[#226D50] font-medium mt-1">Avg: {clubs.driver.avgDistance} yards</p>
              </div>

              <div className="flex gap-3 mt-4">
                <button className="px-4 py-2 border-2 border-[#226D50] text-[#226D50] text-xs font-medium uppercase tracking-wider rounded-lg hover:bg-[#226D50] hover:text-white transition-all">
                  Edit
                </button>
                <button className="px-4 py-2 border-2 border-[#226D50] text-[#226D50] text-xs font-medium uppercase tracking-wider rounded-lg hover:bg-[#226D50] hover:text-white transition-all">
                  Compare
                </button>
                <button className="px-4 py-2 border-2 border-[#226D50] text-[#226D50] text-xs font-medium uppercase tracking-wider rounded-lg hover:bg-[#226D50] hover:text-white transition-all">
                  Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      </ClubSection>

      {/* 3. WOODS SECTION */}
      <ClubSection title="WOODS">
        <div className="flex gap-6 flex-wrap">
          {/* 3 Wood - Filled */}
          <div className="w-[280px] bg-white p-6 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] transition-all duration-200 cursor-pointer">
            <div className="flex gap-4">
              <div className="w-[80px] h-[80px] bg-[#F5F5F5] rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src="/callaway-paradym-3-wood-fairway-club-head.jpg"
                  alt="3 Wood"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">3 WOOD</p>
                <p className="text-lg font-bold text-black">Callaway Paradym</p>
                <p className="text-sm text-gray-500 mt-1">15°</p>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="text-[#226D50] text-sm font-medium hover:underline">Edit</button>
            </div>
          </div>

          {/* 5 Wood - Empty */}
          <button
            onClick={() => setShowAddModal(true)}
            className="w-[280px] p-6 rounded-xl border-2 border-dashed border-gray-300 bg-white flex flex-col items-center justify-center hover:border-[#226D50] hover:bg-[#FAFAFA] transition-all duration-200"
            style={{ minHeight: "140px" }}
          >
            <div className="w-[80px] h-[80px] flex items-center justify-center opacity-20">
              <img
                src="/fairway-wood-golf-club-outline-silhouette.jpg"
                alt="5 Wood outline"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xs uppercase tracking-wider text-gray-400 mt-2">5 WOOD</p>
            <Plus className="h-10 w-10 text-[#226D50] mt-2" />
            <p className="text-xs text-gray-400 mt-1">Popular choice for your bag setup</p>
          </button>
        </div>
      </ClubSection>

      {/* 4. IRONS SECTION (DIAGONAL BAG LAYOUT) */}
      <ClubSection title="IRONS">
        <div className="flex gap-6 justify-center py-8 overflow-visible">
          {clubs.irons.map((iron, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => setHoveredIron(iron.slot)}
              onMouseLeave={() => setHoveredIron(null)}
            >
              <div
                className="w-[90px] h-[140px] bg-white p-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.06)] cursor-pointer hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-200 flex flex-col items-center justify-center"
                style={{
                  transform: "rotate(-30deg) translateY(20px)",
                  transformOrigin: "bottom center",
                }}
              >
                <div className="w-[60px] h-[60px] flex items-center justify-center mb-2">
                  <img
                    src={`/mizuno-.jpg?height=60&width=60&query=Mizuno ${iron.slot} iron club head`}
                    alt={iron.slot}
                    className="w-full h-full object-contain"
                    style={{ transform: "rotate(30deg)" }}
                  />
                </div>
                <p className="font-serif text-2xl font-bold text-black">{iron.slot}</p>
                <p className="text-[10px] text-gray-500">{iron.brand}</p>
              </div>

              {/* Tooltip on hover */}
              {hoveredIron === iron.slot && (
                <div
                  className="absolute z-50 bg-white p-3 rounded-lg shadow-lg border border-gray-200 whitespace-nowrap"
                  style={{
                    top: "-80px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <p className="font-bold text-sm text-black">{iron.slot.replace("I", " IRON")}</p>
                  <p className="text-xs text-gray-600">{iron.fullModel}</p>
                  <p className="text-xs text-gray-500">{iron.shaft}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </ClubSection>

      {/* 5. WEDGES SECTION */}
      <ClubSection title="WEDGES">
        <div className="flex gap-6 flex-wrap">
          {clubs.wedges.map((wedge, idx) => (
            <div
              key={idx}
              className="w-[280px] bg-white p-6 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] transition-all duration-200 cursor-pointer"
            >
              <div className="flex gap-4">
                <div className="w-[80px] h-[80px] bg-[#F5F5F5] rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=80&width=80&query=Vokey SM9 wedge club head with grooves`}
                    alt={wedge.slot}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">{wedge.slot}</p>
                  <p className="text-lg font-bold text-black">
                    {wedge.brand} {wedge.model}
                  </p>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="text-[#226D50] text-sm font-medium hover:underline">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </ClubSection>

      {/* 6. PUTTER SECTION */}
      <ClubSection title="PUTTER">
        <div
          className="bg-white p-8 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] transition-all duration-200 cursor-pointer"
          style={{ maxWidth: "500px", minHeight: "180px" }}
        >
          <div className="flex gap-8">
            {/* Putter Image */}
            <div className="w-[120px] h-[120px] bg-[#F5F5F5] rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
              <img
                src="/scotty-cameron-phantom-x-5-putter-face-view.jpg"
                alt="Scotty Cameron Phantom X 5"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Putter Info */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-black uppercase">
                  {clubs.putter.brand} {clubs.putter.model}
                </h3>
                <p className="text-base text-gray-500 mt-1">
                  {clubs.putter.specs.length} • {clubs.putter.specs.balance}
                </p>
                <p className="text-sm text-gray-500 mt-2">{clubs.putter.practiceNote}</p>
              </div>

              <div className="flex gap-3 mt-4">
                <button className="px-4 py-2 border-2 border-[#226D50] text-[#226D50] text-xs font-medium uppercase tracking-wider rounded-lg hover:bg-[#226D50] hover:text-white transition-all">
                  Edit
                </button>
                <button className="px-4 py-2 border-2 border-[#226D50] text-[#226D50] text-xs font-medium uppercase tracking-wider rounded-lg hover:bg-[#226D50] hover:text-white transition-all">
                  Compare
                </button>
                <button className="px-4 py-2 border-2 border-[#226D50] text-[#226D50] text-xs font-medium uppercase tracking-wider rounded-lg hover:bg-[#226D50] hover:text-white transition-all">
                  Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      </ClubSection>

      {/* 7. PREFERRED BALL SECTION */}
      <ClubSection title="PREFERRED BALL">
        <div className="w-[280px] bg-white p-6 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] transition-all duration-200 cursor-pointer">
          <div className="flex gap-4">
            <div className="w-[80px] h-[80px] bg-[#F5F5F5] rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
              <img
                src="/titleist-pro-v1-golf-ball-white-with-logo.jpg"
                alt="Titleist Pro V1"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-black uppercase">
                {clubs.ball.brand} {clubs.ball.model}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Used in {clubs.ball.roundsUsed}/{clubs.ball.totalRounds} rounds this year
              </p>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="text-[#226D50] text-sm font-medium hover:underline">Edit</button>
          </div>
        </div>
      </ClubSection>

      {/* 9. EQUIPMENT HISTORY (COLLAPSIBLE) */}
      <div className="bg-[#F9FAFB] border-t border-[#E5E7EB] p-6 rounded-xl mt-12">
        <button onClick={() => setShowHistory(!showHistory)} className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">📜</span>
            <h3 className="text-lg font-bold text-black">EQUIPMENT HISTORY</h3>
          </div>
          <span className="text-[#226D50] text-sm font-medium flex items-center gap-1">
            {showHistory ? "HIDE HISTORY" : "SHOW HISTORY"}
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showHistory ? "rotate-180" : ""}`} />
          </span>
        </button>

        {showHistory && (
          <div className="mt-6 pl-4 border-l-2 border-gray-200">
            {equipmentHistory.map((item, idx) => (
              <div key={idx} className="relative pl-8 pb-6 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#226D50]" />

                <div>
                  <p className="text-base font-medium text-black">
                    <span className="text-gray-500">{item.date}:</span> {item.action}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{item.replaced}</p>
                  {item.reason && <p className="text-sm text-gray-500 italic mt-1">Reason: {item.reason}</p>}
                  {item.hasComparison && (
                    <button className="text-[#226D50] text-xs font-medium hover:underline mt-1">
                      View comparison →
                    </button>
                  )}
                  {item.isRecommendation && (
                    <span className="inline-block mt-2 px-2 py-1 bg-[#226D50]/10 text-[#226D50] text-xs font-medium rounded">
                      Riley&apos;s recommendation
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 8. FLOATING "ASK YOUR PRO" BUTTON */}
      {showAskPro && (
        <div
          className="fixed z-[1000] hidden lg:block animate-slideInRight"
          style={{
            right: "24px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <div className="w-[200px] bg-white border-2 border-[#226D50] rounded-xl p-5 shadow-[0_4px_16px_rgba(0,0,0,0.12)] animate-pulse-border">
            <div className="flex flex-col items-center text-center">
              <Lightbulb className="h-8 w-8 text-[#226D50]" />
              <p className="font-bold text-base text-black mt-2">NEED HELP?</p>
              <p className="text-sm text-gray-500 mt-1">Ask Your Pro</p>

              <div className="w-10 h-10 rounded-full bg-[#226D50] flex items-center justify-center mt-3 overflow-hidden">
                <img
                  src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaridog.png"
                  alt="Riley"
                  className="w-full h-full object-cover"
                />
              </div>

              <button className="w-full mt-3 bg-[#226D50] text-white py-2.5 rounded-lg text-sm font-medium uppercase tracking-wider hover:bg-[#1a5a42] transition-all flex items-center justify-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Chat with Riley
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddModal && <AddClubModal onClose={() => setShowAddModal(false)} />}
    </div>
  )
}

function ClubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-[0.1em] text-gray-500 mb-4" style={{ letterSpacing: "1px" }}>
        {title}
      </h3>
      {children}
    </div>
  )
}

function AddClubModal({ onClose }: { onClose: () => void }) {
  const [clubType, setClubType] = useState("")
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [loft, setLoft] = useState("")
  const [flex, setFlex] = useState("")
  const [length, setLength] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onClose()
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-[480px] p-8 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.2)] animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-2xl tracking-wider text-black">ADD A CLUB</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Club Type</label>
            <select
              value={clubType}
              onChange={(e) => setClubType(e.target.value)}
              className="w-full h-12 px-4 border-2 border-[#E5E5E5] bg-white text-black rounded-lg focus:border-[#226D50] focus:outline-none transition-colors"
            >
              <option value="">Select type...</option>
              {clubTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Brand</label>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full h-12 px-4 border-2 border-[#E5E5E5] bg-white text-black rounded-lg focus:border-[#226D50] focus:outline-none transition-colors"
            >
              <option value="">Search brands...</option>
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Model</label>
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Select or type model..."
              className="w-full h-12 px-4 border-2 border-[#E5E5E5] bg-white text-black rounded-lg focus:border-[#226D50] focus:outline-none transition-colors placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Specs (Optional)</label>
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                value={loft}
                onChange={(e) => setLoft(e.target.value)}
                placeholder="Loft (°)"
                className="h-12 px-4 border-2 border-[#E5E5E5] bg-white text-black rounded-lg focus:border-[#226D50] focus:outline-none transition-colors placeholder:text-gray-400"
              />
              <select
                value={flex}
                onChange={(e) => setFlex(e.target.value)}
                className="h-12 px-4 border-2 border-[#E5E5E5] bg-white text-black rounded-lg focus:border-[#226D50] focus:outline-none transition-colors"
              >
                <option value="">Flex</option>
                {flexOptions.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                placeholder='Length (")'
                className="h-12 px-4 border-2 border-[#E5E5E5] bg-white text-black rounded-lg focus:border-[#226D50] focus:outline-none transition-colors placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              type="button"
              onClick={onClose}
              className="border-2 border-gray-300 text-gray-600 px-6 py-3 text-xs font-medium uppercase tracking-wider rounded-lg hover:border-gray-400 transition-all duration-150"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#226D50] text-white px-6 py-3 text-xs font-medium uppercase tracking-wider rounded-lg hover:-translate-y-[2px] hover:shadow-lg transition-all duration-200"
            >
              Add to Bag
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
