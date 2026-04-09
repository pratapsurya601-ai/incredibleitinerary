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

const AHMEDABAD_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "food",      emoji: "🍽️", label: "Food Guide" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Ahmedabad 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Ahmedabad in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function AhmedabadClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹5k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹5k–15k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={AHMEDABAD_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Ahmedabad" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="ahmedabad heritage city pol houses Gujarat"
            fallback="https://images.unsplash.com/photo-1599420773867-462d2791bab0?w=1600&q=85"
            alt="Ahmedabad UNESCO Heritage City — carved wooden facades of the Pol houses"
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
              <span className="text-white/70">Ahmedabad 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Heritage & Culture
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Ahmedabad in 3 Days: UNESCO Heritage,
                <em className="italic text-gold-light"> Stepwells &amp; Midnight Food</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                India&apos;s first UNESCO Heritage City — 600-year-old Pol houses, the carved jali of Sidi Saiyyed Mosque, Gandhi&apos;s ashram, and a gold market that transforms into a street food court after dark.
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
              <span>💰 From ₹3,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Pol houses stopped me dead. A 600-year-old carved wooden balcony, bird feeders on every ledge, and a community that&apos;s lived in the same lanes for generations. Ahmedabad doesn&apos;t feel like a heritage museum — it feels like a heritage city that&apos;s still alive.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Most Indian travellers treat Ahmedabad as a stopover on the way to Kutch. That&apos;s a mistake. India&apos;s first UNESCO World Heritage City has more architectural layers than any city its size — Hindu merchants, Mughal rulers, Jain traders, and British-era institutions all left their mark on a compact, walkable old city. Add a stepwell that defies gravity, Gandhi&apos;s home for 13 years, and a gold bazaar that becomes a street food court after 9 PM, and you have one of India&apos;s most underrated 3-day trips.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌡️" label="Best Season" value="Oct–Feb" />
            <StatCard icon="🏛️" label="UNESCO Status" value="Yes (2017)" />
            <StatCard icon="🚆" label="Distance from Mumbai" value="530 km" />
            <StatCard icon="⭐" label="Rating" value="4.6★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Ahmedabad has a harsh climate. October to February is the window — everything outside that is either ferociously hot or humid.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Feb", emoji: "✅", title: "Best Season", desc: "October–November is warm and dry (22–30°C). December–January is pleasantly cool (12–22°C). The Uttarayan kite festival on January 14 is one of India's greatest spectacles. February is ideal for heritage walking.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Mar–Apr", emoji: "⚠️", title: "Getting Hot", desc: "Temperatures climb to 35–40°C by April. Still manageable with early morning starts. March is the last comfortable month. The stepwells are beautiful in the lower light of March mornings.", color: "bg-amber-50 border-amber-200" },
                { season: "May–Sep", emoji: "🔥", title: "Avoid", desc: "May–June hits 42–45°C consistently. Walking the old city Pol lanes becomes dangerous. Monsoon (July–September) brings humidity and flooding in the old city. October to return.", color: "bg-red-50 border-red-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 3-day route, two comfort levels. Ahmedabad is affordable for every type of traveller.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Hostel near Law Garden (₹500–800/night)</td><td className="py-2.5 px-4">Hotel near CG Road (₹2,000–3,500/night)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">BRTS + autorickshaw</td><td className="py-2.5 px-4">Auto + Ola/Uber for day trips</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Manek Chowk + local dhabas</td><td className="py-2.5 px-4">Vishalla + Agashiye + street food</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Heritage Walk</td><td className="py-2.5 px-4">Self-guided (free)</td><td className="py-2.5 px-4">AMC guided tour ₹150/person</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹5,000</td><td className="py-2.5 px-4 font-medium text-teal">₹5,000–15,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Old city heritage walk, Sidi Saiyyed Mosque, Manek Chowk midnight food. Day 2: Sabarmati Ashram, Adalaj Vav stepwell, Calico Museum. Day 3: Akshardham Gandhinagar, Kite Museum, departure.
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
                title="Heritage City Walk — Pol Houses, Sidi Saiyyed & Manek Chowk"
                items={[
                  activeTab === "A"
                    ? "Train from Mumbai (Shatabdi Express, 7 hrs). Check in to hostel near Law Garden (₹500–800/night)."
                    : "Train from Mumbai or fly (1 hr). Check in to hotel near CG Road (₹2,000–3,500/night).",
                  "Afternoon: Sidi Saiyyed Mosque — the carved stone jali lattice that inspired IIM Ahmedabad's logo. The tree-of-life window is one of the most photographed pieces of architecture in Gujarat. Entry free.",
                  "Walk to Bhadra Fort → Jama Masjid → Teen Darwaza (the triple gateway to the old city).",
                  "Spend an hour walking through the Pol Houses — a 600-year-old merchant quarter with carved wooden facades, secret passages between homes, and bird feeders (chabutaras) on every balcony. This is living heritage — families still live here.",
                  activeTab === "A"
                    ? "Self-guided Pol walk: use the Gujarat Tourism map (free at the information centre). Allow 90 minutes."
                    : "Gujarat Heritage Walking Tour with AMC guide: ₹150/person, 2–3 hrs, covers 14 heritage sites including hidden temples and restored step-wells within the old city.",
                  "Evening 9 PM: Manek Chowk — the gold jewelry bazaar closes at 9 PM. After that, tarp sheets appear, vendors set up gas stoves, and one of India's finest open-air food markets begins. Must-try: cold coffee, dahi puri, pav bhaji, bhel, and garlic bread.",
                ]}
                cost={activeTab === "A" ? "₹1,800" : "₹4,500"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Sabarmati Ashram, Adalaj Vav & Calico Museum"
                items={[
                  "6 AM: Sabarmati Ashram — Gandhi's home for 13 years (1917–1930). Entry free. Go before the tourist buses arrive. Gandhi's personal quarters (Hridaya Kunj) are preserved exactly as he left them the morning he set out on the Dandi Salt March in 1930 and never returned.",
                  "The ashram library holds original manuscripts. The museum is excellent. Allow 2 hours. Silence is requested inside the personal quarters. No photography inside the rooms.",
                  activeTab === "A"
                    ? "Autorickshaw from ashram to Adalaj Vav: ₹150 one-way (18 km north)."
                    : "Ola/Uber to Adalaj Vav from ashram: ₹200–300, air-conditioned. Easier with luggage or in summer heat.",
                  "10 AM: Adalaj Vav — the 5-storey octagonal stepwell built in 1499. The sun enters at the right angle only between 9–11 AM, illuminating the intricate carvings on all 5 floors. At other times it's dark inside. Photography without flash is allowed. Entry free.",
                  "Return to city → Calico Museum of Textiles (world's finest collection of Indian textiles — royal Mughal court fabrics, 500-year-old temple hangings). Entry free but guided tour only — book in advance online.",
                  "Evening: Law Garden Night Market — traditional Gujarati embroidery, mirror-work bags, bandhani textiles. Best shopping in the city. Open 7 PM–11 PM.",
                ]}
                cost={activeTab === "A" ? "₹1,200" : "₹3,500"}
              />

              {/* ── Day 3 ── */}
              <DayCard
                day="Day 3"
                title="Akshardham Gandhinagar, Kite Museum & Departure"
                items={[
                  "Morning: Akshardham Temple in Gandhinagar (30 km north, ₹50–80 autorickshaw or Ola). One of the largest Hindu temple complexes in India — different from Delhi's Akshardham, with intricate carvings and a large garden complex. Entry free, photography not allowed inside.",
                  "Return to Ahmedabad → Kite Museum (Sankranti kite festival hub). Ahmedabad is the world's kite capital — on Uttarayan (January 14) the entire city is in the sky. The museum has kites from 40+ countries. Entry ₹25.",
                  activeTab === "A"
                    ? "Final Gujarati meal: fafda-jalebi breakfast from any old city stall (₹30–50). Head to station."
                    : "Final meal: Agashiye at House of MG — rooftop Gujarati thali (₹800–1,000) before your train or flight. Book in advance.",
                  "Departure: Ahmedabad to Mumbai trains (Shatabdi: 6 hrs, ₹700–1,200). Sardar Vallabhbhai Patel International Airport has flights to all major cities.",
                ]}
                cost={activeTab === "A" ? "₹1,000" : "₹3,000"}
              />
            </div>
          </section>

          {/* ── FOOD GUIDE ── */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🍽️ Ahmedabad Food Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Ahmedabad is largely vegetarian — but what it does with vegetables, lentils, and flatbreads is remarkable. Here&apos;s where to eat, in order of priority.
            </p>
            <div className="space-y-4">
              {[
                { rank: "#1", dish: "Gujarati Thali", where: "Vishalla Restaurant or Agashiye at House of MG", price: "₹400–1,000/person", note: "Vishalla (₹400–500) serves Gujarati thali in a recreated village setting — unlimited refills on 20+ items including kadhi, dhokla, undhiyo, and shrikhand. Agashiye (₹800–1,000) is the rooftop upscale version. Both extraordinary. Come hungry.", emoji: "🍛", color: "bg-amber-50 border-amber-200" },
                { rank: "#2", dish: "Manek Chowk Night Market", where: "Manek Chowk, Old City — after 9 PM", price: "₹50–200 per item", note: "The gold bazaar by day becomes an open-air food court by night. Must-try: cold coffee (the original Ahmedabad style), dahi puri, bhel, pav bhaji, and the famous garlic bread (somehow it's a Manek Chowk staple). The energy after 10 PM is extraordinary.", emoji: "🌙", color: "bg-amber-50 border-amber-200" },
                { rank: "#3", dish: "Fafda-Jalebi Breakfast", where: "Any old city stall or Ambika Jalebi, Relief Road", price: "₹40–80", note: "Crispy chickpea-flour fafda with hot, syrup-soaked jalebi and green chutney. This is the Ahmedabad breakfast. Every neighbourhood has its own stall. Go before 9 AM for the freshest batch.", emoji: "🫓", color: "bg-teal-50 border-teal-200" },
                { rank: "#4", dish: "Handvo", where: "Local sweet shops and home-style restaurants", price: "₹40–80/slice", note: "A savory baked rice-and-lentil cake with vegetables — sounds dull, tastes extraordinary. Found in sweet shops (mithai shops) and local restaurants. Not on tourist menus — ask specifically.", emoji: "🥧", color: "bg-teal-50 border-teal-200" },
                { rank: "#5", dish: "Dhokla & Khandvi", where: "Any Gujarati snack shop (farsan shop)", price: "₹30–60", note: "Steamed fermented rice-lentil dhokla with mustard seeds and curry leaves. Khandvi — paper-thin rolled chickpea sheets. Both are found in farsan (snack) shops throughout the city. Fresh made, eaten within hours.", emoji: "🟡", color: "bg-rose-50 border-rose-200" },
              ].map((f) => (
                <div key={f.dish} className={`rounded-xl border p-5 ${f.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{f.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{f.rank}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{f.dish}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{f.where} · {f.price}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{f.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FOOD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="gujarati thali traditional food ahmedabad"
              fallback="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=900&q=80"
              alt="Gujarati thali — unlimited traditional food at Vishalla Ahmedabad"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Gujarati thali at Vishalla: ₹400–500 for unlimited refills on 20+ dishes. This is what eating in Gujarat looks like — quantity, variety, and sweetness in every course.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹5,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stays (3 nights)", "₹1,500–2,400"], ["Transport (local)", "₹600–900"], ["Food (3 days)", "₹800–1,500"], ["Entry fees", "₹100–200"], ["Shopping", "₹500–1,500"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹5,000–15,000", color: "bg-teal-50 border-teal-200",
                  items: [["Stays (3 nights)", "₹6,000–10,500"], ["Transport (Uber + auto)", "₹1,200–2,000"], ["Food (restaurants)", "₹2,000–4,000"], ["Entry fees + tours", "₹500–1,200"], ["Shopping", "₹1,000–3,500"]] },
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
              * All prices per person. Does not include travel to/from Ahmedabad. Sabarmati Ashram, Sidi Saiyyed Mosque, and Adalaj Vav are all free entry. Calico Museum is free with guided tour (advance booking needed).
            </p>
          </section>

          <AffiliateBlock destination="Ahmedabad" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting Adalaj Vav after 11 AM", desc: "The stepwell is dark after 11 AM. The sun only enters at the right angle between 9–11 AM, illuminating all 5 floors of carvings. Go in the morning or you'll see a beautifully carved dark cave.", icon: "💧" },
                { title: "Skipping the Pol House walk", desc: "Most tourists do the major monuments and miss the Pol Houses entirely. The Pol system is the reason Ahmedabad got UNESCO status. Walk the lanes between Sidi Saiyyed and the river — these are India's most extraordinary urban heritage streets.", icon: "🏘️" },
                { title: "Eating at malls near CG Road", desc: "Ahmedabad's mall food courts are irrelevant when you have Manek Chowk, Vishalla, and a thousand farsan shops. The city's food is its culture — eat accordingly.", icon: "🍽️" },
                { title: "Going to Manek Chowk before 9 PM", desc: "Before 9 PM it's a jewelry market. The food starts after the shops close. The full street food transformation is complete by 9:30–10 PM. Plan your dinner late.", icon: "🌙" },
                { title: "Visiting in May or June", desc: "40–45°C heat makes the heritage walk dangerous and unpleasant. The Pol lanes have little shade. October–February is the window. March is the latest you can comfortably visit.", icon: "🌡️" },
                { title: "Not booking Calico Museum in advance", desc: "The Calico Museum of Textiles only allows entry via guided tour, and tours are often fully booked days in advance. Check their schedule and book online before your trip.", icon: "🎨" },
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
                { icon: "🏛️", title: "The Heritage City Walk", desc: "Start at Swaminarayan Temple at 8 AM, walk through Pol Houses, end at Sidi Saiyyed. Hire a guide through the Ahmedabad Municipal Corporation (AMC) — ₹150/person for 2-hour walk. The carved wooden facades of the Pol houses are extraordinary.", color: "border-amber-200 bg-amber-50" },
                { icon: "🌙", title: "Manek Chowk After 9 PM", desc: "The gold jewelry market closes at 9 PM. After that, tarp sheets appear, street vendors set up, and one of India's finest open-air food markets begins. Must-try: cold coffee, pav bhaji, garlic bread, and Gujarati thali.", color: "border-blue-200 bg-blue-50" },
                { icon: "💧", title: "Adalaj Vav: Go Before 11 AM", desc: "The sun only enters the stepwell at the right angle from 9–11 AM, illuminating the intricate carvings on all 5 floors. At other times it's dark inside. Photography without flash is allowed.", color: "border-green-200 bg-green-50" },
                { icon: "🕊️", title: "Sabarmati Ashram Etiquette", desc: "Entry is free. Gandhi's personal quarters (Hridaya Kunj) are preserved exactly as he left them in 1930. The library has original manuscripts. Silence is requested inside. No photography inside the rooms.", color: "border-purple-200 bg-purple-50" },
                { icon: "🍛", title: "Gujarati Thali", desc: "Vishalla Restaurant (₹400–500 per person) serves Gujarati thali in a recreated village setting — unlimited refills on 20+ items. Agashiye at House of MG is the upscale version (₹800–1,000). Both are extraordinary.", color: "border-orange-200 bg-orange-50" },
                { icon: "🚇", title: "Getting Around Ahmedabad", desc: "BRTS (Bus Rapid Transit) covers the main corridors. Autos use meters but negotiate for heritage areas. The Heritage Walk covers the old city best on foot. Book an Ola/Uber for Adalaj and Gandhinagar.", color: "border-red-200 bg-red-50" },
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
              Tell us your dates and group — we&apos;ll send a personalised Ahmedabad itinerary including trains from Mumbai within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Ahmedabad Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Why is Ahmedabad a UNESCO Heritage City?", a: "Ahmedabad was the first Indian city to receive UNESCO World Heritage City status (2017) for its 600-year-old walled city with Pol houses — a unique urban community layout with chowks, temples, stepwells, and mosques all interconnected. The Pol system allowed communities to defend themselves and live together across religious lines." },
                { q: "How many days do I need in Ahmedabad?", a: "2 full days for the key sights. 3 days if you include Adalaj, Gandhinagar's Akshardham, and the textile museum. 4 days if combining with a day trip to Modhera Sun Temple (90 km)." },
                { q: "What is the best food in Ahmedabad?", a: "Gujarati thali (at Vishalla or Agashiye), Manek Chowk night market (bhel puri, pav bhaji, cold coffee), fafda-jalebi breakfast, and handvo (savory rice cake). Ahmedabad is largely vegetarian — finding non-veg can be difficult." },
                { q: "Is Ahmedabad good in summer?", a: "Avoid May–June (40–45°C). October to February is ideal. March–April is warm but manageable. The Uttarayan kite festival (January 14) is one of India's greatest festivals — the entire city flies kites for 2 days." },
                { q: "Can I visit Rann of Kutch from Ahmedabad?", a: "Kutch (Bhuj) is 330 km from Ahmedabad (6 hrs by road or a direct train). Most visitors do it as a separate 2–3 day trip. The Rann Utsav festival (November–February) is the peak season." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Ahmedabad — Highlights"
            subtitle="The best of Ahmedabad in photos."
            spots={[
              { name: "Ahmedabad Landscape", query: "ahmedabad india landscape scenic beautiful travel", desc: "The stunning landscapes of Ahmedabad." },
              { name: "Ahmedabad Temple", query: "ahmedabad temple architecture heritage india", desc: "Historic temples and architecture in Ahmedabad." },
              { name: "Ahmedabad Street Scene", query: "ahmedabad street market local culture india", desc: "Local life and culture in Ahmedabad." },
              { name: "Ahmedabad Nature", query: "ahmedabad nature hills forest river india", desc: "Natural beauty around Ahmedabad." },
              { name: "Ahmedabad Sunset", query: "ahmedabad sunset golden hour india travel", desc: "Ahmedabad at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Gujarat Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kutch & Rann of Kutch — 3 Days", href: "/blog/kutch-3-days" },
                { label: "Vadodara — 2 Day Heritage Guide", href: "/blog/vadodara-2-days" },
                { label: "Surat — 2 Day Food & Heritage Guide", href: "/blog/surat-2-days" },
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

          <CombineWith currentSlug="ahmedabad-3-days" />
          <RelatedGuides currentSlug="ahmedabad-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
