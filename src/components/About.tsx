import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, MapPin, Clock, Building2, CheckCircle2 } from 'lucide-react';
import { AGENCY_INFO } from '../data/properties';
import { Logo } from './Logo';

export const About: React.FC = () => {
  const values = [
    {
      id: 'val-experience',
      title: 'Expérience',
      description: 'Une parfaite connaissance du marché sénégalais et dakarois.',
      icon: Award,
    },
    {
      id: 'val-confiance',
      title: 'Confiance & Sécurité Juridique',
      description: 'Des transactions transparentes avec Titres Fonciers et Baux audités.',
      icon: ShieldCheck,
    },
    {
      id: 'val-proximite',
      title: 'Proximité',
      description: 'Une agence ancrée au cœur de Colobane et active sur tout le Sénégal.',
      icon: MapPin,
    },
    {
      id: 'val-disponibilite',
      title: 'Disponibilité & Diaspora',
      description: 'Un accompagnement continu à chaque étape avec suivi vidéo en direct.',
      icon: Clock,
    },
  ];

  return (
    <section id="a-propos" className="py-14 md:py-20 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Architectural Hero Banner with Motion Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative mb-10 rounded-2xl overflow-hidden shadow-xl border border-[#e7e2d9]/80 max-w-2xl mx-auto group bg-[#00152a]"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Agence Immobilière Diame Diallo Dakar Sénégal"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80';
            }}
            className="w-full h-[320px] sm:h-[380px] md:h-[420px] object-cover object-center opacity-75 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00152a] via-[#00152a]/40 to-transparent" />
          
          {/* Top subtle badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md text-[#00152a] text-xs font-bold rounded-[4px] shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-[#d97706]" />
              <span>Siège Colobane • Dakar, Sénégal</span>
            </span>
          </div>

          {/* Bottom Banner Content */}
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <span className="inline-block px-3 py-1 bg-[#d97706] text-white text-[11px] font-bold uppercase tracking-wider rounded-[3px] mb-1.5 shadow-sm">
              Direction Générale • M. Diame Diallo
            </span>
            <h3 className="font-['Manrope'] font-extrabold text-xl sm:text-2xl text-white tracking-tight">
              Agence Immobilière Diame Diallo SUARL
            </h3>
            <p className="text-xs sm:text-sm text-neutral-200 mt-0.5">
              12+ années d'expertise et d'accompagnement immobilier d'excellence à Dakar
            </p>
          </div>
        </motion.div>

        {/* Text and Pillars Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="max-w-2xl mx-auto"
        >
          {/* Section Heading with Gold Bar */}
          <div className="mb-6">
            <h2 className="font-['Manrope'] font-extrabold text-2xl sm:text-3xl text-[#00152a] tracking-tight">
              À Propos de Diame Diallo
            </h2>
            <div className="w-16 h-[3px] bg-[#d97706] mt-2 rounded-full" />
          </div>

          {/* Description Paragraph */}
          <p className="text-[#43474d] text-base sm:text-lg leading-relaxed mb-8 font-normal">
            Fondée sur les principes de la <strong className="text-[#00152a] font-semibold">"Teranga Luxe"</strong> par <strong className="text-[#00152a] font-semibold">M. Diame Diallo</strong>, l'Agence Immobilière Diame Diallo allie l'hospitalité légendaire sénégalaise à une rigueur professionnelle internationale. Nous sommes votre partenaire privilégié pour tous vos projets immobiliers à Dakar, de Colobane aux Almadies, ainsi que pour les investissements de la diaspora.
          </p>

          {/* 4 Pillars with Motion Stagger */}
          <div className="space-y-5">
            {values.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <motion.div
                  key={val.id}
                  id={val.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                  className="flex items-start gap-3.5 group p-2 rounded-lg hover:bg-white/50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-[#f8f3ea] border border-[#e7e2d9] flex items-center justify-center flex-shrink-0 text-[#d97706] mt-0.5 group-hover:bg-[#d97706] group-hover:text-white transition-all shadow-sm">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-['Manrope'] font-bold text-base text-[#00152a] mb-0.5">
                      {val.title}
                    </h4>
                    <p className="text-sm text-[#43474d] font-normal leading-normal">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
};
