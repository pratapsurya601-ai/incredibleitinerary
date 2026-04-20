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
const NAIROBI_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Nairobi Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "4-Day Itinerary" },
  { id: "attractions", emoji: "🦁",  label: "Top Attractions" },
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
          href: `mailto:?subject=Nairobi 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Nairobi in 4 Days — lions, giraffes and the only capital city national park on earth&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/nairobi-4-days"
        imageUrl="https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1200&q=80"
        description="Nairobi in 4 Days: Giraffe Centre, David Sheldrick Elephant Orphanage, Nairobi National Park lions with skyline, Karen Blixen Museum, and Carnivore restaurant — complete travel guide with budget breakdown."
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
export default function NairobiClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={NAIROBI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Nairobi" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="nairobi kenya city skyline national park lions wildlife safari"
            fallback="https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1600&q=80"
            alt="Nairobi National Park with lions in the foreground and the city skyline behind"
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
              <span className="text-white/70">Nairobi 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Africa
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Nairobi in 4 Days:
                <em className="italic text-amber-300"> Lions, Giraffes &amp; the World&apos;s Wildest Capital</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Hand-feed Rothschild giraffes, watch baby elephants play in red-mud pools, see lions hunt with skyscrapers behind them, and eat game meat at Carnivore. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="13 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇰🇪 Kenya, East Africa</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $45/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Nairobi is the only capital city on earth where you can watch lions hunt with skyscrapers in the background. Four days unlocks everything that makes it extraordinary: hand-feeding endangered Rothschild giraffes at dawn, watching baby elephants splash in red-mud pools at the David Sheldrick orphanage, and eating extraordinary nyama choma at Carnivore while haggling for Maasai blankets at the weekend market.
            </p>
          </blockquote>

          {/* ── WHAT NAIROBI ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Nairobi Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Nairobi sits at 1,795 metres on the edge of the Athi Plains, a highland plateau that makes it one of the most temperate capitals in Africa despite being just 1.5 degrees south of the equator. Founded in 1899 as a railway depot on the Uganda Railway, it grew into East Africa&apos;s largest city with over 4.5 million people. The name comes from the Maasai phrase &quot;Enkare Nairobi&quot; meaning &quot;cool water,&quot; referring to the Nairobi River that runs through the city centre.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What makes Nairobi genuinely unique among world capitals is Nairobi National Park ($43 / KES 2,000 entry) — 117 square kilometres of open savanna with free-roaming lions, black rhinos, cheetahs, leopards, buffalo, and over 400 bird species, all within sight of the downtown glass towers. No other capital city on earth offers this. The park is just 7 kilometres from the Central Business District.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Beyond the park, Nairobi has the Giraffe Centre ($15 entry) where you hand-feed endangered Rothschild giraffes from an elevated platform at eye level, the David Sheldrick Wildlife Trust elephant orphanage ($50 to foster a baby elephant), the Karen Blixen Museum (KES 200) in the colonial farmhouse that inspired Out of Africa, and a food scene that ranges from KES 200 street-stall nyama choma to the legendary Carnivore restaurant&apos;s revolving game-meat spit. The Kenyan AA coffee at Java House alone is worth the flight.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="NBO (JKIA)" />
              <StatCard icon="🌡️" label="Best Season" value="Jun–Oct" />
              <StatCard icon="🦁" label="Big Five" value="In the city" />
              <StatCard icon="💰" label="Budget From" value="$45/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Nairobi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Jun–Oct",
                  i: "☀️",
                  t: "Dry Season — Best for Wildlife",
                  d: "20–25°C daytime, cool nights. This is the ideal window for Nairobi National Park — dry grass means animals gather at water points and visibility is excellent. July to October overlaps with the Great Wildebeest Migration in the Maasai Mara if you extend your trip. The busiest tourist season but for good reason.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jan–Feb",
                  i: "🌅",
                  t: "Short Dry Season — Excellent",
                  d: "22–27°C, sunny and warm with little rain. Fewer tourists than June–October, excellent wildlife viewing in Nairobi National Park, and lower accommodation prices. Many experienced Kenya travellers consider this the sweet spot — great weather without the peak-season crowds.",
                  b: "Best value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Mar–May",
                  i: "🌧️",
                  t: "Long Rains — Avoid if Possible",
                  d: "Heavy rains, especially April. Roads to game parks flood, Nairobi National Park has fewer visible wildlife, and some safari lodges close. Accommodation is cheapest but the trade-off in experience is significant. The city itself is functional but outdoor activities are heavily impacted.",
                  b: "Not recommended",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Dec",
                  i: "🌦️",
                  t: "Short Rains — Mixed",
                  d: "Brief afternoon showers, green and lush landscapes. The rain is usually predictable — mornings are clear for game drives and the showers hit between 3pm and 6pm. Prices are moderate, and the park is beautifully green. Good option if you don&apos;t mind occasional wet afternoons.",
                  b: "Viable with flexibility",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Nairobi</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Jomo Kenyatta International Airport (NBO) is Nairobi&apos;s main gateway, located 15km southeast of the city centre. A taxi from JKIA to the CBD costs KES 2,000–3,000 ($15–23). Uber and Bolt are available at the airport and significantly cheaper than metered taxis.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Direct flights from major hubs",
                  d: "NBO has direct connections from London (8.5 hrs), Amsterdam (8 hrs), Dubai (5 hrs), Mumbai (5.5 hrs), Addis Ababa (2 hrs), Johannesburg (4 hrs), and most major African cities. Kenya Airways, British Airways, KLM, Emirates, and Ethiopian Airlines all serve NBO. Book early for July–October peak season.",
                  b: "Main gateway",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚕",
                  t: "Airport to city centre",
                  d: "Taxi from JKIA: KES 2,000–3,000 ($15–23) to CBD or Westlands. Uber/Bolt: KES 800–1,500 ($6–12) depending on traffic and surge. The Nairobi Expressway (opened 2022) cuts travel time to 20 minutes outside rush hour. Allow 60–90 minutes during morning or evening rush.",
                  b: "Use ride apps",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🛫",
                  t: "Wilson Airport for domestic & safari flights",
                  d: "Wilson Airport (WIL) is Nairobi&apos;s second airport, used for light aircraft flights to the Maasai Mara, Amboseli, Lamu, and Mombasa. SafariLink and AirKenya operate daily flights. Wilson is just 6km from the CBD — a 15-minute taxi ride. Book Mara flights at least 2 weeks ahead in peak season.",
                  b: "Safari connections",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "Overland from Tanzania, Uganda, or Ethiopia",
                  d: "Cross-border buses connect Nairobi to Arusha/Dar es Salaam (Tanzania, 8–14 hrs), Kampala (Uganda, 12 hrs), and Addis Ababa (Ethiopia, 2 days via Moyale). Modern Coastline, Riverside Shuttle, and Easy Coach are reliable operators. The Nairobi–Arusha route is popular for combining Kenya and Tanzania safaris.",
                  b: "Budget option",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Nairobi Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary covers Nairobi&apos;s highlights at a mid-range pace — adjust timing for budget or luxury. Early mornings are best for wildlife; afternoons suit museums and markets.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Giraffe Centre · David Sheldrick Elephant Orphanage · Langata"
                cost="$50–80 (two attractions, food, transport)"
                items={[
                  "08:30 — Uber or Bolt from your hotel to the Giraffe Centre in Langata ($5–7, 30 minutes from Westlands). The centre opens at 9am — arrive early before the tour-bus crowds. The elevated feeding platform puts you at eye level with endangered Rothschild giraffes. Entry: $15 (KES 1,500 for residents). The giraffes are most active and hungry in the cool morning hours.",
                  "10:30 — Walk or take a boda-boda (KES 100) to the David Sheldrick Wildlife Trust Elephant Orphanage, 1.5km from the Giraffe Centre. Public visiting hours are strictly 11am to 12pm daily — do not arrive late. Entry: $15. Watch baby elephants play in red-earth mud pools and be bottle-fed by their keepers. You can adopt an elephant for $50/year through sheldrickwildlifetrust.org — one of the most meaningful souvenirs from Kenya.",
                  "12:30 — Lunch at The Talisman restaurant in the Karen neighbourhood: Kenyan fusion cuisine in a colonial-era bungalow garden with mains at KES 1,800–2,500 ($14–19). One of the best lunch settings in Nairobi. Budget alternative: a local jua kali (open-air) canteen in Langata for ugali, sukuma wiki, and beans at KES 200 ($1.50).",
                  "15:00 — Visit the Kazuri Beads factory in Karen, where single-mother artisans make fair-trade ceramic beads by hand. Free factory tour, shop on-site. The beads make excellent gifts and directly support local women&apos;s livelihoods.",
                  "17:00 — Return to your hotel. Evening walk to Nairobi Java House on Mama Ngina Street for proper Kenyan AA single-origin Arabica coffee and a mandazi (KES 400). Java House is to Kenya what Starbucks is to the US, but with genuinely world-class single-origin beans grown in the Nyeri highlands.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Nairobi National Park — Lions with the City Skyline"
                cost="$60–120 (park entry, transport, food)"
                items={[
                  "06:00 — Depart for Nairobi National Park main gate. The park opens at 6am and early morning offers the best wildlife sightings before the heat haze builds. Entry: $43 per adult (KES 2,000 for East African residents). This is the most affordable national park in the world that guarantees big-game wildlife within 10km of a capital city.",
                  "06:30 — The park is 117 square kilometres of open savanna with free-roaming lions, black rhinos, cheetahs, leopards, buffalo, zebra, wildebeest, and over 400 bird species. Nairobi NP has the highest density of black rhinos in Africa. The misty skyline backdrop for wildlife photos is unique on earth — available nowhere else.",
                  "09:00 — The flat savanna grassland near the Mbagathi River is the best big-cat hunting ground in the morning hours. Lions and cheetahs are most active between 6am and 9am before the heat sets in. A private game drive vehicle with licensed KWS guide costs $50 on top of the entry fee.",
                  "11:00 — Hippo Pool: walk the short trail to see hippos resting in the shallows. A family of hippos has lived here for decades and are reliably visible year-round. The walking trail is one of the few places you can exit your vehicle inside the park.",
                  "13:00 — Exit the park. Lunch at Carnivore restaurant on Langata Road: the famous revolving-spit all-you-can-eat includes game meat (crocodile, ostrich, wildebeest) plus beef and lamb. Cover charge KES 4,500 ($34) includes unlimited meat carved tableside. Carnivore has served over 3 million guests since 1980.",
                  "16:00 — Afternoon free. Explore the Westlands neighbourhood: Sarit Centre for shopping, or Artcaffe for Kenyan-Italian fusion coffee and cake. Rest before dinner.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Karen Blixen Museum · Bomas of Kenya · Maasai Market"
                cost="$40–70 (museum, Bomas, market, food, transport)"
                items={[
                  "09:00 — Uber to the Karen Blixen Museum in the Karen suburb ($5–7 from Westlands). The museum is the restored farmhouse of Danish author Isak Dinesen, who wrote Out of Africa about her life on this coffee estate from 1914 to 1931. Entry: KES 200 ($1.50) for the house tour. The Ngong Hills backdrop looks exactly as Meryl Streep flew over them in the film.",
                  "11:00 — Walk the Karen Blixen neighbourhood: wide tree-lined roads, colonial bungalows, and the most peaceful corner of Nairobi. Karen is where the city&apos;s diplomatic community and wealthier residents live — it feels like a different world from the bustling CBD.",
                  "13:00 — Bomas of Kenya on Langata Road (KES 1,000 / $8 entry): a cultural centre showcasing traditional Kenyan homesteads and daily performances of traditional dance from over 42 ethnic communities. The 2pm dance performance is vibrant and genuinely educational — not a tourist trap. Allow 2 hours.",
                  "15:30 — Maasai Market (check the weekday schedule — it rotates between venues: Tuesday at Kijabe Street, Friday at the Village Market mall, Saturday at the High Court parking). Hundreds of stalls selling beaded jewellery, kikoy fabric, carved soapstone, and Maasai blankets. Bargaining starts at half the asking price and is expected.",
                  "19:00 — Dinner at Mama Oliech in Woodlands Road, Kilimani: the legendary Kenyan tilapia and omena (silver cyprinid) restaurant. Cash only. A full tilapia with ugali and sukuma wiki costs KES 1,200 ($9). This is where Nairobi locals eat when they want the best home-style Kenyan food.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Nairobi National Museum · Coffee Tasting · Departure"
                cost="$30–50 (museum, coffee, lunch, airport transfer)"
                items={[
                  "09:00 — Nairobi National Museum on Museum Hill: entry KES 1,500 ($11.50). The museum covers Kenya&apos;s prehistory (the Turkana Boy skull — 1.6 million years old, the most complete early human skeleton ever found), colonial history, and natural history. Allow 2 hours for the main galleries.",
                  "11:00 — The adjacent Snake Park is included with the museum ticket: live African species including black mambas, puff adders, and Nile crocodiles. An unexpectedly excellent wildlife addition, especially if you&apos;re travelling with children.",
                  "12:00 — Coffee tasting at a specialty roaster: Nairobi has a rapidly growing third-wave coffee scene. Kenyan AA is among the world&apos;s most prized coffee grades, grown at 1,700m in the Nyeri highlands. Try a single-origin pour-over at Java House or visit the Dormans Coffee roastery for a tasting flight (KES 500–800).",
                  "13:30 — Final lunch in the CBD. Try a Swahili pilau rice plate at a local restaurant or grab mandazi with chai at Java House before heading to Jomo Kenyatta International Airport.",
                  "15:00 — Taxi or Uber to JKIA: KES 2,000–3,000 ($15–23) by taxi, or KES 800–1,200 ($6–9) by Uber/Bolt. Allow 90 minutes from CBD in afternoon traffic on the Mombasa Road corridor. The Nairobi Expressway cuts this to 25 minutes if your driver uses it (KES 300 toll).",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Nairobi" onPlanTrip={() => setModalOpen(true)} />

          {/* ── TOP ATTRACTIONS ── */}
          <section id="attractions" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🦁 Top Attractions in Nairobi</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Nairobi National Park",
                  e: "$43 (KES 2,000 residents)",
                  d: "The world&apos;s only capital city national park with free-roaming lions, black rhinos, cheetahs, and leopards. 117 square kilometres of open savanna just 7km from the CBD. The skyline-and-lion photograph is available nowhere else on earth. Best visited at dawn — 6am opening.",
                  t: "Must see · 4–6 hrs",
                },
                {
                  n: "Giraffe Centre",
                  e: "$15 (KES 1,500 residents)",
                  d: "Hand-feed endangered Rothschild giraffes from an elevated platform at eye level. Run by the African Fund for Endangered Wildlife since 1979. One of the most tactile wildlife encounters in East Africa. Arrive at 9am opening before tour groups.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "David Sheldrick Elephant Orphanage",
                  e: "$15 (foster from $50/year)",
                  d: "Watch orphaned baby elephants play in red-earth mud pools and be bottle-fed by their keepers. Public visiting: 11am–12pm daily only. Foster an elephant for $50/year to fund their rehabilitation and eventual release into Tsavo National Park. Register online in advance.",
                  t: "Must see · 1 hr",
                },
                {
                  n: "Karen Blixen Museum",
                  e: "KES 200 ($1.50)",
                  d: "The restored 1912 farmhouse of Isak Dinesen (Out of Africa). The Ngong Hills backdrop, coffee estate grounds, and period interiors bring the book and film to life. One of the most atmospheric museums in East Africa. Budget 1 hour for the guided tour.",
                  t: "Recommended · 1 hr",
                },
                {
                  n: "Bomas of Kenya",
                  e: "KES 1,000 ($8)",
                  d: "Traditional homesteads from over 42 Kenyan ethnic communities plus daily performances of traditional dance. The 2pm show is vibrant and educational. Excellent cultural immersion, particularly if you won&apos;t be visiting rural Kenya. Allow 2 hours.",
                  t: "Cultural highlight · 2 hrs",
                },
                {
                  n: "Nairobi National Museum",
                  e: "KES 1,500 ($11.50)",
                  d: "Kenya&apos;s flagship museum covering prehistory (Turkana Boy skull), natural history, and cultural heritage. The adjacent Snake Park with live black mambas and Nile crocodiles is included. An excellent rainy-afternoon option. Allow 2 hours.",
                  t: "Recommended · 2 hrs",
                },
                {
                  n: "Kazuri Beads Factory",
                  e: "Free",
                  d: "Fair-trade ceramic bead workshop in Karen where single-mother artisans hand-make beads that are exported worldwide. Free factory tour shows the entire process from clay to kiln to painting. The shop has excellent gifts. A genuine social enterprise worth supporting.",
                  t: "Free · 45 mins",
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
            title="Nairobi — Wildlife, Culture &amp; the Urban Safari"
            subtitle="The world&apos;s wildest capital city."
            spots={[
              {
                name: "Nairobi National Park Lions",
                query: "nairobi national park lions city skyline kenya wildlife safari",
                desc: "Lions in the foreground with the Nairobi city skyline behind — the iconic photograph available nowhere else on earth.",
              },
              {
                name: "Giraffe Centre Feeding",
                query: "giraffe centre nairobi rothschild giraffe feeding kenya",
                desc: "Hand-feeding endangered Rothschild giraffes at eye level from the elevated platform at the Giraffe Centre.",
              },
              {
                name: "David Sheldrick Baby Elephants",
                query: "david sheldrick elephant orphanage nairobi baby elephant mud bath kenya",
                desc: "Baby elephants playing in red-earth mud pools at the David Sheldrick Wildlife Trust orphanage.",
              },
              {
                name: "Karen Blixen Museum",
                query: "karen blixen museum nairobi kenya ngong hills colonial farmhouse",
                desc: "The restored farmhouse of the Out of Africa author, set against the Ngong Hills backdrop.",
              },
              {
                name: "Carnivore Restaurant",
                query: "carnivore restaurant nairobi kenya game meat spit roast",
                desc: "The legendary Carnivore restaurant — revolving game-meat spits and the ultimate Nairobi dining experience since 1980.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Nairobi is affordable by global capital city standards. The biggest single expense is Nairobi National Park entry ($43) — everything else scales to your budget. Matatus (shared minibuses) and local canteens make budget travel very comfortable; Uber and mid-range restaurants keep mid-range costs reasonable.
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
                    ["🏨 Accommodation", "$15–25/night", "$60–100/night", "$300–600/night"],
                    ["🍽 Food", "$8–12/day", "$25–45/day", "$80–150/day"],
                    ["🚕 Transport", "$3–7/day", "$15–25/day", "$40–120/day"],
                    ["🦁 Activities", "$15–25/day", "$30–50/day", "$100–200/day"],
                    ["TOTAL (per person)", "$45–65/day", "$120–180/day", "$350–600+/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($45–65/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in hostels or guesthouses in the CBD, eat at local canteens and Java House, take matatus and boda-bodas. Completely doable and comfortable — Nairobi&apos;s budget infrastructure is excellent for East Africa.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($120–180/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay in Westlands or Karen (3-star hotels), eat at Carnivore and Talisman, use Uber/Bolt everywhere. This is the sweet spot — comfortable exploration without the premium luxury markup.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($350–600+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Fairmont The Norfolk or Hemingways Nairobi, private game drives, helicopter flights over the Ngong Hills, fine dining at Talisman. Giraffe Manor ($700–900/night) is the ultimate — giraffes visit at breakfast through the windows.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Nairobi</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The best areas to stay are Westlands (restaurants, nightlife, central) and Karen (peaceful, close to Giraffe Centre and Blixen Museum). The CBD is convenient but less pleasant at night. Gigiri (UN area) and Lavington are safe, upscale residential neighbourhoods.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Fairmont The Norfolk",
                  type: "Historic luxury · CBD / University Way",
                  price: "From $250/night",
                  badge: "Most iconic",
                  desc: "Nairobi&apos;s most storied hotel, operating since 1904. Colonial-era grandeur, immaculate gardens, and a central location. Winston Churchill, Theodore Roosevelt, and Karen Blixen all stayed here. The Lord Delamere Terrace bar is the classic sundowner spot.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hemingways Nairobi",
                  type: "Boutique luxury · Karen",
                  price: "From $350/night",
                  badge: "Best boutique",
                  desc: "A stunning plantation-style boutique hotel in the Karen neighbourhood with views of the Ngong Hills. Named after Ernest Hemingway, who hunted in this area. The spa, restaurant, and service are world-class. Close to the Giraffe Centre and Blixen Museum.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Wildebeest Eco Camp",
                  type: "Budget-mid · Langata area",
                  price: "From $25/night (dorm) · $60/night (private)",
                  badge: "Best budget",
                  desc: "An eco-friendly camp near Nairobi National Park with dormitories and private bandas (cottages). Popular with backpackers and overland travellers. Good bar, communal kitchen, safari booking desk, and a relaxed garden atmosphere. Walking distance from the Giraffe Centre.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Giraffe Manor",
                  type: "Ultra-luxury · Langata",
                  price: "From $700/night (full board)",
                  badge: "Once-in-a-lifetime",
                  desc: "The most Instagrammed hotel in Africa. Rothschild giraffes visit at breakfast, poking their heads through the windows for food. Bookings open 12 months ahead and sell out fast. If budget allows, even one night here is an extraordinary experience. Full board included.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Nairobi</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Nairobi&apos;s food scene runs from KES 200 street-stall nyama choma to world-class fine dining. The city has excellent Kenyan home-cooking, East African fusion, and international restaurants. Carnivore is the one meal every visitor should experience.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Carnivore Restaurant",
                  t: "Game meat · Langata Road",
                  d: "The legendary revolving-spit all-you-can-eat includes game meat (crocodile, ostrich, wildebeest) plus beef, pork, and lamb carved tableside on Maasai swords. Cover charge KES 4,500 ($34) includes unlimited meat. Carnivore has been Nairobi&apos;s signature dining experience since 1980 — over 3 million guests and counting. Vegetarian options available but this is fundamentally a meat experience.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Mama Oliech",
                  t: "Kenyan home-cooking · Kilimani",
                  d: "The best-loved Kenyan restaurant in Nairobi. Famous for whole fried tilapia with ugali and sukuma wiki. Cash only. KES 1,200 ($9) for a full fish plate. This is where locals eat when they want the best home-style food. Barack Obama ate here during his 2006 Kenya visit. The omena (silver cyprinid) is also excellent.",
                  b: "Locals&apos; favourite",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Java House",
                  t: "Coffee &amp; cafe · Multiple locations",
                  d: "Kenya&apos;s premier coffee chain, serving single-origin Kenyan AA Arabica from the Nyeri highlands. The flat white and pour-over are genuinely world-class — the same beans cost 10x more in London speciality shops. Good sandwiches, mandazi, and light meals. Mama Ngina Street and Kenyatta Avenue branches are the most central. KES 400–800 ($3–6) per coffee and snack.",
                  b: "Best coffee",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "The Talisman",
                  t: "Kenyan fusion · Karen",
                  d: "A colonial-era bungalow in Karen converted into one of Nairobi&apos;s finest restaurants. The garden setting is beautiful, the menu blends Kenyan, Asian, and Mediterranean influences, and the wine list is surprisingly good. Mains KES 1,800–2,500 ($14–19). Book ahead for Friday and Saturday dinner. The tasting menu with wine pairing is exceptional.",
                  b: "Fine dining",
                  c: "bg-teal-50 border-teal-200",
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
            destination="Nairobi Kenya"
            hotels={[
              {
                name: "Fairmont The Norfolk",
                type: "Historic luxury · Since 1904",
                price: "From $250/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/ke/fairmont-the-norfolk.html?aid=2820480",
              },
              {
                name: "Hemingways Nairobi",
                type: "Boutique luxury · Karen",
                price: "From $350/night",
                rating: "5",
                badge: "Best boutique",
                url: "https://www.booking.com/hotel/ke/hemingways-nairobi.html?aid=2820480",
              },
              {
                name: "Wildebeest Eco Camp",
                type: "Eco camp · Langata",
                price: "From $25/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/ke/wildebeest-eco-camp.html?aid=2820480",
              },
              {
                name: "Giraffe Manor",
                type: "Ultra-luxury · Langata",
                price: "From $700/night",
                rating: "5",
                badge: "Once-in-a-lifetime",
                url: "https://www.booking.com/hotel/ke/giraffe-manor.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Nairobi National Park Game Drive",
                duration: "5 hrs",
                price: "From $85/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=nairobi+national+park+game+drive&partner_id=PSZA5UI",
              },
              {
                name: "Giraffe Centre &amp; Elephant Orphanage Tour",
                duration: "5 hrs",
                price: "From $55/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=nairobi+giraffe+centre+elephant+orphanage&partner_id=PSZA5UI",
              },
              {
                name: "Nairobi Coffee Tour",
                duration: "3 hrs",
                price: "From $40/person",
                url: "https://www.getyourguide.com/s/?q=Nairobi+coffee+tour&partner_id=PSZA5UI",
              },
              {
                name: "Karen Blixen Museum &amp; Kazuri Beads",
                duration: "4 hrs",
                price: "From $35/person",
                url: "https://www.getyourguide.com/s/?q=nairobi+karen+blixen+museum+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Nairobi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚕",
                  title: "Use Uber or Bolt, never street taxis",
                  desc: "Street taxis in Nairobi charge 3–5x the app rate and rarely use meters honestly. Uber and Bolt are widely available, safe, and dramatically cheaper — a trip from Westlands to Karen is about $4–6 on app versus $15–20 by street taxi. Both apps work at JKIA airport.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "☕",
                  title: "Drink Kenyan AA coffee at source",
                  desc: "Kenya AA is among the world&apos;s most prized coffee grades, grown in the Nyeri highlands at 1,700m. Nairobi Java House and Dormans roast and brew single-origin Kenyan Arabica that costs $3 in the cafe and $30 in a London speciality shop. This is one of the world&apos;s great coffee cities.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🐘",
                  title: "Book Sheldrick Elephant Orphanage in advance",
                  desc: "Visiting hours are strictly 11am–12pm daily. The 3pm keeper-adoption visit for fee-paying adopters is even more limited. Register online at sheldrickwildlifetrust.org before arrival. A $50 adoption fee is one of the most meaningful souvenirs from Kenya — you receive monthly updates on your elephant.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🛡️",
                  title: "Stay in Westlands or Karen for safety",
                  desc: "Westlands and Karen have the best restaurants, reliable app-based transport, and the lowest street crime exposure in Nairobi. The CBD is fine in daylight but avoid walking with visible valuables after dark. Keep your phone in your pocket on busy streets. Gigiri and Lavington are also excellent.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "💱",
                  title: "Pay in Kenyan shillings, not USD",
                  desc: "USD is widely accepted but you always get a worse exchange rate. Change money at Forex bureaus on Kenyatta Avenue for the best rates — not at hotels, which charge 10–15% spread. M-Pesa mobile payment works everywhere locals shop and is the backbone of Kenya&apos;s economy.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🏥",
                  title: "Malaria: low risk in Nairobi, high on safari",
                  desc: "Nairobi city at 1,700m elevation is considered malaria-low-risk. However, any safari extension to the Maasai Mara, Amboseli, or coastal Mombasa requires antimalarial medication. Consult a travel doctor 6 weeks before departure. Yellow fever vaccination is required if arriving from an endemic country.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Nairobi" />

          {/* Combine With */}
          <CombineWith currentSlug="nairobi-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Nairobi safe for tourists in 2026?",
                  a: "Nairobi is safe for tourists who use standard urban precautions. Westlands, Karen, Gigiri (UN area), and Lavington are the safest neighbourhoods. Use Uber or Bolt exclusively rather than hailing street taxis. Avoid walking after dark in the CBD. Keep phone and camera out of sight on busy streets. The tourist areas around the Giraffe Centre and Sheldrick Orphanage are completely safe.",
                },
                {
                  q: "How many days do I need in Nairobi before a safari?",
                  a: "Two to three days in Nairobi gives you the Giraffe Centre, Elephant Orphanage, and Nairobi National Park before flying to the Maasai Mara. Four days lets you add the Karen Blixen Museum, Bomas of Kenya, and Nairobi National Museum. Wilson Airport (WIL) has daily light aircraft flights to Maasai Mara airstrips operated by SafariLink and AirKenya.",
                },
                {
                  q: "What is the best time to visit Nairobi and the Maasai Mara?",
                  a: "June to October is the dry season with the best wildlife visibility. July to October overlaps with the Great Wildebeest Migration crossing the Mara River from Tanzania into Kenya — one of wildlife watching\u0027s greatest spectacles. January to February is also excellent with dry weather and fewer tourists. Avoid the long rains in April and May.",
                },
                {
                  q: "Do I need vaccinations to visit Kenya?",
                  a: "Yellow fever vaccination is required if arriving from a yellow-fever-endemic country. Hepatitis A, typhoid, and tetanus are recommended by most travel clinics. Malaria prophylaxis is required for any destinations outside Nairobi city (Mara, Amboseli, Mombasa coast). Consult a travel health clinic 6 weeks before departure for your personalised vaccination schedule.",
                },
                {
                  q: "How do I get from Nairobi to the Maasai Mara?",
                  a: "The fastest option is a light aircraft from Wilson Airport (WIL) to one of the Mara airstrips — 45 minutes, from $150–250 one way with SafariLink or AirKenya. By road it is 270km and takes 5–6 hours via the Narok route, including the last stretch on unpaved roads. Most safari operators include transfers from Nairobi in their packages.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Nairobi trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/nairobi-4-days/best-time", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/nairobi-4-days/couples-guide", label: "Couples guide", icon: "💑" },
                { href: "/blog/nairobi-4-days/packing-list", label: "Packing list", icon: "🎒" },
                { href: "/blog/kenya-safari-7-days", label: "Kenya safari 7 days", icon: "🦁" },
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
          <RelatedGuides currentSlug="nairobi-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Africa Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kenya Safari 7 Days — Maasai Mara &amp; Beyond", href: "/blog/kenya-safari-7-days" },
                { label: "Cape Town 5 Days — Table Mountain &amp; Winelands", href: "/blog/cape-town-5-days" },
                { label: "Ethiopia 5 Days — Lalibela &amp; Simien Mountains", href: "/blog/ethiopia-lalibela-5-days" },
                { label: "Botswana 6 Days — Okavango Delta Safari", href: "/blog/botswana-okavango-6-days" },
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
