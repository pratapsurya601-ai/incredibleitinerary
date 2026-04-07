"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "@/components/ui/DarkModeToggle";

interface NavbarProps {
  onPlanTrip?: () => void;
}

const TOOL_LINKS = [
  { href: "/tools/trip-calculator",    label: "Cost Calculator" },
  { href: "/tools/visa-checker",       label: "Visa Checker" },
  { href: "/tools/currency-converter", label: "Currency Converter" },
  { href: "/tools/packing-list",       label: "Packing List" },
];

const NAV_LINKS = [
  { href: "/blog",  label: "Destinations" },
  { href: "/quiz",  label: "Find My Trip" },
  { href: "/shop",  label: "Shop" },
  { href: "/about", label: "About" },
];

export default function Navbar({ onPlanTrip = () => {} }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [toolsOpen, setToolsOpen]     = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLLIElement>(null);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); setToolsOpen(false); }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body + html scroll lock when mobile menu is open (iOS Safari needs both)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") { setMenuOpen(false); setToolsOpen(false); }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Close tools dropdown on outside click
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const linkClass = (href: string) => {
    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
    return `nav-link text-[0.73rem] tracking-[0.13em] uppercase transition-colors duration-300 hover:text-gold ${
      isActive ? "active" : scrolled ? "text-muted" : "text-white"
    }`;
  };

  return (
    <>
      {/* Skip to content */}
      <a href="#main-content" className="sr-only">
        Skip to content
      </a>
      {/* Dark gradient — ensures navbar text is readable over hero images */}
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
            className={`text-xs tracking-[0.18em] uppercase transition-colors duration-300 ${
              scrolled ? "text-muted" : "text-white/70"
            }`}
          >
            Curated Travel Guides Worldwide
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7 list-none">
          {/* Destinations */}
          <li>
            <Link href="/blog" className={linkClass("/blog")}>
              Destinations
            </Link>
          </li>

          {/* Find My Trip */}
          <li>
            <Link href="/quiz" className={linkClass("/quiz")}>
              Find My Trip
            </Link>
          </li>

          {/* Tools dropdown */}
          <li ref={toolsRef} className="relative">
            <button
              onClick={() => setToolsOpen((o) => !o)}
              className={`flex items-center gap-1 text-[0.73rem] tracking-[0.13em] uppercase transition-colors duration-300 hover:text-gold ${
                scrolled ? "text-muted" : "text-white"
              }`}
              aria-expanded={toolsOpen}
              aria-haspopup="true"
            >
              Tools
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="currentColor"
                className={`transition-transform duration-200 ${toolsOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {toolsOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 rounded-xl overflow-hidden z-50"
                style={{
                  background: "rgba(253,250,244,0.98)",
                  border: "1px solid rgba(237,228,210,0.8)",
                  boxShadow: "0 8px 32px rgba(22,16,8,0.12)",
                }}
              >
                {TOOL_LINKS.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    onClick={() => setToolsOpen(false)}
                    className="block px-4 py-2.5 text-xs text-muted tracking-wide hover:text-gold hover:bg-parchment transition-colors"
                  >
                    {t.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {/* Shop */}
          <li>
            <Link href="/shop" className={linkClass("/shop")}>
              Shop
            </Link>
          </li>

          {/* About */}
          <li>
            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>
          </li>

          {/* Search icon */}
          <li>
            <Link
              href="/blog"
              aria-label="Search guides"
              className={`flex items-center transition-colors duration-300 hover:text-gold ${scrolled ? "text-muted" : "text-white"}`}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
            </Link>
          </li>

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
          className={`md:hidden flex flex-col gap-[5.5px] p-3 rounded-lg transition-all duration-300 ${
            scrolled || menuOpen
              ? "bg-muted/10 border border-muted/50"
              : "bg-white/10 border border-white/40"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-[22px] h-[2.5px] rounded-full transition-all duration-300 ${
                scrolled || menuOpen ? "bg-muted" : "bg-white/70"
              } ${menuOpen && i === 0 ? "rotate-45 translate-y-[8px]" : ""} ${
                menuOpen && i === 1 ? "opacity-0 scale-x-0" : ""
              } ${menuOpen && i === 2 ? "-rotate-45 -translate-y-[8px]" : ""}`}
            />
          ))}
        </button>

        {/* Mobile menu — full-screen solid overlay, above everything */}
        {menuOpen && (
          <div
            className="md:hidden fixed inset-0 z-[9999] flex flex-col"
            style={{ backgroundColor: "#16100A", minHeight: "100dvh" }}
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 flex-shrink-0">
              <Link href="/" onClick={() => setMenuOpen(false)} className="flex flex-col leading-tight">
                <span className="font-serif text-xl font-light text-white tracking-wide">
                  Incredible<span className="text-gold">Itinerary</span>
                </span>
                <span className="text-[0.6rem] tracking-[0.18em] uppercase text-white/50 mt-0.5">
                  Curated Travel Guides Worldwide
                </span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-white text-xl hover:border-gold hover:text-gold transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Nav links — scrollable */}
            <nav className="flex-1 overflow-y-auto px-6 py-8">
              <ul className="flex flex-col gap-0 list-none">
                {NAV_LINKS.map((link) => (
                  <li key={link.href} className="border-b border-white/8">
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-5 text-[1.05rem] tracking-[0.14em] uppercase text-white/90 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

                {/* Tools sub-section */}
                <li className="border-b border-white/8">
                  <button
                    onClick={() => setMobileToolsOpen((o) => !o)}
                    className="flex items-center justify-between w-full py-5 text-[1.05rem] tracking-[0.14em] uppercase text-white/90 hover:text-gold transition-colors"
                  >
                    Tools
                    <svg
                      width="12" height="12" viewBox="0 0 10 10" fill="currentColor"
                      className={`transition-transform duration-200 text-white/50 ${mobileToolsOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {mobileToolsOpen && (
                    <ul className="pb-4 pl-4 flex flex-col gap-4 list-none">
                      {TOOL_LINKS.map((t) => (
                        <li key={t.href}>
                          <Link
                            href={t.href}
                            onClick={() => { setMenuOpen(false); setMobileToolsOpen(false); }}
                            className="text-sm tracking-[0.1em] uppercase text-white/60 hover:text-gold transition-colors"
                          >
                            {t.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </nav>

            {/* Bottom CTA */}
            <div className="flex-shrink-0 px-6 pb-10 pt-4 border-t border-white/10">
              <button
                onClick={() => { onPlanTrip(); setMenuOpen(false); }}
                className="w-full bg-gold text-ink py-4 text-sm tracking-[0.12em] uppercase font-semibold rounded-lg hover:bg-gold-dark transition-colors"
              >
                Plan My Trip ↗
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
