import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { blogPosts } from "@/data/blog";
import FooterNewsletter from "@/components/layout/FooterNewsletter";


const SOCIAL_LINKS = [
  { icon: "in", href: SITE_CONFIG.linkedin, label: "LinkedIn" },
  { icon: "𝐏", href: SITE_CONFIG.pinterest, label: "Pinterest" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0e0905] text-white/45 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto">

        {/* Newsletter strip */}
        <FooterNewsletter />

        {/* Top: Brand + Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-light text-white mb-2">
              Incredible<span className="text-gold">Itinerary</span>
            </p>
            <p className="text-sm font-light leading-7 max-w-[240px] mb-5">
              {blogPosts.length} free travel guides across India, Europe, Southeast Asia, Middle East, Americas, Africa &amp; Oceania. Real budgets. Real routes. No tourist traps.
            </p>
            <div className="flex gap-3 mb-4">
              {SOCIAL_LINKS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-11 h-11 rounded-full border border-white/12 flex items-center justify-center text-sm text-white/60 hover:border-gold hover:text-gold transition-all duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-white/65 mb-4">Plan</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Custom Itinerary (Free)", href: "/contact" },
                { label: "Destination Quiz", href: "/quiz" },
                { label: "Trip Cost Calculator", href: "/tools/trip-calculator" },
                { label: "Visa Checker", href: "/tools/visa-checker" },
                { label: "All Travel Guides", href: "/blog" },
                { label: "PDF Shop", href: "/shop" },
              ].map((item) => (
                <li key={item.label}><Link href={item.href} className="text-sm text-white/55 hover:text-gold transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-white/65 mb-4">Company</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
                { label: "Share Your Photos", href: "/contribute" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Use", href: "/terms" },
              ].map((item) => (
                <li key={item.label}><Link href={item.href} className="text-sm text-white/55 hover:text-gold transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-white/65 mb-4">Popular</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Rajasthan 7 Days", href: "/blog/rajasthan-7-days" },
                { label: "Kashmir 6 Days", href: "/blog/kashmir-6-days" },
                { label: "Goa 3 Days", href: "/blog/goa-3-days" },
                { label: "Kerala 5 Days", href: "/blog/kerala-5-days" },
                { label: "Meghalaya 5 Days", href: "/blog/meghalaya-5-days" },
                { label: "Golden Triangle", href: "/blog/golden-triangle-7-days" },
                { label: "Hampi 3-Day Guide", href: "/blog/hampi-3-days" },
                { label: "Wayanad 3-Day Guide", href: "/blog/wayanad-3-days" },
                { label: "Coorg 3-Day Guide", href: "/blog/coorg-3-days" },
                { label: "Rishikesh Guide", href: "/blog/rishikesh-haridwar-3-days" },
                { label: "Spiti Valley Guide", href: "/blog/spiti-valley-7-days" },
                { label: "Jibhi Valley Guide", href: "/blog/jibhi-tirthan-valley-3-days" },
              ].map((item) => (
                <li key={item.label}><Link href={item.href} className="text-sm text-white/55 hover:text-gold transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Destination browse strip */}
        <div className="border-t border-white/[0.06] pt-8 mb-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs tracking-[0.18em] uppercase text-gold">
              {blogPosts.length}+ Free Guides — India, Europe, Southeast Asia, Middle East &amp; More
            </p>
            <Link
              href="/blog"
              className="text-xs text-white/55 hover:text-gold border border-white/10 hover:border-gold/40 px-5 py-2 rounded-full transition-all duration-200 whitespace-nowrap"
            >
              Browse all guides →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs">
            &copy; 2026 IncredibleItinerary.com &mdash; All rights reserved.
          </p>
          <p className="text-xs text-white/45">
            Made with ✦ for Indian travellers
          </p>
        </div>
      </div>
    </footer>
  );
}
