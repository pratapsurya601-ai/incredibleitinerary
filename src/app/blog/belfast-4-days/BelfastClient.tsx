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
const BELFAST_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Belfast Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "🚂",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "4-Day Itinerary" },
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
          href: `mailto:?subject=Belfast 4-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Belfast in 4 Days — Titanic Museum, murals and Giant%27s Causeway&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/belfast-4-days"
        imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
        description="Belfast in 4 Days: Titanic Museum, Black Cab murals tour, Giant&apos;s Causeway, Game of Thrones filming locations and Cathedral Quarter pubs — complete 2026 travel guide."
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
export default function BelfastClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BELFAST_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Belfast" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="belfast titanic museum waterfront northern ireland cityscape"
            fallback="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Belfast Titanic Museum and waterfront at golden hour, Northern Ireland"
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
              <span className="text-white/70">Belfast 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Northern Ireland
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Belfast in 4 Days:
                <em className="italic text-amber-300"> Titanic, Murals &amp; the Causeway Coast</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Europe&apos;s great reinvention city — the world&apos;s largest Titanic museum, Black Cab murals tours, Giant&apos;s Causeway day trip, Game of Thrones filming locations, and Cathedral Quarter pubs that beat London on atmosphere. The complete guide.
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
              <span>🇬🇧 Northern Ireland</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From £55/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Belfast has pulled off one of Europe&apos;s great reinventions — a city that once made headlines for all the wrong reasons now draws visitors for the world&apos;s largest Titanic museum, an electric Cathedral Quarter, and one of the UK&apos;s finest food scenes. The Ulster Fry is non-negotiable.
            </p>
          </blockquote>

          {/* ── WHAT BELFAST ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Belfast Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Belfast was once the industrial powerhouse of Ireland — the city where the Titanic was built, where linen mills and shipyards defined working-class life for generations, and where the Troubles kept it off the tourist map for thirty years. The 1998 Good Friday Agreement changed everything. Since then, Belfast has invested massively in culture, food, and tourism infrastructure, and the results are extraordinary.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Titanic Belfast museum — opened in 2012 on the exact slipway where the ship was built — is genuinely world-class and one of the best museum experiences in the British Isles. The Cathedral Quarter rivals any UK city for independent bars, street art, and live music. The political murals on the Falls and Shankill Roads, vivid and unflinching, tell a story that no other city in Europe has on open display. And an hour and a half up the coast, the Giant&apos;s Causeway is one of the most genuinely surreal landscapes on earth.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days in Belfast allows you to cover all of this without rushing. The city is compact enough to walk most of it, direct enough that the political history never feels off-limits to ask about, and hospitable enough that the warmth of Belfast people is actually earned rather than performed. This guide covers all three budget levels — £55 a day on a tight budget to £500 a day at The Merchant Hotel.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="BFS / BHD" />
              <StatCard icon="🌡️" label="Best Season" value="May–Sep" />
              <StatCard icon="🏛️" label="Top Sight" value="Titanic Belfast" />
              <StatCard icon="💰" label="Budget From" value="£55/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Belfast</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Sep",
                  i: "☀️",
                  t: "Summer — Best Season",
                  d: "14–20°C with the longest days — Belfast gets light until 10pm in June. The Giant&apos;s Causeway and Antrim coast are best in summer when the sea is calmer and the coastal walk is manageable. Cathedral Quarter outdoor terraces fill with locals. Book accommodation 3–4 weeks in advance for summer weekends.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🌸",
                  t: "Spring — Good Value",
                  d: "10–15°C, fewer tourists, lower hotel prices. Spring light is excellent for photography around the Titanic Quarter and Cathedral Quarter murals. Shoulder season means you can walk into most restaurants without booking. Some Causeway Coast attractions run reduced hours in early spring.",
                  b: "Good value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Oct–Nov",
                  i: "🍂",
                  t: "Autumn — Atmospheric",
                  d: "8–13°C and noticeably wetter, but Belfast in autumn has a particular atmosphere — low cloud over the Titanic Quarter, golden light on the murals, a slower pace after summer. Halloween (Samhain) is massive in Belfast — one of the UK&apos;s best Halloween festivals. Pack waterproofs regardless.",
                  b: "Atmospheric",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter — Quietest",
                  d: "3–8°C and frequently rainy. The Giant&apos;s Causeway is wild and moody in winter and practically empty on weekdays. The Titanic museum, Crown Liquor Saloon, and Cathedral Quarter pubs are better appreciated in winter when you have them to yourself. Christmas markets run in the city centre through December.",
                  b: "Off-peak bargains",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚂 Getting to Belfast</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Belfast has two airports — <strong className="font-medium">George Best Belfast City (BHD)</strong>, 10 minutes from the city centre by Glider bus (£2), and <strong className="font-medium">Belfast International (BFS)</strong>, 30–40 minutes by Airport Express bus (£8). BHD is far more convenient for the city centre.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚂",
                  t: "Enterprise Train from Dublin (recommended)",
                  d: "Dublin Connolly → Belfast Lanyon Place: 2 hours, from €25 standard booked online at irishrail.ie or translink.co.uk. The Enterprise runs 8 times daily and is the most comfortable and scenic way to arrive from Dublin. Arrives directly into the city centre — no onward transfer needed.",
                  b: "Best from Dublin",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Dublin",
                  d: "Aircoach and Dublin Coach run frequent services from Dublin Airport and Dublin city centre to Belfast from £15 one-way (2–2.5 hours). Cheaper than the train but slower and less comfortable. Drops off at Europa Buscentre, Belfast&apos;s main bus hub in the city centre.",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "✈️",
                  t: "Fly into Belfast City (BHD)",
                  d: "George Best Belfast City Airport receives flights from London Heathrow (British Airways, 1hr 20min), London Gatwick, Edinburgh, Glasgow, and Manchester. The airport is 10 minutes from the city centre on the Glider rapid transit bus (£2, runs every 7–8 minutes). The most convenient arrival for UK visitors.",
                  b: "Best for UK flights",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "✈️",
                  t: "Fly into Belfast International (BFS)",
                  d: "Belfast International receives a wider range of international and budget airline routes — Ryanair, easyJet, and TUI routes from across Europe. Airport Express bus to Europa Buscentre takes 30–40 minutes (£8 one-way, £11 return). Book at translink.co.uk.",
                  b: "Budget airlines",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Belfast Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary covers the Titanic Quarter and Cathedral Quarter on arrival, the political murals and Crown Liquor Saloon on day two, the Causeway Coast as a full-day excursion on day three, and the city&apos;s markets and final sights on day four.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Titanic Quarter, SS Nomadic & Cathedral Quarter"
                cost="£45–60 (museum ticket, food, drinks)"
                items={[
                  "09:00 — Walk or take the Glider bus to the Titanic Quarter (25 minutes on foot from the city centre, or 10 minutes on the Glider from Donegall Square). Book Titanic Belfast tickets online in advance (£23 adult) to skip queues — the world&apos;s largest Titanic museum covers the ship&apos;s construction, launch, and sinking across nine immersive galleries built on the exact slipway where the ship was assembled.",
                  "09:30 — Begin with the shipyard experience (Gallery 4) — a dark-ride through a full-scale recreation of the Harland & Wolff shipyard. The scale of the operation — over 3,000 workers building the largest moving object ever constructed — only becomes real when you see the rivet gangs and the skeleton of the hull rising gallery by gallery.",
                  "11:30 — SS Nomadic: the last surviving White Star Line vessel, moored in the Hamilton Dock alongside the museum, included in your Titanic Belfast ticket. The SS Nomadic tendered first and second-class passengers from Cherbourg to the Titanic on 10 April 1912. Walk the restored decks and the first-class saloon.",
                  "13:00 — Lunch at the Titanic Hotel restaurant (£12–18) or grab something from the Titanic Quarter market stalls. Walk back through the shipyard legacy area — the enormous yellow Harland & Wolff cranes Samson and Goliath are visible from everywhere in the city.",
                  "15:00 — Cathedral Quarter: explore the cobbled streets around St Anne&apos;s Cathedral. Street art on the Black Box on Hill Street, the murals on Commercial Court alley (one of Belfast&apos;s oldest pub lanes), and the Oh Yeah Music Centre on Gordon Street. All free.",
                  "17:30 — Pre-dinner drinks at the John Hewitt bar on Donegall Street — a worker-owned cooperative pub with no television, excellent local ales from £4.50, and the best pre-gig atmosphere in Belfast. The bar staff will point you toward that evening&apos;s live music.",
                  "19:30 — Dinner: Ulster Fry at Maggie May&apos;s cafe on Botanic Avenue (£9–12) — soda bread, potato bread, black pudding, back bacon, sausage, and fried egg on one plate. The quintessential Belfast meal. Then live trad music at the Duke of York off Commercial Court — free entry most nights.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Black Cab Murals Tour, Crumlin Road Gaol & Crown Liquor Saloon"
                cost="£55–75 (taxi tour, gaol, food, drinks)"
                items={[
                  "09:30 — Black Cab murals tour from the city centre (shared tour £35/person, private cab £60–80 for 2 hours). Tours are led by drivers who grew up in the Falls or Shankill and offer first-hand accounts of the Troubles that no guidebook or museum can replicate. This is the most powerful two hours you will spend in Belfast.",
                  "10:00 — Falls Road: the International Wall, the largest collection of political murals in Europe. The Bobby Sands mural on the Sinn Féin headquarters on Falls Road is particularly striking — a 10-storey portrait of the MP who died on hunger strike in 1981. The murals are continuously updated; your driver will know which are newly painted.",
                  "11:00 — Shankill Road murals: a completely different political perspective painted with equal intensity. The contrast between the two communities, separated by the Peace Wall just 300 metres apart, is one of the most thought-provoking urban experiences in Europe. Visitors can sign the Peace Wall — 8 metres of steel and corrugated iron, still standing today.",
                  "12:30 — Crumlin Road Gaol (£13, book online). Northern Ireland&apos;s most notorious Victorian prison, operational from 1845 to 1996, held political prisoners from both sides of the Troubles. The tunnel beneath Crumlin Road connecting the gaol to the courthouse — walked by prisoners before trial — is one of the most atmospheric spaces in Belfast. Allow 90 minutes.",
                  "14:30 — Lunch in the Cathedral Quarter: Kelly&apos;s Cellars on Bank Square (established 1720, one of the oldest pubs in Belfast) does good toasties and soup from £6. Or Established Coffee on Hill Street for a flat white and a sandwich.",
                  "16:00 — Crown Liquor Saloon on Great Victoria Street (National Trust): Belfast&apos;s Victorian gin palace, built in 1885, arguably the most beautiful pub interior in the United Kingdom. Original snugs with etched glass, mosaic floors, polished mahogany, and gas lighting still burning. A pint here is mandatory. Free entry.",
                  "19:30 — Dinner at Mourne Seafood Bar on Bank Square (£25–35/pp) — the best seafood restaurant in Belfast. Strangford Lough oysters from £1.80 each, whole dressed Kilkeel crab, and langoustines from the Mourne coast. Book in advance at weekends.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Giant&apos;s Causeway, Dark Hedges & Antrim Coast"
                cost="£55–75 (transport, Giant&apos;s Causeway, Carrick-a-Rede, lunch)"
                items={[
                  "07:30 — Europa Buscentre to Coleraine: Translink Ulsterbus (£12 return, 1.5 hours), then the Causeway Rambler shuttle bus (£9 day ticket) covering the full Antrim coast — Giant&apos;s Causeway, Carrick-a-Rede, Ballintoy, and the Dark Hedges stop. Book at translink.co.uk. Alternatively, hire a car from Belfast (from £35/day) to drive the A2 coastal road at your own pace.",
                  "10:00 — Giant&apos;s Causeway (National Trust, £13 adult). The 40,000 interlocking hexagonal basalt columns at the foot of the Antrim cliffs are genuinely surreal — formed by a volcanic eruption 60 million years ago cooling and fracturing into perfect geometric forms. Arrive early before the tour buses. The cliff path above the columns gives the best perspective and is entirely free to walk.",
                  "11:30 — Walk the Causeway coastal path eastward past the Giant&apos;s Boot, the Organ, and the Camel for views back over the columns from the clifftop. The full walk to Bushmills takes 45 minutes and is the most rewarding way to experience the area without visitor centre crowds.",
                  "13:00 — Lunch at the Bushmills Inn in Bushmills village (£18–28/pp) — a 400-year-old coaching inn with an open peat fire and outstanding seafood chowder with soda bread. Or pack lunch from Belfast to keep costs down.",
                  "14:30 — Carrick-a-Rede rope bridge (National Trust, £13 adult, book online for timed entry in summer — sells out). A 20-metre rope bridge 30 metres above the Atlantic, connecting the mainland to a tiny island used by salmon fishermen since 1755. The clifftop walk from the car park is as dramatic as the bridge itself.",
                  "16:30 — Dark Hedges: the ancient beech tree tunnel near Armoy used as the Kingsroad in Game of Thrones Season 2. Free to visit. On the Causeway Rambler, ask the driver to let you off at the Armoy junction. The tunnel is most dramatic at late afternoon when low light filters through the branches.",
                  "19:30 — Return to Belfast; the last Rambler connects back to Coleraine and the bus to Belfast arrives at Europa Buscentre by 9pm. Head straight to the Cathedral Quarter for a pint and whatever live music is on.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="St George&apos;s Market, City Hall & Departure"
                cost="£25–40 (market, food, transport to airport)"
                items={[
                  "09:00 — St George&apos;s Market on a Friday, Saturday, or Sunday (free entry) — Belfast&apos;s oldest covered market, built in 1896, with artisan food stalls, fresh fish and shellfish, craft producers, and live music inside. Arrive by 9am for the best selection of fresh seafood before the city crowds. Saturday is the variety market; Friday is the city food and craft market.",
                  "10:30 — Free guided tour of Belfast City Hall (book at belfastcity.gov.uk, free entry) — the Edwardian baroque building completed in 1906 has excellent exhibitions on the city&apos;s linen heritage, the shipbuilding era, and the Titanic. The Great Hall is one of the finest Victorian interior spaces in Ireland. Tours run at 11am most days.",
                  "12:00 — Botanic Gardens (free, 10-minute walk from the city centre) and the Palm House — a Victorian glasshouse designed by Charles Lanyon in 1840. The Ulster Museum is directly adjacent (free entry) with highlights including Egyptian mummies, Spanish Armada treasure recovered from the Irish coast in 1588, and the Irish Early Peoples gallery.",
                  "13:30 — Final lunch before departure: the Ormeau Road or Lisburn Road neighbourhoods have better cafes and bistros than the tourist strip. Harlem Café on Ormeau Road or Established Coffee for a sandwich and coffee (£8–12). Or St George&apos;s Market has excellent hot food stalls if it is open.",
                  "15:00 — George Best Belfast City Airport is 10 minutes from the city centre on the Glider rapid transit bus (£2, runs every 7–8 minutes). Belfast International requires the Airport Express bus from Europa Buscentre (35 minutes, £8). Both are efficient — allow 90 minutes from city centre to cleared security.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Belfast" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Belfast Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key sights in priority order. Entry prices are 2026 rates. Book Titanic Belfast, Crumlin Road Gaol, and Carrick-a-Rede online in advance; the others can be visited on arrival.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Titanic Belfast Museum",
                  e: "£23 adult (book online)",
                  d: "The world&apos;s largest Titanic museum, built on the exact slipway at Harland & Wolff where the ship was constructed. Nine galleries across 14,000 square metres cover the design, build, launch, sinking, and legacy of the ship. The dark-ride through the full-scale shipyard is the highlight. Allow 3 hours minimum. Open daily from 9am.",
                  t: "Must see · 3 hrs",
                },
                {
                  n: "SS Nomadic",
                  e: "Included with Titanic Belfast ticket",
                  d: "The last surviving White Star Line vessel, moored in the Hamilton Dock alongside the museum. The SS Nomadic tendered first and second-class passengers from Cherbourg to the Titanic on 10 April 1912. Walk the restored decks, the first-class saloon, and the boiler room. A genuinely moving counterpart to the main museum galleries.",
                  t: "Must see · 45 mins",
                },
                {
                  n: "Black Cab Tour of the Murals",
                  e: "£35/person (shared); £60–80 (private)",
                  d: "The Falls and Shankill Road murals are Belfast&apos;s most powerful experience. Black Cab drivers who grew up in these communities lead tours covering the International Wall, the Bobby Sands mural, the Peace Wall, and the Shankill Road loyalist murals — a two-hour education in the most complex urban conflict of modern European history.",
                  t: "Must do · 2 hrs",
                },
                {
                  n: "Crumlin Road Gaol",
                  e: "£13 adult (book online)",
                  d: "Victorian prison built in 1845, operational until 1996. Guided tours cover the condemned cell, the execution chamber (17 men hanged here), the underground tunnel to the courthouse, and the wing that held political prisoners during the Troubles from both republican and loyalist backgrounds. Atmospheric and entirely unflinching.",
                  t: "Highly recommended · 90 mins",
                },
                {
                  n: "Crown Liquor Saloon",
                  e: "Free (National Trust)",
                  d: "The finest Victorian pub interior in the United Kingdom — built 1885, Grade A listed, maintained by the National Trust. Original snugs with etched glass, gas lighting, polished mahogany, and a mosaic floor that took Italian craftsmen three years to complete. Have at least one pint here. On Great Victoria Street, opposite the Europa Hotel.",
                  t: "Must visit · 45 mins",
                },
                {
                  n: "Giant&apos;s Causeway",
                  e: "£13 adult (National Trust; cliff walk free)",
                  d: "40,000 hexagonal basalt columns on the Antrim coast, formed 60 million years ago by a volcanic eruption cooling and fracturing into geometric perfection. UNESCO World Heritage Site and the most visited tourist attraction in Northern Ireland. Take the free clifftop path above the columns for the best views without visitor centre crowds. 1.5 hours from Belfast by public transport.",
                  t: "Day trip · Full day",
                },
                {
                  n: "Game of Thrones Filming Locations",
                  e: "Free (most sites)",
                  d: "Northern Ireland was the primary filming location for Game of Thrones across all eight series. Accessible sites include the Dark Hedges (the Kingsroad, Season 2), Cushendun Caves (Melisandre birth scene, off the Causeway Rambler), Ballintoy Harbour (the Iron Islands, Season 2), and Downhill Beach (Dragonstone, Season 2). The Tourism NI GoT trail map is free to download.",
                  t: "Optional add-on",
                },
                {
                  n: "Cathedral Quarter & Street Art",
                  e: "Free",
                  d: "The Cathedral Quarter — centred on Donegall Street, Hill Street, and Commercial Court — is Belfast&apos;s arts and nightlife hub. Street murals on Black Box, the Oh Yeah Music Centre on Gordon Street, and the Cathedral Quarter trail are all free. The Duke of York in Commercial Court and the John Hewitt on Donegall Street are the essential pubs for live music.",
                  t: "Self-guided · 2 hrs",
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
            title="Belfast — Titanic, Murals &amp; the Antrim Coast"
            subtitle="The Titanic&apos;s birthplace, political street art, and the basalt columns of Giant&apos;s Causeway."
            spots={[
              {
                name: "Titanic Belfast Museum",
                query: "titanic belfast museum waterfront harland wolff northern ireland",
                desc: "The world&apos;s largest Titanic museum built on the exact slipway where the ship was assembled — one of the finest museums in the British Isles.",
              },
              {
                name: "Giant&apos;s Causeway Basalt Columns",
                query: "giants causeway basalt columns antrim coast northern ireland",
                desc: "40,000 hexagonal basalt columns on the Antrim coast — one of the most genuinely surreal natural landscapes in Europe.",
              },
              {
                name: "Falls Road Political Murals",
                query: "belfast falls road murals political street art northern ireland",
                desc: "The International Wall on Falls Road — the largest collection of political murals in Europe, documenting the Troubles and the peace process.",
              },
              {
                name: "Crown Liquor Saloon Interior",
                query: "crown liquor saloon belfast victorian pub interior national trust",
                desc: "The finest Victorian pub interior in the UK — gas-lit snugs, mosaic floors, and etched glass maintained by the National Trust since 1978.",
              },
              {
                name: "Dark Hedges Kingsroad",
                query: "dark hedges belfast game of thrones kingsroad beech trees antrim",
                desc: "The ancient beech tree tunnel near Armoy used as the Kingsroad in Game of Thrones — most dramatic at dawn or late afternoon.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Belfast is significantly cheaper than London — a mid-range trip costs roughly what a budget trip costs in the capital. The main variable is accommodation; food, transport, and most attractions are very affordable by UK standards.
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
                    ["🏨 Accommodation/night", "£25–40 (hostel/budget)", "£80–130 (3-star hotel)", "£200–350 (Merchant Hotel)"],
                    ["🍽️ Food/day", "£15–25 (cafes, market stalls)", "£35–55 (bistros, pubs)", "£80–150 (fine dining)"],
                    ["🚌 Transport/day", "£5–10 (Glider, Translink)", "£15–30 (car hire or taxis)", "£50–120 (private car)"],
                    ["🏛️ Activities/day", "£20–30 (Titanic, shared cab tour)", "£30–50 (tours + museums)", "£80–200 (private tours, spa)"],
                    ["TOTAL/day", "£55–75", "£120–170", "£300–500"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (£55–75/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in a Cathedral Quarter hostel or budget guesthouse, eat at Maggie May&apos;s and St George&apos;s Market stalls, use the Glider bus everywhere, and take the shared Black Cab tour. Belfast is one of the UK&apos;s most affordable city breaks at this level.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (£120–170/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay in a 3-star Cathedral Quarter hotel, dine at Ox or Mourne Seafood Bar, hire a car for the Causeway Coast day, and book a private Black Cab tour. This is the sweet spot — excellent quality and still well below equivalent London hotel prices.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">✨ Luxury (£300–500/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">The Merchant Hotel on Waring Street, private Titanic evening access, the Eipic Michelin-starred tasting menu (£95/pp, book 4–6 weeks ahead), and a private chauffeur for the Causeway Coast. Belfast luxury is world-class and still cheaper than equivalent London hotels.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Belfast</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Cathedral Quarter and city centre are the best areas to stay — walking distance from the Titanic Quarter (25 minutes on foot), the murals tour pickup points, Crown Liquor Saloon, and St George&apos;s Market. The Titanic Quarter hotels are good for museum access but isolated from the rest of the city at night.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "The Merchant Hotel",
                  type: "5-star luxury · Cathedral Quarter, Waring Street",
                  price: "From £200/night",
                  badge: "Most prestigious",
                  desc: "A converted Victorian bank building with an extraordinary Great Room bar — regarded as the best cocktail bar in Ireland. Art deco interiors, a Victorian-era spa pool, and 62 individually designed rooms. The grand staircase and vaulted ceiling cocktail lounge are among the finest hotel interiors in the country. Book 4–6 weeks ahead for weekend availability.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Grand Central Hotel",
                  type: "4-star · Bedford Street, city centre",
                  price: "From £120/night",
                  badge: "Best views",
                  desc: "Belfast&apos;s tallest hotel with the Observatory bar on the 23rd floor — panoramic views of the city, Belfast Lough, and on a clear day the Scottish coast. 300 rooms, central location on Bedford Street. One of Belfast&apos;s best-value higher-end hotels and significantly cheaper than comparable London properties.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Vagabond Belfast",
                  type: "Boutique hostel · Cathedral Quarter",
                  price: "From £25/night (dorm); £65 (private room)",
                  badge: "Best budget",
                  desc: "The best-run hostel in Belfast — clean, well-located in the Cathedral Quarter, with excellent common areas and staff who know every live music venue in the city. Private rooms and dorms available. Popular with solo travellers and those doing the Game of Thrones touring route along the Antrim coast.",
                  color: "border-parchment-2 bg-white",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Belfast</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Belfast&apos;s food scene has transformed dramatically since 2010 — the city now has a Michelin-starred restaurant, multiple outstanding chefs, and a thriving casual dining scene built around Northern Irish produce. The Ormeau Road and Lisburn Road neighbourhoods have better restaurants at better prices than the tourist strip around Victoria Square.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Ox",
                  t: "Farm-to-table · Oxford Street, city centre",
                  d: "Belfast&apos;s best farm-to-table restaurant — a weekly-changing tasting menu built entirely from Ulster produce, served in a spare, elegant room overlooking the River Lagan. Chef Stephen Toman trained under Raymond Blanc. Tasting menu £55–70/pp, à la carte £40–50/pp. Book 2 weeks in advance. Regularly cited as one of the best restaurants in Ireland.",
                  b: "Best overall",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "The Merchant Hotel",
                  t: "Grand brasserie · Waring Street, Cathedral Quarter",
                  d: "The Great Room restaurant in The Merchant Hotel is one of the most spectacular dining rooms in Ireland — a 19th-century banking hall with a soaring domed ceiling and white-linen service. Classical British menu with Ulster produce. Sunday brunch (£35/pp) is a Belfast institution. Smart casual dress required. Book at least a week ahead for dinner.",
                  b: "Most spectacular room",
                  c: "bg-purple-50 border-purple-200",
                },
                {
                  n: "Mourne Seafood Bar",
                  t: "Seafood · Bank Square, Cathedral Quarter",
                  d: "The best seafood restaurant in Belfast and consistently one of the best in Ireland. Strangford Lough oysters from £1.80 each, whole dressed Kilkeel crab, and langoustines from the Mourne coast — all landed within hours of service. The bar downstairs is more casual than the upstairs restaurant. Book in advance for dinner. Mains £18–28.",
                  b: "Best seafood",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "St George&apos;s Market",
                  t: "Market stalls · East Bridge Street",
                  d: "Belfast&apos;s oldest covered market (1896) has some of the best casual food in the city on Friday, Saturday, and Sunday mornings. Bacon rashers on soda bread, fresh oysters, artisan cheese, and proper Belfast street food from local producers. Budget £8–14 for a full breakfast. Arrive early — the fish stalls and best produce are gone by 11am.",
                  b: "Best casual",
                  c: "bg-green-50 border-green-200",
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
            destination="Belfast Northern Ireland"
            hotels={[
              {
                name: "The Merchant Hotel",
                type: "5-star luxury · Victorian bank conversion",
                price: "From £200/night",
                rating: "5",
                badge: "Most prestigious",
                url: "https://www.booking.com/hotel/gb/the-merchant.html?aid=2820480",
              },
              {
                name: "Grand Central Hotel Belfast",
                type: "4-star · 23rd-floor Observatory bar",
                price: "From £120/night",
                rating: "4",
                badge: "Best views",
                url: "https://www.booking.com/hotel/gb/grand-central-belfast.html?aid=2820480",
              },
              {
                name: "Vagabond Belfast",
                type: "Boutique hostel · Cathedral Quarter",
                price: "From £25/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/gb/vagabond-belfast.html?aid=2820480",
              },
              {
                name: "Titanic Hotel Belfast",
                type: "4-star · Thompson Dock, Titanic Quarter",
                price: "From £140/night",
                rating: "4",
                badge: "Most unique setting",
                url: "https://www.booking.com/hotel/gb/titanic-hotel-belfast.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Belfast Black Cab Murals Tour",
                duration: "2 hrs",
                price: "From £35/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Belfast+black+cab+tour&partner_id=PSZA5UI",
              },
              {
                name: "Giant&apos;s Causeway Day Trip from Belfast",
                duration: "Full day",
                price: "From £35/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=Giants+Causeway+day+trip+Belfast&partner_id=PSZA5UI",
              },
              {
                name: "Game of Thrones Filming Locations Tour",
                duration: "Full day",
                price: "From £45/person",
                badge: "Popular",
                url: "https://www.getyourguide.com/s/?q=Game+of+Thrones+Belfast+tour&partner_id=PSZA5UI",
              },
              {
                name: "Titanic Belfast Skip-the-Line Entry",
                duration: "3 hrs",
                price: "From £23/person",
                url: "https://www.getyourguide.com/s/?q=Titanic+Belfast+museum&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Belfast</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🕐",
                  title: "Not booking Titanic Belfast in advance",
                  desc: "The world&apos;s largest Titanic museum sells out on weekends and throughout summer. Book online at titanicbelfast.com at least 3 days ahead to guarantee entry and skip the queues. The museum fills completely by 11am in July and August. Online booking also saves a few pounds per ticket.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🚌",
                  title: "Trying to do Giant&apos;s Causeway as a half-day",
                  desc: "The Causeway Coast needs a full day minimum. Giant&apos;s Causeway, Carrick-a-Rede rope bridge, Dunluce Castle, and the Dark Hedges each require at least 45 minutes. A rushed half-day means missing the cliff walks and coastal scenery that make the trip worthwhile — and the Rambler bus connections are timed for a full-day circuit.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🗺️",
                  title: "Skipping the Black Cab murals tour",
                  desc: "Belfast without the murals tour is like visiting Pompeii without knowing about Vesuvius. The Falls and Shankill Roads are Belfast&apos;s most powerful story — and the Black Cab drivers who grew up there tell it in a way no museum can replicate. Two hours and £35 for the most educational experience in Northern Ireland.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🍽️",
                  title: "Eating only on the tourist strip",
                  desc: "The Victoria Square and city centre tourist strip has mediocre food at inflated prices. The Botanic Avenue, Ormeau Road, and Lisburn Road neighbourhoods have far better restaurants at honest prices. University Road cafes and South Belfast bistros are where Belfast locals actually eat.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "⛅",
                  title: "Underestimating Northern Ireland weather",
                  desc: "Northern Ireland weather is famously unpredictable — sunny and raining within the same hour. Pack waterproof layers for Giant&apos;s Causeway regardless of the forecast; the coastal cliffs are windier and wetter than the city. The light after a rain shower on the basalt columns is extraordinary — embrace it rather than avoid it.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Belfast</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎫",
                  title: "Get the iLink card for all public transport",
                  desc: "The Translink iLink smartcard covers all buses and trains across Northern Ireland including the Glider rapid transit. Load it with a day ticket (£7.50) or weekly ticket (£20) for unlimited travel. The Glider connects the city centre, Titanic Quarter, and east Belfast faster than any taxi. Buy at Europa Buscentre or online at translink.co.uk.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏛️",
                  title: "Book Titanic Belfast for the 9am slot",
                  desc: "The 9am entry slot is the quietest on any day of the week. By 11am tour bus groups have arrived and the galleries — particularly the shipyard dark-ride and underwater exploration gallery — are crowded. Arriving at opening gives you the entire first floor virtually to yourself for at least 45 minutes.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🥃",
                  title: "Seek out Northern Irish craft spirits",
                  desc: "Belfast bars take genuine pride in local craft distilling. Shortcross Gin from Rademon Estate and Echlinville Dunville&apos;s whiskey are Northern Irish producers worth seeking out. The Merchant Hotel bar and The Dirty Onion both stock the best local labels. Bushmills — the world&apos;s oldest licensed whiskey distillery (1608) — is 1.5 hours away on the Causeway Coast and offers excellent visitor tours (£20/pp).",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "📸",
                  title: "Visit the Dark Hedges at sunrise or sunset",
                  desc: "The Dark Hedges beech tree tunnel near Armoy is one of the most photographed spots in Ireland after Game of Thrones. At midday in summer it is crowded with tourist buses. At sunrise or 7pm in summer the light is golden and you may have the tunnel to yourself for 20 minutes. The last Causeway Rambler bus back passes the Armoy stop around 5:30pm.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎭",
                  title: "Check what&apos;s on in the Cathedral Quarter",
                  desc: "The Cathedral Quarter has live music somewhere almost every night. The Duke of York in Commercial Court does free trad sessions most evenings. The Oh Yeah Music Centre on Gordon Street hosts local and touring acts. The Black Box on Hill Street runs jazz, folk, and spoken word events. Check visitbelfast.com for a full events calendar before you arrive.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "🌊",
                  title: "Do the Causeway cliff walk, not just the columns",
                  desc: "Most visitors go to the visitor centre, walk down to the columns, photograph them, and leave. The clifftop path above the columns — free to walk, no ticket needed — gives the best aerial perspective on the formation and continues past the Giant&apos;s Organ and the Giant&apos;s Boot to Benbane Head. Allow an extra hour for the full loop back to the visitor centre.",
                  color: "bg-sky-50 border-sky-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Belfast" />

          {/* Combine With */}
          <CombineWith currentSlug="belfast-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Belfast safe for tourists?",
                  a: "Belfast is a safe city for tourists. The Troubles ended with the 1998 Good Friday Agreement and the city has transformed dramatically. The murals on the Falls and Shankill Roads are now a tourist attraction rather than an active conflict zone. Black Cab tour drivers from both communities openly welcome visitors and answer any question. Exercise the same common sense as in any UK city. The Cathedral Quarter, Titanic Quarter, and Botanic areas are entirely safe at all hours.",
                },
                {
                  q: "Do I need a separate visa for Northern Ireland and the Republic of Ireland?",
                  a: "Northern Ireland is part of the United Kingdom, so a UK visa covers it. The Republic of Ireland is a separate country requiring an Irish visa (or Schengen equivalent for some nationalities). Indian passport holders need both a UK visa and an Irish visa to cross the border freely. US, EU, Australian and most other Western passport holders can move across the border under the Common Travel Area agreement without any additional visa.",
                },
                {
                  q: "How do I get from Belfast to Giant&apos;s Causeway without a car?",
                  a: "Translink Ulsterbus runs services from Europa Buscentre to Coleraine (£12 return, 1.5 hours), then the Causeway Rambler shuttle connects Coleraine to Giant&apos;s Causeway, Carrick-a-Rede, Ballintoy, and Ballycastle. A Rambler day ticket costs £9 and covers unlimited hops along the coast. Total round-trip from Belfast by public transport is around £21. Book at translink.co.uk.",
                },
                {
                  q: "What currency is used in Belfast?",
                  a: "Belfast uses British Pounds Sterling (GBP), not Euros. Northern Ireland bank notes are printed by Ulster Bank, Bank of Ireland, and Danske Bank — these are legal tender in Northern Ireland but can be difficult to spend in England. Spend them or exchange them before leaving. Card payments including contactless are accepted virtually everywhere in Belfast.",
                },
                {
                  q: "How do I get from Dublin to Belfast?",
                  a: "The Enterprise train from Dublin Connolly to Belfast Lanyon Place takes 2 hours and runs 8 times daily — standard fares from €25 booked in advance at irishrail.ie or translink.co.uk. The Aircoach and Dublin Coach bus services run from Dublin Airport and Dublin city centre to Belfast for around £15 one-way (2–2.5 hours). The train is significantly more comfortable and arrives directly in the city centre.",
                },
                {
                  q: "What is the best area to stay in Belfast?",
                  a: "The Cathedral Quarter is the best base — central, walkable to the Titanic Quarter (25 minutes on foot or 10 minutes on the Glider), close to St George&apos;s Market, Crown Liquor Saloon, and the murals tour pickup points. The Titanic Quarter has good hotels right next to the museum but feels isolated from the rest of the city at night. The Europa Hotel area and Victoria Square are convenient but overpriced given how walkable the city is.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Belfast trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/giants-causeway-day-trip", label: "Giant's Causeway guide", icon: "🌊" },
                { href: "/blog/belfast-food-guide", label: "Belfast food guide", icon: "🍽️" },
                { href: "/blog/game-of-thrones-filming-locations", label: "GoT filming locations", icon: "🏰" },
                { href: "/blog/northern-ireland-travel-tips", label: "Northern Ireland tips", icon: "📋" },
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
          <RelatedGuides currentSlug="belfast-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More UK &amp; Ireland Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Dublin in 4 Days — Guinness, Cliffs &amp; Georgian Streets", href: "/blog/dublin-4-days" },
                { label: "Edinburgh in 4 Days — Castle, Whisky &amp; the Fringe", href: "/blog/edinburgh-4-days" },
                { label: "London in 5 Days — Museums, Markets &amp; Parks", href: "/blog/london-5-days" },
                { label: "Galway in 3 Days — Wild Atlantic Way", href: "/blog/galway-3-days" },
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
