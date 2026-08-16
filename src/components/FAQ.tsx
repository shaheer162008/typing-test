"use client";

import { useState } from "react";
import { faqItems, ctaBadges } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-24 bg-white overflow-hidden" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <header className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-medium mb-6" role="status">
            {ctaBadges.faq}
          </div>
          <h2 id="faq-heading" className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-5 leading-tight">
            Level Up From <br /> The Blog
          </h2>
          <p className="text-[15px] md:text-[16px] text-gray-500 leading-relaxed">
            Simple, practical guides that turn practice into progress. Read one article, take a test, watch the number move.
          </p>
        </header>

        {/* FAQ Accordion List */}
        <dl className="flex flex-col gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#fcfcfc] rounded-2xl border border-gray-100/80 transition-all duration-200 overflow-hidden"
              >
                {/* Accordion Header Button */}
                <dt>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-5 px-6 md:px-8 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#126dfb] focus-visible:ring-offset-2"
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${index}`}
                    id={`faq-trigger-${index}`}
                  >
                    <span className="text-[16px] md:text-[17px] font-semibold text-gray-900">{item.question}</span>
                    <span
                      className="w-8 h-8 rounded-full bg-gray-100/80 flex items-center justify-center text-gray-600 font-bold text-lg flex-shrink-0 transition-transform"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </dt>

                {/* Accordion Content Body */}
                <dd
                  id={`faq-content-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  className={isOpen ? "block" : "hidden"}
                >
                  <div className="px-6 pb-6 md:px-8 pt-0 text-[15px] text-gray-500 leading-relaxed border-t border-gray-100/50 pt-4">
                    {item.answer}
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}