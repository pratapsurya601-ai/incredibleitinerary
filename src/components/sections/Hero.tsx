"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface HeroProps {
  onPlanTrip: () => void;
}

const TRIP_STYLES = [
  { id: "budget",  emoji: "💰", label: "Budget",   sub: "Under ₹20k",   href: "/blog/goa-3-days" },
  { id: "couple",  emoji: "💑", label: "Couple",   sub: "Romantic",     href: "/blog/kashmir-6-days" },
  { id: "family",  emoji: "👨‍👩‍👧", label: "Family",  sub: "All ages",     href: "/blog/golden-triangle-7-days" },
  { id: "adventure",emoji:"🏔️", label: "Adventure",sub: "Off the path", href: "/blog/andaman-5-days" },
];

export default function Hero({ onPlanTrip }: HeroProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 animate-zoom-bg will-change-transform"
        style={{
          background: `
            linear-gradient(to bottom, rgba(12,8,4,0.55) 0%, rgba(12,8,4,0.15) 40%, rgba(12,8,4,0.82) 100%),
            url('https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1920&q=85') center/cover no-repeat
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[860px] px-6 md:px-8 pt-24 pb-12">

        {/* Differentiation badge */}
        <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-6" style={{ animation: "fadeUp 0.7s 0.1s both" }}>
          <span className="text-gold text-xs">✦</span>
          <span className="text-[0.68rem] tracking-[0.18em] uppercase text-gold-light font-medium">Built for Indian Travellers · 100% Free Planning</span>
        </div>

        {/* Main headline */}
        <h1
          className="font-serif text-[clamp(2.8rem,7vw,5.5rem)] font-light text-white leading-[1.06] mb-5"
          style={{ animation: "fadeUp 0.8s 0.2s both" }}
        >
          Skip Tourist Traps.<br />
          <em className="italic text-gold-light">Travel Like a Local.</em>
        </h1>

        {/* Subline with savings hook */}
        <p
          className="text-base text-white/85 font-light max-w-[520px] mx-auto mb-4 leading-relaxed"
          style={{ animation: "fadeUp 0.8s 0.35s both" }}
        >
          Handcrafted India itineraries that save you <strong className="text-gold-light font-medium">₹3,000–₹5,000 per trip</strong> — real budgets, hidden gems, zero tourist traps.
        </p>

        {/* Proof line */}
        <p
          className="text-[0.72rem] text-white/50 tracking-[0.1em] uppercase mb-10"
          style={{ animation: "fadeUp 0.8s 0.45s both" }}
        >
          500+ trips planned · Goa · Rajasthan · Kashmir · Andaman · More
        </p>

        {/* Decision UI — Pick your style */}
        <div style={{ animation: "fadeUp 0.8s 0.55s both" }}>
          <p className="text-[0.68rem] tracking-[0.2em] uppercase text-white/50 mb-3">
            🧭 Choose your trip style to get started
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-8">
            {TRIP_STYLES.map((style) => (
              <button
                key={style.id}
                onMouseEnter={() => setHovered(style.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => router.push(style.href)}
                className={`group relative flex flex-col items-center gap-1.5 px-4 py-4 rounded-xl border transition-all duration-200 ${
                  hovered === style.id
                    ? "bg-gold border-gold text-ink scale-105 shadow-lg"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/15 hover:border-white/40 backdrop-blur-sm"
                }`}
              >
                <span className="text-2xl">{style.emoji}</span>
                <span className="font-medium text-sm">{style.label}</span>
                <span className={`text-[0.65rem] ${hovered === style.id ? "text-ink/70" : "text-white/50"}`}>{style.sub}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div
          className="flex gap-3.5 justify-center flex-wrap"
          style={{ animation: "fadeUp 0.8s 0.65s both" }}
        >
          <button onClick={onPlanTrip} className="btn-gold text-base px-8 py-4">
            Plan My Trip Free →
          </button>
          <a href="/quiz" className="btn-outline-white">
            Take the Quiz ✦
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: "fadeUp 0.8s 0.9s both" }}
      >
        <span className="text-[0.62rem] tracking-[0.2em] uppercase text-white/40">Scroll</span>
        <div className="w-px h-9 bg-gold opacity-50 animate-scroll-pulse origin-top" />
      </div>
    </section>
  );
}
