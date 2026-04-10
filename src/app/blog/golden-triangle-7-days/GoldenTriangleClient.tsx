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
import Stay22Widget from "@/components/ui/Stay22Widget";
import RelatedGuides from "@/components/blog/RelatedGuides";
import Breadcrumb from "@/components/blog/Breadcrumb";
import { usePageUrl } from "@/lib/hooks";

const GT_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "cities",      emoji: "🏙️", label: "The 3 Cities" },
  { id: "transport",   emoji: "🚆", label: "Getting Between Cities" },
  { id: "itineraries", emoji: "📅", label: "The Itineraries" },
  { id: "taj",         emoji: "🕌", label: "Taj Mahal Guide" },
  { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
  { id: "maps",        emoji: "🗺️", label: "Route Maps" },
  { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "💡", label: "Pro Tips" },
  { id: "faq",         emoji: "❓", label: "FAQ" },
];

function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      setP(Math.min(100, (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100));
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2">
      <div className="h-full bg-gold transition-all duration-100" style={{ width: `${p}%` }} />
    </div>
  );
}

function ShareBar() {
  const pageUrl = usePageUrl();
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      <a href={`mailto:?subject=Golden Triangle 7-Day Itinerary&body=Check this out: ${pageUrl}`}
        className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://x.com/intent/tweet?text=Golden%20Triangle%207-Day%20Guide&url=${pageUrl}`}
        target="_blank" rel="noopener noreferrer"
        className="bg-[#1a6fb5] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
      <button onClick={copy} className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">
        {copied ? "✓ Copied" : "Copy Link"}
      </button>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-lg font-light text-ink">{value}</p>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}

function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden mb-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors">
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
                <span className="text-gold-dark mt-1 flex-shrink-0 text-xs">●</span>{item}
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

function RouteCard({ label, day, stops, distance, url, note, color }: {
  label: string; day: string; stops: string[]; distance: string;
  url: string; note: string; color: string;
}) {
  return (
    <div className={`rounded-xl border p-5 ${color}`}>
      <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
        <div>
          <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-muted mb-0.5">{label}</p>
          <p className="font-serif text-base text-ink">{day}</p>
        </div>
        <span className="text-xs text-muted bg-white/70 px-3 py-1 rounded-full border border-white/50">{distance}</span>
      </div>
      <div className="flex flex-wrap items-center gap-1.5 mb-3">
        {stops.map((s, i) => (
          <span key={i} className="flex items-center gap-1">
            <span className="text-xs bg-white/80 px-2.5 py-1 rounded-full border border-white/60 text-ink font-light">{s}</span>
            {i < stops.length - 1 && <span className="text-muted/40 text-xs">→</span>}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted font-light italic mb-3">💡 {note}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline">
        📍 Open in Google Maps →
      </a>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-parchment-2">
          <p className="text-sm text-muted font-light leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function GoldenTriangleClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A"|"B"|"C"|"D">("B");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget",        sub: "₹2,500–4k/day",  color: "border-amber-300 bg-amber-50" },
    { id: "B" as const, emoji: "💑", label: "Couple",        sub: "₹8–14k/day",     color: "border-rose-300 bg-rose-50" },
    { id: "C" as const, emoji: "🌍", label: "International", sub: "First India trip", color: "border-blue-300 bg-blue-50" },
    { id: "D" as const, emoji: "🏰", label: "Luxury",        sub: "Palace hotels",   color: "border-purple-300 bg-purple-50" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={GT_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Golden Triangle" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* HERO */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            imageKey="goldenTriangle"
            fallback="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1600&q=85"
            alt="Taj Mahal at sunrise Agra India"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Golden Triangle 7 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Heritage & Mughal</span>
                <span className="text-white/60 text-xs">March 21, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">15 min read</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Golden Triangle in 7 Days:
                <em className="italic text-gold-light"> Delhi, Agra & Jaipur</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The Taj Mahal, Red Fort, Amber Fort — India&apos;s most iconic circuit. 4 complete plans, real budgets, Google Maps routes and the Taj Mahal timing secret most visitors never know.
              </p>
            </div>
          </div>
        </div>

        {/* ARTICLE */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + meta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🏛️ Golden Triangle</span><span>·</span><span>🗓 7 Days</span><span>·</span><span>💰 From ₹18,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-gold/5 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Golden Triangle is India&apos;s most visited tourist circuit — and the most mishandled. Most visitors rush through Delhi in a day, arrive at the Taj Mahal at 10am (worst possible time), and leave Jaipur without seeing the best parts. This guide fixes all three problems.
            </p>
          </blockquote>

          {/* Quick decision */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your travel style and jump to your itinerary.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:underline">Plan {p.id} →</p>
                </button>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gold/10 border border-gold/30 rounded-xl">
              <p className="text-sm text-ink font-light leading-relaxed">
                <strong className="font-medium">Best for most people: Plan B (Couple) or Plan C (International first-timers).</strong> The Golden Triangle is India&apos;s most accessible circuit — well-signed, English-speaking, great tourist infrastructure. Plan C is specifically designed for first-time India visitors.
              </p>
            </div>
          </section>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Duration"    value="7 Days" />
            <StatCard icon="💰" label="Budget From" value="₹18,000" />
            <StatCard icon="🌡" label="Best Months" value="Oct – Mar" />
            <StatCard icon="🏛️" label="UNESCO Sites" value="4 Sites" />
          </div>

          {/* The 3 Cities */}
          <section id="cities" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏙️ The 3 Cities — What to Expect</h2>
            <p className="text-sm text-muted font-light mb-6">Each city is completely different. Here&apos;s what you&apos;re actually getting into.</p>

            <div className="space-y-4">
              {[
                {
                  city: "🏛️ Delhi", days: "2–3 days", color: "border-l-4 border-red-400 bg-red-50",
                  desc: "India's capital — chaotic, overwhelming, extraordinary. Mughal monuments sit next to colonial British buildings next to glass skyscrapers. The contrast is the experience. Old Delhi (Chandni Chowk, Jama Masjid, Red Fort) and New Delhi (India Gate, Humayun's Tomb, Qutub Minar) are completely different cities.",
                  must: ["Red Fort + Chandni Chowk bazaar", "Humayun's Tomb (Taj Mahal prototype)", "Qutub Minar", "India Gate at sunset", "Lodhi Garden for a slow morning"],
                },
                {
                  city: "🕌 Agra", days: "1–2 days", color: "border-l-4 border-amber-400 bg-amber-50",
                  desc: "Agra exists for one reason: the Taj Mahal. The city itself is chaotic and not particularly beautiful — but the Taj is so extraordinary it doesn't matter. Visit at sunrise, spend 2 hours, leave. Also worth your time: Agra Fort (better than most people expect) and Mehtab Bagh (the best Taj Mahal view without entering).",
                  must: ["Taj Mahal at sunrise (6am)", "Agra Fort (1.5hrs)", "Mehtab Bagh at sunset (free Taj view)", "Fatehpur Sikri (40km away, optional)"],
                },
                {
                  city: "🌸 Jaipur", days: "2–3 days", color: "border-l-4 border-pink-400 bg-pink-50",
                  desc: "The Pink City — India's most photogenic city. Amber Fort, Hawa Mahal, City Palace, Jantar Mantar. Jaipur also has the best shopping in India: Johari Bazaar for jewellery, Bapu Bazaar for textiles, the area around Tripolia Gate for block prints. Don't rush Jaipur — it rewards slow exploration.",
                  must: ["Amber Fort at 6am", "Hawa Mahal at sunrise (exterior)", "City Palace + Jantar Mantar", "Nahargarh Fort at sunset", "Johari Bazaar for shopping"],
                },
              ].map((c) => (
                <div key={c.city} className={`rounded-xl p-5 ${c.color}`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-lg font-normal text-ink">{c.city}</h3>
                    <span className="text-xs font-medium text-teal bg-white px-3 py-1 rounded-full border border-parchment-2">{c.days}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed mb-3">{c.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.must.map((m) => (
                      <span key={m} className="text-[0.65rem] bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60 font-light">{m}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Transport */}
          <section id="transport" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🚆 Getting Between Cities</h2>
            <p className="text-sm text-muted font-light mb-6">The right transport makes or breaks the Golden Triangle. Here&apos;s exactly what to take.</p>

            <div className="space-y-3 mb-6">
              {[
                { icon: "🚆", title: "Delhi → Agra: Gatimaan Express (best)", desc: "India's fastest train — 1hr 40min, departs 8:10am from Hazrat Nizamuddin station (not New Delhi). Chair Car Rs.750, Executive Rs.1,505. Book at irctc.co.in at least 3 days ahead. Returns at 5:50pm from Agra Cantonment.", color: "bg-green-50 border-green-200" },
                { icon: "🚂", title: "Delhi → Agra: Shatabdi Express (good)", desc: "2hrs from New Delhi station. Multiple departures. Chair Car Rs.515. Slightly slower but more departures. Book same way on irctc.co.in.", color: "bg-green-50 border-green-200" },
                { icon: "🚗", title: "Agra → Jaipur: Private car (only option)", desc: "No direct train. Private car 4–5hrs via NH21 highway (Rs.2,500–Rs.4,000 for the car). Option: stop at Fatehpur Sikri en route (30min detour, worth it). Book through your hotel in Agra.", color: "bg-blue-50 border-blue-200" },
                { icon: "🚂", title: "Jaipur → Delhi: Shatabdi or Pink City Express", desc: "Multiple trains daily, 4–5hrs (Rs.515–Rs.1,200). The Pink City Express (JP to NDLS) is popular. Alternatively private car 5hrs (Rs.3,000–Rs.4,500). Volvo bus also available Rs.400–Rs.600.", color: "bg-amber-50 border-amber-200" },
                { icon: "⚠️", title: "Never take a taxi from Delhi to Agra via touts", desc: "Random taxis approached at tourist spots charge Rs.5,000–Rs.8,000 and often divert to shops. Always pre-book through your hotel or use the train.", color: "bg-red-50 border-red-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* Itineraries */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Select your plan below.</p>

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
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Rs.18,000–Rs.28,000 total per person</p>
                    <p className="text-xs text-amber-600 font-light">Transport: Trains + local Metro/auto · Stay: Rs.600–Rs.1,500/night · Shared tours</p>
                  </div>
                </div>

                <DayCard day="Day 1–2" title="Delhi — Old & New"
                  items={[
                    "Day 1: Fly or train into Delhi. Check in to Paharganj (budget Rs.600–Rs.1,000/night) or Karol Bagh (Rs.800–Rs.1,500/night). Paharganj is convenient but noisy — Karol Bagh is better quality for a small price increase.",
                    "Afternoon: Old Delhi — Chandni Chowk spice market (free to walk), Jama Masjid (largest mosque in India, free entry, climb the minaret for Rs.100), Red Fort from outside at golden hour.",
                    "Dinner: Al Jawahar restaurant opposite Jama Masjid — best Mughlai food in Delhi, Rs.300–Rs.500/person. The seekh kebabs and mutton biryani are extraordinary.",
                    "Day 2: New Delhi circuit — Humayun's Tomb (Rs.600, 1.5hrs), India Gate (free, 30min), Qutub Minar (Rs.600, 1hr). Do these in order from south to north.",
                    "Evening: Connaught Place — Delhi's central market square. Walk the outer circle, have coffee at one of the colonial-era cafes. Excellent for people-watching.",
                  ]}
                  cost="Rs.1,500–Rs.2,500/day excluding accommodation" />

                <DayCard day="Day 3" title="Agra — The Taj Mahal Day"
                  items={[
                    "5:30am: Leave hotel. Take Gatimaan Express from Hazrat Nizamuddin (8:10am). Arrive Agra 9:50am.",
                    "WHY the early train: you arrive just as the Taj opens, the light is perfect, and you beat the tour groups from Delhi who drive.",
                    "10am: Taj Mahal entry (Rs.1,100 for foreigners, Rs.50 for Indians). Book online night before at asi.payumoney.com — skip the queue. Spend 2 hours inside.",
                    "1pm: Lunch at Pinch of Spice near the Taj — best restaurant in Agra, Rs.400–Rs.600/person.",
                    "2:30pm: Agra Fort (Rs.600, 1.5hrs) — the fort where Shah Jahan was imprisoned and could only see the Taj from his window. The story is extraordinary.",
                    "5pm: Mehtab Bagh across the river — free, sunset view of the Taj from behind. The best Taj Mahal photograph you'll take.",
                    "Evening train back to Delhi or overnight in Agra (Rs.800–Rs.1,500).",
                  ]}
                  cost="Rs.2,500–Rs.4,000 (entry + transport + food)" />

                <DayCard day="Day 4" title="Agra to Jaipur"
                  items={[
                    "Private car from Agra to Jaipur (4–5hrs, Rs.2,500–Rs.3,500 for the car). Split with other travellers from your guesthouse.",
                    "Stop en route: Fatehpur Sikri — Akbar's abandoned Mughal capital, 40km from Agra. Entry Rs.600. Allow 1.5hrs. Completely different from the Taj — a ghost city frozen in time.",
                    "Arrive Jaipur afternoon. Check in near old city (Rs.600–Rs.1,200/night in a haveli guesthouse).",
                    "Evening: Walk to Hawa Mahal at sunset — the Palace of Winds, best photographed from outside. Johari Bazaar behind it for street food and browsing.",
                  ]}
                  cost="Rs.2,500–Rs.4,000 (transport + entry + food)" />

                <DayCard day="Day 5–6" title="Jaipur — The Pink City"
                  items={[
                    "Day 5: 6am — Amber Fort at opening (free to climb, skip auto-rickshaw touts). 2.5 hours inside. Then Panna Meena Stepwell (free, 10 min away) — geometric beauty, empty at 9am.",
                    "Afternoon: City Palace (Rs.700) and Jantar Mantar astronomical observatory (Rs.200) — right next to each other.",
                    "5:30pm: Nahargarh Fort for sunset (Rs.50) — best view in Jaipur, the city spreads out below you in every direction.",
                    "Day 6: Hawa Mahal interior (Rs.50) — morning light comes through the 953 windows. Then shopping: Johari Bazaar for jewellery, Bapu Bazaar for textiles, Tripolia Bazaar for block prints.",
                    "Afternoon: Jal Mahal (Water Palace) — see it from the road, free. Then Sisodiya Rani Garden if you have time.",
                  ]}
                  cost="Rs.1,500–Rs.2,500/day excluding accommodation" />

                <DayCard day="Day 7" title="Jaipur to Delhi — Departure"
                  items={[
                    "Morning train to Delhi: Shatabdi Express or Pink City Express (4–5hrs, Rs.515–Rs.750). Multiple departures from 5am onwards.",
                    "If your flight is in the evening: use the Delhi time for Lodhi Garden (free, best park in Delhi for a slow morning), or the National Museum (Rs.20, world-class collection).",
                    "Delhi airport: Terminal 3 (international) is 30–45min from the city by Metro (Airport Express Line, Rs.60). Much faster than taxi during peak hours.",
                  ]}
                  cost="Rs.600–Rs.1,000 (transport)" />

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center mt-4">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 7-Day Cost (per person) · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.18,000–Rs.28,000 including accommodation, transport + all entries</span>
                </div>
              </div>
            )}

            {/* PLAN B — COUPLE */}
            {activeTab === "B" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl mb-6">
                  <span className="text-2xl">💑</span>
                  <div>
                    <p className="text-sm font-medium text-rose-800">Couple Plan — Rs.55,000–Rs.85,000 for two</p>
                    <p className="text-xs text-rose-700 font-light">Private car for full circuit · Heritage boutique hotels · Private guides</p>
                  </div>
                </div>

                <DayCard day="Day 1–2" title="Delhi — Heritage & Culture"
                  items={[
                    "Stay in Lutyens' Delhi or South Delhi — The Imperial (Rs.12,000–Rs.20,000/night) or The Claridges (Rs.8,000–Rs.14,000/night). Colonial grandeur, tree-lined avenues.",
                    "Private guide for Old Delhi: Chandni Chowk by cycle-rickshaw, Jama Masjid, Spice Market, Red Fort (Rs.1,200 for a certified guide). The stories make everything come alive.",
                    "Day 2: Humayun's Tomb (the architectural prototype for the Taj) with a guide who explains the proportions. Then Qutub Minar — at 73m, the tallest brick minaret in the world.",
                    "Dinner: Indian Accent (Rs.5,000–Rs.8,000 for two) — consistently one of the top 50 restaurants in Asia. Modern Indian fine dining. Book a week ahead.",
                  ]}
                  cost="Rs.8,000–Rs.15,000 for two per day" />

                <DayCard day="Day 3" title="Agra — Taj Mahal Sunrise"
                  items={[
                    "Private car to Agra (3.5hrs, Rs.3,500–Rs.5,000). Leave Delhi by 4:30am.",
                    "WHY drive instead of train today: you arrive at the Taj Mahal gates before they open. You'll be among the first 50 people in as the sun rises behind the dome. This moment is why people fly to India.",
                    "Stay at Oberoi Amarvilas (Rs.25,000–Rs.60,000/night) — every room faces the Taj Mahal. Wake up, open your curtains, see the Taj from your bed. The most romantic hotel view in the world.",
                    "Afternoon: Agra Fort with private historian guide (Rs.1,500–Rs.2,000). Learn why Shah Jahan was imprisoned here and what it means that he could see the Taj but not reach it.",
                    "Sunset: Mehtab Bagh — private photographer session with the Taj in the background across the Yamuna River.",
                  ]}
                  cost="Rs.30,000–Rs.65,000 for two (Oberoi night + Taj + guide)" />

                <DayCard day="Day 4" title="Fatehpur Sikri & Jaipur"
                  items={[
                    "Morning: Fatehpur Sikri en route to Jaipur — Akbar's ghost city, entry Rs.600. Private guide brings this abandoned Mughal capital to life.",
                    "Arrive Jaipur afternoon. Stay at Samode Haveli (Rs.8,000–Rs.15,000/night) or Taj Jai Mahal (Rs.10,000–Rs.18,000/night) — palace hotels in the heart of the Pink City.",
                    "Evening: Amber Fort at sunset — after the tourists leave, the fort is lit gold. Walk the ramparts alone.",
                  ]}
                  cost="Rs.12,000–Rs.20,000 for two" />

                <DayCard day="Day 5–6" title="Jaipur — Royal Rajputana"
                  items={[
                    "Day 5: Amber Fort at 6am with private guide (Rs.800–Rs.1,200) — the Sheesh Mahal mirror room was designed to reflect 1,000 candles with just one. The guide shows you how.",
                    "City Palace private tour — parts of the palace are still royal family residence. The private guide accesses stories not in any guidebook.",
                    "Day 6: Jaipur block printing workshop (Rs.2,000–Rs.3,000 for two) — learn the craft and take home your own printed fabric.",
                    "Shopping at Gem Palace (Jaipur's most prestigious jeweller since 1852) or Niro's Craft Gallery for antiques.",
                    "Final dinner: Suvarna Mahal at Taj Rambagh — Rs.5,000–Rs.8,000 for two, inside a converted palace ballroom.",
                  ]}
                  cost="Rs.8,000–Rs.15,000 for two per day" />

                <DayCard day="Day 7" title="Jaipur to Delhi — Last Morning"
                  items={[
                    "Last morning: Nahargarh Fort at dawn — watch the sun rise over Jaipur from the hilltop fort. Completely empty at 6am.",
                    "Private car back to Delhi (5hrs, Rs.4,000–Rs.5,500) or Shatabdi train (4.5hrs, book business class for Rs.1,200).",
                    "Delhi: if time before flight, Lodhi Art District — Delhi's open-air street art gallery. Excellent for final photos.",
                  ]}
                  cost="Rs.5,000–Rs.8,000 for two (transport + activities)" />

                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center mt-4">
                  <span className="text-xs text-rose-700 uppercase tracking-wide">Total 7-Day Cost (for two) · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.55,000–Rs.85,000 excluding the Oberoi Amarvilas night</span>
                </div>
              </div>
            )}

            {/* PLAN C — INTERNATIONAL */}
            {activeTab === "C" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">International First-Timers Plan — Rs.40,000–Rs.70,000 for two</p>
                    <p className="text-xs text-blue-600 font-light">Designed specifically for first-time India visitors · Guided, comfortable, stress-free</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                  <p className="text-sm text-blue-800 font-medium mb-2">Before you arrive — essential reading</p>
                  <ul className="space-y-1.5">
                    {[
                      "Book all accommodation before arriving — walk-in prices are 2-3x higher",
                      "Download Ola app (Indian Uber) and add your international card before landing",
                      "Buy a local SIM card at the airport — Airtel or Vi, Rs.300 for 1 month unlimited",
                      "Book the Taj Mahal ticket online at asi.payumoney.com — queue skip is essential",
                      "The water is not safe to drink anywhere — always bottled",
                    ].map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-blue-700 font-light">
                        <span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>{tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <DayCard day="Day 1" title="Delhi — Gentle Start"
                  items={[
                    "Fly into IGI Airport Terminal 3. Take the Airport Express Metro to New Delhi station (Rs.60, 20min) — much easier than a taxi for first-timers.",
                    "Stay in Lutyens' Delhi or Connaught Place area — clean, safe, central (Rs.3,000–Rs.6,000/night mid-range).",
                    "Day 1: Rest. Short walk to India Gate (15 min from most CP hotels). Dinner at Bukhara at ITC Maurya — the world's most famous Indian restaurant. Rs.4,000–Rs.6,000 for two. Worth it on your first night.",
                    "The first evening in India is always overwhelming. Let it be. Don't try to do too much.",
                  ]}
                  cost="Rs.4,000–Rs.7,000 for two" />

                <DayCard day="Day 2" title="Delhi — The Monuments"
                  items={[
                    "Book a guided day tour — Rs.2,000–Rs.3,500/person from your hotel. This is one day where having a guide makes everything easier.",
                    "Standard circuit: Humayun's Tomb, Qutub Minar, India Gate, Lodhi Garden.",
                    "Old Delhi afternoon: Chandni Chowk by cycle-rickshaw, Jama Masjid (largest mosque in India), Red Fort exterior. A guide here is essential — without context it's chaos; with context it's extraordinary.",
                    "Food tour: the best way to eat safely as a first-timer. Your guide takes you to verified local spots.",
                  ]}
                  cost="Rs.3,000–Rs.6,000 for two (guided tour)" />

                <DayCard day="Day 3" title="Agra — Taj Mahal"
                  items={[
                    "Gatimaan Express: 8:10am from Hazrat Nizamuddin to Agra (1hr 40min). Your hotel can arrange transfer to the station.",
                    "Arrive 9:50am. Pre-booked guide at Agra station (Rs.800–Rs.1,500) — the difference between understanding the Taj and just photographing it.",
                    "Taj Mahal 10am–12pm. This is the most important thing: bring a small bag only. No large backpacks (storage available outside). No tripods.",
                    "Lunch: Esphahan at Oberoi Amarvilas — yes, you can have lunch there even without staying. Rs.3,000–Rs.4,000 for two with a Taj view from the restaurant.",
                    "Agra Fort 2–4pm. Mehtab Bagh sunset. Evening Gatimaan back or stay overnight.",
                  ]}
                  cost="Rs.4,000–Rs.7,000 for two" />

                <DayCard day="Day 4" title="Agra to Jaipur"
                  items={[
                    "Private AC car to Jaipur with an English-speaking driver (Rs.3,500–Rs.5,000). Book through your Delhi hotel before leaving.",
                    "En route: Fatehpur Sikri. Your driver explains its significance — abandoned because the wells ran dry, a city that existed for only 14 years.",
                    "Arrive Jaipur afternoon. Stay in a heritage haveli hotel — Alsisar Haveli or Dera Rawatsar (Rs.4,000–Rs.8,000/night). These properties explain Rajput culture better than any guidebook.",
                    "Evening elephant: ride into the old city at dusk — controversial but many first-timers want this experience. Ask your hotel for the most ethical operator.",
                  ]}
                  cost="Rs.4,000–Rs.7,000 for two" />

                <DayCard day="Day 5–6" title="Jaipur — The Pink City"
                  items={[
                    "Day 5: Amber Fort with guide (Rs.500–Rs.800 for a certified Archaeological Survey of India guide). Book at the fort entrance, not from touts outside.",
                    "City Palace (still partially royal residence), Jantar Mantar UNESCO site.",
                    "Evening: Chokhi Dhani — Rajasthani village experience (Rs.700–Rs.1,000/person, all-inclusive). Puppet shows, camel rides, folk music, traditional food. Perfect for first-timers.",
                    "Day 6: Hawa Mahal, bazaar shopping with a local guide (they know which shops are genuine vs tourist traps), cooking class (Rs.1,500–Rs.2,500/person).",
                  ]}
                  cost="Rs.3,000–Rs.6,000 for two per day" />

                <DayCard day="Day 7" title="Jaipur to Delhi — Departure"
                  items={[
                    "Shatabdi train to Delhi (4.5hrs). Book the business class seat (Rs.1,200) — wider, quieter, complimentary meal.",
                    "Delhi: if you have 4+ hours before your flight, Lodhi Art District is walkable and excellent. Or just rest at your hotel.",
                    "Airport: go 3.5hrs early for international departures from IGI — immigration and security can take time.",
                  ]}
                  cost="Rs.1,500–Rs.2,500 for two" />

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center mt-4">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 7-Day Cost (for two) · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.40,000–Rs.70,000 including accommodation, transport + entries</span>
                </div>
              </div>
            )}

            {/* PLAN D — LUXURY */}
            {activeTab === "D" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">🏰</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Luxury Plan — Rs.2,00,000–Rs.5,00,000 for two</p>
                    <p className="text-xs text-purple-600 font-light">Palace hotels · Private guides · Exclusive experiences</p>
                  </div>
                </div>

                {[
                  { city: "Delhi", hotel: "The Imperial (Rs.18,000–Rs.30,000/night)", highlight: "1930s colonial landmark. The Daniell's Tavern serves the finest butter chicken in Delhi. Private heritage walk with the hotel historian." },
                  { city: "Agra", hotel: "Oberoi Amarvilas (Rs.30,000–Rs.65,000/night)", highlight: "Every room faces the Taj Mahal. Wake up to it. Watch it at sunset from the pool. The only hotel in India worth almost any price." },
                  { city: "Jaipur", hotel: "Rambagh Palace (Rs.25,000–Rs.45,000/night)", highlight: "The former palace of the Maharaja of Jaipur. Polo grounds, three restaurants, a museum wing. You don't stay here — you're a guest of the royal family." },
                ].map((item) => (
                  <div key={item.city} className="mb-4 p-5 bg-white rounded-xl border border-parchment-2">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2" />
                      <div>
                        <p className="font-medium text-sm text-ink mb-0.5">{item.city} — {item.hotel}</p>
                        <p className="text-xs text-gray-700 font-light leading-relaxed">{item.highlight}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-gold/10 border border-gold/30 rounded-xl p-5 mt-2">
                  <p className="font-medium text-sm text-ink mb-3">Exclusive experiences to add:</p>
                  <ul className="space-y-2">
                    {[
                      "Taj Mahal at private dawn access (before public opening) — Rs.10,000–Rs.20,000 arranged through Oberoi",
                      "Helicopter from Delhi to Agra — 1hr vs 2hrs, Rs.25,000–Rs.40,000/person",
                      "Private cooking class with a Rajput royal family member in Jaipur — arranged through Rambagh",
                      "Hot air balloon over Jaipur at sunrise — Rs.8,000–Rs.12,000/person",
                      "Private Kathak dance performance at City Palace after hours",
                    ].map((e, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted font-light">
                        <span className="text-gold mt-0.5 flex-shrink-0">✦</span>{e}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center mt-4">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 7-Day Cost (for two) · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.2,00,000–Rs.5,00,000 — an unforgettable India experience</span>
                </div>
              </div>
            )}
          </section>

          {/* TAJ MAHAL GUIDE */}
          <section id="taj" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🕌 The Complete Taj Mahal Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The Taj Mahal is the reason most people visit the Golden Triangle. Here&apos;s everything you need to know to experience it properly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: "Best time to visit", icon: "🌅", content: "Sunrise — arrive 30 min before gates open (6am in summer, 6:30am Oct–Feb). The marble glows pink-gold, there are fewer than 100 people inside, and the light is extraordinary. By 9am it's crowded. By 11am it's packed and hot." },
                { title: "Entry tickets", icon: "🎫", content: "Rs.1,100 for foreign tourists (includes covers for your shoes). Rs.50 for Indian citizens. Book online at asi.payumoney.com the night before — skips the 45-minute queue. The ticket also covers Agra Fort on the same day." },
                { title: "What to bring", icon: "🎒", content: "Small bag only (large bags stored outside). Camera — tripods not allowed. Water (sold inside). Comfortable shoes — you remove them at the main mausoleum entrance. Do NOT bring: food, tobacco, lighter." },
                { title: "How long to spend", icon: "⏱️", content: "2 hours is ideal. 1 hour feels rushed. 3+ hours gets repetitive. Spend 20 min at the main gate, 45 min at the mausoleum, 30 min in the gardens, 20 min at the mosque on the left side (same structure as the mausoleum, 1/10th of the visitors)." },
                { title: "Photography tips", icon: "📸", content: "Best shot: from the reflecting pool in the central pathway, crouching down — the pool doubles the Taj. The 'holding the Taj' shot: stand 100m from the main entrance, hold your arm up. Sunrise: shoot facing east, the light catches the marble dome perfectly." },
                { title: "Free Taj view", icon: "🌉", content: "Mehtab Bagh (Moonlit Garden) across the Yamuna river — Rs.300 entry (or free from the river bank). The sunset view of the Taj from here, with the river in the foreground, is arguably better than from inside." },
              ].map((item) => (
                <div key={item.title} className="bg-parchment rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{item.icon}</span>
                    <p className="font-medium text-sm text-stone-900">{item.title}</p>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>

            <div className="bg-ink rounded-xl p-5 text-center">
              <p className="font-serif text-base text-white font-light mb-1">The Taj Mahal fact that changes everything</p>
              <p className="text-sm text-white/60 font-light leading-relaxed max-w-[520px] mx-auto">
                The Taj Mahal took 22 years and 20,000 workers to build (1632–1653). It was built by Shah Jahan as a tomb for his favourite wife Mumtaz Mahal, who died in childbirth. Shah Jahan was later imprisoned by his own son in Agra Fort — from where he could see the Taj but never reach it. He was buried next to Mumtaz Mahal in the Taj — the only asymmetry in an otherwise perfectly symmetrical building.
              </p>
            </div>
          </section>

          {/* Budget table */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">💑 Couple</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">🌍 Intl.</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">🏰 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (7N)", "₹4,200–₹10,500",  "₹17,500–₹35,000",  "₹14,000–₹28,000",   "₹70,000–₹2,00,000"],
                    ["🍽 Food & Drinks",      "₹3,500–₹6,000",   "₹5,000–₹10,000",   "₹6,000–₹10,000",    "₹14,000–₹28,000"],
                    ["🚆 Transport",          "₹3,000–₹5,000",   "₹6,000–₹9,000",    "₹5,000–₹8,000",     "₹10,000–₹20,000"],
                    ["🎯 Entries + Guides",   "₹3,500–₹5,500",   "₹4,000–₹7,000",    "₹5,000–₹8,000",     "₹10,000–₹25,000"],
                    ["🛍 Shopping (optional)", "₹2,000–₹5,000",   "₹3,000–₹8,000",    "₹3,000–₹8,000",     "₹10,000+"],
                    ["TOTAL (per person)",    "₹18,000–₹28,000", "₹35,000–₹65,000",  "₹33,000–₹60,000",   "₹1,20,000–₹2,80,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">All prices INR 2026 per person unless stated. Taj Mahal entry is Rs.1,100 for foreigners, Rs.50 for Indian nationals.</p>
          </section>

          {/* Affiliate Block */}
          <AffiliateBlock
            destination="Delhi Agra Jaipur Golden Triangle"
            hotels={[
              { name: "The Imperial", type: "5★ Colonial · New Delhi", price: "From ₹18,000/night", rating: "5", badge: "Best in Delhi", url: "https://www.booking.com/hotel/in/the-imperial.html?aid=2820480" },
              { name: "Oberoi Amarvilas", type: "5★ · Taj Mahal view · Agra", price: "From ₹30,000/night", rating: "5", badge: "Most romantic", url: "https://www.booking.com/hotel/in/the-oberoi-amarvilas-agra.html?aid=2820480" },
              { name: "Rambagh Palace", type: "5★ Palace · Jaipur", price: "From ₹25,000/night", rating: "5", badge: "Former palace", url: "https://www.booking.com/hotel/in/rambagh-palace-jaipur.html?aid=2820480" },
              { name: "Samode Haveli", type: "Heritage · Old City · Jaipur", price: "From ₹8,000/night", rating: "4", badge: "Best value", url: "https://www.booking.com/hotel/in/samode-haveli.html?aid=2820480" },
            ]}
            activities={[
              { name: "Taj Mahal Sunrise Tour with Guide",       duration: "4 hours",   price: "From ₹2,500/person", badge: "Must do",       url: `https://www.getyourguide.com/s/?q=agra&partner_id=PSZA5UI` },
              { name: "Old Delhi Food & Heritage Walk",          duration: "3.5 hours", price: "From ₹1,200/person", badge: "Top rated",      url: `https://www.getyourguide.com/s/?q=delhi&partner_id=PSZA5UI` },
              { name: "Amber Fort Guided Tour — Jaipur",        duration: "3 hours",   price: "From ₹800/person",  url: `https://www.getyourguide.com/s/?q=jaipur&partner_id=PSZA5UI` },
              { name: "Hot Air Balloon Ride — Jaipur",          duration: "1.5 hours", price: "From ₹8,500/person", badge: "Unforgettable", url: `https://www.getyourguide.com/s/?q=jaipur&partner_id=PSZA5UI` },
              { name: "Fatehpur Sikri Day Trip from Agra",      duration: "Half day",  price: "From ₹1,800/person", url: `https://www.getyourguide.com/s/?q=agra&partner_id=PSZA5UI` },
            ]}
          />

          <Stay22Widget destination="New Delhi, India" label="Golden Triangle" />

          {/* Destination Gallery */}
          <DestinationGallery
            title="Golden Triangle — Must-See Places"
            subtitle="Click each thumbnail to explore the most iconic monuments of the Golden Triangle."
            spots={[
              { name: "Taj Mahal, Agra",        query: "taj mahal agra sunrise india marble",           desc: "The world's most beautiful building — a white marble mausoleum built 1632–1653. Arrive at sunrise. You'll spend 2 hours and wish it were more." },
              { name: "Amber Fort, Jaipur",      query: "amber fort jaipur rajasthan sunrise hill",      desc: "The 16th-century Rajput fort rising above Maota Lake. The Sheesh Mahal mirror hall lit by a single candle is worth the entire trip to Jaipur." },
              { name: "Red Fort, Delhi",         query: "red fort delhi india mughal architecture",       desc: "The massive red sandstone Mughal fortress that served as the seat of the Mughal Empire for 200 years. The evening sound-and-light show is excellent." },
              { name: "Humayun's Tomb, Delhi",   query: "humayun tomb delhi india garden mughal",        desc: "The architectural forerunner of the Taj Mahal — built 90 years before it. Far less crowded, equally beautiful. India's first garden tomb." },
              { name: "Hawa Mahal, Jaipur",      query: "hawa mahal jaipur pink city facade india",     desc: "The Palace of Winds — 953 small windows built so royal women could observe street life unseen. Best photographed from outside at sunrise." },
            ]}
          />

          {/* Route Maps */}
          <section id="maps" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗺️ Route Maps</h2>
            <p className="text-sm text-muted font-light mb-6">Open in Google Maps the night before each day. All routes tested.</p>
            <div className="space-y-4">
              <RouteCard label="Delhi Day 2" day="Old Delhi Heritage Circuit"
                stops={["Chandni Chowk Metro", "Jama Masjid", "Red Fort", "Spice Market", "Paranthe Wali Gali"]}
                distance="3km · Best by cycle-rickshaw + walking · Full morning"
                color="border-red-200 bg-red-50"
                note="Start at Chandni Chowk Metro (Yellow Line). Walk east to Jama Masjid first — it gets crowded by 11am. Red Fort is better in afternoon light."
                url="https://www.google.com/maps/dir/Chandni+Chowk+Delhi/Jama+Masjid+Delhi/Red+Fort+Delhi" />

              <RouteCard label="Delhi Day 2" day="New Delhi Monument Circuit"
                stops={["Qutub Minar", "Humayun's Tomb", "India Gate", "Lodhi Garden"]}
                distance="25km · Private car or Metro + auto · Full day"
                color="border-orange-200 bg-orange-50"
                note="Qutub Minar is south Delhi — start there in the morning. Humayun's Tomb is central. India Gate is a short drive. Finish with Lodhi Garden at sunset."
                url="https://www.google.com/maps/dir/Qutub+Minar+Delhi/Humayun+Tomb+Delhi/India+Gate+Delhi/Lodhi+Garden+Delhi" />

              <RouteCard label="Agra Day" day="Taj Mahal Full Day Circuit"
                stops={["Taj Mahal 6am", "Agra Fort 2pm", "Mehtab Bagh sunset"]}
                distance="10km total · Auto-rickshaw between sites · One full day"
                color="border-amber-200 bg-amber-50"
                note="Taj → Agra Fort is a 10-min auto (Rs.100). Agra Fort → Mehtab Bagh is another 10-min auto (Rs.100). The three form a perfect triangle across the Yamuna."
                url="https://www.google.com/maps/dir/Taj+Mahal+Agra/Agra+Fort/Mehtab+Bagh+Agra" />

              <RouteCard label="Jaipur Day 1" day="The Fort & Palace Circuit"
                stops={["Amber Fort 6am", "Panna Meena Stepwell", "City Palace", "Jantar Mantar", "Nahargarh Fort sunset"]}
                distance="22km · Private car or auto · Full day"
                color="border-pink-200 bg-pink-50"
                note="Amber Fort is north of the city — always first. City Palace and Jantar Mantar are next to each other. Nahargarh Fort is southwest — perfect for sunset."
                url="https://www.google.com/maps/dir/Amber+Fort+Jaipur/Panna+Meena+Kund+Jaipur/City+Palace+Jaipur/Jantar+Mantar+Jaipur/Nahargarh+Fort+Jaipur" />
            </div>
          </section>

          {/* Mistakes */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { icon: "🕌", title: "Visiting the Taj Mahal after 9am",
                  desc: "Between 10am and 1pm the Taj has 15,000–20,000 visitors. You wait 45 minutes to enter the mausoleum. The marble is hot. The light is harsh. Arrive at 6am. A completely different experience.", color: "bg-white border-parchment-2" },
                { icon: "🏙️", title: "Spending only 1 day in Delhi",
                  desc: "Delhi has more UNESCO World Heritage Sites than any other Indian city (3 within the city limits). Rushing it means you see nothing properly. Give Delhi 2 days minimum.", color: "bg-white border-parchment-2" },
                { icon: "🚗", title: "Booking a taxi from touts at tourist sites",
                  desc: "The men who approach you outside the Taj, Red Fort or Amber Fort with 'very good price taxi' are not giving good prices. They earn commission from shops they take you to. Use Ola/Uber or pre-book through your hotel.", color: "bg-white border-parchment-2" },
                { icon: "🏨", title: "Staying in the wrong area of Delhi",
                  desc: "Paharganj (Main Bazar) is convenient but exhausting — touts, noise, narrow alleys. Connaught Place, Karol Bagh, or South Delhi (Hauz Khas) are far better bases for a relaxed experience.", color: "bg-white border-parchment-2" },
                { icon: "🛍️", title: "Shopping at 'government approved' shops",
                  desc: "There are no government-approved shops. This is a scam targeting first-time visitors. The phrase is used by touts and drivers to take you to overpriced tourist shops. Buy from fixed-price stores or negotiate at markets.", color: "bg-white border-parchment-2" },
                { icon: "⏰", title: "Trying to do the Taj and Fatehpur Sikri in one day",
                  desc: "Taj Mahal deserves half a day alone. Fatehpur Sikri is another 1.5–2 hours. Doing both properly means an exhausting 12-hour day. Either give Agra 2 days or visit Fatehpur Sikri en route to Jaipur.", color: "bg-white border-parchment-2" },
              ].map((m) => <TipCard key={m.title} {...m} />)}
            </div>
          </section>

          {/* Pro Tips */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🌙", title: "Taj Mahal on full moon nights", desc: "On 5 nights around every full moon, the Taj is open from 8:30pm–12:30am (except Fri and Ramadan). Only 400 tickets are issued at Rs.750 each. Book a month ahead at asi.payumoney.com. Seeing the Taj at night is transcendent.", color: "bg-amber-50 border-amber-200" },
                { icon: "🍛", title: "The best butter chicken is in Delhi", desc: "Moti Mahal in Daryaganj, Delhi — the restaurant that claims to have invented butter chicken in 1948. Rs.400–Rs.600 for a full meal. Whether the claim is true or not, the butter chicken is extraordinary.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚇", title: "Delhi Metro is excellent", desc: "Clean, air-conditioned, cheap (Rs.15–Rs.60 per trip), and reaches every major tourist site. Buy a tourist card at the airport station (Rs.100 + deposit for unlimited rides). Faster than any car in traffic.", color: "bg-blue-50 border-blue-200" },
                { icon: "📸", title: "Humayun's Tomb is less crowded than the Taj", desc: "Built 90 years before the Taj, it's the architectural prototype. Equally beautiful gardens, same Mughal geometry. On a Tuesday morning there might be 20 visitors. The Taj has 20,000. The comparison is staggering.", color: "bg-blue-50 border-blue-200" },
                { icon: "🏪", title: "Best shopping in Jaipur", desc: "Johari Bazaar for gemstones and gold. Bapu Bazaar for textiles. Tripolia Bazaar for lac bangles and traditional handicrafts. Kripal Kumbh for blue pottery. Always negotiate — start at 40% of the asking price.", color: "bg-rose-50 border-rose-200" },
                { icon: "🌅", title: "Hot air balloon over Jaipur at sunrise", desc: "The best view of the Pink City — Amber Fort, Nahargarh, City Palace all visible from above. Rs.8,000–Rs.12,000/person. Book through Sky Waltz or Skyline Aviation. 1 hour flight, champagne breakfast after.", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* CTA */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Planned for You?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group and budget — we&apos;ll send a personalised Golden Triangle itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Golden Triangle Trip →
              </button>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days for the Golden Triangle?", a: "7 days is ideal — 2-3 days Delhi, 1-2 days Agra, 2-3 days Jaipur. 5 days is the minimum. 10 days lets you add Fatehpur Sikri, Mathura and Pushkar." },
                { q: "What is the best time to see the Taj Mahal?", a: "Sunrise — arrive 30 minutes before gates open (6am summer, 6:30am Oct–Feb). The marble glows pink-gold, fewer than 100 people inside. By 9am it's crowded. Book entry online at asi.payumoney.com the night before." },
                { q: "How much does the Golden Triangle cost?", a: "Budget solo: Rs.18,000–Rs.28,000 for 7 days. Couple mid-range: Rs.55,000–Rs.85,000 for two. International first-timers: Rs.40,000–Rs.70,000 for two. Luxury: Rs.2,00,000–Rs.5,00,000 for two." },
                { q: "Best way to get from Delhi to Agra?", a: "Gatimaan Express — 1hr 40min, departs 8:10am from Hazrat Nizamuddin station, Rs.750 Chair Car. Book at irctc.co.in. Never take a taxi from touts — they charge 3x and divert to shops." },
                { q: "Is India safe for first-time visitors?", a: "Yes — the Golden Triangle is one of the safest and most tourist-friendly routes in India. Use Ola/Uber instead of auto-rickshaws at tourist sites. Keep your hotel card. Don't accept 'government approved' shop recommendations from drivers. Everything else is straightforward." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Extend Your India Trip</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Rajasthan 7 Days — Royal Circuit",   href: "/blog/rajasthan-7-days",   soon: false },
                { label: "Goa in 3 Days — Complete Guide",     href: "/blog/goa-3-days",          soon: false },
                { label: "Kerala 5 Days — Backwaters + Hills", href: "/blog/kerala-5-days",       soon: false },
                { label: "Browse All India Packages",          href: "/#packages",                soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="golden-triangle-7-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
