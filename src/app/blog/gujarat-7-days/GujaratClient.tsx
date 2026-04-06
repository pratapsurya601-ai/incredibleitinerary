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
import Breadcrumb from "@/components/blog/Breadcrumb";


const GUJARAT_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "why-gujarat", emoji: "🦁", label: "Why Gujarat?" },
  { id: "itineraries", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
  { id: "food",        emoji: "🍛", label: "Food Guide" },
  { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "💡", label: "Pro Tips" },
  { id: "faq",         emoji: "❓", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Gujarat 7-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Gujarat in 7 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
          <p className="font-medium text-sm text-ink mb-1">{title}</p>
          <p className="text-xs text-gray-700 font-light leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

// ── FAQ Item accordion ────────────────────────────────────────────────────────
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
export default function GujaratClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹20k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏛️", label: "Heritage", sub: "₹20k–40k", color: "border-teal-300 bg-teal-50 text-teal-800" },
    { id: "C" as const, emoji: "✨", label: "Premium", sub: "₹40k+", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={GUJARAT_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Gujarat" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="rann of kutch white desert gujarat india"
            fallback="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1600&q=85"
            alt="Rann of Kutch white salt desert under blue sky"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Gujarat 7 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Heritage & Wildlife
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Gujarat in 7 Days: India&apos;s Most Underrated State
                <em className="italic text-gold-light"> (Budget to Premium, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real budgets, day-by-day routes — from the white desert to Asiatic lions to India&apos;s best vegetarian food.
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
              <span>🗓 7 Days</span>
              <span>·</span>
              <span>💰 From ₹18,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Gujarat is India&apos;s most underrated state and I&apos;ll die on that hill. Better food than Rajasthan, fewer crowds, and the Rann of Kutch is genuinely one of the most alien landscapes on Earth. Most people skip Gujarat on their India trip. Those people are wrong.
            </p>
          </blockquote>

          {/* Key stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Duration" value="7 Days" />
            <StatCard icon="💰" label="Budget From" value="₹18,000" />
            <StatCard icon="🦁" label="Highlight" value="Gir Lions" />
            <StatCard icon="🌡️" label="Best Season" value="Nov–Feb" />
          </div>

          {/* ── WHICH PLAN ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget — jump straight to your itinerary.</p>
            <div className="grid grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── WHY GUJARAT ── */}
          <section id="why-gujarat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🦁 Why Gujarat?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Every year, millions of tourists flock to Rajasthan and Goa while Gujarat sits right next door with better food, fewer crowds, lower prices, and experiences you literally cannot get anywhere else on the planet. Here&apos;s what you&apos;re missing.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-white rounded-xl border border-parchment-2 p-5">
                <h3 className="font-medium text-sm text-ink mb-2">🏜️ Rann of Kutch — The White Desert</h3>
                <p className="text-sm text-muted font-light leading-relaxed">
                  The Rann of Kutch full moon night is peak magic — white salt desert stretching to the horizon under moonlight. 7,505 square kilometres of absolutely nothing but white, flat, endless salt marsh. Go during Rann Utsav (Nov-Feb) for the full experience with luxury tent camps, cultural performances, and guided desert walks. This is not a desert like Jaisalmer. This is another planet.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-parchment-2 p-5">
                <h3 className="font-medium text-sm text-ink mb-2">🦁 Gir National Park — The Only Wild Asiatic Lions</h3>
                <p className="text-sm text-muted font-light leading-relaxed">
                  Gir is the ONLY place on Earth you can see Asiatic Lions in the wild. Not Africa — Gujarat. The park has about 700 lions, up from just 20 in 1913. Book your safari permit 30 days in advance — they sell out. Morning safaris (6:30am departure) give you the best sighting odds.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-parchment-2 p-5">
                <h3 className="font-medium text-sm text-ink mb-2">🏙️ Ahmedabad — India&apos;s First UNESCO Heritage City</h3>
                <p className="text-sm text-muted font-light leading-relaxed">
                  Ahmedabad is India&apos;s first and only UNESCO World Heritage City. The old town (walled city) has pol houses dating back 600 years, stepwells that belong in a Wes Anderson film, and a street food scene that makes Mumbai look amateur. The khaman dhokla at Manek Chowk at 11pm is a religious experience. Seriously.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-parchment-2 p-5">
                <h3 className="font-medium text-sm text-ink mb-2">🏝️ Diu — Goa&apos;s Quiet Little Brother</h3>
                <p className="text-sm text-muted font-light leading-relaxed">
                  Diu feels like Goa&apos;s quieter, cheaper, friendlier little brother. Same beaches, 20% of the crowd. Portuguese colonial architecture, a massive 16th-century fort, and beer at prices that make Goa look like Dubai. Since Diu is a Union Territory, alcohol is freely available — unlike dry Gujarat.
                </p>
              </div>
            </div>

            {/* Vegetarian callout */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🥬</span>
                <div>
                  <p className="font-medium text-sm text-ink mb-2">Gujarat Is (Almost) 100% Vegetarian</p>
                  <p className="text-sm text-muted font-light leading-relaxed">
                    This is not a warning — it&apos;s a selling point. Gujarat has arguably the best vegetarian food in India. Gujarati thalis serve 15-20 dishes per plate for ₹150-300. The street food culture (dhokla, fafda, khandvi, undhiyu, dabeli, gathiya) is deeper and more varied than most non-veg cuisines. You will not miss meat. Promise. If you absolutely need non-veg food, stick to major hotels in Ahmedabad or visit Diu (Union Territory, not bound by Gujarat&apos;s food culture).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Gujarat — Must-See Places"
            subtitle="Click each thumbnail to explore Gujarat's most iconic destinations."
            spots={[
              { name: "Rann of Kutch",        query: "rann of kutch white salt desert sunset india",              desc: "The Great Rann — 7,505 sq km of white salt desert. Visit during full moon for the most surreal experience. Rann Utsav runs Nov-Feb." },
              { name: "Gir National Park",     query: "asiatic lion gir forest gujarat wildlife",                 desc: "Home to the world's only wild Asiatic Lions. Book safari permits 30 days ahead at girlion.in. Morning safaris give the best sightings." },
              { name: "Ahmedabad Old City",    query: "ahmedabad old city pol house heritage architecture india", desc: "India's first UNESCO Heritage City — 600-year-old pol houses, ornate stepwells, and the greatest street food scene in the country." },
              { name: "Somnath Temple",        query: "somnath temple gujarat coast sunset ancient",              desc: "One of the 12 Jyotirlingas, dramatically perched on the Arabian Sea coast. The evening aarti with crashing waves is unforgettable." },
              { name: "Diu Island",            query: "diu fort beach portuguese colonial india",                desc: "Laid-back island with Portuguese forts, empty beaches, and the cheapest beer in western India. Goa without the crowds." },
            ]}
          />

          {/* ── Rann Image ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="rann of kutch full moon night white desert india"
              fallback="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=900&q=80"
              alt="Rann of Kutch white desert under full moon"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Rann of Kutch under a full moon — white salt desert stretching endlessly to the horizon. One of those places that genuinely changes how you see India.
              </p>
            </div>
          </div>

          <AffiliateBlock destination="Gujarat" />

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The 7-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Route: Ahmedabad (2 days) → Kutch/Bhuj (2 days) → Gir (1 day) → Somnath/Diu (2 days). This flows west-to-south across Gujarat with no backtracking.
            </p>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              All three plans follow the same route — the difference is where you sleep and how you get around.
            </p>

            {/* Plan tab switcher */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {plans.map((t) => (
                <button key={t.id} onClick={() => setActiveTab(t.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${activeTab === t.id ? "bg-gold text-ink border-gold" : "border-parchment-2 text-muted hover:border-gold bg-white"}`}>
                  {t.emoji} {t.label}
                </button>
              ))}
            </div>

            {/* ── BUDGET PLAN ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <DayCard day="Day 1" title="Ahmedabad — Old City & Street Food"
                  items={[
                    "Arrive Ahmedabad (fly into SVP Airport or train to Ahmedabad Junction). Check into hostel or budget hotel near Lal Darwaja (₹400-800/night)",
                    "Morning: Heritage walk through the Walled City — Jama Masjid, Sidi Saiyyed Mosque (the tree of life window), Teen Darwaja",
                    "Afternoon: Adalaj Stepwell (free entry, 19km north — take a shared auto or bus, ₹30)",
                    "Evening: Manek Chowk night market — start with khaman dhokla, move to dabeli, finish with paan. Budget ₹200 for a feast",
                    "Night: Sabarmati Riverfront walk — beautifully lit, free, and peaceful"
                  ]}
                  cost="₹1,200–₹1,800"
                />
                <DayCard day="Day 2" title="Ahmedabad — Gandhi, Textiles & Departure"
                  items={[
                    "Morning: Sabarmati Ashram (free entry, opens 8:30am) — where Gandhi launched the Salt March. Genuinely moving, allow 90 minutes",
                    "Late morning: Calico Museum of Textiles (free, book ahead, closes 12:30pm) — one of the finest textile museums in Asia",
                    "Lunch: Gujarati thali at Agashiye or a local thali house (₹150-250 for unlimited food)",
                    "Afternoon: Overnight bus to Bhuj (₹400-600, departs 8-10pm, arrives 5-6am). Book Volvo sleeper on RedBus"
                  ]}
                  cost="₹1,000–₹1,500"
                />
                <DayCard day="Day 3" title="Kutch/Bhuj — Handicraft Villages"
                  items={[
                    "Arrive Bhuj early morning. Check into budget hotel in Bhuj (₹500-900/night)",
                    "Morning: Aina Mahal (Mirror Palace) and Prag Mahal Palace — stunning 19th-century architecture (₹40 entry each)",
                    "Afternoon: Hire a shared jeep or local bus to Bhujodi village (8km) — watch artisans doing block printing, bandhani tie-dye, and ajrakh work. Buy directly from makers at fair prices",
                    "Evening: Explore Bhuj local market for Kutchi embroidery and handicrafts. Dinner at a local Kutchi restaurant"
                  ]}
                  cost="₹1,500–₹2,200"
                />
                <DayCard day="Day 4" title="Rann of Kutch — The White Desert"
                  items={[
                    "Early morning: Drive to the Great Rann of Kutch (Dhordo village, 85km from Bhuj). Shared jeep ₹200-300 or bus ₹80",
                    "Rann of Kutch entry: ₹100 permit + ₹50 vehicle charge. Go to the viewpoint — endless white salt desert stretching to the horizon",
                    "Explore Hodka village nearby — traditional Kutchi bhunga (round mud huts), authentic handicrafts, local hospitality",
                    "If visiting Nov-Feb: Experience Rann Utsav. Budget tent accommodation available from ₹1,500/night",
                    "Evening: Return to Bhuj. Overnight bus to Junagadh (₹350-500, gateway to Gir)"
                  ]}
                  cost="₹2,000–₹3,000"
                />
                <DayCard day="Day 5" title="Gir National Park — Asiatic Lions"
                  items={[
                    "Arrive Junagadh early morning. Auto to Sasan Gir (60km, ₹150 shared/₹800 private). Check into budget guesthouse near the park gate (₹600-1,000/night)",
                    "Afternoon safari (3pm departure): Gir permit ₹800-1,000 + jeep share ₹600-800 per person. Safari is 3 hours through dry deciduous forest",
                    "Lion sighting probability: 80-90% in peak season (Nov-Mar). Also expect leopards, deer, crocodiles, 300+ bird species",
                    "Evening: Explore Sasan Gir village. Early dinner and sleep — you want to be fresh for tomorrow"
                  ]}
                  cost="₹2,500–₹3,500"
                />
                <DayCard day="Day 6" title="Somnath Temple & Coastal Drive"
                  items={[
                    "Early morning: Optional second safari (6:30am, pre-book) or head directly to Somnath (65km from Sasan Gir, bus ₹80)",
                    "Somnath Temple: One of 12 Jyotirlingas, dramatically located on the Arabian Sea coast. Free entry. Allow 2 hours",
                    "The temple has been destroyed and rebuilt 7 times — the current structure is stunning. The evening aarti at 7pm with the sound of crashing waves is extraordinary",
                    "Afternoon: Bus or shared transport to Diu (90km, ₹120). Check into budget guesthouse in Diu town (₹400-700/night)"
                  ]}
                  cost="₹1,200–₹1,800"
                />
                <DayCard day="Day 7" title="Diu — Beaches, Forts & Farewell"
                  items={[
                    "Morning: Diu Fort — massive 16th-century Portuguese fortification. Free entry. The sea views from the ramparts are spectacular",
                    "Late morning: St. Paul's Church (beautiful baroque architecture), Diu Museum",
                    "Afternoon: Nagoa Beach or Ghoghla Beach — clean, uncrowded, and peaceful. Rent a cycle to explore (₹50/day)",
                    "Beer at Diu prices: ₹60-80 per bottle. Yes, really. Gujarat is dry but Diu is a Union Territory",
                    "Evening: Flight from Diu Airport or bus to Ahmedabad (8-9hrs overnight, ₹450-600)"
                  ]}
                  cost="₹1,000–₹1,600"
                />
              </div>
            )}

            {/* ── HERITAGE PLAN ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <DayCard day="Day 1" title="Ahmedabad — Heritage Walk & Fine Dining"
                  items={[
                    "Arrive Ahmedabad. Check into House of MG or French Haveli (₹3,000-5,000/night) — heritage hotels inside the old city",
                    "Morning: Guided heritage walk through the Walled City (book through House of MG, ₹500). Covers pol houses, stepwells, mosques",
                    "Afternoon: Adalaj Stepwell + Modhera Sun Temple day trip (private cab ₹2,000 return, 3 hours). Modhera is a 1,000-year-old sun temple rivalling Khajuraho",
                    "Evening: Dinner at Agashiye rooftop restaurant — traditional Gujarati thali with silver service (₹800-1,200). Best thali in the state"
                  ]}
                  cost="₹5,000–₹7,000"
                />
                <DayCard day="Day 2" title="Ahmedabad — Museums & Flight to Bhuj"
                  items={[
                    "Morning: Sabarmati Ashram + Calico Museum of Textiles (book the morning slot)",
                    "Late morning: Hutheesing Jain Temple — exquisitely carved white marble, one of the finest Jain temples outside Rajasthan",
                    "Lunch: Vishalla — open-air restaurant serving traditional village-style Gujarati food on earthen plates (₹500-700)",
                    "Afternoon flight to Bhuj (1 hour, ₹3,000-5,000). Check into heritage hotel in Bhuj (₹2,500-4,000/night)"
                  ]}
                  cost="₹6,000–₹9,000"
                />
                <DayCard day="Day 3" title="Kutch — Artisan Villages & Living Heritage"
                  items={[
                    "Full-day private jeep tour of Kutch artisan villages (₹2,500-3,500 for the jeep, covers 150km)",
                    "Bhujodi village: Block printing and weaving. Watch master artisans at work, buy directly from workshops",
                    "Ajrakhpur: The legendary Ajrakh block printing tradition — UNESCO-recognized craft. Dr. Ismail Khatri's workshop is world-famous",
                    "Nirona village: Rogan art — an art form practised by only one family on Earth. Yes, one family",
                    "Evening: Return to Bhuj for dinner at a traditional Kutchi restaurant"
                  ]}
                  cost="₹4,000–₹5,500"
                />
                <DayCard day="Day 4" title="Rann of Kutch — Full Desert Experience"
                  items={[
                    "Drive to Dhordo (85km). Stay at Rann Utsav tented resort or Gateway to Rann resort (₹4,000-8,000/night)",
                    "Afternoon: Walk into the white desert. The silence is extraordinary — no sound, no trees, no buildings, just white to the horizon",
                    "Visit Kala Dungar (Black Hill) — highest point in Kutch with panoramic Rann views",
                    "Evening: Cultural performance at the camp — Kutchi folk music, dance, and a bonfire dinner under the stars",
                    "If full moon: Walk into the Rann at night. This is the single most magical moment in Gujarat"
                  ]}
                  cost="₹6,000–₹10,000"
                />
                <DayCard day="Day 5" title="Gir National Park — Premium Safari"
                  items={[
                    "Morning flight Bhuj to Diu or private car to Sasan Gir (7-8 hours via Rajkot, ₹6,000-8,000 car hire)",
                    "Check into Gir Birding Lodge or The Fern Gir Forest Resort (₹4,000-7,000/night)",
                    "Afternoon safari in premium zone (better lion sighting odds). Private jeep ₹3,500 + permit ₹1,500",
                    "Post-safari: Crocodile breeding centre near the park (free, 30 minutes)"
                  ]}
                  cost="₹8,000–₹12,000"
                />
                <DayCard day="Day 6" title="Somnath & Dwarka Sacred Circuit"
                  items={[
                    "Morning: Drive to Somnath (65km). Visit Somnath Temple — attend the 7am aarti for the most spiritual experience",
                    "Explore Triveni Sangam where three rivers meet the sea. Bhalka Tirth nearby (Lord Krishna's final resting spot in mythology)",
                    "Drive to Dwarka (230km, 4.5 hours) — one of India's four sacred Char Dham sites",
                    "Evening: Dwarkadhish Temple aarti. Stay at a heritage hotel in Dwarka (₹2,500-4,000/night)"
                  ]}
                  cost="₹5,000–₹7,000"
                />
                <DayCard day="Day 7" title="Dwarka & Departure"
                  items={[
                    "Morning: Bet Dwarka Island — a short boat ride to the island temple. Sacred and serene",
                    "Nageshwar Jyotirlinga temple (one of 12 in India, 16km from Dwarka)",
                    "Afternoon: Explore Dwarka's coastal beauty. Sunset at the lighthouse point",
                    "Drive to Jamnagar Airport (130km, 2.5 hours) for evening flight, or overnight train to Ahmedabad"
                  ]}
                  cost="₹3,000–₹5,000"
                />
              </div>
            )}

            {/* ── PREMIUM PLAN ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <DayCard day="Day 1" title="Ahmedabad — Luxury Heritage Immersion"
                  items={[
                    "Arrive Ahmedabad. Private airport transfer. Check into House of MG or ITC Narmada (₹8,000-15,000/night)",
                    "Private guided heritage walk with an architect or historian (₹3,000-5,000 for the guide). Deep dive into pol architecture and 600 years of urban planning",
                    "Lunch: Agashiye silver thali experience on the rooftop terrace",
                    "Afternoon: Private visit to Calico Museum + Hutheesing Jain Temple",
                    "Evening: Curated food walk through Manek Chowk with a local foodie guide (₹2,000-3,000). Try everything — this is the best street food city in India"
                  ]}
                  cost="₹12,000–₹18,000"
                />
                <DayCard day="Day 2" title="Modhera, Patan & Flight to Kutch"
                  items={[
                    "Private car to Modhera Sun Temple and Rani ki Vav stepwell in Patan (combined day trip, 250km round trip)",
                    "Rani ki Vav is a UNESCO World Heritage Site — a 7-storey inverted stepwell with 800+ sculptures. It's on the ₹100 note",
                    "Modhera Sun Temple: 1,000-year-old, exquisitely carved, no entry fee. Far less crowded than Khajuraho but equally stunning",
                    "Return to Ahmedabad. Evening flight to Bhuj (₹4,000-6,000). Check into heritage hotel (₹5,000-8,000/night)"
                  ]}
                  cost="₹10,000–₹15,000"
                />
                <DayCard day="Day 3" title="Kutch — Curated Artisan Tour"
                  items={[
                    "Full-day private tour with a textile expert guide (₹5,000-8,000 for the guide, highly recommended)",
                    "Visit Ajrakhpur (Ajrakh block printing), Bhujodi (weaving), Nirona (Rogan art), and Khavda (pottery)",
                    "Commission custom pieces directly from master artisans — prices are a fraction of what galleries charge in Mumbai or Delhi",
                    "Evening: Private dinner hosted by a local Kutchi family in a traditional bhunga hut"
                  ]}
                  cost="₹8,000–₹12,000"
                />
                <DayCard day="Day 4" title="Rann of Kutch — Luxury Desert Camp"
                  items={[
                    "Drive to Dhordo. Check into Rann Utsav Premium Tents or private luxury camp (₹10,000-20,000/night)",
                    "Private camel cart ride into the white desert. Sunset photography session",
                    "Kala Dungar viewpoint — the highest elevation in Kutch with panoramic views of India-Pakistan border",
                    "Evening: Exclusive cultural performance, bonfire dinner, stargazing in the desert",
                    "Full moon experience (if timed right): Walk into the Rann at midnight. Genuinely one of India's top 5 travel experiences"
                  ]}
                  cost="₹15,000–₹25,000"
                />
                <DayCard day="Day 5" title="Gir — Private Safari & Wildlife Lodge"
                  items={[
                    "Charter flight or private car to Sasan Gir. Check into Taj Gateway Gir or The Postcard Gir (₹10,000-18,000/night)",
                    "Private jeep safari — premium zone, dedicated guide and naturalist. Permit ₹1,500 + jeep ₹5,000",
                    "Lion sighting probability: 90%+ in premium zones during peak season",
                    "Post-safari: Nature walk, birding session with lodge naturalist. Gir has 300+ bird species",
                    "Evening: Dinner at the lodge with wildlife photography review"
                  ]}
                  cost="₹18,000–₹25,000"
                />
                <DayCard day="Day 6" title="Somnath & Diu — Coast & History"
                  items={[
                    "Private car to Somnath Temple. Morning aarti and darshan",
                    "Continue to Diu island (90km). Check into Radhika Beach Resort or Azzaro Resort (₹5,000-9,000/night)",
                    "Afternoon: Private guided tour of Diu Fort, St. Paul's Church, and the colonial quarter",
                    "Evening: Sundowner at a beach cafe. Fresh seafood dinner (yes — seafood is available in Diu, unlike mainland Gujarat)"
                  ]}
                  cost="₹10,000–₹15,000"
                />
                <DayCard day="Day 7" title="Diu — Beach Day & Departure"
                  items={[
                    "Morning: Nagoa Beach — pristine, uncrowded, perfect for a final morning swim",
                    "Late morning: INS Khukri Memorial, Shell Museum (quirky but worth 30 minutes)",
                    "Lunch: Fresh catch at O Coqueiro or a beachside shack — Diu's seafood is genuinely excellent",
                    "Afternoon: Flight from Diu to Mumbai/Ahmedabad, or private car to Ahmedabad Airport (8 hours)"
                  ]}
                  cost="₹6,000–₹10,000"
                />
              </div>
            )}
          </section>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown — 7 Days</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left px-4 py-3 font-medium text-ink text-xs uppercase tracking-wide">Category</th>
                    <th className="text-center px-4 py-3 font-medium text-amber-300 text-xs uppercase tracking-wide">💰 Budget</th>
                    <th className="text-center px-4 py-3 font-medium text-teal-300 text-xs uppercase tracking-wide">🏛️ Heritage</th>
                    <th className="text-center px-4 py-3 font-medium text-purple-300 text-xs uppercase tracking-wide">✨ Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["Accommodation (7 nights)", "₹3,500–₹6,000", "₹20,000–₹40,000", "₹50,000–₹1,00,000"],
                    ["Transport (inter-city)", "₹2,500–₹4,000", "₹10,000–₹18,000", "₹25,000–₹40,000"],
                    ["Food (all meals)", "₹3,500–₹5,000", "₹7,000–₹12,000", "₹15,000–₹25,000"],
                    ["Activities & Entry Fees", "₹2,500–₹4,000", "₹8,000–₹14,000", "₹20,000–₹35,000"],
                    ["Safari (Gir)", "₹1,500–₹2,500", "₹5,000–₹7,000", "₹7,000–₹10,000"],
                    ["Shopping & Misc", "₹1,000–₹2,000", "₹5,000–₹10,000", "₹10,000–₹20,000"],
                  ].map(([cat, a, b, c], i) => (
                    <tr key={i} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="px-4 py-3 text-ink font-light">{cat}</td>
                      <td className="px-4 py-3 text-center text-amber-700 font-light">{a}</td>
                      <td className="px-4 py-3 text-center text-teal-700 font-light">{b}</td>
                      <td className="px-4 py-3 text-center text-purple-700 font-light">{c}</td>
                    </tr>
                  ))}
                  <tr className="bg-parchment font-medium">
                    <td className="px-4 py-3 text-ink">Total (per person)</td>
                    <td className="px-4 py-3 text-center text-amber-800">₹14,500–₹23,500</td>
                    <td className="px-4 py-3 text-center text-teal-800">₹55,000–₹1,01,000</td>
                    <td className="px-4 py-3 text-center text-purple-800">₹1,27,000–₹2,30,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              * All prices per person. Budget plan assumes shared transport and hostels/budget hotels. Heritage plan assumes private transport and mid-range heritage hotels. Premium includes luxury stays and private guides.
            </p>
          </section>

          {/* ── FOOD GUIDE ── */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🍛 Gujarat Food Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Ahmedabad&apos;s street food makes Mumbai look amateur. That&apos;s not an exaggeration. Gujarat has the deepest vegetarian food culture in India, and the variety will genuinely surprise you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {[
                { icon: "🟡", title: "Dhokla & Khaman", desc: "Steamed fermented chickpea flour cakes. Light, tangy, perfect. The one at Manek Chowk at 11pm is peak Ahmedabad. ₹30-50 per plate." },
                { icon: "🥘", title: "Gujarati Thali", desc: "15-20 dishes including dal, kadhi, shaak, rotli, rice, farsan, and mithai. Unlimited refills. ₹150-300 at local places, ₹800+ at heritage restaurants." },
                { icon: "🫓", title: "Fafda-Jalebi", desc: "The quintessential Gujarati Sunday breakfast. Crispy chickpea flour strips with sweet jalebi and green chutney. Available at every street corner. ₹40-60." },
                { icon: "🍔", title: "Dabeli", desc: "Gujarat's answer to the burger — spiced potato filling in a pav with peanuts, pomegranate, and chutney. The one at Swati Snacks in Ahmedabad is legendary. ₹25-40." },
                { icon: "🍜", title: "Undhiyu", desc: "A seasonal winter delicacy (Nov-Feb) — mixed vegetables slow-cooked underground with spices. You can only get the real thing in Gujarat. ₹100-200." },
                { icon: "🧁", title: "Basundi & Shrikhand", desc: "Gujarati desserts that outclass most Indian mithai. Thick, creamy, cardamom-perfumed. Order at any thali place. Included in thali meals." },
              ].map((item) => (
                <TipCard key={item.title} icon={item.icon} title={item.title} desc={item.desc}
                  color="bg-amber-50 border-amber-200" />
              ))}
            </div>

            <div className="bg-white rounded-xl border border-parchment-2 p-5">
              <p className="text-sm text-muted font-light leading-relaxed">
                <strong className="text-ink">Pro tip for non-vegetarians:</strong> Don&apos;t fight it. Embrace the vegetarian food for 7 days. You&apos;ll eat better than most non-veg meals you&apos;ve had anywhere in India. The only exception is Diu — being a Union Territory, it has excellent seafood restaurants. Save your fish craving for Day 7.
              </p>
            </div>
          </section>

          {/* ── Ahmedabad Street Food Image ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="ahmedabad street food manek chowk night market india"
              fallback="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&q=80"
              alt="Ahmedabad Manek Chowk street food night market"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Manek Chowk at 11pm — a jewellery market by day that transforms into Ahmedabad&apos;s greatest street food arena every night.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting in summer (April-June)", desc: "Gujarat hits 45°C+ regularly in summer. The Rann becomes an actual furnace. November to February is the only window worth planning around.", icon: "🌡️" },
                { title: "Not booking Gir safari permits in advance", desc: "Permits sell out 30 days ahead for popular dates. Show up without a booking and you're watching lions on YouTube instead. Book at girlion.in.", icon: "🦁" },
                { title: "Skipping Kutch handicraft villages", desc: "Most tourists see the Rann and leave. The real magic of Kutch is the artisan villages — Ajrakhpur, Bhujodi, Nirona. This is living heritage you can't see anywhere else.", icon: "🎨" },
                { title: "Expecting non-veg food everywhere", desc: "Gujarat is predominantly vegetarian. Don't waste time searching for chicken biryani — dive into the thali culture instead. You'll thank yourself.", icon: "🥬" },
                { title: "Rushing the Rann at midday", desc: "The Rann of Kutch at noon is just hot white salt. The magic is at sunrise, sunset, and especially full moon nights. Time your visit.", icon: "🌙" },
                { title: "Skipping Diu", desc: "Most itineraries end at Somnath. Adding Diu gives you beaches, Portuguese history, cold beer, and a perfect final day. It's only 90km further.", icon: "🏝️" },
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
                { icon: "🌕", title: "Plan Around Full Moon", desc: "The Rann of Kutch full moon experience is genuinely one of India's most surreal moments. Check the lunar calendar and plan your Kutch days accordingly. Nov-Feb only.", color: "bg-amber-50 border-amber-200" },
                { icon: "🧵", title: "Buy Textiles Directly", desc: "Kutch handicrafts in Mumbai/Delhi galleries cost 5-10x what you'll pay buying directly from artisans in Bhujodi and Ajrakhpur. Bring extra bag space.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚌", title: "Gujarat ST Buses Are Great", desc: "Unlike most Indian states, Gujarat's state transport buses are clean, punctual, and cheap. The Volvo network connects all major cities. Book on gsrtc.in or RedBus.", color: "bg-teal-50 border-teal-200" },
                { icon: "🥛", title: "Gujarat Runs on Chai & Buttermilk", desc: "Chaas (spiced buttermilk) is served free at most restaurants and available at every roadside stall for ₹10-20. Better hydration than water in the heat.", color: "bg-teal-50 border-teal-200" },
                { icon: "🏨", title: "Heritage Hotels > Chains", desc: "Gujarat has incredible heritage properties — converted havelis and palace hotels at a fraction of Rajasthan prices. House of MG in Ahmedabad and Bhuj House in Kutch are standouts.", color: "bg-rose-50 border-rose-200" },
                { icon: "📱", title: "Carry Cash in Kutch", desc: "Villages in Kutch have limited UPI/card acceptance. Withdraw enough cash in Bhuj before heading to the Rann or artisan villages. ₹5,000-8,000 should cover it.", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── Best Time to Visit ── */}
          <div className="mb-14 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-6 md:p-8">
            <h3 className="font-serif text-xl font-light text-ink mb-4">🌡️ Best Time to Visit Gujarat</h3>
            <div className="space-y-3">
              {[
                { months: "Nov–Feb", verdict: "✅ Best", desc: "Rann Utsav season. Pleasant weather (18-30°C). Best for wildlife at Gir. Perfect for everything." },
                { months: "Mar", verdict: "⚠️ OK", desc: "Warming up (30-38°C). Rann Utsav ends mid-Feb. Still manageable but getting hot." },
                { months: "Apr–Jun", verdict: "❌ Avoid", desc: "Extreme heat (40-48°C). The Rann is unbearable. Gir closes mid-June for monsoon. Don't do it." },
                { months: "Jul–Sep", verdict: "❌ Avoid", desc: "Monsoon. The Rann floods (that's literally how it becomes a salt desert). Gir is closed. Roads in Kutch are poor." },
                { months: "Oct", verdict: "⚠️ Early Season", desc: "Heat subsiding. Rann Utsav hasn't started yet. Gir reopens mid-October. Decent if you skip the Rann." },
              ].map((s) => (
                <div key={s.months} className="flex items-start gap-3">
                  <span className="font-medium text-sm text-ink w-20 flex-shrink-0">{s.months}</span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white border border-amber-200 flex-shrink-0">{s.verdict}</span>
                  <span className="text-sm text-muted font-light leading-relaxed">{s.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group and budget — we&apos;ll send a personalised Gujarat itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Gujarat Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Gujarat?", a: "7 days is ideal for the main circuit — Ahmedabad, Kutch, Gir, and Somnath/Diu. 10 days lets you add Vadodara (Laxmi Vilas Palace) and Champaner-Pavagadh (UNESCO site). 14 days covers the full state including Palitana, Mandvi beach, and the tribal regions." },
                { q: "Is Gujarat safe for solo travellers?", a: "Gujarat is one of the safest states in India. It's a dry state (no alcohol except in Diu), crime rates are low, and the people are exceptionally helpful and hospitable. Solo female travellers consistently report feeling safe. The only caution: summers are dangerously hot — carry water and sunscreen." },
                { q: "How do I get to the Rann of Kutch?", a: "Fly to Bhuj (daily flights from Mumbai and Ahmedabad). From Bhuj, the Rann of Kutch (Dhordo village) is 85km — take a private car (₹1,500-2,000), shared jeep (₹200-300), or bus (₹80). During Rann Utsav season, there are direct bus services from Bhuj to the festival grounds." },
                { q: "Is Gujarat a dry state? Can I get alcohol?", a: "Yes, Gujarat is legally a dry state — alcohol sale and consumption is prohibited. However, Diu (a Union Territory within Gujarat's geography) has no such restriction and has cheap beer and liquor. Some five-star hotels in Ahmedabad have bar permits. Foreign nationals can apply for a liquor permit at the airport." },
                { q: "What's the best vegetarian food in Gujarat?", a: "Start with a traditional thali at Agashiye or Vishalla in Ahmedabad. Manek Chowk night market for street food (dhokla, dabeli, fafda). Undhiyu in winter is a must. Kutchi cuisine in Bhuj is distinctly different and excellent. Every meal in Gujarat is an experience — embrace it fully." },
                { q: "Can I combine Gujarat with Rajasthan?", a: "Absolutely — they share a border. The easiest connection is Ahmedabad to Udaipur (260km, 5 hours by road or overnight train). Add 3-4 days for Udaipur and Jodhpur. Or fly Ahmedabad to Jaipur (1 hour). Gujarat + Rajasthan makes an excellent 14-day western India circuit." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer India Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Rajasthan — 7 Day Royal Circuit", href: "/blog/rajasthan-7-days", soon: false },
                { label: "Goa — 3 Day Beach Guide", href: "/blog/goa-3-days", soon: false },
                { label: "Kerala Backwaters — 5 Day Guide", href: "/blog/kerala-5-days", soon: true },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="gujarat-7-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
