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

const RANIKHET_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "sights",    emoji: "🏔️", label: "Top Sights" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Ranikhet 2-Day Itinerary&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Ranikhet in 2 Days guide&url=${pageUrl}` },
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
export default function RanikhetClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹4k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹4k–10k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={RANIKHET_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Ranikhet" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="ranikhet hill station mountains uttarakhand pine forest"
            fallback="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=85"
            alt="Himalayan mountain landscape Ranikhet pine forests Uttarakhand"
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
              <span className="text-white/70">Ranikhet 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Kumaon Hill Station
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Ranikhet in 2 Days: Chaubatia Orchards,
                <em className="italic text-gold-light"> Golf Course &amp; Himalayan Peace</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The hill station the Indian Army kept clean, quiet, and colonial. Two complete plans for Uttarakhand&apos;s most underrated retreat.
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
              <span>🇮🇳 Uttarakhand</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹2,500</span>
            </div>
          </div>

          {/* Intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Walking through Chaubatia at 7 AM, apple blossoms in the mist, Nanda Devi catching the first light — I understood why the British Army chose this meadow and never wanted to leave.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Ranikhet is 350 km from Delhi. An active Army cantonment since 1869. Spotlessly clean by Indian hill-station standards. No bar culture, quiet hours enforced, vehicles limited. The main attractions — Chaubatia orchards (250 acres of apples and plums owned by the Army), a golf course with Himalayan views, and Jhula Devi Temple with thousands of bells — are all within 5 km of the town centre. Nanda Devi at 7,816m is visible on clear mornings from the orchard.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌸" label="Best Season" value="Mar–Jun, Oct–Nov" />
            <StatCard icon="⛰️" label="Altitude" value="1,829 m" />
            <StatCard icon="🚗" label="Distance from Delhi" value="350 km" />
            <StatCard icon="⭐" label="Rating" value="4.4★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Ranikhet rewards visits outside the peak monsoon. Apple season adds a special dimension.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Mar–Jun", emoji: "🌸", title: "Spring & Summer", desc: "12–22°C. Orchards in bloom (March–April), apple and plum season begins (June). The most popular months for families. Book ahead for May (school holidays).", color: "bg-emerald-50 border-emerald-200" },
                { season: "Sep–Nov", emoji: "✅", title: "Autumn Peak", desc: "8–20°C. Crystal clear skies, apple harvest at Chaubatia, best Himalayan views of the year. Fewer crowds than summer. The finest photography season.", color: "bg-amber-50 border-amber-200" },
                { season: "Dec–Feb", emoji: "❄️", title: "Winter — Snow Possible", desc: "0–10°C. Snow can close roads occasionally. Beautiful if you want a snow experience — the orchard under snow is memorable. Pack serious warm layers and check road conditions.", color: "bg-blue-50 border-blue-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 2-day route, two comfort levels. Ranikhet is one of India&apos;s better-value hill stations.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Budget guesthouses (₹600–1000)</td><td className="py-2.5 px-4">Kumaon Regiment Centre or The Retreat (₹1500–3500)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Shared taxi + walk</td><td className="py-2.5 px-4">Private taxi for all days</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Dhabas + local restaurants</td><td className="py-2.5 px-4">Hotel meals + MG Market cafes</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹4,000</td><td className="py-2.5 px-4 font-medium text-teal">₹4,000–10,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive, Chaubatia Orchards, Golf Course, Upat sunset. Day 2: Jhula Devi, Binsar Mahadev, depart.
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
                title="Chaubatia Orchards + Golf Course + Upat Sunset"
                items={[
                  activeTab === "A"
                    ? "Overnight Kathgodam Express from Delhi Old/New Delhi (6–7 hrs, ₹200–500). Arrive Kathgodam morning. Shared taxi to Ranikhet (75 km, 2.5 hrs, ₹150 per person)."
                    : "Overnight Kathgodam Express from Delhi (₹500–800 sleeper/AC). Arrive Kathgodam morning. Private taxi to Ranikhet (₹800, 2.5 hrs). Or drive from Delhi directly (350 km, 7–8 hrs).",
                  activeTab === "A"
                    ? "Check in to guesthouse (₹600–1000). Sharma Guest House or Hotel Kalika near the main market."
                    : "Check in to Kumaon Regiment Centre (Army hotel, ₹1500–2000, book via their website in advance) or The Retreat (₹2500–3500).",
                  "Chaubatia Orchards (5 km from the market, taxi ₹100 shared) — 250 acres of Army-managed orchards with apple, plum, peach, and walnut trees. Free entry. The orchards have a backdrop of snow peaks including Nanda Devi at 7,816m. In June–October, buy fruit directly from the orchard at 30–40% below market prices.",
                  "Golf Course viewpoint — you don't need to play golf. Walk along the perimeter of the Army-managed 9-hole course for extraordinary Himalayan views. The Trishul and Nanda Devi peaks dominate the skyline on clear days.",
                  "Upat Maidan — a grassy meadow 5 km from Ranikhet, used for light helicopter landings and informal cricket. Good sunset point. Quiet and vast.",
                  activeTab === "A" ? "Dinner at a local dhaba near the market (₹150–300 for a full meal)." : "Dinner at your hotel or a restaurant on Mall Road (₹400–800).",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹3,500–6,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Jhula Devi Temple + Binsar Mahadev + Depart"
                items={[
                  "Morning: MG Market and Mall Road walk. Ranikhet's compact market has better-than-average hill station shopping — Kumaoni woolens, copper goods, and fruit preserves from the Chaubatia orchards (Army-branded, excellent quality).",
                  "Jhula Devi Temple — a temple to goddess Jhula Devi where devotees tie bells to fulfil vows. The entire temple complex — ceiling, walls, every railing — is covered in thousands of donated bells. When the wind blows, the sound is unforgettable. 2 km from the market.",
                  activeTab === "A"
                    ? "Binsar Mahadev temple (20 km from Ranikhet, shared taxi ₹400 return). An 11th-century Shiva temple set deep in a deodar cedar forest. Ancient carved stone panels, peaceful forest atmosphere, small stream. A 30-minute walk from the road."
                    : "Binsar Mahadev temple (private taxi ₹600–800 return). Allow 3–4 hours for the temple and the forest walk. The forest around the temple is excellent for birdwatching — take binoculars if you have them.",
                  "Doonagiri and Mankameshwar temples — smaller shrines near Ranikhet, worth a quick visit if time permits before departure.",
                  activeTab === "A"
                    ? "Depart for Kathgodam by shared taxi (₹150 per person, 2.5 hrs). Evening train from Kathgodam to Delhi."
                    : "Depart for Kathgodam by private taxi (₹800, 2.5 hrs). Evening train from Kathgodam to Delhi or onward to Almora (50 km, 1.5 hrs) for a loop.",
                ]}
                cost={activeTab === "A" ? "₹1,800" : "₹3,000–4,500"}
              />
            </div>
          </section>

          {/* ── TOP SIGHTS ── */}
          <section id="sights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏔️ Top Sights in Ranikhet</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Ranikhet&apos;s sights are low-key by design. This is a town for walking, breathing, and looking at mountains.
            </p>
            <div className="space-y-4">
              {[
                { rank: "#1", name: "Chaubatia Orchards", type: "Nature + Views", hours: "Dawn to dusk", note: "250 acres of Army-managed apple, plum, peach, and walnut orchards. Free entry. The finest Himalayan backdrop of any Ranikhet sight — Nanda Devi visible on clear days. In apple season (June–October), buy fresh fruit at orchard prices.", emoji: "🍎", color: "bg-amber-50 border-amber-200" },
                { rank: "#2", name: "Golf Course Viewpoint", type: "Views + Walking", hours: "Sunrise to sunset", note: "One of India's most scenic golf courses, Army-managed. Non-players can walk the perimeter for free. The views of Trishul and Nanda Devi from the fairways are exceptional. No photography restrictions.", emoji: "⛳", color: "bg-amber-50 border-amber-200" },
                { rank: "#3", name: "Jhula Devi Temple", type: "Religious + Cultural", hours: "6 AM – 8 PM", note: "Thousands of bells donated by pilgrims whose wishes were fulfilled. The temple has been accumulating bells for centuries. The sound when the wind blows is unique. Free entry.", emoji: "🔔", color: "bg-teal-50 border-teal-200" },
                { rank: "#4", name: "Binsar Mahadev", type: "Temple + Forest", hours: "6 AM – 5 PM", note: "11th-century Shiva temple 20 km from Ranikhet, inside a deodar cedar forest. Ancient stone carvings, a peaceful stream, and forest walks. One of the finest medieval temple sites in Kumaon.", emoji: "🌲", color: "bg-teal-50 border-teal-200" },
                { rank: "#5", name: "Upat Maidan", type: "Meadow + Sunset", hours: "All day", note: "A large meadow 5 km from Ranikhet. Peaceful, open, with views of the snow range. Good sunset point. The Army uses it for light aircraft — you may see small planes or helicopters.", emoji: "🌅", color: "bg-rose-50 border-rose-200" },
              ].map((s) => (
                <div key={s.name} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{s.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{s.rank}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.name}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{s.type} · {s.hours}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{s.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="apple orchard himalaya mountains india"
              fallback="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=900&q=80"
              alt="Apple orchard with Himalayan mountain backdrop"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Chaubatia Orchards in apple season: free entry, Army-managed, 250 acres of fruit trees with Nanda Devi as the backdrop. Buy apples at the orchard gate for 30% below market prices.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹4,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stays (1 night)", "₹600–1,000"], ["Transport (shared)", "₹400–700"], ["Food (2 days)", "₹600–1,000"], ["Temple visits", "₹0–200"], ["Misc + shopping", "₹300–500"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹4,000–10,000", color: "bg-teal-50 border-teal-200",
                  items: [["Stays (1 night)", "₹1,500–3,500"], ["Private taxi (2 days)", "₹1,500–2,500"], ["Food + hotel meals", "₹1,000–2,000"], ["Entry fees + misc", "₹500–1,000"], ["Shopping", "₹500–1,500"]] },
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
              * All prices per person. Does not include train from Delhi to Kathgodam (₹200–500). Chaubatia Orchards and the Golf Course viewpoint are free. Jhula Devi Temple is free.
            </p>
          </section>

          <AffiliateBlock destination="Ranikhet" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Coming as a day trip from Nainital", desc: "Ranikhet is 53 km from Nainital (1.5 hrs), but the drive takes most of the morning each way. The point of Ranikhet is the slow morning light on the orchard, not a rushed 3-hour visit. Stay overnight.", icon: "🗓️" },
                { title: "Expecting nightlife or restaurants", desc: "Ranikhet is an Army cantonment. It closes at 10 PM. There are no bars. The restaurants are simple and unpretentious. This is not a weakness — it's the entire point. If you want nightlife, go to Mussoorie.", icon: "🍷" },
                { title: "Not booking the Kumaon Regiment Centre in advance", desc: "The Army hotel is the best accommodation in Ranikhet — clean, well-maintained, good food. It gets fully booked on weekends. Book via their website at least 2 weeks ahead.", icon: "🏨" },
                { title: "Trying to do Binsar Wildlife Sanctuary as a detour", desc: "Binsar Wildlife Sanctuary (the Zero Point with 65+ peak views) is 70 km from Ranikhet — not the same as Binsar Mahadev Temple (20 km). The sanctuary is best done as part of an Almora trip. Don't confuse the two.", icon: "🗺️" },
                { title: "Missing Chaubatia in the rain or fog", desc: "The Himalayan view from Chaubatia is the main attraction. If it's foggy on Day 1, go at 6 AM on Day 2 before departure — the morning is usually clearer. Flexibility pays.", icon: "⛅" },
                { title: "Not carrying cash", desc: "Ranikhet has limited ATMs and most small shops are cash-only. Carry sufficient cash from Kathgodam or Delhi. The main Canara Bank ATM near MG Market is often out of service.", icon: "💳" },
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
                { icon: "🍎", title: "Chaubatia Orchards in Apple Season", desc: "June–October is when apples, plums, and peaches ripen. You can buy directly from the orchard at 30–40% of market prices. The Army manages these orchards — no entry fee, very clean, excellent views.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏌️", title: "The Golf Course Is Free to Walk", desc: "Ranikhet has one of India's most scenic golf courses (managed by the Army). You don't need to play golf — walk along the perimeter for extraordinary Himalayan views. The 9-hole course is open to visitors as a viewpoint.", color: "bg-amber-50 border-amber-200" },
                { icon: "🔇", title: "Why Ranikhet Feels Different", desc: "It's an active Army cantonment. Hotels and guesthouses must follow quiet hours (10 PM). There's no bar culture. The town is spotlessly clean. This discipline makes it genuinely peaceful — unusual in Indian hill stations.", color: "bg-teal-50 border-teal-200" },
                { icon: "🚌", title: "Best Route from Delhi", desc: "Overnight train from Delhi Old/New Delhi to Kathgodam (6–7 hrs, ₹200–500), then taxi to Ranikhet (2.5 hrs, ₹800 private). Total journey: 9–10 hrs, much of it asleep. Return same way or via Almora (50 km) for a loop.", color: "bg-teal-50 border-teal-200" },
                { icon: "🌿", title: "Combine with Almora", desc: "Almora is 50 km from Ranikhet (1.5 hrs). A natural 4-day circuit: Delhi → Ranikhet (2 days) → Almora (2 days) → Delhi. Both cover the best of Kumaon without retracing steps.", color: "bg-rose-50 border-rose-200" },
                { icon: "🏨", title: "Where to Stay", desc: "Kumaon Regiment Centre (Army hotel, ₹1500–2000, requires prior booking via website). Budget: Sharma Guest House, Hotel Kalika (₹600–1000). Mid-range: The Retreat (₹2500–3500).", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and group — we&apos;ll send a personalised Ranikhet itinerary with Kumaoni circuit options within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Ranikhet Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Is Ranikhet better than Mussoorie or Shimla?", a: "Ranikhet has far fewer tourists, better Himalayan views (Nanda Devi visible on clear days), and a genuinely quiet atmosphere due to the Army cantonment. It's not better for shopping, restaurants, or nightlife — it's better for peace. Choose Ranikhet if you want to actually rest; choose Mussoorie if you want entertainment." },
                { q: "What is the story behind the name Ranikhet?", a: "'Ranikhet' means 'Queen's Meadow' in Hindi. Legend says Queen Padmini of a local raja was enchanted by the meadow here, and the king built a palace for her. The British established it as an Army cantonment in 1869, which is why it retains its colonial character intact." },
                { q: "Can I do Ranikhet in 1 day from Kathgodam or Nainital?", a: "It's possible as a day trip (Kathgodam is 75 km, Nainital 53 km) but not recommended. The drive takes 2.5 hrs each way, leaving you only 4–5 hours. Ranikhet rewards a slow overnight stay — the morning light on Nanda Devi from Chaubatia is the main attraction." },
                { q: "Is there trekking from Ranikhet?", a: "The Ranikhet–Doonagiri trek (15 km one way) passes through oak forests to a 2,650m summit with Trishul peak views. It's a 2-day moderate trek. Shorter walks: Binsar Mahadev forest trail (5 km), and the Chaubatia circuit (6 km through orchards)." },
                { q: "Best time to visit Ranikhet?", a: "March–June (flowers, 12–22°C) and September–November (clear skies, 8–20°C). Avoid December–February unless you want snow (roads can close). Monsoon (July–August) is green but very rainy. Apple season (June–October) adds the Chaubatia orchard experience." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Ranikhet — Highlights"
            subtitle="The best of Ranikhet in photos."
            spots={[
              { name: "Ranikhet Landscape", query: "ranikhet india landscape scenic beautiful travel", desc: "The stunning landscapes of Ranikhet." },
              { name: "Ranikhet Temple", query: "ranikhet temple architecture heritage india", desc: "Historic temples and architecture in Ranikhet." },
              { name: "Ranikhet Street Scene", query: "ranikhet street market local culture india", desc: "Local life and culture in Ranikhet." },
              { name: "Ranikhet Nature", query: "ranikhet nature hills forest river india", desc: "Natural beauty around Ranikhet." },
              { name: "Ranikhet Sunset", query: "ranikhet sunset golden hour india travel", desc: "Ranikhet at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Exploring More of Kumaon?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Almora — 3 Days in Kumaon's Cultural Heart", href: "/blog/almora-3-days" },
                { label: "Nainital — 3 Days Complete Guide", href: "/blog/nainital-3-days" },
                { label: "Mukteshwar — 2 Days with Apple Orchards", href: "/blog/mukteshwar-2-days" },
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

          <CombineWith currentSlug="ranikhet-2-days" />
          <RelatedGuides currentSlug="ranikhet-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
