import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

const footerLinks = {
  destinations: [
    { label: "Royal Rajasthan",   href: "/blog/rajasthan-7-days" },
    { label: "Golden Triangle",   href: "/blog/golden-triangle-7-days" },
    { label: "Kerala Backwaters", href: "/blog/kerala-5-days" },
    { label: "Himalayan Escape",  href: "/#destinations" },
    { label: "Varanasi & Ganga",  href: "/#packages" },
    { label: "Goa & Beaches",     href: "/blog/goa-3-days" },
  ],
  services: [
    { label: "Custom Itineraries",   href: "/contact" },
    { label: "Travel Guides",        href: "/blog" },
    { label: "Budget Planning",      href: "/contact" },
    { label: "Cultural Experiences", href: "/#services" },
    { label: "Group Travel",         href: "/contact" },
    { label: "Honeymoon Trips",      href: "/contact" },
  ],
  company: [
    { label: "About Us",      href: "/about" },
    { label: "How It Works",  href: "/#how-it-works" },
    { label: "Testimonials",  href: "/#testimonials" },
    { label: "Travel Blog",   href: "/blog" },
    { label: "PDF Shop",      href: "/shop" },
    { label: "Contact Us",    href: "/contact" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-light text-white mb-2">
              Incredible<span className="text-gold">Itinerary</span>
            </p>
            <p className="text-sm font-light leading-7 max-w-[240px] mb-5">
              Bespoke travel planning for India&apos;s most iconic and hidden
              destinations. Crafted for curious, discerning travellers.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/12 flex items-center justify-center text-sm text-white/50 hover:border-gold hover:text-gold transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <p className="text-[0.68rem] tracking-[0.18em] uppercase text-white/65 mb-4">
              Destinations
            </p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.destinations.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/38 hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-[0.68rem] tracking-[0.18em] uppercase text-white/65 mb-4">
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/38 hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[0.68rem] tracking-[0.18em] uppercase text-white/65 mb-4">
              Company
            </p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/38 hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs">
            © 2026 IncredibleItinerary.com — All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Use",   href: "/terms" },
              { label: "Cookie Policy",  href: "/cookies" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="text-xs text-white/30 hover:text-gold transition-colors duration-200">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
