export interface Review {
  id: string;
  name: string;
  source: 'Google' | 'BBB';
  rating: number;
  timeAgo: string;
  comment: string;
  tag: 'Full Replacement' | 'Storm Damage' | 'Maintenance' | 'General Contracting' | 'Repairs';
  initials: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Decra Metal' | 'GAF Timberline' | 'FORTIFIED' | 'Commercial TPO' | 'General Contracting';
  location: string;
  date: string;
  description: string;
  specs: string[];
  image: string;
  highlight: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  leadKicker: string;
  features: string[];
  badge?: string;
  warranty: string;
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'residential',
    title: 'Residential Roofing',
    leadKicker: 'GAF Master Elite® Certified — Top 2% Nationwide',
    shortDesc: 'Complete roof replacements, storm inspections, and designer shingle installations built to withstand severe Texas weather.',
    features: [
      'Full Roof Replacements in high-definition architectural styles',
      'Insurance Damage Valuation & adjuster meeting representation',
      'Class 4 Impact Resistant (IR) shingles for hail protection',
      'Solar Panel Detach & Reset during re-roofing',
      'Emergency leak repairs & attic moisture assessments',
      'Complimentary multi-point roof & decking inspections'
    ],
    badge: 'GAF Master Elite',
    warranty: 'Lifetime Manufacturer Warranty + 25-Yr Workmanship'
  },
  {
    id: 'fortified',
    title: 'IBHS FORTIFIED™ Roofs',
    leadKicker: 'The Gold Standard Against Crazy Texas Storms',
    shortDesc: 'Engineered construction standard developed by IBHS to withstand up to 130 mph straight-line winds and severe hail up to 2 inches.',
    features: [
      'Sealed Roof Deck: Continuous secondary water-barrier underlayment',
      'Ring-Shank Nails: Tightened pattern doubling wind uplift resistance',
      'Reinforced Metal Drip Edge & starter strips along roof perimeter',
      'UL 2218 Class 4 tested impact-resistant shingle systems',
      'Independent 3rd-party certified documentation & photos',
      'Potential substantial homeowner insurance premium discounts'
    ],
    badge: 'FORTIFIED Certified',
    warranty: 'Enhanced IBHS Certification + GAF Master Elite Fortified'
  },
  {
    id: 'commercial',
    title: 'Commercial Roofing',
    leadKicker: 'Licensed, Insured & 14+ Years Industrial Experience',
    shortDesc: 'Full-service flat and low-slope roofing solutions for commercial facilities, offices, retail spaces, and warehouses across DFW.',
    features: [
      'TPO Single-Ply Membrane: High solar reflectivity and energy savings',
      'Stone-Coated Steel & Standing Seam Architectural Metal',
      'Built-Up Roofing (BUR) & elastomeric silicone roof coatings',
      '20-Year Non-Prorated Commercial Warranty available',
      'HVAC curb flashing & commercial roof drainage redesign',
      'Commercial Solar Panel detach and reinstall capabilities'
    ],
    badge: '20-Year Warranty',
    warranty: '20-Year Non-Prorated Manufacturer Warranty'
  },
  {
    id: 'maintenance',
    title: 'Annual Roof Maintenance (ARM)',
    leadKicker: 'Proactive Biannual Care for Homes and Businesses',
    shortDesc: 'Twice-yearly preventative checkups (Spring & Fall) to seal flashings, remove debris, and catch minor issues before catastrophic leaks.',
    features: [
      'Twice-a-year comprehensive inspections (Spring & Fall)',
      'Seal exposed nails, lifted shingle tabs, and pipe boot collars',
      'Clear organic roof debris and gutter flow pathways',
      'Exclusive Member Status: Priority storm response after severe hail',
      'Discounted pricing on any necessary future repair work',
      'Detailed photographic documentation report for insurance records'
    ],
    badge: 'Priority Dispatch',
    warranty: '100% Guaranteed Workmanship on all maintenance seals'
  },
  {
    id: 'contracting',
    title: 'General Contracting & Storm Restoration',
    leadKicker: 'Seamless Coordination of All Exterior & Interior Trades',
    shortDesc: 'From hail-damaged gutters, windows, and siding to custom outdoor living, painting, and interior drywall restoration.',
    features: [
      'Seamless 5" and 6" gutter repair and replacement',
      'Exterior siding, soffit, and fascia board replacement',
      'High-efficiency window replacement & screen repair',
      'Interior water damage repair, drywall, texture & painting',
      'Chimney rebuilds, custom chimney chases, and masonry',
      'On-site project supervisor assigned to every single job'
    ],
    badge: 'Full Supervision',
    warranty: 'Comprehensive Trade Workmanship Guarantee'
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    name: 'Michael Rix',
    source: 'Google',
    rating: 5,
    timeAgo: '2 months ago',
    comment: 'Joe and his team are the best. They have replaced two roofs for me now and have done a great job both times. They are friendly, professional and great at communicating throughout the process. I would not let anyone else work on my roof.',
    tag: 'Full Replacement',
    initials: 'MR'
  },
  {
    id: 'rev-2',
    name: 'Patricia Salas',
    source: 'Google',
    rating: 5,
    timeAgo: '4 months ago',
    comment: 'Hail damage from June 1, 2025 did significant damage to our home and shed. First United Roofing & Construction were very thorough in accessing the damages and what repairs were needed. Kept us informed every step of the way. From solar panel removal and replacement, roof replacement, siding, gutters, metal sheets on patio, and interior work. Reach out to Joe or Matt!',
    tag: 'Storm Damage',
    initials: 'PS'
  },
  {
    id: 'rev-3',
    name: 'Nancy Lee',
    source: 'Google',
    rating: 5,
    timeAgo: '9 months ago',
    comment: 'I recently had the pleasure of working with First United Roofing and I couldn’t be more satisfied with the experience. Their workmanship was absolutely excellent—every detail was handled with precision and care, resulting in a roof that looks fantastic and feels solid. What truly set them apart was their communication. Every question was answered immediately and clearly.',
    tag: 'Full Replacement',
    initials: 'NL'
  },
  {
    id: 'rev-4',
    name: 'David Butts',
    source: 'Google',
    rating: 5,
    timeAgo: '4 months ago',
    comment: 'Very easy to work with and helped with getting insurance to pay their part. Professional from first inspection to clean-up.',
    tag: 'Storm Damage',
    initials: 'DB'
  },
  {
    id: 'rev-5',
    name: 'David B.',
    source: 'BBB',
    rating: 5,
    timeAgo: '4 months ago',
    comment: 'Very professional and worked on our behalf with our insurance company to take care of what we needed. Highly recommend.',
    tag: 'Storm Damage',
    initials: 'DB'
  },
  {
    id: 'rev-6',
    name: 'Patricia C.',
    source: 'BBB',
    rating: 5,
    timeAgo: '4 months ago',
    comment: 'Honest, reliable, very thorough in their inspection of damages. Communicates very well and respects the property. I would definitely use this company if needed and will recommend them to others.',
    tag: 'Storm Damage',
    initials: 'PC'
  },
  {
    id: 'rev-7',
    name: 'Jaymini Patel',
    source: 'Google',
    rating: 5,
    timeAgo: '1 year ago',
    comment: 'First United Roofing (and Joe) were highly recommended by my insurance agent. Joe and his team did the inspection - luckily there was no major hail damage, but some light maintenance was recommended. After the work was completed, the final invoice was even lower than originally quoted because it took less time—so very refreshing in this day and age! Enrolled in their Annual Roof Maintenance program.',
    tag: 'Maintenance',
    initials: 'JP'
  },
  {
    id: 'rev-8',
    name: 'J. Gamble',
    source: 'Google',
    rating: 5,
    timeAgo: '1 year ago',
    comment: 'Installed a new roof for us in November. Joe Singh was the project manager and responded immediately. Joe surveyed the roof with extensive photos and worked with our insurance to get the claim approved. Entire roof replaced in less than 2 days. We experienced a large hailstorm in March and the GAF Timberline Class IV Impact Resistance shingles showed zero damage!',
    tag: 'Full Replacement',
    initials: 'JG'
  },
  {
    id: 'rev-9',
    name: 'Melba & Jim Reeves',
    source: 'Google',
    rating: 5,
    timeAgo: '9 months ago',
    comment: 'These guys are the best of the best. I know nothing about roofing and they knew it! Explained everything very well and got with the program as if I were the only customer they had. Honest, patient, and worked hard to get it done ASAP with little flaw.',
    tag: 'Full Replacement',
    initials: 'MR'
  },
  {
    id: 'rev-10',
    name: 'Tess Harvester',
    source: 'Google',
    rating: 5,
    timeAgo: '9 months ago',
    comment: 'Joe Singh and his team at First United Roofing did an exceptional job replacing my roof and chimney. Their professionalism and attention to detail is second to none. Trustworthy and reliable.',
    tag: 'General Contracting',
    initials: 'TH'
  },
  {
    id: 'rev-11',
    name: 'Matthew Snyder',
    source: 'Google',
    rating: 5,
    timeAgo: '1 year ago',
    comment: 'So thankful I went with First United Roofing. Other roofing companies gave estimates but didn’t go into our attic to check the decking. Joe checked our attic and found out our whole roof needed to be re-decked. If we had gone with someone else, we would have learned of this mid-project! Highly recommend!',
    tag: 'Full Replacement',
    initials: 'MS'
  },
  {
    id: 'rev-12',
    name: 'Nancy Lira',
    source: 'Google',
    rating: 5,
    timeAgo: '2 years ago',
    comment: 'Replaced full roof. Amazing job! Kept me informed of status, took physical pictures and great drone photos. Mostly worked with my insurance company and had them reverse their decision from wanting to replace 20 shingles to a full roof replacement!',
    tag: 'Storm Damage',
    initials: 'NL'
  },
  {
    id: 'rev-13',
    name: 'Lige Mathews',
    source: 'Google',
    rating: 5,
    timeAgo: '7 months ago',
    comment: 'Joe and his people did an outstanding job. They came in behind someone else that couldn’t get the job done. Joe did. From the freeze damages of 2021 and upgrade and renovation, Joe and his professionals did a dynamic job.',
    tag: 'General Contracting',
    initials: 'LM'
  },
  {
    id: 'rev-14',
    name: 'David Kramer',
    source: 'Google',
    rating: 5,
    timeAgo: '1 year ago',
    comment: 'Very professional company! Joe personally came out to review the situation, and then brought in a colleague to review the repairs. They recommended a cheaper solution that fixed the problem and saved us $500 from the initial estimate! Waited for the next rain to confirm the fix before sending the bill.',
    tag: 'Repairs',
    initials: 'DK'
  }
];

export const DFW_CITIES = [
  'Mansfield', 'Arlington', 'Fort Worth', 'Dallas', 'Grand Prairie',
  'Southlake', 'Grapevine', 'Colleyville', 'Frisco', 'Plano',
  'McKinney', 'Irving', 'Bedford', 'Euless', 'Hurst',
  'Burleson', 'Midlothian', 'Weatherford', 'Kennedale', 'Cedar Hill'
];

export const NO_MESS_PLEDGE_ITEMS = [
  {
    step: '01',
    title: 'Property & Landscape Shielding',
    desc: 'Before a single shingle is stripped, we set up tarping over flower beds, ornamental shrubs, patios, AC condensers, and walkways to protect your grounds.'
  },
  {
    step: '02',
    title: 'Controlled Debris Funneling',
    desc: 'Old tear-off materials are directed systematically into dedicated waste containers rather than falling loose into your grass or flower mulch.'
  },
  {
    step: '03',
    title: 'Daily Worksite Tidy-Down',
    desc: 'Our crews never leave nails, loose felt, or dangerous tools out overnight. We sweep and organize every afternoon so your driveway remains 100% accessible.'
  },
  {
    step: '04',
    title: 'High-Power Magnetic Nail Sweeps',
    desc: 'We run heavy-duty wheeled magnets across your yard, lawn edges, and driveways multiple times to pick up stray fasteners, protecting your tires, children, and pets.'
  },
  {
    step: '05',
    title: 'Landscape & Driveway Care',
    desc: 'We position trailers and equipment with ground protection pads so driveways are never cracked or oil-stained by heavy commercial vehicles.'
  },
  {
    step: '06',
    title: 'White-Glove Final Walkthrough',
    desc: 'Your dedicated on-site project supervisor walks the entire perimeter alongside you to inspect gutters, eaves, and grounds before signing off.'
  }
];

export const FAQS_DATA = [
  {
    q: 'What is the New Roof, No Mess Pledge and how does it protect my yard?',
    a: 'Roof replacement is heavy construction, but your property shouldn’t look like a disaster zone. Our pledge guarantees protective landscaping tarps, daily cleanups, dual-pass magnetic nail sweeps, and a final supervisory walkthrough so your yard looks cleaner than when we arrived.'
  },
  {
    q: 'What makes a FORTIFIED™ Roof different from a standard Texas roof?',
    a: 'FORTIFIED is an engineering standard developed by the Insurance Institute for Business & Home Safety (IBHS). It features ring-shank nails (nearly double the wind uplift resistance of smooth nails), sealed roof decking that keeps water out even if shingles are torn away, reinforced drip edges, and Class 4 impact shingles tested against 2-inch hail.'
  },
  {
    q: 'Can a roofer waive or absorb my insurance deductible in Texas?',
    a: 'NO. Under Texas House Bill 2102 (Texas Business & Commerce Code § 27.02), it is a Class B misdemeanor crime for a contractor to pay, waive, rebate, or absorb any portion of a homeowner’s deductible. First United Roofing operates with 100% legal integrity, providing verified itemized invoices to ensure your claim is completely compliant and protected.'
  },
  {
    q: 'Do you meet with the insurance adjuster at my house?',
    a: 'Yes! We conduct a thorough pre-inspection, take high-resolution drone and physical photos of hail and wind damage, mark chalk test squares, and meet your adjuster on the roof to ensure all damaged slopes, flashings, gutters, and decking are accurately included.'
  },
  {
    q: 'What is the Annual Roof Maintenance (ARM) program?',
    a: 'ARM is our preventative care membership. You pay once a year for two thorough checkups (Spring and Fall). We clear gutters, seal lifted shingles, seal exposed nails and vent collars, and provide priority emergency response after major storms along with discounted repair rates.'
  },
  {
    q: 'What financing options are available?',
    a: 'We partner with leading home improvement lenders including Upgrade to offer low monthly payment plans, deferred interest options, and competitive rates with approved credit. You can pre-qualify in minutes without impacting your credit score.'
  }
];
