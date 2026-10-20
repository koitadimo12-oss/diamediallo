import React from 'react';
import { Award, MapPin, Clock, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { AGENCY_CONFIG } from '../../data';

export const StatsSection: React.FC = () => {
  return (
    <section
      id="notre-experience"
      className="py-18 md:py-24 bg-gradient-to-b from-[#0b1726] via-[#0f2137] to-[#10243A] relative overflow-hidden text-white"
      aria-labelledby="experience-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            Notre Expérience & Ancrage
          </div>

          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4"
           
          >
            {AGENCY_CONFIG.experienceHeadline}
          </h2>

          <p className="text-white/75 text-sm sm:text-base leading-relaxed">
            Implantée au cœur de Dakar, l’Agence Immobilière D.DIALLO privilégie l'écoute humaine, la proximité avec les quartiers et une attention rigoureuse portée à la régularité des démarches foncières.
          </p>
        </div>

        {/* 4 Pillars of Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Pillar 1: Ancienneté historique */}
          <div className="rounded-2xl bg-white/[0.06] border border-white/10 hover:border-amber-400/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-black text-amber-400">
                  {AGENCY_CONFIG.history.experienceIndicator}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Ancienneté sur le marché</h3>
              <p className="text-xs text-white/65 leading-relaxed">
                Création historique estimée aux alentours de 2004 à Dakar, témoignant d'une pratique continue du terrain au Sénégal.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-amber-300/80">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Sous réserve de confirmation officielle</span>
            </div>
          </div>

          {/* Pillar 2: Ancrage Colobane / Dakar */}
          <div className="rounded-2xl bg-white/[0.06] border border-white/10 hover:border-amber-400/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-2xl font-black text-white mb-1">
                Colobane
              </div>
              <h3 className="text-base font-bold text-white mb-2">Implantation locale forte</h3>
              <p className="text-xs text-white/65 leading-relaxed">
                Située angle Rue 41 × Rue 42 à Colobane, l'agence intervient activement sur toute la région de Dakar et ses extensions.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Agence physique avec pignon sur rue</span>
            </div>
          </div>

          {/* Pillar 3: Rigueur & Vigilance Foncière */}
          <div className="rounded-2xl bg-white/[0.06] border border-white/10 hover:border-amber-400/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-2xl font-black text-white mb-1">
                Pédagogie
              </div>
              <h3 className="text-base font-bold text-white mb-2">Vérifications foncières</h3>
              <p className="text-xs text-white/65 leading-relaxed">
                Aide à la compréhension des pièces présentées (TF, baux, délibérations) et orientation vers les professionnels habilités (notaires, géomètres).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-amber-300/80">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Sensibilisation aux fraudes et litiges</span>
            </div>
          </div>

          {/* Pillar 4: Disponibilité 7j/7 */}
          <div className="rounded-2xl bg-white/[0.06] border border-white/10 hover:border-amber-400/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-2xl font-black text-white mb-1">
                7j / 7
              </div>
              <h3 className="text-base font-bold text-white mb-2">Horaires élargis</h3>
              <p className="text-xs text-white/65 leading-relaxed">
                Accueil et permanence téléphonique de 08h30 à 20h30 du lundi au samedi, et de 09h30 à 20h00 le dimanche.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Permanence WhatsApp active</span>
            </div>
          </div>
        </div>

        {/* Responsible Real Estate Statement */}
        <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 sm:p-6 backdrop-blur-md text-xs sm:text-sm text-white/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <p>
              <strong className="text-white font-semibold">Engagement déontologique :</strong> L’Agence Immobilière D.DIALLO n’émet pas d’avis juridiques réglementés réservés aux professions judiciaires et oriente systématiquement ses clients vers les études notariales et géomètres compétents.
            </p>
          </div>
          <a
            href="/a-propos"
            className="flex-shrink-0 text-xs font-bold text-amber-400 hover:text-white underline underline-offset-4"
          >
            En savoir plus sur notre histoire
          </a>
        </div>
      </div>
    </section>
  );
};
