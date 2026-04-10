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
import { usePageUrl } from "@/lib/hooks";

const MANGALORE_TOC = [
  { id: "decision",   emoji: "⚡",  label: "Which Traveller Are You?" },
  { id: "highlights", emoji: "🌊",  label: "Why Mangalore?" },
  { id: "itinerary",  emoji: "📅",  label: "2-Day Itinerary" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "food",       emoji: "🍛",  label: "Tulu Food Guide" },
  { id: "beaches",    emoji: "🏖️",  label: "Beaches & Coast" },
  { id: "mistakes",   emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "💡",  label: "Pro Tips" },
  { id: "faq",        emoji: "❓",  label: "FAQ" },
];

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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Mangalore 2-Day Guide&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Mangalore in 2 Days — Kori Rotti, Bejai Fish Market & St. Mary's Islands&url=${pageUrl}` },
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

function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-lg font-light text-ink">{value}</p>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}

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
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">●</span>
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

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
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

export default function MangaloreClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MANGALORE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Mangalore" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="mangalore coastal karnataka india beach arabian sea"
            alt="Mangalore coastal Karnataka India Arabian Sea beach"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Mangalore 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  South India
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">9 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Mangalore in 2 Days: Kori Rotti, Bejai Fish Market & St. Mary&apos;s Islands
                <em className="italic text-gold-light"> (Complete Guide)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Coastal Karnataka&apos;s most honest city — world-class Tulu-Konkani cuisine, 88-million-year-old basalt rock islands, and a 6am fish market that&apos;s the beating heart of the town. Budget from ₹3,000.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇮🇳 Karnataka, India</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹3,000</span>
            </div>
          </div>

          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Mangalore is not a beach resort — it is a working port city with one of the most distinctive food cultures in India. Neer dosa, Kane fry, Kori Rotti, Mangalore Buns — dishes you simply cannot eat anywhere else. The beaches are secondary. The fish market at 6am is the real Mangalore.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Traveller Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Choose your focus for 48 hours in Mangalore.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { emoji: "🍛", label: "Food Pilgrim", sub: "₹1,500–₹2,500/day", desc: "Bejai fish market dawn + Kori Rotti lunch + neer dosa breakfast + Mangalore Buns", color: "border-amber-200 hover:border-amber-400", id: "food" },
                { emoji: "🏖️", label: "Beach & Heritage", sub: "₹2,000–₹3,500/day", desc: "Kadri Temple, Sultan Battery, Tannirbhavi Beach, Malpe + St. Mary's Islands ferry", color: "border-teal-200 hover:border-teal-400", id: "beaches" },
                { emoji: "🌊", label: "Full Coastal Circuit", sub: "₹3,000–₹5,000/day", desc: "All of the above + Udupi Krishna Temple + Manipal", color: "border-emerald-200 hover:border-emerald-400", id: "itinerary" },
              ].map((p) => (
                <button key={p.label} onClick={() => document.getElementById(p.id)?.scrollIntoView({ behavior: "smooth" })}
                  className={`p-4 rounded-xl border-2 border-parchment-2 bg-white hover:shadow-md transition-all duration-200 text-center group ${p.color}`}>
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-amber-700 mt-0.5 font-medium">{p.sub}</p>
                  <p className="text-[0.65rem] text-muted mt-1 font-light">{p.desc}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── WHY MANGALORE ── */}
          <section id="highlights" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🌊 Why Mangalore?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Mangalore (officially Mangaluru) sits at the mouth of the Netravathi and Gurupur rivers on the Arabian Sea coast. It is the cultural capital of Tulu Nadu — the coastal region of Karnataka with its own ancient language (Tulu) distinct from Kannada. The Mangalorean Catholic community, the Tulu Brahmin tradition, and the Bunt community each brought their food culture into one of India&apos;s most layered coastal cuisines.
            </p>
            <div className="space-y-3">
              {[
                { name: "Bejai Fish Market", detail: "The best 6am activity in Mangalore. The market opens at 4:30am and peaks between 5:30–8am — massive variety of Coastal Karnataka fish, crabs, prawns, and seafood hauled in overnight. Not a tourist attraction — an active wholesale market. Arrive early, walk the aisles, and watch the city do its most important business.", tag: "Must-See", color: "border-amber-200 bg-amber-50" },
                { name: "Kadri Mangaladevi Temple (3km)", detail: "1,000-year-old temple with a rare early Vajrayana Buddhist bronze Manjunatha statue — one of the earliest Buddhist figures converted into a Hindu temple setting. The temple complex is active and large. Free entry.", tag: "Temple", color: "border-orange-200 bg-orange-50" },
                { name: "Sultan Battery", detail: "Tipu Sultan's 18th-century watchtower on the Gurupur riverbank near the New Mangalore Port. Three-storey laterite tower with excellent Arabian Sea views. Free entry. Small but historically significant.", tag: "Heritage", color: "border-blue-200 bg-blue-50" },
                { name: "St. Mary's Islands (65km north, via Malpe)", detail: "Hexagonal basalt columns 88 million years old formed during the Deccan Traps volcanic period. Vasco da Gama is believed to have landed here in 1498 before proceeding to Kozhikode. Ferry from Malpe harbour ₹200 return. 15 minutes by sea.", tag: "Geology", color: "border-purple-200 bg-purple-50" },
                { name: "Udupi Sri Krishna Temple (65km north)", detail: "The origin of the Udupi restaurant concept that spread across India. The temple runs a famous bhojan (free meals for devotees). The town has 30+ restaurants — all vegetarian, fierce competition keeps quality high.", tag: "Pilgrimage", color: "border-teal-200 bg-teal-50" },
                { name: "Tannirbhavi Beach (10km north)", detail: "The nearest clean beach to Mangalore city — a long, relatively uncrowded stretch with a mix of local and weekend visitors. Light House Hill Garden in the city centre is the best sunset viewpoint if you do not want to drive to the coast.", tag: "Beach", color: "border-emerald-200 bg-emerald-50" },
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
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="📅" label="Best Time" value="Nov – Feb" />
            <StatCard icon="🍛" label="Cuisine" value="Tulu/Konkani fusion" />
            <StatCard icon="🚂" label="From Bangalore" value="350km · 7hr train" />
            <StatCard icon="🏖️" label="Nearest Beach" value="10km" />
          </div>

          {/* ── 2-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The 2-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">
              Base yourself in central Mangalore. All distances are from city centre unless noted.
            </p>

            <DayCard
              day="Day 1"
              title="Temples, Old Port & Bejai Market · Evening Beach"
              items={[
                "5:30am: Bejai fish market (2km from city centre) — the most alive part of Mangalore morning. The market is at full intensity between 6–8am. Walk through the aisles: enormous prawns, crabs, mackerel, pomfret, Kane (ladyfish), and dozens of varieties you will not recognise. This is where restaurants and households buy their day's catch. The smell, sound, and pace of the market is a genuine sensory experience.",
                "8am: Breakfast — Mangalore Buns (sweet banana-stuffed deep-fried puri) at a local restaurant near the market area. This is a Mangalore-specific breakfast item not found reliably anywhere else. Cost ₹50–80 for a plate with coconut chutney.",
                "9am: Kadri Mangaladevi Temple (3km). Arrive when the morning puja is ending — the atmosphere is more relaxed after the main ritual crowd. The 1,000-year-old Manjunatha bronze statue here is historically significant as one of the few Vajrayana Buddhist bronzes that survived by being incorporated into a Hindu temple. Free entry, 45 minutes.",
                "11am: Sultan Battery watchtower (near New Mangalore Port, 6km). Tipu Sultan built this 18th-century laterite three-storey tower to watch for enemy ships on the Gurupur river mouth. The view from the top takes in the port, the river meeting the sea, and the Arabian Sea horizon. Free entry.",
                "1pm: Lunch — this is the main meal and the best opportunity for Kori Rotti. Go to Shri Krishna Boarding (near Hampankatta area) or Hema Hotel. Order Kori Rotti: the combination of Kori Gassi (coconut-based chicken curry) and Rotti (crispy dried rice wafers). Cost ₹150–200. This is Mangalore&apos;s most distinctive dish.",
                "3pm: Idgah Maidan area for Mangalorean Muslim cuisine exploration — beary biscuits (a Mangalorean speciality), halwa, and snacks specific to the Beary community.",
                "Evening: Tannirbhavi Beach (10km north, auto ₹80–100 one way) for 4:30–6pm. The beach is long and relatively clean. Alternatively, Light House Hill Garden (city centre, free) for a compact but scenic sunset viewpoint over the city and sea.",
                "Dinner: Neer Dosa at a local restaurant — thin, lacy, rice-flour crepe with coconut chutney and fish curry. A Mangalore staple. Cost ₹80–120 for a full meal.",
              ]}
              cost="₹600–₹1,000 (transport + meals + entry fees)" />

            <DayCard
              day="Day 2"
              title="Malpe Beach · St. Mary's Islands · Udupi Krishna Temple"
              items={[
                "7am: Depart Mangalore by bus or taxi to Malpe Beach (65km north, 1.5 hours by road). The coastal road via Udupi is scenic — paddy fields, coconut groves, and glimpses of the sea.",
                "9am: Arrive Malpe Beach. The largest beach in Karnataka — a long expanse of sand fronting a working fishing harbour. Watch the trawlers unloading their overnight catch at the harbour. The scale of Karnataka&apos;s fishing industry is visible from the dock.",
                "10am: Ferry to St. Mary&apos;s Islands from Malpe harbour (₹200 return per person, 15-minute crossing). The islands are famous for their hexagonal basalt columns — formed 88 million years ago during the Deccan Traps volcanic period when lava cooled in polygonal fracture patterns. The columns are massive: 2–4 metres high, perfectly hexagonal, covering the entire beach area of the main island. Geologically extraordinary and visually unlike anywhere else in India. Vasco da Gama is believed to have landed here in 1498 before continuing to Kozhikode. Allow 1.5 hours on the island.",
                "12:30pm: Return to Malpe, drive 3km to Udupi town. Lunch at one of the Udupi restaurants near the Krishna Temple — Udupi is the origin of the vegetarian South Indian restaurant tradition that spread across India. The local restaurants serve authentic Udupi cuisine: sambar, rasam, various curries, and fresh coconut-based chutneys. Cost ₹80–150.",
                "2pm: Udupi Sri Krishna Temple — the original. The temple has been managing large-scale free meals (bhojan) for pilgrims for centuries. The temple&apos;s organisation of mass feeding influenced the Udupi restaurant concept. The temple itself is beautifully maintained, the rituals continuous. Free entry.",
                "Optional: Manipal University area (5km from Udupi) — a modern campus town, vibrant, good coffee shops and bookstores. Different character from the rest of coastal Karnataka.",
                "4pm: Return to Mangalore (1.5 hours). For dinner: try Kane (ladyfish) fry at any good seafood restaurant — Kane is found only on the Karnataka and Goa coast, a delicate white fish with a crispy exterior when fried in the Mangalorean manner with semolina coating. Cost ₹200–300 for a full plate.",
              ]}
              cost="₹800–₹1,400 (transport + ferry + meals)" />

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mt-4">
              <span className="text-xs text-green-700 uppercase tracking-wide">Total 2-Day Cost (per person) · </span>
              <span className="font-serif text-base text-ink font-light">₹3,000–₹6,000 budget · ₹8,000–₹15,000 mid-range</span>
            </div>
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">🌾 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">🏔 Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-emerald-300 text-center">⭐ Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (2N)", "₹1,200–₹2,400 (₹600–1,200/night)", "₹3,600–₹6,000", "₹8,000–₹15,000"],
                    ["🍽 Food (2 days)", "₹600–₹900", "₹1,500–₹2,500", "₹3,000–₹5,000"],
                    ["🚌 Transport (local + Day 2 taxi)", "₹600–₹800", "₹1,200–₹2,000", "₹2,500–₹4,000"],
                    ["⛵ St. Mary's Islands ferry", "₹200", "₹200", "₹200"],
                    ["🎯 Entry fees", "₹0 (most are free)", "₹0", "₹0"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 2 days)</td>
                    {["₹2,600–₹4,300", "₹6,500–₹10,700", "₹13,700–₹24,200"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Most Mangalore attractions (Kadri Temple, Sultan Battery, beaches) are free. St. Mary&apos;s Islands ferry ₹200 return is the main paid activity. Food is the main expense and is excellent value — a full Kori Rotti meal at a local restaurant costs ₹150–200. Day 2 taxi to Malpe and Udupi (₹800–1,200 return) is the most efficient transport option.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Mangalore"
            hotels={[
              { name: "Hotel Goldfinch Mangalore", type: "Hotel · City Centre", price: "From ₹2,500/night", rating: "4", badge: "Top pick", url: "https://www.booking.com/searchresults.en-gb.html?ss=mangalore+hotel&aid=2820480" },
              { name: "Gateway Hotel Mangalore", type: "Hotel · Mangalore Old Port area", price: "From ₹4,500/night", rating: "5", badge: "Premium", url: "https://www.booking.com/searchresults.en-gb.html?ss=mangalore+luxury+hotel&aid=2820480" },
              { name: "Budget Hotel Hampankatta", type: "Hotel · City Centre", price: "From ₹600/night", rating: "3", badge: "Budget", url: "https://www.booking.com/searchresults.en-gb.html?ss=mangalore+budget+hotel&aid=2820480" },
            ]}
            activities={[
              { name: "Mangalore Coastal Food Walk", duration: "3 hours", price: "From ₹800/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=mangalore+food+tour&partner_id=PSZA5UI" },
              { name: "St. Mary's Islands Ferry Day Trip", duration: "Half day", price: "From ₹600/person", badge: "Unique", url: "https://www.getyourguide.com/s/?q=st+marys+islands+udupi&partner_id=PSZA5UI" },
              { name: "Udupi and Coastal Karnataka Full Day", duration: "Full day", price: "From ₹1,000/person", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=udupi+day+tour&partner_id=PSZA5UI" },
            ]}
            pdfProductId="mangalore-2-days-pdf"
          />

          {/* ── GALLERY ── */}
          <DestinationGallery
            title="Mangalore — Coast, Culture & Cuisine"
            subtitle="From basalt columns 88 million years old to a dawn fish market — Mangalore&apos;s most striking corners."
            spots={[
              { name: "St. Mary's Islands Basalt Columns", query: "st marys islands hexagonal basalt columns karnataka india geological", desc: "88-million-year-old hexagonal basalt columns formed during the Deccan Traps volcanic period. Vasco da Gama landed here in 1498. Ferry ₹200 return from Malpe harbour." },
              { name: "Bejai Fish Market", query: "bejai fish market mangalore dawn seafood coastal karnataka", desc: "The beating heart of Mangalore at 6am — a wholesale fish market with the full variety of Arabian Sea catch: Kane, pomfret, tiger prawns, crabs, and dozens more." },
              { name: "Malpe Beach", query: "malpe beach karnataka fishing harbour coast", desc: "The largest beach in Karnataka with a working fishing harbour. Base for the St. Mary's Islands ferry and a long stretch of relatively clean Arabian Sea coastline." },
              { name: "Kadri Temple", query: "kadri temple mangalore ancient bronze vajrayana buddhist", desc: "A 1,000-year-old temple housing a rare Vajrayana Buddhist bronze Manjunatha statue — evidence of the Buddhist heritage that predates the temple's Hindu conversion." },
              { name: "Udupi Krishna Temple", query: "udupi krishna temple karnataka pilgrimage south india", desc: "The original Udupi Sri Krishna Temple — source of the Udupi restaurant tradition that spread across India. Free entry, famous for its organised large-scale bhojan (pilgrim meals)." },
            ]}
          />

          {/* ── TULU FOOD GUIDE ── */}
          <section id="food" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍛 The Tulu-Konkani Food Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Mangalorean cuisine is one of India&apos;s most specific and underrated regional traditions. The Tulu community, the Mangalorean Catholics, and the Beary Muslims each brought distinct techniques that evolved on a shared coastal larder of Arabian Sea fish and coconut palms.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <h3 className="font-serif text-lg text-amber-800 mb-3">What to Eat — and Where</h3>
              <div className="space-y-3">
                {[
                  { name: "Kori Rotti", where: "Shri Krishna Boarding, Hema Hotel", price: "₹150–200", desc: "Tulu Nadu&apos;s most iconic dish. Kori Gassi (coconut-based chicken curry with 12+ spices) served with Rotti — crispy sun-dried rice wafers. The curry soaks into the rotti over a minute, transforming both textures. Nothing like this exists outside the Tulu region." },
                  { name: "Neer Dosa", where: "Any local restaurant", price: "₹60–90 (3 dosas)", desc: "Thin, lacy, almost translucent rice-flour crepe — cooked with no oil, served immediately, light and delicate. Eaten with coconut chutney and fish curry or chicken curry. The dosa of coastal Karnataka — far lighter than the crispy version." },
                  { name: "Kane (Ladyfish) Fry", where: "Coastal seafood restaurants", price: "₹200–350 full plate", desc: "Found only on the Karnataka-Goa coast. A delicate white fish — smaller than pomfret, more flavourful — coated in a semolina and spice mixture and pan-fried until crispy. Nothing from the Bangalore or Bengaluru restaurant scene approximates it." },
                  { name: "Mangalore Buns", where: "Any local breakfast restaurant", price: "₹50–80", desc: "Sweet, slightly dense deep-fried puris made with mashed banana, sugar, and refined flour — served with coconut chutney for breakfast. A Mangalore-specific item, especially associated with the Brahmin community. Morning-only in most restaurants." },
                  { name: "Chicken Sukka", where: "Tulu Nadu restaurants", price: "₹180–280", desc: "Dry-roasted chicken with coastal spices — less liquid than a curry, the masala clings to the meat. Specific to Tulu Nadu. The combination of local spices (pepper, coriander, coconut) gives a flavour profile entirely distinct from any other Indian regional chicken preparation." },
                ].map((d) => (
                  <div key={d.name} className="flex gap-3 text-xs border-t border-amber-100 pt-3 first:border-0 first:pt-0">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-medium text-ink">{d.name}</span>
                        <span className="text-amber-700 font-medium">{d.price}</span>
                        <span className="text-muted font-light">— {d.where}</span>
                      </div>
                      <p className="text-muted font-light leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── BEACHES ── */}
          <section id="beaches" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏖️ Beaches & the Coast</h2>
            <div className="space-y-4">
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-teal-800 mb-3">Managing Expectations — Mangalore Is Not Goa</h3>
                <p className="text-xs text-muted font-light leading-relaxed mb-4">
                  Mangalore&apos;s beaches are working-class urban beaches — not resort beaches. Tannirbhavi has basic facilities. Panambur (near the port) is accessible but industrial. The finest beaches are north toward Udupi: Malpe, Maravanthe (where the highway runs between a river and the sea), and Kaup with its lighthouse.
                </p>
                <div className="space-y-2">
                  {[
                    { name: "Tannirbhavi Beach", dist: "10km north of city", desc: "Nearest clean beach to Mangalore — long stretch, relatively uncrowded on weekdays. No infrastructure. Good for a sunset walk." },
                    { name: "Malpe Beach", dist: "65km north (near Udupi)", desc: "Largest beach in Karnataka. Working harbour with fishing trawlers. Base for St. Mary&apos;s Islands ferry. Best November–February." },
                    { name: "Maravanthe Beach", dist: "95km north", desc: "A spectacular stretch where National Highway 66 runs between the Suparnika River and the Arabian Sea — water on both sides of the road for several kilometres. Drive-by or stop for photos." },
                    { name: "Kaup Beach & Lighthouse", dist: "56km north", desc: "A well-maintained beach with a 19th-century British-built lighthouse. The lighthouse (₹20 entry) gives one of the best views of the Karnataka coast." },
                  ].map((b) => (
                    <div key={b.name} className="flex gap-3 text-xs border-t border-teal-100 pt-2 first:border-0 first:pt-0">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                          <span className="font-medium text-ink">{b.name}</span>
                          <span className="text-teal-700 font-medium">{b.dist}</span>
                        </div>
                        <p className="text-muted font-light leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting June–September monsoon", desc: "The southwest monsoon hits the Karnataka coast with force from June–September. Sea conditions are dangerous, all beaches are closed to swimmers, and the ferry to St. Mary's Islands stops operating entirely. The streets are manageable but most of what makes Mangalore worth visiting (beach, coast, ferry) is unavailable.", icon: "🌧️" },
                { title: "Skipping Udupi on Day 2", desc: "Udupi is 65km north and a completely different character — a temple town with extraordinary vegetarian food and a pilgrimage atmosphere. The drive up the coastal road is beautiful. Most Mangalore-only visitors never go. Building in Udupi + Malpe + St. Mary's as a Day 2 makes the trip dramatically more interesting.", icon: "🛕" },
                { title: "Expecting Goa-style party beaches", desc: "Mangalore is a conservative port city. The beaches are active but not resort-style. There are no shacks, no beach parties, no tourist infrastructure. The coast north toward Udupi is far more scenic and accessible. Come for the food, not the beach.", icon: "🏖️" },
                { title: "Missing the Bejai fish market", desc: "The market is most alive before 7am. Arriving at 9am misses the main event. Set an alarm for 5:30am, take an auto to Bejai market, and spend an hour there — it is a genuine experience of the city at work, not a tourist attraction.", icon: "🐟" },
                { title: "Only staying in city centre", desc: "The coast north of Mangalore (the NH66 stretch toward Udupi) is dramatically more scenic than the city itself. If you have 3 days, consider staying one night at Udupi or Malpe — the morning light on the coast road is extraordinary.", icon: "🗺️" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🚂", title: "Train from Bangalore is Far Better than Bus", desc: "The overnight train from Bangalore (Yeshvantpur) to Mangalore Central takes 7–9 hours and arrives in the morning — budget ₹350–700 in sleeper class. The NH48 road route is 350km but often 7–8 hours due to traffic and ghat sections. Train is more comfortable and the Sakleshpur Ghat rail section is spectacular.", color: "bg-amber-50 border-amber-200" },
                { icon: "🍳", title: "Mangalore Buns Are Breakfast-Only", desc: "Most restaurants that serve Mangalore Buns (sweet banana puris) stop making them after 10–10:30am when the breakfast service ends. Plan your Day 1 breakfast specifically around finding them — ask your hotel which restaurants nearby serve them.", color: "bg-amber-50 border-amber-200" },
                { icon: "⛵", title: "Check St. Mary's Islands Ferry Schedule", desc: "The ferry from Malpe to St. Mary's Islands operates only in good sea conditions — typically November–March with some closure in rough weather. Call ahead or check at Malpe harbour on arrival. Ferries run approximately every 30–45 minutes when operational. Last ferry back is usually by 5pm.", color: "bg-teal-50 border-teal-200" },
                { icon: "🍺", title: "Mangalore Is a Good City for Craft Beer", desc: "The Mangalorean Catholic community has a long tradition of home-made spirit production (Feni equivalent — coconut arrack). Several modern microbreweries and bars in the city have good local craft beer. Not typical of Karnataka generally — a specific Mangalorean characteristic.", color: "bg-teal-50 border-teal-200" },
                { icon: "🚗", title: "Hire a Taxi for Day 2 North Circuit", desc: "Public buses to Malpe and Udupi exist but are slow and require multiple changes. A day hire of a local taxi (₹1,200–1,800) for the Malpe-St. Mary's-Udupi circuit is significantly more efficient and gives you control over timing at St. Mary's Islands.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "📸", title: "St. Mary's Islands: Best at Low Tide", desc: "The hexagonal basalt columns are most visible and most photogenic at low tide when more of the column field is exposed. Check the tide table for your visit date — low tide visits give dramatically better access and photographs.", color: "bg-emerald-50 border-emerald-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Planned for You?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates and whether you want to extend to Goa or Coorg — we&apos;ll send a personalised coastal Karnataka itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Mangalore Trip →</button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What is Kori Rotti and where to eat it in Mangalore?", a: "Kori Rotti is Tulu Nadu's signature dish — Kori Gassi (coconut-based chicken curry) served with Rotti (crispy sun-dried rice wafers). The curry soaks into the wafers over a minute, transforming the texture. Best at Shri Krishna Boarding near Hampankatta or Hema Hotel. Cost ₹150–200. Nothing else in Indian cuisine is quite like it." },
                { q: "How do I get to St. Mary's Islands?", a: "Ferry from Malpe Beach harbour (65km north of Mangalore, near Udupi). Ferry tickets ₹200 return per person, 15-minute crossing. Ferries run every 30–45 minutes when operational (November–March, good sea conditions). Last ferry back typically by 5pm. Hire a taxi from Mangalore to Malpe and back (₹1,200–1,800 for the day) for the most efficient trip." },
                { q: "What is the best time to visit Mangalore?", a: "November to February is best — calm seas, comfortable temperatures (22–32°C), beaches and ferries operational. March–May is hotter but manageable. Avoid June–September — southwest monsoon closes all beaches, St. Mary's ferry stops, and the seas are dangerous." },
                { q: "Can I visit Udupi as a day trip from Mangalore?", a: "Yes — Udupi is 65km north on NH66, about 1.5 hours by road. Combining Malpe Beach + St. Mary's Islands ferry + Udupi Sri Krishna Temple as a single Day 2 circuit works well. Hire a taxi (₹1,200–1,800) for the full day rather than using buses, which are slower and require transfers." },
                { q: "What fish should I try in Mangalore?", a: "Kane (ladyfish) — only found on the Karnataka-Goa coast, delicate white flesh, excellent when fried with semolina coating. Pomfret fry — a classic, widely available. Tiger prawns in butter garlic. Crab masala — Mangalorean crab preparation is heavier and spicier than the Goa version. Avoid anything described as 'boneless fish' — the best preparations use whole fish." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Explore More Coastal South India</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Goa — 3 Day Beach & Heritage Guide", href: "/blog/goa-3-days" },
                { label: "Coorg — 3 Day Coffee Estate Guide", href: "/blog/coorg-3-days" },
                { label: "Chikmagalur — 3 Day Coffee & Hills Guide", href: "/blog/chikmagalur-3-days" },
                { label: "Varkala — 3 Day Kerala Cliff Beach", href: "/blog/varkala-3-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="mangalore-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
