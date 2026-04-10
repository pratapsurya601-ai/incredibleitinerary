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
const DOHA_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Doha Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "Day-by-Day Itinerary" },
  { id: "landmarks",   emoji: "🏛️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Doha 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Doha in 3 Days — Museum of Islamic Art, Souq Waqif and a desert safari&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/doha-3-days"
        imageUrl="https://images.unsplash.com/photo-1578897367abb1d08d64e4f97b9f0e6?w=1200&q=80"
        description="Doha in 3 Days: Museum of Islamic Art, Souq Waqif, The Pearl, desert safari and the world&apos;s fastest-growing skyline — complete travel guide with real prices in QAR."
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
export default function DohaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={DOHA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Doha" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="doha qatar skyline corniche west bay towers night"
            fallback="https://images.unsplash.com/photo-1578897367abb1d08d64e4f97b9f0e6?w=1600&q=80"
            alt="Doha Qatar skyline West Bay skyscrapers reflected in Corniche waterfront at night"
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
              <span className="text-white/70">Doha 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  🇶🇦 Middle East
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Doha in 3 Days:
                <em className="italic text-amber-300"> Museum of Islamic Art, Souq Waqif &amp; the Desert</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                A mega-city that rose from a fishing village in fifty years — world-class museums, a 7km Corniche, the Pearl island, dune-bashing safaris, and one of the finest Islamic art collections on earth. The complete guide.
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
              <span>🌍 Qatar, Middle East</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From QAR 330/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Doha is one of the world&apos;s newest mega-cities — a skyline of twisting glass towers rising from a desert peninsula that was a fishing village in the 1970s. The Museum of Islamic Art sits on its own island like a textbook of 14 centuries of civilisation, the National Museum of Qatar spirals like a desert rose, Souq Waqif thrums with falcon sellers and spice merchants until midnight, and the fastest-growing skyline on Earth reflects in the Corniche at dawn.
            </p>
          </blockquote>

          {/* ── WHAT DOHA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Doha Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              In 1971, Qatar was one of the poorest countries in the Gulf. It had no paved roads, no hospitals, and its economy depended almost entirely on pearl diving — a trade that had already collapsed decades earlier. Then came oil and gas, and then came the vision. Today Qatar has the world&apos;s highest GDP per capita, and Doha is its showpiece: a city built from scratch in half a century, now competing with Dubai and Abu Dhabi for cultural credibility and world-class infrastructure.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What makes Doha different from its Gulf neighbours is the cultural investment. The Museum of Islamic Art — designed by I.M. Pei and opened in 2008 — houses one of the most important collections of Islamic art, manuscripts, and artefacts in the world, and entry is completely free. The National Museum of Qatar, designed by Jean Nouvel as an interlocking series of desert rose crystals, opened in 2019 and tells the story of Qatar from ancient Bedouin life to the present. These are not vanity projects — they are genuinely world-class institutions.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Alongside the museums, Doha has Souq Waqif — a lovingly restored old market that looks centuries old but was actually rebuilt in the 2000s on original foundations. It is the most atmospheric place in the city: narrow alleyways, spice merchants, falcon shops, Lebanese restaurants, and shisha cafes open until 1am. The Pearl-Qatar is the artificial island luxury district — yachts, Maseratis, Nobu, and Qatari families walking the boardwalk on cool evenings. And beyond the city, 105km north, Al Zubarah Fort is a UNESCO World Heritage Site almost entirely to yourself.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="DOH (HIA)" />
              <StatCard icon="🌡️" label="Best Season" value="Nov–Apr" />
              <StatCard icon="🕌" label="MIA Entry" value="Free" />
              <StatCard icon="💰" label="Budget From" value="QAR 330/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Doha</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Nov–Feb",
                  i: "☀️",
                  t: "Winter — Best Season",
                  d: "18–26°C, genuinely pleasant for outdoor exploring. The Corniche walk, Souq Waqif at night, and desert safaris are all comfortable. December and January bring the most settled weather. Qatar National Day (December 18) adds festivity. This is peak season — book hotels early.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🌅",
                  t: "Spring — Warm but Viable",
                  d: "22–34°C. Morning and evening exploration works well; midday gets hot. March is still very comfortable. Fewer tourists than December–January. Sand haze (shamal wind) can reduce visibility in March–April. A good shoulder-season option if you start early and rest in the afternoon.",
                  b: "Good shoulder season",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "May–Sep",
                  i: "🔥",
                  t: "Summer — Extreme Heat",
                  d: "38–46°C with near-100% humidity. Being outdoors for more than 10 minutes is genuinely unpleasant. The city moves between air-conditioned malls, hotels, and cars. Museums and indoor attractions are fine, but outdoor sights like the Corniche, desert safari, or Souq Waqif evening walks are almost impossible to enjoy.",
                  b: "Not recommended",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Oct",
                  i: "🍂",
                  t: "October — Transition Month",
                  d: "28–36°C. Cooling from the summer but still very warm. By late October it becomes manageable. Ramadan occasionally falls in this period depending on the lunar calendar — during Ramadan, eating and drinking in public is prohibited during daylight hours, many restaurants close for lunch, and the city has a very different atmosphere. Respectful travellers often find Ramadan evenings at Souq Waqif extraordinary.",
                  b: "Improving",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Doha</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Hamad International Airport (DOH) is consistently rated one of the world&apos;s best airports. It is 15km from the city centre. The Doha Metro Gold Line connects directly to the airport — QAR 4, 30 minutes to the city. Qatar Airways operates one of the world&apos;s most extensive route networks from here.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚇",
                  t: "Metro from Hamad International Airport (recommended)",
                  d: "The Gold Line metro runs directly from Hamad International Airport to the city centre. QAR 4 per journey, approximately 30 minutes to Al Mana station or Souq Waqif area. Buy a Doha Metro card (Qitaf) at the airport station — QAR 10 card deposit, load credit as needed. Clean, air-conditioned, extremely reliable. The single best way to get into the city.",
                  b: "Cheapest & fastest",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚖",
                  t: "Taxi from Hamad International Airport",
                  d: "Metered taxis are available outside arrivals. QAR 70–100 to most central hotels depending on traffic. Karwa taxis (the official operator) are safe and metered. Uber and Careem also operate from the airport. Journey time: 20–40 minutes depending on traffic.",
                  b: "Convenient for luggage",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🏨",
                  t: "Hotel shuttle (for 4-5 star hotels)",
                  d: "Most upscale Doha hotels offer complimentary or paid airport transfers. Book in advance through your hotel. This is the most comfortable option if arriving late or with a lot of luggage at a mid-range or luxury property.",
                  b: "For hotel guests",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🔄",
                  t: "Qatar Airways Doha Stopover (free for transit passengers)",
                  d: "Qatar Airways offers a free or heavily discounted &apos;Doha Stopover&apos; programme for passengers transiting through Hamad International Airport. If your layover is 8+ hours you can get a free or subsidised hotel night and guided tour. One of the world&apos;s best transit deals — ask Qatar Airways when booking.",
                  b: "Transit travellers",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Doha Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary balances free world-class culture with paid experiences — you can do Doha on QAR 330/day (budget) or QAR 1,800/day (luxury). All prices in Qatari Riyal (QAR). 1 USD ≈ 3.64 QAR.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Corniche Walk · Museum of Islamic Art · Souq Waqif"
                cost="QAR 150–200 budget (MIA free, dhow cruise QAR 50, meals QAR 70, Metro QAR 10)"
                items={[
                  "6:30am: Corniche waterfront walk — the 7km promenade along the West Bay waterfront is free, and the dawn reflection of the glass towers in the calm water is the photograph on every Qatar Tourism poster. Best light is 15–30 minutes after sunrise. Almost empty at this hour.",
                  "8:30am: Museum of Islamic Art (MIA). I.M. Pei&apos;s masterpiece sits on its own purpose-built island, connected to the Corniche by a causeway. Entry to the permanent collection is completely free. The collection spans 14 centuries of Islamic art from three continents — manuscripts, ceramics, metalwork, textiles, jewellery — one of the most important collections of its kind in the world. Budget 2 hours minimum. The building alone, with its geometric stone facade and the bay views from the upper galleries, justifies a visit.",
                  "11am: Walk back along the Corniche towards Souq Waqif — a 20-minute walk or QAR 4 Metro ride. Stop at the MIA Park for photographs of the museum from the outside before leaving.",
                  "Lunch: Shawarma from one of the small Lebanese or Syrian shops near Souq Waqif entrance — QAR 12–18 for a large wrap. Or sit down at one of the ground-floor Souq restaurants for grilled chicken and mezze at QAR 35–50.",
                  "2pm: Explore Souq Waqif on foot. The souq was rebuilt in the early 2000s on original 1930s foundations — traditional mudbrick architecture, narrow covered alleyways, and an astonishing range of goods: spices, incense, live birds, traditional Qatari dress (thobes and abayas), falconry equipment, and handicrafts. The falcon market is unlike anything else in the world — birds sitting on perches outside shops, waiting for their owners, while vendors in white thobes discuss bloodlines.",
                  "4:30pm: Dhow boat cruise from the Souq Waqif waterfront. Traditional wooden dhow boats depart for 1-hour evening cruises past the Corniche and MIA — QAR 50 per person. Book at the waterfront ticket booths. The West Bay skyline at dusk from the water is spectacular.",
                  "Evening: Dinner in Souq Waqif — Al Shami (Lebanese mezze, QAR 50–80 pp) or one of the seafood restaurants on the upper floor. After dinner: coffee and shisha at a Souq Waqif café. Most stay open until 1am. The atmosphere after 9pm — crowds, music, the smell of incense — is Doha at its best.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="The Pearl-Qatar · Katara Cultural Village · National Museum of Qatar"
                cost="QAR 200–280 (NMoQ entry QAR 100, taxi QAR 40, meals QAR 80)"
                items={[
                  "9am: Metro to The Pearl-Qatar artificial island — take the Gold Line to Legtaifiya Metro Station and walk or taxi 10 minutes to The Pearl entrance. The Pearl is a man-made island reclaimed from the sea, covering 4km² with 32km of coastline. It houses luxury apartments, superyacht marinas, and about 350 retail and dining outlets. This is where Doha&apos;s wealthy residents and expatriates live and shop.",
                  "Walk the Qanat Quartier — a Venice-inspired canal district in the centre of The Pearl, with pastel-coloured apartment buildings and canal boats. It is frankly surreal in the middle of the Arabian desert, but also genuinely pleasant on a cool morning. Coffee at a Pearl waterfront café — QAR 18–25.",
                  "11am: Taxi to Katara Cultural Village (QAR 15–20). Katara is Doha&apos;s arts and cultural district — a beautifully designed open-air complex on the coast between The Pearl and West Bay. It has a stunning Ottoman-style mosque (visitors welcome outside prayer times), an amphitheatre, art galleries, and a public beach. Entry is free. The architecture is some of the most thoughtfully designed in Doha.",
                  "Katara Beach: free access on weekday mornings. The beach faces north across the bay — calm, clean, with views towards The Pearl. Worth 30 minutes even if you don&apos;t swim.",
                  "1:30pm: Lunch at one of Katara&apos;s restaurants — the open-air upper level has several options from Lebanese to Indian to fast food. Budget QAR 40–60.",
                  "3pm: Taxi to the National Museum of Qatar (QAR 15). Jean Nouvel&apos;s extraordinary building looks like a cluster of desert rose crystal formations — interlocking disc-shaped structures rising from a shallow pool. Entry: QAR 100 adults. The permanent exhibition on Qatar&apos;s history is genuinely absorbing: pearl diving, Bedouin life, the discovery of oil and gas, and Qatar&apos;s transformation. Spend 2–2.5 hours.",
                  "Evening: Walk the Corniche again — this time at sunset from the south end near the MIA, watching the West Bay towers turn gold. Dinner at a mid-range restaurant or return to Souq Waqif.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Al Zubarah Fort (UNESCO) day trip OR Desert Safari"
                cost="QAR 250–400 (Al Zubarah car hire QAR 150, desert safari group tour QAR 150–200)"
                items={[
                  "Choose your Day 3 based on interest. Option A (history): Al Zubarah Fort UNESCO day trip. Option B (adventure): Doha desert safari with dune bashing and camel ride.",
                  "Option A — Al Zubarah Fort (UNESCO World Heritage Site): 105km north of Doha, Al Zubarah is an 18th-century fortified trading town and pearl fishing settlement — one of the best-preserved examples of a Gulf Arab trading post in the world. The fort itself is free (QAR 10 suggested donation). Rent a car from Doha (from QAR 120/day, international licence required) or join a guided day tour (QAR 120–180). The 1.5-hour drive north takes you through Qatar&apos;s flat desert landscape — surprisingly meditative. Combine with Al Zubara Archaeological Site for the excavated town ruins alongside.",
                  "Option B — Desert Safari (dune bashing + camel ride + sandboarding): Most tours depart Souq Waqif around 2:30–3pm, drive south to the sand dunes near Sealine Beach (about 60km from Doha), spend 2 hours dune bashing in 4WD vehicles, then add camel riding, sandboarding, and a sunset BBQ dinner in a traditional Bedouin camp. Group tours: QAR 150–200 per person. Private 4WD tours: QAR 350–500. Book through your hotel or a licensed Doha tour operator. The dunes at Sealine are genuine — high, orange, and empty of crowds on weekday afternoons.",
                  "10am (if not on a day trip): Final morning — visit any missed attraction. Villaggio Mall (the fake-Venice shopping mall with an indoor gondola canal) is worth 45 minutes for the sheer absurdity — QAR 15 for a gondola ride. Or the Museum of Illusions near The Pearl (QAR 60 adults).",
                  "Lunch: If departing that evening, eat at a good Souq Waqif restaurant for a final meal. IDAM by Alain Ducasse at the Museum of Islamic Art (open for lunch, QAR 150–250 pp) is worth splurging on for a departure meal — spectacular bay views, refined Arabic-French cuisine.",
                  "Late afternoon: Return to Hamad International Airport. Metro Gold Line from Al Riffa or Al Sadd area — QAR 4, 30 minutes. Allow 3 hours before international departure.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Doha" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Doha Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees in QAR — 1 USD ≈ 3.64 QAR. Many of Doha&apos;s top attractions are free.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Museum of Islamic Art (MIA)",
                  e: "Free (permanent collection)",
                  d: "I.M. Pei&apos;s geometric stone masterpiece on its own island, connected to the Corniche by a causeway. One of the world&apos;s most important collections of Islamic art — 14 centuries of manuscripts, ceramics, metalwork, textiles, and jewellery from three continents. The building itself, with its clean geometric forms and the bay views from the upper galleries, is worth 2 hours. IDAM by Alain Ducasse restaurant inside for lunch.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Souq Waqif",
                  e: "Free to enter",
                  d: "Doha&apos;s ancient market, rebuilt on original 1930s foundations in the early 2000s. Traditional mudbrick architecture, narrow covered alleyways, spice merchants, live birds, falcon equipment, handicrafts, and dozens of restaurants and shisha cafes open until 1am. The falcon market (Souq Al Waqif Falcon) is unique in the world. Go twice — once in the afternoon and once after 9pm. Completely different atmospheres.",
                  t: "Must see · Half day",
                },
                {
                  n: "National Museum of Qatar (NMoQ)",
                  e: "QAR 100 adults / QAR 50 children",
                  d: "Jean Nouvel&apos;s desert rose building is one of the most extraordinary pieces of architecture in the Gulf — interlocking disc structures that seem to grow from the ground. Inside, the permanent collection on Qatar&apos;s history (pearl diving, Bedouin life, oil era, and present) is absorbing and well curated. Budget 2–2.5 hours. Located between the Corniche and Souq Waqif.",
                  t: "Must see · 2–2.5 hrs",
                },
                {
                  n: "The Pearl-Qatar",
                  e: "Free to walk (shops and restaurants extra)",
                  d: "Man-made island covering 4km² with luxury apartments, superyacht marinas, and 32km of waterfront. The Qanat Quartier canal district is the most photogenic area. Worth 2–3 hours on a cool morning — walk the boardwalk, have coffee by the marina, see how Doha&apos;s wealthiest residents live.",
                  t: "Lifestyle · 2–3 hrs",
                },
                {
                  n: "Katara Cultural Village",
                  e: "Free (beach access nominal fee some days)",
                  d: "Doha&apos;s arts and culture district on the coast — Ottoman-style mosque, amphitheatre, art galleries, restaurants, and a public beach. Some of the most thoughtful architecture in Doha. Busy on Thursday evenings with local families. The mosque exterior is open for photography; interior visit is for Muslims at prayer times.",
                  t: "Culture · 1.5–2 hrs",
                },
                {
                  n: "Al Zubarah Fort (UNESCO)",
                  e: "QAR 10 suggested donation",
                  d: "105km north of Doha — an 18th-century fortified trading town and pearl fishing settlement, one of the best-preserved examples of a Gulf Arab trading post in the world. UNESCO World Heritage Site since 2013. The fort, the excavated town ruins, and the flat desert drive north are all worth the trip. Best done as a half-day car hire trip.",
                  t: "Day trip · Half day",
                },
                {
                  n: "Corniche Waterfront",
                  e: "Free",
                  d: "The 7km waterfront promenade running along the West Bay from the MIA to the dhow harbour at Souq Waqif. The best views of the West Bay skyline are from the south end near MIA. Dawn and dusk are the ideal times — the glass towers reflect pink and gold in the still water. The perfect free activity in Doha.",
                  t: "Free · Any time",
                },
                {
                  n: "Desert Safari (Sealine Beach area)",
                  e: "QAR 150–200 (group) / QAR 350–500 (private)",
                  d: "Dune bashing in 4WD vehicles, camel riding, sandboarding, and sunset BBQ in a Bedouin camp — the classic Doha half-day experience. The dunes at Sealine Beach (~60km south) are genuine high-sand-desert. Most tours include hotel pickup, 2 hours of dune driving, a camel ride, and dinner. One of the highlights of any Doha trip.",
                  t: "Adventure · Half day",
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
            title="Doha — Skyline, Souq &amp; Desert"
            subtitle="The Museum of Islamic Art, Souq Waqif, the Pearl, and Qatar&apos;s golden dunes."
            spots={[
              {
                name: "Museum of Islamic Art Doha",
                query: "museum islamic art doha qatar I.M. Pei architecture",
                desc: "I.M. Pei&apos;s geometric stone masterpiece on its own island — one of the world&apos;s great museum buildings and home to 14 centuries of Islamic art.",
              },
              {
                name: "Souq Waqif Doha",
                query: "souq waqif doha qatar traditional market alley night",
                desc: "The historic market district — rebuilt on original foundations, thrumming with falcon sellers, spice merchants and Lebanese restaurants until midnight.",
              },
              {
                name: "Doha Corniche Skyline",
                query: "doha corniche west bay skyline skyscrapers reflection water",
                desc: "The West Bay glass towers reflecting in the Corniche at dawn — the view that defines Doha&apos;s transformation from fishing village to global city.",
              },
              {
                name: "Qatar Desert Dunes",
                query: "qatar desert dunes sealine beach sand orange sunset",
                desc: "The dunes at Sealine Beach, 60km south of Doha — the setting for dune bashing, camel rides, and Bedouin camp sunsets.",
              },
              {
                name: "The Pearl Qatar Marina",
                query: "the pearl qatar marina yacht luxury waterfront doha",
                desc: "The Pearl-Qatar&apos;s superyacht marina — the Qanat Quartier canal district and waterfront boardwalk of Doha&apos;s luxury artificial island.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown (in QAR)</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Doha is expensive by South Asian standards but cheaper than Dubai for similar experiences. The Museum of Islamic Art being free is a major saving — one of the world&apos;s best museums costs nothing to enter. 1 USD ≈ 3.64 QAR (pegged, very stable).
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
                    ["🏨 Accommodation (per night)", "QAR 90–120 (hostel/budget)", "QAR 300–450 (4-star)", "QAR 1,300–2,200 (5-star)"],
                    ["🍽️ Food (per day)", "QAR 70–100", "QAR 180–280", "QAR 550–900"],
                    ["🚇 Transport (per day)", "QAR 10–20 (Metro)", "QAR 50–80 (taxi)", "QAR 180–360 (private car)"],
                    ["🏛️ Museum of Islamic Art", "Free", "Free", "Free"],
                    ["🏛️ National Museum of Qatar", "QAR 100", "QAR 100", "QAR 100 + audio guide"],
                    ["🏜️ Desert Safari (group/private)", "QAR 150–200", "QAR 250–350", "QAR 500–1,800"],
                    ["⛵ Dhow Cruise (1 hr)", "QAR 50", "QAR 120 (dinner cruise)", "QAR 400+ (private)"],
                    ["TOTAL per day (estimate)", "QAR 330–490", "QAR 730–1,100", "QAR 1,800–3,600"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (QAR 330–490/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in a Mövenpick or ibis Styles (QAR 90–120/night), eat shawarma and Souq Waqif sit-down meals (QAR 15–40), use the Metro everywhere (QAR 4/ride). MIA is free. The budget experience in Doha is genuinely comfortable — the city&apos;s public infrastructure is world-class.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (QAR 730–1,100/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at Marsa Malaz Kempinski or Marriott Marquis (QAR 300–450/night), eat at Souq Waqif seafood restaurants and Pearl waterfront cafes. Take taxis instead of Metro. Add the NMoQ (QAR 100) and a group desert safari (QAR 150–200). This is the sweet spot for most first-time visitors.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (QAR 1,800+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">St. Regis, Four Seasons, or Raffles Doha (QAR 1,300–2,200/night with butler service). IDAM by Alain Ducasse and Nobu Doha for dining. Private 4WD desert safari with helicopter transfer to a luxury camp. Private MIA art historian tour (QAR 450). Yacht charter from The Pearl (QAR 1,500–2,200 half-day split).</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Doha</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Doha has three main areas for tourists: the Corniche / West Bay (business and luxury hotels, walking distance to MIA), Souq Waqif area (best location for the souq and atmosphere), and The Pearl-Qatar (luxury serviced apartments, quieter). All booking links use affiliate code for reader-supported pricing.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Mandarin Oriental Doha",
                  type: "5-star luxury · Msheireb Downtown",
                  price: "From QAR 1,100/night",
                  badge: "Best luxury location",
                  desc: "In the heart of Msheireb Downtown — Doha&apos;s regenerated heritage district, a 10-minute walk from Souq Waqif and 15 minutes from the MIA. Exceptional service, stunning pool, and the most walkable location of any 5-star in the city. The rooftop bar has panoramic views of the skyline and desert beyond.",
                  color: "border-amber-200 bg-amber-50",
                  url: "https://www.booking.com/hotel/qa/mandarin-oriental-doha.html?aid=2820480",
                },
                {
                  name: "W Doha",
                  type: "5-star lifestyle · West Bay",
                  price: "From QAR 900/night",
                  badge: "Best for Nobu",
                  desc: "The W Doha is home to Nobu Doha — one of the most celebrated restaurants in Qatar — and has the city&apos;s best rooftop pool deck. Located in West Bay, a 5-minute drive from Souq Waqif and the Corniche. Great for those who want a design-forward hotel with excellent in-house dining.",
                  color: "border-teal-200 bg-teal-50",
                  url: "https://www.booking.com/hotel/qa/w-doha.html?aid=2820480",
                },
                {
                  name: "Souq Waqif Boutique Hotels",
                  type: "Heritage boutique · Souq Waqif",
                  price: "From QAR 380/night",
                  badge: "Most atmospheric",
                  desc: "A collection of boutique hotels built into converted traditional buildings within and immediately around Souq Waqif. Rooms decorated in Qatari heritage style — carved wooden screens, arched doorways, local textiles. You can step outside your door and be in the souq alleyways. The most atmospheric stay in Doha by far. Book well in advance in peak season.",
                  color: "border-parchment-2 bg-white",
                  url: "https://www.booking.com/searchresults.html?city=souq+waqif+doha&aid=2820480",
                },
                {
                  name: "ibis Styles Doha (or similar budget hotel)",
                  type: "Budget · Various locations",
                  price: "From QAR 90/night",
                  badge: "Best budget",
                  desc: "Doha has limited true budget accommodation — the city is expensive by regional standards. ibis Styles, City Centre Rotana (standard rooms), and a small number of budget business hotels near Al Sadd offer the most affordable options. Clean, modern, and close to Metro stations. Hostels are rare in Doha; budget hotels fill this gap.",
                  color: "border-purple-200 bg-purple-50",
                  url: "https://www.booking.com/searchresults.html?city=doha+budget+hotel&aid=2820480",
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
                  <p className="text-xs text-gray-700 font-light leading-relaxed mb-2">{stay.desc}</p>
                  <a
                    href={stay.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-teal font-medium hover:underline"
                  >
                    Check availability on Booking.com →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Doha</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Doha&apos;s restaurant scene is diverse and excellent — from QAR 15 Lebanese shawarma to QAR 400 Michelin-calibre dining. Note: alcohol is only available at licensed hotel restaurants and bars (expect QAR 55–90 per drink). Most Souq Waqif restaurants are alcohol-free.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "IDAM by Alain Ducasse (MIA)",
                  t: "Fine dining · Museum of Islamic Art, 1st floor",
                  d: "Alain Ducasse&apos;s only restaurant in the Gulf sits on the first floor of the Museum of Islamic Art with panoramic bay views and a menu that fuses refined Arabic cuisine with classical French technique. One of the most beautiful dining rooms in the world. Lunch: QAR 150–250 pp. Dinner: QAR 250–400 pp. Reserve well in advance. Worth every riyal for a special occasion.",
                  b: "Fine dining highlight",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Nobu Doha (W Hotel)",
                  t: "Japanese-Peruvian fusion · West Bay",
                  d: "Matsuhisa&apos;s iconic Japanese-Peruvian concept in one of Doha&apos;s most striking dining rooms. Rock shrimp tempura, black cod miso, and yellowtail jalapeño sashimi are the signatures. Expect QAR 200–350 pp including soft drinks. Alcohol available (pricey). Reservations essential on weekends.",
                  b: "Celebrity favourite",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Souq Waqif Seafood Restaurants",
                  t: "Fresh seafood · Upper level, Souq Waqif",
                  d: "Several restaurants on the upper floor of Souq Waqif specialise in fresh Gulf seafood — hammour (grouper), shrimp, lobster, and crab grilled simply with Arabic spices. Meals QAR 80–160 pp for a proper feast. No alcohol, but the atmosphere — overlooking the souq rooftops at night — is outstanding. Look for Al Aker Seafood or ask locals for current recommendations.",
                  b: "Best local seafood",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Automatic Restaurant (Souq Waqif)",
                  t: "Lebanese mezze · Souq Waqif",
                  d: "A reliable, consistently excellent Lebanese restaurant inside Souq Waqif. Hummus, mutabbal, fattoush, grilled meats, and freshly baked khubz (flatbread). Meals QAR 60–100 pp. No alcohol. Popular with both tourists and Qatari families — arrive by 7pm or expect a queue on weekends.",
                  b: "Best value Souq meal",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Shawarma & Street Food near Souq Waqif",
                  t: "Street food · Al Souq Street",
                  d: "Several Lebanese and Syrian-run shawarma counters on the streets leading into Souq Waqif offer the best budget eating in Doha — chicken shawarma QAR 12–18, falafel wrap QAR 8–12, Pakistani rice plates QAR 15–22. Eat standing at the counter or take away. This is where Doha&apos;s South Asian workforce eats lunch, which tells you everything about authenticity and value.",
                  b: "Budget essential",
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
            destination="Doha Qatar"
            hotels={[
              {
                name: "Mandarin Oriental Doha",
                type: "5-star luxury · Msheireb Downtown",
                price: "From QAR 1,100/night",
                rating: "5",
                badge: "Best location",
                url: "https://www.booking.com/hotel/qa/mandarin-oriental-doha.html?aid=2820480",
              },
              {
                name: "W Doha",
                type: "5-star lifestyle · West Bay",
                price: "From QAR 900/night",
                rating: "5",
                badge: "Home of Nobu",
                url: "https://www.booking.com/hotel/qa/w-doha.html?aid=2820480",
              },
              {
                name: "Souq Waqif Boutique Hotels",
                type: "Heritage boutique · Souq Waqif",
                price: "From QAR 380/night",
                rating: "4",
                badge: "Most atmospheric",
                url: "https://www.booking.com/searchresults.html?city=souq+waqif+doha&aid=2820480",
              },
              {
                name: "ibis Styles Doha",
                type: "Budget · Al Sadd area",
                price: "From QAR 90/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/qa/ibis-styles-doha.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Doha City Tour + MIA & Souq Waqif",
                duration: "6 hrs",
                price: "From QAR 120/person",
                badge: "Best intro",
                url: "https://www.getyourguide.com/s/?q=doha+city+tour&partner_id=PSZA5UI",
              },
              {
                name: "Desert Safari with Dune Bashing & Camel Ride",
                duration: "5 hrs",
                price: "From QAR 150/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=doha+desert+safari&partner_id=PSZA5UI",
              },
              {
                name: "Dhow Boat Cruise — Doha Bay",
                duration: "1–2 hrs",
                price: "From QAR 50/person",
                badge: "Sunset favourite",
                url: "https://www.getyourguide.com/s/?q=doha+dhow+cruise&partner_id=PSZA5UI",
              },
              {
                name: "Al Zubarah Fort UNESCO Day Trip",
                duration: "Full day",
                price: "From QAR 180/person",
                url: "https://www.getyourguide.com/s/?q=al+zubarah+fort+qatar&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Doha</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "☀️",
                  title: "Visiting June–September (extreme summer heat)",
                  desc: "Doha in summer reaches 45–46°C with near-100% humidity. The Corniche, Souq Waqif evenings, desert safaris, and Katara Beach — the things that make Doha special — are genuinely impossible to enjoy. The city shifts entirely indoors. Unless you have no choice, visit November to April.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "👗",
                  title: "Ignoring modest dress in traditional areas",
                  desc: "Souq Waqif, mosques, Katara Cultural Village, and the National Museum all expect modest dress. Shoulders covered, knees covered — both men and women. Qatar is more relaxed than Saudi Arabia but noticeably more conservative than Dubai. A respectful attitude opens doors (literally — Qataris are extraordinarily hospitable to respectful visitors).",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍺",
                  title: "Expecting to drink alcohol freely",
                  desc: "Alcohol is available at licensed hotel restaurants and bars — but it is expensive (QAR 55–90 per drink) and entirely absent from most Souq Waqif restaurants, street food stalls, and public spaces. Doha&apos;s social life is not built around alcohol. The evening atmosphere at Souq Waqif — tea, coffee, shisha, food, conversation — is genuinely rich without it.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚕",
                  title: "Ignoring the Metro (it is excellent and costs QAR 4)",
                  desc: "Doha&apos;s Metro launched in 2019 and is modern, air-conditioned, and reliable. It connects Hamad International Airport, the Museum of Islamic Art, Souq Waqif, The Pearl-Qatar, and all major West Bay hotels for QAR 4 per journey. Many tourists default to expensive taxis (QAR 25–60 for the same journeys) unnecessarily.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "📸",
                  title: "Photographing people without asking",
                  desc: "Photography of Qatari women without consent is a serious cultural offence and can have legal consequences. Government buildings, military installations, and some royal properties are also off-limits. In Souq Waqif, always ask before photographing individuals — most people will graciously agree if asked politely in advance.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🗓️",
                  title: "Not checking if Ramadan falls during your visit",
                  desc: "During Ramadan, eating, drinking, and smoking in public during daylight hours is prohibited (for both Muslims and non-Muslims). Many restaurants close for lunch service. The atmosphere changes dramatically. However, Ramadan evenings at Souq Waqif after iftar (sunset) are extraordinary — the most alive the souq gets all year. Check the lunar calendar before you book.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Doha</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🕌",
                  title: "Visit MIA on a weekday morning — it&apos;s almost empty",
                  desc: "The Museum of Islamic Art is free and one of the most important collections of its kind in the world. On Thursday and Friday evenings it fills with local families. Go on a Tuesday or Wednesday at 9am and you can walk the galleries almost alone — remarkable for a world-class institution. The building&apos;s geometry in morning light is exceptional.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🦅",
                  title: "Visit the Souq Waqif Falcon Hospital",
                  desc: "Qatar is the falconry capital of the world. The Souq Waqif Falcon Hospital offers guided tours (QAR 60–80) where you can hold a falcon, watch veterinary procedures, and learn about this 4,000-year-old tradition that Qatar treats as UNESCO Intangible Cultural Heritage. One of Doha&apos;s most memorable and unique experiences — book in advance.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🌅",
                  title: "Corniche at dawn — the city&apos;s best free view",
                  desc: "The West Bay skyline reflects perfectly in the Corniche at first light — pink, gold, and glass. The temperature is 20°C, there are almost no people, and the photograph is the one on every Qatar Tourism poster. Set your alarm for 30 minutes before sunrise. This is worth structuring your entire first morning around.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🏟️",
                  title: "Add a FIFA World Cup 2022 stadium tour",
                  desc: "Qatar&apos;s eight World Cup 2022 stadiums are extraordinary feats of engineering — especially Lusail Stadium (the final venue, 80,000 seats) and Al Bayt Stadium in Al Khor. Stadium tours run daily for QAR 50–90. Lusail City is Qatar&apos;s brand-new planned urban district built almost entirely for the World Cup — drive through it for a glimpse of the future Gulf city.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🚇",
                  title: "Get a Qitaf Metro card at the airport",
                  desc: "The Doha Metro Qitaf card costs QAR 10 (refundable deposit) and lets you ride for QAR 4 per journey. Buy one the moment you land at Hamad International Airport — the Metro station is inside the terminal. It will save you QAR 100–200 over your stay compared to taxis and is the single most efficient transport decision you can make.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌙",
                  title: "Souq Waqif after 9pm is the real Souq Waqif",
                  desc: "The souq transforms after 9pm — local Qatari families arrive, the restaurants fill, the shisha smoke thickens, and the noise and energy reach their peak. The souq stays open until midnight or 1am on weekends. Do not make the mistake of visiting only during the day. A 9pm–11pm wander is one of the best free experiences in Doha.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Doha" />

          {/* Combine With */}
          <CombineWith currentSlug="doha-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Doha safe for tourists?",
                  a: "Qatar is one of the safest countries in the world for tourists — violent crime is virtually nonexistent, the infrastructure is world-class, and the government actively invests in the visitor experience. The 2022 FIFA World Cup brought enormous improvements to signage, English-language services, and tourist infrastructure. Solo female travellers consistently report feeling very comfortable. The main cautions are cultural rather than safety-related: dress modestly, respect local customs, and ask before photographing people.",
                },
                {
                  q: "Can I visit Doha as a Qatar Airways stopover?",
                  a: "Yes — Qatar Airways offers a free or subsidised &apos;Doha Stopover&apos; programme for passengers transiting through Hamad International Airport. With a layover of 8+ hours you can qualify for a free hotel night, complimentary city tour, and airport transfers. It is one of the world&apos;s best transit deals and has introduced thousands of travellers to Doha who had never considered visiting Qatar independently.",
                },
                {
                  q: "What currency does Qatar use, and should I carry cash?",
                  a: "Qatar uses the Qatari Riyal (QAR). 1 USD ≈ 3.64 QAR — the rate is pegged and has been stable for decades. Cards (Visa, Mastercard) are accepted almost everywhere in Doha — hotels, restaurants, the Metro, taxis, and most shops. Cash is useful for small souq purchases (some vendors prefer it), tips, and street food stalls. Withdraw QAR from ATMs at the airport on arrival if you want cash on hand.",
                },
                {
                  q: "Is the Museum of Islamic Art really free?",
                  a: "Yes — the permanent collection at MIA is completely free to enter. Temporary exhibitions may charge a small fee (typically QAR 50–80). The building, the architecture, the permanent collection of Islamic art spanning 14 centuries from three continents, and the extraordinary bay views from the upper galleries are all free. This is one of the world&apos;s great museums, and its free entry policy makes it among the best value cultural experiences in the Gulf.",
                },
                {
                  q: "Do I need a visa to visit Qatar?",
                  a: "Most Western passport holders (US, UK, EU, Australian, Canadian) get visa-free entry for 30–180 days depending on nationality. Indian passport holders can get a visa on arrival at Doha airport (~$30, 30 days extendable) or apply online at evisa.moi.gov.qa before travel. The process is fast (under 20 minutes on arrival) and Qatar actively courts Indian tourists. Check the latest requirements at the official Qatar Tourism website before travel.",
                },
                {
                  q: "How do I get around Doha — Metro or taxi?",
                  a: "The Doha Metro (launched 2019) is clean, air-conditioned, cheap (QAR 4/journey), and connects all major tourist attractions — airport, MIA, Souq Waqif area, The Pearl, and West Bay. It is the best way to move around for most journeys. Taxis (Karwa official taxis, Uber, Careem) are metered and reliable for journeys the Metro doesn&apos;t cover directly, or late at night. Get a Qitaf Metro card at the airport. Renting a car is worthwhile only if you plan the Al Zubarah day trip.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Doha trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-doha", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/doha-budget-guide", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/hamad-international-airport-guide", label: "Airport guide", icon: "✈️" },
                { href: "/blog/qatar-travel-tips", label: "Qatar travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="doha-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Middle East Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Dubai 5 Days — Skyline, Desert &amp; Culture", href: "/blog/dubai-5-days" },
                { label: "Abu Dhabi 3 Days — Louvre &amp; Grand Mosque", href: "/blog/abu-dhabi-3-days" },
                { label: "Jordan 5 Days — Petra &amp; Wadi Rum", href: "/blog/jordan-5-days" },
                { label: "Oman 7 Days — Muscat &amp; Wahiba Sands", href: "/blog/oman-7-days" },
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
