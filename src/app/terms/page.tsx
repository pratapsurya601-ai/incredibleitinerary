import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Terms of Use — IncredibleItinerary", alternates: { canonical: "https://www.incredibleitinerary.com/terms" } };
export default function TermsPage() {
  return (
    <main className="bg-cream min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-[720px] mx-auto">
        <Link href="/" className="text-xs text-muted uppercase tracking-widest hover:text-gold transition-colors mb-8 block">← Back to Home</Link>
        <h1 className="font-serif text-[2.4rem] font-light text-ink mb-2">Terms of Use</h1>
        <p className="text-xs text-muted mb-10">Last updated: March 21, 2026</p>
        {[
          { h: "Free Planning Service", p: "IncredibleItinerary provides free personalised trip planning as a service to travellers. Submitting a trip enquiry creates no obligation — you are under no pressure to purchase any product or service as a result of receiving a free itinerary." },
          { h: "Itinerary Accuracy", p: "All itineraries and travel guides are created in good faith based on our knowledge of each destination. Prices, timings, availability and conditions change — always verify critical details (permits, accommodation, transport) before travel. IncredibleItinerary accepts no liability for losses arising from inaccurate or outdated information." },
          { h: "PDF Products", p: "PDF itinerary guides purchased via Gumroad are for personal use only. They may not be reproduced, distributed or resold. All sales are final — no refunds once a digital product has been downloaded." },
          { h: "Affiliate Links", p: "Some links on our site (hotels, activities) are affiliate links — we may earn a small commission if you book through them, at no extra cost to you. This does not influence our recommendations." },
          { h: "Intellectual Property", p: "All content on IncredibleItinerary.com — text, itineraries, guides — is our original work. You may share links to our pages but may not reproduce our content without permission." },
          { h: "Governing Law", p: "These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Delhi, India." },
          { h: "Contact", p: "Questions? Email hello@incredibleitinerary.com." },
        ].map((s) => (
          <div key={s.h} className="mb-8">
            <h2 className="font-serif text-lg font-light text-ink mb-2">{s.h}</h2>
            <p className="text-sm text-muted font-light leading-relaxed">{s.p}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
