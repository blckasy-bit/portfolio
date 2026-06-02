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
        <div className="mb-8 flex flex-col gap-8 md:mb-12 md:flex-row md:items-end md:justify-between md:gap-12">
          <div>
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

          <p className="max-w-xs text-sm leading-relaxed text-[#555] md:max-w-sm md:text-right md:text-[0.8125rem] md:leading-relaxed lg:max-w-md">
            {profile.tagline}
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
