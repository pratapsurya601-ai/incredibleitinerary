"use client";
import { useState, useEffect } from "react";

interface GalleryPhoto {
  url: string;
  alt: string;
  photographer: string;
  pexelsUrl: string;
}

interface GallerySpot {
  name: string;
  query: string;
  desc: string;
  fallback?: string;
}

interface DestinationGalleryProps {
  title: string;
  subtitle?: string;
  spots: GallerySpot[];
}

/** Build fallback photos synchronously from spots so the gallery renders instantly */
function buildInitialPhotos(spots: GallerySpot[]): Record<string, GalleryPhoto> {
  const result: Record<string, GalleryPhoto> = {};
  spots.forEach((spot) => {
    if (spot.fallback) {
      result[spot.name] = { url: spot.fallback, alt: spot.name, photographer: "", pexelsUrl: "" };
    }
  });
  return result;
}

export default function DestinationGallery({ title, subtitle, spots }: DestinationGalleryProps) {
  // Initialize with fallbacks synchronously — gallery renders on first paint, no spinner
  const [photos, setPhotos] = useState<Record<string, GalleryPhoto>>(() => buildInitialPhotos(spots));
  const [activeIdx, setActiveIdx] = useState(0);

  // Background-upgrade: try to fetch Pexels photos after initial render
  useEffect(() => {
    let cancelled = false;
    const upgradeWithPexels = async () => {
      await Promise.allSettled(
        spots.map(async (spot) => {
          try {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 6000);
            const res = await fetch(`/api/image?q=${encodeURIComponent(spot.query)}`, {
              signal: controller.signal,
            });
            clearTimeout(timeout);
            if (!res.ok || cancelled) return;
            const data = await res.json();
            if (data.url && !cancelled) {
              setPhotos((prev) => ({
                ...prev,
                [spot.name]: {
                  url: data.url,
                  alt: data.alt || spot.name,
                  photographer: data.photographer || "",
                  pexelsUrl: data.pexels_url || "",
                },
              }));
            }
          } catch {
            // Keep fallback — already shown
          }
        })
      );
    };
    upgradeWithPexels();
    return () => { cancelled = true; };
  }, [spots]);

  const activeSpot = spots[activeIdx];
  const activePhoto = photos[activeSpot?.name];

  // Don't render if no spots have images at all
  if (!activeSpot) return null;

  return (
    <section className="mb-14">
      {/* Section header */}
      <div className="mb-6">
        <h2 className="font-serif text-[1.9rem] font-light text-ink mb-1">{title}</h2>
        {subtitle && <p className="text-sm text-muted font-light">{subtitle}</p>}
      </div>

      {/* Main featured photo */}
      <div className="rounded-2xl overflow-hidden shadow-md mb-4 bg-parchment">
        <div className="relative h-72 md:h-[400px] bg-parchment-2">
          {activePhoto ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activePhoto.url}
                alt={activePhoto.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/70 to-transparent p-5">
                <p className="font-serif text-xl font-light text-white">{activeSpot.name}</p>
                <p className="text-xs text-white/65 font-light mt-1">{activeSpot.desc}</p>
              </div>
              {/* Attribution */}
              {activePhoto.photographer && (
                <a
                  href={activePhoto.pexelsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 text-[0.55rem] text-white/50 bg-black/25 px-2 py-1 rounded-full hover:text-white/80 transition-colors"
                >
                  📷 {activePhoto.photographer} · Pexels
                </a>
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-parchment-2">
              <div className="text-center">
                <p className="text-3xl mb-2">📸</p>
                <p className="text-sm text-muted font-light">{activeSpot.name}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {spots.map((spot, i) => {
          const photo = photos[spot.name];
          const isActive = i === activeIdx;
          return (
            <button
              key={spot.name}
              onClick={() => setActiveIdx(i)}
              className={`flex-shrink-0 relative rounded-xl overflow-hidden transition-all duration-200 ${
                isActive ? "ring-2 ring-gold shadow-md scale-[1.02]" : "opacity-70 hover:opacity-100"
              }`}
              style={{ width: "120px", height: "80px" }}
            >
              {photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photo.url} alt={spot.name} className="w-full h-full object-cover" loading="lazy" />
              ) : (
                <div className="w-full h-full bg-parchment-2 flex items-center justify-center">
                  <span className="text-lg">📍</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent flex items-end p-1.5">
                <p className="text-xs text-white font-medium leading-tight">{spot.name}</p>
              </div>
              {isActive && <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-gold" />}
            </button>
          );
        })}
      </div>

      {/* Description strip */}
      <div className="mt-3 flex items-start gap-3 p-4 bg-parchment rounded-xl border border-parchment-2">
        <span className="text-xl flex-shrink-0">📍</span>
        <div>
          <p className="font-medium text-sm text-stone-900">{activeSpot.name}</p>
          <p className="text-xs text-muted font-light mt-0.5 leading-relaxed">{activeSpot.desc}</p>
        </div>
      </div>
    </section>
  );
}
