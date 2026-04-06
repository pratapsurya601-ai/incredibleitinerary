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
import CombineWith from "@/components/blog/CombineWith";
import Breadcrumb from "@/components/blog/Breadcrumb";

const AMRITSAR_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "food",      emoji: "🍛", label: "Street Food Guide" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Amritsar 2-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Amritsar in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function AmritsarClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹5k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹5k–12k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={AMRITSAR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Amritsar" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="golden temple amritsar night reflection"
            fallback="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=1600&q=85"
            alt="Golden Temple Amritsar illuminated at night with reflection in the sacred pool"
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
              <span className="text-white/70">Amritsar 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Heritage & Food
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Amritsar in 2 Days: Golden Temple,
                <em className="italic text-gold-light"> Street Food &amp; History</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                2 complete plans with real timings, the definitive street food ranking, and why most Golden Triangle tourists are making a mistake by skipping this city.
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
              <span>💰 From ₹3,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Golden Temple at 4:30am changed something in me. I&apos;m not religious, but watching the Palki Sahib ceremony while the temple glows against a dark sky — it&apos;s one of those moments that just stops you.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Most Golden Triangle tourists skip Amritsar. It&apos;s only a 6-hour train from Delhi. Adding 2 days to your trip for this is a no-brainer. You get India&apos;s most powerful spiritual experience, its best street food, a sobering history lesson at Jallianwala Bagh, and the most absurdly theatrical border ceremony on the planet. All in 48 hours.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🕌" label="Key Sight" value="Golden Temple" />
            <StatCard icon="🗓" label="Duration" value="2 Days" />
            <StatCard icon="💰" label="Budget From" value="₹3,500" />
            <StatCard icon="🌡️" label="Best Season" value="Oct–Mar" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Amritsar has extreme weather. Timing this right is the difference between a magical trip and a heatstroke.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct-Mar", emoji: "✅", title: "Best Season", desc: "October-November is warm and pleasant (18-28°C). December-February is cold (2-15°C) but the Golden Temple in winter fog is hauntingly beautiful. March is warming up but manageable.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Apr-Jun", emoji: "🔥", title: "Brutal Summer", desc: "Temperatures regularly hit 42-47°C. Walking the old city becomes genuinely dangerous. The Golden Temple's marble walkway burns your feet. Avoid unless you have no choice.", color: "bg-red-50 border-red-200" },
                { season: "Jul-Sep", emoji: "🌧️", title: "Monsoon", desc: "Hot and humid with sporadic rain. Better than summer but still uncomfortable. The temple complex gets slippery. September starts cooling — barely acceptable.", color: "bg-amber-50 border-amber-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 2-day route, two comfort levels. Amritsar is one of the cheapest major tourist destinations in India.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Golden Temple Sarai (free), budget hotels</td><td className="py-2.5 px-4">3-star hotels, heritage guesthouses</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Walk + shared autos</td><td className="py-2.5 px-4">Auto-rickshaws, Ola/Uber</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Street food + Langar</td><td className="py-2.5 px-4">Street food + restaurants</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">₹3,500-5,000</td><td className="py-2.5 px-4 font-medium text-teal">₹5,000-12,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Golden Temple dawn → Jallianwala Bagh → Old City food walk → Wagah Border evening. Day 2: Langar kitchen → Partition Museum → shopping → departure.
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
                title="Golden Temple, Jallianwala Bagh & Wagah Border"
                items={[
                  "4:00-4:30am: Wake up and head to the Golden Temple (Harmandir Sahib). Yes, 4:30am. This isn't negotiable. The Palki Sahib ceremony — where the holy book is carried in a golden palanquin — happens at dawn and it is transcendent. The temple glows against the dark sky, devotional music echoes across the water, and time stops.",
                  "Spend 2-3 hours at the Golden Temple. Walk the full parikrama (circumambulation) around the sacred pool. Visit the inner sanctum. Sit by the water. There's no rush and no entry fee. Cover your head (scarves available free at the entrance) and remove your shoes.",
                  activeTab === "A"
                    ? "The Golden Temple Sarai offers free accommodation to all visitors — clean rooms, shared bathrooms. Book at the information counter inside the complex. Technically free but a donation of ₹100-500 is appropriate."
                    : "Stay at Hotel Grace or Hotel CJ International: ₹1,500-3,500/night. Both within 1km of the Golden Temple. Ask for an upper-floor room facing the temple if available.",
                  "8:30am: Walk to Jallianwala Bagh (5 minutes from the temple). The site of the 1919 massacre. The bullet holes in the walls are still visible. The narrow entrance that trapped thousands is still the same width. Allow 45 minutes. It's heavy but essential.",
                  "10:00am: Old City food walk. Start at Bharawan Da Dhaba for amritsari kulcha with chole and a side of white butter. This is not a suggestion — it's the single most important meal you'll eat in Amritsar. The kulchas here are stuffed, flaky, and life-altering.",
                  "Walk through the narrow lanes of the old city. Stop at Ahuja Milk Bhandar for lassi (thick, creamy, served in a steel glass since 1957). Then Giani Di Hatti for jalebi fafda if you still have room.",
                  "12:30pm: Rest at your hotel. You've been up since 4am. You deserve a nap.",
                  "3:00pm: Head to Wagah Border (28km, 45 minutes). The Wagah Border ceremony is peak India-Pakistan theatre. Arrive 2 hours early for a good seat. It's loud, it's patriotic, it's completely over the top. You'll love it. The soldiers high-kick, the crowd chants, and you can hear the Pakistani crowd doing the same thing on the other side.",
                  activeTab === "A"
                    ? "Shared auto to Wagah: ₹50-80 per person from Hall Gate. Return options dry up after the ceremony — book a return auto in advance or share with other tourists."
                    : "Private auto to Wagah: ₹400-600 return with waiting. Your driver waits during the ceremony and brings you back. Much easier than figuring out return transport.",
                  "7:30pm: Back in Amritsar. Dinner at Kesar Da Dhaba (est. 1916) — dal makhani that's been cooking since morning. Thick, smoky, perfect with tandoori roti. End the day here.",
                ]}
                cost={activeTab === "A" ? "₹800-1,500" : "₹3,000-5,500"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Langar, Partition Museum & Departure"
                items={[
                  "7:00am: Return to the Golden Temple for the Langar experience. The Guru Ka Langar is the largest free community kitchen in the world — it serves 50,000-100,000 meals every single day, regardless of religion, caste, or nationality. Everyone sits on the floor together. The food is simple (dal, roti, rice, kheer) and the logistics are staggering.",
                  "Visit the Langar kitchen: see the massive rotis being made on conveyor-like systems, the industrial-scale dal pots, the volunteer assembly lines. This is Sikh values made tangible — equality and service. Even if you don't eat, watch the kitchen operate. It will change how you think about feeding people.",
                  "9:30am: Walk to the Partition Museum (10 minutes from the temple, inside Town Hall). The Partition Museum is heavy. Allow 2 hours minimum. It's one of the most important museums in South Asia and almost nobody talks about it. Personal stories, objects, audio testimonies from 1947. It contextualises everything you see in Amritsar.",
                  activeTab === "A"
                    ? "Entry: ₹20 for Indians, ₹250 for foreigners. Audio guide worth the extra ₹100."
                    : "Entry: ₹20 for Indians, ₹250 for foreigners. Get the audio guide (₹100 extra) — the personal stories hit harder when you hear them narrated.",
                  "12:00pm: Shopping in Hall Bazaar and Katra Jaimal Singh. Phulkari dupattas (Punjabi embroidery) make excellent gifts — ₹300-2,000 depending on quality. Amritsari juttis (leather shoes) from ₹200-800. Bargain hard; start at 40% of asking price.",
                  "1:30pm: Final food stop. Makhan Fish Corner for amritsari fish — battered, deep-fried, served with green chutney. Amritsar has the best street food in India and I will fight anyone who says otherwise.",
                  "3:00pm: Head to the station or airport. Amritsar to Delhi trains: Shatabdi Express (6 hours, ₹800-1,500) or overnight trains. Flights to Delhi: 1 hour, ₹2,500-5,000 if booked early.",
                  "Alternative: If departing next morning, use the afternoon for Gobindgarh Fort (₹100-350 entry, 2 hours). It's been restored into an immersive museum with light and sound shows. Good but not essential if pressed for time.",
                ]}
                cost={activeTab === "A" ? "₹600-1,200" : "₹2,500-4,500"}
              />
            </div>
          </section>

          {/* ── STREET FOOD GUIDE ── */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🍛 The Definitive Street Food Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Amritsar has the best street food in India and I will fight anyone who says otherwise. Here&apos;s where to eat, in order of priority.
            </p>
            <div className="space-y-4">
              {[
                { rank: "#1", dish: "Amritsari Kulcha", where: "Bharawan Da Dhaba, near Town Hall", price: "₹80-120/plate", note: "Stuffed kulcha with chole, white butter, and onion salad. The kulcha is flaky, buttery, and stuffed with spiced potato or paneer. This is the reason to come to Amritsar. Go before 11am to avoid the queue.", emoji: "🫓", color: "bg-amber-50 border-amber-200" },
                { rank: "#2", dish: "Lassi", where: "Ahuja Milk Bhandar, near Golden Temple", price: "₹40-80", note: "Thick, creamy, served in a steel glass. Operating since 1957. The lassi here has a layer of malai (cream) on top that's almost solid. Get the sweet version. Skip the kesar (saffron) variant — the plain sweet is better.", emoji: "🥛", color: "bg-amber-50 border-amber-200" },
                { rank: "#3", dish: "Amritsari Fish", where: "Makhan Fish Corner, Majitha Road", price: "₹200-350/plate", note: "Battered and deep-fried river fish with green chutney. The batter is spiced with carom seeds and the fish is impossibly tender inside. Lunch or afternoon — this is a heavy meal.", emoji: "🐟", color: "bg-teal-50 border-teal-200" },
                { rank: "#4", dish: "Dal Makhani & Tandoori Roti", where: "Kesar Da Dhaba, near Chowk Passian", price: "₹150-250/thali", note: "Established 1916. The dal cooks for 12+ hours over slow flame. Thick, smoky, buttery. The tandoori roti is massive and charred just right. Perfect dinner after Wagah Border.", emoji: "🍲", color: "bg-teal-50 border-teal-200" },
                { rank: "#5", dish: "Jalebi & Fafda", where: "Giani Di Hatti, near Golden Temple", price: "₹50-100", note: "Hot, crispy, dripping with sugar syrup. Eat them fresh — jalebi has a 5-minute window of perfection. The fafda (crispy gram flour strips) are a perfect salty contrast.", emoji: "🍩", color: "bg-rose-50 border-rose-200" },
                { rank: "#6", dish: "Chole Bhature", where: "Kanha Sweets or any old city stall", price: "₹60-100", note: "Puffy fried bread with chickpea curry. Breakfast of champions. Every stall has its version but they're all good in the old city. Skip the fancy restaurant versions.", emoji: "🍳", color: "bg-rose-50 border-rose-200" },
              ].map((f) => (
                <div key={f.dish} className={`rounded-xl border p-5 ${f.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{f.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{f.rank}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{f.dish}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{f.where} · {f.price}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{f.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FOOD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="amritsari kulcha punjabi street food"
              fallback="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=900&q=80"
              alt="Amritsari kulcha with chole and butter"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Kulcha at Bharawan Da Dhaba: ₹80. The same kulcha at a Delhi restaurant claiming to be &quot;Amritsari style&quot;: ₹250 and half the flavour. There is no substitute for the original.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "₹3,500-5,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stays (1-2 nights)", "₹0-1,000"], ["Transport", "₹500-800"], ["Food", "₹800-1,500"], ["Entry fees", "₹50-250"], ["Shopping", "₹500-1,500"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹5,000-12,000", color: "bg-teal-50 border-teal-200",
                  items: [["Stays (1-2 nights)", "₹2,000-5,000"], ["Transport", "₹1,000-2,000"], ["Food", "₹1,500-3,000"], ["Entry fees", "₹200-500"], ["Shopping", "₹1,000-3,000"]] },
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
              * All prices per person. Does not include travel to/from Amritsar. Budget assumes Golden Temple Sarai for accommodation and mostly street food. The Golden Temple, Jallianwala Bagh, and Wagah Border are all free entry.
            </p>
          </section>

          <AffiliateBlock destination="Amritsar" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting the Golden Temple at 10am", desc: "By 10am it's crowded, hot, and you've missed the Palki Sahib ceremony. Go at 4:30-5am. The experience is completely different. You'll have space to breathe and actually feel the place.", icon: "⏰" },
                { title: "Arriving late to Wagah Border", desc: "The ceremony fills up fast, especially on weekends. Arrive 2 hours before the ceremony starts. VIP seating is available for ₹100-200 — worth it for a front-row view and shade.", icon: "🏟️" },
                { title: "Eating at tourist restaurants near the temple", desc: "The old city has legendary food stalls 5 minutes from the Golden Temple. Tourist restaurants charge 3x for worse food. Follow the locals, not the TripAdvisor crowd.", icon: "🍽️" },
                { title: "Skipping the Partition Museum", desc: "Most tourists don't even know it exists. It's 10 minutes from the Golden Temple and it contextualises the entire Punjab experience. Allow 2 hours. Go with an open mind.", icon: "🏛️" },
                { title: "Coming in summer (Apr-Jun)", desc: "Amritsar regularly hits 45°C+ in May-June. Walking the old city in that heat is genuinely dangerous. The marble at the Golden Temple burns your feet. October-March only.", icon: "🌡️" },
                { title: "Not covering your head at the Golden Temple", desc: "Head covering is required. Free scarves are available at every entrance. Wear something that covers your legs. Remove shoes at the entrance. Basic respect goes a long way.", icon: "🙏" },
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
                { icon: "🌅", title: "The 4:30am Rule", desc: "The Golden Temple before sunrise is a different place entirely. Calm, spiritual, golden. After 9am it becomes a crowded tourist attraction. The early morning is the real experience.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚂", title: "Take the Shatabdi Express", desc: "Delhi to Amritsar Shatabdi: 6 hours, ₹800-1,500, includes meals. Leaves New Delhi at 7:20am, arrives Amritsar 1:40pm. Perfect timing — check in, rest, hit the temple at sunset.", color: "bg-amber-50 border-amber-200" },
                { icon: "🧳", title: "Lock Your Shoes at the Temple", desc: "The free shoe counter at the Golden Temple is massive and efficient. Take the token seriously — thousands visit daily. Or just wear slip-on sandals and carry them in a bag.", color: "bg-teal-50 border-teal-200" },
                { icon: "📸", title: "Photography Etiquette", desc: "Photos are allowed at the Golden Temple but be respectful. Don't use flash inside the sanctum. Don't turn your back to the Harmandir Sahib for selfies. The best photos are from the causeway at dawn.", color: "bg-teal-50 border-teal-200" },
                { icon: "💧", title: "Carry Water in Summer", desc: "Even in October it can hit 30°C. Stay hydrated. The Golden Temple provides free water but carry a bottle for the old city walk. Lassi counts as hydration (my own medical opinion).", color: "bg-rose-50 border-rose-200" },
                { icon: "🛺", title: "Auto Rickshaw Tips", desc: "Always agree on the fare before getting in. Hall Gate to Wagah should be ₹400-600 return with waiting. Use Ola/Uber as a price benchmark even if you take an auto.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and group — we&apos;ll send a personalised Amritsar itinerary including trains from Delhi within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Amritsar Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Amritsar?", a: "2 days is the sweet spot. Day 1 covers the Golden Temple at dawn, Jallianwala Bagh, old city food walk, and Wagah Border. Day 2 covers the Langar kitchen, Partition Museum, and shopping. 1 day is possible but rushed. 3 days lets you add Gobindgarh Fort and explore deeper." },
                { q: "What is the best time to visit Amritsar?", a: "October to March. November-February has pleasant weather (5-20°C). Avoid April-June when temperatures hit 42-47°C. The Golden Temple is beautiful year-round but summer heat makes walking the old city miserable." },
                { q: "How much does a 2-day Amritsar trip cost?", a: "Budget: ₹3,500-5,000 per person including accommodation (Golden Temple Sarai is free), food, and transport. Comfortable: ₹5,000-12,000 with mid-range hotels and restaurants. The Golden Temple, Jallianwala Bagh, and Wagah Border are all free." },
                { q: "Is the Golden Temple free to visit?", a: "Completely free. Entry is free, the Langar serves free meals to everyone regardless of religion, and the Sarai offers free accommodation. Cover your head (free scarves at entrance) and remove shoes. Donations are welcomed but never required." },
                { q: "How do I get to the Wagah Border ceremony?", a: "Wagah is 28km from Amritsar city (45 min). Shared autos from Hall Gate: ₹50-80 per person. Private auto: ₹400-600 return with waiting. The ceremony starts before sunset — arrive 2 hours early for a good seat. Timings vary by season." },
                { q: "What is the best street food in Amritsar?", a: "Start at Bharawan Da Dhaba for kulcha (non-negotiable). Then Ahuja Milk Bhandar for lassi, Makhan Fish Corner for amritsari fish, Kesar Da Dhaba for dal makhani, and Giani Di Hatti for jalebi. All within walking distance of the Golden Temple." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer India Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Golden Triangle — Delhi, Agra, Jaipur", href: "/blog/golden-triangle-7-days", soon: false },
                { label: "Varanasi — 3 Day Spiritual Journey", href: "/blog/varanasi-3-days", soon: false },
                { label: "Kashmir — 6 Day Paradise", href: "/blog/kashmir-6-days", soon: false },
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

          <CombineWith currentSlug="amritsar-2-days" />
          <RelatedGuides currentSlug="amritsar-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
