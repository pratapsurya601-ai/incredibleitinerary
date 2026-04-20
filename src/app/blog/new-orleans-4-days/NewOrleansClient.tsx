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
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const NOLA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What New Orleans Actually Is" },
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
          href: `mailto:?subject=New Orleans 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=New Orleans in 4 Days — jazz, beignets and the best food in America&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/new-orleans-4-days"
        imageUrl="https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=1200&q=80"
        description="New Orleans in 4 Days: French Quarter, Frenchmen Street jazz, beignets at Cafe Du Monde, Garden District, swamp tours and the best food in America — complete travel guide with budget breakdown."
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
export default function NewOrleansClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={NOLA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="New Orleans" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="new orleans bourbon street jazz french quarter louisiana"
            fallback="https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=1600&q=80"
            alt="New Orleans French Quarter with jazz clubs colorful buildings Bourbon Street"
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
              <span className="text-white/70">New Orleans 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  North America
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">15 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                New Orleans in 4 Days:
                <em className="italic text-amber-300"> Jazz, Beignets &amp; the Soul of the South</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Frenchmen Street jazz at midnight, powdered-sugar beignets at dawn, second-line parades, swamp tours, and the best food culture in America. The complete guide from $80/day.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="January 2026" readTime="15 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇺🇸 Louisiana, USA</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $80/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              At 11am on a Tuesday, jazz is already spilling from a bar on Frenchmen Street. A second-line funeral procession — brass band, umbrellas, dancing mourners — turns a corner and transforms grief into pure joy. New Orleans defies every rule of American cities: it eats better, parties harder, mourns more beautifully, and remembers its past more vividly than any other place in the country.
            </p>
          </blockquote>

          {/* ── WHAT NEW ORLEANS ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What New Orleans Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              New Orleans is unlike any city in the United States. Founded by the French in 1718, traded to Spain, bought by the Americans in the Louisiana Purchase of 1803, and shaped for centuries by enslaved Africans, free people of colour, Caribbean immigrants, and Creole culture — it has a cultural DNA that no other American city shares. The food is Creole and Cajun. The music is jazz, blues, brass band, and funk — born here, still alive here, still played on the streets for free every night.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The French Quarter is the historic heart — 13 blocks of wrought-iron balconies, hidden courtyards, jazz clubs, and some of the oldest continuously operating restaurants in America. Bourbon Street is the tourist strip; Frenchmen Street in the Marigny neighbourhood is where locals actually go for music. The Garden District has antebellum mansions draped in live oak and Spanish moss. The Treme — America&apos;s oldest African American neighbourhood — is the cradle of jazz and still vibrantly alive.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days is enough to eat your way through the French Quarter, hear world-class jazz for free, ride the St Charles streetcar through the Garden District, tour the swamps, and visit what many consider the best museum in the country — the National WWII Museum. You will not see everything. You will fall completely in love.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="MSY" />
              <StatCard icon="🌡️" label="Best Months" value="Feb–May" />
              <StatCard icon="🎷" label="Jazz Clubs" value="100+" />
              <StatCard icon="💰" label="Budget From" value="$80/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit New Orleans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Feb–May",
                  i: "🎭",
                  t: "Festival Season — Best Time",
                  d: "Mardi Gras (February, date varies) is the greatest free show in America — two weeks of parades, costumes, and brass bands. Jazz Fest (late April–early May) brings the world&apos;s best musicians to Fair Grounds Race Course. Temperatures 15–27°C (60–80°F), low humidity, and the city is at its most alive. Book hotels 6–12 months ahead for Mardi Gras and Jazz Fest weekends.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Oct–Jan",
                  i: "🎃",
                  t: "Autumn & Holidays — Excellent",
                  d: "October is warm but manageable (22–28°C / 72–82°F), with Halloween and Voodoo Fest. November through January brings cooler weather (10–20°C / 50–68°F), Christmas decorations in the French Quarter, and the excellent restaurant scene without summer crowds. New Year&apos;s Eve on Bourbon Street is iconic. Shoulder season pricing on hotels.",
                  b: "Great value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Aug",
                  i: "🔥",
                  t: "Summer — Avoid If Possible",
                  d: "Temperatures 32–38°C (90–100°F) with near-100% humidity — genuinely oppressive for outdoor exploration. Mosquitoes are legendary. Hurricane season runs June through November. Hotel prices drop, but the heat makes walking the French Quarter miserable by midday. If you must visit, stick to morning and evening outings with long afternoon AC breaks.",
                  b: "Not recommended",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Sep",
                  i: "🌧️",
                  t: "September — Hurricane Risk",
                  d: "The peak of hurricane season. New Orleans is below sea level and flooding is a genuine concern. Many locals consider September the worst month to visit — still brutally hot, highest storm risk, and many restaurants close for annual maintenance. Unless you have a specific reason, avoid September entirely.",
                  b: "Avoid",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to New Orleans</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Louis Armstrong New Orleans International Airport (MSY) is 18 miles west of the French Quarter. The airport shuttle costs $24 per person. Uber/Lyft to the French Quarter runs $25–$35 depending on traffic and time of day.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly into MSY (most common)",
                  d: "Direct flights from major US hubs — New York (3h), Chicago (2.5h), Los Angeles (3.5h), Atlanta (1.5h), Dallas (1.5h). International connections via Houston, Atlanta, or Miami. Airport shuttle to French Quarter: $24pp. Uber/Lyft: $25–$35. The ride takes 25–40 minutes depending on traffic.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚂",
                  t: "Amtrak (scenic option)",
                  d: "The City of New Orleans train runs Chicago to New Orleans (19 hours, from $60 coach). The Crescent connects New York to New Orleans (30 hours, from $80). The Sunset Limited runs from Los Angeles (48 hours). Amtrak arrives at Union Passenger Terminal, a short Uber from the French Quarter. Book early for the best fares.",
                  b: "Scenic route",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚗",
                  t: "Drive (regional trips)",
                  d: "From Houston: 5 hours via I-10. From Atlanta: 7 hours via I-65/I-10. From Nashville: 8 hours via I-65. The Lake Pontchartrain Causeway (24 miles, the longest bridge over water in the world) is a memorable approach from the north. Parking in the French Quarter costs $25–$40/day — consider staying without a car.",
                  b: "Flexible",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "Greyhound / FlixBus (budget)",
                  d: "Budget buses from Houston ($20–$40, 5.5h), Atlanta ($30–$55, 8h), and other Southern cities. Greyhound arrives at Union Passenger Terminal downtown. FlixBus has newer coaches and similar pricing. Not the most comfortable option, but the cheapest for regional trips.",
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

          {/* ── 4-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day New Orleans Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary is designed for a mid-range budget — adjust up or down based on your restaurant and accommodation choices. The best of New Orleans is free: walking the French Quarter, listening to jazz on Frenchmen Street, and riding the streetcar.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="French Quarter · Jackson Square · Frenchmen Street Jazz"
                cost="$80–$150 (food + drinks + streetcar)"
                items={[
                  "Arrive at MSY and take an Uber or the airport shuttle ($24pp) to the French Quarter. Check into your hotel or hostel — India House Hostel has dorms from $28/night; mid-range options like Hotel St Pierre start around $120/night.",
                  "Walk the French Quarter: start at Jackson Square, where street musicians, fortune tellers, and artists line the iron fence around the park. The St Louis Cathedral (free entry) overlooks the square — the oldest continuously active cathedral in the United States, dating to 1727.",
                  "Obligatory stop: Cafe Du Monde on Decatur Street for beignets and cafe au lait ($4 for the classic order). Open 24 hours, cash only. The powdered sugar is legendary — do not wear black.",
                  "Walk Bourbon Street in the afternoon before the evening crowds. The wrought-iron balconies, Creole architecture, and hidden courtyards are best appreciated when you can actually see them. Have one drink, take one photo, and move on.",
                  "Ride the St Charles streetcar ($1.25 per ride or $3 all-day pass) from Canal Street through the Garden District — the oldest continuously operating streetcar line in the world. The oak-draped avenue and antebellum mansions are extraordinary from the window.",
                  "Evening: Frenchmen Street in the Marigny neighbourhood — the real jazz scene. The Spotted Cat Music Club has live jazz from 2pm daily with no cover charge. d.b.a. and the Maison are also excellent. Expect world-class music in a room the size of your living room. Tip the musicians generously.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Garden District · Cemeteries · Commander&apos;s Palace"
                cost="$90–$180 (tour + food + streetcar + drinks)"
                items={[
                  "Morning: ride the St Charles streetcar to the Garden District for a self-guided mansion walk. Download the free Garden District map from the New Orleans tourism website. The mansions on First Street and Prytania Street — Greek Revival, Italianate, and Victorian — are among the finest residential architecture in America.",
                  "Walk Magazine Street: six miles of independent shops, galleries, coffee shops, and neighbourhood restaurants. Grab coffee at Stumptown or District Donuts for excellent pour-overs.",
                  "Lunch: Commander&apos;s Palace in the Garden District — reserve in advance. The weekday jazz brunch ($45–$65pp) is legendary. Turtle Soup au Sherry, Pecan-Crusted Gulf Fish, and Bread Pudding Souffle are the essential orders. This restaurant has trained chefs including Emeril Lagasse and Paul Prudhomme.",
                  "Afternoon: guided walking tour of St Louis Cemetery No. 1 ($20pp, required by law — no solo entry allowed since 2015). Above-ground tombs dating from 1789, the rumoured tomb of Marie Laveau, and architecture that explains why New Orleans buries its dead above ground.",
                  "Lafayette Cemetery No. 1 in the Garden District (free, self-guided) — the filming location for Interview with the Vampire. The moss-draped live oaks framing the cemetery gates are one of the most photographed scenes in New Orleans.",
                  "Evening cocktail: the Sazerac Bar at the Roosevelt Hotel for a proper Sazerac — New Orleans&apos;s signature cocktail, invented here in 1838. $16 per cocktail in one of the most beautiful bar rooms in America.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="WWII Museum · Swamp Tour · Treme"
                cost="$100–$170 (museum + swamp tour + food)"
                items={[
                  "Morning: the National WWII Museum ($29 admission). Consistently ranked one of the top 5 museums in the United States — an entire city block of immersive exhibits, rare artefacts, and the stunning 4D film Beyond All Boundaries. Allow a minimum of 3 hours. Buy tickets online to skip the queue.",
                  "Early afternoon: swamp tour departing from New Orleans. Jean Lafitte Swamp Tours offer shared boat tours from $30pp with French Quarter pickup. See alligators, cypress trees draped in Spanish moss, egrets, and water birds in the Louisiana bayou — a landscape unlike anywhere else in America.",
                  "Late afternoon: walk the Treme neighbourhood — America&apos;s oldest African American neighbourhood and the cradle of jazz. Visit Congo Square in Louis Armstrong Park (free), where enslaved people gathered on Sundays and created the musical traditions that became jazz.",
                  "Dinner: Willie Mae&apos;s Scotch House in Treme — James Beard Award-winning fried chicken, widely considered the best in the country. A full plate with sides runs about $15. The queue can be long; arrive before 11:30am or after 2pm.",
                  "Evening: return to Frenchmen Street for more live music. Cafe Negril for reggae and R&B, the Blue Nile for funk, or the Spotted Cat for traditional jazz. Most venues have no cover or a small tip jar. The music runs until 3am or later.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Bywater · French Market · Farewell Beignets"
                cost="$70–$130 (food + market + transport to MSY)"
                items={[
                  "Morning: wander the Bywater neighbourhood east of the Marigny — colourful shotgun houses, street art murals, and the best independent coffee shops in the city. Satsuma Cafe has excellent fresh breakfast bowls and pour-over coffee (~$12).",
                  "Walk the Mississippi Riverfront from the French Market back towards Jackson Square — free and beautiful in the morning light. The river is enormous here, and the freight ships passing through the city centre are a surreal sight.",
                  "French Market on Decatur Street: browse the outdoor stalls for Louisiana hot sauces, Zatarain&apos;s Creole spices, pralines from Southern Candymakers (~$3 each), and local art. The market has operated on this site since 1791.",
                  "Final lunch: a cup of gumbo and a bowl of red beans and rice at Dooky Chase&apos;s in Treme (~$15). Leah Chase fed the Civil Rights movement from this restaurant — it is a genuine American landmark. The Creole gumbo is extraordinary.",
                  "Pick up souvenirs: a bottle of Crystal hot sauce, a bag of Community Coffee with chicory, and a box of pralines. These are the authentic New Orleans take-homes.",
                  "Uber or Lyft to MSY airport from the French Quarter: $25–$40 depending on traffic. Allow 45 minutes during afternoon rush hour.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="New Orleans" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Landmark &amp; Attraction Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sights in order of priority. Much of the best of New Orleans is completely free — the French Quarter, Frenchmen Street jazz, Jackson Square, and the Garden District all cost nothing to explore.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "French Quarter",
                  e: "Free",
                  d: "The historic heart of New Orleans — 13 blocks of wrought-iron balconies, hidden courtyards, jazz clubs, and some of the oldest restaurants in America. Walk Royal Street for antique shops and galleries, Decatur Street for the French Market, and Chartres Street for quiet Creole residential architecture. The best time to walk the Quarter is early morning before the crowds.",
                  t: "Must see · Half day",
                },
                {
                  n: "Frenchmen Street (Marigny)",
                  e: "Free (most venues)",
                  d: "The real music scene in New Orleans — multiple jazz, blues, funk, and R&B clubs within a two-block radius. The Spotted Cat, d.b.a., the Maison, and the Blue Nile are the essential venues. Live music every night from early afternoon until 3am. Most have no cover — just a tip jar and a drink minimum. This is where locals go.",
                  t: "Must see · Evening",
                },
                {
                  n: "National WWII Museum",
                  e: "$29",
                  d: "Consistently ranked among the top 5 museums in the United States. An entire city block of immersive exhibits covering every theatre of the war, with rare artefacts, oral histories, and the 4D film Beyond All Boundaries. Allow a minimum of 3 hours — most people spend a full half-day. Buy tickets online.",
                  t: "Must see · 3–5 hrs",
                },
                {
                  n: "St Louis Cemetery No. 1",
                  e: "$20 (guided tour required)",
                  d: "The most famous cemetery in New Orleans — above-ground tombs dating from 1789, elaborate marble vaults, and the rumoured resting place of Voodoo Queen Marie Laveau. Solo entry has been prohibited since 2015; licensed tours run daily and are genuinely excellent.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Garden District",
                  e: "Free",
                  d: "The most beautiful residential neighbourhood in the American South — antebellum mansions, oak-lined streets, and the iconic St Charles streetcar running through it all. Walk First Street, Prytania Street, and Magazine Street. Lafayette Cemetery No. 1 is here and free to enter.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Jackson Square",
                  e: "Free",
                  d: "The central plaza of the French Quarter, surrounded by the St Louis Cathedral, the Cabildo, and the Pontalba Apartments. Street musicians, artists, and fortune tellers line the iron fence. The cathedral (free entry) is the oldest continuously active cathedral in the US.",
                  t: "Must see · 1 hr",
                },
                {
                  n: "Swamp Tour (Louisiana Bayou)",
                  e: "$30–$65",
                  d: "Boat tours through the cypress swamps and bayous surrounding New Orleans. See alligators, egrets, Spanish moss, and the eerie beauty of the Louisiana wetlands. Jean Lafitte Swamp Tours and Cajun Encounters offer shared boats from $30pp. Small-group airboat tours run $55–$65pp and are more thrilling.",
                  t: "Highly recommended · 3–4 hrs",
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
            title="New Orleans — Jazz, Architecture &amp; the Mississippi"
            subtitle="The soul of the American South in one extraordinary city."
            spots={[
              {
                name: "French Quarter Balconies",
                query: "new orleans french quarter wrought iron balconies architecture bourbon street",
                desc: "The iconic wrought-iron balconies and Creole architecture of the French Quarter — 300 years of history in 13 blocks.",
              },
              {
                name: "Frenchmen Street Jazz",
                query: "frenchmen street new orleans jazz musicians live music marigny night",
                desc: "Live jazz on Frenchmen Street — the real music scene of New Orleans, where locals go for world-class performances every night.",
              },
              {
                name: "Cafe Du Monde Beignets",
                query: "cafe du monde beignets new orleans powdered sugar jackson square",
                desc: "The legendary beignets and cafe au lait at Cafe Du Monde — open 24 hours on Jackson Square since 1862.",
              },
              {
                name: "Garden District Mansions",
                query: "garden district new orleans mansions oak trees antebellum architecture",
                desc: "The oak-draped antebellum mansions of the Garden District — the most beautiful residential neighbourhood in the American South.",
              },
              {
                name: "St Louis Cemetery",
                query: "st louis cemetery new orleans above ground tombs historic voodoo",
                desc: "The above-ground tombs of St Louis Cemetery No. 1 — dating from 1789 and unlike any burial ground in America.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              New Orleans is surprisingly affordable for an American city — especially compared to New York or San Francisco. The best experiences (live jazz, French Quarter walks, Jackson Square, the Garden District, the streetcar) are free or nearly free. Food is where you&apos;ll spend the most, and it&apos;s worth every dollar.
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
                    ["🏨 Accommodation", "$28–$45/night", "$120–$160/night", "$350–$500/night"],
                    ["🍽️ Food & Drink", "$20–$30/day", "$70–$90/day", "$130–$180/day"],
                    ["🚃 Transport", "$5–$10/day", "$25–$35/day", "$80–$120/day"],
                    ["🎷 Activities", "$20–$30/day", "$60–$80/day", "$150–$200/day"],
                    ["TOTAL (per day)", "~$80", "~$160", "~$350"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (~$80/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in a hostel dorm ($28–$45/night), eat po&apos;boys and gumbo from neighbourhood joints, ride the streetcar ($1.25), and enjoy free jazz on Frenchmen Street. Completely doable and extremely rewarding.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range (~$160/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotel in the French Quarter ($120–$160/night), Commander&apos;s Palace brunch, guided cemetery tours, WWII Museum, and cocktails at the Sazerac Bar. The sweet spot for most visitors.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (~$350/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">The Windsor Court or Hotel Monteleone ($350–$500/night), private guided tours, Galatoire&apos;s and Brennan&apos;s for dinner, private swamp charters, and cocktail masterclasses at the Sazerac Bar.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in New Orleans</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The French Quarter and the Marigny are the best neighbourhoods for first-time visitors — walkable to the major sights, restaurants, and Frenchmen Street jazz. The Garden District and Warehouse District are excellent for a quieter stay with easy streetcar access.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "The Roosevelt New Orleans",
                  type: "Luxury historic · French Quarter",
                  price: "From $300/night",
                  badge: "Most iconic",
                  desc: "A Waldorf Astoria property and one of the most storied hotels in the American South. The Sazerac Bar, the lobby at Christmas, and the rooftop pool are all iconic. The hotel has hosted every US president since it opened in 1893. Central French Quarter location.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel Monteleone",
                  type: "Historic luxury · French Quarter",
                  price: "From $250/night",
                  badge: "Best bar",
                  desc: "A literary landmark on Royal Street — Hemingway, Faulkner, Tennessee Williams, and Truman Capote all stayed here. The Carousel Bar (a slowly revolving bar in the lobby) is one of the most famous bars in America. Excellent French Quarter location and a genuine piece of New Orleans history.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Hotel St Pierre",
                  type: "Boutique mid-range · French Quarter",
                  price: "From $120/night",
                  badge: "Best value mid-range",
                  desc: "A converted 18th-century Creole cottage with a courtyard pool, tucked into a quiet French Quarter side street. Walking distance to everything. The rooms are simple but the atmosphere — hidden courtyards, iron gates, lush subtropical plants — is pure New Orleans.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "India House Hostel",
                  type: "Budget hostel · Mid-City",
                  price: "From $28/night",
                  badge: "Best budget",
                  desc: "One of the best-rated hostels in the United States. Dorm beds from $28/night, private rooms from $70. Tropical garden courtyard with a pool, communal kitchen, and a social atmosphere. Located in Mid-City — 15 minutes by streetcar or Uber to the French Quarter. Perfect for solo travellers and backpackers.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in New Orleans</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              New Orleans has the best restaurant culture of any city in the United States — a bold claim that most American food writers agree with. Creole and Cajun cuisine, born from French, Spanish, African, and Caribbean influences, is available at every price point from $5 beignets to $100 tasting menus.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Commander&apos;s Palace",
                  t: "Fine Creole · Garden District",
                  d: "The flagship restaurant of New Orleans dining. The weekday jazz brunch ($45–$65pp) is the signature New Orleans meal. Turtle Soup au Sherry, Pecan-Crusted Gulf Fish, and Bread Pudding Souffle are essential. This kitchen has trained Emeril Lagasse and Paul Prudhomme. Reserve well in advance. Dress code: smart casual (jackets suggested for men at dinner).",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Willie Mae&apos;s Scotch House",
                  t: "Soul food · Treme",
                  d: "James Beard Award-winning fried chicken — many food critics call it the best in America. A full plate with sides (red beans, cornbread, butter beans) is about $15. The restaurant has been in Treme since 1957. Queue early: arrive before 11:30am or after 2pm to avoid the longest waits.",
                  b: "Best fried chicken",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Cafe Du Monde",
                  t: "Beignets · French Quarter",
                  d: "The most iconic food stop in New Orleans — powdered-sugar beignets and chicory cafe au lait, served 24 hours a day on the corner of Jackson Square since 1862. The classic order is $4 for three beignets. Cash only. Do not wear dark clothing. Arrive early morning to avoid queues.",
                  b: "Iconic",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Dooky Chase&apos;s Restaurant",
                  t: "Creole soul food · Treme",
                  d: "Leah Chase — the Queen of Creole Cuisine — fed the Civil Rights movement from this restaurant. The fried chicken, gumbo, and red beans and rice are all extraordinary. A full meal is about $15–$20. The restaurant is a genuine American cultural landmark, still operated by the Chase family.",
                  b: "Historic landmark",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "Parkway Bakery & Tavern",
                  t: "Po&apos;boys · Mid-City",
                  d: "A James Beard American Classic serving the definitive New Orleans roast beef po&apos;boy — slow-roasted beef with debris gravy, dressed with lettuce, tomato, and pickles on Leidenheimer French bread. A regular po&apos;boy is about $13. The shrimp po&apos;boy is equally good. Cash or card, outdoor seating available.",
                  b: "Best po&apos;boy",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Central Grocery",
                  t: "Muffuletta · French Quarter",
                  d: "The birthplace of the muffuletta sandwich — a round Italian loaf stuffed with salami, ham, provolone, and olive salad, invented here in 1906. A half muffuletta ($14) feeds two people comfortably. Located on Decatur Street in the French Quarter. Takeaway only — eat on the benches along the Mississippi River.",
                  b: "Only-in-NOLA",
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
            destination="New Orleans Louisiana"
            hotels={[
              {
                name: "The Roosevelt New Orleans",
                type: "Waldorf Astoria · Historic luxury",
                price: "From $300/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/us/the-roosevelt-new-orleans.html?aid=2820480",
              },
              {
                name: "Hotel Monteleone",
                type: "Historic luxury · Carousel Bar",
                price: "From $250/night",
                rating: "5",
                badge: "Literary landmark",
                url: "https://www.booking.com/hotel/us/monteleone.html?aid=2820480",
              },
              {
                name: "Hotel St Pierre",
                type: "Boutique · French Quarter courtyard",
                price: "From $120/night",
                rating: "4",
                badge: "Best value",
                url: "https://www.booking.com/hotel/us/st-pierre-new-orleans.html?aid=2820480",
              },
              {
                name: "India House Hostel",
                type: "Budget hostel · Pool & garden",
                price: "From $28/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/us/india-house-hostel-new-orleans.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "French Quarter Walking Tour",
                duration: "2 hrs",
                price: "From $35/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=new+orleans+french+quarter+tour&partner_id=PSZA5UI",
              },
              {
                name: "Swamp & Bayou Boat Tour",
                duration: "3–4 hrs",
                price: "From $30/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=new+orleans+swamp+tour&partner_id=PSZA5UI",
              },
              {
                name: "Cemetery & Voodoo Walking Tour",
                duration: "2 hrs",
                price: "From $20/person",
                badge: "Popular",
                url: "https://www.getyourguide.com/s/?q=new+orleans+cemetery+voodoo+tour&partner_id=PSZA5UI",
              },
              {
                name: "Jazz & Food Walking Tour",
                duration: "3 hrs",
                price: "From $75/person",
                url: "https://www.getyourguide.com/s/?q=new+orleans+food+jazz+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in New Orleans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌡️",
                  title: "Visiting in July or August",
                  desc: "New Orleans summer is brutal — temperatures of 32–38°C (90–100°F) combined with near-100% humidity make outdoor exploration genuinely miserable. Mosquitoes are legendary. Hurricane season runs June–November. The sweet spot is February–May (Mardi Gras, Jazz Fest, mild weather) or October–January (autumn festivals, cooler temperatures). If you must visit in summer, stick to morning and evening excursions.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🎷",
                  title: "Spending Your Whole Night on Bourbon Street",
                  desc: "Bourbon Street is a tourist strip — expensive drinks, loud cover bands, and largely devoid of authentic New Orleans culture. Walk it once, have one Hand Grenade, take one photo, and move on. The real music scene is on Frenchmen Street in the Marigny: multiple clubs within two blocks, live jazz and blues every night, and a mostly local crowd. The Spotted Cat, d.b.a., and the Maison are the genuine article.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "⛔",
                  title: "Entering St Louis Cemetery No. 1 Alone",
                  desc: "Since 2015, St Louis Cemetery No. 1 requires all visitors to enter with a licensed tour guide — solo entry is prohibited and you can be fined. Tours cost $20–$25pp and run multiple times daily. The guides are actually excellent and the history is fascinating. Other cemeteries (Lafayette No. 1, Metairie, St Louis No. 2) still allow self-guided entry.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🍽️",
                  title: "Eating at Chain Restaurants",
                  desc: "New Orleans has some of the best independent restaurant culture in the world — eating at a chain hotel restaurant is a waste of a meal here. Willie Mae&apos;s, Dooky Chase&apos;s, Parkway Bakery, and Central Grocery are all James Beard-recognised American classics. Commander&apos;s Palace has been the training ground for America&apos;s most famous chefs. Every meal should be at a locally owned New Orleans institution.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "💊",
                  title: "Ignoring Personal Safety at Night",
                  desc: "New Orleans has a higher crime rate than most US cities. The French Quarter is well-policed and generally safe for tourists. Avoid walking alone north of the French Quarter (above Iberville) at night, and exercise caution in parts of Treme after midnight. Use Uber or Lyft rather than walking between neighbourhoods late at night. Keep expensive cameras and phones out of sight on empty streets.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🚗",
                  title: "Renting a Car in New Orleans",
                  desc: "Unless you are doing a road trip beyond the city, you do not need a car in New Orleans. The French Quarter, Marigny, Garden District, and Uptown are all connected by the St Charles streetcar ($1.25/ride, $3 all-day pass) and cheap Uber/Lyft. Parking in the French Quarter costs $25–$40/day, traffic is chaotic, and flooding can strand you. Save the money and use the streetcar and rideshares.",
                  color: "bg-green-50 border-green-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for New Orleans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎷",
                  title: "Go to Frenchmen Street on a Tuesday or Wednesday",
                  desc: "Frenchmen Street is good every night, but weekends get crowded with visitors from surrounding states. Tuesday and Wednesday nights are when the real local jazz community is out — musicians sitting in with each other, impromptu sessions running until 3am. The Spotted Cat has live music from 2pm daily with no cover. Go early to get a good spot near the stage.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🎭",
                  title: "Time Your Trip Around Jazz Fest or Mardi Gras",
                  desc: "Jazz Fest (last weekend of April, first weekend of May) brings the best musicians in the world to Fair Grounds Race Course. Day tickets start at $95. Mardi Gras (February, date varies) is a two-week citywide carnival of parades, costumes, and music. Both require hotel booking 6–12 months in advance. If your dates are flexible, plan around one of these — they are bucket-list events.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🌊",
                  title: "Take the Canal Street Ferry — It&apos;s Free",
                  desc: "The Algiers Point ferry crosses the Mississippi River from Canal Street to the Algiers neighbourhood on the West Bank. The crossing takes 8 minutes, it is completely free, and the views of the New Orleans skyline and the massive Mississippi are extraordinary. Walk around Algiers Point (a beautifully preserved Victorian neighbourhood) and take the next ferry back. Allow 90 minutes total.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🍤",
                  title: "Order the Local Dishes in the Right Order",
                  desc: "New Orleans has a specific food sequence to hit: beignets and cafe au lait at Cafe Du Monde (breakfast), a dressed po&apos;boy for lunch (roast beef with debris gravy at Parkway Bakery), a cup of gumbo at a neighbourhood restaurant, red beans and rice on Monday (the traditional Monday meal), and Commander&apos;s Palace for a special occasion. Do not leave without trying charbroiled oysters at Drago&apos;s.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🏛️",
                  title: "Book Cemetery & Ghost Tours via GetYourGuide",
                  desc: "New Orleans has some of the best-guided walking tours in the USA. Licensed guides are required for St Louis Cemetery No. 1. Ghost tours run nightly and vary enormously in quality — look for guides with history credentials, not actors. Book via getyourguide.com/s/?q=New+Orleans&partner_id=PSZA5UI for verified reviews, licensed guides, and free cancellation up to 24 hours before.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🚃",
                  title: "Buy the Jazzy Pass for Unlimited Streetcar Rides",
                  desc: "The $3 Jazzy Pass gives unlimited rides on all New Orleans streetcar and bus lines for 24 hours. The St Charles line ($1.25 per ride without a pass) connects the French Quarter to the Garden District and Uptown. The Canal Street line runs to the cemeteries. If you plan to ride three or more times in a day, the Jazzy Pass pays for itself. Buy on the RTA GoMobile app.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="New Orleans" />

          {/* Combine With */}
          <CombineWith currentSlug="new-orleans-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "When is the best time to visit New Orleans?",
                  a: "February through May is optimal. February brings Mardi Gras (date varies with Easter), and late April through early May is Jazz Fest — both are bucket-list events. March and April have warm but comfortable temperatures (18–27\u00b0C / 65\u201380\u00b0F) and low humidity. October through January is also excellent — cooler weather, fewer crowds, and holiday festivities. Avoid June through September: oppressive heat, high humidity, hurricane risk, and peak mosquito season.",
                },
                {
                  q: "Is New Orleans safe for tourists?",
                  a: "The main tourist areas — the French Quarter, Warehouse District, Garden District, Uptown, and Frenchmen Street — are generally safe with basic common sense. The French Quarter has a heavy police presence. Avoid walking alone north of the French Quarter at night, and use rideshares rather than walking between neighbourhoods after midnight. New Orleans has a high violent crime rate by US standards, but the vast majority of incidents are localised to residential areas well away from the tourist core.",
                },
                {
                  q: "How do I get around New Orleans without a car?",
                  a: "The St Charles streetcar ($1.25 per ride or $3 all-day Jazzy Pass) connects the French Quarter to the Garden District and Uptown — it is the oldest continuously operating streetcar line in the world. Uber and Lyft are cheap and reliable for crosstown trips (most French Quarter to Garden District rides cost $8\u2013$15). The Canal Street ferry to Algiers is free. Walking is the best option within the French Quarter and Marigny — the city is compact and flat.",
                },
                {
                  q: "What is the difference between Creole and Cajun food?",
                  a: "Creole food (gumbo, red beans and rice, etouffee, bananas Foster) is New Orleans urban cuisine \u2014 a sophisticated blend of French, Spanish, African, and Native American influences. It often uses tomatoes and a dark roux. Cajun food comes from the rural Acadians (French Canadians) who settled in the Louisiana bayou \u2014 heartier, spicier, more rustic (crawfish boils, boudin sausage, blackened fish). New Orleans restaurants serve primarily Creole, with Cajun dishes on most menus as well.",
                },
                {
                  q: "Is the WWII Museum worth the $29 entry fee?",
                  a: "Unequivocally yes. The National WWII Museum is consistently ranked among the top 5 museums in the United States. It spans an entire city block with immersive exhibits, rare artefacts, oral histories from survivors, and the 4D film Beyond All Boundaries. Allow a minimum of 3 hours — most visitors spend a full half-day. The optional upstairs galleries covering the Pacific and European theatres are worth the additional $10. Buy tickets online to skip the queue.",
                },
                {
                  q: "What should I definitely not miss in New Orleans?",
                  a: "The absolute essentials: beignets at Cafe Du Monde ($4), live jazz on Frenchmen Street (free), the St Charles streetcar through the Garden District ($1.25), Jackson Square and the St Louis Cathedral (free), Commander\u2019s Palace for a Creole brunch ($45\u2013$65pp), a cemetery tour of St Louis No. 1 ($20), and the National WWII Museum ($29). If you have time, add a swamp tour ($30) and Willie Mae\u2019s fried chicken ($15). The best of New Orleans is remarkably affordable.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your New Orleans trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-new-orleans", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/new-orleans-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-new-orleans", label: "How to get there", icon: "✈️" },
                { href: "/blog/new-orleans-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="new-orleans-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More USA Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Miami in 4 Days — Beaches &amp; Art Deco", href: "/blog/miami-4-days" },
                { label: "Nashville 3 Days — Music City", href: "/blog/nashville-3-days" },
                { label: "Chicago 4 Days — Architecture &amp; Food", href: "/blog/chicago-4-days" },
                { label: "New York 5 Days — The Complete Guide", href: "/blog/new-york-5-days" },
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
