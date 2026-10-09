import React from 'react';
import { Phone, ShieldCheck, ArrowRight, CheckCircle2, Umbrella, AlertTriangle, Award } from 'lucide-react';

interface HeroProps {
  onOpenEstimate: () => void;
  onSelectServiceType: (serviceId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate, onSelectServiceType }) => {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Background Image with Crisp Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_roofing_tx_1791555795102.jpg"
          alt="North Texas Home with pristine architectural roof by First United Roofing"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/50" />
        <div className="absolute inset-0 bg-slate-950/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Main Proposition */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            
            {/* Trust Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300">
              <span className="text-red-400 font-bold uppercase tracking-wider">
                Dallas-Fort Worth Metro
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>14+ Years Experience</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-amber-300 font-medium">GAF Master Elite®</span>
            </div>

            {/* Headline - Refined, Clean, Not Giant */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white text-balance">
              Total Roof Protection Built for Texas Storms.
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-xl">
              From hail and wind damage repair to certified <strong className="text-white">IBHS FORTIFIED™ Roofs</strong> and commercial low-slope systems. Supervised on-site by dedicated project managers with our <strong className="text-white">New Roof, No Mess Pledge</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onOpenEstimate}
                className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-all flex items-center gap-1.5 group whitespace-nowrap"
              >
                <span>Book Free Inspection</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="tel:8177698660"
                className="px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>817-769-8660</span>
              </a>
            </div>

            {/* Neat Trust Checklist */}
            <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-slate-300 max-w-lg">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>GAF Master Elite® (Top 2%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>FORTIFIED™ Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Zero Mess &amp; Magnetic Sweep</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Texas HB 2102 Compliant</span>
              </div>
            </div>
          </div>

          {/* Quick Interactive Triage Card - Compact & Crisp */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl p-5 shadow-xl space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider">
                  Fast Assistance
                </span>
                <span className="text-[11px] text-slate-400">Response in &lt;15m</span>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-white">
                How can we help your property?
              </h2>

              <div className="space-y-2">
                <button
                  onClick={() => onSelectServiceType('storm')}
                  className="w-full text-left p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-red-500/40 transition-all flex items-center gap-2.5 group"
                >
                  <div className="p-1.5 rounded-md bg-red-950 text-red-400 shrink-0">
                    <AlertTriangle className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-white group-hover:text-red-300">
                      Hail or Storm Damage
                    </div>
                    <div className="text-[11px] text-slate-400 truncate">
                      Drone inspection &amp; adjuster meeting support
                    </div>
                  </div>
                  <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-white shrink-0" />
                </button>

                <button
                  onClick={() => onSelectServiceType('fortified')}
                  className="w-full text-left p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-blue-500/40 transition-all flex items-center gap-2.5 group"
                >
                  <div className="p-1.5 rounded-md bg-blue-950 text-blue-400 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-white group-hover:text-blue-300">
                      FORTIFIED™ Roof System
                    </div>
                    <div className="text-[11px] text-slate-400 truncate">
                      Sealed deck &amp; potential insurance discount
                    </div>
                  </div>
                  <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-white shrink-0" />
                </button>

                <button
                  onClick={() => onSelectServiceType('maintenance')}
                  className="w-full text-left p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/40 transition-all flex items-center gap-2.5 group"
                >
                  <div className="p-1.5 rounded-md bg-emerald-950 text-emerald-400 shrink-0">
                    <Umbrella className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-white group-hover:text-emerald-300">
                      Annual Roof Maintenance (ARM)
                    </div>
                    <div className="text-[11px] text-slate-400 truncate">
                      Spring &amp; Fall checkups and gutter clearing
                    </div>
                  </div>
                  <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-white shrink-0" />
                </button>

                <button
                  onClick={() => onSelectServiceType('commercial')}
                  className="w-full text-left p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/40 transition-all flex items-center gap-2.5 group"
                >
                  <div className="p-1.5 rounded-md bg-amber-950 text-amber-400 shrink-0">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-white group-hover:text-amber-300">
                      Commercial / Flat Roof System
                    </div>
                    <div className="text-[11px] text-slate-400 truncate">
                      TPO membranes &amp; 20-year warranty options
                    </div>
                  </div>
                  <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-white shrink-0" />
                </button>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-emerald-400 font-medium">Open 24/7 (Mon–Sun)</span>
                <button
                  onClick={onOpenEstimate}
                  className="text-white hover:text-red-400 font-semibold underline underline-offset-2"
                >
                  Full Quote Form &rarr;
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Neat Proof Strip */}
      <div className="bg-slate-950 border-t border-slate-800/80 py-3.5 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-base sm:text-lg font-bold text-white tabular-nums">
              Top 2%
            </div>
            <div className="text-[11px] text-slate-400">GAF Master Elite®</div>
          </div>

          <div>
            <div className="text-base sm:text-lg font-bold text-emerald-400 tabular-nums">
              5.0 ★
            </div>
            <div className="text-[11px] text-slate-400">Google &amp; TrustIndex (116+)</div>
          </div>

          <div>
            <div className="text-base sm:text-lg font-bold text-white tabular-nums">
              14+ Years
            </div>
            <div className="text-[11px] text-slate-400">DFW Local Experience</div>
          </div>

          <div>
            <div className="text-base sm:text-lg font-bold text-blue-400 tabular-nums">
              100%
            </div>
            <div className="text-[11px] text-slate-400">Supervised On-Site</div>
          </div>
        </div>
      </div>
    </section>
  );
};
