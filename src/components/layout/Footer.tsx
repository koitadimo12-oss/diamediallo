import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
} from 'lucide-react';

import { FaWhatsapp } from 'react-icons/fa';
import { Logo } from '../ui/Logo';
import { AGENCY_CONFIG } from '../../data';
import { buildWhatsAppLink, buildGeneralContactMessage } from '../../utils/whatsapp';

const footerLinks = {
  services: [
    { label: 'Achat & vente de terrains', path: '/services/terrains' },
    { label: 'Gestion locative & conciergerie', path: '/services/gestion-locative' },
    { label: 'Intermédiation immobilière', path: '/services/intermediation' },
    { label: 'Conseil & assistance foncière', path: '/services/assistance-fonciere' },
  ],
  navigation: [
    { label: 'Accueil', path: '/' },
    { label: 'Nos Biens', path: '/biens' },
    { label: 'Conseils Immobiliers', path: '/conseils' },
    { label: 'Vidéos & Pédagogie', path: '/videos' },
    { label: 'À Propos', path: '/a-propos' },
    { label: 'Contact', path: '/contact' },
  ],
  legal: [
    { label: 'Mentions légales', path: '/mentions-legales' },
    { label: 'Politique de confidentialité', path: '/confidentialite' },
    { label: "Conditions d'utilisation & Barème", path: '/conditions' },
  ],
};

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const whatsapp = buildWhatsAppLink(buildGeneralContactMessage());

  return (
    <footer id="site-footer" className="bg-[#10243A] text-white" role="contentinfo">
      {/* Top CTA Band */}
      <div className="border-b border-white/10 bg-[#C8A96B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Votre projet immobilier commence ici
            </h2>
            <p className="text-[#C8A96B] mt-1 text-sm">
              Discutons de votre projet : achat, vente, location ou gestion immobilière.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp-btn"
              className="flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#1DB954] text-white text-sm font-bold rounded-xl transition-colors"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp Direct
            </a>
            <Link
              to="/contact"
              id="footer-contact-btn"
              className="flex items-center gap-2 px-5 py-3 bg-[#C8A96B] hover:bg-[#b8995b] text-[#10243A] text-sm font-bold rounded-xl transition-colors"
            >
              Nous contacter
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Logo variant="full" dark size="lg" />
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-xs">
              {AGENCY_CONFIG.tagline}
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-5">
              {AGENCY_CONFIG.facebook && (
                <a href={AGENCY_CONFIG.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C8A96B]/30 flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {AGENCY_CONFIG.instagram && (
                <a href={AGENCY_CONFIG.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C8A96B]/30 flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {AGENCY_CONFIG.linkedin && (
                <a href={AGENCY_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C8A96B]/30 flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C8A96B] mb-5">
              Nos Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-[#C8A96B] flex items-center gap-2 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C8A96B] mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-[#C8A96B] flex items-center gap-2 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C8A96B] mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8A96B] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/60">{AGENCY_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C8A96B] flex-shrink-0" />
                <a href={`tel:${AGENCY_CONFIG.phone}`} className="text-sm text-white/60 hover:text-[#C8A96B] transition-colors">
                  {AGENCY_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C8A96B] flex-shrink-0" />
                <a href={`mailto:${AGENCY_CONFIG.email}`} className="text-sm text-white/60 hover:text-[#C8A96B] transition-colors break-all">
                  {AGENCY_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm text-[#25D366] hover:text-[#1DB954] font-semibold transition-colors">
                  {AGENCY_CONFIG.whatsappDisplay}
                </a>
              </li>
            </ul>
            <div className="mt-5 px-3 py-2 bg-white/5 rounded-lg border border-white/10 text-xs text-white/40">
              {AGENCY_CONFIG.hours}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {year} {AGENCY_CONFIG.legalName} — Tous droits réservés.
          </p>
          <div className="flex items-center gap-5">
            {footerLinks.legal.map((l) => (
              <Link key={l.path} to={l.path} className="text-xs text-white/40 hover:text-[#C8A96B] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
