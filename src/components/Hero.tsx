import React, { useState } from 'react';
import { motion } from 'motion/react';

import { MapPin, Search, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import { AGENCY_INFO } from '../data/properties';
import { PropertyType, TransactionType } from '../types';

interface HeroProps {
  onDiscoverClick: () => void;
  onFilterChange: (filters: { type?: PropertyType | 'all'; transaction?: TransactionType | 'all'; neighborhood?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverClick, onFilterChange }) => {
  const [selectedType, setSelectedType] = useState<PropertyType | 'all'>('all');
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionType | 'all'>('all');
  const [selectedZone, setSelectedZone] = useState<string>('all');

  const handleWhatsAppHero = () => {
    const text = encodeURIComponent(
      "Bonjour Agence Diame Diallo, je souhaite démarrer un projet immobilier à Dakar (Colobane, Almadies, Rufisque...)."
    );
    window.open(`https://wa.me/${AGENCY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({
      type: selectedType,
      transaction: selectedTransaction,
      neighborhood: selectedZone === 'all' ? undefined : selectedZone,
    });
    onDiscoverClick();
  };

  return (
    <section id="accueil" className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      {/* Background Architectural Image with subtle gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Architecture Dakar Immobilier"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80';
          }}
          className="w-full h-full object-cover object-center opacity-30 md:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fef9f0]/95 via-[#fef9f0]/85 to-[#fef9f0]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Location Badge with Entrance animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            id="hero-location-badge"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-[#e7e2d9] text-[#1d1c16] text-xs md:text-sm font-semibold mb-6 hover:shadow-md transition-shadow"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <MapPin className="w-4 h-4 text-[#d97706]" />
            </motion.div>
            <span>Colobane, Dakar & Sénégal</span>
          </motion.div>

          {/* Headline with Stagger Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            id="hero-main-title"
            className="font-['Manrope'] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#00152a] tracking-tight leading-[1.15] mb-5 text-balance"
          >
            Votre projet immobilier <br className="hidden sm:inline" />
            <span className="text-[#d97706] relative inline-block">
              commence ici
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.7, ease: 'easeInOut' }}
                className="absolute bottom-0 left-0 h-[3px] bg-[#d97706]/40 rounded-full"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            id="hero-description"
            className="text-base sm:text-lg md:text-xl text-[#43474d] leading-relaxed max-w-2xl mb-8 font-normal"
          >
            Maisons, appartements et terrains à vendre ou à louer au Sénégal. L'élégance de l'immobilier dakarois couplée à un accompagnement juridique et notarié d'excellence.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md sm:max-w-lg mb-10"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              id="hero-discover-btn"
              onClick={onDiscoverClick}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00152a] hover:bg-[#102a43] text-white font-['Manrope'] font-bold text-sm sm:text-base rounded-[4px] shadow-md transition-colors"
            >
              <span>Découvrir nos biens</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              id="hero-whatsapp-btn"
              onClick={handleWhatsAppHero}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white hover:bg-neutral-50 text-[#00152a] border border-[#d1d5db] font-['Work_Sans'] font-semibold text-sm sm:text-base rounded-[4px] shadow-sm transition-all"
            >
            <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center text-white">
             <FaWhatsapp className="w-3.5 h-3.5" />
            </div>
              <span>WhatsApp 77 526 41 07</span>
            </motion.button>
          </motion.div>

          {/* Quick Search Interactive Bar for Real Estate Search */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
            id="hero-search-bar"
            className="w-full max-w-4xl bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-lg border border-[#e7e2d9] text-left"
          >
            <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 items-end">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#74777e] mb-1.5 font-['Work_Sans']">
                  Opération
                </label>
                <select
                  id="hero-filter-transaction"
                  value={selectedTransaction}
                  onChange={(e) => setSelectedTransaction(e.target.value as any)}
                  className="w-full bg-[#f8f3ea] border border-[#e7e2d9] rounded-[4px] px-3 py-2 text-sm text-[#00152a] font-medium focus:outline-none focus:border-[#00152a]"
                >
                  <option value="all">Tout (Vente & Location)</option>
                  <option value="vente">Achat / Vente</option>
                  <option value="location">Location</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#74777e] mb-1.5 font-['Work_Sans']">
                  Type de bien
                </label>
                <select
                  id="hero-filter-type"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as any)}
                  className="w-full bg-[#f8f3ea] border border-[#e7e2d9] rounded-[4px] px-3 py-2 text-sm text-[#00152a] font-medium focus:outline-none focus:border-[#00152a]"
                >
                  <option value="all">Tous types</option>
                  <option value="maison">Maison / Villa</option>
                  <option value="appartement">Appartement</option>
                  <option value="terrain">Terrain résidentiel</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#74777e] mb-1.5 font-['Work_Sans']">
                  Zone / Quartier
                </label>
                <select
                  id="hero-filter-zone"
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value)}
                  className="w-full bg-[#f8f3ea] border border-[#e7e2d9] rounded-[4px] px-3 py-2 text-sm text-[#00152a] font-medium focus:outline-none focus:border-[#00152a]"
                >
                  <option value="all">Tout le Sénégal (Dakar, Petite-Côte...)</option>
                  <option value="Colobane">Colobane</option>
                  <option value="Grand Dakar">Grand Dakar</option>
                  <option value="Les Almadies">Les Almadies</option>
                  <option value="Plateau">Dakar Plateau</option>
                  <option value="Fann Résidence">Fann Résidence</option>
                  <option value="Sacré-Cœur">Sacré-Cœur / VDN</option>
                  <option value="Mermoz / Keur Gorgui">Mermoz / Keur Gorgui</option>
                  <option value="Ngor Virage">Ngor Virage</option>
                  <option value="Rufisque">Rufisque</option>
                  <option value="Diamniadio">Diamniadio Pôle Urbain</option>
                  <option value="Saly">Saly / Somone (Petite-Côte)</option>
                  <option value="Toubab Dialaw">Toubab Dialaw</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                id="hero-search-submit-btn"
                className="w-full flex items-center justify-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white font-['Manrope'] font-bold text-sm py-2.5 px-4 rounded-[4px] transition-colors shadow-sm cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Rechercher</span>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
