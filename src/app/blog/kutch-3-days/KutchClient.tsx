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

const KUTCH_TOC = [
  { id: "decision",   emoji: "⚡",  label: "Which Traveller Are You?" },
  { id: "highlights", emoji: "🏜️", label: "Why Kutch?" },
  { id: "itinerary",  emoji: "📅", label: "3-Day Itinerary" },
  { id: "budget",     emoji: "💰", label: "Budget Breakdown" },
  { id: "crafts",     emoji: "🧵", label: "Craft Villages Guide" },
  { id: "saltdesert", emoji: "🤍", label: "The White Rann" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Kutch 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Kutch in 3 Days — Rann of Kutch, Bhuj Palaces & Craft Villages&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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

export default function KutchClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KUTCH_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kutch" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="rann of kutch white salt desert gujarat india"
            alt="Great Rann of Kutch white salt desert Gujarat India at sunset"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Kutch 3 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">West India</span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kutch in 3 Days: White Rann, Bhuj Palaces & Craft Villages
                <em className="italic text-gold-light"> (Complete Guide)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Gujarat&apos;s most otherworldly district — 7,500km² of salt flat, Italian Gothic palace in the desert, the last rogan art family on earth, and Kalo Dungar sunset at 462m. Budget from ₹6,000 for 3 days.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇮🇳 Gujarat, India</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹6,000</span>
            </div>
          </div>

          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Kutch is one of those places that takes two or three days to properly understand. The White Rann gets all the photographs, but the craft village circuit — communities that have maintained embroidery, copper bell-making, and leather-working traditions for centuries — is equally extraordinary. And then there is Prag Mahal: an Italian Gothic cathedral rising out of the Gujarati desert, built in 1879, which makes no architectural sense and is magnificent for exactly that reason.
            </p>
          </blockquote>

          {/* ── DECISION ── */}
          <section id="decision" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Traveller Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Kutch rewards different kinds of travel. Pick your focus.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { emoji: "🤍", label: "Salt Desert & Nature", sub: "₹2,000–₹4,000/day", desc: "Rann + Kalo Dungar + Banni grasslands", color: "border-sky-200 hover:border-sky-400" },
                { emoji: "🧵", label: "Craft Village Circuit", sub: "₹1,500–₹3,000/day", desc: "Hodka + Nirona + Bhirandiyara villages", color: "border-amber-200 hover:border-amber-400" },
                { emoji: "🏛️", label: "Heritage & History", sub: "₹1,500–₹3,000/day", desc: "Prag Mahal + Aina Mahal + Bhuj old city", color: "border-orange-200 hover:border-orange-400" },
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

          {/* ── WHY KUTCH ── */}
          <section id="highlights" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏜️ Why Kutch?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Kutch is a district the size of Switzerland — 45,652km² — and almost entirely flat, sitting between the Arabian Sea and the Pakistan border. The Great Rann, a seasonal salt marsh that dries into a white salt flat from November to March, is the centrepiece. But Kutch also has the highest concentration of living traditional craft communities in India: 16 documented folk art forms in one district, many still practiced by families in small villages an hour from Bhuj.
            </p>
            <div className="space-y-3">
              {[
                { name: "Aina Mahal, Bhuj", detail: "₹50 entry. Built 18th century for Rao Lakhpatji — the Hall of Mirrors (Aina Mahal) has Italian tilework, Venice glass, and Dutch chandeliers. Damaged in the 2001 earthquake but still operating. The contrast between the ornate interior and earthquake damage outside is genuinely affecting.", tag: "Heritage", color: "border-amber-200 bg-amber-50" },
                { name: "Prag Mahal, Bhuj", detail: "₹150 entry (photo ₹50 extra). An Italian Gothic palace — complete with bell tower — built 1879 in the middle of the Kutch desert. Designed by Colonel Henry Saint Wilkins. Bizarre in the best possible way. The view from the bell tower over Bhuj is excellent.", tag: "Heritage", color: "border-orange-200 bg-orange-50" },
                { name: "Great Rann of Kutch", detail: "80km from Bhuj. 7,500km² salt flat. Best in morning and evening light when the white surface turns gold and pink. Accessible by vehicle to the edge; walking on the salt is permitted in the dry season. Zero light pollution for stargazing at night.", tag: "Salt Desert", color: "border-sky-200 bg-sky-50" },
                { name: "Kalo Dungar (Black Hill)", detail: "98km from Bhuj, 462m — the highest point in Kutch. Views over the entire salt flat are extraordinary, especially the 5:30pm sunset. The flame shrine at the top (where dogs are fed by temple priests) is genuinely strange. The road from Dhordo is well-maintained.", tag: "Viewpoint", color: "border-teal-200 bg-teal-50" },
                { name: "Nirona Village", detail: "40km from Bhuj. Abdul Gafur Khatri makes rogan art — castor oil-based paint on fabric, a 300-year-old craft. His family is considered the last practitioners of genuine rogan art. Watch the process and buy directly from the family. A real and significant craft encounter.", tag: "Crafts", color: "border-emerald-200 bg-emerald-50" },
                { name: "Banni Grasslands", detail: "Near Hodka village, 60km from Bhuj. A dry grassland ecosystem bordering the Rann. Indian wild ass (khur) sanctuary area — spotting them is possible in the early morning. Banni is also home to the Maldhari cattle-herding communities whose way of life is fascinating.", tag: "Wildlife", color: "border-green-200 bg-green-50" },
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
            <StatCard icon="🗓" label="Best Time" value="Nov–Feb" />
            <StatCard icon="🌡️" label="Altitude" value="16m (sea level)" />
            <StatCard icon="🚗" label="From Ahmedabad" value="350km / 5–6hrs" />
            <StatCard icon="💰" label="3-Day Budget" value="₹6,000+" />
          </div>

          {/* ── ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The 3-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">Base yourself in Bhuj (city accommodation) for Days 1 and 3, and near Dhordo/Rann for Day 2. You need your own vehicle or a rented car for the full Kutch circuit — distances are too large for shared transport.</p>

            <DayCard
              day="Day 1"
              title="Bhuj City — Aina Mahal, Prag Mahal & Old City"
              items={[
                "9am: Aina Mahal (₹50 entry) — arrive when it opens. The Hall of Mirrors is extraordinary: Italian tiles, Dutch chandeliers, a floor-level water channel with mechanical fountains. The 2001 earthquake cracked parts of the structure but the core is intact. Allocate 45 minutes.",
                "10:30am: Prag Mahal (₹150 + ₹50 for photography). Built in 1879 in Italian Gothic style — a bell tower, pointed arches, and Corinthian columns in the middle of a Gujarati desert city. The bell tower is climbable (steep stairs) and gives a full 360-degree view over Bhuj. Allow 1 hour.",
                "12pm: Walk into the old city of Bhuj — the Ramkund stepwell is 500m from Prag Mahal. The stepwell was a community bathing and water-storage structure; this one is octagonal and partially restored. The lanes around it have traditional Kutchi houses with mirror-inlaid facades.",
                "1pm: Lunch at a local dhaba in the old city area. Kutchi thali (₹120–₹180): bajra rotla (pearl millet flatbread), dal dhokli, kadhi, garlic chutney, and farsan. The food is wheat-light and heavily dairy — unlike most Indian regional cuisines.",
                "3pm: Sharda Bazar — the main craft and fabric market in Bhuj. Kutchi embroidery (the mirrored needlework worn by local women), leather juttis (shoes), and silver jewellery. Prices are negotiable. Budget ₹500–₹2,000 if you want to take craft items home.",
                "Evening: Hamirsar Lake (central Bhuj, free) — the artificial lake around which Bhuj was built. Good for a sunset walk. The lake is flanked by chhatris (cenotaphs) and the view over the water at dusk is pleasant.",
                "Night: Eat at a local restaurant near your hotel. Ask for the Kutchi thaali specifically — most decent dhabas in Bhuj do it.",
              ]}
              cost="₹600–₹1,200 including entry fees and food" />

            <DayCard
              day="Day 2"
              title="Great Rann of Kutch & Kalo Dungar"
              items={[
                "6:30am: Drive from Bhuj to Dhordo village (80km, 2 hours). The road is well-maintained through flat scrubland. Dhordo is the jumping-off village for the Rann — accommodation options here range from ₹1,500 homestays to the ₹8,000+ Rann Utsav tents (November–February only).",
                "The White Rann: Park at the designated viewpoint area. The salt flat begins at the edge of the road and extends to the horizon — 7,500km² of pure white. Morning light (7–9am) turns the salt golden and warm. Walking on the salt is permitted — the surface is hard and smooth. In November–February, it is completely dry; in March it begins to show cracks.",
                "10am: Rann Utsav area (if visiting November–February): The government-organized cultural complex includes folk dance performances (usually 6pm and 8pm), camel rides (₹200 for 20 minutes), and craft stalls. The VVIP tent city for accommodation is booked months ahead. Day visitors can access the cultural zone.",
                "12pm: Drive to Kalo Dungar (Black Hill) — 18km from Dhordo, total 98km from Bhuj. The road climbs to 462m — Kutch's highest point. The flame shrine at the top has been fed by temple priests for centuries, reportedly. Dogs congregate here for daily feeding — genuinely strange to witness. The viewing platform gives the best panoramic view over the entire Rann.",
                "5:30pm: Kalo Dungar sunset. The sun descends directly over the salt flat and the light goes from white to gold to deep orange over about 45 minutes. This is the best natural light show in Gujarat. Stay until the sun fully sets.",
                "Return to Bhuj (98km) or stay near Dhordo for the night sky: Zero light pollution means extraordinary star visibility. The Milky Way is visible with the naked eye on clear nights.",
              ]}
              cost="₹1,200–₹2,000 including transport and Rann entry" />

            <DayCard
              day="Day 3"
              title="Craft Villages — Nirona, Hodka & Bhirandiyara"
              items={[
                "8am: Drive to Nirona village (40km from Bhuj, 1 hour). Nirona is a Kutchi Muslim village known for two crafts: copper bell-making (ghungroo) and rogan art. The Abdul Gafur Khatri family has practiced rogan art for 5–6 generations — painting intricate patterns on fabric using castor oil-based pigment on a cold metal surface, then transferring to fabric using a thumb print. It is genuinely extraordinary to watch.",
                "Rogan art note: Buy directly from the Khatri family. Prices start at ₹500 for a small piece (20x20cm) and go to ₹10,000+ for large framed works. This is not a tourist souvenir — it is a documented art form. Prime Minister Modi gifted a rogan art piece to Barack Obama in 2014.",
                "11am: Hodka village (20km from Nirona) — a Meghwal community village famous for embroidered leather shoes (mojari/juttis) and traditional Kutchi embroidery. The embroidery uses mirrors (abhla bharat) sewn into intricate geometric patterns. Buy directly from artisans for the best prices and quality.",
                "1pm: Lunch at Shaam-e-Sarhad camp in Hodka (if staying) or packed food from Bhuj. This camp is run by Hodka villagers — the overnight experience (₹3,500–₹5,000 per person including meals) is one of the best village homestays in India.",
                "3pm: Bhirandiyara village (20km from Hodka) — Rabari embroidery community. The Rabari are semi-nomadic cattle herders whose women wear distinctive black wool skirts and produce embroidery with complex mirror-work patterns. The village is accessible to visitors; asking permission before photographing is essential.",
                "5pm: Return to Bhuj (50km) for overnight. If flying back from Bhuj airport, check times — flights to Mumbai depart in the evening.",
              ]}
              cost="₹800–₹1,500 including transport and craft purchases" />

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mt-4">
              <span className="text-xs text-green-700 uppercase tracking-wide">Total 3-Day Cost (per person) · </span>
              <span className="font-serif text-base text-ink font-light">₹6,000–₹10,000 budget · ₹15,000–₹25,000 mid-range</span>
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
                    ["🏨 Accommodation (3N)", "₹2,100–₹4,500 (Bhuj hotel)", "₹7,500–₹15,000", "₹24,000–₹45,000"],
                    ["🍽 Food (3 days)", "₹720–₹1,080 (dhaba thali)", "₹2,100–₹3,600", "₹5,400–₹9,000"],
                    ["🚗 Vehicle hire / fuel", "₹2,000–₹3,000 (car rental)", "₹3,000–₹5,000", "₹6,000–₹10,000"],
                    ["🎯 Entry Fees (all)", "₹400–₹600", "₹400–₹600", "₹400–₹600"],
                    ["🎁 Craft purchases", "₹500–₹1,500", "₹2,000–₹5,000", "₹10,000+"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 3 days)</td>
                    {["₹6,000–₹10,000", "₹15,000–₹25,000", "₹45,000–₹65,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Rann Utsav tent accommodation (₹8,000–₹15,000/night including meals and programs) is not included above — it is a separate premium experience. A vehicle is essential for Kutch; rent a car from Bhuj city for ₹2,000–₹3,000/day including driver. Bhuj has a domestic airport with flights from Mumbai (1.5 hours) and Ahmedabad (45 minutes).
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Kutch"
            hotels={[
              { name: "Hotel Ilark Bhuj", type: "Hotel · Central Bhuj", price: "From ₹1,800/night", rating: "4", badge: "Best value", url: "https://www.booking.com/searchresults.en-gb.html?ss=bhuj+hotel&aid=2820480" },
              { name: "Shaam-e-Sarhad Village Resort", type: "Eco Camp · Hodka Village", price: "From ₹3,500/night", rating: "5", badge: "Unique stay", url: "https://www.booking.com/searchresults.en-gb.html?ss=hodka+village+resort+kutch&aid=2820480" },
              { name: "Rann Utsav Tent City", type: "Tent · Dhordo, Rann", price: "From ₹8,000/night", rating: "5", badge: "Festival only", url: "https://www.booking.com/searchresults.en-gb.html?ss=rann+utsav+tent+city&aid=2820480" },
            ]}
            activities={[
              { name: "Kutch Craft Village Circuit Tour", duration: "Full day", price: "From ₹1,500/person", badge: "Best experience", url: "https://www.getyourguide.com/s/?q=kutch+craft+village+tour&partner_id=PSZA5UI" },
              { name: "Rann of Kutch White Desert Safari", duration: "Full day", price: "From ₹1,200/person", badge: "Iconic", url: "https://www.getyourguide.com/s/?q=rann+of+kutch+tour&partner_id=PSZA5UI" },
              { name: "Bhuj Heritage Walk — Palaces & Old City", duration: "3 hours", price: "From ₹500/person", url: "https://www.getyourguide.com/s/?q=bhuj+heritage+walk&partner_id=PSZA5UI" },
            ]}
            pdfProductId="kutch-3-days-pdf"
          />

          {/* ── CRAFT VILLAGES ── */}
          <section id="crafts" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🧵 Kutch Craft Villages — A Practical Guide</h2>
            <p className="text-sm text-muted font-light mb-6">
              Kutch has 16 documented folk craft traditions — more than anywhere else in India of comparable size. The craft village circuit (Nirona, Hodka, Bhirandiyara, and others) is the part of Kutch that most first-time visitors skip. That is the single biggest mistake you can make in this district.
            </p>
            <div className="space-y-4">
              {[
                { village: "Nirona", craft: "Rogan Art + Copper Bells", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  detail: "Abdul Gafur Khatri and his sons create rogan art — intricate paintings made from castor oil-based paint on a cold surface, then transferred to fabric using thumb impressions. The motifs are traditional Kutchi geometric and floral patterns. Each piece takes 2–10 hours. PM Modi gifted a rogan work to President Obama in 2014.",
                  buy: "₹500–₹10,000+ depending on size and complexity. Buy direct — no middlemen.",
                  distance: "40km from Bhuj, 1 hour" },
                { village: "Hodka", craft: "Meghwal Embroidery & Leather Juttis", bg: "bg-orange-50 border-orange-200", th: "text-orange-800",
                  detail: "Hodka is a Meghwal community village — their embroidery is characterized by fine geometric patterns with small square mirrors (shisha/abhla). The leather juttis (pointed shoes) are hand-stitched with embroidered uppers. The Shaam-e-Sarhad camp here is run by villagers and is one of the best community tourism experiences in India.",
                  buy: "Juttis ₹600–₹1,500/pair. Embroidered fabric panels ₹800–₹3,000.",
                  distance: "60km from Bhuj, 1.5 hours" },
                { village: "Bhirandiyara", craft: "Rabari Embroidery", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  detail: "Rabari women wear distinctive black wool skirts and produce complex embroidery with large mirror pieces (larger than the Meghwal style) and bold geometric patterns in red, yellow, and black. The community is semi-nomadic cattle herders — their craft reflects the bold aesthetic of people who live partly outdoors.",
                  buy: "Embroidered blouses and panels ₹1,000–₹4,000. Negotiation is expected.",
                  distance: "80km from Bhuj, 2 hours" },
              ].map((v) => (
                <div key={v.village} className={`rounded-xl border p-5 ${v.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-3 ${v.th}`}>{v.village} — {v.craft}</h3>
                  <p className="text-xs text-muted font-light leading-relaxed mb-3">{v.detail}</p>
                  <div className="flex flex-wrap gap-4 text-xs">
                    <div><span className="font-medium text-ink">Buy: </span><span className="text-muted font-light">{v.buy}</span></div>
                    <div><span className="font-medium text-ink">Distance: </span><span className="text-muted font-light">{v.distance}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHITE RANN ── */}
          <section id="saltdesert" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🤍 The White Rann — What to Actually Expect</h2>
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 mb-4">
              <p className="text-sm text-muted font-light leading-relaxed mb-4">
                The Great Rann of Kutch is a seasonal salt marsh — the world&apos;s largest. From approximately November to March, the water evaporates completely, leaving a vast flat of white salt crystals that extends to the horizon. Standing on it feels like being on a frozen lake, except the surface is salt, not ice.
              </p>
              <div className="space-y-2 text-xs text-muted font-light">
                <p><strong className="text-ink">Best light:</strong> 7–9am (warm golden light) and 5–7pm (sunset, the salt turns orange and pink)</p>
                <p><strong className="text-ink">Access:</strong> Drive to the edge at Dhordo/Khavda and walk onto the salt flat from there. No fee to walk on the Rann.</p>
                <p><strong className="text-ink">Season:</strong> November–March optimal. April: salt starts cracking. May–October: monsoon floods the flat entirely.</p>
                <p><strong className="text-ink">Night sky:</strong> Zero light pollution. The Milky Way is visible with the naked eye on new moon nights. One of the best stargazing sites in India.</p>
                <p><strong className="text-ink">Rann Utsav:</strong> Government-organized cultural festival November–February near Dhordo. Tent city accommodation. Folk performances at 6pm and 8pm. Camel rides ₹200.</p>
                <p><strong className="text-ink">What to bring:</strong> Sunglasses (mandatory — the reflected glare is intense), sunscreen, hat, water. In November–February, evenings drop to 10–15°C — bring a jacket for sunset.</p>
              </div>
            </div>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Going in summer (April–June)", desc: "Kutch in summer is genuinely dangerous — temperatures reach 45–48°C on the salt flat, the ground radiates heat, and there is no shade. The Rann itself becomes flooded with monsoon rain from July–October. The only viable window is November–March.", icon: "🌡️" },
                { title: "Not booking Rann accommodation in advance", desc: "During Rann Utsav (November–February), the Dhordo tent city sells out months ahead. Local homestays in Dhordo and Khavda also fill up. If you want to stay near the Rann, book at least 6–8 weeks ahead for the November–January peak. Walking in without a reservation means a 2-hour drive back to Bhuj.", icon: "🏕️" },
                { title: "Only spending time at the White Rann", desc: "The salt flat gets all the Instagram attention, but the craft villages — particularly Nirona (rogan art) and Hodka (Meghwal embroidery) — are equally significant. Many first-time visitors spend all their time at the Rann and skip the villages. This misses the human dimension of Kutch.", icon: "🧵" },
                { title: "Trying to do Kutch in 1 day from Ahmedabad", desc: "Bhuj is 350km from Ahmedabad (5–6 hours driving). Many people attempt Kutch as a day trip, arriving at noon and leaving by 6pm. This is not enough to see anything properly. 3 nights minimum — fly to Bhuj from Mumbai (1.5 hours) or Ahmedabad (45 minutes) to save travel time.", icon: "📍" },
                { title: "Underestimating distances within Kutch", desc: "Bhuj to the Rann is 80km. Bhuj to Nirona is 40km. Bhuj to Kalo Dungar is 98km. The craft village circuit (Nirona + Hodka + Bhirandiyara) covers 150+ km from Bhuj and back. You need a vehicle — shared transport between villages doesn't exist. Hire a car with driver from Bhuj for ₹2,000–₹3,000/day.", icon: "🚗" },
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
                { icon: "🌅", title: "Kalo Dungar Sunset Is the Real Highlight", desc: "Most Kutch guides emphasize the White Rann. The Kalo Dungar sunset at 462m is equally extraordinary — the entire salt flat below you turns golden orange as the sun descends. Arrive by 5pm, leave after dark. The drive down with the Rann lit by dusk is one of the best drives in India.", color: "bg-sky-50 border-sky-200" },
                { icon: "📸", title: "Sunrise on the Rann — Minimal Crowds", desc: "The Rann is busiest from 10am–3pm when tourist coaches arrive. For sunrise (6–8am), you may be the only people standing on the salt flat. The golden morning light on white salt is different from afternoon light — softer and more beautiful. Plan to be there before 7am.", color: "bg-sky-50 border-sky-200" },
                { icon: "🛍️", title: "Negotiate for Craft Purchases — But Not Aggressively", desc: "The artisans in Nirona and Hodka set their prices based on time spent making each piece. Rogan art that takes 6 hours genuinely cannot be priced at ₹200. Light negotiation (10–15%) is acceptable. Aggressive bargaining for traditional crafts is disrespectful and harms the community more than it saves you.", color: "bg-amber-50 border-amber-200" },
                { icon: "🍽️", title: "Eat the Kutchi Thali, Not the Gujarati Thali", desc: "There is a difference. Standard Gujarati thali is sweet and wheat-based. Kutchi thali uses bajra rotla (pearl millet bread), more garlic and chilli, and different dals. Ask specifically for Kutchi thali at your dhaba. Many tourist restaurants default to generic Gujarati food.", color: "bg-amber-50 border-amber-200" },
                { icon: "✈️", title: "Fly to Bhuj Rather Than Drive from Ahmedabad", desc: "IndiGo and Air India operate Mumbai–Bhuj (1.5 hours, ₹2,000–₹4,000) and Ahmedabad–Bhuj (45 minutes, ₹1,500–₹3,000) routes. Flying saves 5–6 hours on the road each way, which is more than enough time to do an additional day of sightseeing. Check both routes when booking.", color: "bg-teal-50 border-teal-200" },
                { icon: "🌙", title: "New Moon Night at the Rann for Stargazing", desc: "Check the lunar calendar when planning your Kutch trip. A new moon night on the Rann means complete darkness — no light pollution, no moonlight, just the Milky Way from horizon to horizon over white salt. This is one of the finest stargazing experiences in India. Plan your Day 2 night stay at Dhordo around a new moon if possible.", color: "bg-teal-50 border-teal-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Planned for You?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group size, and budget — we&apos;ll send a personalised Kutch itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Kutch Trip →</button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Contact Us →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "When is the best time to visit Kutch?", a: "November to February is the optimal window. The Rann is fully dry (accessible on foot), temperatures are 15–25°C, and the Rann Utsav cultural festival runs through this period. March sees the salt beginning to crack. October is transitional — the Rann may still have residual monsoon water. April–October is off-season: heat and/or flooding make the Rann inaccessible." },
                { q: "What is Rann Utsav and do I need to book the tent city?", a: "Rann Utsav is a Gujarat Tourism-organized cultural festival running November to February near Dhordo village. The tent city — a collection of luxury and standard tents — is the official accommodation. Prices range from ₹8,000 to ₹15,000 per person per night including meals and cultural performances. It sells out months in advance. Book through Gujarat Tourism's official website. Day visitors can attend without staying in the tent city." },
                { q: "How do I reach Bhuj?", a: "By air: IndiGo and Air India operate Mumbai–Bhuj (1.5 hours) and Ahmedabad–Bhuj (45 minutes). By train: The Bhuj–Mumbai Express runs 3 times weekly (18 hours). By road from Ahmedabad: 350km, 5–6 hours on NH27. Flying to Bhuj is the most practical approach for a 3-day visit." },
                { q: "Is the Rann of Kutch only accessible during Rann Utsav?", a: "No. The Rann is a natural geographical feature that exists year-round. The Rann Utsav (tent city and organized programs) runs November–February, but the salt flat itself is accessible as long as it's dry — approximately November to March. Outside festival season, accommodation near the Rann is limited to local homestays in Dhordo and Khavda villages." },
                { q: "What crafts should I buy in Kutch?", a: "Rogan art (Nirona — Abdul Gafur Khatri family), Meghwal embroidered juttis (Hodka), copper bells (Nirona), Kutchi embroidered textiles (Bhirandiyara), and silver jewellery (Bhuj market). Buy directly from artisans in the villages for authenticity and fair prices — avoid the tourist souvenir shops in Bhuj city." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a West India Circuit?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Ahmedabad — Heritage City Guide", href: "/blog/ahmedabad-guide" },
                { label: "Jaisalmer — 3 Day Desert Guide", href: "/blog/jaisalmer-3-days" },
                { label: "Puri — 3 Day Odisha Coast Guide", href: "/blog/puri-3-days" },
                { label: "Thekkady — 3 Day Wildlife Guide", href: "/blog/thekkady-3-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="kutch-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
