"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ImageItem = {
  src: string;          
  alt?: string;          
};

interface ModelGridProps {
  modelName: string;
  images: ImageItem[];   
}

export default function ModelGrid({
  modelName = "JENNIFER STEWART",
  
  images = [],      
}: ModelGridProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollTo =
      direction === "left"
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;

    scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  };

  if (images.length === 0) {
    return (
      <section className="w-full bg-white text-black py-12 text-center">
        <p className="text-gray-500">No images provided for this model.</p>
      </section>
    );
  }

  return (
    <section className="w-full bg-white text-black py-12">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="relative group">
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((item, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] min-w-[calc(100%-1rem)] md:min-w-[calc(33.333%-0.75rem)] flex-shrink-0 snap-start overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt={item.alt || `${modelName} - Image ${index + 1}`}
                  fill
                  className={`object-cover transition-all duration-500 
                    ${index % 2 === 0 ? "group-hover:scale-105" : "group-hover:scale-110"}`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-4">
          <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase leading-tight">
            {modelName}
          </h3>
        </div>
      </div>
    </section>
  );
}