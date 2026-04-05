"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";

export default function HeroSection({ onPlanTrip }: { onPlanTrip: () => void }) {
  const [search, setSearch] = useState("");

  const categories = [
    { label: "India", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=75", href: "/blog?filter=all" },
    { label: "Bali", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=75", href: "/blog/bali-5-days" },
    { label: "Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=75", href: "/blog?filter=japan" },
    { label: "Dubai", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=75", href: "/blog/dubai-4-days" },
    { label: "Italy", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=75", href: "/blog?filter=italy" },
    { label: "Spain", img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&q=75", href: "/blog?filter=spain" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background image — static, no zoom animation (removes non-composited animation + 122ms forced reflow) */}
      <div className="absolute inset-0 -z-10">
        <Image src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1080&q=60" alt="World travel destinations" fill priority quality={55} className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1080px) 100vw, 100vw" />
      </div>
      {/* Overlay — lighter than before for more photo visibility */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,6,2,0.55) 0%, rgba(10,6,2,0.35) 35%, rgba(10,6,2,0.40) 60%, rgba(10,6,2,0.85) 100%)" }} />

      <div className="relative z-10 max-w-[860px] px-6 pt-36 pb-20 mx-auto w-full">

        {/* Headline — large, cinematic */}
        <h1 className="font-serif text-[clamp(3rem,7vw,5.5rem)] font-light text-white leading-[1.05] mb-5" style={{ animation: "fadeUp .8s .15s both" }}>
          Travel Smarter.<br />
          <em className="italic text-gold-light">Skip the Tourist Traps.</em>
        </h1>

        <p className="text-lg text-white/60 font-light max-w-lg mx-auto mb-10 leading-relaxed" style={{ animation: "fadeUp .8s .3s both" }}>
          {blogPosts.length} free travel guides across 50+ countries. Real prices. Local tips.
        </p>

        {/* Search bar — large, prominent */}
        <div className="max-w-xl mx-auto mb-14" style={{ animation: "fadeUp .8s .45s both" }}>
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search any destination — India, Bali, Japan, Dubai, Italy, Spain..."
              className="w-full px-7 py-5 pl-14 pr-36 rounded-full bg-white text-ink text-base outline-none shadow-[0_12px_48px_rgba(0,0,0,0.35)] focus:ring-2 focus:ring-gold placeholder:text-muted/50 font-light"
              onKeyDown={(e) => {
                if (e.key === "Enter" && search.trim()) {
                  window.location.href = `/blog?q=${encodeURIComponent(search.trim())}`;
                }
              }}
            />
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 text-muted/40" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            <button
              onClick={() => {
                if (search.trim()) window.location.href = `/blog?q=${encodeURIComponent(search.trim())}`;
                else onPlanTrip();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gold text-ink px-7 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-gold-dark hover:text-white transition-all shadow-sm"
            >
              {search.trim() ? "Search" : "Plan Trip"}
            </button>
          </div>
        </div>

        {/* Category tiles — larger, more visual */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 max-w-[760px] mx-auto" style={{ animation: "fadeUp .8s .6s both" }}>
          {categories.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              className="group relative rounded-2xl overflow-hidden aspect-square border-2 border-white/10 hover:border-gold transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            >
              <Image src={c.img} alt={c.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="130px" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                <p className="text-white text-[0.7rem] font-medium tracking-[0.08em] uppercase drop-shadow-lg">{c.label}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Minimal trust line */}
        <p className="text-xs text-white/55 font-light tracking-[0.1em] mt-10" style={{ animation: "fadeUp .8s .8s both" }}>
          {blogPosts.length} FREE GUIDES &nbsp;&middot;&nbsp; 50+ COUNTRIES &nbsp;&middot;&nbsp; 24HR REPLY
        </p>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40" style={{ animation: "fadeUp .8s 1.2s both" }}>
        <div className="w-px h-8 bg-white/30 animate-scroll-pulse origin-top" />
      </div>
    </section>
  );
}
