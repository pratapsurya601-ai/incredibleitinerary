"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import RelatedGuides from "@/components/blog/RelatedGuides";
import CombineWith from "@/components/blog/CombineWith";
import Breadcrumb from "@/components/blog/Breadcrumb";

const TADOBA_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "safari",    emoji: "🐯", label: "Safari Guide" },
  { id: "budget",    emoji: "💰", label: "Budget Breakdown" },
  { id: "mistakes",  emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",      emoji: "💡", label: "Pro Tips" },
  { id: "faq",       emoji: "❓", label: "FAQ" },
];

// ── Reading Progress Bar ──────────────────────────────────────────────────────
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(Math.min(100, pct));
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2">
      <div
        className="h-full bg-gold transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── Share Button ──────────────────────────────────────────────────────────────
function ShareBar() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      {[
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Tadoba 3-Day Tiger Safari Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Tadoba Tiger Reserve — 3-Day Safari Guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
      ].map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}>
          {s.label}
        </a>
      ))}
      <button onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">
        {copied ? "✓ Copied" : "Copy Link"}
      </button>
    </div>
  );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-lg font-light text-ink">{value}</p>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}

// ── Day Card ──────────────────────────────────────────────────────────────────
function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors"
      >
        <div className="flex items-center gap-3 text-left">
          <span className="font-serif text-xl text-amber-900 font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">●</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">💰</span>
            <span className="text-xs text-muted font-light">Est. cost: </span>
            <span className="text-xs font-medium text-ink">{cost}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Tip Card ──────────────────────────────────────────────────────────────────
function TipCard({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
  return (
    <div className={`rounded-xl p-5 border ${color}`}>
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0">{icon}</span>
        <div>
          <p className="font-medium text-sm text-stone-900 mb-1">{title}</p>
          <p className="text-xs text-gray-700 font-light leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-parchment-2">
          <p className="text-sm text-muted font-light leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function TadobaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "₹8k–12k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹15k–28k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TADOBA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Tadoba" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="bengal tiger tadoba maharashtra wildlife safari"
            fallback="https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=1600&q=85"
            alt="Bengal tiger at Tadoba Andhari Tiger Reserve Maharashtra India"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb overlay */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Tadoba 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Tiger Safari
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Tadoba in 3 Days:
                <em className="italic text-gold-light"> Maharashtra&apos;s Tiger Reserve Safari Guide</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                100+ tigers. The famous Tadoba Lake where tigers come to drink at dusk. Kolara Gate&apos;s leopards. And a photographer&apos;s landscape that many prefer to Ranthambore.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇮🇳 India</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹8,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              She walked along the lakeshore, completely unconcerned by the jeep 30 metres away. Stopped to drink. Looked up. Then padded off into the teak forest. Three safaris in and the Tadoba Lake sighting lived up to every photograph I&apos;d seen.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Tadoba Andhari Tiger Reserve is Maharashtra&apos;s oldest and largest national park. It doesn&apos;t have the fame of Ranthambore or the celebrity of Jim Corbett — which is exactly why serious wildlife enthusiasts rate it so highly. Fewer tourists, more open sightings near the lake, and a leopard population at Kolara Gate that rivals any reserve in India.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌡️" label="Best Season" value="Oct–May" />
            <StatCard icon="🐯" label="Tiger Population" value="100+" />
            <StatCard icon="🌿" label="Area" value="625 km²" />
            <StatCard icon="⭐" label="Rating" value="4.7★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Tadoba is open October–June. Unlike most Indian parks, it stays open through the summer — which is actually the best season for sightings.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Feb", emoji: "✅", title: "Peak Comfort", desc: "Cool and pleasant (18–28°C). Tigers are active across the forest. Migratory birds arrive at Tadoba Lake — painted storks, open-billed storks. Vegetation is fuller so sightings require more patience. Book 60 days ahead.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Mar–Jun", emoji: "📸", title: "Best for Sightings", desc: "Hot (35–45°C by May) but wildlife concentrates at water sources. Tigers, leopards, and sloth bears appear at Tadoba Lake and waterholes reliably every safari. Wildlife photographers specifically target April–May. Physically demanding but photographically extraordinary.", color: "bg-amber-50 border-amber-200" },
                { season: "Jul–Sep", emoji: "🚫", title: "Park Closed", desc: "Tadoba closes July 1 – September 30 for monsoon. No safaris available. The park reopens October 1 — early October has lush green forest but the vegetation makes sightings harder.", color: "bg-red-50 border-red-200" },
              ].map((s) => (
                <div key={s.season} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{s.emoji}</span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted">{s.season}</span>
                  </div>
                  <p className="font-serif text-base text-ink mb-2">{s.title}</p>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── PICK YOUR PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Pick Your Plan</h2>
            <p className="text-sm text-muted font-light mb-6">Same 3-day route, two comfort levels. The core experience — tiger safaris at Moharli and Kolara — is the same either way.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-5 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan →</p>
                </button>
              ))}
            </div>

            {/* Plan comparison */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-parchment-2">
                    <th className="text-left py-3 pr-4 text-muted font-medium uppercase tracking-wider">Category</th>
                    <th className="text-left py-3 px-4 text-amber-700 font-medium">Budget</th>
                    <th className="text-left py-3 px-4 text-teal font-medium">Comfortable</th>
                  </tr>
                </thead>
                <tbody className="text-muted font-light">
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Sanjay Lodge, Jungle Stay (₹1500–3000)</td><td className="py-2.5 px-4">Svasara Jungle Lodge, Taj Mahua Kothi (₹15,000–25,000)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Safari</td><td className="py-2.5 px-4">Shared jeep (₹1,500–2,500/person)</td><td className="py-2.5 px-4">Private jeep + naturalist (₹4,000–6,000/safari)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Shared taxi from Nagpur (₹2,500 split)</td><td className="py-2.5 px-4">Private taxi or resort pickup</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">₹8,000–12,000</td><td className="py-2.5 px-4 font-medium text-teal">₹15,000–28,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive near Moharli Gate → evening safari (Tadoba Lake). Day 2: Two safaris — Moharli morning, Kolara afternoon. Day 3: Final morning safari → Irai Reservoir → depart.
            </p>

            {/* Plan tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                    activeTab === p.id
                      ? `${p.color} shadow-sm`
                      : "bg-white border border-parchment-2 text-muted hover:border-gold"
                  }`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {/* ── Day 1 ── */}
              <DayCard
                day="Day 1"
                title="Arrive Moharli Gate & Evening Safari"
                items={[
                  "Fly or take the overnight train to Nagpur (180 km from Tadoba). Nagpur has direct flights from Mumbai, Delhi, Hyderabad, and Bangalore. Nagpur station has Shatabdi connections from most major cities.",
                  activeTab === "A"
                    ? "Pre-book a shared taxi from Nagpur to Moharli Gate (₹2,500 split 3–4 ways, 3.5 hrs). No direct public transport from Nagpur to Tadoba — shared taxis are the budget option."
                    : "Pre-book a private taxi from Nagpur airport/station to Moharli Gate (₹2,500–3,000 one way, 3.5 hrs). Many luxury resorts offer airport pickup — ask your resort to arrange it.",
                  activeTab === "A"
                    ? "Check in to Sanjay Lodge or Jungle Stay near Moharli Gate (₹1,500–3,000/night). Basic rooms, in-house cook, jeep booking assistance."
                    : "Check in to Irai Safari Lodge, Svasara Jungle Lodge, or Taj Mahua Kothi (₹15,000–25,000/night). These resorts have resident naturalists, private jeeps, and manage all safari bookings for you.",
                  "Evening safari: Moharli Zone (most popular core zone, highest tiger density). The Moharli zone includes the famous Tadoba Lake shoreline — the single best tiger sighting spot in the reserve. Tigers come to drink at the lake edge at dusk. Position your jeep at the western shore for the best light.",
                  "The Moharli evening safari ends at 6:30 PM. Return to your lodge. Many budget lodges cook a simple dinner — order ahead.",
                ]}
                cost={activeTab === "A" ? "₹4,500" : "₹10,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Moharli Morning Safari & Kolara Afternoon"
                items={[
                  "5:30 AM: Moharli Zone morning safari. Check-in at gate by 5:30 AM (jeep departs 6 AM). Morning is statistically the best time for tiger sightings — they drink at dawn and are still active before the heat builds.",
                  "Tadoba Lake morning reflections: if positioned at the lake before sunrise, the water reflects the teak forest and the light is extraordinary for photography. Tigers at the lake edge at dawn are one of India&apos;s most sought-after wildlife images.",
                  "Return by 9:30 AM. Breakfast, rest through the midday heat. Core zone safaris are banned between 10 AM and 3 PM.",
                  activeTab === "A"
                    ? "3 PM: Kolara Gate safari (south Tadoba). Book separately at tadoba.org or mahaforest.gov.in. Kolara is a different ecosystem — more open, rockier terrain. The leopard frequency here is one of the highest in India. Ask your naturalist to scan the ridge lines and raised rocky areas."
                    : "3 PM: Private jeep safari at Kolara Gate with naturalist. Your resort naturalist will know the specific ridgelines where leopards rest in the afternoon. Unlike tigers, leopards are most reliably spotted in trees or on high rocks — the naturalist's local knowledge is crucial here.",
                  "Kolara also delivers gaur (Indian bison) sightings reliably — the world&apos;s largest wild cattle, standing 1.8 metres at the shoulder. Impressive even without a tiger.",
                ]}
                cost={activeTab === "A" ? "₹4,000" : "₹9,000"}
              />

              {/* ── Day 3 ── */}
              <DayCard
                day="Day 3"
                title="Final Morning Safari & Irai Reservoir"
                items={[
                  "5:30 AM: Final morning safari — Moharli Zone. Three mornings at the lake over 3 days gives a cumulative tiger sighting probability above 90%. If you haven&apos;t seen a tiger yet, this is your moment.",
                  "Return by 9:30 AM. Check out from your lodge.",
                  "Irai Water Reservoir (20 km from Moharli Gate) — a large reservoir on the edge of the buffer zone. In winter it hosts 195+ bird species: painted storks, open-billed storks, cormorants, kingfishers, and raptors. A 1-hour walk along the bund is excellent for birdwatching and the landscape is beautiful.",
                  "Depart for Nagpur. 3.5 hrs by taxi. Nagpur airport has evening flights to most major Indian cities. Alternatively, take the afternoon Shatabdi to Mumbai or Hyderabad.",
                  activeTab === "A"
                    ? "Pre-book your return taxi from the lodge — arrange it on arrival. Shared options back to Nagpur are limited and may require waiting."
                    : "Your resort can arrange the return transfer to Nagpur comfortably. Some resorts offer Nagpur–Tadoba–Nagpur packages inclusive of all transfers.",
                ]}
                cost={activeTab === "A" ? "₹3,500" : "₹6,000"}
              />
            </div>
          </section>

          {/* ── SAFARI GUIDE ── */}
          <section id="safari" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🐯 Safari Guide: Zones &amp; Strategy</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Tadoba has multiple safari zones across the core and buffer areas. Choosing correctly dramatically affects your sighting probability.
            </p>
            <div className="space-y-4">
              {[
                { zone: "Moharli Gate (Core)", emoji: "🌊", desc: "The northwest core zone and Tadoba&apos;s most famous entry point. Includes Tadoba Lake — the single best tiger sighting spot. Tiger density is highest here. Book at tadoba.org or mahaforest.gov.in. Slots sell out 60+ days ahead in peak season.", color: "bg-amber-50 border-amber-200", label: "Highest Tiger Activity" },
                { zone: "Kolara Gate (Core)", emoji: "🐆", desc: "South Tadoba. Different terrain — more open, rockier. Consistently the best leopard sighting zone in the reserve. Also good for gaur (Indian bison) and sloth bears. Many photographers prefer Kolara for its open light and leopard frequency.", color: "bg-orange-50 border-orange-200", label: "Best for Leopards" },
                { zone: "Navegaon Gate (Buffer)", emoji: "🌿", desc: "North buffer zone. Less restricted than core — more vehicles allowed but fewer tigers. Good secondary option if core zones are booked. Also accessible without advance booking on slower days.", color: "bg-green-50 border-green-200", label: "Buffer Zone" },
                { zone: "Zari & Agarzari (Buffer)", emoji: "🦅", desc: "Southern buffer zones. Less tiger activity but good for leopards, sloth bears, and birdlife. Accessible for last-minute visits. The Irai Reservoir adjacent to Zari is excellent for water birds.", color: "bg-blue-50 border-blue-200", label: "Buffer Zone — Good for Birds" },
              ].map((f) => (
                <div key={f.zone} className={`rounded-xl border p-5 ${f.color}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{f.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <p className="font-medium text-sm text-stone-900">{f.zone}</p>
                        <span className="text-[0.6rem] font-semibold uppercase tracking-wider text-gold-dark bg-gold/10 px-2 py-0.5 rounded-full">{f.label}</span>
                      </div>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── TIGER IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="tiger lake wildlife photography india national park"
              fallback="https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=900&q=80"
              alt="Bengal tiger drinking at a waterhole in Tadoba Andhari Tiger Reserve"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Tadoba Lake at the Moharli zone shoreline: tigers come to drink at dawn and dusk. Many wildlife photographers prefer Tadoba&apos;s open light over the cluttered terrain at Ranthambore.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "₹8,000–12,000", color: "bg-amber-50 border-amber-200",
                  items: [["Accommodation (3 nights)", "₹4,500–9,000"], ["Core zone safaris (3×)", "₹4,500–7,500"], ["Nagpur transfer", "₹2,500–3,000"], ["Food", "₹1,500–2,000"], ["Entry permits", "₹300–600"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹15,000–28,000", color: "bg-teal-50 border-teal-200",
                  items: [["Accommodation (3 nights)", "₹45,000–75,000"], ["Private jeep safaris (3×)", "₹12,000–18,000"], ["Nagpur transfer", "₹5,000–6,000"], ["Food (included)", "₹0 (resort inclusive)"], ["Naturalist fee", "₹0 (resort inclusive)"]] },
              ].map((b) => (
                <div key={b.plan} className={`rounded-xl border p-5 ${b.color}`}>
                  <div className="text-center mb-4">
                    <span className="text-2xl">{b.emoji}</span>
                    <p className="font-serif text-base text-ink mt-1">{b.plan}</p>
                    <p className="font-serif text-xl text-ink font-medium mt-1">{b.total}</p>
                    <p className="text-xs text-muted uppercase tracking-wider">per person</p>
                  </div>
                  <div className="space-y-2">
                    {b.items.map(([k, v]) => (
                      <div key={k} className="flex justify-between text-xs">
                        <span className="text-muted font-light">{k}</span>
                        <span className="text-ink font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted font-light mt-4 italic">
              * All prices per person. Does not include travel to/from Nagpur. Safari booking at tadoba.org or mahaforest.gov.in. Luxury resort prices are for double occupancy — solo travel costs more.
            </p>
          </section>

          <AffiliateBlock destination="Tadoba" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Not booking 60 days ahead", desc: "Moharli core zone slots sell out fast in peak season (November–April). The official booking portal opens 90 days ahead. If you book less than 30 days out, you may only get buffer zone or Navegaon slots.", icon: "📅" },
                { title: "Only doing one gate", desc: "Moharli for tigers, Kolara for leopards. These are different habitats and different wildlife experiences. Doing only Moharli misses Kolara's extraordinary leopard frequency — one of India's best.", icon: "🗺️" },
                { title: "Arriving without a plan B for no sightings", desc: "Even in peak season, individual safaris can come up empty. Three safaris over 3 days dramatically improves your odds. If you only have 2 days, do a morning and an evening safari on Day 2 to maximise cumulative probability.", icon: "🎯" },
                { title: "Staying outside the reserve without planning transport", desc: "Many cheap guesthouses are 15–20 km from the gates. At 5 AM with no vehicle booked, this is a serious problem. Stay within 5 km of Moharli Gate or confirm your lodge arranges the jeep pickup to the gate.", icon: "🚗" },
                { title: "Underestimating the summer heat", desc: "April–June temperatures reach 40–45°C in the open jeep. Carry 2 litres of water per person per safari, wear a wide-brimmed hat, and apply sunscreen before departure. The wildlife is worth it but go prepared.", icon: "🌡️" },
                { title: "Skipping the Irai Reservoir", desc: "On departure day, Irai Water Reservoir (20 km from Moharli) is a beautiful 1-hour addition. In winter it has 195+ bird species. Most Tadoba visitors never visit it — an easy, underrated detour.", icon: "🦅" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🌊", title: "Tadoba Lake: Tigers at Dusk", desc: "The Tadoba Lake shoreline in the Moharli zone is the top tiger sighting spot — tigers come to drink at the lake edge at dawn and dusk. Position your jeep at the western shore for the best light. Patience pays: wait 45 minutes at the lake edge.", color: "border-blue-200 bg-blue-50" },
                { icon: "📅", title: "Book 60 Days Ahead", desc: "Tadoba safari booking at tadoba.org or mahaforest.gov.in opens 90 days ahead. Core zone (Moharli, Kolara, Navegaon) sells out first. If core zone is booked, buffer zones (Zari, Agarzari) still offer excellent sightings.", color: "border-amber-200 bg-amber-50" },
                { icon: "🐆", title: "Kolara Gate: Leopard Capital", desc: "Kolara Gate (south Tadoba) consistently delivers leopard sightings — one of the highest frequencies in India. Unlike tigers, leopards are mostly seen in trees or on high rocks. Ask your naturalist to scan the ridge lines.", color: "border-orange-200 bg-orange-50" },
                { icon: "📸", title: "Tadoba for Photographers", desc: "Many wildlife photographers prefer Tadoba over Ranthambore for open, unobstructed sightings near the lake. The summer (April–May) sees tigers at waterholes daily — not comfortable but extraordinary for photography.", color: "border-purple-200 bg-purple-50" },
                { icon: "🌡️", title: "Summer Safaris (Apr–Jun)", desc: "April–June is hot (40–45°C) but wildlife concentrates at water sources. Tigers, leopards, and sloth bears are reliably spotted at the lake and waterholes every safari. Many photographers specifically target summer for this reason.", color: "border-red-200 bg-red-50" },
                { icon: "🏕️", title: "Where to Stay Near Tadoba", desc: "Stay near Moharli Gate (most wildlife lodges here). Budget: Sanjay Lodge, Jungle Stay (₹1500–3000). Mid-range: Irai Safari Lodge, Tiger Trails (₹4000–7000). Luxury: Svasara Jungle Lodge, Taj Mahua Kothi (₹15,000–25,000). Book at least 3 months ahead.", color: "border-green-200 bg-green-50" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates and group — we&apos;ll send a personalised Tadoba itinerary with safari bookings and lodge recommendations within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Tadoba Safari →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Is Tadoba better than Ranthambore for tiger safaris?", a: "Different strengths. Ranthambore (Rajasthan) has a higher profile and the famous tiger family lineages that are easier to track. Tadoba has similar sighting probability but less crowded, more open terrain, and the unique lake setting. Photographers often prefer Tadoba's natural light. For first-timers: both are excellent." },
                { q: "What are the different safari gates at Tadoba?", a: "Core zone gates: Moharli (northwest, highest tiger activity), Kolara (south, leopard frequency), Navegaon (north buffer). Buffer zone gates: Zari, Agarzari, Ramdegi. All offer wildlife — core zones have more restrictions and fewer vehicles per zone." },
                { q: "How to reach Tadoba from Nagpur?", a: "Nagpur is the nearest city (180 km, 3.5 hrs). Pre-book a taxi from Nagpur airport/station to Moharli Gate (₹2,500–3,000). Some resorts offer pickup. There's no direct public transport from Nagpur to Tadoba." },
                { q: "Is Tadoba open in summer?", a: "Yes — Tadoba remains open October through June (unlike some parks). The summer months (April–June) have excellent sighting rates despite the heat. The park closes July 1 – September 30 for monsoon." },
                { q: "What wildlife other than tigers can I see at Tadoba?", a: "Tadoba has leopards (particularly at Kolara), sloth bears, gaur (Indian bison — the world's largest wild cattle), wild dogs (dholes), sambar deer, spotted deer, nilgai, and 195+ bird species. The lake attracts painted storks and open-billed storks in winter." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Tiger Reserves &amp; Wildlife India</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kanha National Park — 3 Days", href: "/blog/kanha-national-park-3-days" },
                { label: "Bandhavgarh — Tiger Reserve Guide", href: "/blog/bandhavgarh-3-days" },
                { label: "Pench National Park — 3 Days", href: "/blog/pench-3-days" },
                { label: "Browse All India Packages", href: "/#packages" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="tadoba-3-days" />
          <RelatedGuides currentSlug="tadoba-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
