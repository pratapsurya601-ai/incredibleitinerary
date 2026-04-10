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

const TRIVANDRUM_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "sights",    emoji: "🌴", label: "Top Sights Guide" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Trivandrum 2-Day Guide&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Trivandrum in 2 Days guide&url=${pageUrl}` },
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
export default function TrivandrumClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹4k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹4k–10k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TRIVANDRUM_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Trivandrum" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="kovalam lighthouse beach kerala sunset crescent bay"
            fallback="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=85"
            alt="Kovalam Lighthouse Beach Kerala crescent bay sunset"
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
              <span className="text-white/70">Trivandrum 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Heritage & Beach
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Trivandrum in 2 Days: Padmanabhaswamy Temple,
                <em className="italic text-gold-light"> Kovalam &amp; Kerala&apos;s Capital</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The world&apos;s richest temple with a vault that has been sealed since 1872. A crescent beach with a lighthouse. 122 hand-carved wooden horses on a forgotten palace. Most Kerala travellers skip Trivandrum. They shouldn&apos;t.
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
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹2,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Vault B of Padmanabhaswamy Temple has been sealed since 1872. The Supreme Court, in 2011, opened every other vault and found $20 billion in gold and jewels. They left Vault B untouched. It sits there now, beneath the gopuram, holding whatever a 19th-century Travancore king decided was too sacred to ever show the world.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Trivandrum (Thiruvananthapuram — the city of Anantha the serpent god) is Kerala&apos;s capital and one of its most undervisited destinations. Most tourists fly through the airport en route to Kovalam and move on to Alleppey. Staying 2 days gives you the world&apos;s richest temple (exterior and story accessible to all), the extraordinary Kuthiramalika Palace, Padmanabhapuram Palace (the best traditional Kerala architecture in existence), Kovalam&apos;s three beaches, and a Kerala sadya on a banana leaf. This is the guide.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌿" label="Best Season" value="Oct–Mar" />
            <StatCard icon="🚗" label="Distance from Kochi" value="220 km" />
            <StatCard icon="💰" label="Famous For" value="Padmanabhaswamy Temple vault" />
            <StatCard icon="⭐" label="Rating" value="4.5★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Trivandrum is pleasant October–March. Kovalam Beach is best visited outside monsoon.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Mar", emoji: "✅", title: "Best Season", desc: "Cool, clear, and perfect for sightseeing (22–30°C). Kovalam beach is calm and swimmable. October–December has the best light for photography. December–January is the peak tourist season — book accommodation 2–3 weeks ahead.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Apr–May", emoji: "☀️", title: "Hot Pre-Monsoon", desc: "Hot (30–36°C) but manageable. Fewer crowds and lower prices. Temple visits are fine. Kovalam gets warmer sea breezes — surprisingly enjoyable for beach time. Not ideal for long outdoor walks.", color: "bg-amber-50 border-amber-200" },
                { season: "Jun–Sep", emoji: "🌧️", title: "Monsoon", desc: "Heavy rain June–September. The Kerala monsoon is dramatic but disrupts beach visits (rough sea, red flag conditions). Temple visits and museum days are fine. Kovalam ayurveda centres recommend monsoon for treatments — humidity aids oil absorption.", color: "bg-red-50 border-red-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 2-day Trivandrum route, two comfort levels. The main sights are inexpensive or free — the difference is accommodation and pace.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Guesthouse near Museum area (₹700–1200)</td><td className="py-2.5 px-4">Kovalam beachfront hotel (₹3000–8000)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Local bus + auto-rickshaw</td><td className="py-2.5 px-4">Private taxi for Padmanabhapuram day trip</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Extras</td><td className="py-2.5 px-4">Kerala sadya at local restaurant</td><td className="py-2.5 px-4">Cooking class + Ayurvedic treatment</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (2 days)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹4,000</td><td className="py-2.5 px-4 font-medium text-teal">₹4,000–10,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Padmanabhaswamy Temple + Kuthiramalika Palace + Napier Museum → Kovalam beach sunset. Day 2: Kovalam Lighthouse + Padmanabhapuram Palace day trip + Kerala sadya.
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
                title="Padmanabhaswamy Temple + Museums + Kovalam Sunset"
                items={[
                  "Fly to Trivandrum International (TRV — Kerala's southernmost international airport) or arrive by overnight train. The Rajdhani Express from Delhi (40 hrs), Kerala Express, or the Thiruvananthapuram Mail from Chennai (8 hrs) all serve the city.",
                  activeTab === "A"
                    ? "Check in to a guesthouse near the Museum area (₹700–1,200/night). The Museum area puts you 2 km from the temple and walkable distance from the Napier Museum and Zoo."
                    : "Check in to a hotel in Kovalam (₹3,000–8,000) — the beachfront hotels here are exceptional value by international standards. Plan your city sightseeing from Kovalam using a private taxi (₹1,500–2,000 for the full day).",
                  "Padmanabhaswamy Temple: the world's richest religious institution (Vault A alone: $10+ billion in gold and jewels; total estimated at $20+ billion). Only Hindus enter the inner sanctum. All visitors: photograph the extraordinary eastern gopuram (tower), visit the temple museum opposite (open to all, exhibits on the temple's treasure and history), and walk the East Fort area.",
                  "Kuthiramalika Palace (adjacent to Padmanabhaswamy, 10-minute walk): the Horse Palace. Built by Maharaja Swathi Thirunal in the 1840s, this palace has 122 wooden horses (kuthira = horse) carved along its eaves — each different. Inside: crystal thrones, Belgian crystal chandeliers, ivory beds, and paintings by Raja Ravi Varma. Entry ₹30. Closes at 1 PM for lunch — time your visit accordingly (open 8:30 AM–12:30 PM, 3–5 PM).",
                  "Napier Museum (10-minute walk, Indo-Saracenic architecture): excellent natural history and art collection. Free on Mondays. The building itself — designed by R. F. Chisholm in 1880 — is as interesting as the exhibits. Allow 1 hour.",
                  "Evening: taxi to Kovalam (14 km, ₹300–400). Lighthouse Beach at sunset — climb the lighthouse (₹30 entry, 7 AM–5 PM) for a 360° view of the three crescent beaches. The sunset from the lighthouse top is one of south Kerala's finest viewpoints.",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹5,000–8,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Kovalam Beaches + Padmanabhapuram Palace + Kerala Sadya"
                items={[
                  "Morning at Kovalam: Lighthouse Beach (most popular), Hawa Beach (middle, slightly quieter), Samudra Beach (northernmost, calmest, best for swimming). Arrive before 9 AM to have the beach mostly to yourself — it fills up by 10 AM in peak season.",
                  "Vizhinjam Rock Cut Temple (3 km from Kovalam, 8th-century Pandya-era rock-cut cave temple of Shiva with an unfinished Pallava-style gopuram). One of Kerala's oldest temples, almost entirely ignored by tourists. The fishermen's harbour adjacent is also worth a walk.",
                  activeTab === "A"
                    ? "Padmanabhapuram Palace (55 km, 1 hr by bus from Trivandrum's Thampanoor Bus Station or ₹700–900 by shared taxi). The former Travancore capital — 400 years old, 100 rooms across 17 buildings, the finest traditional Kerala wooden architecture in existence. Entry ₹35 Indians. Open Tuesday–Sunday, 9 AM–5 PM."
                    : "Padmanabhapuram Palace (55 km) by private taxi (₹1,200–1,500 return with waiting). The private taxi allows you to stop at Kalkulam Church (where Rani Lakshmi Bai briefly lived) and the Suchindram Temple (36 km from Trivandrum, extraordinary multi-faith temple with 1,000-pillar mandapam).",
                  "Padmanabhapuram highlights: the queen mother's bedchamber (medicinal herbs embedded in the floor during construction), the hall of audience (audience chamber), the 400-year-old Chinese-influenced roof panels carved from rosewood, and the secret underground passage connecting the palace to Padmanabhaswamy Temple in Trivandrum.",
                  "Return to Trivandrum by 4 PM. Kerala sadya at Hotel Ariya Nivaas near East Fort (pure vegetarian, ₹150–200, available for lunch only on banana leaf — 20+ items, unlimited refills). The sadya is Kerala's ceremonial meal: rice, sambar, avial, thoran, pickle, papadum, and payasam (sweet). Eat with the right hand only.",
                  activeTab === "B"
                    ? "Comfortable evening: Ayurvedic treatment at one of Kovalam's established centres (60-min Abhyanga massage, ₹800–1,500 at reputable clinics like Green Health Ayurveda or Ponmudi Ayurvedic Centre). Or a cooking class in Kerala cuisine (₹1,500–2,500, 2–3 hrs, you cook and eat your sadya)."
                    : "Depart from Trivandrum International Airport or by overnight train to Kochi (4 hrs) or Bangalore (13 hrs).",
                ]}
                cost={activeTab === "A" ? "₹2,500" : "₹5,000–9,000"}
              />
            </div>
          </section>

          {/* ── TOP SIGHTS GUIDE ── */}
          <section id="sights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🌴 Top Sights Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Trivandrum&apos;s best sights are concentrated and walkable in the city core, with Kovalam and Padmanabhapuram as worthwhile excursions.
            </p>
            <div className="space-y-4">
              {[
                { rank: "Padmanabhaswamy Temple", icon: "🛕", where: "East Fort, Trivandrum city centre", price: "Free (non-Hindus: exterior only)", note: "World's richest religious institution. The eastern gopuram is extraordinary even from outside. Vault B — sealed since 1872 — reportedly contains treasure too sacred to inventory. Even non-Hindus can experience the atmosphere of the temple's daily life from the East Fort area. The 6:30 PM aarti (Deeparaadhana) is audible from the east gate.", color: "bg-amber-50 border-amber-200" },
                { rank: "Kuthiramalika Palace", icon: "🐴", where: "Adjacent to Padmanabhaswamy", price: "₹30 entry (open 8:30 AM–12:30 PM, 3–5 PM)", note: "The Horse Palace — 122 wooden horses, each carved differently, support the eaves. Crystal thrones, ivory furniture, Raja Ravi Varma paintings. One of the finest examples of Kerala traditional palace architecture. Almost empty of tourists. More interesting than many more famous Kerala sights.", color: "bg-amber-50 border-amber-200" },
                { rank: "Padmanabhapuram Palace", icon: "🏰", where: "55 km from Trivandrum (Tamil Nadu border)", price: "₹35 Indians (Tue–Sun, 9 AM–5 PM)", note: "The former Travancore capital — 100 rooms, 17 buildings, 400 years old. Queen mother's medicinal herb chamber, the rosewood ceiling panels, the underground passage to Trivandrum. The finest traditional Kerala wooden palace architecture in existence. Essential for architecture and history enthusiasts.", color: "bg-teal-50 border-teal-200" },
                { rank: "Kovalam Beaches", icon: "🏖️", where: "14 km from Trivandrum", price: "Free (lighthouse ₹30)", note: "Three crescent beaches in one bay: Lighthouse (most popular), Hawa (quieter), Samudra (calmest). Lighthouse climb gives 360° views. Ayurveda clinics, restaurants, and watersports on Lighthouse Beach. Arrive before 9 AM for peace. October–March is the best season.", color: "bg-teal-50 border-teal-200" },
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

          {/* ── SIGHTS IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="padmanabhapuram palace kerala traditional wooden architecture interior"
              fallback="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=900&q=80"
              alt="Padmanabhapuram Palace traditional Kerala wooden architecture"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Padmanabhapuram Palace: 400 years old, 100 rooms, the finest traditional Kerala wooden architecture in India. Entry ₹35. Most Kerala tourists never visit. All of them should.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹4,000", color: "bg-amber-50 border-amber-200",
                  items: [["Accommodation (2 nights)", "₹1,400–2,400"], ["Local transport (auto/bus)", "₹500–800"], ["Entry fees", "₹100–200"], ["Food (2 days)", "₹600–1,000"], ["Padmanabhapuram taxi (shared)", "₹350–500"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹4,000–10,000", color: "bg-teal-50 border-teal-200",
                  items: [["Kovalam beachfront hotel (2 nights)", "₹6,000–16,000"], ["Private taxi (2 days)", "₹2,500–4,000"], ["Ayurvedic treatment", "₹800–3,000"], ["Cooking class", "₹1,500–2,500"], ["Entry fees + dining", "₹500–1,000"]] },
              ].map((b) => (
                <div key={b.plan} className={`rounded-xl border p-5 ${b.color}`}>
                  <div className="text-center mb-4">
                    <span className="text-2xl">{b.emoji}</span>
                    <p className="font-serif text-base text-ink mt-1">{b.plan}</p>
                    <p className="font-serif text-xl text-ink font-medium mt-1">{b.total}</p>
                    <p className="text-xs text-muted uppercase tracking-wider">per person (2 days)</p>
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
              * Padmanabhaswamy Temple and Kovalam beaches are free entry. Kuthiramalika ₹30, Napier Museum free on Mondays, Padmanabhapuram ₹35. Does not include flights or trains to/from Trivandrum.
            </p>
          </section>

          <AffiliateBlock destination="Trivandrum" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Skipping Trivandrum entirely for the beach", desc: "Most tourists fly to Trivandrum airport and immediately head to Kovalam without spending any time in the city. Padmanabhaswamy Temple (even the exterior), Kuthiramalika Palace, and the Napier Museum are extraordinary. Give the city half a day at minimum.", icon: "🏙️" },
                { title: "Missing Kuthiramalika Palace", desc: "Adjacent to Padmanabhaswamy and 5 minutes' walk from the city centre, this palace is almost unknown outside Kerala. 122 carved horses, crystal thrones, Raja Ravi Varma paintings, ₹30 entry. It closes at 1 PM for lunch — plan your visit before 12:30 PM.", icon: "🐴" },
                { title: "Not doing the Padmanabhapuram day trip", desc: "55 km from Trivandrum, 400 years old, the finest Kerala wooden palace architecture in existence. Most Kerala visitors skip it entirely. If you have one extra day, this is where to spend it. Go with a private taxi — the shared buses are infrequent.", icon: "🏰" },
                { title: "Arriving at Kovalam Beach at 11 AM", desc: "Lighthouse Beach fills up by 10 AM in peak season. The lighthouse itself is open 7 AM–5 PM — go at 7:30 AM for empty beaches and golden morning light on the crescent bay.", icon: "🏖️" },
                { title: "Non-Hindus attempting to enter the Padmanabhaswamy inner sanctum", desc: "The inner temple is strictly Hindus-only and security is enforced. Non-Hindus should visit the exterior gopuram, the temple museum, and Kuthiramalika Palace — the treasury story and architectural detail are accessible to all.", icon: "🛕" },
                { title: "Skipping Kerala sadya for a restaurant meal", desc: "Trivandrum is the best city in Kerala to eat an authentic sadya — the ceremonial banana-leaf meal. Hotel Ariya Nivaas near East Fort serves it daily for lunch. ₹150–200, 20+ items, unlimited. Don't substitute this with a restaurant menu.", icon: "🍌" },
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
                { icon: "💰", title: "Padmanabhaswamy Temple Vault: The Mystery", desc: "In 2011, the Supreme Court ordered an inventory of the temple's vaults. Six vaults were opened — Vault A alone had $10+ billion. Vault B remains sealed, reportedly guarded by a Naga serpent ritual. This is not mythology: the discovered wealth made it officially the richest temple on earth.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏛️", title: "Kuthiramalika Palace: Underrated Gem", desc: "Adjacent to Padmanabhaswamy, this palace has 122 wooden horses supporting its eaves — each carved differently. The interior has paintings, royal artifacts, and crystal thrones. Entry ₹30. It's often missed by tourists focused on the main temple.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏖️", title: "Kovalam's Three Beaches", desc: "Lighthouse Beach (most popular, restaurants, parasailing), Hawa Beach (middle, slightly quieter), Samudra Beach (northernmost, calmest, best for swimming). All in a crescent bay 14 km from Trivandrum. Lighthouse Beach gets crowded October–March — arrive before 9 AM for peace.", color: "bg-teal-50 border-teal-200" },
                { icon: "🛕", title: "Can Non-Hindus Attend the Temple Aarti?", desc: "The evening Deeparaadhana at Padmanabhaswamy happens at 6:30 PM. Non-Hindus cannot enter the compound but can hear the bells and conch from outside the east gate. The atmosphere outside during the aarti — hundreds of devotees, temple lights, evening air — is moving.", color: "bg-teal-50 border-teal-200" },
                { icon: "🏡", title: "Padmanabhapuram Palace: Don't Skip", desc: "55 km from Trivandrum (1 hr), this 400-year-old wooden palace (17 buildings, 100 rooms) is the finest example of Kerala traditional architecture in existence. The queen mother's bedchamber, the hall of audience, and the carved rosewood roof panels are extraordinary. Open Tuesday–Sunday, ₹35 Indians.", color: "bg-rose-50 border-rose-200" },
                { icon: "🍌", title: "Kerala Sadya: Where to Eat", desc: "Kerala's ceremonial banana-leaf meal has 20+ items (rice, sambar, 4 curries, pickles, payasam). Best in Trivandrum: Hotel Ariya Nivaas (pure veg, ₹150–200). Available daily for lunch — served on banana leaf, unlimited refills. Traditionally eaten with the right hand.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and group — we&apos;ll send a personalised Trivandrum + south Kerala itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Trivandrum Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Can non-Hindus visit Padmanabhaswamy Temple?", a: "No — the inner temple is strictly restricted to Hindus only. Non-Hindus can photograph the temple's eastern gate and exterior gopuram. The Kuthiramalika Palace (adjacent, open to all) and the temple museum display the temple's history, architecture, and artifacts. The treasure vault story is available in the museum." },
                { q: "What is the Padmanabhaswamy Temple treasure?", a: "In 2011, Indian Supreme Court-mandated audit found 6 vaults containing gold coins, jewels, crowns, diamond necklaces, and ancient artifacts valued at over $20 billion — making it the richest religious institution on earth. The treasure accumulated over 500+ years of royal donations. Vault B remains sealed by tradition and has not been inventoried." },
                { q: "How far is Kovalam from Trivandrum?", a: "14 km (30–40 minutes) by road. Local bus from East Fort (₹15, 45 min). Auto: ₹300–400. Taxi: ₹500–700. Kovalam is best visited in the afternoon after morning sightseeing in Trivandrum city — the lighthouse is the best sunset spot." },
                { q: "Is Trivandrum worth visiting vs skipping for Alleppey or Kochi?", a: "Most Kerala visitors skip Trivandrum. But Padmanabhaswamy Temple (even for non-Hindus, the exterior and history are fascinating), Kuthiramalika Palace, and Padmanabhapuram Palace are genuinely exceptional. Add Kovalam Beach. 2 full days justifies the stop on a Kerala circuit." },
                { q: "What ayurveda treatments are available in Kovalam?", a: "Kovalam is Kerala's most established ayurveda destination. Options range from basic (60-min Abhyanga oil massage at beach-side clinics, ₹800–1,500) to comprehensive 7-21 day Panchakarma treatments at dedicated retreat centres. The Green Health Ayurveda Hospital and Pothys Ayurvedic Centres are reputable. Book in advance for multi-day treatments." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Trivandrum — Highlights"
            subtitle="The best of Trivandrum in photos."
            spots={[
              { name: "Trivandrum Landscape", query: "trivandrum india landscape scenic beautiful travel", desc: "The stunning landscapes of Trivandrum." },
              { name: "Trivandrum Temple", query: "trivandrum temple architecture heritage india", desc: "Historic temples and architecture in Trivandrum." },
              { name: "Trivandrum Street Scene", query: "trivandrum street market local culture india", desc: "Local life and culture in Trivandrum." },
              { name: "Trivandrum Nature", query: "trivandrum nature hills forest river india", desc: "Natural beauty around Trivandrum." },
              { name: "Trivandrum Sunset", query: "trivandrum sunset golden hour india travel", desc: "Trivandrum at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Continuing Your Kerala Journey?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kochi — 3 Days in Kerala's Culture Capital", href: "/blog/kochi-3-days" },
                { label: "Alleppey — 3 Days on the Backwaters", href: "/blog/alleppey-3-days" },
                { label: "Varkala — 2 Days at the Cliff Beach", href: "/blog/varkala-2-days" },
                { label: "Browse All Kerala Guides", href: "/#packages" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="trivandrum-2-days" />
          <RelatedGuides currentSlug="trivandrum-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
