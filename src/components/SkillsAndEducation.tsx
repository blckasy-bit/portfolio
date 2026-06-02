import { education, services } from "@/data/portfolio";

function StarRating({ count }: { count: number }) {
  return (
    <span className="text-xs tracking-widest text-[#888]">
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </span>
  );
}

export default function SkillsAndEducation() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <div className="grid gap-16 md:grid-cols-2 md:gap-20">
        <div>
          <h2 className="mb-8 font-sans text-2xl font-bold tracking-tight md:text-3xl">
            Skills
          </h2>
          <ul className="space-y-5">
            {services.map((skill) => (
              <li key={skill.title} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center text-xl">
                  {skill.icon}
                </span>
                <div className="flex flex-1 items-center justify-between gap-4">
                  <span className="font-sans text-sm font-medium md:text-base">
                    {skill.title}
                  </span>
                  <StarRating count={skill.stars} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-8 font-sans text-2xl font-bold tracking-tight md:text-3xl">
            Education
          </h2>
          <ul className="space-y-6">
            {education.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center text-xl">
                  {item.icon}
                </span>
                <div>
                  <p className="font-sans text-sm font-medium md:text-base">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-[#666]">{item.school}</p>
                  <p className="mt-0.5 text-xs text-[#999]">{item.period}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
