import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/data";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-parchment py-24 px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center max-w-[540px] mx-auto mb-14">
          <span className="section-label">What We Offer</span>
          <h2 className="serif-title text-[clamp(1.9rem,3vw,2.7rem)] text-ink">
            Everything You Need,{" "}
            <em className="italic text-teal">Nothing You Don&apos;t</em>
          </h2>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <AnimatedSection key={svc.title} delay={i * 80}>
              <div className="bg-cream border border-parchment-2 rounded-md p-7 h-full transition-all duration-300 hover:shadow-[0_10px_32px_rgba(22,16,8,0.07)] hover:-translate-y-1">
                <div className="text-[1.6rem] mb-4">{svc.icon}</div>
                <h3 className="font-serif text-[1.1rem] font-normal text-ink mb-2.5 leading-tight">
                  {svc.title}
                </h3>
                <p className="text-sm text-muted font-light leading-[1.7]">
                  {svc.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
