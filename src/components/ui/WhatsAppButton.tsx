"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  // Lift above cookie banner on mobile until consent is given
  const [aboveBanner, setAboveBanner] = useState(false);

  useEffect(() => {
    try {
      setAboveBanner(!localStorage.getItem("cookie_consent"));
    } catch { /* noop */ }
  }, []);

  return (
    <Link
      href="/contact"
      className={`md:hidden fixed right-4 z-[300] flex items-center gap-2 bg-gold text-ink px-4 py-2.5 rounded-full shadow-lg hover:bg-gold-dark hover:text-white transition-all duration-300 text-xs font-medium ${
        aboveBanner ? "bottom-[60px]" : "bottom-6"
      }`}
      aria-label="Plan my trip"
    >
      ✦ Plan My Trip
    </Link>
  );
}
