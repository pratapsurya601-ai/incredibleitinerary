import AnimatedSection from "@/components/ui/AnimatedSection";
import { howItWorks } from "@/data";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ink py-24 px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-label text-gold">The Process</span>
          <h2 className="serif-title text-[clamp(2rem,3.5vw,2.9rem)] text-white">
            Your Trip in Four Simple Steps
          </h2>
        </AnimatedSection>

        {/* Steps */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-[27px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-gold/20" />

          {howItWorks.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 100} className="text-center px-4 lg:px-6">
              {/* Number circle */}
              <div className="relative z-10 w-[54px] h-[54px] rounded-full border border-gold/35 flex items-center justify-center mx-auto mb-6 bg-ink">
                <span className="font-serif text-lg text-gold-light">
                  {step.num}
                </span>
              </div>
              <h3 className="font-serif text-[1.1rem] font-normal text-white mb-2.5">
                {step.title}
              </h3>
              <p className="text-sm text-white/40 font-light leading-[1.75]">
                {step.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
