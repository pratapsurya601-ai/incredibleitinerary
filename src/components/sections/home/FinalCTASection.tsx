"use client";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function FinalCTASection({ onPlanTrip }: { onPlanTrip: () => void }) {
  return (
    <section className="bg-ink py-24 px-6 md:px-12 text-center">
      <div className="max-w-[560px] mx-auto">
        <FadeIn>
          <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-5">Ready?</p>

          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-white mb-4 leading-[1.12]">
            Tell us where you want to go.<br />
            <em className="italic text-gold-light">We&apos;ll handle the rest.</em>
          </h2>

          <p className="text-sm text-white/50 font-light mb-8 max-w-md mx-auto">
            Your dates, your budget, your style. Personalised itinerary in 24 hours.
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <button onClick={onPlanTrip} className="btn-gold text-[0.88rem] px-10 py-4 shadow-[0_8px_24px_rgba(201,169,110,0.35)]">
              Plan My Trip &rarr;
            </button>
            <Link href="/quiz"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white/70 text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold hover:text-gold transition-all duration-300">
              Take the Quiz
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
