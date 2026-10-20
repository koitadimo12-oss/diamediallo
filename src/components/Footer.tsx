import React from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { AGENCY_INFO } from '../data/properties';
import { FaWhatsapp } from 'react-icons/fa';
import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  ShieldCheck,
  Building2,
  Clock,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Bonjour Agence Immobilière Diame Diallo, je vous contacte depuis le pied de page de votre site pour un projet immobilier à Dakar."
    );
    window.open(`https://wa.me/${AGENCY_INFO.whatsapp.replace(/\+/g, '')}?text=${message}`, '_blank');
  };

  return (
    <footer id="footer" className="bg-[#000a14] text-white relative z-20 overflow-hidden">
      {/* Subtle top golden line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />

      {/* Pre-Footer Callout Banner */}
      <div className="border-b border-white/10 bg-[#001224]/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#d97706] mb-1 block font-['Work_Sans']">
                Besoin d'un accompagnement personnalisé ?
              </span>
              <h3 className="font-['Manrope'] font-extrabold text-xl sm:text-2xl text-white">
                Discutez directement avec un expert immobilier
              </h3>
              <p className="text-sm text-neutral-400 mt-0.5">
                Agence physique à Colobane • Réponse rapide 7j/7 pour le Sénégal et la diaspora.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleWhatsAppContact}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[4px] bg-[#25D366] hover:bg-[#20ba59] text-white font-['Manrope'] font-bold text-sm shadow-md transition-colors cursor-pointer"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp : 77 526 41 07</span>
              </motion.button>
              
              <a
                href={`tel:${AGENCY_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[4px] bg-white/10 hover:bg-white/20 text-white font-['Work_Sans'] font-semibold text-sm border border-white/20 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{AGENCY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block cursor-pointer" onClick={() => onNavigate('accueil')}>
              <Logo variant="full" size="md" />
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm">
              L'élégance de l'immobilier sénégalais couplée à une rigueur juridique internationale. Achat, vente, location et gestion de patrimoine d'exception à Dakar et dans tout le Sénégal.
            </p>

            {/* Leadership & Registry Badge */}
            <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 text-xs space-y-1.5 max-w-sm">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Building2 className="w-3.5 h-3.5" />
                <span>Direction Générale : M. Diame Diallo</span>
              </div>
              <p className="text-neutral-400 text-[11px] leading-normal">
                Agence Immobilière SUARL agréée • Siège officiel : Rue de Colobane, Dakar.
              </p>
            </div>
          </div>

          {/* Column 2: Services & Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-['Manrope'] font-bold text-sm uppercase tracking-wider text-amber-400">
              Nos Services
            </h4>
            <div className="w-8 h-[2px] bg-amber-500 rounded-full mb-2" />

            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <button
                  onClick={() => onNavigate('biens')}
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>Vente de Maisons & Villas</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('biens')}
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>Location d'Appartements Standing</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('biens')}
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>Terrains avec Titre Foncier</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>Gestion Locative & Recouvrement</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>Accompagnement Investisseurs Diaspora</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('simulateur')}
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>Simulateur Financier & Prêt Immobilier</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Zones d'Intervention (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-['Manrope'] font-bold text-sm uppercase tracking-wider text-amber-400">
              Zones d'Activité
            </h4>
            <div className="w-8 h-[2px] bg-amber-500 rounded-full mb-2" />

            <ul className="space-y-1.5 text-xs text-neutral-300">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Colobane (Siège)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Dakar Plateau</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Les Almadies & Ngor</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Fann & Corniche Ouest</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Mermoz & Keur Gorgui</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Sacré-Cœur & VDN</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Diamniadio & Rufisque</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Saly & Petite-Côte</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Agence (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-['Manrope'] font-bold text-sm uppercase tracking-wider text-amber-400">
              Coordonnées
            </h4>
            <div className="w-8 h-[2px] bg-amber-500 rounded-full mb-2" />

            <div className="space-y-3 text-sm text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{AGENCY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`tel:${AGENCY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {AGENCY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
               <FaWhatsapp className="w-5 h-5" />
                <button onClick={handleWhatsAppContact} className="hover:text-green-400 transition-colors text-left">
                  WhatsApp : 77 526 41 07
                </button>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-white transition-colors">
                  {AGENCY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-neutral-400 pt-2 border-t border-white/10">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Ouverture de l'agence :</span>
                  <span>Lun - Ven : 08h30 - 18h30</span>
                  <br />
                  <span>Samedi : 09h00 - 15h00</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Security / Notarial Trust Seal */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 bg-white/[0.02] p-4 rounded-xl">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <span>
              <strong className="text-white">Garantie & Sécurité Immobilière :</strong> Tous nos biens font l'objet d'une vérification notariée et cadastrale rigoureuse.
            </span>
          </div>
          <div className="flex items-center gap-2 text-neutral-300">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span>Titres Fonciers & Baux Authentifiés</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="text-center sm:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} <strong className="text-neutral-300">Agence Immobilière Diame Diallo SUARL</strong>. Tous droits réservés.
            </p>
            <p className="text-[11px] text-neutral-600">
              Immobilier de prestige au Sénégal • RCCM Dakar • NINEA disponible sur demande.
            </p>
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[4px] bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors cursor-pointer text-xs font-semibold"
          >
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
            <span>Retour en haut</span>
          </motion.button>
        </div>

      </div>
    </footer>
  );
};
