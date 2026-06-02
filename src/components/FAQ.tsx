"use client";

import { useState } from "react";
import { faqs } from "@/data/portfolio";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <h2 className="font-sans text-3xl font-bold tracking-tight md:text-4xl">
          FAQ
        </h2>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-[#e8e8e8]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="font-sans text-sm font-medium md:text-base">
                    {faq.question}
                  </span>
                  <span className="ml-4 shrink-0 font-sans text-xl text-[#999]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-[#555]">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
