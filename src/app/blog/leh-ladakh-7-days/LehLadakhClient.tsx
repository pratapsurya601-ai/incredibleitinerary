"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import DestinationGallery from "@/components/blog/DestinationGallery";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import Stay22Widget from "@/components/ui/Stay22Widget";
import SmartImage from "@/components/ui/SmartImage";
import RelatedGuides from "@/components/blog/RelatedGuides";
import CombineWith from "@/components/blog/CombineWith";
import Breadcrumb from "@/components/blog/Breadcrumb";

const TOC = [
  { id: "honest",       emoji: "⚡", label: "The honest truth about Ladakh" },
  { id: "plan",         emoji: "🎯", label: "Pick Your Plan" },
  { id: "acclimatise",  emoji: "🫁", label: "Acclimatisation Guide" },
  { id: "howtoreach",   emoji: "✈️", label: "Fly vs Drive vs Bike" },
  { id: "itinerary",    emoji: "📅", label: "The Itineraries" },
  { id: "places",       emoji: "📍", label: "The Key Destinations" },
  { id: "permits",      emoji: "📋", label: "Permits Guide" },
  { id: "budget",       emoji: "💰", label: "Budget Breakdown" },
  { id: "mistakes",     emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",         emoji: "💡", label: "Pro Tips" },
  { id: "faq",          emoji: "❓", label: "FAQ" },
];

function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const u = () => { const e = document.documentElement; setP(Math.min(100, (e.scrollTop / (e.scrollHeight - e.clientHeight)) * 100)); };
    window.addEventListener("scroll", u, { passive: true });
    return () => window.removeEventListener("scroll", u);
  }, []);
  return <div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2"><div className="h-full bg-blue-500 transition-all duration-100" style={{ width: `${p}%` }} /></div>;
}

function ShareBar() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      <a href={`mailto:?subject=Leh Ladakh 7-Day Guide&body=${typeof window !== "undefined" ? window.location.href : ""}`} className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://twitter.com/intent/tweet?text=Leh%20Ladakh%207-Day%20Guide&url=${typeof window !== "undefined" ? window.location.href : ""}`} target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
      <button onClick={() => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">{copied ? "✓ Copied" : "Copy Link"}</button>
    </div>
  );
}

function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden mb-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors">
        <div className="flex items-center gap-3"><span className="font-serif text-xl text-blue-600 font-light">{day}</span><span className="text-sm text-ink font-medium">{title}</span></div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">{items.map((item, i) => <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed"><span className="text-blue-400 mt-1 flex-shrink-0 text-xs">●</span>{item}</li>)}</ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2"><span className="text-xs text-muted font-light">Est. cost: </span><span className="text-xs font-medium text-blue-600">{cost}</span></div>
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
        <span className={`text-blue-500 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <div className="px-5 pb-5 pt-1 border-t border-parchment-2"><p className="text-sm text-muted font-light leading-relaxed">{a}</p></div>}
    </div>
  );
}

function TipBox({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
  return (
    <div className={`rounded-xl p-4 border ${color}`}>
      <div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{icon}</span><div><p className="font-medium text-sm text-ink mb-1">{title}</p><p className="text-xs text-gray-700 font-light leading-relaxed">{desc}</p></div></div>
    </div>
  );
}

export default function LehLadakhClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A"|"B"|"C"|"D">("B");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget",    sub: "₹20k–35k total" },
    { id: "B" as const, emoji: "🏍️", label: "Bike Trip", sub: "Royal Enfield" },
    { id: "C" as const, emoji: "💑", label: "Couple",    sub: "₹50k–80k for two" },
    { id: "D" as const, emoji: "🎒", label: "First-Timer",sub: "Fly in, car out" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Leh Ladakh" />
      <main className="bg-cream min-h-screen">

        {/* HERO */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage imageKey="ladakhHero" fallback="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1600&q=85" alt="Pangong Lake Ladakh blue water mountains" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Leh Ladakh 7 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-blue-600 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">India&apos;s Bucket List Trip</span>
                <span className="text-white/60 text-xs">March 21, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">16 min read</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Leh Ladakh in 7 Days:<em className="italic text-blue-300"> The Complete Road Trip Guide</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">Pangong Lake · Nubra Valley · Khardung La · Magnetic Hill — 4 complete plans, acclimatisation guide, fly vs drive, and the altitude mistake that sends 30% of tourists back early.</p>
            </div>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted"><span>🏔️ Ladakh</span><span>·</span><span>🗓 7 Days</span><span>·</span><span>💰 From ₹20,000</span></div>
          </div>

          {/* HONEST INTRO */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ The honest truth about Ladakh</h2>
            <blockquote className="border-l-4 border-blue-500 pl-6 mb-6 bg-blue-50 rounded-r-xl py-4 pr-4">
              <p className="font-serif text-[1.05rem] italic text-ink-mid leading-relaxed">Ladakh is not a comfortable destination. It will test you — altitude sickness, cold nights, basic accommodation, long drives on rough roads. Every person who goes says it was the best trip of their life. These two facts are not unrelated.</p>
            </blockquote>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">Leh sits at 3,524m above sea level. Khardung La — one of the world&apos;s highest motorable passes — is at 5,359m. The air has 40% less oxygen than at sea level. Your body needs time to adjust. The #1 mistake tourists make is arriving and immediately going sightseeing. Don&apos;t.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">The reward for respecting Ladakh: Pangong Lake&apos;s blue that doesn&apos;t look real. The silence of Nubra Valley&apos;s sand dunes at night. The Milky Way from 4,000m with zero light pollution. The feeling of being somewhere genuinely extraordinary.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "🏔️", val: "3,524m", label: "Leh altitude" },
                { icon: "🛣️", val: "479km", label: "Manali to Leh" },
                { icon: "🗓️", val: "Jun–Sep", label: "Only window" },
                { icon: "💰", val: "₹20,000+", label: "Budget from" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <p className="font-serif text-lg font-light text-ink">{s.val}</p>
                  <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PICK PLAN */}
          <section id="plan" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🎯 Pick Your Plan</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-blue-400 hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-blue-600 mt-2 font-medium group-hover:underline">Plan {p.id} →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ACCLIMATISATION */}
          <section id="acclimatise" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🫁 Acclimatisation Guide — Read This Before Anything Else</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">This section will determine whether your Ladakh trip is extraordinary or a medical emergency. Not exaggerating.</p>
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-6">
              <p className="font-semibold text-red-800 mb-3 text-sm">⚠️ The Golden Rule of Ladakh</p>
              <p className="text-sm text-red-700 font-light leading-relaxed mb-3">When you arrive in Leh — whether by flight or road — <strong className="font-semibold">rest for the first 24–48 hours completely</strong>. No trekking. No sightseeing. No alcohol. Just water, food and sleep.</p>
              <p className="text-sm text-red-700 font-light leading-relaxed">30% of tourists who fly in experience acute mountain sickness. The cure is almost always the same: descend. Don&apos;t let this happen to you by being patient on Day 1–2.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: "Day 1 — Do nothing", icon: "😴", desc: "Arrive, check in, eat light, drink 3–4L water, sleep early. Don&apos;t unpack energetically. Don&apos;t go for a walk. Your body is working hard just breathing.", color: "bg-blue-50 border-blue-200" },
                { title: "Day 2 — Gentle only", icon: "🚶", desc: "Short walks around Leh market. Shanti Stupa (easy walk). Leh Palace (not the full climb yet). Nothing above 3,800m on Day 2.", color: "bg-blue-50 border-blue-200" },
                { title: "Symptoms to watch", icon: "⚕️", desc: "Headache, nausea, dizziness, breathlessness at rest, confusion. If severe — descend immediately to lower altitude. Don&apos;t sleep it off above 4,000m.", color: "bg-red-50 border-red-200" },
                { title: "Diamox — should you take it?", icon: "💊", desc: "Acetazolamide (Diamox) helps prevent AMS. Take 125–250mg twice daily starting the day before arrival. Consult a doctor. It causes frequent urination — drink more water.", color: "bg-amber-50 border-amber-200" },
              ].map((item) => (
                <div key={item.title} className={`rounded-xl p-4 border ${item.color}`}>
                  <div className="flex items-center gap-2 mb-2"><span className="text-xl">{item.icon}</span><p className="font-medium text-sm text-ink">{item.title}</p></div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* HOW TO REACH */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">✈️ Fly vs Drive vs Bike — Which Should You Choose?</h2>
            <div className="space-y-3 mb-6">
              {[
                { icon: "✈️", title: "Fly to Leh (fastest, hardest on body)", desc: "Delhi to Leh: 1hr 15min. IndiGo, Air India, GoFirst. Book 3–4 weeks ahead (Rs.4,000–Rs.10,000). Morning flights only — afternoon winds make landing difficult. The view of the Himalayas from the plane is extraordinary. Problem: acute altitude jump from sea level to 3,524m in 75 minutes. Mandatory 2-day rest.", color: "bg-blue-50 border-blue-200", badge: "Best for first-timers with limited time" },
                { icon: "🚗", title: "Drive Manali–Leh Highway (2 days, epic scenery)", desc: "479km, 2 days via Keylong/Jispa. Open late May to mid-October. Passes through Baralacha La (4,892m), Lachung La (5,059m), Tanglang La (5,328m). Self-drive or hire a driver (Rs.8,000–Rs.12,000 for the car). Natural acclimatisation as you gain altitude gradually.", color: "bg-green-50 border-green-200", badge: "Best experience, natural acclimatisation" },
                { icon: "🚗", title: "Drive Srinagar–Leh Highway (1.5 days, scenic)", desc: "434km via Kargil. More accessible than Manali–Leh, open slightly earlier (May) and later (October). Via Zoji La pass (3,529m), Lamayuru monastery en route. Gentler altitude gain.", color: "bg-amber-50 border-amber-200", badge: "Better for lower acclimatisation stress" },
                { icon: "🏍️", title: "Bike trip (Manali–Leh–Manali or Srinagar loop)", desc: "India&apos;s most famous bike trip. Royal Enfield Himalayan or Bullet 500 (Rs.1,200–Rs.1,800/day hire). 7–10 days for the full loop. Requires riding experience, proper gear (helmet, jacket, gloves), and mechanical knowledge or a support vehicle. Life-changing if done right.", color: "bg-purple-50 border-purple-200", badge: "Best for experienced riders only" },
              ].map((t) => (
                <div key={t.title} className={`rounded-xl p-5 border ${t.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{t.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <p className="font-semibold text-sm text-ink">{t.title}</p>
                        <span className="text-xs bg-white/70 text-muted px-2.5 py-1 rounded-full border border-white/50">{t.badge}</span>
                      </div>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                  <div><p className="text-sm font-medium text-amber-800">Budget Plan — Rs.20,000–Rs.35,000 per person for 7 days</p><p className="text-xs text-amber-600 font-light">Fly in · Shared SUV tours · Budget guesthouses</p></div>
                </div>
                <DayCard day="Day 1–2" title="Arrive Leh — Acclimatise Only"
                  items={[
                    "Fly Delhi → Leh (morning flight). Pre-booked taxi from airport to guesthouse (Rs.400–Rs.600) — don't walk with luggage in thin air.",
                    "Day 1: Complete rest. Check in to Main Bazaar area guesthouse (Rs.600–Rs.1,200/night). Eat light — dal rice, soup. Drink 4L water. Sleep by 9pm.",
                    "Day 2: Short Leh walk only. Leh market (flat, 20 min walk). Shanti Stupa at sunset (easy path). Leh Palace exterior. Nothing strenuous.",
                    "Budget guesthouses in Leh: Hotel Shaolin, Goba Guest House, Indus Guest House — Rs.500–Rs.1,200/night with breakfast.",
                    "WHY 2 days acclimatisation: people who skip this and go to Khardung La on Day 2 end up in hospital. Not worth it.",
                  ]} cost="Rs.1,200–Rs.2,500 for 2 days" />
                <DayCard day="Day 3" title="Leh Sightseeing — Local Monasteries"
                  items={[
                    "Thiksey Monastery (19km from Leh) — most impressive monastery in Ladakh, resembles the Potala Palace in Tibet. Morning prayers at 6am are extraordinary. Entry Rs.50.",
                    "Hemis Monastery (45km) — largest and wealthiest monastery in Ladakh. Hemis Festival in July is world-famous. Entry Rs.100.",
                    "Shey Palace (15km) — ruins of the old royal palace with a giant Shakyamuni Buddha.",
                    "Hire a shared taxi for the day (Rs.1,200–Rs.1,500 split between 4 people) or rent a scooty (Rs.400–Rs.500/day) if acclimatised.",
                    "Magnetic Hill on the way back — optical illusion where vehicles appear to roll uphill. Free, 5 minutes, worth stopping.",
                  ]} cost="Rs.800–Rs.1,500" />
                <DayCard day="Day 4–5" title="Nubra Valley — Sand Dunes + Double-Hump Camels"
                  items={[
                    "Hire a shared SUV Leh → Nubra Valley (Rs.2,500–Rs.3,500/person return in shared vehicle). Shared taxis depart from Leh bus stand.",
                    "Cross Khardung La Pass (5,359m) — get out, take photos, but spend max 15–20 minutes at the top. Altitude sickness risk is high.",
                    "Nubra Valley is a high-altitude desert with sand dunes — completely unexpected in the Himalayas. Double-humped Bactrian camel rides (Rs.200–Rs.300).",
                    "Stay overnight at Diskit or Hunder village (Rs.700–Rs.1,500/night). Star gazing at night — zero light pollution, Milky Way visible.",
                    "Day 5: Diskit Monastery (giant Buddha statue overlooking the valley). Drive back to Leh via Khardung La.",
                  ]} cost="Rs.3,500–Rs.6,000 for 2 days" />
                <DayCard day="Day 6–7" title="Pangong Lake — The Blue That Doesn't Look Real"
                  items={[
                    "Shared SUV Leh → Pangong Lake via Chang La Pass (5,360m) — Rs.2,500–Rs.3,500/person return. 5hrs drive each way.",
                    "Pangong Lake — 134km long, 60% in Tibet. The colour shifts from deep blue to turquoise to green depending on the light. The most photographed lake in India. Arrive by 4pm for the sunset light.",
                    "Stay overnight at Spangmik village on the lakeside (Rs.800–Rs.1,500/night). Wake up at 5am for sunrise on the lake — empty, otherworldly.",
                    "Day 7: Drive back to Leh (5hrs). Evening flight Delhi or overnight in Leh.",
                    "WHY stay overnight at Pangong: the day-trippers leave by 6pm. The lake at dawn with nobody else there is worth the overnight.",
                  ]} cost="Rs.4,000–Rs.7,000 for 2 days" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center mt-2">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 7-Day Budget · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.20,000–Rs.35,000 per person including flights from Delhi</span>
                </div>
              </div>
            )}

            {/* PLAN B — BIKE */}
            {activeTab === "B" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">🏍️</span>
                  <div><p className="text-sm font-medium text-purple-800">Bike Trip — Manali to Leh to Manali (10–12 Days Recommended)</p><p className="text-xs text-purple-600 font-light">Royal Enfield · India&apos;s greatest road trip · Not for beginners</p></div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-6">
                  <p className="font-medium text-sm text-purple-800 mb-2">Before you start — essentials</p>
                  <ul className="space-y-1.5">{[
                    "Riding experience: minimum 2 years, highway riding mandatory",
                    "Gear: full-face helmet, riding jacket, gloves, ankle boots, rain gear",
                    "Bike: Royal Enfield Himalayan (best) or Bullet 500 (classic). Hire in Manali (Rs.1,200–Rs.1,800/day)",
                    "Spare parts: clutch + brake cables, puncture kit, basic tools",
                    "Travel in groups of 2+ bikes minimum — breakdowns on Manali–Leh highway are isolated",
                    "Book accommodation in advance on the highway — very limited options",
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-purple-700 font-light">
                      <span className="text-purple-500 mt-0.5 flex-shrink-0">✓</span>{tip}
                    </li>
                  ))}</ul>
                </div>
                <DayCard day="Day 1–2" title="Manali → Keylong → Jispa (Acclimatise on the road)"
                  items={[
                    "Start Manali early (5am). Rohtang Pass (3,978m) — traffic checkpoint, reach before 8am to avoid jams.",
                    "Keylong (114km from Manali, 3,080m) — overnight stop. Budget guesthouse Rs.500–Rs.800. Begin altitude acclimatisation.",
                    "Day 2: Keylong → Jispa (30km). Easy riding day. Jispa is a beautiful river camp at 3,280m — perfect for acclimatisation.",
                    "The Bhaga River follows you the whole way. Stop wherever you want — this is the joy of bike travel.",
                  ]} cost="Rs.1,500–Rs.2,500/day" />
                <DayCard day="Day 3" title="Jispa → Sarchu via Baralacha La (4,892m)"
                  items={[
                    "The hardest day of the trip. Baralacha La at 4,892m — your first real high altitude pass. Go slow, stop often.",
                    "Gata Loops — 21 hairpin bends. One of the most dramatic road sections in the world.",
                    "Nakee La (4,739m) and Lachung La (5,059m) — two more passes before Sarchu.",
                    "Sarchu (4,253m) — tent camps only (Rs.600–Rs.1,200 per tent). Altitude sickness risk here. Drink lots of water.",
                  ]} cost="Rs.1,200–Rs.2,000" />
                <DayCard day="Day 4" title="Sarchu → Pang → Leh via More Plains"
                  items={[
                    "Tanglang La (5,328m) — second highest motorable pass in the world. Take it slow.",
                    "More Plains — vast high-altitude plateau. Feels like riding on Mars. No fuel for 100km — fill up completely in Sarchu.",
                    "Arrive Leh evening. Check in. REST. You&apos;ve earned it.",
                    "Leh: 2 nights minimum for recovery and local sightseeing before continuing.",
                  ]} cost="Rs.1,500–Rs.2,500" />
                <DayCard day="Day 5–7" title="Leh Base — Nubra + Pangong by bike"
                  items={[
                    "Day 5: Leh monasteries by bike — Thiksey, Hemis, Shey. Acclimatisation ride.",
                    "Day 6: Leh → Nubra Valley via Khardung La (5,359m). The most famous road in India. Sand dunes and camels at night.",
                    "Day 7: Nubra → Pangong Lake via Shyok Valley road (instead of returning to Leh — saves a day). This off-road route along the Shyok River is Ladakh&apos;s most beautiful drive.",
                  ]} cost="Rs.1,500–Rs.2,500/day" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center mt-2">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total Bike Trip (Manali–Leh–Manali, 10 days) · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.25,000–Rs.45,000 per person including bike hire</span>
                </div>
              </div>
            )}

            {/* PLAN C — COUPLE */}
            {activeTab === "C" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl mb-6">
                  <span className="text-2xl">💑</span>
                  <div><p className="text-sm font-medium text-rose-800">Couple Plan — Rs.50,000–Rs.80,000 for two</p><p className="text-xs text-rose-600 font-light">Private car + driver · Boutique camps · Romantic Pangong sunrise</p></div>
                </div>
                <DayCard day="Day 1–2" title="Arrive + Leh Heritage"
                  items={[
                    "Private transfer from airport (Rs.800–Rs.1,200). Stay at The Grand Dragon or Nimmu House (Rs.5,000–Rs.12,000/night) — Ladakhi heritage architecture, mountain views.",
                    "Day 2: Leh Palace sunrise (best light on the palace at 7am). Leh market for Ladakhi handicrafts — pashmina stoles, turquoise jewellery, thangka paintings.",
                    "Evening: Shanti Stupa at sunset with a private driver — the view over Leh as the sun sets behind the Stok Kangri range is extraordinary.",
                  ]} cost="Rs.7,000–Rs.14,000 for two per day" />
                <DayCard day="Day 3" title="Monastery Circuit"
                  items={[
                    "Private SUV + driver for the day (Rs.3,500–Rs.5,000). Thiksey Monastery at 6am for morning prayers — monks in burgundy robes, butter lamps, the chanting.",
                    "Hemis Monastery — the 17th-century gompa with extraordinary murals and thangkas. Ask the monks to open the inner chamber.",
                    "Shey Palace, Stok Palace Museum. Lunch at Chopstick restaurant Leh — best momos in Ladakh.",
                  ]} cost="Rs.5,000–Rs.8,000 for two" />
                <DayCard day="Day 4–5" title="Nubra Valley — Sand Dunes Camp"
                  items={[
                    "Private SUV → Nubra Valley via Khardung La (Rs.6,000–Rs.8,000 for the car). Stop at the pass for photos — 20 min max.",
                    "Stay at Desert Nubrathala camp or Nubra Ecolodge (Rs.6,000–Rs.12,000/night for two including meals) — luxury tents with mountain views.",
                    "Evening camel ride at Hunder sand dunes at sunset — the silhouette of double-humped camels against the Karakoram mountains.",
                    "Stargazing from your camp — get the camp staff to set up a blanket outside. The Milky Way is visible with the naked eye.",
                  ]} cost="Rs.8,000–Rs.15,000 for two per day" />
                <DayCard day="Day 6–7" title="Pangong Lake — The Sunrise Moment"
                  items={[
                    "Nubra → Pangong via Shyok Valley (private SUV, Rs.5,000–Rs.7,000). More dramatic than the Chang La route.",
                    "Stay at Pangong Sarai or The Waterfront (Rs.7,000–Rs.15,000/night) — tents directly on the lakeside.",
                    "Wake at 5am. Step outside your tent. The lake changes colour from black to deep blue to turquoise as the sun rises over the mountains. The most romantic sunrise in India.",
                    "Day 7: Drive back to Leh (5hrs). Evening in Leh — dinner at Bon Appetit restaurant. Night flight or morning departure next day.",
                  ]} cost="Rs.9,000–Rs.16,000 for two per day" />
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center mt-2">
                  <span className="text-xs text-rose-700 uppercase tracking-wide">Total 7-Day Couple Cost · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.50,000–Rs.80,000 for two including flights from Delhi</span>
                </div>
              </div>
            )}

            {/* PLAN D — FIRST TIMER */}
            {activeTab === "D" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">🎒</span>
                  <div><p className="text-sm font-medium text-blue-800">First-Timer Plan — Fly in, organised tour, Rs.30,000–Rs.50,000/person</p><p className="text-xs text-blue-600 font-light">Best for first-timers · Everything pre-arranged · No logistics stress</p></div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                  <p className="font-medium text-sm text-blue-800 mb-2">Why a package makes sense for first-timers</p>
                  <p className="text-xs text-blue-700 font-light leading-relaxed">Ladakh logistics are complex — permits, shared taxis, accommodation in remote areas, altitude emergencies. A package (Rs.15,000–Rs.25,000/person) handles all of this. Once you&apos;ve been once, you can do it independently next time.</p>
                </div>
                <DayCard day="Day 1–2" title="Fly Leh + Acclimatise"
                  items={[
                    "Morning flight Delhi → Leh. Your tour operator picks you up.",
                    "Day 1 & 2: Complete rest as above. Good tour operators actually enforce this — they know what happens when tourists don&apos;t acclimatise.",
                    "Day 2 afternoon: guided local walk. Leh market, Leh Palace, Shanti Stupa. Your guide explains the Buddhist culture and history.",
                  ]} cost="Included in package" />
                <DayCard day="Day 3" title="Monastery Day"
                  items={[
                    "Guided tour: Thiksey, Hemis, Alchi monasteries. The guide makes all the difference here — the Buddhist iconography and history requires explanation.",
                    "Alchi Monastery (70km from Leh) — 11th-century monastery with extraordinary murals, UNESCO status. Most day-trippers skip it — don&apos;t.",
                  ]} cost="Included in package" />
                <DayCard day="Day 4–5" title="Nubra Valley"
                  items={[
                    "Khardung La → Nubra Valley. Your tour vehicle handles all permits.",
                    "Camel ride at Hunder dunes. Diskit Monastery. Night at a camp — your tour operator pre-books this.",
                    "Star gazing and bonfire at camp. Fellow travellers from your group become Ladakh friends.",
                  ]} cost="Included in package" />
                <DayCard day="Day 6–7" title="Pangong Lake + Departure"
                  items={[
                    "Chang La → Pangong Lake. Overnight at lakeside camp.",
                    "Sunrise at Pangong — the moment every Ladakh visitor talks about forever.",
                    "Return Leh. Depart.",
                  ]} cost="Included in package" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
                  <p className="font-medium text-sm text-blue-800 mb-2">Recommended tour operators</p>
                  <ul className="space-y-1">{["Rimo Expeditions (Leh)", "Exodus Travels (for international travellers)", "Indiahikes (for trekking focus)", "Local Leh operators via your hotel — often cheapest"].map((op, i) => (
                    <li key={i} className="text-xs text-blue-700 font-light flex items-center gap-2"><span className="text-blue-400">•</span>{op}</li>
                  ))}</ul>
                </div>
              </div>
            )}
          </section>

          {/* KEY DESTINATIONS */}
          <section id="places" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">📍 The Key Destinations</h2>
            <div className="space-y-3">
              {[
                { name: "Pangong Lake", alt: "5,360m via Chang La", color: "border-l-4 border-blue-400 bg-blue-50", desc: "134km long, 40km wide, 60% in Tibet. The colour is impossibly blue — it shifts between deep blue, turquoise and green depending on the light and time of day. 3 Idiots was filmed here. Stay overnight — the day-trippers leave at 6pm and you have it to yourself.", tips: ["Arrive afternoon for best light", "Stay overnight for sunrise", "Bring warm layers — freezing at night", "Best Oct for fewer crowds"] },
                { name: "Nubra Valley", alt: "via Khardung La 5,359m", color: "border-l-4 border-amber-400 bg-amber-50", desc: "High-altitude cold desert with sand dunes, Bactrian camels and apple orchards — an impossible landscape. Diskit Monastery overlooks the valley. The night sky here is the best in India.", tips: ["Hunder dunes at sunset", "Diskit Monastery morning", "Book camp in advance Jul–Aug", "30°C day, -5°C night in summer"] },
                { name: "Khardung La", alt: "5,359m — highest motorable pass", color: "border-l-4 border-purple-400 bg-purple-50", desc: "One of the world&apos;s highest motorable roads. The view from the top — snow-covered Karakoram peaks in every direction — is worth the cold and altitude. Max 15–20 minutes at the top. The road is rough — go slow.", tips: ["Don&apos;t linger at the top", "Go early morning (less traffic)", "Always full tank of fuel", "Closed Oct–May"] },
                { name: "Leh Town", alt: "3,524m — base for everything", color: "border-l-4 border-green-400 bg-green-50", desc: "The capital. Main Bazaar has everything — gear shops, restaurants, SIM cards, money exchange. Leh Palace overlooks the town. The surrounding monasteries — Thiksey, Hemis, Alchi — are within an hour by road.", tips: ["Main Bazaar for supplies", "Bon Appetit for best food", "Morning puja at monasteries", "Leh Palace at sunrise"] },
              ].map((place) => (
                <div key={place.name} className={`rounded-xl p-5 ${place.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <h3 className="font-serif text-lg font-normal text-ink">{place.name}</h3>
                    <span className="text-xs font-medium text-teal bg-white px-3 py-1 rounded-full border border-parchment-2">{place.alt}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed mb-3">{place.desc}</p>
                  <div className="flex flex-wrap gap-2">{place.tips.map((t) => <span key={t} className="text-[0.65rem] bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60 font-light">{t}</span>)}</div>
                </div>
              ))}
            </div>
          </section>

          {/* PERMITS */}
          <section id="permits" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">📋 Permits Guide</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-5">
              <p className="font-medium text-sm text-amber-800 mb-2">⚠️ Permits are mandatory — get them before leaving Leh</p>
              <p className="text-xs text-amber-700 font-light leading-relaxed">Nubra Valley, Pangong Lake and Tso Moriri all require Inner Line Permits (ILP). Without them you will be turned back at the checkpost. They are easy to get in Leh — don&apos;t forget.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { area: "Nubra Valley", type: "Inner Line Permit", cost: "Free", where: "DC Office, Leh or online at lahdcleh.nic.in", time: "Same day, 2hrs", docs: "ID proof, 2 passport photos", note: "Valid 7 days, covers Khardung La and Diskit" },
                { area: "Pangong Lake", type: "Inner Line Permit", cost: "Free", where: "DC Office, Leh or online", time: "Same day", docs: "ID proof, 2 passport photos", note: "Valid 7 days, covers Spangmik and Merak" },
                { area: "Tso Moriri", type: "Inner Line Permit", cost: "Free", where: "DC Office, Leh", time: "Same day", docs: "ID proof, 2 passport photos", note: "Add to Pangong permit if doing both" },
                { area: "Foreigners", type: "Protected Area Permit (PAP)", cost: "₹400 + fees", where: "DC Office or through registered travel agent", time: "1–2 days", docs: "Passport, visa, photos, travel agent letter", note: "Required for all areas above. Must travel in groups of 2+ foreigners" },
              ].map((p) => (
                <div key={p.area} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <p className="font-medium text-sm text-ink mb-3">{p.area}</p>
                  <div className="space-y-1.5 text-xs text-muted font-light">
                    <div className="flex gap-2"><span className="text-muted/60 w-14 flex-shrink-0">Type</span><span>{p.type}</span></div>
                    <div className="flex gap-2"><span className="text-muted/60 w-14 flex-shrink-0">Cost</span><span className="text-teal font-medium">{p.cost}</span></div>
                    <div className="flex gap-2"><span className="text-muted/60 w-14 flex-shrink-0">Where</span><span>{p.where}</span></div>
                    <div className="flex gap-2"><span className="text-muted/60 w-14 flex-shrink-0">Time</span><span>{p.time}</span></div>
                    <div className="flex gap-2"><span className="text-muted/60 w-14 flex-shrink-0">Note</span><span className="text-amber-700">{p.note}</span></div>
                  </div>
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
                  <th className="p-3.5 text-xs font-medium text-purple-700 text-center">🏍️ Bike</th>
                  <th className="p-3.5 text-xs font-medium text-rose-700 text-center">💑 Couple</th>
                  <th className="p-3.5 text-xs font-medium text-blue-700 text-center">🎒 First-Timer</th>
                </tr></thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["✈️ Flights/Transport", "₹5,000–₹10,000", "₹4,000–₹8,000", "₹10,000–₹20,000", "₹5,000–₹10,000"],
                    ["🏨 Accommodation (7N)", "₹4,200–₹8,400", "₹3,500–₹7,000", "₹30,000–₹60,000", "Included"],
                    ["🚗 Local Transport", "₹4,000–₹7,000", "₹8,400–₹12,600", "₹12,000–₹18,000", "Included"],
                    ["🍽 Food", "₹2,800–₹4,200", "₹2,800–₹4,200", "₹6,000–₹10,000", "Included"],
                    ["🎯 Activities+Permits", "₹1,000–₹2,000", "₹1,000–₹2,000", "₹2,000–₹4,000", "Included"],
                    ["TOTAL per person", "₹20,000–₹35,000", "₹25,000–₹45,000", "₹25,000–₹40,000", "₹30,000–₹50,000"],
                  ].map(([cat,...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v,i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <AffiliateBlock
            destination="Leh Ladakh"
            hotels={[
              { name: "The Grand Dragon Ladakh", type: "4★ · Leh", price: "From ₹6,000/night", rating: "5", badge: "Best in Leh", url: "https://www.booking.com/hotel/in/the-grand-dragon-ladakh.html?aid=2820480" },
              { name: "Nimmu House", type: "Heritage · Nimmu Village", price: "From ₹8,000/night", rating: "5", badge: "Most unique", url: "https://www.booking.com/hotel/in/nimmu-house-ladakh.html?aid=2820480" },
              { name: "Desert Nubrathala Camp", type: "Luxury Camp · Nubra", price: "From ₹5,000/night", rating: "4", badge: "Nubra pick", url: "https://www.booking.com/hotel/in/desert-nubrathala-camp.html?aid=2820480" },
              { name: "Pangong Sarai", type: "Lake Camp · Pangong", price: "From ₹4,500/night", rating: "4", badge: "Lakeside", url: "https://www.booking.com/hotel/in/pangong-sarai.html?aid=2820480" },
            ]}
            activities={[
              { name: "Pangong Lake Overnight Camp Tour", duration: "2 Days", price: "From ₹4,500/person", badge: "Must do", url: `https://www.getyourguide.com/s/?q=leh&partner_id=PSZA5UI` },
              { name: "Nubra Valley + Khardung La Tour", duration: "2 Days", price: "From ₹3,500/person", badge: "Iconic", url: `https://www.getyourguide.com/s/?q=leh&partner_id=PSZA5UI` },
              { name: "Monastery Tour — Thiksey + Hemis", duration: "Full Day", price: "From ₹1,200/person", url: `https://www.getyourguide.com/s/?q=leh&partner_id=PSZA5UI` },
              { name: "Leh Ladakh Bike Rental — Royal Enfield", duration: "Per day", price: "From ₹1,200/day", url: `https://www.getyourguide.com/s/?q=leh&partner_id=PSZA5UI` },
            ]}
          />

          <Stay22Widget destination="Leh, Ladakh, India" label="Leh Ladakh" />

          <DestinationGallery
            title="Leh Ladakh — Must-See Places"
            subtitle="India's most dramatic landscape — click to explore."
            spots={[
              { name: "Pangong Lake", query: "pangong lake ladakh blue water mountains india", desc: "134km long lake at 4,350m — the colour shifts between blue, turquoise and green. 60% of the lake is in Tibet." },
              { name: "Nubra Valley Sand Dunes", query: "nubra valley sand dunes camels ladakh himalaya", desc: "High-altitude cold desert with double-humped Bactrian camels — the most unexpected landscape in India." },
              { name: "Khardung La Pass", query: "khardung la pass ladakh highest motorable road snow", desc: "5,359m — one of the world's highest motorable passes. Snow even in August." },
              { name: "Thiksey Monastery", query: "thiksey monastery ladakh buddhist gompa mountains", desc: "12-storey monastery resembling the Potala Palace in Tibet. Morning prayers at 6am." },
              { name: "Leh Palace", query: "leh palace ladakh royal palace mountains sunset", desc: "17th-century royal palace overlooking Leh town and the Indus Valley." },
            ]}
          />

          {/* MISTAKES */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { icon: "🫁", title: "Not resting on arrival days", desc: "The single biggest mistake in Ladakh. People arrive, feel fine, go sightseeing, then collapse with AMS at night. Rest Day 1 and Day 2 completely. The monasteries will still be there on Day 3.", color: "bg-red-50 border-red-200" },
                { icon: "🗓️", title: "Coming in June without checking road status", desc: "Manali–Leh highway opens late May–early June depending on snowfall. Check current status at lahdc.nic.in or call your hotel. Flights are available year-round but accommodation in remote areas is limited pre-June.", color: "bg-white border-parchment-2" },
                { icon: "⛽", title: "Not filling fuel before remote stretches", desc: "Between Sarchu and Pang on the Manali–Leh highway: 100km with no fuel. Between Leh and Pangong: no fuel. Always fill up completely before leaving any town. Carry a 5L jerry can if on a bike.", color: "bg-white border-parchment-2" },
                { icon: "📋", title: "Forgetting permits", desc: "Nubra Valley, Pangong Lake and Tso Moriri all need Inner Line Permits. Get them at the DC Office in Leh before you leave — free and takes 2 hours. Without them you&apos;re turned back at the checkpost.", color: "bg-white border-parchment-2" },
                { icon: "🥾", title: "Underestimating the cold", desc: "Even in July–August, Pangong Lake drops to -5°C at night. Nubra Valley: 30°C day, 0°C night. Bring a proper sleeping bag (rated -10°C) if camping. The cold is sudden and extreme at altitude.", color: "bg-white border-parchment-2" },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-4 border ${m.color}`}>
                  <div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{m.icon}</span><div><p className="font-medium text-sm text-ink mb-1">{m.title}</p><p className="text-xs text-gray-700 font-light leading-relaxed">{m.desc}</p></div></div>
                </div>
              ))}
            </div>
          </section>

          {/* PRO TIPS */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🌌", title: "The Milky Way from Nubra Valley", desc: "Zero light pollution, 3,000m+ altitude, clear skies — the night sky in Nubra is the most spectacular in India. Pack a blanket, go 200m from the camp lights, lie down. Allow 20 minutes for your eyes to adjust.", color: "bg-blue-50 border-blue-200" },
                { icon: "📱", title: "BSNL only after Leh", desc: "Airtel and Jio have no signal in Nubra Valley, Pangong or on the Manali–Leh highway. Buy a BSNL SIM (Rs.149) in Leh. Even BSNL is patchy in very remote areas — download offline maps before leaving.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏍️", title: "September is the best Ladakh month", desc: "Fewer tourists than August, roads still fully open, apple harvest in Nubra, golden light. Prices drop 20–30%. Pangong Lake in September has the most beautiful colour.", color: "bg-green-50 border-green-200" },
                { icon: "🍜", title: "Eat momos and thukpa, not tourist food", desc: "Thukpa (Tibetan noodle soup) and momos (dumplings) are extraordinary in Ladakh — made fresh, exactly right for the altitude and cold. Rs.80–Rs.150. Avoid anything claiming to be 'continental' at 3,500m.", color: "bg-rose-50 border-rose-200" },
                { icon: "🎿", title: "Chadar Trek — frozen Zanskar River (Jan–Feb)", desc: "The most extreme trek in India. Walk on the frozen Zanskar River in winter — temperatures -30°C, sleeping in caves. Only for the very fit and experienced. Requires a certified guide and proper cold weather gear.", color: "bg-purple-50 border-purple-200" },
                { icon: "💧", title: "3–4 litres of water daily, no negotiations", desc: "Dehydration dramatically worsens altitude sickness. At 3,500m+ you lose water faster through breathing. Drink constantly even when not thirsty. Carry a 2L bottle and refill it twice daily.", color: "bg-teal-50 border-teal-200" },
              ].map((t) => (
                <div key={t.title} className={`rounded-xl p-4 border ${t.color}`}>
                  <div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{t.icon}</span><div><p className="font-medium text-sm text-ink mb-1">{t.title}</p><p className="text-xs text-gray-700 font-light leading-relaxed">{t.desc}</p></div></div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want Your Ladakh Trip Planned?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">Ladakh logistics are complex — permits, acclimatisation schedule, shared taxis, remote accommodation. Tell us your dates and group and we&apos;ll sort the whole thing. Free.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Ladakh Trip →</button>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "How many days do you need for Leh Ladakh?", a: "7 days minimum — 2 days acclimatisation in Leh, 2 days Nubra Valley, 2 days Pangong, 1 day return. 10 days is ideal. Never rush acclimatisation." },
                { q: "What is the best time to visit Ladakh?", a: "June to September. June and September are ideal — fewer tourists, roads fully open. July–August is peak season with festivals but crowded. Closed October–May for most roads." },
                { q: "Should I fly or drive to Leh?", a: "Fly if time-limited (1hr from Delhi, Rs.4,000–Rs.10,000). Drive Manali–Leh if you want the experience (2 days, world-class road trip, natural acclimatisation). Both are valid — driving is better for acclimatisation." },
                { q: "How serious is altitude sickness in Ladakh?", a: "Very serious if ignored. Leh is at 3,524m. Rest completely for 48hrs on arrival. Drink 4L water daily. No alcohol first 48hrs. Descend immediately if symptoms worsen. Consult a doctor about Diamox before travelling." },
                { q: "Is Ladakh safe for solo female travellers?", a: "Yes — Ladakh is one of India's safest destinations. The Buddhist culture is peaceful and respectful. Solo women travel there regularly. Basic precautions apply: inform your hotel of your plans, don't trek alone, carry a local SIM." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More India Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kashmir 6 Days — Heaven on Earth", href: "/blog/kashmir-6-days" },
                { label: "Andaman 5 Days — Asia's Best Beach", href: "/blog/andaman-5-days" },
                { label: "Rajasthan 7 Days — Royal Circuit", href: "/blog/rajasthan-7-days" },
                { label: "Golden Triangle 7 Days — Taj Mahal", href: "/blog/golden-triangle-7-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="leh-ladakh-7-days" />
          <RelatedGuides currentSlug="leh-ladakh-7-days" />
        </div>
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
