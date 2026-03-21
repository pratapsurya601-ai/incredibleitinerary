"use client";
import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PreQualModal, { type PreQualAnswers } from "@/components/ui/PreQualModal";
import { packages, filterCategories, type PackageCategory } from "@/data";

interface PackagesSectionProps {
  onPlanTrip: () => void;
}

export default function PackagesSection({ onPlanTrip }: PackagesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<PackageCategory>("all");
  const [preQualOpen, setPreQualOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>();

  const filtered = activeFilter === "all" ? packages : packages.filter((p) => p.categories.includes(activeFilter));

  const handleEnquire = (packageName: string) => {
    setSelectedPackage(packageName);
    setPreQualOpen(true);
  };

  const handlePreQualComplete = (answers: PreQualAnswers) => {
    // Pre-fill inquiry modal with answers by opening it
    // Store answers in sessionStorage for InquiryModal to pick up
    if (typeof window !== "undefined") {
      sessionStorage.setItem("preQualAnswers", JSON.stringify({ ...answers, package: selectedPackage }));
    }
    onPlanTrip();
  };

  return (
    <section id="packages" className="bg-cream py-24 px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 gap-6">
          <div>
            <span className="section-label">Trip Inspiration</span>
            <h2 className="serif-title text-[clamp(2rem,3.5vw,2.9rem)] text-ink">
              Sample Itineraries & Starting Prices
            </h2>
            <p className="text-sm text-muted font-light mt-2 max-w-[440px]">
              Every trip is built around you — these are starting points. Click Enquire and we&apos;ll craft yours from scratch, free.
            </p>
          </div>
          {/* Filter bar */}
          <div className="flex gap-2 flex-wrap">
            {filterCategories.map((cat) => (
              <button key={cat.value} onClick={() => setActiveFilter(cat.value)}
                className={`px-4 py-2 rounded-full text-[0.72rem] tracking-[0.1em] uppercase border transition-all duration-200 ${
                  activeFilter === cat.value ? "bg-gold text-ink border-gold" : "border-parchment-2 text-muted hover:border-gold hover:text-gold bg-transparent"
                }`}>
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Pricing note */}
        <AnimatedSection>
          <div className="flex items-center gap-2 mb-8 px-4 py-2.5 bg-parchment rounded-lg border border-parchment-2 w-fit">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8a7a6a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/></svg>
            <p className="text-[0.7rem] text-muted font-light">Prices are per person, based on double occupancy. Solo surcharge available on request.</p>
          </div>
        </AnimatedSection>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg, i) => (
            <AnimatedSection key={pkg.id} delay={i * 80}>
              <div className={`pkg-card h-full ${pkg.featured ? "border-gold" : ""}`}>
                {/* Image */}
                <div className="relative overflow-hidden h-[200px]">
                  <Image src={pkg.image} alt={pkg.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  {pkg.badge && (
                    <div className="absolute top-3.5 right-3.5 bg-gold text-ink text-[0.6rem] tracking-[0.12em] uppercase font-medium px-2.5 py-1 rounded-[1px]">{pkg.badge}</div>
                  )}
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-[0.65rem] tracking-[0.18em] uppercase text-gold-dark mb-1.5">{pkg.region}</p>
                  <h3 className="font-serif text-xl font-normal text-ink mb-2 leading-tight">{pkg.name}</h3>
                  <p className="text-sm text-muted font-light leading-relaxed mb-4">{pkg.description}</p>

                  {/* Pills */}
                  <div className="flex gap-2 flex-wrap mb-4">
                    {[`🗓 ${pkg.duration}`, `🏨 ${pkg.accommodation}`, `✦ ${pkg.groupType}`].map((pill) => (
                      <span key={pill} className="text-[0.68rem] px-2.5 py-1 rounded-full bg-parchment text-muted">{pill}</span>
                    ))}
                  </div>

                  <div className="h-px bg-parchment-2 mb-4" />

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[0.65rem] text-muted uppercase tracking-[0.08em] mb-0.5">Starting from</p>
                      <p className="font-serif text-[1.6rem] font-light text-ink leading-none">
                        {pkg.price}{" "}<sub className="text-sm font-sans text-muted font-light">{pkg.priceNote}</sub>
                      </p>
                    </div>
                    <button
                      onClick={() => handleEnquire(pkg.name)}
                      className={`px-4 py-2.5 text-[0.72rem] tracking-[0.1em] uppercase font-medium rounded-[1px] transition-colors duration-200 ${
                        pkg.featured ? "bg-gold text-ink hover:bg-gold-dark hover:text-white" : "bg-parchment text-ink hover:bg-gold-light"
                      }`}>
                      Get This Trip →
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={200}>
          <div className="text-center mt-12">
            <button onClick={onPlanTrip} className="btn-gold">Request a Custom Itinerary →</button>
          </div>
        </AnimatedSection>
      </div>

      <PreQualModal
        isOpen={preQualOpen}
        onClose={() => setPreQualOpen(false)}
        packageName={selectedPackage}
        onComplete={handlePreQualComplete}
      />
    </section>
  );
}
