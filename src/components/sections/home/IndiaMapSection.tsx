"use client";
import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

const DESTINATIONS = [
  // North
  { name: "Kashmir", href: "/blog/kashmir-6-days", x: 28, y: 8, region: "north" },
  { name: "Leh Ladakh", href: "/blog/leh-ladakh-7-days", x: 35, y: 5, region: "north" },
  { name: "Amritsar", href: "/blog/amritsar-2-days", x: 27, y: 16, region: "north" },
  { name: "Dharamshala", href: "/blog/dharamshala-3-days", x: 31, y: 17, region: "north" },
  { name: "Shimla", href: "/blog/shimla-3-days", x: 33, y: 20, region: "north" },
  { name: "Manali", href: "/blog/manali-5-days", x: 33, y: 14, region: "north" },
  { name: "Kasol", href: "/blog/kasol-3-days", x: 32, y: 16, region: "north" },
  { name: "Spiti", href: "/blog/spiti-valley-7-days", x: 36, y: 11, region: "north" },
  // Uttarakhand
  { name: "Rishikesh", href: "/blog/rishikesh-haridwar-3-days", x: 37, y: 22, region: "north" },
  { name: "Mussoorie", href: "/blog/mussoorie-3-days", x: 36, y: 21, region: "north" },
  { name: "Nainital", href: "/blog/nainital-3-days", x: 39, y: 22, region: "north" },
  { name: "Auli", href: "/blog/auli-3-days", x: 38, y: 19, region: "north" },
  { name: "V.O.F", href: "/blog/valley-of-flowers-4-days", x: 38, y: 18, region: "north" },
  { name: "Jim Corbett", href: "/blog/jim-corbett-3-days", x: 40, y: 23, region: "north" },
  // Central
  { name: "Agra", href: "/blog/agra-2-days", x: 38, y: 30, region: "central" },
  { name: "Jaipur", href: "/blog/jaipur-3-days", x: 32, y: 30, region: "central" },
  { name: "Varanasi", href: "/blog/varanasi-3-days", x: 48, y: 32, region: "central" },
  { name: "Khajuraho", href: "/blog/khajuraho-2-days", x: 42, y: 35, region: "central" },
  { name: "Orchha", href: "/blog/orchha-2-days", x: 40, y: 36, region: "central" },
  // Rajasthan
  { name: "Jodhpur", href: "/blog/jodhpur-3-days", x: 26, y: 33, region: "west" },
  { name: "Jaisalmer", href: "/blog/jaisalmer-3-days", x: 21, y: 31, region: "west" },
  { name: "Udaipur", href: "/blog/udaipur-3-days", x: 27, y: 37, region: "west" },
  { name: "Pushkar", href: "/blog/pushkar-2-days", x: 29, y: 32, region: "west" },
  { name: "Mt Abu", href: "/blog/mount-abu-2-days", x: 25, y: 38, region: "west" },
  { name: "Ranthambore", href: "/blog/ranthambore-3-days", x: 32, y: 33, region: "west" },
  // Gujarat
  { name: "Gujarat", href: "/blog/gujarat-7-days", x: 19, y: 40, region: "west" },
  { name: "Dwarka", href: "/blog/dwarka-2-days", x: 15, y: 42, region: "west" },
  { name: "Diu", href: "/blog/diu-2-days", x: 18, y: 44, region: "west" },
  // West
  { name: "Lonavala", href: "/blog/lonavala-2-days", x: 25, y: 50, region: "west" },
  { name: "M.B.Shwar", href: "/blog/mahabaleshwar-2-days", x: 26, y: 52, region: "west" },
  // South
  { name: "Goa", href: "/blog/goa-3-days", x: 26, y: 56, region: "south" },
  { name: "Hampi", href: "/blog/hampi-3-days", x: 32, y: 58, region: "south" },
  { name: "Gokarna", href: "/blog/gokarna-3-days", x: 27, y: 59, region: "south" },
  { name: "Mysore", href: "/blog/mysore-3-days", x: 32, y: 65, region: "south" },
  { name: "Coorg", href: "/blog/coorg-3-days", x: 30, y: 64, region: "south" },
  { name: "Ooty", href: "/blog/ooty-3-days", x: 32, y: 68, region: "south" },
  { name: "Kodaikanal", href: "/blog/kodaikanal-3-days", x: 35, y: 72, region: "south" },
  { name: "Kerala", href: "/blog/kerala-5-days", x: 30, y: 74, region: "south" },
  { name: "Alleppey", href: "/blog/alleppey-3-days", x: 31, y: 76, region: "south" },
  { name: "Munnar", href: "/blog/munnar-3-days", x: 33, y: 73, region: "south" },
  { name: "Wayanad", href: "/blog/wayanad-3-days", x: 31, y: 69, region: "south" },
  { name: "Madurai", href: "/blog/madurai-2-days", x: 37, y: 76, region: "south" },
  { name: "Rameswaram", href: "/blog/rameswaram-2-days", x: 40, y: 80, region: "south" },
  { name: "Kanyakumari", href: "/blog/kanyakumari-2-days", x: 35, y: 84, region: "south" },
  { name: "Pondicherry", href: "/blog/pondicherry-3-days", x: 39, y: 68, region: "south" },
  // East
  { name: "Hyderabad", href: "/blog/hyderabad-3-days", x: 37, y: 55, region: "east" },
  { name: "Vizag", href: "/blog/vizag-3-days", x: 46, y: 53, region: "east" },
  { name: "Andaman", href: "/blog/andaman-5-days", x: 60, y: 72, region: "east" },
  // Northeast
  { name: "Darjeeling", href: "/blog/darjeeling-4-days", x: 58, y: 28, region: "northeast" },
  { name: "Sikkim", href: "/blog/sikkim-6-days", x: 58, y: 25, region: "northeast" },
  { name: "Meghalaya", href: "/blog/meghalaya-5-days", x: 64, y: 32, region: "northeast" },
  { name: "Shillong", href: "/blog/shillong-3-days", x: 65, y: 31, region: "northeast" },
  { name: "Kaziranga", href: "/blog/kaziranga-3-days", x: 62, y: 29, region: "northeast" },
  { name: "Tawang", href: "/blog/tawang-4-days", x: 63, y: 24, region: "northeast" },
  { name: "Majuli", href: "/blog/majuli-3-days", x: 63, y: 27, region: "northeast" },
  { name: "Sundarbans", href: "/blog/sundarbans-3-days", x: 56, y: 38, region: "east" },
  { name: "Golden Tri.", href: "/blog/golden-triangle-7-days", x: 35, y: 28, region: "central" },
];

const REGION_COLORS: Record<string, string> = {
  north: "bg-blue-500",
  central: "bg-amber-500",
  west: "bg-orange-500",
  south: "bg-teal-500",
  east: "bg-purple-500",
  northeast: "bg-emerald-500",
};

export default function IndiaMapSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const regions = [
    { id: "north", label: "North", emoji: "🏔️" },
    { id: "central", label: "Central", emoji: "🏛️" },
    { id: "west", label: "West", emoji: "🏰" },
    { id: "south", label: "South", emoji: "🌿" },
    { id: "east", label: "East", emoji: "🌊" },
    { id: "northeast", label: "Northeast", emoji: "🌄" },
  ];

  const filteredDests = activeRegion
    ? DESTINATIONS.filter((d) => d.region === activeRegion)
    : DESTINATIONS;

  return (
    <section className="bg-ink py-20 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn className="text-center mb-10">
          <span className="text-[0.68rem] tracking-[0.22em] uppercase text-gold block mb-3">
            Explore all of India
          </span>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-light text-white mb-3">
            59 destinations.<br /><em className="italic text-gold-light">One free itinerary each.</em>
          </h2>
          <p className="text-sm text-white/40 font-light max-w-md mx-auto">
            Click any dot to read the full guide. Filter by region or explore the whole map.
          </p>
        </FadeIn>

        {/* Region filter pills */}
        <FadeIn className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveRegion(null)}
            className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
              !activeRegion ? "bg-gold text-ink border-gold" : "bg-white/5 text-white/60 border-white/15 hover:border-gold"
            }`}
          >
            All Regions
          </button>
          {regions.map((r) => (
            <button
              key={r.id}
              onClick={() => setActiveRegion(activeRegion === r.id ? null : r.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                activeRegion === r.id ? "bg-gold text-ink border-gold" : "bg-white/5 text-white/60 border-white/15 hover:border-gold"
              }`}
            >
              <span aria-hidden="true">{r.emoji}</span> {r.label}
            </button>
          ))}
        </FadeIn>

        {/* Map */}
        <FadeIn>
          <div className="relative w-full aspect-[3/4] md:aspect-[4/3] bg-white/[0.03] rounded-2xl border border-white/10 overflow-hidden">
            {/* Dots */}
            {filteredDests.map((d) => (
              <Link
                key={d.name}
                href={d.href}
                className="absolute group"
                style={{ left: `${d.x}%`, top: `${d.y}%`, transform: "translate(-50%, -50%)" }}
                onMouseEnter={() => setHovered(d.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className={`block w-2.5 h-2.5 rounded-full ${REGION_COLORS[d.region]} ring-2 ring-transparent group-hover:ring-gold group-hover:scale-150 transition-all duration-200 ${hovered === d.name ? "scale-150 ring-gold" : ""}`} />
                {/* Label */}
                <span className={`absolute left-1/2 -translate-x-1/2 -top-5 whitespace-nowrap text-[0.58rem] font-medium px-1.5 py-0.5 rounded transition-all duration-200 ${
                  hovered === d.name ? "opacity-100 bg-gold text-ink" : "opacity-0 group-hover:opacity-100 bg-white/10 text-white/80"
                }`}>
                  {d.name}
                </span>
              </Link>
            ))}

            {/* India outline text (subtle background) */}
            <p className="absolute inset-0 flex items-center justify-center font-serif text-[12rem] text-white/[0.02] leading-none select-none pointer-events-none">
              India
            </p>
          </div>
        </FadeIn>

        {/* Stats below map */}
        <FadeIn className="mt-8 text-center">
          <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
            {regions.map((r) => {
              const count = DESTINATIONS.filter((d) => d.region === r.id).length;
              return (
                <button key={r.id} onClick={() => setActiveRegion(r.id === activeRegion ? null : r.id)} className="text-center group cursor-pointer">
                  <p className="font-serif text-xl text-white font-light group-hover:text-gold transition-colors">{count}</p>
                  <p className="text-[0.6rem] text-white/30 uppercase tracking-wide">{r.label}</p>
                </button>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
