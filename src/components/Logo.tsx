import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'white' | 'stacked';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md'
}) => {
  const isWhite = variant === 'white';
  const isStacked = variant === 'stacked';

  // Proportional sizing - neat and compact, avoiding oversized elements
  const iconHeight = size === 'sm' ? 'h-6' : size === 'lg' ? 'h-10' : 'h-8';

  return (
    <div
      className={`inline-flex ${
        isStacked ? 'flex-col items-center text-center' : 'items-center gap-2.5'
      } select-none ${className}`}
    >
      {/* Precision Roof Swoosh SVG matching exact proportions from brand asset */}
      <svg
        viewBox="0 0 160 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconHeight} w-auto shrink-0`}
        aria-label="First United Roofing Emblem"
      >
        <defs>
          <linearGradient id="flagRed1" x1="20" y1="5" x2="140" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D32F2F" />
            <stop offset="1" stopColor="#B71C1C" />
          </linearGradient>
          <linearGradient id="flagRed2" x1="25" y1="18" x2="145" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E53935" />
            <stop offset="1" stopColor="#C62828" />
          </linearGradient>
          <linearGradient id="flagBlue" x1="15" y1="30" x2="150" y2="55" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0D2B66" />
            <stop offset="0.6" stopColor="#123B7A" />
            <stop offset="1" stopColor="#1A4A93" />
          </linearGradient>
        </defs>

        {/* Top Crimson Wave Ribbon */}
        <path
          d="M 28 14 Q 55 30 90 28 Q 120 26 142 34 Q 115 22 88 22 Q 55 22 28 14 Z"
          fill="url(#flagRed1)"
        />

        {/* Middle Scarlet Ribbon */}
        <path
          d="M 20 24 Q 55 40 92 37 Q 124 34 148 40 Q 120 31 90 30 Q 52 30 20 24 Z"
          fill="url(#flagRed2)"
        />

        {/* Bottom Blue Wave Ribbon */}
        <path
          d="M 10 36 Q 40 52 82 52 Q 122 52 154 48 Q 134 42 108 38 Q 72 37 40 31 Q 24 28 10 36 Z"
          fill="url(#flagBlue)"
        />

        {/* Crisp White 5-Point Stars inside blue ribbon */}
        {/* Star 1 */}
        <polygon
          points="35,39 36.2,42.5 40,42.5 37,44.7 38.1,48.2 35,46 31.9,48.2 33,44.7 30,42.5 33.8,42.5"
          fill="#FFFFFF"
          transform="scale(0.85) translate(4, 2)"
        />
        {/* Star 2 */}
        <polygon
          points="62,39.5 63.3,43 67,43 64,45.2 65.1,48.7 62,46.5 58.9,48.7 60,45.2 57,43 60.7,43"
          fill="#FFFFFF"
          transform="scale(0.95) translate(3, 1)"
        />
        {/* Star 3 (Center) */}
        <polygon
          points="86,39 87.5,43 92,43 88.5,45.5 89.8,49.5 86,47 82.2,49.5 83.5,45.5 80,43 84.5,43"
          fill="#FFFFFF"
          transform="scale(1.1) translate(-7, -4)"
        />
        {/* Star 4 */}
        <polygon
          points="110,40 111.2,43.2 114.5,43.2 111.8,45.2 112.8,48.5 110,46.5 107.2,48.5 108.2,45.2 105.5,43.2 108.8,43.2"
          fill="#FFFFFF"
          transform="scale(0.95) translate(4, 1)"
        />
        {/* Star 5 */}
        <polygon
          points="132,41.5 133,44.5 136,44.5 133.5,46.2 134.4,49.2 132,47.4 129.6,49.2 130.5,46.2 128,44.5 131,44.5"
          fill="#FFFFFF"
          transform="scale(0.8) translate(28, 6)"
        />
      </svg>

      {/* Typography Lockup */}
      {variant !== 'mark' && (
        <div className={`flex flex-col leading-none ${isStacked ? 'mt-2' : ''}`}>
          <span
            className={`font-extrabold tracking-tight ${
              size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-[15px]'
            } ${isWhite ? 'text-white' : 'text-slate-900'}`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            First United Roofing
          </span>
          <span
            className={`font-semibold tracking-wider uppercase ${
              size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[10px]' : 'text-[9px]'
            } ${isWhite ? 'text-slate-300' : 'text-slate-500'} mt-0.5`}
          >
            &amp; Construction
          </span>
        </div>
      )}
    </div>
  );
};
