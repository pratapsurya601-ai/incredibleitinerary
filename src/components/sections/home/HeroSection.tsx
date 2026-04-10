"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GUIDES_DISPLAY, PDF_DISPLAY, HAND_WRITTEN_COUNT } from "@/lib/siteStats";

export default function HeroSection({ onPlanTrip }: { onPlanTrip: () => void }) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const categories = [
    { label: "India",  img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=75", href: "/blog?filter=all" },
    { label: "Bali",   img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=75", href: "/blog/bali-5-days" },
    { label: "Japan",  img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=75", href: "/blog/tokyo-5-days" },
    { label: "Dubai",  img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=75", href: "/blog/dubai-4-days" },
    { label: "Italy",  img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=75", href: "/blog?filter=italy" },
    { label: "Spain",  img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&q=75", href: "/blog?filter=spain" },
  ];

  return (
    <section className="relative min-h-[85vh] md:min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/surya/blog-gangotri-valley.jpg"
          alt="Gangotri Valley, Uttarakhand — IncredibleItinerary"
          fill priority unoptimized
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      {/* Overlay — slightly darkened for better text contrast */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(10,6,2,0.62) 0%, rgba(10,6,2,0.48) 35%, rgba(10,6,2,0.52) 60%, rgba(10,6,2,0.90) 100%)" }}
      />

      <div className="relative z-10 max-w-[820px] px-6 pt-24 pb-10 md:pt-28 md:pb-12 mx-auto w-full">

        {/* Headline — reduced ~30% from original */}
        <h1
          className="font-serif text-[clamp(2rem,4vw,4rem)] font-light text-white leading-[1.08] mb-4"
          style={{ animation: "fadeUp .8s .15s both" }}
        >
          The world, planned properly.<br />
          <em className="italic text-gold-light">By someone who&apos;s actually been.</em>
        </h1>

        {/* Tagline — fully visible above fold */}
        <p
          className="text-base md:text-lg text-white/65 font-light max-w-lg mx-auto mb-6 leading-relaxed"
          style={{ animation: "fadeUp .8s .3s both" }}
        >
          {GUIDES_DISPLAY} guides written from real trips. Honest prices. No sponsored picks.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 mb-7"
          style={{ animation: "fadeUp .8s .4s both" }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-gold text-ink px-6 py-3 rounded-sm text-sm font-medium tracking-wide hover:bg-gold-dark hover:text-white transition-all duration-200 shadow-md"
          >
            Browse {HAND_WRITTEN_COUNT}+ Guides →
          </Link>
          <Link
            href="/contact"
            className="text-white/70 text-sm font-light hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white/70"
          >
            Or plan a custom trip
          </Link>
        </div>

        {/* Search bar */}
        <div className="max-w-xl mx-auto mb-8" style={{ animation: "fadeUp .8s .5s both" }}>
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search any destination — Kashmir, Rajasthan, Kerala, Goa..."
              className="w-full py-4 pl-12 pr-24 md:pr-32 rounded-full bg-white text-ink text-sm outline-none shadow-[0_8px_32px_rgba(0,0,0,0.30)] focus:ring-2 focus:ring-gold placeholder:text-muted/50 font-light"
              onKeyDown={(e) => {
                if (e.key === "Enter" && search.trim()) {
                  window.location.href = `/blog?q=${encodeURIComponent(search.trim())}`;
                }
              }}
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/40" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            <button
              onClick={() => {
                if (search.trim()) window.location.href = `/blog?q=${encodeURIComponent(search.trim())}`;
                else router.push("/quiz");
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gold text-ink px-4 md:px-6 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-gold-dark hover:text-white transition-all shadow-sm whitespace-nowrap"
            >
              {search.trim() ? "Search" : "Plan Trip"}
            </button>
          </div>
        </div>

        {/* Category tiles */}
        <div
          className="grid grid-cols-3 md:grid-cols-6 gap-2.5 md:gap-3 max-w-[720px] mx-auto"
          style={{ animation: "fadeUp .8s .65s both" }}
        >
          {categories.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              className="group relative rounded-xl overflow-hidden aspect-square border border-white/10 hover:border-gold transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
            >
              <Image src={c.img} alt={c.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="120px" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
                <p className="text-white text-[0.65rem] font-medium tracking-[0.08em] uppercase drop-shadow-lg">{c.label}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Minimal stat line */}
        <p
          className="text-[0.7rem] text-white/45 font-light tracking-[0.1em] mt-7"
          style={{ animation: "fadeUp .8s .8s both" }}
        >
          {GUIDES_DISPLAY} FREE GUIDES &nbsp;&middot;&nbsp; {PDF_DISPLAY} PDF DOWNLOADS &nbsp;&middot;&nbsp; REAL TRIPS &nbsp;&middot;&nbsp; 24HR REPLY
        </p>
      </div>
    </section>
  );
}
