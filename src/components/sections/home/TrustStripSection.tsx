"use client";

export default function TrustStripSection() {
  return (
    <div className="bg-ink py-4 px-6">
      <div className="max-w-[800px] mx-auto flex items-center justify-center gap-8 md:gap-14">
        {[
          { val: "500+", label: "Trips" },
          { val: "59", label: "Destinations" },
          { val: "24hr", label: "Response" },
          { val: "Free", label: "Always" },
        ].map((s, i) => (
          <div key={i} className="flex items-baseline gap-1.5">
            <span className="text-gold font-serif text-base font-light">{s.val}</span>
            <span className="text-[0.58rem] tracking-[0.15em] uppercase text-white/30">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
