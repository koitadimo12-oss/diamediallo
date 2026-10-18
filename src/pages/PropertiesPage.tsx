import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, X, Bed, Bath, Maximize2, MapPin, MessageSquare, ArrowRight, SlidersHorizontal } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { usePageMeta } from '../hooks/usePageMeta';
import { DEMO_PROPERTIES, FALLBACK_IMAGE, AGENCY_CONFIG } from '../data';
import { Property, PropertyType, TransactionType } from '../types';
import { buildWhatsAppLink, buildPropertyInterestMessage } from '../utils/whatsapp';

// ─── Property Card ────────────────────────────────────────────────────────────
const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  const [imgErr, setImgErr] = useState(false);
  const cover = imgErr ? FALLBACK_IMAGE : (property.images?.[0] || property.imageUrl || FALLBACK_IMAGE);
  const waHref = buildWhatsAppLink(buildPropertyInterestMessage(property));

  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-[#F5F6F8] hover:border-[#C8A96B]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
      aria-label={property.title}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={cover}
          alt={`${property.title} – ${property.location.neighborhood}, ${property.location.city}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={() => setImgErr(true)}
        />
        <div className="absolute top-3 left-3 flex gap-1.5">
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase ${
              property.transaction === 'vente' ? 'bg-[#10243A] text-white' : 'bg-[#C8A96B] text-[#10243A]'
            }`}
          >
            {property.transaction === 'vente' ? 'Vente' : 'Location'}
          </span>
        </div>
        {property.hasTitleDeed && (
          <span className="absolute top-3 right-3 px-2 py-0.5 bg-[#C8A96B]/95 text-[#10243A] text-[10px] font-bold rounded-md">TF</span>
        )}
        {property.isDemoData && (
          <div className="absolute bottom-0 inset-x-0 bg-[#10243A]/75 py-1 text-center">
            <span className="text-[10px] text-[#C8A96B] font-medium">Exemple de démonstration</span>
          </div>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#C8A96B] mb-1">{property.reference}</p>
        <h3 className="text-sm font-bold text-[#10243A] mb-1.5 line-clamp-2">{property.title}</h3>
        <div className="flex items-center gap-1.5 text-xs text-[#334155] mb-3">
          <MapPin className="w-3.5 h-3.5 text-[#C8A96B] flex-shrink-0" />
          <span className="line-clamp-1">{property.location.neighborhood}, {property.location.city}</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-[#334155] mb-4">
          <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3 text-[#C8A96B]" />{property.area} m²</span>
          {property.bedrooms !== undefined && <span className="flex items-center gap-1"><Bed className="w-3 h-3 text-[#C8A96B]" />{property.bedrooms} ch.</span>}
          {property.bathrooms !== undefined && <span className="flex items-center gap-1"><Bath className="w-3 h-3 text-[#C8A96B]" />{property.bathrooms} sdb</span>}
        </div>
        <p className="text-lg font-black text-[#10243A] mb-4 mt-auto">
          {property.priceDisplay}
          {property.period === 'mois' && <span className="text-xs font-normal text-[#334155] ml-1">/mois</span>}
        </p>
        <div className="flex gap-2">
          <Link
            to={`/biens/${property.slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#10243A] hover:bg-[#1a3550] text-white text-xs font-bold rounded-lg transition-colors"
          >
            Voir le bien <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 bg-[#25D366] hover:bg-[#1DB954] text-white rounded-lg transition-colors"
            aria-label="WhatsApp"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
          </a>
        </div>
      </div>
    </article>
  );
};

// ─── Page ────────────────────────────────────────────────────────────────────
export const PropertiesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const [transaction, setTransaction] = useState<TransactionType | 'all'>(
    (searchParams.get('transaction') as TransactionType | 'all') ?? 'all'
  );
  const [type, setType] = useState<PropertyType | 'all'>(
    (searchParams.get('type') as PropertyType | 'all') ?? 'all'
  );
  const [zone, setZone] = useState(searchParams.get('zone') ?? 'all');
  const [search, setSearch] = useState('');

  usePageMeta({
    title: 'Biens Immobiliers — Achat, Vente & Location au Sénégal',
    description: `Parcourez notre sélection de biens immobiliers au Sénégal — maisons, appartements, terrains à vendre ou à louer à Dakar et partout au Sénégal. ${AGENCY_CONFIG.name}.`,
    canonical: `${AGENCY_CONFIG.siteUrl}/biens`,
  });

  const filtered = useMemo(() => {
    return DEMO_PROPERTIES.filter((p) => {
      if (transaction !== 'all' && p.transaction !== transaction) return false;
      if (type !== 'all' && p.type !== type) return false;
      if (zone !== 'all' && p.location.neighborhood !== zone) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        if (!p.title.toLowerCase().includes(q) && !p.location.neighborhood.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [transaction, type, zone, search]);

  const clearFilters = () => {
    setTransaction('all');
    setType('all');
    setZone('all');
    setSearch('');
    setSearchParams({});
  };

  const hasFilters = transaction !== 'all' || type !== 'all' || zone !== 'all' || search.trim() !== '';

  return (
    <Layout>
      {/* Hero */}
      <div
        className="relative py-16 md:py-24 bg-[#10243A] text-white overflow-hidden"
        role="banner"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle, #C8A96B 1px, transparent 1px)`, backgroundSize: '30px 30px' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C8A96B] mb-4">Nos annonces</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Biens Immobiliers au Sénégal
          </h1>
          <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto">
            Sélection de démonstration — contactez-nous pour les biens réellement disponibles.
          </p>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-[#F5F6F8] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3 flex-wrap">
          {/* Search */}
          <div className="relative flex-1 min-w-[180px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#334155]" />
            <input
              id="properties-search"
              type="search"
              placeholder="Rechercher un bien…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#F5F6F8] rounded-lg text-sm text-[#10243A] focus:outline-none focus:ring-2 focus:ring-[#C8A96B]"
            />
          </div>

          {/* Transaction */}
          <select
            id="filter-transaction"
            value={transaction}
            onChange={(e) => setTransaction(e.target.value as TransactionType | 'all')}
            className="py-2 px-3 bg-[#F5F6F8] rounded-lg text-sm text-[#10243A] focus:outline-none focus:ring-2 focus:ring-[#C8A96B] border-0"
          >
            <option value="all">Achat & Location</option>
            <option value="vente">Achat / Vente</option>
            <option value="location">Location</option>
          </select>

          {/* Type */}
          <select
            id="filter-type"
            value={type}
            onChange={(e) => setType(e.target.value as PropertyType | 'all')}
            className="py-2 px-3 bg-[#F5F6F8] rounded-lg text-sm text-[#10243A] focus:outline-none focus:ring-2 focus:ring-[#C8A96B] border-0"
          >
            <option value="all">Tous types</option>
            <option value="maison">Maison / Villa</option>
            <option value="appartement">Appartement</option>
            <option value="terrain">Terrain</option>
            <option value="commercial">Commercial</option>
          </select>

          {/* Zone */}
          <select
            id="filter-zone"
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            className="py-2 px-3 bg-[#F5F6F8] rounded-lg text-sm text-[#10243A] focus:outline-none focus:ring-2 focus:ring-[#C8A96B] border-0"
          >
            <option value="all">Toutes zones</option>
            <option value="Colobane">Colobane</option>
            <option value="Grand Dakar">Grand Dakar</option>
            <option value="Les Almadies">Les Almadies</option>
            <option value="Plateau">Plateau</option>
            <option value="Rufisque">Rufisque</option>
            <option value="Saly / Somone">Saly / Somone</option>
            <option value="Diamniadio">Diamniadio</option>
          </select>

          {hasFilters && (
            <button
              onClick={clearFilters}
              id="clear-filters-btn"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              Réinitialiser
            </button>
          )}

          <span className="ml-auto text-xs text-[#334155] font-medium whitespace-nowrap">
            {filtered.length} bien{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <Search className="w-12 h-12 mx-auto mb-4 text-[#C8A96B]" />
            <p className="text-xl font-bold text-[#10243A] mb-2">Aucun bien trouvé</p>
            <p className="text-sm text-[#334155] mb-6">Essayez d'ajuster vos filtres ou contactez-nous directement.</p>
            <button onClick={clearFilters} className="px-6 py-2.5 bg-[#10243A] text-white text-sm font-bold rounded-xl">
              Voir tous les biens
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};
