import React, { useState } from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'horizontal' | 'badge';
  dark?: boolean;
  className?: string;
}

/**
 * Logo officiel — PNG transparent (fond papier retiré).
 */
export const Logo: React.FC<LogoProps> = ({
  dark = false,
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);

  const heightClass = dark
    ? 'h-14 sm:h-16'
    : 'h-11 sm:h-[3.15rem]';

  if (!imgError) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src="/logodiame.png?v=2"
          alt="Agence Immobilière Diame Diallo SUARL"
          className={`${heightClass} w-auto max-w-[220px] sm:max-w-[260px] object-contain object-left`}
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  const textColor = dark ? 'text-white' : 'text-[#10243A]';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`} aria-label="Agence Immobilière Diame Diallo">
      <div
        className="w-11 h-11 rounded-md flex items-center justify-center"
        style={{ background: '#10243A' }}
      >
        <span className="text-[#C8A96B] font-extrabold text-lg leading-none tracking-tight">DD</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-extrabold text-[15px] tracking-wide uppercase ${textColor}`}>
          Diame Diallo
        </span>
        <span className="text-[10px] uppercase tracking-[0.16em] font-medium mt-1 text-[#b08a3c]">
          Agence Immobilière
        </span>
      </div>
    </div>
  );
};
