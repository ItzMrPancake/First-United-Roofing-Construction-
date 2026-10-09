import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, CreditCard } from 'lucide-react';

interface FinancingBannerProps {
  onOpenEstimate: () => void;
}

export const FinancingBanner: React.FC<FinancingBannerProps> = ({ onOpenEstimate }) => {
  const [amount, setAmount] = useState<number>(14000);
  const [termMonths, setTermMonths] = useState<number>(84);

  const interestRate = 0.0899 / 12;
  const monthlyPayment = Math.round(
    (amount * interestRate * Math.pow(1 + interestRate, termMonths)) /
      (Math.pow(1 + interestRate, termMonths) - 1)
  );

  return (
    <section id="financing" className="py-12 sm:py-14 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 tracking-wider uppercase">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Flexible Home Financing</span>
                <span aria-hidden="true">·</span>
                <span>Powered by Upgrade</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Quality Roofing with Comfortable Monthly Payments.
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                Don’t delay urgent storm repairs. Through our partnership with <strong>Upgrade</strong>, we offer transparent financing specials with approved credit.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Checking rates doesn't affect credit</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Fixed rates &amp; flexible terms</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Zero prepayment penalty</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Use for deductibles or upgrades</span>
                </div>
              </div>

              <div className="pt-1 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenEstimate}
                  className="px-5 py-2.5 rounded-lg font-bold text-xs bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <span>Apply with Our Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="tel:8177698660"
                  className="text-xs text-slate-300 hover:text-white"
                >
                  Call <strong className="text-white underline">817-769-8660</strong>
                </a>
              </div>
            </div>

            {/* Right Estimator Box */}
            <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Payment Estimator
                </div>
                <div className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/60">
                  Upgrade Partner
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs text-slate-300 mb-1">
                  <span>Amount:</span>
                  <span className="font-bold text-white font-mono tabular-nums">
                    ${amount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={3000}
                  max={30000}
                  step={500}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>

              <div>
                <div className="text-[11px] text-slate-400 mb-1.5">Term Length:</div>
                <div className="grid grid-cols-3 gap-1.5 text-xs">
                  {[36, 60, 84].map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setTermMonths(term)}
                      className={`py-1.5 rounded-md font-bold border transition-colors ${
                        termMonths === term
                          ? 'bg-emerald-500 text-slate-950 border-emerald-500'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      {term} Mos
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <div className="text-[11px] text-slate-400">Estimated Monthly:</div>
                <div className="text-2xl font-black text-emerald-400 font-mono tabular-nums">
                  ${monthlyPayment} / mo
                </div>
                <div className="text-[10px] text-slate-500">With approved credit.</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
