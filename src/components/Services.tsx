import { services } from "@/data/portfolio";

function StarRating({ count }: { count: number }) {
  return (
    <span className="text-xs tracking-widest text-[#888]">
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </span>
  );
}

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className={`flex aspect-square flex-col justify-between rounded-3xl p-6 ${service.bg}`}
          >
            <span className="text-2xl">{service.icon}</span>
            <div>
              <h3 className="font-sans text-sm font-semibold md:text-base">
                {service.title}
              </h3>
              <StarRating count={service.stars} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
