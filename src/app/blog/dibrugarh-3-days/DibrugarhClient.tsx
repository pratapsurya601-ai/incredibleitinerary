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
import { usePageUrl } from "@/lib/hooks";

const DIBRUGARH_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "tea",       emoji: "🍵", label: "Tea Estate Guide" },
  { id: "budget",    emoji: "💰", label: "Budget Breakdown" },
  { id: "mistakes",  emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",      emoji: "💡", label: "Pro Tips" },
  { id: "faq",       emoji: "❓", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Dibrugarh 3-Day Guide&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Dibrugarh in 3 Days — Assam tea city & Brahmaputra guide&url=${pageUrl}` },
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

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function DibrugarhClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹7k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹7k–18k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={DIBRUGARH_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Dibrugarh" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="Assam tea garden green rows plantation India"
            fallback="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1600&q=85"
            alt="Green tea garden rows in Assam, India with misty hills in the background"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb overlay */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Dibrugarh 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Tea & River
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Dibrugarh in 3 Days: Assam&apos;s Tea City,
                <em className="italic text-gold-light"> Brahmaputra &amp; Majuli Island</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                160+ tea gardens, the world&apos;s 9th largest river at its broadest, Majuli River Island&apos;s Vaishnavite Satras, and Ahom Kingdom heritage — northeast India&apos;s most rewarding city.
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
              <span>🇮🇳 India</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹5,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              At 5 AM, I watched a tea plucker on the Aideobarie estate pick leaves with both hands simultaneously, filling a basket strapped to her head. She had been doing this since she was 16. The first flush tea she was picking would reach London in six weeks.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Dibrugarh is not on most tourist itineraries. That is the point. The district has 160+ tea gardens producing more tea than any single region on earth outside Darjeeling. The Brahmaputra river here is up to 16 km wide in flood season — one of the world&apos;s great rivers at its most humbling scale. Majuli, the world&apos;s largest river island, is 90 minutes away by car and ferry and has preserved 500-year-old Vaishnavite cultural traditions. And behind all of this is the Ahom Kingdom, which ruled Assam for 600 years without interruption — one of the longest-surviving kingdoms in Asian history.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌤️" label="Best Season" value="Oct–Apr (Tea Flush: Mar–Nov)" />
            <StatCard icon="🍵" label="Tea Gardens" value="160+ in district" />
            <StatCard icon="🚗" label="Distance from Guwahati" value="450 km" />
            <StatCard icon="⭐" label="Rating" value="4.5★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Dibrugarh&apos;s best season depends on whether you prioritise tea, wildlife, or cultural experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Apr", emoji: "✅", title: "Best Overall Season", desc: "October–April has the best weather (20–30°C), clear skies, and accessible wildlife. Tea picking is active. Dehing Patkai jeep safaris operate best in dry season. Majuli cultural events are frequent.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Mar–Jun", emoji: "🍵", title: "Peak Tea Season", desc: "First Flush (March–April): delicate, light golden tea. Second Flush (May–June): the classic malty Assam tea. Visit during Second Flush for maximum factory activity and the strongest, most characteristic Assam flavour.", color: "bg-amber-50 border-amber-200" },
                { season: "Jul–Sep", emoji: "🌊", title: "Monsoon — Brahmaputra Season", desc: "The Brahmaputra reaches its maximum width (up to 16 km). Majuli flooding is dramatic — the island shrinks visibly. Tea picking continues through monsoon. Some roads flood; jeep safari in Dehing Patkai may be restricted.", color: "bg-teal-50 border-teal-200" },
              ].map((s) => (
                <div key={s.season} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{s.emoji}</span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted">{s.season}</span>
                  </div>
                  <p className="font-serif text-base text-ink mb-2">{s.title}</p>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── PICK YOUR PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Pick Your Plan</h2>
            <p className="text-sm text-muted font-light mb-6">The comfortable option adds a colonial tea bungalow stay — one of the most distinctive accommodation experiences in India.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-5 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan →</p>
                </button>
              ))}
            </div>

            {/* Plan comparison */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-parchment-2">
                    <th className="text-left py-3 pr-4 text-muted font-medium uppercase tracking-wider">Category</th>
                    <th className="text-left py-3 px-4 text-amber-700 font-medium">Budget</th>
                    <th className="text-left py-3 px-4 text-teal font-medium">Comfortable</th>
                  </tr>
                </thead>
                <tbody className="text-muted font-light">
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Dibrugarh town hotel ₹700–1,200</td><td className="py-2.5 px-4">Mancotta Chang Bungalow ₹5,000–8,000</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Tea access</td><td className="py-2.5 px-4">Public estate visits + factory tour</td><td className="py-2.5 px-4">Full board, private cupping session</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Brahmaputra</td><td className="py-2.5 px-4">Free sunset at Dibrugarh Ghat</td><td className="py-2.5 px-4">Private boat cruise ₹500–1,000</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹7,000</td><td className="py-2.5 px-4 font-medium text-teal">₹7,000–18,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive, Ahom heritage, Brahmaputra sunset. Day 2: Tea estate dawn visit, factory tour, Tocklai Research Institute. Day 3: Majuli Island via Jorhat ferry.
            </p>

            {/* Plan tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                    activeTab === p.id
                      ? `${p.color} shadow-sm`
                      : "bg-white border border-parchment-2 text-muted hover:border-gold"
                  }`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {/* ── Day 1 ── */}
              <DayCard
                day="Day 1"
                title="Arrive, Ahom Heritage & Brahmaputra Sunset"
                items={[
                  "Fly to Dibrugarh Airport (DIB) — direct flights from Delhi (2.5 hrs), Kolkata (1 hr), and Guwahati (45 min). Driving from Guwahati takes 8–10 hrs (450 km) — fly instead.",
                  activeTab === "A"
                    ? "Check in to a Dibrugarh town hotel (₹700–1,200/night). The town centre is compact and walkable."
                    : "Check in to Mancotta Chang Bungalow — a restored colonial tea estate bungalow with full board (₹5,000–8,000/night). The stay includes estate access, meals, and cupping sessions. One of India's most distinctive accommodation experiences.",
                  "Namdang Stone Bridge (17th century, 100m long): built by the Ahom Kingdom without cement using interlocking stone. 30 minutes. A remarkable feat of pre-colonial engineering.",
                  "Dibrugarh Ghat: Brahmaputra sunset — the world&apos;s 9th largest river (by discharge) at its broadest reach. In flood season it stretches up to 16 km across. The scale is humbling. Sit at the ghat and watch the river at dusk.",
                  "Radha Krishna Temple on the riverbank — 19th century Ahom-era temple with beautiful river views.",
                  "Evening walk in Dibrugarh bazaar: Assam silk shops (muga golden silk, unique to Assam), Bihu handicrafts, jaapi (decorative conical hats), gamosa (ceremonial towels). Good browsing even if not buying.",
                ]}
                cost={activeTab === "A" ? "₹2,500" : "₹7,000–9,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Tea Estate Dawn Visit & Factory Tour"
                items={[
                  "5 AM: Tea estate visit. Aideobarie or Mancotta Estate (30–40 km from Dibrugarh). Watch plucking at dawn — women pickers carry 26 kg/day quota baskets, using both hands simultaneously. The sight of hundreds of pickers moving through the rows at first light is remarkable.",
                  "Factory tour: withering tables (moisture removal, 12–16 hours), rolling drums (cell rupture to trigger fermentation), fermentation (2–4 hours, the leaves turn copper), drying ovens (120°C, 20 minutes). The entire tea production process in one facility.",
                  "Tea cupping with the estate manager or factory supervisor — professional tasting of that day&apos;s production. You will understand why Assam tea is described as malty, brisk, and full-bodied.",
                  activeTab === "A"
                    ? "Public estate visit: contact the estate visitor office in advance (most estates welcome visitors by appointment). Budget ₹200–500 for a guided tour."
                    : "Mancotta Chang Bungalow guests get private estate access with guided cupping and a visit to the withering house at dawn. This is included in the stay package.",
                  "Afternoon: Tocklai Tea Research Institute (Jorhat, 90 min from Dibrugarh): the world&apos;s oldest tea research station, founded 1911. Research on tea varieties, diseases, cultivation, and processing. Open to visitors on weekdays.",
                  "Return to Dibrugarh. Evening at leisure. Dinner at local restaurant: Assam thali with masor tenga (sour fish curry), khar (alkaline preparation unique to Assam), and steamed rice.",
                ]}
                cost={activeTab === "A" ? "₹3,000" : "₹8,000–12,000"}
              />

              {/* ── Day 3 ── */}
              <DayCard
                day="Day 3"
                title="Majuli Island — Satras, Masks & Brahmaputra Crossing"
                items={[
                  "Early start: drive from Dibrugarh to Jorhat (85 km, 90 min) → Nimati Ghat (15 min from Jorhat) → ferry to Majuli Island.",
                  "Ferry crossing (1–1.5 hrs, ₹15 for pedestrians, ₹100+ for vehicles): the Brahmaputra crossing to Majuli is itself a highlight. The river is extraordinarily wide at this point — you lose sight of both banks simultaneously. Migratory birds visible in season.",
                  "Majuli Island: the world&apos;s largest river island by area, home to 22 Vaishnavite Satras (monastery-villages) established by Srimanta Sankardeva in the 15th century.",
                  "Kamalabari Satra: the most visitor-friendly Satra. Monks practice mask-making (enormous papier-mâché masks for dance dramas, some reaching 6 feet tall), Borgeet devotional music (ancient Assamese classical compositions), and Sattriya classical dance (Indian classical form, UNESCO recognized).",
                  "Visit the mask-making workshop — masks carved from bamboo, covered in clay and papier-mâché, painted with natural pigments. Some masks take months to complete. You can purchase them directly from the monks.",
                  activeTab === "A"
                    ? "Return ferry to Nimati Ghat → drive back to Dibrugarh for evening flight/train departure."
                    : "Return ferry. Private boat on the Brahmaputra from Nimati Ghat (₹500–1,000, arrange through your hotel) — river cruise at sunset before departing.",
                ]}
                cost={activeTab === "A" ? "₹3,000" : "₹6,000–9,000"}
              />
            </div>
          </section>

          {/* ── TEA GUIDE ── */}
          <section id="tea" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🍵 Tea Estate Visitor Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Everything you need to know about visiting Assam tea estates — what to look for, what to taste, and what to buy.
            </p>
            <div className="space-y-4">
              {[
                { aspect: "Best Time for Plucking Visits", note: "March–November (active plucking season). March–April for First Flush (delicate, lighter). May–June for Second Flush (classic malty Assam, peak flavour and production). Morning plucking starts at 5–6 AM and runs until noon.", emoji: "📅", color: "bg-amber-50 border-amber-200" },
                { aspect: "What Happens in the Factory", note: "Withering (moisture removal over 12–16 hrs) → Rolling (cell rupture) → Fermentation (2–4 hrs, leaves turn copper) → Drying at 120°C for 20 min → Grading + sorting. The entire process from fresh leaf to dry tea takes 18–24 hours.", emoji: "🏭", color: "bg-amber-50 border-amber-200" },
                { aspect: "Tea Grades — What to Buy", note: "TGFOP (Tippy Golden Flowery Orange Pekoe): the highest grade, made from the bud and first two leaves. Look for golden tips in the dry leaf. Whole leaf grades (OP, FOP) are more nuanced than the broken/fannings grades used in teabags. Buy directly from the estate — ₹300–600/250g.", emoji: "🎖️", color: "bg-teal-50 border-teal-200" },
                { aspect: "Tea Cupping (Professional Tasting)", note: "Estate managers taste tea in 3-minute brews at 100°C. The Assam profile: malty, brisk, full-bodied, slight astringency, warm amber liquor. If you detect a floral note in Second Flush Assam, you're tasting what the industry calls 'muscatel' — a prized quality in aged teas.", emoji: "☕", color: "bg-teal-50 border-teal-200" },
                { aspect: "Mancotta Chang Bungalow", note: "The most accessible colonial tea bungalow stay near Dibrugarh. Original 1930s British planter's bungalow on the estate. Full board with estate access, cupping sessions, and bicycle tours of the garden included. Book weeks in advance — only a few rooms.", emoji: "🏡", color: "bg-rose-50 border-rose-200" },
              ].map((t) => (
                <div key={t.aspect} className={`rounded-xl border p-5 ${t.color}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{t.emoji}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900 mb-2">{t.aspect}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{t.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── TEA IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="Assam tea estate green rows workers plucking morning mist"
              fallback="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80"
              alt="Tea pickers working in Assam tea garden rows at dawn with morning mist"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Dawn plucking on an Assam estate: pickers work from 5 AM, targeting the bud and first two leaves. The cup of Assam tea you drink in London began here, exactly like this.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹7,000", color: "bg-amber-50 border-amber-200",
                  items: [["Flights (if from Guwahati)", "₹2,000–4,000"], ["Hotel (3 nights)", "₹2,100–3,600"], ["Tea estate + transport", "₹1,000–1,500"], ["Majuli ferry + food", "₹800–1,200"], ["Local transport", "₹500–800"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹7,000–18,000", color: "bg-teal-50 border-teal-200",
                  items: [["Flights (from Delhi)", "₹3,000–6,000"], ["Mancotta Bungalow (2 nights, full board)", "₹10,000–16,000"], ["Private car + transport", "₹2,000–3,500"], ["Brahmaputra boat cruise", "₹500–1,000"], ["Majuli + miscellaneous", "₹1,000–2,000"]] },
              ].map((b) => (
                <div key={b.plan} className={`rounded-xl border p-5 ${b.color}`}>
                  <div className="text-center mb-4">
                    <span className="text-2xl">{b.emoji}</span>
                    <p className="font-serif text-base text-ink mt-1">{b.plan}</p>
                    <p className="font-serif text-xl text-ink font-medium mt-1">{b.total}</p>
                    <p className="text-xs text-muted uppercase tracking-wider">per person</p>
                  </div>
                  <div className="space-y-2">
                    {b.items.map(([k, v]) => (
                      <div key={k} className="flex justify-between text-xs">
                        <span className="text-muted font-light">{k}</span>
                        <span className="text-ink font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted font-light mt-4 italic">
              * All prices per person. Mancotta Chang Bungalow full board includes meals and estate access — the effective per-activity cost is lower than it appears. Buy tea directly from estates (cheaper and better quality than airport shops).
            </p>
          </section>

          <AffiliateBlock destination="Dibrugarh" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Driving from Guwahati Instead of Flying", desc: "Guwahati to Dibrugarh by road is 450 km (8–10 hrs on winding NH27). The flight takes 45 minutes (₹2,000–4,000). From Delhi: direct flight 2.5 hrs (₹3,000–6,000). The drive is scenic but exhausting — save your energy for the tea estates and Majuli.", icon: "✈️" },
                { title: "Not Pre-Arranging the Tea Estate Visit", desc: "Most Assam tea estates require advance notice for visitor access. You cannot simply show up. Contact the estate visitor coordinator or use your hotel to arrange. Mancotta and Aideobarie are the most visitor-friendly estates near Dibrugarh.", icon: "📋" },
                { title: "Missing the Dawn Plucking", desc: "Plucking starts at 5–6 AM and wraps by noon. If you plan to visit a tea estate, you must be there early. Arriving at 10 AM means missing the most visually dramatic part of the process. Stay near the estate or accept a very early start.", icon: "🌅" },
                { title: "Skipping Majuli", desc: "Majuli is the single most culturally distinctive experience accessible from Dibrugarh. The Satras, the mask-making, the Sattriya dance — nothing else in India is quite like it. The 3-hour round trip to Jorhat + ferry is worth every minute.", icon: "🏝️" },
                { title: "Buying Tea at the Airport", desc: "Dibrugarh airport tea shops charge 2–3x estate prices for inferior blended teas. Buy directly from the estate you visit (TGFOP grade, ₹300–600/250g) or from the Dibrugarh Tea Auction Centre shop. This is the real thing, at the right price.", icon: "🛒" },
                { title: "Going in Summer Without Wildlife Goals", desc: "June–September (monsoon) is Dehing Patkai&apos;s off-season for jeep safaris — some trails flood. October–May is the best window for the wildlife sanctuary. Plan accordingly if Dehing Patkai is on your list.", icon: "🐘" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🍵", title: "First Flush vs Second Flush Tea", desc: "Assam's First Flush (March–April) is delicate, light golden. Second Flush (May–June) is the classic Assam: malty, strong, perfect with milk (the famous 'Assam breakfast tea'). Visit during Second Flush for the most dramatic production activity and strongest flavour.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏝️", title: "Majuli is Shrinking", desc: "Majuli River Island has lost over 30% of its landmass to Brahmaputra flooding over the last century. The island's unique Satras and their 500-year-old cultural traditions are at risk. Visiting now supports preservation efforts and contributes to the local economy.", color: "bg-amber-50 border-amber-200" },
                { icon: "✈️", title: "Fly — Don't Drive from Guwahati", desc: "Guwahati to Dibrugarh by road is 450 km (8–10 hrs on winding NH27). The flight from Guwahati to Dibrugarh takes 45 minutes (₹2,000–4,000). From Delhi: direct flight 2.5 hrs (₹3,000–6,000). The drive is scenic but exhausting.", color: "bg-teal-50 border-teal-200" },
                { icon: "🐘", title: "Dehing Patkai Wildlife Sanctuary", desc: "20 km from Dibrugarh, this sanctuary has one of Assam's largest elephant herds, plus hoolock gibbons (the only ape in India), Malayan porcupine, and the globally endangered Gangetic dolphin in adjacent river areas. Jeep safari ₹1,500–2,000.", color: "bg-teal-50 border-teal-200" },
                { icon: "🎭", title: "Satras of Majuli", desc: "The Satras (Vaishnavite monasteries) of Majuli were established by Srimanta Sankardeva (15th century) as centres of Assamese neo-Vaishnavism. The monks practice mask-making (enormous papier-mâché masks for dance dramas), Borgeet devotional music, and Sattriya classical dance. The Kamalabari Satra welcomes visitors.", color: "bg-rose-50 border-rose-200" },
                { icon: "🌊", title: "Brahmaputra Boat Cruise", desc: "River cruise options from Dibrugarh Ghat (2–3 hours, ask at your hotel to arrange, ₹500–1,000) offer sunset views across the vast river. The Brahmaputra is one of the world's 10 largest rivers by volume — seeing it at its width near Dibrugarh is humbling.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and group — we&apos;ll arrange tea estate access, Majuli ferry timing, and Mancotta booking within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Dibrugarh Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Why is Dibrugarh the tea capital of Assam?", a: "Dibrugarh district has 160+ tea gardens producing 150+ million kg of tea annually — more than any other single district globally outside Darjeeling. The Brahmaputra Valley's flat alluvial soil, high humidity, and consistent rainfall create the ideal environment for Camellia sinensis var. assamica, the Assam tea variety." },
                { q: "How to reach Majuli Island from Dibrugarh?", a: "Drive from Dibrugarh to Jorhat (90 min, 85 km) → Nimati Ghat (15 min from Jorhat) → Ferry to Majuli (1–1.5 hrs, ₹15 for pedestrians, ₹100+ for vehicles). Ferries run throughout the day but schedule changes seasonally — check with your hotel. The ferry crossing is itself a highlight (Brahmaputra is extraordinarily wide)." },
                { q: "What should I buy in Dibrugarh?", a: "Assam Orthodox tea directly from estates or the Dibrugarh Tea Auction Centre shop (TGFOP grade, ₹300–600/250g). Assam silk (muga — golden natural silk, unique to Assam). Bihu handicrafts (bamboo). Jaapi (traditional conical hat — a beautiful decorative piece). Gamosa (Assamese ceremonial towel)." },
                { q: "Is Dehing Patkai better than Kaziranga for wildlife?", a: "Different ecosystems. Kaziranga (300 km west) is the world's best for one-horned rhinos and has more open terrain. Dehing Patkai is a dense tropical rainforest — better for primates, birds, and elephants in forest settings. Both are excellent; Kaziranga is more accessible for first-timers." },
                { q: "What is the Ahom Kingdom's connection to Dibrugarh?", a: "The Ahom Kingdom ruled Assam for 600 years (1228–1826) — one of the longest-surviving kingdoms in Indian history. Dibrugarh and surrounding Upper Assam were the heartland of Ahom civilization. The Rang Ghar (royal sports pavilion, 25 km from Sibasagar), Kareng Ghar (palace), and Ahom graves are nearby. The Ahoms were originally Tai people who migrated from Southeast Asia." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Dibrugarh — Highlights"
            subtitle="The best of Dibrugarh in photos."
            spots={[
              { name: "Dibrugarh Landscape", query: "dibrugarh india landscape scenic beautiful travel", desc: "The stunning landscapes of Dibrugarh." },
              { name: "Dibrugarh Temple", query: "dibrugarh temple architecture heritage india", desc: "Historic temples and architecture in Dibrugarh." },
              { name: "Dibrugarh Street Scene", query: "dibrugarh street market local culture india", desc: "Local life and culture in Dibrugarh." },
              { name: "Dibrugarh Nature", query: "dibrugarh nature hills forest river india", desc: "Natural beauty around Dibrugarh." },
              { name: "Dibrugarh Sunset", query: "dibrugarh sunset golden hour india travel", desc: "Dibrugarh at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Northeast India Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kaziranga — 3 Day Rhino Safari", href: "/blog/kaziranga-3-days" },
                { label: "Guwahati — 2 Day Gateway City", href: "/blog/guwahati-2-days" },
                { label: "Assam Tea Garden — 3 Day Guide", href: "/blog/assam-tea-garden-3-days" },
                { label: "Browse All India Packages", href: "/#packages" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="dibrugarh-3-days" />
          <RelatedGuides currentSlug="dibrugarh-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
