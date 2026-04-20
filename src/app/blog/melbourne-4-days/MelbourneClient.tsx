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
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const MELBOURNE_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Melbourne Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "4-Day Itinerary" },
  { id: "attractions", emoji: "🏛️", label: "Top Attractions" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍽️", label: "Where to Eat" },
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
          href: `mailto:?subject=Melbourne 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Melbourne in 4 Days — Great Ocean Road, street art, coffee culture&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/melbourne-4-days"
        imageUrl="https://images.unsplash.com/photo-1545044846-351ba102b6d5?w=1200&q=80"
        description="Melbourne in 4 Days: Great Ocean Road, Twelve Apostles, Hosier Lane street art, flat white coffee culture — complete travel guide with budget breakdown."
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
export default function MelbourneClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MELBOURNE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Melbourne" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="melbourne flinders street station australia city skyline"
            fallback="https://images.unsplash.com/photo-1545044846-351ba102b6d5?w=1600&q=80"
            alt="Melbourne Flinders Street Station at dusk with city skyline reflected in the Yarra River, Australia"
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
              <span className="text-white/70">Melbourne 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Australia &amp; Pacific
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">15 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Melbourne in 4 Days:
                <em className="italic text-amber-300"> Great Ocean Road, Street Art &amp; Coffee Culture</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Hosier Lane murals, flat whites that redefine coffee, the Twelve Apostles rising from the Southern Ocean, and laneways barely wider than a bicycle. The complete guide.
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
              <span>🇦🇺 Victoria, Australia</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From A$80/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Melbourne doesn&apos;t dazzle you from across a harbour — it earns you slowly, down laneways barely wider than a bicycle, through coffee that Australians elsewhere will tell you is quite simply the best in the world, in galleries full of work no tourist board told you to see, and finally, on the Great Ocean Road, where the Twelve Apostles rise from the Southern Ocean as if they were placed there specifically to justify the drive.
            </p>
          </blockquote>

          {/* ── WHAT MELBOURNE ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Melbourne Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Melbourne is Australia&apos;s cultural capital — a city where the coffee is treated with the seriousness other cities reserve for wine, where street art rotates faster than gallery exhibitions, and where the food scene draws from every cuisine on earth because a third of Melbourne&apos;s population was born overseas. It&apos;s consistently ranked among the world&apos;s most liveable cities, and once you spend four days here, you understand why people who move to Melbourne rarely leave.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The city is built on a grid of wide streets with a labyrinth of narrow laneways between them — and it&apos;s in these laneways that Melbourne&apos;s personality lives. Hosier Lane is covered floor-to-ceiling in rotating street art. Degraves Street is lined with espresso bars. Hardware Lane has Italian restaurants with outdoor seating. Centre Place has hole-in-the-wall Japanese cafes. The laneways are not a tourist trail — they are genuinely how the city operates.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Beyond the city, the Great Ocean Road is 243 kilometres of cliff-top coastal driving culminating at the Twelve Apostles — limestone stacks carved by 20 million years of Southern Ocean erosion. It is one of the finest drives in the world. Four days gives you enough time to absorb Melbourne&apos;s urban culture and make the Great Ocean Road trip without feeling rushed.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="MEL (Tullamarine)" />
              <StatCard icon="🌡️" label="Best Season" value="Mar–May, Sep–Nov" />
              <StatCard icon="🚃" label="Free Tram Zone" value="CBD area" />
              <StatCard icon="💰" label="Budget From" value="A$80/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Melbourne</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar–May",
                  i: "🍂",
                  t: "Autumn — Best Season",
                  d: "15–22°C, crisp mornings, stable weather. Melbourne&apos;s autumn foliage in the Botanic Gardens and Carlton Gardens is beautiful. The Melbourne Cup Spring Racing Carnival has just ended, so hotel prices drop. The Great Ocean Road is less crowded than summer. Ideal for most travellers.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🌸",
                  t: "Spring — Equally Excellent",
                  d: "14–20°C, wildflowers along the Great Ocean Road, the Melbourne Cup (first Tuesday of November), AFL Grand Final in late September. Spring weather is famously variable — Melbourne can give you four seasons in one day. Pack layers. Events calendar is the strongest of the year.",
                  b: "Recommended",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Dec–Feb",
                  i: "☀️",
                  t: "Summer — Hot and Busy",
                  d: "20–35°C with occasional heatwaves above 40°C. The Australian Open tennis is in January. St Kilda beach and the coastal suburbs are at their liveliest. Hotel prices peak in January. The Great Ocean Road is busy with domestic tourists. Very good if you want beach and festival energy.",
                  b: "Peak season",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Aug",
                  i: "🌧️",
                  t: "Winter — Cold but Atmospheric",
                  d: "7–14°C with regular rain. Melbourne&apos;s galleries, cafes, and laneway bars are at their most atmospheric in winter. The Great Ocean Road in winter is dramatic — stormy seas, moody skies, almost no tourists. Budget accommodation is cheapest. Bring a proper coat.",
                  b: "For culture lovers",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Melbourne</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Melbourne Airport (Tullamarine / MEL) is 23km northwest of the CBD. There is no train to the airport — <strong className="font-medium">SkyBus (A$19.75 one way)</strong> runs 24/7 from the airport to Southern Cross Station in the city centre. The trip takes 30–50 minutes depending on traffic.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚌",
                  t: "SkyBus from Airport (recommended)",
                  d: "SkyBus runs every 10–15 minutes, 24 hours a day, from Melbourne Airport to Southern Cross Station in the CBD. Cost: A$19.75 one way / A$32 return. The journey takes 30–50 minutes. From Southern Cross Station, the free tram zone covers the entire CBD. Buy tickets online or at the terminal.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚕",
                  t: "Taxi / Rideshare from Airport",
                  d: "Taxi to the CBD costs A$55–75 depending on traffic and time of day. Uber and DiDi are both available from the rideshare pickup point outside the terminal. During off-peak hours, rideshare can be A$35–50. Useful for groups of 3–4 splitting the fare.",
                  b: "Convenient for groups",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚃",
                  t: "Getting Around: Trams + MYKI",
                  d: "Melbourne&apos;s tram network is the largest in the world. The entire CBD is a Free Tram Zone — no ticket needed within the city centre. Outside the free zone, buy a MYKI card (A$6 card fee) and load credit. A daily cap of A$10.60 means you never pay more than that per day, regardless of how many trips you take.",
                  b: "Essential",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "✈️",
                  t: "International Flights",
                  d: "Melbourne (MEL) has direct flights from Singapore (7.5 hrs), Kuala Lumpur (8 hrs), Hong Kong (9.5 hrs), Dubai (14 hrs), and Los Angeles (15.5 hrs). From India, the most common routes are via Singapore or Kuala Lumpur with a single connection. Budget carriers AirAsia X and Scoot offer competitive fares on the Southeast Asian connection routes.",
                  b: "Global hub",
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

          {/* ── 4-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Melbourne Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary covers the essential Melbourne experience — laneways, coffee culture, the NGV, the Great Ocean Road, and the inner suburbs that define the city&apos;s character.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Flinders Street · Federation Square · Hosier Lane · Queen Victoria Market"
                cost="A$40–65 (market food + dinner)"
                items={[
                  "8:30am — Start at Flinders Street Station (free exterior). The 1905 Edwardian building with its iconic clock faces is the heartbeat of Melbourne. The corner of Flinders and Swanston Streets is where everything converges — trams, commuters, students, coffee cups.",
                  "9:00am — Federation Square (free) across the intersection. The angular zinc, glass, and sandstone geometry has been debated since it opened in 2002. The Ian Potter Centre: NGV Australia inside is free and has outstanding Australian colonial and Indigenous art.",
                  "10:00am — Hosier Lane (free, 5 minutes walk). Melbourne&apos;s most famous street art laneway — every centimetre covered in rotating murals, paste-ups, and stencils. The work changes constantly; photographs are out of date within weeks.",
                  "11:00am — Degraves Street espresso experience. Order a flat white at Degraves Espresso Bar (A$4.50–5.50). This is the most celebrated cafe laneway in Australia&apos;s coffee capital.",
                  "12:00pm — Walk the Block Arcade (1892, free) and the Royal Arcade (1870, oldest in Australia, free) for heritage interiors and the Gog and Magog clock figures.",
                  "1:30pm — Queen Victoria Market (open Tue–Sun, free entry). The deli hall has the best smallgoods, cheeses, and olives in Melbourne. Lunch from the food stalls: A$8–15 for a hot meal.",
                  "3:30pm — NGV International (180 St Kilda Road, free permanent collection). The Rembrandt room, the stained glass ceiling in the Great Hall — the largest in the world. Free entry, book timed entry for ticketed exhibitions separately.",
                  "6:30pm — Southbank Promenade walk (free) along the Yarra River at dusk. Crown Casino&apos;s gas flame towers, the Eureka Tower, and the city skyline reflected in the river.",
                  "8:00pm — Dinner on Hardware Lane (A$18–28 for pasta at one of the outdoor Italian restaurants) or Chin Chin on Flinders Lane (A$25–40, Thai-inspired, always busy, walk-ins only).",
                ]}
              />
              <DayCard
                day="Day 2"
                title="St Kilda · Penguins · Acland Street · Luna Park"
                cost="A$45–70 (tram + lunch + dinner)"
                items={[
                  "9:00am — Take the City Circle Tram (free, route 35) to Spencer Street, then tram 96 to St Kilda (A$4.60 with MYKI). St Kilda is Melbourne&apos;s seaside suburb — 5km south of the CBD, palm-lined Fitzroy Street, art deco pier.",
                  "9:30am — St Kilda Beach and foreshore walk. The pier, the breakwater, and the view back to the Melbourne skyline are excellent. St Kilda Baths are a heritage-listed beach facility (free changing rooms).",
                  "10:30am — Luna Park (free to enter and photograph). The Mr Moon face entrance and the 1912 Scenic Railway — the oldest continually operating wooden roller coaster in the world — are heritage icons.",
                  "11:00am — Acland Street cake shops. Monarch Cakes (since 1934, kosher cakes A$4–8/slice) and Glick&apos;s Bakery (A$3–6). These are genuine neighbourhood institutions, not tourist confections.",
                  "1:00pm — Lunch on Fitzroy Street (A$14–20 for a burger, pasta, or bowl). Donovans on the beach is excellent for mid-range (A$35–50/person).",
                  "3:00pm — Esplanade Market (Sunday only, free entry). Over 200 stalls of handmade art, jewellery, and crafts along the beachfront.",
                  "5:30pm — St Kilda breakwater penguin colony (free). From October to March, little penguins return to their burrows at dusk. Volunteer rangers are present most evenings. No torches, no flash photography. A completely free wildlife encounter inside a city.",
                  "7:30pm — Dinner in St Kilda: Stokehouse (Jacka Boulevard, A$40–60/person) with direct beach views, or the more casual Stokehouse Q downstairs (A$25–35).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Great Ocean Road · Twelve Apostles · Loch Ard Gorge"
                cost="A$80–120 (car hire + fuel + meals)"
                items={[
                  "6:30am — Hire a car for the day (A$55–80/day for a compact from Enterprise or Budget). The Great Ocean Road begins at Torquay, 100km southwest of Melbourne (1 hour 15 minutes via Geelong Ring Road).",
                  "8:00am — Torquay: the surf capital of Australia. Bells Beach is 5km south — the most famous surf break in Australia, site of the Rip Curl Pro since 1973.",
                  "10:00am — Lorne: the best-looking Great Ocean Road town (A$5–8 for coffee and a pastry at the Lorne Foreshore Bakery, stunning views).",
                  "11:30am — Apollo Bay: the halfway point (A$12–18 for fish and chips at the Apollo Bay Hotel overlooking the harbour). The rainforest drive through Great Otway National Park to the Twelve Apostles is spectacular and completely free.",
                  "1:30pm — The Twelve Apostles (free entry, Port Campbell National Park). Eight limestone stacks still stand, carved by 20 million years of Southern Ocean erosion. The viewing platforms are well-positioned. At midday the light is flat; at sunset it&apos;s magnificent.",
                  "3:00pm — Loch Ard Gorge (free, 5 minutes drive from the Twelve Apostles). A narrow gorge with towering 65-metre limestone walls and a sheltered pocket beach. Named after the ship wrecked here in 1878 with only two survivors.",
                  "4:30pm — Drive back via the inland route through Colac (shorter return to Melbourne, 2.5 hours).",
                  "7:30pm — Return to Melbourne. Dinner in Fitzroy: Smith Street or Brunswick Street for A$15–25 Thai, Vietnamese, or Italian.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Fitzroy · Carlton · Melbourne Museum · Royal Botanic Gardens"
                cost="A$50–80 (museum + meals + coffee)"
                items={[
                  "9:00am — Fitzroy breakfast on Brunswick Street. Proud Mary on Smith Street (A$16–24 for brunch) or Seven Seeds on Berkeley Street, Carlton (A$5–6 for Melbourne&apos;s best filter coffee).",
                  "10:30am — Royal Botanic Gardens (free). One of the finest botanic gardens in the world, with 38 hectares of curated landscapes along the south bank of the Yarra. The fern gully, the ornamental lake, and the Aboriginal Heritage Walk (A$40, 90 minutes, guided by an Indigenous educator) are outstanding.",
                  "12:30pm — Lunch in Carlton (Little Italy): Lygon Street has been Melbourne&apos;s Italian precinct since the 1950s. Lune Croissanterie in Fitzroy (A$8–14 per croissant — queue from 11:30am, precision pastry that would impress a Parisian bakery) is an alternative.",
                  "2:00pm — Melbourne Museum (Carlton Gardens, A$15 adults). The Bunjilaka Aboriginal Cultural Centre is exceptional. The Australia Gallery with Phar Lap&apos;s preserved skin, and the CSIRAC computer (the world&apos;s fourth digital computer) are must-see exhibits.",
                  "3:30pm — Eureka Skydeck (A$28 adults). The observation deck at level 88 of the Eureka Tower gives 360-degree views of the Melbourne grid, Port Phillip Bay, and the Dandenong Ranges. The Edge — a glass cube that slides out from the building — costs an additional A$12.",
                  "5:00pm — Walk along the Yarra River to Birrarung Marr (free riverside park with Federation Bells).",
                  "7:00pm — Farewell dinner: Chin Chin (Flinders Lane, A$25–40 for Thai-inspired sharing plates) or Tipo 00 (Little Bourke Street, A$25–35 for Melbourne&apos;s finest Italian pasta — book ahead).",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Melbourne" onPlanTrip={() => setModalOpen(true)} />

          {/* ── TOP ATTRACTIONS ── */}
          <section id="attractions" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Top Melbourne Attractions</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Many of Melbourne&apos;s best experiences are completely free — the street art, the laneways, the Botanic Gardens, and the NGV permanent collection.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Hosier Lane Street Art",
                  e: "Free",
                  d: "Melbourne&apos;s most famous laneway — both walls covered floor-to-ceiling in rotating murals, stencils, and paste-ups by Australian and international artists. The work changes constantly. The cobblestones are part of the aesthetic. Five minutes from Flinders Street Station.",
                  t: "Must see · 30 mins",
                },
                {
                  n: "Federation Square &amp; NGV Australia",
                  e: "Free",
                  d: "The angular zinc-and-sandstone precinct opposite Flinders Street Station houses the Ian Potter Centre: NGV Australia — outstanding Australian colonial, modern, and Indigenous art. Free permanent collection. The square itself is Melbourne&apos;s main public gathering space.",
                  t: "Must see · 1–2 hrs",
                },
                {
                  n: "Great Ocean Road &amp; Twelve Apostles",
                  e: "Free (car hire A$55–80/day)",
                  d: "243 kilometres of cliff-top coastal road from Torquay to Allansford. The Twelve Apostles — eight remaining limestone stacks in the Southern Ocean, 20 million years in the making — are the culmination. One of the world&apos;s finest drives. Self-drive or guided tour.",
                  t: "Must do · Full day",
                },
                {
                  n: "Queen Victoria Market",
                  e: "Free entry",
                  d: "The &quot;Queen Vic&quot; has occupied this 7-hectare site since 1878. The deli hall — smallgoods, cheeses, olives, cured meats — is the best in Melbourne. Night market on Wednesday evenings in summer. Open Tuesday to Sunday, closed Monday.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "MCG Cricket Ground Tour",
                  e: "A$30 adults",
                  d: "The Melbourne Cricket Ground is Australia&apos;s largest stadium (100,024 capacity) and the spiritual home of both cricket and Australian rules football. The 75-minute guided tour covers the players&apos; rooms, the Long Room, and the National Sports Museum. On match days, buy a ticket to watch instead.",
                  t: "Sports fans · 1.5 hrs",
                },
                {
                  n: "Royal Botanic Gardens",
                  e: "Free",
                  d: "One of the world&apos;s finest botanic gardens — 38 hectares of curated landscapes along the south bank of the Yarra. The fern gully, ornamental lake, and Aboriginal Heritage Walk (A$40, guided) are highlights. Ideal for a morning or afternoon stroll.",
                  t: "Must see · 1–2 hrs",
                },
                {
                  n: "Eureka Skydeck",
                  e: "A$28 adults",
                  d: "Level 88 of the Eureka Tower — 360-degree views of the Melbourne grid, Port Phillip Bay, and the Dandenong Ranges. The Edge experience (A$12 extra) is a glass cube that slides out from the building. Best at sunset for the city lights turning on below.",
                  t: "Iconic view · 1 hr",
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
            title="Melbourne — Laneways, Coast &amp; Culture"
            subtitle="From Hosier Lane to the Twelve Apostles."
            spots={[
              {
                name: "Hosier Lane Street Art",
                query: "hosier lane street art melbourne graffiti laneway australia",
                desc: "Melbourne&apos;s most famous laneway — rotating murals, paste-ups, and stencils covering every surface.",
              },
              {
                name: "Twelve Apostles Great Ocean Road",
                query: "twelve apostles great ocean road victoria australia limestone stacks",
                desc: "Eight limestone stacks carved by 20 million years of Southern Ocean erosion — the culmination of the Great Ocean Road.",
              },
              {
                name: "Flinders Street Station",
                query: "flinders street station melbourne australia dusk city lights",
                desc: "The 1905 Edwardian station with its iconic clock faces — the heartbeat of Melbourne.",
              },
              {
                name: "Royal Botanic Gardens Melbourne",
                query: "royal botanic gardens melbourne lake trees australia",
                desc: "38 hectares of curated botanical landscapes along the south bank of the Yarra River.",
              },
              {
                name: "St Kilda Beach Melbourne",
                query: "st kilda beach pier melbourne australia sunset",
                desc: "Melbourne&apos;s seaside suburb — the pier, the breakwater penguins, and the view back to the city skyline.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Melbourne can be done on any budget. Many of the city&apos;s best experiences — the laneways, the street art, the NGV permanent collection, the Botanic Gardens, and the free tram zone — cost nothing. The Great Ocean Road is the single biggest expense for budget travellers (car hire A$55–80/day).
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
                    ["🏨 Accommodation (per night)", "A$28–50", "A$180–320", "A$450–800"],
                    ["🍽 Food (per day)", "A$20–35", "A$55–90", "A$150–360"],
                    ["🚃 Transport (per day)", "A$8–15", "A$15–30", "A$80–200"],
                    ["🎟 Activities (per day)", "A$15–35", "A$50–100", "A$150–400"],
                    ["TOTAL (per day)", "A$71–135", "A$300–540", "A$830–1,760"],
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (A$71–135/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in hostels (United Backpackers from A$28/night), eat at Queen Vic Market and laneway cafes, use the free tram zone and MYKI for A$10.60/day cap. Many top attractions are free — NGV, Botanic Gardens, Hosier Lane, Federation Square.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (A$300–540/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at QT Melbourne or Hotel Lindrum (A$200–320/night), guided food tours, Great Ocean Road with a private guide, ticketed NGV exhibitions, dinner at Chin Chin or Supernormal. This is the sweet spot for comfort and depth.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Melbourne</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Melbourne&apos;s most interesting neighbourhoods for accommodation are the CBD (central, walkable to everything), Fitzroy (street art, coffee, independent shops), St Kilda (beach, penguins, cakes), and South Yarra (boutique shopping, Botanical Gardens proximity). The free tram zone makes CBD stays particularly convenient.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "The Langham Melbourne",
                  type: "Luxury · Southbank riverside",
                  price: "From A$380/night",
                  badge: "Best luxury",
                  desc: "Heritage riverside building on Southgate with the Chuan Spa — rated among the best hotel spas in Australia. The Melba restaurant is a Melbourne institution. River views to the CBD skyline. The benchmark for luxury in Melbourne.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "QT Melbourne",
                  type: "Design hotel · CBD",
                  price: "From A$220/night",
                  badge: "Best design",
                  desc: "Bold, art-forward design hotel on Russell Street in the heart of the CBD. Walking distance to Hosier Lane, Flinders Street Station, and the laneways. The Pascale Bar &amp; Grill and the rooftop are excellent. Melbourne&apos;s most design-conscious mid-range hotel.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "United Backpackers Melbourne",
                  type: "Hostel · CBD",
                  price: "From A$28/night",
                  badge: "Best budget",
                  desc: "Clean, well-located hostel on Flinders Street, walking distance to everything in the CBD. Dorm beds from A$28, private rooms from A$90. Social common areas, rooftop terrace. The best-value accommodation in central Melbourne for solo travellers and backpackers.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Hotel & Apartments in Fitzroy / St Kilda",
                  type: "Mid-range · Inner suburbs",
                  price: "A$120–250/night",
                  badge: "Best neighbourhood vibe",
                  desc: "Serviced apartments or boutique hotels in Fitzroy (Brunswick Street) or St Kilda (Fitzroy Street) put you in Melbourne&apos;s actual soul rather than the CBD. Better cafes, better restaurants, better street life. Tram to the city in 15 minutes. Ideal for 4+ night stays.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Melbourne</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Melbourne&apos;s food scene draws from every cuisine on earth because a third of the city&apos;s population was born overseas. The laneways, the inner suburbs, and the market halls are where the best food lives — not the waterfront tourist strip.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Chin Chin",
                  t: "Thai-inspired · Flinders Lane, CBD",
                  d: "Andrew McConnell&apos;s famous Thai-influenced restaurant on Flinders Lane — Melbourne&apos;s most reliably excellent casual dining. Walk-ins only (no reservations). The crispy pork belly, the whole roasted cauliflower, and the drinking tiger beef are signatures. A$25–40 per person for sharing plates. Expect a 20–30 minute wait at peak times — it&apos;s worth it.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Lune Croissanterie",
                  t: "Artisan pastry · Fitzroy",
                  d: "If you have one food experience in Melbourne, this is it. Lune produces croissants with a precision that would impress a Parisian bakery — each one takes three days to make. The twice-baked almond croissant and the cruffin are legendary. A$8–14 per item. Queue from 11:30am; it opens at noon. Worth every minute of the wait.",
                  b: "Legendary",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Hardware Lane Restaurants",
                  t: "Italian · CBD laneway",
                  d: "An entire laneway of outdoor Italian restaurants in the CBD — candlelit tables on cobblestones, waiters calling you in, the smell of woodfired pizza. Touristy? Slightly. Enjoyable? Absolutely. A$18–28 for pasta, A$22–32 for mains. The experience is the laneway atmosphere as much as the food.",
                  b: "Atmosphere",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Queen Victoria Market Food Halls",
                  t: "Market food · CBD",
                  d: "The deli hall at the Queen Vic is the best in Melbourne — cheeses, cured meats, olives, pastries from A$5. Hot meals from the food stalls A$8–15. The Wednesday night market (November to March) is excellent for street food and live music. The most affordable quality eating in Melbourne.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Tipo 00",
                  t: "Italian pasta · Little Bourke Street, CBD",
                  d: "Melbourne&apos;s finest Italian pasta restaurant — handmade every day using Italian techniques. The cacio e pepe and the mafaldine with duck ragu are exceptional. A$25–35 per person. Book 1–2 weeks ahead for dinner; lunch walk-ins are sometimes possible.",
                  b: "Fine dining pasta",
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
            destination="Melbourne Australia"
            hotels={[
              {
                name: "The Langham Melbourne",
                type: "Luxury riverside · Chuan Spa · Southbank",
                price: "From A$380/night",
                rating: "5",
                badge: "Best luxury",
                url: "https://www.booking.com/hotel/au/the-langham-melbourne.html?aid=2820480",
              },
              {
                name: "QT Melbourne",
                type: "Design hotel · CBD · Russell Street",
                price: "From A$220/night",
                rating: "5",
                badge: "Best design",
                url: "https://www.booking.com/hotel/au/qt-melbourne.html?aid=2820480",
              },
              {
                name: "Hotel Lindrum Melbourne",
                type: "Boutique · Flinders Street · City centre",
                price: "From A$200/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/au/lindrum-melbourne.html?aid=2820480",
              },
              {
                name: "United Backpackers Melbourne",
                type: "Hostel · CBD · Flinders Street",
                price: "From A$28/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/au/united-backpackers-melbourne.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Great Ocean Road Day Tour",
                duration: "12 hrs",
                price: "From A$95/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=great+ocean+road+day+tour+melbourne&partner_id=PSZA5UI",
              },
              {
                name: "Melbourne Laneways &amp; Coffee Tour",
                duration: "3 hrs",
                price: "From A$70/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=melbourne+laneways+coffee+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Phillip Island Penguin Parade",
                duration: "8 hrs",
                price: "From A$130/person",
                url: "https://www.getyourguide.com/s/?q=phillip+island+penguin+parade+melbourne&partner_id=PSZA5UI",
              },
              {
                name: "MCG &amp; Melbourne Sports Tour",
                duration: "2 hrs",
                price: "From A$30/person",
                url: "https://www.getyourguide.com/s/?q=mcg+cricket+ground+tour+melbourne&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Melbourne</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚃",
                  title: "The Free Tram Zone covers the entire CBD",
                  desc: "All trams within the city centre are completely free — no MYKI card required. The City Circle Tram (route 35, dark green heritage trams) runs a loop around the CBD every 10–12 minutes with a commentary about landmarks. Use it as a free orientation on arrival and as a free connection throughout your stay.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "☕",
                  title: "Order a flat white, not a latte",
                  desc: "The flat white — a double espresso with microfoamed full-cream milk in a small ceramic cup — is Melbourne&apos;s defining coffee drink. Go to Patricia, Seven Seeds, or Proud Mary. Order without sugar. Melbourne&apos;s specialty coffee culture is not marketing — it&apos;s a genuine culinary tradition that rivals any city in the world.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🐧",
                  title: "St Kilda penguins at dusk (free)",
                  desc: "From October to March, a colony of 1,200+ little penguins nests at the end of the St Kilda breakwater and returns at dusk after a day at sea. Volunteer rangers guide visitors. Completely free, no booking required. One of the only places in the world where wild penguins breed inside a major city.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🛒",
                  title: "Queen Vic Market: Tuesday to Saturday mornings",
                  desc: "The Queen Victoria Market is at its best Tuesday to Saturday mornings when the full produce, deli, and general merchandise sections are all operating. Sunday is busiest and most tourist-heavy. The night market (Wednesday evenings, November to March) is excellent for street food.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🚗",
                  title: "Self-drive the Great Ocean Road for flexibility",
                  desc: "Car hire from A$55/day for a compact. Self-driving lets you stop wherever you want, stay longer at the Twelve Apostles, and detour into the Otways. Drive the coastal route out (via Torquay, Lorne, Apollo Bay) and the faster inland route back (via Colac). Budget a full day — it&apos;s a 12-hour round trip including stops.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏟️",
                  title: "Catch an AFL match at the MCG",
                  desc: "An AFL match at the Melbourne Cricket Ground (100,024 capacity) is one of the great Australian sporting experiences. Tickets from A$30–55 for regular home-and-away matches. The atmosphere, the crowd, and the sheer scale of the MCG under lights are genuinely memorable even if you don&apos;t understand the rules.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Melbourne" />

          {/* Combine With */}
          <CombineWith currentSlug="melbourne-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Sydney or Melbourne — which should I visit?",
                  a: "Neither is objectively better — they&apos;re genuinely different cities. Sydney wins on natural spectacle: the harbour, the beaches, the Opera House. Melbourne wins on urban culture: food, coffee, street art, live music, galleries, the Great Ocean Road. If you have time for one, Sydney is the instinctive first-timer choice. If you have time for both, do Sydney then Melbourne — they complement each other perfectly.",
                },
                {
                  q: "Should I self-drive the Great Ocean Road or take a tour?",
                  a: "Self-drive is better if you want flexibility — stop when you want, stay longer at the Twelve Apostles, detour into the Otways. The drive itself is one of the pleasures. Guided tour is better if you want context — a good guide covers the geology, the Aboriginal history, and the shipwreck stories. On a tour you also avoid return drive fatigue. Budget travellers should self-drive (A$55–80/day + fuel); mid-range should consider a small-group tour (A$95–150/person).",
                },
                {
                  q: "Is tipping expected in Melbourne?",
                  a: "No. Australian hospitality workers are paid among the highest minimum wages in the world (A$24–26+/hour). Tipping is genuinely optional. You can round up or leave 10% at a fine dining restaurant if service was outstanding, but it is never obligatory. This is a significant relief for travellers from North America accustomed to 18–20% mandatory tipping culture.",
                },
                {
                  q: "Do Indian nationals need a visa for Australia?",
                  a: "Yes — Indian passport holders require a Visitor Visa (subclass 600) for Australia. Fee: A$145. Apply online through the Australian Department of Home Affairs ImmiAccount portal. Processing time: 20–40 business days. Apply at least 6–8 weeks before travel. The ETA (A$20, instant) is not available to Indian passport holders — only USA, UK, Canada, EU, and similar nationalities qualify.",
                },
                {
                  q: "Where is the best coffee in Melbourne?",
                  a: "Melbourne&apos;s best specialty coffee is concentrated in three areas: CBD laneways (Patricia on Little Bourke Street, Degraves Espresso on Degraves Street), Carlton/Fitzroy (Seven Seeds on Berkeley Street, Proud Mary on Smith Street), and Collingwood (Brother Baba Budan on Little Lonsdale). The flat white is the defining Melbourne coffee drink. Avoid chains — visiting them here is a missed opportunity.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Melbourne trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-melbourne", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/melbourne-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-melbourne", label: "How to get there", icon: "✈️" },
                { href: "/blog/melbourne-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="melbourne-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Australia &amp; Pacific Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Sydney in 5 Days — Harbour &amp; Beaches", href: "/blog/sydney-5-days" },
                { label: "Bali in 5 Days — Temples &amp; Rice Terraces", href: "/blog/bali-5-days" },
                { label: "Singapore in 3 Days — City State", href: "/blog/singapore-3-days" },
                { label: "Tokyo in 5 Days — Tradition &amp; Tech", href: "/blog/tokyo-5-days" },
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
