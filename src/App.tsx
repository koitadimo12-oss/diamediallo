/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { FeaturedProperties } from './components/FeaturedProperties';
import { MortgageCalculator } from './components/MortgageCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { Property, PropertyType, TransactionType } from './types';
import { FALLBACK_PROPERTY_IMAGE } from './data/properties';

export default function App() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Filters passed from Hero search to Listings
  const [filters, setFilters] = useState<{
    type?: PropertyType | 'all';
    transaction?: TransactionType | 'all';
    neighborhood?: string;
  }>({
    type: 'all',
    transaction: 'all',
    neighborhood: undefined,
  });

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleHeroFilter = (newFilters: {
    type?: PropertyType | 'all';
    transaction?: TransactionType | 'all';
    neighborhood?: string;
  }) => {
    setFilters(newFilters);
  };

  const handleDiscoverClick = () => {
    handleNavigate('biens');
  };

  return (
    <div className="relative min-h-screen text-[#1d1c16] flex flex-col font-['Work_Sans',sans-serif]">
      {/* 🌟 Fixed Beautiful Background Image across the entire page */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          alt="Arrière-plan Immobilier Dakar"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = FALLBACK_PROPERTY_IMAGE;
          }}
          className="w-full h-full object-cover object-center"
        />
        {/* Warm luxury sand & beige gradient overlay for perfect readability and elegance */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fef9f0]/92 via-[#fef9f0]/88 to-[#fef9f0]/95 backdrop-blur-[2px]" />
        
        {/* Subtle architectural geometric grid pattern */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(#00152a 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Sticky Navigation matching Image 1 */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Content Sections with translucent warm layers */}
      <main className="relative z-10 flex-1">
        {/* 1. Hero Section */}
        <Hero
          onDiscoverClick={handleDiscoverClick}
          onFilterChange={handleHeroFilter}
        />

        {/* 2. Stats 4-Card Grid matching Image 1 */}
        <Stats />

        {/* 3. À Propos Section with Director Portrait & 4 Pillars matching Image 1 */}
        <About />

        {/* 4. Nos Services Section matching Image 1 */}
        <Services
          onContactRequest={(service) => {
            handleNavigate('contact');
          }}
        />

        {/* 5. Biens à la Une Listings & Filter Tabs matching Image 1 */}
        <FeaturedProperties
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          selectedFilterType={filters.type}
          selectedFilterTransaction={filters.transaction}
          selectedFilterZone={filters.neighborhood}
        />

        {/* 6. Financing / Diaspora Mortgage Calculator */}
        <MortgageCalculator />

        {/* 7. Contact Section matching Image 1 */}
        <ContactSection />
      </main>

      {/* 8. Footer matching Image 1 */}
      <Footer onNavigate={handleNavigate} />

      {/* 9. Floating WhatsApp Button matching Image 1 */}
      <FloatingWhatsApp />

      {/* 10. Interactive Property Detail Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </div>
  );
}
