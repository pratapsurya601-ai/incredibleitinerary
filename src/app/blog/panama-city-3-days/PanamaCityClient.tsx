"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import Breadcrumb from "@/components/blog/Breadcrumb";
import TableOfContents from "@/components/blog/TableOfContents";
import AuthorByline from "@/components/blog/AuthorByline";
import RelatedGuides from "@/components/blog/RelatedGuides";
import Comments from "@/components/blog/Comments";

const toc = [
  { id: "overview", emoji: "🇵🇦", label: "Panama City at a Glance" },
  { id: "when", emoji: "☀️", label: "When to Visit" },
  { id: "getting-there", emoji: "✈️", label: "Getting There" },
  { id: "itinerary", emoji: "🗓️", label: "Three-Day Itinerary" },
  { id: "budget", emoji: "💰", label: "Budget" },
  { id: "where-to-stay", emoji: "🏨", label: "Where to Stay" },
  { id: "practical-tips", emoji: "💡", label: "Practical Tips" },
  { id: "faq", emoji: "❓", label: "FAQ" },
];

const days = [
  {
    title: "Day 1 · Casco Viejo and the waterfront",
    stops: [
      ["Morning", "Start in Casco Viejo, the UNESCO-listed old quarter. Walk Plaza de la Independencia, the cathedral and the lanes around Plaza Bolívar before the midday heat."],
      ["Lunch", "Choose a café or fonda in the old town. Try sancocho, ceviche or arroz con mariscos; check opening hours because some smaller kitchens close between lunch and dinner."],
      ["Afternoon", "Visit the Panama Canal Museum or browse the neighborhood galleries. Continue along the Cinta Costera for skyline and bay views."],
      ["Evening", "Return to Casco Viejo for sunset from a public waterfront promenade, then dinner in the old town. Reserve ahead for popular rooftop restaurants."],
    ],
  },
  {
    title: "Day 2 · The Panama Canal and the city",
    stops: [
      ["Morning", "Go to the Miraflores Visitor Center when it opens. Ship transits are scheduled and can vary, so check the canal's official schedule close to your visit; allow time for the exhibits even if a ship is not passing."],
      ["Lunch", "Head back toward the city for lunch around El Cangrejo or Obarrio, or eat near the visitor center before returning."],
      ["Afternoon", "Explore the Metropolitan Natural Park for a short rainforest walk and city views. Wear closed shoes, carry water and check trail conditions before setting out."],
      ["Evening", "Try dinner in El Cangrejo, a convenient neighborhood with a wide range of casual restaurants and good Metro access."],
    ],
  },
  {
    title: "Day 3 · Choose rainforest or island time",
    stops: [
      ["Option A · Rainforest", "Take a guided half-day trip to Soberanía National Park or the Gamboa area. Book a reputable operator, confirm transport and trail conditions, and bring insect repellent."],
      ["Option B · San Blas", "Book a full-day Guna Yala trip well in advance. It is a long day with an early departure, rough road sections and boat transfers. Confirm permits, inclusions, weather policy and accessibility before paying."],
      ["Late afternoon", "Keep the return evening flexible. If you stay in the city, walk the Cinta Costera or visit the fish market for a relaxed final meal."],
      ["Planning note", "San Blas is not a quick city excursion. If you prefer an easier pace, spend the day in Panama City or add an overnight stay in the islands."],
    ],
  },
];

const budgetRows = [
  ["Hostel dorm", "$12–25 / night"],
  ["Simple private room", "$35–70 / night"],
  ["Mid-range hotel", "$80–160 / night"],
  ["Local meal", "$5–12"],
  ["Casual restaurant meal", "$12–25"],
  ["City transport", "$2–10 / day"],
  ["Miraflores admission", "Check current visitor-center rates"],
];

export default function PanamaCityClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <TableOfContents items={toc} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />

      <main className="min-h-screen bg-parchment">
        <section className="relative overflow-hidden bg-[#123c45] text-white">
          <div className="absolute inset-0 opacity-35" style={{ backgroundImage: "linear-gradient(110deg, #09252b 0%, transparent 75%), url(https://images.unsplash.com/photo-1675090696282-b97a00d22f07?auto=format&fit=crop&w=1800&q=85)", backgroundPosition: "center", backgroundSize: "cover" }} />
          <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">Panama · Central America · 3 days</p>
            <h1 className="max-w-3xl font-serif text-4xl font-light leading-tight sm:text-6xl">Panama City in 3 Days</h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/85">A practical first-timer’s plan for the Panama Canal, Casco Viejo and a final day in the rainforest or on the islands.</p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8">
          <Breadcrumb destination="Panama City" />
          <AuthorByline date="January 2026" readTime="10 min" />

          <section id="overview" className="scroll-mt-24 mt-8">
            <h2 className="font-serif text-3xl font-light text-ink">Panama City at a glance</h2>
            <p className="mt-4 leading-8 text-ink/80">Panama City packs several different trips into one: a modern business district, a compact colonial quarter, the engineering spectacle of the Canal and tropical forest close to downtown. Three days gives you time for the essentials, but the San Blas Islands need a full, carefully planned day of their own.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[ ["Best base", "Casco Viejo for atmosphere; El Cangrejo for transit and value"], ["Getting around", "Metro and ride-hailing for city trips; use a trusted operator for day tours"], ["Currency", "US dollars are used alongside Panama’s balboa coins"] ].map(([label, text]) => <div key={label} className="rounded-xl border border-parchment-2 bg-white p-4"><p className="text-xs font-semibold uppercase tracking-wider text-gold">{label}</p><p className="mt-2 text-sm leading-6 text-ink/80">{text}</p></div>)}
            </div>
          </section>

          <section id="when" className="scroll-mt-24 mt-12">
            <h2 className="font-serif text-3xl font-light text-ink">When to visit</h2>
            <p className="mt-4 leading-8 text-ink/80">The drier months are generally December through April. The wet season brings more frequent showers, often later in the day, but also lush scenery. Panama is hot and humid year-round: plan outdoor walks early, carry water and pack light rain protection.</p>
          </section>

          <section id="getting-there" className="scroll-mt-24 mt-12">
            <h2 className="font-serif text-3xl font-light text-ink">Getting there and around</h2>
            <p className="mt-4 leading-8 text-ink/80">Tocumen International Airport (PTY) is the main international gateway. The Metro Line 2 connects the airport area with the city network; a taxi or ride-hailing trip is simpler with luggage, though traffic can make it slow. For city travel, use the Metro where convenient and ride-hailing for late trips or awkward connections. Agree the pickup point before leaving busy attractions.</p>
          </section>

          <section id="itinerary" className="scroll-mt-24 mt-12">
            <h2 className="font-serif text-3xl font-light text-ink">The three-day itinerary</h2>
            <div className="mt-6 space-y-5">
              {days.map((day) => <article key={day.title} className="rounded-2xl border border-parchment-2 bg-white p-5 sm:p-7"><h3 className="font-serif text-2xl text-ink">{day.title}</h3><div className="mt-4 space-y-4">{day.stops.map(([label, text]) => <div key={label}><h4 className="text-sm font-semibold text-gold">{label}</h4><p className="mt-1 leading-7 text-ink/80">{text}</p></div>)}</div></article>)}
            </div>
          </section>

          <section id="budget" className="scroll-mt-24 mt-12">
            <h2 className="font-serif text-3xl font-light text-ink">Budget guide</h2>
            <p className="mt-3 leading-7 text-ink/75">Planning ranges in USD per person. Rates change by season and booking date; confirm current admission and tour prices before you go.</p>
            <div className="mt-5 overflow-hidden rounded-xl border border-parchment-2 bg-white"><table className="w-full text-left text-sm"><tbody>{budgetRows.map(([item, price], i) => <tr key={item} className={i ? "border-t border-parchment-2" : ""}><th className="px-4 py-3 font-medium text-ink">{item}</th><td className="px-4 py-3 text-ink/75">{price}</td></tr>)}</tbody></table></div>
          </section>

          <section id="where-to-stay" className="scroll-mt-24 mt-12">
            <h2 className="font-serif text-3xl font-light text-ink">Where to stay</h2>
            <p className="mt-4 leading-8 text-ink/80"><strong>Casco Viejo</strong> is the atmospheric pick, close to historic sights and evening dining. <strong>El Cangrejo</strong> is a practical, well-connected base with more everyday restaurants. <strong>Obarrio</strong> and the banking district suit travelers who want modern hotels and easy business amenities. Compare recent reviews and check the exact location before booking.</p>
          </section>

          <section id="practical-tips" className="scroll-mt-24 mt-12">
            <h2 className="font-serif text-3xl font-light text-ink">Practical tips</h2>
            <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-ink/80">
              <li>Check official opening hours and Canal transit updates before setting out; ship passage times can change.</li>
              <li>Use sun protection and drink water. The heat and humidity make midday walks tiring.</li>
              <li>For Guna Yala (San Blas), verify the operator, transport, permit arrangements, inclusions and cancellation terms. Bring cash and follow local community guidance.</li>
              <li>Keep valuables discreet and use trusted transport, especially after dark.</li>
              <li>Leave generous time for airport transfers because city traffic is unpredictable.</li>
            </ul>
          </section>

          <section id="faq" className="scroll-mt-24 mt-12">
            <h2 className="font-serif text-3xl font-light text-ink">Frequently asked questions</h2>
            <div className="mt-5 space-y-5">
              <div><h3 className="font-semibold text-ink">Are three days enough for Panama City?</h3><p className="mt-2 leading-7 text-ink/80">Yes for the old town, Canal and one nature or island excursion. Add a day if you want a slower pace or an overnight in Guna Yala.</p></div>
              <div><h3 className="font-semibold text-ink">Can I visit San Blas as a day trip?</h3><p className="mt-2 leading-7 text-ink/80">It is possible, but the early start, long road journey and boat transfer make it a demanding day. An overnight stay is more relaxed; confirm current access and conditions with your operator.</p></div>
              <div><h3 className="font-semibold text-ink">Do I need to book the Canal visit?</h3><p className="mt-2 leading-7 text-ink/80">Check the Miraflores Visitor Center’s current ticket and operating information before travel. Visit early and allow flexibility around ship transit schedules.</p></div>
            </div>
          </section>

          <section className="mt-12 rounded-2xl bg-[#123c45] p-6 text-white sm:p-8">
            <h2 className="font-serif text-2xl font-light">Continue planning your trip</h2>
            <p className="mt-2 text-white/80">Pair Panama City with more of the region using our Latin America travel guides.</p>
            <div className="mt-5 flex flex-wrap gap-4"><Link href="/blog/south-america-travel-guide" className="underline decoration-amber-300 underline-offset-4">Explore South America guides</Link><button onClick={() => setModalOpen(true)} className="rounded-full bg-amber-300 px-5 py-2 text-sm font-semibold text-ink">Plan a trip</button></div>
          </section>
          <div className="mt-12"><RelatedGuides currentSlug="panama-city-3-days" /></div>
          <div className="mt-12"><Comments /></div>
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
