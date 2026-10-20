import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/sections/Hero';
import { FeaturedProperties } from '../components/sections/FeaturedProperties';
import { ServicesSection } from '../components/sections/ServicesSection';
import { DiasporaSection } from '../components/sections/DiasporaSection';
import { StatsSection } from '../components/sections/StatsSection';
import { MotDeDirectrice } from '../components/sections/MotDeDirectrice';
import { ConseilsSection } from '../components/sections/ConseilsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { MortgageCalculator } from '../components/MortgageCalculator';
import { ContactSection } from '../components/sections/ContactSection';
import { FaqSection } from '../components/sections/FaqSection';
import { usePageMeta } from '../hooks/usePageMeta';
import { AGENCY_CONFIG } from '../data';

export const HomePage: React.FC = () => {
  usePageMeta({
    title: `${AGENCY_CONFIG.name} — Partenaire de confiance pour vos projets fonciers au Sénégal`,
    description: `${AGENCY_CONFIG.name} (${AGENCY_CONFIG.commonName}) à Colobane, Dakar. Achat et vente de terrains, gestion locative, intermédiation immobilière et conseil foncier au Sénégal.`,
    canonical: `${AGENCY_CONFIG.siteUrl}/`,
    ogImage: '/logodiame.png',
  });

  return (
    <Layout>
      {/* 1 & 2. Hero immersif + Moteur de recherche */}
      <Hero />

      {/* 3. Biens immobiliers disponibles */}
      <FeaturedProperties />

      {/* 4. Les quatre grands services */}
      <ServicesSection />

      {/* 5. Confiance & Accompagnement Diaspora */}
      <DiasporaSection />

      {/* 6. Notre expérience de terrain à Dakar */}
      <StatsSection />

      {/* 7. Le mot de Diamé Diallo */}
      <MotDeDirectrice />

      {/* 8. Conseils immobiliers & Vidéos */}
      <ConseilsSection />

      {/* 9. Témoignages authentiques */}
      <TestimonialsSection />

      {/* 10. Simulateur de Financement & Budget */}
      <MortgageCalculator />

      {/* 11. Questions fréquentes */}
      <FaqSection />

      {/* 12. Contact & Localisation Colobane */}
      <ContactSection />
    </Layout>
  );
};
