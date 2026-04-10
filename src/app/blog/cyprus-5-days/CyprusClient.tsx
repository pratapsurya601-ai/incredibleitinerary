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
const CYPRUS_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Cyprus Actually Is" },
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
          href: `mailto:?subject=Cyprus 5-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Cyprus in 5 Days — Paphos ruins, Troodos mountains, and the world's last divided capital&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/cyprus-5-days"
        imageUrl="https://images.unsplash.com/photo-1601921718338-90c8c3bd82cb?w=1200&q=80"
        description="Cyprus in 5 Days: Paphos Archaeological Park, Troodos Mountains, Limassol wine villages, Nicosia divided capital &amp; Aphrodite&apos;s Rock — complete guide from €55/day."
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
export default function CyprusClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={CYPRUS_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Cyprus" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="cyprus paphos archaeological park ancient mosaics mediterranean sea"
            fallback="https://images.unsplash.com/photo-1601921718338-90c8c3bd82cb?w=1600&q=80"
            alt="Cyprus Paphos Archaeological Park with ancient mosaics and Mediterranean coastline"
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
              <span className="text-white/70">Cyprus 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Cyprus in 5 Days:
                <em className="italic text-amber-300"> Ruins, Mountains &amp; the Divided Capital</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Paphos UNESCO mosaics, Troodos cedar forests, Limassol commandaria wine, the world&apos;s last divided capital, and Aphrodite&apos;s Rock at golden hour. The complete guide from €55/day.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="14 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇨🇾 Cyprus, Europe</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From €55/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Cyprus is the eastern Mediterranean distilled into one island — Aphrodite&apos;s birthplace, a UNESCO mosaic park, a divided capital, cedar-forested mountains, and wine villages that have been pressing grapes since the Bronze Age.
            </p>
          </blockquote>

          {/* ── WHAT CYPRUS ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Cyprus Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Most people think Cyprus means beach resorts and package holidays. That&apos;s partly true — the coast from Ayia Napa to Fig Tree Bay in Protaras is genuinely excellent, and Paphos has the best resort strip in the eastern Mediterranean. But the interior of the island is something else entirely: Troodos mountain villages at 1,300 metres elevation, Kykkos Monastery glittering with gold mosaic, endemic cedar forests patrolled by wild mouflon, and the Bronze Age commandaria wine tradition that has been unbroken for over 3,000 years.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Then there&apos;s Nicosia — the only remaining divided capital in the world. Since 1974, the city has been split between the Republic of Cyprus in the south and Turkish-controlled Northern Cyprus in the north, separated by a UN Buffer Zone that runs directly through the old town. You can still cross on foot at the Ledra Street checkpoint with just a passport. The contrast between the two sides — Greek Cypriot coffee shops and Ottoman caravanserais separated by a 300-metre strip of no-man&apos;s-land — is unlike anything else in Europe.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Five days is the right amount of time. Enough to cover the Paphos Archaeological Park (€4.50, Roman mosaics that have been lying undisturbed for 1,700 years), drive the Troodos villages, taste commandaria at its source in Omodos, stand in the buffer zone in Nicosia, and still catch the sunset at Aphrodite&apos;s Rock — Petra tou Romiou — on the coast. A hire car is essential for anything beyond Paphos. Budget from €25/day for a small automatic. Drive on the left (British system).
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Main Airports" value="PFO / LCA" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun · Sep–Oct" />
              <StatCard icon="🏛️" label="UNESCO Sites" value="11 Painted Churches" />
              <StatCard icon="💰" label="Budget From" value="€55/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Cyprus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "22–28°C on the coast, 15–20°C in the mountains. The Akamas Peninsula is carpeted in wildflowers in April. Commandaria wine festivals begin in May. Prices are 30–40% lower than peak summer. The ideal window for exploring both coast and mountains without brutal heat.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Also Excellent",
                  d: "25–30°C, sea still warm from summer. Grape harvest season in the Troodos wine villages — September wine festivals in Limassol are worth timing your trip around. Fewer crowds than July–August, much lower prices. Second-best window after spring.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🔥",
                  t: "Summer — Hot & Expensive",
                  d: "38–42°C on the coast. Prices spike 40–60%, Ayia Napa and Fig Tree Bay are extremely crowded, and archaeological sites become physically punishing by mid-morning. If you must visit in summer, stay on the coast and limit ruins visits to early morning only.",
                  b: "Avoid if possible",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "❄️",
                  t: "Winter — Quiet & Mild",
                  d: "15–18°C on the coast, snow in the Troodos above 1,500m. You can ski Troodos (Mount Olympus, 1,952m) and swim at the beach in the same day — a genuinely unique Cyprus experience. Archaeological sites and museums are uncrowded. Some beach restaurants close.",
                  b: "Off-season",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Cyprus</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Cyprus has two international airports — <strong className="font-medium">Paphos (PFO)</strong> in the west and <strong className="font-medium">Larnaca (LCA)</strong> in the east. For this 5-day itinerary starting in Paphos, fly into PFO. If arriving at Larnaca, the bus to Nicosia runs hourly and takes 1 hour (€3). A hire car is essential for days 3–5.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly to Paphos Airport (PFO) — recommended",
                  d: "Direct flights from London (3.5 hrs), Amsterdam (4 hrs), Frankfurt (3.5 hrs), Athens (1.5 hrs), Tel Aviv (1 hr). Budget carriers including Ryanair and Wizz Air serve PFO from multiple European cities. From the airport, bus 612 runs to Paphos town centre for €1.50 (30 mins), or a taxi costs €15–20.",
                  b: "Best for this itinerary",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Fly to Larnaca Airport (LCA) — eastern entry",
                  d: "More international connections than Paphos, including direct flights from the US (via connecting hubs) and more Middle Eastern routes. From LCA: bus to Nicosia every hour, €3, 1 hour. Bus to Limassol every 30 mins, €5, 1.5 hours. Taxi to Nicosia: €50. Good entry point if starting from Nicosia.",
                  b: "More connections",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Intercity buses — OSEA / Intercity",
                  d: "Cyprus&apos;s intercity coach network connects all major cities. Paphos to Limassol: €5, 1.5 hours. Limassol to Nicosia: €4.50, 1 hour. Larnaca to Nicosia: €3, 1 hour. Frequent departures 7am–8pm. Cheap and reliable for city-to-city movement, but useless for Troodos mountains or rural sites.",
                  b: "Budget city travel",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Hire car — essential for this itinerary",
                  d: "A hire car unlocks the whole island. Rates from €25/day for a small automatic from local companies (Paphos Airport and Larnaca Airport both have good options). Drive on the left. Roads are excellent and well-signposted in both Greek and English. Fuel is cheaper than most of Western Europe. Parking is easy outside city centres.",
                  b: "Essential for Troodos",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Cyprus Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is structured around Paphos as a base for days 1–3, with day 4 in Limassol and day 5 in Nicosia before departure. A hire car from day 3 onwards is essential.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Paphos Arrival — Archaeological Park & Harbour"
                cost="€35–45 (transport, entry fees, dinner)"
                items={[
                  "14:00 — Arrive Paphos Airport (PFO). Take the 612 bus to Paphos town centre for €1.50 — far cheaper than a taxi (€15–20). Check in to a budget guesthouse or 3-star hotel in Kato Paphos (€25–80/night). The Kato Paphos area is best — walkable to the ruins and harbour.",
                  "16:00 — Walk to Paphos Archaeological Park (UNESCO World Heritage Site, €4.50). The floor mosaics inside the House of Dionysus are 1,700 years old and among the finest Roman mosaics in the world. The scenes depicting the myths of Dionysus, Theseus and Narcissus are extraordinary in scale and colour. Allow 1.5 to 2 hours.",
                  "18:00 — Stroll Paphos Harbour and the medieval Paphos Castle at sunset (€2.50 entry — or free to walk around outside). The harbour promenade is lined with tavernas competing for your attention. The light on the water at golden hour from the castle battlements is excellent.",
                  "19:30 — Dinner: grilled halloumi, kleftiko (slow-cooked lamb), and village salad at a taverna on Apostolou Pavlou Avenue. A full budget meal with a local Keo beer is €12–15. Avoid the most tourist-facing spots on the harbour front — two streets back gives better food at lower prices.",
                  "21:00 — Evening walk along the coastal path toward the Tombs of the Kings. The sea cliffs are impressive even in the dark and the path is well-lit. A good way to get your bearings for day 2.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Tombs of the Kings, Coral Bay & Byzantine Museum"
                cost="€30–40 (buses, entry, beach, meze dinner)"
                items={[
                  "09:00 — Tombs of the Kings (€2.50, opens 8:30am). These 4th-century BC underground rock tombs were carved for Ptolemaic nobles — the name is misleading, no kings were actually buried here, but the scale and the quality of carving (some with Doric columns carved directly into the rock face) are genuinely impressive. The site is vast, quiet in the morning, and completely undervisited.",
                  "11:00 — Bus to Coral Bay (route 615, €1.50) — a beautiful sandy cove 10km north of Paphos with calm turquoise water. Free beach with sunlounger hire at €3 each. Good swimming and snorkelling along the rocky left-hand headland. Busier in July–August; in spring it is very relaxed.",
                  "13:00 — Lunch at a beach taverna: calamari, tzatziki and pita for €10–12; fresh fish plates around €14. The fish is genuinely fresh — much of it caught from the same harbour the day before.",
                  "15:30 — Bus back to Paphos. Visit the Byzantine Museum at the Bishop&apos;s Palace (€2) — an excellent collection of icons spanning 800 years. The oldest pieces (10th–11th century) are remarkable for their survival.",
                  "19:00 — Meze dinner at a local taverna. A traditional Cypriot meze delivers 20+ small dishes — dips, grilled meats, halloumi, calamari, village bread, fresh vegetables — for one fixed price around €18–22 per person. The definitive way to eat in Cyprus. Ask for the meze at any family-run taverna away from the main tourist strip.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Troodos Mountains — Kykkos Monastery & Aphrodite's Rock"
                cost="€45–55 (car hire, fuel, monastery, wine tasting, picnic)"
                items={[
                  "08:30 — Pick up hire car (€25–35/day from Paphos Airport). Drive the B6 mountain road toward Troodos village — the landscape shifts from citrus groves to pine forest within 30km. The drive itself is part of the experience: hairpin bends, cedar-covered ridgelines, and villages that look unchanged since the 1960s.",
                  "10:30 — Kykkos Monastery (free entry). The wealthiest and most important monastery in Cyprus, founded in the 11th century, rebuilt and gilded over the centuries into something extraordinary. The gold-mosaic interior, the icon of the Virgin Mary attributed to Saint Luke (kept behind a silver cover and never shown to the public), and the mountain setting at 1,318m are all worth the drive alone.",
                  "12:30 — Cedar Valley picnic. Buy bread, halloumi, olives, and local sausage from a mountain village shop for €8 and eat surrounded by endemic Cyprus cedar trees — one of only three places on earth where this tree grows naturally. Mouflon (wild mountain sheep) roam here freely.",
                  "14:00 — Omodos village. A UNESCO-recognised wine village with a cobblestone square, a Byzantine monastery (free entry), and wine cellars charging €3–5 for tastings of commandaria — the world&apos;s oldest named wine, produced in these hills since at least 800 BC. Try the dry Maratheftiko red as well.",
                  "17:00 — Return via the B6 coastal road. Stop at Aphrodite&apos;s Rock (Petra tou Romiou) — the dramatic coastal stack where legend says Aphrodite rose from the sea. Pull into the lay-by 45 minutes before sunset. The rock face glows orange and the sea turns gold. Completely free and one of the most photogenic spots in the Mediterranean.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Limassol Castle, Wine Villages & Waterfront"
                cost="€50–65 (transport, castle, wine tasting, meals)"
                items={[
                  "09:00 — Drive or take the intercity bus (€5, 1.5 hours) to Limassol — Cyprus&apos;s most cosmopolitan city, with a rapidly developing marina and a well-preserved old town that repays a morning&apos;s walking.",
                  "10:00 — Limassol Medieval Castle (€4.50). Richard the Lionheart married Berengaria of Navarre here in 1191 on his way to the Third Crusade — one of the odder footnotes in English history. Good views from the battlements over the port. The Cyprus Medieval Museum inside is included in the entry fee.",
                  "12:00 — Lunch in the Limassol Old Market (Agora) — a restored covered market with stalls selling fresh halloumi, loukoumades (honey doughnuts), souvlaki and local produce. A meal comes in at €8–12. The market building itself is worth seeing even if you just pick up a snack.",
                  "14:00 — Drive the wine route through Koilani and Vouni villages in the Limassol wine region. These hillside villages produce some of Cyprus&apos;s best dry reds from the indigenous Maratheftiko grape. Tasting at a family winery costs €5–8 and usually includes commandaria and a dry white from the Xynisteri grape.",
                  "19:00 — Dinner in Limassol at Mahon Seafood — one of the best fish restaurants on the island. Sheftalies (Cypriot pork sausages spiced with herbs), grilled octopus and fresh-caught sea bass from €15–20. The waterfront setting below the old town is excellent. Book ahead for weekends.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Nicosia — Divided Capital, Buffer Zone & Departure"
                cost="€35–45 (transport, museum, lunch, airport)"
                items={[
                  "08:00 — Drive or take the bus (€4.50, 1.5 hours) from Limassol to Nicosia (Lefkosia) — the world&apos;s last divided capital. Park outside the Venetian walls and enter the old city on foot. The 16th-century star-shaped walls built by Venice are among the best-preserved Renaissance fortifications in existence.",
                  "09:30 — Cross the Ledra Street pedestrian checkpoint into North Nicosia. Bring your passport — the crossing is free and takes 5 minutes. On the other side: a completely different atmosphere, Ottoman architecture, the Selimiye Mosque (formerly the Gothic Cathedral of Saint Sophia, now a mosque), the Great Bedesten covered market, and the Buyuk Han caravanserai. Significantly cheaper food and coffee. Spend 1.5 to 2 hours.",
                  "11:00 — Return to the Republic side via Ledra Street. Cyprus Museum (€4.50) — the island&apos;s finest archaeological collection, spanning Neolithic through to Roman periods. The terracotta warrior figures from Marion (7th century BC), the bronze Horned God from Enkomi, and the enormous terracotta army assembled from hundreds of votive figures are all exceptional.",
                  "13:00 — Final lunch in Nicosia&apos;s old town at Zanettos — the oldest restaurant in Nicosia, operating since 1938. No menu: they bring you whatever they have that day — meze dishes, grilled meats, dips, fresh salad. €15 per person including house wine. A genuine institution.",
                  "15:00 — Drive to Larnaca Airport (LCA, 45 minutes from Nicosia) or Paphos Airport (PFO, 1.5 hours). If flying from LCA, you have time for a coffee in the old town before heading out. Allow at least 2 hours before your flight for check-in and security.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Cyprus" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Cyprus Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees as of 2026. Sites administered by the Department of Antiquities accept cash only at most locations — carry small notes.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Paphos Archaeological Park",
                  e: "€4.50",
                  d: "The crown jewel of Cyprus archaeology. The floor mosaics in the Houses of Dionysus, Theseus and Aion are among the finest Roman mosaics in the world — 1,700-year-old mythological scenes in extraordinary condition. The park is large (over 1km across) and takes 2 hours to cover properly. Open daily 8am–7:30pm (May–Oct) / 8am–5pm (Nov–Apr).",
                  t: "Must see · 2 hrs",
                },
                {
                  n: "Aphrodite&apos;s Rock (Petra tou Romiou)",
                  e: "Free",
                  d: "The coastal stack where legend holds that Aphrodite rose from the sea. 25km east of Paphos on the B6 road. The lay-by viewing area is free and accessible around the clock. Best visited 45 minutes before sunset when the limestone glows orange. Swimming is possible from the pebble beach below but the currents can be strong.",
                  t: "Sunset essential · 30 mins",
                },
                {
                  n: "Kykkos Monastery",
                  e: "Free",
                  d: "Founded in the 11th century and rebuilt repeatedly, Kykkos is the most important monastery in Cyprus. The gold-mosaic interior is dazzling. The monastery museum (€2.50) contains important religious artefacts. The adjacent Throni hilltop shrine gives panoramic Troodos views. At 1,318m elevation — take a layer in spring and autumn.",
                  t: "Troodos day · 1.5 hrs",
                },
                {
                  n: "Nicosia UN Buffer Zone Crossing",
                  e: "Free (passport required)",
                  d: "The Ledra Street pedestrian checkpoint lets you cross freely between the Republic of Cyprus and Northern Cyprus. Open daily. On the north side: the Selimiye Mosque (former Gothic cathedral), Buyuk Han caravanserai, Great Bedesten market. The buffer zone itself — the strip of no-man&apos;s-land between the two checkpoints — has been frozen since 1974 and is maintained by UN peacekeepers.",
                  t: "Unique experience · Half day",
                },
                {
                  n: "Limassol Castle",
                  e: "€4.50",
                  d: "The medieval castle where Richard the Lionheart married Berengaria of Navarre in 1191. Built originally in Byzantine times and expanded by the Lusignan dynasty. The Cyprus Medieval Museum inside is well-curated. The castle is in the heart of the Limassol old town — combine with the Old Market (Agora) and a walk along the new waterfront promenade.",
                  t: "Half day · 1 hr",
                },
                {
                  n: "Ayia Napa & Fig Tree Bay (Protaras)",
                  e: "Free (beach access)",
                  d: "Fig Tree Bay in Protaras is consistently ranked among the top 10 beaches in Europe — fine white sand, calm clear water, and sheltered cove. 10 minutes from Ayia Napa town. Ayia Napa itself is known for beach clubs and nightlife (the club scene is concentrated in the town centre). Fig Tree Bay is calmer and better for families and couples.",
                  t: "Beach day · East Cyprus",
                },
                {
                  n: "Troodos Painted Churches (UNESCO)",
                  e: "€0.50–€2 per church",
                  d: "Nine Byzantine churches in the Troodos mountains are UNESCO World Heritage Sites for their medieval frescoes — some of the finest Byzantine painting outside Istanbul. The churches are spread across the mountains and require a hire car. Asinou Church (near Nikitari) and Panagia tou Araka (near Lagoudera) are the two most accessible and most impressive.",
                  t: "Troodos day · Multiple sites",
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
            title="Cyprus — Ruins, Mountains &amp; Mediterranean Coast"
            subtitle="Paphos mosaics, Troodos cedar forests, Limassol waterfront, and Aphrodite&apos;s Rock."
            spots={[
              {
                name: "Paphos Archaeological Park Mosaics",
                query: "paphos archaeological park roman mosaics cyprus ancient ruins",
                desc: "The 1,700-year-old Roman floor mosaics in the House of Dionysus — some of the finest surviving Roman mosaics in the world.",
              },
              {
                name: "Aphrodite&apos;s Rock Petra tou Romiou",
                query: "aphrodite rock petra tou romiou cyprus sunset mediterranean",
                desc: "The coastal rock formation where legend says Aphrodite rose from the sea — most dramatic at golden hour.",
              },
              {
                name: "Troodos Mountains Kykkos Monastery",
                query: "kykkos monastery troodos mountains cyprus gold mosaic orthodox",
                desc: "Kykkos Monastery at 1,318m in the Troodos range — the most important monastery in Cyprus, decorated with gold mosaic.",
              },
              {
                name: "Nicosia Divided Capital Buffer Zone",
                query: "nicosia ledra street UN buffer zone cyprus divided capital",
                desc: "The Ledra Street crossing and the UN Buffer Zone in Nicosia — the world&apos;s last divided capital.",
              },
              {
                name: "Limassol Castle Waterfront",
                query: "limassol castle medieval cyprus waterfront old town",
                desc: "Limassol Medieval Castle where Richard the Lionheart married in 1191 — and the rejuvenated waterfront below.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Cyprus is mid-priced for Europe — cheaper than France or Italy, more expensive than Greece or Portugal. Entry fees at archaeological sites are very reasonable. The biggest variable costs are accommodation and hire car.
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
                    ["🏨 Accommodation (per night)", "€20–35 (hostel / guesthouse)", "€70–120 (3–4 star)", "€250–600 (villa / 5-star)"],
                    ["🍽️ Food (per day)", "€15–25 (tavernas + meze)", "€35–55 (restaurants + wine)", "€100–200 (fine dining)"],
                    ["🚗 Transport (per day)", "€5–15 (buses + shared)", "€25–40 (hire car + fuel)", "€80–180 (private + boats)"],
                    ["🏛️ Activities (per day)", "€10–20 (archaeological sites)", "€20–35 (guided tours)", "€100–200 (private guides)"],
                    ["TOTAL (per day)", "€55–75", "€120–170", "€300–500+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€55–75/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in Kato Paphos guesthouses or hostels, use intercity buses between cities, eat at local tavernas and order meze. All the major archaeological sites are accessible on this budget. Hire a car for day 3 only (Troodos) to keep transport costs down.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range (€120–170/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">3–4 star hotels in Paphos and Limassol, hire car for the full trip, one or two guided tours (Paphos mosaics guide, Troodos painted churches). Dinner at proper restaurants with local wine. This is the most comfortable way to do Cyprus.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€300–500/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Clifftop villas or 5-star resorts (Amara Limassol, Columbia Beach Resort Pissouri), private archaeologist guides for Paphos, private boat charters for the Blue Lagoon, master-of-wine-led tasting tours in the Limassol wine region.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Cyprus</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              For a 5-day trip, Paphos is the best single base — it puts you within reach of the ruins, Troodos mountains, and Limassol. If you want to split, 2 nights in Paphos and 2 in Limassol works well, with Nicosia as a day trip on day 5.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Amara Limassol",
                  type: "5-star luxury · Limassol beachfront",
                  price: "From €280/night",
                  badge: "Most luxurious",
                  desc: "One of the finest hotels in Cyprus — a sleek beachfront property on the Limassol coast with multiple pools, a world-class spa, and restaurants by notable chefs. Direct beach access and walkable to the Limassol old town. The benchmark for luxury in the south.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Columbia Beach Resort (Pissouri)",
                  type: "5-star resort · Pissouri Bay, between Paphos and Limassol",
                  price: "From €200/night",
                  badge: "Best resort",
                  desc: "A beautifully designed clifftop resort on Pissouri Bay — one of Cyprus&apos;s most spectacular coves, halfway between Paphos and Limassol. The suites are large and elegant, the beach below is excellent, and Aphrodite&apos;s Rock is 15 minutes away. Ideal for couples and families wanting a base with character.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Castelli Hotel Nicosia",
                  type: "Boutique mid-range · Nicosia old town",
                  price: "From €85/night",
                  badge: "Best for Nicosia",
                  desc: "A well-positioned boutique hotel inside the Venetian walls of Nicosia old town, within walking distance of the Ledra Street crossing, the Cyprus Museum, and the best restaurants in the capital. Clean, comfortable, and good value for Nicosia. Useful if you want to spend more than a day in the capital.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Budget Guesthouses — Kato Paphos",
                  type: "Budget · Kato Paphos",
                  price: "€20–45/night",
                  badge: "Best budget",
                  desc: "Several clean, well-located guesthouses and small hotels cluster around Apostolou Pavlou Avenue and the harbour area in Kato Paphos. These are within walking distance of the Archaeological Park, harbour, and Tombs of the Kings. Book 6–8 weeks ahead for April–June and September–October.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Cyprus</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Cypriot food is excellent and good value at local tavernas. The meze (€18–22/person for 20+ dishes) is the definitive way to eat. Always choose family-run places two streets back from any harbour or tourist strip — the difference in quality and price is significant.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Mahon Seafood — Limassol",
                  t: "Seafood · Limassol old port area",
                  d: "One of the best fish restaurants in Limassol, known for fresh-caught sea bass, grilled octopus, and sheftalies (Cypriot herb sausages). The grilled fish comes simply prepared with lemon and capers — letting the quality speak. Mains €14–22. Book ahead on weekends. Worth making a special trip to Limassol for.",
                  b: "Best fish",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Meze Taverna — Paphos",
                  t: "Traditional meze · Kato Paphos",
                  d: "A straightforward, family-run taverna delivering a full Cypriot meze for €18–20 per person. The spread includes tahini, taramosalata, hummus, grilled halloumi, calamari, sheftalies, kleftiko, stuffed vine leaves, village salad and more. Generous portions, no tourist pricing. Ask for a carafe of local commandaria to finish.",
                  b: "Best meze",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Zanettos — Nicosia",
                  t: "Traditional Cypriot · Nicosia old town",
                  d: "The oldest restaurant in Nicosia, operating since 1938. No written menu — you eat what they have, which changes daily. Expect a flowing procession of meze dishes: dips, grilled meats, halloumi, fresh vegetables, and house-made desserts. Around €15/person including house wine. A genuine Nicosia institution with a loyal local following.",
                  b: "Oldest restaurant in Nicosia",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Mountain Village Kafeneion — Troodos",
                  t: "Local kafeneion · Omodos or Platres",
                  d: "Every mountain village in the Troodos has a kafeneion (traditional coffee house) serving simple grilled food — souvlaki, halloumi, loukanika sausage, and village bread with olive oil. Meals are €8–12 and genuinely local. In Omodos, the square kafeneions also pour commandaria by the glass for €2–3. Don&apos;t skip this.",
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
            destination="Cyprus"
            hotels={[
              {
                name: "Amara Limassol",
                type: "5-star luxury · Limassol beachfront",
                price: "From €280/night",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/cy/amara-limassol.html?aid=2820480",
              },
              {
                name: "Columbia Beach Resort Pissouri",
                type: "5-star · Pissouri Bay clifftop",
                price: "From €200/night",
                rating: "5",
                badge: "Best resort",
                url: "https://www.booking.com/hotel/cy/columbia-beach-resort.html?aid=2820480",
              },
              {
                name: "Castelli Hotel Nicosia",
                type: "Boutique · Nicosia old town",
                price: "From €85/night",
                rating: "4",
                badge: "Best for Nicosia",
                url: "https://www.booking.com/hotel/cy/castelli-nicosia.html?aid=2820480",
              },
              {
                name: "Budget Boutique Paphos",
                type: "Budget · Kato Paphos",
                price: "From €30/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/searchresults.html?ss=Paphos&aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Paphos Archaeological Park Guided Tour",
                duration: "2 hrs",
                price: "From €35/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=paphos+archaeological+park+tour&partner_id=PSZA5UI",
              },
              {
                name: "Troodos Mountains & Kykkos Monastery Day Tour",
                duration: "8 hrs",
                price: "From €55/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=troodos+kykkos+monastery+cyprus&partner_id=PSZA5UI",
              },
              {
                name: "Cyprus Wine Tasting — Commandaria & Limassol Region",
                duration: "4 hrs",
                price: "From €45/person",
                badge: "Unique experience",
                url: "https://www.getyourguide.com/s/?q=cyprus+wine+tasting+commandaria&partner_id=PSZA5UI",
              },
              {
                name: "Nicosia Walking Tour — Divided Capital",
                duration: "3 hrs",
                price: "From €25/person",
                url: "https://www.getyourguide.com/s/?q=nicosia+walking+tour+divided+city&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Cyprus</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🚌",
                  title: "Relying on public transport for Troodos",
                  desc: "Bus services to the Troodos Mountains are infrequent and stop running by mid-afternoon. Without a hire car you cannot visit Kykkos Monastery, Cedar Valley, or the wine villages independently. Hire a car for at least day 3 — from €25/day it is the single best investment of the trip.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🏖️",
                  title: "Skipping Nicosia because it is inland",
                  desc: "Nicosia is one of the most historically fascinating cities in Europe — the only divided capital in the world, with a UN Buffer Zone running through its old town. The Ledra Street crossing into North Cyprus, the medieval streets, and the Cyprus Museum are unmissable. Most beach-holiday visitors skip it entirely. Their loss.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "☀️",
                  title: "Visiting in July or August without planning",
                  desc: "Cyprus in midsummer is brutally hot (38–42°C) and prices spike 40–60%. April to June and September to October give perfect weather, lower prices, and far fewer crowds at the archaeological sites. The wildflower season in April makes the Akamas Peninsula particularly spectacular.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🍽️",
                  title: "Ordering individual dishes instead of meze",
                  desc: "A Cypriot meze (€18–22/person) delivers 20+ small dishes and is the definitive way to eat on the island. Ordering à la carte at tourist restaurants near the harbours costs more and gives you less variety. Always ask for the meze at any family-run taverna — not every place advertises it on the board outside.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🧀",
                  title: "Buying halloumi at the supermarket",
                  desc: "Supermarket halloumi is pasteurised and tastes nothing like the fresh village cheese made from sheep and goat milk. Stop at a village kafeneion in the Troodos or the Limassol wine villages and ask about fresh halloumi — you can buy it directly from local producers for €3–5 per piece and the difference is extraordinary.",
                  color: "bg-purple-50 border-purple-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Cyprus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🍷",
                  title: "Taste commandaria at its source in Omodos",
                  desc: "Commandaria is one of the world&apos;s oldest named wines, produced in the Troodos foothills since at least 800 BC. A tasting in Omodos or Koilani village costs €3–5 and beats any wine shop. Book tours of the Limassol wine region at getyourguide.com/s/?q=cyprus+wine&partner_id=PSZA5UI",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌅",
                  title: "Arrive at Aphrodite's Rock 45 minutes before sunset",
                  desc: "Petra tou Romiou is on the B6 coastal road 25km east of Paphos. Pull into the free lay-by viewing area 45 minutes before sunset — the limestone face turns orange, the sea glows gold, and it is genuinely one of the most dramatic free experiences in the Mediterranean. Busy on weekends; arrive early.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🛂",
                  title: "Cross into North Cyprus for a half-day",
                  desc: "The Ledra Street pedestrian checkpoint in Nicosia is open daily and free with a passport. North Nicosia has a completely different atmosphere: Ottoman architecture, Turkish coffee, much cheaper food, and the extraordinary Buyuk Han caravanserai. The Selimiye Mosque (formerly a Gothic cathedral) alone is worth the 5-minute crossing process.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🏺",
                  title: "Book Paphos accommodation early",
                  desc: "Paphos has limited quality accommodation in the town centre close to the ruins (as opposed to the resort hotel strip further out). The best boutique hotels near the archaeological park and harbour fill quickly April–June and September–October. Book 6–8 weeks ahead. The resort strip hotels are always available.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🚗",
                  title: "Drive on the left and carry cash",
                  desc: "Cyprus drives on the left (inherited from British colonial rule). Roads are excellent and English signage is everywhere. Most archaeological sites accept cash only — the Department of Antiquities does not reliably take cards at smaller sites. Carry €20–30 in small notes when exploring outside the cities.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏔️",
                  title: "Take a layer for the Troodos mountains",
                  desc: "Even in June, the Troodos summit area (1,900m) can be 10–12°C cooler than the coast. In April and October, Kykkos Monastery at 1,318m will be noticeably chilly in the morning. Pack a light jacket. In January and February, you can ski at Mount Olympus and swim at a Paphos beach on the same day.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Cyprus" />

          {/* Combine With */}
          <CombineWith currentSlug="cyprus-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do I need a visa for Cyprus?",
                  a: "It depends on your passport. US, UK, EU and Australian passport holders are visa-free for up to 90 days. Indian passport holders need a Cyprus National Visa (Type C) — processing takes 10–15 business days and costs €30. Note: Cyprus is EU but NOT Schengen, so a Cyprus visa does not allow travel to other EU countries, and your Schengen visits do not count against your Cyprus 90-day allowance.",
                },
                {
                  q: "Do I need a hire car in Cyprus?",
                  a: "For Paphos city sights and beach days you can manage without a car using local buses. However, the Troodos Mountains, Akamas Peninsula, Limassol wine villages, and most rural archaeological sites require a hire car or organised tour. A hire car is strongly recommended — rates start at €25/day and driving is on the left. Roads are excellent and English signage is comprehensive.",
                },
                {
                  q: "What is the best base for a 5-day Cyprus trip?",
                  a: "Paphos is the best single base — it has the UNESCO archaeological park, harbour, beach, and is well-positioned for day trips to Troodos (45 minutes), Limassol (1 hour), Nicosia (1.5 hours), and Akamas Peninsula (30 minutes). Limassol is better for nightlife and a more urban base. Avoid basing yourself in Ayia Napa unless beach clubs are your main priority.",
                },
                {
                  q: "Can you cross from Cyprus into Northern Cyprus?",
                  a: "Yes. The Ledra Street pedestrian crossing in Nicosia is open daily and free with a passport. You can also cross by car at several other checkpoints. Northern Cyprus uses the Turkish lira (though euros are widely accepted). Food and coffee are significantly cheaper in the north. The Republic of Cyprus does not restrict visits to the north — you can cross freely and return the same day.",
                },
                {
                  q: "What is commandaria wine and where should I try it?",
                  a: "Commandaria is a sweet amber wine made from sun-dried grapes in the villages around Limassol — it is one of the world&apos;s oldest named wines with a documented history back to 800 BC. Richard the Lionheart reportedly called it &apos;the wine of kings, the king of wines&apos; after his stay in Cyprus. Try it in Omodos or Koilani village for €2–4 a glass from a family wine cellar. The fortified version is similar to a light tawny port.",
                },
                {
                  q: "Is Cyprus safe for solo travellers and families?",
                  a: "Cyprus is one of the safest countries in Europe with very low crime rates. Solo travel is comfortable across the island including Nicosia. The only area to exercise care is the actual UN Buffer Zone (the no-man&apos;s-land between the two checkpoints) — stay on marked crossing routes and do not enter unauthorised areas. Families will find Cyprus extremely welcoming with calm beaches, child-friendly tavernas, and good facilities throughout.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Cyprus trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-cyprus", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/cyprus-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/paphos-archaeological-park-guide", label: "Paphos ruins guide", icon: "🏛️" },
                { href: "/blog/troodos-mountains-guide", label: "Troodos guide", icon: "⛰️" },
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
          <RelatedGuides currentSlug="cyprus-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More European Island Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Santorini in 4 Days — Caldera &amp; Villages", href: "/blog/santorini-4-days" },
                { label: "Crete in 5 Days — Palaces &amp; Gorges", href: "/blog/crete-5-days" },
                { label: "Malta in 4 Days — Valletta &amp; Mdina", href: "/blog/malta-4-days" },
                { label: "Rhodes in 4 Days — Old Town &amp; Coast", href: "/blog/rhodes-4-days" },
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
