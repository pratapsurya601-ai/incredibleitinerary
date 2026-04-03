"use client";
import FadeIn from "@/components/ui/FadeIn";

export default function HowItWorksSection({ onPlanTrip }: { onPlanTrip: () => void }) {
  const steps = [
    { n: "01", icon: "📝", title: "Tell us your trip",      desc: "Destination, dates, group size, budget — 2 minutes max.", action: "Fill the form →" },
    { n: "02", icon: "✦",  title: "We build your plan",    desc: "A real person creates your day-by-day itinerary within 24 hours.", action: null },
    { n: "03", icon: "✅", title: "Travel better",          desc: "Save money, avoid tourist traps, experience India like a local.", action: null },
  ];
  return (
    <section className="bg-cream py-20 px-6 md:px-12">
      <div className="max-w-[900px] mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="section-label">How it works</span>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-light text-ink">
            Plan smarter in <em className="italic text-teal">3 steps</em>
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 100}>
              <div className="relative text-center bg-white rounded-2xl border border-parchment-2 p-7 hover:border-gold hover:shadow-md transition-all duration-300">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-3 z-10 text-gold/30 text-2xl">→</div>
                )}
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-xl mx-auto mb-4">{s.icon}</div>
                <div className="text-[0.62rem] text-muted/50 tracking-widest uppercase font-light mb-2">{s.n}</div>
                <p className="font-medium text-base text-ink mb-2">{s.title}</p>
                <p className="text-xs text-muted font-light leading-relaxed mb-3">{s.desc}</p>
                {s.action && (
                  <button onClick={onPlanTrip} className="text-xs text-teal font-medium hover:underline">{s.action}</button>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={350} className="text-center">
          <button onClick={onPlanTrip} className="btn-gold">Start — It&apos;s Free →</button>
          <p className="text-xs text-muted font-light mt-3">No account needed · No credit card · Reply in 24 hours</p>
        </FadeIn>
      </div>
    </section>
  );
}
