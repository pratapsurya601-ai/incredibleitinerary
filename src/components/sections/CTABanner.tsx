"use client";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface CTABannerProps {
  onPlanTrip: () => void;
}

export default function CTABanner({ onPlanTrip }: CTABannerProps) {
  return (
    <AnimatedSection>
      <section className="bg-ink py-20 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">

          {/* Main CTA */}
          <div className="text-center mb-12">
            <span className="text-[0.65rem] tracking-[0.22em] uppercase text-gold block mb-4">Free — No catch</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-white mb-4 leading-tight">
              Plan Smarter, Not Harder.
              <em className="italic text-gold-light"> Save ₹3,000–₹5,000.</em>
            </h2>
            <p className="text-sm text-white/55 font-light mb-8 max-w-[460px] mx-auto leading-relaxed">
              Tell us your destination, dates and budget. We build your personalised
              day-by-day itinerary in 24 hours — completely free, no strings attached.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={onPlanTrip} className="btn-gold text-base px-8 py-4">
                Plan My Trip Free →
              </button>
              <Link href="/blog"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold transition-colors">
                Read Free Guides
              </Link>
            </div>
          </div>

          {/* 3 monetization hooks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 border-t border-white/10">
            {[
              {
                icon: "📄",
                title: "Premium PDF Guides",
                desc: "Instant-download itineraries from ₹149. Same guides our private clients use.",
                cta: "Browse Shop →",
                href: "/shop",
                highlight: false,
              },
              {
                icon: "✦",
                title: "Custom Itinerary Planning",
                desc: "Your exact dates, budget and group — a plan built for you in 24 hours.",
                cta: "Get Free Plan →",
                href: null,
                highlight: true,
              },
              {
                icon: "🏨",
                title: "Hotel Recommendations",
                desc: "Every guide includes verified stays at every budget — no commissions on cheap hotels.",
                cta: "See Our Picks →",
                href: "/blog",
                highlight: false,
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-xl p-5 ${item.highlight ? "bg-gold/15 border border-gold/30" : "bg-white/5 border border-white/10"}`}>
                <div className="text-xl mb-2">{item.icon}</div>
                <p className="font-medium text-sm text-white mb-1">{item.title}</p>
                <p className="text-xs text-white/50 font-light leading-relaxed mb-3">{item.desc}</p>
                {item.href ? (
                  <Link href={item.href} className={`text-xs font-medium ${item.highlight ? "text-gold" : "text-white/60 hover:text-gold"} transition-colors`}>
                    {item.cta}
                  </Link>
                ) : (
                  <button onClick={onPlanTrip} className={`text-xs font-medium ${item.highlight ? "text-gold" : "text-white/60 hover:text-gold"} transition-colors`}>
                    {item.cta}
                  </button>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}
