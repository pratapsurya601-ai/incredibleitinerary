import type { Metadata } from "next";
import Link from "next/link";
import LegalWrapper from "@/components/layout/LegalWrapper";
export const metadata: Metadata = { title: "Privacy Policy — IncredibleItinerary", alternates: { canonical: "https://www.incredibleitinerary.com/privacy" } };
export default function PrivacyPage() {
  return (
    <LegalWrapper>
    <main className="bg-cream min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-[720px] mx-auto">
        <Link href="/" className="text-xs text-muted uppercase tracking-widest hover:text-gold transition-colors mb-8 block">← Back to Home</Link>
        <h1 className="font-serif text-[2.4rem] font-light text-ink mb-2">Privacy Policy</h1>
        <p className="text-xs text-muted mb-10">Last updated: March 21, 2026</p>
        {[
          { h: "Information We Collect", p: "When you submit a trip planning request or newsletter signup, we collect your name, email address, and trip preferences. We do not collect payment information directly — all transactions are handled by third-party providers (Gumroad)." },
          { h: "How We Use Your Information", p: "We use your information solely to respond to your trip planning request, send you the personalised itinerary you requested, and (if you opted in) send occasional travel tips and destination guides. We never sell or share your data with third parties for marketing purposes." },
          { h: "Cookies", p: "We use Google Analytics to understand how visitors use our site. This involves cookies that collect anonymous usage data. You can opt out via our Cookie Policy page or your browser settings." },
          { h: "Email Communications", p: "If you submitted a trip enquiry or signed up for our newsletter, you may receive emails from hello@incredibleitinerary.com. You can unsubscribe at any time by replying with 'unsubscribe' or clicking the unsubscribe link in any email." },
          { h: "Data Retention", p: "We retain your contact information for as long as necessary to fulfil your trip planning request and any follow-up communication. You may request deletion of your data at any time by emailing hello@incredibleitinerary.com." },
          { h: "Your Rights", p: "You have the right to access, correct, or delete any personal information we hold about you. To exercise these rights, contact us at hello@incredibleitinerary.com." },
          { h: "Contact", p: "Questions about this privacy policy? Email hello@incredibleitinerary.com." },
        ].map((s) => (
          <div key={s.h} className="mb-8">
            <h2 className="font-serif text-lg font-light text-ink mb-2">{s.h}</h2>
            <p className="text-sm text-muted font-light leading-relaxed">{s.p}</p>
          </div>
        ))}
      </div>
    </main>
    </LegalWrapper>
  );
}
