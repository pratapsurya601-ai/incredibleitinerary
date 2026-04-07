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

const PURI_TOC = [
  { id: "decision",     emoji: "⚡",  label: "Which Traveller Are You?" },
  { id: "highlights",   emoji: "🌊", label: "Why Puri?" },
  { id: "itinerary",    emoji: "📅", label: "3-Day Itinerary" },
  { id: "budget",       emoji: "💰", label: "Budget Breakdown" },
  { id: "food",         emoji: "🍛", label: "Odisha Food Guide" },
  { id: "konark",       emoji: "🏛️", label: "Konark Deep Dive" },
  { id: "templeguide",  emoji: "🙏", label: "Temple Visitor Guide" },
  { id: "mistakes",     emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",         emoji: "💡", label: "Pro Tips" },
  { id: "faq",          emoji: "❓", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Puri 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Puri in 3 Days — Jagannath Temple, Konark Sun Temple & Odisha Coast&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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

export default function PuriClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={PURI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Puri" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="puri beach odisha india bay of bengal"
            alt="Puri beach sunrise Bay of Bengal Odisha India"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Puri 3 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">East India</span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Puri in 3 Days: Jagannath Temple, Konark Sun Temple & the Bay of Bengal
                <em className="italic text-gold-light"> (Complete Guide)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Odisha&apos;s sacred coast — one of India&apos;s four dhams, a 1250 AD chariot temple UNESCO site, the finest east-facing beach sunrise in India, and chhena poda (Odia cheesecake). Budget from ₹5,000 for 3 days.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇮🇳 Odisha, India</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹5,000</span>
            </div>
          </div>

          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Puri is one of India&apos;s four sacred dhams — a pilgrimage site that has drawn devotees for over a thousand years. But it is also a functioning beach town on the Bay of Bengal with some of the best Odia food in the country. Konark, 35km away, contains the finest temple sculpture in India. Three days covers all of it at a reasonable pace.
            </p>
          </blockquote>

          {/* ── DECISION ── */}
          <section id="decision" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Traveller Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Puri appeals to very different kinds of travellers.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { emoji: "🙏", label: "Pilgrimage & Temples", sub: "₹1,500–₹3,000/day", desc: "Jagannath darshan + Konark + Mahaprasad", color: "border-amber-200 hover:border-amber-400" },
                { emoji: "🌊", label: "Beach & Seafood", sub: "₹1,500–₹3,000/day", desc: "Sunrise + fishing boats + beach dhabas", color: "border-sky-200 hover:border-sky-400" },
                { emoji: "🦭", label: "Wildlife & Backwaters", sub: "₹2,000–₹4,000/day", desc: "Chilika Lake dolphins + migratory birds", color: "border-teal-200 hover:border-teal-400" },
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

          {/* ── WHY PURI ── */}
          <section id="highlights" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🌊 Why Puri?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Puri sits on a narrow strip of land between the Bay of Bengal and Chilika Lake — India&apos;s largest brackish water lagoon. The beach faces east, giving sunrise views over open ocean. The Jagannath Temple&apos;s 65-metre shikhara is visible from the beach. And 35km up the coast, Konark&apos;s Sun Temple — built in 1250 AD as a stone chariot pulled by 24 wheels — is the finest example of medieval Indian temple sculpture anywhere.
            </p>
            <div className="space-y-3">
              {[
                { name: "Puri Beach Sunrise", detail: "East-facing beach on the Bay of Bengal — one of the best sunrise spots in India. Fisher boats returning at dawn, the temple shikhara silhouetted against orange sky. Swargadwar cremation ghat is 2km up the beach — sacred and openly accessible.", tag: "Beach", color: "border-sky-200 bg-sky-50" },
                { name: "Jagannath Temple", detail: "One of India's four sacred dhams. 65m shikhara. Non-Hindu entry strictly prohibited — but the Raghunandan Library rooftop gives a clear view of the tower. Hindu visitors: darshan is free, panda system (guided priest) costs ₹200–₹500. Mahaprasad (temple food) is sacred and distributed at the Ananda Bazar within the complex.", tag: "Temple", color: "border-amber-200 bg-amber-50" },
                { name: "Konark Sun Temple", detail: "35km from Puri. UNESCO World Heritage Site. Built 1250 AD as a stone chariot — 24 elaborately carved wheels (12 pairs), pulled by 7 stone horses. The erotic sculptures on the outer walls are part of a broader iconographic programme. Entry ₹40 Indian, ₹600 foreign.", tag: "UNESCO", color: "border-orange-200 bg-orange-50" },
                { name: "Chilika Lake", detail: "45km from Puri. India's largest brackish water lake (1,100km²). Irrawaddy dolphins are reliably seen from January–April at Satapada point. Winter (November–February) brings 160+ species of migratory birds. Boat trips from Satapada ₹300–₹500 per person (shared).", tag: "Wildlife", color: "border-teal-200 bg-teal-50" },
                { name: "Raghurajpur Craft Village", detail: "14km from Puri. Traditional Odia craft village — patachitra (scroll painting), Pattachitra on palm leaf, and stone carving. Most craftspeople work from home and welcome visitors. Buy patachitra directly from artists for the best prices.", tag: "Crafts", color: "border-emerald-200 bg-emerald-50" },
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
            <StatCard icon="🌊" label="Altitude" value="3m (sea level)" />
            <StatCard icon="🚗" label="From Bhubaneswar" value="60km / 1.5 hrs" />
            <StatCard icon="💰" label="3-Day Budget" value="₹5,000+" />
          </div>

          {/* ── ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The 3-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">Stay near the beach for the sunrise access. The temple district and beach are walkable from most guesthouses in the Marine Drive and Chakratirtha Road area.</p>

            <DayCard
              day="Day 1"
              title="Puri Beach Sunrise · Swargadwar · Local Market"
              items={[
                "5:30am: Puri Beach sunrise — the beach faces exactly east over the Bay of Bengal. At dawn, the fishing fleet returns, which adds boats to the sunrise scene. The Jagannath Temple shikhara is visible against the sky from the beach. The Swargadwar cremation ghat is 2km north along the beach — it is an openly visible public space, not closed to visitors. Walking to it at sunrise is a significant experience if you are open to it.",
                "8am: Breakfast at a beach dhaba — fresh fish fry (₹80–₹120), poha, or puri sabzi. The morning fish market at the Swargadwar end of the beach (opens 5am) is worth walking through — the catch is brought directly from the boats.",
                "10am: Puri market — the Grand Road (Bada Danda) leading to the Jagannath Temple is lined with shops selling Odissi saris (Sambalpuri and Bomkai weaves), conch shell products, and the famous Khaja sweet (layered sugar-honey crispy sweet, iconic Puri souvenir). Budget ₹500–₹2,000 for shopping.",
                "12pm: Raghunandan Library rooftop (non-Hindu visitors) — free entry to the rooftop, ₹20 donation suggested. The library faces the main gate of the Jagannath Temple and the rooftop gives a clear, unobstructed view of the 65m shikhara and the outer temple complex walls. This is the only viewpoint for non-Hindu visitors.",
                "2pm: Narendra Tank — the sacred pond 800m from the temple used during the float festival (Chandan Yatra). The tank is surrounded by small shrines and is one of Puri's more peaceful spots in the afternoon.",
                "Evening: Chilika Lake sunset (optional, 45km away) or evening beach walk — the Golden Beach area in the southern end has lifeguards and is safe for an evening swim in designated areas (wear swimming gear — swimming in regular clothes is impractical in the surf).",
              ]}
              cost="₹600–₹1,200 excluding accommodation" />

            <DayCard
              day="Day 2"
              title="Jagannath Temple Darshan (Hindu Visitors) · Chilika Lake"
              items={[
                "Non-Hindu visitors: Today is best used for the Chilika Lake day trip (45km, 1 hour). Satapada is the main point for Irrawaddy dolphin boat trips — the dolphins are most reliably seen January–April. Boat trips cost ₹300–₹500 per person on a shared basis. Allow 3–4 hours at Chilika. Return by 3pm.",
                "Hindu visitors: Jagannath Temple darshan — the main gate (Singhadwara) is open to all Hindus. Darshan is free but the crowds require patience — queues of 1–3 hours are normal. The panda system (a temple priest who guides you through darshan) costs ₹200–₹500 and gives faster access to the sanctum. Dress code: traditional clothing (dhoti for men, sari or salwar for women); shorts and sleeveless tops not permitted.",
                "Mahaprasad: The Ananda Bazar within the temple complex serves Mahaprasad — food cooked in the temple kitchens for the deity and distributed to pilgrims. It is considered sacred. Available from the Kotha complex adjacent to the temple from 11am–3pm. Cost: ₹20–₹80 depending on what you take.",
                "Srimandir Parikrama: Both Hindu and non-Hindu visitors can walk the outer circumambulation path (1km) around the Jagannath Temple complex. The outer wall (Meghanada Pacheria) is ornately carved and the parikrama gives a good sense of the temple's scale.",
                "Afternoon: Raghurajpur Pattachitra Village (14km from Puri) — the craft village where the traditional Odia patachitra (cloth painting) and palm leaf engraving are practiced. Most houses double as workshops. Artists demonstrate the work and sell directly.",
                "Evening: Seafood dinner — the dhabas along the Swargadwar beach road are the best places for fresh catch: prawn masala (₹180–₹280), pomfret fry (₹200–₹300), crab (₹350–₹500). Order what arrived this morning.",
              ]}
              cost="₹700–₹1,500 including boat trip and food" />

            <DayCard
              day="Day 3"
              title="Konark Sun Temple (35km Day Trip)"
              items={[
                "8am: Take the OSRTC bus from Puri bus stand to Konark (₹25, 1 hour, frequent departures from 6am) or hire an auto-rickshaw for ₹350–₹500 return with 2 hours waiting time. The road runs along the coast — the sea is visible for most of the journey.",
                "Konark Sun Temple entry (₹40 Indian, ₹600 foreign, free for under-15): The temple was built in 1250 AD by King Narasimhadeva I as a stone chariot dedicated to Surya (the sun god). The chariot has 24 elaborately carved wheels (12 pairs) — each wheel functions as a sundial. Seven stone horses pulled the chariot (three survive). The shikhara (tower) collapsed in the 17th century — what remains is the jagamohana (audience hall) and the natamandira (dancing hall).",
                "Konark sculptures: The erotic sculptures on the outer walls (maithuna carvings) are one of three iconographic registers on the temple — the others are celestial beings, animals, and decorative bands. The erotic carvings are explicit and frequently photographed — they represent the full range of human experience in the Hindu cosmology.",
                "Konark Museum (inside the compound, free): Recovered sculptures from the original structure are displayed here — particularly the chlorite sculptures of Surya in their full form. Excellent context for what you have just seen.",
                "Konark Beach: 2km from the temple, largely undeveloped and far less crowded than Puri. Good for swimming (calmer than Puri) or a long walk along the sand. Small dhabas sell fish and chai.",
                "Return to Puri by 4–5pm. Evening free — final seafood meal, Khaja shopping on Grand Road.",
              ]}
              cost="₹500–₹900 including transport and entry" />

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
                    ["🏨 Accommodation (3N)", "₹1,800–₹3,600 (guesthouse)", "₹5,400–₹10,500", "₹15,000–₹30,000"],
                    ["🍽 Food & Drinks (3 days)", "₹720–₹1,080", "₹2,100–₹3,600", "₹4,500–₹7,500"],
                    ["🚗 Local Transport", "₹600–₹900 (auto/bus)", "₹1,500–₹2,400", "₹3,000–₹4,500"],
                    ["🏛️ Konark Entry + transport", "₹65–₹100", "₹65–₹100", "₹640–₹700"],
                    ["🦭 Chilika Boat (Satapada)", "₹300–₹500 (shared)", "₹300–₹500", "₹1,500–₹2,000 (private)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 3 days)</td>
                    {["₹5,000–₹8,000", "₹12,000–₹18,000", "₹25,000–₹45,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Puri has a huge range of guesthouses from ₹600/night near the beach to resort hotels at ₹5,000+/night. The best-value area is Chakratirtha Road — close to both the beach and the temple district. Bhubaneswar airport (60km, 1.5 hours) has flights from Mumbai, Delhi, Kolkata, and Chennai.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Puri"
            hotels={[
              { name: "Hotel Mayfair Heritage", type: "Heritage Hotel · Puri Beach Road", price: "From ₹3,500/night", rating: "4", badge: "Best location", url: "https://www.booking.com/searchresults.en-gb.html?ss=puri+beach+hotel&aid=2820480" },
              { name: "Toshali Sands Ethnic Village", type: "Resort · Marine Drive Puri", price: "From ₹4,500/night", rating: "4", badge: "Pool", url: "https://www.booking.com/searchresults.en-gb.html?ss=puri+resort+beach&aid=2820480" },
              { name: "Budget Guesthouse Puri Beach", type: "Guesthouse · Chakratirtha Road", price: "From ₹600/night", rating: "3", badge: "Budget", url: "https://www.booking.com/searchresults.en-gb.html?ss=puri+budget+guesthouse&aid=2820480" },
            ]}
            activities={[
              { name: "Konark Sun Temple Guided Tour", duration: "Half day", price: "From ₹500/person", badge: "UNESCO", url: "https://www.getyourguide.com/s/?q=konark+sun+temple+tour&partner_id=PSZA5UI" },
              { name: "Chilika Lake Dolphin Boat Safari", duration: "Half day", price: "From ₹400/person", badge: "Wildlife", url: "https://www.getyourguide.com/s/?q=chilika+lake+dolphin&partner_id=PSZA5UI" },
              { name: "Puri – Konark – Bhubaneswar Temple Circuit", duration: "Full day", price: "From ₹1,000/person", url: "https://www.getyourguide.com/s/?q=puri+konark+bhubaneswar+tour&partner_id=PSZA5UI" },
            ]}
            pdfProductId="puri-3-days-pdf"
          />

          {/* ── FOOD GUIDE ── */}
          <section id="food" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍛 Odisha Food Guide</h2>
            <p className="text-sm text-muted font-light mb-6">
              Odia cuisine is one of India&apos;s most underrated regional food traditions. It is lighter than Bengali (less mustard oil), more vegetable-forward than most coastal cuisines, and has several dishes that exist nowhere else. Puri is the best place to try it.
            </p>
            <div className="space-y-3">
              {[
                { name: "Dalma", detail: "The everyday Odia dish: dal (lentils) cooked with vegetables (raw banana, papaya, yam, drumstick) and a tempering of dried red chilli, bay leaf, and ghee. This is what most Odia families eat daily. Available at any local restaurant for ₹60–₹80.", color: "border-amber-200 bg-amber-50" },
                { name: "Pakhala Bhata", detail: "Fermented rice water — cooked rice left in water overnight and eaten with fried vegetables and curd. Cooling in summer, slightly sour, genuinely unusual. Not for everyone but worth trying once. Available at most traditional Odia restaurants.", color: "border-orange-200 bg-orange-50" },
                { name: "Chhena Poda", detail: "Odia cheesecake — cottage cheese (chhena) mixed with sugar and cardamom, baked until the outside caramelises. The name literally means 'burnt cheese'. Best versions come from Pahala (20km from Bhubaneswar) but Puri bakeries do a good version. ₹40–₹80 per piece.", color: "border-yellow-200 bg-yellow-50" },
                { name: "Khaja", detail: "The iconic Puri souvenir — layered pastry dough fried in ghee and soaked in sugar syrup until crispy. Sold in every shop on Grand Road. Best bought from the shops near the Singhadwara gate of the Jagannath Temple. ₹200–₹400 per kilo.", color: "border-teal-200 bg-teal-50" },
                { name: "Machha Besara", detail: "Fish cooked in mustard paste with turmeric and dried chilli — the signature Odia fish preparation. Better than standard Bengali mustard fish because the paste is coarser and the chilli heat is forward. Available at beach dhabas near Swargadwar. ₹150–₹250.", color: "border-emerald-200 bg-emerald-50" },
                { name: "Mahaprasad", detail: "The temple food of Jagannath — 56 dishes cooked in the temple kitchens (one of the world's largest, feeding 10,000+ people daily). The prasadam available in the Ananda Bazar is considered sacred and is remarkable for its scale: rice, dal, khichdi, various curries and sweets, all without onion or garlic.", color: "border-purple-200 bg-purple-50" },
              ].map((food) => (
                <div key={food.name} className={`rounded-xl border p-4 ${food.color}`}>
                  <p className="font-medium text-sm text-ink mb-1">{food.name}</p>
                  <p className="text-xs text-muted font-light leading-relaxed">{food.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── KONARK DEEP DIVE ── */}
          <section id="konark" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Konark Sun Temple — A Proper Guide</h2>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-sm text-muted font-light leading-relaxed mb-4">
                Konark is not just a ruin. It is one of the most ambitious architectural programmes in Indian history — a temple designed as a cosmic chariot for the sun god, with 24 wheels functioning as precision sundials and an iconographic programme covering every aspect of human existence.
              </p>
              <div className="space-y-2 text-xs text-muted font-light">
                <p><strong className="text-ink">Built:</strong> 1250 AD by King Narasimhadeva I of the Eastern Ganga dynasty</p>
                <p><strong className="text-ink">Scale:</strong> The original shikhara (tower) was 70m — it collapsed in the 17th century. The jagamohana (porch) at 30m still stands.</p>
                <p><strong className="text-ink">The wheels:</strong> 24 wheels (12 pairs) — each is 3m in diameter and functions as a sundial. The spokes cast shadows that tell the time to within 30 minutes.</p>
                <p><strong className="text-ink">The sculptures:</strong> Three registers cover the outer walls: the lowest has elephants (1,600 of them), the middle has humans in all activities (including the frequently photographed erotic panels), the upper has celestial beings. The maithuna (erotic) sculptures represent human love as a path to the divine — a standard element of medieval Hindu temple iconography.</p>
                <p><strong className="text-ink">Entry:</strong> ₹40 Indian nationals, ₹600 foreign nationals, free under 15. Open sunrise to sunset.</p>
                <p><strong className="text-ink">Guide:</strong> A licensed ASI guide costs ₹200 for 45 minutes and is worth it — the iconographic complexity requires explanation. Guides are available at the entrance.</p>
                <p><strong className="text-ink">When to go:</strong> 8–11am before the tour buses arrive. Early morning light is better for photography. Avoid weekends if possible.</p>
              </div>
            </div>
          </section>

          {/* ── TEMPLE GUIDE ── */}
          <section id="templeguide" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🙏 Jagannath Temple Visitor Guide</h2>
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-amber-800 mb-3">For Hindu Visitors</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Entry:</strong> Through any of the four gates (Singhadwara/Lion Gate is the main one). Free entry. Show ID if asked — local guides may approach offering panda services.</p>
                  <p><strong className="text-ink">Panda system:</strong> Pandas are temple priests who guide pilgrims through darshan. Cost: ₹200–₹500. They provide faster access to the sanctum sanctorum and guide you through the rituals. Not mandatory but helpful for first-time visitors.</p>
                  <p><strong className="text-ink">Dress code:</strong> Traditional clothing required. Men: dhoti (can be borrowed at the gate for a deposit). Women: sari or salwar kameez. Shorts, sleeveless tops, and Western trousers are not permitted — this is enforced.</p>
                  <p><strong className="text-ink">Photography:</strong> Strictly prohibited inside the temple complex. Mobile phones must be deposited at the lockers outside (free, managed by the Jagannath Temple Administration). Do not try to photograph the deity.</p>
                  <p><strong className="text-ink">Mahaprasad:</strong> The Ananda Bazar inside the complex serves prasadam from the temple kitchens. This is considered sacred. Cost ₹20–₹80 depending on what you take. Open 11am–3pm.</p>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-sky-800 mb-3">For Non-Hindu Visitors</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Entry:</strong> Not permitted inside the Jagannath Temple — this is enforced by security at all four gates. Do not attempt entry; it will not succeed and the attempt is disrespectful.</p>
                  <p><strong className="text-ink">Raghunandan Library viewpoint:</strong> The library directly opposite the main Singhadwara gate has a rooftop (₹20 donation) with a clear, unobstructed view of the 65m shikhara. This is the standard viewpoint for non-Hindu visitors. The view is excellent — the full tower is visible.</p>
                  <p><strong className="text-ink">Srimandir Parikrama:</strong> The outer circumambulation path (1km walk) around the outer wall (Meghanada Pacheria) is open to all visitors and gives a sense of the temple&apos;s scale. Several small mandapas and subsidiary shrines are visible along the path.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Attempting Jagannath Temple entry as a non-Hindu", desc: "The entry restriction is strict and enforced. Security guards check at all four gates. The Raghunandan Library rooftop is the correct alternative — it gives a good view of the shikhara. Attempting to enter is disrespectful and will not succeed.", icon: "🙏" },
                { title: "Visiting during Rath Yatra without booking accommodation months ahead", desc: "The Rath Yatra festival (June or July, date varies) brings 1 million+ pilgrims to Puri over 9 days. Every guesthouse and hotel within 50km is full months in advance. If you want to witness the Rath Yatra — and it is extraordinary — book accommodation in December for the following summer.", icon: "🎪" },
                { title: "Swimming outside designated areas at Puri Beach", desc: "Puri Beach has strong rip currents and undertows that cause multiple deaths every year. Only swim in the designated zones near the Golden Beach area where lifeguards in yellow uniforms are posted. Never swim alone, never past chest depth. The north end (Swargadwar area) is particularly dangerous.", icon: "🌊" },
                { title: "Skipping Konark", desc: "Many visitors to Puri don't make it to Konark because it requires a 35km round trip. This is the most significant mistake you can make on an Odisha trip. The Konark Sun Temple contains medieval Indian sculpture at a scale and quality matched nowhere else in the country. It is worth a full morning.", icon: "🏛️" },
                { title: "Arriving Friday evening or staying over a weekend", desc: "Puri is a major domestic beach destination — the beach and restaurants become extremely crowded on weekends, especially Friday evening through Sunday. If possible, plan your arrival for Monday–Thursday. The sea and temple areas are far more manageable during the week.", icon: "📅" },
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
                { icon: "🌅", title: "5:30am Sunrise at Swargadwar", desc: "The northern end of Puri Beach (Swargadwar) at dawn — fishing boats returning, the cremation pyres occasionally visible in the background, the temple shikhara rising against the eastern sky — is one of the most visually striking mornings in India. Set your alarm.", color: "bg-sky-50 border-sky-200" },
                { icon: "🦭", title: "Chilika Dolphins: January–April Only", desc: "Irrawaddy dolphins in Chilika Lake are most reliably seen between January and April when they congregate at Satapada. Outside this window, boat trips still run but sightings are less certain. Time your visit accordingly if the dolphins are the draw.", color: "bg-sky-50 border-sky-200" },
                { icon: "🍽️", title: "Eat Seafood at Swargadwar Dhabas, Not Hotel Restaurants", desc: "The dhabas on the beach road near Swargadwar ghat cook the morning's catch and serve it by noon. Pomfret fry, prawn masala, and crab curry here cost 30–40% less than at hotel restaurants and the fish is fresher. Sit outside and eat with your hands — this is beach dhaba etiquette.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏛️", title: "Hire a Guide at Konark — Worth Every Rupee", desc: "The Konark Sun Temple's iconographic programme is dense and complex. The ASI-licensed guides at the entrance (₹200 for 45 minutes) know the symbolic meaning of the wheel spokes, the hierarchy of the sculpture registers, and the mathematical precision of the sundial wheels. Without a guide, you see beautiful carvings. With one, you understand architecture.", color: "bg-amber-50 border-amber-200" },
                { icon: "🎨", title: "Raghurajpur for Patachitra — Buy Direct", desc: "Raghurajpur Craft Village (14km from Puri) is a living traditional craft village where every household practices patachitra — cloth-based paintings in traditional Odia style. Buy directly from the artists (prices start at ₹300 for small works) rather than from curio shops in Puri which mark up 200–300%.", color: "bg-teal-50 border-teal-200" },
                { icon: "🚂", title: "Train from Bhubaneswar Is the Easiest Arrival", desc: "Bhubaneswar airport has the best flight connectivity for Puri (Mumbai, Delhi, Kolkata, Hyderabad). From Bhubaneswar, take the Puri Express or any local train to Puri station (60km, 1–1.5 hours, ₹25–₹80). Puri station is 2km from the beach. The alternative — bus from Bhubaneswar — takes 2 hours.", color: "bg-teal-50 border-teal-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Planned for You?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group size, and budget — we&apos;ll send a personalised Puri itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Puri Trip →</button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Contact Us →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Can non-Hindus visit Jagannath Temple in Puri?", a: "No. Entry to the Jagannath Temple is restricted to Hindus — this is strictly enforced by security at all four gates. Non-Hindu visitors can view the 65-metre shikhara from the rooftop of the Raghunandan Library opposite the main Singhadwara gate (₹20 donation). The outer circumambulation path (Srimandir Parikrama) is accessible to all visitors." },
                { q: "Is it safe to swim at Puri Beach?", a: "Puri Beach has strong rip currents and undertows that cause fatalities every year. Only swim in designated safe zones near the Golden Beach area (southern end) where yellow-uniformed lifeguards are stationed. Never swim alone, never past chest depth, and obey all lifeguard instructions. The northern end near Swargadwar is particularly dangerous and should not be used for swimming." },
                { q: "How do I get from Bhubaneswar to Puri?", a: "By train: Multiple trains run daily from Bhubaneswar to Puri (60km, 1–1.5 hours). The Puri Express and Shatabdi are the fastest options. Cost ₹25–₹80. By bus: OSRTC buses from Bhubaneswar bus stand take 2 hours (₹60–₹80). By cab: 1.5 hours, approximately ₹1,200–₹1,500. Arriving by train is most convenient — Puri station is 2km from the beach." },
                { q: "How do I get to Konark from Puri?", a: "OSRTC buses depart from Puri bus stand to Konark every 30–45 minutes from 6am (₹25, 1 hour). Auto-rickshaws charge ₹350–₹500 for a return trip with 2 hours of waiting time at the temple. The Konark Sun Temple is open from sunrise to sunset; entry is ₹40 for Indian nationals and ₹600 for foreign nationals." },
                { q: "What is the best time to visit Puri?", a: "November to February is ideal — temperatures 18–28°C, calm sea, good visibility. March–May gets hot (30–38°C) but is manageable. June–August is the Rath Yatra period and also monsoon — if visiting for Rath Yatra, book accommodation 6 months ahead. September–October is post-monsoon, sea is still rough from cyclone season in the Bay of Bengal." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning an East India Circuit?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kutch — 3 Day White Desert Guide", href: "/blog/kutch-3-days" },
                { label: "Gangtok — 3 Day Himalaya Guide", href: "/blog/gangtok-3-days" },
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

          <RelatedGuides currentSlug="puri-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
