"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { trackEvent } from "@/lib/analytics";
import HeroSection from "./HeroSection";
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
                fill className="object-cover object-top"
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
              <a href="/about" className="inline-block mt-3 text-xs text-gold font-medium hover:underline tracking-wide">
                More about me →
              </a>
            </div>
          </div>
        </div>

        <TrustStripSection />
        <PopularDestinations />
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
