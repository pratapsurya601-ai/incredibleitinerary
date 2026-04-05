"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "@/components/ui/DarkModeToggle";

interface NavbarProps {
  onPlanTrip: () => void;
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

export default function Navbar({ onPlanTrip }: NavbarProps) {
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

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
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
          className={`md:hidden flex flex-col gap-[5px] p-2.5 rounded-lg transition-colors duration-300 ${
            !scrolled && !menuOpen ? "bg-black/40 backdrop-blur-sm" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
                scrolled ? "bg-ink" : "bg-white"
              } ${menuOpen && i === 0 ? "rotate-45 translate-y-[7px]" : ""} ${
                menuOpen && i === 1 ? "opacity-0 scale-x-0" : ""
              } ${menuOpen && i === 2 ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          ))}
        </button>

        {/* Mobile menu */}
        <div
          className={`absolute top-[72px] left-0 right-0 bg-cream/98 backdrop-blur-md shadow-lg border-t border-parchment-2 md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col p-6 gap-4 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm tracking-[0.12em] uppercase text-muted hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Tools section in mobile */}
            <li>
              <button
                onClick={() => setMobileToolsOpen((o) => !o)}
                className="flex items-center gap-1.5 text-sm tracking-[0.12em] uppercase text-muted hover:text-gold transition-colors w-full text-left"
              >
                Tools
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="currentColor"
                  className={`transition-transform duration-200 ${mobileToolsOpen ? "rotate-180" : ""}`}
                >
                  <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileToolsOpen && (
                <ul className="mt-2 pl-4 flex flex-col gap-3 list-none">
                  {TOOL_LINKS.map((t) => (
                    <li key={t.href}>
                      <Link
                        href={t.href}
                        onClick={() => { setMenuOpen(false); setMobileToolsOpen(false); }}
                        className="text-xs tracking-[0.12em] uppercase text-muted hover:text-gold transition-colors"
                      >
                        {t.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

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
