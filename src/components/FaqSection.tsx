import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { FAQS_DATA } from '../data/roofingData.ts';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-12 sm:py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
            <span aria-hidden="true">·</span>
            <span>Honest Answers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Everything you need to know about our No Mess Pledge, Texas deductible laws, and FORTIFIED standards.
          </p>
        </div>

        {/* Accordion List - Compact */}
        <div className="space-y-2.5">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-4 py-3 flex items-center justify-between gap-3 font-bold text-slate-900 text-xs sm:text-sm hover:text-blue-900 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div className="p-0.5 rounded-full text-slate-400 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-3.5 pt-0.5 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Strip */}
        <div className="mt-8 p-4 bg-white border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div>
            <span className="font-bold text-slate-900 block">Have a question regarding your roof or insurance?</span>
            <span className="text-slate-500">Our project managers are available 24/7.</span>
          </div>
          <a
            href="tel:8177698660"
            className="px-4 py-2 rounded-lg font-bold bg-blue-900 hover:bg-blue-800 text-white transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>Call 817-769-8660</span>
          </a>
        </div>

      </div>
    </section>
  );
};
