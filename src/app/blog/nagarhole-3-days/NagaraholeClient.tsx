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

const NAGARHOLE_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "safari",    emoji: "🐘", label: "Safari Guide" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Nagarhole 3-Day Safari Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Nagarhole and Kabini in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function NagaraholeClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "₹8k–12k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹15k–35k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={NAGARHOLE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Nagarhole" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="elephants kabini reservoir karnataka wildlife safari"
            fallback="https://images.unsplash.com/photo-1516426122078-a8e4ee10e986?w=1600&q=85"
            alt="Elephant herd at Kabini reservoir Nagarhole National Park Karnataka"
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
              <span className="text-white/70">Nagarhole 3 Days</span>
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
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Nagarhole in 3 Days: Kabini Backwaters,
                <em className="italic text-gold-light"> Elephants &amp; Karnataka&apos;s Best Safari</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Herds of 80 elephants crossing a reservoir at dusk. Tigers in the core forest. Leopards in the trees. Nagarhole and Kabini is South India&apos;s greatest wildlife experience — and most people don&apos;t know it exists.
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
              <span>🇮🇳 Karnataka</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹8,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              At 5:30 PM, the forest went quiet. Then the first elephant appeared at the water&apos;s edge. Then another. Then the herd — over sixty of them — wading through the shallows of the Kabini reservoir as the sky turned orange. Nothing in South India prepares you for this.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Nagarhole (Rajiv Gandhi National Park) and the adjoining Kabini backwaters form one of India&apos;s finest wildlife ecosystems. The Kabini reservoir creates a rare edge habitat — forest meets water — that concentrates wildlife in ways most reserves cannot match. Elephants, tigers, leopards, dholes (Indian wild dogs), gaur, and 270+ bird species in 3 days. This is the guide.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌿" label="Best Season" value="Oct–May" />
            <StatCard icon="🐯" label="Tiger Population" value="150+" />
            <StatCard icon="💧" label="Kabini Reservoir" value="Prime Wildlife Spot" />
            <StatCard icon="⭐" label="Rating" value="4.8★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Nagarhole is open October–May. The experience changes dramatically by month — pick your priority.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Nov", emoji: "✅", title: "Green Season", desc: "Post-monsoon lush greenery. Waterholes full. Active wildlife. Comfortable temperatures (22–30°C). The forest is at its most photogenic — vivid green canopy. Excellent for birding.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Mar–May", emoji: "🐘", title: "Elephant Spectacle", desc: "Summer heat draws wildlife to water. The Kabini elephant crossing peaks in April–May — herds of 30–80 animals cross the reservoir at dusk. Best for big mammal concentrations. Hot (32–38°C) but worth it.", color: "bg-amber-50 border-amber-200" },
                { season: "Jun–Sep", emoji: "🌧️", title: "Monsoon (Partial Closure)", desc: "Kabini Zone closes June–September. Nagarhole core may partially operate. Very wet, leeches on trails. Not recommended for first-time visitors. Check closure dates before booking.", color: "bg-red-50 border-red-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 3-day wildlife experience, two comfort levels. The safaris are available to both — the difference is accommodation and exclusivity.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Budget lodge near Kabini Dam (₹1000–2000)</td><td className="py-2.5 px-4">Kabini River Lodge (JLR) or Orange County</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Safari</td><td className="py-2.5 px-4">Forest Dept jeep + public boat safari</td><td className="py-2.5 px-4">JLR exclusive boat + private jeep</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Lodge meals + local dhabas</td><td className="py-2.5 px-4">All-inclusive resort dining</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (3 days)</td><td className="py-2.5 px-4 font-medium text-amber-700">₹8,000–12,000</td><td className="py-2.5 px-4 font-medium text-teal">₹15,000–35,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive Kabini + afternoon boat safari (elephant crossing at dusk). Day 2: Dawn jeep safari + afternoon jeep safari. Day 3: Final morning jeep + onward to Coorg or Mysore.
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
                title="Arrive Kabini + Boat Safari & Elephant Crossing"
                items={[
                  "Drive or bus from Mysore (80 km, 2 hrs) or Bangalore (220 km, 4 hrs). The road from Mysore via Hunsur passes through coffee plantation country — scenic and well-maintained.",
                  activeTab === "A"
                    ? "Check in to a budget lodge near Kabini Dam (₹1000–2000/night). Options: Kabini Jungle Lodge government camp (₹2000–3500), or smaller guesthouses in Karapur village near the dam."
                    : "Check in to Kabini River Lodge (Jungle Lodges & Resorts, ₹12,000–18,000 all-inclusive) or Orange County Resort (₹15,000–25,000). Both include all meals, safaris, and naturalist guidance.",
                  "Afternoon: Kabini backwaters boat safari (₹800–1200/person for a shared 2-hour boat). This is your first wildlife experience on the Kabini reservoir. Watch crocodiles on the banks, monitor lizards, kingfishers, fishing eagles, and river otters.",
                  "Dusk: The main event — the Kabini elephant crossing. As the water level drops in the dry season, large elephant herds use a shallow point in the reservoir to cross between the Nagarhole forest and the Mysore-side forests. Herds of 30–50 (sometimes 80+) elephants wade through the water at the golden hour. It is one of India's most spectacular wildlife moments.",
                  "Evening: Return to lodge. Dinner and early night — the 5:30am safari start requires discipline.",
                ]}
                cost={activeTab === "A" ? "₹3,500" : "₹15,000–18,000 (all-inclusive)"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Dawn Jeep Safari + Afternoon Core Zone"
                items={[
                  "5:30 AM: Jeep safari into Nagarhole core zone (book at junglelodges.com or Karnataka Forest Department portal — forestkarnataka.gov.in). The Kabini Zone and Nagarhole Zone are both available — Kabini Zone fills first, book 60 days in advance.",
                  "The Kabini Zone jeep safari follows trails through mixed deciduous forest. Target species: Bengal tiger, Indian leopard, wild dog (dhole), gaur (Indian bison), bonnet macaque, Malabar giant squirrel, and the Indian rock python. Tigers are seen regularly — Kabini has one of Karnataka's highest tiger densities.",
                  "9:00 AM: Return to lodge for breakfast. Rest during the midday heat (12–3 PM). Wildlife is less active during this window anyway.",
                  "4:00 PM: Afternoon jeep safari — late afternoon light is spectacular for photography. Leopards are most active at dusk; look in tree branches along the forest edge and on rocky outcrops. Kabini has a high leopard density — sightings are more reliable here than in many dedicated leopard reserves.",
                  activeTab === "B"
                    ? "Comfortable option: Book the JLR exclusive coracle boat ride (available to JLR guests only) — a circular bamboo-and-hide boat used by local fisherfolk, taken out on the reservoir at dawn for a completely silent wildlife approach."
                    : "After the safari: Kabini backwaters sunset walk from the dam road — free, excellent birding (300+ species recorded here).",
                ]}
                cost={activeTab === "A" ? "₹4,000" : "Included in all-inclusive package"}
              />

              {/* ── Day 3 ── */}
              <DayCard
                day="Day 3"
                title="Final Morning Safari + Onward to Coorg or Mysore"
                items={[
                  "Final 5:30 AM morning jeep safari — third safaris often produce the best sightings as you've learned the patrol patterns and your naturalist (or driver-guide) knows the zone better.",
                  "Optional: After check-out, drive 15 km to Brahmagiri Wildlife Sanctuary (adjacent to Nagarhole, less crowded, excellent for hornbills, Malabar pied hornbills, and coffee estate walks through the buffer zone).",
                  activeTab === "A"
                    ? "Drive to Coorg (Kodagu) — 50 km from Kabini, 1.5 hrs. Coffee estates, misty hills. Or return to Mysore (80 km, 2 hrs) for heritage sites and onward connections."
                    : "Drive to Coorg (50 km) — stop at a coffee estate (Plantation Trail at Silver Brook Estate or Coorg Wilderness Resort) for a post-safari coffee estate walk. Or head to Mysore Palace for an evening arrival.",
                  "The Bangalore–Mysore–Kabini–Coorg–Bangalore circuit (5–6 days total) is one of Karnataka's finest road trips.",
                ]}
                cost={activeTab === "A" ? "₹3,000" : "₹2,000–5,000 (transport + optional stops)"}
              />
            </div>
          </section>

          {/* ── SAFARI GUIDE ── */}
          <section id="safari" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🐘 Safari Guide: Kabini & Nagarhole</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Two different safari experiences, both extraordinary. Understanding the difference helps you prioritise your days.
            </p>
            <div className="space-y-4">
              {[
                { rank: "Boat Safari", icon: "🚤", where: "Kabini reservoir (book at forest office)", price: "₹800–1200/person (2 hrs shared)", note: "The Kabini boat safari is unique in India — you watch wildlife from the water. Crocodiles, otters, kingfishers, and the elephant herd at the water's edge. The perspective — low, silent, on the reservoir — is one no jeep can replicate. Do this on Day 1 for the elephant crossing.", color: "bg-amber-50 border-amber-200" },
                { rank: "Jeep Safari (Kabini Zone)", icon: "🚙", where: "Kabini Zone, Nagarhole National Park", price: "₹1200–2000/person (book forestkarnataka.gov.in)", note: "The Kabini Zone jeep safari is the core forest experience — tiger, leopard, dhole, gaur, giant squirrel. Book 60 days in advance; Kabini Zone fills first. 6-seat jeeps with a trained guide. Two sessions: dawn (5:30–9 AM) and afternoon (4–6:30 PM).", color: "bg-amber-50 border-amber-200" },
                { rank: "JLR Exclusive Safari", icon: "🌿", where: "Jungle Lodges & Resorts guests only", price: "Included in JLR stay (₹12,000–20,000/night)", note: "JLR (Jungle Lodges & Resorts) operates exclusive boat safaris and coracle rides for guests that are not available to day visitors. If budget allows, a 2-night JLR stay is the peak Kabini experience — private naturalist, exclusive time slots, coracle approach.", color: "bg-teal-50 border-teal-200" },
                { rank: "Nagarhole Zone Jeep", icon: "🐆", where: "Nagarhole core, northern zone", price: "₹1000–1800/person", note: "If Kabini Zone is full, book the Nagarhole Zone — slightly denser forest, slightly different species mix (more giant squirrels, slightly less open terrain). Tiger and leopard sightings are comparable. Less popular so sometimes available last-minute.", color: "bg-teal-50 border-teal-200" },
              ].map((f) => (
                <div key={f.rank} className={`rounded-xl border p-5 ${f.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{f.icon}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{f.rank}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{f.where} · {f.price}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{f.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SAFARI IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="elephant herd crossing water reserve india wildlife"
              fallback="https://images.unsplash.com/photo-1516426122078-a8e4ee10e986?w=900&q=80"
              alt="Elephant herd at Kabini reservoir at sunset"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Kabini elephant crossing: herds of 30–80 elephants wade through the reservoir shallows at dusk. April–May is the peak for this phenomenon — the most spectacular wildlife scene in South India.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "₹8,000–12,000", color: "bg-amber-50 border-amber-200",
                  items: [["Accommodation (3 nights)", "₹3,000–6,000"], ["Safaris (4 safaris)", "₹3,200–5,000"], ["Food & water", "₹1,500–2,500"], ["Transport (Mysore–Kabini)", "₹1,500–2,500"], ["Entry/permit fees", "₹500–800"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹15,000–35,000", color: "bg-teal-50 border-teal-200",
                  items: [["JLR or Orange County (3 nights, AI)", "₹36,000–75,000"], ["Private naturalist", "Included"], ["Exclusive boat/coracle", "Included"], ["Transport (private taxi)", "₹4,000–6,000"], ["Extra activities", "₹1,000–3,000"]] },
              ].map((b) => (
                <div key={b.plan} className={`rounded-xl border p-5 ${b.color}`}>
                  <div className="text-center mb-4">
                    <span className="text-2xl">{b.emoji}</span>
                    <p className="font-serif text-base text-ink mt-1">{b.plan}</p>
                    <p className="font-serif text-xl text-ink font-medium mt-1">{b.total}</p>
                    <p className="text-xs text-muted uppercase tracking-wider">per person (3 days)</p>
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
              * Budget plan assumes shared forest department safaris (book at forestkarnataka.gov.in) and government/budget guesthouse accommodation. Comfortable plan assumes JLR all-inclusive (per couple); solo travellers divide accordingly. Does not include travel from Bangalore or Mysore.
            </p>
          </section>

          <AffiliateBlock destination="Nagarhole" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Not booking safaris 60 days in advance", desc: "Kabini Zone is India's most in-demand safari zone and fills up months ahead. Book at forestkarnataka.gov.in the moment your dates are confirmed. Waiting until 2 weeks before = no safari slot.", icon: "📅" },
                { title: "Visiting during monsoon without checking closures", desc: "Nagarhole partially or fully closes June–September. Kabini Zone closes entirely. Check the Forest Department website before booking accommodation. Many tourists arrive to find the zone closed.", icon: "🌧️" },
                { title: "Skipping the boat safari for just jeep safaris", desc: "The Kabini boat safari (on the reservoir) is what makes this destination different from every other India wildlife reserve. The jeep safari is excellent but the boat gives you the elephant crossing at the water's edge. Do both.", icon: "🚤" },
                { title: "Arriving at Kabini in the afternoon expecting a same-day safari", desc: "Morning safaris start at 5:30 AM. If you arrive in the afternoon from Bangalore, you'll need to settle in and book the next morning's slot. Plan to arrive by early afternoon on Day 1 so you catch the afternoon boat safari (4 PM).", icon: "⏰" },
                { title: "Staying too far from the Kabini Dam area", desc: "The Kabini Dam/reservoir area is where the boat safaris and main action happens. Some accommodations near Mysore (80 km away) advertise 'Kabini safari packages' but you lose 2+ hours of morning wildlife time in transit. Stay within 5 km of the dam.", icon: "📍" },
                { title: "Expecting guaranteed tiger sightings", desc: "Tigers are present and sighted regularly — but Nagarhole is a forest reserve, not a zoo. Sighting rates are high by India standards but not guaranteed. Come for the full ecosystem: the elephant crossing alone justifies the trip.", icon: "🐯" },
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
                { icon: "🐘", title: "Kabini Elephant Crossing: Best in April–May", desc: "As the water level drops in summer, elephant herds cross the Kabini reservoir in large groups at the shallows. Herds of 30–80 elephants crossing at dusk is one of India's most spectacular wildlife scenes. May is the peak for this phenomenon.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚤", title: "Boat Safari vs Jeep Safari", desc: "The Kabini boat safari (on the reservoir) is unique — you watch elephants, crocodiles, otters, and kingfishers from the water. The jeep safari goes into the core forest for tiger/leopard sightings. Both are outstanding; the boat gives a perspective no jeep can.", color: "bg-amber-50 border-amber-200" },
                { icon: "🐆", title: "Kabini for Leopards", desc: "Nagarhole/Kabini has one of India's highest leopard-to-tiger ratios. Leopards are spotted more reliably here than in many dedicated leopard destinations. Look in the tall tree branches and on rocky outcrops at dawn.", color: "bg-teal-50 border-teal-200" },
                { icon: "🌿", title: "Nagarhole Coffee Connection", desc: "The surrounding buffer zone merges with Coorg's coffee estates. Some lodges offer coffee estate walks — you can go from watching tigers in the forest to picking coffee on the same day.", color: "bg-teal-50 border-teal-200" },
                { icon: "📅", title: "Book Karnataka Forest Dept Safari 60 Days Ahead", desc: "Book at forestkarnataka.gov.in. Kabini Zone fills first. If full, book Nagarhole Zone (similar quality, slightly different species mix). JLR also has exclusive boat safaris for guests.", color: "bg-rose-50 border-rose-200" },
                { icon: "🏕️", title: "Where to Stay Near Kabini", desc: "Budget: Kabini Jungle Lodge government camp (₹2000–3500). Mid-range: Bison River Resort, Kabini Woods (₹4000–8000). Luxury: Kabini River Lodge (JLR, all-inclusive, ₹12000–20000/night), Orange County (₹15000–25000).", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and group — we&apos;ll send a personalised Nagarhole + Kabini itinerary including lodge bookings within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Nagarhole Safari →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What makes Kabini different from other South India wildlife destinations?", a: "Kabini's reservoir creates a unique edge habitat where forest meets water — elephant herds cross daily, crocodiles bask on banks, and the open water allows 270° views unavailable in dense forest reserves. Combined with Nagarhole's core forest tiger population, it offers both landscape and wildlife photography unmatched in South India." },
                { q: "How to reach Kabini / Nagarhole?", a: "Nearest city: Mysore (80 km, 2 hrs by road). From Bangalore: 220 km (4 hrs). The Kabini Dam area has the most lodges — most GPS-navigate to 'Kabini Jungle Lodge' or 'Kabini Bridge'. No direct public transport; hire a taxi from Mysore." },
                { q: "What is the best time to visit Nagarhole / Kabini?", a: "October–November: lush greenery, post-monsoon freshness, active wildlife. March–May: summer — elephants congregate at water sources, the Kabini crossing is most dramatic. June–September: monsoon, park partially closed, very wet. Best overall: April–May for elephant spectacle; November for green forest." },
                { q: "Is Nagarhole good for bird watching?", a: "Outstanding — 270+ species including Malabar pied hornbill, crested serpent eagle, Indian grey hornbill, brown fish owl, and the rare Malabar trogon. Winter (November–February) brings migratory species. The Brahmagiri hills adjacent to Nagarhole add Nilgiri biome specialties." },
                { q: "Can I combine Nagarhole with Coorg and Mysore?", a: "The classic Karnataka circuit: Bangalore → Mysore (3 hrs, palaces) → Kabini/Nagarhole (2 hrs from Mysore, wildlife 2 nights) → Coorg (1 hr from Kabini, coffee + hills 1–2 nights) → Bangalore. 5–6 days covers the full southern Karnataka experience." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Karnataka Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Coorg — 3 Days in the Coffee Hills", href: "/blog/coorg-3-days" },
                { label: "Mysore — 3 Days of Palaces & Heritage", href: "/blog/mysore-3-days" },
                { label: "Wayanad — 2 Days Wildlife & Waterfalls", href: "/blog/wayanad-3-days" },
                { label: "Browse All India Wildlife Guides", href: "/#packages" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="nagarhole-3-days" />
          <RelatedGuides currentSlug="nagarhole-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
