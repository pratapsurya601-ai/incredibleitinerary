"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import TableOfContents from "@/components/blog/TableOfContents";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import DestinationGallery from "@/components/blog/DestinationGallery";
import RelatedGuides from "@/components/blog/RelatedGuides";
import Breadcrumb from "@/components/blog/Breadcrumb";

const GANGTOK_TOC = [
  { id: "decision",   emoji: "⚡",  label: "Which Traveller Are You?" },
  { id: "highlights", emoji: "🏔️", label: "Why Gangtok?" },
  { id: "itinerary",  emoji: "📅", label: "3-Day Itinerary" },
  { id: "budget",     emoji: "💰", label: "Budget Breakdown" },
  { id: "food",       emoji: "🍜", label: "Food Guide" },
  { id: "permits",    emoji: "📋", label: "Permits Guide" },
  { id: "mistakes",   emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "💡", label: "Pro Tips" },
  { id: "faq",        emoji: "❓", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Gangtok 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Gangtok in 3 Days — Tsomgo Lake, Rumtek Monastery & Kanchenjunga Views&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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

export default function GangtokClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={GANGTOK_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Gangtok" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="gangtok sikkim himalaya kanchenjunga mountain"
            alt="Gangtok Sikkim Himalaya Kanchenjunga mountain view"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Gangtok 3 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Northeast India</span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Gangtok in 3 Days: Tsomgo Lake, Rumtek Monastery & Kanchenjunga Views
                <em className="italic text-gold-light"> (Complete Guide)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Sikkim&apos;s capital at 1,650m — Tsomgo Lake frozen at 3,753m, Baba Mandir shrine at 4,310m, 200-year-old Rumtek Monastery, and momos on MG Marg. Full permit guide included.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇮🇳 Sikkim, India</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹5,000</span>
            </div>
          </div>

          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Gangtok sits on a ridge at 1,650m with Kanchenjunga — the world&apos;s third-highest mountain — filling the entire western horizon on clear mornings. The city is compact, safe, and genuinely walkable. Day 2, when you drive to Tsomgo Lake at 3,753m and Baba Mandir at 4,310m, is one of the most dramatic single-day drives you can do in India.
            </p>
          </blockquote>

          {/* ── DECISION ── */}
          <section id="decision" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Traveller Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Gangtok has distinct layers. Pick yours.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { emoji: "🏔️", label: "Mountain & Lake", sub: "₹2,500–₹4,000/day", desc: "Tsomgo Lake + Baba Mandir + Tashi viewpoint", color: "border-sky-200 hover:border-sky-400" },
                { emoji: "🕌", label: "Buddhist Culture", sub: "₹1,500–₹3,000/day", desc: "Rumtek + Enchey + Namgyal Tibetology", color: "border-amber-200 hover:border-amber-400" },
                { emoji: "🍜", label: "Food & MG Marg", sub: "₹1,200–₹2,500/day", desc: "Momos + thukpa + valley cafés + shopping", color: "border-teal-200 hover:border-teal-400" },
              ].map((p) => (
                <button key={p.label} onClick={() => document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" })}
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

          {/* ── WHY GANGTOK ── */}
          <section id="highlights" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏔️ Why Gangtok?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Gangtok is one of the few Indian hill towns that is genuinely pleasant to walk around. MG Marg (the pedestrian main street) is clean, well-lit, and lined with decent cafés and shops. The Kanchenjunga views on clear October–November and March–April mornings are among the finest mountain views accessible from any Indian city. And the day trip to Tsomgo Lake and Baba Mandir — at 3,753m and 4,310m respectively — is the kind of high-altitude road that stays with you.
            </p>
            <div className="space-y-3">
              {[
                { name: "Tashi Viewpoint", detail: "8km from city centre. Free entry. On clear mornings (Oct–Nov, Mar–Apr), Kanchenjunga fills the western sky. Go at 6am — by 9am, cloud cover obscures the view most days.", tag: "Viewpoint", color: "border-sky-200 bg-sky-50" },
                { name: "Enchey Monastery", detail: "Free entry. 200-year-old monastery, 10-minute walk from MG Marg. Rebuilt in 1909 in traditional Sikkimese style. Morning prayers at 7am are particularly atmospheric.", tag: "Monastery", color: "border-amber-200 bg-amber-50" },
                { name: "Tsomgo Lake (Changu Lake)", detail: "38km east, Inner Line Permit required (₹100). The lake sits at 3,753m — often frozen November–March. The drive is as extraordinary as the destination: alpine forest giving way to barren high-altitude plateau. Shared jeep ₹300–₹400 return.", tag: "High Altitude", color: "border-teal-200 bg-teal-50" },
                { name: "Baba Mandir", detail: "5km beyond Tsomgo, 4,310m altitude. An army shrine dedicated to Baba Harbhajan Singh, a soldier believed to protect the border area. The altitude and the views over the valley are extraordinary. Yak rides available (₹150–₹200) — optional but memorable.", tag: "Shrine", color: "border-emerald-200 bg-emerald-50" },
                { name: "Rumtek Monastery", detail: "24km from Gangtok, ₹50 entry. The seat of the Karma Kagyu school of Tibetan Buddhism — one of the most politically significant Buddhist sites in the world. Complex history surrounding the recognition of the 17th Karmapa. The main hall is spectacular.", tag: "Monastery", color: "border-orange-200 bg-orange-50" },
                { name: "Namgyal Institute of Tibetology", detail: "₹10 entry. Research institute and museum for Buddhist studies — manuscripts, thangkas, ritual objects. Underrated by tourists who don't realize how significant the collection is. Allow 1.5 hours.", tag: "Museum", color: "border-yellow-200 bg-yellow-50" },
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
            <StatCard icon="🗓" label="Best Time" value="Oct–Nov, Mar–Apr" />
            <StatCard icon="⛰️" label="Altitude" value="1,650m (city)" />
            <StatCard icon="✈️" label="From Bagdogra" value="120km / 4 hours" />
            <StatCard icon="💰" label="3-Day Budget" value="₹5,000+" />
          </div>

          {/* ── ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The 3-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">
              All of Gangtok&apos;s city sights are walkable from MG Marg. Day 2 requires advance permit arrangement.
            </p>

            <DayCard
              day="Day 1"
              title="Gangtok City — Viewpoint, Monasteries & MG Marg"
              items={[
                "6am: Tashi Viewpoint (8km from city — take a local shared taxi for ₹30 or a cab for ₹200). In clear weather (October–November, March–April), Kanchenjunga and the surrounding peaks are fully visible at this hour. By 9am, cloud cover makes the view uncertain. Don't miss this if the weather is clear — it is the finest mountain panorama accessible from an Indian city without trekking.",
                "8am: Return to city centre. Breakfast at any café on MG Marg — thukpa (noodle soup, ₹80–₹120) or momos (₹60–₹80) are the Sikkimese breakfast staples. Café Live & Loud on MG Marg has good coffee.",
                "9:30am: Enchey Monastery — 10-minute walk uphill from MG Marg. The monastery is 200 years old with a steep gabled roof covered in colourful prayer flags. Morning prayers happen around 7am but the complex is open and accessible all morning. Free entry.",
                "11am: Walk back down MG Marg — Lal Bazaar is 500m from the main pedestrian stretch, good for local shopping including dried fruits, Sikkimese textiles, and cardamom.",
                "1pm: Lunch at a local Sikkimese restaurant. Thali with dal, sabzi, rice, and papad — ₹120–₹180. Or go upscale at one of the MG Marg restaurants for Tibetan set meals.",
                "Afternoon: Arrange your Tsomgo Lake permit for Day 2. Go to the Tourism Department on MG Marg or ask your hotel to arrange it. The permit costs ₹100 (plus a ₹200 agent fee if going through hotel). Bring original ID. This must be done the day before.",
                "Evening: Sunset over the valley from MG Marg — the long pedestrian stretch faces west and the sunset view over the green Sikkim hills is genuinely beautiful. Baker's Cafe for filter coffee and cake in the evening.",
              ]}
              cost="₹400–₹700 excluding accommodation" />

            <DayCard
              day="Day 2"
              title="Tsomgo Lake & Baba Mandir (Permit Day)"
              items={[
                "Permit required: Inner Line Permit arranged the previous day. Bring original ID and permit copy. Share jeeps from the Old Market area (Lal Bazaar) depart around 8–9am for Tsomgo. Cost: ₹300–₹400 return, shared with other travellers. Negotiate at the stand.",
                "Tsomgo Lake (38km, 1.5 hours): The lake at 3,753m sits in a hollow surrounded by steep hillsides. It is often frozen November–March — the frozen surface is accessible on foot. In summer, the water is dark blue and cold. Yaks are brought up for tourist photos (₹100 for a photo). The snack stalls at the lake make reasonable thukpa and Maggi.",
                "Altitude note: If you have come directly from low altitude (below 500m), you may feel light-headed at 3,753m. Do not run, drink water, and sit down if you feel unwell. Most people acclimatize in 20–30 minutes. Symptoms that need attention: persistent severe headache, vomiting.",
                "Baba Mandir (5km beyond Tsomgo, 4,310m): The road beyond Tsomgo leads to this Indian Army shrine. The views here — Kanchenjunga to the west, the border ranges to the north — are the best you'll access on a standard tourist permit. The army presence is visible but non-intrusive. Yak rides ₹150–₹200 for 10 minutes.",
                "Nathula Pass (4,310m): Located 6km from Baba Mandir near the China border. Access for Indian nationals requires a special permit obtained 7–10 days in advance (₹300). It is frequently closed due to military requirements. Don't plan around it — treat it as a bonus if your permit comes through.",
                "Return to Gangtok by 4–5pm (roads close to tourist traffic after dark). Dinner on MG Marg — Netuk House for authentic Sikkimese food if you want to go beyond momos.",
              ]}
              cost="₹600–₹900 including permit, jeep, and entry" />

            <DayCard
              day="Day 3"
              title="Rumtek Monastery · Namgyal Institute · Overnight Market"
              items={[
                "9am: Rumtek Monastery (24km from Gangtok, 40–50 minutes). Hire a cab for the day: ₹1,200–₹1,500. Rumtek is the seat of the Karma Kagyu school and one of the most significant Tibetan Buddhist monasteries outside Tibet. Entry ₹50. The main assembly hall has a ceiling-height thangka. The monastery complex includes the Golden Stupa — one of the most ornate in India.",
                "Historical context worth knowing: Rumtek has been at the centre of a contested succession since 1992 — there are two claimants to the title of 17th Karmapa. The monastery has been under state government protection since then. Despite the politics, the physical complex is extraordinarily beautiful.",
                "12:30pm: Back toward Gangtok. Stop at Ranka Monastery (also called Lingdum) on the way — free, less visited than Rumtek, architecturally interesting Tibetan monastery with resident monks.",
                "2:30pm: Namgyal Institute of Tibetology (₹10 entry, 2km from MG Marg). Founded in 1958, this is one of Asia's most important research centres for Tibetan and Buddhist studies. The museum holds rare manuscripts, religious masks, thangkas, and ritual objects. The building itself — a traditional Tibetan structure in a pine forest — is striking.",
                "Evening: MG Marg final evening — the overnight market (open from 6pm) sells Sikkimese handicrafts, prayer wheels, thankas, and dried local produce. Try singpho tea (smoked tea from Northeast India) at one of the stalls.",
                "Night momos: The best momos in Gangtok are from roadside stalls near the Old Market, not from tourist restaurants. Steamed momos with chilli sauce ₹40–₹60 per plate of 8.",
              ]}
              cost="₹800–₹1,400 including cab for Rumtek" />

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mt-4">
              <span className="text-xs text-green-700 uppercase tracking-wide">Total 3-Day Cost (per person) · </span>
              <span className="font-serif text-base text-ink font-light">₹5,000–₹8,000 budget · ₹12,000–₹18,000 mid-range</span>
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
                    <th className="p-3.5 text-xs font-medium text-emerald-300 text-center">🌳 Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (3N)", "₹2,400–₹4,500", "₹6,000–₹12,000", "₹15,000–₹30,000"],
                    ["🍜 Food & Drinks (3 days)", "₹720–₹1,080", "₹2,100–₹3,600", "₹4,500–₹7,200"],
                    ["🚗 Local Transport", "₹900–₹1,500", "₹1,800–₹3,000", "₹3,600–₹6,000"],
                    ["📋 Tsomgo Permit + Jeep", "₹600–₹800", "₹600–₹800", "₹600–₹800"],
                    ["🕌 Entry Fees (all)", "₹160–₹220", "₹160–₹220", "₹160–₹220"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 3 days)</td>
                    {["₹5,000–₹8,000", "₹12,000–₹18,000", "₹24,000–₹44,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Gangtok hotels on MG Marg are the best value — many in the ₹800–₹1,500 range with city views. The Tsomgo permit (₹100 + ₹200 agent fee) applies to all visitors. Helicopter from Bagdogra costs ₹3,000–₹4,000 and takes 30 minutes vs. 4 hours by road.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Gangtok"
            hotels={[
              { name: "Hotel Tashi Delek", type: "Hotel · MG Marg, Gangtok", price: "From ₹2,500/night", rating: "4", badge: "Best location", url: "https://www.booking.com/searchresults.en-gb.html?ss=gangtok+mg+marg+hotel&aid=2820480" },
              { name: "Elgin Nor-Khill", type: "Heritage Hotel · Gangtok", price: "From ₹7,500/night", rating: "5", badge: "Heritage", url: "https://www.booking.com/hotel/in/elgin-nor-khill.html?aid=2820480" },
              { name: "Budget Guesthouse MG Marg", type: "Guesthouse · Central Gangtok", price: "From ₹800/night", rating: "3", badge: "Budget", url: "https://www.booking.com/searchresults.en-gb.html?ss=gangtok+budget+guesthouse&aid=2820480" },
            ]}
            activities={[
              { name: "Tsomgo Lake & Baba Mandir Day Trip", duration: "Full day", price: "From ₹600/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=gangtok+tsomgo+lake&partner_id=PSZA5UI" },
              { name: "Rumtek Monastery Cultural Tour", duration: "Half day", price: "From ₹400/person", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=rumtek+monastery+tour&partner_id=PSZA5UI" },
              { name: "Gangtok City Heritage Walk", duration: "3 hours", price: "From ₹350/person", url: "https://www.getyourguide.com/s/?q=gangtok+city+walk&partner_id=PSZA5UI" },
            ]}
            pdfProductId="gangtok-3-days-pdf"
          />

          {/* ── FOOD GUIDE ── */}
          <section id="food" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍜 Gangtok Food Guide</h2>
            <div className="space-y-3">
              {[
                { name: "Momos", detail: "Gangtok's most beloved food — steamed dumplings with pork, chicken, or vegetable filling. Best from the roadside stalls near the Old Market and Lal Bazaar (₹40–₹60 per plate of 8). The tourist restaurants on MG Marg serve them too but the street versions are better.", color: "border-amber-200 bg-amber-50" },
                { name: "Thukpa", detail: "Tibetan noodle soup — a meal in itself at ₹80–₹120. Beef or pork version is excellent in Gangtok. Available at almost every restaurant and café on MG Marg. Good for mornings when the temperature is below 10°C.", color: "border-orange-200 bg-orange-50" },
                { name: "Sikkimese Thali", detail: "Local restaurants away from MG Marg serve a thali with steamed rice, dal, mixed vegetables, fermented bamboo shoot curry (this is the distinctive Sikkimese flavour), and papad for ₹120–₹180. Netuk House restaurant on Tibet Road does the best version.", color: "border-teal-200 bg-teal-50" },
                { name: "Singpho Tea", detail: "Smoked tea from the Northeast — a completely different flavour profile from standard Indian chai. Sold at the overnight market on MG Marg and at specialist tea shops. Buy 100g for ₹120–₹200 and take it home; it doesn't exist in most Indian cities.", color: "border-emerald-200 bg-emerald-50" },
                { name: "Chhang", detail: "Local millet beer — fermented in a wooden container and drunk through a bamboo straw by adding hot water. Available at select local restaurants (not tourist spots). Warming and mildly alcoholic. Try it once — it is distinctly Sikkimese.", color: "border-yellow-200 bg-yellow-50" },
              ].map((food) => (
                <div key={food.name} className={`rounded-xl border p-4 ${food.color}`}>
                  <p className="font-medium text-sm text-ink mb-1">{food.name}</p>
                  <p className="text-xs text-muted font-light leading-relaxed">{food.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── PERMITS ── */}
          <section id="permits" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">📋 Permits Guide</h2>
            <p className="text-sm text-muted font-light mb-6">
              Sikkim&apos;s permit system trips up first-time visitors. Here is exactly what you need and how to get it.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Destination</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-left">Permit Required</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-left">Cost</th>
                    <th className="p-3.5 text-xs font-medium text-emerald-300 text-left">How to Get</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["Gangtok city", "None needed", "Free", "Just arrive with ID"],
                    ["Tsomgo Lake", "Inner Line Permit (ILP)", "₹100 + ₹200 agent fee", "Hotel or Sikkim Tourism office — day before"],
                    ["Baba Mandir", "Included with Tsomgo ILP", "Covered", "Same permit covers both"],
                    ["Nathula Pass", "Special permit (different)", "₹300", "Must apply 7–10 days in advance; often closed"],
                    ["North Sikkim", "Restricted Area Permit", "₹200 (multi-day)", "Separate application; min. 2-person group required"],
                  ].map(([dest, permit, cost, how]) => (
                    <tr key={dest} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{dest}</td>
                      <td className="p-3.5 text-xs text-muted font-light">{permit}</td>
                      <td className="p-3.5 text-xs text-muted font-light">{cost}</td>
                      <td className="p-3.5 text-xs text-muted font-light">{how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Practical tip:</strong> Ask your hotel reception to arrange the Tsomgo ILP on Day 1 evening. They will take your ID photocopy and the ₹200 fee, and give you the permit by next morning. You do not need to visit any government office yourself. The permit is checked at the checkpoint at Tsomgo — keep it accessible.
              </p>
            </div>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Not arranging the Tsomgo permit on Day 1", desc: "Tsomgo Lake requires an Inner Line Permit that must be arranged the day before. Walk-in same-day permits are not available. If you arrive in Gangtok on Day 1 and want to visit Tsomgo on Day 2, arrange the permit through your hotel on Day 1 evening — do not wait until morning.", icon: "📋" },
                { title: "Going in monsoon (June–August)", desc: "Landslides and road closures are frequent in Sikkim during monsoon. The road to Tsomgo Lake closes regularly. Kanchenjunga views are impossible with monsoon cloud cover. October–November is when the monsoon clears and the mountains emerge — often described as the best weeks in Sikkim.", icon: "🌧️" },
                { title: "Going straight from sea level to Tsomgo on Day 1", desc: "Gangtok at 1,650m is manageable. Tsomgo at 3,753m requires some acclimatization. If you've flown directly from Mumbai or Chennai (sea level), spend Day 1 in Gangtok city only and do the Tsomgo trip on Day 2. Ascending too fast causes altitude sickness: headache, nausea, fatigue.", icon: "⛰️" },
                { title: "Expecting Kanchenjunga views in all weather", desc: "Clear Kanchenjunga views from Gangtok happen in October–November and March–April. Even then, views are only reliable in the morning before cloud builds. In December–February, views are frequently obscured. In monsoon, plan on zero visibility. Tashi Viewpoint at 6am in October is the optimal timing.", icon: "🌫️" },
                { title: "Not booking the Tsomgo jeep in advance on weekends", desc: "Shared jeeps to Tsomgo depart from Lal Bazaar stand and fill up fast, especially on weekends and in October–November peak season. Go to the stand by 7:30am or ask your hotel to arrange a seat the night before. Last jeeps typically depart by 10am.", icon: "🚗" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── TIPS ── */}
          <section id="tips" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🌄", title: "6am at Tashi Viewpoint — Non-Negotiable", desc: "On any clear day between October and April, set an alarm and get to Tashi Viewpoint by 6am. Kanchenjunga (8,586m) is visible from the city itself — but the viewpoint gives the full panoramic context. The journey is 8km each way and takes 15 minutes by taxi (₹200).", color: "bg-sky-50 border-sky-200" },
                { icon: "🧥", title: "Pack for Cold at Tsomgo", desc: "Even in summer, Tsomgo Lake at 3,753m is 8–12°C with strong wind. In November–March, it is well below zero. Pack a proper jacket, gloves, and a hat regardless of the season. Many visitors underestimate the cold difference between Gangtok (mild) and Tsomgo (alpine).", color: "bg-sky-50 border-sky-200" },
                { icon: "🍜", title: "Eat Away From MG Marg for Real Prices", desc: "MG Marg restaurants are 30–40% more expensive than restaurants 200m off the main street. The best value Sikkimese thalis and momos are found in the lanes around Lal Bazaar and the Old Market. Follow where local families are eating — not where signs are in English.", color: "bg-amber-50 border-amber-200" },
                { icon: "💐", title: "Buy Sikkimese Cardamom at Lal Bazaar", desc: "Sikkim produces some of India's finest large cardamom (black cardamom/badi elaichi). The Lal Bazaar spice section sells it at ₹80–₹120 per 100g — far below what you'd pay in a city. Buy whole pods, not powder. The flavour is smokier and more complex than the small green cardamom used elsewhere.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚌", title: "Share Jeeps Are the Local Way to Travel", desc: "SNT buses and shared jeeps connect Gangtok to Siliguri and Bagdogra. Shared jeep from Gangtok to Siliguri Junction costs ₹200–₹250 and takes 3.5–4 hours. Depart from the main SNT stand at 7–8am. Private taxis cost ₹3,000–₹3,500 for the same journey.", color: "bg-teal-50 border-teal-200" },
                { icon: "📸", title: "Photography at Monasteries", desc: "Photography of the main prayer halls at Rumtek and Enchey is generally permitted but ask first. Photography of individual monks requires permission. Never photograph monks without consent. Video during prayer sessions is usually not allowed. A small donation (₹50–₹100) is always appreciated.", color: "bg-teal-50 border-teal-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Planned for You?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group size, and budget — we&apos;ll send a personalised Gangtok itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Gangtok Trip →</button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Contact Us →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Gangtok?", a: "3 days covers the city sights (Tashi Viewpoint, Enchey Monastery, MG Marg), the Tsomgo Lake and Baba Mandir day trip, and Rumtek Monastery. For North Sikkim (Lachen, Gurudongmar Lake), add 2–3 more days and a separate Restricted Area Permit. Gangtok alone is a 2-day city; the permit areas around it need the third day minimum." },
                { q: "What is the best time to visit Gangtok?", a: "October–November is the best time: post-monsoon skies, clear Kanchenjunga views, dry roads, mild temperatures (10–22°C). March–April is the second-best window — rhododendrons in bloom and clear mountain views. Avoid June–August (landslides, zero mountain visibility). December–February is cold (near-zero nights) but views can be excellent on clear days." },
                { q: "Do I need a permit for Gangtok itself?", a: "No permit is needed for Gangtok city. Indian citizens can visit freely. The Inner Line Permit (ILP) is required specifically for Tsomgo Lake, Baba Mandir, and areas east of Gangtok toward the China border. Foreign nationals need an ILP for all of Sikkim and must travel with a registered tour operator to restricted areas." },
                { q: "How do I get from Bagdogra airport to Gangtok?", a: "Bagdogra airport is 120km from Gangtok — about 4 hours by road via NH10 (the Teesta River valley road). Shared taxis from Bagdogra airport cost ₹250–₹350 per person. Private taxi: ₹2,500–₹3,500. Helicopter (seasonal, weather-dependent): ₹3,000–₹4,000, 30 minutes. The road passes through the Teesta Valley — scenic and worth the time if visibility is good." },
                { q: "What should I buy in Gangtok?", a: "Large black cardamom (₹80–₹120 per 100g) at Lal Bazaar is the best value purchase. Thangka paintings (traditional Buddhist scroll paintings) start at ₹500 for small prints and go to ₹50,000+ for original hand-painted pieces — buy from established shops with authenticity certificates. Prayer wheels, prayer flags, and hand-knitted woollens are also good buys." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Northeast India Circuit?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Darjeeling — 2 Day Tea Garden Guide", href: "/blog/darjeeling-2-days" },
                { label: "Kalimpong — Weekend Escape Guide", href: "/blog/kalimpong-guide" },
                { label: "Wayanad — 3 Day Wildlife Guide", href: "/blog/wayanad-3-days" },
                { label: "Thekkady — 3 Day Periyar Guide", href: "/blog/thekkady-3-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <DestinationGallery
            title="Gangtok — Gateway to Kanchenjunga"
            subtitle="India's cleanest hill town with monasteries and mountain views."
            spots={[
              { name: "MG Marg", query: "mg marg gangtok sikkim pedestrian street clean mountain town india", desc: "India's cleanest pedestrian street — spotless, unlike any other Indian town." },
              { name: "Rumtek Monastery", query: "rumtek monastery gangtok sikkim buddhist tibetan prayer flags india", desc: "Sikkim's most important Buddhist monastery." },
              { name: "Tsomgo Lake", query: "tsomgo lake changu lake sikkim frozen turquoise mountains india", desc: "A glacial lake at 3,753m — frozen in winter, turquoise in summer." },
              { name: "Kanchenjunga View", query: "kanchenjunga gangtok sikkim sunrise snow peak himalaya india", desc: "The world's third-highest peak visible from Gangtok on clear mornings." },
              { name: "Hanuman Tok", query: "hanuman tok gangtok sikkim viewpoint prayer flags mountains india", desc: "Hilltop temple with panoramic views of Gangtok and the Himalayan range." },
            ]}
          />

         

          <RelatedGuides currentSlug="gangtok-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
