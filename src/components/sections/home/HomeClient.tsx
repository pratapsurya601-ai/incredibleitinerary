"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
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
