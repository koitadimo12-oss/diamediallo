import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { AGENCY_CONFIG } from '../../data';
import { buildWhatsAppLink, buildGeneralContactMessage } from '../../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';
const NAV_LINKS = [
  { label: 'Accueil', path: '/' },
  { label: 'Nos Biens', path: '/biens' },
  {
    label: 'Nos Services',
    path: '/services',
    children: [
      { label: 'Achat et vente de terrains', path: '/services/terrains' },
      { label: 'Gestion locative & conciergerie', path: '/services/gestion-locative' },
      { label: 'Intermédiation immobilière', path: '/services/intermediation' },
      { label: 'Conseil & assistance foncière', path: '/services/assistance-fonciere' },
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

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const whatsappHref = buildWhatsAppLink(buildGeneralContactMessage());

  return (
    <>
      <header
        id="main-navbar"
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/97 backdrop-blur-xl shadow-lg shadow-[#10243A]/8 border-b border-[#C8A96B]/20'
            : 'bg-white/90 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <Link to="/" aria-label="Accueil – Agence Immobilière Diame Diallo" className="flex-shrink-0">
              <Logo variant="compact" />
            </Link>

            {/* Desktop Nav */}
            <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.path} ref={servicesRef} className="relative">
                    <button
                      id="nav-services-dropdown"
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-semibold transition-colors ${
                        isActive(link.path)
                          ? 'text-[#10243A] bg-[#C8A96B]/10'
                          : 'text-[#334155] hover:text-[#10243A] hover:bg-[#F5F6F8]'
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {servicesOpen && (
                      <div
                        className="absolute top-full left-0 mt-1.5 w-56 bg-white rounded-xl shadow-2xl border border-[#F5F6F8] py-2 z-50"
                        role="menu"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            role="menuitem"
                            className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                              location.pathname === child.path
                                ? 'text-[#C8A96B] bg-[#10243A]/5'
                                : 'text-[#334155] hover:text-[#10243A] hover:bg-[#F5F6F8]'
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
                    id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`relative px-3.5 py-2 rounded-md text-sm font-semibold transition-colors ${
                      isActive(link.path)
                        ? 'text-[#10243A]'
                        : 'text-[#334155] hover:text-[#10243A] hover:bg-[#F5F6F8]'
                    }`}
                  >
                    {link.label}
                    {isActive(link.path) && (
                      <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-[#C8A96B] rounded-full" />
                    )}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                id="nav-whatsapp-btn"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-[#25D366] text-white hover:bg-[#1DB954] transition-colors shadow-sm"
                aria-label="Contacter sur WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                id="nav-phone-btn"
                href={`tel:${AGENCY_CONFIG.phone}`}
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-[#10243A] text-white hover:bg-[#1a3550] transition-colors shadow-sm"
                aria-label={`Appeler ${AGENCY_CONFIG.phone}`}
              >
                <Phone className="w-3.5 h-3.5" />
                {AGENCY_CONFIG.phone}
              </a>
            </div>

            {/* Mobile toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#25D366] text-white rounded-lg"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={mobileOpen}
                className="p-2 text-[#10243A] hover:bg-[#F5F6F8] rounded-lg transition-colors"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#10243A]/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-label="Menu de navigation mobile"
        aria-modal="true"
        className={`fixed top-0 right-0 bottom-0 z-50 w-[300px] max-w-[90vw] bg-white shadow-2xl flex flex-col lg:hidden transition-transform duration-300 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#F5F6F8]">
          <Logo variant="compact" />
          <button
            id="mobile-drawer-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Fermer le menu"
            className="p-1.5 text-[#334155] hover:text-[#10243A] hover:bg-[#F5F6F8] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Nav */}
        <nav aria-label="Navigation mobile" className="flex-1 overflow-y-auto py-4 px-4">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.path}>
                <div className="px-3 py-1 text-[10px] uppercase tracking-widest text-[#C8A96B] font-bold mt-3 mb-1">
                  {link.label}
                </div>
                {link.children.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium mb-0.5 transition-colors ${
                      location.pathname === child.path
                        ? 'bg-[#10243A]/8 text-[#10243A] font-bold border-l-2 border-[#C8A96B]'
                        : 'text-[#334155] hover:bg-[#F5F6F8] hover:text-[#10243A]'
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
                className={`block px-3 py-2.5 rounded-lg text-sm font-semibold mb-0.5 transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#10243A]/8 text-[#10243A] font-bold border-l-2 border-[#C8A96B]'
                    : 'text-[#334155] hover:bg-[#F5F6F8] hover:text-[#10243A]'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Drawer Footer */}
        <div className="px-5 pb-6 pt-4 border-t border-[#F5F6F8] space-y-2.5">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white text-sm font-bold rounded-xl"
          >
            <FaWhatsapp className="w-5 h-5" />
            Contacter sur WhatsApp
          </a>
          <a
            href={`tel:${AGENCY_CONFIG.phone}`}
            className="flex items-center justify-center gap-2 w-full py-3 bg-[#10243A] text-white text-sm font-bold rounded-xl"
          >
            <Phone className="w-4 h-4" />
            {AGENCY_CONFIG.phone}
          </a>
        </div>
      </div>
    </>
  );
};
