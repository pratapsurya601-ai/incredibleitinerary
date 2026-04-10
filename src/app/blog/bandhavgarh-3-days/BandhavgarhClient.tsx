"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import DestinationGallery from "@/components/blog/DestinationGallery";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import RelatedGuides from "@/components/blog/RelatedGuides";
import CombineWith from "@/components/blog/CombineWith";
import Breadcrumb from "@/components/blog/Breadcrumb";
import { usePageUrl } from "@/lib/hooks";

const BANDHAVGARH_TOC = [
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
  const pageUrl = usePageUrl();
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Bandhavgarh 3-Day Safari Guide&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Bandhavgarh tiger reserve safari guide&url=${pageUrl}` },
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
export default function BandhavgarhClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "₹8k–12k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹15k–30k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BANDHAVGARH_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Bandhavgarh" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="Bengal tiger Bandhavgarh forest India safari"
            fallback="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1600&q=85"
            alt="Bengal tiger in Bandhavgarh — India's tiger reserve with the highest density"
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
              <span className="text-white/70">Bandhavgarh 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Wildlife & Safari
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Bandhavgarh in 3 Days:
                <em className="italic text-gold-light"> India&apos;s Highest Tiger Density &amp; an Ancient Fort</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The highest tiger density in India, a 2,000-year-old fort accessible only on safari, and a reserve so rich that the question isn&apos;t whether you&apos;ll see a tiger — it&apos;s how many.
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
              We saw three tigers on Day 1. Not because we were lucky — because Bandhavgarh has more tigers per square kilometre than any reserve in India. When the forest is this dense with them, seeing one is almost inevitable. Seeing three before lunch is a Bandhavgarh morning.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Bandhavgarh is where serious tiger watchers come when they want the highest sighting probability in India. The Tala Zone has approximately 60–80 tigers in a relatively small core area — the result is an encounter rate that no other Indian reserve can match. Add a 2,000-year-old fort accessible only during safaris, 250+ bird species, a healthy leopard population that most visitors completely overlook, and the story of the last wild white tiger ever captured (found here in 1951), and you have India&apos;s most complete wildlife destination.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌡️" label="Best Season" value="Oct–Mar" />
            <StatCard icon="🐯" label="Tiger Density" value="Highest in India" />
            <StatCard icon="📐" label="Area" value="716 km²" />
            <StatCard icon="⭐" label="Rating" value="4.8★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Bandhavgarh closes July 1 – October 14 for monsoon. The safari season is October 15 – June 30. Each period has different character.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Mar", emoji: "✅", title: "Peak Season", desc: "October–November: lush post-monsoon, fewer tourists, excellent birdwatching. December–February: cold (5–15°C mornings), spectacular photography light, tigers highly visible near water sources. Best for serious wildlife photography.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Apr–Jun", emoji: "🔥", title: "Hot but Brilliant", desc: "Temperatures hit 40–45°C but vegetation thins dramatically. Tigers are forced to water holes by midday. Some of the most concentrated tiger sightings happen in May near water points. Uncomfortable for humans, extraordinary for sightings.", color: "bg-amber-50 border-amber-200" },
                { season: "Jul–Oct 14", emoji: "🚫", title: "Park Closed", desc: "Closed for monsoon (July 1 – October 14). Do not book for this period. Roads become impassable, the forest recovers. The park reopens dramatically green in mid-October.", color: "bg-red-50 border-red-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 3-day tiger experience, two comfort levels. The Tala Zone forest is identical — what changes is where you sleep and whose jeep you ride.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Budget lodge in Tala village (₹800–1,500)</td><td className="py-2.5 px-4">Samode Safari Lodge / Mahua Kothi (₹10,000–20,000)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Safari Jeep</td><td className="py-2.5 px-4">Shared jeep (₹400–600/person/safari)</td><td className="py-2.5 px-4">Private jeep (₹6,000–8,000/safari, your group)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Naturalist</td><td className="py-2.5 px-4">Government-assigned guide</td><td className="py-2.5 px-4">Expert naturalist from resort</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">₹8,000–12,000</td><td className="py-2.5 px-4 font-medium text-teal">₹15,000–30,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive Tala village, Tala Zone afternoon safari. Day 2: Morning safari + Bandhavgarh Fort + Magdhi Zone afternoon. Day 3: Final morning safari, depart.
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
                title="Arrival & Tala Zone — Highest Tiger Density"
                items={[
                  activeTab === "A"
                    ? "Train or bus to Umaria (35 km from Tala). Local taxi to Tala village — the main accommodation hub, 5 minutes from Tala Gate (₹700–900). Check in to budget lodge (₹800–1,500/night)."
                    : "Train to Umaria + private transfer to resort, or fly to Jabalpur (200 km, 4 hrs drive). Samode Safari Lodge, Jamtara Wilderness Camp, or Mahua Kothi arrange all logistics from Umaria.",
                  "Afternoon safari 2:30–6 PM: Tala Zone (Gate 1) — the core zone with the highest tiger density in India. More jeeps here than other zones, but also the most sightings. Your naturalist will know which territory has recent pugmarks.",
                  "Tala Zone in afternoon light: sal forest shifting from green to gold, spotted deer and sambar moving to water, langur alarm calls signalling a predator — these alarm calls are your early warning system for tiger activity.",
                  activeTab === "A"
                    ? "Evening: Forest department museum in Tala village — the white tigers of Rewa exhibit. The story of Mohan (the last wild white tiger, captured from Bandhavgarh Fort in 1951) is extraordinary and little-known."
                    : "Evening: Resort naturalist talk on tiger territorial behavior in Bandhavgarh. The Tala Zone tigers have been well-studied — your naturalist will know individual tigers by name and stripe pattern.",
                  "Night: Tala village is small and quiet. Most lodges have communal dining where travelers share sighting notes — invaluable for planning the next morning.",
                ]}
                cost={activeTab === "A" ? "₹4,000" : "₹12,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Morning Safari + Bandhavgarh Fort + Magdhi Zone"
                items={[
                  "5 AM: Be at Tala Gate first — gates open at 5:30 AM and the queue for jeep assignments matters for zone allocation. The first 2 hours of morning light are the most productive for tiger sightings.",
                  "Morning safari (5:30–10 AM): Tigers returning from nocturnal hunts. The sal forest is cool and misty. Your naturalist tracks pugmarks, fresh kills, and scent markings. In peak season, Tala Zone morning safaris have 70–80% tiger encounter rates.",
                  "Ancient cave paintings accessible near the fort approach — Stone Age paintings in sandstone caves that most visitors never find. Ask your naturalist specifically.",
                  activeTab === "A"
                    ? "Bandhavgarh Fort (2,000+ years old, 811m elevation) — accessible only by elephant or on foot with a special permit during safari hours. Ask your naturalist to arrange the permit the evening before. The view over the reserve from the fort is extraordinary."
                    : "Private jeep with resort naturalist takes you to the fort approach with pre-arranged permit. The fort interior has a 10th-century Vishnu idol carved into the rock and ancient water tanks still used by wildlife.",
                  "Rest 10 AM–2:30 PM. The midday is for recovery, downloading photos, and preparing for the afternoon.",
                  "2:30 PM: Afternoon safari — Magdhi Zone (Gate 2). Bamboo forest, different character from Tala. Better for leopard sightings — Magdhi has a healthy leopard population. The dense bamboo is outstanding photography territory at golden hour.",
                ]}
                cost={activeTab === "A" ? "₹4,000" : "₹12,000"}
              />

              {/* ── Day 3 ── */}
              <DayCard
                day="Day 3"
                title="Final Morning Safari & Departure"
                items={[
                  "5:30 AM: Final morning safari. Request Khitauli Zone (buffer zone, Gate 3) — good for Indian wild dogs (dholes), which hunt in packs and are spectacular to watch. Also excellent for leopard at dawn.",
                  "Even on the last day: fresh pugmarks from the previous night often lead to the most relaxed tiger encounters — tigers resting after a night kill, cubs playing near their mother. The last morning is often the best.",
                  "Return by 10 AM. Checkout and depart.",
                  activeTab === "A"
                    ? "Shared cab to Umaria station (₹150–200 per person). Train back to Delhi (Shaktipunj Express, 16 hrs), Jabalpur (2 hrs), or Mumbai (Mahakaushal Express, 24 hrs)."
                    : "Resort arranges private transfer to Umaria station or Jabalpur airport (4 hrs). Most luxury resorts include transfer in their package.",
                  "Combine: Kanha National Park is 160 km from Bandhavgarh (3 hrs by road) — many wildlife travelers do both reserves in a single trip for a complete MP tiger circuit.",
                ]}
                cost={activeTab === "A" ? "₹3,000" : "₹8,000"}
              />
            </div>
          </section>

          {/* ── SAFARI GUIDE ── */}
          <section id="safari" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🐯 Bandhavgarh Safari Zone Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Three main gates, very different characters. Tala is the priority — book it first.
            </p>
            <div className="space-y-4">
              {[
                { zone: "Tala Zone (Gate 1)", type: "Core — Priority", desc: "The heart of Bandhavgarh and where you must spend at least 2 safaris. Highest tiger density, access to the fort, and the most experienced naturalists. Sells out first — book 60 days ahead at mpecotourism.in.", emoji: "🐯", color: "bg-amber-50 border-amber-200", tag: "Best for: Tiger sightings (Priority booking)" },
                { zone: "Magdhi Zone (Gate 2)", type: "Core", desc: "Dense bamboo and mixed forest on the south side. Excellent for leopard, sloth bear, and wolf sightings. Different terrain from Tala — narrower roads, denser cover. Good afternoon safari option on Day 2.", emoji: "🐆", color: "bg-emerald-50 border-emerald-200", tag: "Best for: Leopard & diverse wildlife" },
                { zone: "Khitauli Zone (Gate 3)", type: "Buffer", desc: "The buffer zone — lower entry fees, more accessible, good for Indian wild dogs (dholes) and birds. Excellent birdwatching destination with 250+ species. A good first or last safari option.", emoji: "🦅", color: "bg-teal-50 border-teal-200", tag: "Best for: Wild dogs, birdwatching, budget" },
                { zone: "Panpatha Sanctuary", type: "Buffer — Separate entry", desc: "The attached sanctuary on the western side — rarely visited, excellent for striped hyena, wolf, and less-pressured wildlife. For serious wildlife enthusiasts who want to avoid even the modest Bandhavgarh crowds.", emoji: "🌿", color: "bg-rose-50 border-rose-200", tag: "Best for: Off-the-beaten-track wildlife" },
              ].map((z) => (
                <div key={z.zone} className={`rounded-xl border p-5 ${z.color}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{z.emoji}</span>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <p className="font-medium text-sm text-stone-900">{z.zone}</p>
                        <span className="text-[0.6rem] bg-white/70 border border-current px-2 py-0.5 rounded-full text-stone-600 uppercase tracking-wider">{z.type}</span>
                      </div>
                      <p className="text-[0.65rem] text-gold-dark font-medium mb-2">{z.tag}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{z.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SAFARI IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="tiger forest India wildlife safari photography"
              fallback="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=900&q=80"
              alt="Tiger in Bandhavgarh forest — India's highest tiger density reserve"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Bandhavgarh&apos;s tigers are among the most photographed in India — not because they&apos;re tame, but because there are so many of them. In peak season, the Tala Zone records tiger encounters on 70–80% of morning safaris.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "₹8,000–12,000", color: "bg-amber-50 border-amber-200",
                  items: [["Travel to/from Umaria", "₹1,500–3,000"], ["Stays (3 nights)", "₹2,400–4,500"], ["Safari fees (4 safaris)", "₹2,800–5,000"], ["Entry fees", "₹1,200–2,000"], ["Food", "₹1,000–1,500"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹15,000–30,000", color: "bg-teal-50 border-teal-200",
                  items: [["Travel (train + transfer)", "₹3,000–6,000"], ["Luxury resort (3 nights, full board)", "₹10,000–20,000"], ["Private jeep (4 safaris)", "₹10,000–16,000"], ["Entry fees", "₹2,400–4,000"], ["Tips & extras", "₹1,000–2,000"]] },
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
              * Budget plan assumes shared jeep (6 people) and basic Tala village lodge. Comfortable plan assumes luxury full-board resort with private jeep. Entry fees per person per safari. Tip your naturalist and driver.
            </p>
          </section>

          <AffiliateBlock destination="Bandhavgarh" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Not booking Tala Zone first", desc: "Tala Zone fills before Magdhi and Khitauli. Book Tala immediately at mpecotourism.in when your 60-day window opens. Fill remaining safaris with Magdhi. Don't leave Tala booking to the last minute.", icon: "⚡" },
                { title: "Arriving at Tala Gate after 5:30 AM", desc: "The gate opens at 5:30 AM. Be there at 5:15 AM. Jeep positions in the queue matter — first jeeps get the freshest morning territory before other vehicles disturb the trails.", icon: "🕐" },
                { title: "Ignoring leopards in the tiger focus", desc: "Bandhavgarh's healthy leopard population is often completely overlooked by visitors obsessed with tigers. Magdhi Zone at dusk offers outstanding leopard encounters — scan the trees, not just the ground.", icon: "🐆" },
                { title: "Not asking about the fort", desc: "Bandhavgarh Fort is 2,000 years old and sits 811m above the forest floor inside the reserve. Most tourists never visit it because it requires advance planning. Ask your naturalist the evening before to arrange a permit.", icon: "🏰" },
                { title: "Booking during July–October", desc: "Bandhavgarh is closed July 1 – October 14. No exceptions. Many online booking agents don't make this clear. Always confirm your dates fall within October 15 – June 30.", icon: "📅" },
                { title: "Skipping the birdwatching", desc: "Bandhavgarh has 250+ bird species including crested serpent eagle, paradise flycatcher, and painted spurfowl. Winter brings migratory species. Ask for a birding guide for at least one safari — it adds another dimension entirely.", icon: "🦅" },
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
                { icon: "⚡", title: "Tala Zone: Book First", desc: "Tala Zone (Gate 1) has the highest tiger density and fills fastest. Book at mpecotourism.in immediately when your travel date opens (60 days ahead). Magdhi Zone (Gate 2) is second choice.", color: "border-amber-200 bg-amber-50" },
                { icon: "🏰", title: "The Fort Inside the Forest", desc: "Bandhavgarh Fort (2,000+ years old) sits atop a 811m hill inside the reserve. Only accessible during safaris with a permit — ask your naturalist. The view from the fort over the forest is extraordinary.", color: "border-blue-200 bg-blue-50" },
                { icon: "🦅", title: "Birdwatching is Outstanding", desc: "Bandhavgarh has 250+ bird species. Look for crested serpent eagle, paradise flycatcher, Indian roller, and painted spurfowl. Winter (Nov–Feb) brings migratory species. A birding guide adds another dimension.", color: "border-green-200 bg-green-50" },
                { icon: "🕐", title: "Safari Timing Strategy", desc: "Gates open at 5:30 AM — be first in queue. The most successful sightings happen in the first 2 hours of morning light, when tigers are returning from nocturnal hunts. Afternoon safaris (2:30 PM) catch tigers going to water.", color: "border-purple-200 bg-purple-50" },
                { icon: "🐆", title: "Beyond Tigers: Leopards Too", desc: "Bandhavgarh has a healthy leopard population often overlooked in the tiger focus. Magdhi and Khitauli zones at dusk are your best bet. Leopards are more arboreal — scan the trees, not just the ground.", color: "border-orange-200 bg-orange-50" },
                { icon: "🏠", title: "Tala Village Accommodation", desc: "Stay in Tala village — 5 min from the gate. Budget: MP Tourism's White Tiger Forest Lodge (₹2,000–3,000). Mid-range: Kings Lodge Bandhavgarh. Luxury: Samode Safari Lodge, Mahua Kothi.", color: "border-red-200 bg-red-50" },
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
              Tell us your dates and group — we&apos;ll arrange Bandhavgarh safari bookings, resort, and transfers within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Bandhavgarh Safari →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Does Bandhavgarh have the most tigers in India?", a: "Bandhavgarh has the highest tiger density (tigers per km²) in India — approximately 60–80 tigers in 716 km² core zone. This makes per-safari sighting rates the best in the country. Total tiger population including buffer: 150+." },
                { q: "How to reach Bandhavgarh?", a: "Nearest railway: Umaria (35 km) and Katni (100 km). Nearest airports: Jabalpur (200 km, 4 hrs) and Raipur (250 km). From Umaria, taxis to Tala gate (40 km, ₹700–900). Direct trains from Delhi, Mumbai, and Kolkata to Umaria." },
                { q: "What is the white tiger connection to Bandhavgarh?", a: "The last wild white tiger ever captured was from Bandhavgarh in 1951 — Mohan, who became the ancestor of all white tigers in captivity worldwide. Bandhavgarh Fort is where he was found. The reserve no longer has wild white tigers." },
                { q: "Can I stay inside Bandhavgarh reserve?", a: "Yes — the MP Tourism's Bandhavgarh Jungle Camp is inside the buffer zone. However, most resorts are in Tala village outside the gate. Staying near the gate means earlier departures and less jeep travel to the safari entry." },
                { q: "Best months for Bandhavgarh safari?", a: "October–November: lush greenery, fewer tourists. December–February: cold mornings, excellent photography light, tigers visible near water. March–June: hot (40°C+) but tigers at waterholes daily — surprisingly good sightings. Closed July 1 – October 14." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Bandhavgarh — Highlights"
            subtitle="The best of Bandhavgarh in photos."
            spots={[
              { name: "Bandhavgarh Landscape", query: "bandhavgarh india landscape scenic beautiful travel", desc: "The stunning landscapes of Bandhavgarh." },
              { name: "Bandhavgarh Temple", query: "bandhavgarh temple architecture heritage india", desc: "Historic temples and architecture in Bandhavgarh." },
              { name: "Bandhavgarh Street Scene", query: "bandhavgarh street market local culture india", desc: "Local life and culture in Bandhavgarh." },
              { name: "Bandhavgarh Nature", query: "bandhavgarh nature hills forest river india", desc: "Natural beauty around Bandhavgarh." },
              { name: "Bandhavgarh Sunset", query: "bandhavgarh sunset golden hour india travel", desc: "Bandhavgarh at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Explore More Wildlife Reserves</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kanha National Park — Jungle Book Country", href: "/blog/kanha-national-park-3-days" },
                { label: "Pench National Park — 3 Days", href: "/blog/pench-3-days" },
                { label: "Tadoba — Maharashtra's Tiger Reserve", href: "/blog/tadoba-3-days" },
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

          <CombineWith currentSlug="bandhavgarh-3-days" />
          <RelatedGuides currentSlug="bandhavgarh-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
