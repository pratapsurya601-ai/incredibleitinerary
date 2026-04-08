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

const KOLKATA_TOC = [
  { id: "decision",       emoji: "⚡",  label: "Which Traveller Are You?" },
  { id: "highlights",     emoji: "\uD83C\uDFD9",  label: "Why Kolkata?" },
  { id: "itinerary",      emoji: "\uD83D\uDCC5",  label: "3-Day Itinerary" },
  { id: "budget",         emoji: "\uD83D\uDCB0",  label: "Budget Breakdown" },
  { id: "food",           emoji: "\uD83C\uDF5B",  label: "Street Food — Complete Guide" },
  { id: "mistakes",       emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",           emoji: "\uD83D\uDCA1",  label: "Pro Tips" },
  { id: "faq",            emoji: "❓",  label: "FAQ" },
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
      <div className="h-full bg-gold transition-all duration-100" style={{ width: `${progress}%` }} />
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Kolkata 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Kolkata in 3 Days — the guide nobody writes&url=${typeof window !== "undefined" ? window.location.href : ""}` },
      ].map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}>
          {s.label}
        </a>
      ))}
      <button onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">
        {copied ? "✓ Copied" : "Copy Link"}
      </button>
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
function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
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
        <span className="text-muted text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">{"●"}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">{"\uD83D\uDCB0"}</span>
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

// ── Route Map Card ────────────────────────────────────────────────────────────
function RouteCard({ plan, day, stops, distance, url, note, color }: {
  plan: string; day: string; stops: string[]; distance: string; url: string; note: string; color: string;
}) {
  return (
    <div className={`rounded-xl border p-5 ${color}`}>
      <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
        <div>
          <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-muted mb-0.5">{plan}</p>
          <p className="font-serif text-base text-ink">{day}</p>
        </div>
        <span className="text-xs text-muted bg-white/70 px-3 py-1 rounded-full border border-white/50">{distance}</span>
      </div>
      <div className="flex flex-wrap items-center gap-1.5 mb-4">
        {stops.map((stop, j) => (
          <span key={j} className="flex items-center gap-1">
            <span className="text-xs bg-white/80 px-2.5 py-1 rounded-full border border-white/60 text-ink font-light">{stop}</span>
            {j < stops.length - 1 && <span className="text-muted/40 text-xs">{"\u2192"}</span>}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted font-light italic mb-3">{"\uD83D\uDCA1"} {note}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline">
        {"\uD83D\uDCCD"} Open in Google Maps {"\u2192"}
      </a>
    </div>
  );
}

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
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
export default function KolkataClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KOLKATA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kolkata" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="howrah bridge kolkata calcutta hooghly river sunrise dawn west bengal india"
            alt="Howrah Bridge over the Hooghly River at sunrise, Kolkata"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Kolkata 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">East India</span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kolkata in 3 Days: Trams, Bhadralok & the City of Joy
                <em className="italic text-gold-light"> (Complete Guide)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                India&apos;s most intellectual, cheapest, and most underrated city — flower market at 4:30am, colonial grandeur, idol workshops, and street food that will make you rethink everything. Budget from ₹2,000/day.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"\uD83C\uDDEE\uD83C\uDDF3"} West Bengal, India</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDDD3"} 3 Days</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From ₹2,000/day</span>
            </div>
          </div>

          {/* Intro quote */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Kolkata rewards the curious and punishes the indifferent. It is India&apos;s cheapest major city, its most intellectual, arguably its greatest food city — and the least visited of the big four. Most people come for two days as a stopover and leave wishing they had stayed a week.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u26A1"} Which Traveller Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your style to jump to the right section.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { emoji: "\uD83D\uDCDA", label: "Culture & History", sub: "₹2,000–₹3,500/day", desc: "Trams, Coffee House, College Street books", color: "border-amber-200 hover:border-amber-400", id: "itinerary" },
                { emoji: "\uD83C\uDF5B", label: "Food Explorer", sub: "₹3,500–₹6,000/day", desc: "Kati rolls, phuchka, kosha mangsho trail", color: "border-teal-200 hover:border-teal-400", id: "food" },
                { emoji: "\uD83C\uDFDB", label: "Heritage & Architecture", sub: "₹5,000+/day", desc: "Victoria Memorial, heritage hotels, Raj-era clubs", color: "border-emerald-200 hover:border-emerald-400", id: "itinerary" },
              ].map((p) => (
                <button key={p.label} onClick={() => document.getElementById(p.id)?.scrollIntoView({ behavior: "smooth" })}
                  className={`p-4 rounded-xl border-2 border-parchment-2 bg-white hover:shadow-md transition-all duration-200 text-center group ${p.color}`}>
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-amber-700 mt-0.5 font-medium">{p.sub}</p>
                  <p className="text-[0.65rem] text-muted mt-1 font-light">{p.desc}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan {"\u2192"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── WHY KOLKATA ── */}
          <section id="highlights" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83C\uDFD9"} Why Kolkata?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Kolkata is not a comfortable tourist city. There is no Rajasthan polish, no Kerala ease. The streets are loud, the traffic is chaotic, the humidity in summer is punishing. What it has instead is depth. This is the city that produced Tagore, Ray, Bose, and Mother Teresa. The para (neighbourhood) culture means every block has its own identity. The food alone justifies the trip.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "The Heritage Side", emoji: "\uD83C\uDFDB", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Highlight","Victoria Memorial — India's finest Indo-Saracenic building"],["Era","300+ years of British, Mughal, and Bengali architecture"],["Best Walk","BBD Bagh → Dalhousie → Writers' Building — 2km of colonial Calcutta"],["Entry","Victoria Memorial ₹30 Indians / ₹500 foreigners"]],
                  note: "Go to Victoria Memorial before 10am. The morning light on white Makrana marble is extraordinary and you dodge the midday crowds entirely." },
                { title: "The Food Side", emoji: "\uD83C\uDF5B", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [["Signature","Kati roll (Nizam's, invented 1932), phuchka, kosha mangsho"],["Sweet","Rosogolla (KC Das), mishti doi, sandesh (Balaram Mullick)"],["Budget","Full street food meal: ₹80–₹150 per person"],["Meal","Bengali thali at Bhojohori Manna: ₹300–₹500"]],
                  note: "Kolkata's phuchka is NOT Mumbai's pani puri and NOT Delhi's golgappa. The tamarind water is sharper, the filling is mashed potato with raw onion, and the shells are thinner. Don't conflate them." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-20 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">{"\u26A0\uFE0F"} {area.note}</p>
                </div>
              ))}
            </div>

            {/* Key attractions grid */}
            <h3 className="font-serif text-lg font-light text-ink mb-4 mt-8">Key Attractions at a Glance</h3>
            <div className="space-y-3">
              {[
                { name: "Victoria Memorial (1906–1921)", detail: "White Makrana marble, Indo-Saracenic masterpiece. Museum inside with Raj-era paintings and Calcutta history. Entry ₹30 Indians. Gardens open 5:30am. Museum opens 10am. Go before 10am for the light.", tag: "Heritage", color: "border-amber-200 bg-amber-50" },
                { name: "Howrah Bridge at Sunrise", detail: "Walk across at 5:30–6:30am. The cantilever is held together entirely by rivets — no nuts or bolts. The light on the Hooghly at dawn is one of India's great photographic moments. Free.", tag: "Iconic", color: "border-orange-200 bg-orange-50" },
                { name: "Mullick Ghat Flower Market", detail: "Under Howrah Bridge, 4:30am–7am. 2,000+ vendors, marigolds stacked to the ceiling. The single most atmospheric experience in Kolkata. Free to walk through. Go at first light.", tag: "Experience", color: "border-blue-200 bg-blue-50" },
                { name: "Kumartuli Idol Workshops", detail: "Open-air studios where artisans sculpt Durga Puja idols year-round. Clay, straw, paint. Hire a local guide ₹200–₹300 for context. Free to walk. Best 9am–12pm when sculptors are working.", tag: "Craft", color: "border-teal-200 bg-teal-50" },
                { name: "Dakshineswar Kali Temple", detail: "12km north on the Hooghly. Ramakrishna's temple. Take the public ferry from Bagh Bazaar Ghat — ₹10–₹15, 20 minutes on the river. More meaningful than a taxi. Free entry.", tag: "Spiritual", color: "border-emerald-200 bg-emerald-50" },
                { name: "College Street (Boi Para)", detail: "World's largest second-hand book market. Thousands of volumes stacked along the pavement. Indian Coffee House upstairs — adda culture since the 1940s, unchanged. Coffee + egg roll ₹100.", tag: "Culture", color: "border-green-200 bg-green-50" },
                { name: "Kalighat Kali Temple", detail: "The original Kali temple — Kolkata is named after it. Intense, chaotic, deeply alive. Dress modestly, move with the flow, no camera in sanctum. Free entry. Near Kalighat Metro.", tag: "Spiritual", color: "border-yellow-200 bg-yellow-50" },
                { name: "South Park Street Cemetery (1767)", detail: "One of India's oldest British cemeteries. Overgrown Gothic obelisks and monuments. Melancholy, beautiful, peaceful. Free entry. 30 minutes is enough.", tag: "Heritage", color: "border-sky-200 bg-sky-50" },
              ].map((attr) => (
                <div key={attr.name} className={`rounded-xl border p-4 ${attr.color}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-sm text-ink">{attr.name}</p>
                        <span className="text-[0.6rem] bg-white/70 border border-white/60 px-2 py-0.5 rounded-full text-muted uppercase tracking-wide">{attr.tag}</span>
                      </div>
                      <p className="text-xs text-muted font-light leading-relaxed">{attr.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Circuit tip:</strong> Kolkata connects with Darjeeling (10hr train to NJP + 3hr drive), Sundarbans (4hr south), and Varanasi (12hr overnight train). It is the natural gateway to all of Northeast India — Guwahati is a 2hr flight.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="3 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="₹2,000/day" />
            <StatCard icon={"\uD83C\uDF21"} label="Best Months" value="Oct – Feb" />
            <StatCard icon={"\u2708\uFE0F"} label="Airport" value="CCU (Dum Dum)" />
          </div>

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} The 3-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">
              Kolkata is a morning city. Start early, eat constantly, use the Metro for speed and trams for atmosphere.
            </p>

            <DayCard
              day="Day 1"
              title="Colonial Kolkata — Flower Market to Princep Ghat"
              items={[
                "4:30am: Mullick Ghat Flower Market beneath Howrah Bridge. 2,000+ vendors, marigolds stacked to the ceiling. The smell, the colour, the chaos at first light. Free to walk through. Worth every second of the early alarm.",
                "6:00am: Walk across Howrah Bridge (Rabindra Setu) at sunrise. No nuts or bolts — held together entirely by rivets. The light on the Hooghly River at dawn is one of India's great photographic moments.",
                "8:00am: Breakfast at Anadi Cabin near BBD Bagh. Old-school Kolkata breakfast — luchi with aloo dum, ₹60–₹80. The place has not changed since the 1940s. Regulars bring newspapers.",
                "9:30am: Victoria Memorial. White Makrana marble, Indo-Saracenic masterpiece. Go before 10am — morning light, no crowds. Entry ₹30 Indians / ₹500 foreigners. Museum extra ₹100/₹200. Gardens are stunning.",
                "11:30am: Walk the Maidan — the massive open green south of Victoria. Cricket matches, morning walkers, colonial race course. Eden Gardens cricket stadium sits at the north edge.",
                "1:00pm: Lunch at Indian Coffee House, College Street (1st floor). Waiters in white uniforms and turbans. Adda culture — conversation is the point. Coffee and egg roll, ₹100 for two. This place is irreplaceable.",
                "2:30pm: Explore College Street (Boi Para). Largest second-hand book market in the world. Even non-readers find it extraordinary.",
                "4:00pm: Kumartuli — idol-makers' neighbourhood. Clay Durga Puja sculptures in every state of completion. Hire a guide (₹200–₹300) for context. Free to walk.",
                "6:30pm: Princep Ghat at sunset. Colonial-era ghat on the Hooghly. Boat rides ₹50–₹100. Locals come for evening walks. One of Kolkata's best-kept secrets.",
                "8:00pm: Dinner at Bhojohori Manna (Elgin Road or Hindustan Park). Bengali thali — dal, fish curry, rice, chutney, mishti doi. ₹300–₹500 per person.",
              ]}
              cost="₹800–₹1,500 excluding accommodation" />

            <DayCard
              day="Day 2"
              title="Spiritual + South Kolkata — Kalighat to Park Street"
              items={[
                "8:00am: Kalighat Kali Temple — the original Kali temple that Kolkata is named after. Active, chaotic, intensely alive. Dress modestly, move with the flow, no camera in the sanctum. Free entry. Near Kalighat Metro.",
                "10:00am: Ballygunj neighbourhood walk. Tree-lined residential streets, old Bengali mansions, morning markets. Real South Kolkata with zero tourist agenda.",
                "11:30am: Gariahat Market — where actual Kolkatans shop. Sarees, fish, vegetables. Excellent phuchka stalls outside. Zero tourists.",
                "1:00pm: Lunch at Peter Cat, Park Street. Chelo kebab — Iranian-origin rice with kebabs. An institution since 1975. ₹600–₹900 for two. Book ahead on weekends.",
                "3:00pm: South Park Street Cemetery (1767). One of India's oldest British cemeteries. Overgrown obelisks, Gothic monuments. Melancholy and beautiful. Free entry.",
                "4:30pm: Flury's tea room, Park Street (since 1927). Swiss patisserie, Calcutta's colonial elite. Tea and pastries in a time capsule. ₹400–₹600 for two.",
                "6:00pm: New Market (Hogg Market, 1874). Colonial covered market — spices, leather, textiles. Worth an hour of wandering.",
                "8:00pm: Tram ride from Esplanade to Shyambazar. ₹7 — the world's cheapest public transport. The trams are atmospheric, slow, and uniquely Kolkata. Take one at least once.",
              ]}
              cost="₹1,000–₹2,000 excluding accommodation" />

            <DayCard
              day="Day 3"
              title="River + North Kolkata — Dakshineswar to Farewell Dinner"
              items={[
                "8:00am: Public ferry from Bagh Bazaar Ghat to Dakshineswar. ₹10–₹15 one way, 20–30 minutes on the Hooghly. The river crossing is part of the experience.",
                "9:00am: Dakshineswar Kali Temple — the riverside temple where Ramakrishna had his visions. Extraordinary spiritual atmosphere. Free entry. Spend an hour.",
                "10:30am: Belur Math — cross the river (short ferry or walk the bridge). Ramakrishna Mission headquarters. Architecture synthesises Hindu, Christian, and Islamic elements. Free, peaceful, remove shoes.",
                "12:30pm: Lunch at Golbari, Shyambazar. Kosha mangsho — slow-cooked mutton since 1918. The queue outside is the review. ₹200–₹350 per person.",
                "2:30pm: North Kolkata havelis — crumbling 18th-century mansions in Sovabazar and Jorasanko. Jorasanko Thakur Bari (Tagore family home) has a museum. ₹30 entry.",
                "4:30pm: Rabindra Sarobar lake. Evening walkers, local families, the rowing club since 1928. Peaceful after three days of intensity.",
                "7:00pm: Farewell dinner at Kewpie's, Elgin Lane. Gold standard for home-style Bengali cooking. Recipes restaurants rarely attempt. Book ahead. ₹600–₹900 per person.",
              ]}
              cost="₹900–₹1,800 excluding accommodation" />

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mt-4">
              <span className="text-xs text-green-700 uppercase tracking-wide">Total 3-Day Cost (per person) {"·"} </span>
              <span className="font-serif text-base text-ink font-light">₹6,000–₹10,000 budget · ₹15,000–₹25,000 mid-range</span>
            </div>
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83D\uDCDA"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">{"\uD83C\uDFDB"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-emerald-300 text-center">{"\uD83C\uDFE8"} Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "₹1,800–₹3,000", "₹6,000–₹12,000", "₹15,000–₹30,000"],
                    ["\uD83C\uDF7D Food & Chai", "₹600–₹1,200", "₹2,500–₹5,000", "₹6,000–₹12,000"],
                    ["\uD83D\uDE95 Metro + Trams + Autos", "₹300–₹500", "₹800–₹1,500", "₹2,000–₹4,000"],
                    ["\uD83C\uDFAF Victoria + Museums + Tagore House", "₹150–₹300", "₹300–₹600", "₹600–₹1,000"],
                    ["\u26F4 Dakshineswar Ferry + Boat Rides", "₹50–₹150", "₹150–₹300", "₹300–₹500"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 3 days)</td>
                    {["₹6,000–₹10,000", "₹15,000–₹25,000", "₹30,000–₹55,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              Kolkata is the cheapest major city in India — 30–40% less than Delhi or Mumbai for equivalent quality. Most of the best experiences (flower market, ghat walks, tram rides, Kumartuli) are free.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Kolkata"
            hotels={[
              { name: "The Oberoi Grand", type: "Heritage Palace · Chowringhee", price: "From ₹8,000/night", rating: "5", badge: "Most iconic", url: "https://www.booking.com/searchresults.html?ss=Kolkata+Oberoi&aid=2820480" },
              { name: "The Peerless Inn", type: "Mid-range · Central", price: "From ₹3,500/night", rating: "4", badge: "Best location", url: "https://www.booking.com/searchresults.html?ss=Kolkata+Peerless+Inn&aid=2820480" },
              { name: "Sudder Street Guesthouses", type: "Budget · Backpacker hub", price: "From ₹600/night", rating: "3", badge: "Budget", url: "https://www.booking.com/searchresults.html?ss=Sudder+Street+Kolkata&aid=2820480" },
            ]}
            activities={[
              { name: "Kolkata Heritage Walking Tour", duration: "3 hours", price: "From ₹800/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=kolkata+walking+tour&partner_id=PSZA5UI" },
              { name: "Kumartuli Idol Workshop Visit", duration: "2 hours", price: "From ₹500/person", badge: "Unique", url: "https://www.getyourguide.com/s/?q=kolkata+kumartuli&partner_id=PSZA5UI" },
              { name: "Kolkata Street Food Tour", duration: "3 hours", price: "From ₹1,000/person", url: "https://www.getyourguide.com/s/?q=kolkata+food+tour&partner_id=PSZA5UI" },
              { name: "Sundarbans Day Trip from Kolkata", duration: "Full day", price: "From ₹2,500/person", url: "https://www.getyourguide.com/s/?q=sundarbans+kolkata&partner_id=PSZA5UI" },
            ]}
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Kolkata — The City Nobody Writes About"
            subtitle="Colonial grandeur, morning rituals, and the finest street food in India."
            spots={[
              { name: "Mullick Ghat Flower Market", query: "howrah bridge flower market kolkata dawn marigold hooghly calcutta", desc: "Under Howrah Bridge at 4:30am — 2,000 vendors, marigolds stacked to the ceiling. The most atmospheric morning in any Indian city." },
              { name: "Victoria Memorial", query: "victoria memorial kolkata calcutta white marble reflection morning india", desc: "Indo-Saracenic masterpiece in white Makrana marble. Go before 10am for the light and empty gardens." },
              { name: "Kumartuli Idol Workshops", query: "kumartuli kolkata clay idol durga puja sculptor workshop artisan", desc: "Open-air idol workshops where artisans sculpt Durga Puja figures year-round. Clay, straw, paint — creation in process." },
              { name: "College Street Book Market", query: "college street kolkata book market boi para calcutta vendors piles", desc: "World's largest second-hand book market. Thousands of volumes on pavement. Indian Coffee House upstairs." },
              { name: "Dakshineswar Temple", query: "dakshineswar kali temple kolkata hooghly river riverside west bengal india", desc: "Ramakrishna's temple on the Hooghly. Take the public ferry — ₹10–₹15, 20 minutes on the water." },
            ]}
          />

          {/* ── FLOWER MARKET IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="mullick ghat flower market kolkata howrah bridge dawn marigold vendors"
              alt="Mullick Ghat flower market beneath Howrah Bridge at dawn, Kolkata"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Mullick Ghat Flower Market — 4:30am under Howrah Bridge. 2,000+ vendors trade marigolds, roses and jasmine. The single most atmospheric morning in Kolkata.
              </p>
            </div>
          </div>

          {/* ── STREET FOOD — COMPLETE GUIDE (deep-dive) ── */}
          <section id="food" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF5B"} Street Food — The Complete Guide</h2>

            <div className="space-y-4">
              {/* Kati Roll deep */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-amber-800 mb-3 flex items-center gap-2">
                  {"\uD83E\uDD59"} Kati Roll — Where Kolkata Invented Fast Food
                </h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Origin:</strong> Nizam&apos;s in New Market invented the kati roll in 1932. Egg paratha wrapped around seekh kebab — workers could eat while walking. The word &quot;kati&quot; means stick (the skewer).</p>
                  <p><strong className="text-ink">Where to eat:</strong> Nizam&apos;s, Park Circus (the original, since 1932) — egg + chicken or mutton. Kusum Roll, Park Street — the other institution. Bedwin, Lindsay Street — late-night option.</p>
                  <p><strong className="text-ink">Price:</strong> ₹80–₹180 depending on filling. Egg roll ₹80. Double egg chicken ₹150. Mutton ₹180.</p>
                  <p><strong className="text-ink">The rule:</strong> A kati roll is NOT a wrap, NOT a shawarma, NOT a frankie. It is a paratha cooked with egg on a flat griddle, wrapped around spiced kebab meat with onion and green chutney. If it comes in a tortilla, it is not a kati roll.</p>
                  <p><strong className="text-ink">When:</strong> Lunch or late night (after 9pm). Nizam&apos;s closes at 11pm. The queues at 1pm and 9pm are the longest.</p>
                </div>
              </div>

              {/* Phuchka deep */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-emerald-800 mb-3 flex items-center gap-2">
                  {"\uD83D\uDCA7"} Phuchka — Why Kolkata&apos;s Version Is Different
                </h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">The distinction:</strong> Delhi calls it golgappa (crunchy shell, spiced water). Mumbai calls it pani puri (wheat shell, sweet-sour water). Kolkata calls it phuchka — thinner shell, mashed potato filling with raw onion, and tamarind water that is sharper, tangier and more complex than any other version.</p>
                  <p><strong className="text-ink">Where to eat:</strong> Dacres Lane stalls (best concentration). Vivekananda Park stalls. Any street corner vendor with a crowd. The best phuchka comes from the vendor with the longest queue.</p>
                  <p><strong className="text-ink">Price:</strong> ₹30–₹50 for 6 pieces. Ask for &quot;jol puchke&quot; (the wet version with water) or &quot;churmur&quot; (the dry version — shells crushed with filling, tamarind and chilli).</p>
                  <p><strong className="text-ink">The rule:</strong> Eat standing. Eat fast — phuchka shells go soggy in 5 seconds. The vendor serves one at a time, directly into your hand. Eat each one in a single bite. Do not photograph it. Eat it.</p>
                </div>
              </div>

              {/* Sweets */}
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-rose-800 mb-3 flex items-center gap-2">
                  {"\uD83C\uDF6C"} Bengali Sweets — The Essentials
                </h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Rosogolla:</strong> KC Das (Park Street) claims the invention. Balaram Mullick &amp; Radharaman Mullick has the best modern version. Soft chenna balls in sugar syrup, served cold. ₹20–₹30 each.</p>
                  <p><strong className="text-ink">Mishti Doi:</strong> Fermented sweetened yogurt set in earthen pots. The caramelised top layer is the best part. Available everywhere. ₹30–₹50. Try with a fish curry meal — the pairing is deliberate.</p>
                  <p><strong className="text-ink">Sandesh:</strong> Pure chenna sweet, less aggressively sweet than typical Indian mithai. Balaram Mullick is the gold standard. Nolen gur sandesh (date palm jaggery, winter only, November–February) is the peak version.</p>
                  <p><strong className="text-ink">Where to buy:</strong> Balaram Mullick &amp; Radharaman Mullick (multiple locations). KC Das (Park Street, original). Nalin Chandra Das (Esplanade area). Girish Chandra Dey &amp; Nakur Chandra Nandy (Dharmatala). Avoid airport sweet boxes — they are tourist-grade.</p>
                </div>
              </div>
            </div>

            {/* Additional foods grid */}
            <h3 className="font-serif text-lg font-light text-ink mb-4 mt-8">Also Eat</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { name: "Kosha Mangsho", detail: "Slow-cooked mutton in thick onion-ginger gravy. The best is at Golbari, Shyambazar (since 1918, ₹200–₹350). The queue at lunch is 20 minutes — worth it.", color: "bg-amber-50 border-amber-200" },
                { name: "Telebhaja", detail: "Deep-fried snacks — beguni (battered aubergine), peyaji (onion fritters), alur chop (spiced potato cutlets). Best when it rains. ₹10–₹30 each from any street vendor.", color: "bg-blue-50 border-blue-200" },
                { name: "Fish Curry & Rice", detail: "Bengalis eat fish daily. Hilsa (ilish) is the prestige fish (July–October). Rohu is everyday. Order at Bhojohori Manna or 6 Ballygunge Place. ₹250–₹500 for a fish thali.", color: "bg-green-50 border-green-200" },
                { name: "Luchi + Aloo Dum", detail: "Morning staple. Fried puri with spiced potato. ₹40–₹60 at any para-r dokan (neighbourhood shop). The correct Kolkata breakfast before 9am.", color: "bg-orange-200 border-orange-300" },
              ].map((f) => (
                <div key={f.name} className={`rounded-xl border p-4 ${f.color}`}>
                  <p className="font-medium text-sm text-ink mb-1">{f.name}</p>
                  <p className="text-xs text-muted font-light leading-relaxed">{f.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── ROUTE MAPS ── */}
          <div className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDDFA\uFE0F"} Route Maps — Day by Day</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              All three days radiate from central Kolkata. Metro is the fastest way between zones. Trams for atmosphere.
            </p>
            <div className="space-y-4">
              <RouteCard plan="Day 1" day="Flower Market → Howrah Bridge → Victoria → College St → Kumartuli → Princep Ghat"
                stops={["Flower Market 4:30am","Howrah Bridge 6am","Anadi Cabin 8am","Victoria Memorial 9:30am","College St 1pm","Kumartuli 4pm","Princep Ghat 6:30pm"]}
                distance="18km · Metro + walking" note="Flower Market and Howrah Bridge are adjacent. Victoria is 3km south. College Street is 2km east. Kumartuli is 4km north. Logical north-south-north loop."
                color="border-amber-200 bg-amber-50"
                url="https://www.google.com/maps/dir/Mullick+Ghat+Flower+Market/Howrah+Bridge/Victoria+Memorial/College+Street+Kolkata/Kumartuli/Princep+Ghat" />
              <RouteCard plan="Day 2" day="Kalighat → Ballygunj → Gariahat → Park Street → New Market → Tram"
                stops={["Kalighat Temple 8am","Ballygunj 10am","Gariahat Market 11:30am","Peter Cat 1pm","Cemetery 3pm","Flury's 4:30pm","New Market 6pm","Tram 8pm"]}
                distance="12km · Metro + auto" note="Kalighat and Gariahat are in South Kolkata — Metro to Kalighat station. Park Street cluster (Peter Cat, Flury's, Cemetery, New Market) is walkable within 1km."
                color="border-teal-200 bg-teal-50"
                url="https://www.google.com/maps/dir/Kalighat+Kali+Temple/Gariahat+Market/Peter+Cat+Park+Street/South+Park+Street+Cemetery/New+Market+Kolkata" />
              <RouteCard plan="Day 3" day="Bagh Bazaar Ferry → Dakshineswar → Belur Math → Shyambazar → Jorasanko → Farewell"
                stops={["Bagh Bazaar Ferry 8am","Dakshineswar 9am","Belur Math 10:30am","Golbari 12:30pm","Jorasanko 2:30pm","Rabindra Sarobar 4:30pm","Kewpie's 7pm"]}
                distance="30km · Ferry + auto" note="Dakshineswar and Belur Math are 12km north — the ferry from Bagh Bazaar is the best route. Return south by auto or Metro."
                color="border-emerald-200 bg-emerald-50"
                url="https://www.google.com/maps/dir/Bagh+Bazaar+Ghat/Dakshineswar+Kali+Temple/Belur+Math/Golbari+Shyambazar/Jorasanko+Thakur+Bari/Rabindra+Sarobar" />
            </div>
          </div>

          {/* ── KATI ROLL IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="kati roll kolkata street food calcutta india bengali paratha egg wrap"
              alt="Kati roll being made at a street stall in Kolkata"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The kati roll — Kolkata&apos;s gift to the world. Nizam&apos;s in New Market invented it in 1932. Egg paratha, seekh kebab, onion, green chutney. ₹80–₹180.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Skipping the Flower Market", desc: "Most tourists go to Victoria Memorial at 11am and call it a day. The flower market at 4:30am under Howrah Bridge is the single most atmospheric experience in Kolkata. Set your alarm. It closes by 8am.", icon: "\uD83C\uDF3B" },
                { title: "Staying near the airport", desc: "Dum Dum airport is 17km from the city centre. Stay in Sudder Street (budget), Park Street (mid-range), or near Esplanade (heritage). Everything you want to see is in central Kolkata.", icon: "\uD83C\uDFE8" },
                { title: "Taking a taxi to Dakshineswar", desc: "The public ferry from Bagh Bazaar Ghat costs ₹10–₹15 and takes 20 minutes on the Hooghly. A taxi costs ₹300–₹500 and sits in traffic for an hour. The ferry is the experience.", icon: "\u26F4" },
                { title: "Spending all your time at Victoria Memorial", desc: "Victoria is worth 90 minutes. Kolkata's real life is in its neighbourhoods — Kumartuli, College Street, Shyambazar, Ballygunj. A morning walk in Ballygunj, a tram through Bhowanipur, chai at a para-r dokan — this is the city.", icon: "\uD83C\uDFDB" },
                { title: "Eating only at restaurants", desc: "Kolkata's street food is where the real cooking happens. Phuchka at Dacres Lane, luchi at a neighbourhood shop, jhal muri by the lake — these ₹20–₹80 experiences outclass most restaurant meals.", icon: "\uD83C\uDF5B" },
                { title: "Visiting in May–June", desc: "Kolkata summer is 38–42°C with 90% humidity. Genuinely unbearable for walking. Come October–February (25–30°C, pleasant). October during Durga Puja is extraordinary but intensely crowded and expensive.", icon: "\uD83C\uDF21" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83D\uDE83", title: "Take at Least One Tram Ride", desc: "Kolkata has the only surviving tram network in India. ₹7 per ride. Slow, atmospheric, uniquely Kolkata. The Esplanade–Shyambazar route passes through the old city. Board one in the evening.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDE87", title: "Use the Metro Ruthlessly", desc: "Kolkata Metro is India's oldest (1984). Clean, efficient, ₹5–₹25/ride. Covers central Kolkata well. Use it for speed between zones, trams for atmosphere within zones.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF5B", title: "Eat Fish at Every Meal", desc: "Bengalis eat fish the way Italians eat pasta — daily, seriously, with strong opinions. Hilsa (ilish) is the prestige fish (July–October). Rohu is everyday. The fish curry + rice at local restaurants is some of the best food in India.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF89", title: "October = Durga Puja", desc: "Durga Puja (5 days in October) is India's greatest festival. Thousands of pandals (themed temporary temples), the entire city transforms. Book 3 months ahead — prices triple, but it is worth every rupee.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCDA", title: "College Street Is Not Just Books", desc: "The Indian Coffee House on the first floor is where Kolkata's intellectual culture happens. Adda — extended conversation over bad coffee — is the city's art form. Sit, order a coffee, listen. It costs ₹50.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "\uD83D\uDE95", title: "Yellow Taxis Still Exist", desc: "The iconic yellow Ambassador taxis are being phased out. If you see one, take it. Negotiate before boarding. ₹100–₹300 for most in-city trips. Ola and Uber are more reliable but less atmospheric.", color: "bg-emerald-50 border-emerald-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group size, and budget — we&apos;ll send a personalised Kolkata itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Kolkata Trip {"\u2192"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"\u2192"}</a>
            </div>
          </div>

          {/* ── EXTEND YOUR TRIP: SHANTINIKETAN ── */}
          <div className="mb-14 bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
            <h3 className="font-serif text-lg font-light text-ink mb-2">{"\uD83D\uDE82"} Extend Your Trip: Shantiniketan (+1–2 Days)</h3>
            <p className="text-sm text-muted font-light leading-relaxed mb-3">
              Rabindranath Tagore&apos;s university town is 2.5 hours by train from Howrah (₹80–₹250). Visva-Bharati campus, Kala Bhavana art gallery, Shantiniketan Griha (Tagore&apos;s house), Sonajhuri forest Saturday haat for tribal crafts. The Poush Mela (December) is one of Bengal&apos;s finest fairs. A peaceful contrast to Kolkata&apos;s intensity.
            </p>
            <p className="text-xs text-muted font-light italic">
              Best as a day trip or one-night stay. Take the Shantiniketan Express (early morning) from Howrah.
            </p>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Kolkata?", a: "3 days is ideal — covers Howrah Bridge, Victoria Memorial, Kumartuli, College Street, Dakshineswar, and the essential food trail. 2 days works for highlights only. 4–5 days lets you go deeper into neighbourhoods, Sundarbans day trip, and more food." },
                { q: "What is the best time to visit Kolkata?", a: "October to February is best (25–30°C, pleasant). October during Durga Puja is extraordinary but crowded and expensive — book 3 months ahead. November–February is the sweet spot. Avoid May–June (38–42°C with punishing humidity)." },
                { q: "How much does a 3-day trip cost?", a: "Budget: ₹6,000–₹10,000 per person (Sudder Street guesthouses ₹600–₹1,000/night, street food ₹200–₹400/day, Metro ₹50–₹100/day). Mid-range: ₹15,000–₹25,000. Kolkata is the cheapest major city in India — 30–40% less than Delhi or Mumbai." },
                { q: "Is Kolkata safe for solo travellers?", a: "Yes — one of India's safer major cities. The para (neighbourhood) culture means locals look out for each other. Solo women generally find it more relaxed than Delhi or Mumbai. Use the Metro — it's clean, safe, and efficient." },
                { q: "What is Durga Puja?", a: "India's greatest festival (5 days in October). The entire city transforms — thousands of pandals (themed temporary temples) are built, every neighbourhood holds celebrations. If you can visit during Puja, do. Book accommodation 3 months ahead. Prices triple." },
                { q: "How do I get around Kolkata?", a: "Metro is fastest (₹5–₹25/ride). Trams are atmospheric at ₹7 — world's cheapest transport. Yellow taxis for areas Metro doesn't reach (negotiate before boarding). Ola and Uber work throughout. For Dakshineswar, take the public ferry from Bagh Bazaar — ₹10–₹15, 20 minutes on the water." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">More India City Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Varanasi — 3 Day Ganga Aarti Guide", href: "/blog/varanasi-3-days" },
                { label: "Darjeeling — 4 Day Tea & Toy Train", href: "/blog/darjeeling-4-days" },
                { label: "Sundarbans — 3 Day Tiger Safari", href: "/blog/sundarbans-3-days" },
                { label: "Northeast India — 10 Day Circuit", href: "/blog/northeast-india-10-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View {"\u2192"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="kolkata-3-days" />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto px-6 md:px-8 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Kolkata trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-kolkata", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/kolkata-trip-cost-couple", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-kolkata", label: "How to get there", icon: "✈️" },
                { href: "/blog/kolkata-travel-tips", label: "Travel tips", icon: "📋" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <RelatedGuides currentSlug="kolkata-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
