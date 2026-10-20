import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Quote, MessageSquare, ArrowRight, Award, ShieldCheck, Users, MapPin } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { usePageMeta } from '../hooks/usePageMeta';
import { AGENCY_CONFIG, DIRECTRICE_MESSAGE } from '../data';
import { buildWhatsAppLink, buildGeneralContactMessage } from '../utils/whatsapp';

import { StatsSection } from '../components/sections/StatsSection';

const DIAME_PHOTO = '/diame.jpeg';
const DIAME_PHOTO_FALLBACK =
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80';

const PILLARS = [
  { icon: Award, title: 'Expertise locale (+20 ans)', text: 'Une parfaite connaissance du marché sénégalais, de Dakar à la Petite-Côte.' },
  { icon: ShieldCheck, title: 'Sécurité juridique 100%', text: 'Vérification systématique des titres fonciers et des baux pour chaque transaction.' },
  { icon: Users, title: 'Accompagnement diaspora', text: "Suivi vidéo, gestion à distance et reporting mensuel pour les Sénégalais de l'extérieur." },
  { icon: MapPin, title: 'Présence terrain à Dakar', text: 'Ancrés à Dakar depuis plus de deux décennies et actifs sur tout le territoire.' },
];

const VALUES = [
  'Écoute attentive et personnalisée',
  'Transparence dans chaque transaction',
  'Rigueur juridique et notariale',
  'Réactivité et disponibilité',
  'Respect de vos intérêts à chaque étape',
  'Relation de confiance durable depuis plus de 20 ans',
];

export const AboutPage: React.FC = () => {
  usePageMeta({
    title: `À Propos — ${AGENCY_CONFIG.name} · Plus de 20 ans d'histoire`,
    description: `Découvrez l'${AGENCY_CONFIG.name}, fondée par ${AGENCY_CONFIG.director.name}. Une référence immobilière sénégalaise présente à Dakar depuis plus de 20 ans.`,
    canonical: `${AGENCY_CONFIG.siteUrl}/a-propos`,
    ogImage: '/logodiame.png',
  });

  const paragraphs = DIRECTRICE_MESSAGE.quote.split('\n\n').filter(Boolean);
  const waHref = buildWhatsAppLink(buildGeneralContactMessage());

  return (
    <Layout>
      {/* Hero */}
      <div className="relative py-20 md:py-28 bg-[#10243A] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle, #C8A96B 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">Notre histoire · Plus de 20 ans d'expérience</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            À Propos de l'Agence Immobilière Diame Diallo
          </h1>
          <p className="mt-4 text-white/70 text-sm sm:text-base max-w-xl mx-auto">
            Une référence immobilière à Dakar fondée sur des valeurs d'écoute, d'intégrité et de transparence, au service de vos projets patrimoniaux depuis plus de 20 ans.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Mot du fondateur */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-400/30 rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-[#0a1726]">
              <img
                src={DIAME_PHOTO}
                alt={`Portrait de ${AGENCY_CONFIG.director.name}, Fondateur de l'Agence Immobilière Diame Diallo`}
                loading="lazy"
                className="w-full h-full object-cover object-top"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = DIAME_PHOTO_FALLBACK; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/90 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">{AGENCY_CONFIG.director.role}</p>
                <p className="text-white text-2xl font-black" style={{ fontFamily: 'Georgia, serif' }}>M. {AGENCY_CONFIG.director.name}</p>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-500 mb-4">Le mot du Fondateur</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#10243A] mb-6 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Plus de 20 ans de confiance et d'exigence à votre service à Dakar
            </h2>
            <Quote className="w-10 h-10 text-amber-500/30 mb-4" />
            <div className="space-y-3.5 mb-8">
              {paragraphs.map((para, i) => (
                <p key={i} className={`text-sm sm:text-base leading-relaxed ${i === 0 ? 'text-[#10243A] font-medium' : 'text-[#334155]'}`}>
                  {para}
                </p>
              ))}
            </div>
            <p className="text-amber-600 font-black text-xl" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              {DIRECTRICE_MESSAGE.signature}
            </p>
            <p className="text-[#334155] text-xs mt-1">{DIRECTRICE_MESSAGE.role}</p>
          </div>
        </div>

        {/* Our values */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C8A96B] mb-3">Ce qui nous définit</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#10243A]" style={{ fontFamily: 'Georgia, serif' }}>Nos Valeurs</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VALUES.map((v, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#F5F6F8] shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C8A96B] flex-shrink-0" />
                <span className="text-sm font-medium text-[#334155]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C8A96B] mb-3">Nos piliers</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#10243A]" style={{ fontFamily: 'Georgia, serif' }}>
              Ce qui fait notre force
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-6 border border-[#F5F6F8] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10243A] to-[#1a3550] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#C8A96B]" />
                  </div>
                  <h3 className="text-base font-bold text-[#10243A] mb-2">{p.title}</h3>
                  <p className="text-sm text-[#334155] leading-relaxed">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-3xl p-10 text-center text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #10243A 0%, #1a3550 100%)' }}
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle, #C8A96B 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-black mb-3" style={{ fontFamily: 'Georgia, serif' }}>Prêt(e) à démarrer votre projet ?</h2>
            <p className="text-white/70 mb-7 max-w-md mx-auto text-sm">Contactez-nous dès aujourd'hui pour un premier entretien sans engagement.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1DB954] text-white font-bold rounded-xl transition-colors">
                <MessageSquare className="w-4 h-4 fill-current" /> WhatsApp
              </a>
              <Link to="/contact" className="flex items-center gap-2 px-6 py-3 bg-[#C8A96B] hover:bg-[#b8995b] text-[#10243A] font-bold rounded-xl transition-colors">
                Nous contacter <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
