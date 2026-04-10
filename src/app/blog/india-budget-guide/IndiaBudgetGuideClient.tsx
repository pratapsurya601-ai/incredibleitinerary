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
import InlineCTA from "@/components/blog/InlineCTA";
import PhotoCta from "@/components/blog/PhotoCta";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/email/InlineSignup";
import PinterestSaveButton from "@/components/ui/PinterestSaveButton";

// ── Table of Contents ─────────────────────────────────────────────────────────
const INDIA_BUDGET_TOC = [
  { id: "overview",     emoji: "💰",  label: "What This Guide Covers" },
  { id: "besttime",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "gettingthere", emoji: "✈️",  label: "Getting There & Around" },
  { id: "itinerary",    emoji: "📅",  label: "Golden Triangle Days" },
  { id: "cities",       emoji: "🏙️", label: "City-by-City Guide" },
  { id: "budget",       emoji: "📊",  label: "Budget Breakdown" },
  { id: "stay",         emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",          emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",     emoji: "❌",  label: "Scams & Mistakes" },
  { id: "tips",         emoji: "💡",  label: "Pro Tips" },
  { id: "faq",          emoji: "❓",  label: "FAQ" },
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
        className="h-full bg-amber-600 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── Share Bar ─────────────────────────────────────────────────────────────────
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
        {
          label: "Email",
          color: "bg-ink text-white",
          href: `mailto:?subject=India Budget Travel Guide 2026&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=India Budget Travel Guide — ₹1,500/day formula for the Golden Triangle and beyond&url=${typeof window !== "undefined" ? window.location.href : ""}`,
        },
      ].map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}
        >
          {s.label}
        </a>
      ))}
      <button
        onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted"
      >
        {copied ? "✓ Copied" : "Copy Link"}
      </button>
      <PinterestSaveButton
        pageUrl="https://www.incredibleitinerary.com/blog/india-budget-guide"
        imageUrl="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80"
        description="India Budget Travel Guide 2026: ₹1,500/day formula for the Golden Triangle — Delhi, Agra, Jaipur. Sleeper trains, thali meals, dorm beds and the Taj Mahal on a shoestring."
      />
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
function DayCard({
  day,
  title,
  items,
  cost,
}: {
  day: string;
  title: string;
  items: string[];
  cost: string;
}) {
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
                <span className="text-amber-500 mt-1 flex-shrink-0 text-xs">●</span>
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
function TipCard({
  icon,
  title,
  desc,
  color,
}: {
  icon: string;
  title: string;
  desc: string;
  color: string;
}) {
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

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-600 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function IndiaBudgetGuideClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={INDIA_BUDGET_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="India Budget Guide" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="india travel backpacker rajasthan market train varanasi ghat golden triangle"
            fallback="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80"
            alt="Indian Railways train passing through Rajasthan landscape at golden hour"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">India Budget Guide</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Budget Travel
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                India Budget Travel Guide 2026:
                <em className="italic text-amber-300"> The ₹1,500/Day Formula</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Golden Triangle (Delhi–Agra–Jaipur), sleeper trains at ₹200–500, dorm beds at ₹400–800, unlimited thalis at ₹80–150. The real breakdown for backpackers in 2026 — scams included.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="18 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇮🇳 India</span>
              <span>·</span>
              <span>🗓 Flexible duration</span>
              <span>·</span>
              <span>💰 From ₹1,500/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              India can cost ₹1,500 per day or ₹15,000 per day — and the experience is often better at the lower end. The chaotic train compartments, the ₹40 thali that beats any restaurant, the ₹500 guesthouse run by a family who treat you like a guest — budget travel in India isn&apos;t a compromise. It&apos;s the real thing.
            </p>
          </blockquote>

          {/* ── WHAT THIS GUIDE COVERS ── */}
          <section id="overview" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">💰 What This Guide Actually Covers</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              This is a practical money guide for the Golden Triangle — Delhi, Agra, and Jaipur — plus principles that apply across India. We cover what things actually cost in 2026, not optimistic minimums. Every figure here is based on real prices: auto-rickshaw fares, current hostel dorm rates, the actual cost of a thali, and what foreign nationals pay at the Taj Mahal (₹1,100, not the ₹50 Indians pay).
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The Golden Triangle is the most-visited circuit in India for good reason — it packs three UNESCO-adjacent monuments (Taj Mahal, Agra Fort, Amber Fort), a living Mughal walled city (Delhi&apos;s Old City), and Jaipur&apos;s Pink City into a roughly 700km triangle that&apos;s well served by trains. For first-timers to India, it&apos;s also the most budget-friendly introduction: competition between hostels and guesthouses keeps prices honest, and the food scene is exceptional from ₹80 upward.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="💰" label="Budget From" value="₹1,500/day" />
              <StatCard icon="🌡️" label="Best Months" value="Oct–Mar" />
              <StatCard icon="✈️" label="Main Airports" value="DEL / BOM / BLR" />
              <StatCard icon="🚂" label="Sleeper Train" value="₹200–500" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="besttime" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit India on a Budget</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Oct–Nov",
                  i: "🍂",
                  t: "Post-Monsoon — Best Value",
                  d: "22–32°C across the north. Crowds are below peak, prices are 15–25% lower than December–January, and the air is cleaner after the monsoon. October is arguably the single best month to visit the Golden Triangle — comfortable temperatures, manageable tourist crowds, and good photographic light. The shoulder season sweet spot.",
                  b: "Best budget window",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Dec–Jan",
                  i: "❄️",
                  t: "Peak Season — Most Expensive",
                  d: "15–22°C in the north — genuinely pleasant days but cold nights (Delhi can hit 5°C in January). This is peak tourist season: hotels cost 30–50% more, hostels fill weeks ahead, and major sites like the Taj Mahal are crowded from 7am. Book accommodation 3–4 weeks in advance if traveling in December.",
                  b: "Book well ahead",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Feb–Mar",
                  i: "🌸",
                  t: "Late Winter — Excellent Value",
                  d: "18–28°C and warming. February and March are another budget sweet spot: pleasant temperatures, thinning crowds post-January, and good accommodation availability. Holi falls in March (date varies) — colourful and memorable, but book transport and accommodation early as Indian domestic tourism peaks for the festival.",
                  b: "Recommended",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Apr–Sep",
                  i: "🌡️",
                  t: "Hot & Monsoon — Cheapest",
                  d: "April–June: 38–46°C across Rajasthan and the north — genuinely dangerous heat. If you must travel, start all outdoor activities before 9am and stay indoors noon–4pm. July–September: monsoon brings relief from the heat but transport delays. Hotel prices drop 30–40%. Not recommended for a first India trip.",
                  b: "For heat-tolerant travellers",
                  c: "bg-orange-50 border-orange-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.s} — {s.t}</p>
                      <p className="text-[0.65rem] font-medium text-teal">{s.b}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── GETTING THERE & AROUND ── */}
          <section id="gettingthere" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting There &amp; Getting Around</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Delhi&apos;s Indira Gandhi International Airport (DEL) is the main entry point for the Golden Triangle. The airport metro (Line 8 — Orange Line) runs directly to New Delhi Railway Station and central Delhi — ₹60–100, 20–25 minutes. Skip the airport taxis unless you have heavy luggage.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚂",
                  t: "Indian Railways — The Budget Backbone",
                  d: "Sleeper class (SL) is the cheapest way between cities: Delhi–Agra ₹200–300 (2 hrs), Agra–Jaipur ₹280–450 (4 hrs), Delhi–Jaipur ₹280–430 (5 hrs). Book on the IRCTC Rail Connect app — register with phone and email (10 minutes). Book 2 weeks ahead minimum for confirmed seats. Tatkal quota (1 day before, 1.5–2x price) for last-minute travel.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "State & Private Buses",
                  d: "RSRTC (Rajasthan) and UP Roadways buses connect all Golden Triangle cities. Slower than trains but more frequent departures. Delhi–Jaipur: Volvo AC bus ₹600–900 (5–6 hrs), departs from ISBT Kashmere Gate and ISBT Sarai Kale Khan. Useful when trains are fully booked. Private operators like RedBus run reliable overnight services.",
                  b: "Good backup",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "📱",
                  t: "In-City Transport — Rapido, Ola & Auto-Rickshaws",
                  d: "Rapido (bike taxi, ₹30–80 for short trips), Ola and Uber (metered autos and cabs) are the best options in all three cities. Always check the app price before flagging an auto — street autos often quote 2–3x the app fare. In Agra, the electric tuk-tuks (e-rickshaws) to the Taj Mahal area cost ₹20–30 and are the only vehicles allowed near the East and West Gate areas.",
                  b: "Use apps always",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  i: "📋",
                  t: "Essential Apps to Download Before You Arrive",
                  d: "IRCTC Rail Connect (train booking — mandatory), Ola and Rapido (city transport), Zomato (find restaurants with real reviews), Paytm or GPay (UPI payments — accepted almost everywhere including street stalls), Google Translate with Hindi offline pack. Get a Jio or Airtel SIM at the airport: ₹300–400 for 28 days with 1.5GB/day data.",
                  b: "Download before landing",
                  c: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <div key={t.t} className={`rounded-xl p-4 border ${t.c}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{t.i}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="font-semibold text-sm text-ink">{t.t}</p>
                        <span className="text-xs bg-white/70 text-muted px-2.5 py-1 rounded-full border border-white/50">{t.b}</span>
                      </div>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{t.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── GOLDEN TRIANGLE DAY-BY-DAY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Golden Triangle: Day-by-Day Budget Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Seven days covers the Golden Triangle comfortably on a budget. Each day card is expandable — click to see the full breakdown including transport and food costs. All prices are for a single traveller; many costs drop further per person in pairs.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrive Delhi · Old Delhi (Chandni Chowk) · Jama Masjid · Red Fort"
                cost="₹700–₹1,400 (excl. accommodation)"
                items={[
                  "Arrive at Indira Gandhi International Airport (DEL). Take the Airport Metro (Orange Line) to New Delhi station — ₹60–100, 20 minutes, far cheaper than taxis. Check into your hostel in Paharganj (dorms ₹400–700) or Karol Bagh (private budget rooms ₹700–1,200).",
                  "Afternoon: Old Delhi exploration — walk or take the Delhi Metro to Chandni Chowk station (₹35–50). The old spice market (Khari Baoli), Kinari Bazaar (wedding market), and the area around Jama Masjid are free to walk and genuinely overwhelming in the best way. Jama Masjid entry: ₹100 for non-Muslims (free for Muslims). Photography fee: ₹300.",
                  "Red Fort entry: ₹650 for foreigners / ₹35 for Indians. The sound-and-light show at 7:30pm (₹80) is worth attending if you arrive in time — it covers the history of the Mughal emperors who built and used the fort.",
                  "Dinner at Karim&apos;s near Jama Masjid (Delhi&apos;s most famous Mughal restaurant since 1913) — mutton korma, dal, naan for ₹350–500. Or eat at Paranthe Wali Gali (bread-fried snacks lane in Chandni Chowk) for ₹80–150. Both are the real thing.",
                  "SIM card: pick up a Jio or Airtel tourist SIM from any airport kiosk or Paharganj shop — ₹300–400 for 28 days with 1.5GB/day. Bring your passport; activation takes 2–4 hours.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Delhi: Qutub Minar · Humayun&apos;s Tomb · Lodi Garden · India Gate"
                cost="₹600–₹1,200 (excl. accommodation)"
                items={[
                  "Morning: Qutub Minar — Delhi&apos;s UNESCO World Heritage Site and the world&apos;s tallest brick minaret (73 metres). Entry: ₹650 foreigners / ₹35 Indians. Budget 1.5–2 hours. Best visited at opening (7am) before the heat builds. The complex includes the Iron Pillar (1,600 years old, has not rusted) and the ruins of the first mosque built in India after the Muslim conquest.",
                  "Late morning: Humayun&apos;s Tomb (₹650 foreigners / ₹35 Indians) — the Mughal architectural precursor to the Taj Mahal, built in 1572. Less visited than the Taj but arguably more beautiful in its proportions. The surrounding Charbagh garden (four-quadrant Persian garden) is the template for all subsequent Mughal garden architecture.",
                  "Afternoon: Lodi Garden — 90 acres of landscaped park containing the tombs of Lodi and Sayyid dynasty rulers from the 15th century. Completely free to enter. Popular with Delhi locals for picnics and morning walks. Worth a 45-minute wander. Nearby: Khan Market for good cafes if you need a break (Cafe Turtle, ₹200–400 for coffee and food).",
                  "Evening: India Gate and Kartavya Path (formerly Rajpath) — the war memorial at the heart of New Delhi. Free to visit. The broad avenue at dusk, with the Presidential Palace in the distance, is one of the few genuinely grand civic vistas in India. Street vendors sell roasted corn (bhutta) for ₹30–50.",
                  "Total transport for the day via Metro: ₹80–120. Total entry fees: ₹1,300 foreigners / ₹70 Indians. Meals: ₹200–400.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Delhi → Agra by Train · Taj Mahal Sunset"
                cost="₹1,200–₹2,200 (incl. train + Taj entry)"
                items={[
                  "Early morning train from Hazrat Nizamuddin or New Delhi station to Agra Cantonment. The Gatimaan Express (superfast, 1 hr 40 min, ₹755 chair car / ₹1,505 executive) is the most comfortable. Regular trains take 2–3 hrs (₹200–350 sleeper). Book on IRCTC app. Arrive Agra by 10–11am.",
                  "Check into your hostel or guesthouse near the Taj Mahal (Zostel Agra dorms ₹500–700; private budget guesthouses ₹700–1,200). The best stays are within a 10-minute walk of the East or South Gate to avoid e-rickshaw costs.",
                  "Afternoon rest — the Taj Mahal in midday heat is genuinely punishing. Eat lunch at a local restaurant: Pinch of Spice (near Sadar Bazaar) is a reliable mid-range option for North Indian food — thali ₹200–350. Or try the hotel rooftop restaurants near the South Gate for Taj views over food (₹300–500 — you&apos;re paying for the view).",
                  "Taj Mahal entry: ₹1,100 for foreigners / ₹50 for Indians. Timed entry tickets are available (no extra charge) — book online at asitickets.gov.in. The monument is open sunrise to sunset (closed Fridays). The late afternoon light (4–5pm) is often the best for photography — the white marble turns golden.",
                  "Stay for sunset from the Taj — the light on the dome changes every 15 minutes as the sun drops. The view from the main gateway (free to access) at dusk, with the Taj framed by the arch, is as iconic as it gets.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Taj Mahal Sunrise · Agra Fort · Fatehpur Sikri"
                cost="₹1,800–₹2,800 (entry fees + transport)"
                items={[
                  "5am: Taj Mahal at sunrise. This is the single best version of the Taj — the pink light at dawn is extraordinary, crowd sizes are at their lowest (though still significant in peak season), and the air is clear. Your ticket from Day 3 is valid for the same day only; purchase a fresh ticket at the East Gate kiosk (it opens at 6am). The gardens open at sunrise.",
                  "9am: Agra Fort (₹650 foreigners / ₹40 Indians, 2 km from Taj Mahal). The red sandstone fort on the Yamuna River served as the main residence of the Mughal emperors before Shah Jahan&apos;s obsession with the Taj. It&apos;s vast, beautifully maintained, and less crowded than the Taj. Inside: Jahangiri Mahal (the oldest palace structure), Diwan-i-Aam, Diwan-i-Khas, and the marble rooms from which Shah Jahan could see the Taj from his prison window (he was confined here by his own son in his final years).",
                  "Afternoon: Fatehpur Sikri (40 km from Agra, 1 hour by bus ₹60 or shared taxi ₹150–200 per person). The ghost city built by Emperor Akbar in 1571, abandoned 15 years later due to water shortage, perfectly preserved. Entry: ₹610 foreigners / ₹35 Indians. The Buland Darwaza (Gate of Magnificence) at 54 metres is the tallest mosque gateway in the world. Budget 2 hours.",
                  "Return to Agra in the evening. Dinner near Sadar Bazaar: Shankar Sweets for kulfi and sweets (₹30–80); local dhabas near the fort for dal makhani and roti (₹80–150).",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Agra → Jaipur by Train · Pink City First Walk"
                cost="₹800–₹1,600 (train + initial Jaipur exploration)"
                items={[
                  "Morning train from Agra Cantonment to Jaipur Junction: 4–5 hours, ₹280–450 sleeper class or ₹600–1,000 AC chair car. Several trains daily. Book on IRCTC. Arrive Jaipur early afternoon.",
                  "Check into accommodation near the old city: Zostel Jaipur (dorms ₹500–700, private rooms ₹1,400–2,200) or budget guesthouses in the old city area near Hawa Mahal (₹600–1,100 for a double). The Pink City (walled old city) is where you want to be based for walking access to the main sights.",
                  "Late afternoon: Hawa Mahal (Palace of Winds) — the iconic five-storey pink sandstone facade with 953 small windows. Entry: ₹200 foreigners / ₹50 Indians. The facade is best photographed from the tea stall opposite in the late afternoon light. Climb to the top for views over the old city and bazaars below.",
                  "Evening: Johari Bazaar and Bapu Bazaar — the main old city markets for textiles, jewellery, block-print fabrics and lac bangles. No obligation to buy anything; the markets are a free spectacle. The Pink City streets at dusk, lit by shop lights and full of traffic and vendors, are deeply photogenic.",
                  "Dinner in the old city: LMB (Laxmi Misthan Bhandar) on Johari Bazaar — a Jaipur institution since 1954 for North Indian sweets and thali (₹200–400). Or eat at the rooftop restaurants facing Hawa Mahal for views with your food (₹300–600).",
                ]}
              />
              <DayCard
                day="Day 6"
                title="Amber Fort · City Palace · Jantar Mantar · Nahargarh Fort Sunset"
                cost="₹1,600–₹2,600 (heavy on entry fees)"
                items={[
                  "7am: Amber Fort (Amer Fort) — 11 km from Jaipur city, reached by Ola/Uber (₹200–280) or local bus 5 (₹20). Entry: ₹100 foreigners and Indians (currently subsidised — one of the best-value major monuments in Rajasthan). The fort is best visited early before coach tours arrive. The Sheesh Mahal (Hall of Mirrors), Ganesh Pol gateway, and the views over Maota Lake make Amber the most visually stunning of Rajasthan&apos;s forts.",
                  "10am: City Palace (in the heart of Jaipur old city) — the royal family&apos;s palace, partially converted to a museum. Entry: ₹700 foreigners (standard) / ₹135 Indians. The Mubarak Mahal (textile museum) and the Diwan-i-Khas (with the two enormous silver urns — recorded in the Guinness Book as the world&apos;s largest silver objects) are the highlights.",
                  "12pm: Jantar Mantar — directly next to City Palace (combined ticket available). The world&apos;s largest stone sundial complex, built by Maharaja Jai Singh II in 1734. Entry included in City Palace combined ticket or ₹200 foreigners separately. The Samrat Yantra sundial is accurate to 2 seconds — genuinely astonishing for 18th-century engineering.",
                  "Afternoon rest through the heat (noon–3pm). Iced lassi at Lassiwala on MI Road (₹40–70 for a clay cup — one of Jaipur&apos;s most famous street food institutions, open since 1944).",
                  "4:30pm: Nahargarh Fort — 15 km from the city, reached by Ola/Uber (₹250–350). Entry: ₹50. The fort sits on the ridge above Jaipur and offers the best panoramic view of the Pink City — especially at sunset when the city lights begin. Less visited than Amber, more atmospheric at dusk.",
                ]}
              />
              <DayCard
                day="Day 7"
                title="Jaipur Markets · Departure or Onward Journey"
                cost="₹400–₹900"
                items={[
                  "Morning: Tripolia Bazaar for textiles and block-print fabrics (some of India&apos;s best, and directly produced in Rajasthan). Nehru Bazaar for juttis (Rajasthani leather shoes, ₹300–800 per pair). Johari Bazaar for silver jewellery (buy from fixed-price government emporiums if unsure about quality).",
                  "Breakfast at a local dhaba near the old city gates: poha, kachori, and masala chai for ₹40–70. Kachori-sabzi (flaky pastry with potato curry) is specifically a Jaipur breakfast speciality — eaten standing at roadside stalls from 7–10am.",
                  "Departure: Jaipur to Delhi by Shatabdi Express (4 hrs, ₹700–1,300 chair car or executive) — book in advance on IRCTC. Or take a bus from ISBT Sindhi Camp (Volvo AC ₹500–800, 5–6 hrs). Jaipur International Airport (JAI) has direct flights to many Indian cities if continuing the journey.",
                  "Total Golden Triangle trip cost per person (budget tier, 7 days): accommodation ₹3,500–5,500, transport ₹2,000–4,000, entry fees ₹5,500–6,500 (foreigners) or ₹500–700 (Indians), food ₹1,400–2,800. Total: ₹12,400–18,800 for foreigners, ₹7,400–13,000 for Indian nationals.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="India" onPlanTrip={() => setModalOpen(true)} />

          {/* ── CITY-BY-CITY DESTINATION GUIDE ── */}
          <section id="cities" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏙️ City-by-City Budget Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Key budget facts for each Golden Triangle city. All prices are 2026 figures — entry fees for foreigners and Indians differ significantly.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Delhi",
                  e: "Red Fort ₹650 F / ₹35 I · Qutub Minar ₹650 F / ₹35 I · Humayun&apos;s Tomb ₹650 F / ₹35 I",
                  d: "India&apos;s capital has an enormous range of free sights — India Gate, all the ghats, Old Delhi&apos;s bazaars and streets. The Metro is the best budget transport (₹10–60 per journey). Stay in Paharganj for budget (dorms ₹400–700) or South Delhi for a mid-range base (private rooms ₹1,800–3,500). Avoid guesthouses with no online presence near the railway station — overcharging is common.",
                  t: "3–4 days recommended",
                },
                {
                  n: "Agra",
                  e: "Taj Mahal ₹1,100 F / ₹50 I · Agra Fort ₹650 F / ₹40 I · Fatehpur Sikri ₹610 F / ₹35 I",
                  d: "Agra is the most tourist-targeted city in the Golden Triangle — touts, fixed-price scam guesthouses, and overpriced transport surround the Taj Mahal area. The rule: book your hotel online in advance (Zostel Agra or a Booking.com-listed guesthouse with 8.0+ reviews), use Ola/Uber for all transport, and eat away from the Taj Gate area. The local food in Sadar Bazaar is both cheaper and better.",
                  t: "2 days sufficient",
                },
                {
                  n: "Jaipur",
                  e: "Amber Fort ₹100 F+I · City Palace ₹700 F / ₹135 I · Nahargarh Fort ₹50 F+I",
                  d: "Rajasthan&apos;s capital is the most liveable and most budget-friendly of the three cities. Food is cheaper than Delhi, the old city bazaars are extraordinary, and Amber Fort is the best-value major monument in the Golden Triangle at ₹100 for foreigners. The Pink City walled area has the best concentration of guesthouses, restaurants and sights. Jaipur also has India&apos;s best block-print fabric shopping — buy directly from production workshops in Bagru and Sanganer for the best prices.",
                  t: "2–3 days recommended",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900">{place.n}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full"
                        dangerouslySetInnerHTML={{ __html: place.e }} />
                      <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">{place.t}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{place.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <DestinationGallery
            title="India Budget Travel — Golden Triangle Highlights"
            subtitle="The monuments, markets and meals that define budget travel in North India."
            spots={[
              {
                name: "Taj Mahal at Sunrise",
                query: "taj mahal sunrise agra india marble monument dawn light",
                desc: "The Taj Mahal in the first light of dawn — the white marble turns gold and pink as the sun rises over the Yamuna.",
              },
              {
                name: "Jaipur Pink City Bazaar",
                query: "jaipur old city pink city bazaar rajasthan market street india",
                desc: "The Pink City&apos;s old bazaars — textiles, jewellery, and the controlled chaos of a living Rajasthani market city.",
              },
              {
                name: "Indian Railways Sleeper Class",
                query: "indian railways train sleeper class journey india backpacker",
                desc: "Sleeper class on Indian Railways — the cheapest and most authentic way to travel between cities. Delhi to Agra from ₹200.",
              },
              {
                name: "Thali at a Local Dhaba",
                query: "indian thali meal dal rice roti sabzi street food dhaba",
                desc: "The unlimited thali — dal, two sabzis, rice, roti, papad — refilled on demand. ₹80–150 and the backbone of budget eating in India.",
              },
              {
                name: "Amber Fort Jaipur",
                query: "amber fort jaipur rajasthan palace hills india rajput architecture",
                desc: "Amber Fort from the approach road — one of Rajasthan&apos;s finest fortresses at just ₹100 entry for all nationalities.",
              },
            ]}
          />

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">📊 Budget Breakdown by Tier</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Real 2026 prices per person per day across North India. Note: entry fees for foreign nationals are significantly higher and are included in the activities column. Indian nationals will find their totals substantially lower.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Tier</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Accommodation</th>
                    <th className="p-3.5 text-xs font-medium text-green-300 text-center">Food</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">Transport</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Activities</th>
                    <th className="p-3.5 text-xs font-medium text-white text-center">Daily Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏕️ Backpacker (dorm + overnight trains)", "₹350–600", "₹200–350", "₹80–200", "₹50–200", "₹680–1,350"],
                    ["💰 Budget (private room, local transport)", "₹550–900", "₹300–500", "₹120–250", "₹100–300", "₹1,070–1,950"],
                    ["✨ Mid-Range (AC hotel, Ola/Uber)", "₹1,200–2,500", "₹600–1,000", "₹300–600", "₹300–700", "₹2,400–4,800"],
                    ["🏛️ Heritage Boutique (private room, guided)", "₹2,000–4,500", "₹800–1,500", "₹500–1,200", "₹500–1,200", "₹3,800–8,400"],
                    ["💎 Luxury (palace hotel, private car)", "₹6,000–18,000", "₹2,000–5,000", "₹1,500–3,500", "₹2,000–6,000", "₹11,500–32,500"],
                  ].map(([tier, ...vals]) => (
                    <tr key={tier} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{tier}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Backpacker (₹1,500–2,500/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel dorms, overnight sleeper trains (saving accommodation nights), thali meals and street food, public buses and metro. This is entirely comfortable and produces the most authentic India experience.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">🌟 Mid-Range (₹3,000–5,000/day)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Private AC hotel room, Ola/Uber for transport, sit-down restaurants from Zomato&apos;s top picks. Comfortable travel without budget stress. The 8.0+ Booking.com guesthouse in the ₹1,200–1,800 range hits the sweet spot.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">👑 Luxury (₹10,000+/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">India&apos;s palace hotels and heritage properties offer genuine 5-star luxury at 30–50% of equivalent Western prices. Taj Hotels, Oberoi, and ITC have properties across all three Golden Triangle cities that are worth the splurge for at least one night.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in the Golden Triangle</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The best-value accommodation options across Delhi, Agra, and Jaipur. Prices are per room/dorm per night in 2026 and vary by season — expect 30–50% surcharges in December and January peak season.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Zostel Delhi (Paharganj)",
                  type: "Budget hostel · Paharganj, New Delhi",
                  price: "Dorms ₹450–700 / Private ₹1,400–2,200",
                  badge: "Best Delhi hostel",
                  desc: "The most reliably reviewed hostel chain in India. The Delhi property in Paharganj is well-located (5-minute walk from New Delhi Railway Station), clean, and has a reliable community of solo travellers. The rooftop common area is excellent for meeting other backpackers. Book ahead via Booking.com or Zostel&apos;s own site.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "OYO Rooms (All Three Cities)",
                  type: "Budget private rooms · Multiple locations",
                  price: "₹600–1,500/night",
                  badge: "Most flexible",
                  desc: "OYO is India&apos;s largest budget hotel aggregator — standardised, clean private rooms at consistent prices across the country. Quality control is uneven at the very lowest price points; filter to OYO Townhouse or OYO Premium listings for more reliable quality. Book via their app for the best prices. Useful when hostels are full.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Zostel Agra (Taj Ganj area)",
                  type: "Budget hostel · Near Taj Mahal South Gate",
                  price: "Dorms ₹500–700 / Private ₹1,600–2,400",
                  badge: "Best Agra base",
                  desc: "Well-positioned within walking distance of the Taj Mahal South Gate — saves e-rickshaw cost to the monument each morning. Clean, well-reviewed, and with a rooftop view of the Taj from some areas. The common area has a good crowd and reliable information sharing about Agra&apos;s main sights.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Pink City Heritage Guesthouses (Jaipur)",
                  type: "Family-run heritage guesthouses · Old City",
                  price: "₹700–1,800/night",
                  badge: "Best Jaipur experience",
                  desc: "The walled old city of Jaipur has dozens of family-run guesthouses in historic havelis (courtyard mansions). Staying in the old city means walking access to Hawa Mahal, Johari Bazaar and the main temples. Look for properties with 8.5+ Booking.com ratings and recent reviews — quality varies enormously. Pearl Palace Heritage near Hawa Mahal and Zostel Jaipur are consistently well-reviewed.",
                  color: "border-purple-200 bg-purple-50",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{stay.name}</p>
                      <p className="text-xs text-muted font-light">{stay.type}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60">{stay.price}</span>
                      <span className="text-xs bg-gold/15 text-gold-dark px-2 py-0.5 rounded-full font-medium">{stay.badge}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{stay.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat on a Budget in the Golden Triangle</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The best indicator of a good budget restaurant in India: it&apos;s full of local working people at lunchtime. A dhaba packed with truck drivers, office workers, and labourers is the single most reliable quality signal you will encounter. Tourist restaurants near monuments are almost always worse and more expensive.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Karim&apos;s (Delhi, near Jama Masjid)",
                  t: "Old Delhi institution · Near Jama Masjid",
                  d: "Operating since 1913, Karim&apos;s is Delhi&apos;s most famous Mughal restaurant. The mutton korma, seekh kebabs, and nihari (slow-cooked meat stew) are extraordinary by any standard. Meals ₹300–600 for two. It&apos;s in a lane behind Jama Masjid — narrow, no grand signage, packed at lunch. Worth finding.",
                  b: "Delhi must-visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Paranthe Wali Gali (Delhi, Chandni Chowk)",
                  t: "Street food lane · Old Delhi",
                  d: "A narrow lane in Chandni Chowk entirely dedicated to fried parathas — flatbreads stuffed with potato, paneer, rabri (sweet khoya), or kachalu. Eaten at plastic tables from metal plates. ₹60–120 for two parathas with pickle and sabzi. Lunch here is one of the most distinctly Delhi food experiences you can have for under ₹150.",
                  b: "Best Delhi street food",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Pinch of Spice (Agra, Sadar Bazaar)",
                  t: "Mid-range North Indian · Agra",
                  d: "The best non-tourist restaurant near the Taj Mahal area — a proper sit-down restaurant with a full North Indian menu, good dal makhani, butter chicken, and tandoori roti. ₹200–400 for a full meal for one. No touts outside and no one will hassle you for a commission-based guesthouse recommendation. Zomato 4.2+.",
                  b: "Best Agra value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Lassiwala (Jaipur, MI Road)",
                  t: "Street food institution · M.I. Road, Jaipur",
                  d: "Open since 1944, Lassiwala serves one thing: thick Rajasthani lassi in clay cups. ₹40–70 per cup. Queue forms from 8am; they often sell out by 11am. This is one of India&apos;s most authentic street food experiences — a 75-year-old institution that has not changed its recipe, its clay cups, or its prices significantly.",
                  b: "Jaipur must-visit",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "LMB Restaurant (Jaipur, Johari Bazaar)",
                  t: "Rajasthani cuisine institution · Old City",
                  d: "Laxmi Misthan Bhandar, open since 1954. Famous for its Rajasthani thali (₹350–500), sweets counter (try ghewar and imarti), and the reliable quality that has made it the go-to for both locals and informed travellers. The ground floor sweet shop alone is worth a visit. AC seating upstairs.",
                  b: "Best Jaipur thali",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((r) => (
                <div key={r.n} className={`rounded-xl p-4 border ${r.c}`}>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{r.n}</p>
                      <p className="text-xs text-muted font-light">{r.t}</p>
                    </div>
                    <span className="text-xs bg-white/80 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200 font-medium">{r.b}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{r.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Block */}
          <AffiliateBlock
            destination="Golden Triangle India"
            hotels={[
              {
                name: "Zostel Delhi (Paharganj)",
                type: "Best-reviewed budget hostel in Delhi",
                price: "Dorms from ₹450/night",
                rating: "4",
                badge: "Best hostel",
                url: "https://www.booking.com/hotel/in/zostel-delhi.html?aid=2820480",
              },
              {
                name: "Pearl Palace Heritage (Jaipur)",
                type: "Boutique heritage guesthouse · Old City",
                price: "From ₹1,200/night",
                rating: "5",
                badge: "Best Jaipur stay",
                url: "https://www.booking.com/hotel/in/pearl-palace-heritage-jaipur.html?aid=2820480",
              },
              {
                name: "Zostel Agra",
                type: "Budget hostel near Taj Mahal South Gate",
                price: "Dorms from ₹500/night",
                rating: "4",
                badge: "Best Agra base",
                url: "https://www.booking.com/hotel/in/zostel-agra.html?aid=2820480",
              },
              {
                name: "Taj Hotel & Convention Centre (Agra)",
                type: "Luxury · Taj Mahal view pool rooms",
                price: "From ₹12,000/night",
                rating: "5",
                badge: "Best splurge",
                url: "https://www.booking.com/hotel/in/taj-hotel-convention-centre-agra.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Taj Mahal Sunrise Private Tour with Guide",
                duration: "4 hrs",
                price: "From ₹1,500/person",
                badge: "Most booked",
                url: "https://www.getyourguide.com/s/?q=taj+mahal+sunrise+tour&partner_id=PSZA5UI",
              },
              {
                name: "Golden Triangle 7-Day Guided Tour",
                duration: "7 days",
                price: "From ₹18,000/person",
                badge: "Best value guided",
                url: "https://www.getyourguide.com/s/?q=golden+triangle+india+tour&partner_id=PSZA5UI",
              },
              {
                name: "Old Delhi Food Walk (Chandni Chowk)",
                duration: "3 hrs",
                price: "From ₹1,200/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=old+delhi+food+walk&partner_id=PSZA5UI",
              },
              {
                name: "Jaipur Block-Printing Workshop",
                duration: "2 hrs",
                price: "From ₹800/person",
                url: "https://www.getyourguide.com/s/?q=jaipur+block+printing+workshop&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── SCAMS & MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Scams &amp; Mistakes to Avoid</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚕",
                  title: "Tourist taxi touts at airports, stations and monuments",
                  desc: "Pre-paid tourist taxis at major tourist spots charge 3–5x market rates. At Delhi and Agra railway stations, men will aggressively offer to take you to your guesthouse — these are invariably commission-based arrangements at inflated prices. Download Ola before you land. In Agra, use only the official prepaid e-rickshaw stands near monument gates.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🏨",
                  title: "The &apos;your hotel is closed / flooded / moved&apos; scam",
                  desc: "A specific and common scam near Agra Railway Station: a driver or tout tells you your pre-booked guesthouse is closed, burnt down or moved, then takes you to a commission guesthouse instead. Counter: have your hotel&apos;s phone number saved and call them in front of the driver. Your booking is almost always fine.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🎫",
                  title: "Not knowing foreigner vs Indian ticket prices",
                  desc: "Foreign nationals pay significantly more at most ASI heritage sites. Taj Mahal: ₹1,100 foreigners vs ₹50 Indians. Budget accordingly — a 5-day Golden Triangle itinerary can cost ₹5,500–7,000 in monument entry fees alone for foreigners. Indian nationals pay ₹300–500 total for the same circuit. Carry your Aadhaar for Indian ticket queues (usually shorter).",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "💳",
                  title: "Assuming UPI or cards work everywhere",
                  desc: "UPI (GPay, PhonePe, Paytm) is accepted at most urban food stalls, shops, and auto-rickshaws. But rural dhabas, local markets, small guesthouses, and many auto-rickshaw drivers outside app coverage still need cash. Always carry ₹2,000–3,000 in cash. State Bank of India ATMs are the most reliable for both Indian and foreign cards.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🚂",
                  title: "Not booking trains at least two weeks in advance",
                  desc: "Indian Railways sells out weeks ahead, especially on popular routes (Delhi–Agra, Delhi–Jaipur) during October–February peak season. Book on the IRCTC Rail Connect app. If all seats are WL (waitlisted), check if the waitlist number is low enough to likely confirm. Tatkal quota opens 1 day before at 1.5–2x price but guarantees a berth.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🍽️",
                  title: "Eating at restaurants adjacent to monuments",
                  desc: "Any restaurant with a direct view of the Taj Mahal, Red Fort, or Hawa Mahal prices itself for tourists with no competition. The food is usually mediocre. Walk five minutes in any direction from any major monument and prices drop 50–70%. The best quality indicator: a dhaba full of local working people at lunchtime.",
                  color: "bg-green-50 border-green-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Budget India Travel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚂",
                  title: "Overnight trains eliminate accommodation nights",
                  desc: "An overnight sleeper train (SL class) from Delhi to Varanasi costs ₹350–450 and takes 12 hours. You sleep in transit, arrive at dawn, and skip one full night of accommodation. On a 2-week trip, 3–4 overnight trains save ₹2,000–4,000. Sleeper class is crowded but safe — bring a small padlock for your bag&apos;s zip.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🍛",
                  title: "The unlimited thali is the best meal in India",
                  desc: "A thali restaurant serves a metal tray with dal, two sabzis, rice, roti, papad and sweet — and refills when you finish. ₹80–160 for a complete, satisfying meal. Ask &apos;ek aur roti dijiye&apos; (one more bread please) for a refill. This is the backbone of budget eating across the country and often the best meal you&apos;ll have on a given day.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "📱",
                  title: "Master four apps before you land",
                  desc: "IRCTC Rail Connect (train booking — mandatory, register before arrival), Ola and Rapido (city transport — always check before flagging an auto), Zomato (find where locals actually eat), GPay or Paytm (UPI for everything). Download Google Translate with the Hindi offline pack. These four apps reduce cost and friction significantly.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "📅",
                  title: "Shoulder seasons save 20–35% on accommodation",
                  desc: "October–November and February–March are the budget sweet spots. Weather is good, crowds are below peak, and hotels drop prices significantly. December–January peak season pushes accommodation costs 30–50% higher. June–August monsoon is India&apos;s cheapest season — 40% lower prices, fewer tourists, but possible transport disruptions.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🤝",
                  title: "Negotiation basics that actually work",
                  desc: "Anything without a printed price tag is negotiable in India: auto-rickshaws (outside app coverage), market shopping, guesthouse rates for 3+ nights, boat rides, and guided tours. Start at 50–60% of the opening quote and settle around 65–75%. Always smile and stay friendly — negotiation here is commerce, not conflict. Walking away often brings the price down immediately.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "💊",
                  title: "Get travel insurance — food poisoning is real",
                  desc: "Travel insurance for India costs ₹2,000–5,000 for 2 weeks. Medical costs are low by global standards, but food poisoning requiring IV treatment can run ₹5,000–15,000. A broken bone: ₹30,000–60,000. Emergency evacuation from a remote hill area without insurance can cost ₹2–5 lakh. It is not optional.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="India" />

          {/* Combine With */}
          <CombineWith currentSlug="india-budget-guide" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How much does it cost to travel India per day on a budget?",
                  a: "A realistic backpacker budget is ₹1,500–2,500/day covering a dorm bed or budget guesthouse room, three meals from local restaurants and street stalls, metro and auto transport, and some paid sights. Foreign nationals need to budget more for monument entry fees — a day at the Taj Mahal alone costs ₹1,100 for foreigners vs ₹50 for Indians. If you use overnight sleeper trains strategically (₹200–500 per journey, saves one accommodation night), you can average ₹1,200–1,800/day over a 2-week trip.",
                },
                {
                  q: "What is the cheapest way to travel between Delhi, Agra, and Jaipur?",
                  a: "Sleeper class (SL) on Indian Railways is the cheapest: Delhi to Agra ₹200–300 (2 hrs), Agra to Jaipur ₹280–450 (4 hrs), Delhi to Jaipur ₹280–430 (5 hrs). Book on the IRCTC Rail Connect app at least 2 weeks in advance. For last-minute booking, Tatkal quota opens 1 day before at 1.5–2x the base fare. Volvo AC buses (₹500–900) are a good backup when trains are full.",
                },
                {
                  q: "How much does the Taj Mahal cost to visit?",
                  a: "Entry fees as of 2026: ₹1,100 for foreign nationals / ₹50 for Indian nationals. The monument is open sunrise to sunset, closed on Fridays. A separate ₹200 fee applies to enter the main mausoleum chamber. Timed entry tickets are available online at asitickets.gov.in — no extra charge. The best time to visit is at sunrise (arrive at the East or South Gate by 5:30am) for the best light and manageable crowds.",
                },
                {
                  q: "Is it safe to travel India solo on a budget?",
                  a: "Yes, for both men and women, with sensible precautions. Use Ola, Uber, or Rapido instead of flagging random autos after dark. Solo women should choose guesthouses with active reception desks and online reviews rather than unmarked budget rooms. Most Indians are extraordinarily helpful to tourists who are clearly lost or confused. The main risks are pickpockets in very crowded markets, overcharging by touts, and the accommodation scam in Agra (where drivers falsely claim your guesthouse is closed). Violent crime against tourists is rare.",
                },
                {
                  q: "Do I need cash in India or can I use UPI and cards?",
                  a: "Both, and always carry cash as a backup. UPI (GPay, PhonePe, Paytm) is accepted almost everywhere in cities — including street food stalls, auto-rickshaws, and small shops. Cards work at hotels, restaurants, and tourist sites. However, rural areas, dhabas, local markets, and some auto-rickshaw drivers outside major cities are cash-only. Always carry ₹2,000–3,000 in cash. State Bank of India ATMs are most reliable for international cards.",
                },
                {
                  q: "What apps do I need for budget travel in India?",
                  a: "The essential four: IRCTC Rail Connect (train booking — register before you arrive as confirmation takes a few hours), Ola or Rapido (city transport — check prices before flagging any auto), Zomato (restaurant discovery with reliable local reviews, helps avoid tourist-trap restaurants), and GPay or Paytm for UPI payments. Also download Google Translate with the Hindi offline pack — invaluable for menus, signage, and asking directions. A Jio or Airtel SIM (₹300–400 for 28 days, 1.5GB/day) is available at all major airports.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto px-6 md:px-8 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your India trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/golden-triangle-7-days", label: "Golden Triangle 7 Days", icon: "🗓️" },
                { href: "/blog/delhi-3-days", label: "Delhi 3-Day Guide", icon: "🏛️" },
                { href: "/blog/jaipur-3-days", label: "Jaipur 3-Day Guide", icon: "🏰" },
                { href: "/blog/agra-2-days", label: "Agra 2-Day Guide", icon: "🕌" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Guides */}
          <RelatedGuides currentSlug="india-budget-guide" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More India Travel Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Rajasthan 7 Days — Palaces &amp; Deserts", href: "/blog/rajasthan-7-days" },
                { label: "Kerala 5 Days — Backwaters &amp; Hills", href: "/blog/kerala-5-days" },
                { label: "Varanasi 3 Days — Ghats &amp; Ganges", href: "/blog/varanasi-3-days" },
                { label: "First Solo Trip to India — Complete Guide", href: "/blog/first-solo-trip-india" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
                >
                  <span
                    className="text-sm text-ink font-light group-hover:text-teal transition-colors"
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
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
