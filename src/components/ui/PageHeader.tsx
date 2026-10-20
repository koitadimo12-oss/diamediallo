import React from 'react';
import { Link } from 'react-router-dom';

interface Crumb {
  label: string;
  path?: string;
}

interface PageHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  kicker,
  title,
  subtitle,
  crumbs,
}) => {
  return (
    <header className="bg-[#f4f0e6] border-b border-[#e4dccb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Fil d'Ariane" className="mb-5 text-[13px] text-[#6b7280]">
            {crumbs.map((c, i) => (
              <span key={`${c.label}-${i}`}>
                {i > 0 && <span className="mx-2 text-[#c8a96b]">/</span>}
                {c.path ? (
                  <Link to={c.path} className="hover:text-[#10243A] transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-[#10243A]">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {kicker && (
          <p className="text-[13px] font-semibold text-[#8a6a2a] mb-2 tracking-wide">{kicker}</p>
        )}
        <h1 className="text-[1.85rem] sm:text-4xl text-[#10243A] leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-[#5c6570] text-[15px] leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
};
