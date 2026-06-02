import Image from "next/image";
import Link from "next/link";
import { heroImages, profile } from "@/data/portfolio";

const subNav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-4 pb-16 md:px-10 md:pt-8">
      <div className="flex justify-center gap-3 overflow-x-auto pb-8 md:gap-4">
        {heroImages.map((img, i) => (
          <div
            key={img.alt}
            className="relative h-48 w-20 shrink-0 overflow-hidden rounded-full md:h-72 md:w-28"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="112px"
              priority={i < 2}
            />
          </div>
        ))}
      </div>

      <p className="mx-auto max-w-3xl text-center text-2xl leading-snug md:text-4xl md:leading-tight">
        {profile.tagline}
      </p>

      <nav className="mt-8 flex justify-center gap-6">
        {subNav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-sans text-xs text-[#666] underline-offset-4 transition hover:text-black hover:underline md:text-sm"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
