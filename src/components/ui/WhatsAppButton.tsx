"use client";
import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="/contact"
      className="md:hidden fixed bottom-6 right-4 z-[300] flex items-center gap-2 bg-gold text-ink px-4 py-2.5 rounded-full shadow-lg hover:bg-gold-dark hover:text-white transition-all duration-300 text-xs font-medium"
      aria-label="Plan my trip"
    >
      ✦ Plan My Trip
    </Link>
  );
}
