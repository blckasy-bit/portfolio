import Image from "next/image";
import { projects } from "@/data/portfolio";

export default function LatestProjects() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <h2 className="mb-10 font-sans text-3xl font-bold tracking-tight md:text-4xl">
        Latest Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        {projects.map((project) => (
          <article key={project.id} className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-sans text-xs text-[#999]">{project.id}</span>
              <h3 className="font-sans text-sm font-medium md:text-base">
                {project.title}
              </h3>
            </div>
            <p className="mt-1 text-xs text-[#888]">{project.company}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
