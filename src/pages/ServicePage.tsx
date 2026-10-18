import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Home, TrendingUp, Key, Settings, MapPin, ShieldCheck, ArrowRight, ArrowLeft, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { usePageMeta } from '../hooks/usePageMeta';
import { SERVICES_DATA, AGENCY_CONFIG } from '../data';
import { buildWhatsAppLink } from '../utils/whatsapp';

const ICONS: Record<string, React.ElementType> = {
  Home,
  TrendingUp,
  Key,
  Settings,
  MapPin,
  ShieldCheck,
};

const ALIAS_MAP: Record<string, string> = {
  achat: 'terrains',
  vente: 'intermediation',
  location: 'intermediation',
};

const PAGE_META: Record<string, { title: string; description: string }> = {
  terrains: {
    title: 'Achat et Vente de Terrains au Sénégal | Agence Immobilière D.DIALLO',
    description: "Accompagnement dans la recherche de parcelles, collecte des informations disponibles et orientation dans les vérifications foncières à Dakar.",
  },
  'gestion-locative': {
    title: 'Gestion Locative & Conciergerie à Dakar | Agence Immobilière D.DIALLO',
    description: "Gestion de proximité pour votre patrimoine à Dakar : organisation des visites, sélection des locataires, suivi administratif et accompagnement diaspora.",
  },
  intermediation: {
    title: 'Achat, Vente et Location de Biens Immobiliers | Agence Immobilière D.DIALLO',
    description: "Recherche de biens, appartements, villas, maisons et parcelles à Dakar avec un accompagnement rigoureux et transparent.",
  },
  'assistance-fonciere': {
    title: 'Conseil et Assistance Foncière | Agence Immobilière D.DIALLO',
    description: "Pédagogie autour du titre foncier, du bail et de la délibération au Sénégal. Prévention des fraudes et orientation administrative.",
  },
};

export const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const resolvedSlug = (slug && ALIAS_MAP[slug]) || slug || 'terrains';
  const service = SERVICES_DATA.find((s) => s.slug === resolvedSlug) || SERVICES_DATA[0];
  const meta = PAGE_META[service.slug] ?? {
    title: `${service.title} | ${AGENCY_CONFIG.name}`,
    description: service.shortDescription,
  };

  usePageMeta({
    title: meta.title,
    description: meta.description,
    canonical: `${AGENCY_CONFIG.siteUrl}/services/${service.slug}`,
    ogImage: '/logodiame.jpeg',
  });

  const Icon = ICONS[service.iconName] ?? Home;
  const waMessage = encodeURIComponent(
    `Bonjour Agence Immobilière D.DIALLO,\n\nJe suis intéressé(e) par votre service « ${service.title} ».\n\nPouvez-vous me contacter ?\n\nMerci.`
  );
  const waHref = `https://wa.me/${AGENCY_CONFIG.whatsapp}?text=${waMessage}`;

  const otherServices = SERVICES_DATA.filter((s) => s.slug !== service.slug);

  return (
    <Layout>
      {/* Hero */}
      <div className="relative py-20 md:py-28 bg-[#10243A] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle, #C8A96B 1px, transparent 1px)`, backgroundSize: '28px 28px' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#C8A96B]/20 border border-[#C8A96B]/40 flex items-center justify-center mx-auto mb-6">
            <Icon className="w-7 h-7 text-[#C8A96B]" />
          </div>
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C8A96B] mb-4">Nos services</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            {service.title}
          </h1>
          <p className="mt-4 text-white/70 text-sm sm:text-base max-w-xl mx-auto">{service.shortDescription}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-7 border border-[#F5F6F8] shadow-sm">
              <h2 className="text-xl font-bold text-[#10243A] mb-4">Comment ça fonctionne</h2>
              <p className="text-[#334155] leading-relaxed text-sm sm:text-base">{service.fullDescription}</p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#F5F6F8] shadow-sm">
              <h2 className="text-xl font-bold text-[#10243A] mb-5">Ce que nous proposons</h2>
              <div className="space-y-3.5">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C8A96B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#334155]">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other services */}
            <div>
              <h2 className="text-lg font-bold text-[#10243A] mb-5">Nos autres services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {otherServices.map((s) => {
                  const OtherIcon = ICONS[s.iconName] ?? Home;
                  return (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#F5F6F8] hover:border-[#C8A96B]/30 hover:shadow-md transition-all group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#10243A] to-[#1a3550] flex items-center justify-center flex-shrink-0">
                        <OtherIcon className="w-4 h-4 text-[#C8A96B]" />
                      </div>
                      <span className="text-sm font-semibold text-[#10243A] group-hover:text-[#C8A96B] transition-colors line-clamp-2">
                        {s.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="space-y-5">
            <div
              className="rounded-2xl p-6 text-white sticky top-24"
              style={{ background: 'linear-gradient(135deg, #10243A, #1a3550)' }}
            >
              <h3 className="text-lg font-black mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                Démarrer mon projet
              </h3>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">
                Vous avez un projet ? Notre équipe vous accompagne de A à Z.
              </p>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                id={`service-whatsapp-${service.slug}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#1DB954] text-white font-bold text-sm rounded-xl transition-colors mb-2.5"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                WhatsApp Direct
              </a>
              <a
                href={`tel:${AGENCY_CONFIG.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" />
                {AGENCY_CONFIG.phone}
              </a>
              <p className="text-white/40 text-xs text-center mt-4">{AGENCY_CONFIG.hours}</p>
            </div>

            <Link
              to="/biens"
              className="flex items-center justify-between px-5 py-4 bg-[#F5F6F8] hover:bg-white rounded-xl border border-[#F5F6F8] hover:border-[#C8A96B]/30 transition-all group"
            >
              <span className="text-sm font-bold text-[#10243A]">Voir les biens disponibles</span>
              <ArrowRight className="w-4 h-4 text-[#C8A96B] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
