import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { whyUsPoints } from "@/data";

interface WhyUsSectionProps {
  onPlanTrip: () => void;
}

export default function WhyUsSection({ onPlanTrip }: WhyUsSectionProps) {
  return (
    <section id="about" className="bg-parchment py-24 px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Image side */}
          <AnimatedSection className="relative">
            <div className="relative rounded-md overflow-hidden aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=800&q=80"
                alt="Authentic India travel experience"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Stat badge */}
            <div className="absolute -bottom-7 -right-4 md:-right-7 bg-gold rounded-lg p-6 text-center shadow-lg">
              <span className="font-serif text-[3rem] font-light text-ink leading-none block mb-1">
                500+
              </span>
              <span className="text-[0.65rem] tracking-[0.15em] uppercase font-medium text-ink-mid">
                Journeys Crafted
              </span>
            </div>
          </AnimatedSection>

          {/* Content side */}
          <AnimatedSection delay={150} className="lg:pl-4">
            <span className="section-label">Why Choose Us</span>
            <h2 className="serif-title text-[clamp(1.9rem,3vw,2.7rem)] text-ink mb-4">
              We Know India Like{" "}
              <em className="italic text-teal">No One Else</em>
            </h2>
            <p className="text-sm text-muted font-light leading-[1.8] mb-10 max-w-[440px]">
              IncredibleItinerary isn&apos;t a booking portal — it&apos;s a personal
              travel service. We don&apos;t sell off-the-shelf tours. Every trip is
              hand-built by people who&apos;ve travelled these routes, know the
              hidden tea houses, and have the local contacts to get you
              experiences money alone can&apos;t buy.
            </p>

            {/* Points */}
            <div className="flex flex-col gap-6 mb-10">
              {whyUsPoints.map((pt, i) => (
                <div key={pt.title} className="flex gap-4 items-start">
                  <div className="w-11 h-11 flex-shrink-0 rounded bg-cream border border-parchment-2 flex items-center justify-center">
                    {i === 0 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
                    )}
                    {i === 1 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    )}
                    {i === 2 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    )}
                    {i === 3 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    )}
                  </div>
                  <div>
                    <p className="font-serif text-[1.05rem] font-normal text-ink mb-1">{pt.title}</p>
                    <p className="text-sm text-muted font-light leading-[1.65]">{pt.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={onPlanTrip} className="btn-gold">
              Start Planning My Trip →
            </button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
