import Image from "next/image";
import { profile } from "@/data/portfolio";

export default function Studio() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <h2 className="mb-10 max-w-4xl font-sans text-3xl font-bold leading-tight tracking-tight md:text-5xl">
        {profile.name.split(" ")[0]}® is a UX/UI designer focusing on both
        research and product strategy.
      </h2>

      <div className="relative aspect-video overflow-hidden rounded-3xl">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=675&fit=crop"
          alt="Design studio workspace"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
            <svg
              className="ml-1 h-6 w-6 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <p className="mt-8 max-w-3xl text-base leading-relaxed text-[#444] md:text-lg">
        {profile.bio}
      </p>
    </section>
  );
}
