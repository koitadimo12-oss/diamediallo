import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Clock, Award, Users, MapPin, FileCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const REASONS = [
  {
    id: 'r-expertise',
    icon: Award,
    title: 'Expertise locale reconnue',
    description:
      'Une connaissance approfondie du marché immobilier sénégalais, de Dakar à la Petite-Côte, pour vous orienter vers les meilleures opportunités.',
  },
  {
    id: 'r-juridique',
    icon: ShieldCheck,
    title: 'Sécurité juridique totale',
    description:
      'Vérification systématique des titres fonciers, des baux et de la conformité administrative. Chaque transaction est sécurisée.',
  },
  {
    id: 'r-diaspora',
    icon: Users,
    title: 'Accompagnement diaspora',
    description:
      "Suivi en temps réel par vidéo, gestion locative à distance et reporting mensuel pour les Sénégalais de l'extérieur.",
  },
  {
    id: 'r-disponibilite',
    icon: Clock,
    title: 'Disponibilité & réactivité',
    description:
      'Une équipe à votre écoute du lundi au samedi, avec une réponse rapide à toute demande par WhatsApp ou téléphone.',
  },
  {
    id: 'r-implantation',
    icon: MapPin,
    title: 'Présence terrain',
    description:
      "Ancrés au cœur de Dakar et actifs sur l'ensemble du territoire sénégalais pour vous offrir le meilleur ancrage local.",
  },
  {
    id: 'r-transparence',
    icon: FileCheck,
    title: 'Transparence & confiance',
    description:
      "Des honoraires clairs, aucun frais caché, et une relation fondée sur l'honnêteté et le respect de vos intérêts.",
  },
];

export const WhyUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.whyus-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
      gsap.fromTo(
        '.whyus-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="pourquoi-nous"
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#F5F6F8]"
      aria-labelledby="whyus-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="whyus-heading text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#8a6a2a] mb-3">
            Notre différence
          </span>
          <h2
            id="whyus-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#10243A] leading-tight"
           
          >
            Pourquoi nous choisir ?
          </h2>
          <p className="mt-4 text-[#334155] max-w-xl mx-auto text-base sm:text-lg">
            Des valeurs fortes et une approche centrée sur votre satisfaction.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.id}
                id={reason.id}
                className="whyus-card group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-transparent hover:border-[#C8A96B]/20 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10243A] to-[#1a3550] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-[#C8A96B]" />
                </div>
                <h3 className="text-base font-bold text-[#10243A] mb-2">{reason.title}</h3>
                <p className="text-sm text-[#334155] leading-relaxed">{reason.description}</p>
                {/* Bottom accent */}
                <div
                  className="mt-5 h-0.5 rounded-full w-0 group-hover:w-12 transition-all duration-500"
                  style={{ background: 'linear-gradient(90deg, #C8A96B, transparent)' }}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
