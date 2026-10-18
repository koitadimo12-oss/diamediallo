import React, { useState } from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'horizontal' | 'badge';
  dark?: boolean;
  className?: string;
}

/**
 * Logo officiel de l'Agence Immobilière Diame Diallo SUARL.
 * Utilise l'image uploadée logodiame.jpeg avec fallback stylisé.
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'compact',
  dark = false,
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    if (dark) {
      return (
        <div className={`inline-flex items-center gap-3 bg-white px-3 py-1.5 rounded-xl shadow-md border border-amber-400/30 ${className}`}>
          <img
            src="/logodiame.jpeg"
            alt="Agence Immobilière Diame Diallo SUARL"
            className="h-10 sm:h-12 w-auto object-contain"
            onError={() => setImgError(true)}
          />
        </div>
      );
    }

    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src="/logodiame.jpeg"
          alt="Agence Immobilière Diame Diallo SUARL"
          className="h-11 sm:h-13 w-auto object-contain drop-shadow-sm hover:scale-[1.02] transition-transform duration-200"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  // Fallback élégant si l'image ne charge pas
  const textColor = dark ? 'text-white' : 'text-[#10243A]';
  const goldColor = 'text-[#d97706]';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`} aria-label="Agence Immobilière Diame Diallo">
      <div className="relative flex-shrink-0">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm"
          style={{ background: 'linear-gradient(135deg, #10243A 60%, #d97706 100%)' }}
        >
          <span className="text-white font-black text-lg leading-none" style={{ fontFamily: 'Georgia, serif' }}>
            DD
          </span>
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#d97706] rounded-sm" />
      </div>

      <div className="flex flex-col leading-none">
        <span className={`font-black text-sm tracking-widest uppercase ${textColor}`} style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.12em' }}>
          Diame Diallo
        </span>
        <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold mt-0.5 ${goldColor}`}>
          Agence Immobilière SUARL
        </span>
      </div>
    </div>
  );
};

