import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, ShieldCheck, ArrowRight, AlertTriangle } from 'lucide-react';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillNotes?: string;
  defaultService?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  prefillNotes = '',
  defaultService = 'Residential Roof Replacement'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Mansfield',
    service: defaultService,
    urgency: 'Within 24-48 hours',
    notes: prefillNotes
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (prefillNotes) {
      setFormData((prev) => ({ ...prev, notes: prefillNotes }));
    }
  }, [prefillNotes]);

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Please provide your name, phone number, and email.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
        
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900">
                Inspection Request Received
              </h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. A project manager will call you at{' '}
                <strong>{formData.phone}</strong> to confirm your schedule.
              </p>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 max-w-sm mx-auto space-y-1 text-left">
              <div className="font-bold text-slate-900 text-[11px]">Next Steps:</div>
              <div>• Weather &amp; drone survey preparation for {formData.city}, TX</div>
              <div>• On-site attic moisture &amp; decking inspection</div>
              <div>• Transparent itemized valuation report</div>
            </div>

            <div className="pt-2 flex items-center justify-center gap-2.5">
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-lg text-xs font-bold bg-blue-900 text-white"
              >
                Done
              </button>
              <a
                href="tel:8177698660"
                className="px-4 py-2 rounded-lg text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200 flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-red-600" />
                817-769-8660
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-red-600 uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Complimentary Inspection</span>
              </div>
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Request Free Roof Inspection
              </h2>
              <p className="text-[11px] text-slate-500">
                Supervised on-site by experienced project managers. Zero obligation.
              </p>
            </div>

            {errorMsg && (
              <div className="p-2.5 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1">
                  Service Division
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-hidden focus:border-blue-900"
                >
                  <option value="Residential Roof Replacement">Residential Roof Replacement (GAF Master Elite)</option>
                  <option value="IBHS FORTIFIED Roof System">IBHS FORTIFIED™ Roof Upgrade</option>
                  <option value="Hail & Wind Storm Damage Inspection">Hail &amp; Wind Storm Inspection</option>
                  <option value="Commercial Low-Slope / TPO">Commercial Flat / TPO Membrane System</option>
                  <option value="Annual Roof Maintenance (ARM)">Annual Roof Maintenance (ARM)</option>
                  <option value="General Contracting & Restoration">General Contracting (Siding, Gutters)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="817-555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1">
                    DFW City
                  </label>
                  <input
                    type="text"
                    placeholder="Mansfield, Arlington..."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1">
                  Timeframe
                </label>
                <div className="grid grid-cols-3 gap-1.5 text-xs">
                  {['Emergency / ASAP', 'Within 24-48 hrs', 'Flexible'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, urgency: opt })}
                      className={`py-1.5 px-1 text-center font-bold rounded-md border transition-colors ${
                        formData.urgency === opt
                          ? 'bg-blue-900 text-white border-blue-900'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1">
                  Notes or Damage Details
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe leaks, hail damage, roof age..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg font-bold text-xs bg-blue-900 hover:bg-blue-800 text-white shadow-2xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Submit Inspection Request</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-300" />
              </button>

              <div className="text-[9px] text-slate-400 text-center leading-tight">
                This site is protected by reCAPTCHA and the Google Privacy Policy apply.
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
