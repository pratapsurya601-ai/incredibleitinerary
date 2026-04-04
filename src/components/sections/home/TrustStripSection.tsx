"use client";

export default function TrustStripSection() {
  return (
    <div className="bg-ink/90 py-3.5 px-6 flex items-center justify-center gap-4 md:gap-10 flex-wrap">
      {[
        { val: "500+", label: "Trips Planned" },
        { val: "59", label: "Destinations" },
        { val: "24hr", label: "Response" },
        { val: "100%", label: "Free" },
      ].map((s, i) => (
        <div key={i} className="flex items-center gap-1.5">
          {i > 0 && <span className="hidden md:block w-px h-4 bg-gold/20 mr-2" />}
          <span className="text-gold font-serif text-sm font-light">{s.val}</span>
          <span className="text-[0.6rem] tracking-[0.12em] uppercase text-white/40 font-light">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
