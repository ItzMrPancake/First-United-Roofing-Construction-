import React from 'react';
import { NO_MESS_PLEDGE_ITEMS } from '../data/roofingData.ts';
import { Sparkles, ShieldCheck, Magnet, Trash2, Shovel, CheckCircle, ArrowRight } from 'lucide-react';

interface NoMessPledgeProps {
  onOpenEstimate: () => void;
}

export const NoMessPledge: React.FC<NoMessPledgeProps> = ({ onOpenEstimate }) => {
  const getIcon = (step: string) => {
    switch (step) {
      case '01':
        return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      case '02':
        return <Trash2 className="w-4 h-4 text-blue-600" />;
      case '03':
        return <Shovel className="w-4 h-4 text-amber-600" />;
      case '04':
        return <Magnet className="w-4 h-4 text-red-600" />;
      case '05':
        return <Sparkles className="w-4 h-4 text-purple-600" />;
      case '06':
        return <CheckCircle className="w-4 h-4 text-emerald-600" />;
      default:
        return <CheckCircle className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <section id="pledge" className="py-12 sm:py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-red-600 tracking-wider uppercase">
            <span>Property-First Standard</span>
            <span aria-hidden="true">·</span>
            <span>Zero Lawn Damage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            The New Roof, No Mess Pledge
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            A roof replacement should protect your home, not turn your flower beds and driveway into a hazardous debris field.
          </p>
        </div>

        {/* 6 Step Cards Grid - Compact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {NO_MESS_PLEDGE_ITEMS.map((item) => (
            <div
              key={item.step}
              className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-md bg-slate-50 border border-slate-100">
                    {getIcon(item.step)}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-400">
                    STEP {item.step}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] font-semibold text-blue-900">
                Guaranteed on every project
              </div>
            </div>
          ))}
        </div>

        {/* Call to action card */}
        <div className="mt-8 p-5 bg-blue-900 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="space-y-0.5 text-center sm:text-left">
            <h3 className="text-base font-bold">
              Ready for a clean, respectful roofing experience?
            </h3>
            <p className="text-xs text-blue-200">
              Your property is left spotless with our dual-pass magnetic nail sweeps.
            </p>
          </div>
          <button
            onClick={onOpenEstimate}
            className="px-4 py-2 font-bold text-xs bg-white text-blue-900 hover:bg-slate-100 rounded-lg shadow-2xs transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <span>Book Free Inspection</span>
            <ArrowRight className="w-3.5 h-3.5 text-red-600" />
          </button>
        </div>

      </div>
    </section>
  );
};
