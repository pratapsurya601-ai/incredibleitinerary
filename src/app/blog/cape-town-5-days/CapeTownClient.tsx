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
const CAPE_TOWN_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Cape Town Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "5-Day Itinerary" },
  { id: "landmarks",   emoji: "🏔️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Cape Town 5-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Cape Town in 5 Days — Table Mountain, penguins, Winelands and the complete itinerary&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/cape-town-5-days"
        imageUrl="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80"
        description="Cape Town in 5 Days: Table Mountain, Boulders Beach penguins, Cape Winelands, Robben Island and Chapman's Peak — complete travel guide with ZAR & USD budget breakdown."
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
export default function CapeTownClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={CAPE_TOWN_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Cape Town" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="cape town table mountain south africa sunset ocean"
            fallback="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1600&q=80"
            alt="Cape Town Table Mountain with cable car overlooking Atlantic Ocean South Africa"
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
              <span className="text-white/70">Cape Town 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Mountains &amp; Coastline
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Cape Town in 5 Days:
                <em className="italic text-amber-300"> Table Mountain, Penguins &amp; the Winelands</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Table Mountain at dawn, African penguins on Boulders Beach, Chapman&apos;s Peak coastal drive, Franschhoek wine estates and Robben Island. The complete guide with real timings, costs in ZAR &amp; USD, and the mistakes that ruin most Cape Town trips.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="16 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇿🇦 South Africa</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From R900/day (~$50)</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Table Mountain at 8am before the tablecloth cloud rolls in is one of the great urban views on Earth &mdash; the city below, two oceans stretching to the horizon, and the entire Cape Peninsula laid out south to Cape Point. By 10:30am the summit is socked in. Set one alarm. This guide tells you exactly when to set it for every single stop.
            </p>
          </blockquote>

          {/* ── WHAT CAPE TOWN ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Cape Town Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Cape Town sits at the southwestern tip of Africa where the Atlantic and Indian Oceans meet. Table Mountain &mdash; a 1,085-metre flat-topped massif &mdash; rises directly from the city centre, making it one of the most dramatically sited cities anywhere. The Cape Peninsula extends 60km south from the city to Cape Point, with Chapman&apos;s Peak drive, penguin colonies, and crashing Atlantic surf along the way.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The city has layers: the Malay Quarter of Bo-Kaap with its pastel houses and 300-year-old Cape Malay cuisine, the history of Robben Island and apartheid, world-class Winelands 45 minutes east in Stellenbosch and Franschhoek, and a food scene that rivals anywhere in the southern hemisphere. The Atlantic Seaboard (Camps Bay, Clifton, Sea Point) provides the glamour; the False Bay side (Muizenberg, Kalk Bay, Simon&apos;s Town) provides the charm.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Five days is the ideal duration. You get Table Mountain, the full Cape Peninsula circuit, a Winelands day, Robben Island, and enough time for sundowners at Camps Bay and fresh oysters in Kalk Bay. It is one of the best-value major destinations in the world for mid-range and luxury travellers due to the favourable Rand exchange rate.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="CPT" />
              <StatCard icon="🌡️" label="Best Season" value="Nov–Apr" />
              <StatCard icon="🏔️" label="Table Mountain" value="1,085m" />
              <StatCard icon="💰" label="Budget From" value="R900/day (~$50)" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Cape Town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Nov–Jan",
                  i: "☀️",
                  t: "Early Summer — Peak Season",
                  d: "25–32°C, long days, minimal rain. December and January are the busiest months — Robben Island ferries sell out months ahead, Camps Bay is packed, and accommodation prices peak. The weather is excellent and the days are long (sunset after 8pm). Book everything well in advance.",
                  b: "Best weather, highest prices",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Feb–Apr",
                  i: "🌅",
                  t: "Late Summer — Sweet Spot",
                  d: "22–30°C with warm days, cooling evenings, and significantly fewer tourists than December–January. February and March offer the best balance of weather, crowds and price. The wine harvest is in full swing in the Winelands. Cape Town locals consider March the best month of the year.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "May–Aug",
                  i: "🌧️",
                  t: "Winter — Cheapest",
                  d: "8–18°C with frequent rain and the notorious southeaster wind. Many coastal activities are weather-dependent. Accommodation drops 30–50%. Whale season begins in June (southern right whales in False Bay). The Winelands are quieter and atmospheric with green hillsides. Pack layers and rain gear.",
                  b: "Budget travellers, whale season",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🌸",
                  t: "Spring — Wildflowers",
                  d: "15–22°C with decreasing rain and warming days. The West Coast wildflower season (August–September) draws visitors to Namaqualand, a 3-hour drive north. Cape Town gardens and parks bloom. Prices are moderate and the city is waking up from winter. A good shoulder-season choice.",
                  b: "Good value, wildflowers",
                  c: "bg-teal-50 border-teal-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Cape Town</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Cape Town International Airport (CPT) is 20km from the city centre, roughly 25 minutes by car without traffic. <strong className="font-medium">Indian passport holders need an e-Visa (apply at evisa.dha.gov.za, R600 / ~$33, allow 3–4 weeks).</strong> Most Western passports get visa-free entry for up to 90 days.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "From India",
                  d: "No direct flights from India to Cape Town. Best connections via Dubai (Emirates, 4h + 9h), Doha (Qatar Airways, 4h + 10h), or Addis Ababa (Ethiopian Airlines, 5h + 6h). Total travel time: 14–18 hours with layover. Return fares from Delhi or Mumbai: INR 35,000–65,000 if booked 2–3 months ahead. Ethiopian Airlines is usually the cheapest option.",
                  b: "Via Middle East or Addis",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "From Europe & the Americas",
                  d: "Direct flights from London (British Airways, 11h), Amsterdam (KLM, 11.5h), Frankfurt (Lufthansa, 12h). From the US, connections via London, Dubai, or Johannesburg. Domestic flights from Johannesburg (2h, R1,200–3,000 / $66–165 on FlySafair, Kulula, or SAA) are frequent and cheap if booked ahead.",
                  b: "Direct from London",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "MyCiTi Bus from the Airport",
                  d: "The MyCiTi bus (Route A01) runs from the airport to the Civic Centre station in the city centre. R100 / ~$5.50, 30–40 minutes. You need a myconnect card (R35 / ~$1.90, available at the airport station) loaded with credit. Buses run every 20 minutes during the day. The cheapest airport transfer option, but not practical with heavy luggage.",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚗",
                  t: "Uber from the Airport",
                  d: "Uber is the standard airport transfer in Cape Town. R150–250 / $8–14 to the City Bowl, Sea Point, or Green Point. 20–30 minutes without traffic. Pick-up is from the designated rideshare area outside Arrivals. Metered taxis are available but 30–50% more expensive. Do not use unofficial taxis or touts inside the terminal.",
                  b: "Recommended",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Cape Town Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers mid-range spending (R1,200–2,500/day, ~$66–138). Each day card is expandable. The route covers Table Mountain, Cape Peninsula, Winelands, Robben Island and the coastal villages. Budget and luxury alternatives noted in cost estimates.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Table Mountain, Bo-Kaap & V&A Waterfront"
                cost="R1,000–1,800 / $55–100 (excl. accommodation)"
                items={[
                  "Arrive at Cape Town International Airport (CPT). Uber to the City Bowl or Green Point (R150–250 / $8–14, 25 minutes). Check in to your accommodation and drop bags.",
                  "Morning: Table Mountain cable car (R440 return, ~$24). Buy tickets online at table-mountain.net and arrive for the first cable car at 8am before the famous tablecloth cloud builds. The summit plateau has walking trails, fynbos (the unique Cape Floral Kingdom found nowhere else on Earth), and panoramic views over both oceans. Bring a windbreaker regardless of forecast.",
                  "Alternative: Hike Platteklip Gorge (free, 2 hours up, well-marked steep path). Take the cable car down using your return ticket. The most popular hiking route on Table Mountain with extraordinary summit views.",
                  "Afternoon: Bo-Kaap neighbourhood (free to walk). The pastel-painted houses of the former Cape Malay Quarter on Wale Street and Rose Street are Cape Town's most photographed streetscapes. The community has been here since the 17th century — descendants of enslaved workers brought from Southeast Asia by the Dutch East India Company.",
                  "V&A Waterfront (free to walk): harbour seals on the docks, views of Table Mountain from the water, the Two Oceans Aquarium (R220 / ~$12) if interested, and the Nobel Square sculpture garden commemorating South Africa's four Nobel Peace Prize winners.",
                  "Sunset: Signal Hill viewpoint (free). Faces directly west over the Atlantic Ocean — the best free sunset view in Cape Town. Drive or Uber to the parking area at the top.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Cape Peninsula: Penguins, Cape Point & Chapman's Peak"
                cost="R1,200–2,200 / $66–121 (incl. car rental, entries, fuel)"
                items={[
                  "Rent a car for the day (R350–600 / $19–33 for a compact). The Cape Peninsula circuit is the most spectacular drive in South Africa and cannot be done by public transport.",
                  "8:30am: Drive south via the M3 to Simon's Town. Boulders Beach penguin colony (R220 / ~$12). African penguins nesting on a sheltered beach between granite boulders — arrive before 9am for the best penguin-to-tourist ratio. Over 3,000 penguins in the colony; they come within 2 metres and are entirely unafraid.",
                  "Continue south to Cape Point (Table Mountain National Park entry R404 / ~$22). The most southwesterly point of the African continent where the Atlantic and Indian Ocean currents visibly meet. The old lighthouse at the top (funicular R92 extra, or a 20-minute walk) has 360-degree ocean views.",
                  "Lunch: Fresh fish in Simon's Town or Hout Bay — snoek, hake, and calamari at R80–150 / $4.50–8.50 per dish.",
                  "Afternoon: Chapman's Peak Drive (R50 / $2.75 toll) — 9km of cliff-hugging coastal highway above the Atlantic, the most spectacular road in South Africa. Stop at Hout Bay fishing village and Noordhoek Beach.",
                  "Return via the Atlantic Seaboard — drive past Camps Bay, Clifton's four cove beaches, and the Sea Point Promenade for the final stretch back into the city.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Winelands: Stellenbosch & Franschhoek"
                cost="R1,400–2,800 / $77–154 (incl. transport, tastings, lunch)"
                items={[
                  "Drive 45 minutes east on the N2 to Stellenbosch, or hire a private driver (R800–1,200 / $44–66 for the day) so nobody has to be the designated driver — essential for a proper wine-tasting experience.",
                  "Stellenbosch: park in the town centre and walk. Oak-lined Dorp Street has 30+ wine estates within walking distance offering tastings (R80–250 / $4.50–14 per session of 4–6 wines). The Stellenbosch Village Museum (R80 / $4.40) covers four centuries of Cape domestic architecture in four period houses.",
                  "Franschhoek (30 min from Stellenbosch): a single main street lined with world-class restaurants and wine estates. The Franschhoek Wine Tram (R395–650 / $22–35) is a hop-on hop-off tram connecting 8 wine estates on a circuit — the best value wine tour in the Cape.",
                  "Lunch in Franschhoek: La Petite Ferme (R550–800 / $30–44 with mountain views), Grande Provence (R700–1,100 / $38–60), or a picnic on a wine estate lawn with a cellar-door bottle.",
                  "Drive back to Cape Town via the R44 coastal route — spectacular mountain scenery. Back in the city by 6:30pm.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Robben Island, Long Street & Kirstenbosch"
                cost="R1,200–2,000 / $66–110"
                items={[
                  "8:30am: V&A Waterfront ferry terminal. Robben Island tour (R750 / ~$41, includes return ferry + guided tour, 3.5 hours total). Tours are led by former political prisoners who were incarcerated there. Nelson Mandela's cell is preserved exactly as it was during his 18 years on the island.",
                  "CRITICAL BOOKING NOTE: Robben Island ferries sell out weeks and sometimes months in advance, especially December–April. Book online at robben-island.org.za the moment your trip is confirmed. Walk-up tickets are almost never available in peak season.",
                  "Afternoon: Company's Garden (free) — the original VOC vegetable garden established in 1652, now a public park with the South African Museum (R60 / $3.30) and an excellent San rock art collection. Long Street for Victorian cast-iron balconied buildings, bookshops, and the Long Street Baths (R60 for a swim).",
                  "Late afternoon: Kirstenbosch National Botanical Garden (R220 / ~$12). Set against the eastern slopes of Table Mountain, it is one of the great botanical gardens of the world. The Boomslang tree canopy walkway offers elevated views across the gardens to the mountain. Open until sunset.",
                  "Evening: Dinner on Bree Street — Cape Town's best restaurant street. Publik Wine Bar for natural wines and charcuterie (R280–450 / $15–25), or Bocca for wood-fired pizza with Cape wines (R220–360 / $12–20).",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Kalk Bay, Muizenberg & Camps Bay Farewell"
                cost="R800–1,500 / $44–83"
                items={[
                  "Morning: Drive south to Kalk Bay fishing village — the most charming village on the False Bay coast. The harbour has working fishing boats unloading fresh snoek every morning (best 7–9am). Fresh grilled fish and oysters on the harbour wall, R40–80.",
                  "Muizenberg Beach (5 minutes from Kalk Bay): famous for its colourful Victorian bathing boxes and gentle waves — the best beginner surfing beach in South Africa. Board and wetsuit rental R150 / $8.50, beginner lesson R350–500 / $19–27.",
                  "Lunch at Olympia Cafe in Kalk Bay — a Cape Town institution with a fish-forward menu (R120–180 / $6.50–10, expect a queue — worth it).",
                  "Afternoon: Return via the coastal road. Stop at St James for the tidal pool and colourful bathing boxes (free swimming in a sheltered cove).",
                  "Sunset: Camps Bay beachfront — the most glamorous beach strip in Cape Town facing due west over the Atlantic. Sundowners at The Bungalow or Chinchilla (R80–120 / $4.50–6.50 per drink) with the Twelve Apostles mountain range as your backdrop.",
                  "Farewell dinner: Sea Point Promenade restaurants or a final braai (South African barbecue) at the V&A Waterfront. Uber to CPT Airport for departure (R150–250 / $8–14, 25 minutes).",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Cape Town" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏔️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential landmarks in order of priority. Entry fees are as of early 2026. All prices in South African Rand (ZAR) with USD equivalents at ~R18 = $1.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Table Mountain",
                  e: "R440 return cable car (~$24)",
                  d: "Cape Town's 1,085-metre flat-topped mountain with cable car access to the summit plateau. Walking trails, unique fynbos flora, and panoramic views over the city and both oceans. The cable car rotates 360 degrees during the 5-minute ascent. Arrive at 8am before the tablecloth cloud builds. One of the New7Wonders of Nature.",
                  t: "Must see · Morning · 2–3 hrs",
                },
                {
                  n: "Boulders Beach Penguin Colony",
                  e: "R220 (~$12)",
                  d: "Over 3,000 African penguins nesting on a sheltered beach between granite boulders in Simon's Town. The penguins come within 2 metres and are completely unafraid. Most active in early morning before the heat drives them into shade. The colony is part of Table Mountain National Park.",
                  t: "Must see · Morning · 1.5 hrs",
                },
                {
                  n: "Cape Point",
                  e: "R404 (~$22)",
                  d: "The most southwesterly tip of the African continent where the Atlantic and Indian Ocean currents visibly meet. The old lighthouse at the summit has 360-degree ocean views. Reach it by funicular (R92 extra) or a 20-minute walk. Part of Table Mountain National Park with baboons, ostriches, and bontebok.",
                  t: "Must see · Half day · Combine with penguins",
                },
                {
                  n: "Robben Island",
                  e: "R750 (~$41)",
                  d: "The island where Nelson Mandela was imprisoned for 18 of his 27 years. Tours are led by former political prisoners. The cell is preserved exactly as it was. An extraordinary and sobering experience. Book months ahead at robben-island.org.za — ferries sell out in peak season.",
                  t: "Must see · Book ahead · 3.5 hrs",
                },
                {
                  n: "Kirstenbosch Botanical Garden",
                  e: "R220 (~$12)",
                  d: "One of the great botanical gardens of the world, set against Table Mountain's eastern slopes. The Boomslang tree canopy walkway, protea gardens, and fynbos collection. Summer sunset concerts on Sunday evenings. Open until sunset year-round.",
                  t: "Must see · Afternoon · 2–3 hrs",
                },
                {
                  n: "Chapman's Peak Drive",
                  e: "R50 toll (~$2.75)",
                  d: "Nine kilometres of cliff-hugging coastal road between Hout Bay and Noordhoek — the most spectacular drive in South Africa. Multiple viewpoints above the Atlantic. Best combined with the Cape Peninsula circuit. Closed occasionally in wet weather due to rockfall risk.",
                  t: "Must drive · 30 min · Combine with Peninsula",
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
            title="Cape Town — Mountains, Ocean &amp; Winelands"
            subtitle="Where Table Mountain meets two oceans and African penguins waddle on Atlantic beaches."
            spots={[
              {
                name: "Table Mountain Summit",
                query: "table mountain cape town summit cable car city view sunset",
                desc: "The iconic flat-topped mountain rising 1,085 metres from Cape Town's city centre — views over both oceans from the summit plateau.",
              },
              {
                name: "Boulders Beach Penguins",
                query: "boulders beach african penguins simons town cape town granite",
                desc: "Over 3,000 African penguins nesting between granite boulders on a sheltered Simon's Town beach.",
              },
              {
                name: "Chapman's Peak Drive",
                query: "chapmans peak drive cape town coastal road cliff atlantic ocean",
                desc: "Nine kilometres of cliff-hugging highway above the Atlantic — the most spectacular coastal drive in South Africa.",
              },
              {
                name: "Bo-Kaap Colourful Houses",
                query: "bo kaap cape town colourful pastel houses street cape malay",
                desc: "The pastel-painted houses of Cape Town's historic Cape Malay Quarter — a 300-year-old community on the slopes of Signal Hill.",
              },
              {
                name: "Franschhoek Winelands",
                query: "franschhoek winelands cape town vineyards mountains south africa",
                desc: "French Huguenot wine estates framed by dramatic mountains — the most photogenic wine region in the southern hemisphere.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Cape Town is exceptional value for mid-range and luxury travellers due to the favourable Rand exchange rate. Budget travellers can manage on R900–1,500/day ($50–83), mid-range on R2,700–5,000/day ($150–278), and luxury on R9,000+/day ($500+). All prices in ZAR and USD at ~R18 = $1.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category (5 days)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (5N)", "R1,400–3,000 ($78–167)", "R7,000–17,500 ($389–972)", "R40,000–150,000 ($2,222–8,333)"],
                    ["🍽 Food & Drinks", "R400–1,000 ($22–56)", "R1,500–3,500 ($83–194)", "R4,000–15,000 ($222–833)"],
                    ["🚗 Transport", "R500–1,750 ($28–97)", "R1,000–3,000 ($56–167)", "R2,500–10,000 ($139–556)"],
                    ["🎯 Activities & Entries", "R1,100–3,750 ($61–208)", "R2,000–6,000 ($111–333)", "R4,000–25,000 ($222–1,389)"],
                    ["🍷 Wine Tastings", "R160–500 ($9–28)", "R400–1,250 ($22–69)", "R800–3,000 ($44–167)"],
                    ["TOTAL (per person)", "R4,500–7,500 ($250–417)", "R13,500–25,000 ($750–1,389)", "R45,000–150,000+ ($2,500–8,333+)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (R900–1,500/day / $50–83)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostels and guesthouses (R280–600/night), eat at local spots and markets, MyCiTi bus for city transport, Uber for airport. Self-drive the Peninsula with a budget rental. Cape Town is manageable on a budget but a car is almost essential for the best experiences.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">✨ Mid-Range (R2,700–5,000/day / $150–278)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">Boutique hotels and quality guesthouses (R1,400–3,500/night), restaurant dining, private Winelands driver, all major attractions. The sweet spot — Cape Town's mid-range delivers a luxury-feeling experience due to the exchange rate.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (R9,000+/day / $500+)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Ellerman House, Twelve Apostles or The Silo Hotel (R8,000–30,000/night). Private helicopter to Franschhoek, Test Kitchen tasting menus, private peninsula tours. World-class luxury at a fraction of European prices.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Cape Town</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Location matters in Cape Town. City Bowl for walkability and restaurants. Sea Point for the promenade and proximity to everything. Camps Bay for beaches and glamour. Woodstock for art galleries and emerging food scene. Green Point for V&A Waterfront access and value.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "The Gorgeous George",
                  type: "Boutique hotel · City Bowl",
                  price: "From R1,400/night (~$78)",
                  badge: "Mid-range pick",
                  desc: "Stylish boutique hotel on St George's Mall in the heart of the City Bowl. Walking distance to Bree Street restaurants, Company's Garden, and Bo-Kaap. Rooftop bar with Table Mountain views. The best-value mid-range option in the city centre with excellent design and service.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "POD Camps Bay",
                  type: "Boutique hotel · Camps Bay",
                  price: "From R3,000/night (~$167)",
                  badge: "Best views",
                  desc: "Minimalist boutique hotel with floor-to-ceiling ocean views in Camps Bay. Every room faces the Atlantic with the Twelve Apostles mountain range behind you. Walk to the beach and sundowner bars. The pool deck at sunset is one of the most spectacular hotel views in Cape Town.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Once in Cape Town",
                  type: "Hostel & guesthouse · Green Point",
                  price: "From R350/night (~$19)",
                  badge: "Best budget",
                  desc: "Highly rated hostel in Green Point with dorms and private rooms. Pool, communal kitchen, and a social atmosphere. Walking distance to the V&A Waterfront and Sea Point Promenade. The staff are exceptionally helpful with tour bookings and transport advice.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "The Old Mac Daddy",
                  type: "Boutique · Woodstock",
                  price: "From R1,800/night (~$100)",
                  badge: "Best neighbourhood",
                  desc: "Woodstock is Cape Town's creative district — street art, craft breweries, the Neighbourgoods Market on Saturdays, and the city's most exciting emerging restaurants. Staying here puts you in the middle of Cape Town's cultural pulse, a short Uber from the Waterfront and City Bowl.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Sea Point Apartments",
                  type: "Self-catering · Sea Point",
                  price: "From R800/night (~$44)",
                  badge: "Best value location",
                  desc: "The Sea Point Promenade area has excellent self-catering apartments on Airbnb and Booking.com. Walk to restaurants, the promenade for morning runs, and the MyCiTi bus route. A 5-minute Uber to the V&A Waterfront. Best balance of location, price, and convenience for longer stays.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Cape Town</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Cape Town&apos;s food scene draws from Cape Malay, Afrikaans braai culture, Indian influences, and a modern farm-to-table movement. The essential experiences: bobotie (spiced mince baked with egg custard), braai (South African barbecue), Cape Malay curry, biltong, and fresh-off-the-boat seafood from Kalk Bay and Hout Bay.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "The Test Kitchen",
                  t: "World-class fine dining · Woodstock",
                  d: "Consistently ranked among the World's 50 Best Restaurants. Chef Luke Dale-Roberts' tasting menu is a journey through contemporary South African cuisine. R1,800–2,500 / $100–138 for the full tasting experience. Book 3–4 months ahead — this is the hardest reservation in Africa. Worth every effort.",
                  b: "Must book",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Neighbourgoods Market",
                  t: "Saturday market · Woodstock",
                  d: "The Old Biscuit Mill hosts Cape Town's best food market every Saturday morning. Local producers, artisan bread, craft coffee, fresh oysters, wood-fired pizza, and Cape Malay samosas. R50–150 / $2.75–8.50 per dish. Arrive before 10am for the best atmosphere and shortest queues. The essential Cape Town Saturday morning experience.",
                  b: "Must visit Saturday",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Cape Malay Cooking in Bo-Kaap",
                  t: "Home cooking experience · Bo-Kaap",
                  d: "Book a Cape Malay cooking class in a local home (R600–900 / $33–50, 2.5 hours). Learn to make bobotie, koeksisters (syrup-drenched doughnuts), and masala chai with a family that has been cooking this cuisine for generations. The Bo-Kaap community has preserved these recipes through 300 years of history. Several operators run classes — Cooking with Love and Bo-Kaap Cooking Tour are both excellent.",
                  b: "Cultural experience",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Olympia Cafe",
                  t: "Fish-forward cafe · Kalk Bay",
                  d: "A Kalk Bay institution serving the freshest fish on the False Bay coast. The menu changes daily based on what the fishing boats brought in that morning. R120–180 / $6.50–10 for a main. No reservations — expect a queue at lunch, worth the wait. The atmosphere, the harbour views, and the quality of the cooking make this a non-negotiable Cape Town stop.",
                  b: "Cape Town institution",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Braai at Mzansi Restaurant",
                  t: "Traditional braai · Various locations",
                  d: "Braai is South Africa's sacred social ritual — wood-fire grilled meat, boerewors (coiled sausage), lamb chops, and sosaties (marinated kebabs). Mzansi on Long Street serves excellent traditional braai in a restaurant setting (R150–280 / $8.50–15.50). For a local experience, ask your guesthouse about neighbourhood braai events.",
                  b: "Iconic SA experience",
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
            destination="Cape Town South Africa"
            hotels={[
              {
                name: "Once in Cape Town",
                type: "Hostel & Guesthouse · Green Point",
                price: "From R350/night (~$19)",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/za/once-in-cape-town.html?aid=2820480",
              },
              {
                name: "The Gorgeous George",
                type: "Boutique Hotel · City Bowl",
                price: "From R1,400/night (~$78)",
                rating: "5",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/za/the-gorgeous-george.html?aid=2820480",
              },
              {
                name: "POD Camps Bay",
                type: "Boutique Hotel · Camps Bay",
                price: "From R3,000/night (~$167)",
                rating: "5",
                badge: "Best views",
                url: "https://www.booking.com/hotel/za/pod-camps-bay.html?aid=2820480",
              },
              {
                name: "Ellerman House",
                type: "Luxury Boutique · Bantry Bay",
                price: "From R15,000/night (~$833)",
                rating: "5",
                badge: "Luxury pick",
                url: "https://www.booking.com/hotel/za/ellerman-house.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Cape Peninsula Full-Day Tour",
                duration: "Full day",
                price: "From R450/person (~$25)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=cape+peninsula+tour&partner_id=PSZA5UI",
              },
              {
                name: "Table Mountain Cable Car + City Tour",
                duration: "Half day",
                price: "From R600/person (~$33)",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=table+mountain+cable+car+tour&partner_id=PSZA5UI",
              },
              {
                name: "Stellenbosch & Franschhoek Wine Tour",
                duration: "Full day",
                price: "From R700/person (~$39)",
                badge: "Wine lovers",
                url: "https://www.getyourguide.com/s/?q=stellenbosch+franschhoek+wine+tour&partner_id=PSZA5UI",
              },
              {
                name: "Robben Island Ferry & Tour",
                duration: "3.5 hours",
                price: "From R750/person (~$41)",
                url: "https://www.getyourguide.com/s/?q=robben+island+tour+cape+town&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🎫",
                  title: "Not Booking Robben Island Months Ahead",
                  desc: "Robben Island ferries sell out weeks and often months ahead in peak season (October–April). Walk-up tickets are virtually impossible during summer. Book the moment your Cape Town dates are confirmed at robben-island.org.za. There is no alternative access — the ferry is the only way.",
                },
                {
                  icon: "🍷",
                  title: "Skipping the Winelands",
                  desc: "Many short-stay visitors skip Stellenbosch and Franschhoek assuming it takes a full day. It doesn't — Stellenbosch is 45 minutes from the city, Franschhoek 75 minutes. A self-drive half-day with 2 estate tastings is completely achievable and the scenery is unlike anything else in Africa.",
                },
                {
                  icon: "🚶",
                  title: "Walking at Night in Unfamiliar Areas",
                  desc: "Cape Town has a genuine crime problem in certain areas. After dark, stick to: V&A Waterfront, Green Point, Sea Point Promenade, Camps Bay, City Bowl restaurant strips. Uber everywhere at night — R30–60 / $1.65–3.30 for most trips. Leave valuables at the hotel and minimise phone use in public at night.",
                },
                {
                  icon: "🚗",
                  title: "Visiting Without a Car",
                  desc: "Cape Town's public transport doesn't reach Cape Point, Boulders Beach, the Winelands, or Chapman's Peak. Without a rental car, you depend on expensive private tours for every activity outside the City Bowl. A hire car from R350/day transforms the trip — and driving the Cape Peninsula road is itself one of the great drives on Earth.",
                },
                {
                  icon: "☁️",
                  title: "Going Up Table Mountain After 10am",
                  desc: "Table Mountain generates its own weather — the tablecloth cloud rolls over the summit most days by mid-morning. The cable car opens at 8am. Taking the first or second car almost always guarantees clear conditions. By 10:30am the summit is frequently socked in and the cable car may close.",
                },
                {
                  icon: "🏊",
                  title: "Expecting Warm Water on the Atlantic Side",
                  desc: "Camps Bay and Clifton are stunning but the Atlantic water is 15–18 degrees C even in summer due to the Benguela Current. For actual swimming, head to the False Bay side — Muizenberg and Kalk Bay have water at 20–24 degrees C. The Atlantic side is for scenery and sundowners, not swimming.",
                },
              ].map((m) => (
                <TipCard
                  key={m.title}
                  icon={m.icon}
                  title={m.title}
                  desc={m.desc}
                  color="bg-white border-parchment-2"
                />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Cape Town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌄",
                  title: "Table Mountain at 8am — Before the Cloud",
                  desc: "The tablecloth cloud appears most days by mid-morning. Arrive for the first cable car at 8am for guaranteed clear summit conditions. Book the earliest slot online and check the Table Mountain cable car Twitter/X for live operating status updates before you leave your hotel.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🐧",
                  title: "Boulders Beach — Arrive Before 9am",
                  desc: "The penguin colony is most active in early morning when birds are feeding and socialising. After 10am many move into the fynbos shade and are less visible. Arrive at 8am for the best penguin-to-tourist ratio and most active colony behaviour.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏘️",
                  title: "Franschhoek Over Stellenbosch for Charm",
                  desc: "Both Winelands towns are beautiful but Franschhoek wins for charm. A single main street lined with world-class restaurants, a French Huguenot heritage, and mountain-framing that makes it one of the most photogenic towns in South Africa. If you only have time for one Winelands stop, make it Franschhoek.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🌅",
                  title: "Camps Bay Sundowner — A Cape Town Tradition",
                  desc: "Every evening, locals and visitors gather on the Camps Bay beachfront as the sun drops into the Atlantic. Arrive around 6pm, order a drink at The Bungalow or Chinchilla, or simply sit on the beach. The Twelve Apostles mountain range reflected in the Atlantic at sunset costs nothing from the beach.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "📱",
                  title: "Download EskomSePush App",
                  desc: "Load shedding (rolling electricity blackouts) remains a reality in South Africa. The EskomSePush app shows scheduled power cuts for your area. Hotels have generators, but traffic lights go out during shedding causing slow intersections. Plan driving accordingly.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "💱",
                  title: "The Rand is Your Friend",
                  desc: "At ~R18 to $1, Cape Town delivers extraordinary value. A world-class wine tasting costs $5–14. Fine dining at Africa's best restaurants runs $30–60. A beachfront sundowner is $4–7. Mid-range travellers get luxury-level experiences at mid-range prices. Carry some cash for markets and tips.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Cape Town" />

          {/* Combine With */}
          <CombineWith currentSlug="cape-town-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Cape Town safe for tourists?",
                  a: "Cape Town is safe for tourists who exercise standard urban precautions. The main tourist areas — V&A Waterfront, Green Point, Sea Point, Camps Bay, and the City Bowl restaurant strips — are generally very safe during the day and evening. Don't walk between restaurants at night in unfamiliar areas — Uber is cheap (R30–60 / $1.65–3.30 for most trips) and eliminates 95% of risk.",
                },
                {
                  q: "When is the best time to visit Cape Town?",
                  a: "November to April (southern hemisphere summer). February–March is the sweet spot: warm weather, fewer tourists than December–January, and lower prices. Avoid July–August if possible — winter brings cold temperatures (8–15 degrees C), persistent rain, and wind. Whale season (June–November) is the exception worth a winter visit.",
                },
                {
                  q: "What is load shedding and will it affect my trip?",
                  a: "Load shedding is South Africa's rolling electricity blackouts — scheduled power cuts to manage grid capacity. Hotels and restaurants have backup generators so tourists rarely notice. Download the EskomSePush app for schedules. The main impact is traffic lights going out during shedding, causing slow intersections.",
                },
                {
                  q: "Does Cape Town have two different oceans?",
                  a: "Yes. The Atlantic side (Clifton, Camps Bay, Sea Point) has stunning scenery but cold water (15–18 degrees C even in summer) from the Benguela Current. The Indian Ocean side (Muizenberg, Kalk Bay, False Bay) is significantly warmer (20–24 degrees C) and better for swimming and surfing.",
                },
                {
                  q: "How do I get a South African e-Visa as an Indian passport holder?",
                  a: "Apply at evisa.dha.gov.za (the official Department of Home Affairs portal). The process is entirely online: upload documents, pay R600 (~$33), and allow at least 3 weeks for processing (4–6 weeks is safer). You receive an approval email to present at CPT Airport immigration with your passport.",
                },
                {
                  q: "Can I combine Cape Town with a safari?",
                  a: "Yes, but Kruger National Park is 1,400km away — a 2-hour flight to Johannesburg or Nelspruit plus a 1–2 hour drive. Plan at least 10–12 days total: 5 days Cape Town plus 4–5 days in Kruger. The Cape Town + Kruger combination is one of South Africa's great two-centre trips. Alternatively, Aquila Private Game Reserve is 2 hours from Cape Town for a 1–2 day Big Five experience.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Cape Town trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-cape-town", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/cape-town-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-cape-town", label: "How to get there", icon: "✈️" },
                { href: "/blog/cape-town-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="cape-town-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Africa Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kenya Safari &mdash; 7 Day Guide", href: "/blog/kenya-safari-7-days" },
                { label: "Tanzania &amp; Zanzibar &mdash; 7 Day Guide", href: "/blog/tanzania-zanzibar-7-days" },
                { label: "Morocco &mdash; 7 Day Itinerary", href: "/blog/morocco-7-days" },
                { label: "Rio de Janeiro &mdash; 5 Day Guide", href: "/blog/rio-de-janeiro-5-days" },
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
