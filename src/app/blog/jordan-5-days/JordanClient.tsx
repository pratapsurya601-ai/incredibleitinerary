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
          href: `mailto:?subject=Jordan 5-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Jordan in 5 Days — Petra, Wadi Rum, Dead Sea &amp; Amman guide&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        description="Jordan in 5 Days: Petra Treasury at 7am, Wadi Rum stargazing, Dead Sea float, Jerash Roman ruins — complete travel guide with JOD and USD costs."
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
      <Breadcrumb destination="Jordan" />

      <main className="bg-cream min-h-screen">

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
                Walking through the Siq at 7am with the Treasury emerging around the final bend is one of the most extraordinary moments in all of travel. The complete guide with real JOD and USD costs.
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
              Jordan is a small, landlocked Middle Eastern kingdom that punches far above its geographic size. In five days you can walk through a 2,000-year-old Nabataean city carved from rose-red rock, sleep under the stars in a desert that looks like Mars, float effortlessly in the saltiest lake on earth, and eat mansaf — lamb cooked in fermented yogurt — with Jordanians who mean it when they say &quot;welcome.&quot;
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Petra is the headline, but the honest truth is that Wadi Rum rivals it. Most travellers who spend one night in the desert and two days in Petra come back saying the desert surprised them more. The combination of these two sites, with the Dead Sea as a recovery day at the end, makes Jordan one of the most complete five-day itineraries anywhere in the world.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The country is also safer than most people expect. Jordan has maintained political stability in an otherwise volatile region and has a strong tradition of hospitality toward foreign visitors. The main practical obstacle is cost: Jordan is not a cheap destination. Budget travellers can manage on $55–80 per day, but Petra alone requires the Jordan Pass ($100+) to be cost-effective. Plan the finances carefully before you go.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="AMM" />
              <StatCard icon="🌡️" label="Best Season" value="Mar–May, Sep–Nov" />
              <StatCard icon="🏛️" label="UNESCO Sites" value="3+" />
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
                  d: "18–28°C, wildflowers in Petra, comfortable hiking in Wadi Rum. The light in spring is exceptional — soft and golden, ideal for photography at the Treasury. This is the ideal window for first-time visitors. Book accommodation early as it sells out fast.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🍂",
                  t: "Autumn — Excellent",
                  d: "20–32°C, significantly less crowded than spring. September still carries summer heat but October and November are ideal — cool enough for the Monastery climb, warm enough for Wadi Rum camping. The Dead Sea is warmest in October. A strong second choice.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🔥",
                  t: "Summer — Avoid if Possible",
                  d: "38–43°C in Petra and Wadi Rum. The rock walls of Petra absorb heat and amplify it — the actual felt temperature in the canyon at noon is brutal. Heat exhaustion cases are evacuated from Petra daily in July and August. If you must go, enter at 6am and leave by 11am.",
                  b: "Not recommended",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter — Cool and Quiet",
                  d: "5–15°C in Petra, occasional snow on high ground. Wadi Rum nights drop below freezing — pack seriously warm clothing for camping. The upside: Petra is almost empty in winter and the cool air makes the long hikes to the Monastery comfortable. Budget hotels discount heavily.",
                  b: "For cold-weather travellers",
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
                <strong className="font-medium">Key detail:</strong> All international flights arrive at <strong className="font-medium">Queen Alia International Airport (AMM)</strong>, 35km south of Amman. Buy the <strong className="font-medium">Jordan Pass online before you fly</strong> — it includes the visa fee (JD 40 / ~$56) and entry to Petra. You cannot buy it at the airport after arrival.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "From India (recommended route)",
                  d: "Direct flights operate from Delhi (DEL) and Mumbai (BOM) to Amman (AMM) on Air India, Air Arabia, and IndiGo — 5–6 hours, typically $250–$500 return if booked 6–8 weeks ahead. Indirect routing via Dubai or Abu Dhabi is often cheaper ($180–$350 return) but adds 3–4 hours travel time. Amman airport is well-organised and the Jordan Pass lane at immigration is fast.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🎫",
                  t: "Jordan Pass — Essential for Petra visitors",
                  d: "Buy at jordanpass.jo before departure. The Jordan Pass (JD 70–80 depending on Petra days) includes: (1) Jordanian visa on arrival — waives the JD 40 airport fee. (2) Petra entry for 1, 2, or 3 days — worth JD 50–55 separately. (3) 40+ additional sites including Jerash, Wadi Rum entry, Amman Citadel, and the Petra Night Show. Total savings: JD 20–30 minimum. Condition: you must stay 3+ nights in Jordan.",
                  b: "Save $100+",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚗",
                  t: "Amman city transport",
                  d: "Uber operates in Amman and is the most reliable way to get around. Airport to Downtown or Rainbow Street: JD 12–18 (~$17–25). Taxis are available but negotiate the fare before entering. JETT public buses run between major cities (Amman–Petra: JD 5, 3 hours from Wihdat bus station). For Petra–Wadi Rum transfers, minibuses depart from Wadi Musa village.",
                  b: "Practical info",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "💱",
                  t: "Currency and payments",
                  d: "Jordanian Dinar (JD). 1 JD ≈ $1.41 USD. The dinar is pegged to the dollar — exchange rates are stable and predictable. ATMs in Amman and Petra dispense JD. USD is widely accepted in tourist areas at approximately $1 = JD 0.71. Credit cards accepted at hotels and larger restaurants. Carry cash for small vendors, transport, and the Petra Night Show.",
                  b: "JOD + USD",
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
              Each day card is expandable. All costs shown in JOD (Jordanian Dinar) and approximate USD. 1 JD ≈ $1.41. The Jordan Pass covers Petra entry, Wadi Rum, and 40+ sites — buy it before your flight at jordanpass.jo.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Amman — Citadel, Roman Theatre &amp; Downtown"
                cost="JD 25–40 (~$35–55)"
                items={[
                  "Arrive Amman Queen Alia Airport. Take Uber or taxi to your hotel near Rainbow Street or Downtown (JD 12–18 / ~$17–25 from the airport). Check in and get oriented — Amman is built across 19 hills and the terrain takes a day to understand.",
                  "10:30am — Rainbow Street (Amman&apos;s most atmospheric neighbourhood): independent cafés, bookshops, street art, and views over the city&apos;s hills. Street food here is outstanding — falafel sandwich JD 0.75 (~$1), ka&apos;ak sesame bread with za&apos;atar JD 0.50.",
                  "12:00pm — Lunch in Downtown Amman: falafel, hummus, and fuul (fava bean stew) at any Downtown restaurant. A full meal with bread and drinks: JD 2–4 (~$3–6). Jordanian hummus bears almost no resemblance to the supermarket version.",
                  "1:30pm — Amman Citadel (Jabal al-Qala&apos;a, JD 3.5 / ~$5 entry, or free with Jordan Pass): the Roman Temple of Hercules (2nd century AD, enormous column drums remain), the Umayyad Palace (8th-century Islamic palace complex, remarkably preserved), and the small but excellent Archaeological Museum. Allow 1.5–2 hours.",
                  "3:30pm — Roman Theatre (JD 3.5 or combined ticket): the 2nd-century AD amphitheatre seats 6,000. Walk to the top tier for views over Amman. The Folklore Museum and Popular Life Museum inside are free with the theatre ticket.",
                  "5:00pm — Downtown Amman souq: the Gold Souk, spice market, and fabric merchants around King Hussein Street. Free to wander.",
                  "7:30pm — Dinner: mansaf (Jordan&apos;s national dish — lamb in fermented yogurt sauce with rice and pine nuts, JD 4–8 / ~$6–11) at Hashem Restaurant (Downtown, cash only, legendary institution beloved by the king himself).",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Jerash Roman Ruins &amp; Petra Overnight"
                cost="JD 20–35 (~$28–50)"
                items={[
                  "7:00am — Minibus or shared taxi from Amman North Bus Station to Jerash (1 hour, JD 1.50 / ~$2). Jerash is the best-preserved Roman city outside Italy — better preserved than Pompeii in many respects.",
                  "8:30am — Jerash: Enter through Hadrian&apos;s Arch (built 129 AD to honour Emperor Hadrian&apos;s visit). The Oval Plaza with its 56 Ionic columns is the centrepiece — the ancient paving stones still have the chariot wheel ruts. The Temple of Artemis, the South Theatre (seats 3,000, acoustics still perfect), and the Cardo Maximus colonnaded street are the highlights. Budget 2.5–3 hours.",
                  "11:30am — Return to Amman and continue to Petra via public bus from Wihdat station (JD 5 / ~$7, 3 hours). Or book an afternoon transfer direct from Jerash to Petra (private taxi JD 60–80 / ~$85–113, 2.5 hours).",
                  "Check in to your Wadi Musa hotel (the village that borders Petra). Even budget guesthouses in Wadi Musa include breakfast — confirm when booking.",
                  "Evening — Wadi Musa village: walk the main street, eat dinner at a local restaurant (JD 5–12 / ~$7–17), and set your alarm for 6am. The Jordan Pass is essential for tomorrow — you cannot buy it at the gate.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Petra — The Siq, Treasury &amp; Monastery"
                cost="JD 15–25 (~$21–35) with Jordan Pass"
                items={[
                  "6:00am — Enter Petra at opening. Walk the Bab as-Siq passage (1km, djinn blocks and obelisk tomb) before the Siq itself begins.",
                  "6:30am — The Siq (1.2km canyon): the narrow gorge reaches 80m height with 2m width at the tightest point. The Nabataean water channel carved into the rock 2,000 years ago is still visible. Walk slowly — the light changes every 10 minutes.",
                  "7:00am — Al-Khazneh (The Treasury): the iconic 40m facade carved from rose-red sandstone. The morning light from 7:30–10am is the best photography window. The interior is a single undecorated chamber — the facade is entirely the point. By 10am the first tour groups arrive.",
                  "10:00am — The Street of Facades (40 Nabataean rock tombs), the Colonnaded Street (Roman-era city plan), the Nymphaeum (2nd century AD), and the Great Temple complex. The scale of Petra only becomes clear as you walk the full 1.5km from the Treasury to the basin.",
                  "12:00pm — Lunch at the Basin Restaurant inside Petra (JD 10–15 / ~$14–21 buffet) or bring food from Wadi Musa.",
                  "1:30pm — The Monastery (Ad Deir): turn left past the Basin and follow the signs up the 850 carved steps. The Monastery is Petra&apos;s largest monument (50m wide, 45m tall) and most impressive facade — larger than the Treasury, better preserved, and far less crowded after noon. The 45-minute climb is worth every step.",
                  "4:00pm — Royal Tombs (Urn Tomb, Silk Tomb, Corinthian Tomb, Palace Tomb): the cliff face carved with four grand facades. The Urn Tomb interior was converted to a Byzantine church in 446 AD — the inscriptions in Greek still survive.",
                  "Optional evening — Petra Night Show (Tue/Wed/Thu, JD 14 / ~$20 or included in Jordan Pass): 800 candles light the Siq and Treasury as a Bedouin storyteller narrates Nabataean history. Genuinely atmospheric.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Wadi Rum — Jeep Tour &amp; Bedouin Camp"
                cost="JD 45–75 (~$63–106)"
                items={[
                  "8:00am — Minibus or shared taxi from Wadi Musa to Wadi Rum village (1.5 hours, JD 5–8 / ~$7–11 per person). Or arrange a private transfer through your guesthouse.",
                  "10:00am — Wadi Rum protected area entry (JD 5 / ~$7, waived with Jordan Pass). Wadi Rum is 74,000 hectares of desert, sandstone mountains, and Martian-red dunes. Lawrence of Arabia camped here in 1917. The Martian (2015), Rogue One (2016), and Dune (2021) were all filmed here.",
                  "10:30am — 4WD jeep tour (JD 35–60 / ~$50–85 per person for a 4-hour tour): Lawrence&apos;s Spring (a rock-carved Nabataean water system), the Khazali Canyon inscriptions (Thamudic rock art 2,000+ years old), the Red Sand Dunes, the Mushroom Rock, and Um Fruth Rock Bridge.",
                  "2:00pm — Lunch at your Bedouin camp: traditional zarb — meat and vegetables cooked underground over coals. Most camps include lunch in the overnight price.",
                  "5:00pm — Sunset from the dunes: the light turns Wadi Rum from red to deep purple to black over 45 minutes. The &apos;Martian light&apos; — the same desert atmosphere that drew multiple sci-fi film productions — is extraordinary in person.",
                  "8:00pm — Bedouin overnight camp (JD 40–70 / ~$56–99 per person including dinner and breakfast, in traditional Bedouin tents or under open stars). The stargazing at Wadi Rum — zero light pollution, 300+ clear nights per year — is among the best on earth. The Milky Way is bright and visible to the naked eye.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Dead Sea Float, Aqaba Snorkel &amp; Farewell"
                cost="JD 30–55 (~$42–78)"
                items={[
                  "7:00am — Breakfast at the Bedouin camp. Choose your Day 5: (A) Dead Sea float + return to Amman for departure, or (B) Aqaba Red Sea snorkel + evening flight.",
                  "Option A — Dead Sea: Minibus from Wadi Rum toward Amman highway (JD 10–15 / ~$14–21, 3 hours). Dead Sea is 1 hour south of Amman. Amman Beach public resort (JD 20 / ~$28 entry including sunbed and shower) or Suweimeh resorts (JD 25–35 / ~$35–50).",
                  "Dead Sea float: the buoyancy is genuinely disorienting — you cannot sink even if you try. Salt concentration 33%, -430m below sea level. Cover any cuts with petroleum jelly before entering. Do not splash your eyes under any circumstances — the salt is intensely painful and requires immediate fresh water flushing.",
                  "Dead Sea mud is free at the shore — coat yourself and let it dry. The minerals leave skin notably soft. Shower facilities are at the resort entrance.",
                  "Option B — Aqaba Red Sea: Aqaba is 1 hour from Wadi Rum (JD 5–8 / ~$7–11 shared taxi). The Red Sea at Aqaba has some of the best accessible reef snorkelling in the world — South Beach and the Japanese Garden coral reef are reachable by free shuttle or short taxi. Snorkel rental JD 3–5 / ~$4–7.",
                  "Afternoon — Return to Amman: final kunafeh (sweet cheese pastry in sugar syrup, JD 1–2 / ~$1.50–3) at Habibah Restaurant, Downtown Amman. Farewell dinner: Fakhr El-Din restaurant (Rainbow Street, JD 15–25 / ~$21–35 per person) for the best mezze spread in Amman.",
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
              The four essential sites in order of priority. Entry fees as of early 2026 — most are included in the Jordan Pass (JD 70–80 / ~$99–113).
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Petra — The Rose City",
                  e: "JD 50 (2-day) / ~$70 — or included in Jordan Pass",
                  d: "The Nabataean city carved from rose-red sandstone between the 4th century BC and 2nd century AD. The Treasury (Al-Khazneh) is the iconic facade, but the Monastery (Ad Deir) is larger and less crowded. The site covers 264 km² — most visitors see only 20% of it. Budget 2 full days minimum. Enter at 6am opening.",
                  t: "2 days minimum · Must visit",
                },
                {
                  n: "Jerash — Pompeii of the Middle East",
                  e: "JD 10 / ~$14 — or included in Jordan Pass",
                  d: "The best-preserved Roman provincial city in the world outside Italy. The Oval Plaza with 56 Ionic columns, the Temple of Artemis, the South Theatre with its perfect acoustics, and the 1km colonnaded Cardo are all extraordinarily intact. 45km north of Amman, easily combined with arrival day or departure.",
                  t: "Half day · Unmissable",
                },
                {
                  n: "Wadi Rum — The Martian Desert",
                  e: "JD 5 / ~$7 — or included in Jordan Pass",
                  d: "74,000 hectares of sandstone mountains, red dunes, and silence. The reason to visit is the overnight — the stargazing at Wadi Rum (zero light pollution, 300+ clear nights per year) is among the best on earth. Day trips are worthwhile but miss the entire point. Book a Bedouin camp and stay the night.",
                  t: "1 night minimum · Transformative",
                },
                {
                  n: "Dead Sea — Lowest Point on Earth",
                  e: "JD 20–35 / ~$28–50 (resort day-use fee)",
                  d: "The Dead Sea sits at 430m below sea level — the lowest point on the planet&apos;s surface. Salt concentration of 33% makes it physically impossible to sink. The mineral-rich mud is free at the shore. The Dead Sea is shrinking (its level drops about 1m per year) — visit while the shoreline is still accessible. 1 hour from Amman by road.",
                  t: "Half day · Unique experience",
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
            subtitle="Rose-red rock cities, Martian deserts, and the world&apos;s saltiest lake."
            spots={[
              {
                name: "Petra Treasury at Dawn",
                query: "petra treasury al khazneh rose red rock jordan nabataean dawn",
                desc: "The Treasury (Al-Khazneh) at 7am — the iconic 40m rose-red facade at its best before the tour groups arrive.",
              },
              {
                name: "Wadi Rum Desert",
                query: "wadi rum desert sandstone mountains jordan martian red dunes",
                desc: "Wadi Rum&apos;s Martian landscape — 74,000 hectares of red sandstone mountains and dunes that have served as the backdrop for multiple space films.",
              },
              {
                name: "Dead Sea Float",
                query: "dead sea jordan floating salt water lowest point earth",
                desc: "The Dead Sea at 430m below sea level — 33% salt concentration makes it physically impossible to sink.",
              },
              {
                name: "Jerash Roman Columns",
                query: "jerash jordan roman ruins oval plaza ionic columns ancient",
                desc: "The Oval Plaza at Jerash — 56 Ionic columns from the 1st century AD, the finest preserved Roman city in the Middle East.",
              },
              {
                name: "Wadi Rum Stargazing",
                query: "wadi rum night sky milky way stars desert jordan bedouin camp",
                desc: "The Milky Way over Wadi Rum — zero light pollution and 300+ clear nights per year make this one of the world&apos;s great stargazing destinations.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Jordan is a mid-range destination — significantly more expensive than Southeast Asia but cheaper than Western Europe. The Jordan Pass (JD 70–80 / ~$99–113) is the biggest single saving: it covers the visa fee plus Petra and 40+ sites, saving JD 20–30 over paying separately.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget (JOD / USD)</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range (JOD / USD)</th>
                    <th className="p-3.5 text-xs font-medium text-violet-300 text-center">Luxury (JOD / USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["✈️ Flights (return, from India)", "JD 130–230 / $180–325", "JD 130–230 / $180–325", "JD 400–700 / $565–990"],
                    ["🎫 Jordan Pass (incl. visa + Petra)", "JD 75 / $106", "JD 75 / $106", "JD 80 / $113"],
                    ["🏨 Accommodation (5 nights)", "JD 30–60 / $42–85", "JD 120–250 / $170–353", "JD 500–1,400 / $705–1,975"],
                    ["🚌 Transport in Jordan", "JD 20–40 / $28–56", "JD 60–120 / $85–170", "JD 150–300 / $212–423"],
                    ["🏜️ Wadi Rum camp (1 night, incl. meals)", "JD 40–50 / $56–71", "JD 80–120 / $113–170", "JD 150–250 / $212–353"],
                    ["🌊 Dead Sea resort entry", "JD 20 / $28", "JD 30–50 / $42–71", "JD 60–120 / $85–170"],
                    ["🍽️ Food (5 days)", "JD 30–60 / $42–85", "JD 80–150 / $113–212", "JD 200–400 / $282–565"],
                    ["TOTAL (per person, 5 days)", "JD 345–535 / $487–755", "JD 575–995 / $811–1,404", "JD 1,540–3,250 / $2,172–4,583"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($55–80/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in hostels and guesthouses (JD 8–15/night), eat at local restaurants and street stalls, use public buses and minibuses between cities. The Jordan Pass is non-negotiable even at budget level.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($130–220/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">3-4 star hotels (JD 50–90/night), private transfers between sites, guided tours of Petra, mid-range Wadi Rum camp with private tents. The sweet spot for comfort without overpaying.</p>
              </div>
              <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
                <p className="font-medium text-sm text-violet-800 mb-1">💎 Luxury ($400–900+/day)</p>
                <p className="text-xs text-violet-700 font-light leading-relaxed">Mövenpick Resort Petra, luxury bubble-tent camps in Wadi Rum, private guides for Petra and Jerash, private transfers throughout. Jordan&apos;s top-end properties are genuinely world-class.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Jordan</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key accommodation decision is where to base yourself for Petra: in Wadi Musa (the adjacent village) you can walk to the Petra gate, which is critical for the 6am opening strategy. Amman is the logical first and last night.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Amman — Rainbow Street hotels",
                  type: "Urban base · First Circle / Jabal Amman",
                  price: "JD 15–90 / ~$21–127/night",
                  badge: "Best Amman location",
                  desc: "Rainbow Street is Amman&apos;s most atmospheric neighbourhood — independent cafés, traditional restaurants, boutique guesthouses, and easy walking distance to the Citadel. Budget hostels (JD 10–20 dorm) and mid-range boutique hotels (JD 50–90) are clustered here. Avoid staying in the newer West Amman hotel district — it&apos;s sterile and far from anything interesting.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Petra — Wadi Musa guesthouses",
                  type: "Petra base · Walking distance to gate",
                  price: "JD 15–80 / ~$21–113/night",
                  badge: "Essential for early entry",
                  desc: "Staying in Wadi Musa (the village at the Petra entrance) is essential if you want to enter at 6am. The gate is a 10-minute walk from most hotels. Rocky Mountain Hotel and Petra Guest House are long-running reliable options. The Mövenpick Resort Petra is directly adjacent to the gate and is the best located luxury property in all of Jordan.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Wadi Rum — Bedouin camps",
                  type: "Desert camp · All-inclusive",
                  price: "JD 40–200 / ~$56–282/night incl. meals",
                  badge: "Unique experience",
                  desc: "Bedouin camps range from basic (mattresses in a Bedouin tent, JD 40–50 all-inclusive) to luxury bubble tents with transparent domed ceilings for stargazing from bed (JD 150–250). All camps include dinner (zarb — underground slow-cooked meat), breakfast, and usually the jeep tour. The key upgrade is not the tent itself but the camp location — ask how far it is from the main village road.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Aqaba — Red Sea beachfront",
                  type: "Beach hotel · Red Sea coast",
                  price: "JD 40–150 / ~$56–212/night",
                  badge: "If adding a beach day",
                  desc: "If you choose the Aqaba option on Day 5 instead of the Dead Sea, Kempinski Hotel Aqaba and Movenpick Resort Aqaba are the best-located properties with direct Red Sea beach access. From the terrace you can see Israel, Egypt, and Saudi Arabia across the Gulf of Aqaba simultaneously.",
                  color: "border-blue-200 bg-blue-50",
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
              Jordanian food is one of the great revelations of Middle Eastern travel. The hummus, mansaf, and mezze spread here bear no resemblance to their exported supermarket versions. Eat at the local institutions — they are cheap, extraordinary, and where Jordanians actually go.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Hashem Restaurant",
                  t: "Downtown Amman · Cash only · Legendary",
                  d: "Jordan&apos;s most famous restaurant — a cash-only Downtown institution that has fed kings and backpackers equally since 1952. Falafel, hummus, fuul (fava bean stew), and ful medames. A full meal for two with bread and tea: JD 6–10 (~$8–14). Open from early morning until late night. No reservations, no menu — just point at what everyone else is eating.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Habibah Sweets",
                  t: "Downtown Amman · Kunafeh specialist",
                  d: "The best kunafeh in Jordan — sweet cheese pastry soaked in sugar syrup and topped with crushed pistachios, served hot from a large round tray. JD 1–2 (~$1.50–3) per portion. The queue at Habibah moves fast. There are branches across Amman but the original Downtown location is the pilgrimage. This is the thing to eat before your flight home.",
                  b: "Best kunafeh",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Sufra Restaurant",
                  t: "Rainbow Street, Amman · Traditional Jordanian",
                  d: "The best sit-down traditional Jordanian meal in Amman — a restored 1950s villa on Rainbow Street serving musakhan (sumac roast chicken on flatbread), maklouba (upside-down rice with vegetables), mansaf, and outstanding mezze. JD 15–25 (~$21–35) per person. Reserve for dinner. The courtyard setting is beautiful in the evening.",
                  b: "Best sit-down meal",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Wadi Musa restaurants (Petra village)",
                  t: "Petra village · Budget-mid",
                  d: "The restaurants on Wadi Musa&apos;s main street serve decent Jordanian food at tourist prices — JD 8–15 (~$11–21) for a main course. Al-Aqaba and Al-Wadi are reliable. Avoid eating inside Petra itself (the Basin Restaurant is expensive for what it is) unless you&apos;re too deep in the site to leave for lunch.",
                  b: "Practical",
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
            destination="Jordan"
            hotels={[
              {
                name: "Mövenpick Resort Petra",
                type: "Luxury · Adjacent to Petra gate",
                price: "From JD 200 / ~$282/night",
                rating: "5",
                badge: "Best location",
                url: "https://www.booking.com/hotel/jo/mövenpick-resort-petra.html?aid=2820480",
              },
              {
                name: "Petra Guest House Hotel",
                type: "Mid-range · Wadi Musa, Petra",
                price: "From JD 55 / ~$78/night",
                rating: "4",
                badge: "Best value Petra",
                url: "https://www.booking.com/hotel/jo/petra-guest-house.html?aid=2820480",
              },
              {
                name: "Wadi Rum Night Luxury Camp",
                type: "Luxury camp · Wadi Rum desert",
                price: "From JD 120 / ~$170/night incl. meals",
                rating: "5",
                badge: "Best Wadi Rum camp",
                url: "https://www.booking.com/hotel/jo/wadi-rum-night-luxury-camp.html?aid=2820480",
              },
              {
                name: "The House Boutique Suites",
                type: "Boutique · Rainbow Street, Amman",
                price: "From JD 60 / ~$85/night",
                rating: "4",
                badge: "Best Amman boutique",
                url: "https://www.booking.com/hotel/jo/the-house-boutique-suites-amman.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Petra Full Day Private Tour",
                duration: "8 hrs",
                price: "From JD 55 / ~$78/person",
                badge: "Highly rated",
                url: "https://www.getyourguide.com/s/?q=petra+private+guided+tour&partner_id=PSZA5UI",
              },
              {
                name: "Wadi Rum Jeep + Overnight Camp",
                duration: "24 hrs",
                price: "From JD 60 / ~$85/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=wadi+rum+overnight+camp&partner_id=PSZA5UI",
              },
              {
                name: "Dead Sea Day Trip from Amman",
                duration: "6 hrs",
                price: "From JD 30 / ~$42/person",
                badge: "Popular",
                url: "https://www.getyourguide.com/s/?q=dead+sea+amman+day+trip&partner_id=PSZA5UI",
              },
              {
                name: "Jerash Roman Ruins Tour",
                duration: "4 hrs",
                price: "From JD 25 / ~$35/person",
                url: "https://www.getyourguide.com/s/?q=jerash+guided+tour+jordan&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Jordan</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🎫",
                  title: "Not Buying the Jordan Pass Before Arrival",
                  desc: "The Jordan Pass (jordanpass.jo) must be purchased online before you arrive in Jordan — you cannot buy it at the airport after landing. It includes the visa fee (JD 40 / ~$56 value), 2-day Petra entry (JD 55 / ~$78 value), and 40+ sites. Total savings versus paying separately: JD 20–30 / ~$28–42. If you&apos;re visiting Petra and staying 3+ nights, it is always worth it. The one condition to trigger the visa waiver is 3 nights minimum in Jordan.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "⛰️",
                  title: "Only Spending One Day at Petra",
                  desc: "The Treasury and the main Siq are remarkable, but 70% of Petra&apos;s area — including the Monastery (Petra&apos;s largest monument), the High Place of Sacrifice, the Royal Tombs, the Colonnaded Street, and Little Petra — is missed by visitors who only come for one day. Two full days is the minimum. The Monastery alone takes 45 minutes to reach from the Treasury, plus time at the top. Budget for the 2-day Jordan Pass option (JD 75 / ~$106), not the 1-day.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🌞",
                  title: "Arriving at Petra After 9am",
                  desc: "Petra opens at 6am. The Treasury at 7am with empty sandstone walls and soft pink light, versus the Treasury at 10am with tour groups photographing it every 30 seconds, are completely different experiences. Enter at 6am. Walk the Siq in the quiet. Arrive at the Treasury at 7am. By 10am, when the coaches from Amman arrive, you&apos;ll already be at the Monastery. The alarm at 5:30am is worth it.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🌌",
                  title: "Visiting Wadi Rum as a Day Trip",
                  desc: "Wadi Rum as a half-day trip is completely missing the point. The landscape is beautiful in daylight, but the reason Wadi Rum is one of the great travel experiences on earth is the night — zero light pollution, the Milky Way bright enough to read by, the silence of the desert after 10pm. Bedouin budget camps (JD 40–50 / ~$56–71 all-inclusive) are simple but genuinely atmospheric. Do not leave before sunrise.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color={m.color} />
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
                  title: "Petra at 6am: The Treasury with Nobody in It",
                  desc: "Petra opens at 6am. Walk through the Siq at 6:30am and arrive at the Treasury with a handful of other early risers. The morning light hits the facade beautifully from 7:30–10am. By 10am the first tour groups arrive. By noon the heat is intense. The difference between 7am Petra and 11am Petra is the difference between a pilgrimage and a queue.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🏛️",
                  title: "The Monastery at 7am: The Best Dawn in Jordan",
                  desc: "If you&apos;re staying in Wadi Musa, enter Petra at 6am and walk directly to the Monastery route (left past the Treasury, follow the signs to Ad Deir). Climb the 850 steps as the sun rises. At 7am with no other visitors, the Monastery in pink-gold dawn light is one of the most extraordinary sights in the entire Middle East. Bring water and proper shoes.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏜️",
                  title: "Wadi Rum Sunset from the Dunes",
                  desc: "Ask your Bedouin guide to position the jeep on the highest accessible dune for sunset (5:30–6pm depending on season). The light in Wadi Rum transitions from red to orange to purple to deep violet in the 45 minutes after sunset — the &apos;Martian light&apos; that drew multiple film productions. The silence combined with this light is difficult to describe and impossible to replicate.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🌊",
                  title: "Dead Sea Early Morning: Before the Buses",
                  desc: "The public Dead Sea beaches fill with tour buses from 11am onward. Arrive before 9am for a peaceful float. Do not shave the day before. Do not splash water in your eyes — the 33% salt concentration makes eye contact intensely painful and requires immediate fresh water. Petroleum jelly on any cuts or nicks is mandatory.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🍽️",
                  title: "Eat at Hashem Restaurant, Downtown Amman",
                  desc: "Hashem is the most famous restaurant in Jordan — a Downtown institution open since 1952 that serves the best falafel and hummus in Amman for JD 1–3 per dish. It is cash only, has no menu, and is where the king has been photographed eating. Go for breakfast or late dinner when the seating is easier to find. It is completely unremarkable in appearance and absolutely extraordinary in quality.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "💬",
                  title: "Learn Three Words of Arabic",
                  desc: "&quot;Shukran&quot; (thank you), &quot;marhaba&quot; (hello), and &quot;yislamu&quot; (cheers / thank you for the food) will generate genuine warmth from every Jordanian you meet. Jordan has a remarkably strong hospitality culture — small gestures of respect are returned tenfold. When a Bedouin invites you for tea in Wadi Rum, accept. It is almost always genuinely given.",
                  color: "bg-purple-50 border-purple-200",
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
                  q: "Is the Jordan Pass worth it for Indian travellers?",
                  a: "Yes, emphatically. The Jordan Pass (jordanpass.jo) costs JD 70–80 (~$99–113) and includes: (1) the Jordanian visa fee — worth JD 40 (~$56) on its own, (2) Petra entry for 1–3 days — worth JD 50–55 for 2 days paid separately, (3) Wadi Rum entry, (4) Jerash, (5) 40+ additional sites. For any Indian traveller visiting Petra and staying 3+ nights in Jordan, the Jordan Pass saves a minimum of JD 15–25. It must be purchased online at jordanpass.jo before you arrive — you cannot buy it at the airport.",
                },
                {
                  q: "How many days do you actually need in Petra?",
                  a: "Two days minimum. Day 1: the Siq, Treasury, Colonnaded Street, Great Temple, and Royal Tombs — this covers the main circuit and takes a full day if done at a reasonable pace. Day 2: the Monastery (Ad Deir) early morning, the High Place of Sacrifice, and the Wadi Farasa descent — another full day. Little Petra (Siq al-Barid, 7km away, free) is a bonus third-day option. The Jordan Pass offers 1-day, 2-day, and 3-day Petra options — choose the 2-day minimum.",
                },
                {
                  q: "Is Jordan safe to visit in 2026?",
                  a: "Jordan is one of the safest countries in the Middle East for tourists. It has maintained political stability through decades of regional volatility and has a deeply ingrained hospitality culture. Crime against tourists is very rare. The main practical safety concerns are: heat in summer (carry water, avoid midday exertion at Petra), aggressive but harmless vendor solicitation inside Petra (firm &apos;no thank you&apos; works), and driving at night on desert roads between cities (use buses or book daytime transfers).",
                },
                {
                  q: "How do I get from Petra to Wadi Rum?",
                  a: "Public minibus from Wadi Musa (the village next to Petra) to Wadi Rum village: JD 5–8 (~$7–11) per person, departures in the morning. The journey takes 1.5 hours. Alternatively, arrange a private transfer through your Wadi Musa guesthouse (JD 30–50 / ~$42–71 for a private car). Your Wadi Rum camp will often arrange a return transfer back to Aqaba or Amman the following morning — ask when you book.",
                },
                {
                  q: "Can I visit Jordan from India without a visa in advance?",
                  a: "Indian passport holders receive a visa on arrival at Queen Alia International Airport, Amman. Cost: JD 40 (~$56), single entry, 30 days. However, if you purchase the Jordan Pass online before arrival, the visa fee is automatically waived at the airport immigration desk. The Jordan Pass is always better value than paying the visa separately. You must stay a minimum of 3 nights in Jordan to use the Jordan Pass visa waiver.",
                },
                {
                  q: "What is the best currency to carry in Jordan?",
                  a: "Jordanian Dinar (JD). 1 JD ≈ $1.41 USD — the dinar is pegged to the US dollar and the exchange rate is stable. ATMs in Amman and Wadi Musa (Petra) dispense JD. US dollars are widely accepted in tourist areas at roughly $1 = JD 0.71. Euro and British pounds can be exchanged at banks and exchange offices in Amman. Carry some JD cash for small vendors, transport, and the Petra Night Show — credit cards are not accepted everywhere.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Jordan trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/petra-travel-guide", label: "Petra complete guide", icon: "🏛️" },
                { href: "/blog/jordan-pass-worth-it", label: "Jordan Pass guide", icon: "🎫" },
                { href: "/blog/wadi-rum-overnight", label: "Wadi Rum overnight", icon: "🏜️" },
                { href: "/blog/dead-sea-tips", label: "Dead Sea tips", icon: "🌊" },
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
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Middle East &amp; International Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Dubai in 4 Days — Desert &amp; Skyline", href: "/blog/dubai-4-days" },
                { label: "Egypt in 5 Days — Pyramids &amp; Nile", href: "/blog/egypt-5-days" },
                { label: "Istanbul in 4 Days — Bosphorus &amp; Bazaars", href: "/blog/istanbul-4-days" },
                { label: "Greece in 7 Days — Islands &amp; Ancient Ruins", href: "/blog/greece-7-days" },
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
