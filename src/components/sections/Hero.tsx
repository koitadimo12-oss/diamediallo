import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { MapPin, Search, ArrowRight, MessageSquare, ChevronDown } from 'lucide-react';
import { AGENCY_CONFIG } from '../../data';
import { buildWhatsAppLink, buildGeneralContactMessage } from '../../utils/whatsapp';
import { PropertyType, TransactionType } from '../../types';

const HERO_IMAGES = [
  '/image-colobane.jpg',
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2400&q=85',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=85',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=85',
];

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const [imgIndex, setImgIndex] = useState(0);
  const [selectedType, setSelectedType] = useState<PropertyType | 'all'>('all');
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionType | 'all'>('all');
  const [selectedZone, setSelectedZone] = useState('all');

  // GSAP entrance animation
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(badgeRef.current, { opacity: 0, y: -24 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
        .fromTo(subtitleRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
        .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .fromTo(searchRef.current, { opacity: 0, y: 30, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.7 }, '-=0.3');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Background image crossfade
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedType !== 'all') params.set('type', selectedType);
    if (selectedTransaction !== 'all') params.set('transaction', selectedTransaction);
    if (selectedZone !== 'all') params.set('zone', selectedZone);
    navigate(`/biens?${params.toString()}`);
  };

  const scrollDown = () => {
    const next = document.getElementById('hero-scroll-target');
    next?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Section héro — Agence Immobilière Diame Diallo"
    >
      {/* Background Images with crossfade */}
      {HERO_IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? "Place de la Nation à Colobane, Dakar, carrefour d'implantation de l'Agence Immobilière D.DIALLO" : 'Immobilier de prestige au Sénégal'}
          aria-hidden={i !== imgIndex}
          loading={i === 0 ? 'eager' : 'lazy'}
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ${
            i === imgIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: 0 }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80';
          }}
        />
      ))}

      {/* Dark gradient overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(16,36,58,0.72) 0%, rgba(16,36,58,0.58) 42%, rgba(16,36,58,0.78) 100%)',
        }}
      />

      {/* Gold particle accents */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#C8A96B]/5 blur-3xl z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#C8A96B]/5 blur-3xl z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center py-24">

        {/* Brand Value Proposition Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold max-w-2xl text-center"
        >
          <MapPin className="w-4 h-4 text-[#C8A96B] flex-shrink-0" />
          <span>Bien plus qu'une agence immobilière, un partenaire de confiance pour vos projets fonciers au Sénégal.</span>
        </div>

        {/* Main headline */}
        <h1
          ref={titleRef}
          id="hero-title"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight mb-6 max-w-4xl"
         
        >
          Votre projet immobilier au Sénégal{' '}
          <span className="text-[#C8A96B] relative inline-block">
            mérite un partenaire
            <span
              className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
              style={{ background: 'linear-gradient(90deg, #C8A96B, transparent)' }}
            />
          </span>
          {' '}de confiance.
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          id="hero-description"
          className="text-sm sm:text-base md:text-lg text-white/85 max-w-3xl leading-relaxed mb-9"
        >
          Achat de terrain, vente, location et gestion locative : nous vous accompagnons dans vos projets immobiliers avec <strong className="text-[#C8A96B] font-semibold">proximité, transparence et une attention particulière aux questions foncières</strong>.
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10 w-full max-w-md"
        >
          <a
            href="/biens"
            onClick={(e) => { e.preventDefault(); navigate('/biens'); }}
            id="hero-discover-btn"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C8A96B] hover:bg-[#b8995b] text-[#10243A] font-bold text-sm rounded-xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Découvrir nos biens
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/contact"
            onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
            id="hero-counselor-btn"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white font-semibold text-sm rounded-xl border border-white/30 backdrop-blur-md transition-all"
          >
            <MessageSquare className="w-4 h-4 text-[#C8A96B]" />
            Parler à un conseiller
          </a>
        </div>

        {/* Quick Search Bar */}
        <div ref={searchRef} id="hero-search" className="w-full max-w-4xl">
          <form
            onSubmit={handleSearch}
            className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              <div>
                <label
                  htmlFor="search-transaction"
                  className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-1.5"
                >
                  Opération
                </label>
                <select
                  id="search-transaction"
                  value={selectedTransaction}
                  onChange={(e) => setSelectedTransaction(e.target.value as TransactionType | 'all')}
                  className="w-full bg-[#F5F6F8] border border-[#e2e8f0] rounded-lg px-3 py-2.5 text-sm text-[#10243A] font-medium focus:outline-none focus:ring-2 focus:ring-[#C8A96B] focus:border-transparent"
                >
                  <option value="all">Tout (Acheter & Louer)</option>
                  <option value="vente">Acheter</option>
                  <option value="location">Louer</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="search-type"
                  className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-1.5"
                >
                  Type de bien
                </label>
                <select
                  id="search-type"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as PropertyType | 'all')}
                  className="w-full bg-[#F5F6F8] border border-[#e2e8f0] rounded-lg px-3 py-2.5 text-sm text-[#10243A] font-medium focus:outline-none focus:ring-2 focus:ring-[#C8A96B] focus:border-transparent"
                >
                  <option value="all">Tous types</option>
                  <option value="terrain">Terrain & Parcelle</option>
                  <option value="appartement">Appartement</option>
                  <option value="maison">Maison & Villa</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="search-zone"
                  className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-1.5"
                >
                  Localisation
                </label>
                <select
                  id="search-zone"
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value)}
                  className="w-full bg-[#F5F6F8] border border-[#e2e8f0] rounded-lg px-3 py-2.5 text-sm text-[#10243A] font-medium focus:outline-none focus:ring-2 focus:ring-[#C8A96B] focus:border-transparent"
                >
                  <option value="all">Tout le Sénégal</option>
                  <option value="Colobane">Colobane (Siège)</option>
                  <option value="Grand Dakar">Grand Dakar</option>
                  <option value="Les Almadies">Les Almadies</option>
                  <option value="Plateau">Dakar Plateau</option>
                  <option value="Fann Résidence">Fann Résidence</option>
                  <option value="Sacré-Cœur">Sacré-Cœur / VDN</option>
                  <option value="Mermoz / Keur Gorgui">Mermoz / Keur Gorgui</option>
                  <option value="Ngor Virage">Ngor Virage</option>
                  <option value="Rufisque">Rufisque</option>
                  <option value="Diamniadio">Diamniadio</option>
                  <option value="Saly / Somone">Saly / Somone</option>
                </select>
              </div>

              <button
                type="submit"
                id="hero-search-submit"
                className="w-full flex items-center justify-center gap-2 bg-[#10243A] hover:bg-[#1a3550] text-white font-bold text-sm py-2.5 px-5 rounded-lg transition-colors shadow-md cursor-pointer"
              >
                <Search className="w-4 h-4" />
                Rechercher
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        id="hero-scroll-btn"
        onClick={scrollDown}
        aria-label="Défiler vers le bas"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/60 hover:text-[#C8A96B] transition-colors group"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Découvrir</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>

      {/* Scroll target anchor */}
      <div id="hero-scroll-target" className="absolute bottom-0" />
    </section>
  );
};
