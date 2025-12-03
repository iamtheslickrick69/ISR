"use client"

import { useState } from "react"
import {
  Camera,
  Upload,
  Check,
  Star,
  ChevronRight,
  Monitor,
  MapPin,
  Flag,
  Plus,
  X,
  DollarSign,
  Clock,
  Edit2,
} from "lucide-react"

export function ProProfileTab() {
  const [imageError, setImageError] = useState(false)
  const [availability, setAvailability] = useState({
    mon: { active: true, start: "9:00", end: "17:00" },
    tue: { active: true, start: "9:00", end: "17:00" },
    wed: { active: false, start: "", end: "" },
    thu: { active: true, start: "9:00", end: "17:00" },
    fri: { active: true, start: "9:00", end: "17:00" },
    sat: { active: true, start: "9:00", end: "12:00" },
    sun: { active: false, start: "", end: "" },
  })

  const [lessonTypes, setLessonTypes] = useState({
    virtual: { enabled: true, price: 60, duration: 45 },
    simulator: { enabled: true, price: 90, duration: 60 },
    onCourse: { enabled: true, price: 120, duration: 90 },
  })

  const [specialties, setSpecialties] = useState([
    "Short Game",
    "Putting",
    "Mental Game",
    "Driver",
  ])

  const [locations, setLocations] = useState([
    { id: "1", name: "Back9 Simulator - Downtown", type: "simulator", address: "123 Main St, Denver, CO" },
    { id: "2", name: "Fox Hollow Golf Course", type: "course", address: "13410 W Morrison Rd, Lakewood, CO" },
  ])

  const allSpecialties = [
    "Short Game",
    "Putting",
    "Mental Game",
    "Driver",
    "Irons",
    "Wedges",
    "Course Management",
    "Fitness",
    "Junior Coaching",
    "Beginner Friendly",
    "Advanced Players",
    "Competition Prep",
  ]

  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

  const toggleSpecialty = (specialty: string) => {
    if (specialties.includes(specialty)) {
      setSpecialties(specialties.filter((s) => s !== specialty))
    } else {
      setSpecialties([...specialties, specialty])
    }
  }

  return (
    <div className="space-y-8">
      {/* Top Row - Preview + Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Preview Card */}
        <div
          className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          style={{
            clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
          }}
        >
          <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400 mb-5">PROFILE PREVIEW</h4>

          {/* Preview Card with Gold Border */}
          <div className="border-4 border-[#a29e7b] p-4">
            <div className="flex gap-4">
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                {!imageError ? (
                  <img
                    src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaridog.png"
                    alt="Riley Bunker"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400">RB</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-serif text-lg tracking-wider">RILEY BUNKER</h4>
                </div>
                <p className="text-gray-500 text-sm mb-2">PGA Professional</p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5.0 (250)</span>
                </div>
                <p className="text-[#a29e7b] font-serif text-lg">$60-$120/hr</p>
              </div>
            </div>

            {/* Lesson Type Pills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {lessonTypes.virtual.enabled && (
                <span
                  className="text-xs px-3 py-1 bg-[#226D50]/10 text-[#226D50]"
                  style={{
                    clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                  }}
                >
                  Virtual ${lessonTypes.virtual.price}
                </span>
              )}
              {lessonTypes.simulator.enabled && (
                <span
                  className="text-xs px-3 py-1 bg-[#a29e7b]/10 text-[#a29e7b]"
                  style={{
                    clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                  }}
                >
                  Simulator ${lessonTypes.simulator.price}
                </span>
              )}
              {lessonTypes.onCourse.enabled && (
                <span
                  className="text-xs px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37]"
                  style={{
                    clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                  }}
                >
                  On-Course ${lessonTypes.onCourse.price}
                </span>
              )}
            </div>

            {/* Badges Row */}
            <div className="flex gap-2 mt-4">
              <div
                className="bg-black/10 px-3 py-1"
                style={{
                  clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                }}
              >
                <img
                  src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaablack1.png"
                  alt="Academy"
                  className="h-5"
                />
              </div>
              <div className="bg-gradient-to-r from-amber-100 to-yellow-50 px-3 py-1 text-xs font-medium text-amber-800">
                PGA CERTIFIED
              </div>
            </div>

            {/* Bio Preview */}
            <p className="text-sm text-gray-600 mt-4 line-clamp-2">
              15 years teaching at Back Nine locations. Specializes in short game and mental coaching...
            </p>
          </div>
        </div>

        {/* Profile Settings Card */}
        <div
          className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          style={{
            clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
          }}
        >
          <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400 mb-5">PROFILE SETTINGS</h4>

          <div className="space-y-4">
            {/* Photo Upload */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-2">Profile Photo</label>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img
                    src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaridog.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="flex items-center gap-2 text-sm text-[#a29e7b] hover:underline">
                  <Camera className="h-4 w-4" />
                  Change Photo
                </button>
              </div>
            </div>

            {/* Name Input */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-2">Display Name</label>
              <input
                type="text"
                defaultValue="Riley Bunker"
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-[#a29e7b] focus:ring-2 focus:ring-[#a29e7b]/15 outline-none transition-all"
                style={{
                  clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                }}
              />
            </div>

            {/* Bio Textarea */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-2">Bio (max 500 chars)</label>
              <textarea
                rows={3}
                maxLength={500}
                defaultValue="15 years teaching at Back Nine locations. Specializes in short game and mental coaching. Teaches all skill levels from beginners to collegiate athletes."
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-[#a29e7b] focus:ring-2 focus:ring-[#a29e7b]/15 outline-none transition-all resize-none"
                style={{
                  clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                }}
              />
            </div>

            {/* Credentials Upload */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-2">Credentials</label>
              <button
                className="flex items-center gap-2 px-4 py-3 border border-dashed border-gray-300 text-sm text-gray-500 hover:border-[#a29e7b] hover:text-[#a29e7b] transition-all w-full"
                style={{
                  clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                }}
              >
                <Upload className="h-4 w-4" />
                Upload PGA Card or Credentials
              </button>
              <div className="flex items-center gap-1.5 mt-2 text-xs text-green-600">
                <Check className="h-3.5 w-3.5" />
                PGA Certification Verified
              </div>
            </div>

            {/* Save Button */}
            <button
              className="w-full bg-[#226D50] text-white font-serif text-sm tracking-[0.1em] py-4 hover:bg-[#1a5a42] transition-all mt-2"
              style={{
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            >
              SAVE CHANGES
            </button>
          </div>
        </div>
      </div>

      {/* Lesson Types Card - Full Width */}
      <div
        className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
        style={{
          clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
        }}
      >
        <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400 mb-5">LESSON TYPES & PRICING</h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Virtual */}
          <div
            className={`p-5 border-2 transition-all ${
              lessonTypes.virtual.enabled ? "border-[#226D50] bg-[#226D50]/5" : "border-gray-200"
            }`}
            style={{
              clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Monitor className="h-6 w-6 text-[#226D50]" />
                <span className="font-serif text-lg tracking-wider">VIRTUAL</span>
              </div>
              <button
                onClick={() =>
                  setLessonTypes({
                    ...lessonTypes,
                    virtual: { ...lessonTypes.virtual, enabled: !lessonTypes.virtual.enabled },
                  })
                }
                className={`w-12 h-6 rounded-full transition-all ${
                  lessonTypes.virtual.enabled ? "bg-[#226D50]" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                    lessonTypes.virtual.enabled ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            {lessonTypes.virtual.enabled && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-gray-400" />
                  <input
                    type="number"
                    value={lessonTypes.virtual.price}
                    onChange={(e) =>
                      setLessonTypes({
                        ...lessonTypes,
                        virtual: { ...lessonTypes.virtual, price: parseInt(e.target.value) || 0 },
                      })
                    }
                    className="w-20 px-2 py-1 border border-gray-200 text-sm focus:outline-none focus:border-[#226D50]"
                  />
                  <span className="text-sm text-gray-500">per lesson</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <select
                    value={lessonTypes.virtual.duration}
                    onChange={(e) =>
                      setLessonTypes({
                        ...lessonTypes,
                        virtual: { ...lessonTypes.virtual, duration: parseInt(e.target.value) },
                      })
                    }
                    className="px-2 py-1 border border-gray-200 text-sm focus:outline-none focus:border-[#226D50]"
                  >
                    <option value={30}>30 min</option>
                    <option value={45}>45 min</option>
                    <option value={60}>60 min</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Simulator */}
          <div
            className={`p-5 border-2 transition-all ${
              lessonTypes.simulator.enabled ? "border-[#a29e7b] bg-[#a29e7b]/5" : "border-gray-200"
            }`}
            style={{
              clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Check className="h-6 w-6 text-[#a29e7b]" />
                <span className="font-serif text-lg tracking-wider">SIMULATOR</span>
              </div>
              <button
                onClick={() =>
                  setLessonTypes({
                    ...lessonTypes,
                    simulator: { ...lessonTypes.simulator, enabled: !lessonTypes.simulator.enabled },
                  })
                }
                className={`w-12 h-6 rounded-full transition-all ${
                  lessonTypes.simulator.enabled ? "bg-[#a29e7b]" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                    lessonTypes.simulator.enabled ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            {lessonTypes.simulator.enabled && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-gray-400" />
                  <input
                    type="number"
                    value={lessonTypes.simulator.price}
                    onChange={(e) =>
                      setLessonTypes({
                        ...lessonTypes,
                        simulator: { ...lessonTypes.simulator, price: parseInt(e.target.value) || 0 },
                      })
                    }
                    className="w-20 px-2 py-1 border border-gray-200 text-sm focus:outline-none focus:border-[#a29e7b]"
                  />
                  <span className="text-sm text-gray-500">per lesson</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <select
                    value={lessonTypes.simulator.duration}
                    onChange={(e) =>
                      setLessonTypes({
                        ...lessonTypes,
                        simulator: { ...lessonTypes.simulator, duration: parseInt(e.target.value) },
                      })
                    }
                    className="px-2 py-1 border border-gray-200 text-sm focus:outline-none focus:border-[#a29e7b]"
                  >
                    <option value={45}>45 min</option>
                    <option value={60}>60 min</option>
                    <option value={90}>90 min</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* On-Course */}
          <div
            className={`p-5 border-2 transition-all ${
              lessonTypes.onCourse.enabled ? "border-[#D4AF37] bg-[#D4AF37]/5" : "border-gray-200"
            }`}
            style={{
              clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Flag className="h-6 w-6 text-[#D4AF37]" />
                <span className="font-serif text-lg tracking-wider">ON-COURSE</span>
              </div>
              <button
                onClick={() =>
                  setLessonTypes({
                    ...lessonTypes,
                    onCourse: { ...lessonTypes.onCourse, enabled: !lessonTypes.onCourse.enabled },
                  })
                }
                className={`w-12 h-6 rounded-full transition-all ${
                  lessonTypes.onCourse.enabled ? "bg-[#D4AF37]" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                    lessonTypes.onCourse.enabled ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            {lessonTypes.onCourse.enabled && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-gray-400" />
                  <input
                    type="number"
                    value={lessonTypes.onCourse.price}
                    onChange={(e) =>
                      setLessonTypes({
                        ...lessonTypes,
                        onCourse: { ...lessonTypes.onCourse, price: parseInt(e.target.value) || 0 },
                      })
                    }
                    className="w-20 px-2 py-1 border border-gray-200 text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                  <span className="text-sm text-gray-500">per lesson</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <select
                    value={lessonTypes.onCourse.duration}
                    onChange={(e) =>
                      setLessonTypes({
                        ...lessonTypes,
                        onCourse: { ...lessonTypes.onCourse, duration: parseInt(e.target.value) },
                      })
                    }
                    className="px-2 py-1 border border-gray-200 text-sm focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value={60}>60 min</option>
                    <option value={90}>90 min</option>
                    <option value={120}>120 min</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Two Column - Specialties + Locations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Specialties Card */}
        <div
          className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          style={{
            clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
          }}
        >
          <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400 mb-5">SPECIALTIES</h4>
          <p className="text-xs text-gray-500 mb-4">Select your areas of expertise (shown on your profile)</p>

          <div className="flex flex-wrap gap-2">
            {allSpecialties.map((specialty) => {
              const isSelected = specialties.includes(specialty)
              return (
                <button
                  key={specialty}
                  onClick={() => toggleSpecialty(specialty)}
                  className={`px-4 py-2 text-sm transition-all ${
                    isSelected
                      ? "bg-[#226D50] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  style={{
                    clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                  }}
                >
                  {isSelected && <Check className="h-3 w-3 inline mr-1" />}
                  {specialty}
                </button>
              )
            })}
          </div>
        </div>

        {/* Teaching Locations Card */}
        <div
          className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          style={{
            clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
          }}
        >
          <div className="flex items-center justify-between mb-5">
            <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400">TEACHING LOCATIONS</h4>
            <button
              className="flex items-center gap-1 text-sm text-[#226D50] hover:underline"
            >
              <Plus className="h-4 w-4" />
              Add Location
            </button>
          </div>

          <div className="space-y-3">
            {locations.map((location) => (
              <div
                key={location.id}
                className="flex items-start gap-3 p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                style={{
                  clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                }}
              >
                <MapPin className="h-5 w-5 text-[#a29e7b] mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium text-black text-sm">{location.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{location.address}</p>
                  <span
                    className={`inline-block mt-2 text-xs px-2 py-0.5 ${
                      location.type === "simulator"
                        ? "bg-[#a29e7b]/10 text-[#a29e7b]"
                        : "bg-[#D4AF37]/10 text-[#D4AF37]"
                    }`}
                    style={{
                      clipPath: "polygon(3px 0, 100% 0, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0 100%, 0 3px)",
                    }}
                  >
                    {location.type === "simulator" ? "Simulator" : "Golf Course"}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="p-1 text-gray-400 hover:text-[#a29e7b]">
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-[#BF2424]">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Availability Card - Full Width */}
      <div
        className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
        style={{
          clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
        }}
      >
        <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400 mb-5">AVAILABILITY</h4>

        <div className="grid grid-cols-7 gap-2 overflow-x-auto">
          {days.map((day) => {
            const dayKey = day.toLowerCase().slice(0, 3) as keyof typeof availability
            const isActive = availability[dayKey]?.active

            return (
              <div key={day} className="text-center min-w-[80px]">
                <p className="font-serif text-xs tracking-wider text-gray-500 mb-2">{day}</p>
                <button
                  onClick={() => {
                    setAvailability((prev) => ({
                      ...prev,
                      [dayKey]: { ...prev[dayKey], active: !prev[dayKey].active },
                    }))
                  }}
                  className={`w-full py-3 text-sm font-medium transition-all ${
                    isActive ? "bg-[#a29e7b] text-white" : "bg-gray-100 text-gray-400"
                  }`}
                  style={{
                    clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                  }}
                >
                  {isActive
                    ? `${availability[dayKey].start?.split(":")[0]}-${availability[dayKey].end?.split(":")[0]}`
                    : "OFF"}
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Reviews Card - Full Width */}
      <div
        className="bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
        style={{
          clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
        }}
      >
        <h4 className="font-serif text-sm tracking-[0.1em] text-gray-400 mb-5">REVIEWS</h4>

        <div className="space-y-4">
          <div className="py-4 border-b border-gray-100">
            <div className="flex text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-2">
              "Best instructor I've ever had! Riley completely transformed my short game in just 3 lessons."
            </p>
            <p className="text-sm text-gray-400">— John D., Jan 1, 2025</p>
          </div>

          <div className="py-4 border-b border-gray-100">
            <div className="flex text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-2">
              "Riley helped me drop 5 strokes off my handicap. His mental game coaching is top-notch."
            </p>
            <p className="text-sm text-gray-400">— Sarah M., Dec 28, 2024</p>
          </div>
        </div>

        <button className="flex items-center gap-1 mt-4 text-[#a29e7b] font-serif text-sm tracking-wider hover:gap-2 transition-all">
          VIEW ALL REVIEWS
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
