import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Info } from 'lucide-react';

interface InteractiveCalculatorProps {
  onOpenEstimateWithDetails: (details: string) => void;
}

export const InteractiveCalculator: React.FC<InteractiveCalculatorProps> = ({
  onOpenEstimateWithDetails
}) => {
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');
  const [homeSize, setHomeSize] = useState<number>(2400);
  const [stories, setStories] = useState<number>(1);
  const [systemType, setSystemType] = useState<string>('fortified');
  const [hasStormDamage, setHasStormDamage] = useState<boolean>(true);

  const calculateEstimate = () => {
    let baseRatePerSqFt = 4.2;

    if (systemType === 'standard') {
      baseRatePerSqFt = 4.2;
    } else if (systemType === 'impact') {
      baseRatePerSqFt = 5.4;
    } else if (systemType === 'fortified') {
      baseRatePerSqFt = 6.2;
    } else if (systemType === 'decra') {
      baseRatePerSqFt = 9.8;
    } else if (systemType === 'tpo') {
      baseRatePerSqFt = 6.8;
    }

    if (stories === 2) baseRatePerSqFt *= 1.12;

    const estimatedSquares = Math.round((homeSize * 1.15) / 100);
    const lowEst = Math.round(homeSize * baseRatePerSqFt * 0.95);
    const highEst = Math.round(homeSize * baseRatePerSqFt * 1.15);

    return { lowEst, highEst, estimatedSquares };
  };

  const { lowEst, highEst, estimatedSquares } = calculateEstimate();

  const handleApplyToEstimate = () => {
    const summary = `Estimated Size: ~${homeSize} sq ft (${stories} Story). System: ${systemType.toUpperCase()}. Insurance Claim: ${
      hasStormDamage ? 'Yes' : 'No'
    }. Estimated squares: ~${estimatedSquares} SQ.`;
    onOpenEstimateWithDetails(summary);
  };

  return (
    <section id="estimator" className="py-12 sm:py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-red-600 tracking-wider uppercase">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
            <span aria-hidden="true">·</span>
            <span>Transparent DFW Pricing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Roof Investment &amp; System Calculator
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Get an instant ballpark investment range tailored to your square footage and desired protection level.
          </p>
        </div>

        {/* Calculator Interface - Compact */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 lg:p-7">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left Inputs */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Property Classification */}
              <div>
                <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  1. Property Classification
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setPropertyType('residential');
                      if (systemType === 'tpo') setSystemType('fortified');
                    }}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all text-center ${
                      propertyType === 'residential'
                        ? 'bg-blue-900 text-white border-blue-900 shadow-2xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Residential Home
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPropertyType('commercial');
                      setSystemType('tpo');
                    }}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all text-center ${
                      propertyType === 'commercial'
                        ? 'bg-blue-900 text-white border-blue-900 shadow-2xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Commercial Facility
                  </button>
                </div>
              </div>

              {/* Area Slider */}
              <div>
                <div className="flex justify-between items-center mb-1 text-xs">
                  <label className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                    2. Approximate Floor Area
                  </label>
                  <span className="font-bold text-blue-900 font-mono tabular-nums">
                    {homeSize.toLocaleString()} sq ft (~{estimatedSquares} SQ)
                  </span>
                </div>
                <input
                  type="range"
                  min={1200}
                  max={6000}
                  step={100}
                  value={homeSize}
                  onChange={(e) => setHomeSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                />
              </div>

              {/* Stories */}
              {propertyType === 'residential' && (
                <div>
                  <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    3. Stories &amp; Pitch
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setStories(1)}
                      className={`py-1.5 px-3 rounded-lg text-xs font-bold border ${
                        stories === 1
                          ? 'bg-blue-900 text-white border-blue-900'
                          : 'bg-white text-slate-700 border-slate-200'
                      }`}
                    >
                      1 Story
                    </button>
                    <button
                      type="button"
                      onClick={() => setStories(2)}
                      className={`py-1.5 px-3 rounded-lg text-xs font-bold border ${
                        stories === 2
                          ? 'bg-blue-900 text-white border-blue-900'
                          : 'bg-white text-slate-700 border-slate-200'
                      }`}
                    >
                      2+ Stories (Steep Pitch)
                    </button>
                  </div>
                </div>
              )}

              {/* Protection Level */}
              <div>
                <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  4. Roofing System Protection
                </label>
                <div className="space-y-1.5">
                  {propertyType === 'residential' ? (
                    <>
                      <label
                        className={`flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                          systemType === 'fortified'
                            ? 'bg-blue-50/80 border-blue-900'
                            : 'bg-white border-slate-200 hover:bg-slate-100/60'
                        }`}
                      >
                        <input
                          type="radio"
                          name="systemType"
                          value="fortified"
                          checked={systemType === 'fortified'}
                          onChange={() => setSystemType('fortified')}
                          className="mt-0.5 text-blue-900"
                        />
                        <div className="flex-1">
                          <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                            <span>IBHS FORTIFIED™ System</span>
                            <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded">
                              Potential Discount
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500">
                            Sealed waterproof deck, ring-shank nails, Class 4 impact shingles.
                          </p>
                        </div>
                      </label>

                      <label
                        className={`flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                          systemType === 'impact'
                            ? 'bg-blue-50/80 border-blue-900'
                            : 'bg-white border-slate-200 hover:bg-slate-100/60'
                        }`}
                      >
                        <input
                          type="radio"
                          name="systemType"
                          value="impact"
                          checked={systemType === 'impact'}
                          onChange={() => setSystemType('impact')}
                          className="mt-0.5 text-blue-900"
                        />
                        <div className="flex-1">
                          <div className="text-xs font-bold text-slate-900">
                            GAF Class 4 Impact Resistant (Timberline AS II)
                          </div>
                          <p className="text-[11px] text-slate-500">
                            SBS polymer modified shingles engineered for severe hail impact.
                          </p>
                        </div>
                      </label>

                      <label
                        className={`flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                          systemType === 'decra'
                            ? 'bg-blue-50/80 border-blue-900'
                            : 'bg-white border-slate-200 hover:bg-slate-100/60'
                        }`}
                      >
                        <input
                          type="radio"
                          name="systemType"
                          value="decra"
                          checked={systemType === 'decra'}
                          onChange={() => setSystemType('decra')}
                          className="mt-0.5 text-blue-900"
                        />
                        <div className="flex-1">
                          <div className="text-xs font-bold text-slate-900">
                            Decra Shake XD Stone-Coated Steel (Lifetime Durability)
                          </div>
                          <p className="text-[11px] text-slate-500">
                            Interlocking steel panels with wood-shake aesthetic.
                          </p>
                        </div>
                      </label>

                      <label
                        className={`flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                          systemType === 'standard'
                            ? 'bg-blue-50/80 border-blue-900'
                            : 'bg-white border-slate-200 hover:bg-slate-100/60'
                        }`}
                      >
                        <input
                          type="radio"
                          name="systemType"
                          value="standard"
                          checked={systemType === 'standard'}
                          onChange={() => setSystemType('standard')}
                          className="mt-0.5 text-blue-900"
                        />
                        <div className="flex-1">
                          <div className="text-xs font-bold text-slate-900">
                            GAF Timberline HDZ Architectural Shingles
                          </div>
                          <p className="text-[11px] text-slate-500">
                            North America’s leading architectural shingle with LayerLock.
                          </p>
                        </div>
                      </label>
                    </>
                  ) : (
                    <label className="flex items-start gap-2.5 p-2.5 rounded-lg border bg-blue-50/80 border-blue-900">
                      <input type="radio" checked readOnly className="mt-0.5 text-blue-900" />
                      <div className="flex-1">
                        <div className="text-xs font-bold text-slate-900">
                          Commercial TPO Single-Ply Membrane (60-mil)
                        </div>
                        <p className="text-[11px] text-slate-500">
                          Heat-welded seams, solar reflective, 20-year non-prorated warranty.
                        </p>
                      </div>
                    </label>
                  )}
                </div>
              </div>

              {/* Storm Damage Check */}
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-between gap-3 text-xs">
                <div className="text-amber-900">
                  <span className="font-bold">Recent storm damage?</span> If storm-related, your insurance claim may cover the majority.
                </div>
                <button
                  type="button"
                  onClick={() => setHasStormDamage(!hasStormDamage)}
                  className={`px-2.5 py-1 rounded text-xs font-bold whitespace-nowrap ${
                    hasStormDamage
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-amber-800 border border-amber-300'
                  }`}
                >
                  {hasStormDamage ? 'Claim Expected' : 'Out of Pocket'}
                </button>
              </div>

            </div>

            {/* Right Results Summary */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
              <div>
                <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">
                  Ballpark Estimation
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Estimated Turnkey Range
                </h3>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                <div className="text-xs text-slate-500">Materials &amp; Supervised Labor:</div>
                <div className="text-2xl font-black text-blue-950 font-mono tabular-nums">
                  ${lowEst.toLocaleString()} – ${highEst.toLocaleString()}
                </div>
                {hasStormDamage && (
                  <div className="text-[11px] font-semibold text-emerald-700 pt-1">
                    ✓ Insurance Claim: Homeowner pays only deductible (Texas HB 2102)
                  </div>
                )}
              </div>

              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">
                  Always Included:
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>On-Site Project Manager Supervision</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>New Roof, No Mess Magnetic Sweep</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>GAF Master Elite / FORTIFIED Warranty</span>
                </div>
              </div>

              <button
                onClick={handleApplyToEstimate}
                className="w-full py-2.5 px-4 rounded-lg font-bold text-xs bg-blue-900 hover:bg-blue-800 text-white shadow-2xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Schedule Free Attic &amp; Roof Inspection</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-300" />
              </button>

              <div className="flex items-center gap-1 text-[10px] text-slate-400 justify-center">
                <Info className="w-3 h-3" />
                <span>Exact quote provided after physical inspection.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
