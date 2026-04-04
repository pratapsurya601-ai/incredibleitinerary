"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import DarkModeToggle from "@/components/ui/DarkModeToggle";

interface NavbarProps {
  onPlanTrip: () => void;
}

export default function Navbar({ onPlanTrip }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/quiz",          label: "Find My Trip" },
    { href: "/#destinations", label: "Destinations" },
    { href: "/#packages",     label: "Itineraries" },
    { href: "/blog",          label: "Travel Guides" },
    { href: "/shop",          label: "Shop" },
    { href: "/about",         label: "About" },
    { href: "/contact",       label: "Contact" },
  ];

  return (
    <>
      {/* Skip to content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[999] focus:bg-gold focus:text-ink focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-medium">
        Skip to content
      </a>
      {/* Dark gradient at top — ensures navbar text is readable over any hero image */}
      {!scrolled && (
        <div className="fixed top-0 left-0 right-0 z-[199] h-28 bg-gradient-to-b from-ink/60 to-transparent pointer-events-none" />
      )}
      <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-[200] h-[72px] flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        scrolled
          ? "bg-cream/97 backdrop-blur-md shadow-[0_1px_0_rgba(22,16,8,0.07)]"
          : "bg-transparent"
      }`}
    >
      {/* Brand */}
      <Link href="/" className="flex flex-col leading-tight group">
        <span
          className={`font-serif text-2xl font-light tracking-wide transition-colors duration-300 ${
            scrolled ? "text-ink" : "text-white"
          }`}
        >
          Incredible<span className="text-gold">Itinerary</span>
        </span>
        <span
          className={`text-[0.58rem] tracking-[0.18em] uppercase transition-colors duration-300 ${
            scrolled ? "text-muted" : "text-white/70"
          }`}
        >
          Curated Journeys Across India
        </span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`text-[0.73rem] tracking-[0.13em] uppercase transition-colors duration-300 hover:text-gold ${
                scrolled ? "text-muted" : "text-white"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li><DarkModeToggle /></li>
        <li>
          <button
            onClick={onPlanTrip}
            className="bg-gold text-ink px-5 py-2.5 text-[0.73rem] tracking-[0.1em] uppercase font-medium rounded-[1px] transition-all duration-300 hover:bg-gold-dark hover:text-white hover:-translate-y-px"
          >
            Plan My Trip ↗
          </button>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`block w-6 h-px transition-all duration-300 ${
              scrolled ? "bg-ink" : "bg-white"
            } ${menuOpen && i === 0 ? "rotate-45 translate-y-2" : ""} ${
              menuOpen && i === 1 ? "opacity-0" : ""
            } ${menuOpen && i === 2 ? "-rotate-45 -translate-y-2" : ""}`}
          />
        ))}
      </button>

      {/* Mobile menu */}
      <div className={`absolute top-[72px] left-0 right-0 bg-cream/98 backdrop-blur-md shadow-lg border-t border-parchment-2 md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
          <ul className="flex flex-col p-6 gap-4 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm tracking-[0.12em] uppercase text-muted hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => { onPlanTrip(); setMenuOpen(false); }}
                className="w-full bg-gold text-ink py-3 text-sm tracking-[0.1em] uppercase font-medium rounded-[1px]"
              >
                Plan My Trip ↗
              </button>
            </li>
          </ul>
      </div>
    </nav>
    </>
  );
}
