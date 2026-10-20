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

  const LogoImage: React.FC<LogoImageProps> = ({
    className: imageClass,
  }) => (
    <img
      src="/logodiame.png"
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

  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
    >
      <LogoImage
        className={`${dimensions} w-auto object-contain block`}
      />
    </div>
  );
};