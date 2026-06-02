import Link from "next/link";
import { profile } from "@/data/portfolio";
import HeroGallery from "@/components/HeroGallery";

const subNav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
];

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-between px-6 pt-6 pb-12 md:px-10 md:pt-10 md:pb-16">
      <div className="flex flex-1 flex-col justify-center">
        <div className="mb-8 md:mb-12">
          <h1 className="font-sans text-[clamp(3.5rem,14vw,9rem)] font-bold leading-[0.88] tracking-[-0.04em]">
            Saeyoun
            <br />
            Park
          </h1>
          <p className="mt-5 max-w-md font-sans text-sm text-[#666] md:mt-6 md:text-base">
            {profile.title}
            <span className="mx-2 text-[#ccc]">·</span>
            {profile.contact.location}
          </p>
        </div>
      </div>

      <div className="mt-auto">
        <HeroGallery />

        <nav className="mt-8 flex gap-6 md:mt-10">
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
      </div>
    </section>
  );
}
