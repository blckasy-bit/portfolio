import Image from "next/image";
import { testimonials } from "@/data/portfolio";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <h2 className="mb-10 font-sans text-3xl font-bold tracking-tight md:text-4xl">
        Trusted by teams who want to stand out.
      </h2>

      <div className="flex flex-col gap-6">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="grid overflow-hidden rounded-3xl bg-[#f0f0f0] md:grid-cols-2"
          >
            <div className="relative aspect-square md:aspect-auto md:min-h-[280px]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <blockquote className="text-lg leading-relaxed md:text-xl">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="font-sans text-sm font-semibold">{item.name}</p>
                <p className="font-sans text-xs text-[#666]">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
