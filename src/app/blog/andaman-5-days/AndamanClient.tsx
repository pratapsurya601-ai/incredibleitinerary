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

const TOC = [
  { id: "plan",      emoji: "⚡", label: "Pick Your Plan" },
  { id: "islands",   emoji: "🏝️", label: "The 3 Islands" },
  { id: "ferry",     emoji: "⛴️", label: "Ferry Guide" },
  { id: "itinerary", emoji: "📅", label: "Day by Day" },
  { id: "diving",    emoji: "🤿", label: "Diving & Snorkeling" },
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
  return <div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2"><div className="h-full bg-teal transition-all duration-100" style={{ width: `${p}%` }} /></div>;
}

function ShareBar() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      <a href={`mailto:?subject=Andaman Islands 5-Day Guide&body=${typeof window !== "undefined" ? window.location.href : ""}`} className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://twitter.com/intent/tweet?text=Andaman%20Islands%205-Day%20Guide&url=${typeof window !== "undefined" ? window.location.href : ""}`} target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
      <button onClick={() => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">{copied ? "✓ Copied" : "Copy Link"}</button>
    </div>
  );
}

function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden mb-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors">
        <div className="flex items-center gap-3"><span className="font-serif text-xl text-teal font-light">{day}</span><span className="text-sm text-ink font-medium">{title}</span></div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">{items.map((item, i) => <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed"><span className="text-teal mt-1 flex-shrink-0 text-xs">●</span>{item}</li>)}</ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2"><span className="text-xs text-muted font-light">Est. cost: </span><span className="text-xs font-medium text-teal">{cost}</span></div>
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
        <span className={`text-teal text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <div className="px-5 pb-5 pt-1 border-t border-parchment-2"><p className="text-sm text-muted font-light leading-relaxed">{a}</p></div>}
    </div>
  );
}

function TipBox({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
  return (
    <div className={`rounded-xl p-4 border ${color}`}>
      <div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{icon}</span><div><p className="font-medium text-sm text-ink mb-1">{title}</p><p className="text-xs text-muted font-light leading-relaxed">{desc}</p></div></div>
    </div>
  );
}

export default function AndamanClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A"|"B"|"C"|"D">("B");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget",    sub: "₹18k–28k total" },
    { id: "B" as const, emoji: "💑", label: "Couple",    sub: "₹45k–75k for two" },
    { id: "C" as const, emoji: "🤿", label: "Adventure", sub: "Diving + trekking" },
    { id: "D" as const, emoji: "👨‍👩‍👧", label: "Family",   sub: "₹55k–85k for four" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <main className="bg-cream min-h-screen">

        {/* HERO */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage imageKey="andaman" fallback="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=85" alt="Radhanagar Beach Havelock Island Andaman" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Andaman 5 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-teal text-white text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Asia&apos;s Best Beach</span>
                <span className="text-white/60 text-xs">March 21, 2026</span>
                <span className="text-white/30">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Andaman Islands in 5 Days:<em className="italic text-teal-300"> Havelock, Neil & Port Blair</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Port Blair · Havelock Island · Neil Island — 4 complete plans, real budgets, ferry guide and the island mistake that ruins most Andaman trips.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted"><span>🏝️ Andaman</span><span>·</span><span>🗓 5 Days</span><span>·</span><span>💰 From ₹18,000</span></div>
          </div>

          <blockquote className="border-l-4 border-teal pl-6 mb-10 bg-teal/5 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.05rem] italic text-ink-mid leading-relaxed">The Andaman Islands are India's best-kept secret — a tropical archipelago in the Bay of Bengal with water clearer than Thailand, beaches emptier than Maldives, and prices that make both look absurd. Most Indians have never been. Most who go can't believe it's part of India.</p>
          </blockquote>

          {/* PICK PLAN */}
          <section id="plan" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Pick Your Plan in 10 Seconds</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-teal hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-teal mt-2 font-medium group-hover:underline">Plan {p.id} →</p>
                </button>
              ))}
            </div>
            <div className="p-4 bg-teal/8 border border-teal/30 rounded-xl">
              <p className="text-sm text-ink font-light leading-relaxed"><strong className="font-medium">Best for most people: Plan B (Couple).</strong> The Andamans are India's #1 honeymoon destination after Kashmir — turquoise water, empty beaches, candlelit dinners at sunset. Even if you&apos;re not honeymooning, this plan gives you the best version of the islands.</p>
            </div>
          </section>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            {[
              { icon: "🗓", val: "5 Days", label: "Ideal duration" },
              { icon: "💰", val: "₹18,000+", label: "Budget from" },
              { icon: "🌡", val: "Oct – May", label: "Best time" },
              { icon: "🤿", val: "Asia #1", label: "Radhanagar Beach" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <p className="font-serif text-lg font-light text-ink">{s.val}</p>
                <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* THE 3 ISLANDS */}
          <section id="islands" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏝️ The 3 Islands — What to Expect</h2>
            <p className="text-sm text-muted font-light mb-6">Each island is completely different. Here&apos;s what you&apos;re actually getting into.</p>
            <div className="space-y-4">
              {[
                {
                  name: "🏙️ Port Blair", days: "1 day", color: "border-l-4 border-amber-400 bg-amber-50",
                  desc: "The capital — your entry and exit point. Not a destination in itself but has two important things: the Cellular Jail (British colonial prison, deeply moving) and the ferry terminal to the outer islands. Stay one night, see the jail, move on.",
                  must: ["Cellular Jail + Sound & Light Show", "Corbyn's Cove Beach (short visit)", "Ross Island day trip (optional)", "Aberdeen Bazaar for supplies"],
                },
                {
                  name: "🏖️ Havelock Island (Swaraj Dweep)", days: "2–3 days", color: "border-l-4 border-teal bg-teal-50",
                  desc: "The main event. Radhanagar Beach (Asia's Best Beach) is here — 2km of white sand, turquoise water, backed by forest. Completely undeveloped. Also: Elephant Beach for snorkeling, Kalapathar Beach for sunrise. The best scuba diving in India is at dive sites around Havelock.",
                  must: ["Radhanagar Beach at sunrise (6am)", "Elephant Beach — snorkeling (boat or trek)", "Kalapathar Beach sunrise", "Scuba diving / snorkeling", "Neil's Cove for sunset"],
                },
                {
                  name: "🌿 Neil Island (Shaheed Dweep)", days: "1 day", color: "border-l-4 border-green-400 bg-green-50",
                  desc: "The quieter sibling — smaller, more relaxed, less touristy than Havelock. Natural Bridge (coral rock arch over the sea), Laxmanpur Beach for sunset, Bharatpur Beach for snorkeling. Better for cycling than Havelock. Day trip or overnight.",
                  must: ["Natural Bridge (coral arch)", "Laxmanpur Beach sunset", "Bharatpur Beach snorkeling", "Cycle the entire island (15km, 2hrs)"],
                },
              ].map((island) => (
                <div key={island.name} className={`rounded-xl p-5 ${island.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <h3 className="font-serif text-lg font-normal text-ink">{island.name}</h3>
                    <span className="text-xs font-medium text-teal bg-white px-3 py-1 rounded-full border border-parchment-2">{island.days}</span>
                  </div>
                  <p className="text-xs text-muted font-light leading-relaxed mb-3">{island.desc}</p>
                  <div className="flex flex-wrap gap-2">{island.must.map((m) => <span key={m} className="text-[0.65rem] bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60 font-light">{m}</span>)}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FERRY GUIDE */}
          <section id="ferry" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⛴️ Ferry Guide — The Most Important Section</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Ferries are your only way between islands. Getting this wrong ruins your trip. Most people miss ferries, get stranded, or waste days waiting.</p>
            <div className="space-y-3 mb-6">
              {[
                { icon: "🎫", title: "Book ALL ferries before you arrive", desc: "Makruzz and Green Ocean are the two main operators. Book online at makruzz.com at least 3–5 days ahead during peak season. Walk-in tickets often sold out. Missing a ferry can mean a 24-hour wait for the next one.", color: "bg-red-50 border-red-200" },
                { icon: "⏰", title: "Ferries leave early — don't be late", desc: "Most ferries depart 6am–8am. Reach the jetty 30 minutes before departure. The ferry will NOT wait for you. Port Blair to Havelock: 1.5–2hrs on Makruzz speedboat (Rs.1,200–Rs.1,800). Government ferry: 2.5hrs (Rs.400) but slower.", color: "bg-amber-50 border-amber-200" },
                { icon: "🌊", title: "Monsoon ferries get cancelled", desc: "June–September: rough seas, frequent cancellations. Even in peak season (Dec–Feb), ferries can cancel due to weather. Always have one extra buffer day in Port Blair before your return flight.", color: "bg-blue-50 border-blue-200" },
                { icon: "🗺️", title: "The best island circuit", desc: "Port Blair (Day 1) → Havelock (Day 2–4) → Neil Island (Day 4 afternoon/Day 5) → Port Blair (Day 5 evening). This avoids backtracking. Port Blair → Havelock → Neil → Port Blair is the correct order.", color: "bg-teal-50 border-teal-200" },
              ].map((t) => <TipBox key={t.title} {...t} />)}
            </div>

            {/* Ferry route diagram */}
            <div className="bg-parchment rounded-2xl border border-parchment-2 p-5">
              <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-4">Ferry Routes & Times</p>
              <div className="space-y-3">
                {[
                  { from: "Port Blair", to: "Havelock", time: "1.5–2hrs", cost: "Rs.1,200–1,800", operator: "Makruzz / Green Ocean" },
                  { from: "Havelock", to: "Neil Island", time: "1hr", cost: "Rs.800–1,200", operator: "Makruzz / Green Ocean" },
                  { from: "Neil Island", to: "Port Blair", time: "1.5–2hrs", cost: "Rs.1,000–1,500", operator: "Makruzz / Green Ocean" },
                ].map((r) => (
                  <div key={r.from} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-parchment-2 flex-wrap">
                    <span className="font-medium text-sm text-teal">{r.from}</span>
                    <span className="text-muted">→</span>
                    <span className="font-medium text-sm text-teal">{r.to}</span>
                    <span className="text-xs text-muted ml-auto">⏱ {r.time}</span>
                    <span className="text-xs font-medium text-ink">💰 {r.cost}</span>
                    <span className="text-[0.65rem] text-muted bg-parchment px-2 py-0.5 rounded-full">{r.operator}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted mt-3 font-light">Book at: <span className="text-teal font-medium">makruzz.com</span> or <span className="text-teal font-medium">greenoceanferries.com</span></p>
            </div>
          </section>

          {/* ITINERARIES */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">📅 The Itineraries</h2>
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
                  <div><p className="text-sm font-medium text-amber-800">Budget Plan — Rs.18,000–Rs.28,000 per person for 5 days</p><p className="text-xs text-amber-600 font-light">Government ferries · Budget guesthouses · Free beaches</p></div>
                </div>
                <DayCard day="Day 1" title="Port Blair — Arrive + Cellular Jail"
                  items={[
                    "Fly into Port Blair. Pre-paid taxi from airport — Rs.300–Rs.500. Check in near Aberdeen Jetty (budget guesthouses Rs.700–Rs.1,500/night).",
                    "Cellular Jail — India's most notorious colonial prison, where freedom fighters were imprisoned. Entry Rs.30. Allow 2 hours. The Sound & Light Show at 6pm and 7:15pm (Rs.100) is excellent — don't skip it.",
                    "WHY spend a day here: The Cellular Jail changes how you understand Indian independence. Hearing names like Savarkar and Bhagat Singh in context, in the actual cells, is deeply moving.",
                    "Evening: Corbyn's Cove Beach (7km, auto Rs.150) — small beach, calm water, good for a quick swim before dinner.",
                    "Book your Port Blair → Havelock ferry tonight for tomorrow morning if not already done.",
                  ]} cost="Rs.1,500–Rs.2,500" />
                <DayCard day="Day 2–3" title="Havelock Island — Radhanagar + Snorkeling"
                  items={[
                    "Morning ferry to Havelock (6am departure, book Makruzz Rs.1,200 or government ferry Rs.400). Arrive 7:30–9am.",
                    "Check in to a budget beach resort near Beach No. 5 or Beach No. 7 — Rs.1,200–Rs.2,500/night.",
                    "Day 2 afternoon: Radhanagar Beach (Beach No. 7) — Asia's Best Beach. 14km from jetty (auto Rs.200 shared). The water is turquoise, the sand is white, there are no beach vendors, no chairs for hire, no shacks. Just the beach. Arrive by 4pm for the sunset — extraordinary.",
                    "Day 3: Elephant Beach — best snorkeling in Andaman. Glass-bottom boat from jetty Rs.350/person return, or 45-min forest trek (free). Coral gardens, colourful fish, sea turtles spotted regularly. Snorkel rental Rs.150.",
                    "Day 3 sunset: Kalapathar Beach — rocky, dramatic, very photogenic. Auto Rs.150.",
                  ]} cost="Rs.2,000–Rs.3,500/day" />
                <DayCard day="Day 4" title="Neil Island — Natural Bridge + Cycling"
                  items={[
                    "Ferry Havelock → Neil Island (1hr, Rs.800). Check in to a beach guesthouse (Rs.900–Rs.1,800/night).",
                    "Rent a bicycle (Rs.100–Rs.150/day) — Neil Island is small enough to cycle everywhere.",
                    "Natural Bridge — coral rock arch formed naturally over the sea. Best visited at low tide. Free. The most unique geological sight in Andaman.",
                    "Bharatpur Beach — calm, shallow, excellent for snorkeling without equipment (bring your own or rent Rs.150). Free entry.",
                    "Laxmanpur Beach at sunset — the best sunset beach in Neil. Walk the length alone as the sky turns orange.",
                  ]} cost="Rs.1,500–Rs.2,500" />
                <DayCard day="Day 5" title="Return to Port Blair + Depart"
                  items={[
                    "Morning ferry Neil → Port Blair (1.5hrs, Rs.1,000). Arrive 9–10am.",
                    "If flight is afternoon: visit Ross Island (ferry Rs.250 return, 20-min ride) — abandoned British administrative centre, overgrown with roots, deer roam freely. Eerie and beautiful.",
                    "Aberdeen Bazaar for last-minute shopping: shells, pearls, Andaman wood crafts. Fixed price at government emporiums.",
                    "Airport transfer: auto Rs.200–Rs.300. Allow 2 hours before departure.",
                  ]} cost="Rs.1,500–Rs.2,500" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center mt-2">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 5-Day Budget · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.18,000–Rs.28,000 per person including flights from Chennai</span>
                </div>
              </div>
            )}

            {/* PLAN B — COUPLE */}
            {activeTab === "B" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl mb-6">
                  <span className="text-2xl">💑</span>
                  <div><p className="text-sm font-medium text-teal-800">Couple Plan — Rs.45,000–Rs.75,000 for two</p><p className="text-xs text-teal-600 font-light">Beachfront resort · Private water activities · Sunset dinners</p></div>
                </div>
                <DayCard day="Day 1" title="Port Blair — Arrive in Style"
                  items={[
                    "Stay at Sinclairs Bayview or Fortune Resort Bay Island (Rs.4,000–Rs.8,000/night) — sea-view rooms, pool, Port Blair harbour view.",
                    "Cellular Jail at 4pm + Sound & Light Show at 7:15pm. Book dinner at Anju-Coco Resto after — best seafood in Port Blair (Rs.1,500–Rs.2,500 for two).",
                    "WHY start with Port Blair: understanding the Cellular Jail together gives the rest of the trip more meaning — you&apos;re visiting an archipelago that was once India&apos;s most feared exile colony.",
                  ]} cost="Rs.6,000–Rs.10,000 for two" />
                <DayCard day="Day 2–4" title="Havelock — Radhanagar + Diving"
                  items={[
                    "Makruzz ferry 6am (Rs.2,400 for two). Stay at Barefoot at Havelock or Symphony Palms (Rs.5,000–Rs.12,000/night) — beachfront cottages with ocean view.",
                    "Day 2: Radhanagar Beach at 5:30am — arrive before anyone else. The sunrise on an empty beach is extraordinary. Stay until 10am when it gets busier.",
                    "Day 2 evening: private sunset cruise (Rs.2,500–Rs.4,000 for two) — arranged through your resort. Champagne, sunset over the Indian Ocean, dolphins occasionally visible.",
                    "Day 3: Couple&apos;s scuba diving at Nemo Reef or Aquarium — PADI certified dive centres offer intro dives (Rs.3,500–Rs.5,000/person). Underwater coral gardens with sea turtles and reef sharks.",
                    "Day 4: Elephant Beach by private boat (Rs.1,500–Rs.2,000 for two). Pack a lunch from your resort. Have the beach to yourselves until 11am.",
                  ]} cost="Rs.10,000–Rs.18,000 for two per day" />
                <DayCard day="Day 5" title="Neil Island + Sunset + Return"
                  items={[
                    "Ferry Havelock → Neil (Rs.1,600 for two). Day trip or overnight at Pearl Park Beach Resort (Rs.4,000–Rs.7,000/night).",
                    "Natural Bridge and Laxmanpur Beach — cycle together (Rs.200 for two bikes). The quiet of Neil Island after Havelock is striking.",
                    "Sunset at Laxmanpur — the sky turns orange behind the coral rocks. One of Andaman&apos;s most romantic moments.",
                    "Return Port Blair → depart. Or stay one extra night in Neil.",
                  ]} cost="Rs.6,000–Rs.10,000 for two" />
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center mt-2">
                  <span className="text-xs text-teal-700 uppercase tracking-wide">Total 5-Day Couple Cost · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.45,000–Rs.75,000 for two including beachfront stays + all activities</span>
                </div>
              </div>
            )}

            {/* PLAN C — ADVENTURE */}
            {activeTab === "C" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">🤿</span>
                  <div><p className="text-sm font-medium text-blue-800">Adventure Plan — Diving + Snorkeling + Trekking</p><p className="text-xs text-blue-600 font-light">Best dive sites in India · Mangrove treks · Sea kayaking</p></div>
                </div>
                <DayCard day="Day 1" title="Port Blair — Arrive + Dive Centre"
                  items={[
                    "Register with a dive centre in Port Blair or pre-book Havelock: Barefoot Scuba, Dive India or Ocean Tribe are the best-rated.",
                    "If already PADI certified: book a 2-dive trip to North Bay Island (Port Blair) as a warm-up — Rs.2,500–Rs.3,500.",
                    "Cellular Jail evening. Early night — diving starts at 6am.",
                  ]} cost="Rs.3,000–Rs.5,000" />
                <DayCard day="Day 2–4" title="Havelock — Dive Havelock's Best Sites"
                  items={[
                    "Havelock has India&apos;s best dive sites. Top sites: Nemo Reef (clownfish, anemones), The Wall (coral walls, barracuda), Mac Point (manta rays), Aquarium (reef sharks, turtles), Johnny&apos;s Gorge (advanced, 30m).",
                    "Day 2–3: 2 dives per day (Rs.3,000–Rs.5,000/day including equipment). Morning dives have best visibility.",
                    "Day 3 afternoon: Elephant Beach trek (45-min forest trail) then snorkel the reef — different from diving, equally beautiful.",
                    "Day 4: Sea kayaking around Havelock coastline (Rs.800–Rs.1,500 for 3hrs). Mangrove creek at dusk is extraordinary.",
                    "Non-divers: Glass-bottom boat at Elephant Beach gives the same view without diving.",
                  ]} cost="Rs.5,000–Rs.9,000/day (diving)" />
                <DayCard day="Day 5" title="Neil Island — Snorkel + Cycle"
                  items={[
                    "Neil Island: Bharatpur Beach for morning snorkeling — shallow coral garden, excellent for free-divers.",
                    "Cycle all of Neil Island (15km circuit, 2hrs). Stop at every beach — Sitapur, Laxmanpur, Natural Bridge.",
                    "Evening: night snorkeling at Bharatpur if your operator offers it (Rs.800–Rs.1,200) — bioluminescent plankton visible in dark water. One of India&apos;s most extraordinary natural experiences.",
                  ]} cost="Rs.2,000–Rs.4,500" />
              </div>
            )}

            {/* PLAN D — FAMILY */}
            {activeTab === "D" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl mb-6">
                  <span className="text-2xl">👨‍👩‍👧</span>
                  <div><p className="text-sm font-medium text-green-800">Family Plan — Rs.55,000–Rs.85,000 for four</p><p className="text-xs text-green-600 font-light">Child-friendly beaches · Glass-bottom boats · Island cycling</p></div>
                </div>
                <DayCard day="Day 1" title="Port Blair — History + Beach"
                  items={[
                    "Cellular Jail — children find this fascinating once they understand what happened here. The Sound & Light Show is a recommended evening activity for families.",
                    "North Bay Island ferry (Rs.250/person return) — children love the glass-bottom boat ride to see coral without getting wet.",
                    "Corbyn's Cove — calm, small beach, safe for children to swim.",
                  ]} cost="Rs.5,000–Rs.8,000 for family" />
                <DayCard day="Day 2–3" title="Havelock — Radhanagar + Elephant Beach"
                  items={[
                    "Stay at a family resort near Beach No. 5 — Havelock Island Beach Resort or Pristine Beach Resort (Rs.5,000–Rs.9,000/night for family rooms).",
                    "Radhanagar Beach: children absolutely love this — the water is calm near the shore, shallow for 50m, and the sand is soft. The safest swimming beach in Andaman.",
                    "Elephant Beach by glass-bottom boat (Rs.350/person) — children are delighted by the fish and coral. Shallow snorkeling area is safe for young children with life jackets.",
                    "Evening beach activities: sandcastle building, beach cricket, collecting shells.",
                  ]} cost="Rs.7,000–Rs.12,000 for family per day" />
                <DayCard day="Day 4–5" title="Neil Island — Cycle + Natural Bridge"
                  items={[
                    "Neil Island is perfect for families — small, flat, safe, no traffic. Rent cycles including children&apos;s bikes (Rs.100–Rs.150 each).",
                    "Natural Bridge: children love climbing the coral rocks. Go at low tide.",
                    "Bharatpur Beach: shallow water, clear, no currents — best swimming beach in Neil for children.",
                    "Day 5: Return Port Blair. If time before flight: Samudrika Marine Museum (Rs.20) — exhibits on Andaman marine life, children enjoy the aquarium section.",
                  ]} cost="Rs.5,000–Rs.9,000 for family per day" />
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mt-2">
                  <span className="text-xs text-green-700 uppercase tracking-wide">Total 5-Day Family Cost · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.55,000–Rs.85,000 for four including flights from Chennai</span>
                </div>
              </div>
            )}
          </section>

          {/* DIVING GUIDE */}
          <section id="diving" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🤿 Diving & Snorkeling Guide</h2>
            <p className="text-sm text-muted font-light mb-6">The Andamans have the best scuba diving in India — better visibility, more marine life, and better reef health than anywhere else on the Indian coast.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: "For non-divers", icon: "🐠", content: "Elephant Beach glass-bottom boat (Rs.350) gives you the coral view without diving. Bharatpur Beach Neil Island has shallow snorkeling with just a mask (Rs.150 rental). North Bay Island near Port Blair is excellent for beginners." },
                { title: "First-time divers (intro dive)", icon: "🌊", content: "PADI intro dive at Barefoot Scuba or Dive India — Rs.3,500–Rs.5,000 including equipment, 2-3hrs total, 45-min underwater. No certification needed. Age 10+. The most popular activity in Havelock." },
                { title: "Certified divers", icon: "🦈", content: "2-dive day trip: Rs.3,000–Rs.5,000 including equipment. Best sites: Nemo Reef, The Wall, Mac Point (manta rays seasonally), Johnny&apos;s Gorge (advanced). November–April best visibility (15–30m)." },
                { title: "Best operators", icon: "⭐", content: "Barefoot Scuba (Havelock) — most reputable. Dive India (Havelock) — large operation, good for beginners. Ocean Tribe (Port Blair + Havelock). Always check PADI certification of instructors." },
              ].map((item) => (
                <div key={item.title} className="bg-parchment rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center gap-2 mb-2"><span className="text-xl">{item.icon}</span><p className="font-medium text-sm text-ink">{item.title}</p></div>
                  <p className="text-xs text-muted font-light leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BUDGET TABLE */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead><tr className="bg-parchment">
                  <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                  <th className="p-3.5 text-xs font-medium text-amber-700 text-center">💰 Budget</th>
                  <th className="p-3.5 text-xs font-medium text-teal-700 text-center">💑 Couple</th>
                  <th className="p-3.5 text-xs font-medium text-blue-700 text-center">🤿 Adventure</th>
                  <th className="p-3.5 text-xs font-medium text-green-700 text-center">👨‍👩‍👧 Family</th>
                </tr></thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["✈️ Flights (Chennai return)", "₹5,000–₹9,000", "₹10,000–₹18,000", "₹5,000–₹9,000", "₹20,000–₹36,000"],
                    ["🏨 Accommodation (5N)", "₹4,500–₹7,500", "₹20,000–₹45,000", "₹5,000–₹9,000", "₹20,000–₹35,000"],
                    ["⛴️ Ferries", "₹2,500–₹3,500", "₹5,000–₹7,000", "₹2,500–₹3,500", "₹8,000–₹12,000"],
                    ["🍽 Food", "₹2,000–₹3,500", "₹5,000–₹9,000", "₹2,500–₹4,000", "₹6,000–₹10,000"],
                    ["🤿 Activities", "₹2,000–₹4,500", "₹5,000–₹10,000", "₹12,000–₹22,000", "₹5,000–₹9,000"],
                    ["TOTAL per person", "₹18,000–₹28,000", "₹22,500–₹37,500", "₹27,000–₹47,500", "₹14,750–₹25,500"],
                  ].map(([cat,...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v,i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">Flights from Delhi or Mumbai cost Rs.4,000–Rs.8,000 more. Cheapest flights are from Chennai (1hr 15min direct).</p>
          </section>

          <AffiliateBlock
            destination="Andaman Islands Havelock"
            hotels={[
              { name: "Barefoot at Havelock", type: "Eco Resort · Havelock Island", price: "From ₹6,000/night", rating: "5", badge: "Best on island", url: "https://www.booking.com/hotel/in/barefoot-at-havelock.html?aid=YOUR_AFFILIATE_ID" },
              { name: "Symphony Palms", type: "Beach Resort · Havelock", price: "From ₹4,500/night", rating: "4", badge: "Couple pick", url: "https://www.booking.com/hotel/in/symphony-palms-havelock.html?aid=YOUR_AFFILIATE_ID" },
              { name: "Pearl Park Beach Resort", type: "Beach · Neil Island", price: "From ₹3,500/night", rating: "4", badge: "Best on Neil", url: "https://www.booking.com/hotel/in/pearl-park-beach-resort-neil-island.html?aid=YOUR_AFFILIATE_ID" },
              { name: "Fortune Resort Bay Island", type: "4★ · Port Blair", price: "From ₹5,000/night", rating: "4", badge: "Best in PB", url: "https://www.booking.com/hotel/in/fortune-resort-bay-island-port-blair.html?aid=YOUR_AFFILIATE_ID" },
            ]}
            activities={[
              { name: "Havelock Island Scuba Diving",         duration: "Half day", price: "From ₹3,500/person", badge: "Must do",    url: `https://www.getyourguide.com/havelock-island-l97872/?partner_id=PSZA5UI` },
              { name: "Radhanagar Beach Sunset Tour",          duration: "3 hours", price: "From ₹800/person",   badge: "Top rated",  url: `https://www.getyourguide.com/port-blair-l97861/?partner_id=PSZA5UI` },
              { name: "Elephant Beach Snorkeling + Boat",      duration: "3 hours", price: "From ₹1,200/person",  url: `https://www.getyourguide.com/havelock-island-l97872/?partner_id=PSZA5UI` },
              { name: "Cellular Jail Sound & Light Show",      duration: "1.5 hrs", price: "From ₹100/person",    url: `https://www.getyourguide.com/port-blair-l97861/?partner_id=PSZA5UI` },
              { name: "Ross Island + North Bay Day Trip",      duration: "Full day", price: "From ₹600/person",    url: `https://www.getyourguide.com/port-blair-l97861/?partner_id=PSZA5UI` },
            ]}
          />

          <DestinationGallery
            title="Andaman Islands — Must-See Places"
            subtitle="India's most beautiful islands — click to explore."
            spots={[
              { name: "Radhanagar Beach", query: "radhanagar beach havelock andaman turquoise water white sand", desc: "Asia's Best Beach — 2km of white sand, turquoise water, forest backdrop. Completely undeveloped. Arrive at 6am for sunrise on an empty beach." },
              { name: "Elephant Beach Coral", query: "elephant beach andaman snorkeling coral reef fish", desc: "The best snorkeling in Andaman — glass-clear water, coral gardens, sea turtles. Accessible by boat (20min) or forest trek (45min)." },
              { name: "Cellular Jail", query: "cellular jail port blair andaman colonial prison india", desc: "India's most feared colonial prison — where freedom fighters were exiled. The Sound & Light Show brings the history to life." },
              { name: "Neil Island", query: "neil island andaman natural bridge coral beach sunset", desc: "The quiet sibling — smaller, slower, less touristy. Cycle the whole island in an afternoon, end at Laxmanpur Beach for the best sunset." },
              { name: "Havelock Sunset", query: "havelock island andaman sunset sea beach evening", desc: "Havelock Island at golden hour — the Bay of Bengal glows orange and the beach empties out. One of India's most beautiful evenings." },
            ]}
          />

          {/* MISTAKES */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { icon: "⛴️", title: "Not booking ferries in advance", desc: "The single biggest mistake. Makruzz and Green Ocean sell out during peak season (Dec–Jan). Missing a ferry means a 24-hour wait or a very expensive private speedboat. Book at makruzz.com before you leave home.", color: "bg-white border-parchment-2" },
                { icon: "📅", title: "Not leaving a buffer day before return flight", desc: "Ferry cancellations happen — weather, maintenance, low season. Always book your return flight one day after your planned return to Port Blair. Getting stranded on Havelock with a cancelled flight is a nightmare.", color: "bg-white border-parchment-2" },
                { icon: "🌧️", title: "Visiting June–September", desc: "Monsoon season — rough seas, frequent ferry cancellations, poor visibility for diving and snorkeling. October to May only. December–February is peak but March–April is the sweet spot: fewer crowds, good weather, lower prices.", color: "bg-white border-parchment-2" },
                { icon: "🐢", title: "Touching or standing on coral", desc: "The coral reefs in Andaman are some of the healthiest in India. Standing on coral kills it instantly. Always wear fins while snorkeling, never touch anything underwater, and choose operators who brief you on this.", color: "bg-white border-parchment-2" },
                { icon: "💸", title: "Flying from Delhi or Mumbai directly", desc: "Direct flights from Delhi to Port Blair cost Rs.8,000–Rs.18,000. Instead: fly Chennai to Port Blair (Rs.2,500–Rs.5,000, 1hr 15min). Add a one-night Chennai stopover if needed — saves Rs.5,000–Rs.10,000 per person.", color: "bg-white border-parchment-2" },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-4 border ${m.color}`}>
                  <div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{m.icon}</span><div><p className="font-medium text-sm text-ink mb-1">❌ {m.title}</p><p className="text-xs text-muted font-light leading-relaxed">{m.desc}</p></div></div>
                </div>
              ))}
            </div>
          </section>

          {/* PRO TIPS */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🌅", title: "Radhanagar Beach at 5:30am", desc: "The beach opens at sunrise. Arrive before anyone else and you have 2km of Asia's best beach to yourself for 2 hours. By 9am the day-trippers arrive.", color: "bg-teal-50 border-teal-200" },
                { icon: "🌊", title: "November–April for best diving visibility", desc: "15–30m visibility during this period. Outside this window, monsoon runoff reduces visibility to 5–8m. Book diving trips for morning — afternoon visibility drops.", color: "bg-blue-50 border-blue-200" },
                { icon: "🚲", title: "Neil Island is best explored by bicycle", desc: "Rs.100–Rs.150/day. The entire island circuit is 15km — do it in 2hrs, stop at every beach. No one takes taxis here and you shouldn't either.", color: "bg-green-50 border-green-200" },
                { icon: "🐬", title: "Dolphins near the ferry routes", desc: "Spinner dolphins frequently visible from the Havelock ferry — stand at the bow and watch the water. Free. More reliable than any 'dolphin spotting tour'.", color: "bg-amber-50 border-amber-200" },
                { icon: "📶", title: "BSNL has the best network in Andaman", desc: "Airtel and Jio are patchy on the outer islands. Get a BSNL SIM (Rs.149) at Port Blair airport. Havelock has decent signal near the market; Neil Island is mostly offline.", color: "bg-purple-50 border-purple-200" },
                { icon: "🦀", title: "Try the mud crab at Havelock", desc: "The local mud crab (Rs.800–Rs.1,500 per crab) is the best seafood in Andaman. Fat Rock Cafe and Anju-Coco prepare it best. Order in advance — takes 45 minutes to prepare.", color: "bg-red-50 border-red-200" },
              ].map((t) => (
                <div key={t.title} className={`rounded-xl p-4 border ${t.color}`}>
                  <div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{t.icon}</span><div><p className="font-medium text-sm text-ink mb-1">{t.title}</p><p className="text-xs text-muted font-light leading-relaxed">{t.desc}</p></div></div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want Your Andaman Trip Planned?</h2>
            <p className="text-sm text-white/55 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">Tell us your dates, group and budget — we&apos;ll send a personalised Andaman itinerary with ferry bookings and hotel recommendations within 24 hours. Free.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Andaman Trip →</button>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Andaman?", a: "5 days is ideal — 1 day Port Blair, 2 days Havelock, 1 day Neil Island, 1 buffer day. 7 days lets you add Baratang Island (limestone caves, mangroves) or Long Island. 3 days is the minimum but very rushed." },
                { q: "What is the best time to visit Andaman?", a: "October to May. November to February is peak season (best weather, calm seas). March to May is off-peak — fewer crowds, lower prices, good weather. Avoid June to September (monsoon, ferry cancellations, poor visibility)." },
                { q: "How do I get to Andaman?", a: "Fly to Port Blair (IXZ). Cheapest from Chennai (1hr 15min, Rs.2,500–Rs.5,000). Also direct from Kolkata, Delhi, Bangalore, Mumbai. Book 4–6 weeks ahead for best prices." },
                { q: "Is Radhanagar Beach really Asia's best beach?", a: "Time magazine named it Asia's Best Beach in 2004. It's a 2km crescent of white sand with turquoise water and a forest backdrop — completely undeveloped with no vendors or beach chairs. It genuinely deserves the title." },
                { q: "Do I need any permits for Andaman?", a: "Indian nationals: no permit needed for Port Blair, Havelock, Neil Island. Baratang requires a permit (free, arranged at Port Blair jetty). Foreign nationals: no permit for main tourist islands; some restricted islands are off-limits to all." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More India Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kerala 5 Days — Backwaters", href: "/blog/kerala-5-days" },
                { label: "Goa in 3 Days — Complete Guide", href: "/blog/goa-3-days" },
                { label: "Kashmir 6 Days — Heaven on Earth", href: "/blog/kashmir-6-days" },
                { label: "Golden Triangle 7 Days", href: "/blog/golden-triangle-7-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
