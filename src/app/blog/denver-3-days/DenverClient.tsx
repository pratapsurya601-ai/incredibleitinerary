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
const DENVER_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Denver Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "3-Day Itinerary" },
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
          href: `mailto:?subject=Denver 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Denver in 3 Days — Red Rocks, Rocky Mountain NP and Colorado craft beer&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/denver-3-days"
        imageUrl="https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=1200&q=80"
        description="Denver in 3 Days: Red Rocks Amphitheatre, Rocky Mountain National Park, Denver Art Museum, RiNo murals, and Colorado&apos;s craft beer mile — complete 2026 travel guide."
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
export default function DenverClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={DENVER_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Denver" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="Denver Colorado skyline Rocky Mountains downtown Red Rocks"
            fallback="https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=1600&q=80"
            alt="Denver Colorado skyline with the Rocky Mountains rising in the background"
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
              <span className="text-white/70">Denver 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Mile High City
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Denver in 3 Days:
                <em className="italic text-amber-300"> Red Rocks, Rocky Mountains &amp; Colorado Craft Beer</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Red Rocks Amphitheatre rising 400 feet from the plains, Rocky Mountain National Park 90 minutes away, the RiNo Art District reborn from rail yards, and 80+ craft breweries in one city. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="12 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🏔️ Colorado, USA</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From $80/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Denver sits at exactly one mile above sea level — and everything about it reaches for altitude. Red Rocks Amphitheatre is the most dramatic outdoor concert venue on the planet, Rocky Mountain National Park is just 90 minutes from the hotel district, and the RiNo Art District has transformed mile-long warehouses into one of America&apos;s most exciting creative neighborhoods.
            </p>
          </blockquote>

          {/* ── WHAT DENVER ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Denver Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Denver is not just a gateway to the mountains — it&apos;s a fully formed city with a genuine cultural identity. The Denver Art Museum holds one of America&apos;s strongest pre-Columbian and Western American art collections. The RiNo River North Art District has undergone one of the most dramatic neighborhood transformations in the country, turning derelict rail yards into an acclaimed gallery district with over 200 commissioned murals. Larimer Square — the first block in Denver, platted in 1858 — still stands intact with its string lights and boutique shops.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Colorado&apos;s craft beer industry is a legitimate cultural export. Denver alone has over 80 breweries. Great Divide&apos;s Yeti Imperial Stout is one of America&apos;s most decorated beers. Wynkoop Brewpub, founded in 1988, is the oldest craft brewery in Colorado. The city&apos;s food scene has matured dramatically — Rioja on Larimer Square, Mercantile Dining &amp; Provision in Union Station, and Root Down in LoHi serve food that would be competitive in any major American city.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three days gives you Red Rocks and the natural world, downtown Denver&apos;s museums and walkable neighborhoods, and a day trip to Rocky Mountain National Park that reminds you why people move here. The city is easy to navigate — the A-Line train from the airport to Union Station takes 37 minutes for $10.50 — and walkable once you arrive in any of the main neighborhoods.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport to Downtown" value="37 min" />
              <StatCard icon="🌡️" label="Best Season" value="May–Oct" />
              <StatCard icon="🍺" label="Craft Breweries" value="80+" />
              <StatCard icon="💰" label="Budget From" value="$80/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Denver</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Jun",
                  i: "🌸",
                  t: "Late Spring — Excellent",
                  d: "60–75°F (15–24°C). Trail Ridge Road in RMNP opens in late May or early June. Wildflowers begin in late June. Fewer crowds than peak summer, lower hotel rates. Red Rocks concerts begin in earnest. One of the two best windows.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Peak Season",
                  d: "80–95°F (27–35°C). Peak crowds at Rocky Mountain National Park — timed entry permits required 9am–3pm. Trail Ridge Road fully open. Afternoon thunderstorms common above treeline. Hotel prices at their highest. Book everything 2–3 months ahead.",
                  b: "Book early",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Fall — Best Season",
                  d: "55–75°F (13–24°C). Aspen gold in RMNP peaks in late September. Elk rut makes wildlife viewing spectacular. Trail Ridge Road open through mid-October. Crowds thin after Labor Day. The single best month is late September.",
                  b: "Best overall",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Nov–Mar",
                  i: "❄️",
                  t: "Winter — Ski Season",
                  d: "25–50°F (-4–10°C). Trail Ridge Road closes. But Denver city itself is mild compared to the mountains — 300+ sunny days per year. If skiing is your goal, I-70 resorts (Breckenridge, Vail, Keystone) are 1–2 hours away. Hotels in Denver are cheapest.",
                  b: "For skiers",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Denver</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Denver International Airport (DEN) is 23 miles northeast of downtown. The RTD <strong className="font-medium">A-Line commuter rail</strong> runs directly from DEN to Denver Union Station in 37 minutes for $10.50 — trains run every 15 minutes from 4am to midnight. This is the standard option for nearly all visitors.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚋",
                  t: "RTD A-Line Train (recommended)",
                  d: "Denver International Airport → Denver Union Station: 37 minutes, $10.50 single fare. Trains run every 15 minutes, 4am–midnight. From Union Station, the 16th Street Mall Free MallRide shuttle connects to all downtown hotels. No traffic delays, no parking costs, no Uber surges.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚗",
                  t: "Rideshare (Uber / Lyft)",
                  d: "DEN to downtown Denver: 25–45 minutes depending on I-70 traffic, $35–50 standard. Surge pricing common during major events at Ball Arena, Coors Field, and Empower Field. Useful if you have bulky luggage or are arriving in a group of 3–4.",
                  b: "Flexible",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚗",
                  t: "Rental Car",
                  d: "Car rental at DEN starts at $35–55/day. Essential for Red Rocks Amphitheatre (20 miles southwest, no direct transit) and Rocky Mountain National Park (65 miles, 90 minutes). Consider renting only on the days you need mountains access — parking downtown costs $20–35/day.",
                  b: "For mountain days",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  i: "✈️",
                  t: "Flights to Denver (DEN)",
                  d: "DEN is a major United hub with direct flights from most US cities and international connections. From the UK: British Airways and United fly London Heathrow direct (9–10 hours). From India: connections via New York, Chicago, or Houston (18–22 hours total). From Canada: direct flights from Toronto, Vancouver, and Calgary.",
                  b: "Well connected",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Denver Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Day 1 puts you at Red Rocks and RiNo. Day 2 is a full day trip to Rocky Mountain National Park. Day 3 covers the Denver Art Museum, 16th Street Mall, and the craft beer scene.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Red Rocks Amphitheatre · RiNo Art District · Colorado Craft Beer"
                cost="$55–75 (car rental, meals, 2 beers, trail free)"
                items={[
                  "09:00 — Drive or ride-share 20 miles southwest to Red Rocks Amphitheatre (car rental $35–50/day, or Lyft ~$30 one-way). Red Rocks is a natural rock amphitheatre carved by 300-million-year-old Fountain Formation sandstone — two monolithic fins, 400 feet tall, frame a 9,000-seat concert bowl with the Denver skyline visible in the distance east.",
                  "09:30 — Trading Post Trail: the 1.4-mile loop around the venue is free to hike year-round even when no concert is scheduled. The trail circles both rock formations, passes through the geological park, and delivers a view east across the plains that makes it clear why performers choose this venue above all others. Free entry, open from sunrise.",
                  "12:00 — Return to Denver; lunch at Denver Central Market in RiNo ($12–16 for gourmet sandwiches, tacos, or ramen) — 14 vendors in a converted warehouse at 2669 Larimer St, open daily. This is the heart of RiNo and the best quick-service food hall in Denver.",
                  "14:00 — RiNo Art District self-guided mural walk — the 1-mile stretch of Brighton Blvd and Larimer St has over 200 commissioned murals representing some of the most significant street art in America. The free Denver Street Art guide (denver.org) maps each work and names each artist. Allow 90 minutes at a comfortable pace.",
                  "16:30 — Craft beer hour: Great Divide Brewing Company on Arapahoe St ($5–6 happy hour pints, taproom tours free). Great Divide&apos;s Yeti Imperial Stout is one of the most decorated beers in American craft brewing history. The RiNo taproom is the flagship. Alternatively, Wynkoop Brewpub in LoDo (Colorado&apos;s oldest craft brewery, founded 1988) is 10 minutes away.",
                  "19:30 — Dinner at Root Down in LoHi neighborhood ($22–35 for mains) — farm-to-table menu in a converted gas station with a stunning rooftop patio. Seasonal Colorado ingredients, excellent vegetarian options, and one of the best views of the downtown skyline from any restaurant terrace in Denver.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Rocky Mountain National Park Day Trip"
                cost="$50–70 (park entry $35, gas, meals, timed entry permit $2)"
                items={[
                  "07:00 — Early start: drive US-36 west through Boulder to Estes Park (65 miles, 90 minutes). Arrive before 9am to beat both the crowds and the mandatory timed entry permit system — required 9am–3pm from May through October ($2 per vehicle, reserve at recreation.gov at least 24 hours ahead).",
                  "08:30 — Rocky Mountain National Park entry ($35/vehicle for 7 days, free with America the Beautiful Annual Pass). The park contains 14,259-foot Longs Peak, 355 miles of trails, and herds of elk that descend to valley meadows in morning and evening. In September, the elk rut fills the park with bugling — one of the great wildlife spectacles in North America.",
                  "09:00 — Bear Lake Trail Loop (0.8 miles, easy, flat) for the classic lake-and-peak reflection photograph. Or upgrade to Emerald Lake Trail (3.6 miles round trip, 605ft elevation gain) past Nymph Lake and Dream Lake — one of the finest moderate hikes in the entire park, passing three alpine lakes with Hallett Peak rising above them.",
                  "12:00 — Drive Trail Ridge Road, the highest continuously paved highway in the United States, reaching 12,183 feet at its summit. Even in summer, snowfields line the roadside. The Alpine Visitor Center (open June–September) sits at 11,796 feet — the highest visitor center in the National Park system. The tundra wildflowers peak July–August.",
                  "14:00 — Lunch in Estes Park: Ed&apos;s Cantina &amp; Grill ($12–16 for Tex-Mex burgers and Colorado green chile — a state specialty) or Notchtop Bakery ($8–10 for excellent stuffed croissants and sandwiches). Estes Park&apos;s main street is touristy but the food options are genuinely decent.",
                  "17:00 — Return to Denver along US-36. Dinner in Capitol Hill or the RiNo neighborhood — the restaurant row along 17th Ave has options from $12 Ethiopian platters to $16 ramen bowls, all within walking distance of the main hotel district.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Denver Art Museum · 16th Street Mall · Larimer Square · Craft Beer"
                cost="$50–65 (museum, meals, 2 beers, mall free)"
                items={[
                  "09:30 — Denver Art Museum ($10–15 general admission; free for Colorado residents and children under 18) — Daniel Libeskind&apos;s titanium-clad Frederic C. Hamilton building is itself an architectural event worth documenting from the outside. Inside: the pre-Columbian collection is world-class, the Petrie Institute of Western American Art is one of America&apos;s finest, and the Indigenous arts galleries are extraordinary. Allow 2 hours minimum.",
                  "11:30 — Clyfford Still Museum ($10, directly adjacent to DAM) — 94% of abstract expressionist Clyfford Still&apos;s entire lifetime output is housed in this purpose-built museum. The scale of Still&apos;s canvases at close range — many exceeding 10 feet — is overwhelming in a way reproductions do not prepare you for. One of America&apos;s finest single-artist museums.",
                  "13:00 — Lunch on 16th Street Mall: Snooze A.M. Eatery ($12–16 for their celebrated pineapple upside-down pancakes and eggs Benedict variations). The 16th Street Mall is a pedestrian-only promenade with a free shuttle bus running its length from Union Station to Civic Center — the easiest way to cover downtown Denver without a car.",
                  "15:00 — Larimer Square — the first platted block in Denver (1858), now the most photogenic street in the city. Boutique shops, string lights strung between Victorian facades, and a density of good restaurants that makes it worth returning to for dinner. Free to walk and browse.",
                  "17:00 — Colorado craft beer happy hour: Great Divide Brewing on Arapahoe St (Yeti Imperial Stout, $5–6/pint, free taproom tours) or Breckenridge Brewery taproom on Kalamath St (Avalanche Amber, Vanilla Porter). Denver&apos;s craft beer scene is genuinely one of the best in the United States.",
                  "19:30 — Final dinner: Rioja on Larimer Square ($32–48 for pasta and Mediterranean mains) — Jennifer Jasinski&apos;s flagship restaurant has been a cornerstone of Denver fine dining for two decades. The handmade pasta and Colorado lamb are exceptional. Book 2–3 days ahead for weekend evenings.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Denver" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏔️ Denver Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential Denver experiences in priority order. Entry fees and logistics as of 2026. Prices in USD.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Red Rocks Amphitheatre",
                  e: "Free (hiking) · Concert tickets vary",
                  d: "A natural rock amphitheatre formed by 300-million-year-old Fountain Formation sandstone — two 400-foot fins frame a 9,000-seat concert bowl. The Trading Post Trail (1.4 miles, free) gives full access on non-concert days. 20 miles southwest of downtown — car or Lyft required. Open from sunrise.",
                  t: "Must visit · 2 hrs hiking",
                },
                {
                  n: "Rocky Mountain National Park",
                  e: "$35/vehicle (7-day pass) · Free with America the Beautiful Pass",
                  d: "65 miles from Denver (90-minute drive). 355 miles of trails, 14,259-foot Longs Peak, Trail Ridge Road (highest continuous paved highway in the US), and some of the best accessible alpine hiking in North America. Timed entry permits required 9am–3pm May–October ($2, recreation.gov).",
                  t: "Full day trip · 1.5 hr drive",
                },
                {
                  n: "Denver Art Museum",
                  e: "$10–15 general admission · Free for Colorado residents",
                  d: "Daniel Libeskind&apos;s titanium-clad Hamilton Building houses a world-class collection including the Petrie Institute of Western American Art and one of the strongest pre-Columbian collections in the US. The adjacent Clyfford Still Museum ($10) adds another 2 hours. Located in the Golden Triangle district.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "RiNo River North Art District",
                  e: "Free",
                  d: "Over 200 commissioned murals across a 1-mile stretch of Brighton Blvd and Larimer St. Denver Central Market (14 vendors, 2669 Larimer St) sits at the center. The neighborhood has craft cocktail bars, galleries, and food halls all within walking distance. The free Denver Street Art guide maps every mural.",
                  t: "Free · 2–3 hrs",
                },
                {
                  n: "Denver Botanic Gardens",
                  e: "$15 general admission",
                  d: "23 acres of curated gardens in the Cheesman Park neighborhood, including one of North America&apos;s largest collections of plants from the Rocky Mountain region. The summer concert series (free with admission) and the Japanese Garden are standout features. 10 minutes from downtown by RTD.",
                  t: "Half day · 2 hrs",
                },
                {
                  n: "16th Street Mall",
                  e: "Free",
                  d: "A 1.25-mile pedestrian-only promenade connecting Union Station to Civic Center Park. Free shuttle buses run the full length every few minutes. Anchors Denver&apos;s downtown retail and restaurant scene. The Colorado State Capitol (free self-guided tour, dome covered in real gold leaf) is at the south end.",
                  t: "Free · 1–2 hrs",
                },
                {
                  n: "Larimer Square",
                  e: "Free",
                  d: "The oldest block in Denver (platted 1858), now the most atmospheric and photogenic street in the city. Victorian facades, string lights, boutique shops, and a concentration of the best restaurants in Denver — Rioja, Mercantile, and several others are within one block. Most beautiful after dark.",
                  t: "Free · Anytime",
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
            title="Denver — Red Rocks, Rocky Mountains &amp; RiNo"
            subtitle="The Mile High City from its most dramatic vantage points."
            spots={[
              {
                name: "Red Rocks Amphitheatre",
                query: "Red Rocks Amphitheatre Colorado sandstone formations concert venue",
                desc: "The 400-foot Fountain Formation sandstone fins framing Red Rocks — the most dramatic concert venue on earth, accessible free for hiking on non-show days.",
              },
              {
                name: "Rocky Mountain National Park",
                query: "Rocky Mountain National Park Colorado alpine trail Bear Lake peak reflection",
                desc: "Bear Lake in Rocky Mountain National Park — clear alpine water reflecting snow-capped peaks, 65 miles from downtown Denver.",
              },
              {
                name: "Denver Art Museum Hamilton Building",
                query: "Denver Art Museum Libeskind Hamilton Building titanium architecture",
                desc: "Daniel Libeskind&apos;s titanium-clad Frederic C. Hamilton Building — one of the most striking pieces of contemporary architecture in the American West.",
              },
              {
                name: "RiNo Art District Murals",
                query: "RiNo River North Art District Denver murals street art warehouse",
                desc: "Over 200 commissioned murals across the RiNo district — Denver&apos;s transformation from derelict rail yards to one of America&apos;s most vibrant art neighborhoods.",
              },
              {
                name: "Denver Skyline Rocky Mountains",
                query: "Denver Colorado skyline downtown Rocky Mountains snow capped",
                desc: "Denver&apos;s downtown skyline with the Front Range of the Rocky Mountains visible — the view that explains why people never stop moving here.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Denver is a mid-range US city — more expensive than the American South, cheaper than New York or San Francisco. The biggest variables are accommodation and whether you rent a car. All prices in USD.
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
                    ["🏨 Accommodation/night", "$35–55 (hostel)", "$150–200 (boutique)", "$300–500 (Brown Palace)"],
                    ["🍽️ Food/day", "$20–35 (food halls, burritos)", "$55–85 (farm-to-table)", "$120–200 (tasting menus)"],
                    ["🚗 Transport/day", "$10–35 (RTD + car rental)", "$20–45 (car + ride-share)", "$60–150 (private car)"],
                    ["🎫 Activities/day", "$15–35 (museum, park entry)", "$45–75 (guided tours, park)", "$200–400 (private guides)"],
                    ["TOTAL/day", "$80–160", "$160–230", "$400–650+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💰 Budget ($80–160/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at Hostel Fish or Capitol Hill budget hotels ($35–55/night). Eat at Denver Central Market and food trucks. Use RTD A-Line from the airport and rent a car only for the RMNP day. Red Rocks hiking is free.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range ($160–230/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at Ramble Hotel RiNo ($150–180/night). Eat at Root Down, Mercantile, and good brewery taprooms. Rent a car for 2 of 3 days. Guided tours add value on RMNP and RiNo days.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($400–650+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">The Brown Palace Hotel ($350–500/night, National Historic Landmark). Dinner at Rioja, Fruition, or Tavernetta. Private guides for RMNP and DAM. Williams &amp; Graham cocktail bar for evening drinks.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Denver</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              LoDo (Lower Downtown) and RiNo are the best bases — walking distance to Union Station, 16th Street Mall, and the best restaurants, with the A-Line to the airport right at Union Station. Hostel Fish and Capitol Hill options suit budget travelers.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "The Brown Palace Hotel",
                  type: "Luxury historic · Downtown / LoDo",
                  price: "From $350/night",
                  badge: "Most iconic",
                  desc: "A National Historic Landmark since 1892 — the Brown Palace&apos;s atrium lobby, covered in six floors of ornate ironwork and lit from a stained-glass skylight, is one of America&apos;s great hotel interiors. Every US president since Theodore Roosevelt has stayed here. The Ship Tavern bar and Ellyngton&apos;s live jazz lounge are dining destinations in their own right.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Ramble Hotel RiNo",
                  type: "Boutique design · RiNo Art District",
                  price: "From $160/night",
                  badge: "Best for RiNo",
                  desc: "A 50-room boutique hotel at the heart of the RiNo Art District — commissioned murals throughout, a curated vinyl bar (Death &amp; Co Denver is in the building), and walking access to all of RiNo&apos;s galleries and taprooms. The design is exceptional: reclaimed wood, exposed concrete, and local art on every surface.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Hostel Fish",
                  type: "Hostel · Downtown / Capitol Hill",
                  price: "From $35/night (dorm) · $85 (private)",
                  badge: "Best budget",
                  desc: "Denver&apos;s best-rated hostel — a converted 1890s building two blocks from 16th Street Mall with clean dorms, a common kitchen, and a lively common area. Private rooms available at budget hotel rates. The Capitol Hill location puts you within walking distance of the Denver Art Museum and Colfax Ave restaurants.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "The Crawford Hotel",
                  type: "Boutique · Union Station LoDo",
                  price: "From $200/night",
                  badge: "Best location",
                  desc: "Set inside the historic Denver Union Station — the Crawford occupies the upper floors of the beaux-arts terminal building, with direct access to the A-Line train to DEN airport and the Terminal Bar below. The location is unbeatable for transit access and proximity to LoDo restaurants and Coors Field.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Denver</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Denver&apos;s restaurant scene has matured significantly over the past decade. The best concentrations are Larimer Square, LoHi (Lower Highlands), RiNo, and Union Station. Prices in USD.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Rioja",
                  t: "Mediterranean fine dining · Larimer Square",
                  d: "Jennifer Jasinski&apos;s flagship restaurant on Larimer Square — two decades of James Beard nominations and one of the defining restaurants of Denver&apos;s culinary identity. The handmade pasta (the pappardelle with Colorado lamb ragu), the seasonal risotto, and the dessert program are all exceptional. $32–48 for mains. Book 2–3 days ahead for weekends.",
                  b: "Best special occasion",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Mercantile Dining & Provision",
                  t: "Market-driven American · Union Station",
                  d: "Alex Seidel&apos;s restaurant in the ground floor of Denver Union Station — one of the finest spaces in which to eat in Colorado. The open market sells Colorado provisions by day; by night it serves seasonal American cooking anchored in local producers. Colorado lamb, handmade pasta, and the best charcuterie board in Denver. $30–45 for mains.",
                  b: "Best atmosphere",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Root Down",
                  t: "Farm-to-table · LoHi (Lower Highlands)",
                  d: "A converted gas station in the LoHi neighborhood with a rooftop patio that delivers the best downtown Denver skyline view from any restaurant terrace in the city. The menu skews seasonal and vegetable-forward with excellent Colorado sourcing. The brunch is one of the best in Denver. $22–35 for mains. Rooftop seating fills fast in summer.",
                  b: "Best view",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Denver Central Market",
                  t: "Food hall · RiNo Art District",
                  d: "14 vendors in a converted warehouse at 2669 Larimer St — gourmet sandwiches, tacos, ramen, coffee, and a cheese and charcuterie counter. The best quick-service lunch option in Denver. $12–18 for a complete meal. Open daily; gets busy on weekend lunches but moves quickly.",
                  b: "Best for lunch",
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
            destination="Denver Colorado"
            hotels={[
              {
                name: "The Brown Palace Hotel",
                type: "Historic luxury · Downtown Denver",
                price: "From $350/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/us/the-brown-palace.html?aid=2820480",
              },
              {
                name: "Ramble Hotel RiNo",
                type: "Boutique design · RiNo Art District",
                price: "From $160/night",
                rating: "4",
                badge: "Best design",
                url: "https://www.booking.com/hotel/us/ramble-hotel.html?aid=2820480",
              },
              {
                name: "The Crawford Hotel",
                type: "Boutique · Union Station",
                price: "From $200/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/us/crawford-hotel-denver.html?aid=2820480",
              },
              {
                name: "Hostel Fish",
                type: "Hostel · Capitol Hill / Downtown",
                price: "From $35/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/us/hostel-fish.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Red Rocks Amphitheatre Guided Tour",
                duration: "2 hrs",
                price: "From $35/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Red+Rocks+Amphitheatre+Denver&partner_id=PSZA5UI",
              },
              {
                name: "Rocky Mountain National Park Day Trip",
                duration: "Full day",
                price: "From $89/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=Rocky+Mountain+National+Park+tour+Denver&partner_id=PSZA5UI",
              },
              {
                name: "Denver Craft Beer Walking Tour",
                duration: "3 hrs",
                price: "From $55/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=Denver+craft+beer+tour&partner_id=PSZA5UI",
              },
              {
                name: "RiNo Art District Mural Walking Tour",
                duration: "2 hrs",
                price: "From $30/person",
                url: "https://www.getyourguide.com/s/?q=Denver+RiNo+art+district+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Denver</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🏔️",
                  title: "Underestimating altitude sickness",
                  desc: "Denver sits at 5,280 feet and Rocky Mountain National Park reaches over 12,000 feet. Altitude sickness causes headaches, nausea, and fatigue in roughly 25% of visitors from sea level. Drink double your normal water intake, avoid alcohol on your first day, and ascend Trail Ridge Road gradually. If you experience severe symptoms — confusion, inability to walk straight — descend to lower elevation immediately.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🎟️",
                  title: "Not booking Red Rocks concerts in advance",
                  desc: "Red Rocks sells out months in advance for popular shows. Check the schedule at axs.com and book the moment tickets go on sale. The venue experience — 9,000 seats between two 400-foot sandstone fins, the Denver skyline behind you, the Front Range ahead — is unlike any other concert in the world even for artists you barely know.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🚗",
                  title: "Trying to reach Rocky Mountain NP without an early start",
                  desc: "Bear Lake parking lot fills by 9am on summer weekends. The mandatory timed entry permit system (May–October, $2 at recreation.gov) requires advance booking. Arrive before 8:30am or take the free park shuttle from the Estes Park Visitor Center. Starting at 10am on a July weekend will result in an hour of highway traffic and no parking.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🌨️",
                  title: "Visiting Trail Ridge Road outside its open season",
                  desc: "Trail Ridge Road — the highest continuous paved highway in the United States — is only open Memorial Day through mid-October, depending on snowpack. Check nps.gov/romo for current road conditions before driving up. In early June it may still be closed even as lower trails are completely clear.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🍺",
                  title: "Visiting only one or two breweries",
                  desc: "Colorado has over 400 craft breweries and Denver alone has 80+. Great Divide, Wynkoop, Breckenridge Brewery, Odell, and Ratio Beerworks are all within 2 miles of each other. A self-guided walking tour of 4–5 taprooms is achievable in one afternoon without a car, and Denver&apos;s beer culture is genuine enough to merit the time.",
                  color: "bg-amber-50 border-amber-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Denver</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "💧",
                  title: "Hydrate aggressively from the moment you land",
                  desc: "Denver&apos;s 5,280-foot altitude and extremely low humidity dry you out twice as fast as sea level. Start drinking water on the plane and aim for 3–4 liters on your first day. A mild headache on arrival is normal and clears within 24 hours for most people. Book outdoor activities at https://www.getyourguide.com/s/?q=Denver+Colorado&partner_id=PSZA5UI",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🚋",
                  title: "Use the RTD A-Line for airport and downtown travel",
                  desc: "The RTD A-Line runs from Denver International Airport to Union Station in 37 minutes for $10.50. Day passes ($6.50) cover all RTD buses and light rail within the city. The free 16th Street Mall MallRide connects Union Station to Civic Center. Avoid renting a car for city days — downtown parking costs $20–35/day.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🌄",
                  title: "Visit Red Rocks on non-concert mornings",
                  desc: "On non-show days, Red Rocks is open for hiking from sunrise to sunset — no ticket required. The Trading Post Trail and the amphitheatre bowl are freely accessible. Hundreds of locals do sunrise yoga and morning runs in the bowl. It&apos;s one of Denver&apos;s great free experiences and far more atmospheric than a crowded concert afternoon.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🎨",
                  title: "Spend a full afternoon in RiNo Art District",
                  desc: "The River North Art District has transformed from a derelict industrial zone to Denver&apos;s most dynamic neighborhood in under a decade. The mural walks, craft cocktail bars, Denver Central Market food hall, and weekend art markets are all free to explore. Download the Denver Street Art guide PDF from denver.org before you go — it maps every mural by artist and location.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🍺",
                  title: "Do the Great Divide taproom tour — it&apos;s free",
                  desc: "Great Divide Brewing Company on Arapahoe St offers free taproom tours that explain the Colorado craft beer story from a brewery that&apos;s been at the center of it since 1994. The Yeti Imperial Stout is one of America&apos;s most decorated beers — try it on draft in the taproom before you try it in a can anywhere else.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🏔️",
                  title: "Get the America the Beautiful Pass if you visit multiple parks",
                  desc: "The America the Beautiful Annual Pass ($80) gives unlimited access to all 400+ US National Parks and Federal Recreation Areas for 12 months. Rocky Mountain National Park alone costs $35 per vehicle — if you&apos;re visiting RMNP plus any other national park in the same year, the pass pays for itself. Buy at recreation.gov or at the park entrance.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Denver" />

          {/* Combine With */}
          <CombineWith currentSlug="denver-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do I get from Denver International Airport (DEN) to downtown?",
                  a: "The RTD A-Line commuter rail runs from DEN to Denver Union Station in 37 minutes, with trains every 15 minutes from 4am to midnight. A single ride costs $10.50. Uber/Lyft from DEN to downtown costs $35–50 and takes 25–45 minutes depending on I-70 traffic. There is no cheaper bus option — the A-Line is the standard recommendation for almost all travelers. From Union Station, the free 16th Street Mall MallRide shuttle connects to hotels throughout downtown.",
                },
                {
                  q: "What is the best time of year to visit Denver?",
                  a: "September and early October is the single best window — aspen foliage peaks in Rocky Mountain National Park in late September, the elk rut brings spectacular wildlife viewing, Trail Ridge Road is still open, hotel rates drop after Labor Day, and temperatures are comfortable at 55–75°F. May and June are excellent for spring wildflowers and fewer crowds than summer peak. July–August is peak season with full access to everything but the most crowds and highest hotel prices.",
                },
                {
                  q: "Is a rental car necessary in Denver?",
                  a: "For the city itself, no — the RTD light rail and bus network covers most neighborhoods and the A-Line handles the airport. For day trips to Red Rocks and Rocky Mountain National Park, a car is strongly recommended. Red Rocks is 20 miles southwest (no direct transit); RMNP is 65 miles northwest. Consider renting a car only on the days you need it — $35–55/day from DEN — and using RTD for city days when parking costs $20–35.",
                },
                {
                  q: "Can altitude sickness be a real problem in Denver?",
                  a: "Denver at 5,280 feet rarely causes serious altitude sickness, though headaches and fatigue on the first day are common for visitors from sea level. Rocky Mountain National Park, topping out above 12,000 feet on Trail Ridge Road, is where altitude sickness becomes a genuine concern — symptoms include headache, nausea, dizziness, and shortness of breath. Drink water continuously, eat light, avoid alcohol on day one, and ascend Trail Ridge Road slowly. Anyone feeling severe symptoms (confusion, inability to walk straight) should descend to Denver immediately.",
                },
                {
                  q: "How do I book the Rocky Mountain National Park timed entry permit?",
                  a: "The timed entry permit is required for vehicles entering RMNP between 9am and 3pm from late May through mid-October. Permits cost $2 per vehicle and must be booked at recreation.gov — they typically release permits 1–2 days in advance at midnight, and the most popular dates sell out within minutes. The workaround: arrive at the park before 9am (Bear Lake parking fills by then on summer weekends) or enter after 3pm. The free park shuttle from Estes Park Visitor Center does not require a permit.",
                },
                {
                  q: "Which Denver neighborhoods are best to stay in?",
                  a: "LoDo (Lower Downtown) is the most convenient — walking distance to Union Station (A-Line to airport), 16th Street Mall, Coors Field, and the best bars. RiNo (River North) is the most interesting — walkable to the best murals, craft beer taprooms, and the Denver Central Market food hall, and the Ramble Hotel is one of the best boutique stays in Denver. Capitol Hill suits budget travelers — the Denver Art Museum is walkable and Hostel Fish is there. Avoid staying near the airport unless you have an extremely early flight.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Denver trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-denver", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/denver-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/denver-to-rocky-mountain-national-park", label: "RMNP day trip guide", icon: "🏔️" },
                { href: "/blog/denver-craft-beer-guide", label: "Craft beer guide", icon: "🍺" },
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
          <RelatedGuides currentSlug="denver-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More North America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Las Vegas 4 Days — Shows &amp; Canyons", href: "/blog/las-vegas-4-days" },
                { label: "Chicago 3 Days — Architecture &amp; Deep Dish", href: "/blog/chicago-3-days" },
                { label: "Seattle 3 Days — Pike Place &amp; Rainier", href: "/blog/seattle-3-days" },
                { label: "Portland Oregon 4 Days — Outdoors &amp; Food", href: "/blog/portland-oregon-4-days" },
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
