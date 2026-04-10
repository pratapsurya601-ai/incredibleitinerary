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
import InlineCTA from "@/components/blog/InlineCTA";
import PhotoCta from "@/components/blog/PhotoCta";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/email/InlineSignup";
import PinterestSaveButton from "@/components/ui/PinterestSaveButton";

// ── Table of Contents ─────────────────────────────────────────────────────────
const FEZ_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Fez Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",   emoji: "🕌",  label: "Landmark Guide" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍽️", label: "Where to Eat" },
  { id: "tips",        emoji: "💡",  label: "Pro Tips" },
  { id: "faq",         emoji: "❓",  label: "FAQ" },
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
        className="h-full bg-amber-600 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── Share Bar ─────────────────────────────────────────────────────────────────
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
          href: `mailto:?subject=Fez Morocco 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Fez Morocco in 3 Days — UNESCO medina, ancient tanneries and the world's oldest university&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
      <PinterestSaveButton
        pageUrl="https://www.incredibleitinerary.com/blog/fez-morocco-3-days"
        imageUrl="https://images.unsplash.com/photo-1548019979-e50e7b2f1a15?w=1200&q=80"
        description="Fez Morocco in 3 Days: Chouara Tannery, Al-Qarawiyyin University, Medersa Bou Inania, spice souks, and hammam rituals — complete travel guide with budget breakdown."
      />
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
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-amber-500 mt-1 flex-shrink-0 text-xs">●</span>
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

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-600 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function FezMoroccoClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={FEZ_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Fez, Morocco" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="fez morocco medina old city islamic architecture rooftop minarets"
            fallback="https://images.unsplash.com/photo-1548019979-e50e7b2f1a15?w=1600&q=80"
            alt="Fez el-Bali medina rooftop view with minarets and ancient tanneries Morocco"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Fez 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Fez Morocco in 3 Days:
                <em className="italic text-amber-300"> The World&apos;s Oldest Living City</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Fes el-Bali — 9,000 medieval lanes, the Chouara tannery unchanged since the 11th century, Al-Qarawiyyin University founded 859 AD, pastilla pigeon pie, and a hammam that will unknot muscles you forgot you had. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="12 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇲🇦 Morocco, Africa</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From $30/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Fez is the world&apos;s largest car-free urban area and the most intact medieval city on earth — a living 9th-century labyrinth where donkeys still carry goods through alleys too narrow for a wheelbarrow, and the Chouara tannery has been dyeing leather in the same honeycomb vats since the 11th century.
            </p>
          </blockquote>

          {/* ── WHAT FEZ ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Fez Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Fes el-Bali — the old walled city — was founded in 789 AD and became the intellectual and spiritual capital of Morocco. Its medina, a UNESCO World Heritage Site since 1981, contains 186 mosques, 9,000 streets, and the world&apos;s oldest continuously operating university: Al-Qarawiyyin, founded by a woman (Fatima al-Fihri) in 859 AD. The Portuguese traveller Leo Africanus called it &quot;the most civilised city in the world&quot; in the 16th century.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Unlike Marrakech, Fez has not been fully smoothed for tourists. The medina is genuinely labyrinthine — medieval lane logic, no street signs, and alleys that dead-end without warning. Donkeys are still the main form of freight transport through the narrowest passages. Getting lost is not a metaphor; it is the experience. And it is extraordinary.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The Chouara Tannery is the oldest tannery in the world still in operation. The honeycomb vats — white for lime, coloured for natural dyes — have been used continuously since the 11th century. You view it from leather shop rooftops; bring a sprig of mint to hold to your nose. The smell of the vats, made from pigeon droppings and natural acids used to soften the hides, is memorable and intense. The view across the coloured vats to the medina roofscape is one of the great images of North Africa.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="FEZ" />
              <StatCard icon="🌡️" label="Best Season" value="Mar–May / Sep–Nov" />
              <StatCard icon="🕌" label="Mosques" value="186+" />
              <StatCard icon="💰" label="Budget From" value="$30/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Fez</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar–May",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "18–26°C, perfect for all-day medina walking. Rose festival season in nearby Kelaat M&apos;Gouna. The light is soft and golden, the medina lanes are not baking, and accommodation prices are reasonable. Widely considered the ideal window for Fez.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🍂",
                  t: "Autumn — Excellent",
                  d: "20–28°C, cooling from the summer heat. October is particularly good — the summer crowds have thinned, days are warm without being punishing, and the evening air is cool enough to enjoy rooftop dinners. Comparable to spring but slightly less crowded.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Aug",
                  i: "🔥",
                  t: "Summer — Avoid",
                  d: "35–42°C. The narrow medina lanes trap heat and have very little airflow. The tanneries smell significantly stronger in peak heat. Walking any distance feels genuinely punishing. If you must visit in summer, restrict medina exploration to 7–10am and after 5pm only.",
                  b: "Not recommended",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Feb",
                  i: "🌨️",
                  t: "Winter — Cool & Quiet",
                  d: "8–16°C. The medina is quiet, prices drop, and the light is crisp and clear for photography. Evenings are cold. Rain is possible in January and February. A scarf is essential. The off-season crowds mean you can have major sites almost to yourself — particularly the tanneries and Bou Inania.",
                  b: "Good for photographers",
                  c: "bg-blue-50 border-blue-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.s} — {s.t}</p>
                      <p className="text-[0.65rem] font-medium text-teal">{s.b}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── GETTING THERE ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Fez</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Fez is served by <strong className="font-medium">Fès-Saïss Airport (FEZ)</strong>, located 15km south of the medina. A petit taxi to Bab Boujloud (the main medina gate) costs <strong className="font-medium">MAD 150 (~$15)</strong> and takes roughly 30 minutes. Negotiate the fare before getting in; metered rides are rare from the airport.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly into Fès-Saïss Airport (FEZ)",
                  d: "Direct flights from London, Paris, Amsterdam, Madrid, and several European hubs. Royal Air Maroc and Ryanair both serve FEZ. From the airport to the medina: petit taxi MAD 150 (~$15), 30 minutes. Ask to be dropped at Bab Boujloud — the nearest road access to Fes el-Bali.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚂",
                  t: "Train from Casablanca or Rabat",
                  d: "ONCF trains run Casablanca Voyageurs → Fez: approximately 4 hours, MAD 110–170 ($11–17) for second class. Comfortable, air-conditioned, reliable. From Rabat: 3.5 hours. The Fez train station is in the new city (Ville Nouvelle) — take a petit taxi to the medina (MAD 25–30).",
                  b: "Good option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚂",
                  t: "Overnight Train from Marrakech",
                  d: "Marrakech → Fez: approximately 8 hours by overnight ONCF train, MAD 200–250 ($20–25) second class. Departs Marrakech in the evening, arrives Fez in the morning — saves a night&apos;s accommodation. One of the most practical Morocco route combinations.",
                  b: "Popular route",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "CTM Bus",
                  d: "CTM (premium Moroccan bus) connects Fez to Casablanca (4 hrs, MAD 100), Marrakech (7–8 hrs, MAD 180), and Tangier (5 hrs, MAD 120). Comfortable, punctual, and air-conditioned. The CTM station is in the Ville Nouvelle — take a petit taxi to the medina.",
                  b: "Budget option",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((t) => (
                <div key={t.t} className={`rounded-xl p-4 border ${t.c}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{t.i}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="font-semibold text-sm text-ink">{t.t}</p>
                        <span className="text-xs bg-white/70 text-muted px-2.5 py-1 rounded-full border border-white/50">{t.b}</span>
                      </div>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{t.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Fez Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed to hit the tanneries and major sites before tour groups arrive. Start early — the medina before 9am is a completely different place.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Medina Arrival · Bab Boujloud · Spice Souks · Seffarine Square"
                cost="MAD 200–350 (~$20–35)"
                items={[
                  "Arrive at Fès-Saïss Airport and take a petit taxi to Bab Boujloud, the ornate blue-and-green tiled gate that marks the main entrance to Fes el-Bali (MAD 150, ~30 min). Check into your riad inside the medina walls — budget options run MAD 120–200/night ($12–20), mid-range riads with breakfast MAD 600–900/night ($60–90).",
                  "Walk through Bab Boujloud and take the main Talaa Kebira lane downhill into the heart of the medina. The lane is wide enough to navigate confidently — narrower alleys branch off and the scale of the medina becomes apparent immediately. You will hear the call to prayer echoing from multiple minarets; the acoustics of the walled city are extraordinary.",
                  "Explore the spice souks along Talaa Kebira — bags of cumin, ras el hanout, dried rose petals, and saffron sold by weight. Prices are a fraction of what you would pay in Europe. The saffron market has fixed-price stalls — cross-reference a few to get a sense of fair rates (genuine saffron MAD 80–120 per gram).",
                  "Seffarine Square (coppersmiths square) — one of the oldest craft squares in Fez. Metalworkers hammer brass and copper trays, teapots, and lanterns by hand at workshop benches that open onto the cobblestones. The sound of rhythmic hammering fills the square. This is a living craft district, not a museum — these artisans supply the whole medina.",
                  "Dinner near Rcif Square for under MAD 80 ($8): harira soup (MAD 5 — a thick tomato and lentil broth with coriander, one of Morocco&apos;s great street foods), kefta brochettes (MAD 25–35), and Moroccan mint tea (MAD 5). The medina restaurant scene away from tourist lanes is genuinely excellent value.",
                  "Evening walk back through Bab Boujloud as the medina quiets — the lit gate at night, with the blue tilework glowing and the lanes emptying of daytime crowds, is one of the great atmospheric experiences of North Africa. The narrow alleys feel almost medieval in the evening light.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Chouara Tannery · Al-Qarawiyyin · Bou Inania Madrasa · Attarine Medersa"
                cost="MAD 250–450 (~$25–45)"
                items={[
                  "8:30am — Walk from your riad to the Chouara Tannery quarter before 10am when the light is best and tour groups have not arrived. The tannery is surrounded by leather shops whose rooftops serve as viewing platforms — the access is free with a purchase (a small leather keyring or coin purse MAD 25–50 is the unspoken minimum). Politely decline to buy anything until you have seen the view from the highest rooftop.",
                  "The tannery view from above: over 100 circular stone vats — white with lime paste used to strip the hair from hides, and coloured vats holding saffron yellow, poppy red, and indigo blue natural dyes. Workers stand inside the vats kneading the leather by foot. This process is unchanged since the 11th century. Bring a sprig of fresh mint to hold to your nose — shop owners will offer one at the entrance. The smell is intense but the view is worth every second.",
                  "Al-Qarawiyyin Mosque and University, founded 859 AD by Fatima al-Fihri — recognised by Guinness World Records as the world&apos;s oldest continuously operating university. Non-Muslims cannot enter the mosque interior, but the ornate carved wooden doors, the courtyard ablution fountain, and the carved cedar canopy above the main entrance are visible from outside and justify the detour. The architectural craftsmanship is extraordinary.",
                  "Bou Inania Madrasa (entry MAD 20 / ~$2) — the finest example of Merinid architecture in Fez and one of the few religious buildings in the medina open to non-Muslims. Built 1350–1355 AD. The zellige tilework, carved cedar wood screens, and stucco plasterwork rise three storeys around a central courtyard. The detail at every level is overwhelming: no two carved panels are identical. Spend at least 45 minutes here.",
                  "Medersa el-Attarine (entry MAD 20 / ~$2) — directly adjacent to Al-Qarawiyyin, this 14th-century Merinid medersa is smaller than Bou Inania but arguably more refined. The central courtyard is intimate, the carved plasterwork walls are exceptionally well-preserved, and the upper-floor student cells give a sense of what medieval university life in Fez looked like.",
                  "Lunch at a medina restaurant near Bou Inania: bastilla (the signature Fez dish — a pigeon pie in flaky warqa pastry with almonds, egg, and cinnamon, dusted with sugar — MAD 45–70 / $4–7) or a slow-cooked lamb tagine with preserved lemon and olives (MAD 60–90). The bastilla is genuinely one of the great dishes of North African cuisine — do not leave Fez without eating one.",
                  "Afternoon souk walk by craft category: leather souk (north of the tanneries), textile souk (Kissariat quarter), woodworking souk (near Nejjarine Square). The Nejjarine Museum of Wood Arts (entry MAD 20) in a beautifully restored 18th-century fondouk is worth a 30-minute visit for its collection of carved wood panels and decorative objects.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Hammam Morning · Mellah · Merinid Tombs Panorama · Departure"
                cost="MAD 150–300 (~$15–30)"
                items={[
                  "8:00am — Visit a traditional neighbourhood hammam before the medina wakes up. Ask your riad host to recommend the local hammam used by residents (not a tourist spa hammam). Entry MAD 15–20 ($1.50–2). Bring flip-flops and a change of clothes. A kessa scrub mitt (MAD 10–15) is essential — the black soap and exfoliation treatment will leave your skin completely renewed. The neighbourhood hammam experience is one of the most authentic things you can do in Fez.",
                  "10:00am — Final medina wander through the textile and lantern souks near Bab Rcif. Best purchases in Fez: hand-painted ceramic tagines (MAD 150–400 depending on size), argan oil (MAD 80–150 for 100ml of genuine cold-pressed), and Fassi leather babouche slippers (yellow for men, any colour for women, MAD 60–120). Leather goods — bags, wallets, belts — are excellent value compared to European equivalents.",
                  "Mellah — the historic Jewish quarter of Fez, in Fez el-Jdid (the new medina, built 1276 AD). The Mellah has distinctive architecture — high balconied houses, a covered market, and the Ibn Danan Synagogue (still functioning, free entry). The quarter has a completely different character from Fes el-Bali and gives a fuller picture of the complexity of Fez&apos;s history.",
                  "Merinid Tombs — ruins of 14th-century royal tombs on a hill above the medina (free access, best reached by petit taxi or a 25-minute walk from Bab Boujloud). The tombs themselves are partially collapsed, but the panoramic view over Fes el-Bali from the hilltop is the best in Fez — the entire roofscape, the minarets, the tannery quarter, and the surrounding hills in one frame. Most day-trippers miss this entirely. Visit at least 45 minutes before your taxi to the airport.",
                  "Msemen flatbread with honey and argan oil (MAD 15–20) at a street stall near Bab Boujloud for a final lunch, or a last harira and salad plate at a medina cafe. Petit taxi to Fès-Saïss Airport (MAD 150, ~30 minutes). Allow 2 hours before departure for the drive, check-in, and security.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Fez" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🕌 Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential sites in order of priority. Entry fees in MAD as of early 2026. Most major landmarks are within the medina walls and walkable from each other.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Chouara Tannery",
                  e: "Free (via leather shop rooftop, small purchase expected)",
                  d: "The oldest tannery in the world still in operation — unchanged since the 11th century. Over 100 stone vats for soaking and dyeing hides using natural pigments: saffron yellow, poppy red, indigo blue, and white lime. View from leather shop rooftops surrounding the tannery. Visit before 10am for best light and fewest crowds. Bring mint to hold to your nose.",
                  t: "Must see · 1 hr",
                },
                {
                  n: "Al-Qarawiyyin Mosque & University",
                  e: "Exterior only (non-Muslims cannot enter)",
                  d: "Founded 859 AD by Fatima al-Fihri — the world&apos;s oldest continuously operating university, predating Oxford by more than 300 years. The carved cedar doors, ablution courtyard fountain, and minaret are visible from the entrance. The university library holds manuscripts dating to the 9th century. The Attarine Medersa next door gives access to comparable architectural detail.",
                  t: "Must see · 30 min",
                },
                {
                  n: "Bou Inania Madrasa",
                  e: "MAD 20 (~$2)",
                  d: "The finest Merinid monument in Fez, built 1350–1355 AD and one of the few religious buildings open to non-Muslims. Three storeys of zellige tilework, carved cedar, and stucco plasterwork rising around a central fountain courtyard. The craftsmanship rivals anything in the Islamic world. Allow 45–60 minutes to absorb the detail.",
                  t: "Must see · 45–60 min",
                },
                {
                  n: "Medersa el-Attarine",
                  e: "MAD 20 (~$2)",
                  d: "Built by Sultan Abu Said in 1323 AD, directly adjacent to Al-Qarawiyyin Mosque. Smaller and more intimate than Bou Inania, with exceptionally well-preserved carved plaster and zellige tilework. The upper floor student cells are accessible — look through the wooden screens down to the courtyard. One of the most beautifully proportioned buildings in Fez.",
                  t: "Must see · 30–45 min",
                },
                {
                  n: "Nejjarine Museum of Wood Arts",
                  e: "MAD 20 (~$2)",
                  d: "Housed in an 18th-century fondouk (merchant caravanserai) near Seffarine Square. Three floors of carved wood panels, decorative doors, musical instruments, and furniture from across Morocco&apos;s Islamic heritage. The building itself — a restored fondouk with a central courtyard — is as interesting as the collection. Rooftop terrace has medina views.",
                  t: "Recommended · 30 min",
                },
                {
                  n: "Mellah Jewish Quarter",
                  e: "Free",
                  d: "The historic Jewish quarter of Fez, located in Fez el-Jdid. Distinctive balconied architecture different from Fes el-Bali, a covered market, and the 17th-century Ibn Danan Synagogue (still in use, free entry, respectful dress required). The Mellah tells a part of Fez&apos;s history that most day-trippers skip entirely.",
                  t: "Recommended · 45 min",
                },
                {
                  n: "Merinid Tombs",
                  e: "Free",
                  d: "Ruins of 14th-century Merinid royal tombs on a hill north of the medina. The tombs are partially collapsed but the panoramic view over Fes el-Bali — the entire roofscape, minarets rising from a sea of terracotta, the Atlas Mountains in the distance — is the best in Fez. Go at sunrise or sunset. Almost entirely missed by tourists staying in the medina.",
                  t: "Underrated · 1 hr",
                },
                {
                  n: "Seffarine Square",
                  e: "Free",
                  d: "The coppersmiths square — one of the oldest surviving craft quarters in Fez. Artisans hammer brass and copper trays, teapots, and lanterns at open workshop benches. The rhythmic sound of metalworking fills the small square. Directly adjacent to the Al-Qarawiyyin entrance. The best free 15-minute experience in the medina.",
                  t: "Free · 15–20 min",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900">{place.n}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full">{place.e}</span>
                      <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">{place.t}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{place.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <DestinationGallery
            title="Fez — Medina, Tanneries &amp; Islamic Architecture"
            subtitle="The world&apos;s most intact medieval city, unchanged for a thousand years."
            spots={[
              {
                name: "Chouara Tannery",
                query: "chouara tannery fez morocco leather dyeing vats honeycomb",
                desc: "The Chouara Tannery — over 100 stone vats for lime-soaking and natural dyeing, unchanged since the 11th century and one of the great images of North Africa.",
              },
              {
                name: "Bou Inania Madrasa",
                query: "bou inania madrasa fez morocco merinid tilework zellige",
                desc: "The 14th-century Bou Inania Madrasa — zellige tilework, carved cedar, and stucco plasterwork rising three storeys around a central courtyard fountain.",
              },
              {
                name: "Fes el-Bali Medina Rooftops",
                query: "fes el bali medina rooftop view minarets morocco old city",
                desc: "The roofscape of Fes el-Bali — 186 mosques, 9,000 lanes, and the world&apos;s largest car-free urban area spreading to the hills.",
              },
              {
                name: "Bab Boujloud Gate",
                query: "bab boujloud gate fez morocco blue green ornate entrance medina",
                desc: "Bab Boujloud — the ornate blue-and-green tiled gate that marks the main entrance to Fes el-Bali, photographed from every angle at every hour.",
              },
              {
                name: "Fez Spice Souks",
                query: "fez morocco spice souk medina market cumin saffron herbs",
                desc: "The spice souks of Fes el-Bali — sacks of cumin, ras el hanout, dried rose petals, and saffron in the medieval lanes of Talaa Kebira.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Fez is significantly cheaper than European cities and on par with other North African destinations. The major variables are accommodation (a riad inside the medina versus a hotel in the Ville Nouvelle) and whether you hire a licensed guide. All prices in MAD and approximate USD.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (per night)", "MAD 120–200 ($12–20)", "MAD 600–900 ($60–90)", "MAD 2,000–4,000 ($200–400)"],
                    ["🍽️ Food (per day)", "MAD 80–150 ($8–15)", "MAD 250–400 ($25–40)", "MAD 700–1,200 ($70–120)"],
                    ["🚕 Transport (per day)", "MAD 30–60 ($3–6)", "MAD 80–150 ($8–15)", "MAD 200–400 ($20–40)"],
                    ["🕌 Entry fees (3 days)", "MAD 50–100 ($5–10)", "MAD 200–350 ($20–35)", "MAD 500–800 ($50–80)"],
                    ["TOTAL per day", "MAD 300–500 ($30–50)", "MAD 800–1,400 ($80–140)", "MAD 2,500–5,000 ($250–500)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($30–50/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in a basic riad guesthouse inside the medina (MAD 120–200/night), eat harira and street food (MAD 5–15 per item), take petit taxis. This is completely comfortable in Fez — medina guesthouses are well-run and the street food is exceptional.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($80–140/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">A mid-range riad with breakfast (MAD 600–900/night), meals at medina restaurants and riad dinners, a half-day licensed guide for Day 1 (MAD 250–350). This is the sweet spot — the guide on Day 1 alone saves hours of getting lost and pays for itself immediately.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">✨ Luxury ($250–500/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">A palace riad like Riad Fes or Dar Bensouda (MAD 2,000–4,000/night), private guides, cooking classes (MAD 600–800/person), spa hammam treatments (MAD 500–800), and fine dining at Nur or Dar Roumana (MAD 500–700/person).</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Fez</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Stay inside Fes el-Bali in a riad if at all possible. You wake to the morning call to prayer, walk out your door directly into the medina, and experience the city at dawn and dusk when day visitors have left. Even a basic medina riad beats any hotel outside the walls for atmosphere. Riads require a 5–15 minute walk from the nearest road (their location in the medina means no cars can access them) — a small inconvenience that defines the experience.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Riad Fes",
                  type: "Luxury palace riad · Fes el-Bali",
                  price: "From MAD 2,500/night (~$250)",
                  badge: "Best luxury",
                  desc: "One of the most acclaimed riads in Morocco — a 19th-century palace restored to a 30-room boutique hotel with two hammams, a rooftop terrace overlooking the medina, a pool, and one of the best restaurants in Fez. The service and architectural detail are exceptional. The benchmark for luxury inside the medina walls.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Dar Bensouda",
                  type: "Boutique riad · Fes el-Bali",
                  price: "From MAD 1,800/night (~$180)",
                  badge: "Best mid-luxury",
                  desc: "A beautifully restored 17th-century house with seven rooms around a central courtyard. Quieter and more personal than the larger luxury riads. Rooftop terrace with medina views, attentive staff who will organise guides and hammam appointments, and excellent Moroccan breakfasts included. The location deep in the medina is excellent.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Riad Laaroussa",
                  type: "Heritage riad · Fes el-Bali",
                  price: "From MAD 1,400/night (~$140)",
                  badge: "Most atmospheric",
                  desc: "A 17th-century riad with six individually decorated rooms, a rooftop terrace, and a reputation for genuine hospitality. The owners are knowledgeable about the medina and provide excellent guidance for independent exploration. One of the best-reviewed riads in Fez for travellers who want character over corporate polish.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Budget Medina Guesthouses",
                  type: "Budget riad guesthouse · Fes el-Bali",
                  price: "MAD 120–300/night ($12–30)",
                  badge: "Best budget",
                  desc: "Several well-run budget guesthouses and small riads cluster near Bab Boujloud and the Rcif area — Pension Batha, Dar Seffarine, and similar properties. Basic rooms, shared bathrooms in the cheapest options, but genuine medina locations and hosts who can navigate you through the lanes. The experience of staying inside the medina outweighs any comfort trade-off.",
                  color: "border-parchment-2 bg-white",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{stay.name}</p>
                      <p className="text-xs text-muted font-light">{stay.type}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60">{stay.price}</span>
                      <span className="text-xs bg-gold/15 text-gold-dark px-2 py-0.5 rounded-full font-medium">{stay.badge}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{stay.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Fez</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Fassi cuisine is considered the most refined in Morocco. Fez is the home of pastilla (pigeon pie), slow-cooked tagines with preserved lemon, and bastilla au lait (the milk dessert version with almonds and cream). Street food in the medina is extraordinarily cheap and good — harira soup at MAD 5, msemen flatbread at MAD 8, and fresh-squeezed orange juice at MAD 5.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Cafe Clock",
                  t: "International-Moroccan fusion · Medina",
                  d: "The most consistently recommended restaurant in Fez for international travellers — a multi-floor medina house with rooftop seating and views over the roofscape. Famous for its camel burger (genuinely good, MAD 85) and live Gnawa music on certain evenings. Full menu of Moroccan classics and traveller-friendly international options. MAD 100–180/person. Book ahead for dinner.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Nur Restaurant",
                  t: "Contemporary Moroccan fine dining · Medina",
                  d: "One of the most acclaimed restaurants in North Africa — contemporary Moroccan cuisine using traditional Fassi ingredients and techniques, plated with precision. The tasting menu (MAD 450–600/person) is the way to experience Fassi cuisine at its peak. Book at least 48 hours ahead. For a special meal in Fez, this is the choice.",
                  b: "Best fine dining",
                  c: "bg-purple-50 border-purple-200",
                },
                {
                  n: "Street Food: Harira & Msemen",
                  t: "Street stalls · Throughout the medina",
                  d: "Harira soup (MAD 5) — a thick, sustaining tomato and lentil broth with coriander, served with a squeeze of lemon and a msemen flatbread (MAD 8). Eaten for breakfast and dinner by Fez residents throughout the year. Available from stalls near Bab Boujloud, Rcif Square, and throughout the medina. The single best food value in Morocco.",
                  b: "Best value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Riad Restaurant Dinners",
                  t: "Set menu · Your riad",
                  d: "Most riads serve a set Moroccan evening meal (MAD 150–350/person depending on the riad) featuring harira, pastilla, a tagine main, couscous, and bastilla au lait dessert. Dining in your riad courtyard by candlelight under the stars, with the medina quieting around you, is a defining Fez experience. Book the morning of the day you want to eat.",
                  b: "Most atmospheric",
                  c: "bg-orange-50 border-orange-200",
                },
              ].map((r) => (
                <div key={r.n} className={`rounded-xl p-4 border ${r.c}`}>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{r.n}</p>
                      <p className="text-xs text-muted font-light">{r.t}</p>
                    </div>
                    <span className="text-xs bg-white/80 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200 font-medium">{r.b}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{r.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Block */}
          <AffiliateBlock
            destination="Fez Morocco"
            hotels={[
              {
                name: "Riad Fes",
                type: "Palace riad · Fes el-Bali",
                price: "From MAD 2,500/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/ma/riad-fes.html?aid=2820480",
              },
              {
                name: "Dar Bensouda",
                type: "Boutique heritage riad · Fes el-Bali",
                price: "From MAD 1,800/night",
                rating: "5",
                badge: "Most intimate",
                url: "https://www.booking.com/hotel/ma/dar-bensouda-fes.html?aid=2820480",
              },
              {
                name: "Riad Laaroussa",
                type: "Heritage riad · Fes el-Bali",
                price: "From MAD 1,400/night",
                rating: "4",
                badge: "Most atmospheric",
                url: "https://www.booking.com/hotel/ma/riad-laaroussa-fes.html?aid=2820480",
              },
              {
                name: "Pension Batha",
                type: "Budget guesthouse · Near Bab Boujloud",
                price: "From MAD 150/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/ma/pension-batha-fes.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Fez Medina Guided Walking Tour",
                duration: "3 hrs",
                price: "From MAD 300/person",
                badge: "Essential Day 1",
                url: "https://www.getyourguide.com/s/?q=Fez+Morocco+medina+tour&partner_id=PSZA5UI",
              },
              {
                name: "Chouara Tannery Tour",
                duration: "2 hrs",
                price: "From MAD 200/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Fez+Morocco+tannery+tour&partner_id=PSZA5UI",
              },
              {
                name: "Moroccan Cooking Class Fez",
                duration: "4 hrs",
                price: "From MAD 600/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=Fez+Morocco+cooking+class&partner_id=PSZA5UI",
              },
              {
                name: "Traditional Hammam Experience",
                duration: "90 min",
                price: "From MAD 250/person",
                url: "https://www.getyourguide.com/s/?q=Fez+Morocco+hammam&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Fez</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🗺️",
                  title: "Entering the medina without a guide on Day 1",
                  desc: "Fez el-Bali has over 9,000 lanes and no logical grid, no street signs, and alleys that dead-end without warning. Even experienced travellers spend hours completely lost on their first day. A licensed guide for the first 2–3 hours (MAD 250–350) pays for itself in saved frustration and gives you the spatial logic to navigate independently afterwards. Book through your riad to avoid touts at the gate.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "📸",
                  title: "Going to the tanneries after 10am",
                  desc: "By mid-morning the leather shop rooftops fill with tour groups and the tannery workers have reduced activity in the vats. Visit before 9:30am for the best golden light across the honeycomb vats, fewest people, and most active dyeing work. In summer, many tanneries do no dyeing at all in the afternoon heat. The view at 8am versus noon is not comparable.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "💰",
                  title: "Accepting the first price in any tourist-facing shop",
                  desc: "Initial prices in medina shops that cater to tourists are typically 3–5 times the expected final price. Polite, firm negotiation starting at 25–30% of the asking price is normal and expected. Walk away if the price does not come down — the vendor will often follow. Never negotiate if you have no genuine interest in buying; wasting a vendor&apos;s time is considered rude.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🌡️",
                  title: "Visiting in July or August",
                  desc: "Fez in summer regularly reaches 40–42°C. The narrow medina lanes have very little airflow and the tanneries smell significantly more intense in peak heat. March–May and September–November offer 20–28°C days ideal for multi-hour medina walking. If you must visit in summer, restrict outdoor exploration to 7–10am and 5–8pm only.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🏨",
                  title: "Booking a hotel outside the medina walls",
                  desc: "Staying in a riad inside Fes el-Bali transforms the entire trip. You wake to the morning call to prayer from the surrounding minarets, walk out your door directly into the souk lanes, and experience the medina at dawn and dusk when day-trippers have left. Even a MAD 200/night budget guesthouse inside the walls beats a 4-star hotel in the Ville Nouvelle for the Fez experience.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-5 border ${m.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{m.icon}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900 mb-1">{m.title}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Fez</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🫖",
                  title: "Learn the mint tea ritual",
                  desc: "Moroccan mint tea (atay) is poured from height to create froth and is always served in three glasses — the first bitter like life, the second strong like love, the third sweet like death. Never refuse it; it is an act of hospitality. Refusing tea is a social slight in Moroccan culture. Book tours at https://www.getyourguide.com/s/?q=Fez+Morocco&partner_id=PSZA5UI",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🐴",
                  title: "Watch for donkeys in narrow alleys",
                  desc: "Donkeys are still the main freight transport in the narrowest medina lanes. When you hear a shout of &apos;Balak!&apos; (move!) from behind, step into a doorway immediately — the donkey has right of way and the alleys are too narrow for both of you. This happens several times a day and is part of the medina&apos;s living character.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "💵",
                  title: "Carry small Dirham notes for street food",
                  desc: "Street food (harira MAD 5, msemen MAD 8, fresh orange juice MAD 5), hammam entry (MAD 15–20), and souk purchases all require cash. ATMs are available near Bab Boujloud and the Rcif area. Exchange euros or dollars at a bank rather than a street exchanger for the best rate. Cards are rarely accepted inside the medina proper.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🪴",
                  title: "Mint is your friend at the tanneries",
                  desc: "Leather shop owners near the Chouara Tannery will offer a sprig of fresh mint as you enter the rooftop viewing area. Accept it and hold it to your nose near the vats — the smell from the lime-soaking and natural dye process is genuine and strong. The mint substantially reduces the intensity. Do not let the smell dissuade you from staying long enough to absorb the view.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "📿",
                  title: "Dress modestly in religious neighbourhoods",
                  desc: "Women should carry a scarf to cover shoulders and knees when walking through neighbourhoods near Al-Qarawiyyin and the major mosques. Men in shorts may receive sideways looks near mosque entrances. This is not strictly enforced for tourists, but modest dress is appreciated, noticeably improves interactions with local residents, and is appropriate respect for the religious sites.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "🗺️",
                  title: "Download an offline map before arrival",
                  desc: "Mobile signal inside the deeper medina lanes is unreliable and data can be slow. Download the Fez medina area in Google Maps or Maps.me before entering. Even with an offline map, you will still get lost — but you will know approximately where you are, and losing track of a major landmark like Bab Boujloud becomes much less stressful.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Fez" />

          {/* Combine With */}
          <CombineWith currentSlug="fez-morocco-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Fez safe for solo travellers?",
                  a: "Fez is generally safe for solo travellers including solo women. The main friction is persistent unofficial guides (faux guides) near medina gates who offer unsolicited tours and become aggressive if declined. Say &apos;non merci&apos; firmly once and keep walking — engaging at all extends the interaction. Inside the medina proper, residents are hospitable and helpful. Petty theft is low compared to other major tourist cities. Standard urban precautions apply after dark.",
                },
                {
                  q: "How many days do I need in Fez?",
                  a: "Three days is the ideal minimum. Day 1 covers orientation and the spice souks. Day 2 hits the tanneries, Al-Qarawiyyin, and Bou Inania Madrasa. Day 3 allows a hammam, the Merinid Tombs viewpoint, the Mellah, and Nejjarine Museum. Two days feels rushed — you spend the first morning just learning to navigate. Four days allows you to slow down, take a cooking class, and explore the Fez el-Jdid area more deeply.",
                },
                {
                  q: "Can non-Muslims visit Al-Qarawiyyin?",
                  a: "Non-Muslims cannot enter the Al-Qarawiyyin Mosque interior or the main prayer hall. However, the ornate carved wooden doors and the ablution fountain courtyard are visible from the entrance. The library (a separate building) occasionally allows academic visitors by appointment. The Attarine Medersa, directly adjacent to Al-Qarawiyyin, is open to everyone and gives comparable architectural context — it is almost as beautiful and fully accessible.",
                },
                {
                  q: "What is the best way to get from Fez to Marrakech?",
                  a: "The overnight ONCF train from Fez to Marrakech (approximately 8 hours) is safe, comfortable, and costs MAD 200–250 ($20–25) for second class. It departs in the late evening and arrives in the morning, saving a night&apos;s accommodation. A CTM bus takes 7–8 hours and costs similarly. Flying takes 1 hour but costs MAD 500–1,000 and airport transfers add significant time. The train is by far the best option.",
                },
                {
                  q: "Do I need to hire a guide in Fez?",
                  a: "A licensed guide for your first 2–3 hours in the medina is strongly recommended. Fez el-Bali has over 9,000 lanes and no logical street grid — experienced travellers who skip a guide on Day 1 routinely spend hours completely lost. A licensed guide (MAD 250–350 for a half-day, booked through your riad) explains the spatial logic of the souk layout so you can navigate independently on Days 2 and 3. Never hire guides who approach you at medina gates — only book through your riad or a licensed tour operator.",
                },
                {
                  q: "What should I buy in the Fez medina?",
                  a: "Best value purchases: Fassi leather babouche slippers (MAD 60–120), ceramic tagines hand-painted in Fez blue-and-white (MAD 150–400), genuine argan oil cold-pressed (MAD 80–150 per 100ml — check it is from a women&apos;s cooperative for authenticity), ras el hanout spice blend (MAD 30–50 per 100g), and handwoven textile items from the Kissariat souk. Leather goods (bags, wallets, belts) from the tannery district are excellent quality at fair prices compared to what the same goods sell for in Europe.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Fez trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/morocco-7-days", label: "Morocco 7-day itinerary", icon: "🗺️" },
                { href: "/blog/casablanca-3-days", label: "Casablanca guide", icon: "🏙️" },
                { href: "/blog/visa-free-countries-indian-passport", label: "Visa for Indians", icon: "🛂" },
                { href: "/blog/india-budget-guide", label: "Budget travel tips", icon: "💰" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Guides */}
          <RelatedGuides currentSlug="fez-morocco-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Africa &amp; Middle East Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Marrakech 4 Days — Souks &amp; Sahara", href: "/blog/marrakech-4-days" },
                { label: "Istanbul 5 Days — Bosphorus &amp; Bazaars", href: "/blog/istanbul-5-days" },
                { label: "Lisbon 4 Days — Tiles &amp; Trams", href: "/blog/lisbon-4-days" },
                { label: "Seville 3 Days — Flamenco &amp; Tapas", href: "/blog/seville-3-days" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
                >
                  <span
                    className="text-sm text-ink font-light group-hover:text-teal transition-colors"
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
