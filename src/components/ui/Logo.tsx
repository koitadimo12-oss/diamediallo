import React, { useState } from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'horizontal' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  dark?: boolean;
  className?: string;
}

const SIZE_CLASSES = {
  sm: 'h-10 sm:h-12',
  md: 'h-14 sm:h-16 md:h-18',
  lg: 'h-16 sm:h-20 md:h-22',
  xl: 'h-20 sm:h-24 md:h-28',
};

/**
 * Logo officiel de l'Agence Immobilière D.DIALLO SUARL (Agence Diamé Diallo).
 * Agrandit pour une visibilité optimale et un rendu haut de gamme (style Sotheby's).
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'compact',
  size = 'md',
  dark = false,
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);
  const heightClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;

  if (!imgError) {
    if (dark) {
      return (
        <div className={`inline-flex items-center bg-white px-3.5 py-2 rounded-2xl shadow-lg border border-amber-400/40 hover:border-amber-400 transition-all ${className}`}>
          <img
            src="/logodiame.jpeg"
            alt="Agence Immobilière D.DIALLO SUARL"
            className={`${heightClass} w-auto object-contain max-w-full`}
            onError={() => setImgError(true)}
          />
        </div>
      );
    }

    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src="/logodiame.jpeg"
          alt="Agence Immobilière D.DIALLO SUARL"
          className={`${heightClass} w-auto object-contain drop-shadow-md hover:scale-[1.03] transition-all duration-300`}
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  // Fallback architectural haut de gamme si l'image ne charge pas
  const textColor = dark ? 'text-white' : 'text-[#10243A]';
  const goldColor = 'text-[#C8A96B]';

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`} aria-label="Agence Immobilière D.DIALLO">
      <div className="relative flex-shrink-0">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md border border-[#C8A96B]/40"
          style={{ background: 'linear-gradient(135deg, #10243A 60%, #1c3654 100%)' }}
        >
          <span className="text-[#C8A96B] font-black text-2xl leading-none" style={{ fontFamily: 'Georgia, serif' }}>
            DD
          </span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#C8A96B] rounded-md shadow-sm" />
      </div>

      <div className="flex flex-col leading-tight">
        <span className={`font-black text-base sm:text-lg tracking-wider uppercase ${textColor}`} style={{ fontFamily: 'Georgia, serif' }}>
          D.DIALLO
        </span>
        <span className={`text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold ${goldColor}`}>
          Immobilier · Dakar
        </span>
      </div>
    </div>
  );
};
