"use client";
import { GUIDES_DISPLAY, COUNTRIES_DISPLAY } from "@/lib/siteStats";

export default function TrustStripSection() {
  return (
    <div className="bg-ink py-4 px-6">
      <div className="max-w-[800px] mx-auto flex items-center justify-center gap-8 md:gap-14">
        {[
          { val: GUIDES_DISPLAY, label: "Guides" },
          { val: COUNTRIES_DISPLAY, label: "Countries" },
          { val: "24hr", label: "Response" },
          { val: "Free", label: "Always" },
        ].map((s) => (
          <div key={s.label} className="flex items-baseline gap-1.5">
            <span className="text-gold font-serif text-base font-light">{s.val}</span>
            <span className="text-xs tracking-[0.15em] uppercase text-white/70">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
