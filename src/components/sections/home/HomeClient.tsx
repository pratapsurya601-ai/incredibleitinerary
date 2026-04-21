"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { trackEvent } from "@/lib/analytics";
import HeroSection from "./HeroSection";
import AboveFoldTrustBar from "./AboveFoldTrustBar";
import TrustStripSection from "./TrustStripSection";
import PopularDestinations from "./PopularDestinations";
import HowItWorksSection from "./HowItWorksSection";
import Testimonials from "@/components/sections/Testimonials";
import PdfShowcaseSection from "./PdfShowcaseSection";

const IndiaMapSection = dynamic(() => import("./IndiaMapSection"), {
  loading: () => <div className="bg-ink py-20 animate-pulse" style={{ minHeight: 500 }} />,
});
const HomepageFAQ = dynamic(() => import("@/components/sections/HomepageFAQ"), {
  loading: () => <div className="bg-cream py-20 animate-pulse" style={{ minHeight: 300 }} />,
});
const NewsletterSection = dynamic(() => import("./NewsletterSection"), {
  loading: () => <div className="bg-parchment py-16 animate-pulse" style={{ minHeight: 200 }} />,
});
const FinalCTASection = dynamic(() => import("./FinalCTASection"), {
  loading: () => <div className="bg-ink py-24 animate-pulse" style={{ minHeight: 250 }} />,
});
const InquiryModal = dynamic(() => import("@/components/ui/InquiryModal"), { ssr: false });

export default function HomeClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => { setModalOpen(true); trackEvent("inquiry_modal_opened", { page: "homepage" }); };
  return (
    <>
      <Navbar onPlanTrip={open} />
      <main id="main-content">
        <HeroSection onPlanTrip={open} />
        <AboveFoldTrustBar />

        {/* ── SEASONAL STRIP ── */}
        <div className="bg-gold/10 border-y border-gold/20 py-3 px-6">
          <div className="max-w-[1180px] mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-center">
            <span className="text-xs font-medium text-amber-800">📅 Planning for April–June?</span>
            {[
              { label: "Char Dham opens", href: "/blog/char-dham-yatra-guide" },
              { label: "Kashmir summer", href: "/blog/kashmir-6-days" },
              { label: "Spiti Valley", href: "/blog/spiti-valley-7-days" },
              { label: "Manali before crowds", href: "/blog/manali-5-days" },
              { label: "Kedarnath trek", href: "/blog/kedarnath-trek-guide" },
            ].map((item) => (
              <Link key={item.href} href={item.href}
                className="text-xs text-amber-700 hover:text-amber-900 hover:underline font-light transition-colors">
                {item.label} →
              </Link>
            ))}
          </div>
        </div>

        {/* ── AUTHOR BLOCK ── */}
        <div className="bg-parchment border-y border-parchment-2 py-10 px-6 md:px-12">
          <div className="max-w-[860px] mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-gold/30">
              <Image
                src="/images/surya/surya-author-primary.jpg"
                alt="Surya Pratap — Founder of IncredibleItinerary"
                fill unoptimized className="object-cover object-top"
                sizes="80px"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-serif text-lg font-light text-ink mb-1">Hi, I&apos;m Surya.</p>
              <p className="text-sm text-muted font-light leading-relaxed max-w-[520px]">
                I&apos;m 24, from Delhi, and I&apos;ve trekked to Kedarnath, Gangotri and Badrinath,
                driven through Spiti Valley, and spent too many nights on overnight trains across India.
                I built IncredibleItinerary because every travel guide I found was either vague,
                outdated, or written by someone who&apos;d clearly never been there.
              </p>
              <div className="flex items-center gap-4 mt-3">
                <a href="/about" className="text-xs text-gold-dark font-medium hover:underline tracking-wide">
                  More about me →
                </a>
                <a href="https://www.linkedin.com/in/surya-pratap-601" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-ink transition-colors flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <TrustStripSection />

        {/* ── TRENDING GUIDES (internal linking for ranking pages) ── */}
        <div className="bg-white py-10 px-6 md:px-12 border-b border-parchment-2">
          <div className="max-w-[1180px] mx-auto">
            <p className="text-[0.65rem] tracking-[0.22em] uppercase text-gold-dark font-medium text-center mb-2">
              Most Searched Right Now
            </p>
            <h2 className="font-serif text-[1.4rem] md:text-[1.7rem] font-light text-ink text-center mb-6">
              Trending 2026 travel guides
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { label: "Yamunotri 2026: Palki/Doli/Pony Rates", href: "/blog/yamunotri-temple-guide" },
                { label: "Meghalaya 5-Day Itinerary", href: "/blog/meghalaya-5-days" },
                { label: "Lonavala 2 Days Under ₹4,000", href: "/blog/lonavala-2-days" },
                { label: "Meenakshi Temple Madurai Guide", href: "/blog/meenakshi-temple-2-days" },
                { label: "Karnataka 7-Day Circuit", href: "/blog/karnataka-7-days" },
                { label: "Pachmarhi 3 Days + Satpura Safari", href: "/blog/pachmarhi-3-days" },
                { label: "Pushkar 2 Days + Camel Fair", href: "/blog/pushkar-2-days" },
                { label: "Coonoor 2 Days Tea Estates", href: "/blog/coonoor-2-days" },
                { label: "Kochi 3 Days + Backwaters", href: "/blog/kochi-3-days" },
                { label: "India Budget Guide ₹3,000/day", href: "/blog/india-budget-guide" },
                { label: "San Francisco 4 Days", href: "/blog/san-francisco-4-days" },
                { label: "Panama City 3 Days", href: "/blog/panama-city-3-days" },
                { label: "Jamaica 5 Days + Blue Mountains", href: "/blog/jamaica-5-days" },
                { label: "Trip Finder Quiz", href: "/quiz" },
              ].map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="inline-flex items-center px-4 py-2 rounded-full text-xs font-light tracking-wide border border-parchment-2 bg-cream text-muted hover:border-gold hover:text-gold-dark hover:bg-white hover:shadow-sm transition-all duration-200"
                >
                  {g.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>

        <PopularDestinations />

        {/* ── EXPLORE BY REGION ── */}
        <div className="bg-cream py-12 px-6 md:px-12 border-b border-parchment-2">
          <div className="max-w-[1180px] mx-auto">
            <p className="text-[0.65rem] tracking-[0.22em] uppercase text-gold-dark font-medium text-center mb-3">
              Explore by Region
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {[
                { label: "🇮🇳 India",        href: "/blog?mainTab=india" },
                { label: "🏖️ Beaches",       href: "/blog?filter=beach" },
                { label: "🏔️ Mountains",     href: "/blog?filter=mountains" },
                { label: "🌏 SE Asia",        href: "/blog?region=southeast" },
                { label: "🕌 Middle East",    href: "/blog?region=middleeast" },
                { label: "🏰 Europe",         href: "/blog?region=europe" },
                { label: "💑 Honeymoon",      href: "/honeymoon" },
                { label: "🦁 Africa",         href: "/blog?region=africa" },
                { label: "🗺️ All Guides",    href: "/blog" },
              ].map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-light tracking-wide border border-parchment-2 bg-white text-muted hover:border-gold hover:text-gold-dark hover:shadow-sm transition-all duration-200"
                >
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <HowItWorksSection onPlanTrip={open} />
        <IndiaMapSection />
        <Testimonials />
        <PdfShowcaseSection />
        <HomepageFAQ />
        <NewsletterSection />
        <FinalCTASection onPlanTrip={open} />
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
