"use client";
import Link from "next/link";
import DownloadButton from "@/components/pdf/DownloadButton";

const GUIDES = [
  {
    slug: "rajasthan-7-days",
    title: "Rajasthan 7 Days",
    sub: "Jaipur · Jodhpur · Jaisalmer",
    emoji: "🏰",
    pages: "11 pages",
    tag: "Available now",
    available: true,
  },
  {
    slug: "kerala-5-days",
    title: "Kerala 5 Days",
    sub: "Kochi · Munnar · Alleppey · Varkala",
    emoji: "🌊",
    pages: "10 pages",
    tag: "Available now",
    available: true,
  },
  {
    slug: "goa-5-days",
    title: "Goa 5 Days",
    sub: "North · South · Hinterland",
    emoji: "🎭",
    pages: "10 pages",
    tag: "Coming soon",
    available: false,
  },
  {
    slug: "kashmir-6-days",
    title: "Kashmir 6 Days",
    sub: "Srinagar · Gulmarg · Pahalgam",
    emoji: "🏔️",
    pages: "10 pages",
    tag: "Coming soon",
    available: false,
  },
];

export default function PdfShowcaseSection() {
  return (
    <section className="bg-parchment py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-gold-dark text-xs tracking-[0.2em] uppercase font-medium mb-3">
            Free PDF Guides
          </span>
          <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-light text-ink leading-tight mb-3">
            Take the Guide Offline
          </h2>
          <p className="text-muted text-base font-light max-w-md mx-auto leading-relaxed">
            Every itinerary available as a print-ready PDF — day plans, budgets,
            packing lists, route maps. Download 2 for free.
          </p>
        </div>

        {/* Guide cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {GUIDES.map((g) => (
            <div
              key={g.slug}
              className={`relative bg-white rounded-2xl border overflow-hidden transition-all duration-200 ${
                g.available
                  ? "border-gold/30 hover:border-gold hover:shadow-md"
                  : "border-parchment-2 opacity-70"
              }`}
            >
              {/* Tag */}
              <div className={`px-4 py-1.5 text-[0.6rem] font-semibold tracking-widest uppercase ${
                g.available ? "bg-gold text-ink" : "bg-parchment-2 text-muted"
              }`}>
                {g.tag}
              </div>

              <div className="p-5">
                <span className="text-3xl block mb-3">{g.emoji}</span>
                <p className="font-serif text-ink text-base font-light leading-tight mb-0.5">
                  {g.title}
                </p>
                <p className="text-muted text-xs mb-3">{g.sub}</p>
                <p className="text-muted/60 text-[0.65rem] mb-4">📄 {g.pages} · Print-ready A4</p>

                {g.available ? (
                  <DownloadButton
                    slug={g.slug}
                    title={g.title}
                    variant="secondary"
                    className="w-full justify-center text-xs !px-3 !py-2"
                  />
                ) : (
                  <span className="block text-center text-xs text-muted border border-parchment-2 rounded-full px-3 py-2">
                    Notify me →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-ink rounded-2xl px-7 py-5">
          <div>
            <p className="text-white font-serif text-lg font-light leading-tight mb-0.5">
              Want all 50+ guides?
            </p>
            <p className="text-white/50 text-xs font-light">
              India + International · Lifetime access · Pay once
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/unlock"
              className="bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200 whitespace-nowrap"
            >
              Unlock All — ₹499 →
            </Link>
          </div>
        </div>

        {/* Fine print */}
        <p className="text-center text-muted/50 text-xs mt-5">
          2 guides free per email · No credit card · Instant download
        </p>

      </div>
    </section>
  );
}
