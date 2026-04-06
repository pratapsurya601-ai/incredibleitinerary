import type { Metadata } from "next";
import { Suspense } from "react";
import ShopSuccessClient from "./ShopSuccessClient";

export const metadata: Metadata = {
  title: "Payment Successful — IncredibleItinerary",
  description: "Your PDF download is ready. Thank you for your purchase.",
  robots: { index: false, follow: false },
};

export default function ShopSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-cream flex items-center justify-center">
          <div className="animate-spin w-10 h-10 border-2 border-gold border-t-transparent rounded-full" />
        </div>
      }
    >
      <ShopSuccessClient />
    </Suspense>
  );
}
