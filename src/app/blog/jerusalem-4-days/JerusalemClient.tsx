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
import InlineCTA from "@/components/blog/InlineCTA";
import PhotoCta from "@/components/blog/PhotoCta";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/email/InlineSignup";
import PinterestSaveButton from "@/components/ui/PinterestSaveButton";
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const JERUSALEM_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Jerusalem Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",        emoji: "🍽️", label: "Where to Eat" },
  { id: "tips",       emoji: "💡",  label: "Pro Tips" },
  { id: "faq",        emoji: "❓",  label: "FAQ" },
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
        {
          label: "Email",
          color: "bg-ink text-white",
          href: `mailto:?subject=Jerusalem 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Jerusalem in 4 Days — Western Wall, Dome of the Rock &amp; 3,000 years of civilisation&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/jerusalem-4-days"
        imageUrl="https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=80"
        description="Jerusalem in 4 Days: Western Wall, Dome of the Rock, Church of the Holy Sepulchre, Via Dolorosa, Yad Vashem and the Mahane Yehuda market — complete travel guide with budget breakdown."
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
export default function JerusalemClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={JERUSALEM_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="jerusalem old city western wall dome of the rock israel"
            fallback="https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1600&q=80"
            alt="Jerusalem Old City with Western Wall and Dome of the Rock at golden hour"
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
              <span className="text-white/70">Jerusalem 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="bg-white/15 text-white/80 text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                  Middle East
                </span>
              </div>
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Jerusalem in 4 Days:
                <em className="italic text-amber-300"> Three Faiths, Four Quarters &amp; 3,000 Years</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Western Wall, Dome of the Rock, Church of the Holy Sepulchre, Via Dolorosa, Yad Vashem, and the Mahane Yehuda market. The complete guide, from $60/day to $450/day.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="16 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🕌 Israel</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $60/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              There is a moment, just after dawn, when the first light catches the gold of the Dome of the Rock and the entire Old City of Jerusalem seems to ignite. Three Abrahamic faiths coexist within 0.9 square kilometres of limestone walls, each claiming the same ground as the centre of the world — and then you turn a corner in the Muslim Quarter and someone presses a spit-roasted shawarma into your hands, and it somehow tastes better for having 3,000 years of civilisation as the backdrop.
            </p>
          </blockquote>

          {/* ── WHAT JERUSALEM ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Jerusalem Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Jerusalem is not just a city — it is the convergence point of three of the world&apos;s major religions, each with ancient claims to the same few hundred metres of limestone bedrock. The Old City is divided into four quarters (Jewish, Muslim, Christian, and Armenian) within walls built by Suleiman the Magnificent in 1538 AD, enclosing sites that predate those walls by thousands of years.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Western Wall (HaKotel) is the last standing retaining wall of the Second Temple, destroyed by Rome in 70 AD — the holiest accessible site in Judaism. A few hundred metres away, the Dome of the Rock sits on the Temple Mount (Haram al-Sharif), the third holiest site in Islam, built in 691 AD over the rock from which Muslims believe Muhammad ascended to heaven. The Church of the Holy Sepulchre, shared uneasily by six Christian denominations, marks the site of the crucifixion and resurrection of Jesus according to Christian tradition.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              What makes Jerusalem extraordinary is not just the density of holy sites — it&apos;s the fact that these places are alive. The Western Wall plaza fills with worshippers around the clock. The Church of the Holy Sepulchre is thick with incense and genuflecting pilgrims. The Muslim Quarter souks are loud, chaotic, and completely real. This is not a preserved heritage site — it is a functioning city that happens to be 3,000 years old and contested by half the world.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="From Ben Gurion Airport" value="22–28 min" />
              <StatCard icon="🌡️" label="Best Season" value="Mar–May / Sep–Nov" />
              <StatCard icon="🕌" label="Holy Sites" value="3 Faiths" />
              <StatCard icon="💰" label="Budget From" value="$60/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Jerusalem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar–May",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "15–25°C, Jerusalem&apos;s limestone glows in the clear spring light. Wildflowers on the Mount of Olives. Easter and Passover bring enormous crowds to the Old City (book accommodation months ahead) but the atmosphere is extraordinary. Ideal for most travellers.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🍂",
                  t: "Autumn — Equally Good",
                  d: "17–27°C, fewer crowds than spring, clear skies, comfortable temperatures for walking. Sukkot (the Jewish Feast of Tabernacles) falls in September–October and transforms the Jewish Quarter. A strong second choice for all visitor types.",
                  b: "Recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Aug",
                  i: "☀️",
                  t: "Summer — Hot But Manageable",
                  d: "25–32°C in the day, cooler at night. Jerusalem&apos;s altitude (800m) keeps summer temperatures significantly cooler than Tel Aviv or the Dead Sea region. Busy with North American and European Jewish family tourism. Start sites before 9am.",
                  b: "Early starts required",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter — Cold & Quiet",
                  d: "5–12°C, occasional rain, and Jerusalem can receive snow (the Old City under snow is breathtaking). Far fewer tourists, accommodation prices drop significantly, and the sites are peaceful. Pack layers — the stone city gets genuinely cold after dark.",
                  b: "For crowds-avoiders",
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

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Jerusalem</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Jerusalem has its own train station — <strong className="font-medium">Yitzhak Navon</strong> — connected directly to Ben Gurion Airport (TLV) by the high-speed Yitzhak Navon–Airport rail link. The train takes 22–28 minutes and runs every 30 minutes. This is the fastest and cheapest route from the airport.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚆",
                  t: "Train from Ben Gurion Airport (recommended)",
                  d: "Ben Gurion Airport → Jerusalem Yitzhak Navon station: 22–28 minutes, 26 NIS (~$7). Trains run every 30 minutes. Clean, fast, air-conditioned. From Yitzhak Navon station, take a taxi or bus to your hotel (5–15 min, 30–50 NIS). Note: trains do not run on Shabbat (Friday sunset to Saturday night).",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚕",
                  t: "Sherut (shared taxi) from airport",
                  d: "Shared minibus taxis (sheruts) depart from outside Ben Gurion arrivals and run to central Jerusalem (Central Bus Station or city centre hotels). Cost: 80–120 NIS ($22–33). Journey time: 50–70 minutes. Run on Shabbat, unlike buses and trains.",
                  b: "Good for Shabbat arrival",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Tel Aviv",
                  d: "Egged bus 480 runs Tel Aviv Central Bus Station → Jerusalem Central Bus Station in 45–60 minutes, ~20 NIS ($5). Frequent departures throughout the day. Does not run on Shabbat.",
                  b: "Budget option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Private taxi or rental car from airport",
                  d: "Private airport taxi to Jerusalem: $60–90. Journey time 45–60 minutes depending on traffic. Useful with heavy luggage or late-night arrivals. Rental cars available at the airport — useful if you plan a Dead Sea / Masada day trip.",
                  b: "Flexible",
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

          {/* ── 4-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Jerusalem Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is structured around the restricted opening hours of Temple Mount (non-Muslims: Sunday–Thursday mornings only) and the Shabbat shutdown on Friday evenings. Days are ordered to make the most of early morning access to the holy sites.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="The Old City — Four Quarters, Western Wall &amp; Via Dolorosa"
                cost="$55–70 total"
                items={[
                  "8:00am — Arrive in Jerusalem from Tel Aviv or the airport. Check into Abraham Hostel (budget, near Jaffa Gate, dorms from 120 NIS/$33) or a guesthouse in the Christian Quarter. Drop your bags and head straight into the Old City through Jaffa Gate.",
                  "9:30am — Enter the Armenian Quarter — the smallest and quietest of the four quarters, where 15th-century ceramic tilework decorates doorways and the Cathedral of St James dates to the Crusader period. Almost no tourist crowds even in peak season.",
                  "10:30am — Continue through the Jewish Quarter to the Western Wall (HaKotel). Entry is free. Dress modestly — head coverings are available at the entrance. Spend time at the plaza, then consider the Western Wall Tunnels (book ahead, ~35 NIS/$9) to walk along the full underground length of the wall at Herodian street level.",
                  "12:30pm — Lunch in the Muslim Quarter: the market streets of Al-Wad and Suq Khan al-Zeit are packed with cheap, excellent food. Falafel sandwich 8 NIS ($2), fresh-squeezed pomegranate juice 10 NIS ($3), knafeh (hot cheese pastry with rose-water syrup) 20 NIS ($5). Budget 40 NIS ($11) for a full lunch.",
                  "2:00pm — Walk the Via Dolorosa (the Way of the Cross) — 14 Stations of the Cross through the Muslim and Christian Quarters. The path is marked with Roman numerals. Walk it independently (free) or join the Franciscan procession that departs from the 1st Station every Friday at 3pm.",
                  "4:00pm — Church of the Holy Sepulchre. Free entry. Built over the site of the crucifixion, burial, and (by Christian tradition) resurrection of Jesus. Shared by six denominations. Visit the Edicule (Jesus&apos;s tomb), Golgotha/Calvary (the crucifixion rock), and the Stone of Anointing. Go in the late afternoon when tour groups thin out.",
                  "6:30pm — Walk back through the Christian Quarter to Jaffa Gate. Dinner near Mahane Yehuda Market (outside the Old City, 20-min walk): hummus with pita and Israeli salads at a local joint for 35–50 NIS ($9–13).",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Temple Mount, Dome of the Rock &amp; Mount of Olives"
                cost="$60–75 total"
                items={[
                  "7:30am — Temple Mount (Har HaBayit / Haram al-Sharif) — the most contested religious site on earth. Non-Muslim entry through the Mughrabi Gate (south of the Western Wall plaza) is only permitted Sunday–Thursday 7:30–11:00am and 1:30–2:30pm. Free entry. Dress very modestly — no religious items, no Bibles, no Stars of David visible. Israeli police and Waqf guards monitor closely.",
                  "8:30am — The Dome of the Rock (exterior only for non-Muslims) — the octagonal Islamic shrine with its iconic 24-carat gold dome, built in 691 AD over the rock from which Muslims believe Muhammad ascended to heaven. Al-Aqsa Mosque is nearby — exterior viewing only for non-Muslims. These are two of the most significant and most-photographed structures in the world.",
                  "10:00am — Descend through the Dung Gate and take a servis (shared taxi) or walk 20 minutes to the Mount of Olives. The panoramic view from here — with the Dome of the Rock centred against the ancient limestone skyline, the Jewish Cemetery below, and the Judean Desert in the distance — is the definitive Jerusalem photograph. Morning light is best.",
                  "11:00am — Walk down the Palm Sunday Road from the Mount of Olives through the Jewish Cemetery (the world&apos;s oldest sacred Jewish burial site, 3,000 years of graves) to the Garden of Gethsemane. The ancient olive trees here are among the oldest living things in the Middle East — some carbon-dated to over 900 years. Free entry.",
                  "1:00pm — Lunch: shawarma and fresh juice from a stand near Lion&apos;s Gate — 45–60 NIS ($12–16) for a full meal.",
                  "2:30pm — Tower of David (David Citadel) Museum near Jaffa Gate — entry ILS 36 (~$10). The museum uses the citadel&apos;s towers and moat to tell Jerusalem&apos;s 3,000-year history through archaeology and immersive displays. The night sound-and-light show is spectacular (~80 NIS/$22, book ahead).",
                  "7:00pm — Dinner at Mahane Yehuda Market (the Shuk). By night it transforms from a produce market into a buzzing restaurant and bar district. Mezze plates, grilled meats, and Israeli wine. Budget 80–120 NIS ($22–33) with drinks.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Yad Vashem &amp; Dead Sea Day Trip"
                cost="$55–70 total"
                items={[
                  "8:00am — Yad Vashem Holocaust Memorial &amp; Museum. Take bus 17 or 27 from the city centre (20 NIS/$5). Free entry but book a timed slot online at yad-vashem.org — it fills up, especially in peak season. Allow 3–4 hours minimum. The main museum follows the chronological history of the Holocaust through 10 rooms. The Children&apos;s Memorial — a single room with 1.5 million candles reflected to infinity — is harrowing and transcendent.",
                  "12:30pm — Light lunch near the memorial or back in the city centre (35–50 NIS/$9–13).",
                  "2:00pm — Bus or shared taxi (servis) to the Dead Sea — the lowest point on earth at 430m below sea level. Buses from Jerusalem&apos;s Central Bus Station (route 444 or 486, ~30 NIS/$8, 1 hour). Ein Gedi public beach has free access to the sea. Float effortlessly on the mineral-saturated water (ten times saltier than the ocean). Do not stay in more than 20 minutes, do not shave beforehand, and keep water out of your eyes — it burns severely. Rinse off in the freshwater showers on the beach.",
                  "4:00pm — Ein Gedi Nature Reserve (if you have energy): a green oasis of waterfall-fed pools and endemic wildlife directly beside the Dead Sea. Ibex and hyrax wander the hiking trails. Entry ~30 NIS ($8). The Nahal David trail to the Ein Gedi waterfall is 1.5 hours return.",
                  "6:30pm — Return bus to Jerusalem. Dinner near Ben Yehuda Street pedestrian mall — pizza or Middle Eastern food, 50–80 NIS ($13–22).",
                ]}
              />
              <DayCard
                day="Day 4"
                title="City of David, Hezekiah&apos;s Tunnel &amp; Ramparts Walk"
                cost="$50–65 total"
                items={[
                  "8:30am — City of David archaeological park (entry ~45 NIS/$12). The oldest part of Jerusalem, predating the Old City by 1,000 years. Walk through Hezekiah&apos;s Tunnel — a 533-metre underground water channel carved in 701 BC, still filled with knee-deep water. Bring a waterproof torch and sandals you don&apos;t mind getting wet. The audio guide explains how King Hezekiah had this channel carved to secure Jerusalem&apos;s water supply before an Assyrian siege.",
                  "11:00am — Ramble through East Jerusalem&apos;s Arab market near Damascus Gate — the busiest and most chaotic gate into the Old City, selling fruit, spices, household goods, and the best cheap falafel in the city.",
                  "12:30pm — Final lunch: Israeli breakfast spread at a café near Mahane Yehuda Market — eggs, hummus, salads, fresh bread, and strong coffee for 50–80 NIS ($13–22). A ritual worth repeating every morning.",
                  "2:30pm — Walk the Ramparts of the Old City walls (Ramparts Walk, ~18 NIS/$5). The walkway on top of the 16th-century Ottoman walls connects Jaffa Gate to Lions Gate with panoramic views into both the Old City and the surrounding neighbourhoods.",
                  "4:30pm — Last wander through the Jewish Quarter. The Armenian Quarter&apos;s ceramics workshops sell hand-painted tiles — one of Jerusalem&apos;s finest souvenirs. Olive wood carvings and Judaica in the Jewish Quarter.",
                  "6:00pm — Head to Ben Gurion Airport. Train from Jerusalem Yitzhak Navon station to TLV: 22–28 minutes, 26 NIS ($7). Arrive 3 hours before international departure — Israeli security is thorough.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Jerusalem" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Jerusalem Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry prices as of 2026. Temple Mount hours vary — always check current times before visiting.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Western Wall (HaKotel)",
                  e: "Free",
                  d: "The holiest accessible site in Judaism — the last remaining retaining wall of the Second Temple, destroyed by Rome in 70 AD. The plaza is open 24 hours. Dress modestly (head coverings at the entrance). Morning light on the ancient stones is extraordinary. The Western Wall Tunnels (35 NIS, book ahead) reveal the full underground length.",
                  t: "Must see · Open 24 hrs",
                },
                {
                  n: "Dome of the Rock",
                  e: "Compound free (interior closed to non-Muslims)",
                  d: "The octagonal Islamic shrine built in 691 AD with its iconic 24-carat gold dome, sitting on the Temple Mount. Non-Muslims can access the Temple Mount compound and photograph the exterior. The interior is closed to non-Muslims. Access: Mughrabi Gate, Sun–Thu mornings only.",
                  t: "Must see · Restricted hours",
                },
                {
                  n: "Church of the Holy Sepulchre",
                  e: "Free",
                  d: "Built over the site of Jesus&apos;s crucifixion, burial, and resurrection (by Christian tradition). Shared by six Christian denominations. The Edicule (tomb), Golgotha (crucifixion rock), and Stone of Anointing are the main focal points. Go early morning or late afternoon to avoid tour group crush.",
                  t: "Must see · 1.5–2 hrs",
                },
                {
                  n: "Via Dolorosa",
                  e: "Free",
                  d: "The Way of the Cross — 14 Stations through the Muslim and Christian Quarters marking the path Jesus carried the cross. Walk it independently (free, signs in the streets) or join the Franciscan procession every Friday at 3pm. The walk takes about 45 minutes at a pilgrim pace.",
                  t: "Must see · 45 min",
                },
                {
                  n: "Yad Vashem",
                  e: "Free (book timed entry at yad-vashem.org)",
                  d: "Israel&apos;s Holocaust memorial and the most comprehensive Holocaust museum in the world. Allow a full morning (3–4 hours). The Children&apos;s Memorial and the Avenue of the Righteous Among the Nations are particularly affecting. Timed reservations fill up — book several days ahead in peak season.",
                  t: "Must see · Half day",
                },
                {
                  n: "Mount of Olives Viewpoint",
                  e: "Free",
                  d: "The panoramic view of the Old City from the Mount of Olives — with the Dome of the Rock centred, the Jewish Cemetery in the foreground, and the Judean Desert behind — is the definitive Jerusalem photograph. Best in morning light. The Jewish Cemetery contains 3,000 years of graves and is the most sacred Jewish burial ground in the world.",
                  t: "Sunrise / Morning · 1 hr",
                },
                {
                  n: "Tower of David (David Citadel) Museum",
                  e: "ILS 36 (~$10) · Night show ~80 NIS",
                  d: "The museum inside the citadel adjacent to Jaffa Gate tells Jerusalem&apos;s 3,000-year history through the towers, moat, and archaeological layers of the citadel itself. The night sound-and-light show projected onto the ancient walls runs March–October and is one of Jerusalem&apos;s best evening experiences. Book ahead.",
                  t: "Recommended · 1.5–2 hrs",
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
            title="Jerusalem — Holy City, Ancient Stones"
            subtitle="Three faiths, four quarters, and 3,000 years of civilisation in 0.9 square kilometres."
            spots={[
              {
                name: "Western Wall &amp; Dome of the Rock",
                query: "western wall dome of the rock jerusalem israel golden hour",
                desc: "The Western Wall plaza with the Dome of the Rock rising behind it — the most sacred and most contested view in Jerusalem.",
              },
              {
                name: "Muslim Quarter Souk",
                query: "jerusalem muslim quarter souk market old city israel",
                desc: "The market streets of the Muslim Quarter — Al-Wad and Suq Khan al-Zeit — loud, fragrant, and completely alive.",
              },
              {
                name: "Church of the Holy Sepulchre",
                query: "church holy sepulchre jerusalem christian quarter interior",
                desc: "The ancient interior of the Church of the Holy Sepulchre, shared by six Christian denominations and thick with incense and candlelight.",
              },
              {
                name: "Mount of Olives Panorama",
                query: "mount of olives jerusalem panorama old city skyline israel",
                desc: "The panoramic view from the Mount of Olives — the Dome of the Rock centred against the limestone skyline of the Old City.",
              },
              {
                name: "Mahane Yehuda Market",
                query: "mahane yehuda market jerusalem shuk israel nightlife food",
                desc: "The Mahane Yehuda Market by night — transformed from a produce souk into Jerusalem&apos;s most electric restaurant and bar district.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Jerusalem&apos;s major holy sites — Western Wall, Church of the Holy Sepulchre, Via Dolorosa, Yad Vashem — are all free to enter. The main costs are accommodation and food. Budget travellers can have a deeply meaningful trip at $60–80/day.
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
                    ["🏨 Accommodation (per night)", "$22–33 (hostel dorm)", "$120–160 (3-star hotel)", "$400–600 (5-star)"],
                    ["🍽 Food (per day)", "$15–22", "$35–55", "$100–180"],
                    ["🚌 Transport (per day)", "$5–10", "$15–25", "$80–120"],
                    ["🎟 Activities (per day)", "$15–25", "$40–60", "$80–150"],
                    ["TOTAL (per day)", "$60–80", "$140–180", "$320–450"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($60–80/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at Abraham Hostel (dorms 120–150 NIS), eat falafel and hummus from the Muslim Quarter and Mahane Yehuda, use buses and trains everywhere. The major holy sites are all free. Entirely doable and deeply rewarding.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($140–180/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at Harmony Hotel or Legacy Hotel near Jaffa Gate ($120–160/night), eat at Machneyuda and the better Mahane Yehuda restaurants, book a half-day guided Old City walk via GetYourGuide. The sweet spot for most international travellers.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">👑 Luxury ($320–450/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">King David Hotel or Waldorf Astoria Jerusalem ($400–600/night), private guides for all major sites, private transfer to Masada and the Dead Sea, dinner at Eucalyptus or Machneyuda. Jerusalem&apos;s top end is genuinely world-class.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Jerusalem</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Staying inside or immediately adjacent to the Old City (near Jaffa Gate) allows early morning access to the holy sites before day-trippers arrive. West Jerusalem (near Ben Yehuda Street and Mahane Yehuda) offers better restaurant and nightlife options. Both work well for a 4-day trip.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "King David Hotel",
                  type: "Legendary luxury · West Jerusalem",
                  price: "From $400/night",
                  badge: "Most iconic",
                  desc: "The most famous hotel in Jerusalem — Churchill, Kissinger, and every head of state since 1931 have stayed here. Rooms look directly at the Old City walls. The rooftop pool with Dome of the Rock views is one of Jerusalem&apos;s great luxury experiences. Book at least a month ahead.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "American Colony Hotel",
                  type: "Historic boutique · East Jerusalem",
                  price: "From $280/night",
                  badge: "Most storied",
                  desc: "A 19th-century pasha&apos;s palace turned legendary hotel, historically neutral ground between Israeli and Arab Jerusalem. Garden courtyard, swimming pool, excellent restaurant. A different, quieter side of Jerusalem — close to the Old City but away from the tourist crush.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Mamilla Hotel",
                  type: "Design boutique · Adjacent to Jaffa Gate",
                  price: "From $200/night",
                  badge: "Best location",
                  desc: "Contemporary design hotel directly facing the Jaffa Gate and Old City walls. The rooftop bar has one of the best Old City views in Jerusalem. Walking distance to everything. The premium location justifies the price for most travellers who want comfort without the full King David bill.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Abraham Hostel Jerusalem",
                  type: "Boutique hostel · Near Jaffa Gate",
                  price: "Dorms from 120 NIS ($33) · Private from 350 NIS ($95)",
                  badge: "Best budget",
                  desc: "Jerusalem&apos;s best hostel by a considerable margin. Clean, well-run, excellent social atmosphere, free walking tours, and close to Jaffa Gate and the Old City. Dorm beds are among the best-value accommodation in the city. Book ahead — it fills fast in peak season.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Jerusalem</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Jerusalem&apos;s food scene spans cheap, extraordinary Muslim Quarter street food to some of the finest restaurants in the Middle East. The Israeli breakfast tradition — hummus, tahini, roasted aubergine, labneh, fresh-baked bread — is one of the world&apos;s great morning meal cultures and available even at budget cafés.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Machneyuda",
                  t: "Contemporary Israeli · Near Mahane Yehuda Market",
                  d: "Jerusalem&apos;s most celebrated restaurant. The kitchen is open to the dining room, the music is loud, the food is extraordinary — contemporary Israeli cuisine built on market produce, Ashkenazi technique, and Sephardic flavour. Tasting menu 250–350 NIS ($68–95). Book weeks ahead for weekend tables. Worth it.",
                  b: "Best in city",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Azura",
                  t: "Traditional Sephardic · Mahane Yehuda Market",
                  d: "A tiny, legendary restaurant inside the Shuk serving Sephardic Jewish and Kurdish-Israeli food — slow-cooked stews, mejadra, stuffed peppers, lamb offal. Lunch only, cash only, queues form early. One of Jerusalem&apos;s most authentic eating experiences. 60–100 NIS ($16–27) per person.",
                  b: "Most authentic",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Tmol Shilshom",
                  t: "Literary café-restaurant · City centre",
                  d: "A beloved Jerusalem institution — a book-lined café in a 19th-century stone building serving excellent shakshuka, salads, and Israeli lunch plates. Popular with writers, academics, and thoughtful travellers. An antidote to the tourist-facing restaurants near the Old City. 60–120 NIS ($16–33).",
                  b: "Best atmosphere",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Muslim Quarter Street Food",
                  t: "Street food · Al-Wad &amp; Suq Khan al-Zeit",
                  d: "The cheapest and most satisfying food in Jerusalem. Falafel sandwiches 8 NIS ($2), fresh-squeezed pomegranate juice 10 NIS ($3), knafeh 20 NIS ($5), shawarma wraps 25–35 NIS ($7–9). Eat standing at a stall, absorb the chaos of the souk, and spend less than $10 on a full meal.",
                  b: "Best value",
                  c: "bg-parchment border-parchment-2",
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
            destination="Jerusalem Israel"
            hotels={[
              {
                name: "King David Hotel Jerusalem",
                type: "Legendary luxury · West Jerusalem",
                price: "From $400/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/il/king-david.html?aid=2820480",
              },
              {
                name: "Mamilla Hotel",
                type: "Design boutique · Jaffa Gate",
                price: "From $200/night",
                rating: "5",
                badge: "Best location",
                url: "https://www.booking.com/hotel/il/the-mamilla.html?aid=2820480",
              },
              {
                name: "American Colony Hotel",
                type: "Historic boutique · East Jerusalem",
                price: "From $280/night",
                rating: "5",
                badge: "Most storied",
                url: "https://www.booking.com/hotel/il/american-colony.html?aid=2820480",
              },
              {
                name: "Abraham Hostel Jerusalem",
                type: "Boutique hostel · Near Jaffa Gate",
                price: "Dorms from $33/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/il/abraham-hostel-jerusalem.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Jerusalem Old City Walking Tour",
                duration: "3–4 hrs",
                price: "From $25/person",
                badge: "Most booked",
                url: "https://www.getyourguide.com/s/?q=Jerusalem+Old+City+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Jerusalem Dead Sea &amp; Masada Day Tour",
                duration: "Full day",
                price: "From $75/person",
                badge: "Best combo",
                url: "https://www.getyourguide.com/s/?q=Jerusalem+Dead+Sea+Masada&partner_id=PSZA5UI",
              },
              {
                name: "Tower of David Night Spectacular",
                duration: "1 hr",
                price: "From $22/person",
                badge: "Best evening",
                url: "https://www.getyourguide.com/s/?q=Tower+of+David+Jerusalem+night+show&partner_id=PSZA5UI",
              },
              {
                name: "Hezekiah&apos;s Tunnel Guided Tour",
                duration: "2 hrs",
                price: "From $18/person",
                url: "https://www.getyourguide.com/s/?q=Hezekiah+Tunnel+Jerusalem&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Jerusalem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "⏰",
                  title: "Visiting Temple Mount Without Checking Hours",
                  desc: "Temple Mount is only open to non-Muslims for a few hours each morning (approx 7:30–11:00am) and a brief afternoon window on weekdays. It is closed Fridays and Saturdays entirely. Dozens of travellers are turned away every day. Check current times at the Israeli Tourism Ministry website — they change seasonally and due to religious holidays.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "👗",
                  title: "Underdressing for Religious Sites",
                  desc: "The Western Wall, Temple Mount, Church of the Holy Sepulchre, and most mosques require covered shoulders and knees for all genders. Keep a light shawl in your bag at all times. Some sites provide coverings at the entrance but quality is poor and you may queue. Arriving appropriately dressed saves time and avoids embarrassment.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "📸",
                  title: "Photographing Soldiers or Security Infrastructure",
                  desc: "Israel has extensive visible security. Photographing military personnel, checkpoints, or border infrastructure can result in memory card confiscation and lengthy questioning. Stick to photographing the ancient and the beautiful. When in doubt, ask first.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🏪",
                  title: "Shopping Only in Old City Souvenir Stalls",
                  desc: "The souvenir shops in the Old City&apos;s tourist corridors are overpriced and mostly sell mass-produced goods. For authentic Armenian ceramics, handmade olive wood items, and genuine Dead Sea products, visit the Armenian Quarter&apos;s workshops or the Jewish Quarter&apos;s Judaica shops. Price-check everything.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚌",
                  title: "Not Accounting for Shabbat",
                  desc: "From Friday sunset to Saturday night, Israeli public transport (buses, trains) shuts down almost completely. Many Jewish-owned restaurants and shops close. If arriving or departing Saturday, book a private transfer in advance. Plan your Shabbat day around open sites: the Old City, Arab Quarter shops, and East Jerusalem continue normally.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🌊",
                  title: "Staying in the Dead Sea Too Long",
                  desc: "The hypersaline Dead Sea water is wonderful for 10–20 minutes. Beyond that, the salt aggressively draws moisture from your skin, and any cut or nick becomes intensely painful. Do not shave within 24 hours of visiting. Do not put your face in the water. Rinse immediately in fresh water after. The experience is remarkable — but it has a time limit.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Jerusalem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🕐",
                  title: "Arrive at Religious Sites at Opening Time",
                  desc: "The Church of the Holy Sepulchre, Western Wall, and Temple Mount are all at their most peaceful and photogenic 30–60 minutes after opening. By 10am, tour groups arrive in waves. Early mornings in Jerusalem are also cooler, and the golden light on the limestone walls is extraordinary.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🗺️",
                  title: "Get a Good Map of the Old City",
                  desc: "The Old City&apos;s alleyways are a genuine labyrinth — narrow lanes, no sight lines, streets that change names mid-block, no GPS in covered souqs. Download Maps.me offline (it has the best Old City detail) and pick up a free physical map from the tourist office at Jaffa Gate. Getting intentionally lost is part of the experience — but knowing roughly where you are prevents real frustration.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎟️",
                  title: "Book Yad Vashem and Tower of David Night Show in Advance",
                  desc: "Yad Vashem requires timed entry reservations — spots fill days ahead in peak season. The Tower of David Night Spectacular sells out on weekends. Book both at least 3–5 days ahead. The night show runs March–October.",
                  color: "bg-indigo-50 border-indigo-200",
                },
                {
                  icon: "🍳",
                  title: "Eat a Proper Israeli Breakfast Every Morning",
                  desc: "Israeli breakfast culture is extraordinary — hummus, tahini, roasted aubergine, fresh cheeses, labneh, boiled eggs, Israeli salad, and freshly baked bread. Even budget cafés serve a version for 50–80 NIS ($13–22). It will keep you full until early afternoon and is arguably the world&apos;s best breakfast culture.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "💱",
                  title: "Exchange Money at Mahane Yehuda, Not the Airport",
                  desc: "Airport exchange desks offer the worst rates in Israel. Use ATMs at Israeli bank branches or licensed money changers near Mahane Yehuda Market for the best rates. US Dollars are accepted in tourist businesses at approximately $1 = 3.5 NIS — an unfavourable rate. Exchange to NIS before spending in markets and street food stalls.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🎒",
                  title: "Use GetYourGuide for Tours and Skip-the-Line Access",
                  desc: "For guided tours of the Old City, Masada and Dead Sea combos, and the Tower of David Night Show, GetYourGuide offers vetted local guides with confirmed booking. Particularly valuable for Temple Mount tours (where context transforms the experience) and for Hezekiah&apos;s Tunnel guided visits at getyourguide.com with partner_id=PSZA5UI.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Jerusalem" />

          {/* Combine With */}
          <CombineWith currentSlug="jerusalem-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Jerusalem safe to visit in 2026?",
                  a: "Jerusalem is safe for tourists the vast majority of the time. The Old City receives millions of visitors annually. Standard urban precautions apply — be aware of your surroundings, avoid political demonstrations, and monitor local news during any heightened security period. The Israeli security presence is extensive and visible. The main practical concerns are aggressive hawking in tourist corridors and bag-snatching near the Damascus Gate bus stop area. Check your government&apos;s travel advisory before departure.",
                },
                {
                  q: "How do I get from Ben Gurion Airport (TLV) to Jerusalem?",
                  a: "The direct train from Ben Gurion Airport to Jerusalem Yitzhak Navon station runs every 30 minutes, takes 22–28 minutes, and costs approximately 26 NIS ($7). This is the fastest and cheapest option. Sherut (shared taxis) depart from outside arrivals and cost 80–120 NIS ($22–33), taking 50–70 minutes. Private taxis cost $60–90. Note: trains and buses do not run on Shabbat (Friday sunset to Saturday night) — on those days, book a private transfer or take a sherut.",
                },
                {
                  q: "What currency should I use in Jerusalem and where should I exchange money?",
                  a: "Israeli Shekels (NIS) are required for most purchases. Best exchange rates are at ATMs (Israeli bank ATMs give interbank rates) or licensed money changers near Mahane Yehuda Market. Avoid airport exchange desks. US Dollars are accepted in tourist-facing businesses but at poor rates (~3.5 NIS vs the 3.7 NIS you get at a proper ATM). Credit cards are widely accepted in hotels, restaurants, and larger shops. Carry cash for Old City market shopping and street food stalls.",
                },
                {
                  q: "Can non-Muslims visit the Dome of the Rock?",
                  a: "Non-Muslims can visit the Temple Mount compound (which includes the Dome of the Rock and Al-Aqsa Mosque) but cannot enter either building. Access is through the Mughrabi Gate, south of the Western Wall plaza, during restricted hours: Sunday–Thursday approximately 7:30–11:00am and 1:30–2:30pm. The compound is closed to non-Muslims on Fridays, Saturdays, and during Muslim prayer times. Always check current hours before visiting — they change seasonally.",
                },
                {
                  q: "What is the best base for a Jerusalem trip?",
                  a: "Staying inside or immediately adjacent to the Old City (near Jaffa Gate or the Christian Quarter) is the most atmospheric choice and allows early morning access to the holy sites before day-trippers arrive. West Jerusalem near Ben Yehuda Street and Mahane Yehuda Market offers better restaurant and nightlife access. Budget travellers should look at Abraham Hostel (near Jaffa Gate, excellent value and community). Luxury travellers should strongly consider the King David Hotel or Mamilla Hotel for their Old City views.",
                },
                {
                  q: "Can I visit Bethlehem and the West Bank from Jerusalem?",
                  a: "Yes. Bethlehem (Church of the Nativity, Banksy&apos;s Walled Off Hotel) is an easy half-day trip from Jerusalem. Cross via Checkpoint 300 (Gilo) — straightforward for tourists with non-Israeli passports. Jericho (the world&apos;s oldest continuously inhabited city) and Ramallah are also accessible. Israeli citizens cannot enter Area A of the Palestinian Authority. Guided tours of the West Bank from Jerusalem are available via GetYourGuide and are strongly recommended for context.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto px-6 md:px-8 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Jerusalem trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/jordan-5-days", label: "Jordan 5 Days — Petra &amp; Wadi Rum", icon: "🏜️" },
                { href: "/blog/egypt-7-days", label: "Egypt 7 Days — Pyramids &amp; Nile", icon: "🔺" },
                { href: "/blog/istanbul-5-days", label: "Istanbul 5 Days — Hagia Sophia", icon: "🕌" },
                { href: "/blog/amman-4-days", label: "Amman 4 Days — Jordan Capital", icon: "🏛️" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight" dangerouslySetInnerHTML={{ __html: item.label }} />
                </Link>
              ))}
            </div>
          </div>

          {/* Related Guides */}
          <RelatedGuides currentSlug="jerusalem-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Middle East Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Jordan in 5 Days — Petra, Wadi Rum &amp; the Dead Sea", href: "/blog/jordan-5-days" },
                { label: "Egypt in 7 Days — Cairo, Pyramids &amp; the Nile", href: "/blog/egypt-7-days" },
                { label: "Istanbul in 5 Days — Hagia Sophia &amp; the Bosphorus", href: "/blog/istanbul-5-days" },
                { label: "Doha in 3 Days — Qatar&apos;s Capital", href: "/blog/doha-3-days" },
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
