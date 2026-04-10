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
const JAMAICA_TOC = [
  { id: "honest",     emoji: "🌊",  label: "What Jamaica Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
  { id: "landmarks",  emoji: "🏖️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Jamaica 5-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Jamaica in 5 Days — Seven Mile Beach, Rick%27s Cafe cliff diving, Blue Mountains coffee&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/jamaica-5-days"
        imageUrl="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=1200&q=80"
        description="Jamaica in 5 Days: Seven Mile Beach Negril, Rick&apos;s Café cliff diving, Blue Mountains coffee, Dunn&apos;s River Falls, and the best jerk chicken of your life. Complete travel guide."
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
  day, title, items, cost,
}: {
  day: string; title: string; items: string[]; cost: string;
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
function TipCard({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
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
export default function JamaicaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={JAMAICA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Jamaica" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="jamaica seven mile beach negril caribbean turquoise water palm trees"
            fallback="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=1600&q=80"
            alt="Jamaica Seven Mile Beach Negril with turquoise Caribbean water and palm trees"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Jamaica 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-teal-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Caribbean
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Jamaica in 5 Days:
                <em className="italic text-amber-300"> Seven Mile Beach, Rick&apos;s Café &amp; the Blue Mountains</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Cliff diving at Rick&apos;s Café, Blue Mountains coffee at the source, Dunn&apos;s River Falls, Bob Marley Museum, and jerk chicken that ruins all other jerk chicken. The complete Jamaica itinerary.
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
              <span>🇯🇲 Jamaica, Caribbean</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From $90/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The sun is setting over the Caribbean, someone has just leapt off a 10-metre cliff at Rick&apos;s Café into the turquoise water below, and a reggae band is playing Bob Marley loud enough that you feel it in your chest. Jamaica invented cool, and it hasn&apos;t stopped.
            </p>
          </blockquote>

          {/* ── WHAT JAMAICA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🌊 What Jamaica Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Jamaica is the third-largest island in the Caribbean — 235km long, 82km wide, and implausibly diverse for its size. The north coast is the Jamaica of postcards: Seven Mile Beach at Negril, the resort strip around Montego Bay, Dunn&apos;s River Falls tumbling to the sea at Ocho Rios. The interior is an entirely different country: the Blue Mountains rise to 2,256 metres, grow the world&apos;s most expensive coffee, and have a cloud-forest ecology that feels like a different island entirely.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Kingston, the capital on the south coast, is the origin point of reggae, dancehall, ska, and rocksteady — four of the most globally influential music genres of the 20th century, all from one city of 600,000 people. Bob Marley&apos;s house on Hope Road is now a museum. The recording studio he built in the garden — where Catch a Fire, Burnin&apos;, and Natty Dread were recorded — still exists, with the bullet holes from the 1976 assassination attempt in the kitchen wall.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Montego Bay Hip Strip (Gloucester Avenue) is a 2-kilometre stretch of bars, restaurants, and beach clubs — polished and tourist-facing, a legitimate starting point. The all-inclusive resorts (Sandals, Beaches) line the north coast and offer a sanitised Caribbean holiday that bears no relationship to actual Jamaica. Most first-time visitors find they want much less of the all-inclusive and much more of the country outside it.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The food: jerk chicken cooked low and slow over pimento wood at roadside pits, ackee and saltfish for breakfast, fresh snapper escovitch, bammy and festival, rum punch at noon. The south coast — Treasure Beach, Black River, Jake&apos;s Hotel — is where Jamaica was before it was discovered, and is still largely undiscovered.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Main Airport" value="MBJ Montego Bay" />
              <StatCard icon="🌡️" label="Best Season" value="Dec–Apr" />
              <StatCard icon="🌊" label="Beach Length" value="11 km Negril" />
              <StatCard icon="💰" label="Budget From" value="$90/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Jamaica</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Dec–Apr", i: "☀️", t: "Dry Season — Peak",
                  d: "25–30°C, reliably sunny, low humidity, zero hurricane risk. Peak season — prices 20–40% higher, flights busiest. But the weather is genuinely excellent and trade winds keep everything comfortable. The best Jamaica for first-time visitors.",
                  b: "Recommended", c: "bg-green-50 border-green-200",
                },
                {
                  s: "May–Jun", i: "🌅", t: "Shoulder — Good Value",
                  d: "Warm (28–33°C), increasing humidity, occasional showers. Hurricane season technically starts June 1 but June itself is usually fine. Fewer tourists, lower prices, lush green landscape. A good window for budget travellers who can be flexible.",
                  b: "Good value", c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Nov", i: "🌀", t: "Hurricane Season — Book Flexibly",
                  d: "Direct hits are relatively rare but tropical storms cause flooding, rough seas, cancelled boat tours, and airport disruption. August–October is peak risk. Book refundable accommodation and flexible flights. Prices are lowest but weather disruption risk is real.",
                  b: "Book refundable", c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Dec", i: "🍂", t: "Late Season — Transition",
                  d: "Hurricane risk drops sharply by November. Late November and early December offer a sweet spot: excellent weather, tourist numbers not yet peaked, prices still lower than January–March. The Blue Mountains are especially beautiful after November rains.",
                  b: "Hidden gem", c: "bg-blue-50 border-blue-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Jamaica</h2>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-teal-800 font-light">
                <strong className="font-medium">Key detail:</strong> Montego Bay Sangster International Airport (MBJ) is the main entry point — convenient for Negril and the north coast. Kingston&apos;s Norman Manley International (KIN) is better if your primary interest is the Blue Mountains or Kingston itself. Most international flights arrive at MBJ.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️", t: "Direct from USA (recommended)",
                  d: "MBJ receives non-stop flights from New York (JFK/EWR), Miami, Atlanta, Dallas, Philadelphia, Charlotte. Flight time from New York: 3.5 hrs. From Miami: 1.5 hrs. Fares: $300–500 return from the Northeast, $250–400 from Miami/Atlanta. American, Delta, JetBlue, Spirit, and Southwest all serve MBJ.",
                  b: "Most routes", c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️", t: "Direct from UK",
                  d: "British Airways and TUI fly London Gatwick → MBJ (about 9 hours). Virgin Atlantic serves LHR–KIN on some schedules. Return fares: £400–700 in shoulder season, £600–900 in peak December–January. TUI charter packages often undercut scheduled fares significantly.",
                  b: "From £400 return", c: "bg-blue-50 border-blue-200",
                },
                {
                  i: "✈️", t: "From Canada",
                  d: "Air Canada, WestJet, and Sunwing fly Toronto (YYZ) and Montreal (YUL) to MBJ. Flight time: 4 hours from Toronto. Fares: CAD 500–900 return. Air Transat charter packages often include accommodation and offer strong value for resort-based holidays.",
                  b: "Good options", c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌", t: "Airport to Negril / Montego Bay",
                  d: "MBJ to Montego Bay Hip Strip: 20 minutes, $20–30 taxi. MBJ to Negril: 1.5 hours, $30–40 by tourist minibus or $4–6 by shared route taxi. Use licensed JUTA taxis (red PP/TP/PPV licence plates) from the official arrivals desk. Knutsford Express coach to Kingston from MBJ: 3.5 hours, $20.",
                  b: "Ground transport", c: "bg-parchment border-parchment-2",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Jamaica Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary covers Negril, Ocho Rios, Kingston, the Blue Mountains, and the south coast — the full Jamaica circuit in five days.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrival Montego Bay → Negril · Seven Mile Beach · Rick's Café Sunset"
                cost="$70–95 (budget) / $180–230 (mid-range)"
                items={[
                  "Land at Montego Bay Sangster International (MBJ). Clear immigration — US/UK/EU/AU passport holders enter visa-free for up to 90 days. Indian passport holders must carry a printed e-visa approval (apply at evisa.mns.gov.jm, ~$50 fee, 5–10 business days processing).",
                  "Transport to Negril: tourist minibus $30–40/person (1.5–2 hours) or shared route taxi $4–6/person. Licensed JUTA taxis from the official arrivals desk: $100–130 for a private car. Budget travellers: ask your guesthouse to arrange the shared minibus.",
                  "Check in near Seven Mile Beach. Budget guesthouses start at $35–50/night with air conditioning. Mid-range boutique hotels (Charela Inn, Idle Awhile, Samsara Cliff Resort) run $150–250/night usually including breakfast and beach loungers.",
                  "Seven Mile Beach: 11km of white sand, calm turquoise water (reef-protected), water temperature 27–29°C year-round. Most beach sections are free, though bars expect a drink purchase for their chairs. Swim, decompress, order a Red Stripe ($3 local bars, $6 beach clubs). 1 USD ≈ 155 JMD at ATMs.",
                  "Rick's Café cliff diving ($20 cover/drinks minimum): 20 minutes south by taxi ($5–8). Arrive by 5pm — 90 minutes before sunset — to claim a cliff-edge position. Professional divers leap from 10m and 15m cliffs. Tourists can jump from 6m. The sunset here, with the crowd cheering each diver and reggae playing, is Jamaica's most exhilarating happy hour.",
                  "Dinner: half a jerk chicken with festival (sweet fried dough) and bammy (cassava flatbread) from a roadside stall near West End Road — $7–10 (1,085–1,550 JMD). Sit on a plastic stool. This is the real thing.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Negril Beach Day · Blue Hole Mineral Spring · West End Cliffs & Rockhouse"
                cost="$65–90 (budget) / $200–260 (mid-range)"
                items={[
                  "Morning: beach chair rental on Seven Mile Beach ($5/day). Shallow enough to stand in for 50 metres, warm enough to stay in all morning. Beach vendors sell jerk lobster ($15–20), fresh coconuts (~$2 / 310 JMD), and aloe vera — negotiate everything and pay in JMD for better rates.",
                  "11:00am: Blue Hole Mineral Spring ($20 entry / ~3,100 JMD) — a natural cave pool 12 metres below ground, accessible by ladder or by rope swing from the cave edge. Mineral-rich, cool and brilliantly blue. The rope swing drops you 4 metres into the water. Entry includes unlimited swing attempts.",
                  "1:30pm: Negril Lighthouse — free to approach, views over the West End limestone cliffs which run 3km with bars and hotels perched on the edge with ladders and platforms down to the sea.",
                  "2:30pm: Swim from the West End cliffs. Rockhouse Hotel (open to non-guests, $10) has cliff platforms and healthy coral offshore — snorkel gear $5–10 rental. More interesting underwater than Seven Mile Beach's sandy bottom.",
                  "5:00pm: Sunset walk along the West End cliff road. Every bar faces west. Drink a Ting (Jamaican grapefruit soda, $1 in local shops) or a Red Stripe at whatever cliff-edge bar appeals.",
                  "Dinner: Rockhouse Hotel Restaurant ($60–100/person, open to non-guests) — fresh snapper, lobster in season, rum cocktails on a cliff above the Caribbean. Book ahead for weekends. Budget alternative: Norman's on the Beach for grilled fish and rice and peas ($15–20).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Ocho Rios: Dunn's River Falls ($20) · Scotchies Jerk · Blue Hole ($20) · Miss T's Kitchen"
                cost="$80–110 (budget) / $185–240 (mid-range)"
                items={[
                  "7:00am: Shared taxi or minibus Negril → Ocho Rios (2.5–3 hours, change at Montego Bay if needed, $10–15 one way). Mid-range: book a guided day trip from your hotel ($80–100/person including transport and entry fees, via GetYourGuide: https://www.getyourguide.com/s/?q=Dunn%27s+River+Falls+Jamaica&partner_id=PSZA5UI).",
                  "Dunn's River Falls ($20 / ~3,100 JMD): the 180-metre limestone waterfall cascades in natural terraces directly to a beach. Visitors climb from bottom to top in a human chain. Arrive at opening (8:30am) to beat cruise ship crowds (which arrive from 10am). You get completely soaked. It's spectacular and genuinely fun. Water shoes rentable on site ($5). Climb takes 30–45 minutes.",
                  "Lunch: Scotchies Jerk Centre, Ocho Rios (Main Street) — the benchmark jerk in Jamaica, cooked on open pimento-wood drums over low heat since 1986. Half-pound jerk pork $7 (~1,085 JMD), jerk chicken quarter $5, festival $1. Eat at the outdoor wooden tables. The most important meal you will eat in Jamaica.",
                  "Blue Hole (Secret Falls) ($20 / ~3,100 JMD): turquoise pools fed by a mountain waterfall, 15 minutes by taxi ($5). Rope swings, cliff jumps (5–8 metres), natural rock slides. Guide included in entry price. More swimming freedom and fewer crowds than Dunn's River.",
                  "Evening: Miss T's Kitchen (DaCosta Drive, Ocho Rios, $30–50/person) — elevated traditional Jamaican food in a heritage building: brown stew chicken, escovitch fish, rundown coconut fish stew, pepperpot soup. One of the genuinely best Jamaican food experiences on the north coast.",
                  "Overnight: Ocho Rios guesthouse ($25–45/night) for easy early departure to Kingston/Blue Mountains on Day 4, or return to Negril by shared transfer ($15–20).",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Blue Mountains Coffee Tour ($80) · Bob Marley Museum Kingston ($20) · YS Falls ($18)"
                cost="$85–115 (budget) / $200–265 (mid-range)"
                items={[
                  "7:00am: Transfer to the Blue Mountains. Private guided tour from Kingston departs early ($80/person for a half-day guided tour). Budget alternative: shared minibus from Papine Square in Kingston to Gordon Town ($2–3), then local taxi to the coffee estates.",
                  "Blue Mountains Coffee Estate Tour — Craighton Estate or Old Tavern Estate ($25–35 entry with guide). Walk the coffee bushes at 900–1,500m altitude, see the cherry-red berries, learn the wet-processing method, cup the finished product. Blue Mountain coffee has a distinctively mild, clean sweetness with minimal bitterness. At the estate: 250g bag ~$30 (4,650 JMD). At Heathrow: same coffee costs $50+. Buy here.",
                  "12:00pm: Kingston — Lunch at Usain Bolt's Tracks & Records, New Kingston ($15–25). Genuinely good jerk wings, rice and peas, and ackee and saltfish in a sports bar co-owned by the sprinter.",
                  "Bob Marley Museum, 56 Hope Road ($20 / ~3,100 JMD): the house where Bob Marley lived, recorded, survived the 1976 assassination attempt, and where his personal effects, gold records, and the actual bullet holes in the kitchen wall remain intact. Guided tour included in entry (45 mins). The recording studio in the garden where Catch a Fire was recorded is still standing. Arrive by 2pm to join a guided tour.",
                  "YS Falls, St Elizabeth ($18 / ~2,790 JMD): seven cascades on a private south coast estate — rope swings, natural pools, tube ride. 1.5 hours from Kingston. Significantly less crowded than Dunn's River and equally beautiful. Best combined with a south coast day (Pelican Bar and Appleton Estate on Day 5).",
                  "Overnight in Kingston ($30–60 guesthouse in New Kingston) or transfer to Treasure Beach for Day 5 ($20–25 by taxi, 1.5 hours). Treasure Beach budget guesthouses: $30–50/night.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Appleton Rum Estate ($25) · Pelican Bar · Treasure Beach · Departure MBJ"
                cost="$90–120 (budget) / $190–245 (mid-range)"
                items={[
                  "Morning: Treasure Beach — quiet fishing beaches on Jamaica's undeveloped south coast. Frenchman's Bay and Calabash Bay are the main swimming spots. No cruise ships, no resort vendors, no wristbands. Fishing boats, pelicans, and local families. This is what Jamaica's north coast looked like before mass tourism arrived.",
                  "Appleton Estate Rum Distillery ($25 / ~3,875 JMD): 1.5 hours from Treasure Beach by taxi ($30–40). Operational since 1749 — the oldest and most famous rum estate in Jamaica. Tour covers sugarcane processing, fermentation, pot-still distillation, and aging warehouses where barrels develop over 12–21 years. Tasting includes 5–7 rums. Buy Appleton 12-year at $35 (considerably cheaper than at home or at the airport). Do not drive after the tasting.",
                  "Pelican Bar ($10 round trip by fisherman's canoe from Jack Sprat Beach or Great Bay): a ramshackle wooden bar built on a sandbar 800 metres out to sea. Order a Red Stripe, sit on a bar stool above the Caribbean. No adequate explanation exists for this place. Go on a weekday morning — calm water, fewest people, full absurdity of the experience intact.",
                  "Jerk chicken at Boston Bay (optional, near Port Antonio): considered by many Jamaicans to be the original and definitive jerk, cooked at roadside pits on open pimento-wood drums. Half chicken $8–10 (~1,240–1,550 JMD). 2.5 hours from Kingston if departing from KIN.",
                  "Transfer to Montego Bay airport (MBJ) for departure: 2 hours from Treasure Beach, $30–40 by taxi. Allow 2.5 hours before international departure. MBJ duty-free: Appleton 21-year (~$65), Blue Mountain coffee ($40–50 per 250g), Wray & Nephew Overproof rum ($18).",
                  "Currency note: exchange remaining JMD to USD at the airport cambio before departure. The JMD has poor exchange rates outside Jamaica — use it all before you leave.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Jamaica" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏖️ Jamaica Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Essential sites in order of priority with real entry fees as of 2026. All prices in USD and approximate JMD (1 USD ≈ 155 JMD).
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Rick's Café, Negril",
                  e: "$20 cover / drinks minimum",
                  d: "Jamaica's most famous cliff-diving venue on Negril's West End. Professional divers leap from 10m and 15m cliffs; tourists can jump from 6m. The sunset here — crowd cheering divers, reggae playing, Caribbean light going gold — is Jamaica's peak experience. Arrive at 5pm, not at the moment of sunset.",
                  t: "Must see · Sunset ritual",
                },
                {
                  n: "Dunn's River Falls, Ocho Rios",
                  e: "$20 (~3,100 JMD)",
                  d: "The 180-metre limestone waterfall cascades in natural terraces to a beach — visitors climb from bottom to top in a human chain. Genuinely spectacular despite cruise ship crowds. Arrive at opening (8:30am). Water shoes rentable on site ($5). The site is 1.5km end to end.",
                  t: "Must do · 1.5 hrs",
                },
                {
                  n: "Bob Marley Museum, Kingston",
                  e: "$20 (~3,100 JMD)",
                  d: "56 Hope Road — the house where Bob Marley lived, recorded, and survived an assassination attempt. Bullet holes in the kitchen wall. His recording studio, personal effects, gold records, concert footage. The guided tour (45 mins, included) is genuinely moving. One of the most important cultural sites in the Caribbean.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Blue Mountains Coffee Tour",
                  e: "$25–35 estate entry ($80 guided day tour)",
                  d: "Craighton Estate or Old Tavern Estate above Kingston. The world's most expensive routinely traded coffee, grown at 900–1,500m in cloud forest. Walk the bushes, learn the wet processing, cup the result. Buy coffee here at $30–60/lb vs $80–120/lb in the UK or US.",
                  t: "Must do · Half day",
                },
                {
                  n: "Blue Hole (Secret Falls), Ocho Rios",
                  e: "$20 (~3,100 JMD)",
                  d: "Turquoise natural pools fed by a mountain waterfall — rope swings, cliff jumps (5–8m), natural slides. Guide included in entry. More swimming freedom and fewer crowds than Dunn's River. 15 minutes by taxi from Ocho Rios centre.",
                  t: "Highly recommended · 2 hrs",
                },
                {
                  n: "YS Falls, St Elizabeth",
                  e: "$18 (~2,790 JMD)",
                  d: "Seven cascades on a private south coast estate — rope swings, natural pools, tube ride. Significantly less crowded than Dunn's River and equally beautiful. 1.5 hours from Kingston; best combined with Pelican Bar and Appleton Estate on a south coast day.",
                  t: "South coast gem · 2 hrs",
                },
                {
                  n: "Appleton Estate Rum Distillery",
                  e: "$25 (~3,875 JMD)",
                  d: "Jamaica's oldest rum estate, operational since 1749. Full production tour — sugarcane to aging warehouses — followed by tasting of 5–7 rums. Buy Appleton 12-year ($35) here; it's $50+ at home. Don't drive after. Near Treasure Beach on the south coast.",
                  t: "South coast · 2.5 hrs",
                },
                {
                  n: "Pelican Bar, St Elizabeth",
                  e: "$10 round-trip boat",
                  d: "A wooden bar on a sandbar 800 metres out to sea. Accessible only by fisherman's canoe from Great Bay or Jack Sprat Beach. Cold Red Stripe, bar stools above the Caribbean, pelicans circling. Weekday mornings are best — calm water, no crowds, full peculiarity of the experience intact.",
                  t: "Unmissable · Unique",
                },
                {
                  n: "Seven Mile Beach, Negril",
                  e: "Free (some bars charge for chairs)",
                  d: "11km of white sand with calm, reef-protected Caribbean water. Temperature 27–29°C year-round. Shallow enough to stand in for 50 metres. The definitive Jamaica beach — no dramatic waves, pure swimming and sunset territory.",
                  t: "Beach essential · All day",
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
            title="Jamaica — Beaches, Waterfalls &amp; Reggae Culture"
            subtitle="Seven Mile Beach, Dunn&apos;s River Falls, Rick&apos;s Café cliffs, Blue Mountains, and Kingston."
            spots={[
              {
                name: "Seven Mile Beach Negril",
                query: "seven mile beach negril jamaica caribbean turquoise water palm trees",
                desc: "Negril's Seven Mile Beach — 11km of white sand with reef-protected Caribbean water and spectacular western sunsets.",
              },
              {
                name: "Dunn's River Falls Ocho Rios",
                query: "dunns river falls ocho rios jamaica waterfall limestone cascade",
                desc: "The 180-metre limestone waterfall at Ocho Rios — Jamaica's most visited natural attraction.",
              },
              {
                name: "Rick's Café West End Negril",
                query: "ricks cafe negril jamaica cliff diving sunset west end",
                desc: "Rick's Café on Negril's West End — cliff divers, Caribbean sunsets, and the most exhilarating happy hour in Jamaica.",
              },
              {
                name: "Blue Mountains Jamaica",
                query: "blue mountains jamaica coffee mist forest landscape",
                desc: "The Blue Mountains rise to 2,256m — misty, cloud-forested, and home to the world's most expensive routinely traded coffee.",
              },
              {
                name: "Pelican Bar St Elizabeth",
                query: "pelican bar jamaica sandbar sea wooden bar caribbean",
                desc: "Pelican Bar — a wooden rum shack on a sandbar 800 metres out to sea, accessible only by canoe. One of the Caribbean's most singular experiences.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Jamaica spans a huge price range — from $90/day backpacking to $400+/day at GoldenEye or Rockhouse. The mid-range ($180–240/day) gives the best experience without compromise. All prices in USD; 1 USD ≈ 155 JMD.
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
                    ["🏨 Accommodation", "$35–50/night", "$150–250/night", "$400–800/night"],
                    ["🍽 Food (daily)", "$20–30", "$40–65", "$100–180"],
                    ["🚕 Transport (daily)", "$15–25", "$30–50", "$100–200"],
                    ["🏖️ Activities (daily)", "$25–40", "$50–80", "$100–200"],
                    ["✈️ Return flights (US)", "$300–500", "$400–600", "$600–1,200"],
                    ["TOTAL (5 days excl. flights)", "$450–600", "$900–1,200", "$2,000–3,000"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($90–120/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Guesthouses near Seven Mile Beach ($35–50/night), jerk pits and roadside food ($20–30/day), route taxis and shared minibuses. Very achievable — Jamaica has excellent budget traveller infrastructure on both north and south coasts.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($180–240/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotels with beach access ($150–250/night), restaurant dining at Scotchies and Miss T&apos;s Kitchen, guided day tours via GetYourGuide. The sweet spot for most first-time visitors — comfort without losing authentic Jamaica.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($400–600/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">GoldenEye Resort (from $750/night, Ian Fleming&apos;s estate where James Bond was invented), Rockhouse Hotel Negril (from $250/night, cliff villas), private cars and speedboats. Jamaica&apos;s luxury offering is genuinely world-class.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Jamaica</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Base in Negril (Days 1–2), day-trip to Ocho Rios (Day 3), and spend at least one night on the south coast near Treasure Beach (Days 4–5). This covers Jamaica&apos;s best geography without backtracking.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Round Hill Hotel & Villas, Montego Bay",
                  type: "Luxury resort · West of Montego Bay",
                  price: "From $450/night",
                  badge: "Classic luxury",
                  desc: "A collection of 36 private villas and hotel rooms on a private peninsula west of Montego Bay, open since 1953. Guests have included Audrey Hepburn, the Kennedys, and Ralph Lauren (who redesigned the rooms). Private beach, two pools, excellent restaurant. The most distinguished address on Jamaica's north coast.",
                  color: "border-amber-200 bg-amber-50",
                  link: "https://www.booking.com/hotel/jm/round-hill-hotel-and-villas.html?aid=2820480",
                },
                {
                  name: "Rockhouse Hotel, Negril West End",
                  type: "Boutique cliff hotel · West End Negril",
                  price: "From $250/night",
                  badge: "Best design",
                  desc: "Thatch-roofed villas built into Negril's West End limestone cliffs, with private ladders down to the sea. Hammocks, stone bathrooms open to the sky, the sound of waves below at night. The Rockhouse Restaurant is one of the best meals in Jamaica. One of the Caribbean's most distinctive design hotels.",
                  color: "border-teal-200 bg-teal-50",
                  link: "https://www.booking.com/hotel/jm/rockhouse.html?aid=2820480",
                },
                {
                  name: "Jakes Hotel, Treasure Beach",
                  type: "Boutique · South coast St Elizabeth",
                  price: "From $150/night",
                  badge: "Most character",
                  desc: "Run by the Henzell family (Sally Henzell's father directed The Harder They Come, 1972), Jakes is a collection of eclectic hand-painted cottages on Jamaica's quiet south coast. No two rooms are alike. Near Pelican Bar and Appleton Estate. The most beloved boutique hotel in Jamaica among travellers who know the south coast.",
                  color: "border-blue-200 bg-blue-50",
                  link: "https://www.booking.com/hotel/jm/jakes-hotel.html?aid=2820480",
                },
                {
                  name: "Budget Guesthouses, Seven Mile Beach",
                  type: "Budget · Negril beach road",
                  price: "$35–70/night",
                  badge: "Best budget",
                  desc: "Multiple clean guesthouses along the Seven Mile Beach road — Roots Bamboo, Whistling Bird, and similar properties offer air-conditioned rooms with beach access from $35–70/night. Not glamorous, but clean and right on or near the beach. Google reviews are reliable for this tier in Negril.",
                  color: "border-parchment-2 bg-white",
                  link: "https://www.booking.com/searchresults.html?ss=Negril+Jamaica&aid=2820480",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{stay.name}</p>
                      <p className="text-xs text-muted font-light">{stay.type}</p>
                    </div>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="text-xs bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60">{stay.price}</span>
                      <span className="text-xs bg-gold/15 text-gold-dark px-2 py-0.5 rounded-full font-medium">{stay.badge}</span>
                      <a
                        href={stay.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-ink text-white px-2.5 py-1 rounded-full hover:opacity-80 transition-opacity"
                      >
                        Book
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{stay.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Jamaica</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Jamaica&apos;s food culture is one of the most distinctive in the Caribbean. The best meals are almost never in resort restaurants — they are at roadside jerk pits, local rum bars, and the handful of independent restaurants that cook traditional Jamaican food properly.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Scotchies Jerk Centre (Ocho Rios & Montego Bay)",
                  t: "Jerk pit · North coast institution",
                  d: "The most consistently praised jerk in Jamaica. Open pimento-wood drums, low and slow cooking, jerk pork and chicken that has defined the benchmark since 1986. Ocho Rios branch on the main road east of town. Half-pound jerk pork: $7 (~1,085 JMD). Festival: $1. Eat at the outdoor wooden tables. Nothing fancy. Entirely the point.",
                  b: "Best jerk",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Gloria's Seafood Restaurant, Port Royal",
                  t: "Fresh seafood · Kingston harbour",
                  d: "Port Royal is 30 minutes from Kingston by road. Gloria's serves the freshest seafood in Jamaica — snapper, lobster, shrimp, and conch cooked to order on the harbour front. The escovitch fish ($15–20) is exceptional. Combine with a visit to the Bob Marley Museum for a complete Kingston day.",
                  b: "Best seafood",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Miss T's Kitchen, Ocho Rios",
                  t: "Elevated Jamaican · DaCosta Drive Ocho Rios",
                  d: "The best traditional Jamaican food on the north coast in a properly run restaurant. Brown stew chicken, escovitch fish, rundown coconut fish stew, ackee and saltfish, pepperpot soup. Served in a heritage building with good service. $30–50/person. This is how good Jamaican cooking actually tastes when cooked properly.",
                  b: "Best traditional",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Roadside Jerk Pit, Boston Bay (Portland)",
                  t: "Original jerk · East coast Portland",
                  d: "Boston Bay in Portland parish is where jerk cooking originated. The roadside pits along the Boston Bay road are considered by many Jamaicans to be the true benchmark — pimento-wood smoke, half chicken $8–10 (~1,240–1,550 JMD), eaten at a picnic table with the sea 50 metres away. 2.5 hours from Kingston.",
                  b: "Original source",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Pushcart Restaurant & Rum Bar, Negril",
                  t: "Creative Jamaican · Seven Mile Beach",
                  d: "Creative Jamaican cuisine — jerk lamb, curry goat tacos, Scotch bonnet shrimp, rum cocktails in half-coconut shells. $35–55/person. Good live reggae most nights. One of Negril's best dinner options for those who want more than a standard beach bar.",
                  b: "Creative Jamaican",
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
            destination="Jamaica"
            hotels={[
              {
                name: "Rockhouse Hotel Negril",
                type: "Boutique cliff villas · West End Negril",
                price: "From $250/night",
                rating: "5",
                badge: "Best design",
                url: "https://www.booking.com/hotel/jm/rockhouse.html?aid=2820480",
              },
              {
                name: "Round Hill Hotel & Villas",
                type: "Classic luxury resort · Montego Bay",
                price: "From $450/night",
                rating: "5",
                badge: "Classic luxury",
                url: "https://www.booking.com/hotel/jm/round-hill-hotel-and-villas.html?aid=2820480",
              },
              {
                name: "Jakes Hotel Treasure Beach",
                type: "Boutique · South coast",
                price: "From $150/night",
                rating: "4",
                badge: "Most character",
                url: "https://www.booking.com/hotel/jm/jakes-hotel.html?aid=2820480",
              },
              {
                name: "Sandals Montego Bay",
                type: "All-inclusive · North coast",
                price: "From $350/night",
                rating: "4",
                badge: "All-inclusive",
                url: "https://www.booking.com/hotel/jm/sandals-montego-bay.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Dunn's River Falls & Blue Hole Day Tour",
                duration: "8 hrs",
                price: "From $80/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Dunn%27s+River+Falls+Jamaica&partner_id=PSZA5UI",
              },
              {
                name: "Negril Sunset Catamaran Cruise",
                duration: "2.5 hrs",
                price: "From $65/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=Negril+Jamaica+catamaran&partner_id=PSZA5UI",
              },
              {
                name: "Blue Mountains Coffee Estate Tour",
                duration: "Half day",
                price: "From $80/person",
                badge: "Unique",
                url: "https://www.getyourguide.com/s/?q=Blue+Mountains+Jamaica+coffee+tour&partner_id=PSZA5UI",
              },
              {
                name: "Bob Marley Museum & Kingston Culture Tour",
                duration: "5 hrs",
                price: "From $55/person",
                url: "https://www.getyourguide.com/s/?q=Bob+Marley+Museum+Kingston+Jamaica&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Jamaica</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🚕",
                  title: "Taking Unofficial Taxis from Montego Bay Airport",
                  desc: "MBJ arrivals are approached by unlicensed taxi touts offering cut-price transfers. These are unregulated and unmetered and have resulted in overcharging and occasional security incidents. Use only licensed JUTA taxis (red PP/TP/PPV licence plates) from the official desk in arrivals, or pre-book your hotel transfer. Budget travellers: the Knutsford Express coach from MBJ to Negril or Kingston is safe, comfortable, and cheap ($15–20).",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🌊",
                  title: "Staying in an All-Inclusive and Never Leaving",
                  desc: "Jamaica's all-inclusive resorts are comfortable but they are not Jamaica. Wristband culture keeps travellers 100 metres from one of the most vibrant cultures in the world. Leave for real jerk chicken at a roadside pit, visit a rum bar, take a route taxi somewhere. One meal outside the resort will transform your experience of Jamaica more than a week inside it.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🌀",
                  title: "Booking Inflexibly in Hurricane Season",
                  desc: "Hurricane season runs June–November. Direct hits are rare but tropical storms cause flooding, rough seas, cancelled boat tours, and airport disruption for days at a time. If visiting June–November, book refundable accommodation and flexible flights. December–April (dry season) is peak season with reliably excellent weather — prices are 20–40% higher but the certainty is worth it for a short trip.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "💸",
                  title: "Paying USD Everywhere and Getting Bad Exchange Rates",
                  desc: "USD works everywhere in tourist Jamaica but vendors apply exchange rates that benefit them. A jerk stand might price chicken at $10 USD but charge 1,400 JMD (correct rate: ~1,240 JMD at 155 JMD/USD). Across a 5-day trip the difference adds up. Withdraw JMD from ATMs and pay local prices in local currency. Keep USD for hotel payments, tour deposits, and large purchases.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🏖️",
                  title: "Ignoring Jamaica's South Coast Entirely",
                  desc: "Most visitors follow: Montego Bay → Negril → Ocho Rios. Jamaica's south coast — Treasure Beach, Black River, YS Falls, Pelican Bar, Jake's Hotel — is everything the north coast was before mass tourism arrived. No cruise ships, no resort strips, fishing villages, and the most singular bar experience in the Caribbean. If you have 5 days, spend at least one on the south coast.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((m) => (
                <TipCard key={m.title} {...m} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Jamaica</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🍗",
                  title: "The Best Jerk is Always Off the Main Tourist Road",
                  desc: "Definitive jerk chicken is cooked low and slow over pimento wood at roadside pits operated by locals for locals. Tell-tale signs: wood smoke, blackened oil drums, a crowd of Jamaicans, no tourist pricing board. Scotchies in Ocho Rios is the most praised established option, but any serious roadside pit on the B1 highway will outperform any hotel restaurant jerk, always. Price guide: $6–10 (~930–1,550 JMD) for a half chicken.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "⏰",
                  title: "Rick's Café: Arrive at 5pm, Not at Sunset",
                  desc: "Rick's Café is most crowded at the literal moment of sunset — every cliff perch has 15 people on it. Arrive at 5pm (90 minutes before sunset in December–April). Buy your drink, claim a cliff-edge position, and let the crowd fill in behind you. The divers perform throughout the afternoon. Weekdays are significantly less crowded than weekends.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🎵",
                  title: "Go to Live Reggae or a Sound System Dance",
                  desc: "Jamaica's music culture is most alive at sound system dances and live music nights. Accessible options: Alfred's Ocean Palace on Seven Mile Beach (free entry on Thursday and Sunday live nights), Rockhouse sundowner events, and Dub Club on Sundays at Skyline Drive Kingston — Jamaica's finest reggae institution. Take a taxi ($10–15 from New Kingston).",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎒",
                  title: "Book Tours via GetYourGuide for Vetted Operators",
                  desc: "Jamaica's informal tour economy has excellent local operators and unreliable ones. For Dunn's River Falls, Blue Hole, catamaran sunset cruises, Blue Mountain tours, and Pelican Bar excursions, use GetYourGuide for reviewed operators: https://www.getyourguide.com/s/?q=Jamaica&partner_id=PSZA5UI. Particularly important for Blue Mountains tours where a good guide makes an enormous difference.",
                  color: "bg-indigo-50 border-indigo-200",
                },
                {
                  icon: "☕",
                  title: "Buy Blue Mountain Coffee at the Estate, Not the Airport",
                  desc: "At Craighton or Old Tavern estate: $30–60 per pound (250g). At MBJ airport duty-free: $40–70/lb. In UK or US supermarkets: $80–120/lb for the same coffee. The estate version is also fresher — roasted that week. Buy 500g at the estate and pack it flat in your checked luggage.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🏖️",
                  title: "Pelican Bar: Go on a Weekday Morning",
                  desc: "Pelican Bar on a weekend afternoon loses some of its peculiar magic. On a weekday morning (Tuesday–Thursday, 9–11am), the water is calmer for the canoe crossing, there are 3–6 people at the bar, and you get the full absurdity of the experience: sitting in a rum shack in the middle of the Caribbean with pelicans circling overhead. The crossing costs $10 round trip by fisherman's canoe.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Jamaica" />

          {/* Combine With */}
          <CombineWith currentSlug="jamaica-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Jamaica safe for tourists in 2026?",
                  a: "Jamaica's crime reputation is simultaneously earned and significantly overstated for tourists. The island's murder rate is concentrated in specific urban areas — parts of Kingston (Tivoli Gardens, Spanish Town) and inner-city Montego Bay — that tourists have no reason to visit. Tourist areas (Negril, Seven Mile Beach, Ocho Rios, Treasure Beach) have very low rates of tourist-targeted violent crime. Petty theft, occasionally pushy beach vendors, and overcharging are the main irritants. Travel with normal urban awareness, don't flash expensive items, use hotel-recommended taxis, and Jamaica is a warm, welcoming, genuinely remarkable destination.",
                },
                {
                  q: "Do I need a visa for Jamaica?",
                  a: "US, UK, Canadian, Australian, New Zealand, and all EU passport holders do not need a visa — tourist entry is granted on arrival for up to 90 days. Complete the immigration card on the aircraft and present it with your passport at immigration. Indian passport holders require an e-visa (apply at evisa.mns.gov.jm, fee approximately $50 USD, processing 5–10 business days). Print your e-visa approval and carry it with your passport — immigration checks both documents.",
                },
                {
                  q: "What is ackee and saltfish and should I try it?",
                  a: "Ackee and saltfish is Jamaica's national dish — a sauté of salted cod with ackee fruit (which has a scrambled-egg texture when cooked), onions, tomatoes, Scotch bonnet pepper, and thyme. Almost always served at breakfast with boiled dumplings, fried plantain, and roasted breadfruit. Yes, absolutely try it. It is one of the great breakfast dishes of the world. Note: unripe ackee is toxic — only eat it in established restaurants where it is properly prepared.",
                },
                {
                  q: "Is Negril or Ocho Rios better for a 5-day Jamaica trip?",
                  a: "For most first-time visitors, Negril is the better base — Seven Mile Beach is one of the genuinely great Caribbean beaches, the West End cliffs are unique, and Rick's Café is unmissable. Ocho Rios is more centrally located (making Dunn's River Falls and the Blue Mountains easier to access) but the town itself is more cruise-ship oriented and the beaches are less impressive. An ideal 5-day trip bases in Negril (Days 1–2), day-trips to Ocho Rios (Day 3), and includes at least one night near Treasure Beach on the south coast (Days 4–5).",
                },
                {
                  q: "What is the best way to get around Jamaica on a budget?",
                  a: "Route taxis (shared minibuses and cars on fixed routes) are Jamaica's primary public transport — very cheap ($1–5 for most inter-town hops) but require local knowledge. Ask your guesthouse to explain the route for your specific journey. For longer runs (Montego Bay to Kingston, Montego Bay to Negril), Knutsford Express coaches are safe, air-conditioned, and reliable ($15–20). Renting a car ($50–80/day) gives maximum freedom but Jamaican road conditions require alertness.",
                },
                {
                  q: "How much does Appleton Rum cost at the estate versus at home?",
                  a: "At the Appleton Estate distillery in St Elizabeth: Appleton 12-year approximately $35 (~5,425 JMD), Appleton 21-year approximately $65. At MBJ airport duty-free: Appleton 12-year $40–45. In UK or US retail: Appleton 12-year $45–55, Appleton 21-year $90–110. The estate is the cheapest point of purchase and the tour ($25 entry including a tasting of 5–7 rums) is genuinely excellent. Buy at the estate and pack it in your checked luggage.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Jamaica trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-jamaica", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/jamaica-budget-guide", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/negril-vs-ocho-rios", label: "Negril vs Ocho Rios", icon: "🏖️" },
                { href: "/blog/blue-mountains-coffee-tour", label: "Blue Mountains guide", icon: "☕" },
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
          <RelatedGuides currentSlug="jamaica-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Caribbean &amp; Latin America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Havana 4 Days — Cuba&apos;s Capital", href: "/blog/havana-4-days" },
                { label: "Colombia 7 Days — Cartagena &amp; Medellín", href: "/blog/colombia-7-days" },
                { label: "Rio de Janeiro 5 Days — Complete Guide", href: "/blog/rio-de-janeiro-5-days" },
                { label: "Barbados 4 Days — Beaches &amp; Rum", href: "/blog/barbados-4-days" },
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