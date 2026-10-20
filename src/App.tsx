
import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

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
import { NotFoundPage } from './pages/NotFoundPage';

/**
 * Gère le défilement lors des changements de page.
 * Si une ancre existe dans l'URL, défile jusqu'à cette section.
 * Sinon, remonte en haut de la page.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let attempts = 0;
      let timer: ReturnType<typeof setTimeout>;

      const scrollToElement = () => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
          return;
        }

        // Attend le rendu de la section si nécessaire.
        if (attempts < 20) {
          attempts += 1;
          timer = setTimeout(scrollToElement, 100);
        }
      };

      timer = setTimeout(scrollToElement, 0);

      return () => clearTimeout(timer);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname, hash]);

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

        <Route
          path="/mentions-legales"
          element={<MentionsLegalesPage />}
        />

        <Route
          path="/confidentialite"
          element={<ConfidentialitePage />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

