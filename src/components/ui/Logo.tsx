import React, { useState } from 'react';

interface LogoProps {
variant?: 'full' | 'compact' | 'horizontal' | 'badge';
size?: 'sm' | 'md' | 'lg' | 'xl';
dark?: boolean;
className?: string;
}

const SIZE_CLASSES = {
sm: 'h-10 sm:h-12',
md: 'h-14 sm:h-16 md:h-[72px]',
lg: 'h-16 sm:h-20 md:h-[88px]',
xl: 'h-20 sm:h-24 md:h-28',
};

export const Logo: React.FC<LogoProps> = ({
variant = 'compact',
size = 'md',
dark = false,
className = '',
}) => {
const [imgError, setImgError] = useState(false);
const heightClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;

if (!imgError) {
return (
<div className={`inline-flex items-center ${className}`}>
<img
src="/logodiame.png"
alt="Agence Immobilière D.DIALLO SUARL"
className={`${heightClass} w-auto object-contain max-w-full`}
onError={() => {
console.error('Impossible de charger /logodiame.png');
setImgError(true);
}}
/> </div>
);
}

const textColor = dark ? 'text-white' : 'text-[#10243A]';
const goldColor = 'text-[#C8A96B]';

return (
<div
className={`flex items-center gap-3 select-none ${className}`}
aria-label="Agence Immobilière D.DIALLO"
> <div className="relative flex-shrink-0">
<div
className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#C8A96B]/40"
style={{
background: 'linear-gradient(135deg, #10243A 60%, #1c3654 100%)',
}}
>
<span
className="text-[#C8A96B] font-black text-2xl leading-none"
style={{ fontFamily: 'Georgia, serif' }}
>
DD </span> </div> </div>

```
  <div className="flex flex-col leading-tight">
    <span
      className={`font-black text-base sm:text-lg tracking-wider uppercase ${textColor}`}
      style={{ fontFamily: 'Georgia, serif' }}
    >
      D.DIALLO
    </span>

    <span
      className={`text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold ${goldColor}`}
    >
      Immobilier · Dakar
    </span>
  </div>
</div>


);
};
