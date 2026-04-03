"use client";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function FinalCTASection({ onPlanTrip }: { onPlanTrip: () => void }) {
  return (
    <section className="bg-ink py-24 px-6 md:px-12 text-center">
      <div className="max-w-[620px] mx-auto">
        <FadeIn>
          {/* Urgency line */}
          <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-5">Your next trip is 2 minutes away</p>

          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.4rem)] font-light text-white mb-5 leading-[1.1]">
            Stop planning badly.<br />
            <em className="italic text-gold-light">Start travelling smarter.</em>
          </h2>

          {/* 3 micro-proof lines */}
          <div className="flex flex-col gap-2 mb-8 max-w-[360px] mx-auto">
            {[
              "Priya saved ₹4,200 on Rajasthan last month",
              "Anika's first India trip — zero scams, zero stress",
              "Rahul & Deepa's Kerala honeymoon — ₹3,500 under budget",
            ].map((line) => (
              <div key={line} className="flex items-center gap-2.5 text-xs text-white/55 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {line}
              </div>
            ))}
          </div>

          <div className="flex gap-3 justify-center flex-wrap mb-5">
            <button onClick={onPlanTrip} className="btn-gold text-[0.88rem] px-10 py-4 shadow-[0_8px_24px_rgba(201,169,110,0.35)]">
              Fix My Next Trip — Free →
            </button>
            <Link href="/quiz"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gold/30 text-gold-light text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:bg-gold hover:text-ink transition-all duration-300">
              Take the Quiz ✦
            </Link>
          </div>

          <p className="text-[0.62rem] text-white/25 font-light">
            No account · No credit card · 500+ travellers already use this · 24hr reply
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
