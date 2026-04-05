import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { blogPosts } from "@/data/blog";

const REGIONS = {
  "Rajasthan": [
    { label: "Rajasthan 7 Days", href: "/blog/rajasthan-7-days" },
    { label: "Jaipur", href: "/blog/jaipur-3-days" },
    { label: "Jodhpur", href: "/blog/jodhpur-3-days" },
    { label: "Jaisalmer", href: "/blog/jaisalmer-3-days" },
    { label: "Udaipur", href: "/blog/udaipur-3-days" },
    { label: "Pushkar", href: "/blog/pushkar-2-days" },
    { label: "Mount Abu", href: "/blog/mount-abu-2-days" },
    { label: "Ranthambore", href: "/blog/ranthambore-3-days" },
  ],
  "Himachal": [
    { label: "Manali", href: "/blog/manali-5-days" },
    { label: "Shimla", href: "/blog/shimla-3-days" },
    { label: "Dharamshala", href: "/blog/dharamshala-3-days" },
    { label: "Kasol", href: "/blog/kasol-3-days" },
    { label: "Spiti Valley", href: "/blog/spiti-valley-7-days" },
    { label: "Jibhi", href: "/blog/jibhi-tirthan-valley-3-days" },
  ],
  "Uttarakhand": [
    { label: "Rishikesh", href: "/blog/rishikesh-haridwar-3-days" },
    { label: "Mussoorie", href: "/blog/mussoorie-3-days" },
    { label: "Nainital", href: "/blog/nainital-3-days" },
    { label: "Auli", href: "/blog/auli-3-days" },
    { label: "Jim Corbett", href: "/blog/jim-corbett-3-days" },
    { label: "Valley of Flowers", href: "/blog/valley-of-flowers-4-days" },
  ],
  "South India": [
    { label: "Kerala 5 Days", href: "/blog/kerala-5-days" },
    { label: "Goa", href: "/blog/goa-3-days" },
    { label: "Ooty", href: "/blog/ooty-3-days" },
    { label: "Coorg", href: "/blog/coorg-3-days" },
    { label: "Hampi", href: "/blog/hampi-3-days" },
    { label: "Mysore", href: "/blog/mysore-3-days" },
    { label: "Gokarna", href: "/blog/gokarna-3-days" },
    { label: "Pondicherry", href: "/blog/pondicherry-3-days" },
    { label: "Kodaikanal", href: "/blog/kodaikanal-3-days" },
    { label: "Madurai", href: "/blog/madurai-2-days" },
    { label: "Rameswaram", href: "/blog/rameswaram-2-days" },
    { label: "Kanyakumari", href: "/blog/kanyakumari-2-days" },
  ],
  "Northeast": [
    { label: "Meghalaya", href: "/blog/meghalaya-5-days" },
    { label: "Sikkim", href: "/blog/sikkim-6-days" },
    { label: "Shillong", href: "/blog/shillong-3-days" },
    { label: "Tawang", href: "/blog/tawang-4-days" },
    { label: "Kaziranga", href: "/blog/kaziranga-3-days" },
    { label: "Majuli", href: "/blog/majuli-3-days" },
    { label: "Darjeeling", href: "/blog/darjeeling-4-days" },
    { label: "Sundarbans", href: "/blog/sundarbans-3-days" },
  ],
  "More": [
    { label: "Golden Triangle", href: "/blog/golden-triangle-7-days" },
    { label: "Kashmir", href: "/blog/kashmir-6-days" },
    { label: "Leh Ladakh", href: "/blog/leh-ladakh-7-days" },
    { label: "Varanasi", href: "/blog/varanasi-3-days" },
    { label: "Amritsar", href: "/blog/amritsar-2-days" },
    { label: "Agra", href: "/blog/agra-2-days" },
    { label: "Andaman", href: "/blog/andaman-5-days" },
    { label: "Hyderabad", href: "/blog/hyderabad-3-days" },
    { label: "Gujarat 7 Days", href: "/blog/gujarat-7-days" },
    { label: "Lonavala", href: "/blog/lonavala-2-days" },
    { label: "Vizag", href: "/blog/vizag-3-days" },
    { label: "Khajuraho", href: "/blog/khajuraho-2-days" },
    { label: "Orchha", href: "/blog/orchha-2-days" },
    { label: "Diu", href: "/blog/diu-2-days" },
    { label: "Dwarka", href: "/blog/dwarka-2-days" },
    { label: "Mahabaleshwar", href: "/blog/mahabaleshwar-2-days" },
  ],
};

const SOCIAL_LINKS = [
  { icon: "📷", href: SITE_CONFIG.instagram, label: "Instagram" },
  { icon: "f",  href: SITE_CONFIG.facebook,  label: "Facebook" },
  { icon: "▶",  href: SITE_CONFIG.youtube,   label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0e0905] text-white/45 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto">

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
                { label: "Contact", href: "/contact" },
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
              ].map((item) => (
                <li key={item.label}><Link href={item.href} className="text-sm text-white/55 hover:text-gold transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Destination mega-menu */}
        <div className="border-t border-white/[0.06] pt-10 mb-10">
          <p className="text-xs tracking-[0.22em] uppercase text-gold mb-6 text-center">
            {blogPosts.length}+ Free Destination Guides — 50+ Countries
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {Object.entries(REGIONS).map(([region, links]) => (
              <div key={region}>
                <p className="text-xs tracking-[0.15em] uppercase text-white/55 mb-2.5 font-medium">
                  {region}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {links.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-xs text-white/65 hover:text-gold transition-colors leading-relaxed">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
