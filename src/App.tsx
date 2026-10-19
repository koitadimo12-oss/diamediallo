import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { ServicePage } from './pages/ServicePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ConseilsPage } from './pages/ConseilsPage';
import { ConseilDetailPage } from './pages/ConseilDetailPage';
import { VideosPage } from './pages/VideosPage';
import { MentionsLegalesPage } from './pages/MentionsLegalesPage';
import { ConfidentialitePage } from './pages/ConfidentialitePage';
import { ConditionsGeneralesPage } from './pages/ConditionsGeneralesPage';
import { NotFoundPage } from './pages/NotFoundPage';

/**
 * Ensures page scroll is reset to the top whenever navigation occurs
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/biens" element={<PropertiesPage />} />
        <Route path="/biens/:slug" element={<PropertyDetailPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/conseils" element={<ConseilsPage />} />
        <Route path="/conseils/:slug" element={<ConseilDetailPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
        <Route path="/confidentialite" element={<ConfidentialitePage />} />
        <Route path="/conditions" element={<ConditionsGeneralesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

