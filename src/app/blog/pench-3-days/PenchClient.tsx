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

const PENCH_TOC = [
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Pench 3-Day Safari Guide&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Pench National Park in 3 Days guide&url=${pageUrl}` },
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
export default function PenchClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "₹7k–10k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹12k–25k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={PENCH_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Pench" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="tiger national park jungle india wildlife safari"
            fallback="https://images.unsplash.com/photo-1516426122078-a8e4ee10e986?w=1600&q=85"
            alt="Tiger in Pench National Park — the real Jungle Book setting"
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
              <span className="text-white/70">Pench 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Wildlife Safari
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Pench in 3 Days: The Real
                <em className="italic text-gold-light"> Jungle Book Tiger Reserve</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Kipling&apos;s Seoni. 80+ tigers. India&apos;s best dhole (wild dog) sightings. And 30–40% cheaper than Ranthambore for the same quality safari. The wildlife reserve India&apos;s travellers keep overlooking.
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
              <span>🇮🇳 Madhya Pradesh</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹7,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              A dhole pack hunted a sambar deer 20 metres from our jeep. The naturalist had been tracking them for three hours. That morning safari cost me ₹1,800. The same quality experience in Ranthambore would have been ₹4,500 minimum.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Pench is the most underrated tiger reserve in India. It&apos;s smaller and cheaper than Kanha, easier to reach than Bandhavgarh, and has the Jungle Book connection that no other reserve can claim. The Seoni District forests are where Kipling set the story — the Pench River is Mowgli&apos;s river, Shere Khan&apos;s territory is real geography. Add 80+ tigers, the best dhole population in India, and luxury tented camps at mid-range prices and you have a compelling case.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌿" label="Best Season" value="Oct–Apr" />
            <StatCard icon="🐯" label="Tiger Population" value="80+" />
            <StatCard icon="🗺️" label="Area" value="758 km²" />
            <StatCard icon="⭐" label="Rating" value="4.6★" />
          </div>

          {/* ── PICK YOUR PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Pick Your Plan</h2>
            <p className="text-sm text-muted font-light mb-6">Same 3-day safari structure, two comfort levels. Pench gives significantly better value than comparable reserves.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stay</td><td className="py-2.5 px-4">Forest rest house / budget lodge</td><td className="py-2.5 px-4">Pench Jungle Camp / Tathastu tented camp</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Safaris</td><td className="py-2.5 px-4">Shared jeep (₹1,800–2,500/person)</td><td className="py-2.5 px-4">Private jeep with naturalist</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Zone</td><td className="py-2.5 px-4">Turia Gate (shared jeep)</td><td className="py-2.5 px-4">Turia + Karmajhiri (private)</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">₹7,000–10,000</td><td className="py-2.5 px-4 font-medium text-teal">₹12,000–25,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Reach Pench via Nagpur → evening safari. Day 2: Morning + afternoon safaris. Day 3: Final morning safari → depart.
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
                title="Arrive via Nagpur → Evening Safari"
                items={[
                  "Nagpur is the gateway to Pench: 75 km from Turia Gate (2 hrs). Nagpur has both a major airport and a railway junction with direct trains from Mumbai, Delhi, Hyderabad, and Chennai. Transfer by private cab (₹2000–2500) or shared taxi to Turia Gate area.",
                  activeTab === "A"
                    ? "Check in to a budget lodge or forest rest house near Turia Gate (₹800–1500/night). Pench Jungle Camp (budget rooms) and several guesthouses cluster near the gate. Book ahead — capacity is limited."
                    : "Check in to Tathastu or Pench Jungle Camp (luxury tented camp, ₹5000–8000/night). Tented camps have sit-out areas, naturalist briefings each evening, and included meals. The naturalist conversation over dinner is worth the premium alone.",
                  "Evening safari (3–6 PM, Turia Zone): The northern MP side of Pench, with the highest tiger frequency and the Jungle Book association. Shared jeeps hold 6 people and cost ₹1800–2500 per person including entry, vehicle, and guide. Book at mpecotourism.in.",
                  "Turia Zone is the most popular because the Pench River corridor runs through it — tigers are most visible near water, especially in the dry season. Your naturalist will brief you on active areas before the safari.",
                  activeTab === "A"
                    ? "Dinner at the lodge: simple but adequate. Many budget lodges are run by tribal families — the home-cooked food is often a highlight."
                    : "Dinner at camp with naturalist debrief: review sightings, plan the morning route, discuss dhole pack activity and territory. This is where the premium experience truly earns its cost.",
                ]}
                cost={activeTab === "A" ? "₹3,500" : "₹7,000–9,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Morning + Afternoon Safaris"
                items={[
                  "5:30 AM morning safari: The best time for tiger sightings. Leave before dawn. Morning safaris in October–March are cool (8–16°C) — bring a warm layer. The forest wakes up: sambar alarm calls signal a tiger's presence. Your naturalist tracks pugmarks and listens for alarm calls.",
                  activeTab === "A"
                    ? "Turia or Karmajhiri zone for the morning safari. If Turia is fully booked, Karmajhiri (southern zone) is an excellent alternative — quieter, good leopard sightings, similar tiger activity."
                    : "Private jeep allows deeper tracking. The naturalist can stop anywhere, follow a specific tiger's territory, and spend time at a water body rather than the standard route. The difference in quality over shared jeeps is significant.",
                  "Return to lodge for breakfast. Rest from 10 AM–2 PM — this is non-negotiable. The jungle midday is quiet and the heat (Nov–Mar: 25–32°C) makes mid-day uncomfortable.",
                  "Afternoon: Pench Mowgli Festival Area and interpretation centre — a small but interesting exhibit on the Jungle Book connection, the Seoni ecosystem, and the Gond tribal culture that may have inspired Kipling.",
                  "3 PM afternoon safari: Different light, different animal activity. Gaur (Indian bison) are often seen near the Pench River late afternoon. Wild boar groups are active. Sloth bear sightings happen at dusk.",
                  "Evening: Debrief. Plan Day 3 morning route with your naturalist based on tiger activity reports from other vehicles.",
                ]}
                cost={activeTab === "A" ? "₹3,500" : "₹7,000–9,000"}
              />

              {/* ── Day 3 ── */}
              <DayCard
                day="Day 3"
                title="Final Morning Safari → Depart"
                items={[
                  "Final 5:30 AM morning safari: The best possible farewell. Three safaris over 2.5 days give you strong odds of a tiger sighting — statistically, Pench has a 65–70% tiger sighting rate over a 3-day visit in peak season.",
                  "Check out by 10 AM. Transfer back to Nagpur (2 hrs) for onward flights or trains.",
                  activeTab === "A"
                    ? "Nagpur has direct flights to Delhi (1.5 hrs), Mumbai (1 hr), and Hyderabad (1 hr). Return taxi to Nagpur ₹1500–2000."
                    : "Private transfer to Nagpur. If time permits, lunch at Nagpur's famous orange-inspired cuisine (the city grows 90% of India's oranges) before your flight.",
                ]}
                cost={activeTab === "A" ? "₹2,500" : "₹4,000–6,000"}
              />
            </div>
          </section>

          {/* ── SAFARI GUIDE ── */}
          <section id="safari" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🐯 Pench Safari Zone Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Pench has three main entry zones across two states. Knowing which to book changes your experience entirely.
            </p>
            <div className="space-y-4">
              {[
                { zone: "Turia Gate (MP)", rating: "Best for Tigers", note: "Northern Madhya Pradesh side. Most popular zone, highest vehicle concentration but also highest tiger frequency. Directly associated with the Jungle Book territory. Book at mpecotourism.in — fills quickly in Nov–Feb.", emoji: "🐯", color: "bg-amber-50 border-amber-200" },
                { zone: "Karmajhiri Gate (MP)", rating: "Best for Leopards", note: "Quieter alternative to Turia. Similar terrain, fewer vehicles, excellent leopard sightings. Good backup when Turia is booked. Also accessible on mpecotourism.in. Naturalists who know Karmajhiri well can outperform Turia on tiger sightings.", emoji: "🐆", color: "bg-amber-50 border-amber-200" },
                { zone: "Navegaon Gate (Maharashtra)", rating: "Most Underrated", note: "Maharashtra side of Pench — completely separate booking system (through Maharashtra Forest Dept). Far fewer tourists. Similar wildlife diversity. Often booked by photographers who want fewer vehicles per zone.", emoji: "🌿", color: "bg-teal-50 border-teal-200" },
                { zone: "Shared vs Private Jeep", rating: "The Core Decision", note: "Shared jeep: 6 people, ₹1800–2500 per person, fixed route, stops limited by group consensus. Private jeep: ₹6000–9000 per safari, your route, your pace, your naturalist's full attention. For serious wildlife photography or second visits, private is worth the cost.", emoji: "🚙", color: "bg-teal-50 border-teal-200" },
              ].map((s) => (
                <div key={s.zone} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{s.emoji}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.zone}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5 font-medium">{s.rating}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{s.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SAFARI IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="jeep safari wildlife jungle India national park"
              fallback="https://images.unsplash.com/photo-1516426122078-a8e4ee10e986?w=900&q=80"
              alt="Jeep safari tracking wildlife in Pench National Park"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Morning safaris start at 5:30 AM. The golden hour light from 6–8 AM is the best wildlife photography window in any Indian reserve.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "₹7,000–10,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stay (2 nights, budget lodge)", "₹1,600–3,000"], ["Safaris (3 x shared jeep)", "₹5,400–7,500"], ["Meals (2 days)", "₹600–1,000"], ["Nagpur transfers", "₹2,000–2,500"], ["Entry/guide fees", "Included in safari"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹12,000–25,000", color: "bg-teal-50 border-teal-200",
                  items: [["Stay (2 nights, tented camp)", "₹10,000–16,000"], ["Safaris (3 x private jeep)", "₹18,000–27,000"], ["Meals (included at camp)", "₹0"], ["Nagpur private transfer", "₹4,000–5,000"], ["Naturalist tips", "₹500–1,000"]] },
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
              * All prices per person. Does not include travel to/from Nagpur. Comfortable plan totals can be split with a group — private jeep cost divided by 6 brings it close to the budget option per person.
            </p>
          </section>

          <AffiliateBlock destination="Pench" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Not booking safaris 60 days in advance", desc: "Peak season (Nov–Feb) Turia Zone slots fill up fast. mpecotourism.in opens bookings 60 days ahead. Set a calendar reminder. If Turia is full, book Karmajhiri — it's excellent.", icon: "📅" },
                { title: "Visiting during the closed season", desc: "Pench closes mid-June to September for monsoon and tiger breeding season. Plan for October–April only. October is particularly beautiful — lush post-monsoon green with active wildlife.", icon: "🚫" },
                { title: "Skipping the morning safari", desc: "Afternoon safaris have 50% fewer sightings on average than morning safaris in Pench. The 5:30 AM start is early but the golden hour wildlife activity is worth every minute of lost sleep.", icon: "⏰" },
                { title: "Focusing only on tigers", desc: "Pench has India's best dhole (wild dog) population. Gaur sightings are almost guaranteed. Sloth bears, leopards, Indian wolves, and 325+ bird species make Pench exceptional even on tiger-free days. Tell your naturalist specifically what you want to track.", icon: "🐾" },
                { title: "Ignoring the Maharashtra side", desc: "Navegaon Gate (Maharashtra) is consistently overlooked. Fewer vehicles per zone, same wildlife, different booking system. If Turia is sold out, Navegaon is your alternative — not just second best.", icon: "🗺️" },
                { title: "Not tipping your naturalist", desc: "Good naturalists make or break a safari. ₹200–500 per safari is appropriate. They share intelligence between vehicles — a generous tipping culture from your group encourages more information sharing.", icon: "💝" },
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
                { icon: "📚", title: "The Actual Jungle Book Connection", desc: "Kipling spent time in British India, and the Pench region (then Seoni District) is widely identified as the inspiration for The Jungle Book's setting. Characters like Shere Khan and Akela have real-world geographical echoes. The Seoni wolf pack still inhabits Pench.", color: "bg-amber-50 border-amber-200" },
                { icon: "🐺", title: "Pench for Wild Dogs (Dholes)", desc: "Pench has one of India's most stable dhole (Indian wild dog) populations. Pack hunts are extraordinarily dramatic. Tell your naturalist you specifically want to track dhole activity — morning safaris near the Pench River are best.", color: "bg-amber-50 border-amber-200" },
                { icon: "💰", title: "Pench is Better Value than Ranthambore", desc: "Ranthambore safari: ₹3,000–5,000+ per person. Pench: ₹1,800–2,500 per person for similar quality. The jeep fees, guides, and accommodation are all 30–40% cheaper. For the same budget, you can do more safaris.", color: "bg-teal-50 border-teal-200" },
                { icon: "🗺️", title: "Turia vs Karmajhiri vs Maharashtra Side", desc: "Turia Gate (MP) is the most popular. Karmajhiri is quieter with good leopard sightings. The Maharashtra side (Navegaon) is often overlooked and has fewer vehicles per zone. If Turia is booked, Karmajhiri is excellent.", color: "bg-teal-50 border-teal-200" },
                { icon: "🌡️", title: "Best Months for Pench", desc: "October–November (lush, post-monsoon green, wildlife active). December–February (cool mornings, tigers at water, excellent photography). March–April (dry, easier sightings). Closed July–September.", color: "bg-rose-50 border-rose-200" },
                { icon: "🏕️", title: "Where to Stay", desc: "Budget: Forest rest houses (₹800–1500). Mid-range: Pench Jungle Camp, Pench Tree Lodge (₹3000–6000). Luxury: Tathastu, Kiplings Court (₹8000–15000). Stay near Turia Gate for easiest safari access.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and group — we&apos;ll book your safaris, lodge, and Nagpur transfers within 24 hours. Free planning service.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Pench Safari →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How does Pench compare to Kanha and Bandhavgarh?", a: "All three are MP tiger reserves. Bandhavgarh: highest tiger density, smaller area. Kanha: largest meadows, barasingha. Pench: most accessible from Nagpur, best wild dog sightings, strongest Jungle Book connection. For a first MP wildlife trip, the order is usually Bandhavgarh → Kanha → Pench." },
                { q: "How to reach Pench National Park?", a: "Nearest airport/railway: Nagpur (75 km, 2 hrs). Transfer by private cab (₹2000–2500) or shared taxi. Pench has two entry gates: Turia (MP) and Navegaon (Maharashtra). Turia has more accommodation options." },
                { q: "Is there a real Mowgli village near Pench?", a: "Seoni village (the town in Kipling's book) is near Pench. While there's no 'official' Mowgli village, the Seoni forest was Kipling's named inspiration. Some lodges offer cultural visits to surrounding Gond tribal villages whose oral traditions may have inspired the wolf-pack narrative." },
                { q: "What other wildlife can I see besides tigers in Pench?", a: "Gaur (Indian bison — massive), sambar deer, spotted deer, nilgai, wild boar, sloth bear, Indian wolf, dhole (wild dogs), leopard, Indian python, monitor lizard, and 325+ bird species. The diverse birdlife makes Pench exceptional even on tiger-free safaris." },
                { q: "When should I book Pench safari?", a: "Book at mpecotourism.in 60 days ahead for peak season (Nov–Feb). October and March–April are easier to book. Turia Zone is most competitive — book Karmajhiri as backup." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Pench — Highlights"
            subtitle="The best of Pench in photos."
            spots={[
              { name: "Pench Landscape", query: "pench india landscape scenic beautiful travel", desc: "The stunning landscapes of Pench." },
              { name: "Pench Temple", query: "pench temple architecture heritage india", desc: "Historic temples and architecture in Pench." },
              { name: "Pench Street Scene", query: "pench street market local culture india", desc: "Local life and culture in Pench." },
              { name: "Pench Nature", query: "pench nature hills forest river india", desc: "Natural beauty around Pench." },
              { name: "Pench Sunset", query: "pench sunset golden hour india travel", desc: "Pench at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Explore More Indian Wildlife Reserves</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kanha National Park — 3-Day Guide", href: "/blog/kanha-national-park-3-days" },
                { label: "Bandhavgarh — 3-Day Tiger Safari", href: "/blog/bandhavgarh-3-days" },
                { label: "Tadoba — Maharashtra's Tiger Reserve", href: "/blog/tadoba-3-days" },
                { label: "Browse All Wildlife Safaris", href: "/#packages" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="pench-3-days" />
          <RelatedGuides currentSlug="pench-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
