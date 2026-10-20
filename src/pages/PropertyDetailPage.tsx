import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Bed, Bath, Maximize2, MapPin, CheckCircle2, ArrowLeft,
  MessageSquare, Phone, Share2, ChevronLeft, ChevronRight,
  FileCheck, Droplets, AlertCircle
} from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { usePageMeta } from '../hooks/usePageMeta';
import { DEMO_PROPERTIES, FALLBACK_IMAGE, AGENCY_CONFIG } from '../data';
import { buildWhatsAppLink, buildPropertyInterestMessage } from '../utils/whatsapp';

export const PropertyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const property = DEMO_PROPERTIES.find((p) => p.slug === slug);
  const [activeImg, setActiveImg] = useState(0);

  usePageMeta(
    property
      ? {
          title: `${property.title} — ${property.location.neighborhood}`,
          description: `${property.description.slice(0, 155)}…`,
          canonical: `${AGENCY_CONFIG.siteUrl}/biens/${property.slug}`,
          ogImage: property.images?.[0] || property.imageUrl || FALLBACK_IMAGE,
        }
      : {
          title: 'Bien introuvable',
          description: "Ce bien immobilier n'existe pas ou a été retiré.",
          noIndex: true,
        }
  );

  if (!property) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto px-4 py-32 text-center">
          <AlertCircle className="w-14 h-14 mx-auto mb-5 text-[#C8A96B]" />
          <h1 className="text-2xl font-black text-[#10243A] mb-3">Bien introuvable</h1>
          <p className="text-[#334155] mb-8">Ce bien n'existe pas ou a été retiré de notre catalogue.</p>
          <Link to="/biens" className="inline-flex items-center gap-2 px-6 py-3 bg-[#10243A] text-white rounded-xl font-bold">
            <ArrowLeft className="w-4 h-4" />
            Retour aux annonces
          </Link>
        </div>
      </Layout>
    );
  }

  const waHref = buildWhatsAppLink(buildPropertyInterestMessage(property));
  const images = property.images && property.images.length > 0 ? property.images : [property.imageUrl || FALLBACK_IMAGE];

  const prevImg = () => setActiveImg((i) => (i - 1 + images.length) % images.length);
  const nextImg = () => setActiveImg((i) => (i + 1) % images.length);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: property.title, url });
    } else {
      await navigator.clipboard.writeText(url);
      alert('Lien copié dans le presse-papier !');
    }
  };

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.title,
    description: property.description,
    url: `${AGENCY_CONFIG.siteUrl}/biens/${property.slug}`,
    image: property.images,
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'XOF',
      availability: property.status === 'disponible' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: property.location.city,
      addressCountry: 'SN',
    },
  };

  return (
    <Layout>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-2 text-xs text-[#334155]" aria-label="Fil d'Ariane">
        <Link to="/" className="hover:text-[#C8A96B] transition-colors">Accueil</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/biens" className="hover:text-[#C8A96B] transition-colors">Biens</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#10243A] font-semibold line-clamp-1">{property.title}</span>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Demo banner */}
        {property.isDemoData && (
          <div className="mb-6 px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <p className="text-xs text-amber-700">
              <strong>Exemple de démonstration</strong> — Ce bien est fictif et doit être remplacé par une vraie annonce avant la mise en ligne.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Images + Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image gallery */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#F5F6F8]">
              <img
                key={activeImg}
                src={images[activeImg]}
                alt={`${property.title} — photo ${activeImg + 1}`}
                loading="eager"
                className="w-full h-full object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE; }}
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImg}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                    aria-label="Photo précédente"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImg}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                    aria-label="Photo suivante"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/60 text-white text-xs rounded-full">
                    {activeImg + 1} / {images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
                      i === activeImg ? 'border-[#C8A96B]' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`Voir photo ${i + 1}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 border border-[#F5F6F8]">
              <h2 className="text-lg font-bold text-[#10243A] mb-3">Description</h2>
              <p className="text-sm text-[#334155] leading-relaxed whitespace-pre-line">{property.description}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-6 border border-[#F5F6F8]">
              <h2 className="text-lg font-bold text-[#10243A] mb-4">Caractéristiques</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96B] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#334155]">{feat}</span>
                  </div>
                ))}
                {property.hasTitleDeed && (
                  <div className="flex items-start gap-2.5">
                    <FileCheck className="w-4 h-4 text-[#C8A96B] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#334155] font-semibold">Titre Foncier disponible</span>
                  </div>
                )}
                {property.isServiced && (
                  <div className="flex items-start gap-2.5">
                    <Droplets className="w-4 h-4 text-[#C8A96B] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#334155] font-semibold">Terrain viabilisé</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Info + CTA */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-[#F5F6F8] shadow-sm sticky top-24">
              {/* Header */}
              <div className="mb-1 flex items-center gap-2 flex-wrap">
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase ${
                    property.transaction === 'vente' ? 'bg-[#10243A] text-white' : 'bg-[#C8A96B] text-[#10243A]'
                  }`}
                >
                  {property.transaction === 'vente' ? 'Vente' : 'Location'}
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#F5F6F8] text-[#334155] capitalize">
                  {property.type}
                </span>
              </div>

              <h1 className="text-xl font-black text-[#10243A] mt-3 mb-1 leading-snug">
                {property.title}
              </h1>

              <div className="flex items-center gap-1.5 text-sm text-[#334155] mb-5">
                <MapPin className="w-4 h-4 text-[#C8A96B]" />
                {property.location.fullAddress}
              </div>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="bg-[#F5F6F8] rounded-xl p-3 text-center">
                  <Maximize2 className="w-5 h-5 text-[#C8A96B] mx-auto mb-1" />
                  <p className="text-xs font-bold text-[#10243A]">{property.area} m²</p>
                  <p className="text-[10px] text-[#334155]">Surface</p>
                </div>
                {property.bedrooms !== undefined ? (
                  <div className="bg-[#F5F6F8] rounded-xl p-3 text-center">
                    <Bed className="w-5 h-5 text-[#C8A96B] mx-auto mb-1" />
                    <p className="text-xs font-bold text-[#10243A]">{property.bedrooms}</p>
                    <p className="text-[10px] text-[#334155]">Chambres</p>
                  </div>
                ) : <div />}
                {property.bathrooms !== undefined ? (
                  <div className="bg-[#F5F6F8] rounded-xl p-3 text-center">
                    <Bath className="w-5 h-5 text-[#C8A96B] mx-auto mb-1" />
                    <p className="text-xs font-bold text-[#10243A]">{property.bathrooms}</p>
                    <p className="text-[10px] text-[#334155]">Sdb</p>
                  </div>
                ) : <div />}
              </div>

              {/* Price */}
              <div className="mb-5 p-4 bg-gradient-to-br from-[#10243A] to-[#1a3550] rounded-xl text-center">
                <p className="text-xs text-[#C8A96B] font-bold uppercase tracking-widest mb-1">Prix</p>
                <p className="text-2xl font-black text-white">{property.priceDisplay}</p>
                {property.period === 'mois' && <p className="text-xs text-white/60 mt-0.5">par mois</p>}
              </div>

              {/* CTAs */}
              <div className="space-y-2.5">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`property-interest-${property.id}`}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#25D366] hover:bg-[#1DB954] text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  Je suis intéressé(e)
                </a>
                <a
                  href={`tel:${AGENCY_CONFIG.phone}`}
                  className="w-full flex items-center justify-center gap-2.5 py-3 bg-[#10243A] hover:bg-[#1a3550] text-white font-bold text-sm rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {AGENCY_CONFIG.phone}
                </a>
                <button
                  onClick={handleShare}
                  className="w-full flex items-center justify-center gap-2 py-2.5 border border-[#e2e8f0] text-[#334155] hover:border-[#C8A96B] hover:text-[#10243A] font-medium text-sm rounded-xl transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Partager ce bien
                </button>
              </div>

              {/* Ref */}
              <p className="mt-4 text-[10px] text-[#334155] text-center">
                Référence : <strong>{property.reference}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
