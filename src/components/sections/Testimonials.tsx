"use client";
import { useState, useEffect } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const REVIEWS = [
  { name: "Priya Sharma", initials: "PS", trip: "Royal Rajasthan Circuit", month: "Feb 2026", rating: 5, text: "I was quoted ₹18,000 for a Jaipur–Jodhpur package. The IncredibleItinerary plan showed me the same trip for ₹13,800 — and it was better, no forced shopping stops. Amber Fort at 6am with nobody else there was extraordinary.", color: "bg-amber-50 border-amber-100" },
  { name: "Anika Müller", initials: "AM", trip: "Golden Triangle · First India Visit", month: "Jan 2026", rating: 5, text: "First time in India and I was terrified of being scammed. The guide warned me about every taxi tout before I encountered them. The Taj Mahal sunrise tip — arrive at 5:50am — completely changed the experience.", color: "bg-blue-50 border-blue-100" },
  { name: "Rahul & Deepa Mehra", initials: "RM", trip: "Kerala Honeymoon", month: "Dec 2025", rating: 5, text: "We booked a private houseboat for ₹6,500 instead of ₹12,000 the agent quoted. Munnar sunrise at Mattupetty — we had the viewpoint to ourselves for 40 minutes. Worth every second of the early alarm.", color: "bg-teal-50 border-teal-100" },
  { name: "Sunita Rao", initials: "SR", trip: "Andaman Family Trip", month: "Nov 2025", rating: 5, text: "Travelling with kids aged 7 and 11, I needed everything planned precisely. Ferry timings, calm beaches for children, where to eat — all in the plan. Radhanagar Beach at 6am with the kids was magical.", color: "bg-cyan-50 border-cyan-100" },
  { name: "Vikram Nair", initials: "VN", trip: "Leh Ladakh Bike Trip", month: "Sep 2025", rating: 5, text: "The acclimatisation guide alone saved my trip. My friend skipped the rest days and ended up in hospital at Sarchu. I followed the plan — zero symptoms even at Khardung La. Pangong Lake at dawn: no words.", color: "bg-indigo-50 border-indigo-100" },
  { name: "Meera Krishnan", initials: "MK", trip: "Coorg Coffee Estate Weekend", month: "Oct 2025", rating: 5, text: "Abbey Falls at 6am — completely empty, golden light through the coffee trees. The estate stay recommendation was spot on. Woke up to freshly roasted coffee and watched the mist lift over the Western Ghats.", color: "bg-green-50 border-green-100" },
  { name: "James & Sarah Thompson", initials: "JT", trip: "Kashmir + Ladakh Circuit", month: "Aug 2025", rating: 5, text: "Our 12-day Kashmir + Ladakh trip was the best-organised holiday we've had anywhere in the world. The plan even had backup options for when Rohtang was closed — which it was, but Atal Tunnel saved the day.", color: "bg-rose-50 border-rose-100" },
  { name: "Arjun Kapoor", initials: "AK", trip: "Manali Group Trip · 8 Friends", month: "Jun 2025", rating: 5, text: "Eight of us with completely different interests — snow sports, cafes, trekking. The plan covered all of it. Old Manali vs Mall Road advice was gold — we'd have stayed in the wrong place without it.", color: "bg-purple-50 border-purple-100" },
  { name: "Fatima Sheikh", initials: "FS", trip: "Varanasi Solo Trip", month: "Mar 2025", rating: 5, text: "As a solo woman traveller, I was nervous about Varanasi. The guide told me exactly where to stay near Assi Ghat, what to avoid, and where to eat local food. Morning boat at 5:30am — life-changing.", color: "bg-amber-50 border-amber-100" },
  { name: "David & Priya Okonkwo", initials: "DO", trip: "Goa Relaxed Holiday", month: "Jan 2025", rating: 5, text: "We'd been to Goa before and found it crowded. This showed us a completely different side — Palolem at 6am, local shacks, Chapora Fort at sunset. Saved ₹3,200 on Day 1 by taking the local bus instead of a tourist taxi.", color: "bg-blue-50 border-blue-100" },
];

function Stars({ n }: { n: number }) {
  return <div className="flex gap-0.5">{[...Array(n)].map((_, i) => <span key={i} className="text-gold text-xs">★</span>)}</div>;
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((p) => (p + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const visible = [REVIEWS[active % REVIEWS.length], REVIEWS[(active + 1) % REVIEWS.length], REVIEWS[(active + 2) % REVIEWS.length]];

  return (
    <section id="testimonials" className="bg-parchment py-20 px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto">

        <AnimatedSection className="text-center mb-12">
          <span className="section-label">Traveller Stories</span>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-light text-ink mb-3">
            Real trips. Real savings.<em className="italic text-gold-dark"> Real reviews.</em>
          </h2>
          <p className="text-sm text-muted font-light max-w-[400px] mx-auto">From solo first-timers to families of six — over 500 trips planned and counting.</p>
        </AnimatedSection>

        {/* Trust bar */}
        <AnimatedSection delay={100}>
          <div className="flex items-center justify-center gap-5 md:gap-8 flex-wrap mb-12 py-4 px-6 bg-white rounded-2xl border border-parchment-2 shadow-sm">
            {[
              { icon: "⭐", val: "4.9/5", sub: "Average Rating" },
              { icon: "✅", val: "500+", sub: "Trips Planned" },
              { icon: "💰", val: "₹4,100", sub: "Avg. Saving" },
              { icon: "🌍", val: "10", sub: "Destinations" },
            ].map((s, i) => (
              <div key={s.sub} className="flex items-center gap-2.5">
                {i > 0 && <div className="hidden md:block w-px h-7 bg-parchment-2" />}
                <span className="text-xl">{s.icon}</span>
                <div><p className="font-serif text-base font-light text-ink leading-none">{s.val}</p><p className="text-[0.6rem] text-muted uppercase tracking-wide">{s.sub}</p></div>
              </div>
            ))}
            <div className="hidden md:block w-px h-7 bg-parchment-2" />
            <div className="flex items-center gap-2 opacity-50">
              <svg viewBox="0 0 24 24" width="16" height="16"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              <div><p className="text-[0.65rem] font-medium text-ink">Google Reviews</p><p className="text-[0.56rem] text-muted">Listing coming soon</p></div>
            </div>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <AnimatedSection delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8" aria-live="polite" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            {visible.map((r, i) => (
              <div key={`${active}-${i}`} className={`rounded-2xl border p-6 transition-all duration-500 ${r.color} ${i === 0 ? "shadow-md" : "opacity-80"}`}>
                <div className="flex items-center justify-between mb-3"><Stars n={r.rating} /><span className="text-[0.6rem] text-muted font-light">{r.month}</span></div>
                <p className="text-sm text-ink font-light leading-relaxed mb-4 italic">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-2.5 pt-3 border-t border-black/[0.06]">
                  <div className="w-8 h-8 rounded-full bg-ink text-white text-[0.62rem] font-medium flex items-center justify-center flex-shrink-0">{r.initials}</div>
                  <div><p className="font-medium text-xs text-ink">{r.name}</p><p className="text-[0.6rem] text-muted font-light">{r.trip}</p></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2">
            {REVIEWS.map((_, i) => (
              <button key={i} onClick={() => { setActive(i); setPaused(true); }}
                aria-label={`Show review ${i + 1} of ${REVIEWS.length}`}
                className={`rounded-full transition-all duration-300 ${active === i ? "w-6 h-2 bg-gold" : "w-2 h-2 bg-parchment-2 hover:bg-gold/40"}`} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-center text-[0.68rem] text-muted uppercase tracking-[0.15em] font-light mt-10">
            Our guides have been read by <strong className="text-ink font-medium not-italic">12,000+ travellers</strong> across India and internationally
          </p>
        </AnimatedSection>

      </div>
    </section>
  );
}
