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

const CHANDIGARH_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "sights",    emoji: "🏛️", label: "Key Sights" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Chandigarh 2-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Chandigarh in 2 Days — Rock Garden & Le Corbusier guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function ChandigarhClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹4k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹4k–10k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={CHANDIGARH_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Chandigarh" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="Chandigarh Rock Garden sculptures modernist architecture India"
            fallback="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=1600&q=85"
            alt="Chandigarh Rock Garden sculptures and Le Corbusier planned city architecture"
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
              <span className="text-white/70">Chandigarh 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Architecture & Culture
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Chandigarh in 2 Days: Le Corbusier&apos;s Planned City
                <em className="italic text-gold-light"> &amp; Rock Garden Guide</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                UNESCO Capitol Complex, 5,000 sculptures built from industrial waste, Sukhna Lake, Asia&apos;s largest rose garden — India&apos;s only planned city from scratch.
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
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹2,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Nek Chand spent 18 years building his garden in secret, cycling rubble from demolished villages at night. When the government discovered it in 1975, they wanted to demolish it. Public outcry saved it. Today, 5,000 people visit daily. This is one of the great stories of art versus authority in Indian history.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Chandigarh is unlike any other Indian city. After Lahore went to Pakistan in 1947, India needed a new capital for Punjab. Jawaharlal Nehru commissioned Le Corbusier — the Swiss-French architect — to design a city from scratch. What Le Corbusier created in the 1950s became a global landmark of modernist urban planning: a grid of self-contained sectors, separated pedestrian and vehicle paths, and the Capitol Complex that UNESCO listed in 2016. Then, in parallel, a road inspector named Nek Chand was secretly building something completely different in the jungle at the city&apos;s edge.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌤️" label="Best Season" value="Oct–Mar" />
            <StatCard icon="🏗️" label="Designed by" value="Le Corbusier (1950s)" />
            <StatCard icon="🚗" label="Distance from Delhi" value="260 km" />
            <StatCard icon="⭐" label="Rating" value="4.4★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Chandigarh is pleasant most of the year but has a defined best window.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Mar", emoji: "✅", title: "Best Season", desc: "Pleasant temperatures (10–25°C). The Rose Garden blooms from January to March — extraordinary if you time it right. Migratory birds at Sukhna Lake (October–March). The Capitol Complex is best explored on foot in this weather.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Feb–Mar", emoji: "🌹", title: "Rose Festival Season", desc: "The annual Chandigarh Rose Festival (usually first week of March) at the Zakir Hussain Rose Garden — flower competitions, folk performances, food stalls, cultural events. If this aligns with your visit, prioritise it.", color: "bg-amber-50 border-amber-200" },
                { season: "Apr–Sep", emoji: "🌡️", title: "Summer & Monsoon", desc: "April–June is hot (35–45°C). July–September brings monsoon — green and cooler. The Rock Garden is still good in monsoon (the waterfalls run). Summer is acceptable if you stay indoors midday.", color: "bg-rose-50 border-rose-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 2-day route, two comfort levels. Chandigarh is best explored on foot or by bicycle — neither budget nor comfort changes the core experience.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Sector 22 guesthouse ₹700–1,200</td><td className="py-2.5 px-4">Sector 35 or 17 hotel ₹2,000–4,000</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Cycle rental + auto-rickshaws</td><td className="py-2.5 px-4">Architecture walking tour + Ola/Uber</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Dhabas + Sector 17 food court</td><td className="py-2.5 px-4">Pal Dhaba + The Eatery restaurant</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹4,000</td><td className="py-2.5 px-4 font-medium text-teal">₹4,000–10,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Rock Garden + Sukhna Lake + Sector 17 evening. Day 2: Capitol Complex UNESCO + Government Museum + Rose Garden + Punjab University.
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
                title="Rock Garden, Sukhna Lake & Sector 17"
                items={[
                  activeTab === "A"
                    ? "Bus from Delhi (5 hrs, ₹450–600 Volvo) or train (Shatabdi: 3.5 hrs, ₹550–1,200). Check in to Sector 22 guesthouse (₹700–1,200/night). Sector 22 is central and within walking/auto distance of all main sights."
                    : "Bus or train from Delhi. Check in to Sector 35 or Sector 17 hotel (₹2,000–4,000/night). Better facilities and restaurant proximity. Book an architecture walking tour (₹500–800/person, 2 hrs) for the afternoon.",
                  "Rock Garden (Sector 1, ₹30 entry): 40 acres of sculptures built by Nek Chand over 18 years using debris from demolished villages — broken bangles, electrical switches, ceramic tiles, discarded iron. 5,000 sculptures across 12 interconnected zones. Built covertly from 1958, discovered in 1975, nearly demolished before public outcry saved it.",
                  "Walk the full Rock Garden route: the waterfalls, the arched corridors, the figure galleries, the amphitheatre. Allow 2 hours minimum. Children love it — the scale and variety of the sculptures is inexhaustible.",
                  "Sukhna Lake (adjacent to Rock Garden, Sector 1, free entry): 3 km walking promenade. Paddleboats ₹50–100. Migratory birds October–March. The lake was created by Le Corbusier as part of the city plan — a seasonal reservoir that became a recreational centrepiece.",
                  "Evening: Sector 17 Plaza — the commercial heart of Chandigarh. The central plaza has a functioning fountain (lit at night). Café culture, shops, and Chandigarh's evening social scene. The food court area has Punjabi thali options (₹150–250).",
                  "Dinner: Sector 17 food court or nearby restaurants. Chandigarh has good Punjabi food — no restaurant required when the dhabas are this good.",
                ]}
                cost={activeTab === "A" ? "₹1,500" : "₹3,500–5,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Capitol Complex UNESCO, Government Museum & Rose Garden"
                items={[
                  "Capitol Complex (Sectors 1–2, free entry to grounds): Le Corbusier's masterwork comprising the High Court (1955), Secretariat (1958), and Assembly Hall (1961). UNESCO World Heritage since 2016. The raw béton brut (raw concrete) construction was revolutionary in the 1950s.",
                  "The Open Hand monument in the Capitol Complex — Le Corbusier's symbol for the city ('open to give, open to receive'). The 26m structure rotates in the wind. Interior visits to the buildings require prior appointment, but the grounds are freely walkable.",
                  activeTab === "A"
                    ? "Self-guided walk of the Capitol Complex. Arrive early morning for the best light on the concrete facades and fewer crowds."
                    : "Book an architecture guided tour of the Capitol Complex (₹500–800, contact Chandigarh Architecture Museum for recommendations). The guide explains Le Corbusier's vision, the modular design system, and the political context of post-Partition Punjab.",
                  "Government Museum and Art Gallery (Sector 10, ₹10 entry): excellent Gandhara sculpture collection (2nd–5th century Buddhist art), Punjabi miniature paintings, and modern Indian art. 1 hour.",
                  "Chandigarh Architecture Museum (Sector 10, adjacent to Government Museum, ₹10 entry): Le Corbusier's original drawings, planning documents, and models for the city. Essential for architecture enthusiasts.",
                  "Zakir Hussain Rose Garden (Sector 16, free entry): Asia's largest rose garden with 1,600 varieties. Best January–March when fully bloomed. Even outside bloom season, the garden is well-maintained and pleasant for a walk.",
                  "Punjab University campus (Sector 14): designed by Pierre Jeanneret (Le Corbusier's cousin and collaborator). Remarkable modernist campus architecture. Free entry — walk the campus.",
                  "Depart: Chandigarh railway station (Sector 17) or airport (8 km north of city).",
                ]}
                cost={activeTab === "A" ? "₹1,500" : "₹2,500–4,000"}
              />
            </div>
          </section>

          {/* ── KEY SIGHTS ── */}
          <section id="sights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏛️ Key Sights Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              What to know before visiting each major attraction.
            </p>
            <div className="space-y-4">
              {[
                { sight: "Rock Garden", entry: "₹30", hours: "9 AM–6 PM (closed Mon)", note: "40 acres, 5,000 sculptures. Arrive when it opens to beat school groups that arrive mid-morning. The later zones (zones 9–12) are less visited and have some of the best sculpture compositions.", emoji: "🎨", color: "bg-amber-50 border-amber-200" },
                { sight: "Capitol Complex", entry: "Free (grounds)", hours: "Open daily (office hours for interior visits)", note: "UNESCO site. Grounds are freely accessible. Interior visits to the High Court, Secretariat, and Assembly Hall require prior booking through the Punjab government. The grounds walk takes 45–60 minutes.", emoji: "🏛️", color: "bg-amber-50 border-amber-200" },
                { sight: "Sukhna Lake", entry: "Free", hours: "6 AM–10 PM", note: "3 km promenade. Best at sunrise and sunset. Paddleboat hire ₹50–100/30 min. Migratory birds (Siberian ducks, bar-headed geese) visible October–March. Good early morning jogging and walking spot.", emoji: "🌊", color: "bg-teal-50 border-teal-200" },
                { sight: "Rose Garden", entry: "Free", hours: "6 AM–10 PM", note: "1,600 rose varieties. Full bloom January–March. The annual Rose Festival (early March) adds folk performances and food stalls. A 45-minute visit is sufficient unless you're a rose specialist.", emoji: "🌹", color: "bg-teal-50 border-teal-200" },
                { sight: "Government Museum", entry: "₹10", hours: "10 AM–4:30 PM (closed Mon)", note: "Best museum in Chandigarh. The Gandhara sculpture collection (Buddhist art, 2nd–5th century) is particularly strong. Architecture museum next door covers Le Corbusier's original city plans.", emoji: "🏺", color: "bg-rose-50 border-rose-200" },
              ].map((s) => (
                <div key={s.sight} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{s.emoji}</span>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <p className="font-medium text-sm text-stone-900">{s.sight}</p>
                        <span className="text-[0.65rem] text-gold-dark font-medium">{s.entry}</span>
                        <span className="text-[0.65rem] text-muted">{s.hours}</span>
                      </div>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{s.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── HERO IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="Rock Garden Chandigarh sculptures mosaic art installation India"
              fallback="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=80"
              alt="Chandigarh Rock Garden sculptures made from industrial waste and ceramic fragments"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Nek Chand&apos;s Rock Garden: 5,000 sculptures across 40 acres, built secretly from the rubble of demolished villages. One of India&apos;s most remarkable stories of unofficial art.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹4,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stays (2 nights)", "₹1,400–2,400"], ["Transport (bus from Delhi + local)", "₹700–1,000"], ["Food (dhabas + food court)", "₹600–1,000"], ["Entry fees", "₹100–200"], ["Cycle rental", "₹100–200"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹4,000–10,000", color: "bg-teal-50 border-teal-200",
                  items: [["Stays (2 nights)", "₹4,000–8,000"], ["Transport (Shatabdi + Ola/Uber)", "₹1,500–2,500"], ["Food (restaurants + dhabas)", "₹1,000–2,000"], ["Walking tour", "₹500–800"], ["Entry fees", "₹200–400"]] },
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
              * All prices per person. Does not include travel to Chandigarh from your home city. Rock Garden (₹30), Government Museum (₹10), and Rose Garden (free) are among India&apos;s best-value attractions.
            </p>
          </section>

          <AffiliateBlock destination="Chandigarh" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Trying to Do Chandigarh as a Delhi Day Trip", desc: "While technically possible (3.5 hrs by Shatabdi), a day trip means rushing Rock Garden + Capitol Complex in 8 hours with 7 hours of travel. 2 days is the minimum to understand the city's architecture logic and visit all the major sights at a comfortable pace.", icon: "🚂" },
                { title: "Visiting the Rock Garden at Midday in Summer", desc: "The Rock Garden is entirely outdoors. In April–June, midday temperatures hit 40°C+. Go at 9 AM when it opens. The sculptures in morning light are also more atmospheric for photography.", icon: "🌡️" },
                { title: "Missing the Rose Garden Outside Bloom Season", desc: "If you're visiting April–December, the Rose Garden is a pleasant green park but not the dramatic experience it is from January–March. Adjust your expectations or schedule for the right season.", icon: "🌹" },
                { title: "Overlooking Chandigarh's Dhaba Culture", desc: "Pal Dhaba in Sector 28 (50+ years old) serves some of the best maa ki dal and tandoori roti in Punjab. The city's dhaba culture is often skipped in favour of mall restaurants. Don't make that mistake.", icon: "🍲" },
                { title: "Not Booking Capitol Complex Interior Visits in Advance", desc: "The High Court, Secretariat, and Assembly Hall require prior permission for interior visits — you cannot just walk in. Contact the Punjab government tourism department or an architecture tour operator well in advance.", icon: "🏛️" },
                { title: "Skipping the Architecture Museum", desc: "Most tourists do Rock Garden and Sukhna Lake and miss the Chandigarh Architecture Museum (Sector 10). Le Corbusier's original city plans and drawings are here — essential context for understanding why Chandigarh looks and functions the way it does.", icon: "📐" },
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
                { icon: "🏗️", title: "Le Corbusier's Vision", desc: "When India needed a new capital for Punjab after Lahore went to Pakistan in 1947, Jawaharlal Nehru commissioned Le Corbusier to design Chandigarh from scratch. The city's sector system (each sector self-contained with schools, markets, parks), the separation of pedestrians and vehicles, and the Capitol Complex make it a global landmark of modernist urban planning.", color: "bg-amber-50 border-amber-200" },
                { icon: "🎨", title: "Rock Garden: A Story of Subversion", desc: "Nek Chand started building his garden in secret in 1958 using the debris of villages demolished to build Chandigarh. For 18 years, he worked at night, carrying rubble on his bicycle. When discovered in 1975, the government wanted to demolish it — public outcry turned it into an official attraction. It's now one of the world's largest outsider art installations.", color: "bg-amber-50 border-amber-200" },
                { icon: "🌹", title: "Rose Garden: Best in February–March", desc: "The Zakir Hussain Rose Garden (Asia's largest) blooms from January to March. The annual Rose Festival (usually March) has flower competitions, folk performances, and food stalls. Outside bloom season, the garden is still pleasant but less dramatic.", color: "bg-teal-50 border-teal-200" },
                { icon: "🚲", title: "Cycling City", desc: "Chandigarh has 180 km of dedicated cycling tracks (one of India's few planned cycling networks). Rent cycles from Sukhna Lake or Sector 17 (₹50–100/hr). The Sector 1–Sukhna Lake–Capitol Complex loop is 8 km and covers the best of the city.", color: "bg-teal-50 border-teal-200" },
                { icon: "🍽️", title: "Where to Eat", desc: "The dhaba culture is strong: Pal Dhaba (Sector 28, legendary, 50+ year old) for maa ki dal and tandoori roti. For upscale: The Eatery in Sector 26. Sector 17's food court area has good Punjabi thali options. The city also has India's highest concentration of microbreweries per capita.", color: "bg-rose-50 border-rose-200" },
                { icon: "🏨", title: "Best Areas to Stay", desc: "Sector 22 (budget, well-connected, ₹700–1500). Sector 35 (mid-range, good restaurants nearby, ₹2000–3500). Sector 17 (commercial centre, best for shopping, ₹3000–5000). The sectors are all well-connected by auto.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and group — we&apos;ll plan your Chandigarh itinerary including train bookings and architecture tour recommendations within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Chandigarh Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Why is the Capitol Complex a UNESCO site?", a: "The Capitol Complex (High Court, Secretariat, and Legislative Assembly) was inscribed as UNESCO World Heritage in 2016 as part of 'The Architectural Work of Le Corbusier.' It's one of 17 Le Corbusier sites across 7 countries recognized as an 'outstanding contribution to the Modern Movement.' The brutalist concrete forms, crafted in raw béton brut (raw concrete), were revolutionary in the 1950s." },
                { q: "Who is Nek Chand and why is his garden famous?", a: "Nek Chand (1924–2015) was a road inspector in Chandigarh's Public Works Department. Starting in 1958, he secretly built a fantastical garden from the rubble of demolished villages, using broken crockery, tiles, bangles, and electrical waste. The 40-acre Rock Garden he created is now visited by over 5,000 people daily and is one of India's most-visited outdoor attractions." },
                { q: "Is Chandigarh expensive compared to other Indian cities?", a: "Chandigarh is moderately expensive — reflecting Punjab's prosperity. Budget accommodation runs ₹700–1500/night. Restaurant meals ₹150–400/person. Dhabas are cheap (₹100–200/person). Chandigarh has no heavy tourist premium — prices are driven by the local economy." },
                { q: "Can I do a day trip from Delhi to Chandigarh?", a: "Yes — 260 km, 4–5 hours by Shatabdi Express (fastest, Delhi to Chandigarh: 3.5 hrs, ₹550–1200). Volvo bus: 5 hrs (₹450–600). By car: 4–5 hrs on NH44. However, 2 days is better to cover Rock Garden, Capitol Complex, Sukhna Lake, and Sector 17 at a comfortable pace." },
                { q: "Is Chandigarh good for families with children?", a: "Excellent — Rock Garden is extraordinary for children (sculpture maze, waterfalls, arched corridors). Sukhna Lake has paddleboats, promenade, and bird watching. The Rose Garden is stroller-friendly. The Government Museum has galleries accessible for all ages. Chandigarh is India's most family-friendly planned city." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a North India Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Amritsar — 2 Day Golden Temple Guide", href: "/blog/amritsar-2-days" },
                { label: "Shimla — 4 Day Himalayan Gateway", href: "/blog/shimla-4-days" },
                { label: "Manali — 5 Day Mountain Guide", href: "/blog/manali-5-days" },
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

          <CombineWith currentSlug="chandigarh-2-days" />
          <RelatedGuides currentSlug="chandigarh-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
