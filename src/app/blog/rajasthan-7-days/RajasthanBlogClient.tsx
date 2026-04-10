"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import Comments from "@/components/blog/Comments";
import TableOfContents from "@/components/blog/TableOfContents";
import DestinationGallery from "@/components/blog/DestinationGallery";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import Stay22Widget from "@/components/ui/Stay22Widget";
import RelatedGuides from "@/components/blog/RelatedGuides";
import Breadcrumb from "@/components/blog/Breadcrumb";
import DownloadButton from "@/components/pdf/DownloadButton";
import { usePageUrl } from "@/lib/hooks";


const RAJASTHAN_TOC = [
  { id: "decision",   emoji: "⚡", label: "Which Plan Are You?" },
  { id: "cities",     emoji: "🏙️", label: "City Decision Guide" },
  { id: "transport",  emoji: "🚗", label: "How to Get Around" },
  { id: "itineraries",emoji: "📅", label: "The Itineraries" },
  { id: "budget",     emoji: "💰", label: "Budget Breakdown" },
  { id: "maps",       emoji: "🗺️", label: "Route Maps" },
  { id: "mistakes",   emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "💡", label: "Pro Tips" },
  { id: "faq",        emoji: "❓", label: "FAQ" },
];

// ── Reading Progress ──────────────────────────────────────────────────────────
function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      setP(Math.min(100, (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100));
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2">
      <div className="h-full bg-gold transition-all duration-100" style={{ width: `${p}%` }} />
    </div>
  );
}

// ── Share Bar ─────────────────────────────────────────────────────────────────
function ShareBar() {
  const pageUrl = usePageUrl();
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      <a href={`mailto:?subject=Rajasthan 7-Day Itinerary&body=Check this out: ${pageUrl}`} className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://x.com/intent/tweet?text=Rajasthan%207%20Days%20guide&url=${pageUrl}`} target="_blank" rel="noopener noreferrer" className="bg-[#1a6fb5] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
      <button onClick={copy} className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">{copied ? "✓ Copied" : "Copy Link"}</button>
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
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors">
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
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">●</span>{item}
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

// ── Route Card ────────────────────────────────────────────────────────────────
function RouteCard({ label, day, stops, distance, url, note, color }: { label: string; day: string; stops: string[]; distance: string; url: string; note: string; color: string }) {
  return (
    <div className={`rounded-xl border p-5 ${color}`}>
      <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
        <div>
          <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-muted mb-0.5">{label}</p>
          <p className="font-serif text-base text-ink">{day}</p>
        </div>
        <span className="text-xs text-muted bg-white/70 px-3 py-1 rounded-full border border-white/50">{distance}</span>
      </div>
      <div className="flex flex-wrap items-center gap-1.5 mb-3">
        {stops.map((s, i) => (
          <span key={i} className="flex items-center gap-1">
            <span className="text-xs bg-white/80 px-2.5 py-1 rounded-full border border-white/60 text-ink font-light">{s}</span>
            {i < stops.length - 1 && <span className="text-muted/40 text-xs">→</span>}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted font-light italic mb-3">💡 {note}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline">📍 Open in Google Maps →</a>
    </div>
  );
}

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-parchment-2">
          <p className="text-sm text-muted font-light leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

// ── MAIN ─────────────────────────────────────────────────────────────────────
export default function RajasthanBlogClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C" | "D">("B");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "₹2,500–4k/day", color: "border-amber-300 bg-amber-50" },
    { id: "B" as const, emoji: "💑", label: "Couple", sub: "₹8–14k/day", color: "border-rose-300 bg-rose-50" },
    { id: "C" as const, emoji: "👨‍👩‍👧‍👦", label: "Family", sub: "₹6–10k/day", color: "border-blue-300 bg-blue-50" },
    { id: "D" as const, emoji: "🏰", label: "Luxury", sub: "Palace hotels", color: "border-purple-300 bg-purple-50" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={RAJASTHAN_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Rajasthan" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage imageKey="rajasthanHero" fallback="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1600&q=85" alt="Amber Fort Jaipur Rajasthan at sunrise" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Rajasthan 7 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Heritage & Culture</span>
                <span className="text-white/60 text-xs">March 20, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">15 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Rajasthan in 7 Days: The Royal Circuit
                <em className="italic text-gold-light"> That Actually Works (2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Jaipur · Jodhpur · Jaisalmer · Udaipur — 4 plans, real costs, Google Maps routes, and the routing mistake that ruins most Rajasthan trips.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + meta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇮🇳 Rajasthan</span><span>·</span><span>🗓 7 Days</span><span>·</span><span>💰 From ₹20,000</span>
            </div>
          </div>

          {/* ── PDF Download Banner ── */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-amber-50 to-parchment border border-gold/25 rounded-2xl px-6 py-5 mb-10">
            <div>
              <p className="font-serif text-ink text-lg font-light leading-tight">
                📄 Rajasthan 7-Day PDF Guide
              </p>
              <p className="text-muted text-xs mt-0.5 font-light">
                All 7 days · budget table · packing list · route maps — offline ready
              </p>
            </div>
            <div className="flex-shrink-0">
              <DownloadButton
                slug="rajasthan-7-days"
                title="Rajasthan 7-Day Itinerary"
                variant="primary"
              />
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Most travellers try to see too much, pick the wrong route order, and spend half their Rajasthan trip on roads. This guide solves all three. The route below is the only order that makes geographic sense, gives you the right time in each city, and leaves you with energy to actually enjoy it.
            </p>
          </blockquote>

          {/* Quick decision */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation — jump straight to your itinerary.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} →</p>
                </button>
              ))}
            </div>
          </section>

          {/* Stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Duration" value="7 Days" />
            <StatCard icon="💰" label="Budget From" value="₹20,000" />
            <StatCard icon="🌡" label="Best Months" value="Oct – Mar" />
            <StatCard icon="🏰" label="Cities" value="4 Royal Cities" />
          </div>

          {/* City decision */}
          <section id="cities" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📍 The City Decision Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Rajasthan is India&apos;s largest state. Cities are 250–380km apart. Understand this before booking anything.</p>

            <div className="overflow-x-auto rounded-xl border border-parchment-2 mb-5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">City</th>
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Nickname</th>
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Why Unmissable</th>
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Days</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🌸 Jaipur", "Pink City", "Amber Fort, Hawa Mahal, City Palace, bazaars", "2 days"],
                    ["🔵 Jodhpur", "Blue City", "Mehrangarh Fort (India's best), blue painted houses", "1.5 days"],
                    ["🏜️ Jaisalmer", "Golden City", "Living fort, Thar Desert camel safari, sand dunes", "1.5 days"],
                    ["💙 Udaipur", "City of Lakes", "Lake Pichola, City Palace, most romantic city in India", "2 days"],
                  ].map(([city, nick, why, days]) => (
                    <tr key={city} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs font-medium text-ink">{city}</td>
                      <td className="p-3.5 text-xs text-muted">{nick}</td>
                      <td className="p-3.5 text-xs text-muted">{why}</td>
                      <td className="p-3.5 text-xs font-medium text-teal">{days}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">The golden routing rule:</strong> Always go Jaipur → Jodhpur → Jaisalmer → Udaipur. Never reverse it — the reverse adds 4–5 hours of unnecessary backtracking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { city: "Pushkar", verdict: "Skip on 7 days", bg: "bg-red-50 border-red-200", desc: "Holy lake city, 90min from Jaipur. Beautiful but needs a dedicated half-day. Add only if 9+ days." },
                { city: "Bikaner", verdict: "Skip on 7 days", bg: "bg-red-50 border-red-200", desc: "Junagarh Fort is excellent but very far from the main circuit. Worth a dedicated trip." },
                { city: "Ranakpur Temple", verdict: "Add en route", bg: "bg-green-50 border-green-200", desc: "On the Jaisalmer → Udaipur drive. Stop for 2hrs. One of India's most beautiful Jain temples." },
                { city: "Ranthambhore", verdict: "Wildlife lovers", bg: "bg-blue-50 border-blue-200", desc: "Tiger reserve near Jaipur. Replace Jaisalmer time. Not for everyone but unforgettable if you spot a tiger." },
              ].map((item) => (
                <div key={item.city} className={`rounded-xl border p-4 ${item.bg}`}>
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-sm text-stone-900">{item.city}</p>
                    <span className="text-[0.65rem] font-medium px-2 py-0.5 rounded-full bg-white/70 text-muted">{item.verdict}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Transport */}
          <section id="transport" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🚗 How to Get Around</h2>
            <p className="text-sm text-muted font-light mb-6">Rajasthan is NOT a scooter destination. Cities are 250–380km apart. Here&apos;s what actually works.</p>
            <div className="space-y-3">
              {[
                { icon: "🚗", title: "Private car + driver for 7 days (recommended)", desc: "₹18,000–₹25,000 for the car + ₹8,000–₹12,000 fuel (~1,400km). Total ₹26,000–₹37,000 for the vehicle. Split between 2–3 people: ₹9,000–₹18,000 per person. Driver handles routes, waits at sights. Ask your hotel to arrange — avoid touts at bus stands.", color: "bg-green-50 border-green-200" },
                { icon: "🚂", title: "Trains between cities + autos locally", desc: "Jaipur→Jodhpur: 5hrs (₹600–₹900 in 2AC). Jodhpur→Jaisalmer: 5–6hrs (₹300–₹500). Jaisalmer→Udaipur: No direct train — private car only (10–12hrs, ₹3,500–₹5,000).", color: "bg-blue-50 border-blue-200" },
                { icon: "✈️", title: "Fly into Jaipur, out of Udaipur", desc: "Both have airports. IndiGo Delhi→Jaipur from ₹1,500–₹3,000. Saves 3hrs vs train. Works well combined with either option above.", color: "bg-parchment border-parchment-2" },
                { icon: "🚌", title: "State buses — avoid", desc: "Overcrowded, slow, add 3–4hrs to every journey. Only if absolutely necessary on a shoestring budget.", color: "bg-red-50 border-red-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* Itineraries */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan — days are expandable.</p>

            <div className="flex gap-2 flex-wrap mb-8 p-1 bg-parchment rounded-xl">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 ${activeTab === p.id ? "bg-white shadow text-ink border border-parchment-2" : "text-muted hover:text-ink"}`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            {/* Plan A */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-2">
                  <span className="text-2xl">💰</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Heritage Guesthouses</p>
                    <p className="text-xs text-amber-600 font-light">Transport: Trains between cities + autos locally · Stay: ₹600–₹1,500/night</p>
                  </div>
                </div>
                <DayCard day="Day 1–2" title="Jaipur — The Pink City"
                  items={["Day 1 evening: Check into a haveli guesthouse near old city (₹800–₹1,200/night). Walk to Hawa Mahal at sunset — free, most beautiful when lit up pink.","Dinner at Rawat Mishtan Bhandar: pyaaz kachori ₹30 + lassi ₹50. Do NOT eat near tourist sights on Day 1 — prices are 3x.","Day 2: 6am — Amber Fort at opening. Climb on foot (free, skip the ₹1,100 elephant ride). 2.5 hours inside.","Panna Meena Stepwell on the way back — free, beautiful, usually empty.","Afternoon: City Palace (₹700) + Jantar Mantar (₹200) — right next to each other.","5:30pm: Nahargarh Fort for sunset (₹50). Best view over Jaipur."]}
                  cost="₹1,800–₹2,500/day excluding accommodation" />
                <DayCard day="Day 3" title="Travel to Jodhpur + Blue City Evening"
                  items={["Morning train to Jodhpur — 5hrs, book Sleeper (₹300) or 3AC (₹600).","Check in near Clock Tower — best location in Jodhpur.","Afternoon: Walk the blue lanes of Navchokiya — get lost in indigo-painted houses. Free.","Evening: Mehrangarh Fort from outside at sunset — the fort glows orange-gold.","Dinner at Jhankar Choti Haveli rooftop — ₹300–₹450 with fort views."]}
                  cost="₹800–₹1,200 excluding accommodation + train" />
                <DayCard day="Day 4" title="Jodhpur + Travel to Jaisalmer"
                  items={["7am: Mehrangarh Fort opens — best fort in India. Budget 3 hours. Entry ₹200.","Jaswant Thada (white marble cenotaph) — free, stunning in morning light.","Toorji ka Jhalra stepwell — recently restored, free, excellent photography.","1pm: Train or private car to Jaisalmer (5–6hrs train).","Evening: Walk inside Jaisalmer Fort — rooftop dinner with desert views."]}
                  cost="₹1,500–₹2,200 excluding accommodation + transport" />
                <DayCard day="Day 5" title="Jaisalmer — The Desert Day"
                  items={["Morning: Fort interiors — Jain Temples inside the fort (₹50, incredibly underrated), Patwon ki Haveli (₹100).","Afternoon: Camel safari + overnight desert camp — ₹1,200–₹2,000/person. Non-negotiable experience.","Sunset at Sam Sand Dunes — watch the Thar Desert turn gold then orange then black.","Sleep under the stars at the camp — one of the best experiences in India."]}
                  cost="₹1,500–₹2,500 excluding accommodation" />
                <DayCard day="Day 6" title="Jaisalmer to Udaipur (Long Drive)"
                  items={["Private car only — 10–12hrs, ₹3,500–₹5,000 for the car (share if possible).","Leave by 7am. Pack food and water — very few good stops until Ranakpur.","Stop at Ranakpur Jain Temple (3hrs from Udaipur) — ₹200 entry, one of India's most beautiful temples. Allow 1.5hrs.","Arrive Udaipur evening — check in near Lake Pichola. Walk to the lake for first views."]}
                  cost="₹3,500–₹5,000 for the car (one-time)" />
                <DayCard day="Day 7" title="Udaipur — City of Lakes"
                  items={["8am: City Palace (₹300) + Jagdish Temple next door (free).","Afternoon: Boat ride on Lake Pichola (₹400) — passes the floating Lake Palace Hotel.","Saheliyon ki Bari garden (₹50) — most underrated sight in Udaipur.","Sunset: Sit on Ambrai Ghat — same view as the expensive terrace, completely free.","Final dinner: Ambrai Restaurant on the lake — ₹600–₹900 for best views in Udaipur."]}
                  cost="₹1,800–₹2,800 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 7-Day Cost (solo) · </span>
                  <span className="font-serif text-base text-ink font-light">₹20,000–₹30,000 including accommodation + transport</span>
                </div>
              </div>
            )}

            {/* Plan B */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl mb-2">
                  <span className="text-2xl">💑</span>
                  <div>
                    <p className="text-sm font-medium text-rose-800">Couple Plan — Heritage Havelis + Private Car</p>
                    <p className="text-xs text-rose-700 font-light">Stay: Boutique havelis ₹3,500–₹8,000/night · Private car+driver for the full circuit</p>
                  </div>
                </div>
                <DayCard day="Day 1–2" title="Jaipur — Pink City"
                  items={["Check in to Alsisar Haveli or Dera Rawatsar — actual heritage havelis (₹3,500–₹6,000/night).","Day 1 evening: Hawa Mahal at sunset → Peacock Rooftop Restaurant for Rajasthani thali dinner (₹1,200–₹1,800 for two).","Day 2: 6am Amber Fort with local guide (₹500–₹800) — the Sheesh Mahal mirror stories are worth it.","Panna Meena Stepwell — usually empty in the morning, beautiful for photos.","Afternoon: City Palace + Jantar Mantar + Johari Bazaar for jewellery shopping.","Sunset: Nahargarh Fort — drinks at Padao Restaurant with the city below.","Dinner: Niros Restaurant on MI Road — Jaipur's most iconic since 1949 (₹1,400–₹2,000 for two)."]}
                  cost="₹5,000–₹8,000 for two per day (excl. accommodation)" />
                <DayCard day="Day 3" title="Jodhpur — Blue City"
                  items={["Drive from Jaipur (5.5hrs) in your private car.","Check in to Kesar Heritage or Raas Jodhpur (₹8,000–₹15,000/night — pool with fort views).","Sunset drinks with Mehrangarh Fort illuminated in front of you — best view in Rajasthan.","Dinner at Indique rooftop restaurant — ₹2,000–₹3,000 for two, Mehrangarh lit up behind you."]}
                  cost="₹4,000–₹7,000 for two (excl. accommodation + transport)" />
                <DayCard day="Day 4" title="Jodhpur Sightseeing"
                  items={["7am: Mehrangarh Fort — book the Prince Charles audio guide (₹200). 3 hours.","Blue City Heritage Walk with local guide (₹800) — understand why the houses are blue.","Toorji ka Jhalra stepwell + Sardar Market for shopping.","Optional: Bishnoi Village Safari (₹3,000–₹5,000 for two) — wild blackbucks, village life, unforgettable."]}
                  cost="₹3,500–₹6,000 for two (excl. accommodation)" />
                <DayCard day="Day 5" title="Jaisalmer — Golden City + Desert"
                  items={["Drive from Jodhpur to Jaisalmer (5hrs).","Check in inside the fort or just outside (₹2,000–₹4,000/night).","Afternoon: Walk fort interiors, Jain temples, Patwon ki Haveli.","Private camel safari at sunset (₹3,000–₹5,000 for two) — book through hotel for private experience.","Overnight luxury desert camp under the stars — upgrade to Suryagarh experience for honeymoons (₹8,000–₹15,000 for two)."]}
                  cost="₹6,000–₹15,000 for two (excl. accommodation)" />
                <DayCard day="Day 6" title="Jaisalmer to Udaipur via Ranakpur"
                  items={["Leave by 7am — 10–12hr drive.","Stop at Ranakpur Jain Temple — 1.5hrs, ₹200 entry, one of India's most stunning temples.","Arrive Udaipur evening. Check in to Amet Haveli (₹5,000–₹8,000/night) — lake views from your room.","Evening: Boat ride on Lake Pichola at golden hour (₹1,500–₹2,000 private 45-min ride)."]}
                  cost="₹5,000–₹8,000 for two (excl. accommodation + transport)" />
                <DayCard day="Day 7" title="Udaipur — City of Lakes"
                  items={["City Palace (₹300) + rooftop café inside for breakfast overlooking the lake.","Vintage Car Museum — Maharana's collection, ₹250 entry, most underrated in Udaipur.","Sajjangarh Palace on the hilltop — ₹150, incredible panoramic views.","Sunset: Private boat on Lake Pichola at golden hour.","Final dinner: Upre by 1559 AD — best food in Udaipur (₹2,500–₹3,500 for two)."]}
                  cost="₹4,000–₹7,000 for two (excl. accommodation)" />
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-rose-700 uppercase tracking-wide">Total 7-Day Cost (for two) · </span>
                  <span className="font-serif text-base text-ink font-light">₹60,000–₹90,000 including accommodation + transport</span>
                </div>
              </div>
            )}

            {/* Plan C */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-2">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Family Plan — 3 Cities (Skip Jaisalmer)</p>
                    <p className="text-xs text-blue-600 font-light">Jaipur (3 nights) + Jodhpur (2 nights) + Udaipur (2 nights) · Private car mandatory</p>
                  </div>
                </div>
                <DayCard day="Day 1–3" title="Jaipur — Kids Love This"
                  items={["Amber Fort elephant ride (₹1,100) — controversial but kids remember it forever.","Patrika Gate — colourful murals, free, perfect for photos with children.","Nahargarh Fort — has a wax museum inside, kids enjoy it (₹200).","Raj Mandir Cinema — even just to see the interior of India's most beautiful cinema hall.","Albert Hall Museum (₹40) — has an Egyptian mummy. Kids go crazy for this."]}
                  cost="₹2,500–₹4,000/day for family of four (excl. accommodation)" />
                <DayCard day="Day 4–5" title="Jodhpur — Forts and Camels"
                  items={["Mehrangarh Fort — has a dedicated children's section with Rajasthani games and crafts.","Umaid Bhawan Palace Museum (₹100) — the Maharaja's palace, one wing is a museum.","Camel ride at Osian village near Jodhpur (1.5hrs from city) — more authentic than tourist camps.","Clock Tower market — colourful and sensory overload in the best way for kids."]}
                  cost="₹2,000–₹3,500/day for family of four (excl. accommodation)" />
                <DayCard day="Day 6–7" title="Udaipur — Lakes and Puppets"
                  items={["Shilpgram craft village (₹50) — live demonstrations of Rajasthani crafts, folk performances daily.","Fateh Sagar Lake boat ride — separate from Pichola, less touristy, kids love the mini islands.","Bagore ki Haveli sunset puppet show (₹50–₹150) — 45-min Rajasthani puppet performance daily at 7pm.","City Palace + boat ride on Lake Pichola."]}
                  cost="₹2,000–₹3,500/day for family of four (excl. accommodation)" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 7-Day Cost (family of four) · </span>
                  <span className="font-serif text-base text-ink font-light">₹45,000–₹70,000 including accommodation + transport</span>
                </div>
              </div>
            )}

            {/* Plan D */}
            {activeTab === "D" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-2">
                  <span className="text-2xl">🏰</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Luxury Plan — 3 Cities, Palace Hotels</p>
                    <p className="text-xs text-purple-600 font-light">Jaipur + Jodhpur + Udaipur · Fewer transitions, deeper experience</p>
                  </div>
                </div>
                <DayCard day="Day 1–3" title="Jaipur — Rambagh Palace"
                  items={["Stay: Rambagh Palace (₹25,000–₹45,000/night) — former palace of the Maharaja of Jaipur.","Private Amber Fort tour with historian guide (₹3,000–₹5,000) — not a tourist guide, a real historian.","Rajasthan School of Art private workshop — learn block printing or miniature painting (₹2,000–₹3,000).","Exclusive access: Some Jaipur heritage properties offer private sunrise access to Amber Fort rooftop."]}
                  cost="₹15,000–₹25,000 for two per day (excl. accommodation)" />
                <DayCard day="Day 4–5" title="Jodhpur — Raas Hotel"
                  items={["Stay: Raas Jodhpur (₹15,000–₹25,000/night) — boutique luxury with the fort as backdrop.","Mehrangarh Fort at night — exclusive after-hours dinner inside the fort for Raas guests.","Bishnoi Village Safari (private, ₹5,000–₹8,000 for two) — wildlife and village experience.","Private cooking class with a royal Rajasthani family — arranged through hotel."]}
                  cost="₹15,000–₹25,000 for two per day (excl. accommodation)" />
                <DayCard day="Day 6–7" title="Udaipur — Taj Lake Palace"
                  items={["Stay: Taj Lake Palace (₹25,000–₹60,000/night) — white marble palace floating on Lake Pichola. Only accessible by boat.","Darikhana at Leela Palace — fine dining tasting menu of royal Rajasthani cuisine (₹5,000–₹8,000 for two).","Sunset cruise in private boat with butler service.","Vintage car tour of Udaipur in a 1940s Rolls Royce (arrange through hotel)."]}
                  cost="₹20,000–₹35,000 for two per day (excl. accommodation)" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 7-Day Cost (for two) · </span>
                  <span className="font-serif text-base text-ink font-light">₹3,00,000–₹6,00,000 — the trip of a lifetime</span>
                </div>
              </div>
            )}
          </section>

          {/* Budget Table */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">💑 Couple</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">👨‍👩‍👧 Family</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">🏰 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (7N)", "₹6,000–₹10,500", "₹28,000–₹56,000", "₹21,000–₹42,000", "₹1,40,000–₹3,50,000"],
                    ["🍽 Food & Drinks", "₹4,000–₹6,000", "₹12,000–₹20,000", "₹14,000–₹21,000", "₹35,000–₹70,000"],
                    ["🚗 Transport", "₹5,000–₹8,000", "₹14,000–₹18,000", "₹18,000–₹24,000", "₹30,000–₹50,000"],
                    ["🎯 Entries & Activities", "₹2,500–₹4,000", "₹5,000–₹8,000", "₹6,000–₹10,000", "₹20,000–₹40,000"],
                    ["🛍 Shopping", "₹2,000–₹5,000", "₹5,000–₹15,000", "₹3,000–₹8,000", "₹20,000+"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["₹20,000–₹30,000", "₹32,000–₹58,500", "₹15,500–₹26,250", "₹1,22,500+"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">All prices INR 2026. International visitors: budget ₹30,000–₹50,000/person for quality mid-range. Rajasthan offers extraordinary value vs equivalent heritage destinations in Europe.</p>
          </section>

          {/* ── MID-ARTICLE DOWNLOAD BANNER ── */}
          <div className="my-10 bg-ink rounded-2xl overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center gap-5 px-6 py-6">
              <div className="flex-1 text-center sm:text-left">
                <p className="text-gold text-xs tracking-[0.15em] uppercase font-medium mb-1">Save this guide offline</p>
                <p className="font-serif text-white text-xl font-light leading-snug mb-1">
                  Rajasthan 7-Day PDF — Free Download
                </p>
                <p className="text-white/50 text-xs font-light">
                  All 7 days · budget table · packing list · maps — print it, pin it, use it offline
                </p>
              </div>
              <div className="flex-shrink-0">
                <DownloadButton
                  slug="rajasthan-7-days"
                  title="Rajasthan 7-Day Itinerary"
                  variant="secondary"
                  className="!border-gold !text-gold hover:!bg-gold hover:!text-ink"
                />
              </div>
            </div>
          </div>

          {/* ── RAJASTHAN AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Rajasthan"
            hotels={[
              { name: "Rambagh Palace", type: "5★ Luxury Palace · Jaipur", price: "From ₹25,000/night", rating: "5", badge: "Iconic", url: "https://www.booking.com/hotel/in/rambagh-palace-jaipur.html?aid=2820480" },
              { name: "Raas Jodhpur", type: "Boutique Luxury · Jodhpur", price: "From ₹15,000/night", rating: "5", badge: "Couple pick", url: "https://www.booking.com/hotel/in/raas-jodhpur.html?aid=2820480" },
              { name: "Taj Lake Palace", type: "5★ Floating Palace · Udaipur", price: "From ₹28,000/night", rating: "5", badge: "Most romantic", url: "https://www.booking.com/hotel/in/taj-lake-palace-udaipur.html?aid=2820480" },
              { name: "Dera Rawatsar", type: "Heritage Haveli · Jaipur", price: "From ₹3,500/night", rating: "4", badge: "Best value", url: "https://www.booking.com/hotel/in/dera-rawatsar-jaipur.html?aid=2820480" },
            ]}
            activities={[
              { name: "Amber Fort Skip-the-Line Guided Tour", duration: "3 hours", price: "From ₹800/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=jaipur&partner_id=PSZA5UI" },
              { name: "Mehrangarh Fort Audio Tour + Entry", duration: "2.5 hours", price: "From ₹600/person", badge: "Best in Jodhpur", url: "https://www.getyourguide.com/s/?q=jodhpur&partner_id=PSZA5UI" },
              { name: "Jaisalmer Desert Overnight Camp + Camel Safari", duration: "Overnight", price: "From ₹2,500/person", badge: "Unforgettable", url: "https://www.getyourguide.com/s/?q=jaisalmer&partner_id=PSZA5UI" },
              { name: "Lake Pichola Private Sunset Boat", duration: "45 minutes", price: "From ₹1,500/person", url: "https://www.getyourguide.com/s/?q=udaipur&partner_id=PSZA5UI" },
              { name: "Bishnoi Village Safari — Jodhpur", duration: "Half day", price: "From ₹2,000/person", url: "https://www.getyourguide.com/s/?q=jodhpur&partner_id=PSZA5UI" },
            ]}
            pdfProductId="rajasthan-7-days-pdf"
          />

          <Stay22Widget destination="Jaipur, Rajasthan, India" label="Rajasthan" />

          {/* Rajasthan Destination Gallery */}
          <DestinationGallery
            title="Rajasthan — Must-See Places"
            subtitle="Click each thumbnail to explore the famous sights across the royal circuit."
            spots={[
              { name: "Amber Fort, Jaipur",       query: "amber fort jaipur architecture sunrise reflection no people",     desc: "India's most photographed fort — arrive at 6am before the crowds. The Sheesh Mahal mirror hall alone is worth the trip." },
              { name: "Mehrangarh Fort, Jodhpur",  query: "mehrangarh fort jodhpur blue city architecture aerial landscape", desc: "Rising 125 metres above the Blue City — the best fort in India. The view over the indigo-painted houses is breathtaking." },
              { name: "Jaisalmer Fort",             query: "jaisalmer fort golden sandstone architecture rajasthan desert",   desc: "The only living fort in India — 3,000 people live inside these 12th-century sandstone walls." },
              { name: "Lake Pichola, Udaipur",      query: "lake pichola udaipur palace reflection water architecture",      desc: "The floating Lake Palace Hotel sits in the middle of this lake. Sunset from Ambrai Ghat is one of India's most romantic views." },
              { name: "Sam Sand Dunes, Jaisalmer",  query: "thar desert sand dunes golden sunset landscape no people",       desc: "The Thar Desert at sunset — golden dunes stretching to the horizon. Sleep under the stars at a desert camp." },
            ]}
          />

          {/* Mehrangarh image */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage imageKey="rajasthanFort" fallback="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=900&q=80" alt="Mehrangarh Fort rising above the blue city of Jodhpur" width={860} height={440} className="w-full object-cover h-72 md:h-[380px]" />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">Mehrangarh Fort, Jodhpur — rising 125 metres above the Blue City. The best fort in India, and it&apos;s not close.</p>
            </div>
          </div>

          {/* Route Maps */}
          <section id="maps" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗺️ Route Maps — Day by Day</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Every route is geographically optimised. Open the Google Maps link before you leave each morning.</p>

            <div className="bg-gold/10 border border-gold/30 rounded-xl p-5 mb-6">
              <p className="font-medium text-sm text-ink mb-2">The Master Circuit</p>
              <div className="flex flex-wrap items-center gap-1.5">
                {["Delhi/Jaipur Airport", "JAIPUR (2 days)", "380km/5.5hrs ↓", "JODHPUR (1.5 days)", "285km/5hrs ↓", "JAISALMER (1.5 days)", "540km/10-12hrs ↓", "UDAIPUR (2 days)", "Udaipur Airport"].map((s, i) => (
                  <span key={i} className={`text-xs px-2.5 py-1 rounded-full font-light ${s.includes("↓") || s.includes("Airport") ? "text-muted" : "bg-white border border-parchment-2 text-ink"}`}>{s}</span>
                ))}
              </div>
              <a href="https://www.google.com/maps/dir/Jaipur,+Rajasthan/Jodhpur,+Rajasthan/Jaisalmer,+Rajasthan/Ranakpur+Temple,+Rajasthan/Udaipur,+Rajasthan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline mt-3">📍 Open Full Circuit in Google Maps →</a>
            </div>

            <div className="space-y-4">
              <RouteCard label="Jaipur · Day 2" day="The Fort Circuit"
                stops={["Amber Fort 6am", "Panna Meena Stepwell", "City Palace", "Jantar Mantar", "Nahargarh Fort 5:30pm"]}
                distance="22km · 1hr driving (spread across day)"
                note="Amber Fort is north of city — do it first in morning light. City Palace + Jantar Mantar are next to each other. Nahargarh is a natural sunset endpoint."
                color="border-amber-200 bg-amber-50"
                url="https://www.google.com/maps/dir/Amber+Fort,+Jaipur/Panna+Meena+Ka+Kund,+Jaipur/City+Palace,+Jaipur/Jantar+Mantar,+Jaipur/Nahargarh+Fort,+Jaipur" />
              <RouteCard label="Jodhpur · Day 4" day="The Blue City Loop"
                stops={["Mehrangarh Fort 7am", "Jaswant Thada", "Toorji Stepwell", "Sardar Market", "Blue City Lanes"]}
                distance="5km walking · Half day"
                note="All within 2km of each other. Walk where possible — the blue lanes are impossible to navigate by car. Budget 5–6 hours total."
                color="border-blue-200 bg-blue-50"
                url="https://www.google.com/maps/dir/Mehrangarh+Fort,+Jodhpur/Jaswant+Thada,+Jodhpur/Toorji+Ka+Jhalra,+Jodhpur/Sardar+Market,+Jodhpur" />
              <RouteCard label="Day 6 · Long Drive" day="Jaisalmer → Ranakpur → Udaipur"
                stops={["Jaisalmer 7am", "Barmer (lunch)", "Ranakpur Temple 2pm", "Udaipur 7pm"]}
                distance="~540km · 10–12hrs · Leave 7am"
                note="Pack food — very few good stops between Barmer and Ranakpur. The road is remote but beautiful. Private car only — no trains on this route."
                color="border-rose-200 bg-rose-50"
                url="https://www.google.com/maps/dir/Jaisalmer,+Rajasthan/Ranakpur+Jain+Temple,+Rajasthan/Udaipur,+Rajasthan" />
              <RouteCard label="Udaipur · Day 7" day="Lakes and Palaces"
                stops={["City Palace 8am", "Jagdish Temple", "Lake Pichola boat", "Saheliyon ki Bari", "Sajjangarh Palace", "Ambrai dinner"]}
                distance="12km · Spread across the day"
                note="Sajjangarh Palace on the hill is a 20-min drive from the lake — go at 5pm for panoramic views before driving back for dinner."
                color="border-teal-200 bg-teal-50"
                url="https://www.google.com/maps/dir/City+Palace+Udaipur/Jagdish+Temple+Udaipur/Lake+Pichola+Udaipur/Saheliyon+ki+Bari+Udaipur/Sajjangarh+Palace+Udaipur" />
            </div>

            <div className="mt-6 rounded-xl overflow-hidden border border-parchment-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3806624.0!2d74.0!3d26.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Rajasthan Travel Map" />
            </div>
          </section>

          {/* Rajasthan food image */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage imageKey="rajasthanFood" fallback="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&q=80" alt="Traditional Rajasthani thali with dal baati churma" width={860} height={380} className="w-full object-cover h-64" />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">The Rajasthani thali — dal baati churma, gatte ki sabzi, bajra roti — ₹150 at a local restaurant. The same costs ₹600 near tourist sights.</p>
            </div>
          </div>

          {/* Mistakes */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { icon: "🗺", title: "Trying to add Pushkar or Bikaner in 7 days", desc: "Every blog says 'add Pushkar!' but doesn't tell you it means 4+ extra hours of driving. In 7 days, stick to the Big Four. Pushkar and Bikaner deserve their own trips.", color: "bg-white border-parchment-2" },
                { icon: "🏕", title: "Booking the cheapest desert camp in Jaisalmer", desc: "The cheapest camps (₹500–₹800/person) have 50+ tourists, loud music, plastic tents. Spend ₹1,500–₹2,000/person minimum. The difference is transformative — you actually feel alone in the desert.", color: "bg-white border-parchment-2" },
                { icon: "🗿", title: "Doing Amber Fort without a guide", desc: "Without a guide you see rooms. With a guide you understand that the Sheesh Mahal's mirror ceiling was designed so the Maharaja's wife could do her makeup with a single candle. ₹500–₹800. Worth every rupee.", color: "bg-white border-parchment-2" },
                { icon: "🚌", title: "Taking buses between cities", desc: "State buses add 3–4hrs to every journey and are genuinely uncomfortable. Train for budget travellers, private car for everyone else. Never buses.", color: "bg-white border-parchment-2" },
                { icon: "🛍", title: "Shopping on Day 1 in every city", desc: "Day 1 prices are tourist prices. By Day 2 you know which lanes have quality work, what fair prices look like, and which shops are actually selling handmade vs factory goods. Shop on your last full day in each city.", color: "bg-white border-parchment-2" },
                { icon: "🌡", title: "Visiting April–September", desc: "Rajasthan in summer reaches 45–48°C. The desert is genuinely dangerous. October–March only. Late February–March is the sweet spot: good weather, lower prices, blooming countryside.", color: "bg-white border-parchment-2" },
              ].map((m) => <TipCard key={m.title} {...m} />)}
            </div>
          </section>

          {/* Pro Tips */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips — What the Guidebooks Don&apos;t Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "👑", title: "The Mehrangarh audio guide is narrated by Prince Charles", desc: "45 minutes of genuine royal history, not tourist-brochure content. ₹200. The best money you'll spend in Jodhpur.", color: "bg-amber-50 border-amber-200" },
                { icon: "🍽", title: "Rajasthan's best meal costs ₹150", desc: "A thali with unlimited refills of dal baati churma, gatte ki sabzi, bajra roti and kheer at a local dhaba. Ask your guesthouse owner where locals eat — not what's in the guidebook.", color: "bg-amber-50 border-amber-200" },
                { icon: "⛩", title: "Jain temples inside Jaisalmer Fort are India's most underrated sight", desc: "Built 12th–15th centuries, intricately carved yellow sandstone. Entry ₹50. Most tourists walk past the entrance without realising what's inside.", color: "bg-teal-50 border-teal-200" },
                { icon: "📱", title: "Book Amber Fort online the night before", desc: "Entry is capped. Walk-in queue starts at 7am, can take 45 minutes. Online booking (archaeologicalsurvey.in) skips the queue entirely.", color: "bg-teal-50 border-teal-200" },
                { icon: "🌅", title: "Udaipur's best sunset is NOT Lake Pichola ghat", desc: "Walk 15 minutes further to Ambrai Ghat — same lake, same palace view, half the crowd. Or go to Sajjangarh Palace hilltop at 5pm for a panoramic view over everything.", color: "bg-rose-50 border-rose-200" },
                { icon: "🦌", title: "Bishnoi Village Safari near Jodhpur is more moving than any fort", desc: "The Bishnoi community has protected wildlife for 500+ years on religious grounds. Seeing wild blackbucks graze 2 metres away is unlike anything else in India. ₹2,000–₹3,500 for half-day jeep safari.", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* CTA */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Planned for You?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">Tell us your dates, group and budget — we&apos;ll send a personalised Rajasthan itinerary within 24 hours. Free.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Rajasthan Trip →</button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Rajasthan?", a: "7 days covers the main circuit — Jaipur, Jodhpur, Jaisalmer, Udaipur. 10 days lets you add Pushkar and slow down. 14 days includes Bikaner and Ranthambhore." },
                { q: "What is the best time to visit Rajasthan?", a: "October–March. Oct–Nov for best value, Dec–Jan for peak season, Feb–Mar for the sweet spot. Avoid April–September — temperatures reach 45–48°C." },
                { q: "How much does a 7-day Rajasthan trip cost?", a: "Budget solo: ₹20,000–₹30,000. Couple mid-range: ₹60,000–₹90,000 for two. Family of four: ₹45,000–₹70,000. Palace hotel luxury: ₹3,00,000+ for two." },
                { q: "What is the best route for Rajasthan in 7 days?", a: "Jaipur → Jodhpur → Jaisalmer → Udaipur. Never reverse it — the reverse adds 4–5 hours of unnecessary backtracking. Total ~1,430km, best with a private car and driver." },
                { q: "Should I hire a private car or take trains?", a: "Budget: trains between cities (2AC or 3AC) + autos locally. Couples/families: private car + driver for all 7 days (₹18,000–₹25,000 + fuel ₹8,000–₹12,000). Split between 2–3 people it's competitive with trains. The Jaisalmer→Udaipur leg has no direct train so a car is necessary regardless." },
                { q: "Is Rajasthan safe for solo female travellers?", a: "Generally yes — it's one of India's most-visited states with well-developed tourist infrastructure. Book accommodation in advance, dress modestly at religious sites, use pre-booked transport, and avoid isolated areas at night." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── END-OF-ARTICLE DOWNLOAD BANNER ── */}
          <div className="my-10 border-2 border-gold/30 bg-gradient-to-br from-amber-50 to-parchment rounded-2xl p-7 text-center">
            <p className="text-3xl mb-3" aria-hidden="true">📄</p>
            <h3 className="font-serif text-ink text-2xl font-light mb-2">
              Take This Guide With You
            </h3>
            <p className="text-muted text-sm font-light mb-5 max-w-sm mx-auto leading-relaxed">
              You&apos;ve just read the full Rajasthan itinerary. Download it as a PDF —
              print it, share it, use it offline at the airport or in the desert.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <DownloadButton
                slug="rajasthan-7-days"
                title="Rajasthan 7-Day Itinerary"
                variant="primary"
              />
              <p className="text-muted/80 text-xs">Free · 2 guides per email · No credit card</p>
            </div>
          </div>

          {/* Comments */}
          <Comments />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Explore More India Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Goa in 3 Days — Budget to Luxury", href: "/blog/goa-3-days", soon: false },
                { label: "Kerala Backwaters — 5 Day Guide", href: "/blog/kerala-5-days", soon: true },
                { label: "Golden Triangle — Delhi, Agra, Jaipur", href: "/blog/golden-triangle-7-days", soon: true },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "Read →"}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto px-6 md:px-8 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Rajasthan trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-rajasthan", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/rajasthan-trip-cost-couple", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-rajasthan", label: "How to get there", icon: "✈️" },
                { href: "/blog/rajasthan-travel-tips", label: "Travel tips", icon: "📋" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <RelatedGuides currentSlug="rajasthan-7-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
