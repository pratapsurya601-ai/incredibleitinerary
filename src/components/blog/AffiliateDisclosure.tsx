import Link from "next/link";
import { Info } from "lucide-react";

export default function AffiliateDisclosure() {
  return (
    <div className="flex items-start gap-2.5 bg-parchment border border-parchment-2 rounded-lg px-4 py-3 my-6 text-left">
      <Info size={14} className="text-muted flex-shrink-0 mt-0.5" strokeWidth={2} />
      <p className="text-[0.72rem] text-muted font-light leading-relaxed">
        <span className="font-medium text-ink/70">Disclosure:</span> Some links on this page are affiliate links — if you book through them, we earn a small commission at no extra cost to you. This helps us keep all guides free.{" "}
        <Link href="/disclosure" className="text-gold hover:underline">
          Read our full affiliate policy →
        </Link>
      </p>
    </div>
  );
}
