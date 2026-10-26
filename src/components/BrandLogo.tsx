import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md'
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl'
  };

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Custom Vector Healthcare Emblem */}
      <div
        className={`${iconSizes[size]} rounded-xl bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900 p-2 shadow-md flex items-center justify-center shrink-0 border border-teal-500/30 group-hover:scale-105 transition-transform`}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Subtle Shield Backdrop */}
          <path
            d="M20 4L7 9V19C7 27.5 12.5 35 20 37C27.5 35 33 27.5 33 19V9L20 4Z"
            fill="rgba(20, 184, 166, 0.2)"
            stroke="#2DD4BF"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Medical Cross with Rounded Edges */}
          <path
            d="M17 12H23V17H28V23H23V28H17V23H12V17H17V12Z"
            fill="#FFFFFF"
          />
          {/* Caring Heart Accent in Center */}
          <path
            d="M20 18.2C19.2 16.8 17.2 16.5 16 17.8C14.8 19.1 15 21 16.8 22.8L20 25.5L23.2 22.8C25 21 25.2 19.1 24 17.8C22.8 16.5 20.8 16.8 20 18.2Z"
            fill="#0F766E"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-extrabold tracking-tight leading-tight whitespace-nowrap ${textSizes[size]} ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}
        >
          Ahmedabad Nursing Cares
        </span>
        <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase">
          <span className="text-teal-600">Home Health</span>
          <span className={isLight ? 'text-slate-400' : 'text-slate-500'}>·</span>
          <span className={isLight ? 'text-slate-500' : 'text-teal-300'}>Ahmedabad, Gujarat</span>
        </div>
      </div>
    </div>
  );
};
