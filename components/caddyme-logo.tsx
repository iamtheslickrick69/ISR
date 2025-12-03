export function CaddyMeLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 40 40" fill="currentColor" className="h-full w-auto">
        <circle cx="20" cy="8" r="4" />
        <path d="M12 38 L16 18 L20 12 L24 18 L28 38" strokeWidth="2" stroke="currentColor" fill="none" />
        <line x1="14" y1="28" x2="26" y2="28" strokeWidth="2" stroke="currentColor" />
        <line x1="28" y1="38" x2="34" y2="20" strokeWidth="2" stroke="currentColor" />
        <circle cx="35" cy="18" r="2" />
      </svg>
      <span className="font-serif text-2xl tracking-wider">CADDYME</span>
    </div>
  )
}
