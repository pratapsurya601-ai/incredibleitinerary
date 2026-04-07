import { MapPin, Camera, Calendar, ShieldCheck } from "lucide-react";
import { GUIDES_DISPLAY } from "@/lib/siteStats";

const TRUST_ITEMS = [
  { icon: MapPin,       text: `${GUIDES_DISPLAY} destination guides` },
  { icon: Camera,       text: "All written from real trips" },
  { icon: Calendar,     text: "Updated for 2026" },
  { icon: ShieldCheck,  text: "No sponsored content" },
];

export default function AboveFoldTrustBar() {
  return (
    <div className="bg-white border-y border-parchment-2 py-4 px-6">
      <div className="max-w-[900px] mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5">
        {TRUST_ITEMS.map((item) => (
          <div key={item.text} className="flex items-center gap-2">
            <item.icon size={13} className="text-teal flex-shrink-0" strokeWidth={2} />
            <span className="text-xs text-muted font-light tracking-wide whitespace-nowrap">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
