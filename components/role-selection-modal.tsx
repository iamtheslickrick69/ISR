"use client"

import { useState } from "react"
import { X, User, GraduationCap } from "lucide-react"
import { useRouter } from "next/navigation"

interface RoleSelectionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function RoleSelectionModal({ isOpen, onClose }: RoleSelectionModalProps) {
  const router = useRouter()
  const [hoveredRole, setHoveredRole] = useState<"golfer" | "instructor" | null>(null)

  if (!isOpen) return null

  const handleRoleSelect = (role: "golfer" | "instructor") => {
    onClose()
    if (role === "golfer") {
      router.push("/dashboard/player")
    } else {
      router.push("/dashboard/pro")
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn" onClick={onClose}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Modal */}
      <div
        className="relative bg-white chamfer-lg w-full max-w-[500px] p-12 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors duration-150"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex justify-center mb-8">
          <img
            src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/logocaddybaby.png"
            alt="CaddyMe"
            className="h-12"
          />
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl tracking-wider text-center text-black mb-3">WELCOME TO CADDYME</h2>
        <p className="text-gray-500 text-center mb-10">How do you want to use CaddyMe?</p>

        <div className="flex gap-6 justify-center mb-10">
          {/* Golfer Button - Green */}
          <button
            onClick={() => handleRoleSelect("golfer")}
            onMouseEnter={() => setHoveredRole("golfer")}
            onMouseLeave={() => setHoveredRole(null)}
            className={`rounded-xl w-[200px] h-[180px] p-6 flex flex-col items-center justify-center text-center transition-all duration-200 ease-out-expo ${
              hoveredRole === "golfer"
                ? "bg-[#2a7d5c] -translate-y-1 shadow-[0_12px_28px_rgba(34,109,80,0.4)]"
                : "bg-[#226D50] shadow-[0_6px_20px_rgba(34,109,80,0.25)]"
            }`}
          >
            <User className="h-12 w-12 text-white mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-lg tracking-wider text-white font-bold mb-2">I'M A GOLFER</h3>
            <p className="text-white/80 text-sm leading-relaxed">Find pros, track progress, improve your game</p>
          </button>

          {/* Instructor Button - Gold */}
          <button
            onClick={() => handleRoleSelect("instructor")}
            onMouseEnter={() => setHoveredRole("instructor")}
            onMouseLeave={() => setHoveredRole(null)}
            className={`rounded-xl w-[200px] h-[180px] p-6 flex flex-col items-center justify-center text-center transition-all duration-200 ease-out-expo ${
              hoveredRole === "instructor"
                ? "bg-[#b3af8a] -translate-y-1 shadow-[0_12px_28px_rgba(162,158,123,0.4)]"
                : "bg-[#a29e7b] shadow-[0_6px_20px_rgba(162,158,123,0.25)]"
            }`}
          >
            <GraduationCap className="h-12 w-12 text-white mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-lg tracking-wider text-white font-bold mb-2">I'M AN INSTRUCTOR</h3>
            <p className="text-white/80 text-sm leading-relaxed">Build your brand, grow your business</p>
          </button>
        </div>

        {/* Footer link */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="#login" className="text-[#226D50] hover:underline transition-all">
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}
