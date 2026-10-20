import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Quote,
  ArrowRight,
  Award,
  ShieldCheck,
  Users,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/ui/PageHeader';
import { usePageMeta } from '../hooks/usePageMeta';
import { AGENCY_CONFIG, DIRECTRICE_MESSAGE } from '../data';
import {
  buildWhatsAppLink,
  buildGeneralContactMessage,
} from '../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';
import { StatsSection } from '../components/sections/StatsSection';

const DIAME_PHOTO = '/diame.jpeg';

const DIAME_PHOTO_FALLBACK =
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80';

const PILLARS = [
  {
    icon: Award,
    title: 'Expertise locale (+20 ans)',
    text: 'Une parfaite connaissance du marché sénégalais, de Dakar à la Petite-Côte.',
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité juridique 100%',
    text: 'Vérification systématique des titres fonciers et des baux pour chaque transaction.',
  },
  {
    icon: Users,
    title: 'Accompagnement diaspora',
    text: "Suivi vidéo, gestion à distance et reporting mensuel pour les Sénégalais de l'extérieur.",
  },
  {
    icon: MapPin,
    title: 'Présence terrain à Dakar',
    text: 'Ancrés à Dakar depuis plus d’une décennie et actifs sur tout le territoire.',
  },
];

const VALUES = [
  'Écoute attentive et personnalisée',
  'Transparence dans chaque transaction',
  'Rigueur juridique et notariale',
  'Réactivité et disponibilité',
  'Respect de vos intérêts à chaque étape',
  'Relation de confiance durable depuis +10 ans',
];

export const AboutPage: React.FC = () => {
  usePageMeta({
    title: `À Propos — ${AGENCY_CONFIG.name} · Plus de 10 ans d'histoire`,
    description: `Découvrez l'${AGENCY_CONFIG.name}, fondée par ${AGENCY_CONFIG.director.name}. Une référence immobilière sénégalaise présente à Dakar depuis plus de 10 ans.`,
    canonical: `${AGENCY_CONFIG.siteUrl}/a-propos`,
    ogImage: '/logodiame.png',
  });

  const paragraphs = DIRECTRICE_MESSAGE.quote
    .split('\n\n')
    .filter(Boolean);

  const waHref = buildWhatsAppLink(buildGeneralContactMessage());

  return (
    <Layout>
      <PageHeader
        kicker="Notre histoire · Plus de 20 ans"
        title="À propos de l'Agence Immobilière Diame Diallo"
        subtitle="Une référence immobilière à Dakar fondée sur l'écoute, l'intégrité et la transparence, au service de vos projets patrimoniaux."
        crumbs={[
          { label: 'Accueil', path: '/' },
          { label: 'À propos' },
        ]}
      />

      {/* Statistiques */}
      <StatsSection />

      <div className="relative overflow-hidden bg-[#FAF9F6]">
        {/* Décoration d'arrière-plan */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />
        <div className="pointer-events-none absolute top-[700px] -left-32 h-80 w-80 rounded-full bg-slate-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl space-y-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          {/* Présentation du fondateur */}
          <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Portrait */}
            <div className="mx-auto w-full max-w-lg">
              <div className="relative px-3 pb-3 sm:px-5 sm:pb-5">
                {/* Cadre décoratif */}
                <div className="absolute right-0 top-0 h-32 w-32 rounded-tr-[2rem] border-r-2 border-t-2 border-[#C8A96B]/70 sm:h-40 sm:w-40" />

                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-bl-[2rem] border-b-2 border-l-2 border-[#C8A96B]/70 sm:h-40 sm:w-40" />

                {/* Image */}
                <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#10243A] shadow-xl shadow-slate-900/10 sm:rounded-3xl">
                  <img
                    src={DIAME_PHOTO}
                    alt={`Portrait de ${AGENCY_CONFIG.director.name}, Fondateur de l'Agence Immobilière Diame Diallo`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = DIAME_PHOTO_FALLBACK;
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071525] via-[#10243A]/10 to-transparent" />

                  {/* Signature du fondateur */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <div className="mb-3 h-1 w-12 rounded-full bg-[#C8A96B]" />

                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#E5C785] sm:text-xs">
                      {AGENCY_CONFIG.director.role}
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      M. {AGENCY_CONFIG.director.name}
                    </h2>

                    <p className="mt-2 text-sm text-white/70">
                      Agence Immobilière Diame Diallo
                    </p>
                  </div>

                  {/* Badge de présentation */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-[#10243A]/80 px-3 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md sm:left-6 sm:top-6">
                    <Sparkles className="h-4 w-4 text-[#E5C785]" />
                    <span>Notre engagement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="lg:py-6">
              <div className="mb-6 inline-flex items-center gap-3">
                <span className="h-px w-10 bg-[#C8A96B]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6a2a]">
                  Le mot du Fondateur
                </span>
              </div>

              <h2 className="mb-7 text-3xl font-bold leading-tight tracking-tight text-[#10243A] sm:text-4xl lg:text-[2.7rem]">
                Plus de 20 ans de confiance et d'exigence à votre service à Dakar
              </h2>

              <div className="relative rounded-2xl border border-[#E9E3D7] bg-white p-6 shadow-sm sm:p-8">
                <Quote className="absolute right-5 top-5 h-10 w-10 text-[#C8A96B]/20 sm:right-7 sm:top-7 sm:h-12 sm:w-12" />

                <div className="relative space-y-4">
                  {paragraphs.map((para, i) => (
                    <p
                      key={i}
                      className={`text-sm leading-7 sm:text-base ${
                        i === 0
                          ? 'font-medium text-[#10243A]'
                          : 'text-[#475569]'
                      }`}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-7 border-t border-[#EEE8DD] pt-5">
                  <p className="text-xl font-bold italic text-[#9A742F]">
                    {DIRECTRICE_MESSAGE.signature}
                  </p>

                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-[#64748B]">
                    {DIRECTRICE_MESSAGE.role}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#B18A43]" />

                <p className="text-sm leading-6 text-[#64748B]">
                  Votre confiance, votre sécurité et la transparence sont au cœur de notre accompagnement immobilier.
                </p>
              </div>
            </div>
          </section>

          {/* Nos valeurs */}
          <section>
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
              <span className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#8a6a2a]">
                <span className="h-px w-7 bg-[#C8A96B]" />
                Ce qui nous définit
                <span className="h-px w-7 bg-[#C8A96B]" />
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-[#10243A] sm:text-4xl">
                Nos valeurs
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#64748B] sm:text-base">
                Des principes essentiels qui guident notre travail et la relation de confiance que nous construisons avec chaque client.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {VALUES.map((value, i) => (
                <div
                  key={i}
                  className="group flex min-h-[100px] items-center gap-4 rounded-2xl border border-[#EAE6DE] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A96B]/60 hover:shadow-lg hover:shadow-slate-900/5 sm:p-6"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#F8F3E8] transition-colors duration-300 group-hover:bg-[#10243A]">
                    <CheckCircle2 className="h-5 w-5 text-[#B18A43] transition-colors duration-300 group-hover:text-[#E5C785]" />
                  </div>

                  <span className="text-sm font-semibold leading-6 text-[#334155] sm:text-base">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Nos piliers */}
          <section>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#8a6a2a]">
                <span className="h-px w-7 bg-[#C8A96B]" />
                Nos piliers
                <span className="h-px w-7 bg-[#C8A96B]" />
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-[#10243A] sm:text-4xl">
                Ce qui fait notre force
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#64748B] sm:text-base">
                Une expertise de terrain, un accompagnement rigoureux et une approche humaine pour vous guider à chaque étape.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PILLARS.map((pillar, i) => {
                const Icon = pillar.icon;

                return (
                  <article
                    key={i}
                    className="group relative overflow-hidden rounded-2xl border border-[#EAE6DE] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A96B]/60 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
                  >
                    <span className="absolute right-5 top-4 text-5xl font-black text-[#10243A]/[0.035]">
                      0{i + 1}
                    </span>

                    <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#10243A] shadow-md transition-all duration-300 group-hover:bg-[#183958]">
                      <Icon className="h-6 w-6 text-[#E5C785]" />
                    </div>

                    <h3 className="mb-3 text-lg font-bold leading-snug text-[#10243A]">
                      {pillar.title}
                    </h3>

                    <p className="text-sm leading-7 text-[#64748B]">
                      {pillar.text}
                    </p>

                    <div className="mt-6 h-1 w-10 rounded-full bg-[#C8A96B] transition-all duration-300 group-hover:w-16" />
                  </article>
                );
              })}
            </div>
          </section>

          {/* Appel à l'action */}
          <section>
            <div className="relative overflow-hidden rounded-3xl bg-[#10243A] shadow-2xl shadow-[#10243A]/15">
              {/* Décoration */}
              <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#C8A96B]/20" />

              <div className="pointer-events-none absolute -right-10 -top-14 h-52 w-52 rounded-full border border-[#C8A96B]/20" />

              <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#C8A96B]/10 blur-3xl" />

              <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#E5C785_1px,transparent_1px)] [background-size:24px_24px]" />

              <div className="relative z-10 px-6 py-12 text-center sm:px-12 sm:py-16 lg:px-20 lg:py-20">
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8A96B]/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#E5C785]">
                  <Sparkles className="h-4 w-4" />
                  Votre projet, notre engagement
                </span>

                <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Prêt(e) à démarrer votre projet ?
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                  Contactez-nous dès aujourd'hui pour un premier entretien sans engagement.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1DB954] sm:w-auto"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                    Nous contacter sur WhatsApp
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A96B] hover:bg-white/10 sm:w-auto"
                  >
                    Nous contacter
                    <ArrowRight className="h-4 w-4 text-[#E5C785]" />
                  </Link>
                </div>

                <p className="mt-7 text-xs tracking-wide text-white/45">
                  Agence Immobilière Diame Diallo · Dakar, Sénégal
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
};