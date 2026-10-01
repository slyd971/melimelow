"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Artwork } from "@/lib/gallery";

type ArtworkSliderProps = {
  artworks: Artwork[];
  ariaLabel: string;
  prevLabel: string;
  nextLabel: string;
  slideLabel: (index: number, total: number) => string;
  slideClassName?: string;
  fit?: "cover" | "contain";
  aspectClassName?: string;
  sizes?: string;
};

export function ArtworkSlider({
  artworks,
  ariaLabel,
  prevLabel,
  nextLabel,
  slideLabel,
  slideClassName = "basis-[82%] sm:basis-[46%] lg:basis-[31%]",
  fit = "cover",
  aspectClassName = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 82vw",
}: ArtworkSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft < maxScroll - 4);

    const slides = Array.from(track.children) as HTMLElement[];
    const trackLeft = track.getBoundingClientRect().left;
    let closest = 0;
    let closestDistance = Number.POSITIVE_INFINITY;
    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.getBoundingClientRect().left - trackLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });
    setActiveIndex(track.scrollLeft >= maxScroll - 4 ? slides.length - 1 : closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateState();
    track.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      track.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [updateState]);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const step = (direction: 1 | -1) => {
    const track = trackRef.current;
    const slide = track?.children[0] as HTMLElement | undefined;
    if (!track || !slide) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (slide.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      className="relative"
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") step(1);
        if (event.key === "ArrowLeft") step(-1);
      }}
    >
      <div
        ref={trackRef}
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 outline-none [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:ring-1 focus-visible:ring-[#18c8d2] [&::-webkit-scrollbar]:hidden"
      >
        {artworks.map((artwork, index) => (
          <article
            key={artwork.title}
            role="group"
            aria-roledescription="slide"
            aria-label={slideLabel(index, artworks.length)}
            className={`group shrink-0 snap-start overflow-hidden border border-white/10 bg-white/[0.035] ${slideClassName}`}
          >
            <div className={`relative overflow-hidden bg-black/30 ${aspectClassName}`}>
              <Image
                src={artwork.image}
                alt={artwork.alt}
                fill
                sizes={sizes}
                className={`${fit === "contain" ? "object-contain" : "object-cover"} transition duration-700 group-hover:scale-105`}
              />
            </div>
            <div className="border-t border-white/10 p-4">
              <h3 className="display-title text-2xl uppercase text-white">
                {artwork.title}
              </h3>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#cfc3bb]">
                {artwork.dimensions}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {artworks.map((artwork, index) => (
            <button
              key={artwork.title}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={slideLabel(index, artworks.length)}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-[3px] transition-all duration-300 ${
                activeIndex === index ? "w-8 bg-[#f04aa6]" : "w-4 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            disabled={!canPrev}
            aria-label={prevLabel}
            className="inline-flex size-10 items-center justify-center border border-white/15 text-white transition hover:border-[#18c8d2] hover:text-[#18c8d2] disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={!canNext}
            aria-label={nextLabel}
            className="inline-flex size-10 items-center justify-center border border-white/15 text-white transition hover:border-[#18c8d2] hover:text-[#18c8d2] disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
