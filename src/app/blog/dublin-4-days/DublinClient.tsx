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
import InlineCTA from "@/components/blog/InlineCTA";
import PhotoCta from "@/components/blog/PhotoCta";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/email/InlineSignup";
import PinterestSaveButton from "@/components/ui/PinterestSaveButton";
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const DUBLIN_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Dublin Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
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
          href: `mailto:?subject=Dublin 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Dublin in 4 Days — Guinness, Howth, Temple Bar and the Irish craic&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/dublin-4-days"
        imageUrl="https://images.unsplash.com/photo-1548533893-59c99f22c3b2?w=1200&q=80"
        description="Dublin in 4 Days: Book of Kells, Guinness Storehouse, Howth cliff walk, Wicklow Mountains — complete travel guide with euro budget breakdown."
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
export default function DublinClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={DUBLIN_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="dublin temple bar ireland cliffs of moher pub"
            fallback="https://images.unsplash.com/photo-1548533893-59c99f22c3b2?w=1600&q=80"
            alt="Dublin Temple Bar at twilight with colourful pubs reflected in the Liffey, Ireland"
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
              <span className="text-white/70">Dublin 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-emerald-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Europe
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Dublin in 4 Days:
                <em className="italic text-emerald-300"> Guinness, Temple Bar &amp; the Irish Craic</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Trinity College, the Book of Kells, Kilmainham Gaol, Howth cliff walk, Wicklow Mountains, and the best pint of Guinness you&apos;ll ever have. The complete 4-day guide.
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
              <span>🇮🇪 Ireland</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From €55/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-emerald-500 pl-6 mb-10 bg-emerald-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Dublin rewards slow wandering — a city where a 10-minute walk separates a 9th-century Viking settlement from a world-class art museum, and where the person beside you at the bar will have been there for three hours already and knows every story worth telling.
            </p>
          </blockquote>

          {/* ── WHAT DUBLIN ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Dublin Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Dublin is not a city that announces itself. It is compact, walkable, and genuinely uninterested in impressing you — and that is precisely what makes it excellent. The Viking settlement of Dubh Linn (&quot;Black Pool&quot;) dates to 841 CE. The Normans arrived in 1169. The Georgian squares were built in the 18th century. The 1916 Easter Rising happened on O&apos;Connell Street. The Irish War of Independence ended in 1921. All of it is still visible, still in use, still talked about in pubs.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Four days is the right amount of time. It&apos;s enough to cover Trinity College and the Book of Kells, the Guinness Storehouse, Kilmainham Gaol, the cliff walk at Howth, and a day in the Wicklow Mountains — and still leave room for an evening in a proper Dublin pub, which is arguably the main reason to come.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The city is extremely walkable. The south side (Trinity, Grafton Street, Temple Bar, St Stephen&apos;s Green, Merrion Square) is the visitor core. The north side (O&apos;Connell Street, the IFSC, Stoneybatter) is more local and increasingly interesting. The DART rail line connects the city to the coast — Howth to the north, Dún Laoghaire to the south — and is one of the great commuter train rides in Europe for the sea views alone.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="DUB" />
              <StatCard icon="🌡️" label="Best Season" value="May–Sep" />
              <StatCard icon="🏛️" label="Founded" value="841 CE" />
              <StatCard icon="💰" label="Budget From" value="€55/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Dublin</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-blue-800 font-light">
                <strong className="font-medium">Year-round reality:</strong> Ireland is famously rainy in every season — the average is 150+ rain days per year. The question is not whether it will rain but whether the rain matters. Pack a waterproof layer regardless of when you travel. The Irish are experts at enjoying themselves in the rain, and so can you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Aug",
                  i: "☀️",
                  t: "Summer — Best Season",
                  d: "15–22°C, the longest days (sunset after 9:30pm in June), outdoor pub culture in full swing. July and August are peak tourist months — Kilmainham Gaol tickets sell out 3–4 weeks ahead. The Howth cliff walk is at its best in May with wildflowers and clear visibility. Book accommodation early.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🌱",
                  t: "Spring — Excellent Value",
                  d: "10–15°C, quieter than summer, St Patrick&apos;s Day (March 17) turns Dublin into a city-wide festival with parades, live music, and green everything. April is underrated — decent weather, smaller crowds, and full cultural programme. Good shoulder-season prices.",
                  b: "Great value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Local Favourite",
                  d: "12–17°C, summer crowds gone, but the city still fully operational. The Wicklow Mountains in October have exceptional autumn colour. October is the best month for pub culture — no tourist pressure, excellent traditional music sessions every night of the week.",
                  b: "Local favourite",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Feb",
                  i: "🌧️",
                  t: "Winter — Cold but Atmospheric",
                  d: "5–10°C, the shortest days (sunset at 4pm in December), but Dublin is genuinely atmospheric in winter — warm pubs against cold rain, Christmas markets on Grafton Street, and a completely different energy from the tourist season. Cheapest flights and accommodation of the year.",
                  b: "Budget season",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Dublin</h2>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-emerald-800 font-light">
                <strong className="font-medium">Key detail:</strong> Dublin Airport (DUB) is 10km north of the city centre. The <strong className="font-medium">Aircoach</strong> runs 24 hours a day directly to the city centre (€7–10 one way, 30–45 minutes depending on traffic). The Airport Express bus (Dublin Bus route 747) is the cheaper alternative (€8 single). A taxi costs €25–35.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "From India (New Delhi / Mumbai)",
                  d: "No direct flights — connections via London Heathrow, Amsterdam, Frankfurt, or Paris Charles de Gaulle. Total journey: 12–16 hours. Cheapest options typically route through London with a short connection. Important: Ireland is NOT part of the UK — if connecting through London, you may need both a UK transit visa and an Irish visa. Check your specific routing and passport requirements with your airline.",
                  b: "Requires Irish visa",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "✈️",
                  t: "From London (Heathrow / Gatwick / Stansted / City)",
                  d: "The most frequent connection — Aer Lingus, Ryanair, and British Airways fly Dublin from all five London airports. Flight time: 1 hour 20 minutes. Fares: €35–120 one way on budget carriers. Combined London–Dublin is one of the most popular short-break routes in Europe — book 4–6 weeks ahead for best prices.",
                  b: "Most popular route",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚢",
                  t: "Ferry from Holyhead (UK)",
                  d: "Irish Ferries and Stena Line run fast ferries (2 hours) and standard ferries (3 hours 15 minutes) from Holyhead, Wales to Dublin Port. The fast ferry is genuinely comfortable — a proper ship with cafes and lounge seating. From €40 one way. A scenic and memorable option if you&apos;re already in the UK or doing a combined UK–Ireland trip.",
                  b: "Scenic option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "✈️",
                  t: "From Europe (Paris / Amsterdam / Frankfurt)",
                  d: "Aer Lingus and Ryanair fly Dublin from most major European cities. Flight times: 1.5–2.5 hours. Fares from €25–80 on Ryanair. Dublin is easily combined with a wider Europe trip — Paris, Amsterdam, Edinburgh, and London are all within 2 hours.",
                  b: "Excellent connections",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Dublin Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary covers the essential Dublin experience: history, pubs, coastal walks, and countryside — in a logical sequence that minimises backtracking and maximises the best light for photography.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Trinity College · Book of Kells · Grafton Street · Temple Bar"
                cost="€40–60"
                items={[
                  "9:00am — Trinity College campus (free to enter grounds). One of the most beautiful university campuses in Europe — 400-year-old cobblestone squares, Georgian buildings, and the Long Room library visible through the archway. Arrive early on weekdays to beat tour groups.",
                  "9:30am — Book of Kells (€16, book online). The 9th-century illuminated Gospel manuscript is one of the great medieval treasures of the world. Four monks, working in a scriptorium on the Scottish island of Iona, produced this in approximately 800 CE. The Long Room library above it — 65 metres of barrel-vaulted oak shelving holding 200,000 books — is included in the ticket and equally extraordinary.",
                  "11:30am — Grafton Street (free). Dublin&apos;s pedestrian shopping street has some of the finest street buskers in Europe — many are genuinely world-class musicians who chose the street over venues. Walk it slowly. The Bewley&apos;s Oriental Café (mid-range, €12–18 for lunch) has been on Grafton Street since 1927.",
                  "12:30pm — St Stephen&apos;s Green (free). Dublin&apos;s central park: 22 acres, a lake, Victorian bandstand, and the best free lunch spot in the city. Pick up a sandwich from Dunnes Stores on the corner (€5–7) and eat watching the ducks.",
                  "3:00pm — Walk the south quays along the Liffey toward Temple Bar. The Ha&apos;penny Bridge (free) is the most photographed spot in Dublin — a cast iron pedestrian bridge built in 1816, named for the ha&apos;penny toll once charged to cross it.",
                  "6:00pm — Temple Bar. It is undeniably touristy — pints cost €7–8 here — but it is viscerally alive on an evening. The Temple Bar pub itself has live traditional Irish music from 5pm daily. Worth one evening, but do not spend your whole trip here.",
                  "8:00pm — For a better pint at real prices: walk 10 minutes to Mulligan&apos;s (Poolbeg Street), one of the oldest pubs in Dublin (established 1782). No music, no tourists, just excellent Guinness poured correctly (€6) and locals who take their pub seriously.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Guinness Storehouse · Kilmainham Gaol · Phoenix Park · Stoneybatter"
                cost="€55–80"
                items={[
                  "9:30am — Guinness Storehouse (€28–35, book online — sells out in summer). The most visited paid attraction in all of Ireland. Seven floors of history, brewing process, advertising archives, and tasting. The Gravity Bar at the top gives a 360-degree panorama of Dublin that rivals any observation deck. Your ticket includes one pint — save it for the Gravity Bar at the top, not the sample floors below.",
                  "12:00pm — Kilmainham Gaol (€8, must book weeks ahead in peak season). One of the most emotionally powerful sites in Ireland. The prison where the leaders of the 1916 Easter Rising were executed — their stories told in a 90-minute guided tour covering 140 years of Irish political history. The Victorian wing with its iron cell doors and glass ceiling is architecturally haunting. The significance of this place in Irish national identity cannot be overstated.",
                  "2:30pm — Phoenix Park (free). At 1,750 acres it is the 7th largest urban park in the world — larger than Central Park and Hyde Park combined. The herd of wild fallow deer (around 600 animals) roams freely among the trees and open grassland. The Áras an Uachtaráin, the Irish President&apos;s residence, is visible from the main road.",
                  "5:00pm — Walk or bus back to city centre via Stoneybatter — one of Dublin&apos;s most authentic and rapidly gentrifying neighbourhoods, full of independent cafés, craft beer bars, and pubs untouched by tourism. The Cobblestone (North King Street) hosts the best traditional music sessions in the city.",
                  "7:00pm — Dinner: full Irish stew (lamb, potato, carrots, barley) at a traditional Dublin pub. Expect €14–18 for mains. The Stag&apos;s Head (Dame Court) does an excellent version and has one of the finest Victorian pub interiors in the city — mahogany, stained glass, and brass fittings untouched since 1895.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Howth Cliff Walk · Seal Colony · Fresh Fish & Chips"
                cost="€30–50"
                items={[
                  "9:00am — Take the DART train from Connolly or Pearse Station to Howth (30 minutes, €4.80 return). The DART runs along Dublin Bay the entire way — the sea views from the train are exceptional even on an overcast day. Sit on the right side heading north for the best views.",
                  "9:30am — Howth cliff walk (free, 10km loop, approximately 3 hours). The trail circles the Howth Peninsula above the Irish Sea with views of Lambay Island, Ireland&apos;s Eye, and on clear days, the Mourne Mountains in Northern Ireland. The path is well-marked but bring waterproof layers — Howth is reliably 5°C colder and windier than Dublin city.",
                  "12:30pm — Seals at Howth Harbour. The colony of grey seals that live around the working fishing harbour is one of Ireland&apos;s most accessible wildlife experiences. They bask on the rocks and lumber shamelessly near the fish counters where they have learned fishermen occasionally drop things.",
                  "1:00pm — Fresh fish and chips at Beshoff Bros on the West Pier (€12–15). Widely regarded as the best chips in the Dublin area — cooked in beef dripping, served in paper, eaten on the pier wall with the seals eyeing you from below. Alternatively: sit-down seafood at The Brass Lantern for prawns and brown bread (€18–22).",
                  "3:00pm — Walk through Howth village and up to Howth Castle grounds (free). The ruined castle dates to the 12th century. The rhododendron garden that surrounds it is spectacular in May and June — one of the finest in Ireland.",
                  "4:30pm — DART back to Dublin. Evening free — the Pearse Street and South Great George&apos;s Street pub trail has some of Dublin&apos;s best traditional music sessions from 9pm. Toner&apos;s (Baggot Street) and Kehoe&apos;s (South Anne Street) are both worth the walk.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Wicklow Mountains · Glendalough · Powerscourt · Farewell Dublin"
                cost="€40–65"
                items={[
                  "8:30am — Bus or car to Wicklow Mountains (1–1.5 hours south of Dublin). Dublin Bus 65 reaches Blessington. Several tour operators run daily day trips from Dublin (€25–35 per person including guide and transport). If hiring a car, the N11 south is fast and the approach through the Wicklow Gap is genuinely stunning.",
                  "10:00am — Powerscourt Waterfall (€7.50 entry). Ireland&apos;s highest waterfall at 121 metres, set in a wooded valley with a viewing platform. The waterfall is at its most dramatic after rain — which in Ireland is nearly always. The Powerscourt Estate gardens (€10 separate ticket) feature Italianate terraces with Sugarloaf Mountain behind them, widely considered one of the finest Palladian garden views in Europe.",
                  "12:00pm — Glendalough Monastic Site (free). A 6th-century monastic settlement in a glacial valley with two lakes, a 30-metre round tower (still fully intact), and stone churches predating the Norman invasion by 600 years. St Kevin founded the community in 498 CE; the Norse raided it repeatedly; the English tried to suppress it; it has outlasted all of them. The Upper Lake trail (45 minutes each way) is the finest short walk in County Wicklow.",
                  "2:30pm — Optional: Sugar Loaf Mountain trail (free, 501m, 1.5 hours return from Kilmacanogue). The conical granite peak is unmistakable from the N11. The summit view takes in Dublin Bay, the Wicklow hills, and on clear days, the Welsh coast.",
                  "5:00pm — Return to Dublin for a farewell dinner. Irish stew or lamb shank at a Grafton Street side-street restaurant. Budget €16–22 for mains.",
                  "7:30pm — Final pint at Kehoe&apos;s (South Anne Street). A perfectly preserved Victorian pub with original wooden snugs, knowledgeable staff, and Guinness that is consistently excellent. The kind of pub that reminds you why people fly to Dublin specifically to go to pubs.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Dublin" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Dublin Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential Dublin sites in priority order. Entry prices as of 2026 — always book Guinness Storehouse and Kilmainham Gaol online in advance, particularly in summer.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Guinness Storehouse",
                  e: "€28–35 (book online)",
                  d: "Seven floors of Guinness history, brewing process, and advertising in the original St James&apos;s Gate storehouse building. The Gravity Bar at the top includes one pint and 360-degree Dublin views. Ireland&apos;s most visited paid attraction. Book at least 48 hours ahead; in July–August, book a week ahead.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Book of Kells & Long Room",
                  e: "€16 (book online)",
                  d: "The 9th-century illuminated Gospel manuscript in the Old Library at Trinity College. The Long Room above it — 65 metres of barrel-vaulted shelving, 200,000 antiquarian books, and the original Brian Boru harp (Ireland&apos;s national symbol) — is included. Arrive at opening to beat tour groups.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Kilmainham Gaol",
                  e: "€8 (must book in advance)",
                  d: "The prison where the 1916 Easter Rising leaders were executed. The guided tour is the only way in — fixed capacity means it sells out 3–4 weeks ahead in summer. The Victorian wing is architecturally extraordinary. The most emotionally significant site in Ireland for understanding Irish independence.",
                  t: "Must see · 1.5 hrs (guided)",
                },
                {
                  n: "Phoenix Park",
                  e: "Free",
                  d: "1,750 acres in the city — wild fallow deer, the President&apos;s residence, the Wellington Monument, and the Dublin Zoo. The Magazine Fort and the Papal Cross mark major historical events. Best explored by bicycle (hire available at the park entrance).",
                  t: "Half day recommended",
                },
                {
                  n: "National Museum — Archaeology",
                  e: "Free",
                  d: "The Viking gold gallery, Iron Age bog bodies (uncannily preserved sacrificial remains from 2,000+ years ago), the Tara Brooch, and the Ardagh Chalice. Four of the most significant objects in Irish history are in this building, all free. Frequently overlooked by visitors focused on the paid attractions.",
                  t: "Underrated · 1.5 hrs",
                },
                {
                  n: "Howth Cliff Walk",
                  e: "Free (€4.80 DART return)",
                  d: "10km loop above the Irish Sea, 30 minutes from Dublin by train. Grey seal colony at the harbour, dramatic cliff views, wildflowers in spring, and the best fish and chips in the Dublin area at the end. The single best half-day trip from the city.",
                  t: "Best day trip · Half day",
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
            title="Dublin — Pubs, Cliffs &amp; Georgian Streets"
            subtitle="Temple Bar, the Liffey, Howth, and the Irish coast."
            spots={[
              {
                name: "Temple Bar Dublin at Night",
                query: "temple bar dublin ireland night pub colourful",
                desc: "Temple Bar at twilight — Dublin&apos;s most famous neighbourhood, alive with traditional music and colourful Victorian pub facades.",
              },
              {
                name: "Howth Cliff Walk",
                query: "howth cliff walk ireland sea coastal path",
                desc: "The Howth Peninsula cliff walk above the Irish Sea — one of the finest coastal walks within 30 minutes of a European capital.",
              },
              {
                name: "Trinity College Dublin",
                query: "trinity college dublin campus cobblestones ireland",
                desc: "Trinity College&apos;s cobblestone Front Square — 400 years of continuous academic life in the heart of Dublin city.",
              },
              {
                name: "Guinness Storehouse Gravity Bar",
                query: "guinness storehouse gravity bar dublin panorama pint",
                desc: "The Gravity Bar at the top of the Guinness Storehouse — 360-degree Dublin views with a perfect pint in hand.",
              },
              {
                name: "Wicklow Mountains Glendalough",
                query: "glendalough round tower wicklow mountains ireland lakes",
                desc: "Glendalough&apos;s round tower reflected in the Lower Lake — a 6th-century monastic settlement an hour south of Dublin.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Dublin is one of the most expensive cities in Europe — accommodation and food costs are comparable to London or Paris. The key to budget travel in Dublin is cooking your own breakfasts (Lidl and Tesco are everywhere) and drinking outside Temple Bar.
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
                    ["🏨 Accommodation", "€25–45", "€90–160", "€300–800"],
                    ["🍽️ Food & drink", "€15–25", "€40–70", "€100–250"],
                    ["🚌 Transport (city)", "€5–10", "€15–25", "€40–120"],
                    ["🏛️ Activities & entry", "€10–20", "€30–60", "€80–200"],
                    ["TOTAL per day", "€55–100", "€175–315", "€520–1,370"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€55–100/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in a hostel dorm or budget guesthouse (€25–45/night), eat from supermarkets and cheap cafés, use the DART and Dublin Bus, and drink at local pubs outside Temple Bar. Very doable — Dublin&apos;s free attractions (parks, museums, walks) are genuinely excellent.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€175–315/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">3-star hotel on the south side (€90–160/night), lunch at pub bistros, dinner at better restaurants (€30–45/person), guided walking tour, Guinness Storehouse premium experience. The most comfortable way to see Dublin properly.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€520+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">The Merrion or The Shelbourne (€350–900/night), Michelin-star dining at Restaurant Patrick Guilbaud or Chapter One, private historian-led tours, private car hire for day trips. Dublin has a genuine luxury tier that is world-class.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Dublin</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The best location for first-time visitors is the south side — within walking distance of Trinity College, Grafton Street, Temple Bar, and St Stephen&apos;s Green. The Portobello and Rathmines areas (15 minutes by bus from the centre) offer better value for money.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Temple Bar / Trinity Area",
                  type: "Central · South side city core",
                  price: "From €150/night",
                  badge: "Best location",
                  desc: "Maximum walkability — Trinity College, Grafton Street, Temple Bar, the National Museum, and Merrion Square all within 10 minutes on foot. Premium prices for the convenience. Good options: The Fitzwilliam Hotel (Fitzwilliam Street), The Morgan Hotel (Fleet Street). Book 4–6 weeks ahead in summer.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Portobello / Rathmines",
                  type: "Local · 15 mins from city centre",
                  price: "From €80/night",
                  badge: "Best value",
                  desc: "Dublin&apos;s most village-like inner suburb — the Grand Canal, independent coffee shops, excellent food at lower prices than the centre. 15 minutes by bus to Trinity College. The area has changed rapidly in the past decade and is now one of the most pleasant places to be based in Dublin.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Drumcondra / Glasnevin",
                  type: "Residential · North side",
                  price: "From €60/night",
                  badge: "Budget pick",
                  desc: "Quiet residential neighbourhoods north of the city with good bus connections. Glasnevin is home to the National Botanic Gardens and Glasnevin Cemetery — the most historically significant burial site in Ireland. Budget B&Bs and guesthouses in abundance. 20–25 minutes by bus to city centre.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Near Heuston Station",
                  type: "West · Good for day trips",
                  price: "From €75/night",
                  badge: "For Wicklow trips",
                  desc: "If your itinerary involves day trips by train (Wicklow, Kilkenny, Galway), staying near Heuston Station saves significant travel time. Phoenix Park is walking distance. The Liberties neighbourhood nearby — home to the Guinness Storehouse and Teeling Distillery — is one of Dublin&apos;s most historically interesting areas.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Dublin</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Dublin&apos;s food scene has improved dramatically in the past decade. The traditional Irish breakfast, coddle, and fish and chips are still the non-negotiable experiences — but there is now a serious restaurant culture covering everything from Michelin stars to excellent cheap cafés.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Full Irish Breakfast",
                  t: "Traditional · Any café or pub",
                  d: "Rashers (back bacon), sausages, black and white pudding, fried egg, grilled tomato, mushrooms, and buttered toast. The definitive Irish morning meal. Order it at any local café or pub from 8am — expect €10–14. The Fumbally (Fumbally Lane) does an excellent weekend brunch version with quality sourcing. Avoid any place that charges more than €16 for breakfast.",
                  b: "Non-negotiable",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Dublin Coddle",
                  t: "Traditional Irish · Pub restaurants",
                  d: "The quintessential Dublin working-class dish — sausages, rashers, onions, and potatoes slow-cooked in a single pot. James Joyce ate it. Samuel Beckett ate it. Not always easy to find on modern menus but The Lord Edward (Christchurch Place) and traditional pub restaurants around the Liberties still serve it properly. €13–17.",
                  b: "Distinctly Dublin",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Leo Burdock&apos;s Fish & Chips",
                  t: "Takeaway institution · Christchurch",
                  d: "Dublin&apos;s most famous chipper, operating since 1913. Cod, ray, or haddock in a thick crispy batter with chunky chips — eat them on the steps of Christchurch Cathedral opposite, as every Dubliner has done for generations. €9–13. Expect a queue after 6pm, which moves fast. The only acceptable Dublin fish and chips for a first visit.",
                  b: "Dublin institution",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Pub Food (Irish Stew / Lamb)",
                  t: "Traditional · Any good Dublin pub",
                  d: "The better Dublin pubs serve proper food: Irish stew (lamb, potato, carrots), beef and Guinness pie, or Dublin Bay prawns with brown bread. The Stag&apos;s Head (Dame Court), The Old Storehouse (Crown Alley), and Mulligan&apos;s Lounge all do good pub food at honest prices (€14–19 for mains). Avoid anywhere with a laminated tourist menu.",
                  b: "Best value dining",
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
            destination="Dublin Ireland"
            hotels={[
              {
                name: "The Merrion Hotel",
                type: "5-star luxury · Georgian townhouses · Merrion Street",
                price: "From €350/night",
                rating: "5",
                badge: "Best in Dublin",
                url: "https://www.booking.com/hotel/ie/the-merrion.html?aid=2820480",
              },
              {
                name: "The Fitzwilliam Hotel",
                type: "4-star boutique · St Stephen&apos;s Green",
                price: "From €180/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/ie/fitzwilliam-dublin.html?aid=2820480",
              },
              {
                name: "The Dean Dublin",
                type: "Design hotel · Harcourt Street",
                price: "From €130/night",
                rating: "4",
                badge: "Best style",
                url: "https://www.booking.com/hotel/ie/the-dean-dublin.html?aid=2820480",
              },
              {
                name: "Generator Dublin",
                type: "Boutique hostel · Smithfield",
                price: "From €28/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/ie/generator-hostel-dublin.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Dublin City Walking Tour",
                duration: "3 hrs",
                price: "From €15/person",
                badge: "Best intro",
                url: "https://www.getyourguide.com/s/?q=dublin+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Cliffs of Moher Day Trip from Dublin",
                duration: "12 hrs",
                price: "From €45/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=cliffs+of+moher+day+trip+dublin&partner_id=PSZA5UI",
              },
              {
                name: "Wicklow Mountains & Glendalough Tour",
                duration: "8 hrs",
                price: "From €30/person",
                url: "https://www.getyourguide.com/s/?q=wicklow+mountains+glendalough+tour&partner_id=PSZA5UI",
              },
              {
                name: "Irish Whiskey & Pub Culture Tour",
                duration: "3 hrs",
                price: "From €35/person",
                url: "https://www.getyourguide.com/s/?q=dublin+whiskey+pub+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Dublin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🛂",
                  title: "Assuming a UK Visa Covers Ireland",
                  desc: "Ireland is not in the Schengen Zone and runs a completely independent immigration system from the UK. A UK tourist visa does NOT grant entry to Ireland for most nationalities. Indian passport holders must apply separately for an Irish Short Stay C visa (~€60, apply 4–8 weeks ahead). This mistake strands people at Dublin Airport every single week.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🍺",
                  title: "Drinking Exclusively in Temple Bar",
                  desc: "Temple Bar is great for one evening — the energy is real, the music is live, and it&apos;s genuinely fun. But Guinness costs €7–8 here versus €5.50–6.50 fifteen minutes&apos; walk away. Mulligan&apos;s (Poolbeg Street), Kehoe&apos;s (South Anne Street), and The Stag&apos;s Head (Dame Court) pour better pints in better rooms at honest prices.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🥾",
                  title: "Skipping the Howth Cliff Walk",
                  desc: "Most Dublin itineraries are city-only. The Howth Peninsula is 30 minutes by DART and offers a 10km cliff walk above the Irish Sea with seals, seabird colonies, and views that are genuinely extraordinary. It costs €4.80 return on the train. The fresh fish and chips at the harbour afterward is one of the great simple pleasures of the Dublin trip.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🏛️",
                  title: "Not Booking Kilmainham Gaol in Advance",
                  desc: "Kilmainham Gaol operates on fixed-capacity guided tours — every visitor goes with a guide, which means daily capacity is small. In July and August, tickets sell out 3–4 weeks ahead. The online booking system opens 90 days in advance. This is not a place you can walk up to on the day.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "☔",
                  title: "Not Packing a Waterproof Layer",
                  desc: "Ireland averages 150+ rain days a year and Dublin gets its share. The rain is usually light — a fine mist or brief shower rather than a downpour — but it will soak you if you are unprepared. A compact waterproof jacket folds into a pocket and transforms the experience. Do not bring an umbrella — it will invert in the Irish coastal wind.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🚌",
                  title: "Ignoring the DART for Day Trips",
                  desc: "The DART electric rail line runs along Dublin Bay from Malahide in the north to Greystones in the south — one of the finest commuter rail rides in Europe for sea views. Howth (30 mins north) and Dún Laoghaire (30 mins south) are both excellent day trips. The fare is €4–6 return. Most visitors never use it and miss some of the best parts of the Dublin trip.",
                  color: "bg-teal-50 border-teal-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Dublin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🍺",
                  title: "Gravity Bar at Sunset (5–6pm)",
                  desc: "Your Guinness Storehouse entry includes one pint in the Gravity Bar — a circular glass room at the top of the building with 360-degree views over Dublin. Do the exhibits on the way up, but save your pint for the Gravity Bar at sunset (5–6pm in summer, 3–4pm in winter). The view over the city in low light with a perfect Guinness in hand is the quintessential Dublin moment.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌅",
                  title: "Howth Cliff Walk at 7am",
                  desc: "The Howth cliff walk gets busy by 10am on weekends and is genuinely crowded by noon in summer. The 7am walk — catching the DART&apos;s first service from Connolly at 6:35am — puts you on the headland as the sun rises over the Irish Sea with nothing but gannets for company. Pack a flask of coffee. The light on the cliffs in early morning is exceptional for photography.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏛️",
                  title: "Book Kilmainham 90 Days Ahead",
                  desc: "The Kilmainham Gaol online booking system opens 90 days in advance. In peak season (July–August), book the moment you know your travel dates. The tour is the only way to see the site — you cannot visit independently. Set a calendar reminder now if you&apos;re planning a summer trip.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🎶",
                  title: "Traditional Music: Go on a Tuesday",
                  desc: "The best traditional music sessions in Dublin happen on weeknights when the musicians are playing for themselves rather than tourists. Tuesday and Wednesday nights at The Cobblestone (North King Street), Hughes Bar (Chancery Street), or Mulligan&apos;s. Sessions start around 9:30–10pm and go until closing. No entry fee. Buy a pint and listen — do not clap between songs.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🗺️",
                  title: "Walk the Georgian Squares",
                  desc: "Merrion Square, Fitzwilliam Square, and St Stephen&apos;s Green are three of the finest examples of 18th-century urban planning in Europe — all free, all walkable. Merrion Square&apos;s east side has the most intact Georgian terraces. The west side of Merrion Square has the National Gallery (free) and was once the home of Oscar Wilde, whose childhood house at no. 1 is now open to visitors.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "💳",
                  title: "Leap Card for Public Transport",
                  desc: "Buy a Leap Card (€5 deposit, top up as you go) from any newsagent or the airport. It gives discounted fares on Dublin Bus, the DART, the Luas tram, and Commuter Rail. A single Dublin Bus journey with a Leap Card costs €1.45 versus €3.00 cash. Over four days it saves €15–20 easily. Get it at the airport on arrival.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Dublin" />

          {/* Combine With */}
          <CombineWith currentSlug="dublin-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do I need a separate visa for Ireland if I have a UK visa?",
                  a: "Almost certainly yes. Ireland is not part of the UK and not part of the Schengen Zone — it runs its own independent immigration system. A UK visa does not grant entry to Ireland for most nationalities. The exception is the British-Irish Visa Scheme (BIVS), which allows certain nationalities who hold a valid UK visa to also enter Ireland — but this applies to a limited list of countries. Indian passport holders are included in BIVS, but you must hold a valid UK visa already and enter Ireland as part of a trip that also includes the UK. Check inis.gov.ie for the current BIVS country list and conditions.",
                },
                {
                  q: "Can I visit the Cliffs of Moher from Dublin in a day?",
                  a: "Yes — it is a long day but entirely doable. Several operators run daily coach tours from Dublin: the journey is approximately 4 hours each way via Ennis or the Burren, with 2–3 hours at the cliffs included. Total cost: €45–60 per person including the Cliffs of Moher visitor levy (€10). The Cliffs — at 214 metres and stretching for 8km — are Ireland&apos;s most spectacular natural attraction. If you only have one day for a day trip from Dublin, this is the one to do.",
                },
                {
                  q: "Where should I drink Guinness in Dublin?",
                  a: "The Guinness Storehouse Gravity Bar is the experience, but for the best daily pint: Mulligan&apos;s (Poolbeg Street, established 1782) is consistently cited by those who take it seriously. The Stag&apos;s Head (Dame Court), Kehoe&apos;s (South Anne Street), and Toner&apos;s (Baggot Street) are all excellent. Avoid anywhere that lists Guinness as a menu item with a photo — any pub that has to market the Guinness separately from the pub itself probably is not the place.",
                },
                {
                  q: "Is a Ring of Kerry day trip possible from Dublin?",
                  a: "Technically yes, but it makes for an exhausting day — Kerry is 3.5–4 hours from Dublin by car. The Ring of Kerry is a 179km scenic driving circuit around the Iveragh Peninsula: MacGillycuddy&apos;s Reeks, Killarney National Park, Ladies View, Staigue Fort. Coach tours from Dublin exist (€45–70, 14+ hours round trip) but if you have only 4 days, the Wicklow Mountains and Howth are better use of your time. Kerry rewards 2–3 days on its own.",
                },
                {
                  q: "Dublin or Edinburgh — which is better?",
                  a: "They are genuinely different cities. Edinburgh has the castle, Arthur&apos;s Seat, and the most dramatic urban landscape in northern Europe. Dublin has a looser, warmer energy — the pub culture is more naturally social, the food scene has improved dramatically in the past decade, and the day trips (Howth, Wicklow, Cliffs of Moher) are exceptional. Both cities are very walkable. Edinburgh wins on architecture; Dublin wins on craic. If you are building a UK-Ireland trip, visit both — they are only 1 hour apart by plane.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* Related Guides */}
          <RelatedGuides currentSlug="dublin-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "London in 4 Days — Thames &amp; Culture", href: "/blog/london-4-days" },
                { label: "Edinburgh 3 Days — Castle &amp; Highlands", href: "/blog/edinburgh-3-days" },
                { label: "Bruges 3 Days — Canals &amp; Chocolate", href: "/blog/bruges-3-days" },
                { label: "Stockholm 4 Days — Nordic Capital", href: "/blog/stockholm-4-days" },
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
