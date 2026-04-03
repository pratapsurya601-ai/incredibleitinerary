"use client";

interface InlineCTAProps {
  destination?: string;
  onPlanTrip: () => void;
}

export default function InlineCTA({ destination, onPlanTrip }: InlineCTAProps) {
  return (
    <div className="my-10 bg-gradient-to-r from-gold/10 to-teal/10 border border-gold/30 rounded-2xl p-6 md:p-8 text-center">
      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold-dark font-semibold mb-2">
        Free &middot; Personalised &middot; 24hr Reply
      </p>
      <h3 className="font-serif text-xl md:text-2xl font-light text-ink mb-2">
        Want this {destination ? `${destination} plan` : "itinerary"} customised for <em className="italic text-teal">your</em> dates?
      </h3>
      <p className="text-sm text-muted font-light mb-5 max-w-md mx-auto">
        Tell us your group size, budget, and travel dates. We&apos;ll build a day-by-day plan around you — completely free.
      </p>
      <button
        onClick={onPlanTrip}
        className="btn-gold"
      >
        Get My Free Custom Plan &rarr;
      </button>
      <p className="text-[0.6rem] text-muted/50 mt-3 font-light">
        No account &middot; No credit card &middot; Takes 2 minutes
      </p>
    </div>
  );
}
