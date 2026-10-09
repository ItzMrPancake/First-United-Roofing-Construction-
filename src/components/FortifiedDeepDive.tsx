import React from 'react';
import { ShieldCheck, Wind, Droplets, Hammer, CheckCircle2, ArrowRight, DollarSign } from 'lucide-react';
import { APP_IMAGES } from '../assets/images/index.ts';

interface FortifiedDeepDiveProps {
  onOpenEstimate: () => void;
}

export const FortifiedDeepDive: React.FC<FortifiedDeepDiveProps> = ({ onOpenEstimate }) => {
  const pillars = [
    {
      icon: <Wind className="w-4 h-4 text-blue-400" />,
      title: 'Perimeter Strength',
      desc: 'Wider heavy-gauge metal drip edge and fully adhered starter strips lock roof perimeters tight against 130 mph uplift.'
    },
    {
      icon: <Hammer className="w-4 h-4 text-amber-400" />,
      title: 'Ring-Shank Nails',
      desc: 'Mandates ring-shank fasteners in a tight 6-inch pattern, nearly doubling roof deck resistance to severe storm winds.'
    },
    {
      icon: <Droplets className="w-4 h-4 text-cyan-400" />,
      title: 'Waterproofed Deck',
      desc: 'Continuous sealed secondary membrane seals all wood decking seams, keeping interior attics completely dry if shingles strip.'
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
      title: 'UL 2218 Class 4 Shingles',
      desc: 'IBHS tested to endure hail impacts up to 2 inches in diameter, preventing shingle puncture and granule loss.'
    }
  ];

  return (
    <section id="fortified" className="py-12 sm:py-14 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-red-400 tracking-wider uppercase">
            <span>IBHS FORTIFIED™ Certified</span>
            <span aria-hidden="true">·</span>
            <span>GAF Master Elite Fortified Warranty</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why a FORTIFIED™ Roof Makes Total $ense in DFW
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Engineered standards developed by the Insurance Institute for Business &amp; Home Safety (IBHS) to withstand severe Texas hail and windstorms.
          </p>
        </div>

        {/* Diagram & Benefits Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-10">
          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-slate-800 shadow-xl relative group">
            <img
              src={APP_IMAGES.fortified}
              alt="IBHS Fortified Roof Standard architectural engineering cutaway"
              className="w-full h-auto max-h-[380px] object-cover object-top"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 inset-x-0 bg-slate-950/90 p-3 text-[11px] text-slate-300">
              <span className="font-bold text-white block">
                Official IBHS FORTIFIED™ Cross-Section
              </span>
              Sealed decking seams, ring-shank nails, reinforced drip edges, and Class 4 impact shingles.
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <DollarSign className="w-3.5 h-3.5" />
                Insurance Savings Potential
              </div>
              <h3 className="text-lg font-bold text-white">
                Qualify for Texas Homeowner Premium Discounts
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Many Texas insurance carriers provide annual premium credits for verified FORTIFIED™ certificates.
              </p>
              <div className="text-xs text-slate-400 space-y-1.5 pt-1">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Partnered with Trinity Habitat for Humanity</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Independent 3rd-party certified documentation</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Resists straight-line winds and tornadoes up to EF-2</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenEstimate}
              className="w-full py-2.5 px-4 rounded-lg font-bold text-xs bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all flex items-center justify-center gap-1.5"
            >
              <span>Ask Us About FORTIFIED™ Certification</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 Pillars Grid - Compact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-slate-800/60 border border-slate-700/60 space-y-2"
            >
              <div className="p-2 rounded-md bg-slate-900 w-fit">
                {pillar.icon}
              </div>
              <h4 className="text-sm font-bold text-white">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
