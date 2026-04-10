"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/blog/InlineSignup";
import PhotoCta from "@/components/blog/PhotoCta";
import { PinterestSaveButton } from "@/components/blog/PinterestSaveButton";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import DestinationGallery from "@/components/blog/DestinationGallery";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import RelatedGuides from "@/components/blog/RelatedGuides";
import CombineWith from "@/components/blog/CombineWith";
import Breadcrumb from "@/components/blog/Breadcrumb";
import InlineCTA from "@/components/blog/InlineCTA";
import SmartImage from "@/components/SmartImage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";

// ── Table of Contents ─────────────────────────────────────────────────────────
const BRATISLAVA_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Bratislava Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "🚂",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",   emoji: "🏰",  label: "Landmark Guide" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",    emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "💡",  label: "Pro Tips" },
  { id: "faq",         emoji: "❓",  label: "FAQ" },
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
          href: `mailto:?subject=Bratislava 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Bratislava in 3 Days — Old Town, UFO Bridge and Devin Castle&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        url="https://www.incredibleitinerary.com/blog/bratislava-3-days"
        imageUrl="https://images.unsplash.com/photo-1559113202-c916b8e44373?w=1200&q=80"
        description="Bratislava in 3 Days: Michael&apos;s Gate, UFO Bridge, Devin Castle ruins, Slovak wine, and a Vienna day trip — complete travel guide with budget breakdown."
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
export default function BratislavaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BRATISLAVA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Bratislava" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="bratislava old town slovakia blue church michael gate"
            fallback="https://images.unsplash.com/photo-1559113202-c916b8e44373?w=1600&q=80"
            alt="Bratislava Old Town skyline with Michael&apos;s Gate tower and Danube River at golden hour"
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
              <span className="text-white/70">Bratislava 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Central Europe
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Bratislava in 3 Days:
                <em className="italic text-amber-300"> Old Town, UFO Bridge &amp; Devin Castle</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Medieval alleyways, a futuristic UFO viewpoint on the Danube, 9th-century castle ruins, Slovak wine, and a Vienna day trip all within 70 minutes. The complete guide from €40/day.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="11 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇸🇰 Slovakia, Europe</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From €40/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Bratislava punches far above its size — a compact Old Town of medieval alleyways, Habsburg palaces, and charming pastel squares sits shoulder-to-shoulder with a futuristic UFO Bridge viewpoint, a hilltop Devin Castle ruin overlooking the Danube, and one of Central Europe&apos;s most underrated craft beer and Slovak wine scenes.
            </p>
          </blockquote>

          {/* ── WHAT BRATISLAVA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Bratislava Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Bratislava is one of Europe&apos;s smallest and most misunderstood capitals. Most visitors arrive from Vienna or Budapest expecting a half-day stop — and leave wishing they had stayed three nights. The city served as the capital of the Kingdom of Hungary from 1536 to 1783, during which 11 Hungarian kings and queens were crowned in St. Martin&apos;s Cathedral. That Habsburg legacy is still visible in every palace facade, cobblestone lane, and outdoor café in the Old Town.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Old Town itself is compact enough to walk in an hour — but properly exploring it takes two days. Beyond the medieval core, the city surprises constantly: the communist-era UFO Tower perched on the Most SNP bridge is now a world-class restaurant and observation deck 95 metres above the Danube; Devin Castle, 12km upriver, is a 9th-century fortress ruin at the confluence of the Danube and Morava rivers with extraordinary views into Austria; the Slavín War Memorial on a hilltop to the north offers panoramic city views rivalling any rooftop bar in Central Europe.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three days is perfect for Bratislava: enough time to explore the full Old Town, spend a morning at Devin Castle, eat at the city&apos;s best Slovak restaurants, and still make the 70-minute day trip to Vienna. The city rewards slow walking, late-morning coffees in the Old Town square, and long evenings with Slovak wine and craft beer.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="BTS" />
              <StatCard icon="🌡️" label="Best Months" value="Apr–Jun / Sep–Oct" />
              <StatCard icon="🗓️" label="Duration" value="3 Days" />
              <StatCard icon="💰" label="Budget From" value="€40/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Bratislava</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "15–24°C, mild and green. The Old Town outdoor terraces open fully by April. Wine bar season begins and there are far fewer tourists than summer. Slovak countryside is at its most photogenic with the Small Carpathian vineyards in bloom.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Also Excellent",
                  d: "12–22°C. Harvest season in the Small Carpathian wine region — many wineries open their cellars to visitors in late September. Autumn colour on Devin Castle ruins is dramatic. October can be rainy but remains pleasant and uncrowded.",
                  b: "Recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Busy and Hot",
                  d: "25–32°C. Peak tourist season and the Old Town square fills up quickly. Devin Castle is pleasant in the mornings. The city is lively with outdoor events and concerts. Book accommodation well ahead and expect higher prices.",
                  b: "Viable, book early",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec",
                  i: "❄️",
                  t: "Christmas Markets — A Highlight",
                  d: "Bratislava&apos;s Christmas market on the Main Square (Hlavné námestie) runs from late November to December 23rd. Mulled wine, Slovak pastries, and fairy lights among the Baroque facades — genuinely atmospheric and far less crowded than Vienna or Prague markets.",
                  b: "Special occasion",
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

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚂 Getting to Bratislava</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Bratislava&apos;s own airport (BTS) has limited international connections — most travellers fly into <strong className="font-medium">Vienna International Airport (VIE)</strong>, just 60km away, and connect by train or bus. Vienna to Bratislava is one of Europe&apos;s most convenient city pairs.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚂",
                  t: "Train from Vienna (recommended)",
                  d: "Vienna Hauptbahnhof → Bratislava Hlavná stanica: 1 hour, approximately €15 each way. REGIOjet and Austrian Federal Railways (ÖBB) both run frequent direct services throughout the day. Book online at regiojet.com or oebb.at. No border stop — both countries are in the Schengen area.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚢",
                  t: "Twin City Liner Hydrofoil (Vienna → Bratislava)",
                  d: "A seasonal high-speed hydrofoil boat runs April–October between Vienna (Schwedenplatz) and Bratislava (near the Old Town). Journey time is 75 minutes, price approximately €35 one-way. Scenic Danube trip past riverside forests and the first views of Devin Castle. Book at twincityliner.com.",
                  b: "Scenic option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Vienna / Budapest",
                  d: "FlixBus and RegioJet run Vienna → Bratislava buses every 30–60 minutes (€6–12, 70 min). From Budapest Keleti, direct buses take 2.5–3 hours (€10–18). FlixBus also connects Bratislava with Prague (4.5 hrs, €15–25) and Krakow (5 hrs).",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "✈️",
                  t: "Fly direct to BTS Airport",
                  d: "Bratislava Airport (BTS) serves Ryanair routes from London Stansted, Dublin, Edinburgh, and several other European cities. Often significantly cheaper than flying into Vienna. The airport is 9km northeast of the city centre — taxi costs €10–15 or take Bus 61 for €1.",
                  b: "Check Ryanair",
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

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Bratislava Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed to cover Bratislava&apos;s Old Town thoroughly before moving to Devin Castle and the UFO Bridge, with the Vienna day trip saved for Day 3.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Old Town · Michael&apos;s Gate · Bratislava Castle · Blue Church"
                cost="€25–40 (accommodation + food + gate tower entry)"
                items={[
                  "Arrive and check in — the Old Town (Staré Mesto) is compact enough that staying anywhere within it puts you within a 15-minute walk of every major landmark. Budget dorms start at €15–22/night at Hostel Blues; mid-range boutique hotels from €65.",
                  "14:00 — Start at Michael&apos;s Gate (Michalská brána), the only surviving medieval city gate. Entry to the tower is €5 and worth it — the narrow spiral staircase leads to a rooftop view across the red-tiled Old Town. The moat below is now a pleasant pedestrian lane lined with café tables.",
                  "15:30 — Walk the full Old Town loop: Main Square (Hlavné námestie) with Roland&apos;s Fountain at its centre, the Old Town Hall courtyard (free entry), and the Plague Column. Spot the Cumil sculpture — a bronze man emerging from a manhole cover set into the cobblestones, one of Bratislava&apos;s most-photographed street sculptures.",
                  "17:00 — Walk uphill to Bratislava Castle (Bratislavský hrad). The grounds are free to walk at any time. The all-white four-tower castle rebuilt in 1968 sits above the Old Town with wide terraces giving views over Slovakia, Austria, and Hungary simultaneously on a clear day. The castle museum is €10 for the full Slovak history exhibition.",
                  "19:00 — Evening walk to the Blue Church (Church of St. Elisabeth) — an Art Nouveau masterpiece built in 1913 entirely in shades of pale blue: blue tiles, blue plaster, blue spire. It is one of the most distinctive buildings in Central Europe and almost entirely overlooked by mainstream tourism. Free to visit from outside; modest entry fee when open.",
                  "20:30 — Dinner at Zylinder on the Main Square (€55–75/pp for a tasting menu) or at Bratislavský Meštiansky Pivovar — a local brewery-restaurant serving house-brewed lagers and Slovak pub classics. Boar goulash with bread dumplings runs €10–14; a pint of their house ale is €3.50.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="UFO Tower · Devin Castle Ruins · Slavín Memorial"
                cost="€30–55 (UFO entry €6.50, Devin €4, transport)"
                items={[
                  "09:00 — Walk across the Most SNP (New Bridge / SNP Bridge) to the UFO observation platform. The lift costs €6.50 and ascends 95 metres above the Danube in 45 seconds. The 360-degree panorama is extraordinary: Old Town and Bratislava Castle behind you, the flat Pannonian Plain stretching into Hungary ahead, and Austria visible to the west. The UFO Restaurant at the top is Bratislava&apos;s most theatrical dining venue — reserve at least a week ahead for dinner.",
                  "11:00 — Bus 29 from the Nový Most bus stop to Devín (€1, 30 minutes each way). Devin Castle ruins sit dramatically at the confluence of the Danube and Morava rivers on a cliff above the Austrian border. Entry is €4. The 9th-century fortress was partly destroyed on Napoleon&apos;s orders in 1809 — what remains is atmospheric and excellent for photography, with the ruined tower rising from a rock face above two rivers.",
                  "13:30 — Picnic lunch at the castle grounds using provisions from the supermarket near your accommodation — bread, Slovak Bryndza sheep cheese, and cured meats cost under €6 and taste extraordinary against a backdrop of the Danube and the Austrian bank opposite.",
                  "15:30 — Return bus to Old Town. Walk uphill to Slavín War Memorial — the Soviet war memorial on a hilltop above the Old Town honours 6,845 Soviet soldiers killed in the Battle of Bratislava in 1945. The monument is striking and the hilltop viewpoint gives perhaps the best panorama of the full city, Old Town, river, and castle in a single frame.",
                  "18:00 — Slovak National Theatre on Hviezdoslavovo námestie — even if you are not seeing a performance, the neo-Baroque exterior is worth seeing at dusk when the lights come on. The square itself has outdoor cafes and a fountain.",
                  "20:00 — Craft beer evening at Bratislavský Meštiansky Pivovar or along Obchodná Street — Bratislava&apos;s main commercial street has several craft beer bars. A pint of Slovak craft beer costs €2.50–3.50 at most venues.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Vienna Day Trip · Farewell Dinner"
                cost="€25–50 (train + lunch in Vienna + farewell dinner)"
                items={[
                  "07:30 — REGIOjet or ÖBB train from Bratislava Hlavná stanica to Vienna Hauptbahnhof. The journey takes exactly 1 hour. Book online the night before — tickets from €15 each way. Trains run every 30–60 minutes throughout the morning.",
                  "09:00 — Vienna: Walk the Ringstrasse boulevard from the Hauptbahnhof, passing the Staatsoper (State Opera), the neo-Gothic Parliament, and the Kunsthistorisches Museum (€21 entry for the Habsburg imperial art collections, or free to admire from outside). The Schönbrunn Palace imperial gardens are free to walk.",
                  "12:30 — Lunch in Vienna&apos;s Naschmarkt — the open-air market stretching along the Wienzeile has Austrian, Turkish, Greek, and Italian food stalls. A full lunch costs €8–14; try the Leberkäse (Austrian meatloaf) at a traditional stand or falafel at one of the Middle Eastern stalls.",
                  "15:00 — Return train or bus to Bratislava. Afternoon walk through the Old Town for final photographs of Michael&apos;s Gate at golden hour — the afternoon light from the south is perfect on the medieval stonework from around 16:00–17:00.",
                  "19:00 — Farewell dinner at Café Roland on the Main Square — a Bratislava institution on the ground floor of the former Roland Hotel, serving Slovak and European cuisine in a Viennese café setting. Half-roasted duck with red cabbage and potato dumplings is €14–18; wash down with a glass of Small Carpathian Welschriesling.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Bratislava" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏰 Bratislava Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees as of 2026. Most Old Town landmarks are free from outside; paid entry applies to museums and tower climbs.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Bratislava Castle (Bratislavský hrad)",
                  e: "Grounds free · Museum €10",
                  d: "The four-tower all-white castle rebuilt in 1968 dominates the city skyline from a hill above the Old Town. Walk the grounds for free at any time — the terrace views over Slovakia, Austria, and Hungary are worth the uphill walk alone. The interior museum covers Slovak history from the prehistoric to the Habsburg era.",
                  t: "Must see · 1–2 hrs",
                },
                {
                  n: "Michael&apos;s Gate (Michalská brána)",
                  e: "Tower €5",
                  d: "The only surviving medieval city gate, dating to the 14th century. The tower climb is steep and narrow but rewards with a rooftop view across the Old Town&apos;s terracotta rooftops. The moat level below is now a pedestrian café lane — free to walk at any time.",
                  t: "Must see · 45 mins",
                },
                {
                  n: "UFO Tower (Most SNP observation deck)",
                  e: "Lift €6.50",
                  d: "The inverted UFO-shaped observation platform at 95 metres above the Danube is a communist-era engineering marvel and one of the best panoramic viewpoints in Central Europe. Slovakia, Austria, and Hungary are simultaneously visible on a clear day. The UFO Restaurant at the top requires advance reservation.",
                  t: "Must see · 1 hr",
                },
                {
                  n: "Devin Castle ruins",
                  e: "€4 · 30 min by bus",
                  d: "A 9th-century fortress at the confluence of the Danube and Morava rivers, 12km from the city centre. Partly destroyed by Napoleon in 1809. The cliff-edge ruins are dramatic and almost entirely free of crowds compared to the Old Town. Bus 29 from Nový Most takes 30 minutes for €1.",
                  t: "Day trip highlight · 2–3 hrs",
                },
                {
                  n: "Blue Church (Church of St. Elisabeth)",
                  e: "Free from outside",
                  d: "An extraordinary Art Nouveau church built in 1913 and decorated entirely in pale blue — tiles, plaster, and spire. One of the most distinctive buildings in Central Europe and consistently overlooked by visitors focused on the main square. Located a 10-minute walk east of the Old Town.",
                  t: "Hidden gem · 20 mins",
                },
                {
                  n: "Slavín War Memorial",
                  e: "Free",
                  d: "A hilltop Soviet war memorial overlooking the entire city, honouring soldiers killed in the 1945 Battle of Bratislava. The viewpoint is exceptional — the full sweep of the Old Town, castle, Danube, and Austrian countryside in a single frame. A 20-minute walk uphill from the Old Town.",
                  t: "Panorama viewpoint · 45 mins",
                },
                {
                  n: "Cumil sculpture",
                  e: "Free",
                  d: "A bronze figure of a man emerging from a manhole cover set into the cobblestones at the corner of Laurinská and Panská streets. One of Bratislava&apos;s most photographed street sculptures — created in 1997 and nicknamed &apos;Čumil&apos; (the Watcher). Easy to miss if you&apos;re not looking down.",
                  t: "5 mins · Don&apos;t miss",
                },
                {
                  n: "Slovak National Theatre",
                  e: "Exterior free · Performances from €10",
                  d: "The neo-Baroque Slovak National Theatre on Hviezdoslavovo námestie was built in 1886. The building is most striking when lit in the evenings. Affordable opera and ballet performances run year-round — booking online at snd.sk gives excellent value compared to Vienna&apos;s Staatsoper.",
                  t: "Evening · Architecture",
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
            title="Bratislava — Old Town, Danube &amp; Devin Castle"
            subtitle="Medieval cobblestones, the UFO Bridge, and Slovakia&apos;s most atmospheric castle ruins."
            spots={[
              {
                name: "Bratislava Old Town",
                query: "bratislava old town cobblestone square michael gate slovakia",
                desc: "The medieval Old Town with its pastel facades, cobblestone lanes, and the surviving Michael&apos;s Gate tower rising above the rooftops.",
              },
              {
                name: "Bratislava Castle at Sunset",
                query: "bratislava castle slovakia sunset danube river",
                desc: "The four-tower Bratislava Castle illuminated at sunset above the Danube, with the Old Town spread below and Austria visible in the distance.",
              },
              {
                name: "UFO Bridge Observation Deck",
                query: "UFO bridge SNP bratislava observation deck danube river",
                desc: "The inverted UFO-shaped observation platform at 95 metres above the Danube — one of Central Europe&apos;s most unusual viewpoints.",
              },
              {
                name: "Devin Castle Ruins",
                query: "devin castle ruins bratislava danube morava river confluence",
                desc: "Devin Castle&apos;s dramatic ruins at the confluence of the Danube and Morava rivers, with Austria visible across the water.",
              },
              {
                name: "Blue Church (St. Elisabeth)",
                query: "blue church st elizabeth bratislava art nouveau slovakia",
                desc: "The extraordinary Art Nouveau Church of St. Elisabeth — entirely decorated in pale blue tiles, plaster, and spire.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bratislava is significantly cheaper than Vienna or Prague. Accommodation, food, and transport costs are 30–50% lower than in comparable Western European capitals, while quality is high.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation", "€15–22 (hostel dorm)", "€65–95 (boutique hotel)", "€150–250 (5-star riverside)"],
                    ["🍽️ Food & drink", "€15–22 (Slovak pubs + supermarket)", "€35–55 (restaurants + wine bar)", "€80–130 (fine dining)"],
                    ["🚌 Local transport", "€3–8 (bus + walking)", "€10–20 (Bolt + Danube cruise)", "€50–120 (private car)"],
                    ["🏰 Activities & entry", "€10–15 (gate + castle grounds)", "€20–35 (museums + guided tour)", "€60–100 (private tours + spa)"],
                    ["TOTAL per day", "€40–55/day", "€95–135/day", "€250–400/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€40–55/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel dorm, Slovak pub meals, supermarket picnic at Devin Castle, bus everywhere. The Old Town&apos;s main landmarks are either free or under €6 entry. Very comfortable on this budget.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€95–135/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique Old Town hotel, dinner at Zylinder or Meštiansky Pivovar, Danube cruise, guided walking tour. The sweet spot — good quality without overspending in a relatively affordable city.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€250–400/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Grand Hotel River Park or Falkensteiner, UFO Restaurant dinner (reserve 1 week ahead), private Small Carpathian wine tour, private car to Devin. Bratislava offers genuine luxury at 40% less than Vienna.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Bratislava</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The best location is within or immediately adjacent to the Old Town (Staré Mesto). The entire Old Town is walkable in 15–20 minutes, so any hotel here puts you within easy reach of every major landmark.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Hotel Marrol&apos;s Boutique Hotel",
                  type: "5-star boutique · Old Town",
                  price: "From €120/night",
                  badge: "Most charming",
                  desc: "A handsome early 20th-century townhouse converted into a 54-room boutique hotel in the heart of the Old Town. Art Deco interiors, exceptional service, and a superb location two blocks from the Main Square. The benchmark for mid-to-luxury stays in Bratislava.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Loft Hotel Bratislava",
                  type: "Design hotel · Old Town adjacent",
                  price: "From €75/night",
                  badge: "Best design",
                  desc: "A converted industrial building with contemporary interiors, exposed brick, and high ceilings a short walk from the Old Town. Excellent value for the quality — modern rooms, strong Wi-Fi, and a good breakfast spread. Popular with business and design-conscious travellers.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Hostel Blues",
                  type: "Hostel · Old Town",
                  price: "€15–22 (dorm) / €45–65 (private)",
                  badge: "Best budget",
                  desc: "One of Bratislava&apos;s most well-regarded budget hostels, located on Obchodná Street in the heart of the Old Town. Clean dorms, friendly staff, a social common room, and walking distance from the best craft beer bars. Ideal for solo travellers and backpackers.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Grand Hotel River Park",
                  type: "5-star · Danube riverfront",
                  price: "From €180/night",
                  badge: "Best views",
                  desc: "Bratislava&apos;s flagship luxury hotel sits directly on the Danube riverfront with panoramic views of the castle from upper-floor rooms. Full spa, Michelin-quality restaurant, and the most impressive arrival experience in the city. A 10-minute walk from the Old Town.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Bratislava</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bratislava&apos;s food scene has improved dramatically. Beyond the tourist traps on the Main Square, the city has excellent Slovak restaurants, a thriving craft brewery scene, and one of the best-value fine dining options in Central Europe.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Zylinder",
                  t: "Modern European · Main Square",
                  d: "Bratislava&apos;s finest restaurant, on the Main Square in a beautifully restored 19th-century building. The kitchen uses Carpathian game, Danube fish, and seasonal Slovak ingredients in a refined modern European style. The tasting menu (€55–75/pp) is exceptional for the price. Reserve a week ahead for dinner. The à la carte lunch is more affordable (€20–30/pp).",
                  b: "Best fine dining",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Bratislavský Meštiansky Pivovar",
                  t: "Brewery restaurant · Old Town",
                  d: "The Bratislava City Brewery — a working craft brewery in the Old Town with long wooden tables, house-brewed lagers and dark ales, and a menu of Slovak pub classics. Boar goulash (€12), Bryndza halusky (€9), and half-roasted duck (€16) are all excellent. A pint of the house Meštiansky lager costs €3.50. The best atmosphere of any restaurant in the Old Town.",
                  b: "Best atmosphere",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Café Roland",
                  t: "Viennese café · Main Square",
                  d: "A Bratislava institution on the ground floor of the historic Roland Hotel, serving Slovak and European cuisine in a warm café setting. Famous for its coffee, pastries, and Slovak wine selection. The lunch set menu (€10–14) is excellent value. The outdoor terrace directly on the Main Square is one of the best seats in the city for people-watching.",
                  b: "Best café",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Modra Hviezda",
                  t: "Traditional Slovak · Old Town",
                  d: "One of Bratislava&apos;s most respected traditional Slovak restaurants, tucked into a stone-vaulted space near Michael&apos;s Gate. Seasonal Slovak produce, excellent wine list focusing on Small Carpathian whites, and consistently high quality. The Bryndza halusky (€9) and Nitra Riesling pairing is a standout. Book ahead for weekend evenings.",
                  b: "Most authentic",
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
            destination="Bratislava Slovakia"
            hotels={[
              {
                name: "Hotel Marrol&apos;s Boutique Hotel",
                type: "5-star boutique · Old Town",
                price: "From €120/night",
                rating: "5",
                badge: "Most charming",
                url: "https://www.booking.com/hotel/sk/marrols-boutique.html?aid=2820480",
              },
              {
                name: "Grand Hotel River Park",
                type: "5-star · Danube riverfront",
                price: "From €180/night",
                rating: "5",
                badge: "Best views",
                url: "https://www.booking.com/hotel/sk/grand-river-park-a-luxury-collection.html?aid=2820480",
              },
              {
                name: "Loft Hotel Bratislava",
                type: "Design hotel · Old Town adjacent",
                price: "From €75/night",
                rating: "4",
                badge: "Best design",
                url: "https://www.booking.com/hotel/sk/loft-bratislava.html?aid=2820480",
              },
              {
                name: "Hostel Blues",
                type: "Hostel · Old Town",
                price: "From €15/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/sk/hostel-blues-bratislava.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Bratislava Old Town Walking Tour",
                duration: "2 hrs",
                price: "From €15/person",
                badge: "Best introduction",
                url: "https://www.getyourguide.com/s/?q=Bratislava+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Devin Castle & Bratislava Guided Day Tour",
                duration: "5 hrs",
                price: "From €30/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Bratislava+Devin+Castle+tour&partner_id=PSZA5UI",
              },
              {
                name: "Slovak Wine Tasting in the Small Carpathians",
                duration: "4 hrs",
                price: "From €45/person",
                url: "https://www.getyourguide.com/s/?q=Bratislava+wine+tasting&partner_id=PSZA5UI",
              },
              {
                name: "Vienna to Bratislava Day Trip by Boat",
                duration: "Full day",
                price: "From €65/person",
                url: "https://www.getyourguide.com/s/?q=Vienna+Bratislava+boat+day+trip&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Bratislava</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🚂",
                  title: "Skipping the Vienna day trip",
                  desc: "Vienna is 1 hour and €15 away. Bratislava travellers who skip Vienna miss one of the greatest city pairings in Europe — two Habsburg capitals in a single day. The train is so convenient that there is genuinely no reason not to go.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🏰",
                  title: "Assuming the UFO Bridge is just a photo stop",
                  desc: "The UFO observation deck (€6.50) is legitimately one of the best panoramas in Central Europe — Slovakia, Austria, and Hungary visible simultaneously on a clear day. Many visitors photograph it from below and miss the view entirely.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍷",
                  title: "Not trying Slovak wine",
                  desc: "Slovakia produces outstanding white wines in the Small Carpathian wine region, 30 minutes from the city. Welschriesling, Grüner Veltliner, and Furmint from Slovakia cost half the price of Austrian equivalents. Most visitors leave having only drunk beer — a missed opportunity.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "📍",
                  title: "Treating Bratislava as just an overnight stop",
                  desc: "Most visitors arrive for one night between Vienna and Budapest, never see Devin Castle, skip the Blue Church and the Slavín Memorial, eat at a tourist trap on the Main Square, and conclude Bratislava is boring. Three days reveals a city with genuine depth.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🗓️",
                  title: "Visiting only in July and August",
                  desc: "Summer is humid and the Old Town square gets crowded. April–June and September–October bring mild weather, fewer tourists, and the outdoor wine bar season at its best. December Christmas markets are also excellent and far less crowded than Vienna&apos;s.",
                  color: "bg-red-50 border-red-200",
                },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-5 border ${m.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{m.icon}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900 mb-1">{m.title}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Bratislava</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🍺",
                  title: "Drink Slovak craft beer, not international brands",
                  desc: "Bratislava has a thriving craft beer scene — Meštiansky Pivovar, Falkon, and Cierny Pes all brew on-site. A pint of Slovak craft beer costs €2.50–3.50. Stick to Zlatý Bažant or Topvar Slovak lager at restaurants for €1.50–2. Find Bratislava beer tours via getyourguide.com/s/?q=Bratislava&partner_id=PSZA5UI",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚌",
                  title: "Use Bus 29 for Devin Castle — it costs €1",
                  desc: "Devin Castle is one of Slovakia&apos;s most atmospheric ruins and almost no tourists visit it independently. Bus 29 from the Nový Most bus stop costs €1 and takes 30 minutes. Most visitors assume it requires a tour — it does not.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🥘",
                  title: "Order boar goulash and Bryndza halusky",
                  desc: "These are Slovakia&apos;s signature dishes. Divina guláš (wild boar goulash) with bread dumplings costs €10–14 at a local pub. Bryndza halusky (potato dumplings with sheep cheese and fried bacon) is the national dish — €8–11. Both are unavailable outside Central Europe.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🌅",
                  title: "Walk the Old Town at dawn before tour groups arrive",
                  desc: "Bratislava&apos;s Old Town is tiny and fills up quickly on summer mornings. By 9am, Michael&apos;s Gate and the Main Square are crowded. An early walk at 7–8am sees the same streets empty, freshly washed, with café owners setting out their chairs — the authentic daily rhythm of the city.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎭",
                  title: "See a performance at the Slovak National Theatre",
                  desc: "Opera and ballet tickets at the Slovak National Theatre start from €10 — a fraction of Vienna Staatsoper prices. The neo-Baroque building is magnificent and the company performs to a high standard. Check snd.sk for the schedule and book online at least a few days ahead.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "🗺️",
                  title: "Look down for the Cumil sculpture",
                  desc: "The bronze Cumil — a man emerging from a manhole cover — is set into the cobblestones at Laurinská and Panská streets. It is extremely easy to miss if you are not looking at ground level. Also find &apos;Paparazzi&apos; — a bronze figure leaning around a corner near the Main Square — and the &apos;Schöner Náci&apos; top-hat statue on the Main Square.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Bratislava" />

          {/* Combine With */}
          <CombineWith currentSlug="bratislava-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Bratislava worth visiting or is it just a day trip from Vienna?",
                  a: "Bratislava absolutely rewards 2–3 full days. Yes, it is smaller than Vienna or Prague — but Devin Castle, the UFO Bridge viewpoint, the Small Carpathian wine region, and the genuine local pub and craft beer scene require at least 2 nights to appreciate. Most visitors who stay only one night deeply regret not extending.",
                },
                {
                  q: "What currency does Slovakia use and are cards accepted everywhere?",
                  a: "Slovakia uses the Euro — it joined the Eurozone in 2009. Cards are accepted almost everywhere in Bratislava including small cafes and pubs. ATMs are plentiful in the Old Town. You rarely need cash, but carrying €20–30 for smaller market stalls and bus tickets is sensible.",
                },
                {
                  q: "How do I get from Vienna to Bratislava?",
                  a: "REGIOjet or ÖBB trains run every 30–60 minutes between Vienna Hauptbahnhof and Bratislava Hlavná stanica, taking exactly 1 hour for approximately €15 each way. Buses (FlixBus, RegioJet) cost €6–12 and take 70 minutes. The seasonal Twin City Liner hydrofoil boat (April–October) costs €35 one-way and takes 75 minutes. No border stop — both countries are in Schengen.",
                },
                {
                  q: "Is Bratislava safe for solo travellers?",
                  a: "Bratislava is one of Central Europe&apos;s safest capitals. Violent crime against tourists is extremely rare. Standard precautions apply: be aware of pickpockets in the crowded Main Square in summer, and avoid excessive intoxication in the bar district late at night. The city is very walkable and well-lit throughout the Old Town.",
                },
                {
                  q: "Do I need a visa for Slovakia as an Indian passport holder?",
                  a: "Yes — Indian passport holders need a Schengen Visa (Type C) to enter Slovakia. The fee is €80 and processing takes 15–30 business days. Apply at the Slovak Embassy or VFS Global with hotel bookings, return flight confirmation, and 3 months of bank statements. Slovakia is Schengen, so a single visa covers the Vienna day trip too. Apply 6–8 weeks before travel.",
                },
                {
                  q: "How do I get to Devin Castle from Bratislava?",
                  a: "Take Bus 29 from the Nový Most (New Bridge) bus stop in the Old Town. The journey costs €1 and takes 30 minutes. Buses run every 30–60 minutes throughout the day. The last bus back to the city is around 10pm. Alternatively, a Bolt taxi costs €8–10 each way. Entry to Devin Castle is €4.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Bratislava trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/vienna-4-days", label: "Vienna 4-day guide", icon: "🎼" },
                { href: "/blog/budapest-4-days", label: "Budapest 4-day guide", icon: "🌊" },
                { href: "/blog/prague-4-days", label: "Prague 4-day guide", icon: "🏰" },
                { href: "/blog/krakow-4-days", label: "Krakow 4-day guide", icon: "🦅" },
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
          <RelatedGuides currentSlug="bratislava-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Central Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Vienna in 4 Days — Habsburgs &amp; Coffee Houses", href: "/blog/vienna-4-days" },
                { label: "Budapest in 4 Days — Thermal Baths &amp; Ruin Bars", href: "/blog/budapest-4-days" },
                { label: "Prague in 4 Days — Old Town &amp; Castle District", href: "/blog/prague-4-days" },
                { label: "Krakow in 4 Days — Old Town &amp; Wieliczka Salt Mine", href: "/blog/krakow-4-days" },
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
