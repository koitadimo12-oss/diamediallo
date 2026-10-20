import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Send } from 'lucide-react';
import { AGENCY_CONFIG } from '../../data';
import { buildWhatsAppLink, buildGeneralContactMessage } from '../../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';
gsap.registerPlugin(ScrollTrigger);

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-col',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact-home"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
      aria-labelledby="contact-home-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Info */}
          <div className="contact-col">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#8a6a2a] mb-4">
              Prendre contact
            </span>
            <h2
              id="contact-home-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#10243A] leading-tight mb-6"
             
            >
              Parlons de votre projet
            </h2>
            <p className="text-[#334155] text-base sm:text-lg leading-relaxed mb-10">
              Achat, vente, location ou gestion locative : notre équipe est disponible pour répondre à toutes vos questions et vous accompagner avec rigueur et bienveillance.
            </p>

            <div className="space-y-5">
              {/* WhatsApp */}
              <a
                href={buildWhatsAppLink(buildGeneralContactMessage())}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-home-whatsapp"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#F5F6F8] hover:bg-[#25D366]/10 border border-transparent hover:border-[#25D366]/30 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#334155] mb-0.5">WhatsApp</p>
                  <p className="text-[#10243A] font-bold text-sm">{AGENCY_CONFIG.whatsappDisplay}</p>
                  <p className="text-[#334155] text-xs">Réponse rapide, disponible 7j/7</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C8A96B] ml-auto group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Phone */}
              <a
                href={`tel:${AGENCY_CONFIG.phone}`}
                id="contact-home-phone"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#F5F6F8] hover:bg-[#10243A]/5 border border-transparent hover:border-[#10243A]/20 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#10243A] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#C8A96B]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#334155] mb-0.5">Téléphone</p>
                  <p className="text-[#10243A] font-bold text-sm">{AGENCY_CONFIG.phone}</p>
                  <p className="text-[#334155] text-xs">{AGENCY_CONFIG.hours}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C8A96B] ml-auto group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${AGENCY_CONFIG.email}`}
                id="contact-home-email"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#F5F6F8] hover:bg-[#C8A96B]/5 border border-transparent hover:border-[#C8A96B]/30 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#C8A96B] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#10243A]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#334155] mb-0.5">Email</p>
                  <p className="text-[#10243A] font-bold text-sm break-all">{AGENCY_CONFIG.email}</p>
                  <p className="text-[#334155] text-xs">Réponse sous 24h</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C8A96B] ml-auto group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Address */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F5F6F8]">
                <div className="w-11 h-11 rounded-xl bg-[#F5F6F8] border border-[#C8A96B]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#C8A96B]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#334155] mb-0.5">Adresse</p>
                  <p className="text-[#10243A] font-semibold text-sm">{AGENCY_CONFIG.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA visual */}
          <div className="contact-col relative">
            <div
              className="rounded-3xl overflow-hidden relative min-h-[400px] flex flex-col items-center justify-center p-10 text-center shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #10243A 0%, #1a3550 50%, #10243A 100%)',
              }}
            >
              {/* Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle, #C8A96B 1px, transparent 1px)`,
                  backgroundSize: '28px 28px',
                }}
              />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#C8A96B]/20 border border-[#C8A96B]/40 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-7 h-7 text-[#C8A96B]" />
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight"
                 
                >
                  Formulaire de contact complet
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
                  Décrivez votre projet en détail (budget, type de bien, localisation) et nous vous répondrons dans les plus brefs délais.
                </p>
                <Link
                  to="/contact"
                  id="contact-cta-link"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C8A96B] hover:bg-[#b8995b] text-[#10243A] font-bold text-sm rounded-xl transition-colors shadow-lg hover:shadow-xl"
                >
                  Envoyer un message
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
