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
import Breadcrumb from "@/components/blog/Breadcrumb";

const RAMESWARAM_TOC = [
  { id: "plans",      emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary",  emoji: "\uD83D\uDCC5", label: "Day-by-Day Itinerary" },
  { id: "highlights", emoji: "\uD83C\uDFDB\uFE0F", label: "Must-See Highlights" },
  { id: "budget",     emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "mistakes",   emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "\uD83D\uDCA1", label: "Pro Tips" },
  { id: "faq",        emoji: "❓", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Rameswaram 2-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Rameswaram in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
        <span className="text-muted text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">{"●"}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">{"\uD83D\uDCB0"}</span>
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

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function RameswaramClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under ₹4k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83D\uDE4F", label: "Pilgrimage", sub: "₹5k–12k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={RAMESWARAM_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Rameswaram" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="rameswaram pamban bridge sea tamil nadu india"
            fallback="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1600&q=85"
            alt="Pamban Bridge stretching across the turquoise sea at Rameswaram"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Rameswaram 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Pilgrimage & Coast
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Rameswaram in 2 Days: Temple Corridors to Pamban Bridge
                <em className="italic text-gold-light"> (Budget to Pilgrimage, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                2 complete plans with real timings, actual costs, Google Maps routes — covering India&apos;s longest temple corridor, a train that crosses the ocean, and a ghost town where two seas meet.
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
              <span>{"\uD83C\uDDEE\uD83C\uDDF3"} India</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDDD3"} 2 Days</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From ₹3,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Pamban Bridge over the sea is India&apos;s most dramatic railway crossing — the train literally crosses the ocean on a 100-year-old bridge. Stand at the railing and feel the salt spray. Most visitors rush through Rameswaram in half a day and miss everything that makes this island unforgettable. This guide makes sure you don&apos;t.
            </p>
          </blockquote>

          {/* ── PICK YOUR PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Pick Your Plan</h2>
            <p className="text-sm text-muted font-light mb-6">Two ways to experience Rameswaram — pick yours and jump straight to the itinerary.</p>
            <div className="grid grid-cols-2 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} {"→"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="2 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"₹3,500"} />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Oct – Apr" />
            <StatCard icon={"\uD83D\uDE82"} label="Nearest Station" value="Rameswaram" />
          </div>

          {/* ── MUST-SEE HIGHLIGHTS ── */}
          <section id="highlights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFDB\uFE0F"} Must-See Highlights</h2>
            <div className="space-y-4">
              {[
                { title: "Ramanathaswamy Temple", desc: "The temple corridor is the longest in any Indian temple — 1,212 pillars. Walk it at 5am when it’s empty and the sound of your footsteps echoes through 400 years of devotion. The 22 theerthams (sacred wells) inside the temple each have a different water temperature — pilgrims bathe in all 22.", emoji: "\uD83D\uDD49\uFE0F", color: "bg-amber-50 border-amber-200" },
                { title: "Pamban Bridge", desc: "India’s first sea bridge, over 100 years old and still carrying trains across the open ocean. The new parallel road bridge offers a stunning viewpoint. Watch the Rameswaram Express cross at sunset — the train appears to float on the water. Best viewed from the old road bridge approach.", emoji: "\uD83C\uDF09", color: "bg-teal-50 border-teal-200" },
                { title: "Dhanushkodi Ghost Town", desc: "Dhanushkodi is post-apocalyptic India — a town destroyed by a cyclone in 1964 and never rebuilt. The ruins in the sand where the Bay of Bengal meets the Indian Ocean are haunting and beautiful. The last 2km to land’s end is accessible only by jeep through the sand.", emoji: "\uD83C\uDFDA\uFE0F", color: "bg-rose-50 border-rose-200" },
                { title: "Agni Theertham Beach", desc: "The sacred beach right next to the temple where pilgrims take a holy dip before entering. Sunrise here is spectacular — the east-facing coast lights up in gold. Visit at 5:30am before the crowds arrive.", emoji: "\uD83C\uDF05", color: "bg-amber-50 border-amber-200" },
                { title: "Adam’s Bridge (Ram Setu) Viewpoint", desc: "The chain of limestone shoals stretching 48km toward Sri Lanka — visible from Dhanushkodi’s tip on clear days. Whether you see it as geology or mythology, standing at the edge of India looking toward Lanka is a powerful moment.", emoji: "\uD83C\uDF0A", color: "bg-teal-50 border-teal-200" },
                { title: "APJ Abdul Kalam Memorial", desc: "The former President’s house turned museum in the heart of Rameswaram. His personal belongings, awards, and the story of a boy from this tiny island who became India’s Missile Man. Entry is free. Budget 45 minutes.", emoji: "\uD83C\uDFDB\uFE0F", color: "bg-rose-50 border-rose-200" },
              ].map((h) => (
                <TipCard key={h.title} icon={h.emoji} title={h.title} desc={h.desc} color={h.color} />
              ))}
            </div>
          </section>

          {/* ── ITINERARIES ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan — days are expandable/collapsible.</p>

            {/* Tab switcher */}
            <div className="flex gap-2 flex-wrap mb-8 p-1 bg-parchment rounded-xl">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 ${
                    activeTab === p.id ? "bg-white shadow text-ink border border-parchment-2" : "text-muted hover:text-ink"
                  }`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            {/* ── PLAN A: Budget ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDCB0"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Rameswaram Island</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Guesthouse near temple {"·"} {"₹"}400–{"₹"}800/night {"·"} Auto: {"₹"}100–200/ride</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Temple, Theerthams & Pamban Bridge"
                  items={[
                    "5:00am — Agni Theertham beach for sunrise and holy dip. Almost no crowds at this hour.",
                    "5:30am — Ramanathaswamy Temple opens. Do the 22 theertham bath ritual (takes 1.5–2 hours). Carry a spare set of dry clothes.",
                    "8:00am — Breakfast at a local mess on West Car Street. Idli-vada-filter coffee for ₹50.",
                    "9:30am — APJ Abdul Kalam Memorial (free entry). The house where India’s Missile Man grew up.",
                    "11:00am — Five-faced Hanuman Temple and Gandhamadhana Parvatham hilltop for island views.",
                    "12:30pm — Lunch at a veg meals joint near the temple (₹80–120 for unlimited thali).",
                    "3:30pm — Auto to Pamban Bridge viewpoint (₹150). Watch the afternoon train cross the sea.",
                    "5:30pm — Return to Agni Theertham for sunset. The beach faces east but the sky behind the temple glows.",
                    "7:30pm — Dinner at a seafood stall near the fishing harbour. Fresh catch of the day for ₹150–200.",
                  ]}
                  cost={"₹1,200–1,600"}
                />
                <DayCard day="Day 2" title="Dhanushkodi Ghost Town & Ram Setu"
                  items={[
                    "6:00am — Shared jeep to Dhanushkodi from Rameswaram bus stand (₹600–800/person round trip). Book the first departure.",
                    "7:00am — Arrive at Dhanushkodi ruins. The destroyed railway station, church ruins, and old town emerge from the sand.",
                    "8:00am — Continue to land’s end where Bay of Bengal meets Indian Ocean. On clear days, you can see the Ram Setu shoals stretching toward Sri Lanka.",
                    "9:30am — Return journey with photo stops. The jeep ride through the sand dunes is half the experience.",
                    "11:00am — Back in Rameswaram. Late breakfast/brunch at a local eatery (₹80–120).",
                    "12:00pm — Revisit the temple corridor for photography. Midday light streaming through 1,212 pillars is magical.",
                    "1:30pm — Villoondi Theertham — a submerged theertham in the sea, accessible at low tide. Auto ₹100.",
                    "3:00pm — Pick up souvenirs — conch shells, dried fish, and rudraksha beads from shops near the temple.",
                    "4:00pm — Head to station or bus stand for departure. Rameswaram Express to Chennai departs 7:10pm.",
                  ]}
                  cost={"₹1,400–1,800"}
                />
              </div>
            )}

            {/* ── PLAN B: Pilgrimage ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDE4F"}</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Pilgrimage Plan — Complete Spiritual Circuit</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Devasthanam guesthouse or mid-range hotel {"·"} {"₹"}1,200–{"₹"}3,000/night {"·"} Private auto for the day: {"₹"}800–1,200</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Full Temple Ritual & Sacred Sites"
                  items={[
                    "4:30am — Wake for the first temple darshan. The temple is least crowded between 5–6am.",
                    "5:00am — Holy dip at Agni Theertham. The sea is calm at this hour and the sunrise over the Bay of Bengal is deeply moving.",
                    "5:30am — Ramanathaswamy Temple — complete 22 theertham ritual. Each well has a different water temperature and legend. A priest guide costs ₹300–500 and is worth it for the stories.",
                    "8:30am — Breakfast. Try the temple anna prasadam if available, or South Indian meals at Amma Mess (₹100–150).",
                    "10:00am — Gandhamadhana Parvatham — the highest point on the island. A small temple here has Ram’s footprint in stone.",
                    "11:00am — Kothandaramaswamy Temple at the southern tip — the only structure that survived the 1964 cyclone at Dhanushkodi.",
                    "12:30pm — Lunch at a quality restaurant like Sri Saravana Bhavan or Hotel Tamil Nadu (₹150–250).",
                    "2:30pm — APJ Abdul Kalam Memorial and the nearby Lakshmana Theertham tank.",
                    "4:00pm — Pamban Bridge viewpoint. Hire a private auto (₹200) and ask to stop at the old bridge approach for the best angle.",
                    "6:00pm — Evening aarti at Ramanathaswamy Temple. The corridor lit with oil lamps is otherworldly.",
                    "8:00pm — Dinner. Try the seafood at a harbour-side restaurant — crab curry with rice (₹250–400).",
                  ]}
                  cost={"₹3,000–4,500"}
                />
                <DayCard day="Day 2" title="Dhanushkodi, Ram Setu & Departure"
                  items={[
                    "5:30am — Private jeep to Dhanushkodi (₹2,500–3,500). Private means you control the pace and stops.",
                    "6:30am — Sunrise at Dhanushkodi’s land’s end. The point where two oceans meet is considered sacred — pilgrims perform rituals here.",
                    "7:30am — Explore the ghost town ruins — the old railway station, post office, and church. The silence here is profound.",
                    "8:30am — Adam’s Bridge viewpoint. On clear mornings you can see the chain of shoals extending toward Sri Lanka.",
                    "10:00am — Return to Rameswaram. Stop at Villoondi Theertham if the tide is right.",
                    "11:00am — Brunch at your hotel or a local restaurant (₹150–250).",
                    "12:00pm — Final temple visit for Shivalinga darshan. The main lingam is one of the 12 Jyotirlingas.",
                    "1:30pm — Five-faced Hanuman Temple — the only temple in India with a floating stone (it’s said to be from Ram’s bridge).",
                    "3:00pm — Shopping for religious items — conch shells, vibhuti, and temple souvenirs on West Car Street.",
                    "4:00pm — Depart Rameswaram. Train to Madurai (3.5hrs) or Chennai overnight.",
                  ]}
                  cost={"₹4,000–6,000"}
                />
              </div>
            )}

            {/* Embedded map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-parchment-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63048.8!2d79.31!3d9.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Rameswaram Travel Map" />
            </div>
          </section>

          {/* ── TEMPLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="ramanathaswamy temple corridor pillars rameswaram india"
              fallback="https://images.unsplash.com/photo-1621427639969-60e1d2843e0e?w=900&q=80"
              alt="The endless corridor of Ramanathaswamy Temple with 1212 pillars"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The longest temple corridor in India: 1,212 pillars, 400 years old. Visit at 5am when your footsteps are the only sound.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget Plan", emoji: "\uD83D\uDCB0", total: "₹3,500–4,500", bg: "bg-amber-50 border-amber-200",
                  rows: [["Accommodation","2 nights: ₹800–1,600"],["Food","4–5 meals: ₹500–700"],["Transport","Autos + jeep share: ₹1,000–1,200"],["Attractions","Temple (free) + memorial (free): ₹0"],["Extras","Souvenirs, tips: ₹200–400"]] },
                { plan: "Pilgrimage Plan", emoji: "\uD83D\uDE4F", total: "₹5,000–12,000", bg: "bg-purple-50 border-purple-200",
                  rows: [["Accommodation","2 nights: ₹2,400–6,000"],["Food","5–6 meals: ₹800–1,500"],["Transport","Private auto + jeep: ₹2,500–4,000"],["Priest Guide","Temple ritual guide: ₹300–500"],["Extras","Pooja items, souvenirs: ₹500–1,000"]] },
              ].map((b) => (
                <div key={b.plan} className={`rounded-xl border p-5 ${b.bg}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">{b.emoji}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{b.plan}</p>
                      <p className="text-xs text-muted font-light">Total per person: {b.total}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {b.rows.map(([k, v]) => (
                      <div key={k} className="flex justify-between text-xs">
                        <span className="text-muted font-light">{k}</span>
                        <span className="text-ink font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── DHANUSHKODI IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="dhanushkodi ghost town ruins beach bay bengal indian ocean"
              fallback="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80"
              alt="Dhanushkodi ghost town ruins in the sand by the sea"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Dhanushkodi: a town destroyed by a cyclone in 1964 and never rebuilt. Where the Bay of Bengal meets the Indian Ocean.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting the temple after 8am", desc: "Tour buses arrive by 8:30am and the queue for theertham baths stretches to 2+ hours. At 5am, you walk straight in. Non-negotiable.", icon: "\u23F0" },
                { title: "Skipping the 22 theerthams", desc: "Most tourists only do the main darshan. The 22 sacred wells are the real experience — each has a different legend and water temperature. Budget 2 hours.", icon: "\uD83D\uDCA7" },
                { title: "Going to Dhanushkodi at midday", desc: "There is zero shade at the ruins. Temperature hits 42°C in the sand. Go at 6am or 4pm. Carry 2 litres of water minimum.", icon: "\u2600\uFE0F" },
                { title: "Not carrying dry clothes to the temple", desc: "The theertham ritual involves being doused with water from 22 wells. You will be completely soaked. Carry dry clothes in a waterproof bag.", icon: "\uD83D\uDC5A" },
                { title: "Expecting Dhanushkodi to have facilities", desc: "There are almost no shops, toilets, or shelters at Dhanushkodi. Carry water, snacks, sunscreen, and use the restroom before leaving.", icon: "\uD83C\uDFDA\uFE0F" },
                { title: "Taking a car to Dhanushkodi", desc: "The road ends and becomes sand. Only jeeps can make the final stretch. Book a jeep from Rameswaram — don’t try to drive your own vehicle beyond the checkpoint.", icon: "\uD83D\uDE97" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83D\uDE82", title: "Take the Train Across Pamban", desc: "The Rameswaram Express crosses the Pamban Bridge — the train literally goes over the ocean. Book a window seat on the left side (southbound) for the best view. It’s a once-in-a-lifetime 2-minute crossing.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF05", title: "Sunrise at Agni Theertham", desc: "Rameswaram faces east. Agni Theertham beach at 5:30am is golden, empty, and sacred. Combine it with the early temple visit — the most efficient and most beautiful way to start your day.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83E\uDDED", title: "Hire a Temple Guide", desc: "A knowledgeable priest-guide (₹300–500) transforms the temple from ‘another temple’ to an unforgettable spiritual experience. They explain the mythology of each theertham and manage the ritual flow.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF7D\uFE0F", title: "Eat at the Fishing Harbour", desc: "Skip the tourist restaurants. The small eateries near the fishing harbour serve the morning’s catch — crab curry, fish fry, prawn masala — for ₹150–250. Look for the busiest stall.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCF1", title: "Connectivity Warning", desc: "Phone signal drops significantly at Dhanushkodi. Download offline maps before going. Tell someone your return time. The jeep drivers are reliable but better safe.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDCC6", title: "Best Month by Month", desc: "Oct–Nov \u2705 best weather, fewer crowds | Dec–Feb \u2705 peak pilgrimage, pleasant | Mar–Apr \u2600\uFE0F getting hot | May–Jun \u2614 avoid (extreme heat) | Jul–Sep \uD83C\uDF27\uFE0F monsoon, temple open but Dhanushkodi inaccessible", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Rameswaram itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Rameswaram Trip {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Rameswaram?", a: "2 days is the sweet spot. Day 1 covers the temple, theerthams, Pamban Bridge, and Kalam Memorial. Day 2 covers Dhanushkodi, Ram Setu viewpoint, and remaining temples. 1 day is too rushed for the full theertham ritual. 3 days only if you want to include Devipattinam or a slower spiritual retreat." },
                { q: "What is the best time to visit Rameswaram?", a: "October to April. October–December offers pleasant weather without extreme heat. January–February is peak pilgrimage season with comfortable 25–30°C temperatures. March–April gets hot. Avoid May–September when it crosses 40°C and monsoon rains make Dhanushkodi inaccessible." },
                { q: "How much does a 2-day Rameswaram trip cost?", a: "Budget solo: ₹3,500–4,500 including accommodation, food, and shared jeep. Pilgrimage mid-range: ₹5,000–12,000 per person with better hotels, private transport, and priest guides. Temple entry is free. Dhanushkodi jeep is the biggest single expense at ₹600–800 shared or ₹2,500–3,500 private." },
                { q: "Is the Pamban Bridge safe for trains?", a: "Completely safe. The original 1914 bridge has been maintained for over a century, and a new parallel bridge opened in 2024. Multiple trains cross daily including the Rameswaram Express. The opening mechanism lets ships pass. Standing at the viewpoint while a train crosses the sea is one of India’s most dramatic sights." },
                { q: "Can I visit Dhanushkodi on my own?", a: "Two-wheelers can reach partway but the last stretch is deep sand. Shared jeeps from Rameswaram cost ₹600–800 per person round trip with stops. Private jeeps cost ₹2,500–3,500. The road is only partially paved. Go early morning to avoid the brutal midday heat — there is zero shade." },
                { q: "What food is Rameswaram famous for?", a: "Fresh seafood — crab curry, fish fry, and prawn masala at small eateries near the fishing harbour (₹150–250). Vegetarian pilgrims should try the temple prasadam and unlimited South Indian thali at veg restaurants on West Car Street (₹80–150). Filter coffee from any local tea stall is excellent." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Rameswaram — Highlights"
            subtitle="The best of Rameswaram in photos."
            spots={[
              { name: "Rameswaram Landscape", query: "rameswaram india landscape scenic beautiful travel", desc: "The stunning landscapes of Rameswaram." },
              { name: "Rameswaram Temple", query: "rameswaram temple architecture heritage india", desc: "Historic temples and architecture in Rameswaram." },
              { name: "Rameswaram Street Scene", query: "rameswaram street market local culture india", desc: "Local life and culture in Rameswaram." },
              { name: "Rameswaram Nature", query: "rameswaram nature hills forest river india", desc: "Natural beauty around Rameswaram." },
              { name: "Rameswaram Sunset", query: "rameswaram sunset golden hour india travel", desc: "Rameswaram at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Exploring More of South India?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Madurai — Temple City Guide", href: "/blog/madurai-2-days", soon: true },
                { label: "Pondicherry — 3 Day French Quarter", href: "/blog/pondicherry-3-days", soon: true },
                { label: "Kerala Backwaters — 5 Day Guide", href: "/blog/alleppey-3-days", soon: false },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="rameswaram-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

// ── FAQ Item accordion ────────────────────────────────────────────────────────
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
