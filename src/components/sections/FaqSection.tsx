import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../../data';

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-20 bg-[#faf7f1]" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[13px] font-semibold text-[#8a6a2a] mb-2 tracking-wide">Questions fréquentes</p>
        <h2 id="faq-heading" className="text-3xl sm:text-4xl text-[#10243A] mb-8">
          Ce que nos clients demandent le plus
        </h2>
        <div className="divide-y divide-[#e4dccb] border-t border-b border-[#e4dccb]">
          {FAQ_DATA.map((item) => (
            <details key={item.question} className="group py-1">
              <summary className="flex cursor-pointer items-start justify-between gap-4 py-4 text-left text-[15px] font-semibold text-[#10243A]">
                <span>{item.question}</span>
                <ChevronDown className="w-4 h-4 mt-1 shrink-0 text-[#b08a3c] transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-5 pr-8 text-[15px] leading-relaxed text-[#5c6570]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
