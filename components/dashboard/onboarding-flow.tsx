"use client"

import { useState } from "react"
import { Star } from "lucide-react"

interface OnboardingFlowProps {
  onComplete: () => void
}

const TOTAL_STEPS = 5

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    handicap: "",
    handicapOption: "",
    goalHandicap: "",
    goalMilestone: "",
    improvementAreas: [] as string[],
    clubBrand: "",
    clubModel: "",
    selectedCaddie: false,
  })

  const goToNextStep = () => {
    if (currentStep < TOTAL_STEPS + 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const skipStep = () => {
    goToNextStep()
  }

  const progressPercent = currentStep === 0 ? 0 : (currentStep / TOTAL_STEPS) * 100

  return (
    <div className="fixed inset-0 z-[200] bg-white overflow-y-auto">
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-[600px]">
          {currentStep === 0 && <WelcomeStep onContinue={goToNextStep} onSkip={onComplete} />}
          {currentStep === 1 && (
            <HandicapStep formData={formData} setFormData={setFormData} onContinue={goToNextStep} onSkip={skipStep} />
          )}
          {currentStep === 2 && (
            <GoalStep formData={formData} setFormData={setFormData} onContinue={goToNextStep} onSkip={skipStep} />
          )}
          {currentStep === 3 && (
            <ImprovementStep
              formData={formData}
              setFormData={setFormData}
              onContinue={goToNextStep}
              onSkip={skipStep}
            />
          )}
          {currentStep === 4 && (
            <ClubStep formData={formData} setFormData={setFormData} onContinue={goToNextStep} onSkip={skipStep} />
          )}
          {currentStep === 5 && (
            <CaddieStep formData={formData} setFormData={setFormData} onContinue={goToNextStep} onSkip={skipStep} />
          )}
          {currentStep === 6 && <CompleteStep onComplete={onComplete} />}

          {/* Progress bar */}
          {currentStep > 0 && currentStep <= TOTAL_STEPS && (
            <div className="mt-12">
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#226D50] transition-all duration-600 ease-out-expo"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">
                Step {currentStep} of {TOTAL_STEPS}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Step 0: Welcome
function WelcomeStep({ onContinue, onSkip }: { onContinue: () => void; onSkip: () => void }) {
  return (
    <div className="text-center animate-fadeIn">
      <div className="text-6xl mb-8">🏌️</div>
      <h1 className="font-serif text-4xl tracking-wider text-black mb-4">WELCOME TO CADDYME</h1>
      <p className="text-gray-500 mb-2 max-w-[400px] mx-auto">Let's set up your profile in 2 minutes.</p>
      <p className="text-gray-500 mb-10 max-w-[400px] mx-auto">This helps us personalize your experience.</p>
      <button
        onClick={onContinue}
        className="chamfer bg-[#226D50] text-white px-10 py-4 text-sm font-medium uppercase tracking-wider hover:-translate-y-[2px] hover:shadow-lg transition-all duration-200 mb-4"
      >
        Let's Go →
      </button>
      <div>
        <button onClick={onSkip} className="text-gray-500 text-sm hover:underline transition-all">
          Skip for now
        </button>
      </div>
    </div>
  )
}

// Step 1: Handicap
function HandicapStep({
  formData,
  setFormData,
  onContinue,
  onSkip,
}: {
  formData: any
  setFormData: any
  onContinue: () => void
  onSkip: () => void
}) {
  return (
    <div className="animate-slideIn">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs uppercase tracking-widest text-gray-500">Step 1 of 5</span>
        <button onClick={onSkip} className="text-gray-500 text-sm hover:underline">
          Skip
        </button>
      </div>
      <div className="border-t border-gray-200 mb-8" />

      <h2 className="font-serif text-2xl tracking-wider text-black text-center mb-3">WHAT'S YOUR CURRENT HANDICAP?</h2>
      <p className="text-gray-500 text-center mb-8">
        This helps us match you with the right pros and track your progress.
      </p>

      <div className="max-w-[320px] mx-auto">
        <input
          type="text"
          placeholder="Enter handicap (e.g., 15.2)"
          value={formData.handicap}
          onChange={(e) => setFormData({ ...formData, handicap: e.target.value, handicapOption: "" })}
          className="w-full chamfer border-2 border-gray-200 px-4 py-3 text-base focus:border-[#226D50] focus:outline-none transition-colors duration-150 mb-6"
        />

        <div className="space-y-3 mb-8">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="handicapOption"
              checked={formData.handicapOption === "none"}
              onChange={() => setFormData({ ...formData, handicapOption: "none", handicap: "" })}
              className="w-4 h-4 accent-[#226D50]"
            />
            <span className="text-sm text-black">I don't have an official handicap</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="handicapOption"
              checked={formData.handicapOption === "new"}
              onChange={() => setFormData({ ...formData, handicapOption: "new", handicap: "" })}
              className="w-4 h-4 accent-[#226D50]"
            />
            <span className="text-sm text-black">I'm brand new to golf</span>
          </label>
        </div>

        <button
          onClick={onContinue}
          className="w-full chamfer bg-[#226D50] text-white py-3 text-sm font-medium uppercase tracking-wider hover:-translate-y-[2px] hover:shadow-lg transition-all duration-200"
        >
          Continue →
        </button>
      </div>
    </div>
  )
}

// Step 2: Goal
function GoalStep({
  formData,
  setFormData,
  onContinue,
  onSkip,
}: {
  formData: any
  setFormData: any
  onContinue: () => void
  onSkip: () => void
}) {
  const milestones = [
    { label: "Break 100", value: "break100" },
    { label: "Break 90", value: "break90" },
    { label: "Break 80", value: "break80" },
    { label: "Single Digits", value: "single" },
    { label: "Just Have Fun", value: "fun" },
  ]

  return (
    <div className="animate-slideIn">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs uppercase tracking-widest text-gray-500">Step 2 of 5</span>
        <button onClick={onSkip} className="text-gray-500 text-sm hover:underline">
          Skip
        </button>
      </div>
      <div className="border-t border-gray-200 mb-8" />

      <h2 className="font-serif text-2xl tracking-wider text-black text-center mb-3">WHAT'S YOUR GOAL?</h2>
      <p className="text-gray-500 text-center mb-8">What handicap do you want to reach?</p>

      <div className="max-w-[320px] mx-auto">
        <input
          type="text"
          placeholder="Target handicap (e.g., 10.0)"
          value={formData.goalHandicap}
          onChange={(e) => setFormData({ ...formData, goalHandicap: e.target.value, goalMilestone: "" })}
          className="w-full chamfer border-2 border-gray-200 px-4 py-3 text-base focus:border-[#226D50] focus:outline-none transition-colors duration-150 mb-6"
        />

        <p className="text-sm text-gray-500 mb-4">Or choose a milestone:</p>

        <div className="flex flex-wrap gap-3 mb-8">
          {milestones.map((m) => (
            <button
              key={m.value}
              onClick={() => setFormData({ ...formData, goalMilestone: m.value, goalHandicap: "" })}
              className={`chamfer-sm px-4 py-3 text-sm font-semibold border-2 transition-all duration-150 ${
                formData.goalMilestone === m.value
                  ? "bg-[#226D50] text-white border-[#226D50]"
                  : "bg-white text-black border-gray-200 hover:border-[#226D50]"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        <button
          onClick={onContinue}
          className="w-full chamfer bg-[#226D50] text-white py-3 text-sm font-medium uppercase tracking-wider hover:-translate-y-[2px] hover:shadow-lg transition-all duration-200"
        >
          Continue →
        </button>
      </div>
    </div>
  )
}

// Step 3: Improvement Areas
function ImprovementStep({
  formData,
  setFormData,
  onContinue,
  onSkip,
}: {
  formData: any
  setFormData: any
  onContinue: () => void
  onSkip: () => void
}) {
  const areas = [
    { emoji: "🏌️", label: "Full Swing", value: "swing" },
    { emoji: "🎯", label: "Short Game", value: "short" },
    { emoji: "⛳", label: "Putting", value: "putting" },
    { emoji: "🏖️", label: "Bunker Play", value: "bunker" },
    { emoji: "🧠", label: "Mental Game", value: "mental" },
    { emoji: "📋", label: "Course Mgmt", value: "course" },
    { emoji: "🆕", label: "Everything!", value: "everything" },
  ]

  const toggleArea = (value: string) => {
    const current = formData.improvementAreas
    if (current.includes(value)) {
      setFormData({ ...formData, improvementAreas: current.filter((v: string) => v !== value) })
    } else {
      setFormData({ ...formData, improvementAreas: [...current, value] })
    }
  }

  return (
    <div className="animate-slideIn">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs uppercase tracking-widest text-gray-500">Step 3 of 5</span>
        <button onClick={onSkip} className="text-gray-500 text-sm hover:underline">
          Skip
        </button>
      </div>
      <div className="border-t border-gray-200 mb-8" />

      <h2 className="font-serif text-2xl tracking-wider text-black text-center mb-3">WHAT DO YOU WANT TO WORK ON?</h2>
      <p className="text-gray-500 text-center mb-8">Select all that apply:</p>

      <div className="flex flex-wrap gap-3 justify-center max-w-[400px] mx-auto mb-8">
        {areas.map((area) => (
          <button
            key={area.value}
            onClick={() => toggleArea(area.value)}
            className={`chamfer-sm flex items-center gap-2 px-4 py-3 text-sm font-semibold border-2 transition-all duration-150 ${
              formData.improvementAreas.includes(area.value)
                ? "bg-[#226D50] text-white border-[#226D50]"
                : "bg-white text-black border-gray-200 hover:border-[#226D50]"
            }`}
          >
            <span>{area.emoji}</span>
            <span>{area.label}</span>
          </button>
        ))}
      </div>

      <div className="max-w-[320px] mx-auto">
        <button
          onClick={onContinue}
          className="w-full chamfer bg-[#226D50] text-white py-3 text-sm font-medium uppercase tracking-wider hover:-translate-y-[2px] hover:shadow-lg transition-all duration-200"
        >
          Continue →
        </button>
      </div>
    </div>
  )
}

// Step 4: Add First Club
function ClubStep({
  formData,
  setFormData,
  onContinue,
  onSkip,
}: {
  formData: any
  setFormData: any
  onContinue: () => void
  onSkip: () => void
}) {
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
    "Other",
  ]
  const models: Record<string, string[]> = {
    TaylorMade: ["Qi10 Max", "Qi10 LS", "Stealth 2", "SIM2 Max"],
    Callaway: ["Paradym Ai Smoke", "Paradym X", "Rogue ST Max"],
    Titleist: ["TSR3", "TSR2", "TSi3"],
    Ping: ["G430 Max", "G430 LST", "G425 Max"],
    Cobra: ["Darkspeed Max", "Aerojet", "LTDx"],
    Mizuno: ["ST-Z 230", "ST-X 230", "ST-G 220"],
    Srixon: ["ZX5 MKII", "ZX7 MKII"],
    Cleveland: ["Launcher XL", "Launcher XL Halo"],
    Bridgestone: ["B1", "B2"],
    Other: ["Custom/Other"],
  }

  return (
    <div className="animate-slideIn">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs uppercase tracking-widest text-gray-500">Step 4 of 5</span>
        <button onClick={onSkip} className="text-gray-500 text-sm hover:underline">
          Skip
        </button>
      </div>
      <div className="border-t border-gray-200 mb-8" />

      <h2 className="font-serif text-2xl tracking-wider text-black text-center mb-3">START BUILDING YOUR BAG</h2>
      <p className="text-gray-500 text-center mb-2">Add at least one club to get started.</p>
      <p className="text-gray-500 text-center mb-8">You can complete your bag anytime.</p>

      <div className="max-w-[320px] mx-auto">
        <p className="text-sm font-medium text-black mb-2">What's your driver?</p>

        <label className="text-xs uppercase tracking-widest text-gray-500 mb-1 block">Brand</label>
        <select
          value={formData.clubBrand}
          onChange={(e) => setFormData({ ...formData, clubBrand: e.target.value, clubModel: "" })}
          className="w-full chamfer border-2 border-gray-200 px-4 py-3 text-base focus:border-[#226D50] focus:outline-none transition-colors duration-150 mb-4 bg-white appearance-none cursor-pointer"
        >
          <option value="">Search brands...</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        <label className="text-xs uppercase tracking-widest text-gray-500 mb-1 block">Model</label>
        <select
          value={formData.clubModel}
          onChange={(e) => setFormData({ ...formData, clubModel: e.target.value })}
          disabled={!formData.clubBrand}
          className="w-full chamfer border-2 border-gray-200 px-4 py-3 text-base focus:border-[#226D50] focus:outline-none transition-colors duration-150 mb-8 bg-white appearance-none cursor-pointer disabled:opacity-50"
        >
          <option value="">Select model...</option>
          {formData.clubBrand &&
            models[formData.clubBrand]?.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
        </select>

        <button
          onClick={onContinue}
          className="w-full chamfer bg-[#226D50] text-white py-3 text-sm font-medium uppercase tracking-wider hover:-translate-y-[2px] hover:shadow-lg transition-all duration-200"
        >
          Add Club & Continue →
        </button>
      </div>
    </div>
  )
}

// Step 5: Find Caddie
function CaddieStep({
  formData,
  setFormData,
  onContinue,
  onSkip,
}: {
  formData: any
  setFormData: any
  onContinue: () => void
  onSkip: () => void
}) {
  return (
    <div className="animate-slideIn">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs uppercase tracking-widest text-gray-500">Step 5 of 5</span>
        <button onClick={onSkip} className="text-gray-500 text-sm hover:underline">
          Skip
        </button>
      </div>
      <div className="border-t border-gray-200 mb-8" />

      <h2 className="font-serif text-2xl tracking-wider text-black text-center mb-3">FIND YOUR CADDIE</h2>
      <p className="text-gray-500 text-center mb-8 max-w-[400px] mx-auto">
        A caddie is your go-to instructor who knows your game and helps you reach your goals.
      </p>

      <p className="text-xs uppercase tracking-widest text-gray-500 text-center mb-4">Recommended for you:</p>

      {/* Instructor card */}
      <div className="chamfer bg-white border-2 border-gray-200 p-6 mb-6 max-w-[500px] mx-auto">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
            <span className="text-3xl">🏌️</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-serif text-xl tracking-wider text-black">RILEY BUNKER</h3>
              <span className="chamfer-sm bg-[#226D50] text-white text-[10px] px-2 py-1 uppercase tracking-wider">
                Founding Pro
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-1">PGA Professional</p>
            <div className="flex items-center gap-2 text-sm mb-2">
              <Star className="h-4 w-4 fill-[#226D50] text-[#226D50]" />
              <span className="text-black font-medium">5.0</span>
              <span className="text-gray-400">(250)</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500">American Fork, UT</span>
            </div>
            <p className="text-sm text-gray-500 mb-1">
              <span className="text-gray-400">Specializes in:</span> Short Game, Mental Coaching
            </p>
            <p className="text-sm font-semibold text-black">$90/hour</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => {
              setFormData({ ...formData, selectedCaddie: true })
              onContinue()
            }}
            className="flex-1 chamfer bg-[#226D50] text-white py-2.5 text-sm font-medium uppercase tracking-wider hover:-translate-y-[2px] hover:shadow-lg transition-all duration-200"
          >
            Choose as My Caddie
          </button>
          <button className="chamfer border-2 border-[#226D50] text-[#226D50] px-4 py-2.5 text-sm font-medium uppercase tracking-wider hover:bg-[#226D50]/5 transition-all duration-150">
            View Profile
          </button>
        </div>
      </div>

      <div className="text-center">
        <button onClick={onContinue} className="text-[#226D50] text-sm font-medium hover:underline">
          Browse More Pros →
        </button>
      </div>
    </div>
  )
}

// Complete screen
function CompleteStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="text-center animate-fadeIn">
      <div className="text-6xl mb-8">🎉</div>
      <h1 className="font-serif text-4xl tracking-wider text-black mb-4">YOU'RE ALL SET!</h1>
      <p className="text-gray-500 mb-10">Welcome to the CaddyMe community.</p>

      {/* Tour Card Preview */}
      <div className="w-[320px] mx-auto mb-8 chamfer overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
        <div className="bg-[#226D50] h-[72px] relative">
          <span className="absolute top-3 left-3 chamfer-sm bg-[#a29e7b] text-black text-[10px] px-2 py-1 uppercase tracking-wider font-semibold">
            Founding Member
          </span>
        </div>
        <div className="bg-white p-6 pt-10 relative">
          <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-[72px] h-[72px] rounded-full bg-white border-[3px] border-white shadow-lg flex items-center justify-center text-2xl font-semibold text-[#226D50] overflow-hidden">
            <img
              src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaaBIG.JPG"
              alt="Blake A."
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none"
              }}
            />
            <span className="absolute">BA</span>
          </div>
          <h3 className="font-serif text-2xl tracking-wider text-black text-center mt-2">BLAKE A.</h3>
          <p className="text-sm text-gray-500 text-center mb-4">Level 1 • Rookie</p>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Handicap: 15.2</span>
            <span className="text-gray-500">Goal: 10.0</span>
          </div>
          <div className="h-1.5 bg-gray-200 rounded-full mb-1">
            <div className="h-full w-0 bg-[#226D50] rounded-full" />
          </div>
          <p className="text-xs text-gray-400 text-center">0 XP</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 text-[#226D50] font-medium mb-10">
        <span>🎁</span>
        <span>+100 XP for completing your profile!</span>
      </div>

      <button
        onClick={onComplete}
        className="chamfer bg-[#226D50] text-white px-12 py-4 text-sm font-medium uppercase tracking-wider hover:-translate-y-[2px] hover:shadow-lg transition-all duration-200"
      >
        Go to My Dashboard →
      </button>
    </div>
  )
}
