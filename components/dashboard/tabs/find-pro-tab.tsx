"use client"

import type React from "react"

import { useState } from "react"
import { Star, MapPin, ArrowRight, Clock } from "lucide-react"

const cardBaseStyles = {
  background: "#FFFFFF",
  borderRadius: "16px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
}

export function FindProTab() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <>
      {/* Header Section */}
      <div style={cardBaseStyles} className="p-8">
        <h1 className="font-sans text-[32px] font-bold text-black mb-4">FIND A PRO</h1>
        <h2 className="font-sans text-[48px] font-bold text-black mb-2">MEET RILEY BUNKER</h2>
        <p className="font-sans text-[20px] text-[#6B7280]">Your Founding Instructor</p>
      </div>

      {/* Riley's Hero Card */}
      <div
        className="p-8 md:p-12"
        style={{
          ...cardBaseStyles,
          border: "2px solid #E5E7EB",
        }}
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Photo */}
          <div className="flex-shrink-0 flex justify-center lg:justify-start">
            <div
              className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden"
              style={{
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaridog.png"
                alt="Riley Bunker"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Info */}
          <div className="flex-1">
            {/* Name & Badges */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3">
              <h3 className="font-sans text-[36px] font-bold text-black">RILEY BUNKER</h3>
              <div className="flex flex-wrap gap-2">
                <span
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#226D50] text-white font-bold text-[14px] uppercase"
                  style={{
                    clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  <Star className="w-4 h-4 fill-white" />
                  FOUNDING PRO
                </span>
                <span
                  className="inline-flex items-center px-4 py-2 bg-[#a29e7b] text-white font-bold text-[14px] uppercase"
                  style={{
                    clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  PGA PROFESSIONAL
                </span>
              </div>
            </div>

            {/* Rating & Location */}
            <div className="flex items-center gap-2 text-[18px] mb-6">
              <Star className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
              <span className="font-bold text-black">5.0</span>
              <span className="text-[#6B7280]">(250 reviews)</span>
              <span className="text-[#6B7280]">•</span>
              <span className="text-[#6B7280]">American Fork, UT</span>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-2 text-[16px] text-[#6B7280] mb-6">
              <span>15y exp</span>
              <span className="text-gray-300">|</span>
              <span>2,500+ students</span>
              <span className="text-gray-300">|</span>
              <span>PGA Certified</span>
            </div>

            {/* Specialties */}
            <div className="mb-6">
              <p className="text-[14px] text-[#6B7280] mb-2">Specialties:</p>
              <p className="text-[18px] font-bold text-black">Short Game, Mental Coaching</p>
            </div>

            {/* Rate & Availability */}
            <div className="mb-6">
              <p className="text-[28px] font-bold text-[#226D50]">$90/hour</p>
              <p className="text-[16px] text-[#6B7280] mt-1">Available: Mon-Sat, 8am-6pm</p>
              <p className="text-[14px] font-bold text-[#226D50] mt-2 flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Next available slot: Tomorrow 2:00 PM
              </p>
            </div>

            {/* Bio */}
            <p className="text-[16px] text-[#374151] leading-[1.6] mb-8">
              Riley specializes in short game mastery and mental coaching. Over 15 years, he's helped 2,500+ golfers at
              all skill levels improve their game and build lasting confidence on the course.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="w-full sm:w-[220px] h-[52px] bg-white border-2 border-[#226D50] text-[#226D50] font-bold text-[16px] hover:bg-[#F0F9F4] transition-colors"
                style={{
                  clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                }}
              >
                VIEW FULL PROFILE
              </button>
              <button
                className="w-full sm:w-[240px] h-[52px] bg-[#226D50] text-white font-bold text-[16px] flex items-center justify-center gap-2 hover:bg-[#1A5840] transition-colors"
                style={{
                  clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                }}
              >
                BOOK LESSON NOW
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div style={cardBaseStyles} className="p-8">
        <h3 className="font-sans text-[24px] font-bold text-black mb-6">WHERE RILEY TEACHES</h3>

        {/* Map Container */}
        <div
          className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div
                  className="w-12 h-12 bg-[#226D50] rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    boxShadow: "0 4px 12px rgba(34, 109, 80, 0.4)",
                  }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
                  style={{
                    borderLeft: "8px solid transparent",
                    borderRight: "8px solid transparent",
                    borderTop: "12px solid #226D50",
                  }}
                />
              </div>

              <div className="bg-white rounded-lg shadow-lg p-4 max-w-[250px]">
                <p className="font-bold text-black">Back9 - American Fork</p>
                <p className="text-sm text-[#6B7280] mt-1">Riley's home location</p>
                <a href="#" className="text-sm text-[#226D50] flex items-center gap-1 mt-2 hover:underline">
                  <MapPin className="w-3 h-3" />
                  Get directions
                </a>
                <button className="w-full mt-3 py-2 bg-[#226D50] text-white text-sm font-bold rounded flex items-center justify-center gap-1">
                  BOOK HERE
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 109, 80, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 109, 80, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="mt-4">
          <p className="text-[16px] text-[#6B7280] flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Primary Location: Back9 - American Fork
          </p>
          <p className="text-[14px] text-[#6B7280] italic mt-1 ml-6">Riley also teaches at: Fox Hollow Golf Course</p>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div
        className="p-8 md:p-10 text-center"
        style={{
          ...cardBaseStyles,
          border: "2px dashed #D1D5DB",
        }}
      >
        <h3 className="font-sans text-[28px] font-bold text-black mb-3">MORE INSTRUCTORS COMING SOON</h3>
        <p className="text-[18px] text-[#6B7280] mb-6 max-w-[600px] mx-auto">
          We're onboarding elite instructors across Utah. Join the waitlist to get notified when new pros launch on
          CaddyMe.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#226D50] text-white rounded-lg">
            <Star className="w-5 h-5" />
            <span className="font-bold">You're on the waitlist!</span>
          </div>
        ) : (
          <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-[320px] h-[48px] px-4 border-2 border-[#E5E7EB] rounded-lg text-[16px] focus:outline-none focus:border-[#226D50] transition-colors"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-[180px] h-[48px] bg-[#226D50] text-white font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-[#1A5840] transition-colors"
              style={{
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            >
              JOIN WAITLIST
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </>
  )
}
