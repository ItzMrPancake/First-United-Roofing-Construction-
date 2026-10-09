import React, { useState } from 'react';
import { REVIEWS_DATA } from '../data/roofingData.ts';
import { Star, Search, CheckCircle, MessageSquare } from 'lucide-react';

interface ReviewsSectionProps {
  onOpenLeaveReview: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenLeaveReview }) => {
  const [sourceFilter, setSourceFilter] = useState<'All' | 'Google' | 'BBB'>('All');
  const [tagFilter, setTagFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredReviews = REVIEWS_DATA.filter((rev) => {
    const matchesSource = sourceFilter === 'All' || rev.source === sourceFilter;
    const matchesTag = tagFilter === 'All' || rev.tag === tagFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      rev.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rev.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSource && matchesTag && matchesSearch;
  });

  const tags = ['All', 'Full Replacement', 'Storm Damage', 'Maintenance', 'General Contracting', 'Repairs'];

  return (
    <section id="reviews" className="py-12 sm:py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-red-600 tracking-wider uppercase">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Verified Client Feedback</span>
              <span aria-hidden="true">·</span>
              <span>116+ 5-Star Reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Homeowner Stories from Across DFW
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Read real reviews from Mansfield, Arlington, Dallas, and Fort Worth.
            </p>
          </div>

          <button
            onClick={onOpenLeaveReview}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-colors flex items-center gap-1.5 shadow-2xs self-start sm:self-auto"
          >
            <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Aggregated Score Bar - Compact */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-center md:text-left">
            
            <div className="space-y-0.5 md:border-r md:border-slate-200 md:pr-4">
              <div className="flex items-center justify-center md:justify-start gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono tabular-nums">
                5.0 / 5.0
              </div>
              <div className="text-[11px] text-slate-500">116+ Client Reviews</div>
            </div>

            <div className="space-y-0.5 md:border-r md:border-slate-200 md:pr-4">
              <div className="text-xs font-bold text-slate-900">Google Reviews</div>
              <div className="text-base sm:text-lg font-bold text-slate-900 font-mono">5.0 ★ Rating</div>
              <div className="text-[11px] text-slate-500">Top Rated DFW Roofer</div>
            </div>

            <div className="space-y-0.5 md:border-r md:border-slate-200 md:pr-4">
              <div className="text-xs font-bold text-slate-900">BBB Accredited</div>
              <div className="text-base sm:text-lg font-bold text-emerald-600 font-mono">A+ Rating</div>
              <div className="text-[11px] text-slate-500">Zero Complaint Record</div>
            </div>

            <div className="space-y-0.5">
              <div className="text-xs font-bold text-slate-900">TrustIndex Certified</div>
              <div className="text-base sm:text-lg font-bold text-blue-900 font-mono">Excellent (100%)</div>
              <div className="text-[11px] text-slate-500">NTRCA Member</div>
            </div>

          </div>
        </div>

        {/* Filters and Search Bar - Compact */}
        <div className="space-y-3 mb-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
            
            <div className="flex items-center gap-1 p-0.5 bg-slate-100 rounded-md">
              {(['All', 'Google', 'BBB'] as const).map((source) => (
                <button
                  key={source}
                  onClick={() => setSourceFilter(source)}
                  className={`px-2.5 py-1 text-xs font-bold rounded transition-colors ${
                    sourceFilter === source
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {source === 'All' ? 'All' : source}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-56">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                placeholder="Search reviews..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-900"
              />
            </div>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setTagFilter(tag)}
                className={`px-2.5 py-0.5 rounded text-[11px] font-medium transition-colors whitespace-nowrap ${
                  tagFilter === tag
                    ? 'bg-blue-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Cards - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredReviews.slice(0, 6).map((review) => (
            <div
              key={review.id}
              className="bg-white border border-slate-200 rounded-lg p-4 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-900 text-white text-[11px] font-bold flex items-center justify-center">
                      {review.initials}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        {review.name}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {review.timeAgo}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                      review.source === 'Google'
                        ? 'bg-blue-50 text-blue-800'
                        : 'bg-emerald-50 text-emerald-800'
                    }`}
                  >
                    {review.source}
                  </span>
                </div>

                <div className="flex items-center gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-slate-700 leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-2.5 mt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                <span className="font-semibold text-slate-700">{review.tag}</span>
                <span className="flex items-center gap-1 text-emerald-600">
                  <CheckCircle className="w-3 h-3" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
