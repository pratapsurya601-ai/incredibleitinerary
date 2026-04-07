"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import TableOfContents from "@/components/blog/TableOfContents";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import RelatedGuides from "@/components/blog/RelatedGuides";
import Breadcrumb from "@/components/blog/Breadcrumb";

const BANGALORE_TOC = [
  { id: "decision",   emoji: "⚡",  label: "Which Traveller Are You?" },
  { id: "highlights", emoji: "🌿", label: "Why Bangalore?" },
  { id: "itinerary",  emoji: "📅", label: "3-Day Itinerary" },
  { id: "budget",     emoji: "💰", label: "Budget Breakdown" },
  { id: "food",       emoji: "🍽️", label: "Food Guide" },
  { id: "nightlife",  emoji: "🍺", label: "Nightlife & Brewpubs" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Bangalore 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Bangalore in 3 Days — Cubbon Park, Lalbagh, Darshinis & Brewpubs&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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

export default function BangaloreClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BANGALORE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Bangalore" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="bangalore lalbagh botanical garden india"
            alt="Lalbagh Botanical Garden Bangalore India glasshouse colonial"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Bangalore 3 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">South India</span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Bangalore in 3 Days: Parks, Palaces, Darshinis & Craft Beer
                <em className="italic text-gold-light"> (Complete Guide)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                India&apos;s tech capital at 920m — Cubbon Park at dawn, Tipu Sultan&apos;s palace, the 1854 Lalbagh glasshouse, masala dosa for ₹40, and Toit Brewpub. Budget from ₹5,000 for 3 days.
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
              <span>💰 From ₹5,000</span>
            </div>
          </div>

          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Bangalore is not a tourist city — it never was. It is a working city that happens to have 120 acres of park in its centre, a palace from Tipu Sultan&apos;s era, the best craft beer in South India, and a breakfast culture (darshinis) that is completely unique to this place. Three days is enough to understand what makes it different from every other Indian city.
            </p>
          </blockquote>

          {/* ── DECISION ── */}
          <section id="decision" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Traveller Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Bangalore works differently depending on what you are here for.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { emoji: "🍽️", label: "Food & Culture", sub: "₹1,500–₹3,000/day", desc: "Darshini breakfast + heritage + Koramangala evenings", color: "border-amber-200 hover:border-amber-400" },
                { emoji: "🌿", label: "Parks & Heritage", sub: "₹1,200–₹2,500/day", desc: "Cubbon Park + Lalbagh + Tipu Sultan + ISKCON", color: "border-teal-200 hover:border-teal-400" },
                { emoji: "🦁", label: "Day Trip Explorer", sub: "₹2,000–₹4,000/day", desc: "Bannerghatta safari or Nandi Hills drive", color: "border-emerald-200 hover:border-emerald-400" },
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

          {/* ── WHY BANGALORE ── */}
          <section id="highlights" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🌿 Why Bangalore?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Most visitors write Bangalore off as a transit city — a place you pass through on the way to Mysore, Coorg, or Ooty. That is understandable but wrong. The city has a distinct identity built over 500 years: Indo-Saracenic palaces, a 240-acre botanical garden with an 1854 glasshouse, a breakfast culture (darshinis) that exists nowhere else in India, and more microbreweries per square kilometre than any other Indian city.
            </p>
            <div className="space-y-3">
              {[
                { name: "Cubbon Park (120 acres)", detail: "Free entry. Central Bangalore&apos;s green lung — 120 acres of trees, joggers, and quiet benches. Best at 7am before the heat. The Vidhana Soudha (Karnataka state legislature) and High Court building next to it are worth photographing.", tag: "Park", color: "border-emerald-200 bg-emerald-50" },
                { name: "Lalbagh Botanical Garden", detail: "₹20 entry. 240 acres, established 1760 by Hyder Ali. The 1854 glasshouse (modelled on London&apos;s Crystal Palace) hosts bi-annual flower shows. One of the finest botanical gardens in Asia.", tag: "Garden", color: "border-green-200 bg-green-50" },
                { name: "Tipu Sultan&apos;s Summer Palace", detail: "₹15 entry, closed Tuesdays. Built 1791, all wood — Indo-Saracenic arches and painted interiors. Surprisingly intact for a 230-year-old structure. 30–45 minutes well spent.", tag: "Heritage", color: "border-amber-200 bg-amber-50" },
                { name: "ISKCON Bangalore Temple", detail: "Free entry. One of the largest ISKCON temples in the world — inaugurated 1997. The prasadam lunch (₹150) in the dining hall is worth visiting for alone. 10am–1pm is busiest.", tag: "Spiritual", color: "border-orange-200 bg-orange-50" },
                { name: "Bannerghatta National Park", detail: "40km from city. Entry ₹60 + safari ₹250. Lions, tigers, elephants, and bear safari enclosures. The butterfly park (₹80) is excellent. Allow 4–5 hours total including travel. Weekday visits avoid the worst crowds.", tag: "Wildlife", color: "border-teal-200 bg-teal-50" },
                { name: "Nandi Hills (day trip)", detail: "60km drive, 1,475m altitude. Sunrise point is the main draw — arrive before 6am for the best light over the valley. The fortress (Tipu Sultan&apos;s summer retreat) is at the top. Windy road, beautiful drive.", tag: "Day Trip", color: "border-sky-200 bg-sky-50" },
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
            <StatCard icon="🗓" label="Best Time" value="Oct–Feb" />
            <StatCard icon="⛰️" label="Altitude" value="920m" />
            <StatCard icon="✈️" label="From Delhi" value="2,150km / 2h15m" />
            <StatCard icon="💰" label="3-Day Budget" value="₹5,000+" />
          </div>

          {/* ── ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The 3-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">Base yourself centrally — MG Road, Shivajinagar, or Indiranagar. Whitefield is 25km away and defeats the purpose.</p>

            <DayCard
              day="Day 1"
              title="Cubbon Park · Old Bangalore · MG Road Evening"
              items={[
                "7am: Cubbon Park (free, 120 acres) — arrive early to beat the heat. The park is full of joggers, yoga practitioners, and retired civil servants at this hour. Walk to the Vidhana Soudha exterior (the state legislature building, 1956) and Karnataka High Court — both are Indo-Saracenic architecture at its most grandiose.",
                "9:30am: Tipu Sultan's Summer Palace (₹15, closed Tuesdays) — a 10-minute auto from Cubbon Park. Built 1791, entirely of wood with painted arches. Smaller than you expect but the craftsmanship is extraordinary for its era. Allow 45 minutes.",
                "11am: KR Market flower market (between the palace and City Market) — the wholesale flower market is technically best at 5am, but even at 11am you'll see mountains of marigolds, jasmine, and roses being loaded onto trucks for temples across the city. Chaotic and photogenic.",
                "1pm: Lunch at a proper darshini near City Market or Shivajinagar bus stand — this is the beating heart of working Bangalore. A masala dosa costs ₹35–₹50, filter coffee ₹15–₹25. You eat standing at a counter and leave when you're done. No menus, no waiting for bills.",
                "3:30pm: Church Street — Bangalore's literary café street. Browse Blossom Book House (secondhand books, one of the best in India), grab coffee at Café Coffee Day or one of the independent cafés.",
                "5pm: Brigade Road and MG Road walking — more useful for understanding Bangalore's social fabric than for shopping. The contrast between the colonial-era church buildings and the tech-era signage is distinctly Bangalorean.",
                "Evening: Church Street Social (book tables on weekends) or Toit Brewpub on Indiranagar 100 Feet Road — Toit is Bangalore's most consistently excellent craft beer pub, must book a week ahead on weekends.",
              ]}
              cost="₹1,200–₹2,400 including darshini breakfast + lunch + evening drinks" />

            <DayCard
              day="Day 2"
              title="Ulsoor Lake · ISKCON · Lalbagh · Koramangala Evening"
              items={[
                "7:30am: Ulsoor Lake (free, central Bangalore) — 50 acres of lake with a walking path. Rowboats ₹50 for 30 minutes. Good for an early morning walk before the city heats up. The Gurdwara on the east bank is architecturally interesting.",
                "9am: Breakfast at Brahmin's Coffee Bar (Basavanagudi area) — famous for filter coffee and idli-vada since 1946. Small, cash-only, closes by noon. Queue is usually 15–20 minutes — worth every minute. Alternatively, MTR on Lalbagh Road for rava idli (MTR claims to have invented it) — slightly more expensive but equally good.",
                "10:30am: ISKCON Bangalore Temple (free entry) — one of the largest ISKCON complexes in the world. The architecture is ornate to the point of excess, which makes it fascinating. Prasadam lunch in the dining hall (₹150) is worth staying for — simple, clean, filling.",
                "2pm: Lalbagh Botanical Garden (₹20 entry) — 240 acres, established 1760. The 1854 glasshouse is the centrepiece — a glass and iron structure modelled on London's Crystal Palace. The lake inside the garden is a good spot to sit. Allow 2 hours minimum.",
                "5:30pm: Koramangala 5th Block and 80 Feet Road — Bangalore's food and craft beer corridor. Toit is here. So is Arbor Brewing Company, The Humming Tree (live music venue), and dozens of excellent restaurants. This neighbourhood is what people mean when they talk about 'new Bangalore'.",
                "Dinner: Koramangala has every cuisine at every price point. For Bangalore-specific food, try Meghana Foods for biryani (consistently rated the best in the city, ₹200–₹350) or any of the Andhra restaurants for spicy thali.",
              ]}
              cost="₹1,000–₹2,000 excluding accommodation" />

            <DayCard
              day="Day 3"
              title="Bannerghatta National Park or Nandi Hills Day Trip"
              items={[
                "Option A — Bannerghatta National Park (40km south): Leave by 9am. Bannerghatta entry ₹60 + safari ₹250. The lion, tiger, and elephant safari enclosures are the main draw — you ride in a caged bus through actual enclosures with wild animals. The zoo section is large and well-maintained. The butterfly park (₹80 extra) is worth doing if you have children. Allow 4 hours at the park.",
                "Option B — Nandi Hills (60km north, 1,475m): Leave by 5:30am to reach the summit before sunrise (around 6:15am). The views over the plateau at sunrise are the entire reason to come. The fortress walls from Tipu Sultan's era are still largely intact. The road up has 20+ hairpin bends — scooter hire from Bangalore is not recommended; take a cab (₹1,200–₹1,800 return shared between 4).",
                "Back in the city by 2–3pm: Jayanagar 4th Block is one of Bangalore's best local markets — textiles, Udupi restaurants, and the Jayanagar Complex for good South Indian snacks.",
                "Evening: Indiranagar 100 Feet Road is the alternative evening hub to Koramangala — less crowded, slightly more relaxed, same quality of food and bars. Barbeque Nation (book ahead) or the dozens of independent restaurants.",
                "If leaving Bangalore: Kempegowda International Airport is 35km from the city centre — allow 90 minutes minimum during peak hours (5–8pm), 60 minutes otherwise. The Namma Metro Purple Line connects Majestic to the airport; check the current schedule as extensions are ongoing.",
              ]}
              cost="₹800–₹1,500 for day trip + food" />

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
                    ["🏨 Accommodation (3N)", "₹1,500–₹2,700 (hostel)", "₹4,500–₹9,000", "₹12,000–₹24,000"],
                    ["🍽 Food & Drinks (3 days)", "₹600–₹900", "₹2,100–₹3,600", "₹5,400–₹9,000"],
                    ["🚗 Local Transport (Uber/Metro)", "₹600–₹900", "₹1,500–₹2,400", "₹3,000–₹4,500"],
                    ["🎯 Entry Fees (all sites)", "₹200–₹350", "₹200–₹350", "₹200–₹350"],
                    ["🦁 Bannerghatta Safari", "₹310 (entry+safari)", "₹310", "₹310"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 3 days)</td>
                    {["₹5,000–₹8,000", "₹12,000–₹18,000", "₹24,000–₹38,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Bangalore is India&apos;s most expensive city for restaurants and bars but among the cheapest for street food and darshinis. A darshini breakfast costs ₹60–₹100 with coffee. Budget accommodation in Zostel or similar hostels from ₹500/night.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Bangalore"
            hotels={[
              { name: "Zostel Bangalore", type: "Hostel · MG Road Area", price: "From ₹550/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/searchresults.en-gb.html?ss=zostel+bangalore&aid=2820480" },
              { name: "Ibis Bangalore City Centre", type: "Hotel · Central Bangalore", price: "From ₹2,800/night", rating: "4", badge: "Mid-range", url: "https://www.booking.com/searchresults.en-gb.html?ss=ibis+bangalore+city&aid=2820480" },
              { name: "The Leela Palace Bangalore", type: "Luxury Hotel · Old Airport Road", price: "From ₹14,000/night", rating: "5", badge: "Premium", url: "https://www.booking.com/hotel/in/the-leela-palace-bangalore.html?aid=2820480" },
            ]}
            activities={[
              { name: "Bangalore Heritage Walk — Old City", duration: "3 hours", price: "From ₹500/person", badge: "Best value", url: "https://www.getyourguide.com/s/?q=bangalore+heritage+walk&partner_id=PSZA5UI" },
              { name: "Bannerghatta National Park Day Tour", duration: "Full day", price: "From ₹1,200/person", badge: "Wildlife", url: "https://www.getyourguide.com/s/?q=bannerghatta+safari&partner_id=PSZA5UI" },
              { name: "Nandi Hills Sunrise Day Trip", duration: "Half day", price: "From ₹800/person", url: "https://www.getyourguide.com/s/?q=nandi+hills+bangalore&partner_id=PSZA5UI" },
              { name: "Bangalore Food & Darshini Walk", duration: "2.5 hours", price: "From ₹600/person", url: "https://www.getyourguide.com/s/?q=bangalore+food+tour&partner_id=PSZA5UI" },
            ]}
            pdfProductId="bangalore-3-days-pdf"
          />

          {/* ── FOOD GUIDE ── */}
          <section id="food" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Bangalore Food Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The single best thing about eating in Bangalore is the darshini system. You will not find it anywhere else in India. Beyond that, the city has arguably the best Andhra food outside of Hyderabad, excellent craft beer, and a South Indian breakfast scene that is worth planning a trip around.
            </p>
            <div className="space-y-4">
              {[
                { title: "Darshini Restaurants (The Bangalore Original)", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["What it is","Standing self-service South Indian restaurant — unique to Bangalore"], ["Price","Masala dosa ₹35–₹50, filter coffee ₹15–₹25, idli-vada ₹40–₹60"], ["Hours","6am–noon for breakfast; most close by 1pm"],["Format","Pay at counter, collect plate, eat standing, leave when done"]],
                  note: "The whole experience takes 10 minutes. There is no menu to study. You watch what the person ahead of you orders and do the same. This is Bangalore breakfast — there is nothing else like it." },
                { title: "The Famous Names", bg: "bg-orange-50 border-orange-200", th: "text-orange-800",
                  rows: [["Vidyarthi Bhavan","Basavanagudi — masala dosa since 1943. Queue is always 30+ minutes but the ghee dosa is genuinely different."], ["MTR","Lalbagh Road — claims to have invented rava idli. Still excellent. More expensive than a regular darshini."],["Brahmin's Coffee Bar","Basavanagudi — filter coffee + idli-vada since 1946. Tiny, cash only, closes at noon."],["Meghana Foods","Koramangala/Residency Road — consistently best biryani in the city, ₹200–₹350."]],
                  note: "Vidyarthi Bhavan is genuinely worth the queue. Go at 8am on a weekday and you'll be inside within 20 minutes." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 ${area.th}`}>{area.title}</h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-32 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">⚠️ {area.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── NIGHTLIFE ── */}
          <section id="nightlife" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍺 Nightlife & Craft Beer</h2>
            <p className="text-sm text-muted font-light mb-6">
              Bangalore has more operational microbreweries than any other Indian city — a fact that surprises visitors and makes residents insufferably proud. The concentrated zones are Koramangala, Indiranagar, and the MG Road-UB City corridor.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Toit Brewpub", loc: "Indiranagar 100 Feet Road", note: "The benchmark. Six house-brewed beers on tap, always solid. Book a week ahead for Friday–Saturday. Weissbier and the IPA are the reliable orders. Food is above average for a pub.", price: "Beer ₹350–₹450/pint" },
                { name: "Arbor Brewing Company", loc: "Koramangala", note: "American-style brewery with a large outdoor terrace. Good rotating seasonal beers. More relaxed than Toit — easier to get a table on weekends. The amber ale is consistently good.", price: "Beer ₹300–₹420/pint" },
                { name: "Church Street Social", loc: "Church Street", note: "Part bar, part co-working space, part café. Not a pure brewpub but excellent cocktails and a rooftop that is properly pleasant in October–February. More accessible than the Koramangala spots.", price: "Cocktails ₹350–₹500" },
                { name: "Windmills Craftworks", loc: "Whitefield / Sadashivanagar", note: "Best music programming of any Bangalore bar — live jazz and acoustic sets most evenings. The beer quality is very good. Worth the trip if you care about listening to music while you drink.", price: "Beer ₹350–₹450/pint" },
              ].map((bar) => (
                <div key={bar.name} className="bg-white rounded-xl border border-parchment-2 p-5">
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-medium text-sm text-ink">{bar.name}</p>
                    <span className="text-[0.6rem] bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full text-amber-700 uppercase tracking-wide flex-shrink-0 ml-2">{bar.price}</span>
                  </div>
                  <p className="text-[0.68rem] text-muted uppercase tracking-wide mb-2">{bar.loc}</p>
                  <p className="text-xs text-muted font-light leading-relaxed">{bar.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Booking note:</strong> Toit and Arbor require advance booking on Thursday–Sunday. Walk-ins are accepted at the bar counter but table seating fills by 7:30pm. Call directly or use Dineout. Bangalore&apos;s last orders for alcohol are typically 11pm on weekdays, midnight on weekends.
              </p>
            </div>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting in April–June", desc: "Bangalore can hit 38–40°C in these months — unusual for a city at 920m but increasingly common. The parks and outdoor walking become genuinely unpleasant by 10am. October–February is consistently the best window: 15–28°C, clear skies, no risk of afternoon downpours.", icon: "🌡️" },
                { title: "Underestimating Bangalore traffic", desc: "A 30-minute Uber ride on Google Maps can take 90 minutes during peak hours (8–10am and 5–8pm). Plan your Day 1 Cubbon Park visit for 7am specifically to avoid this. The metro (Purple and Green lines) is the only reliable timed transport in the city centre.", icon: "🚗" },
                { title: "Staying in Whitefield when visiting central sights", desc: "Whitefield is where the IT parks are — it is 25km from Cubbon Park. Many hotels list themselves as 'Bangalore' without clarifying the area. Check that your hotel is within 5km of MG Road or Shivajinagar. Otherwise, your entire Day 1 is consumed by getting into the city.", icon: "📍" },
                { title: "Missing the darshini breakfast experience", desc: "Darshinis are the most distinctly Bangalorean thing in the city. Many visitors skip them for their hotel breakfast and miss the only genuinely unique food experience Bangalore offers. Find the nearest darshini to your hotel and eat there every morning. Total cost: ₹60–₹100.", icon: "🍽️" },
                { title: "Expecting a traditional 'tourist' city", desc: "Bangalore has no single overriding monument the way Agra has the Taj or Jaipur has the City Palace. The city's pleasures are distributed — parks, food, pubs, the working rhythm of a real Indian metropolis. Adjust expectations accordingly and the three days become much more enjoyable.", icon: "🏛️" },
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
                { icon: "🕐", title: "Use Namma Metro for City Centre Moves", desc: "The Purple Line (Baiyappanahalli to Mysuru Road) and Green Line (Nagasandra to Silk Institute) cover all the central sights. MG Road station is well-placed for Cubbon Park, Brigade Road, and Indiranagar. ₹15–₹45 per trip vs. ₹200–₹400 Uber during peak hours.", color: "bg-amber-50 border-amber-200" },
                { icon: "☕", title: "Shivaji Nagar Breakfast Before 8am", desc: "The area around the Shivaji Nagar bus stand has Bangalore's highest concentration of early-opening darshinis. Rava idli with coconut chutney and filter coffee at 6:30am for ₹40 — the best meal you will eat in the city.", color: "bg-amber-50 border-amber-200" },
                { icon: "🌿", title: "Lalbagh on a Weekday Morning", desc: "Lalbagh is at its best before 9am on weekdays when it's mostly occupied by serious botanists and elderly walkers. The glasshouse interior (check for the bi-annual flower show in January and August) is worth the ₹20 entry alone.", color: "bg-teal-50 border-teal-200" },
                { icon: "📱", title: "Rapido for Last-Mile Trips", desc: "Uber and Ola are expensive during peak hours. Rapido (bike taxi) costs ₹30–₹80 for most city centre trips and largely ignores traffic by using footpaths during jams. Not for luggage but excellent for quick hops between Lalbagh, Tipu Sultan's Palace, and City Market.", color: "bg-teal-50 border-teal-200" },
                { icon: "🦁", title: "Bannerghatta on a Weekday Only", desc: "Bannerghatta on a weekend is a parking lot with animals. The lion and tiger safari becomes a slow procession of AC buses bumper-to-bumper. Go on a Tuesday or Wednesday — you will have the safari bus largely to yourself and the animals are more visible without engine noise.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "🛍️", title: "Commercial Street for Local Shopping", desc: "Commercial Street (near Brigade Road) is Bangalore's best concentrated street shopping — fabric, clothing, accessories, silver jewellery, all at negotiable prices. Busiest on weekends. Go on a Friday afternoon before the weekend crowds arrive.", color: "bg-emerald-50 border-emerald-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Planned for You?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group size, and budget — we&apos;ll send a personalised Bangalore itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Bangalore Trip →</button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Contact Us →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What is the best time to visit Bangalore?", a: "October to February is the best time. Temperatures stay between 15–28°C with clear skies. March–April is acceptable (warming to 32°C). Avoid April–June when temperatures can reach 38–40°C — unusual for a city at 920m but increasingly common with urban heat islands. July–September has frequent afternoon showers but sightseeing is generally unaffected." },
                { q: "How much does a 3-day Bangalore trip cost?", a: "Budget: ₹5,000–₹8,000 for 3 days staying in a hostel (₹500–₹900/night) and eating at darshinis (₹60–₹100/meal) with entry fees and metro transport. Mid-range: ₹12,000–₹18,000 with a decent hotel and restaurant dinners. The craft beer scene is expensive by Indian standards — budget ₹350–₹450 per pint." },
                { q: "Is Bangalore worth visiting for 3 days?", a: "It depends on what you want. Bangalore is not a monument-heavy city — if you've come for temples and forts, Mysore (3 hours) is better suited. Bangalore rewards visitors who want parks, food culture, craft beer, and the texture of a working Indian metropolis. Three days is enough to do the parks, one day trip, and the food and nightlife circuit." },
                { q: "What is a darshini and where should I eat at one?", a: "Darshinis are standing self-service South Indian restaurants unique to Bangalore. You order at a counter, collect your food, eat standing at a high shelf, and leave when done. No waiter, no bill, no waiting. Masala dosa ₹35–₹50, filter coffee ₹15–₹25. Vidyarthi Bhavan (Basavanagudi, since 1943) and MTR (Lalbagh Road) are the famous names but any neighbourhood darshini within 200m of your hotel will serve essentially the same quality." },
                { q: "How do I get around Bangalore?", a: "Namma Metro covers the central sights (Purple and Green lines). Uber and Ola are reliable but expensive and slow during peak hours. Rapido (bike taxi) is excellent for short hops within the city centre at ₹30–₹80. For Bannerghatta (40km) or Nandi Hills (60km), book a cab through Ola or arrange with a local driver the day before." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a South India Circuit?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Mysore — 2 Day Heritage Guide", href: "/blog/mysore-2-days" },
                { label: "Coorg — 3 Day Coffee Estate Guide", href: "/blog/coorg-3-days" },
                { label: "Wayanad — 3 Day Wildlife Guide", href: "/blog/wayanad-3-days" },
                { label: "Ooty — 3 Day Hill Station Guide", href: "/blog/ooty-3-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="bangalore-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
