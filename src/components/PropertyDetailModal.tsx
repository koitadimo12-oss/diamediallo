import React, { useState } from 'react';
import {
  X,
  MapPin,
  Bed,
  Bath,
  Maximize2,
  CheckCircle2,
  FileCheck,
  MessageSquare,
  Phone,
  Share2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Property } from '../types';
import { AGENCY_INFO, FALLBACK_PROPERTY_IMAGE } from '../data/properties';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({ property, onClose }) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!property) return null;

  const gallery = property.galleryUrls && property.galleryUrls.length > 0
    ? property.galleryUrls
    : [property.imageUrl];

  const isSale = property.transaction === 'vente';
  const FCFA_EUR_RATE = 655.957;
  const eurPrice = Math.round(property.price / FCFA_EUR_RATE).toLocaleString('fr-FR') + ' €';

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Bonjour Agence Diame Diallo, je souhaite planifier une visite pour le bien suivant :\n\n- Référence : ${property.reference}\n- Titre : ${property.title}\n- Emplacement : ${property.location.neighborhood}, Dakar\n- Prix : ${property.priceDisplay} (${eurPrice})\n\nMerci de m'indiquer vos disponibilités.`
    );
    window.open(`https://wa.me/${AGENCY_INFO.whatsapp.replace(/\+/g, '')}?text=${message}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${property.title} | Diame Diallo Immobilier`,
        text: `Découvrez ce bien à ${property.location.neighborhood}, Dakar pour ${property.priceDisplay}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      id="property-detail-modal-overlay"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="property-detail-modal-card"
        className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header with Close & Share */}
        <div className="flex items-center justify-between p-4 border-b border-[#e7e2d9] bg-[#fef9f0]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[#00152a] text-white rounded">
              {property.reference}
            </span>
            <span className="text-xs font-bold text-[#d97706] uppercase tracking-wider">
              {isSale ? 'À VENDRE' : 'À LOUER'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-gray-600 hover:text-black rounded-full hover:bg-gray-200 transition-colors"
              title="Partager"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-600 hover:text-black rounded-full hover:bg-gray-200 transition-colors"
              title="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Photo Gallery Carousel */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full bg-black">
          <img
            src={gallery[activePhotoIdx]}
            alt={property.title}
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = FALLBACK_PROPERTY_IMAGE;
            }}
            className="w-full h-full object-cover"
          />

          {gallery.length > 1 && (
            <>
              <button
                onClick={() =>
                  setActivePhotoIdx((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setActivePhotoIdx((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
            {activePhotoIdx + 1} / {gallery.length} photos
          </div>
        </div>

        {/* Thumbnail bar */}
        {gallery.length > 1 && (
          <div className="flex gap-2 p-3 bg-neutral-100 overflow-x-auto">
            {gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhotoIdx(idx)}
                className={`w-16 h-12 flex-shrink-0 rounded overflow-hidden border-2 transition-all cursor-pointer ${
                  activePhotoIdx === idx ? 'border-[#d97706] scale-105' : 'border-transparent opacity-70'
                }`}
              >
                <img
                  src={img}
                  alt="miniature"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = FALLBACK_PROPERTY_IMAGE;
                  }}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Content Area */}
        <div className="p-6 overflow-y-auto max-h-[50vh] space-y-6">
          {/* Title & Price Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
            <div>
              <h2 className="font-['Manrope'] font-extrabold text-2xl text-[#00152a]">
                {property.title}
              </h2>
              <div className="flex items-center gap-1.5 text-sm text-[#43474d] mt-1">
                <MapPin className="w-4 h-4 text-[#d97706]" />
                <span>{property.location.fullAddress}</span>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <div className="font-['Manrope'] font-black text-2xl sm:text-3xl text-[#00152a]">
                {property.priceDisplay}
              </div>
              <span className="text-xs text-[#74777e]">~ {eurPrice}</span>
            </div>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#f8f3ea] border border-[#e7e2d9]">
            {property.bedrooms !== undefined && (
              <div className="flex flex-col items-center text-center p-2">
                <Bed className="w-5 h-5 text-[#d97706] mb-1" />
                <span className="font-bold text-sm text-[#00152a]">{property.bedrooms} Chambres</span>
              </div>
            )}
            {property.bathrooms !== undefined && (
              <div className="flex flex-col items-center text-center p-2">
                <Bath className="w-5 h-5 text-[#d97706] mb-1" />
                <span className="font-bold text-sm text-[#00152a]">{property.bathrooms} Salles de bain</span>
              </div>
            )}
            <div className="flex flex-col items-center text-center p-2">
              <Maximize2 className="w-5 h-5 text-[#d97706] mb-1" />
              <span className="font-bold text-sm text-[#00152a]">{property.area} m²</span>
            </div>
            {property.hasTitleDeed && (
              <div className="flex flex-col items-center text-center p-2">
                <FileCheck className="w-5 h-5 text-[#d97706] mb-1" />
                <span className="font-bold text-sm text-[#00152a]">Titre Foncier</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="font-['Manrope'] font-bold text-base text-[#00152a] mb-2">
              Description du bien
            </h3>
            <p className="text-sm text-[#43474d] leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Key Features List */}
          <div>
            <h3 className="font-['Manrope'] font-bold text-base text-[#00152a] mb-3">
              Points forts & Équipements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {property.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#00152a]">
                  <CheckCircle2 className="w-4 h-4 text-[#d97706] flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Teranga Guarantee notice */}
          <div className="p-4 rounded-lg bg-amber-50 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900">
            <ShieldCheck className="w-5 h-5 text-[#d97706] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-0.5">Garantie Sécurité Diame Diallo</span>
              Tous les titres de propriété et baux sont rigoureusement audités par notre service juridique avant publication.
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-4 sm:p-5 border-t border-[#e7e2d9] bg-[#fef9f0] flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleWhatsAppContact}
            className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-['Manrope'] font-bold text-sm rounded-[4px] shadow-sm transition-all active:scale-[0.98]"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Demander une visite sur WhatsApp</span>
          </button>
          
          <a
            href={`tel:${AGENCY_INFO.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#00152a] hover:bg-[#102a43] text-white font-['Manrope'] font-bold text-sm rounded-[4px] shadow-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Appeler l'agence</span>
          </a>
        </div>
      </div>
    </div>
  );
};
