"use client";
import { useState } from "react";
import Link from "next/link";

const REVIEWS = [
  {
    name: "Priya Sharma",
    trip: "Rajasthan 7 Days · Feb 2026",
    initials: "PS",
    saved: "₹4,200",
    text: "They told me exactly which hotel touts to avoid in Jaipur, the right time to visit Amber Fort, and where locals actually eat. Saved me a fortune and the trip was extraordinary.",
    rating: 5,
    color: "bg-amber-50 border-amber-200",
  },
  {
    name: "Anika Müller",
    trip: "Golden Triangle · Jan 2026",
    initials: "AM",
    saved: "₹5,800",
    text: "As a first-time India visitor I was terrified. The itinerary told me exactly what to expect at every step — even warned me about the Agra taxi touts. Responded to my emails within the hour.",
    rating: 5,
    color: "bg-blue-50 border-blue-200",
  },
  {
    name: "Rahul & Deepa Mehra",
    trip: "Kerala Honeymoon · Dec 2025",
    initials: "RD",
    saved: "₹3,500",
    text: "We got a private houseboat for ₹6,500 instead of the ₹12,000 we were quoted elsewhere. The Munnar sunrise timing tip alone was worth it — we had the viewpoint completely to ourselves.",
    rating: 5,
    color: "bg-teal-50 border-teal-200",
  },
];

const SAMPLE_SNIPPETS = [
  {
    destination: "Goa 3 Days",
    style: "Budget",
    icon: "🏖️",
    highlight: "Day 1: Palolem at 6am (empty beach). Lunch at Café Del Mar. Chapora Fort at 5pm. Total: ₹1,200.",
    href: "/blog/goa-3-days",
    color: "bg-cyan-50 border-cyan-200",
  },
  {
    destination: "Golden Triangle 7 Days",
    style: "Couple",
    icon: "🕌",
    highlight: "Day 3: Taj Mahal at 6am (20 people inside). Agra Fort 2pm. Mehtab Bagh sunset. Total: ₹2,800.",
    href: "/blog/golden-triangle-7-days",
    color: "bg-amber-50 border-amber-200",
  },
  {
    destination: "Kashmir 6 Days",
    style: "Honeymoon",
    icon: "🏔️",
    highlight: "Day 2: Dal Lake shikara at 5:30am. Nishat Bagh garden. Sunset at Shankaracharya. Total: ₹1,800.",
    href: "/blog/kashmir-6-days",
    color: "bg-blue-50 border-blue-200",
  },
];

export default function SocialProof({ onPlanTrip }: { onPlanTrip: () => void }) {
  const [activeReview, setActiveReview] = useState(0);

  return (
    <section className="bg-parchment py-20 px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto">

        {/* SAVINGS PROOF BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { val: "₹3k–₹5k", label: "Average saving per trip", icon: "💰" },
            { val: "500+",     label: "Trips planned & reviewed", icon: "✈️" },
            { val: "7",        label: "Destinations with full guides", icon: "🗺️" },
            { val: "24hrs",    label: "Average response time", icon: "⚡" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-parchment-2 p-5 text-center shadow-sm">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <p className="font-serif text-[1.8rem] font-light text-ink leading-none mb-1">{stat.val}</p>
              <p className="text-[0.68rem] text-muted uppercase tracking-wide font-light">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — Testimonials */}
          <div>
            <span className="section-label">Real Travellers, Real Savings</span>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] font-light text-ink mb-8">
              Why travellers <em className="italic text-teal">trust us</em> over big platforms
            </h2>

            {/* Review tabs */}
            <div className="flex gap-2 mb-5">
              {REVIEWS.map((r, i) => (
                <button key={i} onClick={() => setActiveReview(i)}
                  className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all duration-200 border ${
                    activeReview === i
                      ? "bg-ink text-white border-ink"
                      : "bg-white text-muted border-parchment-2 hover:border-gold"
                  }`}>
                  {r.initials}
                </button>
              ))}
            </div>

            {/* Active review */}
            {REVIEWS.map((r, i) => (
              <div key={i} className={`rounded-2xl border p-6 transition-all duration-300 ${r.color} ${activeReview === i ? "block" : "hidden"}`}>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, s) => <span key={s} className="text-gold text-sm">★</span>)}
                </div>
                <p className="text-sm text-ink font-light leading-relaxed mb-4 italic">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-ink text-white text-xs font-medium flex items-center justify-center">{r.initials}</div>
                    <div>
                      <p className="text-sm font-medium text-ink">{r.name}</p>
                      <p className="text-xs text-muted font-light">{r.trip}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[0.62rem] text-muted uppercase tracking-wide">Saved</p>
                    <p className="font-serif text-lg text-teal font-light">{r.saved}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Differentiation statement */}
            <div className="mt-6 p-5 bg-ink rounded-xl">
              <p className="text-sm text-white font-light leading-relaxed">
                <span className="text-gold font-medium">Not another AI planner.</span> Every itinerary is built by a person who has been to these places, made the mistakes, and knows what&apos;s actually worth your time and money.
              </p>
            </div>
          </div>

          {/* RIGHT — Sample itinerary snippets */}
          <div>
            <span className="section-label">Sample Itinerary Previews</span>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] font-light text-ink mb-8">
              See what a <em className="italic text-gold-dark">real plan</em> looks like
            </h2>

            <div className="space-y-4">
              {SAMPLE_SNIPPETS.map((s) => (
                <Link key={s.destination} href={s.href}
                  className={`group block rounded-2xl border p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${s.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{s.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-medium text-sm text-ink">{s.destination}</span>
                        <span className="text-[0.62rem] bg-white/70 text-muted px-2 py-0.5 rounded-full border border-white/50">{s.style}</span>
                      </div>
                      <p className="text-xs text-muted font-light leading-relaxed">{s.highlight}</p>
                    </div>
                    <span className="text-xs text-gold-dark font-medium group-hover:underline flex-shrink-0">Read full →</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Monetization hook */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onClick={onPlanTrip}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-gold hover:bg-gold/5 transition-all duration-200 text-left group">
                <span className="text-2xl">✦</span>
                <div>
                  <p className="font-medium text-sm text-ink">Customise Your Plan</p>
                  <p className="text-xs text-muted font-light">Free · 24hr turnaround</p>
                </div>
              </button>
              <Link href="/shop"
                className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-parchment-2 hover:border-gold hover:bg-gold/5 transition-all duration-200 text-left group">
                <span className="text-2xl">📄</span>
                <div>
                  <p className="font-medium text-sm text-ink">Download PDF Guide</p>
                  <p className="text-xs text-muted font-light">From ₹149 · Instant</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
