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
const LAS_VEGAS_TOC = [
  { id: "honest",    emoji: "⚡",  label: "What Las Vegas Actually Is" },
  { id: "season",    emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️", label: "Getting There" },
  { id: "itinerary", emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks", emoji: "🎰",  label: "Landmark Guide" },
  { id: "budget",    emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",      emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",       emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",  emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",      emoji: "💡",  label: "Pro Tips" },
  { id: "faq",       emoji: "❓",  label: "FAQ" },
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
          href: `mailto:?subject=Las Vegas 4-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Las Vegas in 4 Days — Strip, Grand Canyon &amp; what to actually spend&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/las-vegas-4-days"
        imageUrl="https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=1200&q=80"
        description="Las Vegas in 4 Days: Bellagio fountains, Grand Canyon day trip, best shows, resort fee traps, and real dollar costs for every budget."
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
export default function LasVegasClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={LAS_VEGAS_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Las Vegas" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="las vegas strip nevada night lights neon casino usa"
            fallback="https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=1600&q=80"
            alt="Las Vegas Strip at night with neon lights and casino hotels illuminated Nevada USA"
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
              <span className="text-white/70">Las Vegas 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Entertainment Capital
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Las Vegas in 4 Days:
                <em className="italic text-amber-300"> The Strip, Grand Canyon &amp; What to Actually Spend</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Bellagio fountains, Fremont Street neon, a Grand Canyon sunrise, Cirque du Soleil, and the resort fee traps that nobody warns you about. The complete guide.
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
              <span>🇺🇸 Nevada, USA</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $70/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Las Vegas after dark — the Strip stretching four miles of impossible neon, the Bellagio fountains firing in choreographed arcs to Frank Sinatra, a thousand slot machines playing the same five sounds — is one of the most deliberately overwhelming sensory experiences on earth.
            </p>
          </blockquote>

          {/* ── WHAT LAS VEGAS ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Las Vegas Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Las Vegas was incorporated as a city in 1911 and found its identity in 1931 when Nevada legalised gambling and construction began on Hoover Dam, flooding the valley with workers and money. The Strip — Las Vegas Boulevard South — didn&apos;t exist until 1941 when the El Rancho Vegas opened outside the city limits. The city&apos;s peak Las Vegas era, the Rat Pack and the Desert Inn mob years, lasted from roughly 1950 to 1980. Today&apos;s Strip is almost entirely the product of 1989–2010 corporate casino construction.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Four days gives you the Strip&apos;s spectacle, a Grand Canyon sunrise you&apos;ll remember for years, the city&apos;s surprisingly excellent food and art scene, and enough time to figure out whether gambling is actually your thing — it probably isn&apos;t, but the shows are extraordinary. The Bellagio fountains are free. The Fremont Street light show is free. Much of what makes Las Vegas remarkable costs nothing.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Honestly, the biggest mistake visitors make is spending too much time inside casino floors and not enough time doing the things Las Vegas does uniquely well: the free spectacles, the off-Strip food scene, and the landscape around it — Red Rock Canyon, Valley of Fire, and the Grand Canyon are all within reach.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="Harry Reid (LAS)" />
              <StatCard icon="🌡️" label="Best Season" value="Mar–May, Sep–Nov" />
              <StatCard icon="🎰" label="Strip Length" value="4.2 Miles" />
              <StatCard icon="💰" label="Budget From" value="$70/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Las Vegas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar–May",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "18–28°C, low humidity, long daylight hours. Ideal for both Strip walking and day trips. Hotel rates are lower than summer. The Grand Canyon and Red Rock Canyon are at their best. March and April are the sweet spot before spring break crowds.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🍂",
                  t: "Autumn — Excellent",
                  d: "20–30°C in September, cooling through November. September can still be warm but bearable. October is arguably the best single month — festival season, comfortable temperatures, and competitive hotel rates outside major events. November brings the best hotel deals of the year.",
                  b: "Recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Aug",
                  i: "🔥",
                  t: "Summer — Extreme Heat",
                  d: "40–45°C regularly. The Strip&apos;s asphalt and glass towers amplify heat — sidewalk walking at 2pm is genuinely dangerous. Plan all outdoor activities for 6–9am, retreat to air-conditioned casinos during peak heat. Casinos are kept at 21°C regardless of outdoor temperature. Pool season is at its peak.",
                  b: "Avoid midday outdoors",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter — Cool &amp; Quiet",
                  d: "5–15°C. Surprisingly cold for a desert city — bring a jacket for evenings. December through New Year is peak pricing (rates rival summer weekends). January and February are the cheapest months — rooms that cost $380 on a Friday in July cost $45 on a Tuesday in February. The Grand Canyon can have snow on the rim in January.",
                  b: "Budget bargains Jan–Feb",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Las Vegas</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Harry Reid International Airport (LAS) is just 5 minutes from the southern Strip — one of the most convenient major airport-to-city transfers in the USA. The airport handles 50+ million passengers annually and is well-connected from most major US and international hubs.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚌",
                  t: "Airport Shuttle to Strip (recommended for budget)",
                  d: "Shared shuttle services ($8–15/person one way) run directly from LAS baggage claim to Strip hotels. Bell Trans and Go Airport Shuttle are the main operators. Book online before arrival for best rates. Travel time: 15–25 minutes to mid-Strip. The cheapest transfer option if you don&apos;t mind sharing with other passengers.",
                  b: "Best budget",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚗",
                  t: "Uber / Lyft from Airport",
                  d: "UberX or Lyft standard from LAS to the Strip: $15–25, 8–12 minutes. Pick-up is from the designated rideshare area on Level 2M of the terminal — follow airport signs. Fastest and most flexible option. Surge pricing applies during major events and Friday/Saturday nights.",
                  b: "Most convenient",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚇",
                  t: "Las Vegas Monorail (Strip travel)",
                  d: "The monorail ($6/ride, $13/day pass) runs from the MGM Grand to SLS/Sahara Las Vegas (north Strip) with 7 stops. Useful for mid-Strip hotel-to-hotel travel without walking in the heat. Not connected to the airport — you need another option for arrival. The Deuce bus ($6/day unlimited) covers the full Strip and Fremont Street.",
                  b: "Strip travel",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Rental Car (for day trips)",
                  d: "Essential if you plan Grand Canyon South Rim ($30–50/day from off-Strip agencies — Enterprise, National on Swenson Street are cheaper than airport agencies). Not useful for Strip navigation — parking is expensive ($25–40/day at Strip hotels) and walking/rideshare is faster between casinos. Pick up the car the day of your Grand Canyon trip, not on arrival.",
                  b: "Day trips only",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Las Vegas Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary covers the Strip&apos;s best free spectacles, a Grand Canyon day trip, Fremont Street, and the city&apos;s art and culture scene — with real dollar costs for every activity.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="The Strip Walk — Free Las Vegas at Its Best"
                cost="$40–60 total (excl. hotel)"
                items={[
                  "2:00pm — Check in to your hotel. Budget travellers: Circus Circus ($40–80/night midweek) anchors the north Strip. Always budget $30–35 extra per night for mandatory resort fees — every major Las Vegas hotel charges this on top of the room rate regardless of whether you use the amenities.",
                  "4:00pm — Welcome to Fabulous Las Vegas sign: take the Deuce bus ($6 all-day pass) to the south Strip. The sign is best photographed in late afternoon light. Stand in the median with your back to Mandalay Bay for the classic shot — there&apos;s a small parking lot with a crosswalk.",
                  "5:30pm — Walk north from MGM Grand. The Showcase Mall (giant Coca-Cola bottle, M&M&apos;s World) — free to enter, absurdly overpriced to shop. The casino floors themselves are public spaces — walking through the MGM Grand&apos;s 170,000 sq ft floor costs nothing.",
                  "7:00pm — Bellagio Fountains (free, every 15 minutes from 7pm–midnight): stand on the pedestrian walkway above the lake facing the casino facade. Each show lasts 4 minutes. Watch 2–3 shows from different positions — the choreography to Frank Sinatra and Celine Dion is genuinely extraordinary. This is the single best free attraction in Las Vegas.",
                  "7:30pm — Bellagio Conservatory and Botanical Gardens (free, open 24 hours, inside the casino): a 14,000 sq ft glass-domed atrium maintained by a 140-person horticulture team. Redesigned five times per year. Current displays feature thousands of live flowers and elaborate topiary. Remarkable for a free attraction inside a casino.",
                  "9:00pm — Fremont Street Experience (take the Deuce bus north from Bellagio): the world&apos;s largest video display — a 1,500-foot LED canopy covering the original downtown Las Vegas casino corridor. Free light shows every hour from dusk until 1am. The zip line ($39–59) is optional but memorable. The energy here is rawer and more authentic than the Strip.",
                  "11:00pm — Dinner at In-N-Out Burger (3545 Las Vegas Blvd South, open late): $5–9 for a Double-Double combo. Order Animal Style (grilled onions, Thousand Island spread, extra sauce) — it&apos;s not on the menu board but every employee knows it.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Grand Canyon South Rim Day Trip"
                cost="$190–260 total (car + park entry + meals)"
                items={[
                  "5:00am — Depart early. The Grand Canyon South Rim is 450km (4.5 hours) by car via US-93 and I-40. Rent a car the previous evening from an off-Strip agency (Enterprise on Swenson St, $30–50/day) — far cheaper than airport agencies. Alternatively: join a guided bus tour ($110–160/person including park entry). The tour bus option trades flexibility for convenience.",
                  "9:30am — South Rim arrival. Grand Canyon National Park entry: $35/vehicle (valid 7 days). Walk the Rim Trail (paved, 13 miles total, free) from the entry gate east to Mather Point — the first major viewpoint. The 1.6km-deep, 29km-wide canyon exceeds every photograph and description. Budget at least 30 minutes just standing at the rim.",
                  "10:00am — Yavapai Point (0.5 miles east of Mather): the geological museum here (free) explains 2 billion years of Colorado River erosion and the 13 distinct rock layer formations visible in the canyon walls.",
                  "11:30am — Bright Angel Trail: hike 1.5 miles down to the first rest house (3 miles round trip, 1,000-foot descent). This is the canyon&apos;s most accessible hike — do not attempt to reach the Colorado River in a day. Turn back at the first rest house. The uphill return takes twice as long as the descent.",
                  "1:30pm — Lunch at El Tovar Hotel (1905, built directly on the rim): the restaurant serves lunch at $20–35. The setting — a log-and-stone national park lodge on the canyon&apos;s edge — is worth the price. Ask for a window table.",
                  "3:00pm — Desert View Drive (25 miles east from the visitor center): the Watchtower at Desert View (a 1932 stone tower designed by Mary Colter) gives a higher viewpoint with the Colorado River visible as a silver thread below. The Painted Desert begins to the east.",
                  "6:00pm — Return drive to Las Vegas. Arrive 10:30–11pm. Late dinner at a 24-hour casino restaurant or the Ellis Island Casino worker cafeteria (Koval Lane, $15 steak dinner — a Las Vegas local institution).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Red Rock Canyon · High Roller · Cirque du Soleil"
                cost="$130–200 total"
                items={[
                  "7:00am — Red Rock Canyon National Conservation Area ($15/vehicle entry, 17 miles west of the Strip on Charleston Boulevard): a 13-mile scenic loop through red and cream Aztec Sandstone formations. The morning light on the red rock faces is exceptional. Calico Hills (first major stop on the loop) has short scramble trails with no technical climbing required. The 2,000-foot Wilson Cliffs backdrop is visible from the Strip on clear days.",
                  "9:30am — Calico Hills Trail (2 miles, easy): the most accessible hike in Red Rock, with sweeping views back toward Las Vegas and the Spring Mountains. Bring 2L of water per person regardless of season — the desert desiccates faster than you expect.",
                  "11:00am — Return to Las Vegas. Lunch at Secret Pizza (Cosmopolitan, 3rd floor — follow the handwritten signs through the corridors, no signage from the elevator): excellent thin-crust New York-style pizza by the slice ($5–8). Open 11am–3am. No website. Always a queue of people in the know.",
                  "1:00pm — AREA15 / Meow Wolf Omega Mart ($45 entry, 3215 S Rancho Dr): a fake 1970s supermarket that dissolves into a surreal multi-story world of rooms, video installations, and interactive narrative. Budget 2.5–3 hours. Genuinely strange and excellent. Not a casino.",
                  "5:30pm — High Roller observation wheel (The LINQ, $25 daytime / $37 evening, online discount available): the world&apos;s largest observation wheel at 167 metres, with 28 glass cabins. Each rotation takes 30 minutes — you can see the entire Las Vegas Valley, Lake Mead, and the Spring Mountains on clear days. Evening rides offer the Strip lit up in full neon.",
                  "8:00pm — Cirque du Soleil O (Bellagio, $100–200/person, book at cirquedusoleil.com): the water-based show performed in and around a 1.5-million-gallon pool that transforms from a stage to a 25-foot-deep pool in seconds. 85 performers from 23 countries. The most technically extraordinary production in Las Vegas.",
                  "10:30pm — Post-show drink at Hyde Bellagio (Bellagio nightclub/lounge with direct fountain views) or walk through The Venetian&apos;s indoor Grand Canal (a recreation of Venice with painted skies and gondolas, free to walk through, open until midnight).",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Mob Museum · Neon Museum · Arts District · Farewell Dinner"
                cost="$80–130 total"
                items={[
                  "10:00am — The Mob Museum (300 Stewart Ave, downtown, $30): housed in a 1933 federal courthouse where actual mob hearings were held — one of the most well-curated museums in the American West. The speakeasy in the basement (Prohibition Bar) serves Prohibition-era cocktails from 10am. The electric chair and the wall panel from the St. Valentine&apos;s Day Massacre are genuine artifacts. Budget 2 hours.",
                  "12:30pm — Lunch in the Las Vegas Arts District (18b Arts District, around Main Street and Colorado Ave): PublicUs (1126 Fremont St) for excellent coffee and sandwiches ($10–15). The area&apos;s street murals extend for several blocks — genuinely good public art.",
                  "2:30pm — 18b Arts District gallery walk: Trifecta Gallery, Anonyomous Gallery, and a dozen independent spaces showing local and regional artists. All free. Feels like a completely different city from the Strip.",
                  "5:00pm — Neon Museum (770 Las Vegas Blvd North, $25 day / $30–40 for night tour — book in advance, they sell out): the boneyard of Las Vegas&apos;s historic casino signs — the original Stardust, Caesars Palace, the Sahara, and 200+ signs from the city&apos;s history. The illuminated night tour is one of the most atmospheric experiences in Las Vegas. Book the 7:30pm or 8pm session.",
                  "7:30pm — Farewell dinner in Chinatown Las Vegas (Spring Mountain Road, 3 miles west of the Strip via Uber $8–12): genuinely excellent Korean, Vietnamese, Japanese, and Chinese restaurants at half the Strip&apos;s prices. Ramen Sora ($15–18), Makino Chaya Japanese buffet ($25), or Yui Edomae Sushi ($30–50) are all reliable.",
                  "9:30pm — One final walk past the Bellagio fountains. The midnight show is the most energetic of the night — watch from the casino-side bridge for the best view and audio. Monorail ($6/ride) or Uber back to your hotel for departure.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Las Vegas" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🎰 Las Vegas Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important attractions in order of priority — with real admission costs and honest time estimates as of 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Bellagio Fountains",
                  e: "Free",
                  d: "The choreographed fountain show on the Bellagio&apos;s 8-acre artificial lake. Shows run every 15–30 minutes from 3pm, every 15 minutes 7pm–midnight. Each show lasts 4 minutes. Watch 2–3 shows from different positions. The single best free attraction in Las Vegas.",
                  t: "Must see · 30–60 mins",
                },
                {
                  n: "Fremont Street Experience",
                  e: "Free (zip line $39–59)",
                  d: "The world&apos;s largest video display — a 1,500-foot LED canopy covering the original casino corridor. Free light shows hourly from dusk until 1am. The zip line runs the length of the canopy. The energy here is rawer than the Strip and the casinos (Golden Nugget, Circa, Binion&apos;s) are more approachable.",
                  t: "Must see · 1.5–2 hrs",
                },
                {
                  n: "High Roller Observation Wheel",
                  e: "$25 day / $37 evening",
                  d: "The world&apos;s largest observation wheel at 167m. Each cabin holds 40 people; one rotation takes 30 minutes. The view covers the entire Las Vegas Valley, Lake Mead, and the Spring Mountains. Evening rides are worth the premium — the Strip in full neon is exceptional from above. Buy tickets online for a 20% discount.",
                  t: "Worth it · 1 hr",
                },
                {
                  n: "Grand Canyon South Rim",
                  e: "$35/vehicle (7-day pass)",
                  d: "4.5 hours from Las Vegas. One of the few natural landmarks that exceeds its reputation. The Rim Trail (paved, free), Bright Angel Trail (hike to the first rest house, 3 miles round trip), and Desert View Drive are the key activities. Day tours from Las Vegas ($80–200/person) include transport. Helicopter tours ($350–500) add a canyon-floor landing.",
                  t: "Full day · Essential",
                },
                {
                  n: "Red Rock Canyon",
                  e: "$15/vehicle",
                  d: "17 miles west of the Strip. A 13-mile scenic loop through red and cream Aztec Sandstone. The Calico Hills are the most accessible hiking area. Best visited in the morning when the red rock faces catch the light. Combined with the AREA15 / Meow Wolf Omega Mart visit for a full non-casino day.",
                  t: "Half day · Underrated",
                },
                {
                  n: "Bellagio Conservatory",
                  e: "Free, open 24 hours",
                  d: "A 14,000 sq ft glass-domed atrium redesigned five times per year by a 140-person horticulture team. Thousands of live flowers, elaborate topiary, and themed sculptures. Located inside the Bellagio casino — walk through the casino floor past the check-in desk and follow signs. Genuinely extraordinary for a free in-casino attraction.",
                  t: "Must see · 20–30 mins",
                },
                {
                  n: "Mob Museum",
                  e: "$30",
                  d: "One of the most well-curated museums in the American West — housed in the 1933 federal courthouse where Senate crime hearings were held. Three floors covering organized crime history from Prohibition to the present. The Prohibition Bar in the basement serves cocktails from 10am. Genuine artifacts include FBI wiretapping equipment and the St. Valentine&apos;s Day Massacre wall panel.",
                  t: "Worth it · 2 hrs",
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
            title="Las Vegas — Strip, Desert &amp; Beyond"
            subtitle="Neon, fountains, canyon walls, and desert light."
            spots={[
              {
                name: "Bellagio Fountains at Night",
                query: "bellagio fountains las vegas night neon lights nevada",
                desc: "The Bellagio&apos;s choreographed fountain show — 1,200 nozzles firing water 460 feet into the air over the 8-acre lake, free every 15 minutes.",
              },
              {
                name: "Las Vegas Strip Neon",
                query: "las vegas strip nevada casino neon lights night boulevard",
                desc: "The Strip at night — 4.2 miles of casino hotels, LED signage, and perpetual motion from Mandalay Bay to the Wynn.",
              },
              {
                name: "Grand Canyon South Rim",
                query: "grand canyon south rim arizona colorado river sunrise",
                desc: "The Grand Canyon South Rim — 4.5 hours from Las Vegas, 1.6km deep, 29km wide, and unchanged since the Colorado River began carving it 5–6 million years ago.",
              },
              {
                name: "Red Rock Canyon",
                query: "red rock canyon las vegas nevada sandstone desert morning",
                desc: "Red Rock Canyon&apos;s Aztec Sandstone formations 17 miles west of the Strip — a 13-mile scenic loop through red and cream desert landscape.",
              },
              {
                name: "Fremont Street Experience",
                query: "fremont street las vegas downtown neon canopy light show",
                desc: "The Fremont Street Experience LED canopy — 1,500 feet of the world&apos;s largest video display covering the original casino corridor.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Las Vegas has the most extreme hotel pricing differential in any US city — the same room can cost $45 on a Tuesday and $380 on a Friday night. Always check total cost including the mandatory resort fee ($30–50/night) before booking.
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
                    ["🏨 Hotel (per night + resort fee)", "$70–115", "$130–235", "$345–2,045"],
                    ["🍽️ Food (per day)", "$20–35", "$50–90", "$150–400"],
                    ["🚗 Transport (per day)", "$10–20", "$20–40", "$50–150"],
                    ["🎰 Activities (per day)", "$10–40", "$40–100", "$100–500"],
                    ["TOTAL (per day)", "$70–120", "$180–350", "$500–2,000+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($70–120/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay off-Strip or at Circus Circus, eat at In-N-Out and casino cafeterias, use the Deuce bus. Bellagio fountains, Conservatory, Fremont Street, and Red Rock Canyon are all free or cheap. A $0 day in Las Vegas, properly spent, beats a $0 day in most cities.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($180–350/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Park MGM or Vdara ($100–200/night), one Cirque show, Grand Canyon day trip with car rental, Secret Pizza and one proper restaurant. This is the sweet spot — you hit the best experiences without overspending on things that don&apos;t matter.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($500–2,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Wynn or Bellagio suites, helicopter Grand Canyon tour, Joël Robuchon tasting menu ($250–400/person), private Neon Museum tour, Canyon Ranch Spa treatments. Las Vegas luxury is genuinely world-class — but the gap between mid-range and luxury is enormous.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Las Vegas</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Center Strip (Bellagio to Venetian) is the best location for walking to both north and south Strip attractions. All major casino hotels charge mandatory resort fees of $30–50/night on top of the room rate — always check the total before booking.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "The Venetian Resort",
                  type: "Luxury · Center Strip",
                  price: "From $150/night + resort fee",
                  badge: "Best location",
                  desc: "The most centrally located luxury property on the Strip — between the Bellagio and Wynn, walking distance to everything. All suites (no standard rooms), with the indoor Grand Canal, the Palazzo Shoppes, and access to Enoteca San Marco and B&B Ristorante. Resort fee $45/night.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Wynn Las Vegas",
                  type: "Luxury · North Strip",
                  price: "From $200/night + resort fee",
                  badge: "Most elegant",
                  desc: "The most design-coherent hotel on the Strip — Steve Wynn&apos;s original vision with Frette linens, floor-to-ceiling windows, and the best casino floor layout. The botanical atrium and the SW Steakhouse lakeside terrace are exceptional. Resort fee $45/night. Quiet relative to MGM properties.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Park MGM",
                  type: "Mid-Range · South Strip",
                  price: "From $100/night + resort fee",
                  badge: "Best mid-range",
                  desc: "The only major Strip casino that bans smoking anywhere in the building. Clean, modern design, notably quieter than casino hotels. Connected to T-Mobile Arena (live events). Resort fee $39/night. Closest major Strip hotel to the airport. NoMad restaurant is excellent.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Circus Circus",
                  type: "Budget · North Strip",
                  price: "From $40/night + resort fee",
                  badge: "Best budget",
                  desc: "The Strip&apos;s original budget anchor — dated rooms, but the location (north Strip, walkable to Wynn/Encore) is solid. Midway arcade keeps children occupied. Rooms from $40 midweek (add $30–35 resort fee). The best budget option on the actual Strip rather than off-Strip motels.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Las Vegas</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Strip restaurant pricing runs 40–80% higher than equivalent quality off-Strip. The best strategy: one or two proper Strip meals (the celebrity chef restaurants are genuinely good), and the rest from the hidden gems and Chinatown.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Joël Robuchon (MGM Grand)",
                  t: "French fine dining · MGM Grand · $$$",
                  d: "One of three Michelin-starred restaurants in Las Vegas. The 16-course tasting menu ($250–400/person) in a 1930s Paris apartment setting is extraordinary — house-made bread trolley, the best pommes purée you&apos;ll ever eat, and a wine pairing that adds $150–250/person. Reserve 4–6 weeks ahead. Jacket preferred. The most memorable meal available in Las Vegas.",
                  b: "Special occasion",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Bacchanal Buffet (Caesars Palace)",
                  t: "Buffet · Caesars Palace · $$",
                  d: "The best buffet on the Strip — $45/person for dinner, covering 500+ items across 9 kitchens including seafood, dim sum, a wood-fired pizza station, and a dessert section with 70+ options. Not cheap for a buffet, but the quality and range genuinely justify the price. Arrive at opening to avoid the longest queues. Book online to skip the walk-up line.",
                  b: "Best buffet",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Secret Pizza (Cosmopolitan)",
                  t: "Pizza · 3rd Floor Cosmopolitan · $",
                  d: "Unmarked — follow the handwritten signs through the Cosmopolitan&apos;s 3rd floor corridors past the elevator banks. Excellent thin-crust New York-style pizza by the slice ($5–8) or whole pie. Open 11am–3am, no website, no reservations. Consistently cited by Las Vegas insiders as the best value eating experience on the Strip.",
                  b: "Best secret",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "In-N-Out Burger (south Strip)",
                  t: "Burgers · 3545 Las Vegas Blvd · $",
                  d: "Open late, $5–9 for a Double-Double combo. The Animal Style burger (grilled onions, Thousand Island spread, extra pickles) is ordered off-menu — ask for it by name. The best fast food in Las Vegas and one of the few restaurants on the Strip where the queue actually moves quickly. Essential at least once.",
                  b: "Late-night essential",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Chinatown (Spring Mountain Road)",
                  t: "Asian dining · 3 miles west of Strip · $–$$",
                  d: "Las Vegas&apos;s best-kept food secret — a genuine Asian restaurant corridor with Korean, Vietnamese, Japanese, and Chinese restaurants at half the Strip&apos;s prices. Ramen Sora ($15–18/bowl), Makino Chaya Japanese buffet ($25), and Yui Edomae Sushi ($30–50 for omakase-lite) are all reliable. Take an Uber ($8–12) rather than attempting to walk.",
                  b: "Best value area",
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
            destination="Las Vegas Nevada"
            hotels={[
              {
                name: "The Venetian Resort Las Vegas",
                type: "Luxury all-suite · Center Strip",
                price: "From $150/night",
                rating: "5",
                badge: "Best location",
                url: "https://www.booking.com/hotel/us/the-venetian-resort-las-vegas.html?aid=2820480",
              },
              {
                name: "Wynn Las Vegas",
                type: "Luxury · North Strip",
                price: "From $200/night",
                rating: "5",
                badge: "Most elegant",
                url: "https://www.booking.com/hotel/us/wynn-las-vegas.html?aid=2820480",
              },
              {
                name: "MGM Grand Hotel & Casino",
                type: "Mid-Range · South Strip",
                price: "From $80/night",
                rating: "4",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/us/mgm-grand.html?aid=2820480",
              },
              {
                name: "Park MGM Las Vegas",
                type: "Non-smoking · South Strip",
                price: "From $100/night",
                rating: "4",
                badge: "Smoke-free",
                url: "https://www.booking.com/hotel/us/park-mgm-las-vegas.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Grand Canyon South Rim Full Day Tour",
                duration: "14 hrs",
                price: "From $110/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=grand+canyon+day+trip+las+vegas&partner_id=PSZA5UI",
              },
              {
                name: "Red Rock Canyon Half Day Tour",
                duration: "4 hrs",
                price: "From $55/person",
                badge: "Top pick",
                url: "https://www.getyourguide.com/s/?q=red+rock+canyon+las+vegas&partner_id=PSZA5UI",
              },
              {
                name: "Las Vegas Helicopter Night Flight",
                duration: "15 mins",
                price: "From $99/person",
                badge: "Memorable",
                url: "https://www.getyourguide.com/s/?q=las+vegas+helicopter+night&partner_id=PSZA5UI",
              },
              {
                name: "Valley of Fire State Park Tour",
                duration: "5 hrs",
                price: "From $65/person",
                url: "https://www.getyourguide.com/s/?q=valley+of+fire+las+vegas+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Las Vegas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "📅",
                  title: "Booking Weekend Hotel Rates",
                  desc: "The same room at MGM Grand or Caesars Palace costs $45 on a Wednesday and $380 on a Friday night. This is not a small variation — it&apos;s the most extreme hotel pricing differential in any US city. If your schedule is flexible, arrive Sunday–Thursday. You will sometimes save $250+/night for an identical room.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🏜️",
                  title: "Skipping the Grand Canyon Day Trip",
                  desc: "The most common regret among Las Vegas visitors. The 4.5-hour drive to the South Rim is worth every minute — the Grand Canyon is one of the few natural landmarks that exceeds its reputation. For those without a car, helicopter tours ($350–500) descend into the canyon in 45 minutes each way.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍽️",
                  title: "Eating on the Strip Without Research",
                  desc: "Strip restaurants run 40–80% more expensive than equivalent quality off-Strip. The celebrity chef restaurants are often good but not exceptional for their price. The best value: Secret Pizza (Cosmopolitan, $5/slice), In-N-Out Burger, casino worker cafeterias, and Spring Mountain Road Chinatown for real meals at half the Strip prices.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "💰",
                  title: "Not Checking Resort Fees Before Booking",
                  desc: "Every major Las Vegas hotel charges a mandatory resort fee of $30–50/night on top of the room rate — regardless of whether you use the pool, WiFi, or fitness center. A room listed at $45/night can actually cost $80–90 after resort fee and taxes. Always check the total nightly cost before booking. Some smaller casinos (Ellis Island, The D) have lower or no resort fees.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Las Vegas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌡️",
                  title: "Las Vegas Summer Heat Is an Extreme Sport",
                  desc: "June–August temperatures reach 40–45°C. The Strip&apos;s asphalt amplifies heat — the sidewalk between casinos can feel like a convection oven at 3pm. Plan all outdoor activities (Grand Canyon, Red Rock) for 6–9am, then retreat to air-conditioned casinos. Casino floors stay at 21°C regardless. March–May and September–November are the genuinely pleasant windows.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🎰",
                  title: "The Player&apos;s Card Is Free Money",
                  desc: "Every casino offers a free loyalty card that earns points for gambling, dining, and hotel stays. If you&apos;re going to gamble at all — even $20 at a slot — get the card first. MGM Rewards, Caesars Rewards, and Wynn Rewards all deliver real value: free meals, room upgrades, and show tickets. Ask the casino host: &apos;What can you do for me as a new member?&apos; — you&apos;ll often get a free dinner or play credit.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🆓",
                  title: "The Best Free Things Are Genuinely World-Class",
                  desc: "Bellagio fountains (every 15 minutes, free), Bellagio Conservatory (botanical art, free, 24 hours), Wynn botanical atrium (free), Fremont Street Experience (light shows hourly, free), The Venetian&apos;s indoor Grand Canal (free), Caesars Palace Forum Shops (free to walk), the Welcome to Las Vegas sign, and the Arts District murals. A $0 day in Las Vegas, well-spent, beats most cities.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🚗",
                  title: "Getting Around — What Actually Works",
                  desc: "The Strip is 6.5km from Mandalay Bay to the Wynn — a 90-minute walk in summer heat. The monorail ($6/ride) runs mid-Strip. The Deuce bus ($6/day unlimited) covers the full Strip and Fremont Street. Uber/Lyft are cheap ($8–15 for most Strip trips) and fastest for off-Strip destinations. From the airport: Uber/Lyft $15–25 (8 minutes), shared shuttle $8–15 (slower).",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🍸",
                  title: "Drinking on the Street Is Legal in Las Vegas",
                  desc: "Nevada law permits open-container alcohol on the Strip and Fremont Street — you can legally walk between casinos with a cocktail in hand. Casinos provide free drinks to gamblers at table games (tip the cocktail server $1–2 per drink — this is how they&apos;re compensated). The Fremont Street Experience has walk-up bar windows. Do not drink and drive — Nevada DUI enforcement is strict.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🎫",
                  title: "Book Shows Two to Three Weeks Ahead",
                  desc: "Cirque du Soleil O at Bellagio, Blue Man Group at Luxor, and the Neon Museum night tours all sell out regularly — especially on weekends and during convention season (January, March, June). Book online as soon as your dates are confirmed. For residency concerts at Dolby Live or the Michelob Ultra Arena, booking 4–6 weeks ahead is essential. Same-day tickets at the box office are rare for top shows.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Las Vegas" />

          {/* Combine With */}
          <CombineWith currentSlug="las-vegas-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "What is the minimum gambling age in Las Vegas?",
                  a: "21 years old, enforced throughout Nevada by state law. This applies to all casino gaming — slot machines, table games, poker, and sports betting. There are no exceptions for international visitors regardless of the legal gambling age in their home country. Casinos will card anyone who appears under 30, and being caught gambling under 21 results in immediate removal. Non-gambling amenities — shows, restaurants, pools, hotels — are available to guests of all ages.",
                },
                {
                  q: "Can you really drink alcohol on the Las Vegas Strip?",
                  a: "Yes — Nevada state law allows open containers of alcohol on the Las Vegas Strip (Las Vegas Boulevard) and in the Fremont Street Experience area. You can legally walk between casinos carrying a cocktail, beer, or wine. Plastic cups and to-go cups are used — casino bars and walk-up windows on Fremont Street sell drinks specifically for this purpose. The only restriction: glass containers are not permitted on the street. Casinos also provide free drinks to active gamblers at table games, though tipping the cocktail server $1–2 per drink is expected.",
                },
                {
                  q: "How far is the Grand Canyon from Las Vegas?",
                  a: "Grand Canyon South Rim: 450km, 4.5 hours by car via US-93 and I-40. Most visitors make this a very long day (5am departure, return by 10pm). Grand Canyon West Rim (the Skywalk): 190km, 2.5 hours — closer but more commercialized and less spectacular. Recommended: South Rim if you have a full day, or a helicopter tour ($350–500) that covers the distance in 45 minutes each way and includes a canyon-floor landing on some packages.",
                },
                {
                  q: "What are the best shows in Las Vegas in 2026?",
                  a: "Cirque du Soleil O at Bellagio ($100–200) is the consistent benchmark — the water-based show is the most technically spectacular production in the city. Blue Man Group at Luxor ($80–150) for something genuinely different — paint-splashing, audience interaction, original music. The Sphere (Las Vegas Blvd near the Venetian) opened in 2023 with the largest LED screen ever built — check current programming at msg.com/sphere. For residency concerts, check current lineups at Dolby Live (Park MGM) — major artists do extended Las Vegas residencies with production that exceeds their touring shows.",
                },
                {
                  q: "Is Las Vegas safe for tourists?",
                  a: "The casino-heavy Strip and downtown Fremont Street are heavily policed and generally safe for tourists. Main concerns: pickpockets in crowded areas (Fremont Street late at night can get rowdy), card slappers who aggressively push adult entertainment advertising (annoying but not dangerous), and scammers outside casinos. Stay inside casino properties if uncomfortable on the street — they are private security-monitored environments. Areas immediately off the Strip (especially east of the Strip) require more situational awareness. The Strip is busy and staffed at all hours — it is a 24-hour city.",
                },
                {
                  q: "Where is the best location to stay in Las Vegas?",
                  a: "Center Strip (Bellagio to Venetian): the best location for walking to both north and south Strip attractions — The Venetian, Cosmopolitan, Caesars Palace, and Bellagio are all here. North Strip (Wynn, Encore): slightly less central but quieter, refined atmosphere. South Strip (Mandalay Bay, MGM Grand, Park MGM): closest to the airport (5 minutes), convenient for arrivals and departures. Downtown Fremont Street: cheapest area, more authentic Las Vegas character, less polished — good base if you prefer the Mob Museum and Arts District over Strip spectacle.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Las Vegas trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-las-vegas", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/las-vegas-budget-guide", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/grand-canyon-from-las-vegas", label: "Grand Canyon day trip", icon: "🏜️" },
                { href: "/blog/las-vegas-free-things", label: "Free things to do", icon: "🆓" },
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
          <RelatedGuides currentSlug="las-vegas-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More North America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "New York in 5 Days — The Full City Guide", href: "/blog/new-york-5-days" },
                { label: "Los Angeles in 4 Days — From Hollywood to the Beach", href: "/blog/los-angeles-4-days" },
                { label: "Grand Canyon 3 Days — Rim to Rim &amp; Day Hikes", href: "/blog/grand-canyon-3-days" },
                { label: "Miami 4 Days — Art Deco, Beaches &amp; Nightlife", href: "/blog/miami-4-days" },
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
