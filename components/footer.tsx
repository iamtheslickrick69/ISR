"use client"

import { Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative text-white pt-[60px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/a1microgriddark.mp4" type="video/mp4" />
      </video>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Section 1: Logo */}
        <div className="flex justify-center items-center mb-10">
          {/* CaddyMe Logo */}
          <img
            src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/logocaddybaby.png"
            alt="CaddyMe"
            className="h-[60px] w-auto"
          />
        </div>

        {/* Section 2: Nav Links */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
          <a href="#" className="text-white/70 text-sm font-sans hover:text-white transition-colors duration-200">
            Find a Pro
          </a>
          <span className="text-white/30 text-sm">·</span>
          <a href="#" className="text-white/70 text-sm font-sans hover:text-white transition-colors duration-200">
            Become Instructor
          </a>
          <span className="text-white/30 text-sm">·</span>
          <a href="#" className="text-white/70 text-sm font-sans hover:text-white transition-colors duration-200">
            About
          </a>
          <span className="text-white/30 text-sm">·</span>
          <a href="#" className="text-white/70 text-sm font-sans hover:text-white transition-colors duration-200">
            Contact
          </a>
        </div>

        {/* Section 3: Social Icons */}
        <div className="flex justify-center gap-5 mb-10">
          <a
            href="#"
            aria-label="Twitter"
            className="w-10 h-10 flex items-center justify-center border border-white/30 text-white/70 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200"
            style={{
              clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
            }}
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="w-10 h-10 flex items-center justify-center border border-white/30 text-white/70 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200"
            style={{
              clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
            }}
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-10 h-10 flex items-center justify-center border border-white/30 text-white/70 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200"
            style={{
              clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
            }}
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Section 4: Divider */}
        <div className="border-t border-white/20 w-full max-w-[800px] mx-auto" />

        {/* Section 5: Bottom Bar */}
        <div className="w-full max-w-[800px] mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          {/* Copyright */}
          <span className="text-white/50 text-[13px] font-sans">© 2025 CaddyMe, Inc.</span>

          {/* Legal Links */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="text-white/50 text-[13px] font-sans hover:text-white transition-colors duration-200"
            >
              Privacy
            </a>
            <span className="text-white/30">·</span>
            <a
              href="#"
              className="text-white/50 text-[13px] font-sans hover:text-white transition-colors duration-200"
            >
              Terms
            </a>
            <span className="text-white/30">·</span>
            <a
              href="#"
              className="text-white/50 text-[13px] font-sans hover:text-white transition-colors duration-200"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
