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

      <div className="relative z-10 max-w-[840px] px-6 pt-32 pb-20 mx-auto w-full">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/15 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-8" style={{ animation: "fadeUp .7s .1s both" }}>
          <span className="text-[0.7rem] tracking-[0.12em] uppercase text-gold font-medium">59 Free India Travel Guides</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[clamp(2.6rem,6.5vw,5rem)] font-light text-white leading-[1.08] mb-6" style={{ animation: "fadeUp .8s .2s both" }}>
          Plan India Like<br />
          <em className="italic text-gold-light">a Local. Save Thousands.</em>
        </h1>

        {/* One clear subline */}
        <p className="text-lg text-white/75 font-light max-w-[540px] mx-auto mb-10 leading-relaxed" style={{ animation: "fadeUp .8s .35s both" }}>
          Day-by-day itineraries with real prices, local tips, and the tourist traps to avoid. Personalised for your dates and budget.
        </p>

        {/* Trip style cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[640px] mx-auto mb-10" style={{ animation: "fadeUp .8s .5s both" }}>
          {STYLES.map((s) => (
            <Link key={s.id} href={s.href}
              onMouseEnter={() => setHovered(s.id)} onMouseLeave={() => setHovered(null)}
              className={`flex flex-col items-center gap-1.5 py-4 px-3 rounded-xl border transition-all duration-200 backdrop-blur-sm ${
                hovered === s.id ? "bg-gold border-gold text-ink scale-[1.03] shadow-xl" : "bg-white/8 border-white/15 text-white hover:bg-white/12 hover:border-white/25"
              }`}>
              <span className="text-2xl">{s.emoji}</span>
              <span className="font-medium text-sm">{s.label}</span>
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-3 justify-center flex-wrap" style={{ animation: "fadeUp .8s .65s both" }}>
          <button onClick={onPlanTrip} className="btn-gold text-[0.85rem] px-9 py-4 shadow-[0_8px_32px_rgba(201,169,110,0.4)]">
            Plan My Trip &rarr;
          </button>
          <Link href="/blog" className="inline-flex items-center gap-2 px-8 py-4 border border-white/25 text-white text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
            Browse 59 Guides
          </Link>
        </div>

        {/* One trust line */}
        <p className="text-[0.65rem] text-white/35 mt-6 font-light tracking-wide" style={{ animation: "fadeUp .8s .8s both" }}>
          500+ trips planned &middot; 24hr reply &middot; Completely free
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
