"use client";
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const FAQS = [
  {
    q: "How does the free planning service work?",
    a: "Simple: fill in the 'Plan My Trip' form with your destination, dates, group size and budget. We'll build a personalised day-by-day itinerary within 24 hours and email it to you — completely free. There's no catch, no upsell call, and no obligation.",
  },
  {
    q: "Is there any obligation after I enquire?",
    a: "None whatsoever. We send you the itinerary, you use it however you like. Many people take the itinerary and book everything themselves. Others come back to us for help booking specific elements. Either is perfectly fine — we genuinely enjoy planning trips.",
  },
  {
    q: "What's the difference between the free plan and a PDF guide?",
    a: "The free personalised plan is built specifically for your dates, group and budget — it's custom. The PDF guides in our shop are pre-written general itineraries for each destination that you can download and use immediately. Both are detailed and useful, just different in purpose.",
  },
  {
    q: "Are the sample itinerary prices per person?",
    a: "Yes — all prices shown are per person, based on double occupancy (two people sharing a room). Solo travellers typically pay a single supplement of ₹500–₹1,500 per night depending on the property. Group bookings (4+) often get better rates. Mention your situation in the form and we'll adjust accordingly.",
  },
  {
    q: "Is this service suitable for solo / group / family travellers?",
    a: "All three. We've planned solo trips (including solo women travellers), honeymoon circuits, groups of up to 14 friends, and multi-generational family holidays. Each plan accounts for your specific dynamic — solo safety, family pace, group activity preferences.",
  },
  {
    q: "What is your payment and cancellation policy?",
    a: "The planning service is entirely free — there's nothing to pay or cancel. For PDF shop purchases (Gumroad), all digital product sales are final as the file is delivered immediately on purchase. We don't process hotel or flight payments directly — we provide the plan and recommendations, you book directly with providers.",
  },
  {
    q: "How far in advance should I enquire?",
    a: "For most destinations, 2–4 weeks ahead is ideal. For peak season travel (Ladakh June–September, Rajasthan October–February, Goa December–January), 4–8 weeks gives you the best accommodation options. We can work with shorter lead times but some options may be limited.",
  },
  {
    q: "Do you arrange bookings or just the plan?",
    a: "Right now we provide the itinerary, recommendations and practical guidance — you book directly. This keeps costs lower for you and gives you full control. We're building a booking-assistance service for 2026 — join the newsletter to be notified.",
  },
];

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={onToggle} className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-parchment transition-colors duration-150">
        <span className="font-medium text-sm text-ink pr-6 leading-snug">{q}</span>
        <span className={`text-gold flex-shrink-0 text-xl leading-none transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-6 pb-5 pt-1 text-sm text-muted font-light leading-relaxed border-t border-parchment-2">{a}</p>
      </div>
    </div>
  );
}

export default function HomepageFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream py-20 px-6 md:px-12">
      <div className="max-w-[860px] mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="section-label">Common Questions</span>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-light text-ink mb-3">
            Everything you need to <em className="italic text-teal">know before enquiring</em>
          </h2>
          <p className="text-sm text-muted font-light max-w-[380px] mx-auto">No obligation. No payment required. Just great trip planning.</p>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} isOpen={open === i} onToggle={() => setOpen(open === i ? null : i)} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
