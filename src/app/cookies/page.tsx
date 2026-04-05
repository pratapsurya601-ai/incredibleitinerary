import type { Metadata } from "next";
import Link from "next/link";
import LegalWrapper from "@/components/layout/LegalWrapper";
export const metadata: Metadata = { title: "Cookie Policy — IncredibleItinerary", alternates: { canonical: "https://www.incredibleitinerary.com/cookies" } };
export default function CookiesPage() {
  return (
    <LegalWrapper>
    <main className="bg-cream min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-[720px] mx-auto">
        <Link href="/" className="text-xs text-muted uppercase tracking-widest hover:text-gold transition-colors mb-8 block">← Back to Home</Link>
        <h1 className="font-serif text-[2.4rem] font-light text-ink mb-2">Cookie Policy</h1>
        <p className="text-xs text-muted mb-10">Last updated: March 21, 2026</p>
        {[
          { h: "What Are Cookies", p: "Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and understand how you use the site." },
          { h: "Cookies We Use", p: "We use Google Analytics cookies (anonymous, aggregated data about how visitors use our site — pages visited, time on site, geographic region). We do not use advertising cookies or tracking cookies for remarketing. We do not use cookies to store personal information." },
          { h: "Third-Party Cookies", p: "Google Analytics sets cookies under the _ga and _gid names. These expire after 2 years and 24 hours respectively. Giscus (our comments system) may set cookies when you log in via GitHub to leave a comment." },
          { h: "How to Control Cookies", p: "You can disable cookies in your browser settings. You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on (available at tools.google.com/dlpage/gaoptout). Disabling cookies will not affect your ability to use IncredibleItinerary.com." },
          { h: "Contact", p: "Questions? Email hello@incredibleitinerary.com." },
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
