import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Phone } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { usePageMeta } from '../hooks/usePageMeta';
import { AGENCY_CONFIG } from '../data';

export const NotFoundPage: React.FC = () => {
  usePageMeta({
    title: `Page non trouvée — 404 | ${AGENCY_CONFIG.name}`,
    description: `La page que vous recherchez n'est pas disponible ou a été déplacée. Retrouvez nos biens immobiliers et nos services à Dakar.`,
  });

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center">
        <span className="text-6xl sm:text-7xl font-bold text-[#10243A]/15 mb-4">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl text-[#10243A] mb-3">
          Page non trouvée
        </h1>
        <p className="text-[#5c6570] text-[15px] max-w-md mx-auto mb-8 leading-relaxed">
          La page que vous tentez d'ouvrir n'existe pas ou a été déplacée. Consultez nos annonces ou revenez à l'accueil.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#10243A] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#1a3550] transition-colors"
          >
            <Home className="w-4 h-4 text-[#C8A96B]" />
            Retour à l'accueil
          </Link>
          <Link
            to="/biens"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F5F6F8] text-[#10243A] border border-slate-200 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
          >
            <Search className="w-4 h-4 text-[#C8A96B]" />
            Consulter les biens
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#10243A] border border-slate-200 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#C8A96B]" />
            Nous contacter
          </Link>
        </div>
      </div>
    </Layout>
  );
};
