"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type TripStyle = "budget" | "couple" | "party" | "relax";

const STYLES: { id: TripStyle; emoji: string; label: string; sub: string; href: string }[] = [
  { id: "budget", emoji: "💰", label: "Budget Trip",  sub: "Under ₹20k",    href: "/blog/goa-3-days" },
  { id: "couple", emoji: "💑", label: "Couple Trip",  sub: "Romantic",      href: "/blog/kashmir-6-days" },
  { id: "party",  emoji: "🎉", label: "Friends Trip", sub: "Group fun",     href: "/blog/goa-3-days" },
  { id: "relax",  emoji: "😌", label: "Relaxed Trip", sub: "Slow & peaceful",href: "/blog/kerala-5-days" },
];

export default function HeroSection({ onPlanTrip }: { onPlanTrip: () => void }) {
  const [hovered, setHovered] = useState<TripStyle | null>(null);
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Base dark layer — ensures text always readable */}
      <div className="absolute inset-0 bg-ink/55" />
      {/* Background image */}
      <div className="absolute inset-0 will-change-transform animate-zoom-bg -z-10">
        <Image
          src="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1920&q=85"
          alt="Scenic India landscape — mountains and valleys"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {/* Gradient overlay — strong top and bottom, consistent middle */}
      <div className="absolute inset-0"
        style={{ background: `linear-gradient(to bottom, rgba(10,6,2,0.75) 0%, rgba(10,6,2,0.50) 35%, rgba(10,6,2,0.55) 65%, rgba(10,6,2,0.92) 100%)` }} />

      <div className="relative z-10 max-w-[840px] px-6 pt-28 pb-16 mx-auto w-full">

        {/* Hook badge — the pattern interrupt */}
        <div className="inline-flex items-center gap-2.5 bg-red-500/20 backdrop-blur-sm border border-red-400/40 rounded-full px-4 py-2 mb-7" style={{ animation: "fadeUp .7s .1s both" }}>
          <span className="text-red-400 text-base leading-none">⚠</span>
          <span className="text-[0.7rem] tracking-[0.12em] uppercase text-red-200 font-medium">Most Indian travellers overpay by ₹3,000–₹5,000 per trip</span>
        </div>

        {/* Headline — problem → solution */}
        <h1 className="font-serif text-[clamp(2.8rem,7vw,5.6rem)] font-light text-white leading-[1.05] mb-5" style={{ animation: "fadeUp .8s .2s both" }}>
          Stop Using Generic<br />
          <em className="italic text-gold-light">Itineraries. Start Saving.</em>
        </h1>

        {/* Subline — specific, visceral */}
        <p className="text-[1.05rem] text-white/80 font-light max-w-[520px] mx-auto mb-2 leading-relaxed" style={{ animation: "fadeUp .8s .32s both" }}>
          Free, handcrafted India itineraries that tell you <strong className="text-white font-medium">exactly</strong> where you&apos;re being overcharged — and the better, cheaper alternatives locals actually use.
        </p>
        <p className="text-sm text-gold-light/80 font-light mb-2" style={{ animation: "fadeUp .8s .38s both" }}>
          Built for Indian travellers · 500+ trips planned · 24hr reply
        </p>
        {/* Credibility line */}
        <p className="text-[0.75rem] text-white/55 font-light mb-3" style={{ animation: "fadeUp .8s .41s both" }}>
          Free to plan. No obligation. Just great trips.
        </p>
        <p className="text-[0.68rem] text-white/35 tracking-[0.14em] uppercase mb-10" style={{ animation: "fadeUp .8s .44s both" }}>
          Goa · Rajasthan · Kashmir · Kerala · Andaman · Varanasi · Golden Triangle
        </p>

        {/* Trip style selector */}
        <div style={{ animation: "fadeUp .8s .52s both" }}>
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-white/40 mb-3">🧭 What kind of trip are you planning?</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 max-w-[640px] mx-auto mb-8">
            {STYLES.map((s) => (
              <Link key={s.id} href={s.href}
                onMouseEnter={() => setHovered(s.id)} onMouseLeave={() => setHovered(null)}
                className={`flex flex-col items-center gap-1.5 py-4 px-3 rounded-xl border-2 transition-all duration-200 backdrop-blur-sm ${
                  hovered === s.id ? "bg-gold border-gold text-ink scale-[1.04] shadow-xl" : "bg-white/10 border-white/20 text-white hover:bg-white/15"
                }`}>
                <span className="text-2xl">{s.emoji}</span>
                <span className="font-medium text-sm">{s.label}</span>
                <span className={`text-[0.62rem] ${hovered === s.id ? "text-ink/60" : "text-white/50"}`}>{s.sub}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-3 justify-center flex-wrap" style={{ animation: "fadeUp .8s .62s both" }}>
          <button onClick={onPlanTrip} className="btn-gold text-[0.85rem] px-9 py-4 shadow-[0_8px_32px_rgba(201,169,110,0.4)]">
            Fix My Itinerary — Free →
          </button>
          <Link href="/quiz" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
            Where Should I Go? ✦
          </Link>
        </div>

        {/* Micro proof */}
        <p className="text-[0.62rem] text-white/30 mt-5 font-light" style={{ animation: "fadeUp .8s .72s both" }}>
          No account · No credit card · Priya saved ₹4,200 on her Rajasthan trip last month
        </p>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ animation: "fadeUp .8s 1s both" }}>
        <span className="text-[0.58rem] tracking-[0.22em] uppercase text-white/30">Scroll</span>
        <div className="w-px h-8 bg-gold/40 animate-scroll-pulse origin-top" />
      </div>
    </section>
  );
}
