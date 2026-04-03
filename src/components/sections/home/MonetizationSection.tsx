"use client";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function MonetizationSection({ onPlanTrip }: { onPlanTrip: () => void }) {
  const items = [
    {
      icon: "✦", title: "Free Custom Itinerary",
      desc: "Tell us your trip details. We build a personalised day-by-day plan in 24 hours — completely free.",
      cta: "Get Mine Free →", action: "modal", highlight: true,
      price: "Free", sub: "Always",
    },
    {
      icon: "📄", title: "Premium PDF Guides",
      desc: "Instant-download itineraries with offline maps, hotel picks and budget breakdowns. Same guides our clients use.",
      cta: "Browse Shop →", href: "/shop", highlight: false,
      price: "From ₹149", sub: "Instant download",
    },
    {
      icon: "🏨", title: "Recommended Hotels",
      desc: "Every guide includes verified stays across all budgets — from ₹700 hostels to ₹25,000 heritage palaces.",
      cta: "See Our Picks →", href: "/blog", highlight: false,
      price: "Free", sub: "In every guide",
    },
  ];
  return (
    <section className="bg-ink py-20 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn className="text-center mb-12">
          <span className="text-[0.68rem] tracking-[0.22em] uppercase text-gold block mb-3">What you get</span>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-light text-white">
            Everything you need.<br /><em className="italic text-gold-light">Most of it free.</em>
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 100}>
              <div className={`rounded-2xl p-7 flex flex-col h-full transition-all duration-300 ${item.highlight ? "bg-gold text-ink border-2 border-gold shadow-[0_8px_32px_rgba(201,169,110,0.3)]" : "bg-white/5 border border-white/10 hover:border-white/25"}`}>
                <div className={`text-3xl mb-4 ${item.highlight ? "" : ""}`}>{item.icon}</div>
                <p className={`font-semibold text-base mb-2 ${item.highlight ? "text-ink" : "text-white"}`}>{item.title}</p>
                <p className={`text-sm font-light leading-relaxed mb-6 flex-1 ${item.highlight ? "text-ink/70" : "text-white/50"}`}>{item.desc}</p>
                <div className={`border-t pt-4 mb-4 ${item.highlight ? "border-ink/15" : "border-white/10"}`}>
                  <p className={`font-serif text-2xl font-light ${item.highlight ? "text-ink" : "text-white"}`}>{item.price}</p>
                  <p className={`text-[0.65rem] font-light ${item.highlight ? "text-ink/50" : "text-white/35"}`}>{item.sub}</p>
                </div>
                {item.action === "modal" ? (
                  <button onClick={onPlanTrip} className="w-full py-3 bg-ink text-white text-xs font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-ink/80 transition-colors">
                    {item.cta}
                  </button>
                ) : (
                  <Link href={item.href!} className={`block w-full py-3 text-center text-xs font-medium tracking-[0.1em] uppercase rounded-[1px] transition-colors border ${item.highlight ? "border-ink/20 text-ink hover:bg-ink/10" : "border-white/20 text-white/70 hover:border-white/40 hover:text-white"}`}>
                    {item.cta}
                  </Link>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
