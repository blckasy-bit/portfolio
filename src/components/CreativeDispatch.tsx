import Image from "next/image";
import { education } from "@/data/portfolio";

export default function CreativeDispatch() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <h2 className="mb-10 font-sans text-3xl font-bold tracking-tight md:text-4xl">
        Education &amp; Learning
      </h2>

      <div className="grid gap-8 md:grid-cols-3 md:gap-6">
        {education.map((item) => (
          <article key={item.title} className="group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="mt-4 font-sans text-sm font-medium leading-snug md:text-base">
              {item.title}
            </h3>
            <p className="mt-1 text-xs text-[#888]">{item.school}</p>
            <p className="mt-1 text-xs text-[#aaa]">{item.period}</p>
            <span className="mt-3 inline-block font-sans text-xs underline underline-offset-4 transition hover:text-[#666]">
              Read more
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
