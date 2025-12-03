import { Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#F8F8F8] text-[#111111] pt-[60px]">
      <div className="flex flex-col items-center">
        {/* Section 1: Logos Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-10">
          {/* CaddyMe Logo */}
          <div
            className="inline-block"
            style={{
              clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
            }}
          >
            <img
              src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/logocaddybaby.png"
              alt="CaddyMe"
              className="h-10 w-auto"
            />
          </div>
          {/* Academy Logo with chamfered container */}
          <div
            className="inline-block"
            style={{
              clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
            }}
          >
            <img
              src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/aaablack1.png"
              alt="CaddyMe Academy"
              className="h-10 w-auto"
            />
          </div>
        </div>

        {/* Section 2: Nav Links */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
          <a href="#" className="text-[#555555] text-sm font-sans hover:text-[#111111] transition-colors duration-200">
            Find a Pro
          </a>
          <span className="text-[#CCCCCC] text-sm">·</span>
          <a href="#" className="text-[#555555] text-sm font-sans hover:text-[#111111] transition-colors duration-200">
            Become Instructor
          </a>
          <span className="text-[#CCCCCC] text-sm">·</span>
          <a href="#" className="text-[#555555] text-sm font-sans hover:text-[#111111] transition-colors duration-200">
            About
          </a>
          <span className="text-[#CCCCCC] text-sm">·</span>
          <a href="#" className="text-[#555555] text-sm font-sans hover:text-[#111111] transition-colors duration-200">
            Contact
          </a>
        </div>

        {/* Section 3: Social Icons */}
        <div className="flex justify-center gap-5 mb-10">
          <a
            href="#"
            aria-label="Twitter"
            className="w-10 h-10 flex items-center justify-center border border-[#DDDDDD] text-[#888888] hover:border-[#a29e7b] hover:text-[#a29e7b] transition-all duration-200"
            style={{
              clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
            }}
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="w-10 h-10 flex items-center justify-center border border-[#DDDDDD] text-[#888888] hover:border-[#a29e7b] hover:text-[#a29e7b] transition-all duration-200"
            style={{
              clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
            }}
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-10 h-10 flex items-center justify-center border border-[#DDDDDD] text-[#888888] hover:border-[#a29e7b] hover:text-[#a29e7b] transition-all duration-200"
            style={{
              clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
            }}
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Section 4: Divider */}
        <div className="border-t border-[#E5E5E5] w-full max-w-[800px] mx-auto" />

        {/* Section 5: Bottom Bar */}
        <div className="w-full max-w-[800px] mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          {/* Copyright */}
          <span className="text-[#777777] text-[13px] font-sans">© 2025 CaddyMe, Inc.</span>

          {/* Legal Links */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="text-[#777777] text-[13px] font-sans hover:text-[#111111] transition-colors duration-200"
            >
              Privacy
            </a>
            <span className="text-[#CCCCCC]">·</span>
            <a
              href="#"
              className="text-[#777777] text-[13px] font-sans hover:text-[#111111] transition-colors duration-200"
            >
              Terms
            </a>
            <span className="text-[#CCCCCC]">·</span>
            <a
              href="#"
              className="text-[#777777] text-[13px] font-sans hover:text-[#111111] transition-colors duration-200"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
