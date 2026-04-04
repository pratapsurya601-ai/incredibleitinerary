"use client";
import FadeIn from "@/components/ui/FadeIn";

export default function HowItWorksSection({ onPlanTrip }: { onPlanTrip: () => void }) {
  const steps = [
    {
      n: "01",
      title: "Tell us your trip",
      desc: "Destination, dates, group size, budget. Takes 2 minutes.",
      action: "Fill the form",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-gold">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
    },
    {
      n: "02",
      title: "We build your plan",
      desc: "A real person creates your day-by-day itinerary within 24 hours.",
      action: null,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-gold">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
        </svg>
      ),
    },
    {
      n: "03",
      title: "Travel smarter",
      desc: "Save money, skip tourist traps, experience India like a local.",
      action: null,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-gold">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-parchment py-20 px-6 md:px-12">
      <div className="max-w-[900px] mx-auto">
        <FadeIn className="text-center mb-12">
          <span className="section-label">How it works</span>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-light text-ink">
            Your trip, planned in <em className="italic text-teal">3 steps</em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 100}>
              <div className="relative text-center bg-white rounded-2xl border border-parchment-2 p-8 hover:border-gold hover:shadow-lg transition-all duration-300 group">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-3 z-10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/30">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </div>
                )}
                <div className="w-14 h-14 rounded-2xl bg-gold/8 border border-gold/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/15 transition-colors">
                  {s.icon}
                </div>
                <div className="text-[0.6rem] text-gold tracking-[0.2em] uppercase font-medium mb-2">Step {s.n}</div>
                <p className="font-serif text-lg text-ink mb-2 font-light">{s.title}</p>
                <p className="text-xs text-muted font-light leading-relaxed">{s.desc}</p>
                {s.action && (
                  <button onClick={onPlanTrip} className="mt-4 text-xs text-teal font-medium hover:underline">{s.action} &rarr;</button>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={350} className="text-center">
          <button onClick={onPlanTrip} className="btn-gold">
            Plan My Trip &rarr;
          </button>
          <p className="text-xs text-muted font-light mt-3">No account &middot; No credit card &middot; Reply in 24 hours</p>
        </FadeIn>
      </div>
    </section>
  );
}
