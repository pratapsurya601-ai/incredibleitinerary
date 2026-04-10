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
const BERLIN_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Berlin Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",        emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",   emoji: "❌",  label: "Mistakes to Avoid" },
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
          href: `mailto:?subject=Berlin 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Berlin in 4 Days — Wall, museums, street food and nightlife&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/berlin-4-days"
        imageUrl="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80"
        description="Berlin in 4 Days: Brandenburg Gate, East Side Gallery, Museum Island, Kreuzberg street food and Europe&apos;s most creative nightlife — complete itinerary from €55/day."
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
export default function BerlinClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BERLIN_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="berlin brandenburger gate east side gallery germany night"
            fallback="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1600&q=80"
            alt="Berlin Brandenburg Gate illuminated at night with Unter den Linden boulevard"
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
              <span className="text-white/70">Berlin 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Europe
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Berlin in 4 Days:
                <em className="italic text-amber-300"> History, Street Art &amp; Europe&apos;s Most Creative City</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The Berlin Wall, Brandenburg Gate, Museum Island, Kreuzberg currywurst, the East Side Gallery and Europe&apos;s most legendary nightlife. The complete guide from €55/day.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="January 2026" readTime="16 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇩🇪 Germany, Europe</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💶 From €55/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Berlin is the most fascinating city in Europe — where Cold War scars are visible on every corner, where the East Side Gallery stretches 1.3km of the original Wall as the world&apos;s longest open-air gallery, and where a simple sausage smothered in curry-ketchup has achieved near-mythical status as the city&apos;s defining dish.
            </p>
          </blockquote>

          {/* ── WHAT BERLIN ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Berlin Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Berlin is a city that refuses to be comfortable. It was divided by a concrete wall for 28 years, bombed to rubble in the Second World War, rebuilt on top of itself twice — once by the Soviets in the East and once by American-backed West Germany — and then smashed back together again in 1989 in one of the most electric moments of the 20th century. None of this history is hidden. It is right there, on the surface, on every street.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What makes Berlin unique is that it wears all of this openly, without nostalgia or shame. The Memorial to the Murdered Jews of Europe sits in the centre of the city, 200 metres from the Brandenburg Gate. The Topography of Terror — a documentation centre built on the former Gestapo and SS headquarters — is one of the most visited sites in Germany. The East Side Gallery is not a relic but a living gallery. This is a city that does not look away.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              And then, alongside all the history, Berlin is also Europe&apos;s most creative and culturally restless city — with more museums than rainy days per year, a food scene built on Turkish, Vietnamese, and Middle Eastern immigration, techno clubs that open on Friday and close on Monday, and a cost of living that (relative to other European capitals) still lets artists and musicians actually live here.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Main Airport" value="BER" />
              <StatCard icon="🌡️" label="Best Season" value="May–Sep" />
              <StatCard icon="🏛️" label="Museums" value="170+" />
              <StatCard icon="💶" label="Budget From" value="€55/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Berlin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Sep",
                  i: "☀️",
                  t: "Summer — Peak Season",
                  d: "18–28°C, long days (sunset after 9pm in June), outdoor markets, Tempelhof picnics, canal-side beer gardens in full swing. Berlin in summer is the city at its most alive. July and August are peak tourist months — book accommodation early. The best overall window for most travellers.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🌸",
                  t: "Spring — Excellent Value",
                  d: "8–18°C, fewer tourists than summer, lower hotel prices, and the city&apos;s parks and canal paths begin coming back to life. April is particularly good — cherry blossoms along Unter den Linden, manageable crowds at the major museums, and the outdoor scene beginning to open.",
                  b: "Great value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Oct–Nov",
                  i: "🍂",
                  t: "Autumn — Golden Season",
                  d: "8–15°C, autumn colours in Tiergarten and the Tiergarten parkland, fewer tourists, excellent museum queues. October is reliably dry and crisp. November starts to feel cold and dark. The club and cultural season (opera, Philharmonic, gallery openings) is at its strongest in the autumn months.",
                  b: "For culture lovers",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter — Cold but Rewarding",
                  d: "0–5°C, grey and genuinely cold. But Berlin&apos;s Christmas markets (Gendarmenmarkt is one of Germany&apos;s finest, late November–December) are exceptional. January and February are the quietest and cheapest months — ideal for museum-focused visits, the indoor food scene, and the club culture, which doesn&apos;t care what the weather is doing outside.',",
                  b: "For value & culture",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Berlin</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Berlin&apos;s main airport is <strong className="font-medium">BER (Berlin Brandenburg Airport)</strong>, opened in 2020 after a notoriously delayed construction. Both Terminals 1 and 2 are connected. The S9 and S45 S-Bahn lines connect BER to central Berlin in 30–40 minutes (included on the Berlin ABC ticket, €4.40).
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "From India (recommended international route)",
                  d: "Mumbai, Delhi and Bangalore have direct or one-stop flights to Berlin BER via Lufthansa, Air India, IndiGo and Emirates. Delhi–Berlin is typically 8–9 hours direct (Lufthansa) or 10–13 hours via Dubai or Frankfurt. Book 6–8 weeks ahead for best fares — ₹35,000–₹70,000 return economy.",
                  b: "Most common",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚄",
                  t: "From other European cities (Eurostar/ICE)",
                  d: "Berlin is brilliantly connected by rail. Paris to Berlin: ~8 hrs by ICE (via Frankfurt or Brussels, €39–€130). Amsterdam to Berlin: ~6 hrs direct ICE (€29–€99). Prague to Berlin: ~4 hrs (€19–€69). Warsaw to Berlin: ~6 hrs. All arrive at Berlin Hauptbahnhof — the city&apos;s central station, beautifully located.",
                  b: "Best for Europe trips",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚇",
                  t: "Getting around Berlin — S-Bahn & U-Bahn",
                  d: "Berlin&apos;s public transport network (BVG) is comprehensive — U-Bahn (underground), S-Bahn (suburban rail), trams and buses all on one ticket. A single trip is €3.50. The AB Day Pass (€9.40) covers unlimited travel all day in zones A and B — covering all tourist areas. The 7-day pass (€36) is exceptional value for a week&apos;s stay.",
                  b: "Buy day passes",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🎟️",
                  t: "Berlin WelcomeCard — is it worth it?",
                  d: "The Berlin WelcomeCard (from €23/day) covers unlimited public transport plus discounts of 25–50% at 200+ attractions. It&apos;s worth buying if you plan to use public transport daily AND visit multiple paid attractions. If you have the Berlin Museum Pass (€29 for 3 days, covers 30+ museums), the WelcomeCard + Museum Pass combination is very strong value.",
                  b: "Consider buying",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Berlin Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed by neighbourhood to minimise transit time and maximise the experience of each district. Costs shown are mid-range estimates in EUR and approximate USD equivalent.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Brandenburg Gate · Reichstag · Holocaust Memorial · Checkpoint Charlie"
                cost="€35–50 / ~$38–55"
                items={[
                  "Start at the Brandenburg Gate (free, always open) — the most powerful symbol in modern European history, the site where Kennedy gave his Berlin speech and where the Wall fell in 1989. Arrive before 9am to photograph without crowds.",
                  "Walk north to the Reichstag building. If you booked the glass dome in advance (free, register at bundestag.de — do this weeks ahead), this morning slot gives you the best light over the city. Bring your passport for security.",
                  "Holocaust Memorial (Denkmal für die ermordeten Juden Europas) — free, 200 metres south of the Brandenburg Gate. Walk between the 2,711 concrete stelae of different heights — the disorientation is deliberate and profound. The underground information centre (free) is equally powerful and essential.",
                  "Lunch near Gendarmenmarkt — the most beautiful square in Berlin, flanked by the French and German cathedrals. Several good mid-range restaurants nearby; budget €12–18 for lunch.",
                  "Afternoon: Checkpoint Charlie — the former American military checkpoint between East and West Berlin. The outdoor information boards in the street are free and informative. The paid museum (€17) is controversial — many guidebooks now suggest skipping it. The real atmosphere is outside.",
                  "Topography of Terror (former Gestapo and SS headquarters site) — free, genuinely unmissable. An outdoor and indoor documentation of Nazi persecution on the exact site where it was organised. One of the most important free museums in Europe.",
                  "Evening: walk east along Zimmerstrasse to Kreuzberg — currywurst at Curry 36 (under €6) and a beer at one of the canal-side bars.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="East Side Gallery · Museum Island · Neues Museum · Potsdamer Platz"
                cost="€30–45 / ~$33–50"
                items={[
                  "East Side Gallery — 1.3km of original Berlin Wall turned open-air gallery along the Spree. 105 murals by international artists painted in 1990. Arrive early (before 9am) to photograph the most famous murals — Brezhnev kissing Honecker, the Trabant smashing through the Wall — before tour groups arrive.",
                  "Walk west along the Spree to Oberbaumbrücke — the striking twin-tower bridge that once marked the East–West border crossing for pedestrians. One of Berlin&apos;s most photogenic structures.",
                  "Museum Island (Museumsinsel) — a UNESCO World Heritage island in the Spree containing five world-class museums. The Berlin Museum Pass (€29, valid 3 days, covers 30+ museums) is the essential purchase — buy it at the first museum.",
                  "Pergamon Museum: the reconstructed Pergamon Altar and the Ishtar Gate from Babylon — some of the most breathtaking ancient architecture displayed anywhere in the world. Note: the Pergamon main hall is under renovation until 2027; the Ishtar Gate and Islamic Art wing remain fully open.",
                  "Neues Museum: the Nefertiti bust (Room 210) — the 3,300-year-old limestone portrait of the Egyptian queen is one of the most captivating objects in any museum in the world. Pre-book timed entry online. Budget 1.5 hours for the full museum.",
                  "Lunch at Hackescher Markt or the Alte Nationalgalerie cafe (€10–15). The Hackesche Höfe — art nouveau interconnected courtyards immediately north — are worth a wander: indie boutiques, galleries, good coffee.",
                  "Afternoon: Potsdamer Platz — once a no-man&apos;s-land of the death strip, now a striking modern quarter. The Sony Center and surrounding architecture tell the story of post-reunification ambition. The small preserved Wall segment and the Panorama Point observation deck (€7) are worth 30 minutes.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Kreuzberg · Turkish Market · Tempelhof · Street Art"
                cost="€28–40 / ~$31–44"
                items={[
                  "Morning: Bergmannstrasse in Kreuzberg — Berlin&apos;s most characterful neighbourhood street. Organic bakeries, antique shops, excellent coffee at The Barn or Five Elephant (Berlin&apos;s finest specialty roasters). The Marheinekeplatz market hall is a good stop for provisions.",
                  "Turkish Market on Maybachufer canal (Tuesdays and Fridays, 11am–6pm) — the real multicultural heartbeat of Kreuzberg. Fresh flatbread, olives, produce, clothing, and more varieties of cheese than you thought existed. Berlin&apos;s Turkish community (the largest outside Turkey) built this market over 50 years.",
                  "Lunch: Mustafa&apos;s Gemüse Kebab on Mehringdamm — the queue is always 20–40 minutes but the legendary €6 vegetable döner is worth it. Or: head to Markthalle Neun on Eisenbahnstrasse for a more varied market lunch (Thursday Street Food Thursday evenings are legendary).",
                  "Afternoon: Tempelhof Field — the former Nazi-built airport (now closed to flights since 2008) is a vast 300-hectare public park. Hire a bike at the entrance (€12–15/day) and cycle the full circuit of the airfield. Berliners use it for barbecues, kite-surfing on the old runways, and urban gardening. Uniquely Berlin.",
                  "Street art tour: RAW Gelände in Friedrichshain — an abandoned railway repair yard converted into an arts and club complex. The external walls are covered in constantly-changing murals. Free to explore in the daytime. The creative energy of East Berlin in one place.",
                  "Evening: Club der Visionäre in Treptow — a riverside bar and small club on the Flutgraben canal, capturing Berlin&apos;s easy outdoor summer energy. Open-air terrace, techno music, natural wine, and no attitude. One of the best evening spots in the city.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Charlottenburg · Tiergarten · Victory Column · Farewell Dinner"
                cost="€35–50 / ~$38–55"
                items={[
                  "Morning: Charlottenburg Palace (€12 entry for the historic rooms) — Berlin&apos;s baroque royal palace, built for Queen Sophie Charlotte in 1699. The formal French-style gardens are free. The Golden Gallery ceiling and the Porcelain Cabinet inside are exceptional. Go in the morning before tour groups.",
                  "KaDeWe (Kaufhaus des Westens) food hall — the legendary West Berlin department store&apos;s gourmet sixth floor is one of the great food halls of Europe. Free to browse: 1,300 cheeses, fresh seafood, German charcuterie, champagne bars. Budget a coffee and pastry (€6–10).",
                  "Walk the Kurfürstendamm (Ku&apos;damm) — West Berlin&apos;s main commercial boulevard. Note the deliberately preserved ruin of the Kaiser Wilhelm Memorial Church (Gedächtniskirche), kept as a bombed-out shell as a memorial against war. Architecturally striking next to the modern 1960s tower.",
                  "Tiergarten picnic lunch — buy supplies from the Aldi near Zoologischer Garten and eat in Berlin&apos;s vast central park. The Tiergarten is 520 acres of formal parkland in the centre of the city — larger than Central Park. Rent a bike and cycle it.",
                  "Victory Column (Siegessäule) — climb 285 steps to the top of the 67-metre column for panoramic golden-hour views over the city and Tiergarten (€4). This is where the 1.8km Strasse des 17. Juni runs from the Brandenburg Gate — you can see the entire length from up here.",
                  "If you pre-booked the Reichstag dome, an evening visit from here is the most dramatic — sunset over the Bundestag and the government quarter. Otherwise: walk back through Tiergarten as the light changes.",
                  "Farewell dinner: Markthalle Neun&apos;s Street Food Thursday (multiple vendors, €10–15) or a proper sit-down Berliner Schnitzel at Zum Schusterjungen in Prenzlauer Berg — a genuine old East Berlin restaurant unchanged since the DDR era.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Berlin" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Berlin Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Berlin&apos;s major sites in priority order — with honest timing, cost, and what to actually pay attention to. Entry prices as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Brandenburg Gate (Brandenburger Tor)",
                  e: "Free",
                  d: "The 18th-century neoclassical triumphal arch that became the most potent symbol of German division and reunification. It stood in the death strip between East and West Berlin for 28 years. Now it stands in the middle of a pedestrianised square — go at dawn or dusk for the best photographs.",
                  t: "Must see · 30 mins",
                },
                {
                  n: "Reichstag & Glass Dome",
                  e: "Free (pre-registration required at bundestag.de)",
                  d: "Norman Foster&apos;s glass dome atop the German parliament is one of Berlin&apos;s defining experiences. A spiralling walkway around the interior cone gives 360° views over the city. Register weeks in advance — sunset slots book out 2–3 months ahead. Bring your passport for the security check.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Holocaust Memorial (Memorial to the Murdered Jews of Europe)",
                  e: "Free",
                  d: "2,711 concrete stelae of varying heights, covering 4.7 acres two blocks from the Brandenburg Gate. Designed by Peter Eisenman — deliberately disorienting, deliberately unmemorable in description, profoundly affecting in person. The underground information centre (same site, free) is a detailed documentation of individual victims.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "East Side Gallery",
                  e: "Free (always open)",
                  d: "1.3km of the original Berlin Wall along the Spree, painted by 118 international artists in 1990–91. The murals have been restored several times. The most famous: Dmitri Vrubel&apos;s Brezhnev–Honecker kiss and Birgit Kinder&apos;s Trabant. Go before 9am to avoid crowds and tour groups.",
                  t: "Must see · 1–2 hrs",
                },
                {
                  n: "Berlin Wall Memorial (Gedenkstätte Berliner Mauer)",
                  e: "Free",
                  d: "The most authentic and historically significant Wall site — on Bernauer Strasse, it preserves the original death strip, guard towers, and the no-man&apos;s-land. The documentation centre is outstanding. Many visitors skip this for the East Side Gallery and miss what the Wall truly was. Do not make that mistake.",
                  t: "Essential · 1.5–2 hrs",
                },
                {
                  n: "Museum Island (Museumsinsel)",
                  e: "€29 Berlin Museum Pass (3 days, 30+ museums) — best value",
                  d: "Five UNESCO-listed world-class museums on an island in the Spree: Pergamon, Neues Museum (Nefertiti bust), Alte Nationalgalerie (19th-century German art), Bode Museum (Byzantine art and medieval sculpture), and Altes Museum (Greek and Roman antiquities). Budget a full day minimum.",
                  t: "Must see · Full day",
                },
                {
                  n: "Topography of Terror",
                  e: "Free",
                  d: "An outdoor and indoor documentation centre on the former site of the Gestapo and SS headquarters. The exhibition traces the systematic persecution of Jews, Roma, disabled people, and political opponents from 1933 to 1945. One of the most important free museums in Europe — give it at least 90 minutes.",
                  t: "Essential · 1.5 hrs",
                },
                {
                  n: "Charlottenburg Palace",
                  e: "€12 (main wing); gardens free",
                  d: "Berlin&apos;s baroque royal palace, built 1699–1713 for Sophie Charlotte, wife of Frederick I. The formal French gardens are free to walk. The interior state rooms — particularly the Golden Gallery, the Porcelain Cabinet, and the Oval Hall — are exceptional. Best visited in the morning before tour groups.",
                  t: "1.5–2 hrs",
                },
                {
                  n: "Victory Column (Siegessäule)",
                  e: "€4",
                  d: "The 67-metre gilded column in the centre of Tiergarten, commemorating Prussian military victories. Climb 285 steps to the top for panoramic views of Berlin and the Tiergarten forest. The golden angel (Goldelse) at the top has become a symbol of Berlin. Barack Obama gave his 2008 campaign speech here.",
                  t: "30–45 mins",
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
            title="Berlin — Wall, Gate, Museums &amp; Street Life"
            subtitle="Europe&apos;s most fascinating city in five images."
            spots={[
              {
                name: "Brandenburg Gate at Night",
                query: "berlin brandenburg gate night illuminated germany",
                desc: "The Brandenburger Tor illuminated at night — the most powerful symbol of German reunification and the defining image of modern Berlin.",
              },
              {
                name: "East Side Gallery",
                query: "berlin east side gallery wall murals spree river",
                desc: "1.3km of the original Berlin Wall transformed into the world&apos;s longest open-air gallery along the Spree River.",
              },
              {
                name: "Museum Island",
                query: "berlin museum island museumsinsel pergamon spree",
                desc: "Five world-class museums on a UNESCO island in the Spree — the cultural heart of Berlin.",
              },
              {
                name: "Kreuzberg Street Life",
                query: "berlin kreuzberg street food market multicultural",
                desc: "Kreuzberg&apos;s multicultural street scene — Turkish markets, döner stalls, street art and canal-side bars.",
              },
              {
                name: "Tiergarten & Victory Column",
                query: "berlin tiergarten victory column siegessaule park",
                desc: "The Victory Column rising from the vast Tiergarten park — 520 acres of forest in the heart of Berlin.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Berlin is one of Western Europe&apos;s most affordable capitals — significantly cheaper than London, Paris or Amsterdam. The Berlin Museum Pass (€29 for 3 days) is the single most important purchase for any visitor spending more than one day at museums.
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
                    ["🏨 Accommodation (per night)", "€18–28 (hostel dorm)", "€80–120 (boutique hotel)", "€250–500 (Adlon / Das Stue)"],
                    ["🍽️ Food (per day)", "€12–18 (currywurst, döner, supermarket)", "€35–50 (restaurants + bar)", "€100–180 (Michelin dining)"],
                    ["🚇 Transport (per day)", "€9.40 (AB day pass)", "€12–18 (pass + taxi)", "€60–100 (private transfers)"],
                    ["🏛️ Activities (per day)", "€10–15 (Museum Pass, free sites)", "€25–40 (guided tour + museums)", "€60–120 (private access)"],
                    ["TOTAL (per day)", "€55/day", "€120/day", "€280+/day"],
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€55/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in Generator or Ostel DDR hostel dorms (€18–28/night), eat currywurst and döner, use the AB day pass, and rely on Berlin&apos;s many free museums and sites (East Side Gallery, Holocaust Memorial, Topography of Terror). Entirely doable and genuinely enjoyable.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€120/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">A boutique hotel in Mitte or Prenzlauer Berg (€80–120/night), one Michelin-adjacent dinner, the Museum Pass, and one guided tour (Cold War walking tour, €25–40pp). This is the sweet spot for experiencing Berlin properly without overspending.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Berlin</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Berlin&apos;s neighbourhoods each have a completely different character. Where you stay shapes your experience of the city. Mitte is central and convenient; Prenzlauer Berg is quieter and residential; Kreuzberg is multicultural and vibrant; Charlottenburg is upscale West Berlin.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Mitte",
                  type: "Central Berlin · History & government quarter",
                  price: "€80–200/night (hotels); €30–60 (hostels)",
                  badge: "Most central",
                  desc: "Walking distance to the Brandenburg Gate, Reichstag, Holocaust Memorial, Museum Island, and Checkpoint Charlie. Best for first-time visitors who want to maximise sightseeing efficiency. Hotel Amano, nhow Berlin and the Radisson Blu are well-located mid-range options.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Prenzlauer Berg",
                  type: "Former East Berlin · Residential, boutique, craft beer",
                  price: "€70–140/night (hotels)",
                  badge: "Best neighbourhood feel",
                  desc: "Leafy, pre-war tenement streets, excellent coffee shops, vintage clothing markets, and the legendary Mauerpark flea market on Sunday mornings. Less touristy than Mitte but a short U-Bahn ride from everything. The neighbourhood of choice for long-stay visitors who want to feel like locals.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Kreuzberg",
                  type: "Multicultural · Food, street art, nightlife",
                  price: "€60–120/night (hotels); €20–35 (hostels)",
                  badge: "Best for food & nightlife",
                  desc: "Berlin&apos;s most culturally diverse neighbourhood — Turkish markets, Vietnamese canteens, street art on every surface, canal-side bars and the city&apos;s best döner. Noisier than Prenzlauer Berg and less polished, but more authentically Berlin. The Generator Berlin hostel is a reliable budget option here.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Charlottenburg",
                  type: "Former West Berlin · Upscale, museums, opera",
                  price: "€120–500/night (Hotel Adlon, Das Stue, Sofitel)",
                  badge: "Most upscale",
                  desc: "The old West Berlin with broad boulevards, the KaDeWe department store, the Deutsche Oper, and Charlottenburg Palace. Hotel Adlon Kempinski (from €500/night) is Berlin&apos;s most iconic address, adjacent to the Brandenburg Gate. Das Stue and the Sofitel Kurfürstendamm are excellent alternatives.",
                  color: "border-purple-200 bg-purple-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Berlin</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Berlin&apos;s food identity is built on immigrant communities — the largest Turkish population outside Turkey, a substantial Vietnamese community, and waves of arrivals from across the world who have permanently shaped what Berliners eat. The finest food is not in Mitte.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Curry 36 (Kreuzberg)",
                  t: "Street food · Mehringdamm, Kreuzberg",
                  d: "Berlin&apos;s most legendary currywurst stand — a sausage sliced and smothered in a spiced tomato-curry ketchup, served with chips. Under €6 for a full portion. Open until 4am. The currywurst is Berlin&apos;s defining street food, and Curry 36 is the most authentic version of it. Non-negotiable on any Berlin visit.",
                  b: "Must eat",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Döner in Kreuzberg & Neukölln",
                  t: "Turkish street food · Multiple locations",
                  d: "Berlin has the world&apos;s best döner kebab outside Turkey — slow-roasted meat shaved into a toasted bread pocket with salad, sauce and chilli. Mustafa&apos;s Gemüse Kebab (Mehringdamm 32, vegetarian döner, always a 30-minute queue) and Rüyam (Neukölln) are the benchmarks. Budget €5–7. Eat it standing up.",
                  b: "Essential Berlin",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Markthalle Neun",
                  t: "Market hall · Eisenbahnstrasse, Kreuzberg",
                  d: "A 19th-century market hall in Kreuzberg rescued and turned into an artisan food market. Daily vendors sell regional German produce, charcuterie, cheese, bread. Thursday evenings: Street Food Thursday — 30+ food vendors from across Berlin set up inside from 5pm to 10pm. The best casual food evening in the city.",
                  b: "Best market",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Clärchens Ballhaus",
                  t: "Historic restaurant & ballroom · Mitte",
                  d: "A genuine Berlin institution — a ballroom and restaurant that has been open since 1913, surviving both World Wars and the DDR largely unchanged. The mirrored hall, the live music, the schnitzel-and-beer menu, and the mixed crowd of tourists and elderly East Berliners dancing together make it one of the most atmospheric dining experiences in the city. Book ahead.",
                  b: "Most atmospheric",
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
            destination="Berlin Germany"
            hotels={[
              {
                name: "Hotel Adlon Kempinski",
                type: "5-star luxury · Brandenburg Gate",
                price: "From €500/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/de/adlon.html?aid=2820480",
              },
              {
                name: "Hotel Amano Mitte",
                type: "Boutique · Central Mitte",
                price: "From €90/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/de/amano-berlin.html?aid=2820480",
              },
              {
                name: "Das Stue",
                type: "Design hotel · Tiergarten",
                price: "From €200/night",
                rating: "5",
                badge: "Most design",
                url: "https://www.booking.com/hotel/de/das-stue-berlin.html?aid=2820480",
              },
              {
                name: "Generator Berlin Mitte",
                type: "Hostel · Central Mitte",
                price: "From €22/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/de/generator-berlin-mitte.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Berlin Cold War Walking Tour",
                duration: "3 hrs",
                price: "From €25/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=berlin+cold+war+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Berlin Wall & East Side Gallery Tour",
                duration: "2.5 hrs",
                price: "From €20/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=berlin+wall+tour&partner_id=PSZA5UI",
              },
              {
                name: "Museum Island Skip-the-Line",
                duration: "3 hrs",
                price: "From €35/person",
                url: "https://www.getyourguide.com/s/?q=berlin+museum+island+tour&partner_id=PSZA5UI",
              },
              {
                name: "Berlin Bike Tour",
                duration: "4 hrs",
                price: "From €29/person",
                url: "https://www.getyourguide.com/s/?q=berlin+bike+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Berlin</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🏛️",
                  title: "Not Buying the Berlin Museum Pass",
                  desc: "At €29, the Berlin Museum Pass gives 3 consecutive days of access to 30+ museums including all five on Museum Island (Pergamon alone costs €22 entry). It pays for itself in the first museum. Buy it at any participating museum on day one — it is non-negotiable for any visitor spending more than a day in Berlin.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🎵",
                  title: "Trying to Plan Berghain",
                  desc: "Berghain, the world&apos;s most famous techno club, has a notoriously selective door policy with no confirmed method for guaranteed entry. Dress down (black, functional clothing), go in a small group of two or three, don&apos;t explain yourself to the bouncer, and don&apos;t photograph inside. Many people get in; many don&apos;t. Accept either outcome. Sunday morning is the most legendary session.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  icon: "🚇",
                  title: "Buying Single Tickets on the U-Bahn",
                  desc: "A single U-Bahn or S-Bahn trip costs €3.50. The Berlin AB Day Pass costs €9.40 and covers unlimited travel on U-Bahn, S-Bahn, tram and bus all day. If you take more than two journeys in a day (which you will), the day pass pays for itself. The 7-day pass (€36) is exceptional value for a week-long stay.",
                  color: "border-orange-200 bg-orange-50",
                },
                {
                  icon: "📸",
                  title: "Skipping the Wall Memorial for the East Side Gallery",
                  desc: "The East Side Gallery is photogenic but heavily commercialised — souvenir stalls, crowds, and murals repainted for tourists. The Berlin Wall Memorial on Bernauer Strasse is the most authentic site: it preserves the actual death strip with guard towers, the no-man&apos;s-land, escape tunnels, and a documentation centre. Many visitors only see the Gallery and miss what the Wall truly was.",
                  color: "border-yellow-200 bg-yellow-50",
                },
                {
                  icon: "🍽️",
                  title: "Eating Only in Touristy Mitte",
                  desc: "Central Mitte has convenience but Kreuzberg, Neukölln, and Prenzlauer Berg have the best food in Berlin — Turkish markets, Vietnamese canteens, natural wine bars, creative bakeries, and craft beer spots. The Bergmannstrasse and Maybachufer areas in Kreuzberg offer authentic multicultural Berlin food at a fraction of tourist-zone prices.",
                  color: "border-blue-200 bg-blue-50",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Berlin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎟️",
                  title: "Book the Reichstag Dome Months in Advance (Free)",
                  desc: "The Reichstag glass dome is one of Berlin&apos;s most iconic free experiences — a spiralling walkway with 360° views and a live audio guide. Register at bundestag.de. Popular slots (sunset, weekends) book out 2–3 months ahead. Register as soon as travel dates are confirmed. Bring your passport — ID is required at the security check.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🌆",
                  title: "Plan Days by Neighbourhood to Save Time",
                  desc: "Mitte (history, museums, government); Prenzlauer Berg (families, vintage, craft beer); Kreuzberg (multicultural, radical, markets); Neukölln (artists, authentic); Friedrichshain (clubs, East Berlin); Charlottenburg (upscale West Berlin). Grouping sights by district eliminates unnecessary U-Bahn trips and lets you absorb the character of each area.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🌙",
                  title: "Berlin&apos;s Nightlife Starts Much Later Than You Think",
                  desc: "The club scene genuinely starts at 1–2am and runs through Sunday. Pre-gaming at a Spätkauf (a 24/7 late-night kiosk selling cheap beer, a uniquely Berlin institution) with drinks on the street is the standard warm-up ritual. Don&apos;t arrive at a club before midnight — you will be queueing alone and will not get in.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚲",
                  title: "Cycling Is the Fastest Way to See Berlin",
                  desc: "Berlin is one of Europe&apos;s most cycling-friendly cities with over 1,000km of dedicated bike lanes. Nextbike and Lidl-Bike offer affordable rental (from €1/30 min). Cycling from the Reichstag to the East Side Gallery along the Spree, or the full Tiergarten circuit, is one of Berlin&apos;s great urban routes. Essential for Tempelhof Field.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Berlin" />

          {/* Combine With */}
          <CombineWith currentSlug="berlin-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do you actually need in Berlin?",
                  a: "Berlin rewards time — most travellers say they needed more days than they had. Four days gives you the headline history (Wall, Brandenburg Gate, Holocaust Memorial), Museum Island, two or three neighbourhoods properly, and time for the food and bar scene. A week allows you to add Potsdam, the Stasi Museum, deeper neighbourhood exploration, and experience the club culture without rushing.",
                },
                {
                  q: "Is Berlin safe for tourists?",
                  a: "Berlin is one of Western Europe&apos;s safest major cities for tourists. Violent crime against visitors is rare. The main concerns are pickpockets on the U-Bahn and at Alexanderplatz (keep bags in front), bicycle theft (always use a D-lock), and occasional scams in touristy parts of Mitte. Kreuzberg and Neukölln have reputations but are genuinely safe for visitors during the day and evening.",
                },
                {
                  q: "What is ETIAS and do I need it for Berlin?",
                  a: "ETIAS (European Travel Information and Authorisation System) is the EU&apos;s equivalent of the US ESTA — a pre-travel electronic authorisation costing €7. It is required for all visa-exempt non-EU visitors (including US, UK, Australian, and Canadian citizens) entering Schengen countries including Germany. It was expected to launch from mid-2025. Apply at etias.com before your trip.",
                },
                {
                  q: "What&apos;s the difference between the East Side Gallery and the Berlin Wall Memorial?",
                  a: "The East Side Gallery (Friedrichshain) is 1.3km of surviving Wall sections turned into an open-air art gallery — visually striking, historically somewhat decontextualised, and very touristy. The Berlin Wall Memorial (Bernauer Strasse, Mitte) is the most authentic site: it preserves the original death strip with guard towers, escape tunnels, and an outstanding documentation centre. If you only visit one, go to the Memorial.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Berlin trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/berlin-budget-guide", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/best-time-to-visit-berlin", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/berlin-museum-pass-guide", label: "Museum Pass guide", icon: "🏛️" },
                { href: "/blog/berlin-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="berlin-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Prague in 4 Days — Old Town &amp; Castle", href: "/blog/prague-4-days" },
                { label: "Amsterdam in 3 Days — Canals &amp; Culture", href: "/blog/amsterdam-3-days" },
                { label: "Munich in 3 Days — Beer Gardens &amp; History", href: "/blog/munich-3-days" },
                { label: "Vienna in 4 Days — Imperial City Guide", href: "/blog/vienna-4-days" },
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
