import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { destinations } from "@/data";

export default function DestinationsSection() {
  return (
    <section id="destinations" className="bg-parchment py-24 px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-5">
          <div>
            <span className="section-label">Where Will You Go?</span>
            <h2 className="serif-title text-[clamp(2rem,3.5vw,2.9rem)] text-ink">
              India&apos;s Most{" "}
              <em className="italic text-teal">Beloved</em> Destinations
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-[0.75rem] tracking-[0.14em] uppercase text-gold-dark border-b border-gold-dark pb-0.5 hover:text-ink transition-colors self-start md:self-auto"
          >
            View All Guides →
          </Link>
        </AnimatedSection>

        {/* Grid */}
        <AnimatedSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr] lg:grid-rows-2 gap-4 auto-rows-[260px]">
            {destinations.map((dest, i) => (
              <Link
                key={dest.id}
                href={dest.href}
                className={`dest-card group text-left ${i === 0 ? "lg:row-span-2" : ""}`}
              >
                <div className="relative w-full h-full min-h-[240px]">
                  <Image
                    src={dest.image}
                    alt={dest.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full border border-gold-light/45 bg-black/20 backdrop-blur-sm flex items-center justify-center text-gold-light text-sm opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                    →
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-gold/90 text-ink text-[0.6rem] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Read Guide
                  </div>

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[0.62rem] tracking-[0.18em] uppercase text-gold-light mb-1">
                      {dest.tag}
                    </p>
                    <h3 className={`font-serif font-normal text-white leading-tight mb-1 ${i === 0 ? "text-[2.1rem]" : "text-[1.5rem]"}`}>
                      {dest.name}
                    </h3>
                    <p className="text-[0.78rem] text-white/62 font-light">
                      {dest.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </AnimatedSection>

        {/* More destinations row */}
        <AnimatedSection delay={200} className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Goa", tag: "Beach & Coast", href: "/blog/goa-3-days", img: "https://images.unsplash.com/photo-1587922546307-776227941871?w=400&q=80" },
            { name: "Varanasi", tag: "Oldest Living City", href: "/blog/varanasi-3-days", img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80" },
            { name: "More Blogs", tag: "All Guides", href: "/blog", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&q=80" },
            { name: "Plan My Trip", tag: "Free Service", href: "/contact", img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&q=80" },
          ].map((item) => (
            <Link key={item.name} href={item.href}
              className="group relative rounded-xl overflow-hidden h-28 block">
              <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-[0.55rem] tracking-[0.15em] uppercase text-gold-light mb-0.5">{item.tag}</p>
                <p className="font-serif text-white text-sm font-light">{item.name}</p>
              </div>
            </Link>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
