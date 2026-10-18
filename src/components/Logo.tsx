import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'white' | 'horizontal';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
}) => {
  const isWhite = variant === 'white';
  const [imgError, setImgError] = React.useState(false);
  const textColor = isWhite ? 'text-white' : 'text-[#00152a]';
  const subtitleColor = isWhite ? 'text-amber-400' : 'text-[#c89218]';
  const suarlColor = isWhite ? 'text-amber-300' : 'text-[#c89218]';

  // Size configurations
  const dimensions = {
    sm: { icon: 'w-7 h-7', text: 'text-sm', sub: 'text-[9px]', suarl: 'text-[8px]' },
    md: { icon: 'w-10 h-10', text: 'text-lg', sub: 'text-[10px]', suarl: 'text-[9px]' },
    lg: { icon: 'w-14 h-14', text: 'text-2xl', sub: 'text-xs', suarl: 'text-[11px]' },
    xl: { icon: 'w-20 h-20', text: 'text-3xl', sub: 'text-sm', suarl: 'text-xs' },
  }[size];

  const heightClass = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  }[size];

  if (!imgError) {
    if (isWhite) {
      return (
        <div className={`inline-flex items-center bg-white px-3 py-1.5 rounded-xl shadow-sm border border-amber-400/20 ${className}`}>
          <img
            src="/logodiame.jpeg"
            alt="Agence Immobilière Diame Diallo SUARL"
            className={`${heightClass} w-auto object-contain`}
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
          className={`${heightClass} w-auto object-contain`}
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  // The custom vector mark matching Image 3 precisely
  const LogoEmblem = ({ className: emblemClass = 'w-12 h-12' }: { className?: string }) => (
    <svg
      viewBox="0 0 160 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${emblemClass} drop-shadow-sm`}
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="roofGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>

      {/* D Outer Ring / Arch - Orange / Gold */}
      <path
        d="M 54 22 C 86 20, 126 38, 126 78 C 126 112, 92 128, 62 128"
        stroke="url(#goldGradient)"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />

      {/* D Left Vertical Stem - Solid Midnight Navy/Black */}
      <path
        d="M 38 22 L 56 22 L 56 128 L 38 128 Z"
        fill={isWhite ? '#ffffff' : '#00152a'}
      />
      <path
        d="M 32 22 L 62 22 L 62 27 L 32 27 Z"
        fill={isWhite ? '#ffffff' : '#00152a'}
      />
      <path
        d="M 32 123 L 62 123 L 62 128 L 32 128 Z"
        fill={isWhite ? '#ffffff' : '#00152a'}
      />

      {/* Modern High-Rise Buildings Silhouette inside the D */}
      {/* Tall Dark Tower */}
      <rect x="74" y="32" width="22" height="68" fill="#00152a" rx="1" />
      {/* Tall Gold Windows Column */}
      <rect x="78" y="38" width="4" height="7" fill="#fbbf24" />
      <rect x="78" y="49" width="4" height="7" fill="#fbbf24" />
      <rect x="78" y="60" width="4" height="7" fill="#fbbf24" />
      <rect x="78" y="71" width="4" height="7" fill="#fbbf24" />
      <rect x="86" y="38" width="4" height="7" fill="#fbbf24" />
      <rect x="86" y="49" width="4" height="7" fill="#fbbf24" />
      <rect x="86" y="60" width="4" height="7" fill="#fbbf24" />
      <rect x="86" y="71" width="4" height="7" fill="#fbbf24" />

      {/* Medium Left Building with Gold Facet */}
      <polygon points="56,66 72,52 72,100 56,100" fill="url(#goldGradient)" />
      <polygon points="52,70 56,66 56,100 52,100" fill="#d97706" />
      {/* Windows on medium building */}
      <rect x="60" y="68" width="3" height="5" fill="#ffffff" />
      <rect x="66" y="62" width="3" height="5" fill="#ffffff" />
      <rect x="60" y="78" width="3" height="5" fill="#ffffff" />
      <rect x="66" y="74" width="3" height="5" fill="#ffffff" />
      <rect x="60" y="88" width="3" height="5" fill="#ffffff" />
      <rect x="66" y="85" width="3" height="5" fill="#ffffff" />

      {/* Small Right Dark Building */}
      <rect x="98" y="56" width="14" height="44" fill="#00152a" rx="1" />
      <rect x="102" y="62" width="2.5" height="5" fill="#fbbf24" />
      <rect x="107" y="62" width="2.5" height="5" fill="#fbbf24" />
      <rect x="102" y="71" width="2.5" height="5" fill="#fbbf24" />
      <rect x="107" y="71" width="2.5" height="5" fill="#fbbf24" />

      {/* Residential House Gable / Roof in Foreground */}
      <polygon
        points="80,72 128,106 122,106 80,78 38,106 32,106"
        fill="url(#roofGradient)"
      />
      <polygon
        points="80,76 124,106 116,106 80,82 44,106 36,106"
        fill="#00152a"
      />

      {/* House Front Façade with 4 Windows */}
      <polygon points="54,105 80,86 106,105" fill={isWhite ? '#ffffff' : '#f8f3ea'} />
      {/* 4 Window Panes */}
      <rect x="73" y="93" width="5.5" height="5.5" fill="#00152a" />
      <rect x="81.5" y="93" width="5.5" height="5.5" fill="#00152a" />
      <rect x="73" y="100.5" width="5.5" height="5.5" fill="#00152a" />
      <rect x="81.5" y="100.5" width="5.5" height="5.5" fill="#00152a" />

      {/* Dynamic Swoosh Base Line */}
      <path
        d="M 24 116 Q 80 98 136 116 Q 80 106 24 116 Z"
        fill={isWhite ? '#ffffff' : '#00152a'}
      />
    </svg>
  );

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <LogoEmblem className={dimensions.icon} />
        <div className="flex flex-col">
          <span className={`font-['Manrope'] font-bold ${dimensions.text} tracking-tight ${textColor} leading-tight`}>
            DIAME DIALLO
          </span>
          <span className={`font-['Work_Sans'] font-medium text-[9px] uppercase tracking-widest ${subtitleColor}`}>
            Agence Immobilière
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <LogoEmblem className="w-12 h-12 flex-shrink-0" />
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span className="h-[1px] w-3 bg-amber-500"></span>
            <span className={`text-[9px] font-bold tracking-[0.2em] uppercase ${subtitleColor}`}>
              Agence Immobilière
            </span>
            <span className="h-[1px] w-3 bg-amber-500"></span>
          </div>
          <span className={`font-['Manrope'] font-extrabold text-xl tracking-tight ${textColor} leading-none my-0.5`}>
            DIAME DIALLO
          </span>
          <div className="flex items-center gap-1.5">
            <span className="h-[1px] w-4 bg-amber-500"></span>
            <span className={`text-[8px] font-semibold tracking-[0.25em] uppercase ${suarlColor}`}>
              SUARL
            </span>
            <span className="h-[1px] w-4 bg-amber-500"></span>
          </div>
        </div>
      </div>
    );
  }

  // Full stacked logo matching Image 3 precisely
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <LogoEmblem className={dimensions.icon} />
      
      {/* Top Tagline with Gold Lines */}
      <div className="flex items-center justify-center gap-2 mt-2 w-full max-w-[240px]">
        <div className="h-[1.5px] flex-1 bg-[#d97706]/70"></div>
        <span className={`font-['Work_Sans'] font-bold ${dimensions.sub} tracking-[0.25em] uppercase ${subtitleColor} whitespace-nowrap`}>
          Agence Immobilière
        </span>
        <div className="h-[1.5px] flex-1 bg-[#d97706]/70"></div>
      </div>

      {/* Main Name */}
      <h1 className={`font-['Manrope'] font-black ${dimensions.text} tracking-tight ${textColor} my-0.5 uppercase`}>
        DIAME DIALLO
      </h1>

      {/* Bottom Tagline SUARL with Gold Lines */}
      <div className="flex items-center justify-center gap-2 w-full max-w-[180px]">
        <div className="h-[1.5px] flex-1 bg-[#d97706]/70"></div>
        <span className={`font-['Work_Sans'] font-bold ${dimensions.suarl} tracking-[0.35em] uppercase ${suarlColor}`}>
          SUARL
        </span>
        <div className="h-[1.5px] flex-1 bg-[#d97706]/70"></div>
      </div>
    </div>
  );
};
