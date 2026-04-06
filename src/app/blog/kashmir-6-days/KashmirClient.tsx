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
import Stay22Widget from "@/components/ui/Stay22Widget";
import RelatedGuides from "@/components/blog/RelatedGuides";
import CombineWith from "@/components/blog/CombineWith";
import Breadcrumb from "@/components/blog/Breadcrumb";

const TOC = [
  { id: "plan",      emoji: "⚡", label: "Pick Your Plan" },
  { id: "cities",    emoji: "📍", label: "The 4 Destinations" },
  { id: "season",    emoji: "🌡️", label: "Best Time to Visit" },
  { id: "itinerary", emoji: "📅", label: "The Itineraries" },
  { id: "houseboat", emoji: "🛶", label: "Dal Lake Houseboat Guide" },
  { id: "budget",    emoji: "💰", label: "Budget Breakdown" },
  { id: "mistakes",  emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",      emoji: "💡", label: "Pro Tips" },
  { id: "faq",       emoji: "❓", label: "FAQ" },
];

function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const u = () => { const e = document.documentElement; setP(Math.min(100, (e.scrollTop / (e.scrollHeight - e.clientHeight)) * 100)); };
    window.addEventListener("scroll", u, { passive: true });
    return () => window.removeEventListener("scroll", u);
  }, []);
  return <div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2"><div className="h-full bg-gold transition-all duration-100" style={{ width: `${p}%` }} /></div>;
}

function ShareBar() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      <a href={`mailto:?subject=Kashmir 6-Day Itinerary&body=${typeof window !== "undefined" ? window.location.href : ""}`} className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://x.com/intent/tweet?text=Kashmir%206-Day%20Travel%20Guide&url=${typeof window !== "undefined" ? window.location.href : ""}`} target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
      <button onClick={() => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">{copied ? "✓ Copied" : "Copy Link"}</button>
    </div>
  );
}

function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden mb-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors">
        <div className="flex items-center gap-3"><span className="font-serif text-xl text-amber-900 font-light">{day}</span><span className="text-sm text-ink font-medium">{title}</span></div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">{items.map((item, i) => <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed"><span className="text-blue-400 mt-1 flex-shrink-0 text-xs">●</span>{item}</li>)}</ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2"><span className="text-lg">💰</span><span className="text-xs text-muted font-light">Est. cost: </span><span className="text-xs font-medium text-ink">{cost}</span></div>
        </div>
      )}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <div className="px-5 pb-5 pt-1 border-t border-parchment-2"><p className="text-sm text-muted font-light leading-relaxed">{a}</p></div>}
    </div>
  );
}

function TipBox({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
  return (
    <div className={`rounded-xl p-4 border ${color}`}>
      <div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{icon}</span><div><p className="font-medium text-sm text-stone-900 mb-1">{title}</p><p className="text-xs text-gray-700 font-light leading-relaxed">{desc}</p></div></div>
    </div>
  );
}

export default function KashmirClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A"|"B"|"C"|"D">("B");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget",    sub: "₹18k–28k total" },
    { id: "B" as const, emoji: "💑", label: "Honeymoon", sub: "₹55k–90k for two" },
    { id: "C" as const, emoji: "🏔️", label: "Adventure", sub: "Trekking focus" },
    { id: "D" as const, emoji: "👨‍👩‍👧", label: "Family",   sub: "₹50k–80k for four" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kashmir" />
      <main className="bg-cream min-h-screen">

        {/* HERO */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage imageKey="kashmir" fallback="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1600&q=85" alt="Dal Lake Kashmir houseboat" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Kashmir 6 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-blue-600 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Heaven on Earth</span>
                <span className="text-white/60 text-xs">March 21, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">Kashmir in 6 Days:<em className="italic text-blue-300"> Srinagar, Gulmarg & Pahalgam</em></h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">Dal Lake · Gulmarg · Pahalgam · Sonamarg — 4 complete plans, real budgets, houseboat guide and the season mistake that ruins most Kashmir trips.</p>
            </div>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted"><span>🏔️ Kashmir</span><span>·</span><span>🗓 6 Days</span><span>·</span><span>💰 From ₹18,000</span></div>
          </div>

          <blockquote className="border-l-4 border-blue-400 pl-6 mb-10 bg-blue-50 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">"Gar firdaus bar-rue zamin ast, hamin ast o hamin ast o hamin ast." — If there is heaven on earth, it is here, it is here, it is here. Persian inscription at the Mughal court, describing Kashmir.</p>
          </blockquote>

          {/* PICK PLAN */}
          <section id="plan" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Pick Your Plan in 10 Seconds</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-blue-400 hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-blue-600 mt-2 font-medium group-hover:underline">Plan {p.id} →</p>
                </button>
              ))}
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-sm text-blue-900 font-light leading-relaxed"><strong className="font-medium">Best for most people: Plan B (Honeymoon).</strong> Kashmir is India's #1 honeymoon destination for good reason — the combination of Dal Lake at dawn, Gulmarg's snow meadows, and Pahalgam's pine forests is unlike anywhere else in India. Even if you're not honeymooning, this plan gives you the best version of Kashmir.</p>
            </div>
          </section>

          {/* DESTINATIONS */}
          <section id="cities" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📍 The 4 Destinations</h2>
            <div className="space-y-3">
              {[
                { city: "🏙️ Srinagar", days: "2–3 days", color: "border-l-4 border-blue-400 bg-blue-50", desc: "Kashmir's capital sits on the banks of Dal Lake — the most beautiful lake in India. The old city has Mughal gardens, centuries-old mosques, and the famous shikara boats. The 7km Boulevard along the lake is where most hotels are. Dal Lake changes completely — at dawn it's misty and silent, by afternoon it's a floating market.", must: ["Dal Lake shikara at dawn", "Nishat Bagh + Shalimar Bagh Mughal gardens", "Old city Jama Masjid + Hazratbal Shrine", "Shankaracharya Temple (city views)", "Floating vegetable market (5am)"] },
                { city: "❄️ Gulmarg", days: "1–2 days", color: "border-l-4 border-cyan-400 bg-cyan-50", desc: "52km from Srinagar. India's best ski resort at 2,650m — receives 4–8 feet of snowfall Dec–Feb. In summer it's a vast green meadow surrounded by Himalayan peaks. The Gondola is Asia's second-highest cable car, rising to 3,980m. One of India's most dramatic viewpoints.", must: ["Gondola ride to Kongdori + Apharwat (Phase 1 + 2)", "Skiing Dec–Feb (equipment rental available)", "Horse ride across Gulmarg meadow", "Snow activities in winter", "Trek to Alpather Lake in summer"] },
                { city: "🌲 Pahalgam", days: "1–2 days", color: "border-l-4 border-green-400 bg-green-50", desc: "95km from Srinagar — the Valley of Shepherds. Where the Lidder river meets towering pine forests and open meadows. Three famous valleys: Betaab Valley, Aru Valley, Chandanwari. Starting point for the Amarnath Yatra pilgrimage. Bollywood films have been shot here for decades.", must: ["Betaab Valley — green meadows, river", "Aru Valley — quiet, horses, Himalayan backdrop", "Chandanwari — snow even in summer", "Lidder river walk through pine forests", "Mini Switzerland viewpoint"] },
                { city: "🏔️ Sonamarg", days: "1 day", color: "border-l-4 border-amber-400 bg-amber-50", desc: "87km from Srinagar — Meadow of Gold. The most dramatic landscape in Kashmir — glaciers visible from the road, the Thajiwas Glacier is a 2km walk from the main town. Gateway to Ladakh. Highest point accessible by road before Zoji La pass.", must: ["Thajiwas Glacier walk (2km easy trek)", "Glacier activities — sledging, snowball fights year-round", "Baltal base camp views", "Drive through Sindh valley en route"] },
              ].map((d) => (
                <div key={d.city} className={`rounded-xl p-5 ${d.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <h3 className="font-serif text-lg font-normal text-ink">{d.city}</h3>
                    <span className="text-xs font-medium text-teal bg-white px-3 py-1 rounded-full border border-parchment-2">{d.days}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed mb-3">{d.desc}</p>
                  <div className="flex flex-wrap gap-2">{d.must.map((m) => <span key={m} className="text-[0.65rem] bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60 font-light">{m}</span>)}</div>
                </div>
              ))}
            </div>
          </section>

          {/* BEST TIME */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { season: "April–June", icon: "🌸", title: "Spring & Early Summer", desc: "Tulip gardens in bloom (March–April), apple orchards flowering, temperatures 15–25°C. Best for first-timers. Srinagar Tulip Garden is Asia's largest — 1.5 million tulips.", best: "Best overall for sightseeing", color: "bg-pink-50 border-pink-200" },
                { season: "Jul–Aug", icon: "🌧️", title: "Monsoon — Avoid", desc: "Heavy rainfall, road closures, leeches on treks, landslides on mountain roads. Pahalgam and Sonamarg are particularly affected. Not recommended.", best: "Avoid this season", color: "bg-red-50 border-red-200" },
                { season: "Sep–Oct", icon: "🍁", title: "Autumn — Best Season", desc: "Post-monsoon clarity, golden chinar trees turning red and gold, temperatures 10–20°C. Fewer crowds than peak summer. The most photogenic time in Kashmir.", best: "Best photography + value", color: "bg-amber-50 border-amber-200" },
                { season: "Dec–Feb", icon: "❄️", title: "Winter — Snow Season", desc: "Gulmarg receives 4–8 feet of snow, best skiing in India. Pahalgam also snow-covered. Dal Lake sometimes partially freezes. Very cold (−5 to 8°C) but magical.", best: "Best for snow + skiing", color: "bg-blue-50 border-blue-200" },
              ].map((s) => (
                <div key={s.season} className={`rounded-xl p-4 border ${s.color}`}>
                  <div className="flex items-center gap-2 mb-2"><span className="text-xl">{s.icon}</span><div><p className="font-medium text-sm text-stone-900">{s.season} — {s.title}</p><p className="text-[0.65rem] font-medium text-teal">{s.best}</p></div></div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ITINERARIES */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The Itineraries</h2>
            <div className="flex gap-2 flex-wrap mb-8 p-1 bg-parchment rounded-xl">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 ${activeTab === p.id ? "bg-white shadow text-ink border border-parchment-2" : "text-muted hover:text-ink"}`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            {/* PLAN A — BUDGET */}
            {activeTab === "A" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">💰</span>
                  <div><p className="text-sm font-medium text-amber-800">Budget Plan — Rs.18,000–Rs.28,000 per person for 6 days</p><p className="text-xs text-amber-600 font-light">Budget houseboat · Shared taxis · Local food</p></div>
                </div>
                <DayCard day="Day 1" title="Arrive Srinagar + Dal Lake"
                  items={[
                    "Fly into Srinagar (SXR). Pre-paid taxi from airport to Dal Lake — Rs.400–Rs.600. Never negotiate with random touts at the airport.",
                    "Check in to a budget houseboat on Dal Lake — Rs.1,500–Rs.2,500/night including breakfast. WHY houseboat: waking up on the lake as mist lifts over the Zabarwan mountains is worth every rupee over a regular hotel.",
                    "Evening: shikara ride on Dal Lake — negotiate Rs.300–Rs.500/hour for the boat, not per person. The lake at dusk with the mountains behind is unforgettable.",
                    "Dinner on your houseboat or at a local wazwan restaurant nearby — try roghan josh and rice for Rs.200–Rs.300.",
                  ]} cost="Rs.1,000–Rs.1,800 excluding houseboat" />
                <DayCard day="Day 2" title="Srinagar — Gardens + Old City"
                  items={[
                    "6am: floating vegetable market on Dal Lake — farmers bring vegetables by shikara to sell from boat to boat. Free to watch, extraordinary sight.",
                    "Morning: Nishat Bagh and Shalimar Bagh — Mughal terraced gardens built by Emperor Jahangir in the 17th century. Entry Rs.24 each. Both take 45 minutes.",
                    "Afternoon: Old City walk — Jama Masjid (largest mosque in Kashmir, free), Hazratbal Shrine (holds a relic of Prophet Muhammad), Nowhatta Chowk for street food.",
                    "5pm: Shankaracharya Temple (free) — hilltop Hindu temple with panoramic views over Srinagar and Dal Lake.",
                    "WHY both old and new: Srinagar is two cities — the Mughal garden city and the ancient Kashmiri city. Missing either means missing half.",
                  ]} cost="Rs.500–Rs.900" />
                <DayCard day="Day 3" title="Gulmarg — Asia's Highest Gondola"
                  items={[
                    "Shared taxi Srinagar → Gulmarg (52km, 1.5hrs) — Rs.250–Rs.400/seat. Leave by 8am.",
                    "Gondola Phase 1 to Kongdori (2,650m → 3,080m): Rs.840 return. Book at the ticket office — long queues after 10am.",
                    "Gondola Phase 2 to Apharwat (3,080m → 3,980m): Rs.920 additional. Only open in good weather — check conditions. The view from the top across the Himalayan range is extraordinary.",
                    "Horse ride across Gulmarg meadow in summer (Rs.600–Rs.1,000) or snowboard/ski rental in winter (Rs.1,500–Rs.2,500/day).",
                    "Return to Srinagar by 5pm — shared taxi back Rs.250–Rs.400.",
                  ]} cost="Rs.2,500–Rs.4,500 total (gondola + activities + transport)" />
                <DayCard day="Day 4–5" title="Pahalgam — Valley of Shepherds"
                  items={[
                    "Shared taxi Srinagar → Pahalgam (95km, 2.5hrs) — Rs.350–Rs.500/seat. Scenic drive through Anantnag.",
                    "Stay overnight in Pahalgam — budget guesthouse Rs.800–Rs.1,500/night. The town itself is walkable.",
                    "Day 4 afternoon: Betaab Valley — green meadow surrounded by pine forests and snow peaks. Named after the Sunny Deol film. Entry Rs.50, shared jeep Rs.150.",
                    "Day 5: Aru Valley (15km from Pahalgam, jeep Rs.200) — quieter than Betaab, horses graze by the river, stunning Himalayan backdrop. Then Chandanwari (26km) — snow visible year-round.",
                    "Evening: Lidder river walk through pine forests. The Baisaran meadow (2km hike or horse Rs.400) — known as mini-Switzerland, above the treeline.",
                  ]} cost="Rs.1,500–Rs.2,500/day excluding accommodation" />
                <DayCard day="Day 6" title="Sonamarg + Depart"
                  items={[
                    "Day trip Srinagar → Sonamarg (87km, 2.5hrs) — shared taxi Rs.300–Rs.450/seat or private taxi Rs.2,000–Rs.2,500.",
                    "Thajiwas Glacier — 2km easy walk from the main town or pony ride Rs.400–Rs.600. Glacial ice visible year-round.",
                    "The drive through Sindh valley to Sonamarg is one of Kashmir's most scenic — snow-capped peaks reflected in the Sindh river.",
                    "Return to Srinagar by 4pm. Evening flight or overnight stay before morning departure.",
                  ]} cost="Rs.1,500–Rs.2,500 including transport" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center mt-2">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 6-Day Budget (per person) · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.18,000–Rs.28,000 including accommodation, transport + all activities</span>
                </div>
              </div>
            )}

            {/* PLAN B — HONEYMOON */}
            {activeTab === "B" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl mb-6">
                  <span className="text-2xl">💑</span>
                  <div><p className="text-sm font-medium text-rose-800">Honeymoon Plan — Rs.55,000–Rs.90,000 for two</p><p className="text-xs text-rose-600 font-light">Heritage houseboat · Private car + driver · Romantic dining</p></div>
                </div>
                <DayCard day="Day 1" title="Arrive + Heritage Houseboat"
                  items={[
                    "Private car from airport (Rs.600–Rs.900). Check in to a category A or deluxe heritage houseboat — look for ones with carved walnut wood interiors, Rs.4,000–Rs.8,000/night per couple including all meals.",
                    "Late afternoon shikara with your own private boat (Rs.800–Rs.1,200/hour) — the boatman takes you through the lotus gardens and quiet channels away from tourist traffic.",
                    "Sunset: float across the lake watching the Zabarwan mountains turn pink. Have your houseboat cook prepare a wazwan dinner served on the deck.",
                    "WHY Kashmir for honeymoon: Dal Lake at dawn, snow in Gulmarg, the pine forests of Pahalgam — three completely different landscapes in six days. No other honeymoon destination in India offers this range.",
                  ]} cost="Rs.6,000–Rs.10,000 for two" />
                <DayCard day="Day 2" title="Srinagar — Gardens + Floating Market"
                  items={[
                    "5:30am: floating vegetable market by shikara — arrive before 7am for the full spectacle.",
                    "Mughal Gardens: Nishat Bagh and Shalimar Bagh with a private guide (Rs.800–Rs.1,200) — learn why Jehangir called Kashmir paradise.",
                    "Old City heritage walk with guide — Jama Masjid, Hazratbal, the old wooden mosque architecture that's found nowhere else.",
                    "Afternoon: Cashmere shopping — Khadi Emporium or the government handicrafts stores for authentic pashmina and khatamband (Rs.3,000–Rs.20,000 for quality pashmina).",
                    "Sunset dinner on a rooftop with Dal Lake view — Mughal Darbar restaurant.",
                  ]} cost="Rs.5,000–Rs.9,000 for two" />
                <DayCard day="Day 3" title="Gulmarg — Snow + Gondola"
                  items={[
                    "Private car to Gulmarg (52km, 1.5hrs) — Rs.2,000–Rs.2,500 for the car.",
                    "Book both Gondola phases in advance if possible (Rs.1,760/person total for both). Arrive at Gondola by 9am before queues build.",
                    "Winter: book a private skiing lesson (Rs.2,500–Rs.4,000) + equipment rental. Even beginners can manage the beginner slopes with instruction.",
                    "Summer: private horse ride across Gulmarg meadow to Khilanmarg (Rs.1,500–Rs.2,000 for two), picnic arranged by your hotel.",
                    "Stay overnight at The Khyber Himalayan Resort (Rs.8,000–Rs.20,000/night) — ski-in ski-out, most dramatic mountain setting in India.",
                  ]} cost="Rs.14,000–Rs.25,000 for two (Khyber + gondola + activities)" />
                <DayCard day="Day 4–5" title="Pahalgam — Pine Forests + River"
                  items={[
                    "Private car Gulmarg → Pahalgam (160km, 3.5hrs) — Rs.3,000–Rs.4,000.",
                    "Stay at The LaLiT Grand Palace Srinagar equivalent in Pahalgam — Pahalgam Hotel or Mountain Retreat (Rs.6,000–Rs.12,000/night).",
                    "Day 4: Betaab Valley and Aru Valley by private jeep. Arrange a riverside picnic lunch — your hotel can pack this.",
                    "Evening: Lidder river walk at golden hour. The combination of rushing river, pine fragrance and mountain silence is extraordinary.",
                    "Day 5: Baisaran meadow by horse (Rs.800–Rs.1,200 for two) — above the treeline, surrounded by peaks. Chandanwari glacier visit.",
                  ]} cost="Rs.10,000–Rs.18,000 for two per day" />
                <DayCard day="Day 6" title="Sonamarg + Final Dal Lake Evening"
                  items={[
                    "Morning: Sonamarg day trip by private car (Rs.3,000–Rs.4,000). Thajiwas Glacier pony ride for two.",
                    "Return to Srinagar for final night on Dal Lake houseboat.",
                    "Last evening: special dinner arranged on the houseboat deck with candles and Kashmiri wazwan — lamb dishes, nadru yakhni, dum aloo, phirni for dessert.",
                    "Night shikara under the stars — the houseboat owner can arrange a private evening boat ride.",
                  ]} cost="Rs.6,000–Rs.10,000 for two" />
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center mt-2">
                  <span className="text-xs text-rose-700 uppercase tracking-wide">Total 6-Day Honeymoon (for two) · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.55,000–Rs.90,000 including heritage houseboat, private car + all activities</span>
                </div>
              </div>
            )}

            {/* PLAN C — ADVENTURE */}
            {activeTab === "C" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl mb-6">
                  <span className="text-2xl">🏔️</span>
                  <div><p className="text-sm font-medium text-green-800">Adventure Plan — Trekking + Snow + Extreme Activities</p><p className="text-xs text-green-600 font-light">Kashmir Great Lakes Trek · Skiing in Gulmarg · River rafting</p></div>
                </div>
                <DayCard day="Day 1–2" title="Srinagar Base + Acclimatise"
                  items={[
                    "Day 1: Arrive, stay near Lal Chowk (budget Rs.800–Rs.1,500). Buy trekking supplies: Dry fruits, local energy bars, thermal layers from Polo View market.",
                    "Register with District Magistrate office if planning high-altitude treks above 3,500m — required and takes 2 hours.",
                    "Day 2: Acclimatisation hike — Shankaracharya Hill (1,100 steps) and Hari Parbat Fort walk. Check weather forecast for Gulmarg.",
                    "Meeting with licensed trek guide for Kashmir Great Lakes or Tarsar Marsar — Rs.1,500–Rs.2,500/day. Do not trek without a guide.",
                  ]} cost="Rs.2,000–Rs.3,500" />
                <DayCard day="Day 3–4" title="Gulmarg — Skiing + High Altitude"
                  items={[
                    "Gulmarg (winter): India's best skiing at Asia's highest ski resort. Beginner to advanced slopes. 3-day ski package Rs.8,000–Rs.15,000 (lessons + equipment + gondola).",
                    "Gulmarg (summer): Gondola to Apharwat (3,980m), hike to Mary's Shoulder (4,200m) — requires fitness and proper gear. No guide needed but take warm layers.",
                    "Alpather Lake trek (summer only) — 13km return from Apharwat, glacial lake frozen until July. One of Kashmir's most beautiful treks.",
                    "Night at Gulmarg — shared dormitory or budget hotel Rs.800–Rs.1,500.",
                  ]} cost="Rs.8,000–Rs.16,000 for 2 days (skiing) or Rs.2,000–Rs.4,000 (summer trekking)" />
                <DayCard day="Day 5" title="Pahalgam — River Rafting + Betaab Valley"
                  items={[
                    "River rafting on Lidder River — Grade 1-3 rapids, Rs.500–Rs.800/person. Best May–July when river is full.",
                    "Trek to Tulian Lake (11km one way, 3,353m) — one of Kashmir's most rewarding day treks. Start by 7am. Guide Rs.800–Rs.1,200.",
                    "Alternatively: Chandanwari to Sheshnag Lake (8km) — first stage of Amarnath Yatra route, spectacular high-altitude scenery.",
                  ]} cost="Rs.2,500–Rs.5,000" />
                <DayCard day="Day 6" title="Sonamarg + Baltal Camp"
                  items={[
                    "Sonamarg: base for Thajiwas Glacier trek (4km, 3,600m). Easy trail, no guide needed. Snow equipment available for rent Rs.200.",
                    "Advanced option: Nichnai Pass day hike (12km, 4,100m) — requires fitness and guide (Rs.1,200).",
                    "Zoji La viewpoint — 3km from Sonamarg, stand at the gateway to Ladakh.",
                    "Return Srinagar evening flight or next day.",
                  ]} cost="Rs.2,000–Rs.4,000" />
              </div>
            )}

            {/* PLAN D — FAMILY */}
            {activeTab === "D" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">👨‍👩‍👧</span>
                  <div><p className="text-sm font-medium text-blue-800">Family Plan — Rs.50,000–Rs.80,000 for four</p><p className="text-xs text-blue-600 font-light">Private car · Family houseboat · Child-friendly activities</p></div>
                </div>
                <DayCard day="Day 1–2" title="Srinagar — Houseboat + Gardens"
                  items={[
                    "Family houseboat: book a 2-bedroom houseboat (Rs.4,000–Rs.7,000/night for the whole boat, sleeps 4). Children love the novelty of sleeping on water.",
                    "Shikara ride: children can try rowing the shikara under supervision. Visit the floating gardens and vegetable market — children find this magical.",
                    "Mughal Gardens: Nishat Bagh has wide lawns for children to run around. Entry Rs.24/person.",
                    "Hari Parbat Fort (easy walk, good views) — children enjoy the watchtowers.",
                  ]} cost="Rs.5,000–Rs.8,000 for family per day" />
                <DayCard day="Day 3" title="Gulmarg — Snow for Kids"
                  items={[
                    "Private car family Gulmarg day trip (Rs.2,500–Rs.3,500 for the car).",
                    "Children love the snow — sledging, snowball fights, snowman building. Equipment available for hire Rs.100–Rs.200.",
                    "Gondola Phase 1 (Kongdori) is fine for children. Phase 2 (Apharwat) — only if children are 8+ and comfortable with heights.",
                    "Pony rides across Gulmarg meadow — children enjoy this. Rs.400–Rs.600 per horse.",
                  ]} cost="Rs.5,000–Rs.9,000 for family" />
                <DayCard day="Day 4–5" title="Pahalgam — Valleys + Ponies"
                  items={[
                    "Private car to Pahalgam (Rs.3,000–Rs.4,000). Stay at a family room hotel (Rs.3,000–Rs.5,000/night).",
                    "Betaab Valley: flat meadow, shallow river, perfect for children to play. Very safe.",
                    "Pony rides to Baisaran (mini-Switzerland) — children's highlight of the whole trip.",
                    "Lidder river: children can paddle in the shallow sections near the town.",
                  ]} cost="Rs.6,000–Rs.10,000 for family per day" />
                <DayCard day="Day 6" title="Sonamarg + Glacier Experience"
                  items={[
                    "Sonamarg day trip by private car (Rs.3,000–Rs.4,000). Children can touch the glacier — available year-round.",
                    "Sledging on the glacier — Rs.100/person, children love this regardless of season.",
                    "Return Srinagar. Final evening shikara ride on Dal Lake.",
                  ]} cost="Rs.4,000–Rs.7,000 for family" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center mt-2">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 6-Day Family (for four) · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.50,000–Rs.80,000 including private car, accommodation + activities</span>
                </div>
              </div>
            )}
          </section>

          {/* HOUSEBOAT GUIDE */}
          <section id="houseboat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🛶 Dal Lake Houseboat Guide</h2>
            <p className="text-sm text-muted font-light mb-6">The houseboat experience is what makes Kashmir unique. Here's how to do it right.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: "Categories", icon: "⭐", content: "D-class (budget): Rs.1,500–Rs.2,500/night. C-class: Rs.2,500–Rs.4,000. B-class: Rs.4,000–Rs.6,000. A-class (deluxe): Rs.6,000–Rs.12,000. Prices include breakfast and usually dinner. Always inspect before paying." },
                { title: "What to look for", icon: "🔍", content: "Working hot water (essential in winter). Clean bedding. Working electricity. Functioning toilet. Windows that open toward the lake, not a wall. Ask to see the bedroom before booking." },
                { title: "How to book", icon: "📱", content: "Book through your hotel or a trusted platform — Booking.com has verified houseboats. Avoid booking from men who approach you at the airport or ghat — often misleading photos and overcharging." },
                { title: "Best location", icon: "📍", content: "Nagin Lake houseboats are quieter than Dal Lake but less central. Dal Lake Boulevard-side houseboats are convenient. Inner lake houseboats (accessible only by shikara) are the most atmospheric." },
              ].map((item) => (
                <div key={item.title} className="bg-parchment rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center gap-2 mb-2"><span className="text-lg">{item.icon}</span><p className="font-medium text-sm text-stone-900">{item.title}</p></div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BUDGET TABLE */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead><tr className="bg-ink">
                  <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                  <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                  <th className="p-3.5 text-xs font-medium text-rose-300 text-center">💑 Honeymoon</th>
                  <th className="p-3.5 text-xs font-medium text-green-300 text-center">🏔️ Adventure</th>
                  <th className="p-3.5 text-xs font-medium text-blue-300 text-center">👨‍👩‍👧 Family</th>
                </tr></thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (6N)","₹9,000–₹15,000","₹30,000–₹60,000","₹6,000–₹9,000","₹18,000–₹30,000"],
                    ["🍽 Food","₹3,000–₹5,000","₹8,000–₹15,000","₹3,000–₹5,000","₹8,000–₹12,000"],
                    ["🚗 Transport","₹3,000–₹5,000","₹10,000–₹15,000","₹3,000–₹5,000","₹10,000–₹15,000"],
                    ["🎯 Activities","₹3,000–₹6,000","₹8,000–₹15,000","₹8,000–₹16,000","₹8,000–₹14,000"],
                    ["TOTAL per person","₹18,000–₹28,000","₹28,000–₹52,500","₹20,000–₹35,000","₹11,000–₹17,750"],
                  ].map(([cat,...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v,i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <AffiliateBlock
            destination="Kashmir Srinagar"
            hotels={[
              { name: "The Lalit Grand Palace", type: "5★ Heritage · Srinagar", price: "From ₹12,000/night", rating: "5", badge: "Most iconic", url: "https://www.booking.com/hotel/in/the-lalit-grand-palace-srinagar.html?aid=2820480" },
              { name: "Khyber Himalayan Resort", type: "5★ · Gulmarg", price: "From ₹8,000/night", rating: "5", badge: "Best in Gulmarg", url: "https://www.booking.com/hotel/in/the-khyber-himalayan-resort-spa.html?aid=2820480" },
              { name: "Welcome Hotel Dal View", type: "Heritage · Dal Lake", price: "From ₹5,000/night", rating: "4", badge: "Lake views", url: "https://www.booking.com/hotel/in/welcome-hotel-dal-view-srinagar.html?aid=2820480" },
            ]}
            activities={[
              { name: "Dal Lake Shikara Sunrise Tour", duration: "2 hours", price: "From ₹500/boat", badge: "Must do", url: `https://www.getyourguide.com/s/?q=srinagar&partner_id=PSZA5UI` },
              { name: "Gulmarg Gondola + Snow Activities", duration: "Full day", price: "From ₹1,800/person", badge: "Unforgettable", url: `https://www.getyourguide.com/s/?q=gulmarg&partner_id=PSZA5UI` },
              { name: "Kashmir Valley Sightseeing Tour", duration: "Full day", price: "From ₹2,500/person", url: `https://www.getyourguide.com/s/?q=srinagar&partner_id=PSZA5UI` },
            ]}
          />

          <Stay22Widget destination="Srinagar, Kashmir, India" label="Kashmir" />

          <DestinationGallery
            title="Kashmir — Must-See Places"
            subtitle="The most beautiful destination in India — click to explore."
            spots={[
              { name: "Dal Lake, Srinagar", query: "dal lake srinagar kashmir houseboat shikara morning", desc: "India's most beautiful lake — 18km² of water gardens, floating markets, and wooden houseboats against the Zabarwan mountains." },
              { name: "Gulmarg Snow", query: "gulmarg kashmir snow mountains gondola winter", desc: "India's best ski resort at 2,650m — Asia's second highest gondola, 4-8 feet of snowfall in winter, green meadows in summer." },
              { name: "Pahalgam Valley", query: "pahalgam valley kashmir betaab valley river pine", desc: "The Valley of Shepherds — pine forests, rivers and open meadows 95km from Srinagar." },
              { name: "Sonamarg Glacier", query: "sonamarg kashmir glacier himalaya mountain", desc: "Meadow of Gold — visible glaciers, Himalayan peaks and the gateway to Ladakh." },
              { name: "Mughal Gardens", query: "nishat bagh shalimar bagh mughal gardens kashmir", desc: "Terraced Mughal gardens built by Emperor Jahangir in the 17th century — among the finest surviving Mughal landscapes." },
            ]}
          />

          {/* MISTAKES */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { icon: "🌧️", title: "Visiting July–August", desc: "Monsoon season — road closures, leeches on treks, frequent rain, landslides on mountain roads to Sonamarg. April–June or September–October instead.", color: "bg-white border-parchment-2" },
                { icon: "🛶", title: "Booking a houseboat from airport touts", desc: "Men waiting at Srinagar airport with 'best houseboats' are showing you photos of deluxe properties then taking you to budget ones. Book in advance through Booking.com or your hotel.", color: "bg-white border-parchment-2" },
                { icon: "❄️", title: "Going to Gulmarg without checking snow conditions", desc: "Gondola Phase 2 closes in bad weather and heavy snow. Check conditions the night before — call your hotel in Gulmarg. A wasted Gondola day is an expensive disappointment.", color: "bg-white border-parchment-2" },
                { icon: "💎", title: "Buying pashmina from street vendors", desc: "Genuine Kashmiri pashmina costs Rs.3,000–Rs.20,000 minimum. Anything cheaper is either acrylic or mixed. Buy from J&K government emporiums or GI-tagged certified stores.", color: "bg-white border-parchment-2" },
                { icon: "🏔️", title: "Trekking without a guide", desc: "Above 3,000m in Kashmir, weather changes rapidly and paths aren't always marked. Always hire a licensed guide for Tulian Lake, Alpather, Kashmir Great Lakes. Rs.1,500–Rs.2,500/day.", color: "bg-white border-parchment-2" },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-4 border ${m.color}`}>
                  <div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{m.icon}</span><div><p className="font-medium text-sm text-stone-900 mb-1">❌ {m.title}</p><p className="text-xs text-gray-700 font-light leading-relaxed">{m.desc}</p></div></div>
                </div>
              ))}
            </div>
          </section>

          {/* PRO TIPS */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🌅", title: "Dal Lake at 5:30am is magical", desc: "Mist rises off the water, shikara boats emerge from the channels, the mountains glow pink. Stay on a houseboat and wake up to this. It's the single best thing about Kashmir.", color: "bg-blue-50 border-blue-200" },
                { icon: "🍛", title: "Wazwan is Kashmir's culinary tradition", desc: "36-course feast — roghan josh, gushtaba, dum aloo, nadru yakhni. Book a full wazwan dinner at a local family home through your hotel (Rs.600–Rs.1,000/person). Better than any restaurant.", color: "bg-amber-50 border-amber-200" },
                { icon: "🌸", title: "Tulip Garden — March–April only", desc: "Asia's largest tulip garden in Srinagar — 1.5 million tulips on terraced hillside above Dal Lake. Open for just 3-4 weeks in spring. Entry Rs.50. Extraordinary.", color: "bg-pink-50 border-pink-200" },
                { icon: "⛷️", title: "Gulmarg skiing is genuinely world-class", desc: "Professional ski instructors, heliskiing available, powdery Himalayan snow. Rs.8,000–Rs.15,000 for a 3-day ski package including equipment and instruction. Better than anything in Manali.", color: "bg-blue-50 border-blue-200" },
                { icon: "🧣", title: "Kashmiri kangri — the most useful purchase", desc: "A small clay pot with hot coals kept under your pheran (traditional cloak). Rs.150–Rs.300 at any market. Keeps you warm for hours. The most practical Kashmir souvenir.", color: "bg-amber-50 border-amber-200" },
                { icon: "📱", title: "Download maps offline — connectivity varies", desc: "Mobile signal is excellent in Srinagar and Gulmarg town. On mountain roads to Sonamarg and in Pahalgam valleys, it drops out. Download Google Maps offline before leaving your hotel.", color: "bg-green-50 border-green-200" },
              ].map((t) => (
                <div key={t.title} className={`rounded-xl p-4 border ${t.color}`}>
                  <div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{t.icon}</span><div><p className="font-medium text-sm text-stone-900 mb-1">{t.title}</p><p className="text-xs text-gray-700 font-light leading-relaxed">{t.desc}</p></div></div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want Your Kashmir Trip Planned?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">Tell us your dates, group and budget — we'll send a personalised Kashmir itinerary within 24 hours. Free.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Kashmir Trip →</button>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "Is Kashmir safe to visit in 2026?", a: "Yes — Kashmir has been welcoming tourists in large numbers since 2019. Over 2 crore tourists visited in 2023-24, a record high. The main tourist areas are safe and well-patrolled. Stay updated via local advisories and your hotel." },
                { q: "What is the best time to visit Kashmir?", a: "April–June (spring, tulips, mild weather) and September–October (golden chinar trees, fewer crowds, best photography). December–February for snow and skiing. Avoid July–August (monsoon)." },
                { q: "How much does a Dal Lake houseboat cost?", a: "Budget: Rs.1,500–Rs.2,500/night including breakfast. Mid-range: Rs.3,500–Rs.6,000/night all meals. Luxury: Rs.8,000–Rs.20,000/night. Always inspect the houseboat before paying." },
                { q: "How do I get to Kashmir?", a: "Fly to Srinagar airport (SXR) — direct flights from Delhi (1hr 15min), Mumbai (2hr 30min), Bangalore (3hrs). Book 2–3 weeks ahead during peak season." },
                { q: "Do I need any permits for Kashmir?", a: "Indian nationals: no permits needed for the main tourist circuit (Srinagar, Gulmarg, Pahalgam, Sonamarg). High-altitude treks above 3,500m require registration with the District Magistrate. Foreign nationals: no special permit but register at the local Foreigners' Registration Office within 24 hours of arrival." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More India Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Golden Triangle 7 Days", href: "/blog/golden-triangle-7-days" },
                { label: "Rajasthan 7 Days — Royal Circuit", href: "/blog/rajasthan-7-days" },
                { label: "Kerala 5 Days — Backwaters", href: "/blog/kerala-5-days" },
                { label: "Goa in 3 Days — Complete Guide", href: "/blog/goa-3-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="kashmir-6-days" />
          <RelatedGuides currentSlug="kashmir-6-days" />
        </div>
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
