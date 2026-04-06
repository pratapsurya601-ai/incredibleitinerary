"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import RelatedGuides from "@/components/blog/RelatedGuides";
import Breadcrumb from "@/components/blog/Breadcrumb";

const PUSHKAR_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "places",    emoji: "🛕", label: "Key Sights" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Pushkar 2-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Pushkar in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
          <p className="font-medium text-sm text-ink mb-1">{title}</p>
          <p className="text-xs text-muted font-light leading-relaxed">{desc}</p>
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
export default function PushkarClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹4k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹5k–12k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={PUSHKAR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Pushkar" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="pushkar lake ghats rajasthan temple india"
            fallback="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=85"
            alt="Pushkar Lake with ghats and temples at sunset in Rajasthan"
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
              <span className="text-white/70">Pushkar 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Pilgrimage & Culture
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Pushkar in 2 Days: Brahma Temple,
                <em className="italic text-gold-light"> Lake Ghats &amp; Camel Fair</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                2 complete plans with real timings, honest cafe reviews, and why this tiny Rajasthan town punches way above its weight.
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
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹3,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Pushkar is one of those places where 2 days is perfect — any less and you miss the magic, any more and you&apos;ve seen everything. The world&apos;s only Brahma temple, a sacred lake ringed by 52 ghats, and the best sunset trek in Rajasthan — all in a town you can walk across in 20 minutes.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Most Rajasthan tourists hit Jaipur, Udaipur, Jodhpur and somehow skip Pushkar. It&apos;s only 3 hours from Jaipur and 30 minutes from Ajmer. Adding 2 days to your Rajasthan trip for this is a no-brainer. You get one of India&apos;s oldest and most important pilgrimage towns, a genuinely sacred lake, a sunset trek that rivals anything in the state, and — if you time it right — the most spectacular cultural festival on the planet.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🛕" label="Key Sight" value="Brahma Temple" />
            <StatCard icon="🗓" label="Duration" value="2 Days" />
            <StatCard icon="💰" label="Budget From" value="₹3,000" />
            <StatCard icon="🌡️" label="Best Season" value="Oct–Mar" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Pushkar is a desert town. Timing this right is the difference between a magical trip and a sweaty ordeal.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct-Mar", emoji: "✅", title: "Best Season", desc: "October-November is warm and pleasant (15-30°C). November is peak because of the Camel Fair — the most colourful, chaotic, uniquely Indian festival you'll ever see. December-February is cool (5-22°C), perfect for exploring the ghats and trekking Savitri Temple.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Apr-Jun", emoji: "🔥", title: "Scorching Summer", desc: "Temperatures hit 40-45°C regularly. The desert heat is relentless and dry. Walking around the lake or trekking Savitri Temple becomes genuinely miserable. The town empties out. Avoid unless you have no choice.", color: "bg-red-50 border-red-200" },
                { season: "Jul-Sep", emoji: "🌧️", title: "Monsoon", desc: "Sporadic but heavy rain. The lake fills up and actually looks stunning, but the ghats get slippery and many guesthouses close. September is borderline acceptable as things cool down. Not ideal but not terrible.", color: "bg-amber-50 border-amber-200" },
              ].map((s) => (
                <div key={s.season} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{s.emoji}</span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted">{s.season}</span>
                  </div>
                  <p className="font-serif text-base text-ink mb-2">{s.title}</p>
                  <p className="text-xs text-muted font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── PICK YOUR PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Pick Your Plan</h2>
            <p className="text-sm text-muted font-light mb-6">Same 2-day route, two comfort levels. Pushkar is one of the cheapest tourist towns in Rajasthan.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-5 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Basic guesthouses, hostels near the lake</td><td className="py-2.5 px-4">Heritage havelis, boutique hotels with lake views</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Walk everywhere + shared auto to Ajmer</td><td className="py-2.5 px-4">Private auto/cab for Ajmer, e-rickshaw in town</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Street food + backpacker cafes</td><td className="py-2.5 px-4">Rooftop restaurants + quality cafes</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">₹3,000-4,000</td><td className="py-2.5 px-4 font-medium text-teal">₹5,000-12,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Brahma Temple morning → Pushkar Lake ghats → Rose Garden → Savitri Temple sunset trek. Day 2: Old Rangji Temple → lakeside cafes → Ajmer Sharif Dargah half-day trip.
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
                title="Brahma Temple, Lake Ghats & Savitri Temple Trek"
                items={[
                  "7:00am: Start at the Jagatpita Brahma Temple. This is the only dedicated Brahma temple in the world — and it's tiny, unpretentious, and powerful. The red spire and marble floor date back to the 14th century. The temple is small enough to see in 30-40 minutes but give it the respect it deserves. Remove shoes, no photography inside the sanctum.",
                  activeTab === "A"
                    ? "Stay at Pushkar backpacker hostels like Zostel Pushkar or budget guesthouses in the lanes behind the lake: ₹400-800/night. Most include rooftop access with lake views."
                    : "Stay at Inn Seventh Heaven or Hotel Pushkar Palace: ₹2,500-6,000/night. Heritage havelis with rooftop restaurants overlooking the lake. Book the lake-facing room — the sunrise view alone is worth the upgrade.",
                  "8:30am: Walk the Pushkar Lake ghats. There are 52 ghats ringing the sacred lake. Start from Varaha Ghat and walk clockwise. The ghats are where Pushkar reveals itself — morning aarti ceremonies, pilgrims bathing, sadhus meditating, and the Aravalli hills reflecting in the still water. Walk slowly. This isn't a checklist.",
                  "Important: Pushkar pandits (priests) at the ghats will approach you, offer flowers and a prayer, then ask for a 'donation' of ₹500-2,000. Politely decline or offer ₹20-50 if you participate. They're persistent but harmless. Don't let them put a 'Pushkar passport' thread on your wrist without agreeing on a price first.",
                  "10:30am: Rose Garden visit. Pushkar is famous for its roses — the town produces much of India's rose essence and gulkand (rose petal preserve). The rose gardens on the outskirts are best visited in the morning before the heat. Quick 30-minute stop. Buy fresh gulkand if you like — ₹100-200 for a jar.",
                  activeTab === "A"
                    ? "11:30am: Lunch at a local thali place near the bus stand — ₹60-100 for a full Rajasthani thali. Pushkar is a strictly vegetarian town. No meat, no eggs, no alcohol within town limits. Adjust your expectations."
                    : "11:30am: Lunch at Honey & Spice Cafe or Om Shiva Garden Restaurant — both serve excellent food at ₹150-300 per meal. Walk 2 streets back from the lake for the best places. The lakeside cafes look charming but the food is average tourist fare.",
                  "1:00pm: Rest during peak heat. This is Rajasthan — the afternoon sun is brutal even in winter. Nap at your hotel, read on a rooftop, or browse the shops in the bazaar lanes. Pushkar's shopping is surprisingly good: miniature paintings, leather goods, silver jewellery, textiles.",
                  "4:00pm: Begin the Savitri Temple trek. The Savitri Temple trek at sunset is the best free activity in Rajasthan — 30 minutes up the hill and suddenly the entire Pushkar lake and Thar Desert are below you. The trail is well-maintained stone steps. There's a ropeway (₹75-150 one way) but walking up is the whole point. Carry water.",
                  "Watch the sunset from the top. The view of the lake, the white town, the desert stretching to the horizon — it's one of those moments that makes you understand why this place has been sacred for thousands of years. Come down by the path or take the ropeway back.",
                  "7:00pm: Dinner and evening aarti at the lake. The evening aarti ceremony at the main ghats is a gentler version of Varanasi's — small lamps, chanting, the lake reflecting the lights. Afterwards, explore the bazaar lanes which come alive after dark.",
                ]}
                cost={activeTab === "A" ? "₹800-1,500" : "₹3,000-5,500"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Old Rangji Temple, Cafes & Ajmer Dargah"
                items={[
                  "7:30am: Morning walk along the lake. Early morning is when Pushkar is most beautiful — mist on the lake, pilgrims at the ghats, zero tourists. Grab a chai from a street stall and just walk.",
                  "8:30am: Visit the Old Rangji Temple. This temple is architecturally bizarre and brilliant — a South Indian gopuram (tower) in the middle of Rajasthan, built by a South Indian family. The blend of Rajput and Dravidian architecture is unlike anything else in the state. Free entry, 30 minutes.",
                  "9:30am: Explore the market lanes and Pushkar bazaar. Silver jewellery is the best buy here — genuine silver at ₹300-2,000 depending on weight and design. Leather goods (journals, bags, sandals) are also excellent. Bargain hard — start at 40% of asking price.",
                  activeTab === "A"
                    ? "11:00am: Brunch at a budget cafe. Skip the lakeside tourist traps. Walk 2 streets back from the lake for Om Shiva, which has proper food at honest prices: ₹80-150 per meal."
                    : "11:00am: Brunch at Sixth Sense or The Laughing Buddha Cafe — rooftop seating, decent Israeli and Italian options alongside Indian food: ₹200-400 per meal. These cater to the international backpacker crowd but the food quality is genuinely good.",
                  "12:30pm: Head to Ajmer for the Dargah Sharif. Ajmer is just 15km from Pushkar — a 30-minute ride through the Nag Pahar (snake mountain) pass. The Ajmer Sharif Dargah of Khwaja Moinuddin Chishti is one of the most important Sufi shrines in the world. People of all religions visit. The entrance is through a long, narrow bazaar selling flowers, chadars (offerings), and sweets.",
                  activeTab === "A"
                    ? "Shared jeep to Ajmer: ₹30-50 per person from the bus stand. Buses run every 15 minutes: ₹20-30. Return the same way."
                    : "Private auto to Ajmer: ₹150-200 one way, or hire a cab for the half-day: ₹600-900 return with waiting.",
                  "The Dargah is intense. Narrow lanes, massive crowds, the sound of qawwali music echoing off the marble. Men and women enter through separate entrances at the inner sanctum. Cover your head (scarves available at the entrance for ₹20-50). Allow 1.5-2 hours including the bazaar walk.",
                  "3:00pm: Return to Pushkar. If time permits, visit the Pushkar Camel Fair grounds on the edge of town — even when the fair isn't on, the sandy grounds with the Aravalli backdrop give you a sense of the scale. During the November fair, this entire area fills with 50,000+ camels, traders, performers, and tourists.",
                  "If you're anywhere near Pushkar in November, rearrange your entire trip for the Camel Fair. It's the most chaotic, colourful, uniquely Indian thing you'll ever see. Hot air balloons, camel races, moustache competitions, folk music under the stars. Book accommodation 3-4 months in advance — every room in Pushkar sells out.",
                  "5:00pm: Final sunset from a lakeside rooftop. Most heritage hotels and rooftop cafes offer the view for the price of a chai. Pushkar's sunsets are consistently stunning because of the desert dust catching the light.",
                  activeTab === "A"
                    ? "6:30pm: Depart. Pushkar to Jaipur buses: 3 hours, ₹200-350. Overnight buses to Udaipur and Jodhpur available from Ajmer (15 min away)."
                    : "6:30pm: Depart. Pushkar to Jaipur by private cab: 3 hours, ₹2,500-3,500. Or take the Ajmer Junction train to your next destination — Ajmer is on the main Delhi-Ahmedabad rail line.",
                ]}
                cost={activeTab === "A" ? "₹700-1,200" : "₹2,500-5,000"}
              />
            </div>
          </section>

          {/* ── KEY SIGHTS ── */}
          <section id="places" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🛕 Key Sights</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Everything worth seeing in Pushkar, ranked by importance. The town is small enough that you&apos;ll naturally pass most of these while walking around the lake.
            </p>
            <div className="space-y-4">
              {[
                { rank: "#1", name: "Jagatpita Brahma Temple", detail: "World's only Brahma temple · Free entry · 30 min", note: "The 14th-century temple with its red spire and marble floor is smaller than you'd expect. That's part of its charm. The fact that there's only one Brahma temple in the entire world — while Vishnu and Shiva have thousands — speaks to the mythology around Pushkar. Go early for relative quiet.", emoji: "🛕", color: "bg-amber-50 border-amber-200" },
                { rank: "#2", name: "Savitri Temple Trek", detail: "Hilltop temple · Free · 30 min trek up", note: "The best free activity in Rajasthan. The trek is 30 minutes of stone steps up the hill behind the lake. At the top: a 360-degree panorama of Pushkar Lake, the white town, the Aravalli hills, and the Thar Desert stretching to the horizon. Go at 4pm for sunset. Ropeway available (₹75-150) but walking is the experience.", emoji: "🌄", color: "bg-amber-50 border-amber-200" },
                { rank: "#3", name: "Pushkar Lake & 52 Ghats", detail: "Sacred lake · Free · 1-2 hours", note: "The lake is the spiritual heart of Pushkar. Hindu mythology says Brahma dropped a lotus here and the lake appeared. The 52 ghats are best experienced at dawn or during the evening aarti. Walk the full circumference — it's only 4km and every ghat has its own character.", emoji: "🌊", color: "bg-teal-50 border-teal-200" },
                { rank: "#4", name: "Ajmer Sharif Dargah", detail: "30 min from Pushkar · Free entry · 1.5-2 hours", note: "One of the most important Sufi shrines in the world, visited by people of all religions. The qawwali sessions and the intensity of devotion here are powerful. The approach through the old bazaar is an experience in itself. Cover your head.", emoji: "🕌", color: "bg-teal-50 border-teal-200" },
                { rank: "#5", name: "Old Rangji Temple", detail: "South Indian temple in Rajasthan · Free · 30 min", note: "A South Indian gopuram tower in the middle of Rajasthan — architecturally unexpected and beautiful. Built by a South Indian trading family. The blend of Rajput and Dravidian styles makes it one of the most unique temples in the state.", emoji: "🏛️", color: "bg-rose-50 border-rose-200" },
                { rank: "#6", name: "Rose Garden & Pushkar Bazaar", detail: "Gardens + shopping · 1-2 hours total", note: "Pushkar produces much of India's rose essence. Visit the gardens in the morning for the fragrance. The bazaar is excellent for silver jewellery, miniature paintings, leather goods, and textiles. Bargain hard — start at 40% of asking price.", emoji: "🌹", color: "bg-rose-50 border-rose-200" },
              ].map((f) => (
                <div key={f.name} className={`rounded-xl border p-5 ${f.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{f.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{f.rank}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-ink">{f.name}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{f.detail}</p>
                      <p className="text-xs text-muted font-light leading-relaxed mt-2">{f.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FOOD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="rajasthani thali vegetarian food colorful traditional"
              fallback="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&q=80"
              alt="Rajasthani vegetarian thali with dal bati churma"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The lakeside cafes look charming but the food is average tourist fare — walk 2 streets back for Honey &amp; Spice or Om Shiva for actual good food at real prices.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "₹3,000-4,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stays (1-2 nights)", "₹400-1,200"], ["Transport", "₹200-500"], ["Food", "₹500-1,000"], ["Entry/Ropeway", "₹0-300"], ["Shopping", "₹500-1,500"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹5,000-12,000", color: "bg-teal-50 border-teal-200",
                  items: [["Stays (1-2 nights)", "₹2,500-7,000"], ["Transport", "₹500-1,500"], ["Food", "₹1,000-2,500"], ["Entry/Ropeway", "₹150-400"], ["Shopping", "₹1,000-3,000"]] },
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
              * All prices per person. Does not include travel to/from Pushkar. Pushkar is a vegetarian town — no meat, eggs, or alcohol within town limits. Budget assumes basic guesthouses and street food. Most temples and the lake ghats are free.
            </p>
          </section>

          <AffiliateBlock destination="Pushkar" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Falling for the 'Pushkar Passport' scam", desc: "Ghat pandits will offer a prayer, tie a thread on your wrist, call it a 'Pushkar passport', then demand ₹500-2,000 as a 'donation'. Politely decline or agree on ₹20-50 beforehand. They're persistent but harmless.", icon: "🧵" },
                { title: "Eating at lakeside tourist restaurants", desc: "The lake-facing cafes charge 2-3x for mediocre food. Walk literally 2 streets back for places like Honey & Spice or Om Shiva — better food, honest prices, and locals actually eat there.", icon: "🍽️" },
                { title: "Skipping the Savitri Temple trek", desc: "Many tourists take the ropeway both ways and miss the entire point. The 30-minute walk up is manageable for anyone with basic fitness. The anticipation of the view building with each turn of the stairs is the experience.", icon: "🚡" },
                { title: "Expecting meat, eggs, or alcohol in town", desc: "Pushkar is a holy town — strictly vegetarian, no alcohol within town limits. Some places serve 'special chai' or 'special lassi' (ahem) but official restaurants don't serve meat or booze. Ajmer (30 min away) has everything.", icon: "🥗" },
                { title: "Visiting during summer (Apr-Jun)", desc: "Pushkar hits 40-45°C in peak summer. The Savitri Temple trek becomes a heat stroke risk and the desert winds are miserable. October-March only. November for the Camel Fair is the dream month.", icon: "🌡️" },
                { title: "Not booking ahead for Camel Fair", desc: "During the November Camel Fair, every room in Pushkar is booked 3-4 months in advance. Tent camps sell out even earlier. If you want to attend, book accommodation the moment you confirm your India dates.", icon: "🐪" },
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
                { icon: "🌅", title: "Dawn at the Ghats", desc: "The lake at 6:30am is a different world. Mist, silence, pilgrims, no tourists. This is the Pushkar that pilgrims have seen for thousands of years. Set one early alarm — it's worth it.", color: "bg-amber-50 border-amber-200" },
                { icon: "🐪", title: "Camel Fair Timing", desc: "The Pushkar Camel Fair is in November, timed to Kartik Purnima. Dates shift each year. The first 3 days are the real trading days — last 2 days are more tourist-oriented. Both are incredible.", color: "bg-amber-50 border-amber-200" },
                { icon: "🌹", title: "Rose Products Are the Best Souvenir", desc: "Pushkar roses are famous across India. Gulkand (rose preserve) is ₹100-200/jar, rose water is ₹50-100/bottle, and rose oil (gulab attar) starts at ₹300. Buy from local shops, not tourist stalls.", color: "bg-teal-50 border-teal-200" },
                { icon: "👟", title: "Wear Slip-on Shoes", desc: "You'll be removing shoes at every temple and ghat. Flip-flops or slip-on sandals save enormous time. Keep socks handy for hot marble in the afternoon (yes, even in winter the marble heats up).", color: "bg-teal-50 border-teal-200" },
                { icon: "🚌", title: "Ajmer Is Your Gateway", desc: "Pushkar has no railway station. Ajmer Junction (15km away) is on the main Delhi-Ahmedabad line. Take the train to Ajmer, then a 30-min shared jeep to Pushkar: ₹30-50. Much cheaper than direct buses to Pushkar.", color: "bg-rose-50 border-rose-200" },
                { icon: "📱", title: "Cash Is King", desc: "Many shops and smaller restaurants in Pushkar don't accept UPI or cards. Carry cash — ₹2,000-3,000 for a 2-day trip. The few ATMs in town often run out during peak season. Withdraw in Ajmer before arriving.", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/55 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates and group — we&apos;ll send a personalised Pushkar &amp; Rajasthan itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Pushkar Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Pushkar?", a: "2 days is the sweet spot. Day 1 covers Brahma Temple, Pushkar Lake ghats, Rose Garden, and the Savitri Temple sunset trek. Day 2 covers Old Rangji Temple, cafes, bazaar, and a half-day trip to Ajmer Sharif Dargah. 1 day is too rushed and 3 days means you'll run out of things to do." },
                { q: "What is the best time to visit Pushkar?", a: "October to March. November is peak because of the Pushkar Camel Fair — the most spectacular festival in Rajasthan. December-February is pleasantly cool (8-25°C). Avoid April-June when temperatures hit 40-45°C." },
                { q: "Is the Brahma Temple really the only one in the world?", a: "Yes. The Jagatpita Brahma Temple in Pushkar is widely considered the only significant, actively worshipped temple dedicated to Lord Brahma. A handful of tiny shrines exist elsewhere, but this is the one that matters. It dates to the 14th century and is one of India's most important pilgrimage sites." },
                { q: "When is the Pushkar Camel Fair?", a: "Every November, timed to the Kartik Purnima full moon. Exact dates shift each year based on the Hindu calendar. The fair runs 5-7 days. Book accommodation 3-4 months ahead — every room in Pushkar sells out. Tent camps and desert glamping options also available." },
                { q: "How do I get to Pushkar?", a: "Pushkar has no railway station. Fly or train to Ajmer Junction (15km away), then take a shared jeep (₹30-50) or auto (₹150-200) for 30 minutes. From Jaipur: 3-hour bus or cab. From Jodhpur: 5-hour bus. Direct buses from Delhi run overnight (10-11 hours)." },
                { q: "Can I drink alcohol in Pushkar?", a: "Officially no — Pushkar is a holy town and alcohol is banned within town limits. Some places serve 'special' drinks discreetly but it's technically illegal. If you want a drink, head to Ajmer (30 min away) where everything is available. Respect the local customs." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Rajasthan Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Jaipur — 3 Day Pink City Guide", href: "/blog/jaipur-3-days", soon: false },
                { label: "Udaipur — 3 Day Lake City Guide", href: "/blog/udaipur-3-days", soon: false },
                { label: "Golden Triangle — Delhi, Agra, Jaipur", href: "/blog/golden-triangle-7-days", soon: false },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="pushkar-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
