import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bed,
  Bath,
  Maximize2,
  MapPin,
  CheckCircle2,
  MessageSquare,
  Eye,
  SlidersHorizontal,
  FileCheck,
  Building,
  Sparkles,
  Camera,
  Layers,
} from 'lucide-react';
import { Property, PropertyType, TransactionType } from '../types';
import { PROPERTIES_DATA, AGENCY_INFO, FALLBACK_PROPERTY_IMAGE } from '../data/properties';

interface FeaturedPropertiesProps {
  onSelectProperty: (property: Property) => void;
  selectedFilterType?: PropertyType | 'all';
  selectedFilterTransaction?: TransactionType | 'all';
  selectedFilterZone?: string;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  onSelectProperty,
  selectedFilterType = 'all',
  selectedFilterTransaction = 'all',
  selectedFilterZone,
}) => {
  const [activeTab, setActiveTab] = useState<PropertyType | 'all'>(
    selectedFilterType || 'all'
  );
  const [activeTransaction, setActiveTransaction] = useState<TransactionType | 'all'>(
    selectedFilterTransaction || 'all'
  );
  const [showAllListings, setShowAllListings] = useState(false);

  // Counts
  const counts = useMemo(() => {
    return {
      all: PROPERTIES_DATA.length,
      maison: PROPERTIES_DATA.filter((p) => p.type === 'maison').length,
      appartement: PROPERTIES_DATA.filter((p) => p.type === 'appartement').length,
      terrain: PROPERTIES_DATA.filter((p) => p.type === 'terrain').length,
    };
  }, []);

  const filterTabs = [
    { id: 'all', label: 'Tous', count: counts.all },
    { id: 'maison', label: 'Maisons & Villas', count: counts.maison },
    { id: 'appartement', label: 'Appartements', count: counts.appartement },
    { id: 'terrain', label: 'Terrains & Parcelles', count: counts.terrain },
  ] as const;

  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((item) => {
      if (activeTab !== 'all' && item.type !== activeTab) {
        return false;
      }
      if (activeTransaction !== 'all' && item.transaction !== activeTransaction) {
        return false;
      }
      if (selectedFilterZone && selectedFilterZone !== 'all') {
        const matchesNeighborhood =
          item.location.neighborhood.toLowerCase().includes(selectedFilterZone.toLowerCase()) ||
          item.location.city.toLowerCase().includes(selectedFilterZone.toLowerCase());
        if (!matchesNeighborhood) return false;
      }
      return true;
    });
  }, [activeTab, activeTransaction, selectedFilterZone]);

  const displayedProperties = showAllListings
    ? filteredProperties
    : filteredProperties.slice(0, 6);

  const handleWhatsAppInterest = (property: Property, e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = encodeURIComponent(
      `Bonjour Agence Diame Diallo, je suis très intéressé(e) par le bien "${property.title}" (Réf: ${property.reference}) situé à ${property.location.neighborhood}, Dakar au prix de ${property.priceDisplay}. Pourriez-vous m'envoyer plus de détails et convenir d'une visite ?`
    );
    window.open(`https://wa.me/${AGENCY_INFO.whatsapp.replace(/\+/g, '')}?text=${msg}`, '_blank');
  };

  return (
    <section id="biens" className="py-14 md:py-20 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#d97706] mb-1 block">
              Opportunités Immobilières au Sénégal
            </span>
            <h2 className="font-['Manrope'] font-extrabold text-2xl sm:text-3xl text-[#00152a] tracking-tight">
              Biens à la Une & Nouveautés
            </h2>
          </div>
          <div className="text-right">
            <span className="text-xs text-[#74777e] font-medium">
              {filteredProperties.length} bien(s) vérifié(s) avec Titre Foncier / Bail
            </span>
            <div className="w-16 h-[3px] bg-[#d97706] ml-auto mt-1 rounded-full" />
          </div>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id={`filter-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-[4px] transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#00152a] text-white shadow-md'
                    : 'bg-white/80 hover:bg-white text-[#43474d] border border-[#e7e2d9]'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-[#74777e]'
                }`}>
                  {tab.count}
                </span>
              </motion.button>
            );
          })}

          {/* Quick Transaction Switcher */}
          <div className="ml-auto hidden sm:flex items-center gap-1.5 bg-white/80 p-1 rounded-[4px] border border-[#e7e2d9] shadow-sm">
            <button
              onClick={() => setActiveTransaction('all')}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-[3px] transition-colors cursor-pointer ${
                activeTransaction === 'all'
                  ? 'bg-[#d97706] text-white'
                  : 'text-[#74777e] hover:text-[#00152a]'
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setActiveTransaction('vente')}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-[3px] transition-colors cursor-pointer ${
                activeTransaction === 'vente'
                  ? 'bg-[#d97706] text-white'
                  : 'text-[#74777e] hover:text-[#00152a]'
              }`}
            >
              Vente
            </button>
            <button
              onClick={() => setActiveTransaction('location')}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-[3px] transition-colors cursor-pointer ${
                activeTransaction === 'location'
                  ? 'bg-[#d97706] text-white'
                  : 'text-[#74777e] hover:text-[#00152a]'
              }`}
            >
              Location
            </button>
          </div>
        </div>

        {/* Property Cards List with Animated In-View Transitions */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {displayedProperties.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white/95 rounded-xl p-10 text-center border border-[#e7e2d9]"
              >
                <Building className="w-10 h-10 text-[#d97706] mx-auto mb-3 opacity-60" />
                <h3 className="font-['Manrope'] font-bold text-lg text-[#00152a] mb-1">
                  Aucun bien correspondant pour le moment
                </h3>
                <p className="text-sm text-[#43474d] mb-4">
                  Nous avons de nouvelles opportunités non publiées à Dakar et dans les régions du Sénégal.
                </p>
                <button
                  onClick={() => {
                    setActiveTab('all');
                    setActiveTransaction('all');
                  }}
                  className="px-4 py-2 bg-[#00152a] text-white rounded-[4px] text-xs font-bold cursor-pointer"
                >
                  Réinitialiser les filtres
                </button>
              </motion.div>
            ) : (
              displayedProperties.map((prop, idx) => {
                const isSale = prop.transaction === 'vente';
                const photoCount = (prop.galleryUrls && prop.galleryUrls.length > 0) ? prop.galleryUrls.length : 1;
                return (
                  <motion.div
                    key={prop.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: 'easeOut' }}
                    whileHover={{ y: -4, transition: { duration: 0.25 } }}
                    id={`property-card-${prop.id}`}
                    onClick={() => onSelectProperty(prop)}
                    className="bg-white rounded-xl overflow-hidden border border-[#e7e2d9]/90 shadow-[0_4px_20px_rgba(0,21,42,0.04)] hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  >
                    {/* Property Image with Status Badge matching Image 1 */}
                    <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-neutral-100">
                      <img
                        src={prop.imageUrl}
                        alt={prop.title}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = FALLBACK_PROPERTY_IMAGE;
                        }}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Status Badge in Top Right as in Image 1 */}
                      <div className="absolute top-3.5 right-3.5 z-10">
                        <span
                          className={`px-3 py-1 text-[11px] font-['Manrope'] font-extrabold uppercase tracking-wider rounded-[3px] shadow-sm ${
                            isSale
                              ? 'bg-[#d97706] text-white'
                              : 'bg-[#00152a] text-white'
                          }`}
                        >
                          {isSale ? 'À VENDRE' : 'À LOUER'}
                        </span>
                      </div>

                      {/* Title Deed / TF badge */}
                      {prop.hasTitleDeed && (
                        <div className="absolute top-3.5 left-3.5 z-10">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur-md text-[#00152a] text-[10px] font-bold rounded-[3px] shadow-sm">
                            <FileCheck className="w-3 h-3 text-[#d97706]" />
                            <span>Titre Foncier</span>
                          </span>
                        </div>
                      )}

                      {/* Photo count indicator */}
                      <div className="absolute bottom-3.5 left-3.5 z-10">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/65 backdrop-blur-md text-white text-[11px] font-medium rounded-full shadow-sm">
                          <Camera className="w-3.5 h-3.5 text-amber-300" />
                          <span>{photoCount} photos</span>
                        </span>
                      </div>

                      {/* Quick View overlay hint */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/90 backdrop-blur-md text-[#00152a] text-xs font-bold rounded-[4px] shadow-md">
                          <Eye className="w-4 h-4 text-[#d97706]" />
                          <span>Voir la galerie complète</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Content matching Image 1 */}
                    <div className="p-5 sm:p-6">
                      {/* Title and Price Row */}
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                        <h3 className="font-['Manrope'] font-extrabold text-xl sm:text-2xl text-[#00152a] group-hover:text-[#d97706] transition-colors">
                          {prop.title}
                        </h3>
                        <div className="font-['Manrope'] font-black text-lg sm:text-xl text-[#00152a] tracking-tight">
                          {prop.priceDisplay}
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#43474d] mb-4">
                        <MapPin className="w-3.5 h-3.5 text-[#d97706] flex-shrink-0" />
                        <span>
                          {prop.location.neighborhood}, {prop.location.city}
                        </span>
                      </div>

                      {/* Key Metrics Row (Beds, Baths, Area) matching Image 1 */}
                      <div className="flex items-center gap-6 py-3 border-t border-b border-[#f2ede4] text-xs sm:text-sm text-[#43474d] mb-4 font-medium">
                        {prop.bedrooms !== undefined && (
                          <div className="flex items-center gap-1.5">
                            <Bed className="w-4 h-4 text-[#74777e]" />
                            <span>{prop.bedrooms} ch.</span>
                          </div>
                        )}
                        {prop.bathrooms !== undefined && (
                          <div className="flex items-center gap-1.5">
                            <Bath className="w-4 h-4 text-[#74777e]" />
                            <span>{prop.bathrooms} sdb.</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1.5">
                          <Maximize2 className="w-4 h-4 text-[#74777e]" />
                          <span>{prop.area} m²</span>
                        </div>
                        {prop.isServiced && (
                          <div className="flex items-center gap-1.5 text-[#d97706] ml-auto">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Viabilisé</span>
                          </div>
                        )}
                      </div>

                      {/* CTA Button matching Image 1: "Je suis intéressé" (with WhatsApp icon) */}
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        id={`btn-interest-${prop.id}`}
                        onClick={(e) => handleWhatsAppInterest(prop, e)}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#e7f7ed] hover:bg-[#d5f2e0] text-[#126b38] border border-[#a2e4be] rounded-[4px] text-sm font-['Manrope'] font-bold transition-all shadow-sm cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4 fill-current text-[#25D366]" />
                        <span>Je suis intéressé</span>
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>

        {/* "Voir tous les biens" button matching Image 1 */}
        {filteredProperties.length > 6 && (
          <div className="mt-10 text-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              id="view-all-properties-btn"
              onClick={() => setShowAllListings(!showAllListings)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white hover:bg-neutral-50 text-[#00152a] border-2 border-[#00152a] font-['Manrope'] font-bold text-sm rounded-[4px] shadow-sm transition-all cursor-pointer"
            >
              <span>{showAllListings ? 'Afficher moins de biens' : `Voir l'ensemble des ${filteredProperties.length} biens au Sénégal`}</span>
            </motion.button>
          </div>
        )}

      </div>
    </section>
  );
};
