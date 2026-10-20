import React from 'react';

interface LogoProps {
variant?: 'full' | 'compact' | 'white' | 'horizontal';
className?: string;
size?: 'sm' | 'md' | 'lg' | 'xl';
}

interface LogoImageProps {
className: string;
}

export const Logo: React.FC<LogoProps> = ({
variant = 'full',
className = '',
size = 'md',
}) => {
const dimensions = {
sm: 'h-8 sm:h-9',
md: 'h-10 sm:h-12',
lg: 'h-14 sm:h-16',
xl: 'h-20 sm:h-24',
}[size];

const isWhite = variant === 'white';

const LogoImage: React.FC<LogoImageProps> = ({ className: imageClass }) => (
<img
src="/logodiame.jpeg"
alt="Logo Agence Immobilière Diame Diallo SUARL"
className={imageClass}
onError={(event) => {
console.error(
'Erreur de chargement du logo :',
event.currentTarget.src
);
}}
/>
);

if (variant === 'compact') {
return (
<div className={`inline-flex items-center ${className}`}>
<LogoImage className={`${dimensions} w-auto object-contain`} /> </div>
);
}

if (variant === 'horizontal') {
return (
<div className={`inline-flex items-center ${className}`}>
<LogoImage className={`${dimensions} w-auto object-contain`} /> </div>
);
}

if (isWhite) {
return (
<div
className={`inline-flex items-center justify-center rounded-xl border border-amber-400/20 bg-white px-3 py-1.5 shadow-sm ${className}`}
>
<LogoImage className={`${dimensions} w-auto object-contain`} /> </div>
);
}

return (
<div className={`inline-flex items-center justify-center ${className}`}>
<LogoImage className={`${dimensions} w-auto object-contain`} /> </div>
);
};
