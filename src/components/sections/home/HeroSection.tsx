"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection({ onPlanTrip }: { onPlanTrip: () => void }) {
  const [search, setSearch] = useState("");

  const categories = [
    { label: "Beaches", emoji: "🏖️", img: "https://images.unsplash.com/photo-1587922546307-776227941871?w=400&q=75", href: "/blog?filter=beach" },
    { label: "Mountains", emoji: "🏔️", img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=400&q=75", href: "/blog?filter=mountains" },
    { label: "Heritage", emoji: "🏰", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&q=75", href: "/blog?filter=heritage" },
    { label: "Wildlife", emoji: "🐅", img: "https://images.unsplash.com/photo-1615474286632-e31ac3633d58?w=400&q=75", href: "/blog?filter=wildlife" },
    { label: "Hill Stations", emoji: "🌿", img: "https://images.unsplash.com/photo-1742107939655-4f8af7484dfa?w=400&q=75", href: "/blog?filter=hillstation" },
    { label: "Spiritual", emoji: "🕯️", img: "https://images.unsplash.com/photo-1561304381-70c65d96a3de?w=400&q=75", href: "/blog?filter=spiritual" },
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 will-change-transform animate-zoom-bg -z-10">
        <Image
          src="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1920&q=85"
          alt="India landscape"
          fill priority className="object-cover" sizes="100vw"
        />
      </div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,6,2,0.70) 0%, rgba(10,6,2,0.45) 40%, rgba(10,6,2,0.50) 60%, rgba(10,6,2,0.90) 100%)" }} />

      <div className="relative z-10 max-w-[900px] px-6 pt-28 pb-16 mx-auto w-full">

        {/* Headline */}
        <h1 className="font-serif text-[clamp(2.4rem,6vw,4.5rem)] font-light text-white leading-[1.08] mb-4" style={{ animation: "fadeUp .8s .15s both" }}>
          Where in India<br />
          <em className="italic text-gold-light">are you going?</em>
        </h1>

        <p className="text-base text-white/65 font-light max-w-md mx-auto mb-8" style={{ animation: "fadeUp .8s .3s both" }}>
          59 free day-by-day itineraries. Real prices. Local tips.
        </p>

        {/* Search bar — TripAdvisor style */}
        <div className="max-w-lg mx-auto mb-10" style={{ animation: "fadeUp .8s .45s both" }}>
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search any Indian destination..."
              className="w-full px-6 py-4.5 pl-14 rounded-full bg-white/95 backdrop-blur-md text-ink text-base font-light outline-none shadow-[0_8px_32px_rgba(0,0,0,0.3)] focus:ring-2 focus:ring-gold placeholder:text-muted/60"
              onKeyDown={(e) => {
                if (e.key === "Enter" && search.trim()) {
                  window.location.href = `/blog?q=${encodeURIComponent(search.trim())}`;
                }
              }}
            />
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 text-muted/50" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            <button
              onClick={() => {
                if (search.trim()) window.location.href = `/blog?q=${encodeURIComponent(search.trim())}`;
                else onPlanTrip();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gold text-ink px-6 py-2.5 rounded-full text-sm font-medium tracking-wide hover:bg-gold-dark hover:text-white transition-all"
            >
              {search.trim() ? "Search" : "Plan Trip"}
            </button>
          </div>
        </div>

        {/* Visual category tiles — Tripoto/TripAdvisor style */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-[720px] mx-auto mb-10" style={{ animation: "fadeUp .8s .6s both" }}>
          {categories.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              className="group relative rounded-xl overflow-hidden aspect-[4/5] border border-white/15 hover:border-gold hover:scale-[1.03] transition-all duration-200"
            >
              <Image src={c.img} alt={c.label} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="120px" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2.5 text-center">
                <p className="text-white text-xs font-medium tracking-wide uppercase">{c.label}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-3 justify-center flex-wrap" style={{ animation: "fadeUp .8s .75s both" }}>
          <button onClick={onPlanTrip} className="btn-gold text-sm px-8 py-3.5 shadow-[0_8px_32px_rgba(201,169,110,0.4)]">
            Get Free Custom Plan &rarr;
          </button>
          <Link href="/blog" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 text-white text-[0.78rem] font-light tracking-[0.08em] uppercase rounded-[1px] hover:border-gold hover:bg-white/5 transition-all backdrop-blur-sm">
            Browse All 59 Guides
          </Link>
        </div>

        <p className="text-[0.62rem] text-white/30 mt-5 font-light tracking-wide" style={{ animation: "fadeUp .8s .9s both" }}>
          500+ trips planned &middot; 24hr reply &middot; Completely free
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ animation: "fadeUp .8s 1.1s both" }}>
        <span className="text-[0.55rem] tracking-[0.22em] uppercase text-white/25">Scroll</span>
        <div className="w-px h-7 bg-gold/30 animate-scroll-pulse origin-top" />
      </div>
    </section>
  );
}
