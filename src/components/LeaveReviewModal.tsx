import React, { useState } from 'react';
import { X, Star, ThumbsUp, ThumbsDown, CheckCircle2 } from 'lucide-react';

interface LeaveReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeaveReviewModal: React.FC<LeaveReviewModalProps> = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(5);
  const [sentiment, setSentiment] = useState<'great' | 'not-great'>('great');
  const [author, setAuthor] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-5 sm:p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
        
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-5 space-y-3">
            <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Thank You for Your Review!
            </h3>
            <p className="text-xs text-slate-600">
              Your feedback helps fellow DFW homeowners find honest roofing contractors.
            </p>
            <div className="pt-2 flex justify-center">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2 rounded-lg text-xs font-bold bg-blue-900 text-white"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-0.5 text-center">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">
                Leave Us a Review
              </h2>
              <p className="text-xs text-slate-500">
                How was your experience with First United Roofing?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setSentiment('great');
                  setRating(5);
                }}
                className={`py-2 px-3 rounded-lg text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 ${
                  sentiment === 'great'
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-500 shadow-2xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
                <span>We Did Great!</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSentiment('not-great');
                  setRating(3);
                }}
                className={`py-2 px-3 rounded-lg text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 ${
                  sentiment === 'not-great'
                    ? 'bg-amber-50 text-amber-800 border-amber-500 shadow-2xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <ThumbsDown className="w-3.5 h-3.5 text-amber-600" />
                <span>Could Be Better</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-1 py-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-1 hover:scale-110 transition-transform"
                >
                  <Star
                    className={`w-5 h-5 ${
                      star <= rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-300'
                    }`}
                  />
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David B. - Arlington, TX"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md text-slate-900 focus:outline-hidden focus:border-blue-900"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1">
                  Your Feedback
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Details about communication, cleanup, or roof quality..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md text-slate-900 focus:outline-hidden focus:border-blue-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-lg font-bold text-xs bg-blue-900 hover:bg-blue-800 text-white shadow-2xs transition-colors"
              >
                Submit Review
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
