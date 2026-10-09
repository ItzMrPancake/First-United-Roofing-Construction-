import React, { useState } from 'react';
import { SERVICES_DATA, ServiceDetail } from '../data/roofingData.ts';
import { ShieldCheck, Check, ArrowRight, Home, Building2, Wrench, Shield, Hammer } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceDetail) => void;
  activeServiceId?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  activeServiceId
}) => {
  const [selectedId, setSelectedId] = useState<string>(activeServiceId || SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === selectedId) || SERVICES_DATA[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'residential':
        return <Home className="w-4 h-4" />;
      case 'fortified':
        return <Shield className="w-4 h-4" />;
      case 'commercial':
        return <Building2 className="w-4 h-4" />;
      case 'maintenance':
        return <Wrench className="w-4 h-4" />;
      case 'contracting':
        return <Hammer className="w-4 h-4" />;
      default:
        return <ShieldCheck className="w-4 h-4" />;
    }
  };

  return (
    <section id="services" className="py-12 sm:py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-red-600 tracking-wider uppercase">
            <span>Core Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Licensed &amp; Insured</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Roofing &amp; General Contracting Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Every project is supervised on-site by dedicated project managers. Select a division below:
          </p>
        </div>

        {/* Clean Segmented Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {SERVICES_DATA.map((service, idx) => {
            const isCurrent = service.id === selectedId;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedId(service.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap shrink-0 border ${
                  isCurrent
                    ? 'bg-blue-900 text-white border-blue-900 shadow-2xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span className={isCurrent ? 'text-red-400' : 'text-slate-500'}>
                  {getServiceIcon(service.id)}
                </span>
                <span>
                  0{idx + 1}. {service.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Service Feature Card - Compact */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-7 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1">
                <div className="text-xs font-bold text-red-600 tracking-wider uppercase">
                  {activeService.leadKicker}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {activeService.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeService.shortDesc}
                </p>
              </div>

              {/* Scope Checklist */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                  Scope of Work:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeService.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2 text-xs text-slate-700"
                    >
                      <div className="p-0.5 rounded-full bg-blue-100 text-blue-900 shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onSelectService(activeService)}
                  className="px-4 py-2 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-2xs transition-colors flex items-center gap-1.5"
                >
                  <span>Request Estimate for {activeService.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-red-300" />
                </button>

                <div className="text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Warranty:</span>{' '}
                  {activeService.warranty}
                </div>
              </div>
            </div>

            {/* Right Quick Reference Card */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-lg p-5 shadow-2xs space-y-3">
              <div className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                The First United Standard
              </div>

              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Full Project Supervision
                  </div>
                  <p className="text-[11px] text-slate-600">
                    On-site supervisor assigned to oversee every step from tear-off to nail sweep.
                  </p>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    Insurance Damage Valuation
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Detailed photo documentation and on-roof meetings with your insurance adjuster.
                  </p>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                    Texas HB 2102 Compliant
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Transparent itemization protecting you from illegal deductible-waiving schemes.
                  </p>
                </div>
              </div>

              <div className="pt-1 border-t border-slate-100 text-[11px] text-slate-500 text-center">
                Call 24/7 at{' '}
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
