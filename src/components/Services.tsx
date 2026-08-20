import React from 'react';
import { motion } from 'motion/react';
import { Home, Key, Building2, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { AGENCY_INFO } from '../data/properties';

export const Services: React.FC<{ onContactRequest?: (service: string) => void }> = ({ onContactRequest }) => {
  const services = [
    {
      id: 'service-vente',
      title: 'Vente & Acquisition',
      description: 'Achat et vente de maisons, appartements et terrains au meilleur prix du marché à Dakar et au Sénégal.',
      icon: Home,
      features: ['Estimation gratuite & réaliste', 'Sécurisation du Titre Foncier', 'Visites qualifiées'],
    },
    {
      id: 'service-location',
      title: 'Location & Baux Sécurisés',
      description: 'Trouvez le bien idéal à louer, du studio fonctionnel à la villa de prestige aux Almadies.',
      icon: Key,
      features: ['Baux conformes loi sénégalaise', 'État des lieux rigoureux', 'Prise en charge rapide'],
    },
    {
      id: 'service-gestion',
      title: 'Gestion Immobilière & Patrimoine',
      description: 'Optimisez la rentabilité de votre patrimoine avec notre service de gestion locative transparente.',
      icon: Building2,
      features: ['Recouvrement ponctuel des loyers', 'Maintenance & réparations', 'Rapports mensuels transparents'],
    },
    {
      id: 'service-accompagnement',
      title: 'Accompagnement & Service Diaspora',
      description: 'Conseils juridiques, administratifs, cadastraux et bancaires pour vos investissements sécurisés.',
      icon: ShieldCheck,
      features: ['Liaison notaires & cadastre', 'Service dédié Diaspora', 'Suivi vidéo de chantiers'],
    },
  ];

  const handleAction = (serviceName: string) => {
    if (onContactRequest) {
      onContactRequest(serviceName);
    } else {
      const msg = encodeURIComponent(`Bonjour Agence Diame Diallo, je suis intéressé par votre service de ${serviceName}.`);
      window.open(`https://wa.me/${AGENCY_INFO.whatsapp.replace(/\+/g, '')}?text=${msg}`, '_blank');
    }
  };

  return (
    <section id="services" className="py-14 md:py-20 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Centered Gold Underline matching Image 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#d97706] mb-1 block">
            Expertise & Solutions
          </span>
          <h2 className="font-['Manrope'] font-extrabold text-2xl sm:text-3xl text-[#00152a] tracking-tight">
            Nos Services Immobiliers
          </h2>
          <div className="w-14 h-[3px] bg-[#d97706] mx-auto mt-2 rounded-full" />
        </motion.div>

        {/* Services Cards List with Staggered Entrance */}
        <div className="space-y-4 sm:space-y-5">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.id}
                id={srv.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white/95 backdrop-blur-md rounded-xl p-5 sm:p-6 border border-[#e7e2d9]/90 shadow-[0_4px_20px_rgba(0,21,42,0.04)] hover:shadow-lg transition-all group cursor-pointer"
                onClick={() => handleAction(srv.title)}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-[#f8f3ea] border border-[#e7e2d9] flex items-center justify-center flex-shrink-0 text-[#00152a] group-hover:bg-[#00152a] group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="font-['Manrope'] font-bold text-lg sm:text-xl text-[#00152a] group-hover:text-[#d97706] transition-colors">
                        {srv.title}
                      </h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAction(srv.title);
                        }}
                        className="text-xs font-bold text-[#d97706] hover:text-[#b45309] inline-flex items-center gap-1 self-start sm:self-auto group/btn mt-1 sm:mt-0 cursor-pointer"
                      >
                        <span>En savoir plus</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    <p className="text-sm sm:text-base text-[#43474d] font-normal leading-relaxed mb-3">
                      {srv.description}
                    </p>

                    {/* Feature badges */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-100">
                      {srv.features.map((feat, fidx) => (
                        <span
                          key={fidx}
                          className="inline-flex items-center gap-1 text-xs text-[#00152a] bg-[#f8f3ea] px-2.5 py-1 rounded-[4px] font-medium"
                        >
                          <Check className="w-3 h-3 text-[#d97706]" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
