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

const CHIKMAGALUR_TOC = [
  { id: "decision",   emoji: "⚡",  label: "Which Traveller Are You?" },
  { id: "highlights", emoji: "☕",  label: "Why Chikmagalur?" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "coffee",     emoji: "🫘",  label: "Coffee Guide" },
  { id: "treks",      emoji: "🥾",  label: "Treks & Viewpoints" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Chikmagalur 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Chikmagalur in 3 Days — Coffee Estates, Mullayanagiri & Hebbe Falls&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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

export default function ChikmagalurClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={CHIKMAGALUR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Chikmagalur" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="chikmagalur coffee plantation hills mist karnataka india"
            alt="Coffee plantation with misty hills in Chikmagalur Karnataka"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Chikmagalur 3 Days</span>
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
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Chikmagalur in 3 Days: Coffee Estates, Mullayanagiri & Hebbe Falls
                <em className="italic text-gold-light"> (Complete Guide)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Karnataka&apos;s coffee heartland — 50% of India&apos;s coffee grows here. Where to stay on a working estate, how to reach Mullayanagiri at dawn, and which peaberry to buy. Budget from ₹7,000 for 3 days.
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
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹7,000</span>
            </div>
          </div>

          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Chikmagalur is not about luxury — it is about waking up to mist-covered coffee estates, watching the sun rise over Karnataka&apos;s highest peak, and buying fresh-roasted peaberry from the estate that grew it. The town itself is small. The experience is entirely in the landscape.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Traveller Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your style to jump to the right section.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { emoji: "☕", label: "Coffee Immersion", sub: "₹2,500–₹4,000/day", desc: "Estate homestay + plantation walk + peaberry shopping + Baba Budangiri", color: "border-amber-200 hover:border-amber-400", id: "coffee" },
                { emoji: "🏔", label: "Trek & View", sub: "₹3,000–₹5,000/day", desc: "Mullayanagiri sunrise + Hebbe Falls jeep + Kemmanagundi Z-Point sunset", color: "border-teal-200 hover:border-teal-400", id: "treks" },
                { emoji: "🌿", label: "Full Explorer", sub: "₹5,000–₹8,000/day", desc: "All of the above + Kudremukh trek + Belur/Halebid temples", color: "border-emerald-200 hover:border-emerald-400", id: "itinerary" },
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

          {/* ── WHY CHIKMAGALUR ── */}
          <section id="highlights" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">☕ Why Chikmagalur?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Chikmagalur produces 50% of India&apos;s total coffee output. The district sits at 1,090m in the Western Ghats, with the Baba Budangiri range rising to nearly 1,900m. It is not a typical hill station — there are no cable cars or boat rides. What it has is working coffee and pepper estates, mountain roads through oak and rhododendron forest, waterfalls that require a jeep to reach, and some of the best fresh-roasted coffee you will find anywhere in the country.
            </p>
            <div className="space-y-3">
              {[
                { name: "Mullayanagiri (1,930m)", detail: "Highest peak in Karnataka. 1km paved walk from parking. Views over the Deccan plateau on clear days. Small Murugan temple at summit. Go before 7am for best visibility — clouds typically roll in by 9am.", tag: "Peak", color: "border-amber-200 bg-amber-50" },
                { name: "Baba Budangiri Hills (1,895m)", detail: "26km from town. The most atmospheric spot in Chikmagalur — morning mist, the Dattatreya Peetha cave shrine sacred to both Hindus and Muslims. Remarkably rare in India — a place of genuine shared worship.", tag: "Sacred", color: "border-orange-200 bg-orange-50" },
                { name: "Hebbe Falls (168m)", detail: "Two-tier waterfall 54km from Chikmagalur. Requires a hired jeep from Kalasa (₹1,000–1,500) as private vehicles cannot proceed. 1km walk from the jeep drop-off point.", tag: "Waterfall", color: "border-blue-200 bg-blue-50" },
                { name: "Kemmanagundi (1,434m)", detail: "60km from Chikmagalur. Z Point sunset viewpoint, Raj Bhavan gardens (former Maharaja of Mysore summer residence), and Shanthala Park waterfall. The drive up is half the experience.", tag: "Hill Station", color: "border-teal-200 bg-teal-50" },
                { name: "Coffee Estate Walks", detail: "₹300–500 for a guided plantation walk at most estates. Understand how arabica coffee is grown from cherry to dried bean. The estate machinery and processing yards are fascinating. Ask to visit the drying beds.", tag: "Agritourism", color: "border-emerald-200 bg-emerald-50" },
                { name: "Belur & Halebid (40km)", detail: "UNESCO-listed Hoysala temples from the 12th century. The finest stone carvings in India — thousands of individual figures carved into the temple walls over decades by court sculptors. Half-day trip from Chikmagalur.", tag: "Heritage", color: "border-yellow-200 bg-yellow-50" },
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
            <StatCard icon="📅" label="Best Time" value="Sep – Feb" />
            <StatCard icon="⛰️" label="Mullayanagiri" value="1,930m" />
            <StatCard icon="🚗" label="From Bangalore" value="245km · 5hrs" />
            <StatCard icon="☕" label="India's Coffee" value="50% produced here" />
          </div>

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The 3-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">
              Chikmagalur town is the main base. All distances are from here unless noted.
            </p>

            <DayCard
              day="Day 1"
              title="Coffee Estates & Baba Budangiri · Mullayanagiri Peak"
              items={[
                "Arrive Chikmagalur by morning — check into a coffee estate homestay (recommended) or town hotel. Breakfast at the estate or a local filter coffee restaurant on the main road.",
                "Morning: Drive to Baba Budangiri hills (26km, 1,895m) — the road climbs through dense forest and coffee estates. Arrive before 8am for the best mist conditions. The Dattatreya Peetha cave shrine here is one of India's most unusual sacred sites — worshipped simultaneously by both Hindu and Sufi Muslim communities. The atmosphere is extraordinary.",
                "Coffee estate walk: If staying at an estate, arrange a guided plantation walk (₹300–500). Most estates offer this as part of their hospitality. Walk through the arabica bushes, see the wet processing yard, understand the cherry-to-bean journey.",
                "Afternoon: Mullayanagiri peak (25km, 1,930m — highest point in Karnataka). A good road takes you to a parking area near the summit; it is then a 1km walk to the top. The views on clear days extend far over the Deccan plateau. There is a small Shiva/Murugan temple at the peak. The clouds usually move in by mid-afternoon — arriving at 3pm still gives a reasonable chance of views.",
                "Evening: Return to Chikmagalur town. Explore the main market road — this is where you will find the best fresh-roasted coffee shops. Coffee Cabin on the main road is a reliable stop. Buy estate coffee to take home (₹300–600 per 250g for peaberry; ₹150–250 for plantation arabica).",
                "Dinner at a local restaurant — Chikmagalur town has good South Indian food. Try the local thali with rice, sambar, and dry vegetable curries for ₹120–180.",
              ]}
              cost="₹800–₹1,500 excluding accommodation" />

            <DayCard
              day="Day 2"
              title="Hebbe Falls & Kemmanagundi"
              items={[
                "Early start — drive to Kalasa village (54km, about 1.5 hours). This is the staging point for Hebbe Falls. Private vehicles are not allowed on the final section of the forest road.",
                "Hire a jeep from Kalasa to Hebbe Falls: ₹1,000–₹1,500 for the hire (fits 6 people). The jeep drops you approximately 1km from the falls — a short walk through dense forest.",
                "Hebbe Falls: A two-tier waterfall dropping 168m total — the upper fall (Dodda Hebbe, 122m) and the lower fall (Chikka Hebbe, 46m). Standing at the base of the upper fall, the water pressure is intense. Carry a change of clothes — getting wet here is unavoidable if you approach closely. One of the finest waterfalls in Karnataka.",
                "Return to Kalasa and drive to Kemmanagundi (60km from Chikmagalur, another 1.5 hours from Kalasa direction). Arrive for lunch.",
                "Kemmanagundi: A hill station at 1,434m developed by the Maharaja of Mysore as a summer retreat. The Raj Bhavan gardens are beautifully maintained. Z Point viewpoint: a short walk to a clifftop viewpoint with spectacular valley views — stay for sunset (typically 6–6:30pm from Oct–Feb).",
                "Shanthala Park waterfall (near Kemmanagundi): Short walk from the main road — a clean waterfall in a forest clearing, far less visited than Hebbe.",
                "Return to Chikmagalur for dinner. The drive back is entirely on winding mountain roads — allow 1.5 hours after dark.",
              ]}
              cost="₹1,200–₹2,000 (jeep hire + fuel + meals)" />

            <DayCard
              day="Day 3"
              title="Kudremukh Trek or Belur/Halebid Temples"
              items={[
                "Option A — Kudremukh National Park trek (for Oct–Feb only): The Kudremukh peak (1,894m) trail is 20km and strenuous — a full day from dawn to dusk. Requires advance forest permit + registered guide. Book a package from a Chikmagalur tour operator (₹1,500–2,500 per person including jeep, guide, and permit). The trek name means &quot;horse face&quot; — the peak has a distinctive shape visible from the trailhead. The shola grasslands at this altitude are extraordinary.",
                "Option B — Belur & Halebid (40km each, en route to Bangalore): These two Hoysala temple complexes are among the finest examples of medieval Indian stone carving anywhere. The Chennakeshava temple at Belur (1117 AD) and the Hoysaleshwara temple at Halebid (1121 AD) both took decades to build. Every surface is covered in detailed carvings — friezes of elephants, horses, warriors, deities, and mythological scenes. Entry ₹25 each (ASI). This is a genuinely world-class heritage site that most Chikmagalur tourists skip entirely.",
                "Option C (if neither): Jhari Falls (near town, short trek from the roadhead), or a second morning at Baba Budangiri for better mist conditions.",
                "Afternoon: Return to town, final coffee shopping, depart Chikmagalur. Most people drive to Bangalore (245km, 5 hours) or Hassan (50km, railway connections).",
              ]}
              cost="₹1,500–₹3,000 (Kudremukh package or temple entry + transport)" />

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mt-4">
              <span className="text-xs text-green-700 uppercase tracking-wide">Total 3-Day Cost (per person) · </span>
              <span className="font-serif text-base text-ink font-light">₹7,000–₹12,000 budget · ₹12,000–₹20,000 mid-range</span>
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
                    <th className="p-3.5 text-xs font-medium text-emerald-300 text-center">🌿 Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (3N)", "₹2,100–₹3,600 (budget homestay)", "₹4,500–₹10,500 (estate stay)", "₹12,000–₹24,000 (luxury estate)"],
                    ["🍽 Food (3 days)", "₹600–₹900", "₹1,500–₹2,500", "₹3,000–₹5,000"],
                    ["🚙 Jeep hire (Hebbe + Day 3)", "₹2,000–₹3,000", "₹3,000–₹5,000", "₹6,000–₹9,000"],
                    ["☕ Coffee to take home", "₹300–₹600", "₹600–₹1,200", "₹1,200–₹2,500"],
                    ["🥾 Kudremukh trek package", "₹1,500–₹2,000", "₹2,000–₹2,500", "₹3,000–₹4,000"],
                    ["🎯 Entry fees", "₹50–₹100", "₹50–₹100", "₹50–₹100"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 3 days)</td>
                    {["₹6,550–₹10,200", "₹11,650–₹21,800", "₹25,250–₹44,600"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Estate homestays (₹1,500–₹3,500/night) typically include meals — this reduces the food line significantly. Jeep hire for Hebbe Falls is mandatory (₹1,000–₹1,500 total, split between group). Kudremukh trek only permitted Nov–Feb with registered guide.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Chikmagalur"
            hotels={[
              { name: "Arabica Estate Homestay", type: "Coffee Estate Stay · Chikmagalur", price: "From ₹1,800/night incl. meals", rating: "5", badge: "Top pick", url: "https://www.booking.com/searchresults.en-gb.html?ss=chikmagalur+coffee+estate&aid=2820480" },
              { name: "Silver Brook Estate", type: "Estate Resort · Chikmagalur Hills", price: "From ₹3,500/night", rating: "4", badge: "Estate", url: "https://www.booking.com/searchresults.en-gb.html?ss=chikmagalur+resort&aid=2820480" },
              { name: "Budget Homestay Chikmagalur", type: "Homestay · Town centre", price: "From ₹700/night", rating: "3", badge: "Budget", url: "https://www.booking.com/searchresults.en-gb.html?ss=chikmagalur+homestay+budget&aid=2820480" },
            ]}
            activities={[
              { name: "Coffee Estate Guided Walk", duration: "3 hours", price: "From ₹400/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=chikmagalur+coffee+tour&partner_id=PSZA5UI" },
              { name: "Mullayanagiri Sunrise Trek", duration: "Half day", price: "From ₹500/person", badge: "Sunrise", url: "https://www.getyourguide.com/s/?q=chikmagalur+trekking&partner_id=PSZA5UI" },
              { name: "Kudremukh National Park Full Day Trek", duration: "Full day", price: "From ₹1,500/person", badge: "Adventure", url: "https://www.getyourguide.com/s/?q=kudremukh+trek&partner_id=PSZA5UI" },
            ]}
            pdfProductId="chikmagalur-3-days-pdf"
          />

          {/* ── GALLERY ── */}
          <DestinationGallery
            title="Chikmagalur — Peaks, Plantations & Waterfalls"
            subtitle="From Karnataka&apos;s highest peak to its finest waterfall — Chikmagalur&apos;s best spots at a glance."
            spots={[
              { name: "Mullayanagiri Peak", query: "mullayanagiri peak karnataka highest point sunrise mist", desc: "Karnataka's highest point at 1,930m — a 1km walk from the parking area to a Shiva temple at the summit. Go before 7am on clear days." },
              { name: "Hebbe Falls", query: "hebbe falls chikmagalur waterfall forest karnataka two tier", desc: "Two-tier waterfall dropping 168m — the finest waterfall in Chikmagalur district. Accessible only by hired jeep from Kalasa village." },
              { name: "Baba Budangiri", query: "baba budangiri hills mist forest karnataka sacred shrine", desc: "The most atmospheric spot in Chikmagalur — a shared Hindu-Muslim pilgrimage site at 1,895m, thick with morning mist and ancient forest." },
              { name: "Coffee Plantation", query: "coffee arabica plantation rows karnataka india green berries", desc: "Working arabica coffee estates — the source of 50% of India's coffee. Guided walks show the full journey from cherry to finished bean." },
              { name: "Kemmanagundi Z Point", query: "kemmanagundi viewpoint sunset valley karnataka hill station", desc: "Z Point at Kemmanagundi — a clifftop viewpoint with a valley dropping steeply below, best at sunset when the light catches the far ridges." },
            ]}
          />

          {/* ── COFFEE GUIDE ── */}
          <section id="coffee" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🫘 The Chikmagalur Coffee Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Chikmagalur is where Indian coffee comes from. Buying coffee here directly from estates is one of the best value-for-money purchases you can make anywhere in India.
            </p>
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-amber-800 mb-3">Coffee Types to Know</h3>
                <div className="space-y-3">
                  {[
                    { name: "Peaberry", price: "₹400–600/250g", desc: "A natural mutation where only one coffee seed develops inside the cherry (instead of two). Rounder, denser bean — more intense, sweeter flavour. Rarer — only about 5% of the crop. This is what to buy in Chikmagalur." },
                    { name: "Plantation A (Arabica)", price: "₹200–350/250g", desc: "Standard arabica estate coffee — smooth, low acidity, excellent for South Indian filter coffee. The workhorse of Chikmagalur output. Good quality at every estate." },
                    { name: "Robusta", price: "₹150–250/250g", desc: "Stronger, more caffeine, less nuanced. Most commercial Indian coffee blends include robusta for body and punch. Better for espresso-style preparation than filter." },
                    { name: "Estate Blend", price: "₹250–400/250g", desc: "Arabica/robusta blend specific to each estate — often the estate&apos;s signature product. Each estate has its own proportion and roast profile. Ask to taste before buying." },
                  ].map((c) => (
                    <div key={c.name} className="flex gap-3 text-xs border-t border-amber-100 pt-3 first:border-0 first:pt-0">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-ink">{c.name}</span>
                          <span className="text-amber-700 font-medium">{c.price}</span>
                        </div>
                        <p className="text-muted font-light leading-relaxed">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-teal-800 mb-3">Where to Buy</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Direct from estates (best):</strong> Ask your estate homestay if they sell their own coffee. Most do — at the lowest price and highest freshness. Freshly roasted before you leave.</p>
                  <p><strong className="text-ink">Coffee Cabin, Chikmagalur main road:</strong> A reliable shop with multiple estate coffees. Staff can explain the differences and allow tasting. Best general retail option in town.</p>
                  <p><strong className="text-ink">Plantation walks:</strong> During the guided walk, you can often buy straight from the estate at the processing facility — the freshest possible purchase.</p>
                  <p><strong className="text-ink">Avoid:</strong> Tourist-facing packaged brands at Chikmagalur tourist spots — often stale, overpriced, and not what the district actually produces.</p>
                  <p><strong className="text-ink">Storage:</strong> Buy whole beans if possible — grind just before use. Store in an airtight container away from light. Freshly-roasted Chikmagalur coffee will last well for 3 weeks in whole bean form.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── TREKS ── */}
          <section id="treks" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🥾 Treks & Viewpoints</h2>
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-amber-800 mb-3">Mullayanagiri — Karnataka&apos;s Highest Point</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Altitude:</strong> 1,930m</p>
                  <p><strong className="text-ink">Distance from town:</strong> 25km</p>
                  <p><strong className="text-ink">Walk from parking:</strong> 1km — paved path, no special fitness required</p>
                  <p><strong className="text-ink">Best time:</strong> Arrive before 6:30am for sunrise. Clouds typically close in by 9–10am. Clear days (Oct–Jan) offer views extending to the plains far below the Ghats.</p>
                  <p><strong className="text-ink">What&apos;s at the top:</strong> A small Shiva/Murugan temple, a few tea stalls, and a viewpoint over the surrounding peaks of the Baba Budangiri range.</p>
                  <p><strong className="text-ink">Permit:</strong> No permit required. Free access.</p>
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-emerald-800 mb-3">Kudremukh Peak — The Full-Day Trek</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Distance:</strong> 20km round trip</p>
                  <p><strong className="text-ink">Difficulty:</strong> Strenuous — steep ascent, long day (10–12 hours)</p>
                  <p><strong className="text-ink">Season:</strong> November–February only. Closed rest of year due to forest regulations and weather.</p>
                  <p><strong className="text-ink">Permit + guide:</strong> Mandatory forest permit + registered guide. Book through a Chikmagalur town operator — packages ₹1,500–₹2,500 per person including jeep transfer to trailhead, guide, and entry fees.</p>
                  <p><strong className="text-ink">What makes it special:</strong> The route passes through some of the finest shola grassland and tropical rainforest in South India. The view from the summit takes in the entire Western Ghats ridge extending south. The Bhadra river originates near this peak.</p>
                  <p><strong className="text-ink">Fitness requirement:</strong> Genuine fitness needed — this is 8–10 hours of active walking with significant elevation gain. Not suitable for casual walkers.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Going in July–August monsoon", desc: "Heavy rain makes most trails impassable. Leeches are present on every forest path — they will get through normal socks and shoes. The Hebbe Falls jeep road floods. The mountain roads become genuinely dangerous. Chikmagalur in full monsoon is beautiful to look at from a covered estate verandah but frustrating for actual exploration.", icon: "🌧️" },
                { title: "Not booking a coffee estate stay", desc: "Town hotels in Chikmagalur are functional but miss the entire point of coming here. The experience IS the plantation — waking up to mist over coffee bushes, drinking estate filter coffee at dawn, walking through rows of arabica with a guide. Book at least 2 nights on a working estate. Most are in the ₹1,500–₹3,500/night range including meals.", icon: "☕" },
                { title: "Missing Baba Budangiri entirely", desc: "Baba Budangiri is rarely mentioned in standard travel listicles — it is 26km from town and requires a morning drive. It is the most atmospheric spot in the entire Chikmagalur district. The Hindu-Muslim shared shrine is historically and culturally extraordinary. Make it your first morning stop.", icon: "🏔" },
                { title: "Expecting Coorg-style luxury", desc: "Chikmagalur is a working agricultural district, not a resort destination. The estates are real farms — you will hear tractors, see workers, smell processing pulp. The accommodations are comfortable but rustic. If you want spa resorts and infinity pools, go to Coorg (150km away). If you want the real thing, Chikmagalur delivers.", icon: "🌿" },
                { title: "Driving yourself without knowing the ghats", desc: "The road to Hebbe Falls, Kemmanagundi, and Kudremukh involves extended sections of steep, hairpin-heavy mountain roads. Night driving in particular is dangerous. For at least one day, hire a local driver who knows the roads (₹1,500–₹2,000/day for a jeep with driver).", icon: "🚗" },
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
                { icon: "🌅", title: "Mullayanagiri Before 6:30am", desc: "The drive from Chikmagalur to Mullayanagiri takes 40 minutes. Leave by 5:45am to arrive for the pre-dawn light. Clear mornings between October and January give views extending 80–100km. By 9am, the summit is typically in cloud.", color: "bg-amber-50 border-amber-200" },
                { icon: "🫘", title: "Ask the Estate to Roast Fresh for You", desc: "Many estate homestays will roast a batch of coffee specifically for guests who ask in advance. Fresh-roasted beans — within 24 hours of roasting — are dramatically better than anything in a packaged product. Ask the night before your departure.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏛️", title: "Add Belur/Halebid on Your Departure Day", desc: "Both Hoysala temple complexes are directly on the route from Chikmagalur to Bangalore — no detour needed. Belur is 40km from town, Halebid another 16km. Allow 2–3 hours for both. The carvings are among the finest in India and often overlooked by Chikmagalur visitors.", color: "bg-teal-50 border-teal-200" },
                { icon: "🌦️", title: "September is an Underrated Time", desc: "Late September (post-monsoon onset) offers lush green landscapes with dramatically less leech activity than July–August. The air is clean, estates are emerald green, and tourist numbers are lower than peak October–January season.", color: "bg-teal-50 border-teal-200" },
                { icon: "📱", title: "Download Offline Maps Before Baba Budangiri Road", desc: "Phone signal is unreliable on the mountain roads to Baba Budangiri and on the Hebbe Falls jeep track. Download the Chikmagalur district offline on Google Maps before you leave town.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "🌿", title: "Pair with Sakleshpur for a 4-Day Trip", desc: "Sakleshpur (60km south) is another coffee hill station with the famous Manjarabad Fort and a scenic heritage rail route. Pairing Chikmagalur + Sakleshpur makes an excellent 4–5 day Karnataka coffee country circuit.", color: "bg-emerald-50 border-emerald-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Planned for You?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group size, and whether you want trekking or estate focus — we&apos;ll send a personalised Chikmagalur itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Chikmagalur Trip →</button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What is the best time to visit Chikmagalur?", a: "September to February is best. October–January offers clear skies, coolest temperatures (10–22°C), and waterfalls at peak flow. September is good for lush green landscapes post-monsoon with fewer leeches. Avoid July–August — heavy rain, leeches on all trails, and flooded roads." },
                { q: "How do I reach Chikmagalur from Bangalore?", a: "Chikmagalur is 245km from Bangalore — approximately 5 hours by road. KSRTC buses run from Bangalore Majestic (₹250–400, ~6 hours). Driving gives the flexibility to stop at estates en route. Nearest railhead is Kadur (25km) with Bangalore trains, then taxi to town." },
                { q: "Is the Mullayanagiri trek difficult?", a: "No — Mullayanagiri (1,930m) involves about 1km of walking from the parking area on a paved path. It is not physically demanding. The challenge is weather — cloud covers the summit by mid-morning. Start before 6:30am for best views. There is a small Shiva/Murugan temple at the peak." },
                { q: "What coffee should I buy in Chikmagalur?", a: "Peaberry is the finest and rarest — small round beans, more intense flavour, ₹400–600 per 250g. Plantation A arabica is the standard and excellent for filter coffee (₹200–350/250g). Buy directly from estates or Coffee Cabin on the main road. Avoid packaged tourist brands." },
                { q: "Can I do Kudremukh trek without a guide?", a: "No — a registered forest guide is mandatory for the Kudremukh peak trek. The trek is inside Kudremukh National Park and requires a forest department permit. Solo trekking without a guide is prohibited. Book through a Chikmagalur town operator — packages ₹1,500–₹2,500 per person including jeep, guide, and permit. The trek is only open November–February." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Explore More Karnataka Hill Stations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Coorg — 3 Day Coffee Estate Guide", href: "/blog/coorg-3-days" },
                { label: "Wayanad — 3 Day Wildlife & Trek Guide", href: "/blog/wayanad-3-days" },
                { label: "Hampi — 3 Day Heritage Guide", href: "/blog/hampi-3-days" },
                { label: "Mysore — 3 Day Palace & Heritage Guide", href: "/blog/mysore-3-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="chikmagalur-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
