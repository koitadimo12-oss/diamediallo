import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, CheckCircle2, ShieldCheck, Award, MessageSquare, MapPin } from 'lucide-react';
import { DIRECTRICE_MESSAGE, AGENCY_CONFIG } from '../../data';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';
gsap.registerPlugin(ScrollTrigger);

const DIAME_PHOTO = '/diame.jpeg';
const DIAME_PHOTO_FALLBACK =
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80';

const KEY_STRENGTHS = [
  'Plus de 10 ans de présence continue et de confiance sur Dakar',
  'Sécurisation juridique stricte (Titres Fonciers, Baux et Notaires)',
  'Partenaire privilégié de la diaspora pour investir au Sénégal',
  'Accompagnement transparent et personnalisé du premier contact à la remise des clés',
];

export const MotDeDirectrice: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.mot-photo',
        { opacity: 0, x: -40, scale: 0.96 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
      gsap.fromTo(
        '.mot-content',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const paragraphs = DIRECTRICE_MESSAGE.quote.split('\n\n').filter(Boolean);
  const waLink = buildWhatsAppLink(
    `Bonjour M. Diame Diallo, j'ai lu votre mot sur le site de l'agence et je souhaite échanger directement avec vous concernant un projet immobilier à Dakar.`
  );

  return (
    <section
      id="mot-fondateur"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#0a1726] relative overflow-hidden text-white"
      aria-labelledby="mot-heading"
    >
      {/* Background luxury accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />
      
      {/* Subtle geometric grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #e59819 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Photo Column (5 cols) */}
          <div className="lg:col-span-5 mot-photo flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Outer Golden Glow & Frame */}
              <div className="absolute -inset-3 bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-transparent rounded-3xl blur-xl" />
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-amber-400/30 rounded-3xl pointer-events-none" />

              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-[#00152a] aspect-[4/5] group">
                <img
                  src={DIAME_PHOTO}
                  alt="Portrait de M. Diame Diallo, Fondateur & Directeur Général de l'Agence Immobilière Diame Diallo SUARL à Dakar"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = DIAME_PHOTO_FALLBACK;
                  }}
                />

                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1726] via-[#0a1726]/40 to-transparent" />

                {/* Top Badge: 10+ ans à Dakar */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-bold tracking-wide">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  Présent à Dakar depuis +10 ans
                </div>

                {/* Bottom Card Identity */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a1726] via-[#0a1726]/90 to-transparent">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <p className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                      {AGENCY_CONFIG.director.role}
                    </p>
                  </div>
                  <h3 className="text-white text-2xl font-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                    {AGENCY_CONFIG.director.name}
                  </h3>
                  <p className="text-white/60 text-xs mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    {AGENCY_CONFIG.name} · Colobane, Dakar
                  </p>
                </div>
              </div>

              {/* Floating Trust Pill */}
              <div className="absolute -bottom-5 -right-2 sm:-right-4 bg-gradient-to-br from-[#10243A] to-[#1e3a5f] text-white px-4 py-3 rounded-2xl shadow-2xl border border-amber-400/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 font-black">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Partenaire de confiance</p>
                  <p className="text-[11px] text-amber-300/80">Accompagnement & Pédagogie</p>
                </div>
              </div>
            </div>

            {/* Strengths below photo */}
            <div className="mt-12 space-y-3 w-full max-w-md">
              {KEY_STRENGTHS.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Message Content (7 cols) */}
          <div className="lg:col-span-7 mot-content">
            {/* Pill Header */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-5">
              <span>Le mot du Directeur Général</span>
            </div>

            <h2
              id="mot-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Votre confiance est notre plus belle réussite
            </h2>

            {/* Gold Quote decoration */}
            <div className="flex items-center gap-4 mb-6">
              <Quote className="w-12 h-12 text-amber-400/40 rotate-180 flex-shrink-0" />
              <div className="h-[2px] flex-1 bg-gradient-to-r from-amber-400/40 to-transparent" />
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-base leading-relaxed">
              {paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className={`${
                    idx === 0
                      ? 'text-white/95 font-medium text-lg leading-relaxed text-amber-100/90'
                      : 'text-white/75'
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Signature & Actions */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p
                  className="text-amber-400 text-2xl font-black tracking-wide"
                  style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                >
                  {DIRECTRICE_MESSAGE.signature}
                </p>
                <p className="text-white/50 text-xs mt-1">
                  {DIRECTRICE_MESSAGE.role}
                </p>
                <p className="text-amber-300/80 text-[11px] font-semibold mt-0.5">
                  Colobane, Dakar · Partenaire foncier au Sénégal
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="/a-propos"
                  id="mot-about-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all cursor-pointer"
                >
                  En savoir plus sur l'agence
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="mot-direct-chat-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1DB954] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Échanger sur WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const MotDuDirecteur = MotDeDirectrice;

