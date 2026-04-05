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


const HYD_TOC = [
  { id: "decision",    emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "oldcity",     emoji: "\uD83D\uDCCD", label: "Old City vs New City" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",      emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "biryani",     emoji: "\uD83C\uDF5B", label: "The Biryani Trail" },
  { id: "mistakes",    emoji: "\u274C", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "\uD83D\uDCA1", label: "Pro Tips" },
  { id: "faq",         emoji: "\u2753", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Hyderabad 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Hyderabad in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
      ].map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}>
          {s.label}
        </a>
      ))}
      <button onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">
        {copied ? "\u2713 Copied" : "Copy Link"}
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
          <span className="font-serif text-xl text-gold-dark font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-gold mt-1 flex-shrink-0 text-xs">\u25CF</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">\uD83D\uDCB0</span>
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
          <p className="font-medium text-sm text-ink mb-1">{title}</p>
          <p className="text-xs text-muted font-light leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
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
        <span className={`text-gold text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function HyderabadClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under \u20B96k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83C\uDFDB\uFE0F", label: "Heritage", sub: "\u20B98k\u201318k", color: "border-teal-300 bg-teal-50 text-teal-800" },
    { id: "C" as const, emoji: "\u2B50", label: "Premium", sub: "\u20B918k\u201330k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={HYD_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Hyderabad" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="charminar hyderabad telangana india night"
            fallback="https://images.unsplash.com/photo-1603813507806-0d8e1a22d22c?w=1600&q=85"
            alt="Charminar monument in Hyderabad illuminated at night"
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
              <span className="text-white/70">Hyderabad 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Heritage & Food
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Hyderabad in 3 Days: Biryani, Forts &amp; Bazaars
                <em className="italic text-gold-light"> (Budget to Premium, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs, a proper biryani trail &mdash; and the Old City secrets most tourists walk right past.
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
              <span>\uD83C\uDDEE\uD83C\uDDF3 India</span>
              <span>&middot;</span>
              <span>\uD83D\uDDD3 3 Days</span>
              <span>&middot;</span>
              <span>\uD83D\uDCB0 From \u20B95,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The biryani war between Paradise and Bawarchi has raged for decades. My verdict: Paradise for flavour, Shadab for authenticity, Bawarchi for value. You need to try all three.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\u26A1 Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation &mdash; jump straight to your itinerary.</p>
            <div className="grid grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} \u2192</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── OLD CITY VS NEW CITY ── */}
          <section id="oldcity" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83D\uDCCD Old City vs New City</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Hyderabad is two cities in one. This is the most important decision for your trip.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Old City", emoji: "\uD83D\uDD4C", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Best for","History, food, authentic Hyderabad"],["Key spots","Charminar, Laad Bazaar, Chowmahalla Palace, Mecca Masjid"],["Budget","\u20B9400\u2013\u20B92,500/night"],["Vibe","Chaotic, aromatic, centuries-old lanes"]],
                  note: "Traffic is intense. Walk or take autos within Old City. Don't drive here." },
                { title: "New City (Hi-Tech / Banjara Hills)", emoji: "\uD83C\uDFD9\uFE0F", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["Best for","Modern dining, luxury hotels, Hussain Sagar"],["Key spots","Hussain Sagar, Birla Mandir, Tank Bund, GVK One Mall"],["Budget","\u20B91,500\u2013\u20B96,000/night"],["Vibe","Clean, modern, wide roads, cafes"]],
                  note: "Metro connects well to Old City. Best base for first-timers who want comfort." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/60 w-16 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">\u26A0\uFE0F {area.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Smart move:</strong> Stay in Banjara Hills or Begumpet (New City), day-trip to the Old City for Charminar, Laad Bazaar and biryani. Metro + auto gets you anywhere in 30 minutes.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="\uD83D\uDDD3" label="Duration" value="3 Days" />
            <StatCard icon="\uD83D\uDCB0" label="Budget From" value="\u20B95,500" />
            <StatCard icon="\uD83C\uDF21" label="Best Months" value="Oct \u2013 Mar" />
            <StatCard icon="\u2708\uFE0F" label="Airport" value="RGIA (HYD)" />
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83D\uDCC5 The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan &mdash; days are expandable/collapsible.</p>

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

            {/* ── PLAN A: BUDGET ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">\uD83D\uDCB0</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; Old City + Metro Commuter</p>
                    <p className="text-xs text-amber-600 font-light">Stay: OYO / hostel near Nampally &middot; \u20B9400\u2013\u20B91,200/night &middot; Metro + autos</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Old City Heritage Loop"
                  items={[
                    "9am: Start at Charminar (\u20B925 entry). Go early \u2014 crowds build after 11am. Climb to the top for Old City views.",
                    "10am: Walk through Laad Bazaar \u2014 skip the machine-made bangles near the entrance, walk deeper for the lac bangle artisans. Budget \u20B9200\u2013\u20B9600.",
                    "11am: Chowmahalla Palace (\u20B980). The last Nizam's residence. 1 hour is enough \u2014 the Durbar Hall is the highlight.",
                    "12:30pm: Lunch at Shadab, opposite Madina Hotel. Mutton biryani + mirchi ka salan = \u20B9250\u2013\u20B9350. Arrive before 1pm or wait 30 min.",
                    "2:30pm: Salar Jung Museum (\u20B950). India's biggest one-man collection. The Veiled Rebecca sculpture and the musical clock (strikes at every hour) are the must-sees. Budget 2 hours.",
                    "5pm: Walk Tank Bund promenade along Hussain Sagar. Free. Watch the sunset over the Buddha statue.",
                    "Dinner: Bawarchi RTC X Roads \u2014 biryani + chai = \u20B9200\u2013\u20B9280."
                  ]}
                  cost="\u20B91,200\u20131,800 excluding accommodation" />
                <DayCard day="Day 2" title="Golconda Fort + Local Markets"
                  items={[
                    "8am: Golconda Fort (\u20B925). Go early \u2014 it gets brutally hot after 11am. The acoustic system is an engineering marvel: a clap at the entrance gate echoes all the way to the top.",
                    "Test the acoustics yourself at the main gate \u2014 clap once, then walk up to Bala Hisar gate. Someone at the top can hear your clap from 1km away.",
                    "10:30am: Walk through the royal quarters, Rani Mahal, the granary. 2.5 hours total is ideal.",
                    "12pm: Auto to Tolichowki. Lunch at a local Irani cafe \u2014 Osmania biscuits + Irani chai = \u20B960\u201380.",
                    "2pm: Birla Mandir (free, closed 12\u20132pm). Hilltop temple with panoramic city views.",
                    "4pm: Moazzam Jahi Market for street food \u2014 try the haleem (seasonal, available Apr\u2013May during Ramadan) or keema samosa.",
                    "Evening: Eat and Repeat at Paradise, Secunderabad. The original branch. Chicken biryani = \u20B9280\u2013\u20B9350."
                  ]}
                  cost="\u20B91,000\u20131,500 excluding accommodation" />
                <DayCard day="Day 3" title="Hussain Sagar + Departure Shopping"
                  items={[
                    "9am: Boat ride to Buddha statue on Hussain Sagar (\u20B975 return ferry from Lumbini Park).",
                    "10:30am: NTR Gardens or Lumbini Park for a quiet morning walk.",
                    "11:30am: Shilparamam craft village, Hitec City (\u20B950). Local artisans, Pochampally ikat textiles, Bidriware.",
                    "1pm: Lunch at a Hitec City food court \u2014 good variety, \u20B9200\u2013\u20B9350.",
                    "3pm: Last-minute shopping at Begum Bazaar for Hyderabadi pearls (\u20B9200\u2013\u20B92,000 for real freshwater pearls). Bargain hard \u2014 first price is 3x the real price.",
                    "Depart from RGIA airport (40 min from Hitec City by cab, \u20B9500\u2013\u20B9700)."
                  ]}
                  cost="\u20B9800\u20131,200 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u20B94,500\u2013\u20B96,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: HERITAGE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl mb-6">
                  <span className="text-2xl">\uD83C\uDFDB\uFE0F</span>
                  <div>
                    <p className="text-sm font-medium text-teal-800">Heritage Plan &mdash; Banjara Hills / Begumpet Base</p>
                    <p className="text-xs text-teal-600 font-light">Stay: Mid-range hotel &middot; \u20B92,000\u2013\u20B94,000/night &middot; Cab + Metro</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Complete Old City Deep Dive"
                  items={[
                    "8:30am: Cab to Charminar (\u20B925 entry). Arrive before the crowds. Climb all four minarets for the Old City panorama.",
                    "9:30am: Laad Bazaar for lac bangles \u2014 walk past the first 200m of machine-made stalls, the real artisans sit deeper inside. Budget \u20B9500\u2013\u20B91,500 for authentic lac bangles.",
                    "11am: Chowmahalla Palace (\u20B980). The Durbar Hall with its 19 Belgian crystal chandeliers is worth the entry alone. 1.5 hours.",
                    "12:30pm: Lunch at Shadab. Mutton biryani + double ka meetha = \u20B9350\u2013\u20B9500.",
                    "2pm: Salar Jung Museum (\u20B950). Don't miss the musical clock (every full hour) and the Veiled Rebecca marble sculpture. 2\u20132.5 hours.",
                    "5pm: Mecca Masjid (free, non-prayer hours). One of the largest mosques in India. The bricks in the central arch were brought from Mecca.",
                    "6:30pm: Golconda Fort Sound & Light Show (\u20B9130). Book ahead \u2014 the 7pm English show fills up on weekends.",
                    "Dinner: Hotel Nizam, Madina Road. The locals' biryani secret. \u20B9300\u2013\u20B9450."
                  ]}
                  cost="\u20B92,500\u20133,500 excluding accommodation" />
                <DayCard day="Day 2" title="Golconda + New City Icons"
                  items={[
                    "7:30am: Golconda Fort (\u20B925). Early morning = cool air, empty ramparts, best light for photos.",
                    "Golconda at 5:30pm for the Sound & Light Show \u2014 the acoustics of the clap echoing from the gate to the top of the fort are genuinely engineering marvel stuff. But mornings are better for exploring the full complex.",
                    "10:30am: Qutb Shahi Tombs (\u20B925) \u2014 700m from Golconda, always empty. The tombs of the dynasty that built Hyderabad. 45 min.",
                    "12pm: Cab to Banjara Hills. Lunch at Jewel of Nizam or Shah Ghouse for haleem (seasonal) or kebabs. \u20B9500\u2013\u20B9800.",
                    "2pm: Birla Mandir (free). Hilltop views of Hussain Sagar and the twin cities.",
                    "3:30pm: Boat ride to Buddha statue (\u20B975 return). The 18m monolithic statue took 700 workers 2 years.",
                    "5pm: Tank Bund promenade walk \u2014 statues of 33 famous Telangana personalities line the road.",
                    "Dinner: Paradise, Secunderabad (original branch). The gold standard. \u20B9400\u2013\u20B9600 for two."
                  ]}
                  cost="\u20B92,800\u20134,000 excluding accommodation" />
                <DayCard day="Day 3" title="Culture + Craft + Departure"
                  items={[
                    "9am: Shilparamam craft village, Hitec City (\u20B950). Pochampally ikat, Bidriware, Nirmal paintings \u2014 buy direct from artisans.",
                    "11am: Nehru Zoological Park (\u20B950) if travelling with family \u2014 one of India's largest. Or Sudha Cars Museum (\u20B950) for something quirky \u2014 cars shaped like cameras, cricket bats, stilettos.",
                    "12:30pm: Lunch at Chutneys, Banjara Hills. Best South Indian tiffin in Hyderabad. Dosas from \u20B9150.",
                    "2pm: Begum Bazaar for pearls. Hyderabad is the pearl capital of India \u2014 real freshwater pearls start at \u20B9200. Get a certificate of authenticity. Bargain to 40% of first quoted price.",
                    "4pm: GVK One Mall for last-minute shopping or Karachi Bakery for the famous fruit biscuits (\u20B9250\u2013\u20B9400/box). Perfect gift.",
                    "Depart from RGIA (30\u201345 min from Banjara Hills, \u20B9600\u2013\u20B9900 by cab)."
                  ]}
                  cost="\u20B92,000\u20133,200 excluding accommodation" />
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-teal-700 uppercase tracking-wide">Total 3-Day Cost (per person) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u20B98,000\u2013\u20B918,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: PREMIUM ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">\u2B50</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Premium Plan &mdash; Taj / ITC / Novotel Base</p>
                    <p className="text-xs text-purple-600 font-light">Stay: 4-5 star hotel &middot; \u20B95,000\u2013\u20B910,000/night &middot; Private cab throughout</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Old City in Style + Exclusive Dining"
                  items={[
                    "9am: Private guided heritage walk of Old City \u2014 Charminar, Laad Bazaar, Chowmahalla Palace. A good guide costs \u20B91,500\u2013\u20B92,500 for 3 hours and transforms the experience.",
                    "Laad Bazaar for bangles is a 400-year-old tradition. Skip the machine-made ones near the entrance, walk deeper for the lac bangle artisans. Premium sets \u20B91,000\u2013\u20B95,000.",
                    "12pm: Lunch at Firdaus, Taj Krishna (\u20B91,500\u2013\u20B92,500/person). The finest Hyderabadi cuisine in the city. The dum biryani here is ceremonial.",
                    "2:30pm: Salar Jung Museum with audio guide. The private collection rivals many European national museums.",
                    "5pm: High tea at Taj Falaknuma Palace (\u20B93,000\u2013\u20B94,500/person, book 2 weeks ahead). The Nizam's actual palace, now the most spectacular hotel in South India. Horse-drawn carriage from the main gate.",
                    "7:30pm: Dinner at So, Novotel HICC \u2014 modern Hyderabadi fusion. \u20B91,200\u2013\u20B91,800/person."
                  ]}
                  cost="\u20B98,000\u201312,000 excluding accommodation" />
                <DayCard day="Day 2" title="Ramoji Film City (Full Day)"
                  items={[
                    "8am: Private cab to Ramoji Film City (30km, 45 min). Book premium package online (\u20B92,500\u2013\u20B93,500/person).",
                    "World's largest film studio complex \u2014 1,666 acres. The guided bus tour covers the main sets, gardens and stunt shows.",
                    "Lunch inside the park \u2014 multiple restaurants, \u20B9400\u2013\u20B9700/person. The Nawab restaurant has decent biryani.",
                    "The live action shows run at fixed times \u2014 check the schedule board at entry and plan your route around them.",
                    "Full day here: 9am\u20135pm minimum. Don't try to combine with other sights.",
                    "Evening: Return to hotel. Dinner at Ohri's 100 Degrees revolving restaurant, Basheerbagh. City views at night. \u20B9800\u2013\u20B91,200/person."
                  ]}
                  cost="\u20B95,000\u20137,500 excluding accommodation" />
                <DayCard day="Day 3" title="Golconda + Pearls + Luxury Farewell"
                  items={[
                    "7:30am: Golconda Fort with a private guide (\u20B91,000\u2013\u20B91,500). The guide unlocks stories you'd never find on signboards \u2014 secret escape tunnels, the diamond vault location, the acoustic engineering.",
                    "10am: Qutb Shahi Tombs \u2014 the often-missed necropolis of Hyderabad's founders. 45 min.",
                    "11:30am: Birla Mandir + Hussain Sagar boating.",
                    "1pm: Lunch at ITC Kohenur \u2014 Dakhni or Ottimo. \u20B91,200\u2013\u20B92,000/person.",
                    "3pm: Mangatrai Pearls, Basheerbagh for certified pearl jewellery. Budget \u20B95,000\u2013\u20B950,000 for quality pieces with certificates.",
                    "Departure. RGIA is 40\u201350 min from Banjara Hills by cab."
                  ]}
                  cost="\u20B95,000\u20138,000 excluding accommodation" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 3-Day Cost (per person) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u20B918,000\u2013\u20B930,000 including accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\uD83D\uDCB0 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">\uD83D\uDCB0 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-700 text-center">\uD83C\uDFDB\uFE0F Heritage</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">\u2B50 Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "\u20B91,200\u2013\u20B93,600", "\u20B96,000\u2013\u20B912,000", "\u20B915,000\u2013\u20B930,000"],
                    ["\uD83C\uDF5B Food & Drinks", "\u20B91,200\u2013\u20B91,800", "\u20B92,500\u2013\u20B94,500", "\u20B96,000\u2013\u20B910,000"],
                    ["\uD83D\uDE95 Transport", "\u20B9600\u2013\u20B9900", "\u20B91,500\u2013\u20B92,500", "\u20B93,000\u2013\u20B95,000"],
                    ["\uD83C\uDFAF Activities & Entry", "\u20B9300\u2013\u20B9500", "\u20B9800\u2013\u20B91,500", "\u20B95,000\u2013\u20B98,000"],
                    ["\uD83D\uDED2 Shopping (Pearls/Bangles)", "\u20B9200\u2013\u20B9800", "\u20B91,000\u2013\u20B93,000", "\u20B95,000\u2013\u20B920,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["\u20B94,500\u2013\u20B96,000","\u20B98,000\u2013\u20B918,000","\u20B918,000\u2013\u20B930,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Shopping budgets vary wildly &mdash; pearls alone can range from \u20B9200 to \u20B950,000 depending on quality.
            </p>
          </section>

          {/* ── BIRYANI TRAIL ── */}
          <section id="biryani" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83C\uDF5B The Biryani Trail</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              You cannot visit Hyderabad and eat biryani only once. Here is the definitive ranking from someone who has eaten at all of them multiple times.
            </p>
            <div className="space-y-3">
              {[
                { name: "Paradise, Secunderabad (Original)", verdict: "Best overall flavour", price: "\u20B9280\u2013\u20B9350/plate", note: "Go to the original Secunderabad branch, not the chain outlets. The chicken biryani here set the standard. Arrive before 1pm for lunch or 8pm for dinner.", icon: "\uD83E\uDD47", color: "bg-amber-50 border-amber-200" },
                { name: "Shadab, Near Charminar", verdict: "Most authentic Hyderabadi", price: "\u20B9250\u2013\u20B9350/plate", note: "The mutton biryani with mirchi ka salan is the real Old City experience. The setting opposite Madina Hotel adds to the atmosphere. Cash preferred.", icon: "\uD83E\uDD48", color: "bg-teal-50 border-teal-200" },
                { name: "Bawarchi, RTC X Roads", verdict: "Best value for money", price: "\u20B9200\u2013\u20B9280/plate", note: "Massive portions at unbeatable prices. The special biryani is their signature. Always packed \u2014 go at off-peak hours (3pm or after 9:30pm).", icon: "\uD83E\uDD49", color: "bg-rose-50 border-rose-200" },
                { name: "Hotel Nizam, Madina Road", verdict: "The locals' secret", price: "\u20B9180\u2013\u20B9250/plate", note: "No tourist has heard of this place but every Hyderabadi knows it. The pathar ka gosht (stone-grilled meat) is exceptional.", icon: "\uD83C\uDF1F", color: "bg-purple-50 border-purple-200" },
              ].map((spot) => (
                <div key={spot.name} className={`rounded-xl border p-5 ${spot.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{spot.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <p className="font-medium text-sm text-ink">{spot.name}</p>
                        <span className="text-xs text-muted bg-white/70 px-2.5 py-1 rounded-full border border-white/50">{spot.price}</span>
                      </div>
                      <p className="text-xs font-medium text-gold-dark mb-1">{spot.verdict}</p>
                      <p className="text-xs text-muted font-light leading-relaxed">{spot.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Hyderabad"
            hotels={[
              { name: "Zostel Hyderabad", type: "Budget Hostel \u00B7 Nampally", price: "From \u20B9600/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/zostel-hyderabad.html?aid=2820480" },
              { name: "Novotel HICC", type: "Business Hotel \u00B7 Banjara Hills", price: "From \u20B94,500/night", rating: "4", badge: "Heritage pick", url: "https://www.booking.com/hotel/in/novotel-hyderabad.html?aid=2820480" },
              { name: "Taj Falaknuma Palace", type: "Palace Hotel \u00B7 Old City", price: "From \u20B925,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/taj-falaknuma-palace.html?aid=2820480" },
            ]}
            activities={[
              { name: "Ramoji Film City Premium Tour", duration: "Full day", price: "From \u20B92,500/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=hyderabad&partner_id=PSZA5UI" },
              { name: "Old City Heritage Walking Tour", duration: "3 hours", price: "From \u20B91,200/person", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=hyderabad&partner_id=PSZA5UI" },
              { name: "Golconda Fort Guided Tour", duration: "2.5 hours", price: "From \u20B9800/person", url: "https://www.getyourguide.com/s/?q=hyderabad&partner_id=PSZA5UI" },
              { name: "Hyderabadi Food & Biryani Trail", duration: "4 hours", price: "From \u20B91,500/person", url: "https://www.getyourguide.com/s/?q=hyderabad&partner_id=PSZA5UI" },
            ]}
            pdfProductId="hyderabad-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Hyderabad \u2014 Must-See Places"
            subtitle="Click each thumbnail to explore the city's most iconic monuments, palaces and bazaars."
            spots={[
              { name: "Charminar",            query: "charminar hyderabad monument architecture four minarets",           desc: "The 430-year-old icon of Hyderabad. Go at dawn for empty streets and golden light on the minarets. Entry is just 25 rupees." },
              { name: "Golconda Fort",         query: "golconda fort hyderabad stone walls ancient ruins hilltop",         desc: "One of India's most formidable forts with legendary acoustics. A handclap at the entrance can be heard at the highest point nearly a kilometre away." },
              { name: "Chowmahalla Palace",    query: "chowmahalla palace hyderabad courtyard grand architecture",         desc: "The official seat of the Asaf Jahi dynasty. The Durbar Hall with its 19 Belgian crystal chandeliers is worth the entry alone." },
              { name: "Hussain Sagar Lake",    query: "hussain sagar lake hyderabad buddha statue evening skyline",        desc: "A 16th-century artificial lake with an 18-metre monolithic Buddha statue at its centre. Best experienced at sunset from Tank Bund." },
              { name: "Laad Bazaar",           query: "laad bazaar hyderabad colourful bangles shop market lanes",         desc: "A 400-year-old bangle market stretching from Charminar. Walk past the tourist shops near the entrance to find the real lac bangle artisans deeper inside." },
            ]}
          />

          {/* ── GOLCONDA IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="golconda fort hyderabad ancient stone walls panoramic view"
              fallback="https://images.unsplash.com/photo-1572613286060-04f1aa160895?w=900&q=80"
              alt="Golconda Fort panoramic view"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Golconda Fort at sunrise &mdash; the ramparts stretch for 7 kilometres. Come early, bring water, wear good shoes.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\u274C Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting Golconda Fort after 11am", desc: "Temperatures soar past 35\u00B0C on the exposed ramparts. Go at 8am when it opens or attend the Sound & Light Show at 7pm instead.", icon: "\u2600\uFE0F" },
                { title: "Buying bangles at the Charminar entrance", desc: "The first 200 metres of Laad Bazaar sell machine-made Chinese imports. Walk deeper for genuine lac and glass bangles from generational artisans.", icon: "\uD83D\uDED2" },
                { title: "Trying to do Ramoji Film City in half a day", desc: "It is 1,666 acres. You need a full day minimum. Don't combine it with Old City sightseeing or you will see neither properly.", icon: "\uD83C\uDFAC" },
                { title: "Skipping Salar Jung Museum", desc: "India's largest one-man collection with 40,000+ artefacts. The musical clock and Veiled Rebecca alone justify the visit. Budget 2 hours minimum.", icon: "\uD83C\uDFDB\uFE0F" },
                { title: "Eating biryani only at Paradise", desc: "Paradise is great but Hyderabad has dozens of legendary spots. Shadab, Bawarchi, Hotel Nizam each offer a different style. Try at least two.", icon: "\uD83C\uDF5B" },
                { title: "Not bargaining at Begum Bazaar", desc: "Pearl sellers quote 3x the real price for tourists. Ask for certificates of authenticity and bargain to 30\u201340% of the first quoted price.", icon: "\uD83D\uDCB0" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── BIRYANI IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="hyderabadi biryani dum served traditional plate raita"
              fallback="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=900&q=80"
              alt="Authentic Hyderabadi dum biryani"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Hyderabadi dum biryani at a local joint: \u20B9250. The same dish at a fancy restaurant: \u20B9800. The local version is usually better.
              </p>
            </div>
          </div>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\uD83D\uDCA1 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83D\uDE87", title: "Metro Is Your Best Friend", desc: "Hyderabad Metro covers Miyapur to LB Nagar via Ameerpet. Clean, fast, air-conditioned. \u20B910\u2013\u20B960 per ride. Beats sitting in traffic every time.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF5B", title: "Biryani Timing Matters", desc: "Lunch biryani (12\u20132pm) is freshest. Dinner biryani (7\u20139pm) at popular spots means waiting 30\u201345 min. Go at 11:30am or 7pm sharp.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDC8E", title: "Pearl Buying Guide", desc: "Real freshwater pearls feel slightly gritty against your teeth. Plastic feels smooth. Ask for a GIA or local lab certificate. Mangatrai and Krishna Pearls are the trusted names.", color: "bg-teal-50 border-teal-200" },
                { icon: "\u2615", title: "Irani Chai Is Non-Negotiable", desc: "Nimrah Cafe opposite Charminar has been serving Irani chai + Osmania biscuits since the 1930s. Cost: \u20B940\u201360. Skip this and you have not visited Hyderabad.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCF1", title: "Use Ola/Uber, Not Autos", desc: "Auto-rickshaws in Old City don't use meters. Ola and Uber are 40\u201350% cheaper. For short Old City hops, walk \u2014 the lanes are too narrow for vehicles anyway.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDCC6", title: "Best Month by Month", desc: "Oct\u2013Nov \u2705 perfect weather | Dec\u2013Feb \u2705 cool evenings | Mar \u26A0\uFE0F warming up | Apr\u2013Jun \u2614 brutal heat | Jul\u2013Sep \uD83C\uDF27\uFE0F monsoon, fewer crowds", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/55 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Hyderabad itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Hyderabad Trip \u2192
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip \u2192</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\u2753 Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Hyderabad?", a: "3 days is the sweet spot \u2014 enough for Old City heritage, Golconda Fort, Salar Jung Museum, and a proper biryani trail. Add a 4th day if you want Ramoji Film City without rushing. 2 days means skipping either Ramoji or Golconda." },
                { q: "What is the best time to visit Hyderabad?", a: "October to March. October\u2013November has the best post-monsoon weather. December\u2013February brings cool evenings perfect for walking the Old City lanes. Avoid April\u2013June when temperatures regularly hit 42\u00B0C." },
                { q: "How much does a 3-day Hyderabad trip cost?", a: "Budget solo: \u20B94,500\u2013\u20B96,000 including accommodation. Heritage mid-range: \u20B98,000\u2013\u20B918,000. Premium with Ramoji and luxury hotels: \u20B918,000\u2013\u20B930,000. All include accommodation, food, transport and entry fees." },
                { q: "Which biryani restaurant is the best?", a: "Paradise (Secunderabad original) for best overall flavour. Shadab near Charminar for most authentic Old City style. Bawarchi at RTC X Roads for best value. Hotel Nizam on Madina Road is the local secret. Try at least two." },
                { q: "Is Ramoji Film City worth a full day?", a: "Yes, but only a full day. It is the world's largest film studio complex at 1,666 acres. The guided tour takes 6\u20137 hours minimum. Book the premium package. Do not try to combine it with Old City sightseeing." },
                { q: "How do I get around Hyderabad?", a: "Hyderabad Metro covers most tourist areas (\u20B910\u2013\u20B960/ride). For Old City use Ola/Uber \u2014 auto-rickshaws don't use meters. The metro doesn't reach Charminar yet, so cab from MGBS station. Ramoji Film City needs a cab or their shuttle from the city centre." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer India Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kerala Backwaters \u2014 5 Day Guide", href: "/blog/kerala-5-days", soon: true },
                { label: "Goa \u2014 3 Day Beach & Coast Guide", href: "/blog/goa-3-days", soon: false },
                { label: "Hampi \u2014 3 Day Ruins & Boulders", href: "/blog/hampi-3-days", soon: true },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon \u2192" : "View \u2192"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="hyderabad-3-days" />
          <RelatedGuides currentSlug="hyderabad-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
