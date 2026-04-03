"use client";
import FadeIn from "@/components/ui/FadeIn";

export default function WhyDifferentSection({ onPlanTrip }: { onPlanTrip: () => void }) {
  const points = [
    { icon: "💰", title: "You overpay by ₹3,000–₹5,000. We fix that.", desc: "We tell you the exact spots where tourists get overcharged — and the cheaper local alternatives that are often better. Every. Single. Guide." },
    { icon: "🚫", title: "Zero paid recommendations. Ever.", desc: "No sponsored hotel mentions. No affiliate pressure. No 'government approved shop' detours. If we recommend it, it's because it's genuinely worth it." },
    { icon: "📍", title: "Plans that account for reality.", desc: "We know which roads flood in monsoon. What's actually open at 6am. Where the taxi touts wait. What 'family friendly' actually means on the ground." },
    { icon: "🇮🇳", title: "For Indians, by Indians.", desc: "Indian train routes, UPI-friendly spots, local bus costs, veg/non-veg options, and the places your Indian neighbour would tell you about — not TripAdvisor." },
  ];

  const rows = [
    ["Real local prices",           "✓", "Estimates only"],
    ["Tourist trap warnings",        "✓", "✗"],
    ["Built for Indian travellers", "✓", "Generic"],
    ["Personalised to your group",  "✓", "✗"],
    ["Cost",                        "Free", "Free but useless"],
  ];

  return (
    <section className="bg-ink py-20 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="text-[0.68rem] tracking-[0.22em] uppercase text-gold block mb-3">Why we exist</span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-white mb-3">
            Generic AI gives you itineraries.<br />
            <em className="italic text-gold-light">We give you the local&apos;s version.</em>
          </h2>
          <p className="text-sm text-white/45 font-light max-w-[400px] mx-auto">Every plan is built by someone who has been to these places, eaten the food, made the expensive mistakes — and learned how to avoid them.</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {points.map((p, i) => (
            <FadeIn key={p.title} delay={i * 80}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-gold/30 transition-all duration-300 h-full group">
                <div className="text-3xl mb-4">{p.icon}</div>
                <p className="font-semibold text-sm text-white mb-2 leading-snug">{p.title}</p>
                <p className="text-xs text-white/40 font-light leading-relaxed">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Comparison table — semantic <table> for accessibility */}
        <FadeIn delay={360}>
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            {/* Stacked cards on mobile */}
            <div className="md:hidden p-4 space-y-3">
              {rows.map(([feat, us, them]) => (
                <div key={feat} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-xs text-white/50 font-light mb-2">{feat}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[0.6rem] text-gold uppercase tracking-wider mb-0.5 font-semibold">Us</p>
                      <p className="text-sm text-gold font-semibold">{us}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[0.6rem] text-white/30 uppercase tracking-wider mb-0.5">Others</p>
                      <p className="text-sm text-white/30 font-light">{them}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Table on desktop */}
            <table className="hidden md:table w-full text-center">
              <thead>
                <tr>
                  <th className="p-4 border-r border-white/10 text-[0.62rem] text-white/30 uppercase tracking-wider font-normal">Feature</th>
                  <th className="p-4 border-r border-white/10 bg-gold/10 text-[0.62rem] text-gold uppercase tracking-wider font-semibold">IncredibleItinerary</th>
                  <th className="p-4 text-[0.62rem] text-white/30 uppercase tracking-wider font-normal">Generic AI / Blog</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([feat, us, them]) => (
                  <tr key={feat}>
                    <td className="px-4 py-2.5 border-t border-white/10 text-xs text-white/50 font-light text-left">{feat}</td>
                    <td className="px-4 py-2.5 border-t border-white/10 border-x border-gold/20 text-xs text-gold font-semibold bg-gold/5">{us}</td>
                    <td className="px-4 py-2.5 border-t border-white/10 text-xs text-white/30 font-light">{them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        <FadeIn delay={440} className="mt-10 text-center">
          <button onClick={onPlanTrip} className="btn-gold">Get My Free Itinerary →</button>
        </FadeIn>
      </div>
    </section>
  );
}
