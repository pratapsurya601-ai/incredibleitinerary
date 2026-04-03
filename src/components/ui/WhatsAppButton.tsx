"use client";
import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-[300] flex items-center gap-2 bg-gold text-ink px-5 py-3 rounded-full shadow-lg hover:bg-gold-dark hover:text-white transition-all duration-300 hover:-translate-y-1 text-sm font-medium"
      aria-label="Plan my trip"
    >
      ✦ Plan My Trip
    </Link>
  );
}
