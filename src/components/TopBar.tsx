import React, { useState } from 'react';
import { Phone, Award, ShieldCheck, Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface TopBarProps {
  onOpenEstimate: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenEstimate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">

      {/* Main Navigation - Neat, Compact 56px Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-6">
        
        {/* Brand Lockup */}
        <a href="#" className="whitespace-nowrap shrink-0 hover:opacity-95 transition-opacity">
          <Logo size="md" />
        </a>

        {/* Clean Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-slate-700">
          <a href="#services" className="hover:text-blue-900 transition-colors whitespace-nowrap">
            Services
          </a>
          <a href="#fortified" className="hover:text-blue-900 transition-colors whitespace-nowrap">
            FORTIFIED™
          </a>
          <a href="#pledge" className="hover:text-blue-900 transition-colors whitespace-nowrap">
            No Mess Pledge
          </a>
          <a href="#gallery" className="hover:text-blue-900 transition-colors whitespace-nowrap">
            Projects
          </a>
          <a href="#reviews" className="hover:text-blue-900 transition-colors whitespace-nowrap">
            Reviews (5.0★)
          </a>
          <a href="#texas-law" className="hover:text-blue-900 transition-colors whitespace-nowrap text-slate-500 hover:text-slate-900">
            Texas Law (HB 2102)
          </a>
        </nav>

        {/* Compact CTA Action */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <a
            href="tel:8177698660"
            className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-red-600" />
            <span className="tabular-nums">817-769-8660</span>
          </a>

          <button
            onClick={onOpenEstimate}
            className="px-3.5 py-1.5 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-2xs transition-all flex items-center gap-1 whitespace-nowrap"
          >
            <span>Free Inspection</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-red-300" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-2.5 shadow-lg">
          <div className="flex flex-col space-y-2 text-xs font-semibold text-slate-800">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 hover:bg-slate-50 rounded"
            >
              Services &amp; Capabilities
            </a>
            <a
              href="#fortified"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 hover:bg-slate-50 rounded"
            >
              FORTIFIED™ Roof Systems
            </a>
            <a
              href="#pledge"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 hover:bg-slate-50 rounded"
            >
              No Mess Pledge
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 hover:bg-slate-50 rounded"
            >
              Recent DFW Projects
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 hover:bg-slate-50 rounded"
            >
              Reviews (5.0★)
            </a>
            <a
              href="#texas-law"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 hover:bg-slate-50 rounded text-slate-500"
            >
              Texas Law (HB 2102)
            </a>
            <a
              href="#financing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 hover:bg-slate-50 rounded text-slate-500"
            >
              Financing Options
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimate();
              }}
              className="flex-1 py-2 text-center text-xs font-bold text-white bg-blue-900 rounded-md"
            >
              Free Inspection
            </button>
            <a
              href="tel:8177698660"
              className="flex-1 py-2 text-center text-xs font-bold text-slate-900 bg-slate-100 rounded-md flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              Call 817-769-8660
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
