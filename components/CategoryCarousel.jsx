"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CategoryCarousel({ items }) {
  const wrapRef = useRef(null);
  const [inView, setInView] = useState(false);
  const autoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // autoplay when carousel is in view and not paused
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || !inView || isPaused) return;
    const tick = () => {
      const card = el.querySelector("[data-card]");
      const w = card ? card.offsetWidth : 320;

      // temporarily disable scroll-snap during automated scroll to avoid snap-back
      const prevSnap = el.style.scrollSnapType;
      el.style.scrollSnapType = 'none';

      // calculate next position
      const next = el.scrollLeft + w;
      const max = el.scrollWidth - el.clientWidth;

      if (next > max - 4) {
        // If we're at/near the end, jump to start instantly (no smooth snap) then let next interval scroll
        el.scrollTo({ left: 0, behavior: 'auto' });
      } else {
        el.scrollTo({ left: next, behavior: 'smooth' });
      }

      // restore scroll-snap after transition
      setTimeout(() => {
        el.style.scrollSnapType = prevSnap || '';
      }, 600);
    };

    autoRef.current = setInterval(tick, 3500);
    return () => clearInterval(autoRef.current);
  }, [inView, isPaused]);

  const scrollByCard = (dir) => {
    const el = wrapRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const w = card ? card.offsetWidth : 320;
    el.scrollBy({ left: dir === "next" ? w : -w, behavior: "smooth" });
  };

  return (
    <section aria-label="Xidmət kateqoriyaları" className="mt-10">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-2xl font-semibold">Xidmət Kateqoriyaları</h2>
        <div className="hidden md:flex gap-2">
          <button
            aria-label="Əvvələ"
            onClick={() => scrollByCard("prev")}
            className="px-3 py-2 rounded-lg border hover:bg-gray-50"
          >
            ←
          </button>
          <button
            aria-label="Sonrakı"
            onClick={() => scrollByCard("next")}
            className="px-3 py-2 rounded-lg border hover:bg-gray-50"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={wrapRef}
        className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollBehavior: "smooth" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {items.map((it) => (
          <a
            key={it.href}
            href={it.href}
            data-card
            className="snap-start shrink-0 w-[85%] sm:w-[55%] md:w-[33%] lg:w-[25%]"
            aria-label={it.title}
          >
            <div className="rounded-xl overflow-hidden border bg-white hover:shadow-lg transition">
              <div className="relative aspect-[4/3]">
                {inView && (
                  <Image
                    src={it.img}
                    alt={it.alt}
                    fill
                    sizes="(max-width:768px) 85vw, (max-width:1024px) 55vw, 25vw"
                    loading="lazy"
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{it.title}</h3>
                <p className="text-sm text-gray-600">Daha ətraflı →</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="flex md:hidden justify-center gap-3 mt-3">
        <button
          aria-label="Əvvələ"
          onClick={() => scrollByCard("prev")}
          className="px-3 py-2 rounded-lg border hover:bg-gray-50"
        >
          ←
        </button>
        <button
          aria-label="Sonrakı"
          onClick={() => scrollByCard("next")}
          className="px-3 py-2 rounded-lg border hover:bg-gray-50"
        >
          →
        </button>
      </div>
    </section>
  );
}


