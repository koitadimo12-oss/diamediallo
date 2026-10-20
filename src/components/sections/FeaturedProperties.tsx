import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bed, Bath, Maximize2, MapPin, ArrowRight, MessageSquare, Tag } from 'lucide-react';
import { DEMO_PROPERTIES, FALLBACK_IMAGE } from '../../data';
import { Property, PropertyType, TransactionType } from '../../types';
import { buildWhatsAppLink, buildPropertyInterestMessage } from '../../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';
gsap.registerPlugin(ScrollTrigger);

const TRANSACTION_LABELS: Record<TransactionType | 'all', string> = {
  all: 'Tous',
  vente: 'Achat',
  location: 'Location',
};

const TYPE_LABELS: Record<PropertyType | 'all', string> = {
  all: 'Tous types',
  maison: 'Maison / Villa',
  appartement: 'Appartement',
  terrain: 'Terrain',
  commercial: 'Commercial',
};

const FILTER_TABS: Array<{ value: TransactionType | 'all'; label: string }> = [
  { value: 'all', label: 'Tous' },
  { value: 'vente', label: 'Achat' },
  { value: 'location', label: 'Location' },
];

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [imgError, setImgError] = useState(false);
  const cover = imgError ? FALLBACK_IMAGE : (property.images?.[0] || property.imageUrl || FALLBACK_IMAGE);
  const waHref = buildWhatsAppLink(buildPropertyInterestMessage(property));

  return (
    <article
      className="property-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-[#F5F6F8] hover:border-[#C8A96B]/30 transition-all duration-400 hover:-translate-y-1.5 flex flex-col"
      aria-label={property.title}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={cover}
          alt={`Photo de ${property.title} — ${property.location.neighborhood}, ${property.location.city}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={() => setImgError(true)}
        />
        {/* Status badge */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span
            className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide shadow-sm ${
              property.transaction === 'vente'
                ? 'bg-[#10243A] text-white'
                : 'bg-[#C8A96B] text-[#10243A]'
            }`}
          >
            {property.transaction === 'vente' ? 'Vente' : 'Location'}
          </span>
          {property.status !== 'disponible' && (
            <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide bg-red-500 text-white shadow-sm">
              {property.status === 'reserve' ? 'Réservé' : property.status === 'vendu' ? 'Vendu' : 'Loué'}
            </span>
          )}
        </div>
        {property.hasTitleDeed && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 bg-[#C8A96B]/95 text-[#10243A] text-[10px] font-bold rounded-md shadow-sm">
              TF
            </span>
          </div>
        )}
        {/* Demo data warning */}
        {property.isDemoData && (
          <div className="absolute bottom-0 left-0 right-0 bg-[#10243A]/85 backdrop-blur-sm py-1 px-3 text-center">
            <span className="text-[10px] text-[#C8A96B] font-medium">Exemple de démonstration (à titre illustratif)</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-[#10243A] leading-snug line-clamp-2 flex-1">
            {property.title}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 text-[#334155] text-xs mb-3">
          <MapPin className="w-3.5 h-3.5 text-[#C8A96B] flex-shrink-0" />
          <span className="line-clamp-1">{property.location.neighborhood}, {property.location.city}</span>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 text-xs text-[#334155] mb-4">
          <span className="flex items-center gap-1">
            <Maximize2 className="w-3.5 h-3.5 text-[#C8A96B]" />
            {property.area} m²
          </span>
          {property.bedrooms !== undefined && (
            <span className="flex items-center gap-1">
              <Bed className="w-3.5 h-3.5 text-[#C8A96B]" />
              {property.bedrooms} ch.
            </span>
          )}
          {property.bathrooms !== undefined && (
            <span className="flex items-center gap-1">
              <Bath className="w-3.5 h-3.5 text-[#C8A96B]" />
              {property.bathrooms} sdb
            </span>
          )}
        </div>

        <div className="mt-auto">
          {/* Price */}
          <p className="text-xl font-black text-[#10243A] mb-4">
            {property.priceDisplay}
            {property.period === 'mois' && (
              <span className="text-sm font-normal text-[#334155] ml-1">/mois</span>
            )}
          </p>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <Link
              to={`/biens/${property.slug}`}
              id={`property-detail-${property.id}`}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#10243A] hover:bg-[#1a3550] text-white text-xs font-bold rounded-lg transition-colors"
              aria-label={`Voir les détails de ${property.title}`}
            >
              Voir le bien
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              id={`property-whatsapp-${property.id}`}
              className="flex items-center justify-center p-2.5 bg-[#25D366] hover:bg-[#1DB954] text-white rounded-lg transition-colors"
              aria-label={`Contacter sur WhatsApp pour ${property.title}`}
            >
             <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export const FeaturedProperties: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<TransactionType | 'all'>('all');

  const filtered = DEMO_PROPERTIES.filter(
    (p) => p.featured && (activeTab === 'all' || p.transaction === activeTab)
  );

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.properties-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
      gsap.fromTo(
        '.property-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [filtered]);

  return (
    <section
      id="biens-vedette"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
      aria-labelledby="properties-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="properties-heading flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-10">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C8A96B] mb-3">
              Sélection de l'agence
            </span>
            <h2
              id="properties-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#10243A] leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Biens à la Une
            </h2>
            <p className="mt-3 text-[#334155] max-w-lg text-sm sm:text-base">
              Une sélection représentative de notre portefeuille.{' '}
              <span className="text-[#C8A96B] font-semibold">Exemples de démonstration</span> : contactez-nous pour consulter le portefeuille en temps réel.
            </p>
          </div>
          <Link
            to="/biens"
            id="all-properties-link"
            className="flex items-center gap-2 px-5 py-2.5 border-2 border-[#10243A] text-[#10243A] hover:bg-[#10243A] hover:text-white text-sm font-bold rounded-xl transition-colors flex-shrink-0"
          >
            Voir tous les biens
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.value}
              id={`filter-tab-${tab.value}`}
              onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                activeTab === tab.value
                  ? 'bg-[#10243A] text-white border-[#10243A] shadow-sm'
                  : 'bg-white text-[#334155] border-[#e2e8f0] hover:border-[#10243A] hover:text-[#10243A]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[#334155]">
            <Tag className="w-10 h-10 mx-auto mb-4 text-[#C8A96B]" />
            <p className="font-semibold">Aucun bien dans cette catégorie pour le moment.</p>
            <p className="text-sm mt-1">Contactez-nous pour connaître les disponibilités.</p>
          </div>
        )}
      </div>
    </section>
  );
};
