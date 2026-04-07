"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const SUGGESTED = [
  { label: "Rajasthan 7 Days", href: "/blog/rajasthan-7-days", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&q=70" },
  { label: "Kashmir 6 Days", href: "/blog/kashmir-6-days", image: "https://images.unsplash.com/photo-1570804783228-ae5d52b07025?w=400&q=70" },
  { label: "Kerala 5 Days", href: "/blog/kerala-5-days", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=70" },
  { label: "Goa 3 Days", href: "/blog/goa-3-days", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=70" },
  { label: "Meghalaya 5 Days", href: "/blog/meghalaya-5-days", image: "https://images.unsplash.com/photo-1598394997709-a3d1d0f08e29?w=400&q=70" },
  { label: "Spiti Valley 7 Days", href: "/blog/spiti-valley-7-days", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=70" },
];

export default function NotFound() {
  return (
    <>
      <Navbar onPlanTrip={() => {}} />

      {/* Hero — Himalayas landscape */}
      <div className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=80"
          alt="Himalayan mountains — page not found"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,6,2,0.3) 0%, rgba(10,6,2,0.55) 60%, rgba(10,6,2,0.92) 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-6 text-center">
          <p className="font-serif text-[5rem] font-light text-gold leading-none mb-3">
            404
          </p>
          <h1 className="font-serif text-[clamp(1.6rem,4vw,2.6rem)] font-light text-white mb-3">
            Looks like you&apos;re off the map
          </h1>
          <p className="text-sm text-white/60 font-light max-w-[380px] leading-relaxed">
            This page doesn&apos;t exist — but here are some guides that do.
          </p>
        </div>
      </div>

      {/* Guide cards */}
      <div className="bg-cream py-14 px-6 md:px-12">
        <div className="max-w-[1040px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-10">
            {SUGGESTED.map((dest) => (
              <Link
                key={dest.href}
                href={dest.href}
                className="group block rounded-xl overflow-hidden border border-parchment-2 hover:border-gold hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white"
              >
                <div className="relative h-24 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dest.image}
                    alt={dest.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                </div>
                <div className="p-2.5">
                  <p className="text-[0.7rem] text-ink font-light leading-tight group-hover:text-gold transition-colors">
                    {dest.label}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/" className="btn-gold inline-flex">
              Back to homepage →
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-parchment-2 text-muted text-sm font-light rounded-[1px] hover:border-gold hover:text-gold transition-all"
            >
              Browse all {362}+ guides
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
