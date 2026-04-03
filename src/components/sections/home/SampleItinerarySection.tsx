"use client";
import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

const SAMPLE_DAYS = [
  {
    day: "Day 1", title: "Palolem Beach — arrive before the crowds",
    time: "6:00 AM", activity: "Palolem Beach at dawn. Walk 2km of empty white sand — you'll have it to yourself until 8am. The same beach costs ₹800 to reach by tourist taxi. Take the local bus for ₹30.",
    cost: "₹30 bus + free beach",
    tip: "Tourist taxi from airport = ₹900. Local bus = ₹30. Same destination."
  },
  {
    day: "Day 1", title: "Lunch at Café del Mar (not the tourist strip)",
    time: "12:30 PM", activity: "Prawn curry + rice at Café del Mar on South Goa beach road — ₹280. The identical dish at the beach shacks 200m away? ₹650. Same prawns. Different sign.",
    cost: "₹280 vs ₹650 tourist price",
    tip: "Rule: walk 3 minutes away from any beach = prices drop 40%"
  },
  {
    day: "Day 1", title: "Chapora Fort at 5pm — not 2pm",
    time: "5:00 PM", activity: "Chapora Fort (the Dil Chahta Hai fort). Go at 5pm — golden hour, cool breeze, Instagram crowd has left. At 2pm it's 38°C and full of tour groups. Entry is free.",
    cost: "Free",
    tip: "The view at sunset is better than midday by a factor of 10"
  },
];

const SAMPLE_TOTAL = { budget: "₹1,840", saved: "₹3,200", vs: "vs ₹5,040 tourist price" };

export default function SampleItinerarySection({ onPlanTrip }: { onPlanTrip: () => void }) {
  const [active, setActive] = useState(0);
  const blogs = [
    { label: "Goa 3 Days",         href: "/blog/goa-3-days" },
    { label: "Kashmir 6 Days",     href: "/blog/kashmir-6-days" },
    { label: "Rajasthan 7 Days",   href: "/blog/rajasthan-7-days" },
    { label: "Andaman 5 Days",     href: "/blog/andaman-5-days" },
  ];
  return (
    <section className="bg-parchment py-20 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="section-label">Real sample output</span>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-light text-ink">
              Goa Day 1 — Budget Plan.<br />
              <em className="italic text-teal">This is what you get.</em>
            </h2>
            <p className="text-sm text-muted font-light mt-2 max-w-[340px] leading-relaxed">
              Not vague suggestions. Real times, real prices, the exact tricks locals use.
            </p>
          </div>
          {/* Savings callout */}
          <div className="bg-teal text-white rounded-2xl px-6 py-4 text-center min-w-[180px] shadow-lg">
            <p className="text-[0.62rem] tracking-[0.15em] uppercase font-light mb-1 text-white/70">Day 1 total spend</p>
            <p className="font-serif text-3xl font-light mb-0.5">{SAMPLE_TOTAL.budget}</p>
            <p className="text-[0.65rem] text-white/60 line-through">{SAMPLE_TOTAL.vs}</p>
            <p className="text-[0.7rem] font-semibold text-white/90 mt-1">You save {SAMPLE_TOTAL.saved}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* Day cards */}
          <div className="space-y-3">
            {SAMPLE_DAYS.map((d, i) => (
              <FadeIn key={i} delay={i * 80}>
                <button onClick={() => setActive(i)} className={`w-full text-left rounded-2xl border-2 p-5 transition-all duration-200 ${active === i ? "border-teal bg-white shadow-lg" : "border-parchment-2 bg-white/60 hover:border-teal/40"}`}>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className={`text-[0.65rem] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full ${active === i ? "bg-teal text-white" : "bg-parchment text-muted"}`}>{d.time}</span>
                    <span className="font-medium text-sm text-ink">{d.title}</span>
                  </div>
                  {active === i && (
                    <div className="mt-3 pt-3 border-t border-parchment-2 space-y-3">
                      <p className="text-sm text-muted font-light leading-relaxed">{d.activity}</p>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="flex items-center gap-1.5 text-xs bg-teal/10 text-teal px-3 py-1.5 rounded-full font-medium">💰 {d.cost}</span>
                        <span className="flex items-center gap-1.5 text-xs bg-gold/10 text-gold-dark px-3 py-1.5 rounded-full">💡 {d.tip}</span>
                      </div>
                    </div>
                  )}
                </button>
              </FadeIn>
            ))}

            {/* Mini savings bar */}
            <FadeIn delay={280}>
              <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-2xl p-4">
                <span className="text-2xl">🎉</span>
                <div>
                  <p className="font-medium text-sm text-green-800">Day 1 total: {SAMPLE_TOTAL.budget}</p>
                  <p className="text-xs text-green-600 font-light">Tourist doing the same day without this guide: {SAMPLE_TOTAL.vs}</p>
                </div>
                <span className="ml-auto font-serif text-xl text-green-700 flex-shrink-0">-{SAMPLE_TOTAL.saved}</span>
              </div>
            </FadeIn>
          </div>

          {/* Side panel */}
          <FadeIn delay={300}>
            <div className="bg-white rounded-2xl border-2 border-gold/30 p-6 sticky top-24">
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold-dark font-semibold mb-1">Every free guide includes</p>
              <p className="text-xs text-muted font-light mb-4">This is what separates us from generic travel blogs</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Hour-by-hour day schedule",
                  "Actual prices (not estimates)",
                  "Where tourists pay 2x — and what to do instead",
                  "Google Maps links for every location",
                  "Best time of day for each spot",
                  "Where locals actually eat",
                  "What to completely skip and why",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-muted font-light">
                    <span className="text-teal mt-0.5 flex-shrink-0 font-bold">✓</span>{item}
                  </li>
                ))}
              </ul>
              <div className="border-t border-parchment-2 pt-4 mb-5">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-2xl text-ink font-light">Free.</span>
                  <span className="text-xs text-muted font-light">Travel agents charge ₹2,000–₹5,000 for this.</span>
                </div>
              </div>
              <button onClick={onPlanTrip} className="w-full btn-gold justify-center mb-3">Get Mine Free →</button>
              <div className="grid grid-cols-2 gap-2">
                {blogs.map((b) => (
                  <Link key={b.label} href={b.href} className="text-center text-[0.65rem] font-light text-muted hover:text-teal transition-colors py-1.5 border border-parchment-2 rounded-lg hover:border-teal">
                    {b.label} →
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
