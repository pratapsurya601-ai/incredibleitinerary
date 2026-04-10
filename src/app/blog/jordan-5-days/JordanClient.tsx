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
import InlineCTA from "@/components/blog/InlineCTA";
import PhotoCta from "@/components/blog/PhotoCta";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/email/InlineSignup";
import PinterestSaveButton from "@/components/ui/PinterestSaveButton";
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const JORDAN_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Jordan Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",        emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",   emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "💡",  label: "Pro Tips" },
  { id: "faq",        emoji: "❓",  label: "FAQ" },
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
        {
          label: "Email",
          color: "bg-ink text-white",
          href: `mailto:?subject=Jordan 5-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Jordan in 5 Days — Petra, Wadi Rum, Dead Sea & Amman guide&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/jordan-5-days"
        imageUrl="https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?w=1200&q=80"
        description="Jordan in 5 Days: Petra Treasury at dawn, Wadi Rum stargazing, Dead Sea float, and Amman — complete travel guide with real JOD costs for every budget."
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
export default function JordanClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={JORDAN_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="petra jordan rose city treasury ancient ruins nabataean"
            fallback="https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?w=1600&q=80"
            alt="Petra Jordan Al-Khazneh Treasury rose-red rock facade ancient Nabataean city"
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
              <span className="text-white/70">Jordan 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Middle East
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">15 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Jordan in 5 Days:
                <em className="italic text-amber-300"> Petra, Wadi Rum, Dead Sea &amp; Amman</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The Siq at 7am, the Monastery most people miss, Wadi Rum stargazing, and the Dead Sea float. Complete guide with real JOD costs and the Jordan Pass strategy that saves you JOD 20.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="15 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇯🇴 Jordan, Middle East</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From $55/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Walking through the Siq — the 1.2km sandstone canyon that guards the entrance to Petra — at 7am, with the rock walls narrowing overhead and the first glimpse of the Treasury&apos;s rose-red facade appearing around the final bend, is one of the most extraordinary moments in all of travel.
            </p>
          </blockquote>

          {/* ── WHAT JORDAN ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Jordan Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Jordan is a small, stable, historically extraordinary kingdom wedged between Israel, Saudi Arabia, Iraq, and Syria. It should not be this easy to visit. It should not be this safe. It should not have this many of the world&apos;s most significant archaeological sites packed into a country the size of Indiana. And yet: Petra, Wadi Rum, the Dead Sea, Jerash, Umm Qais, Aqaba, and the Desert Castles — all within a few hours of each other.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Nabataeans built Petra between the 4th century BC and the 1st century AD — a city carved entirely from rose-red sandstone cliffs, at the crossroads of the spice and silk trade routes. At its peak it housed 30,000 people. The Romans absorbed it in 106 AD. By the 7th century it was mostly abandoned, rediscovered by European explorer Johann Ludwig Burckhardt in 1812, and it has been astonishing visitors ever since.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Five days gives you Petra properly (both the Treasury circuit and the Monastery that most people skip), a night in Wadi Rum under the Milky Way, a float in the Dead Sea at -430m, and enough time in Amman to fall in love with the city&apos;s chaotic warmth — the coffee-roasting alleyways, the hummus served warm with olive oil, and the views from the Citadel at sunset. The Jordan Pass (JOD 70 online before you fly) covers the visa, Petra, Jerash, Wadi Rum entry, and 40+ other sites — buy it before you leave home.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Main Airport" value="AMM Amman" />
              <StatCard icon="🌡️" label="Best Season" value="Mar–May, Sep–Nov" />
              <StatCard icon="🏛️" label="Petra Entry" value="JOD 50/day" />
              <StatCard icon="💰" label="Budget From" value="$55/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Jordan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar–May",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "15–28°C, ideal for exploring Petra and Wadi Rum all day. Wildflowers bloom across the highlands. March 21 is Arab Independence Day — festive atmosphere in Amman. The Dead Sea is comfortable and Wadi Rum nights are mild enough for good sleeping under the stars.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🍂",
                  t: "Autumn — Excellent",
                  d: "18–30°C, post-summer crowds drop sharply. Petra and Wadi Rum are at their most photogenic. October may be the single best month — warm days, cool desert nights, very few midweek tour groups. The Dead Sea is still warm from summer. October is the ideal time to go.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Aug",
                  i: "🔥",
                  t: "Summer — Hot & Crowded",
                  d: "35–40°C in Petra, Wadi Rum afternoons can reach 45°C. The sandstone absorbs and radiates heat — it feels significantly hotter than the air. Dawn visits to Petra (enter at 6am) are still manageable and stunning. Peak tourist season despite the conditions. The Dead Sea is very warm.",
                  b: "Dawn visits only",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter — Quiet & Cool",
                  d: "5–15°C, with possibility of rain and occasional snow at Petra (which is spectacular but closes some trails). Wadi Rum nights drop near freezing — bring layers. The site is much less crowded and January is the cheapest month for hotels and flights. Good for those who dislike heat and crowds.",
                  b: "For quiet seekers",
                  c: "bg-blue-50 border-blue-200",
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

          {/* ── GETTING THERE ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Jordan</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Jordan Pass — buy before you fly:</strong> The Jordan Pass (JOD 70 for 1-day Petra, JOD 75 for 2-day, JOD 80 for 3-day) includes the visa on arrival fee (JOD 40) AND Petra entry AND 40+ other sites including Jerash (JOD 10) and Wadi Rum entry (JOD 5). Purchase at <strong className="font-medium">jordanpass.jo</strong> before departure — it must be bought before you arrive in Jordan to waive the visa fee.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "By Air — Queen Alia International (AMM)",
                  d: "Amman&apos;s Queen Alia International Airport handles all international arrivals. Royal Jordanian, Air Arabia, flydubai, and Emirates connect from major Indian, European, and North American hubs. Flight time from Mumbai or Delhi: approximately 4.5 hours. Taxi to central Amman: JOD 20–25 (~$28–35). Airport Bus (JET) to 7th Circle: JOD 3.3 (~$4.60), 40 minutes.",
                  b: "Main entry point",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Overland from Israel / Palestine",
                  d: "The Allenby Bridge / King Hussein Bridge crossing connects the West Bank to Jordan near Amman — frequently used by travellers combining Jordan with Jerusalem. The Yitzhak Rabin / Wadi Araba crossing near Aqaba connects Eilat to Aqaba and is ideal if arriving from Israel after visiting Petra. Jordan Pass is accepted at both land crossings.",
                  b: "Israel combo route",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "⛴️",
                  t: "By Ferry from Egypt (Aqaba)",
                  d: "A high-speed ferry runs between Nuweiba (Egypt) and Aqaba (Jordan) — approximately 1 hour crossing. This is the standard route for travellers doing an Egypt–Jordan combination. Aqaba connects directly to the Wadi Rum and Petra region, making it a logical entry point if your itinerary runs south to north through Jordan.",
                  b: "Egypt combo route",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚗",
                  t: "Overland from Saudi Arabia",
                  d: "The Omari border crossing south of Amman connects to Saudi Arabia. Used mostly by long-distance overland travellers. Saudi visa requirements apply — verify current entry conditions before planning. Rarely used by leisure tourists.",
                  b: "Overland only",
                  c: "bg-parchment border-parchment-2",
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

          {/* ── 5-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Jordan Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The route runs Amman → Petra (2 nights) → Wadi Rum → Dead Sea → Amman departure. This is the logical geographic flow and avoids backtracking. All prices in Jordanian Dinar (JOD) unless stated.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Amman — Citadel, Roman Theatre &amp; Hashem Restaurant"
                cost="JOD 15–25 ($21–35) excluding accommodation"
                items={[
                  "Arrive at Queen Alia International Airport. Take a taxi or Uber to your hotel near Rainbow Street or Downtown Amman (JOD 20–25, approximately 30 minutes). If you have the Jordan Pass, present it at immigration — the visa fee is waived.",
                  "10:30am — Rainbow Street: Amman's most atmospheric neighbourhood. Independent cafés, bookshops, street art, and views across the city's 19 hills. Street food: falafel sandwich JOD 0.75 (~$1), ka'ak (sesame bread ring with za'atar) JOD 0.50.",
                  "12:00pm — Lunch: falafel, hummus, and fuul (fava bean stew) at any Downtown diner. Full meal with bread and drinks: JOD 2–4. Jordanian hummus — warm, drenched in olive oil, topped with pine nuts — is among the finest in the Middle East.",
                  "1:30pm — Amman Citadel (Jabal al-Qala'a, JOD 3.5 or included in Jordan Pass): the Roman Temple of Hercules (2nd century AD, enormous column drums remain), the Umayyad Palace (8th-century Islamic palace, remarkably intact), and the Archaeological Museum housing artefacts from Bronze Age Jordan. Allow 1.5–2 hours.",
                  "3:30pm — Roman Theatre (JOD 3 or Jordan Pass): the 2nd-century AD amphitheatre seats 6,000. Walk to the top tier for views over central Amman. The Folklore Museum and Popular Life Museum inside are free with the ticket and genuinely worthwhile.",
                  "5:00pm — Downtown Amman souq: the Gold Souk, spice market, and fabric merchants in the alleyways around King Hussein Street. Free to browse.",
                  "7:30pm — Dinner at Hashem Restaurant (Downtown Amman, cash only, open 24 hours, beloved by Jordanians of every background): hummus, fuul, falafel, and warm flatbread. A full dinner for two: JOD 5–7. One of the great cheap meals in the Middle East.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Petra — The Siq, Treasury &amp; Royal Tombs"
                cost="JOD 10–20 ($14–28), Jordan Pass covers Petra entry"
                items={[
                  "5:30am — Public bus from Amman's Wihdat bus station to Petra / Wadi Musa (3 hours, JOD 5 = ~$7). Alternatively hire a private taxi the night before (JOD 50–70 one way, 2.5 hours). The bus is comfortable — the road is well maintained.",
                  "8:30am — Arrive Wadi Musa. Check in to your guesthouse, walk to the Petra visitors' centre. Present your Jordan Pass or buy a ticket (JOD 50 for 1-day, JOD 55 for 2-day — buy the Jordan Pass instead, it costs less and includes everything).",
                  "9:00am — Walk the Bab as-Siq passage before the Siq begins: the Djinn Blocks (three enormous rectangular monuments), the Obelisk Tomb, and the Bab as-Siq Triclinium. These are frequently rushed past — spend time here.",
                  "9:30am — The Siq: 1.2km of narrow sandstone canyon. The walls reach 80m high and narrow to 2m at the tightest point. The Nabataean water channel cut into the cliff face is visible the entire length. Walk slowly. The light changes every ten minutes.",
                  "10:00am — Al-Khazneh (The Treasury): the 40m facade carved from rose-red sandstone — one of the most recognisable structures on earth. Morning light from 9:30–11am hits the facade at the best angle. The interior is a single empty chamber; the facade is entirely the point. Spend 30–45 minutes here before the tour groups arrive.",
                  "11:30am — The Street of Facades (40 Nabataean rock tombs), the Colonnaded Street (Roman-era city plan), the Nymphaeum, and the Temenos Gateway leading to the Great Temple complex.",
                  "1:30pm — Lunch at the Basin Restaurant inside Petra (JOD 10–15 buffet, decent quality, well located deep in the site) or bring food from Wadi Musa.",
                  "3:00pm — Royal Tombs: the Urn Tomb (its interior was converted to a Byzantine church in 446 AD), the Silk Tomb, the Corinthian Tomb, and the Palace Tomb. Four grand facades carved into the same cliff face. The afternoon light from 3–5pm on the tombs is spectacular.",
                  "5:30pm — Exit via the Siq heading out. The Treasury in evening light looks completely different from the morning. Return to Wadi Musa for dinner (JOD 5–12 at most local restaurants).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Petra — The Monastery at Dawn &amp; High Place of Sacrifice"
                cost="JOD 5–15 ($7–21), Jordan Pass covers re-entry"
                items={[
                  "6:00am — Reenter Petra at opening. Walk the Siq quickly — you know the route. Turn left past the Treasury and follow the signs to Ad Deir (The Monastery). The path climbs 850 steps carved into the rock. Bring 1.5 litres of water.",
                  "7:30am — Ad Deir (The Monastery): Petra's largest monument — 50m wide and 45m tall, larger than the Treasury. At 6–7am you will be almost entirely alone. By 11am it is crowded. The view from the ridge behind the Monastery extends across Wadi Araba and, on clear days, to Israel. This is the best thing in Petra that most visitors miss entirely.",
                  "10:00am — High Place of Sacrifice: the 2,000-year-old ritual altar on Petra's highest accessible point. The path climbs past the Obelisks — two freestanding 7m rock needles carved in place from the living rock. The circular altar with drainage channels for ritual sacrifice is preserved almost perfectly.",
                  "12:00pm — Descend via the Wadi Farasa route past the Garden Triclinium, Soldier's Tomb, and the Renaissance Tomb. Different rock colours and textures from the main route. Very few other visitors use this descent path.",
                  "2:00pm — Rest and lunch in Wadi Musa. Optional evening: Petra Night Show (Tuesday, Wednesday, Thursday evenings only; JOD 14 entry): 800 candles light the Siq and Treasury as a Bedouin musician and storyteller perform. Genuinely atmospheric — well worth attending if you are there on the right night.",
                  "Pack for Wadi Rum. Most Wadi Musa guesthouses can arrange a shared minibus to Wadi Rum village (JOD 5–8) departing the following morning.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Wadi Rum — Jeep Tour, Bedouin Camp &amp; Milky Way"
                cost="JOD 55–90 ($77–126), transport + jeep tour + overnight camp"
                items={[
                  "8:00am — Shared minibus from Wadi Musa to Wadi Rum village (1.5 hours, JOD 5–8). Or arrange a private transfer through your guesthouse (JOD 30–45).",
                  "10:00am — Wadi Rum protected area entry (JOD 5, waived with Jordan Pass). Wadi Rum is 74,000 hectares of sandstone desert — red dunes, towering rock formations, and absolute silence. Lawrence of Arabia camped here in 1917. The Martian (2015), Rogue One (2016), and Dune Part One (2021) were all filmed in this landscape.",
                  "10:30am — 4WD jeep tour (JOD 35/person for a 4-hour shared tour; JOD 50–60 for a private half-day): Lawrence's Spring (a Nabataean rock-carved water system), the Khazali Canyon inscriptions (Thamudic rock art 2,000+ years old), the Red Sand Dunes, Mushroom Rock, and Um Fruth Rock Bridge.",
                  "2:00pm — Traditional zarb lunch at your Bedouin camp: meat and vegetables slow-cooked underground over hot coals, served with rice, flatbread, and salad. Most overnight camps include lunch in the rate.",
                  "5:30pm — Sunset from the highest accessible dune. The Wadi Rum light transitions from red to orange to purple to deep violet in the 45 minutes after sunset. The silence combined with this colour is difficult to describe and impossible to replicate elsewhere.",
                  "8:00pm — Bedouin overnight camp (JOD 40–70/person all-inclusive with dinner and breakfast, in traditional Bedouin tents or open-air sleeping platforms). The stargazing — zero light pollution, 300+ clear nights per year — is extraordinary. The Milky Way is bright and unmistakable to the naked eye by 9pm.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Dead Sea Float &amp; Amman Farewell Dinner"
                cost="JOD 30–50 ($42–70), Dead Sea entry + transport + dinner"
                items={[
                  "7:00am — Breakfast at the Bedouin camp. Arrange transfer from Wadi Rum to the Dead Sea (3 hours via the Aqaba–Amman desert highway). Shared minibus JOD 10–15; private taxi JOD 60–80.",
                  "11:00am — Dead Sea: the lowest point on Earth at -430m below sea level, salt concentration 33% (approximately 9x saltier than the ocean). The buoyancy is genuinely disorienting — you physically cannot sink. Float on your back for the obligatory photograph. Important: cover any cuts with petroleum jelly before entering. Do not splash water in your eyes under any circumstances — 33% salt is intensely painful.",
                  "12:00pm — Amman Beach public resort (JOD 20 entry including sunbed and shower). The shoreline mud is free — coat yourself, let it dry, rinse off in the freshwater shower. Rich in magnesium, calcium, and potassium salts.",
                  "2:00pm — Lunch at the resort restaurant (JOD 8–15) or at a roadside restaurant on the Dead Sea Highway.",
                  "4:00pm — Drive to Amman (1 hour along the Dead Sea Highway). Optional final stop: Darat al Funun contemporary art gallery in a terraced garden above the Citadel (free entry), or a final round of Amman hummus and knafeh (warm sweet cheese pastry, JOD 1–2) at Hababah on Mango Street.",
                  "7:30pm — Farewell dinner at Fakhr El-Din restaurant (Rainbow Street, Amman; JOD 15–25/person, reservation recommended): musakhan (sumac-roasted chicken over flatbread), maklouba (upside-down rice with lamb), and the most generous mezze spread in Amman. One of the genuinely great restaurants in the Middle East.",
                  "Head to Queen Alia International Airport: taxi or Uber from central Amman takes 35–45 minutes (JOD 18–25).",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Jordan" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Jordan Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key sites in priority order. Entry fees as of early 2026. The Jordan Pass (JOD 70–80 online) covers the visa, Petra, and all sites marked &quot;Jordan Pass&quot; below — it saves a minimum of JOD 15–20 over buying separately.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Petra — Al-Khazneh (The Treasury)",
                  e: "JOD 50/day · Jordan Pass",
                  d: "The 40m facade carved from rose-red sandstone — the defining image of Jordan. Best light: 9:30–11am. By 10am the first tour groups arrive. The interior is a single empty chamber; the entire point is the facade. Allow a full morning minimum. Two-day ticket (JOD 55 separately, or Jordan Pass) strongly recommended.",
                  t: "Must see · Full day",
                },
                {
                  n: "Petra — Ad Deir (The Monastery)",
                  e: "Included in Petra ticket",
                  d: "Petra&apos;s largest monument (50m wide × 45m tall), reached via 850 rock-carved steps. Go at 6am for solitude and dawn light. The view from the ridge behind extends to Israel on clear days. The most missed major site in Jordan — do not skip it. The 45-minute climb is entirely manageable with proper shoes and water.",
                  t: "Dawn essential · 2–3 hrs",
                },
                {
                  n: "Wadi Rum Protected Area",
                  e: "JOD 5 · Jordan Pass",
                  d: "74,000 hectares of sandstone desert. The overnight stay is the point — the day-trip misses the stargazing entirely. A 4-hour shared jeep tour costs JOD 35/person. Filming location for The Martian, Dune, and Rogue One. One of the most otherworldly landscapes on earth.",
                  t: "Overnight recommended · 1–2 days",
                },
                {
                  n: "Dead Sea",
                  e: "JOD 20 (public beach resort)",
                  d: "Lowest point on Earth at -430m below sea level. 33% salt concentration makes floating involuntary. The shoreline mineral mud is free. Visit on a weekday — tour buses arrive from 11am on weekends. 1 hour from Amman. The Kempinski Ishtar or Mövenpick offer luxury day access (JOD 50–80 including beach and pool).",
                  t: "Must do · Half day",
                },
                {
                  n: "Jerash — Roman Ruins",
                  e: "JOD 10 · Jordan Pass",
                  d: "One of the best-preserved Roman provincial cities in the world — more complete than many sites in Italy. The Oval Plaza, Cardo Maximus (main colonnaded street), Temple of Artemis, South Theatre, and Hippodrome are all largely intact. 45 minutes north of Amman. Allow 3 hours. Significantly underrated and undervisited.",
                  t: "Day trip from Amman · 3 hrs",
                },
                {
                  n: "Amman Citadel (Jabal al-Qala&apos;a)",
                  e: "JOD 3.5 · Jordan Pass",
                  d: "The Roman Temple of Hercules (2nd century AD), the 8th-century Umayyad Palace, and the Archaeological Museum. The Citadel hilltop at sunset — 360° views over Amman as the call to prayer echoes from 19 mosques — is one of the great city moments in the Middle East. Free after hours if you want just the view.",
                  t: "Must see · 1.5–2 hrs",
                },
                {
                  n: "Amman Roman Theatre",
                  e: "JOD 3 · Jordan Pass",
                  d: "A 6,000-seat 2nd-century AD amphitheatre in the middle of Downtown Amman. Still remarkably intact — the top tier gives excellent views across the city. The Folklore Museum and Popular Life Museum (free with ticket) house traditional Jordanian costumes, instruments, and domestic objects.",
                  t: "1 hr · Downtown Amman",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900">{place.n}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full">{place.e}</span>
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
            title="Jordan — Petra, Wadi Rum &amp; the Dead Sea"
            subtitle="The rose city, the Martian desert, and the lowest point on earth."
            spots={[
              {
                name: "Petra Treasury (Al-Khazneh)",
                query: "petra jordan treasury al-khazneh rose red sandstone nabataean ancient ruins",
                desc: "The 40m Treasury facade carved from rose-red sandstone — the defining image of Jordan and one of the great man-made wonders of the world.",
              },
              {
                name: "Wadi Rum Desert Landscape",
                query: "wadi rum desert jordan red dunes sandstone mountains martian landscape",
                desc: "Wadi Rum&apos;s Martian landscape — red dunes, sandstone mountains, and 74,000 hectares of silence under some of the darkest skies on earth.",
              },
              {
                name: "Dead Sea Jordan Float",
                query: "dead sea jordan float buoyancy salt water lowest point earth",
                desc: "Floating in the Dead Sea at -430m below sea level — the 33% salt concentration makes sinking physically impossible.",
              },
              {
                name: "Petra Monastery (Ad Deir)",
                query: "petra monastery ad deir jordan dawn rock carved nabataean",
                desc: "The Monastery at dawn — 50m wide, 850 steps above the main route, and almost entirely missed by the tour groups below.",
              },
              {
                name: "Amman Citadel Sunset",
                query: "amman citadel jordan roman temple hercules umayyad palace sunset city view",
                desc: "The Amman Citadel at sunset — Roman, Umayyad, and Byzantine layers visible as the call to prayer echoes across 19 mosques.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Jordan is mid-range to expensive by regional standards. The Jordanian Dinar (JOD) is pegged to the US dollar at 1 JOD = ~$1.41. The Jordan Pass (JOD 70–80) is the single most impactful budget decision — buy it before you fly.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (5 nights)", "$75–150", "$350–650", "$1,400–2,800"],
                    ["🎫 Jordan Pass (visa + sites)", "$99 (JOD 75)", "$99 (JOD 75)", "$99 (JOD 75)"],
                    ["🚌 Internal transport (5 days)", "$25–40", "$60–100", "$200–350"],
                    ["🍽️ Food (5 days)", "$50–100", "$125–250", "$350–750"],
                    ["🏜️ Wadi Rum jeep + camp", "$55–70", "$120–200", "$300–500"],
                    ["🌊 Dead Sea entry + transport", "$35–50", "$60–100", "$130–250"],
                    ["TOTAL (per person, 5 days)", "$340–510", "$815–1,375", "$2,579–4,725"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($55–90/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostels or budget guesthouses in Amman (JOD 10–20/night), cheap guesthouses in Wadi Musa (JOD 20–30), basic Bedouin camp in Wadi Rum (JOD 40 all-inclusive), public beach at the Dead Sea (JOD 20). Buy the Jordan Pass. Eat at Hashem and local dhabas.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($130–220/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">3–4 star hotels in Amman (JOD 50–90/night), mid-range guesthouses near Petra, private taxi transfers, upgraded Bedouin camp (JOD 60–80), Mövenpick Dead Sea day access. Private licensed guide for half a day at Petra (JOD 50–80). Excellent value at this tier in Jordan.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($400+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Mövenpick Resort Petra (JOD 120+/night, adjacent to the gate) or Kempinski Ishtar Dead Sea (JOD 180+/night), luxury bubble-dome camp in Wadi Rum, private guides throughout, hot air balloon over Wadi Rum (JOD 150–200). Jordan delivers exceptional luxury at this tier.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Jordan</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Jordan has three main accommodation bases for a 5-day itinerary: Amman (gateway and cultural hub), Wadi Musa (the village adjacent to Petra), and Wadi Rum (desert camps). The Dead Sea resorts are a category unto themselves.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Kempinski Hotel Ishtar Dead Sea",
                  type: "Luxury resort · Dead Sea, Sweimeh",
                  price: "From JOD 180/night (~$253)",
                  badge: "Dead Sea pinnacle",
                  desc: "The benchmark luxury property on the Dead Sea — infinity pools overlooking the water, private beach, spa with Dead Sea mineral treatments, and views across to the hills of the West Bank. The gold-standard for the Dead Sea experience. Book well in advance for spring (March–May) and autumn (September–November).",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Mövenpick Resort Petra",
                  type: "Luxury hotel · Adjacent to Petra gate",
                  price: "From JOD 120/night (~$169)",
                  badge: "Best Petra location",
                  desc: "The closest luxury property to Petra&apos;s main entrance — 5 minutes&apos; walk to the visitors&apos; centre. The location means you can enter at 6am opening without a taxi, return for a midday rest, and go back in for the evening light. The concierge can arrange early site access and Petra Night Show front-row seating.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Wadi Rum Luxury Camp",
                  type: "Luxury Bedouin camp · Wadi Rum desert",
                  price: "From JOD 80/night all-inclusive (~$113)",
                  badge: "Best desert stay",
                  desc: "Bubble-dome tents with transparent ceilings for in-bed stargazing, or elevated Bedouin tents with private bathrooms. All-inclusive: jeep sunset tour, zarb dinner cooked underground, and breakfast. The Milky Way from these camps — zero light pollution — is extraordinary.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Budget Guesthouses — Wadi Musa",
                  type: "Budget-mid · Wadi Musa village",
                  price: "JOD 20–40/night (~$28–56)",
                  badge: "Best value",
                  desc: "Dozens of clean, functional guesthouses in Wadi Musa. Rocky Mountain Hotel, Petra Moon Hotel, and Cleopetra Hotel are consistently good at the budget-mid tier. Most include breakfast. Book early for the spring high season (March–May) — rooms fill quickly.",
                  color: "border-parchment-2 bg-white",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Jordan</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Jordanian food is outstanding — the mezze culture, mansaf (the national dish: lamb in fermented yogurt sauce over rice), warm hummus, and the knafeh (sweet cheese pastry). Eating well here does not require spending much. Some of the best meals cost JOD 2–4.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Hashem Restaurant",
                  t: "Legendary cheap eats · Downtown Amman",
                  d: "One of the most famous restaurants in the Arab world — open 24 hours, cash only, loved by Jordanians of every background including reportedly the royal family. Hummus, fuul, falafel, and warm flatbread. Full meal for two: JOD 5–7. The hummus is warm, silky, and drenched in olive oil. Non-negotiable stop.",
                  b: "Non-negotiable",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Fakhr El-Din",
                  t: "Upscale Jordanian · Rainbow Street, Amman",
                  d: "Jordan&apos;s most celebrated traditional restaurant, in a beautiful 1950s villa on Rainbow Street. Musakhan (sumac-roasted chicken over flatbread), maklouba (upside-down rice with lamb or chicken), and a mezze spread that takes 20 minutes to set down fully. JOD 15–25/person. Reserve for dinner.",
                  b: "Farewell dinner",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Sufra Restaurant",
                  t: "Traditional Jordanian · Rainbow Street, Amman",
                  d: "Traditional Jordanian home cooking in a restored 1950s villa on Rainbow Street. The mansaf here — lamb cooked in jameed (fermented dried yogurt sauce) over rice with pine nuts — is excellent. Good for lunch, quieter than Fakhr El-Din. JOD 12–20/person.",
                  b: "Best for lunch",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Al-Qantarah (Wadi Musa)",
                  t: "Jordanian · Wadi Musa village near Petra",
                  d: "The best sit-down restaurant in Wadi Musa. Proper Jordanian food — musakhan, mansaf, mezze — rather than the tourist-menu pasta that fills the cheaper restaurants. JOD 8–18/person. Open for dinner only. Book a table for the night of the Petra Night Show.",
                  b: "Best near Petra",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Bedouin Camp Zarb Dinner",
                  t: "Traditional Bedouin · Wadi Rum camp",
                  d: "The zarb — a traditional Bedouin method of slow-cooking meat and vegetables underground in a sealed vessel over hot coals — is served at all Wadi Rum overnight camps as part of the package. Chicken, lamb, or goat with root vegetables, rice, and salad. Eating dinner in the desert under the Milky Way is excellent at any budget level.",
                  b: "Desert essential",
                  c: "bg-purple-50 border-purple-200",
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
            destination="Jordan"
            hotels={[
              {
                name: "Kempinski Hotel Ishtar Dead Sea",
                type: "Luxury resort · Dead Sea",
                price: "From JOD 180/night",
                rating: "5",
                badge: "Dead Sea pinnacle",
                url: "https://www.booking.com/hotel/jo/kempinski-hotel-ishtar-dead-sea.html?aid=2820480",
              },
              {
                name: "Mövenpick Resort Petra",
                type: "Luxury hotel · Adjacent to Petra gate",
                price: "From JOD 120/night",
                rating: "5",
                badge: "Best Petra location",
                url: "https://www.booking.com/hotel/jo/movenpick-nabatean-castle.html?aid=2820480",
              },
              {
                name: "Wadi Rum Night Luxury Camp",
                type: "Luxury Bedouin camp · Wadi Rum",
                price: "From JOD 80/night",
                rating: "5",
                badge: "Best desert camp",
                url: "https://www.booking.com/hotel/jo/wadi-rum-night-luxury-camp.html?aid=2820480",
              },
              {
                name: "Rocky Mountain Hotel Petra",
                type: "Budget-mid · Wadi Musa village",
                price: "From JOD 25/night",
                rating: "3",
                badge: "Best budget near Petra",
                url: "https://www.booking.com/hotel/jo/rocky-mountain-hotel-wadi-musa.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Petra Full Day Guided Tour",
                duration: "8 hrs",
                price: "From JOD 50/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=petra+jordan+guided+tour&partner_id=PSZA5UI",
              },
              {
                name: "Wadi Rum Jeep &amp; Overnight Camp",
                duration: "24 hrs",
                price: "From JOD 55/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=wadi+rum+overnight+camp&partner_id=PSZA5UI",
              },
              {
                name: "Dead Sea Day Trip from Amman",
                duration: "Full day",
                price: "From JOD 25/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=dead+sea+jordan+day+trip&partner_id=PSZA5UI",
              },
              {
                name: "Jerash Roman Ruins Tour",
                duration: "5 hrs",
                price: "From JOD 20/person",
                url: "https://www.getyourguide.com/s/?q=jerash+jordan+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Jordan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎫",
                  title: "Not Buying the Jordan Pass Before You Fly",
                  desc: "The Jordan Pass (JOD 70–80) covers your visa on arrival (JOD 40 value), Petra entry (JOD 50–55 for 2 days if bought separately), Wadi Rum entry (JOD 5), Jerash (JOD 10), and 37 additional sites. If you buy at the airport or at individual sites you pay full price for everything. Buy at jordanpass.jo before departure — it must be purchased before you arrive in Jordan to waive the visa fee.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "⛰️",
                  title: "Skipping the Monastery Because of the Steps",
                  desc: "The Ad Deir Monastery is 850 steps above the main Petra circuit. Most tourists see the Treasury and turn back. The Monastery is larger than the Treasury, more impressive up close, and far less crowded. Go at 6am — you will be almost alone in the most extraordinary carved space in Petra. The climb takes 45 minutes at a walking pace. Wear proper shoes and carry 1.5 litres of water.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🌌",
                  title: "Visiting Wadi Rum as a Day Trip",
                  desc: "The entire point of Wadi Rum is the night sky — zero light pollution, 300+ clear nights per year, the Milky Way visible and brilliant to the naked eye. Day visitors miss this entirely. Budget camps (JOD 40–50 all-inclusive with dinner and breakfast) are simple but comfortable. The overnight experience is one of the genuinely transformative things you can do in travel.",
                  color: "bg-pink-50 border-pink-200",
                },
                {
                  icon: "☀️",
                  title: "Entering Petra at 10am in Summer",
                  desc: "Petra in summer (June–August) midday reaches 43°C. The sandstone absorbs and radiates heat — it feels significantly hotter than the air temperature. Heat exhaustion cases are evacuated from the site daily in peak summer. Enter at 6am opening, cover the Treasury and main circuit by noon, rest in Wadi Musa through the afternoon, and return for the Royal Tombs at 4–6pm when temperatures drop and the light is spectacular.",
                  color: "bg-yellow-50 border-yellow-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Jordan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Petra at 7am: Treasury with Nobody in It",
                  desc: "Petra opens at 6am. Walk through the Siq at 6:30–7am and you arrive at the Treasury with a handful of other early risers. Morning light hits the facade best from 8–10am. By 10am the first tour groups are arriving. By 11am it is crowded. By noon the heat is intense. The difference between 7am Petra and 11am Petra is the difference between a pilgrimage and a queue. Set your alarm.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🏛️",
                  title: "The Monastery at 6am: Best Dawn in Jordan",
                  desc: "Enter Petra at 6am opening and walk directly to the Monastery route — turn left past the Treasury and follow the Ad Deir signs. Climb the 850 steps as the sun rises behind the rock. The Monastery at 7am, lit in pink-gold dawn light with no other visitors, is one of the most extraordinary sights in the entire Middle East. Carry water, wear proper shoes.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏜️",
                  title: "Wadi Rum Sunset from the Dunes",
                  desc: "Ask your Bedouin guide to position the jeep on the highest accessible dune for sunset (around 5:30–6pm depending on season). The light in Wadi Rum transitions from red to orange to purple to deep violet in the 45 minutes after sunset. The silence combined with this light — the Martian light that made this a filming location for multiple space-set films — is impossible to replicate elsewhere.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🌊",
                  title: "Dead Sea: Arrive Before 9am",
                  desc: "Public Dead Sea beaches fill with tour buses from 11am onward. Arrive before 9am for a peaceful float. Water temperature is warm year-round (28–32°C). Do not shave the day before. Do not splash water in your eyes — 33% salt concentration is intensely painful and requires immediate fresh-water flushing. Petroleum jelly on cuts before entering is essential.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🗺️",
                  title: "Add Jerash as a Day Trip from Amman",
                  desc: "Jerash (45 minutes north of Amman by taxi or bus, JOD 10 or Jordan Pass) is one of the best-preserved Roman provincial cities in the world — more complete than many sites in Italy. The Oval Plaza, Cardo Maximus, and Temple of Artemis are remarkable. Most Jordan travellers skip it. If you have a free morning in Amman, Jerash is the best use of it.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "💳",
                  title: "The Jordanian Dinar Is Fixed — Use ATMs",
                  desc: "The Jordanian Dinar (JOD) is pegged to the US Dollar at 1 JOD = ~$1.41. ATM exchange rates are reliable and consistent — draw JOD from any Amman ATM rather than changing cash at exchange booths. US dollars are widely accepted in tourist areas at roughly $1 = JOD 0.71. Airport money exchange rates are significantly worse than city ATMs.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Jordan" />

          {/* Combine With */}
          <CombineWith currentSlug="jordan-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is the Jordan Pass worth it for Indian and Western travellers?",
                  a: "Yes, emphatically. The Jordan Pass (JOD 70 for 1-day Petra, JOD 75 for 2-day, JOD 80 for 3-day) includes the Jordanian visa on arrival (JOD 40 value), Petra entry (JOD 50 for 2 days if bought separately), Wadi Rum entry (JOD 5), Jerash (JOD 10), and 37 additional sites. For any traveller staying 3+ nights and visiting Petra, the Jordan Pass saves a minimum of JOD 15–20 and eliminates the visa queue at the airport. Buy at jordanpass.jo before departure — it must be purchased before you arrive in Jordan.",
                },
                {
                  q: "Is Jordan safe to visit?",
                  a: "Jordan is one of the safest countries in the Middle East for tourists. It has maintained political stability for decades and has a strong tradition of hospitality toward visitors. Crime against tourists is rare. The main practical concerns are heat (dress modestly, carry water), vendor solicitation in Petra (firm but polite refusal works consistently), and driving on desert roads at night (avoid if possible). The US State Department, UK Foreign Office, and Australian DFAT generally rate Jordan as safe for standard tourist activities.",
                },
                {
                  q: "How many days do you need in Petra?",
                  a: "Two days minimum. Day 1: the Siq, Treasury, Colonnaded Street, Great Temple, and Royal Tombs — a full day. Day 2: the Monastery (Ad Deir) at dawn, the High Place of Sacrifice, and the Wadi Farasa descent — another full day. Three days allows you to slow down, visit Little Petra (Siq al-Barid, 7km away, free entry), and revisit the Treasury at different times of day. The Jordan Pass offers 1, 2, and 3-day Petra options.",
                },
                {
                  q: "How do I get from Petra to Wadi Rum?",
                  a: "Shared minibus from Wadi Musa (the town next to Petra) to Wadi Rum village: approximately 1.5 hours, JOD 5–8/person. Most Wadi Musa guesthouses can arrange this the night before. A private taxi costs JOD 30–45. If on a budget, ask your guesthouse to find other travellers heading the same way and split the cost.",
                },
                {
                  q: "Can I cross from Jordan to Israel?",
                  a: "Yes. Jordan and Israel have had a formal peace treaty since 1994 and open border crossings. The two main crossings for tourists: (1) Allenby Bridge / King Hussein Bridge near Amman — connects to the West Bank and Jerusalem, open Sunday–Thursday. (2) Yitzhak Rabin / Wadi Araba crossing near Aqaba — connects to Eilat, open 7 days a week, most convenient from the Petra/Wadi Rum area. Note: ask Israeli border officers to stamp a separate paper rather than your passport if you are concerned about travel to other Arab countries.",
                },
                {
                  q: "What is the dress code at Petra and in Jordan?",
                  a: "Jordan is a moderate Muslim country — dress conservatively in towns and mosques. For men: long trousers and covered shoulders are appropriate in cities. For women: loose clothing covering shoulders and knees is respectful and practical (it also reduces sun exposure in the desert). At the Dead Sea, swimwear is fine at resort beaches. In Amman and Petra there is no enforcement, but modest dress is appreciated and significantly more comfortable in the desert heat.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Jordan trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/petra-travel-guide", label: "Petra complete guide", icon: "🏛️" },
                { href: "/blog/jordan-pass-guide", label: "Jordan Pass explained", icon: "🎫" },
                { href: "/blog/wadi-rum-overnight", label: "Wadi Rum overnight", icon: "🌌" },
                { href: "/blog/dead-sea-guide", label: "Dead Sea tips", icon: "🌊" },
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
          <RelatedGuides currentSlug="jordan-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Middle East &amp; Beyond</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Dubai in 4 Days — City of the Future", href: "/blog/dubai-4-days" },
                { label: "Istanbul in 5 Days — Two Continents", href: "/blog/istanbul-5-days" },
                { label: "Egypt in 7 Days — Pyramids &amp; Nile", href: "/blog/egypt-7-days" },
                { label: "Doha in 3 Days — Pearl of the Gulf", href: "/blog/doha-3-days" },
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
