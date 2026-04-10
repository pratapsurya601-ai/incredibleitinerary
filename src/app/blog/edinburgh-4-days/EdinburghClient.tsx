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
const EDINBURGH_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Edinburgh Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",  emoji: "🏰",  label: "Landmark Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",        emoji: "🍽️", label: "Where to Eat" },
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
          href: `mailto:?subject=Edinburgh 4-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Edinburgh in 4 Days — Castle, Arthur's Seat %26 Whisky&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/edinburgh-4-days"
        imageUrl="https://images.unsplash.com/photo-1562767166-63a5e3a63a1d?w=1200&q=80"
        description="Edinburgh in 4 Days: Edinburgh Castle, Arthur&apos;s Seat sunrise hike, Scotch whisky tastings, Loch Ness day trip — complete Edinburgh travel guide for every budget."
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
export default function EdinburghClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={EDINBURGH_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Edinburgh" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="edinburgh castle scotland uk skyline old town"
            fallback="https://images.unsplash.com/photo-1562767166-63a5e3a63a1d?w=1600&q=80"
            alt="Edinburgh Castle on volcanic rock with Old Town skyline Scotland UK"
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
              <span className="text-white/70">Edinburgh 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Scotland · UK
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Edinburgh in 4 Days:
                <em className="italic text-amber-300"> Castle, Arthur&apos;s Seat &amp; Whisky</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The Royal Mile at dawn, a volcanic summit above the city, medieval closes, Scotch tasting, and the world&apos;s largest arts festival. The complete Edinburgh guide.
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
              <span>🏰 Edinburgh, Scotland</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From £45/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Edinburgh at 6am in summer — the Royal Mile utterly empty, Arthur&apos;s Seat glowing orange above the Old Town, mist still wrapped around the castle on its volcanic plug — is one of those moments that makes you understand why Scotland has produced so many poets.
            </p>
          </blockquote>

          {/* ── WHAT EDINBURGH ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Edinburgh Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Edinburgh is a city built on geology as dramatic as its history. Castle Rock — a 340-million-year-old volcanic plug rising 130 metres above sea level — has been fortified for at least 3,000 years. The Old Town sprawls down from the Castle along the Royal Mile to the Palace of Holyroodhouse: a kilometre of medieval tenements, closes (narrow alleyways), and churches that compressed centuries of Scottish history into a single street.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The city sits at the centre of Scottish intellectual and cultural life. The Scottish Enlightenment of the 18th century — David Hume, Adam Smith, James Hutton — transformed Western thought. Robert Burns, Sir Walter Scott, Robert Louis Stevenson, and Arthur Conan Doyle all passed through Edinburgh. J.K. Rowling wrote the Harry Potter series in Edinburgh cafés and finished the final book in The Balmoral Hotel on Princes Street.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days gives you the Castle, a sunrise hike up Arthur&apos;s Seat (free, 2 hours), the Old Town medieval closes, a day trip to either Loch Ness or Stirling, and enough time in the whisky bars of Grassmarket to conclude that Scotch deserves its global reputation. If you visit in August, add the Edinburgh Festival Fringe — the largest arts festival on earth — to every evening.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="EDI" />
              <StatCard icon="🌡️" label="Best Season" value="May–Sep" />
              <StatCard icon="🏰" label="Castle Entry" value="£19.50" />
              <StatCard icon="💰" label="Budget From" value="£45/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Edinburgh</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Jun",
                  i: "☀️",
                  t: "Late Spring — Best Value",
                  d: "Long daylight hours (sunrise before 5am in June), temperatures 12–18°C, fewer crowds than August. Arthur&apos;s Seat sunrise at 4:30am is extraordinary in June. Accommodation prices are reasonable before peak season. The ideal window for most first-time visitors.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🎪",
                  t: "Festival Season — Extraordinary but Expensive",
                  d: "Edinburgh in August hosts the world-famous Fringe Festival — 3,000+ shows across 300 venues. The city is electrifying but completely packed. Hostel beds cost £60–90 (vs £22 in May). Hotels double or triple. Book accommodation 6 months ahead if visiting during Festival.",
                  b: "Book 6 months ahead",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Early Autumn — The Sweet Spot",
                  d: "Arguably the best time: summer warmth lingers (14–17°C), the Festival has ended but the energy remains, crowds thin dramatically, and prices drop. October brings spectacular autumn colour in the parks and Arthur&apos;s Seat. Edinburgh at its most balanced.",
                  b: "Best overall",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Dec–Jan",
                  i: "🎄",
                  t: "Winter — Hogmanay &amp; Christmas Markets",
                  d: "Edinburgh&apos;s Christmas market in Princes Street Gardens (December) is one of Europe&apos;s best. Hogmanay (New Year) on December 31st is a world-famous street party with 70,000+ attendees. Cold (3–8°C) and often wet but very atmospheric. Quietest and cheapest month is January–February.",
                  b: "For Hogmanay",
                  c: "bg-blue-50 border-blue-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900" dangerouslySetInnerHTML={{ __html: `${s.s} — ${s.t}` }} />
                      <p className="text-[0.65rem] font-medium text-teal">{s.b}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: s.d }} />
                </div>
              ))}
            </div>
          </section>

          {/* ── GETTING THERE ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Edinburgh</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Edinburgh Airport (EDI) is 8 miles west of the city centre. The tram from Edinburgh Airport to York Place (city centre) takes <strong className="font-medium">30 minutes and costs £8.50</strong> single. It runs every 7–10 minutes and is by far the easiest airport transfer — no traffic delays, deposits you in the heart of the New Town.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚊",
                  t: "Edinburgh Tram (Airport → City Centre)",
                  d: "The Edinburgh Tram runs from the airport terminal directly to York Place (near Princes Street) in 30 minutes. Cost: £8.50 single, £16.50 return. Runs every 7–10 minutes, 24 hours. Stops include Edinburgh Gateway (ScotRail interchange), Haymarket, and the city centre. The most reliable, stress-free option for arriving travellers.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚂",
                  t: "Train from London (King&apos;s Cross → Waverley)",
                  d: "London King&apos;s Cross to Edinburgh Waverley by LNER: 4.5 hours. Advance fares from £25 on Trainline or LNER.co.uk. The East Coast Main Line passes York, Durham Cathedral, and the Northumbrian coast. Waverley Station sits directly below the Castle in the heart of the Old Town.",
                  b: "From London",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "✈️",
                  t: "Flights to Edinburgh Airport (EDI)",
                  d: "Edinburgh Airport connects to major European hubs (Amsterdam, Paris, Frankfurt, Dublin) and has transatlantic routes via New York and Toronto. From within the UK: frequent services from London Heathrow, Gatwick, Stansted, and City Airport (£40–120 return). Budget airlines including easyJet and Ryanair serve numerous European cities.",
                  b: "International entry",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Glasgow or other Scottish cities",
                  d: "Glasgow to Edinburgh by Citylink bus: 70 minutes (£8–12). By ScotRail train: 50 minutes, £13–18. Within Edinburgh, Lothian Buses are excellent — £2 per journey, £4.50 all-day ticket. The city is very walkable once in the centre: Old Town, New Town, Leith, and Stockbridge are all connected by flat or manageable walking routes.",
                  b: "Domestic",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((t) => (
                <div key={t.t} className={`rounded-xl p-4 border ${t.c}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{t.i}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="font-semibold text-sm text-ink" dangerouslySetInnerHTML={{ __html: t.t }} />
                        <span className="text-xs bg-white/70 text-muted px-2.5 py-1 rounded-full border border-white/50">{t.b}</span>
                      </div>
                      <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t.d }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 4-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Edinburgh Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary front-loads the major paid attractions and uses mornings for the free experiences that benefit from early light and empty streets.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Old Town: Castle, Royal Mile & Grassmarket"
                cost="£35–55 total (castle + food + drinks)"
                items={[
                  "9:00am — Edinburgh Castle (£19.50). Book online to skip the esplanade queue. The Crown Jewels of Scotland (the Honours of the Three Kingdoms), Mons Meg medieval cannon, the Stone of Destiny, and sweeping views over the city. Allow 2.5 hours.",
                  "11:30am — Royal Mile walk downhill from the Castle Esplanade. Scotland's most historic street — 1,600 feet from the Castle to the Palace of Holyroodhouse. The medieval closes off both sides: Mary King's Close (guided tour £19.50, recommended), Advocates Close, Lady Stair's Close.",
                  "1:00pm — Lunch on the Royal Mile or Cockburn Street: Scotch broth and a cheese toastie at The Jolly Judge (£8–12), or haggis, neeps and tatties at a traditional Scottish pub on the Mile (£10–14). Try the haggis — it tastes like deeply flavoured spiced mince. It is good.",
                  "2:30pm — St Giles' Cathedral (free). The High Kirk of Edinburgh where John Knox preached. The Thistle Chapel inside is one of the most exquisite small interiors in Scotland. Free entry, no time pressure.",
                  "4:00pm — Greyfriars Kirkyard (free). The 17th-century cemetery with the statue of Greyfriars Bobby (the loyal Skye Terrier who guarded his owner's grave for 14 years). Atmospheric, eerie, historically significant. The surrounding area inspired J.K. Rowling's character naming.",
                  "5:30pm — Victoria Street: the curved, coloured shopfront street that inspired Diagon Alley. Best at dusk when the lamps come on. Independent whisky shops, bookshops, and a specialist cheese shop line the arc.",
                  "7:30pm — Grassmarket for the evening: one of Edinburgh's oldest market spaces, now lined with pubs and restaurants. Budget dinner: fish supper from the Grassmarket chippy (£8–10), or a pub pie at The Last Drop (£12–14). Pint of Scottish ale: £4.50–6.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Holyrood, Arthur's Seat & the Canongate"
                cost="£40–60 total (Holyrood + Whisky Experience + food)"
                items={[
                  "7:00am — Arthur's Seat sunrise hike (free, 2 hours round trip). From the Holyrood Park entrance, the main route via the Radical Road and Lion's Head path reaches the 251-metre volcanic summit in 45–60 minutes. Views over Edinburgh, the Firth of Forth, Fife, and on clear days the Highlands. The single best free experience in Edinburgh.",
                  "9:00am — Descend and have breakfast in the Holyrood area: a café on the Canongate (£5–8 for a full Scottish breakfast — square sausage, black pudding, tattie scone, eggs).",
                  "10:30am — Palace of Holyroodhouse (£17.50). The official Scottish residence of the King — Mary Queen of Scots lived here. The State Apartments and the ruins of Holyrood Abbey alongside are genuinely moving.",
                  "12:30pm — Scottish Parliament visitor centre (free tours when parliament is not in session). Enric Miralles's 2004 building is architecturally extraordinary; the debating chamber is visitable on free tours.",
                  "2:00pm — Walk back up the Canongate. The Museum of Edinburgh at Huntly House (free) covers the city's history. The People's Story Museum (free, Canongate Tolbooth) covers working-class Edinburgh life.",
                  "4:00pm — Scotch Whisky Experience on the Royal Mile (£19). A 70-minute immersive tour through Scotch production with tastings of all four regional styles — Highlands, Speyside, Islay, Lowlands. The best introduction to whisky for curious non-drinkers.",
                  "7:30pm — Evening in the Old Town: The Bow Bar (Victoria Street, 300+ whiskies by the dram from £4.50, no food, pure pub atmosphere). Dinner nearby at Mums (Forrest Road, Scottish comfort food, £10–15, legendary mac and cheese).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Day Trip: Loch Ness, Stirling, or Rosslyn Chapel"
                cost="£40–75 total depending on option chosen"
                items={[
                  "OPTION A — Loch Ness (full day, best by organised tour): Rabbies Trail Burners or Timberbush coach tours from Edinburgh (£40–65 all-inclusive). Urquhart Castle on the loch shore (£12). Boat tour on Loch Ness (£20, from Drumnadrochit). The loch is 37km long, 230 metres deep, and holds more fresh water than all lakes in England and Wales combined.",
                  "OPTION B — Stirling Castle + William Wallace Monument (45 min by direct bus, £12–15 return): Stirling Castle (£14 — arguably more historically significant than Edinburgh Castle: the Stuarts, Mary Queen of Scots, James VI, the Great Hall). William Wallace Monument (£11, 67-metre Victorian tower, views over Bannockburn battlefield).",
                  "OPTION C — Rosslyn Chapel (45 min bus from Edinburgh, £3.50 return, chapel entry £9): The 15th-century chapel with extraordinary stone carvings — the Apprentice Pillar, the Green Man — made famous by The Da Vinci Code. The surrounding Roslin Glen is a beautiful woodland walk.",
                  "Evening: Return to Edinburgh. If visiting in August during the Fringe Festival — choose a free outdoor show on the Royal Mile or the Mound (acrobats, comedians, opera singers — consistently world-class and completely free), or catch a £5–12 venue show.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="New Town, National Museum & Farewell Whisky"
                cost="£35–55 total (free museums + food)"
                items={[
                  "9:30am — National Museum of Scotland (free, Chambers Street, 5 minutes from the Royal Mile). One of the outstanding national museums in Europe — Dolly the sheep (world's first cloned mammal), Pictish carved stones, Scottish design galleries, natural history, world cultures. Allow 2–3 hours.",
                  "11:30am — Scottish National Gallery (free, The Mound). Scotland's national art collection: Rembrandt, Raphael, El Greco, Titian, and a superb collection of Scottish paintings — Raeburn, Ramsay, Wilkie.",
                  "1:00pm — Princes Street Gardens (free, below the Castle on the south side of Princes Street). The view of Edinburgh Castle rising 130 feet above the gardens is the definitive Edinburgh image. In summer, full of picnickers; in December, the Christmas market and fairground wheel make this magical.",
                  "2:00pm — Dean Village walk (free, 10 minutes from Princes Street). A former milling village on the Water of Leith that feels like a Cotswolds village transported to a Scottish city. The bridge, old granaries, and mill-race are completely photogenic and almost tourist-free.",
                  "3:30pm — Royal Botanic Garden Edinburgh (free, 1.5km from city centre — bus or 25-min walk). 70 acres of glasshouses, rock garden, and Chinese hillside garden. The view of the Castle from the garden's south lawn is superb and much less crowded than standard vantage points.",
                  "7:30pm — Farewell dinner and a proper Scotch nightcap: Whiski Bar & Restaurant (Royal Mile, whisky-focused menu, haggis bon bons £7–8, mains £15–22, single malts from £6 per dram). The definitive send-off.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Edinburgh" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏰 Edinburgh Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The major sites in order of priority with entry prices as of 2026. Edinburgh has an unusually high proportion of genuinely outstanding free attractions alongside its paid landmarks.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Edinburgh Castle",
                  e: "£19.50 (book online)",
                  d: "The defining symbol of Edinburgh — a fortress on an ancient volcanic plug, continuously fortified for over 3,000 years. The Crown Jewels of Scotland (the Honours of the Three Kingdoms), the Stone of Destiny, Mons Meg cannon, and sweeping 360° views from the esplanade. Allow 2.5–3 hours. Book online to skip the queue.",
                  t: "Must see · 2.5–3 hrs",
                },
                {
                  n: "Arthur's Seat",
                  e: "Free · 2 hrs",
                  d: "A 251-metre volcanic peak inside the city boundaries — the highest point in Holyrood Park. The main path from the Holyrood Park entrance takes 45–60 minutes to the summit. Views over Edinburgh, the Firth of Forth, Fife, and the Highlands on clear days. The sunrise hike (4:30am in June) is the single most memorable free experience in any UK city.",
                  t: "Must see · Sunrise or any time",
                },
                {
                  n: "Palace of Holyroodhouse",
                  e: "£17.50",
                  d: "The official Scottish residence of the British monarch — the King stays here every summer. Mary Queen of Scots lived here; her secretary David Rizzio was murdered in her apartments in 1566. The ruined Holyrood Abbey alongside is included in entry. Genuinely moving historical atmosphere.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Royal Mile cobblestones",
                  e: "Free",
                  d: "The 1,600-foot spine of Edinburgh's Old Town from the Castle to Holyrood. The medieval closes off both sides — Advocates Close, Anchor Close, White Horse Close — reveal a city that existed centuries before the Georgian New Town. Walk the full length at least once; best at 6am when it is completely empty.",
                  t: "Free · Any time",
                },
                {
                  n: "Scotch Whisky Experience",
                  e: "£19",
                  d: "A 70-minute guided tour through the production of Scotch whisky on the Royal Mile, just below the Castle. Covers all four regional styles (Highlands, Speyside, Islay, Lowlands) with tasting. The best structured introduction to Scotch whisky in Scotland — designed for curious beginners, not established enthusiasts.",
                  t: "Recommended · 70 mins",
                },
                {
                  n: "Greyfriars Kirkyard",
                  e: "Free",
                  d: "The 17th-century cemetery surrounding Greyfriars Kirk, with the famous statue of Greyfriars Bobby (the Skye Terrier who guarded his owner's grave for 14 years). The cemetery inspired J.K. Rowling's character naming. Atmospheric, genuinely historic, and one of Edinburgh's most-photographed spots. Free, no time restrictions.",
                  t: "Free · 45 mins",
                },
                {
                  n: "National Museum of Scotland",
                  e: "Free",
                  d: "One of the outstanding national museums in Europe — Dolly the sheep (world's first cloned mammal), Pictish carved stones, Scottish design and decorative arts, natural history galleries, and world cultures collections. The Victorian Grand Gallery atrium alone is worth a visit. On Chambers Street, 5 minutes from the Royal Mile.",
                  t: "Free · 2–3 hrs",
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
            title="Edinburgh — Castle, Old Town &amp; the Highlands Gateway"
            subtitle="From the Royal Mile cobblestones to Arthur&apos;s Seat at sunrise."
            spots={[
              {
                name: "Edinburgh Castle on Castle Rock",
                query: "edinburgh castle volcanic rock old town scotland skyline",
                desc: "Edinburgh Castle on its 340-million-year-old volcanic plug — the iconic image of Scotland&apos;s capital, visible from almost everywhere in the city.",
              },
              {
                name: "Arthur's Seat Sunrise",
                query: "arthur's seat edinburgh sunrise volcanic peak holyrood park scotland",
                desc: "The 251-metre volcanic summit of Arthur&apos;s Seat at dawn — a free hike inside the city with views over Edinburgh, the Firth of Forth, and the Highlands.",
              },
              {
                name: "Royal Mile cobblestones Old Town",
                query: "royal mile edinburgh old town cobblestone medieval scotland",
                desc: "The Royal Mile&apos;s cobblestones at golden hour — the medieval spine of Edinburgh&apos;s Old Town, best explored at 6am before the crowds arrive.",
              },
              {
                name: "Greyfriars Kirkyard",
                query: "greyfriars kirkyard edinburgh cemetery historic scotland",
                desc: "The atmospheric 17th-century cemetery that inspired J.K. Rowling and guards the famous statue of Greyfriars Bobby.",
              },
              {
                name: "Victoria Street at dusk",
                query: "victoria street edinburgh curved coloured shopfronts scotland",
                desc: "Victoria Street&apos;s curved arc of coloured shopfronts at dusk — the real-life inspiration for Diagon Alley in the Harry Potter series.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Edinburgh is more affordable than London but more expensive than most European capitals. The good news: the best free attractions — Arthur&apos;s Seat, the National Museum, the Royal Mile, the Botanic Garden — are genuinely world-class and require no entry fee.
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
                    ["🏨 Accommodation/night", "£20–35 (hostel dorm)", "£85–180 (hotel)", "£350–900 (luxury)"],
                    ["🍽 Food/day", "£12–20", "£30–55", "£100–250"],
                    ["🚌 Local transport/day", "£2–5 (Lothian Bus)", "£5–15", "£30–80"],
                    ["🏰 Activities/day", "£10–20", "£20–45", "£80–200"],
                    ["🥃 Whisky &amp; drinks", "£5–12/evening", "£15–35/evening", "£40–100/evening"],
                    ["TOTAL/day (per person)", "£49–92/day", "£155–330/day", "£600–1,530+/day"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium" dangerouslySetInnerHTML={{ __html: cat }} />
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (£45–90/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Smart City Hostel (£20–35/night), picnic lunches from the Grassmarket market, Lothian Buses. Edinburgh Castle (£19.50) is the main one-off spend. Arthur&apos;s Seat, the National Museum, and the Royal Mile are completely free.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">✨ Mid-Range (£130–230/day)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Hotel du Vin Edinburgh (£120–180/night). Dinner at Dishoom Edinburgh or Timberyard. Mary King&apos;s Close guided tour (£19.50) and Palace of Holyroodhouse (£17.50). Scotch Whisky Experience (£19).</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (£350–900+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">The Balmoral Hotel (£350–800/night, where J.K. Rowling finished Harry Potter). The Witchery by the Castle for lunch (£25–40). Restaurant Martin Wishart or Timberyard tasting menu (£65–90/person) for dinner.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Edinburgh</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Location matters enormously in Edinburgh. Staying in or near the Old Town (Royal Mile, Grassmarket, Cowgate) puts you within walking distance of the Castle, Holyrood, and the best pubs. The New Town (Princes Street, George Street) is calmer and has more mid-range hotels.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "The Balmoral Hotel",
                  type: "Luxury landmark · Princes Street",
                  price: "From £350/night",
                  badge: "Most iconic",
                  desc: "The grand Victorian railway hotel on Princes Street — its clock tower is deliberately kept 3 minutes fast so guests don't miss their train. J.K. Rowling finished Harry Potter and the Deathly Hallows in Room 552. The Number One restaurant holds a Michelin star. The bar's whisky collection is extraordinary.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel du Vin Edinburgh",
                  type: "Boutique mid-range · Old Town",
                  price: "From £120/night",
                  badge: "Best mid-range",
                  desc: "A converted 19th-century building in the Old Town with dramatic stone corridors, vaulted ceilings, and a genuinely atmospheric bar with 400+ whiskies. Central location, excellent bistro, and the Hotel du Vin wine expertise throughout.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Smart City Hostel",
                  type: "Modern hostel · Old Town",
                  price: "From £20/night (dorm)",
                  badge: "Best budget",
                  desc: "Well-run modern hostel right in the Old Town with private rooms available as well as dorms. Clean, social common areas, excellent location for the Royal Mile. Book well ahead in August — Festival season prices triple and the hostel sells out completely.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Prestonfield House",
                  type: "Country house hotel · Near Holyrood",
                  price: "From £400/night",
                  badge: "Most atmospheric",
                  desc: "A Jacobean country house 5 minutes from Holyrood Park — peacocks on the lawn, tapestried walls, four-poster beds, and the Rhubarb restaurant in the baroque dining rooms. The most atmospherically Scottish hotel in Edinburgh.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Edinburgh</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Edinburgh&apos;s restaurant scene has improved dramatically in the past decade. Beyond the tourist-trap Royal Mile pubs (fine for haggis, overpriced for everything else), the city has a genuine food culture centred on the Grassmarket, Stockbridge, and Leith.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "The Witchery by the Castle",
                  t: "Scottish fine dining · Royal Mile",
                  d: "The most theatrical restaurant in Scotland — a 16th-century merchant's townhouse at the Castle gates, with candlelit rooms, tapestries, antler chandeliers, and opulent Gothic decor. Scottish game, seafood, and classical technique. Lunch from £25 two-course; dinner from £55. The Secret Garden room in the courtyard is booked months ahead.",
                  b: "Most atmospheric",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Dishoom Edinburgh",
                  t: "Bombay café · St Andrew Square",
                  d: "The Edinburgh outpost of the beloved Dishoom brand — all-day Bombay café menu in a beautifully designed space. The bacon naan roll at breakfast (£9) and the black dal slow-cooked for 24 hours (£9) are the standout dishes. Queue is inevitable at peak times but moves fast. Perfect for a non-Scottish option mid-trip.",
                  b: "Best queue-worthy",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Timberyard",
                  t: "Multi-award-winning · Grassmarket area",
                  d: "Housed in a restored Victorian warehouse near the Grassmarket, Timberyard is Edinburgh's benchmark for modern Scottish cooking — hyper-local ingredients, foraged produce, natural wine list, tasting menu £65–90/person. One of the most serious restaurants in Scotland. Book 2–3 weeks ahead for weekends.",
                  b: "Best tasting menu",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Mums",
                  t: "Scottish comfort food · Forrest Road",
                  d: "The best budget restaurant in Edinburgh for Scottish comfort food — legendary mac and cheese, proper pies, sausage and mash, and a haggis dish worth having. Generous portions, honest prices (£10–15 for a main). Five minutes from the Royal Mile. No reservations; short wait at peak times.",
                  b: "Best budget",
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
            destination="Edinburgh Scotland"
            hotels={[
              {
                name: "The Balmoral Hotel",
                type: "Luxury landmark · Princes Street",
                price: "From £350/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/gb/the-balmoral.html?aid=2820480",
              },
              {
                name: "Hotel du Vin Edinburgh",
                type: "Boutique · Old Town",
                price: "From £120/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/gb/hotel-du-vin-edinburgh.html?aid=2820480",
              },
              {
                name: "Smart City Hostel Edinburgh",
                type: "Modern hostel · Old Town",
                price: "From £20/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/gb/smart-city-hostel-edinburgh.html?aid=2820480",
              },
              {
                name: "Prestonfield House",
                type: "Country house · Near Holyrood",
                price: "From £400/night",
                rating: "5",
                badge: "Most atmospheric",
                url: "https://www.booking.com/hotel/gb/prestonfield-house.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Edinburgh Castle Skip-the-Line Entry",
                duration: "2.5 hrs",
                price: "From £19.50/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=edinburgh+castle&partner_id=PSZA5UI",
              },
              {
                name: "Arthur's Seat Guided Sunrise Hike",
                duration: "2 hrs",
                price: "From £25/person",
                badge: "Top-rated",
                url: "https://www.getyourguide.com/s/?q=arthur+seat+edinburgh+hike&partner_id=PSZA5UI",
              },
              {
                name: "Mary King's Close Underground Tour",
                duration: "1 hr",
                price: "From £19.50/person",
                url: "https://www.getyourguide.com/s/?q=mary+kings+close+edinburgh&partner_id=PSZA5UI",
              },
              {
                name: "Edinburgh Scotch Whisky Tasting",
                duration: "70 mins",
                price: "From £19/person",
                url: "https://www.getyourguide.com/s/?q=edinburgh+whisky+tasting&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Edinburgh</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🏕️",
                  title: "Visiting in August Without Booking 6 Months Ahead",
                  desc: "Edinburgh in August during the Fringe Festival is the most densely booked city in Europe. Hostel beds that cost £22 in May are £60–90 in August. Hotels that are £100 in June are £350+ during Festival. If you want August (the atmosphere is genuinely extraordinary), book accommodation in February or March.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🥾",
                  title: "Skipping the Arthur's Seat Hike",
                  desc: "Arthur's Seat is the most underrated free experience in any UK city — a 251-metre volcanic peak inside the city, 45–60 minutes' walk from the Old Town, with panoramic views over Edinburgh. Many visitors see it from below and never go up. Any reasonable walking shoe is fine. Sunrise in summer (4:30–5:30am) is the most extraordinary experience in Scotland.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍽️",
                  title: "Not Trying Haggis",
                  desc: "Haggis is made from sheep offal, oatmeal, onion, and spices — traditionally cooked in the sheep's stomach. It sounds alarming. It tastes like deeply flavoured, slightly spiced mince, served with neeps and tatties (turnip mash and potato mash). At any traditional Edinburgh pub, a serving costs £10–14. The haggis bon bons (deep-fried pub version) at £7–8 are an excellent gateway.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🚗",
                  title: "Renting a Car in the City Centre",
                  desc: "Edinburgh's Old Town is medieval — narrow, steep, cobbled streets not designed for modern cars. City centre parking is extremely limited and expensive (£3–5/hour). The city is entirely walkable. For day trips (Loch Ness, Stirling), collect a rental car from the airport. Within the city, use your feet or Lothian Buses (£2/journey, all-day ticket £4.50).",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Edinburgh</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "6am Royal Mile: The Best Empty City Photo",
                  desc: "The Royal Mile at 6am in summer is completely empty — the same street that has 50,000 people on it in August is utterly silent before 7am. The Castle looms at the top, medieval buildings glow in early light, and the closes are yours alone. Edinburgh rewards early risers more than almost any city in Europe.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌆",
                  title: "Victoria Street at Dusk: Diagon Alley in Real Life",
                  desc: "Victoria Street curves down from George IV Bridge to the Grassmarket in a half-moon of coloured shopfronts — blue, red, yellow, green. At dusk when the shopfronts are lit and cobbles glisten, it is one of the most photographed streets in Scotland. The best light is 30–60 minutes after sunset in spring and summer.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎪",
                  title: "Edinburgh Fringe Free Shows: World Class for Nothing",
                  desc: "The Edinburgh Festival Fringe in August is the world's largest arts festival — 3,000+ shows across 300 venues. The street performances on the Royal Mile and the Mound are completely free and consistently extraordinary: acrobats, comedians, opera singers, theatre companies. Some of the world's best emerging comedy comes through the Fringe every August.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🥃",
                  title: "Arthur's Seat Sunrise: 4:30am in Summer",
                  desc: "In June and July, Edinburgh sunrise is at 4:26–4:30am. Starting the Arthur's Seat hike at 3:45am (take a head torch — the path is safe but rocky in darkness) puts you at the summit for one of the most extraordinary natural light shows in the UK: the Forth bridges lit silver, the city emerging from darkness below, the Highlands appearing through mist to the north.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
                  title: "Scottish Pound Notes are Legal Tender Everywhere",
                  desc: "Scottish banks (Clydesdale Bank, Bank of Scotland, Royal Bank of Scotland) issue their own pound notes that are legal tender throughout the UK, though some English vendors occasionally decline them out of unfamiliarity. Exchange at any Post Office if needed. Scottish and English pound notes have identical value.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "🎟️",
                  title: "Book Edinburgh Castle Online — Always",
                  desc: "Edinburgh Castle queues in peak season can be 40–60 minutes at the esplanade ticket desk. Online booking costs the same (£19.50) and gives you a timed entry slot — walk past the queue directly to the gate. The difference in summer is significant enough to make online booking non-optional.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Edinburgh" />

          {/* Combine With */}
          <CombineWith currentSlug="edinburgh-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Should I do London first or Edinburgh first?",
                  a: "Most visitors flying into the UK do London first (Heathrow is the main international hub) and add Edinburgh at the end, taking the train from London King's Cross to Edinburgh Waverley (4.5 hours, £25–80 on Trainline with advance booking). A combined London (5 days) + Edinburgh (4 days) trip is one of the best 9-day UK itineraries available.",
                },
                {
                  q: "How far is Loch Ness from Edinburgh?",
                  a: "Loch Ness is approximately 3 hours' drive from Edinburgh (170 miles via the A9). Better as a day trip: take an organised coach tour with Rabbies Trail Burners or Timberbush (£45–70 all-inclusive), or take the train from Edinburgh to Inverness (ScotRail, £30–60, 3 hours) and spend the day at Loch Ness and Urquhart Castle (£12 entry, beautifully ruined on the loch shore).",
                },
                {
                  q: "Where's the best place to do a whisky tasting in Edinburgh?",
                  a: "For a structured introduction: the Scotch Whisky Experience on the Royal Mile (£19, 70 minutes, covers all four Scottish whisky regions with tastings). For enthusiasts: Cadenhead's Whisky Shop on the Canongate (independent bottlers, tasting pours from £5). For the deepest experience: The Scotch Malt Whisky Society (Queen Street or The Vaults, Leith — rare single cask expressions, tasting flights from £20). The Bow Bar has 300+ whiskies by the dram from £4.50.",
                },
                {
                  q: "When is the best time to visit Edinburgh?",
                  a: "May–September for the best weather (though 'best' in Scotland means rarely above 20°C — always bring layers). August is the Festival month — extraordinary atmosphere but the city is packed and expensive. September is arguably optimal: summer warmth, dramatically fewer crowds, the Festival just ended but the energy lingers. December brings a famous Christmas market and Edinburgh's Hogmanay is one of the world's great New Year parties.",
                },
                {
                  q: "Is Edinburgh very hilly? Will it be hard to walk around?",
                  a: "Yes — Edinburgh is built on a series of volcanic hills. The Old Town involves significant elevation changes: the Royal Mile runs downhill from Castle Rock (130m above sea level) to Holyrood, with steep closes off both sides. Comfortable, grippy walking shoes (not sandals or flat-soled shoes) are essential. The New Town is considerably flatter. Lothian Buses connect most points if the hills become tiring — a single journey costs £2.",
                },
                {
                  q: "Does Scottish independence affect travel plans?",
                  a: "As of 2026, Scotland is part of the United Kingdom. There is no border between Scotland and England, no separate currency, no separate visa requirement, and no restriction on movement. The same UK Standard Visitor Visa (or ETA for visa-exempt countries) covers the whole trip. Prices in Scotland are generally slightly lower than London, especially for accommodation and pub food.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Edinburgh trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-edinburgh", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/edinburgh-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-edinburgh", label: "How to get there", icon: "✈️" },
                { href: "/blog/edinburgh-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="edinburgh-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "London in 5 Days — Crown Jewels &amp; the Thames", href: "/blog/london-5-days" },
                { label: "Dublin in 4 Days — Pubs &amp; Cliffs of Moher", href: "/blog/dublin-4-days" },
                { label: "Amsterdam in 4 Days — Canals &amp; Rijksmuseum", href: "/blog/amsterdam-4-days" },
                { label: "Paris in 5 Days — Eiffel Tower &amp; Versailles", href: "/blog/paris-5-days" },
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
