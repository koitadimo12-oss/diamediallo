import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, TrendingUp, Key, Settings, MapPin, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, AGENCY_CONFIG } from '../../data';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const ICONS: Record<string, React.ElementType> = {
  Home,
  TrendingUp,
  Key,
  Settings,
  MapPin,
  ShieldCheck,
};

const SERVICE_IMAGES: Record<string, string> = {
  terrains: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
  'gestion-locative': 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
  intermediation: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  'assistance-fonciere': '/imageservicefonciere.jpg',//c est le nom de l image il est dans le dossier public
};

export const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.services-heading',
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
        '.service-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#F5F6F8]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="services-heading text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C8A96B] mb-3">
            Ce que nous faisons
          </span>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#10243A] leading-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Nos Services Immobiliers
          </h2>
          <p className="mt-4 text-[#334155] max-w-xl mx-auto text-base sm:text-lg">
            Quatre expertises complémentaires pour vous accompagner à chaque étape de votre projet.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = ICONS[service.iconName] ?? Home;
            const isGold = idx % 2 === 1;
            const imgSrc = SERVICE_IMAGES[service.slug] || SERVICE_IMAGES['intermediation'];
            const waHref = buildWhatsAppLink(
              `Bonjour Agence Immobilière D.DIALLO, je souhaite échanger avec vous concernant le service « ${service.title} » à Dakar.`
            );

            return (
              <article
                key={service.id}
                className="service-card group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-[#e2e8f0] hover:border-[#C8A96B]/50 transition-all duration-400 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Service Cover Image */}
                  <div className="relative h-44 w-full overflow-hidden bg-[#10243A]">
                    <img
                      src={imgSrc}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/85 via-[#10243A]/30 to-transparent" />
                    
                    {/* Floating Icon */}
                    <div
                      className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center text-[#10243A] border border-white/50"
                    >
                      <Icon className="w-5 h-5 text-[#d97706]" />
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-[#10243A] mb-2 leading-snug">
                      {service.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-[#334155] leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    {/* Prestations bullet list */}
                    <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#C8A96B] mb-2">
                        Prestations clés :
                      </p>
                      {service.benefits.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-600 leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link
                    to={`/services/${service.slug}`}
                    id={`service-link-${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10243A] hover:text-[#C8A96B] transition-colors"
                    aria-label={`Découvrir ${service.title}`}
                  >
                    <span>{service.slug === 'terrains' ? 'Accompagnement' : 'En savoir plus'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white text-xs font-semibold transition-colors"
                    title="Discuter de ce service sur WhatsApp"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
