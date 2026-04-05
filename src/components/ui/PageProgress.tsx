"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageProgress() {
  const pathname = usePathname();
  const [width, setWidth]     = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Reset
    setWidth(0);
    setOpacity(1);

    const t1 = setTimeout(() => setWidth(25), 30);
    const t2 = setTimeout(() => setWidth(55), 200);
    const t3 = setTimeout(() => setWidth(80), 500);
    const t4 = setTimeout(() => setWidth(100), 900);
    const t5 = setTimeout(() => setOpacity(0), 1150);
    const t6 = setTimeout(() => setWidth(0), 1500);

    return () => [t1, t2, t3, t4, t5, t6].forEach(clearTimeout);
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[9999] h-[2px] pointer-events-none"
      style={{ opacity }}
    >
      <div
        className="h-full bg-gold"
        style={{
          width: `${width}%`,
          transition:
            width === 0
              ? "none"
              : width === 100
              ? "width 200ms ease-in, box-shadow 200ms"
              : "width 400ms cubic-bezier(0.4,0,0.2,1)",
          boxShadow: width > 0 ? "0 0 8px rgba(201,169,110,0.6)" : "none",
        }}
      />
    </div>
  );
}
