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
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  HelpCircle,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      'Bonjour Agence Immobilière Diame Diallo, je vous contacte depuis le pied de page de votre site pour un projet immobilier.'
    );

    const phone = AGENCY_INFO.whatsapp.replace(/\D/g, '');

    window.open(
      `https://wa.me/${phone}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const navigationLinks = [
    { label: 'Accueil', section: 'accueil' },
    { label: 'Nos biens immobiliers', section: 'biens' },
    { label: 'Nos services', section: 'services' },
    { label: 'Simulateur immobilier', section: 'simulateur' },
    { label: 'Questions fréquentes (FAQ)', section: 'faq' },
  ];

  const servicesLinks = [
    { label: 'Achat immobilier', section: 'services' },
    { label: 'Vente immobilière', section: 'services' },
    { label: 'Location immobilière', section: 'services' },
    { label: 'Gestion immobilière', section: 'services' },
    { label: 'Estimation de biens', section: 'services' },
  ];

  const zones = [
    'Dakar',
    'Almadies',
    'Ngor',
    'Yoff',
    'Mermoz',
    'Plateau',
  ];

  return (
    <footer
      id="footer"
      className="relative z-20 overflow-hidden bg-[#000a14] text-white"
    >
      {/* Décoration de fond */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-sky-500/5 blur-3xl" />
      </div>

      {/* Bannière de contact */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-r from-[#10243a] via-[#0b1c2d] to-[#142a40] p-7 sm:p-10"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full border border-amber-400/10" />
            <div className="pointer-events-none absolute -right-4 -top-4 h-32 w-32 rounded-full border border-amber-400/10" />

            <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <MessageCircle className="h-4 w-4" />
                  Parlons de votre projet
                </span>

                <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
                  Votre prochain projet immobilier
                  <span className="block text-amber-400">
                    commence ici.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  Achat, vente, location ou investissement : notre équipe vous
                  accompagne pour trouver la solution adaptée à vos besoins.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <button
                  type="button"
                  onClick={handleWhatsAppContact}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 font-bold text-[#071321] transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  Nous contacter
                </button>

                <a
                  href={`tel:${AGENCY_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-white transition duration-300 hover:border-amber-400/50 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  Nous appeler
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contenu principal du footer */}
      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Colonne 1 : agence */}
          <div>
            <button
              type="button"
              onClick={() => onNavigate('accueil')}
              aria-label="Retour à l'accueil"
              className="mb-5 inline-block text-left"
            >
              <Logo variant="full" size="md" />
            </button>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Votre partenaire immobilier de confiance au Sénégal. Nous vous
              accompagnons dans vos projets d'achat, de vente, de location et
              d'investissement immobilier.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">
                <ShieldCheck className="h-5 w-5 text-amber-400" />
              </span>

              <div>
                <p className="text-sm font-bold text-white">
                  Un accompagnement personnalisé
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  À chaque étape de votre projet
                </p>
              </div>
            </div>
          </div>

          {/* Colonne 2 : navigation et services */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-base font-black text-white">
              <span className="h-5 w-1 rounded-full bg-amber-400" />
              Navigation
            </h3>

            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.section}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.section)}
                    className="group inline-flex items-center gap-2 text-left text-sm text-slate-400 transition-colors hover:text-amber-400"
                  >
                    <ChevronRight className="h-4 w-4 shrink-0 text-amber-500 transition-transform group-hover:translate-x-1" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="mb-4 mt-8 text-sm font-bold text-white">
              Nos services
            </h4>

            <ul className="space-y-3">
              {servicesLinks.map((link, index) => (
                <li key={`${link.label}-${index}`}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.section)}
                    className="group inline-flex items-center gap-2 text-left text-sm text-slate-400 transition-colors hover:text-amber-400"
                  >
                    <ChevronRight className="h-4 w-4 shrink-0 text-amber-500 transition-transform group-hover:translate-x-1" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : zones */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-base font-black text-white">
              <span className="h-5 w-1 rounded-full bg-amber-400" />
              Zones d'activité
            </h3>

            <p className="mb-5 text-sm leading-6 text-slate-400">
              Nous vous accompagnons dans vos projets immobiliers à Dakar et
              dans ses environs.
            </p>

            <ul className="grid grid-cols-2 gap-3">
              {zones.map((zone) => (
                <li
                  key={zone}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-amber-400" />
                  {zone}
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />

                <div>
                  <p className="text-sm font-bold text-white">
                    Votre projet, notre priorité
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Parlons ensemble de vos besoins immobiliers.
                  </p>

                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="mt-3 text-xs font-bold text-amber-400 transition-colors hover:text-amber-300"
                  >
                    Découvrir nos solutions →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne 4 : contact */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-base font-black text-white">
              <span className="h-5 w-1 rounded-full bg-amber-400" />
              Contact
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">
                  <MapPin className="h-5 w-5 text-amber-400" />
                </span>

                <div>
                  <p className="text-sm font-bold text-white">Adresse</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {AGENCY_INFO.address}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">
                  <Phone className="h-5 w-5 text-amber-400" />
                </span>

                <div>
                  <p className="text-sm font-bold text-white">Téléphone</p>
                  <a
                    href={`tel:${AGENCY_INFO.phone}`}
                    className="mt-1 inline-block text-sm text-slate-400 transition-colors hover:text-amber-400"
                  >
                    {AGENCY_INFO.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">
                  <Mail className="h-5 w-5 text-amber-400" />
                </span>

                <div>
                  <p className="text-sm font-bold text-white">E-mail</p>
                  <a
                    href={`mailto:${AGENCY_INFO.email}`}
                    className="mt-1 break-all text-sm text-slate-400 transition-colors hover:text-amber-400"
                  >
                    {AGENCY_INFO.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">
                  <Clock className="h-5 w-5 text-amber-400" />
                </span>

                <div>
                  <p className="text-sm font-bold text-white">
                    Disponibilité
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Contactez-nous pour échanger sur votre projet.
                  </p>
                </div>
              </li>
            </ul>

            <button
              type="button"
              onClick={handleWhatsAppContact}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm font-bold text-green-400 transition-colors hover:bg-green-500/20"
            >
              <FaWhatsapp className="h-5 w-5" />
              Écrire sur WhatsApp
            </button>
          </div>
        </div>

        {/* Engagements */}
        <div className="mt-14 grid grid-cols-1 gap-4 border-y border-white/10 py-7 sm:grid-cols-3">
          {[
            'Accompagnement personnalisé',
            'Conseils adaptés à vos besoins',
            'Suivi de votre projet immobilier',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-400" />
              <span className="text-sm text-slate-300">{item}</span>
            </div>
          ))}
        </div>

        {/* Bas du footer */}
        <div className="flex flex-col items-start justify-between gap-5 pt-7 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Agence Immobilière Diame Diallo.
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Tous droits réservés.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <button
              type="button"
              onClick={() => onNavigate('mentions-legales')}
              className="text-xs text-slate-400 transition-colors hover:text-amber-400"
            >
              Mentions légales
            </button>

            <button
              type="button"
              onClick={() => onNavigate('confidentialite')}
              className="text-xs text-slate-400 transition-colors hover:text-amber-400"
            >
              Confidentialité
            </button>

            <button
              type="button"
              onClick={() => onNavigate('faq')}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-amber-400"
            >
              <HelpCircle className="h-4 w-4" />
              FAQ
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Retour en haut de page"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-amber-400 transition-all hover:-translate-y-1 hover:border-amber-400/40 hover:bg-amber-400/10"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;