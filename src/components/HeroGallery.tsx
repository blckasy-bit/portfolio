"use client";

import { useState } from "react";
import Image from "next/image";
import { heroImages } from "@/data/portfolio";

type ArchImageCardProps = {
  src: string;
  alt: string;
  index: number;
  activeIndex: number | null;
  onActivate: (index: number | null) => void;
};

function ArchImageCard({
  src,
  alt,
  index,
  activeIndex,
  onActivate,
}: ArchImageCardProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const isActive = activeIndex === index;
  const isDimmed = activeIndex !== null && !isActive;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 24;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
    onActivate(null);
  };

  const flexClass =
    activeIndex === null
      ? "flex-1"
      : isActive
        ? "flex-[3] md:flex-[3.5]"
        : "flex-[0.55] md:flex-[0.5]";

  return (
    <div
      className={`group relative min-w-0 cursor-pointer overflow-hidden rounded-t-[48px] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] sm:rounded-t-[64px] md:rounded-t-[100px] ${flexClass} ${
        isDimmed ? "opacity-70" : "opacity-100"
      }`}
      onMouseEnter={() => onActivate(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onFocus={() => onActivate(index)}
      onBlur={handleMouseLeave}
      tabIndex={0}
      role="button"
      aria-label={alt}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${isActive ? 1.08 : 1})`,
        }}
        sizes="(max-width: 768px) 20vw, 15vw"
        priority={index < 2}
      />
      <div
        className={`absolute inset-0 bg-black/0 transition-colors duration-500 ${
          isActive ? "bg-black/10" : "group-hover:bg-black/5"
        }`}
      />
    </div>
  );
}

export default function HeroGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex h-[240px] w-full gap-1 sm:h-[320px] sm:gap-1.5 md:h-[420px] md:gap-2 lg:h-[480px]">
      {heroImages.map((img, index) => (
        <ArchImageCard
          key={img.alt}
          src={img.src}
          alt={img.alt}
          index={index}
          activeIndex={activeIndex}
          onActivate={setActiveIndex}
        />
      ))}
    </div>
  );
}
