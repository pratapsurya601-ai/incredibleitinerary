"use client";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const suggestedDestinations = [
  { label: "Goa 3 Days", href: "/blog/goa-3-days" },
  { label: "Kashmir 6 Days", href: "/blog/kashmir-6-days" },
  { label: "Rajasthan 7 Days", href: "/blog/rajasthan-7-days" },
  { label: "Kerala 5 Days", href: "/blog/kerala-5-days" },
];

export default function NotFound() {
  return (
    <>
      <Navbar onPlanTrip={() => {}} />

      <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 text-center pt-[72px]">
        <div>
          <p className="font-serif text-[6rem] font-light text-gold leading-none mb-4">
            404
          </p>
          <h1 className="font-serif text-3xl font-light text-ink mb-3">
            Page Not Found
          </h1>
          <p className="text-sm text-muted font-light mb-8 max-w-sm mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist. Maybe it was
            moved, or you mistyped the URL.
          </p>
          <div className="flex gap-3 justify-center flex-wrap mb-14">
            <Link href="/" className="btn-gold inline-flex">
              Back to Home &rarr;
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-parchment-2 text-muted text-sm rounded-[1px] hover:border-gold hover:text-gold transition-all"
            >
              Browse Blog
            </Link>
          </div>

          {/* Suggested Destinations */}
          <div className="max-w-md mx-auto">
            <span className="section-label">Popular Itineraries</span>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {suggestedDestinations.map((dest) => (
                <Link
                  key={dest.href}
                  href={dest.href}
                  className="block bg-parchment border border-parchment-2 rounded-[2px] px-5 py-4 text-sm text-ink font-light hover:border-gold hover:text-gold transition-all"
                >
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
