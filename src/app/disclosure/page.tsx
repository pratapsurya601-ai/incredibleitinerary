import type { Metadata } from "next";
import Link from "next/link";
import LegalWrapper from "@/components/layout/LegalWrapper";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — IncredibleItinerary",
  description: "IncredibleItinerary participates in affiliate programmes. Read how we handle affiliate links and keep our editorial opinions independent.",
  alternates: { canonical: "https://www.incredibleitinerary.com/disclosure" },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    h: "What is an Affiliate Link?",
    p: "Some links on IncredibleItinerary.com are affiliate links. This means if you click a link and complete a purchase or booking, we may receive a small commission — at no extra cost to you. The price you pay is identical whether you book through our link or go directly.",
  },
  {
    h: "Which Affiliate Programmes Do We Use?",
    p: "We participate in the following programmes: Travelpayouts (hotels, flights, tours — covers Booking.com, Agoda, GetYourGuide, Viator and others via their network), Google AdSense (display advertising), and occasionally direct affiliate partnerships with travel brands we personally recommend. We do not participate in sponsored-post programmes — no brand pays us to write a guide.",
  },
  {
    h: "How Affiliate Income Works for This Site",
    p: "IncredibleItinerary is a bootstrapped, independent site. Affiliate commissions and ad revenue are the primary way we cover hosting, domain, and development costs so we can keep all 362+ travel guides free. Without affiliate income, the site could not exist in its current form.",
  },
  {
    h: "Editorial Independence",
    p: "Affiliate relationships never influence which destinations we cover, what we recommend, or what we warn against. Every guide on this site is based on a real trip. We recommend the same hotels and tours we would recommend to a friend — and we warn against the same tourist traps we personally experienced. If we didn't like something, we say so, regardless of whether a commission is involved.",
  },
  {
    h: "No Sponsored Content",
    p: "We do not accept paid placements, sponsored articles, or \"advertorial\" content. No brand has ever paid us to write a guide or mention a product. Any recommendations you read on this site are genuine.",
  },
  {
    h: "Google AdSense",
    p: "We display Google AdSense advertisements on some pages. These ads are served by Google based on your browsing history and site content. We have no control over which specific ads appear. Ad revenue helps cover operating costs. You can opt out of personalised ads via Google's Ad Settings.",
  },
  {
    h: "FTC Compliance",
    p: "In accordance with the US Federal Trade Commission guidelines and equivalent international regulations, affiliate links are identified by the disclosure banner that appears near the beginning of posts containing them. This disclosure page serves as our site-wide disclosure per FTC 16 CFR Part 255.",
  },
  {
    h: "Questions",
    p: "If you have any questions about our affiliate relationships or editorial policy, email hello@incredibleitinerary.com. We're happy to discuss how any specific recommendation was made.",
  },
];

export default function DisclosurePage() {
  return (
    <LegalWrapper>
      <main className="bg-cream min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-[720px] mx-auto">
          <Link
            href="/"
            className="text-xs text-muted uppercase tracking-widest hover:text-gold transition-colors mb-8 block"
          >
            ← Back to Home
          </Link>
          <h1 className="font-serif text-[2.4rem] font-light text-ink mb-2">
            Affiliate Disclosure
          </h1>
          <p className="text-xs text-muted mb-10">Last updated: April 8, 2026</p>

          {/* Summary box */}
          <div className="bg-parchment border border-parchment-2 rounded-xl px-5 py-4 mb-10">
            <p className="text-sm text-ink font-light leading-relaxed">
              <span className="font-medium">Short version:</span> Some links on this site earn us a small commission if you book through them. We keep all guides free this way. Our opinions are always independent — no brand pays us for recommendations.
            </p>
          </div>

          {SECTIONS.map((s) => (
            <div key={s.h} className="mb-8">
              <h2 className="font-serif text-lg font-light text-ink mb-2">{s.h}</h2>
              <p className="text-sm text-muted font-light leading-relaxed">{s.p}</p>
            </div>
          ))}

          <div className="mt-10 pt-8 border-t border-parchment-2">
            <p className="text-xs text-muted font-light">
              Related: <Link href="/privacy" className="text-gold hover:underline">Privacy Policy</Link> · <Link href="/terms" className="text-gold hover:underline">Terms of Use</Link>
            </p>
          </div>
        </div>
      </main>
    </LegalWrapper>
  );
}
