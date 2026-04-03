"use client";

export default function TrustStripSection() {
  return (
    <div className="bg-ink py-3 px-6 flex items-center justify-center gap-3 md:gap-8 flex-wrap">
      {[
        "⭐  500+ Trips Planned",
        "💰  Saves ₹3k–₹5k Per Trip",
        "🇮🇳  Built for Indian Travellers",
        "✓  100% Free Planning",
        "⚡  24hr Response",
      ].map((t, i) => (
        <span key={i} className="text-[0.67rem] tracking-[0.1em] uppercase text-gold-light/80 whitespace-nowrap font-light flex items-center gap-2">
          {i > 0 && <span className="hidden md:block w-px h-3.5 bg-gold/20" />}
          {t}
        </span>
      ))}
    </div>
  );
}
