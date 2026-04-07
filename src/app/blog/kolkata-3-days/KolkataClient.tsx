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
import Breadcrumb from "@/components/blog/Breadcrumb";

const KOLKATA_TOC = [
  { id: "decision",       emoji: "⚡",  label: "1 Day vs 3 Days vs Week?" },
  { id: "neighbourhoods", emoji: "🗺️",  label: "The City by Area" },
  { id: "itinerary",      emoji: "📅",  label: "3-Day Itinerary" },
  { id: "budget",         emoji: "💰",  label: "Budget Breakdown" },
  { id: "food",           emoji: "🍛",  label: "Food Guide" },
  { id: "mistakes",       emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",           emoji: "💡",  label: "Pro Tips" },
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
      <div
        className="h-full bg-gold transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── Share Button ──────────────────────────────────────────────────────────────
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
          href: `mailto:?subject=Kolkata 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Kolkata in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed"
              >
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">{"●"}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">{"💰"}</span>
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

// ── FAQ Item accordion ────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span
          className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
        >
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
            fill
            className="object-cover"
            priority
            sizes="100vw"
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
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  East India
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kolkata in 3 Days: Howrah, Victoria & the Real City
                <em className="italic text-gold-light"> (The Guide Nobody Writes)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                India&apos;s most literary, cheapest and most underrated city. Flower market at 4:30am, colonial grandeur, idol workshops, and street food that will make you rethink everything you know about Indian cuisine.
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
              <span>{"🇮🇳"} India</span>
              <span>{"·"}</span>
              <span>{"🗓"} 3 Days</span>
              <span>{"·"}</span>
              <span>{"💰"} From ₹2,000/day</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Kolkata is the city that rewards the curious and punishes the indifferent. It is India&apos;s cheapest major city, its most intellectual, arguably its greatest food city — and the least visited of India&apos;s big four. Most people who come for two days as a stopover leave wishing they had stayed a week. This guide makes sure you don&apos;t waste it.
            </p>
          </blockquote>

          {/* ── DECISION ── */}
          <section id="decision" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} 1 Day vs 3 Days vs a Week?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Kolkata is not a city you rush. Here&apos;s how to match your time to what you actually want.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  duration: "1 Day",
                  emoji: "⚡",
                  best: "Layover or very limited time",
                  do: "Howrah Bridge dawn, Victoria Memorial, one meal at Bhojohori Manna",
                  miss: "Everything that makes Kolkata Kolkata — the paras, the food culture, Kumartuli",
                  color: "border-amber-200 bg-amber-50",
                  th: "text-amber-800",
                },
                {
                  duration: "3 Days",
                  emoji: "📅",
                  best: "This guide — the right amount",
                  do: "Flower market, Victoria, Kumartuli, College Street, Dakshineswar, Park Street, proper food tour",
                  miss: "Sundarbans day trip, deeper neighbourhood walks",
                  color: "border-teal-200 bg-teal-50",
                  th: "text-teal-800",
                },
                {
                  duration: "5–7 Days",
                  emoji: "🗺️",
                  best: "Slow travellers, culture seekers",
                  do: "Everything above plus Sundarbans mangrove day trip, local adda culture, Durga Puja pandal-hopping (if Oct)",
                  miss: "Nothing — you&apos;ll leave full",
                  color: "border-purple-200 bg-purple-50",
                  th: "text-purple-800",
                },
              ].map((t) => (
                <div key={t.duration} className={`rounded-xl border p-5 ${t.color}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{t.emoji}</span>
                    <h3 className={`font-serif text-lg font-normal ${t.th}`}>{t.duration}</h3>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-medium text-ink/80">Best for: </span>
                      <span className="text-muted font-light">{t.best}</span>
                    </div>
                    <div>
                      <span className="font-medium text-ink/80">You&apos;ll do: </span>
                      <span className="text-muted font-light">{t.do}</span>
                    </div>
                    <div>
                      <span className="font-medium text-ink/80">You&apos;ll miss: </span>
                      <span className="text-muted font-light">{t.miss}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Best time to visit:</strong> October–February (25–32°C, pleasant). October during Durga Puja is extraordinary but intensely crowded. March–April is hot. May–September brings brutal heat and monsoon — avoid unless you love the atmospheric downpours.
              </p>
            </div>
          </section>

          {/* ── NEIGHBOURHOODS ── */}
          <section id="neighbourhoods" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"🗺️"} The City by Area</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Kolkata is a city of distinct neighbourhoods — paras — each with its own personality. Understanding the geography saves you hours.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                {
                  title: "Central Kolkata (B.B.D. Bagh area)",
                  emoji: "🏛️",
                  bg: "bg-amber-50 border-amber-200",
                  th: "text-amber-800",
                  rows: [
                    ["Where", "Howrah Bridge, Victoria Memorial, Maidan"],
                    ["Best for", "Colonial architecture, first-day orientation"],
                    ["Stay", "Sudder Street area (backpacker hub, ₹600–₹2,000)"],
                    ["Vibe", "Grand, spacious, historic — but tourist-heavy"],
                  ],
                  note: "This is the postcard Kolkata. Beautiful but not where the real city lives.",
                },
                {
                  title: "North Kolkata (Shyambazar / Kumartuli)",
                  emoji: "🎨",
                  bg: "bg-teal-50 border-teal-200",
                  th: "text-teal-800",
                  rows: [
                    ["Where", "Kumartuli, College Street, Shyambazar"],
                    ["Best for", "Idol workshops, book market, old havelis"],
                    ["Stay", "Not many hotels — day-trip from central"],
                    ["Vibe", "Crumbling grandeur, intellectual soul, genuinely Bengali"],
                  ],
                  note: "Kumartuli is where thousands of clay Durga idols are made year-round. Surreal and beautiful.",
                },
                {
                  title: "South Kolkata (Ballygunge / Kalighat)",
                  emoji: "🌿",
                  bg: "bg-green-50 border-green-200",
                  th: "text-green-800",
                  rows: [
                    ["Where", "Kalighat, Ballygunj, Gariahat Market"],
                    ["Best for", "The real middle-class Kolkata, Kali temple"],
                    ["Stay", "More residential — some boutique options"],
                    ["Vibe", "Quiet, tree-lined, neighbourhood-feel, less touristy"],
                  ],
                  note: "Gariahat is where Kolkata actually shops. Zero tourists, excellent street food.",
                },
                {
                  title: "Park Street & Chowringhee",
                  emoji: "🍽️",
                  bg: "bg-rose-50 border-rose-200",
                  th: "text-rose-800",
                  rows: [
                    ["Where", "Park Street, Chowringhee Road"],
                    ["Best for", "Dining, bars, colonial-era restaurants"],
                    ["Stay", "Mid-range and luxury hotels concentrated here"],
                    ["Vibe", "Cosmopolitan, social, Old Calcutta meets modern"],
                  ],
                  note: "Peter Cat, Flury's, and the South Park Street Cemetery are all here. Kolkata&apos;s social spine.",
                },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-base font-normal mb-3 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>
                    {area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-14 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">
                    {"⚠️"} {area.note}
                  </p>
                </div>
              ))}
            </div>

            {/* Getting to Kolkata */}
            <div className="bg-parchment border border-parchment-2 rounded-xl p-5">
              <h3 className="font-serif text-base text-ink mb-3">Getting to &amp; Around Kolkata</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {[
                  { icon: "✈️", label: "By Air", val: "Netaji Subhas Chandra Bose Airport (CCU) — well connected to all major Indian cities and international routes. 45–60 min to city centre by metro or taxi." },
                  { icon: "🚂", label: "By Train", val: "Howrah and Sealdah stations are two of India&apos;s biggest railway hubs. Multiple daily trains from Delhi, Mumbai, Chennai, Bengaluru." },
                  { icon: "🚇", label: "Metro", val: "Clean, fast, ₹5–25/ride. Best way to get around. Covers most major areas. Blue and Green lines most useful for visitors." },
                  { icon: "🚋", label: "Trams", val: "₹7 — world&apos;s cheapest public transport and Asia&apos;s oldest tram network (still running). Slow but atmospheric. Take one just for the experience." },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-2.5">
                    <span className="text-base flex-shrink-0">{item.icon}</span>
                    <div>
                      <span className="font-medium text-ink">{item.label}: </span>
                      <span className="text-muted font-light">{item.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"🗓"} label="Duration" value="3 Days" />
            <StatCard icon={"💰"} label="Budget From" value="₹2,000/day" />
            <StatCard icon={"🌡"} label="Best Months" value="Oct – Feb" />
            <StatCard icon={"🚇"} label="Metro Fare" value="₹5–25" />
          </div>

          {/* ── ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"📅"} 3-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Three days structured around Kolkata&apos;s natural rhythms — start early (the city is a morning city), pace yourself, and eat constantly.
            </p>

            <div className="space-y-4">
              {/* Day 1 */}
              <DayCard
                day="Day 1"
                title="Colonial Kolkata — Flower Market to Princep Ghat"
                items={[
                  "4:30am: Mullick Ghat Flower Market beneath Howrah Bridge — 2,000+ vendors, marigolds stacked to the ceiling, extraordinary atmosphere before dawn. Worth every second of the early start. Free to walk through.",
                  "6am: Walk across Howrah Bridge (Rabindra Setu) at sunrise — the cantilever is held together entirely by rivets, no nuts or bolts. The light on the Hooghly River at dawn is one of India&apos;s great photographic moments.",
                  "8am: Breakfast at Anadi Cabin near B.B.D. Bagh — old-school Kolkata breakfast joint, luchi with aloo dum (₹60–80). Unchanged since the 1940s, regulars bring their newspapers.",
                  "9am: Victoria Memorial — the white marble Indo-Saracenic monument built 1906–1921 by Lord Curzon. Go before 10am to beat the crowds and heat. Entry ₹30 Indians / ₹500 foreigners, museum extra ₹100/₹200. Gardens are beautiful.",
                  "11:30am: Walk the Maidan — the massive open green south of Victoria. Cricket matches, morning walkers, colonial race course. Eden Gardens cricket stadium is on the northern edge.",
                  "1pm: Lunch at Indian Coffee House, College Street (1st floor) — unchanged since the 1940s, adda culture at its purest. Waiters in white uniforms and turbans. Order the egg roll and coffee. This place is irreplaceable.",
                  "2:30pm: Explore College Street (Boi Para) — the largest second-hand book market in the world. Thousands of volumes stacked along the street. Even non-readers find it extraordinary.",
                  "4pm: Kumartuli — the neighbourhood where artisans make Durga Puja idols year-round. Clay sculptures in various states of completion, workshop after workshop. Hire a local guide (₹200–₹300) for context. Free to walk.",
                  "6:30pm: Princep Ghat at sunset — the beautiful colonial-era ghat on the Hooghly that locals use for evening walks. Boat rides available (₹50–₹100). One of Kolkata&apos;s best-kept secrets from tourists.",
                  "8pm: Dinner at Bhojohori Manna (Elgin Road or Hindustan Park branch) — Bengali thali done properly. Dal, fish curry, rice, chutney, mishti doi. ₹300–₹500 per person.",
                ]}
                cost="₹800–₹1,500 per person (excluding accommodation)"
              />

              {/* Day 2 */}
              <DayCard
                day="Day 2"
                title="Spiritual + Neighbourhood Kolkata — Kalighat to Park Street"
                items={[
                  "8am: Kalighat Kali Temple — the original Kali temple that Kolkata is named after. Active, chaotic, intensely alive. Respectful visitor etiquette: dress modestly, move with the flow, no camera inside sanctum. Free entry (prasad donation expected). Near Kalighat metro.",
                  "10am: Ballygunj neighbourhood walk — tree-lined residential streets, old Bengali mansions, morning markets. The real South Kolkata that has no tourist agenda.",
                  "11:30am: Gariahat Market — where actual Kolkatans shop. Sarees, trinkets, fish, vegetables. Excellent phuchka stalls outside. Zero tourists, excellent atmosphere.",
                  "1pm: Lunch at Peter Cat (Park Street) — the legendary chelo kebab (Iranian-origin rice dish with kebabs). An institution since 1975. Budget ₹600–₹900 for two. Book ahead on weekends.",
                  "3pm: South Park Street Cemetery (1767) — one of the oldest British cemeteries in India. Overgrown, melancholy, beautiful. Enormous obelisk tombs and Gothic monuments. Strangely peaceful. Free entry.",
                  "4:30pm: Flury&apos;s tea room (Park Street, since 1927) — the Swiss patisserie that Calcutta&apos;s elite has frequented since colonial times. Tea and pastries in a time capsule. ₹400–₹600 for two.",
                  "6pm: New Market (Hogg Market) — colonial covered market built 1874. Spices, leather goods, textiles, everything. Worth an hour of wandering.",
                  "8:30pm: Park Street evening — Kolkata&apos;s most social street comes alive after dark. Bars and restaurants along the stretch. Blue &amp; Beyond rooftop for a drink with views if budget allows.",
                ]}
                cost="₹1,000–₹2,000 per person (excluding accommodation)"
              />

              {/* Day 3 */}
              <DayCard
                day="Day 3"
                title="River + North Kolkata — Dakshineswar to a Farewell Dinner"
                items={[
                  "8am: Take the ferry from Bagh Bazaar Ghat to Dakshineswar (₹10–₹15 one way) — the Hooghly river crossing is itself part of the experience. 20–30 minutes on the water.",
                  "9am: Dakshineswar Kali Temple — the 12km-north riverside temple where Ramakrishna had his visions. Extraordinary spiritual atmosphere, especially early morning. Free entry. Spend an hour.",
                  "10:30am: Belur Math — cross the river (short ferry or walk across the bridge) to the Ramakrishna Mission headquarters. Serene monastery with architecture that synthesises Hindu, Christian, and Islamic elements. Free, peaceful, remove shoes. One of Kolkata&apos;s most underrated places.",
                  "12:30pm: Return toward central Kolkata. Lunch in the Shyambazar area — Golbari restaurant for kosha mangsho (slow-cooked mutton since 1918). The queue is the endorsement. ₹200–₹350 per person.",
                  "2:30pm: Explore North Kolkata havelis — the crumbling 18th-century mansions of Sovabazar and Jorasanko. Jorasanko Thakur Bari (Tagore family home) has a museum. ₹30 entry.",
                  "4:30pm: Rabindra Sarobar lake walk — the large artificial lake in South Kolkata. Local families, evening walkers, peaceful. The rowing club has been here since 1928.",
                  "7pm: Farewell dinner at Kewpie&apos;s (Elgin Lane) — the gold standard for home-style Bengali cooking. Run by Rakhi Dasgupta, it serves traditional recipes that restaurants rarely attempt. Book ahead. ₹600–₹900 per person. One of Kolkata&apos;s great dining experiences.",
                ]}
                cost="₹900–₹1,800 per person (excluding accommodation)"
              />
            </div>
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"💰"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"💰"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">{"🏨"} Mid-Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏠 Accommodation (3N)", "₹1,800–₹3,000 (Sudder St guesthouse ₹600–₹1,000)", "₹9,000–₹18,000 (3★–4★ hotel)"],
                    ["🍽 Food & Drinks", "₹600–₹1,200 (street food + local meals)", "₹3,000–₹6,000 (restaurants)"],
                    ["🚇 Transport", "₹150–₹300 (metro + tram + auto)", "₹500–₹1,200 (Ola/Uber + metro)"],
                    ["🎯 Activities & Entry", "₹200–₹500 (Victoria + Jorasanko)", "₹600–₹1,500 (guides + entries)"],
                    ["🛍 Shopping", "₹200–₹500 (books, mishti, spices)", "₹2,000–₹5,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 3 days)</td>
                    {["₹4,500–₹7,500", "₹12,000–₹21,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">
                        {v}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800 font-light leading-relaxed">
                <strong className="font-medium">Kolkata affordability note:</strong> Kolkata is the cheapest major city in India — consistently 30–40% less than Delhi or Mumbai for equivalent quality of accommodation, food, and services. ₹2,000/day is genuinely comfortable for a budget traveller here. Street food is world-class and often costs ₹20–₹80 per item.
              </p>
            </div>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Kolkata"
            hotels={[
              {
                name: "Floatel Kolkata",
                type: "Boutique · Floating Hotel on Hooghly",
                price: "From ₹4,500/night",
                rating: "4",
                badge: "Unique stay",
                url: "https://www.booking.com/hotel/in/floatel-kolkata.html?aid=2820480",
              },
              {
                name: "The Oberoi Grand",
                type: "Heritage Luxury · Chowringhee",
                price: "From ₹12,000/night",
                rating: "5",
                badge: "Heritage luxury",
                url: "https://www.booking.com/hotel/in/the-oberoi-grand-kolkata.html?aid=2820480",
              },
              {
                name: "Sudder Street Guesthouses",
                type: "Budget · Backpacker Hub",
                price: "From ₹600/night",
                rating: "3",
                badge: "Budget pick",
                url: "https://www.booking.com/searchresults.html?city=-2082628&aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Kolkata Heritage Walking Tour",
                duration: "4 hours",
                price: "From ₹800/person",
                badge: "Best seller",
                url: "https://www.getyourguide.com/s/?q=kolkata&partner_id=PSZA5UI",
              },
              {
                name: "Kolkata Food Tour — Street Food & Markets",
                duration: "3 hours",
                price: "From ₹1,200/person",
                badge: "Food lovers",
                url: "https://www.getyourguide.com/s/?q=kolkata+food&partner_id=PSZA5UI",
              },
              {
                name: "Hooghly River Sunset Cruise",
                duration: "2 hours",
                price: "From ₹600/person",
                url: "https://www.getyourguide.com/s/?q=kolkata+river&partner_id=PSZA5UI",
              },
              {
                name: "Durga Puja Pandal Tour (Oct only)",
                duration: "Half day",
                price: "From ₹900/person",
                url: "https://www.getyourguide.com/s/?q=kolkata+durga+puja&partner_id=PSZA5UI",
              },
            ]}
            pdfProductId="kolkata-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Kolkata — Must-See Places"
            subtitle="Click each thumbnail to explore Kolkata&apos;s iconic landmarks, hidden neighbourhoods and living culture."
            spots={[
              {
                name: "Howrah Bridge",
                query: "howrah bridge kolkata hooghly river cantilever steel west bengal india sunrise",
                desc: "The 705-metre cantilever bridge held together entirely by rivets — no nuts, no bolts. Built 1943, carries 100,000+ vehicles daily. Dawn and dusk are the best times. Beneath it: the Mullick Ghat flower market.",
              },
              {
                name: "Victoria Memorial",
                query: "victoria memorial kolkata calcutta white marble colonial monument west bengal",
                desc: "The white Makrana marble monument built 1906–1921 by Lord Curzon. Indo-Saracenic architecture at its grandest. The museum inside holds extraordinary colonial-era artefacts. Sound and light show evenings.",
              },
              {
                name: "Mullick Ghat Flower Market",
                query: "mullick ghat flower market kolkata howrah bridge marigold vendors dawn calcutta",
                desc: "The largest flower market in Asia operates from 4am under Howrah Bridge. 2,000+ vendors, marigolds stacked ten feet high, extraordinary colour and chaos. One of India&apos;s great early morning experiences.",
              },
              {
                name: "Kumartuli",
                query: "kumartuli kolkata idol workshop durga puja clay sculpture artisan west bengal",
                desc: "The neighbourhood where Durga Puja idols are made year-round. Clay figures in every state of completion — armatures, rough forms, half-painted deities. Surreal, beautiful, and entirely unlike anything else in India.",
              },
              {
                name: "College Street",
                query: "college street kolkata book market boi para second hand books intellectual bengal",
                desc: "The world&apos;s largest second-hand book market. Thousands of volumes line the pavements. Indian Coffee House on the first floor at 15 Bankim Chatterjee Street — where generations of Bengal&apos;s intellectuals have held adda since the 1940s.",
              },
            ]}
          />

          {/* ── FOOD SECTION IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="kati roll kolkata street food calcutta india bengal snack flatbread"
              alt="Kati roll being made at a street stall in Kolkata"
              width={860}
              height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The kati roll — Kolkata&apos;s gift to the world. Nizam&apos;s in Park Circus invented it in 1932. Egg, chicken or mutton wrapped in a flaky paratha. ₹60–₹180.
              </p>
            </div>
          </div>

          {/* ── FOOD GUIDE ── */}
          <section id="food" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"🍛"} Food Guide — Kolkata&apos;s Crown Jewel</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Many serious food people argue Kolkata is India&apos;s greatest food city. This is not hyperbole. The street food culture, the fish traditions, the sweets, the colonial-era restaurants — no other Indian city has this range at this price.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  category: "Street Food (Must)",
                  emoji: "🥙",
                  color: "bg-amber-50 border-amber-200",
                  th: "text-amber-800",
                  items: [
                    ["Kati Roll", "Nizam&apos;s (Park Circus, original), Kusum Roll (Park Street) — egg + chicken + mutton. ₹80–₹180."],
                    ["Phuchka", "Dacres Lane street stalls — tamarind water version, sharper and more complex than Mumbai pani puri. ₹30–₹50 for 6."],
                    ["Luchi + Aloo Dum", "Morning staple at any para-r dokan (neighbourhood shop). Fried puri with spiced potato. ₹40–₹60."],
                    ["Chai in Kulhar", "₹10–₹15 from any roadside stall in an unglazed clay cup. Throw it on the ground after — the tradition."],
                  ],
                },
                {
                  category: "Restaurants (Must)",
                  emoji: "🍽️",
                  color: "bg-teal-50 border-teal-200",
                  th: "text-teal-800",
                  items: [
                    ["Bhojohori Manna", "Bengali thali — dal, fish curry, rice, chutney, mishti doi. Multiple locations. ₹300–₹500. The comfort food standard."],
                    ["Golbari, Shyambazar", "Kosha mangsho (slow-cooked mutton) since 1918. The queue outside at lunch is the review. ₹200–₹350."],
                    ["Peter Cat, Park Street", "Chelo kebab (Iranian-origin rice + kebab). An institution since 1975. ₹600–₹900 for two."],
                    ["Kewpie&apos;s", "Home-style Bengali cooking by Rakhi Dasgupta. Recipes rarely attempted in restaurants. Book ahead. ₹600–₹900."],
                  ],
                },
                {
                  category: "Sweets (Essential)",
                  emoji: "🍮",
                  color: "bg-rose-50 border-rose-200",
                  th: "text-rose-800",
                  items: [
                    ["Rosogolla", "KC Das (oldest, Park Street) for the authentic version. Soft, syrup-soaked, served cold. ₹20–₹30 each."],
                    ["Mishti Doi", "Fermented sweetened yogurt in earthen pots. Available everywhere. ₹30–₹50. Try with a meal."],
                    ["Sandesh", "Pure chenna sweet, less sweet than typical Indian mithai. Balaram Mullick & Radharaman Mullick is the best."],
                    ["Jhal Muri", "Puffed rice tossed with mustard oil, green chilli, onion, cucumber. ₹20. Snack of the streets."],
                  ],
                },
                {
                  category: "Colonial-Era Institutions",
                  emoji: "☕",
                  color: "bg-purple-50 border-purple-200",
                  th: "text-purple-800",
                  items: [
                    ["Indian Coffee House", "College Street, 1st floor. Adda culture since 1940s. Order the egg roll and filter coffee. ₹100–₹150 for two."],
                    ["Flury&apos;s", "Park Street since 1927. Swiss patisserie, afternoon tea, pastries. ₹400–₹600 for two. Time capsule."],
                    ["Mocambo", "Park Street. Continental food, old European-style. Devilled crab is legendary. ₹800–₹1,400 for two."],
                    ["Trinca&apos;s", "Park Street. Live music evenings, been here since the 1950s. Finger chips and chicken tikka. ₹600–₹1,000."],
                  ],
                },
              ].map((section) => (
                <div key={section.category} className={`rounded-xl border p-5 ${section.color}`}>
                  <h3 className={`font-serif text-base font-normal mb-3 flex items-center gap-2 ${section.th}`}>
                    <span>{section.emoji}</span>
                    {section.category}
                  </h3>
                  <div className="space-y-2.5">
                    {section.items.map(([name, desc]) => (
                      <div key={name} className="text-xs">
                        <span className="font-medium text-ink/80">{name}: </span>
                        <span className="text-muted font-light">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Fish in Kolkata:</strong> Bengalis eat fish the way Italians eat pasta — daily, seriously, with strong opinions about varieties. Hilsa (ilish) is the prestige fish, best July–October. Rohu is the everyday fish. If you eat fish, order it at every meal. The fish curry + rice combinations at local restaurants are some of the best food in India.
              </p>
            </div>
          </section>

          {/* ── VICTORIA IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="victoria memorial kolkata calcutta reflection pool gardens morning white marble"
              alt="Victoria Memorial reflected in the pool, Kolkata morning"
              width={860}
              height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Victoria Memorial — arrive before 10am. The morning light on white Makrana marble is extraordinary, and you avoid the midday crowds and heat entirely.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🏙️",
                  title: "Only doing tourist sites and missing the paras",
                  desc: "Kolkata&apos;s real life is in its neighbourhoods. A morning walk in Ballygunj, a tram ride through Bhowanipur, chai at a para-r dokan — this is what the city actually is. Don&apos;t spend all your time at Victoria Memorial.",
                },
                {
                  icon: "⏰",
                  title: "Missing Mullick Ghat flower market",
                  desc: "The 4:30am wake-up is brutal, but this is one of the great travel experiences in India. 2,000 vendors, mountains of marigolds, the Howrah Bridge looming above in the half-dark. You will never forget it.",
                },
                {
                  icon: "☀️",
                  title: "Visiting Victoria Memorial at noon",
                  desc: "Heat plus crowds — the worst combination. Go at 9am when the gardens are cool and the marble is at its best in morning light. The museum is worth 90 minutes inside.",
                },
                {
                  icon: "🍽️",
                  title: "Eating only at restaurants",
                  desc: "Kolkata&apos;s street food is where the real cooking happens. Phuchka at Dacres Lane, luchi at a neighbourhood shop, jhal muri by the lake — these are ₹20–₹80 experiences that outclass most restaurant meals.",
                },
                {
                  icon: "🏃",
                  title: "Rushing Kolkata",
                  desc: "More than any Indian city, Kolkata rewards slow travel. Sit in Indian Coffee House for two hours. Let a conversation with a stranger unfold. The city opens up to those who aren&apos;t in a hurry.",
                },
                {
                  icon: "🚗",
                  title: "Trying to drive everywhere",
                  desc: "Kolkata&apos;s traffic is dense. The metro covers most major areas in 10–20 minutes for ₹15. Use it whenever possible. Yellow taxis have AC but charge more — agree the fare before getting in.",
                },
                {
                  icon: "☕",
                  title: "Skipping Indian Coffee House",
                  desc: "Indian Coffee House at College Street (1st floor) is one of the last unchanged adda spaces in the city. The conversations you overhear — or join — are part of what Kolkata means. It&apos;s irreplaceable and costs ₹50.",
                },
              ].map((m) => (
                <TipCard
                  key={m.title}
                  icon={m.icon}
                  title={m.title}
                  desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors"
                />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"💡"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌸",
                  title: "The Flower Market Changes Everything",
                  desc: "Mullick Ghat at 4:30–5am is not a tourist attraction — it is a working wholesale flower market. Move respectfully, don&apos;t obstruct vendors, and you will have access to something extraordinary. Sunrise on Howrah Bridge immediately after.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚋",
                  title: "Take at Least One Tram Ride",
                  desc: "Kolkata&apos;s trams are Asia&apos;s oldest (still running) and the world&apos;s cheapest public transport at ₹7. They are slow, beautiful, and atmospheric. Take the Esplanade–Shyambazar route at least once.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "⛴️",
                  title: "Use the Hooghly Ferries",
                  desc: "The public ferries crossing the Hooghly are ₹10–₹15 and one of the city&apos;s best experiences. The Bagh Bazaar to Dakshineswar crossing gives you the river approach to the temple that road access cannot.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "📚",
                  title: "College Street for Books & Conversation",
                  desc: "Even if you read nothing, College Street is worth 2 hours. The density of intellectual life — bookshops, photocopying stalls, students, tea sellers — is unlike anywhere else in India. Ask a bookseller what they recommend.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎭",
                  title: "Durga Puja is India&apos;s Greatest Festival",
                  desc: "If you visit in October, book accommodation 3 months ahead — prices triple. The pandals (temporary temples) are extraordinary works of art, often themed and lit spectacularly. The city does not sleep for 5 days.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🏳️‍🌈",
                  title: "India&apos;s Most Progressive Major City",
                  desc: "Kolkata held India&apos;s first Pride parade in 1999. Park Street and South Kolkata have a relatively open and accepting social atmosphere compared to most Indian cities. The literary and artistic community here has always been more socially progressive.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">
              Free Service
            </span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group and budget — we&apos;ll send a personalised Kolkata itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Kolkata Trip {"→"}
              </button>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors"
              >
                Plan My Trip {"→"}
              </a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days are enough for Kolkata?",
                  a: "3 days is ideal — enough to cover Howrah Bridge, Victoria Memorial, Kumartuli, College Street, Dakshineswar and the essential food experiences. 2 days works for highlights only. 4–5 days lets you go deeper into neighbourhoods and day-trip to the Sundarbans mangroves.",
                },
                {
                  q: "What is the best time to visit Kolkata?",
                  a: "October to February is the best time (25–32°C, pleasant). October during Durga Puja is extraordinary but intensely crowded and expensive. November–February is the sweet spot. March–April is hot. May–September brings brutal heat and monsoon — avoid unless you want the atmospheric downpours.",
                },
                {
                  q: "How much does a 3-day Kolkata trip cost?",
                  a: "Budget: ₹4,500–₹7,500 per person including accommodation (Sudder Street guesthouses ₹600–₹1,000/night, street food ₹200–₹400/day, metro ₹50–₹100/day). Mid-range: ₹12,000–₹21,000. Kolkata is the cheapest major city in India — 30–40% less than Delhi or Mumbai for equivalent quality.",
                },
                {
                  q: "Is Kolkata safe for solo travellers?",
                  a: "Yes, Kolkata is one of India&apos;s safer major cities. The para culture — strong neighbourhood community life — means locals look out for each other. Solo women travellers generally find it more relaxed than Delhi or Mumbai. Use the metro, which is clean, safe and very efficient.",
                },
                {
                  q: "What is Durga Puja and should I plan my trip around it?",
                  a: "Durga Puja (October, 5 days) is India&apos;s greatest festival — the entire city transforms, thousands of elaborately themed temporary temples (pandals) are built, and every neighbourhood holds celebrations. If you can visit in October, do. Book accommodation 3 months ahead and expect prices to triple.",
                },
                {
                  q: "How do I get around Kolkata?",
                  a: "Metro is the best option (₹5–25/ride, clean, fast, safe). Trams are atmospheric at ₹7 — world&apos;s cheapest transport. Yellow taxis cover areas the metro doesn&apos;t (negotiate before you get in). Ola and Uber work throughout. For Dakshineswar, the public ferry from Bagh Bazaar Ghat (₹10–₹15) is the best way.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">More India City Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Mysore — 3 Day Heritage Guide", href: "/blog/mysore-3-days", soon: false },
                { label: "Goa — 3 Day Beach Guide", href: "/blog/goa-3-days", soon: false },
                { label: "Assam Tea Garden Circuit", href: "/blog/assam-tea-garden-3-days", soon: false },
                { label: "Browse All India Guides", href: "/#packages", soon: false },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
                >
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">
                    {link.label}
                  </span>
                  <span className="text-xs text-muted">
                    {link.soon ? "Coming Soon →" : "View →"}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="kolkata-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
