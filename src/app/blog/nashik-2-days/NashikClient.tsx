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

const NASHIK_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "wine",      emoji: "🍷", label: "Wine Guide" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Nashik 2-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Nashik in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function NashikClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹4k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹4k–12k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={NASHIK_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Nashik" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="sula vineyards nashik wine grapes"
            fallback="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1600&q=85"
            alt="Sula Vineyards Nashik wine estate with grape vines"
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
              <span className="text-white/70">Nashik 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Wine &amp; Pilgrimage
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Nashik in 2 Days: Sula Vineyards,
                <em className="italic text-gold-light"> Wine &amp; Trimbakeshwar</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                India&apos;s wine capital meets one of the 12 Jyotirlingas. Two complete plans for the city that somehow makes wine tours and Kumbh Mela happen in the same place.
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
              <span>🇮🇳 Maharashtra</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹2,500</span>
            </div>
          </div>

          {/* Intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Nashik is the only city in India where you can do a wine tasting at noon and stand at one of the 12 Jyotirlingas by evening. The combination shouldn&apos;t work. But it does.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Most people know Nashik as the place where the Kumbh Mela happens. Wine enthusiasts know it as India&apos;s Napa Valley. History buffs know it as the city of Pandavleni Buddhist caves and Ram Kund. Only 170 km from Mumbai and 210 km from Pune, Nashik is an easy weekend escape that rewards a proper 2-day trip. The harvest season (January–February) is peak time — wineries are buzzing, SulaFest fills the vineyard, and the city hums with energy.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Best Season" value="Oct–Feb (Harvest: Jan–Feb)" />
            <StatCard icon="🚗" label="Distance from Mumbai" value="170 km" />
            <StatCard icon="🍷" label="Wineries" value="50+ in region" />
            <StatCard icon="⭐" label="Rating" value="4.5★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Nashik has two distinct draws at different times of year. Plan around what matters most to you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Jan–Feb", emoji: "🍇", title: "Harvest Season", desc: "Grapes being picked, special winery experiences, SulaFest (February). Book accommodation 2 months ahead. This is the undisputed best time for wine lovers.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Oct–Dec", emoji: "✅", title: "Pleasant Season", desc: "Post-monsoon weather (15–28°C), comfortable for temples and caves. Wineries fully operational. Good visibility for the Brahmagiri hills around Trimbakeshwar.", color: "bg-amber-50 border-amber-200" },
                { season: "Apr–Jun", emoji: "🔥", title: "Hot Summer", desc: "Temperatures hit 38–42°C. Wine tasting indoors is fine but outdoor exploration is uncomfortable. Sula and other wineries are open but fewer events.", color: "bg-red-50 border-red-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 2-day route, two comfort levels. Nashik is one of Maharashtra&apos;s most accessible weekend destinations.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Guesthouses near Panchvati (₹600–1000)</td><td className="py-2.5 px-4">Hotel near Tapovan or Beyond by Sula (₹2500–6000)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Shared jeep + auto + walk</td><td className="py-2.5 px-4">Private taxi for all days</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Winery</td><td className="py-2.5 px-4">Standard tasting (₹400–800)</td><td className="py-2.5 px-4">VIP / private tour (₹1200–2000)</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹4,000</td><td className="py-2.5 px-4 font-medium text-teal">₹4,000–12,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Panchvati ghats → Kalaram Temple → Pandavleni caves. Day 2: Trimbakeshwar Jyotirlinga → Sula Vineyards tasting.
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
                title="Panchvati Ghats, Kalaram Temple & Pandavleni Caves"
                items={[
                  activeTab === "A"
                    ? "Arrive by MSRTC Shivneri bus from Mumbai (3 hrs, ₹350) or train from CST/Dadar to Nashik Road (3–4 hrs, ₹100–300). Nashik Road station is 10 km from the city centre — take a shared auto (₹30) or app cab (₹120–150)."
                    : "Arrive by MSRTC Shivneri AC bus (₹350, 3 hrs) or by car on NH3. Hire a private auto or cab for the day (₹600 for a full-day auto).",
                  activeTab === "A"
                    ? "Check in to guesthouse near Panchvati (₹600–1000). Walking distance to all the key sights."
                    : "Check in to hotel near Tapovan (₹1500–2500). Quieter area, closer to the wineries.",
                  "Ram Kund — the sacred ghat on the Godavari where Ram and Sita bathed during their 14-year exile. One of the most significant pilgrimage points in Maharashtra. The ghats are active and atmospheric.",
                  "Sita Gufa — the cave temple where Sita is said to have lived during the Nashik phase of the Ramayana exile. Small but evocative.",
                  "Kalaram Temple — Nashik's most important temple with a striking black-stone idol of Ram. Historically significant as the site of Dr. B.R. Ambedkar's satyagraha in 1930, when Dalits marched for equal right of entry to the temple.",
                  "Coin Museum (near the Panchvati area) — surprisingly interesting collection of historical Indian coins.",
                  "Evening: Pandavleni Buddhist caves (5 km from the city, auto ₹100–150). 24 caves carved into a basalt hill dating to the 2nd century BCE. Some of India's finest early Buddhist rock-cut architecture. Allow 1.5–2 hours.",
                  activeTab === "A" ? "Dinner at a local restaurant near Panchvati (₹150–250 for a full meal). Est. cost today: ₹1,500" : "Dinner at a mid-range restaurant or hotel. Est. cost today: ₹2,500–3,500",
                ]}
                cost={activeTab === "A" ? "₹1,500" : "₹2,500–3,500"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Trimbakeshwar Jyotirlinga + Sula Vineyards"
                items={[
                  "7:00am: Head to Trimbakeshwar (28 km from Nashik). Take a shared jeep from the CBS bus stand (₹60 per person, 45 min). Go early — queues at the Jyotirlinga get long after 10 AM.",
                  "Trimbakeshwar is one of the 12 Jyotirlingas — the most sacred Shiva shrines in India. This one sits at the source of the Godavari river, at the foot of Brahmagiri hill. The 18th-century temple has a remarkable black stone Jyotirlinga with three faces representing Brahma, Vishnu, and Shiva.",
                  activeTab === "A"
                    ? "Entry is free. Priests offer puja services (₹300–800). Dress code: traditional attire respectful. Men may be asked to wear a dhoti at the inner sanctum. Scarves available at the entrance."
                    : "Hire a local priest guide for a proper puja and explanation of the temple's significance (₹500–1000). The experience is much richer with context.",
                  "10:30am: Return to Nashik. Quick brunch before the wine tasting.",
                  activeTab === "A"
                    ? "12:00pm: Sula Vineyards wine tasting (book online at sulawines.com or walk in). Standard tasting ₹400–600 for 3 wines. The largest and most touristic of Nashik's wineries — the venue, the view over the vineyard, and the variety are all excellent. York Winery is a more boutique alternative (₹350–600)."
                    : "12:00pm: VIP tasting at Sula Vineyards (₹1200–2000, includes reserve wines, food pairing, and a behind-the-scenes cellar tour). Alternatively, Fratelli Wines offers a premium tasting experience (₹1500–2500). Both require advance booking.",
                  activeTab === "A"
                    ? "Lunch at Sula's Little Italy restaurant (₹600–1000 for a meal with wine) or back in the city for local food."
                    : "Lunch at Sula's Little Italy or the Soleil restaurant (₹1000–2000 for a proper sit-down meal with wine pairing).",
                  "3:30pm onwards: Return to Mumbai/Pune. Direct MSRTC buses run from Nashik CBS until late evening. Or depart by train from Nashik Road.",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹3,500–6,000"}
              />
            </div>
          </section>

          {/* ── WINE GUIDE ── */}
          <section id="wine" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🍷 Nashik Wine Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Nashik produces over 80% of India&apos;s wine. Here&apos;s how the main wineries compare and what to taste.
            </p>
            <div className="space-y-4">
              {[
                { rank: "#1", name: "Sula Vineyards", style: "Most touristic, best events", price: "₹400–1200 tasting", note: "India's largest wine producer and the most visitor-friendly. Events calendar year-round, SulaFest in February. On-site restaurant (Little Italy), boutique hotel (Beyond by Sula). Book ahead on weekends. 15 km from Nashik city.", emoji: "🍷", color: "bg-amber-50 border-amber-200" },
                { rank: "#2", name: "York Winery", style: "Boutique, wine-focused", price: "₹350–600 tasting", note: "Smaller, more serious about wine quality than events. The York Sparkling wine is one of the best Indian sparkling wines. Intimate tasting room. Less crowded than Sula. 12 km from Nashik.", emoji: "🥂", color: "bg-amber-50 border-amber-200" },
                { rank: "#3", name: "Fratelli Wines", style: "Most high-end", price: "₹1500–2500 tasting", note: "An Indo-Italian joint venture with the highest quality tier. Their Sette and JF selections are India's most awarded wines. Not as touristic — focuses on serious wine experiences. Advance booking required. Near Akluj, 150 km from Nashik (worth it for wine enthusiasts making a day trip).", emoji: "🍾", color: "bg-teal-50 border-teal-200" },
                { rank: "#4", name: "Grover Zampa", style: "Heritage brand", price: "₹500–900 tasting", note: "One of India's oldest wine brands, founded in 1988. The Nashik estate is newer than their Bangalore one but produces excellent Chenin Blanc and Cabernet Sauvignon. More corporate than Sula but reliable quality.", emoji: "🍇", color: "bg-teal-50 border-teal-200" },
              ].map((w) => (
                <div key={w.name} className={`rounded-xl border p-5 ${w.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{w.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{w.rank}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{w.name}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{w.style} · {w.price}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{w.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── WINE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="vineyard wine tasting estate india"
              fallback="https://images.unsplash.com/photo-1474722883778-792e7990302f?w=900&q=80"
              alt="Wine tasting at a Nashik vineyard estate"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Sula Vineyards tasting: ₹400 for 3 wines. The view over the vines from the tasting room is free. SulaFest tickets in February: ₹2,500–5,000. Book months ahead.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹4,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stays (1 night)", "₹600–1,000"], ["Transport", "₹400–600"], ["Food", "₹600–1,000"], ["Wine tasting", "₹400–800"], ["Entry fees", "₹100–200"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹4,000–12,000", color: "bg-teal-50 border-teal-200",
                  items: [["Stays (1 night)", "₹2,500–6,000"], ["Transport", "₹800–1,500"], ["Food + dining", "₹1,500–3,000"], ["VIP wine tasting", "₹1,200–2,500"], ["Entry fees", "₹200–500"]] },
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
              * All prices per person. Does not include travel to/from Nashik. Trimbakeshwar entry is free; priests&apos; puja services are optional (₹300–800).
            </p>
          </section>

          <AffiliateBlock destination="Nashik" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Going to Trimbakeshwar after 10 AM", desc: "The Jyotirlinga queue can be 1–2 hours by mid-morning. Get there by 7–8 AM. The atmosphere is also far more peaceful early. Shared jeeps from CBS bus stand start at 6 AM.", icon: "⏰" },
                { title: "Not booking Sula on peak weekends", desc: "Saturday and Sunday in harvest season (Jan–Feb) can have 1–2 hour waits without a booking. Book online at sulawines.com. Weekday visits are far more relaxed even without a reservation.", icon: "📱" },
                { title: "Missing the Pandavleni caves", desc: "Most short-trip visitors skip the Buddhist caves to spend more time at wineries. Don't. The 2nd-century BCE rock-cut caves are one of Maharashtra's finest historical sites — easily combined with Day 1.", icon: "🏛️" },
                { title: "Taking taxis from outside the station", desc: "Nashik Road station touts charge 3–4x the app cab rate. Use Rapido, Ola, or Uber the moment you exit. Alternatively, pre-arrange with your hotel.", icon: "🚕" },
                { title: "Drinking and then driving or riding", desc: "Wine tasting impairs driving even at low volumes. If you plan a wine tour, arrange transport from your hotel or use the winery's on-site cab service. Many visitors get caught out on the Nashik–Mumbai highway.", icon: "🍷" },
                { title: "Skipping SulaFest preparation", desc: "SulaFest in February sells out completely 2–3 months ahead. If you want to attend, book accommodation AND festival tickets simultaneously. The vineyard hotels fill first, then Nashik city hotels fill next.", icon: "🎵" },
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
                { icon: "🍷", title: "Grover Zampa vs Sula vs Fratelli", desc: "The 3 main Nashik wineries differ: Sula is the most touristic (events, restaurant, largest), York is more boutique and wine-focused, Fratelli is the most high-end. All are within 15 km of the city. The Sula SulaFest (February, electronic music + wine) sells out months ahead.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏔️", title: "Trimbakeshwar: Go Before 9 AM", desc: "The Jyotirlinga queue gets long by 10 AM. Dress code: white dhoti for men. Entry is free; priests offer puja services (₹300–800). The town of Trimbak is beautiful — allow time to walk the ghats and the market street.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚌", title: "Mumbai to Nashik: Best Options", desc: "MSRTC Shivneri bus (₹350, 3 hrs, AC, direct). Or train from CST/Dadar to Nashik Road (3–4 hrs, ₹100–300). Nashik Road station is 10 km from the city. App cabs (₹120) or shared autos (₹30) connect the station to Panchvati.", color: "bg-teal-50 border-teal-200" },
                { icon: "🍇", title: "Harvest Season: January–February", desc: "This is the best time to visit. Grapes are being harvested, wineries offer special harvest experiences, and SulaFest happens. Book accommodation 2 months ahead. Even standard tastings include freshly pressed juice during harvest.", color: "bg-teal-50 border-teal-200" },
                { icon: "🌿", title: "Combine with Shirdi", desc: "Shirdi is 90 km from Nashik (90 min by road). The Nashik–Shirdi circuit is popular: arrive Nashik, wine tasting, Trimbakeshwar, drive to Shirdi for Sai darshan. Many pilgrims do both in a single extended weekend.", color: "bg-rose-50 border-rose-200" },
                { icon: "🏨", title: "Where to Stay", desc: "Budget: Hotel Panchavati, guesthouses near Ram Kund (₹600–1000). Mid-range: Hotel Express Inn, The Gateway Hotel (₹2500–4000). Luxury: Beyond by Sula (vineyard stay, ₹6000–10000). The vineyard stay is the most atmospheric option.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and group — we&apos;ll send a personalised Nashik itinerary with winery bookings within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Nashik Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Is Nashik good for non-wine drinkers?", a: "Yes — Trimbakeshwar Jyotirlinga, Pandavleni Buddhist caves, Kalaram Temple, and Ram Kund are all excellent non-wine attractions. The city also has one of Maharashtra's best pilgrimage circuits and hosts the Simhastha Kumbh Mela every 12 years." },
                { q: "How to book Sula Vineyards wine tasting?", a: "Book online at sulawines.com or just walk in (walk-ins usually accommodated, except on peak weekends). The standard tasting (₹400–600) includes 3 wines. Premium tasting (₹800–1200) includes food pairing. Open 11 AM – 10 PM." },
                { q: "What is Nashik known for besides wine?", a: "Nashik is India's wine capital AND one of four Kumbh Mela sites (next Simhastha 2027). It hosts Trimbakeshwar Jyotirlinga, the source of the Godavari River (India's second-longest), and 2nd-century BCE Buddhist caves. It's also India's largest onion and grape export hub." },
                { q: "When does SulaFest happen?", a: "SulaFest is Nashik's annual 2-day music festival at Sula Vineyards, usually the first weekend of February. It features live music (folk, electronic, world music), wine, and food. Tickets ₹2,500–5,000/day. Book 2–3 months ahead — it sells out completely." },
                { q: "How far is Nashik from Mumbai and Pune?", a: "Mumbai: 170 km (3 hrs on NH3). Pune: 210 km (4 hrs). Both connections are by well-maintained highways. Nashik also has an airport (Mumbai–Nashik flights, 45 min)." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Nashik — Highlights"
            subtitle="The best of Nashik in photos."
            spots={[
              { name: "Nashik Landscape", query: "nashik india landscape scenic beautiful travel", desc: "The stunning landscapes of Nashik." },
              { name: "Nashik Temple", query: "nashik temple architecture heritage india", desc: "Historic temples and architecture in Nashik." },
              { name: "Nashik Street Scene", query: "nashik street market local culture india", desc: "Local life and culture in Nashik." },
              { name: "Nashik Nature", query: "nashik nature hills forest river india", desc: "Natural beauty around Nashik." },
              { name: "Nashik Sunset", query: "nashik sunset golden hour india travel", desc: "Nashik at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Maharashtra Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Shirdi — Sai Baba Temple Guide", href: "/blog/shirdi-2-days" },
                { label: "Pune — 3 Days in the Oxford of the East", href: "/blog/pune-3-days" },
                { label: "Mumbai — 4 Days Complete Guide", href: "/blog/mumbai-4-days" },
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

          <CombineWith currentSlug="nashik-2-days" />
          <RelatedGuides currentSlug="nashik-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
