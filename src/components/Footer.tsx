import React from 'react';
import { Phone, Mail, MapPin, Clock, Award, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface FooterProps {
  onOpenEstimate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      
      {/* Compact Pre-Footer Action Banner */}
      <div className="border-b border-slate-800 bg-slate-900/60 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              Protect Your DFW Property with Total Roof Defense
            </h3>
            <p className="text-xs text-slate-400">
              Speak directly with an experienced project manager. 24/7 emergency storm response.
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href="tel:8177698660"
              className="px-4 py-2 rounded-lg font-bold text-xs bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>817-769-8660</span>
            </a>
            <button
              onClick={onOpenEstimate}
              className="px-4 py-2 rounded-lg font-bold text-xs bg-red-600 hover:bg-red-700 text-white shadow-sm transition-colors"
            >
              Free Inspection
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Directory - Compact Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Lockup */}
          <div className="lg:col-span-4 space-y-3">
            <Logo variant="white" size="md" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              First United Roofing &amp; Construction is a certified residential and commercial roofer and general contractor serving the Dallas-Fort Worth metroplex with on-site supervisors.
            </p>

            <div className="pt-1 flex flex-wrap gap-1.5 text-[10px] font-semibold text-slate-300">
              <span className="p-1 rounded bg-slate-900 border border-slate-800 flex items-center gap-1">
                <Award className="w-3 h-3 text-amber-400" /> GAF Master Elite®
              </span>
              <span className="p-1 rounded bg-slate-900 border border-slate-800 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-blue-400" /> FORTIFIED™ Roofer
              </span>
              <span className="p-1 rounded bg-slate-900 border border-slate-800 flex items-center gap-1">
                <Heart className="w-3 h-3 text-red-400" /> Habitat Partner
              </span>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-2">
            <div className="text-xs font-bold text-red-400 uppercase tracking-wider">
              Divisions
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Residential Replacements</a></li>
              <li><a href="#fortified" className="hover:text-white transition-colors">IBHS FORTIFIED™ Roofs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial TPO &amp; Low-Slope</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Annual Roof Maintenance (ARM)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">General Contracting &amp; Siding</a></li>
              <li><a href="#pledge" className="hover:text-white transition-colors">New Roof, No Mess Pledge</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-2">
            <div className="text-xs font-bold text-red-400 uppercase tracking-wider">
              Quick Links
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#texas-law" className="hover:text-white transition-colors">Texas Law (HB 2102)</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Project Showcase</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews (5.0★)</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">DFW Cities We Serve</a></li>
              <li><a href="#financing" className="hover:text-white transition-colors">Financing via Upgrade</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-2">
            <div className="text-xs font-bold text-red-400 uppercase tracking-wider">
              Contact
            </div>
            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Dallas Fort Worth, Texas</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="tel:8177698660" className="font-bold text-white hover:text-red-400 tabular-nums">
                  817-769-8660
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:info@firstunitedroofing.com" className="hover:text-white">
                  info@firstunitedroofing.com
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">24/7 Service:</span>
                  Mon – Sun: Open 24 Hours
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800 text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            &copy; 2026 First United Roofing &amp; Construction. NTRCA Member. GAF Master Elite #ME50321.
          </p>
          <div className="flex items-center gap-3">
            <a href="#texas-law" className="hover:text-slate-400 transition-colors">
              Texas HB 2102 Deductible Notice
            </a>
            <button
              onClick={scrollToTop}
              className="p-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
