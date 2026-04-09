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

const KOCHI_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "food",      emoji: "🍤", label: "Food Guide" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Kochi 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Kochi in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function KochiClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹6k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹6k–18k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KOCHI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kochi" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="chinese fishing nets fort kochi kerala sunset"
            fallback="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=85"
            alt="Chinese fishing nets silhouetted at Fort Kochi Kerala at golden hour"
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
              <span className="text-white/70">Kochi 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Heritage & Seafood
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kochi in 3 Days: Fort Kochi,
                <em className="italic text-gold-light"> Chinese Fishing Nets &amp; Kerala&apos;s Cosmopolitan Port</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Portuguese churches, a Dutch palace, a 1568 synagogue, Chinese fishing nets, and karimeen pollichathu. Kochi is the most layered city in South India — and three days barely scratches it.
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
              <span>🇮🇳 Kerala</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹4,300</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The ferry from Ernakulam to Fort Kochi costs ₹5. You step off the boat into a different century — colonial bungalows with bougainvillea, Chinese fishing nets creaking on the waterfront, the smell of coconut oil and fresh catch. No other Indian city pulls off this trick.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Kochi is the entry point to Kerala — but most travellers treat it as a transit hub and rush to Munnar or Alleppey. That&apos;s a mistake. Fort Kochi alone deserves two full days: the heritage walk, the Kathakali show, the Mattancherry spice market, the synagogue, and a sunset from the fishing net pier. Day three adds the backwaters without leaving the city&apos;s orbit.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌡️" label="Best Season" value="Oct–Feb" />
            <StatCard icon="🌅" label="Best Sunset Spot" value="Fort Kochi Pier" />
            <StatCard icon="🚗" label="Distance from Munnar" value="130 km" />
            <StatCard icon="⭐" label="Rating" value="4.7★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Kochi&apos;s weather is relatively stable year-round due to its coastal location — but the monsoon changes everything.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Feb", emoji: "✅", title: "Best Season", desc: "October–February is peak Kochi: warm (26–32°C), low humidity, clear skies, and the Chinese fishing nets at their most photogenic. This is also when the Cochin Carnival (December 31) and the vibrant festival season happens. Book heritage guesthouses 3–4 weeks ahead.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Mar–May", emoji: "🌤️", title: "Shoulder Season", desc: "March–April is warm and getting humid. Still manageable. May starts to get uncomfortable with pre-monsoon heat and humidity. Prices drop and crowds thin out. Good for budget travellers who don't mind the heat.", color: "bg-amber-50 border-amber-200" },
                { season: "Jun–Sep", emoji: "🌧️", title: "Monsoon", desc: "Kerala monsoon hits Kochi hard June–August. The Chinese fishing nets in rain are actually beautiful. Houseboat trips are cancelled during heavy rain. The Kerala backwaters are greenest during monsoon. Pack a compact raincoat. September starts clearing.", color: "bg-red-50 border-red-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 3-day route, two comfort levels. Kochi offers exceptional value across all budgets.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Heritage guesthouses, Mattancherry (₹700–1,200)</td><td className="py-2.5 px-4">Brunton Boatyard, Old Harbour Hotel (₹8,000–12,000)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Ferry (₹5) + walk + KSRTC buses</td><td className="py-2.5 px-4">Private car + ferry for ambiance</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Meals restaurants + Kashi Art Café</td><td className="py-2.5 px-4">Malabar Junction + fine dining + cooking class</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹6,000</td><td className="py-2.5 px-4 font-medium text-teal">₹6,000–18,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Ferry arrival → Fort Kochi heritage walk → Chinese fishing nets → Kathakali show. Day 2: Mattancherry Palace → Jew Town → Kerala Folklore Museum → Cherai Beach. Day 3: Alleppey backwaters day trip → return and depart.
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
                title="Ferry Arrival, Fort Kochi Heritage Walk & Kathakali"
                items={[
                  "Fly into Cochin International Airport → Ferry to Fort Kochi (₹5, 30 min from Ernakulam jetty). This is non-negotiable — don't take a taxi. The ferry gives you the iconic view of the Chinese fishing nets from the water, and it's the authentic way to enter Fort Kochi.",
                  activeTab === "A"
                    ? "Check in at a heritage guesthouse in Mattancherry (₹700–1,200/night). The Ballard Bungalow or similar family-run guesthouses in the Fort Kochi / Mattancherry area give you character without the luxury hotel prices."
                    : "Check in at Brunton Boatyard (₹8,000–12,000/night) — a restored 1920s boatyard on the waterfront with extraordinary views of the harbour. The breakfast spread here is one of the best in Kerala.",
                  "Walk Fort Kochi: Chinese fishing nets at Vasco da Gama Square (best light 5–6 PM — the cantilever nets are lowered and raised every 45 minutes by teams of fishermen). St Francis Church — where Vasco da Gama was originally buried before his remains were sent back to Portugal.",
                  "Dutch Cemetery (1724), Santa Cruz Basilica — a Portuguese Gothic cathedral with a pastel façade unlike anything else in India. Fort Kochi is compact enough to walk end to end in 2 hours.",
                  "Kathakali show: Kerala Kathakali Centre at 6 PM (₹300, 1 hour). Arrive 45 minutes early for the pre-show makeup explanation — artists apply the elaborate 5-hour makeup in front of the audience in 20 minutes for the performance version. This is as fascinating as the performance.",
                  "Dinner near Fort Kochi pier or the cafés around Princess Street. The prawn moilee at local restaurants here is excellent at ₹200–350/plate.",
                ]}
                cost="₹2,000"
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Mattancherry Palace, Jew Town & Kerala Folklore Museum"
                items={[
                  "Morning: Mattancherry Palace (Dutch Palace) — entry ₹5 (one of the cheapest entry fees in India for what it contains). The palace was actually built by the Portuguese in 1555 and given to the Raja of Kochi. Inside: Kerala murals depicting scenes from the Ramayana, considered the finest surviving examples of Kerala mural painting. Allow 1 hour.",
                  "Paradesi Synagogue (1568) — one of the oldest active synagogues in the Commonwealth. The floor is paved with hand-painted Chinese willow tiles, each slightly different. Entry ₹5. Open Sunday–Thursday, 10am–1pm and 3pm–5pm.",
                  "Jew Town: antique shops, spice market. Buy real Kerala black pepper (₹200–300/250g), cardamom, and dried coconut. Avoid the overpriced tourist shops on the main Jewish Quarter Road — go deeper into the back alleys for better prices and genuine antiques.",
                  activeTab === "A"
                    ? "Lunch: Kerala prawn curry with appam at Kashi Art Café (₹280–400/main) or a local meals restaurant for an unlimited Kerala sadya (₹100–150)."
                    : "Lunch: Private cooking class (₹2,000/person) where you learn to make appam, fish curry, and payasam with a local host. This is the most immersive food experience in Kochi.",
                  "Afternoon: Kerala Folklore Museum (Thevara, 20 min by auto) — the largest private collection of Kerala cultural artifacts in Asia, spanning 3 floors. Entry ₹100. Masks, temple art, puppets, bronze idols, and traditional furniture. Under-visited and extraordinary.",
                  "Evening: Cherai Beach (25 km north by road, 45 min) — a clean, uncrowded beach with good sunset light and occasional dolphin sightings from the shore. Local seafood shacks serve fresh catch at beach prices.",
                ]}
                cost="₹1,800"
              />

              {/* ── Day 3 ── */}
              <DayCard
                day="Day 3"
                title="Alleppey Backwaters Day Trip & Departure"
                items={[
                  "Early morning bus from Ernakulam KSRTC stand to Alleppey/Alappuzha (90 km, 2 hours, ₹85). Or shared taxi from Fort Kochi (₹500–700 for the full day).",
                  activeTab === "A"
                    ? "Shared houseboat cruise on Alleppey backwaters (₹800–1,200/person, 4 hours). The shared boats depart from the Alleppey boat jetty and take you through the narrow canals of Punnamada Lake — the venue for the famous Nehru Trophy snake boat races."
                    : "Private houseboat for the afternoon (₹3,500–5,000 for 2 people, 4 hours). You get your own boat, own deck, and the crew serves Kerala fish curry lunch on board.",
                  "Shnongpdeng nearby for optional swimming and cliff jumping — the backwater canals around Alleppey are clean and calm. Many boats moor at village stops where you can walk into the rice paddies.",
                  "Return to Kochi by 5–6 PM. The drive back through the coastal highway passes through Marari and Cherai — stop at a toddy shop for fresh coconut toddy if you're curious.",
                  "Depart from Cochin International Airport (45 min from Fort Kochi by taxi, ₹700–900) or take the overnight Rajdhani/Jan Shatabdi to other Kerala destinations.",
                ]}
                cost="₹2,500"
              />
            </div>
          </section>

          {/* ── FOOD GUIDE ── */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🍤 Kochi Seafood & Food Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Kochi has arguably the best seafood in India. The rule is simple: eat where the locals eat, avoid restaurants with laminated photo menus near the Chinese fishing nets.
            </p>
            <div className="space-y-4">
              {[
                { rank: "#1", dish: "Karimeen Pollichathu", where: "Malabar Junction or Oceanos Restaurant", price: "₹400–600/plate", note: "Pearl spot fish marinated in Kerala spices, wrapped in banana leaf and grilled. The fish is unique to Kerala backwaters — it has a firm, sweet flesh that absorbs the masala perfectly. This is the single dish Kochi does better than anywhere else.", emoji: "🐟", color: "bg-amber-50 border-amber-200" },
                { rank: "#2", dish: "Prawn Moilee", where: "Kashi Art Café, Fort Kochi", price: "₹280–400/plate", note: "Kerala-style prawn curry in light coconut milk — fragrant with turmeric and green chilli, not the heavy red curry of Tamil Nadu. Eat with appam (lacy fermented rice pancakes). The moilee is so delicate you can taste the sea. Get here before 1pm to avoid the queue.", emoji: "🦐", color: "bg-amber-50 border-amber-200" },
                { rank: "#3", dish: "Kerala Fish Curry with Rice", where: "Any local meals restaurant in Ernakulam", price: "₹80–120 unlimited", note: "The proper Kerala fish curry — deep red, sour from kudampuli (Garcinia cambogia), rich from coconut milk — served with steamed red rice on a banana leaf with a dozen side dishes. The best version costs ₹100. The tourist version at Chinese fishing net restaurants costs ₹500 and is half as good.", emoji: "🍛", color: "bg-teal-50 border-teal-200" },
                { rank: "#4", dish: "Appam & Egg Curry", where: "Any local breakfast spot in Fort Kochi", price: "₹60–100", note: "Appam (lacy coconut milk crepes with a soft centre) with egg curry is the standard Kerala breakfast. Find a small shop near the Mattancherry waterfront that opens at 7am. The appam should be lacy at the edges and thick and soft in the middle.", emoji: "🥞", color: "bg-teal-50 border-teal-200" },
                { rank: "#5", dish: "Beef Fry + Porotta", where: "Local restaurants in Fort Kochi, away from the tourist strip", price: "₹80–150", note: "Kerala beef fry — slow-cooked with curry leaves, coconut slices, and black pepper — is a cultural institution. Served with layered Kerala porotta (not the same as North Indian paratha). This combination is the midnight snack of choice across Kerala.", emoji: "🥩", color: "bg-rose-50 border-rose-200" },
                { rank: "#6", dish: "Pazham Pori (Banana Fritters)", where: "Street vendors near Fort Kochi pier", price: "₹20–30/2 pieces", note: "Ripe banana coated in a light batter and deep fried. A Kerala street food staple, eaten with tea. Best bought from the carts near the fishing nets or the Mattancherry spice market. Eat immediately while hot.", emoji: "🍌", color: "bg-rose-50 border-rose-200" },
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
              query="kerala seafood fish curry appam backwaters"
              fallback="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=900&q=80"
              alt="Kerala seafood spread with fish curry and appam"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Karimeen pollichathu at a Fort Kochi restaurant: ₹450. The same fish caught 3 hours ago from the backwaters by the same fishermen you watched at the Chinese nets. There is no fresher seafood in South India.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹6,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stay (3 nights)", "₹2,100–3,600"], ["Transport", "₹600–1,000"], ["Food", "₹1,200–2,000"], ["Entry fees + Kathakali", "₹400–600"], ["Alleppey day trip", "₹900–1,200"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹6,000–18,000", color: "bg-teal-50 border-teal-200",
                  items: [["Stay (3 nights)", "₹8,000–16,000"], ["Private car", "₹2,000–3,500"], ["Food + cooking class", "₹3,000–5,000"], ["Entry + shows", "₹600–1,000"], ["Private houseboat", "₹3,500–5,000"]] },
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
              * All prices per person. Does not include flights to/from Kochi. Mattancherry Palace entry (₹5), Paradesi Synagogue (₹5), and the ferry (₹5) are among the cheapest entry prices in India. The Kathakali show at Kerala Kathakali Centre is ₹300.
            </p>
          </section>

          <AffiliateBlock destination="Kochi" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Taking a taxi from Ernakulam to Fort Kochi", desc: "The ferry (₹4–5, 30 min) is cheaper, more atmospheric, and gives you the Chinese fishing net view from the water. The taxi alternative (₹400–600 by road) adds 30–45 minutes and misses the whole point of arriving by sea.", icon: "⛴️" },
                { title: "Eating at Chinese fishing net restaurants", desc: "The restaurants right behind the fishing nets on the waterfront are classic tourist traps — overpriced, average food, and they target photo-seeking tourists rather than food-seeking ones. Walk 5–10 minutes inland for the real Fort Kochi food scene.", icon: "🦐" },
                { title: "Skipping the pre-show makeup at Kathakali", desc: "Most tourists arrive for the performance and miss the 45-minute pre-show where artists apply makeup in front of the audience. This is the most interesting part. Arrive early, sit in the front, and watch a master craft a transformation.", icon: "🎭" },
                { title: "Not going into Jew Town's back alleys", desc: "The main Jewish Quarter Road is full of overpriced tourist shops. Turn off into the narrower alleys behind the main street for genuine antiques, better-priced spices, and a glimpse of what this neighbourhood looked like before tourism.", icon: "🕍" },
                { title: "Booking a Kathakali show through your hotel", desc: "Hotels inflate the price and often book lower-quality hotel-organised shows. Go directly to Kerala Kathakali Centre or See India Foundation — the artists are better, the venue is authentic, and you get the full experience for ₹300.", icon: "🎟️" },
                { title: "Rushing through for Munnar or Alleppey", desc: "Kochi is not a transit city. The heritage walk alone needs a full day. Treat Fort Kochi as the destination, not the gateway. You can always do Munnar and Alleppey as day trips — you don't need to leave.", icon: "⏰" },
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
                { icon: "⛴️", title: "Take the Ferry, Not a Taxi", desc: "The Ernakulam–Fort Kochi ferry (₹4–5, 30 min) is the authentic way to arrive. It also gives you the iconic view of the Chinese fishing nets from the water. Runs every 20–30 minutes. Ferry timings at ksfdc.in.", color: "border-blue-200 bg-blue-50" },
                { icon: "🎭", title: "Kathakali: Arrive 45 Min Early", desc: "The pre-show makeup explanation (6 PM at most venues) is as fascinating as the performance itself. Artists apply elaborate makeup in front of audiences. Book at Kerala Kathakali Centre or See India Foundation — avoid hotel-organized shows.", color: "border-amber-200 bg-amber-50" },
                { icon: "🕍", title: "Mattancherry Must-Dos", desc: "Skip the overpriced spice shops on the main tourist strip (Jewish Quarter Road). Go deeper into Jew Town's back alleys for genuine antiques and better-priced Kerala spices. The Paradesi Synagogue's floor of hand-painted Chinese tiles is breathtaking.", color: "border-purple-200 bg-purple-50" },
                { icon: "🦐", title: "Kochi Seafood Guide", desc: "Prawn moilee (coconut milk curry) at Oceanos, karimeen pollichathu (pearl spot fish) at Malabar Junction, Kerala fish curry with rice at local meals restaurants (₹80–120 for unlimited). Avoid Chinese fishing net-side restaurants (tourist traps).", color: "border-orange-200 bg-orange-50" },
                { icon: "🚕", title: "Getting Around Kochi", desc: "Fort Kochi is very walkable (3 km across). For Ernakulam: ferry (₹5) or Kochi Metro (AC, ₹10–30). For Alleppey day trip: KSRTC bus (₹85, 2 hrs) or shared taxi (₹500–700 for the full day). Avoid Ola/Uber surge pricing near the airport.", color: "border-green-200 bg-green-50" },
                { icon: "🌧️", title: "Monsoon in Kochi (Jun–Sep)", desc: "Kerala monsoon hits Kochi hard June–August. The Chinese fishing nets in rain are actually beautiful. Houseboat trips are cancelled during heavy rain. The Kerala backwaters are greenest during monsoon. Pack a compact raincoat.", color: "border-red-200 bg-red-50" },
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
              Tell us your dates and we&apos;ll send a personalised Kochi itinerary — including the Alleppey backwater extension, the best Kathakali venue, and heritage hotel picks — within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Kochi Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Is Fort Kochi different from Ernakulam?", a: "Yes — Kochi district has two main areas. Ernakulam (the mainland) is the commercial hub — shopping malls, railways, airport connections. Fort Kochi (the peninsula, reached by ferry or road) is the heritage area — colonial buildings, fishing nets, art galleries, guesthouses. Most visitors stay in Fort Kochi." },
                { q: "How do I get from Kochi to Munnar?", a: "Munnar is 130 km (4–5 hrs by road through tea estates). KSRTC buses run from Ernakulam every 2 hours (₹180, 5 hrs). Private car: ₹2,500–3,500. The drive through Periyar and tea plantations is beautiful. Alternatively: Kochi–Thekkady (Periyar Wildlife) is another 4-hr option." },
                { q: "What is the best time to see Chinese fishing nets?", a: "The nets are visible all day but the light is best at 5–6:30 PM (golden hour). They're raised and lowered every 45 minutes to catch fish. The sunrise view (6 AM) with fishermen at work is equally beautiful and crowd-free." },
                { q: "Is Kochi expensive compared to other Kerala destinations?", a: "Kochi is mid-range — more expensive than rural Kerala but cheaper than international cities. Budget: ₹1,500–2,500/day (hostel + local food). Mid-range: ₹4,000–8,000/day (guesthouse + restaurant meals + ferry/auto). Luxury: ₹15,000+/day (Brunton Boatyard + fine dining)." },
                { q: "Can I combine Kochi, Munnar, and Alleppey?", a: "This is Kerala's golden triangle. Standard routing: Kochi (2 days) → Munnar (2 days, 4 hrs drive) → Thekkady Periyar (1 day, 3 hrs from Munnar) → Alleppey houseboat (1 night) → Back to Kochi (2.5 hrs). 6–7 days total." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Kochi — Highlights"
            subtitle="The best of Kochi in photos."
            spots={[
              { name: "Kochi Landscape", query: "kochi india landscape scenic beautiful travel", desc: "The stunning landscapes of Kochi." },
              { name: "Kochi Temple", query: "kochi temple architecture heritage india", desc: "Historic temples and architecture in Kochi." },
              { name: "Kochi Street Scene", query: "kochi street market local culture india", desc: "Local life and culture in Kochi." },
              { name: "Kochi Nature", query: "kochi nature hills forest river india", desc: "Natural beauty around Kochi." },
              { name: "Kochi Sunset", query: "kochi sunset golden hour india travel", desc: "Kochi at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Kerala Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Munnar — 3 Days in the Tea Estates", href: "/blog/munnar-3-days" },
                { label: "Alleppey — 3 Days on the Backwaters", href: "/blog/alleppey-3-days" },
                { label: "Thekkady — 2 Days at Periyar Wildlife", href: "/blog/thekkady-2-days" },
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

          <CombineWith currentSlug="kochi-3-days" />
          <RelatedGuides currentSlug="kochi-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
