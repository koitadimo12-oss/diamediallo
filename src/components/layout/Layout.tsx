import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingWhatsApp } from '../FloatingWhatsApp';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f1] text-[#10243A]">
      <Navbar />
      <main id="main-content" className="flex-1 pt-[var(--nav-h)]" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};
