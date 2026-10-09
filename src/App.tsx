/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar.tsx';
import { Hero } from './components/Hero.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { FortifiedDeepDive } from './components/FortifiedDeepDive.tsx';
import { NoMessPledge } from './components/NoMessPledge.tsx';
import { InteractiveCalculator } from './components/InteractiveCalculator.tsx';
import { ProjectsGallery } from './components/ProjectsGallery.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { TexasLawNotice } from './components/TexasLawNotice.tsx';
import { FinancingBanner } from './components/FinancingBanner.tsx';
import { ServiceAreaMap } from './components/ServiceAreaMap.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { EstimateModal } from './components/EstimateModal.tsx';
import { LeaveReviewModal } from './components/LeaveReviewModal.tsx';
import { ServiceDetail } from './data/roofingData.ts';
import { Phone, Calendar, ShieldCheck } from 'lucide-react';

export default function App() {
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [estimateNotes, setEstimateNotes] = useState('');
  const [estimateService, setEstimateService] = useState('Residential Roof Replacement');

  const handleOpenEstimate = (notes = '', service = 'Residential Roof Replacement') => {
    setEstimateNotes(notes);
    setEstimateService(service);
    setIsEstimateOpen(true);
  };

  const handleSelectService = (service: ServiceDetail) => {
    handleOpenEstimate(
      `Interested in: ${service.title} (${service.leadKicker}).`,
      service.title
    );
  };

  const handleSelectServiceType = (serviceKey: string) => {
    let serviceTitle = 'Residential Roof Replacement';
    let notes = '';

    if (serviceKey === 'storm') {
      serviceTitle = 'Hail & Wind Storm Damage Inspection';
      notes = 'Homeowner reported recent storm or hail damage in DFW. Requesting adjuster meeting & drone inspection.';
    } else if (serviceKey === 'fortified') {
      serviceTitle = 'IBHS FORTIFIED Roof System';
      notes = 'Inquiring about IBHS FORTIFIED upgrade (ring-shank nails, sealed deck, Class 4 shingles).';
    } else if (serviceKey === 'maintenance') {
      serviceTitle = 'Annual Roof Maintenance (ARM)';
      notes = 'Interested in joining the Annual Roof Maintenance (ARM) biannual checkup program.';
    } else if (serviceKey === 'commercial') {
      serviceTitle = 'Commercial Low-Slope / TPO';
      notes = 'Commercial property owner requesting roof evaluation or TPO membrane consultation.';
    }

    handleOpenEstimate(notes, serviceTitle);
  };

  const handleOpenCityEstimate = (city: string) => {
    handleOpenEstimate(
      `Property located in ${city}, TX. Requesting free roof inspection.`,
      'Residential Roof Replacement'
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Top Header & 24/7 Strip */}
      <TopBar onOpenEstimate={() => handleOpenEstimate()} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero with value proposition & immediate triage */}
        <Hero
          onOpenEstimate={() => handleOpenEstimate()}
          onSelectServiceType={handleSelectServiceType}
        />

        {/* 2. Primary Capabilities (Residential, Commercial, FORTIFIED, ARM, Contracting) */}
        <ServicesSection
          onSelectService={handleSelectService}
        />

        {/* 3. IBHS FORTIFIED™ Roof System Deep-Dive */}
        <FortifiedDeepDive
          onOpenEstimate={() => handleOpenEstimate('', 'IBHS FORTIFIED Roof System')}
        />

        {/* 4. Interactive Ballpark Estimator & Materials Guide */}
        <InteractiveCalculator
          onOpenEstimateWithDetails={(details) => handleOpenEstimate(details)}
        />

        {/* 5. The New Roof, No Mess Pledge */}
        <NoMessPledge
          onOpenEstimate={() => handleOpenEstimate()}
        />

        {/* 6. Real DFW Field Projects (CompanyCam) */}
        <ProjectsGallery
          onOpenEstimate={() => handleOpenEstimate()}
        />

        {/* 7. Verified Reviews & Testimonials (Google 5.0 & BBB A+) */}
        <ReviewsSection
          onOpenLeaveReview={() => setIsReviewModalOpen(true)}
        />

        {/* 8. Texas Law & HB 2102 Deductible Notice */}
        <TexasLawNotice />

        {/* 9. Financing Options via Upgrade */}
        <FinancingBanner
          onOpenEstimate={() => handleOpenEstimate('Interested in Upgrade monthly financing options.')}
        />

        {/* 10. Service Area Directory across DFW Metro */}
        <ServiceAreaMap
          onOpenEstimateForCity={handleOpenCityEstimate}
        />

        {/* 11. Frequently Asked Questions Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenEstimate={() => handleOpenEstimate()} />

      {/* Mobile Sticky Quick Action Bar (Under 15% viewport height cap) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-between gap-2 shadow-lg">
        <a
          href="tel:8177698660"
          className="flex-1 py-2.5 px-3 rounded-lg font-bold text-xs bg-slate-900 text-white flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-400" />
          <span>Call 817-769-8660</span>
        </a>

        <button
          onClick={() => handleOpenEstimate()}
          className="flex-1 py-2.5 px-3 rounded-lg font-bold text-xs bg-red-600 text-white flex items-center justify-center gap-1.5 shadow-xs"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Free Inspection</span>
        </button>
      </div>

      {/* Modals */}
      <EstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
        prefillNotes={estimateNotes}
        defaultService={estimateService}
      />

      <LeaveReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
      />
    </div>
  );
}
