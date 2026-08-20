import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare, Building2, Calculator, ShieldCheck, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { AGENCY_INFO } from '../data/properties';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
  onOpenEstimator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  activeSection = 'accueil',
  onOpenEstimator,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'a-propos', label: 'À Propos' },
    { id: 'services', label: 'Nos Services' },
    { id: 'biens', label: 'Biens Immobiliers' },
    { id: 'simulateur', label: 'Simulateur Diaspora' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Bonjour Agence Immobilière Diame Diallo, je souhaiterais obtenir des informations sur vos biens immobiliers disponibles à Dakar."
    );
    window.open(`https://wa.me/${AGENCY_INFO.whatsapp.replace(/\+/g, '')}?text=${message}`, '_blank');
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e7e2d9]/80 py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('accueil')}
            className="flex items-center text-left focus:outline-none group cursor-pointer"
            aria-label="Accueil Diame Diallo"
          >
            <Logo variant="compact" size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors relative py-1 focus:outline-none cursor-pointer ${
                  activeSection === item.id
                    ? 'text-[#00152a] font-bold'
                    : 'text-[#43474d] hover:text-[#00152a]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#d97706] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              id="nav-whatsapp-desktop-btn"
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-[4px] bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors shadow-sm cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Direct</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              id="nav-contact-desktop-btn"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-[4px] bg-[#00152a] text-white hover:bg-[#102a43] transition-colors shadow-sm cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{AGENCY_INFO.phone}</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button (Hamburger as in Image 1) */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              id="nav-whatsapp-mobile-btn"
              onClick={openWhatsApp}
              className="p-2 text-white bg-[#25D366] rounded-[4px] hover:bg-[#20ba59] transition-colors cursor-pointer"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#00152a] hover:bg-neutral-100 rounded-[4px] transition-colors focus:outline-none cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="mobile-drawer-overlay"
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              id="mobile-drawer-content"
              className="fixed top-0 right-0 bottom-0 w-[290px] max-w-[85%] bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#e7e2d9]">
                  <Logo variant="compact" size="sm" />
                  <button
                    id="close-drawer-btn"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 text-gray-500 hover:text-black rounded cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-4 space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      id={`mobile-nav-link-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-3 py-2.5 rounded text-sm font-medium transition-colors cursor-pointer ${
                        activeSection === item.id
                          ? 'bg-[#fef9f0] text-[#00152a] font-bold border-l-2 border-[#d97706]'
                          : 'text-[#43474d] hover:bg-neutral-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-[#e7e2d9] space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#43474d] px-3">
                    <MapPin className="w-3.5 h-3.5 text-[#d97706]" />
                    <span>Rue de Colobane, Dakar</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#43474d] px-3">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#d97706]" />
                    <span>Agence Agréée SUARL</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-6 border-t border-[#e7e2d9]">
                <button
                  id="drawer-whatsapp-btn"
                  onClick={openWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] text-white rounded-[4px] text-xs font-bold shadow-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Contacter sur WhatsApp</span>
                </button>
                <button
                  id="drawer-phone-btn"
                  onClick={() => handleNavClick('contact')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#00152a] text-white rounded-[4px] text-xs font-bold cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>{AGENCY_INFO.phone}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
