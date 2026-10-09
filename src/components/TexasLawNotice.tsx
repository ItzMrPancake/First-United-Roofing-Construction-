import React from 'react';
import { Scale, AlertCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TexasLawNotice: React.FC = () => {
  return (
    <section id="texas-law" className="py-12 sm:py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-red-600 tracking-wider uppercase">
            <Scale className="w-3.5 h-3.5" />
            <span>Texas Consumer Protection</span>
            <span aria-hidden="true">·</span>
            <span>Texas HB 2102 Compliance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Texas Law on Roof Deductibles
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            First United Roofing operates with 100% legal integrity, protecting homeowners from illegal deductible schemes.
          </p>
        </div>

        {/* Legal Explainer Card - Compact */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 lg:p-7">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 space-y-1">
                  <span className="font-bold block">
                    Texas Business &amp; Commerce Code § 27.02 (HB 2102)
                  </span>
                  <p className="leading-relaxed">
                    “Texas law requires a person insured under a property insurance policy to pay any deductible applicable to a claim. It is a violation of Texas law for a contractor to knowingly allow or assist the insured person’s failure to pay the required deductible.”
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-slate-900">
                  What Texas Law Prohibits Contractors From Doing:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                  <div className="p-2 bg-white border border-slate-200 rounded-md font-medium">
                    <span className="text-red-600 font-bold mr-1.5">✕</span> Paying or absorbing deductible
                  </div>
                  <div className="p-2 bg-white border border-slate-200 rounded-md font-medium">
                    <span className="text-red-600 font-bold mr-1.5">✕</span> Waiving deductible in contracts
                  </div>
                  <div className="p-2 bg-white border border-slate-200 rounded-md font-medium">
                    <span className="text-red-600 font-bold mr-1.5">✕</span> Fabricated advertising rebates
                  </div>
                  <div className="p-2 bg-white border border-slate-200 rounded-md font-medium">
                    <span className="text-red-600 font-bold mr-1.5">✕</span> Shady sign credits
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed">
                Class B misdemeanor offense carrying up to 180 days in county jail and fines up to $2,000 for violators.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-lg p-4 sm:p-5 shadow-2xs space-y-3">
              <div className="flex items-center gap-1.5 text-blue-900 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                How We Protect You
              </div>

              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Audited Invoicing:</strong> Itemized estimates matching insurer scopes.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Photos:</strong> Drone and roof evidence for maximum legitimate coverage.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Legal Financing:</strong> Upgrade financing allows paying deductibles comfortably.</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                Questions? Call our claims team at{' '}
                <a href="tel:8177698660" className="font-bold text-blue-900 underline">
                  817-769-8660
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
