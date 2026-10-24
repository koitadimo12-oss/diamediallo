
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { AGENCY_CONFIG } from '../../data';
import {
  buildWhatsAppLink,
  buildGeneralContactMessage,
} from '../../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';

const NAV_LINKS = [
  { label: 'Accueil', path: '/' },
  { label: 'Nos Biens', path: '/biens' },
  {
    label: 'Nos Services',
    path: '/services',
    children: [
      { label: 'Achat et vente de terrains', path: '/services/terrains' },
      {
        label: 'Gestion locative & conciergerie',
        path: '/services/gestion-locative',
      },
      {
        label: 'Intermédiation immobilière',
        path: '/services/intermediation',
      },
      {
        label: 'Conseil & assistance foncière',
        path: '/services/assistance-fonciere',
      },
    ],
  },
  { label: 'Conseils Immobiliers', path: '/conseils' },
  { label: 'À Propos', path: '/a-propos' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);

  // Détecter le défilement de la page
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Fermer les menus lors d'un changement de page
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Fermer le menu déroulant en cliquant à l'extérieur
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  // Fermer le menu mobile avec la touche Échap
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname === path ||
        location.pathname.startsWith(`${path}/`);

  const whatsappHref = buildWhatsAppLink(
    buildGeneralContactMessage()
  );

  return (
    <>
      {/* NAVBAR FLOTTANTE */}
      <header
        id="main-navbar"
        role="banner"
        className={`fixed top-3 left-3 right-3 z-50 rounded-2xl border transition-all duration-300 ${
          isScrolled
            ? 'bg-[#faf7f1]/95 backdrop-blur-xl shadow-lg border-[#e4dccb]'
            : 'bg-[#faf7f1]/85 backdrop-blur-md shadow-sm border-[#e4dccb]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6">
          <div className="flex items-center justify-between min-h-[var(--nav-h)] py-2">

            {/* LOGO */}
            <Link
              to="/"
              aria-label="Accueil – Agence Immobilière Diame Diallo"
              className="flex-shrink-0"
            >
              <Logo variant="compact" />
            </Link>

            {/* NAVIGATION ORDINATEUR */}
            <nav
              aria-label="Navigation principale"
              className="hidden lg:flex items-center gap-1"
            >
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div
                    key={link.path}
                    ref={servicesRef}
                    className="relative"
                  >
                    <button
                      id="nav-services-dropdown"
                      type="button"
                      onClick={() => setServicesOpen((value) => !value)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                        isActive(link.path)
                          ? 'text-[#10243A] bg-[#C8A96B]/15'
                          : 'text-[#334155] hover:text-[#10243A] hover:bg-[#C8A96B]/10'
                      }`}
                    >
                      {link.label}

                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* SOUS-MENU SERVICES */}
                    {servicesOpen && (
                      <div
                        className="absolute top-full left-0 mt-3 w-60 bg-white rounded-xl shadow-xl border border-[#e4dccb] py-2 z-50"
                        role="menu"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            role="menuitem"
                            onClick={() => setServicesOpen(false)}
                            className={`block px-4 py-3 text-sm font-medium transition-colors ${
                              location.pathname === child.path
                                ? 'text-[#10243A] bg-[#C8A96B]/15'
                                : 'text-[#334155] hover:text-[#10243A] hover:bg-[#faf7f1]'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    id={`nav-link-${link.label
                      .toLowerCase()
                      .replace(/\s+/g, '-')}`}
                    className={`relative px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      isActive(link.path)
                        ? 'text-[#10243A] bg-[#C8A96B]/10'
                        : 'text-[#334155] hover:text-[#10243A] hover:bg-[#C8A96B]/10'
                    }`}
                  >
                    {link.label}

                    {isActive(link.path) && (
                      <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#C8A96B] rounded-full" />
                    )}
                  </Link>
                )
              )}
            </nav>

            {/* BOUTONS ORDINATEUR */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                id="nav-whatsapp-btn"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-xl bg-[#25D366] text-white hover:bg-[#1DB954] transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Contacter sur WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </a>

              <a
                id="nav-phone-btn"
                href={`tel:${AGENCY_CONFIG.phone}`}
                className="flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-xl bg-[#10243A] text-white hover:bg-[#1a3550] transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label={`Appeler ${AGENCY_CONFIG.phone}`}
              >
                <Phone className="w-3.5 h-3.5" />
                {AGENCY_CONFIG.phone}
              </a>
            </div>

            {/* BOUTONS MOBILE */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#25D366] text-white rounded-xl hover:bg-[#1DB954] transition-colors shadow-sm"
                aria-label="Contacter sur WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>

              <button
                id="mobile-menu-toggle"
                type="button"
                onClick={() => setMobileOpen((value) => !value)}
                aria-label={
                  mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'
                }
                aria-expanded={mobileOpen}
                aria-controls="mobile-drawer"
                className="p-2.5 text-[#10243A] bg-white/70 hover:bg-[#C8A96B]/15 border border-[#e4dccb]/70 rounded-xl transition-colors"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* OVERLAY DU MENU MOBILE */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#10243A]/45 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* MENU MOBILE FLOTTANT */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-label="Menu de navigation mobile"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        className={`fixed top-3 right-3 bottom-3 z-50 w-[300px] max-w-[calc(100vw-24px)] rounded-2xl overflow-hidden bg-[#faf7f1] border border-[#e4dccb] shadow-2xl flex flex-col lg:hidden transition-transform duration-300 ease-out ${
          mobileOpen
            ? 'translate-x-0'
            : 'translate-x-[calc(100%+24px)]'
        }`}
      >
        {/* EN-TÊTE DU MENU MOBILE */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#e4dccb] bg-white/70">
          <Link
            to="/"
            aria-label="Accueil – Agence Immobilière Diame Diallo"
            onClick={() => setMobileOpen(false)}
          >
            <Logo variant="compact" />
          </Link>

          <button
            id="mobile-drawer-close"
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Fermer le menu"
            className="p-2 text-[#334155] hover:text-[#10243A] hover:bg-[#C8A96B]/15 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* LIENS DU MENU MOBILE */}
        <nav
          aria-label="Navigation mobile"
          className="flex-1 overflow-y-auto py-4 px-4"
        >
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.path}>
                <div className="px-3 py-2 text-[10px] uppercase tracking-widest text-[#9B7A3F] font-bold mt-3 mb-1">
                  {link.label}
                </div>

                {link.children.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-3 rounded-xl text-sm font-medium mb-1 transition-colors ${
                      location.pathname === child.path
                        ? 'bg-[#C8A96B]/15 text-[#10243A] font-bold border-l-2 border-[#C8A96B]'
                        : 'text-[#334155] hover:bg-white hover:text-[#10243A]'
                    }`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-3 rounded-xl text-sm font-semibold mb-1 transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#C8A96B]/15 text-[#10243A] border-l-2 border-[#C8A96B]'
                    : 'text-[#334155] hover:bg-white hover:text-[#10243A]'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* BOUTONS EN BAS DU MENU MOBILE */}
        <div className="px-4 pb-4 pt-4 border-t border-[#e4dccb] space-y-3 bg-white/50">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] text-white text-sm font-bold rounded-xl hover:bg-[#1DB954] transition-colors shadow-sm"
          >
            <FaWhatsapp className="w-5 h-5" />
            Contacter sur WhatsApp
          </a>

          <a
            href={`tel:${AGENCY_CONFIG.phone}`}
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#10243A] text-white text-sm font-bold rounded-xl hover:bg-[#1a3550] transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4" />
            {AGENCY_CONFIG.phone}
          </a>
        </div>
      </div>
    </>
  );
};

