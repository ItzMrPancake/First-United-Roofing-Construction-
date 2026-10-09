import React, { useState } from 'react';
import { MapPin, Search, Phone, ShieldCheck } from 'lucide-react';
import { DFW_CITIES } from '../data/roofingData.ts';

interface ServiceAreaMapProps {
  onOpenEstimateForCity: (city: string) => void;
}

export const ServiceAreaMap: React.FC<ServiceAreaMapProps> = ({ onOpenEstimateForCity }) => {
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('Mansfield');

  const filteredCities = DFW_CITIES.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="areas" className="py-12 sm:py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-red-600 tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Coverage &amp; Rapid Dispatch</span>
            <span aria-hidden="true">·</span>
            <span>All DFW Counties</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Serving the Greater DFW Metroplex
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Headquartered in Dallas-Fort Worth with on-site inspection teams dispatched across North Texas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* City Explorer */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                Select Your City
              </div>
              <div className="relative w-full sm:w-48">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                <input
                  type="text"
                  placeholder="Filter cities..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-8 pr-3 py-1 text-xs bg-white border border-slate-200 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-900"
                />
              </div>
            </div>

            {/* City Tag Cloud - Compact */}
            <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
              {filteredCities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-2.5 py-1 rounded-md text-xs font-bold transition-colors flex items-center gap-1 border ${
                    selectedCity === city
                      ? 'bg-blue-900 text-white border-blue-900 shadow-2xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <MapPin className="w-3 h-3 text-red-500" />
                  <span>{city}</span>
                </button>
              ))}
            </div>

            {/* Selected City Status Card */}
            <div className="p-3.5 bg-white border border-slate-200 rounded-lg space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Priority Dispatch Available in {selectedCity}, TX</span>
                </div>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">
                  24/7 Service
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active residential and commercial roofing teams available in {selectedCity} for storm evaluations and re-roofs.
              </p>
              <div className="pt-1 flex items-center justify-between text-xs">
                <button
                  onClick={() => onOpenEstimateForCity(selectedCity)}
                  className="font-bold text-blue-900 hover:text-red-600 transition-colors"
                >
                  Schedule Free {selectedCity} Inspection &rarr;
                </button>
                <a
                  href="tel:8177698660"
                  className="font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-red-600" />
                  817-769-8660
                </a>
              </div>
            </div>

          </div>

          {/* Regional Info Box */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-5 space-y-4">
            <div className="text-xs font-bold text-red-400 uppercase tracking-wider">
              Local Expertise
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Tarrant, Johnson &amp; Ellis Counties</strong>
                  Frequent severe hail lines requiring Class 4 impact shingles.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Dallas &amp; Collin Counties</strong>
                  Commercial flat roof replacements and high-end residential metal systems.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Community Trusted</strong>
                  Trinity Habitat for Humanity roofing partner in Weatherford.
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
              Wherever you are located across DFW, our team provides free on-site inspections.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
