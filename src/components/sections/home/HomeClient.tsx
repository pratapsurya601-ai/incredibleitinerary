"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { trackEvent } from "@/lib/analytics";
import HeroSection from "./HeroSection";
import TrustStripSection from "./TrustStripSection";
import WhyDifferentSection from "./WhyDifferentSection";
import SampleItinerarySection from "./SampleItinerarySection";
import HowItWorksSection from "./HowItWorksSection";
import Testimonials from "@/components/sections/Testimonials";

// Lazy-load below-the-fold sections
const DestinationGridSection = dynamic(() => import("./DestinationGridSection"), {
  loading: () => <div className="bg-cream py-20 animate-pulse" style={{ minHeight: 400 }} />,
});
const MonetizationSection = dynamic(() => import("./MonetizationSection"), {
  loading: () => <div className="bg-ink py-20 animate-pulse" style={{ minHeight: 400 }} />,
});
const HomepageFAQ = dynamic(() => import("@/components/sections/HomepageFAQ"), {
  loading: () => <div className="bg-cream py-20 animate-pulse" style={{ minHeight: 300 }} />,
});
const FinalCTASection = dynamic(() => import("./FinalCTASection"), {
  loading: () => <div className="bg-ink py-24 animate-pulse" style={{ minHeight: 300 }} />,
});
const NewsletterSection = dynamic(() => import("./NewsletterSection"), {
  loading: () => <div className="bg-parchment py-16 animate-pulse" style={{ minHeight: 200 }} />,
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
        <WhyDifferentSection onPlanTrip={open} />
        <SampleItinerarySection onPlanTrip={open} />
        <HowItWorksSection onPlanTrip={open} />
        <Testimonials />
        <DestinationGridSection />
        <MonetizationSection onPlanTrip={open} />
        <HomepageFAQ />
        <NewsletterSection />
        <FinalCTASection onPlanTrip={open} />
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
