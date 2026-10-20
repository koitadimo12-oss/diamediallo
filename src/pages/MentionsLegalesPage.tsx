import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Scale, FileText, ArrowLeft, Building2, MapPin, Phone, Mail } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/ui/PageHeader';
import { usePageMeta } from '../hooks/usePageMeta';
import { AGENCY_CONFIG } from '../data';

export const MentionsLegalesPage: React.FC = () => {
  usePageMeta({
    title: `Mentions Légales | ${AGENCY_CONFIG.name}`,
    description: `Mentions légales de l'${AGENCY_CONFIG.legalName} à Dakar. Informations juridiques, déontologie et réglementation foncière sénégalaise.`,
    canonical: `${AGENCY_CONFIG.siteUrl}/mentions-legales`,
  });

  return (
    <Layout>
      <PageHeader
        kicker="Cadre réglementaire"
        title="Mentions légales"
        subtitle="Identification de l'éditeur et cadre déontologique des activités de l'Agence Immobilière D.DIALLO."
        crumbs={[{ label: 'Accueil', path: '/' }, { label: 'Mentions légales' }]}
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12 text-[#334155] leading-relaxed">

          {/* Section 1: Identification */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
              <Building2 className="w-6 h-6 text-[#10243A]" />
              <h2 className="text-xl font-bold text-[#10243A]">
                1. Éditeur du site
              </h2>
            </div>
            <div className="space-y-3 text-sm">
              <p>
                Le présent site internet est édité par l'<strong>{AGENCY_CONFIG.legalName}</strong> (également connue sous la dénomination usuelle <strong>{AGENCY_CONFIG.commonName}</strong>).
              </p>
              <ul className="space-y-2 mt-4 text-xs sm:text-sm bg-slate-50 p-4 rounded-xl border border-slate-200">
                <li className="flex items-start gap-2">
                  <strong className="text-[#10243A] min-w-32">Dénomination :</strong>
                  <span>{AGENCY_CONFIG.legalName}</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#10243A] min-w-32">Nom commercial :</strong>
                  <span>{AGENCY_CONFIG.commonName}</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#10243A] min-w-32">Siège d'exploitation :</strong>
                  <span>{AGENCY_CONFIG.address}</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#10243A] min-w-32">Direction générale :</strong>
                  <span>M. Diamé Diallo, Fondateur & Directeur Général</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#10243A] min-w-32">Directeur de la publication :</strong>
                  <span>M. Diamé Diallo</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#10243A] min-w-32">Téléphone :</strong>
                  <span>{AGENCY_CONFIG.phone}</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#10243A] min-w-32">Courrier électronique :</strong>
                  <span>{AGENCY_CONFIG.email}</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: Objet des activités */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
              <FileText className="w-6 h-6 text-[#10243A]" />
              <h2 className="text-xl font-bold text-[#10243A]">
                2. Activités immobilières exercées
              </h2>
            </div>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                L'Agence Immobilière D.DIALLO intervient au Sénégal dans les domaines suivants :
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700">
                <li>Intermédiation immobilière (recherche, mise en relation acheteurs et vendeurs)</li>
                <li>Accompagnement dans l'achat et la vente de terrains et parcelles bornées</li>
                <li>Gestion locative, conciergerie et suivi technique pour propriétaires résidents et diaspora</li>
                <li>Conseil et assistance foncière pédagogique (compréhension des statuts TF, baux, délibérations)</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Cadre juridique et notarial */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
              <ShieldCheck className="w-6 h-6 text-amber-600" />
              <h2 className="text-xl font-bold text-[#10243A]">
                3. Avertissement juridique & Rôle notarial
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                Conformément à la législation en vigueur en République du Sénégal, l'Agence Immobilière D.DIALLO agit en qualité d'intermédiaire commercial et de conseiller foncier de proximité.
              </p>
              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs sm:text-sm text-amber-950">
                <strong>Rappel légal impératif :</strong> Au Sénégal, toute cession ou mutation immobilière portant sur un immeuble immatriculé (Titre Foncier) requiert obligatoirement la passation d'un acte authentique reçu par un notaire territorialement compétent, suivi de son inscription au livre foncier par le Conservateur de la Propriété Foncière (DGID). L'agence ne se substitue en aucun cas aux officiers publics ministériels ni aux autorités domaniales.
              </div>
            </div>
          </section>

          {/* Section 4: Propriété intellectuelle */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
              <Scale className="w-6 h-6 text-[#10243A]" />
              <h2 className="text-xl font-bold text-[#10243A]">
                4. Propriété intellectuelle
              </h2>
            </div>
            <p className="text-sm leading-relaxed">
              L'ensemble des contenus figurant sur ce site (textes, logotype officiel, charte graphique, photographies, vidéos d'entretiens) sont protégés par le droit de la propriété intellectuelle. Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans l'accord préalable écrit de l'Agence Immobilière D.DIALLO ou de ses ayants droit est formellement interdite.
            </p>
          </section>

          {/* Section 5: Hébergement */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
              <Building2 className="w-6 h-6 text-[#10243A]" />
              <h2 className="text-xl font-bold text-[#10243A]">
                5. Hébergement du site
              </h2>
            </div>
            <p className="text-sm leading-relaxed">
              Le site internet de l'Agence Immobilière D.DIALLO est hébergé sur des infrastructures cloud sécurisées conformes aux normes internationales de haute disponibilité et de protection des données.
            </p>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#10243A] hover:text-[#C8A96B] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </Layout>
  );
};
