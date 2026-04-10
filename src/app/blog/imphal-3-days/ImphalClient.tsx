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

const IMPHAL_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "culture",   emoji: "🎭", label: "Culture & Highlights" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Imphal 3-Day Guide&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Imphal Manipur in 3 Days guide&url=${pageUrl}` },
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
export default function ImphalClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹7k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹7k–18k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={IMPHAL_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Imphal" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="Imphal Manipur Loktak lake phumdis floating islands"
            fallback="https://images.unsplash.com/photo-1518639192441-5b9e9eea7faf?w=1600&q=85"
            alt="Loktak Lake Manipur floating phumdis islands near Imphal"
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
              <span className="text-white/70">Imphal 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Culture & Heritage
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Imphal in 3 Days:
                <em className="italic text-gold-light"> Kangla Fort, Loktak Lake &amp; Manipur&apos;s Cultural Heart</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                A 2,000-year-old fort returned to its people in 2004. A lake where fishermen live on floating islands. A market run entirely by women since the 16th century. A deer species that was believed extinct until 1953. Imphal is India&apos;s most underrated cultural destination.
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
              <span>🇮🇳 Manipur</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹4,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              I stood in Ima Keithel as a woman vendor carefully wrapped Manipuri handloom silk in old newspaper for me. Around us: 3,000 women, all trading, all managing their own stalls, all part of a market institution that has existed in some form since the 16th century. There is nothing else like it in the world.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Northeast India is one of the most culturally distinct regions on earth — eight states, dozens of indigenous peoples, languages that share nothing with the rest of India, and histories that most Indian textbooks barely mention. Imphal is the most accessible entry point into this world: a direct 2-hour flight from Delhi, a city-sized fort with 2,000 years of history, a lake with floating islands that people live on, and the Ima Keithel — the only market in the world run entirely by women. Three days here is an education.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌤️" label="Best Season" value="Oct–Mar" />
            <StatCard icon="⛰️" label="Altitude" value="790 m" />
            <StatCard icon="🗺️" label="Distance from Guwahati" value="470 km" />
            <StatCard icon="⭐" label="Rating" value="4.5★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Imphal at 790m has a mild climate year-round. The main consideration is the monsoon and festival calendar.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Mar", emoji: "✅", title: "Best Season", desc: "Cool and dry (12–22°C). Loktak Lake at its most scenic. Sangai deer most visible at Keibul Lamjao (November–February). The Sangai Festival (November) is Manipur's biggest cultural showcase.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Apr–May", emoji: "🌸", title: "Festival Season", desc: "Lai Haraoba festival (April–May) features outdoor Manipuri dance performances at temples around the valley. The Shirui Lily Festival (April, Ukhrul) is a distinct experience. Warm (22–28°C). Can be crowded during festivals.", color: "bg-amber-50 border-amber-200" },
                { season: "Jun–Sep", emoji: "🌧️", title: "Monsoon", desc: "Heavy rainfall (Imphal averages 1,467mm annually, mostly June–September). Loktak Lake expands dramatically — the phumdis are impressive but access can be limited. The city remains functional but outdoor sightseeing is challenging.", color: "bg-blue-50 border-blue-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 3-day circuit, two comfort levels. Imphal is very affordable — even the comfortable plan is lower cost than equivalent cities.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Guesthouse (₹700–1200)</td><td className="py-2.5 px-4">Hotel with Kangla view (₹2500–4000)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Auto rickshaws + shared vehicles</td><td className="py-2.5 px-4">Private car for day trips</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Wildlife</td><td className="py-2.5 px-4">Loktak lake view from Sendra Island</td><td className="py-2.5 px-4">Forest dept boat for sangai deer</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹7,000</td><td className="py-2.5 px-4 font-medium text-teal">₹7,000–18,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Kangla Fort → Govindaji Temple → Ima Keithel. Day 2: Loktak Lake → Keibul Lamjao → Manipuri dance. Day 3: War Cemetery → INA Moirang → Khongjom Memorial.
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
                title="Kangla Fort, Govindaji Temple & Ima Keithel"
                items={[
                  "Fly to Imphal Airport (IMF) — direct from Delhi (2 hrs, IndiGo/Air India), Kolkata (1 hr), Guwahati (45 min), Bangalore. Do NOT drive from Guwahati — 12+ hours on mountain roads.",
                  "ILP (Inner Line Permit): Non-Manipur Indian citizens may need an ILP — verify at manipurims.gov.in before travelling. Obtainable online or at entry points. Foreigners need additional RAP. Rules change; check current status.",
                  activeTab === "A"
                    ? "Check in to a guesthouse near the Kangla area (₹700–1200). The old city around the fort has several clean budget options."
                    : "Check in to a hotel with Kangla or city views (₹2500–4000). The Imphal area has mid-range hotels with better amenities than most would expect from a smaller northeastern city.",
                  "Kangla Fort: the sacred royal palace and administrative centre of Manipur for 2,000 years. The River Imphal flows through the grounds. The Kangla Sha — the mythological serpent-dragon guardians — stand at the main entrance: massive stone figures unique to Meitei cosmology. The Kangjeibung (sacred grove) inside is the spiritual heart.",
                  "The fort's layered history: built and expanded over 2,000 years, seized by the British in 1891 after the Anglo-Manipuri War (a battle that killed 5 British officers and resulted in the hanging of 3 Meitei princes), used as an Assam Rifles base for 113 years, and finally returned to Manipur in 2004 — one of the most significant cultural restitutions in modern Indian history.",
                  "Govindaji Temple (5 min from Kangla): the royal Vaishnavite palace temple of the Manipur kings. The Raas Lila dance tradition began here. The architecture blends Manipuri and Vaishnavite styles. Still an active royal temple.",
                  "Ima Keithel ('Mother's Market'): the world's only market run entirely by women (3,000–5,000 women vendors). Has existed since the 16th century in some form. Women sell everything: produce, handloom silk (phanek, mekhla, moirang phi), bamboo shoot pickle, Naga chili, pottery, household goods. Walking through it is one of the most vivid market experiences in India.",
                ]}
                cost={activeTab === "A" ? "₹2,500" : "₹5,000–6,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Loktak Lake, Keibul Lamjao & Manipuri Dance"
                items={[
                  "Drive to Loktak Lake (53 km south, 1 hr). The largest freshwater lake in Northeast India (287 km²). Famous for its phumdis — floating islands of compressed soil, vegetation, and organic matter. These islands are 0.5–2.5m thick and so stable that fishermen build permanent huts on them and live year-round on the water.",
                  "Keibul Lamjao National Park (within Loktak): the world's only floating national park. The park exists entirely on phumdis. Home to the sangai (brow-antlered deer) — Manipur's state animal and one of the rarest deer on earth. The sangai was believed extinct until rediscovered in 1953. Current population: approximately 260 animals.",
                  activeTab === "A"
                    ? "View from Sendra Island (government resort island on Loktak, accessible by boat ₹100–200): the lake view from the observation point gives the best sense of the phumdis' scale. Sangai are visible from the island bank in the morning."
                    : "Forest department boat tour for closer sangai viewing (book through the National Park office or your hotel — ₹500–800). Morning is best: 6–9 AM. The deer walk on the floating vegetation — an extraordinary image.",
                  "Afternoon: Return to Imphal. Manipuri classical dance performance at JN Dance Academy or Manipuri Nartanalaya (book 2 days ahead — check availability through your hotel). Manipuri (or Meitei Raas Lila) is one of India's 8 classical dance forms. Characterised by fluid circular movements and the Raas Lila episodes from Vaishnavite tradition.",
                  "Dinner: Manipuri cuisine — eromba (fermented fish + boiled vegetables, the central Meitei dish), chamthong/kangsoi (clear vegetable stew), singju (raw vegetable salad with fermented fish dressing). Unlike mainland India: almost no oil, no heavy spices. Ask your hotel for a local restaurant recommendation — tourist restaurants rarely serve authentic Manipuri food.",
                ]}
                cost={activeTab === "A" ? "₹3,000" : "₹6,000–8,000"}
              />

              {/* ── Day 3 ── */}
              <DayCard
                day="Day 3"
                title="War Cemetery, Moirang & Khongjom Memorial"
                items={[
                  "Imphal War Cemetery (WWII): the Imphal-Kohima campaign of 1944 was a turning point in the Pacific War — the Japanese advance into India was stopped here. The cemetery has 1,590 graves of British and Commonwealth soldiers. Beautifully maintained by the Commonwealth War Graves Commission. One of the most sobering war memorials in Asia.",
                  "Manipur State Museum: the collections covering Manipuri history, royal artefacts, textiles, and the Anglo-Manipuri War period. Underrated and worth 1.5 hours.",
                  "Moirang (45 km south of Imphal): the site of the INA (Indian National Army) flag hoisting. In 1944, Subhas Chandra Bose's INA — fighting alongside Japanese forces advancing from Burma — hoisted the Indian tricolor at Moirang. This was the first time the Indian national flag was raised on Indian soil (3 years before official independence). The INA Museum at Moirang tells the story with photographs, personal documents, and surviving weapons.",
                  "Khongjom War Memorial (35 km east): site of the final stand of the Manipuri forces in the 1891 Anglo-Manipuri War — the battle where Manipuri independence ended. The memorial overlooks the battlefield. A sobering reminder that Manipur's experience of British India was distinct and violent.",
                  activeTab === "B"
                    ? "Evening: shopping at Ima Keithel for Manipuri handloom (return visit with more context after 3 days in the culture). Buy phanek (women's wraparound) or moirang phi (the traditional checked silk) — some of the finest Indian handloom available at source prices."
                    : "Evening: return to Imphal, final Manipuri thali dinner before departure.",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹4,000–6,000"}
              />
            </div>
          </section>

          {/* ── CULTURE GUIDE ── */}
          <section id="culture" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🎭 Culture & Highlights Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Manipur has one of India&apos;s most distinctive living cultures. Here&apos;s what to know and what to look for.
            </p>
            <div className="space-y-4">
              {[
                { item: "Manipuri Classical Dance", context: "One of India's 8 classical dance forms", note: "Characterised by fluid, circular movements and Raas Lila episodes. Performances at JN Dance Academy and Manipuri Nartanalaya (book 2 days ahead). The Lai Haraoba festival (April–May) features outdoor temple performances.", emoji: "💃", color: "bg-teal-50 border-teal-200" },
                { item: "Kangla Fort", context: "2,000 years of Meitei history", note: "The spiritual and political centre of Manipur — for 2,000 years, the king ruled from here. Returned to Manipur from Indian Army control in 2004. The Kangla Sha guardians and the Kangjeibung sacred grove are essential. Allow 2 hours.", emoji: "🏰", color: "bg-teal-50 border-teal-200" },
                { item: "Ima Keithel (Mother's Market)", context: "World's only all-women market", note: "3,000–5,000 women vendors. Weekday mornings are least crowded. Buy: Manipuri handloom silk, singjao (pickled bamboo shoot), Naga chili, traditional pottery. Prices are fair; direct bargaining is accepted.", emoji: "🛍️", color: "bg-amber-50 border-amber-200" },
                { item: "Loktak Lake Phumdis", context: "World's only floating national park", note: "The phumdis (floating biomass islands) of Loktak are unique to this lake on earth. The sangai deer walking on them is a biological adaptation found nowhere else. Keibul Lamjao is the only national park in the world that floats.", emoji: "🌊", color: "bg-amber-50 border-amber-200" },
                { item: "Sangai Deer", context: "~260 remaining, world's only floating deer", note: "The brow-antlered deer lives exclusively on Keibul Lamjao's phumdis. Declared extinct in the 1950s, rediscovered 1953. Best viewing November–February from Sendra Island or forest department boats.", emoji: "🦌", color: "bg-rose-50 border-rose-200" },
                { item: "Manipuri Cuisine", context: "Oil-free, fermented, intensely flavoured", note: "Unlike mainland India: almost no cooking oil (boiled/fermented/raw). Eromba (fermented fish + vegetables), chamthong (clear stew), singju (raw salad), iromba (smoked fish). Find it at local restaurants — not tourist hotels.", emoji: "🍲", color: "bg-rose-50 border-rose-200" },
              ].map((c) => (
                <div key={c.item} className={`rounded-xl border p-5 ${c.color}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{c.emoji}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{c.item}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{c.context}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{c.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── LOKTAK IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="Loktak Lake Manipur floating phumdis fishermen huts"
              fallback="https://images.unsplash.com/photo-1518639192441-5b9e9eea7faf?w=900&q=80"
              alt="Loktak Lake Manipur floating phumdis with fishermen huts"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Loktak Lake: the world&apos;s only floating national park. Fishermen build permanent huts on phumdis (floating biomass islands) and live here year-round. The sangai deer — believed extinct until 1953 — walks on the same floating vegetation.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹7,000", color: "bg-amber-50 border-amber-200",
                  items: [["Guesthouse (2–3 nights)", "₹700–1,200/night"], ["Local transport (auto/shared)", "₹500–800"], ["Food (3 days)", "₹900–1,200"], ["Kangla Fort entry", "₹20–50"], ["Loktak Lake boat + Moirang", "₹800–1,200"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹7,000–18,000", color: "bg-teal-50 border-teal-200",
                  items: [["Hotel with city view (2–3 nights)", "₹2,500–4,000/night"], ["Private car for day trips", "₹1,200–2,000"], ["Restaurants + dance performance", "₹1,500–3,000"], ["Forest dept boat (sangai)", "₹500–800"], ["Handloom shopping at Ima Keithel", "₹1,000–5,000"]] },
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
              * All prices per person. Does not include flights to Imphal. Imphal is significantly cheaper than comparable Indian cities — accommodation and food costs are low. The ILP (if required) has a small processing fee.
            </p>
          </section>

          <AffiliateBlock destination="Imphal" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Not checking the ILP requirement before travel", desc: "Inner Line Permit rules for Manipur change periodically. Check manipurims.gov.in before booking. Missing the ILP can mean being turned back at the airport. It's easily obtainable online but requires advance planning.", icon: "📜" },
                { title: "Skipping Ima Keithel because it looks like an ordinary market", desc: "It is not an ordinary market. 3,000–5,000 women vendors. Centuries of continuous operation. Unique Meitei social institution. The handloom silk alone — at source prices — justifies the visit. Go on a weekday morning.", icon: "🛍️" },
                { title: "Driving from Guwahati", desc: "Guwahati to Imphal is 470 km on mountain roads — 12+ hours. The flight is 45 minutes. There is no scenario where the drive makes sense for a 3-day trip.", icon: "✈️" },
                { title: "Missing the Moirang INA museum", desc: "Most itineraries stop at Kangla and Loktak. Moirang — 45 km south — is where the Indian tricolor was first raised on Indian soil, in 1944. The INA museum's photographs and artefacts provide essential context for both Manipur's and India's modern history.", icon: "🏛️" },
                { title: "Trying to find authentic Manipuri food at tourist hotels", desc: "Tourist hotels in Imphal serve generic Indian food. Manipuri cuisine (oil-free, fermented, raw — eromba, singju, chamthong) is served at local restaurants and dhabas. Ask your hotel staff where they actually eat. The food is unlike anything else in India.", icon: "🍲" },
                { title: "Going without checking current advisories", desc: "Manipur has had periodic unrest in hill districts — keep this separate from the Imphal Valley, which is where tourists visit. Check advisories within a week of travel. The Ministry of Home Affairs and your state government's travel advisory are the most reliable sources.", icon: "📋" },
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
                { icon: "📜", title: "ILP for Non-Manipuris", desc: "Non-Manipur Indian citizens may need an Inner Line Permit (rules change; verify at manipurims.gov.in before traveling). Foreigners need additional RAP. ILP is obtainable online or at entry points.", color: "bg-amber-50 border-amber-200" },
                { icon: "🛍️", title: "Ima Keithel: What to Buy", desc: "Manipuri handloom silk (phanek, mekhla, moirang phi), pickled bamboo shoot (singjao), Naga chili products, traditional pottery. The women accept direct bargaining — prices are fair. Go on a weekday morning when it's not crowded.", color: "bg-amber-50 border-amber-200" },
                { icon: "🦌", title: "Sangai Deer: World's Only Floating Deer", desc: "The sangai (brow-antlered deer) lives exclusively on the phumdis of Keibul Lamjao, walking on floating vegetation. It was believed extinct until 1953. Current population: approximately 260 animals. Best viewing: November–February from Sendra Island or forest department boats.", color: "bg-teal-50 border-teal-200" },
                { icon: "🎭", title: "Manipuri Classical Dance", desc: "Manipuri (Meitei Raas Lila) is one of India's 8 classical dance forms. Performances at JN Dance Academy and Manipuri Nartanalaya. Book 2 days ahead. The Lai Haraoba festival (May) features outdoor performances.", color: "bg-teal-50 border-teal-200" },
                { icon: "✈️", title: "Flying into Imphal", desc: "Imphal airport (IMF) has direct flights from Delhi (2 hrs), Kolkata (1 hr), Guwahati (45 min), and Bangalore. IndiGo and Air India operate routes. Driving from Guwahati takes 12+ hours on mountain roads — always fly.", color: "bg-rose-50 border-rose-200" },
                { icon: "🌶️", title: "Manipuri Cuisine", desc: "Unlike mainland India, Manipuri food uses almost no oil (boiled/fermented). Must-try: eromba (fermented fish + vegetables), chamthong (vegetable stew), singju (raw salad with fermented fish), iromba with smoked fish. Unique and intensely flavored.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and group — we&apos;ll send a personalised Imphal itinerary including ILP guidance and dance performance logistics within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Imphal Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Is Manipur safe for tourists in 2026?", a: "The Imphal Valley (where tourists visit) is generally safe. Check current advisories before travel — Manipur has had periodic unrest in hill districts. The Imphal area itself (Kangla Fort, Loktak Lake, Ima Keithel, airport) has no active restrictions for tourists. Stay informed and register with your hotel." },
                { q: "What is Kangla Fort's historical significance?", a: "Kangla was the seat of the Manipur kingdom for 2,000 years. The British seized it in 1891 after the Anglo-Manipuri War and turned it into a military base. It was returned to Manipur only in 2004 — a significant moment for Meitei cultural identity. The fort contains the Kangjeibung (sacred grove), ancient temples, and the Kangla Sha (mythological serpent-dragon guardians)." },
                { q: "What makes Loktak Lake unique?", a: "Loktak is the largest freshwater lake in Northeast India (287 km²) and the only lake in the world with floating islands of biomass (phumdis). These phumdis (up to 2.5m thick) are so stable that fishermen build huts and live on them year-round. The Keibul Lamjao National Park on the lake is the world's only floating national park." },
                { q: "What is the story of the INA flag at Moirang?", a: "In 1944, Subhas Chandra Bose's Indian National Army (INA), advancing from Burma with Japanese support, hoisted the Indian tricolor at Moirang (45 km from Imphal) — the first time the Indian flag was raised on Indian soil (before independence). The INA Museum at Moirang tells this story with artifacts and photographs." },
                { q: "How many days do I need in Manipur/Imphal?", a: "3 days covers Imphal city (Kangla, Ima Keithel, museums), Loktak Lake + Keibul Lamjao, and a Moirang day trip. Add 2 more days for Dzükou Valley (shared with Kohima), Ukhrul, or Shirui Lily Festival (April) if interested in deeper exploration." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Imphal — Highlights"
            subtitle="The best of Imphal in photos."
            spots={[
              { name: "Imphal Landscape", query: "imphal india landscape scenic beautiful travel", desc: "The stunning landscapes of Imphal." },
              { name: "Imphal Temple", query: "imphal temple architecture heritage india", desc: "Historic temples and architecture in Imphal." },
              { name: "Imphal Street Scene", query: "imphal street market local culture india", desc: "Local life and culture in Imphal." },
              { name: "Imphal Nature", query: "imphal nature hills forest river india", desc: "Natural beauty around Imphal." },
              { name: "Imphal Sunset", query: "imphal sunset golden hour india travel", desc: "Imphal at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Continue Exploring Northeast India</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kohima — WWII & Naga Culture (147 km)", href: "/blog/kohima-3-days" },
                { label: "Guwahati — Northeast Gateway", href: "/blog/guwahati-2-days" },
                { label: "Shillong — Scotland of the East", href: "/blog/shillong-3-days" },
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

          <CombineWith currentSlug="imphal-3-days" />
          <RelatedGuides currentSlug="imphal-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
