import React, { useState } from 'react';
import { Camera, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { APP_IMAGES } from '../assets/images/index.ts';

interface ProjectsGalleryProps {
  onOpenEstimate: () => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onOpenEstimate }) => {
  const [filter, setFilter] = useState<string>('all');

  const projects = [
    {
      id: 'proj-1',
      title: 'Decra Shake XD Stone-Coated Steel & Chimney Rebuild',
      city: 'Arlington, TX',
      zip: '76006',
      date: 'Fall 2026',
      category: 'metal',
      image: APP_IMAGES.metalShake,
      type: 'Decra Metal Roof, Stone-Coated Steel',
      products: 'Decra Shake XD, Foam Attic Insulation, Custom Chimney Chase, Exterior Painting',
      badge: '58+ CompanyCam Photos',
      desc: 'Architectural stone-coated steel roof installation combined with structural chimney rebuild in Arlington.'
    },
    {
      id: 'proj-2',
      title: 'Commercial TPO Membrane Installation',
      city: 'Dallas / Fort Worth, TX',
      zip: '75201',
      date: 'Summer 2026',
      category: 'commercial',
      image: APP_IMAGES.commercial,
      type: 'Commercial Low-Slope, TPO Membrane',
      products: '60-mil White TPO Membrane, ISO Board, Parapet Flashing, HVAC Curb Seals',
      badge: '20-Year Warranty',
      desc: 'Commercial low-slope replacement providing optimal solar reflectivity and drainage.'
    },
    {
      id: 'proj-3',
      title: 'IBHS FORTIFIED™ Roof for Trinity Habitat for Humanity',
      city: 'Weatherford, TX',
      zip: '76086',
      date: 'Spring 2026',
      category: 'fortified',
      image: APP_IMAGES.fortified,
      type: 'FORTIFIED Roof System',
      products: 'GAF Master Elite Fortified System, Ring-Shank Nails, Sealed Decking, Class 4 Shingles',
      badge: 'Habitat Partner Project',
      desc: 'Partner installation utilizing IBHS FORTIFIED design standards with ring-shank nails.'
    },
    {
      id: 'proj-4',
      title: 'Hail Damage Valuation & Decra Shingle XD Install',
      city: 'Grand Prairie, TX',
      zip: '75054',
      date: 'Spring 2026',
      category: 'storm',
      image: APP_IMAGES.inspection,
      type: 'Severe Storm Damage Restorations',
      products: 'Decra Metal Shingle XD, Drone Damage Valuation, Seamless Gutters',
      badge: '167+ Photos Logged',
      desc: 'Full insurance damage valuation assistance following severe Texas hail.'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="gallery" className="py-12 sm:py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="max-w-xl space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-red-600 tracking-wider uppercase">
              <Camera className="w-3.5 h-3.5" />
              <span>Field Proof</span>
              <span aria-hidden="true">·</span>
              <span>Powered by CompanyCam</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Recent North Texas Projects
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Photographic logs from Arlington, Grand Prairie, Weatherford, and Dallas.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-lg shadow-2xs overflow-x-auto shrink-0">
            {['all', 'metal', 'fortified', 'commercial', 'storm'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors whitespace-nowrap ${
                  filter === cat
                    ? 'bg-blue-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'all'
                  ? 'All'
                  : cat === 'metal'
                  ? 'Decra Metal'
                  : cat === 'fortified'
                  ? 'FORTIFIED™'
                  : cat === 'commercial'
                  ? 'Commercial'
                  : 'Storm'}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Neat 2-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/9 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-slate-950/85 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-400" />
                    <span>{project.city}</span>
                  </div>
                  <div className="absolute top-2.5 right-2.5 bg-blue-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {project.badge}
                  </div>
                </div>

                <div className="p-4 space-y-2.5">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <Calendar className="w-3 h-3" />
                    <span>{project.date}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-blue-900 font-semibold">{project.type}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="pt-1.5 border-t border-slate-100 text-[11px] text-slate-500">
                    <strong className="text-slate-700">Scope:</strong> {project.products}
                  </div>
                </div>
              </div>

              <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px]">Supervised on-site</span>
                <button
                  onClick={onOpenEstimate}
                  className="font-bold text-blue-900 hover:text-red-600 flex items-center gap-1 transition-colors"
                >
                  <span>Request Similar</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
