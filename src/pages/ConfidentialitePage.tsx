import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, Database, ArrowLeft, Mail, Phone } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/ui/PageHeader';
import { usePageMeta } from '../hooks/usePageMeta';
import { AGENCY_CONFIG } from '../data';

export const ConfidentialitePage: React.FC = () => {
  usePageMeta({
    title: `Politique de Confidentialité | ${AGENCY_CONFIG.name}`,
    description: `Politique de protection des données personnelles de l'${AGENCY_CONFIG.legalName} au Sénégal. Respect de la vie privée, sécurité et droits des utilisateurs.`,
    canonical: `${AGENCY_CONFIG.siteUrl}/confidentialite`,
  });

  return (
    <Layout>
      <PageHeader
        kicker="Protection des données"
        title="Politique de confidentialité"
        subtitle="Engagements concernant la collecte, l'utilisation et la sécurisation de vos données personnelles."
        crumbs={[{ label: 'Accueil', path: '/' }, { label: 'Confidentialité' }]}
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12 text-[#334155] leading-relaxed">

          {/* Section 1: Cadre général */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
              <ShieldCheck className="w-6 h-6 text-[#10243A]" />
              <h2 className="text-xl font-bold text-[#10243A]">
                1. Cadre légal et responsable de traitement
              </h2>
            </div>
            <p className="text-sm leading-relaxed mb-3">
              L'<strong>{AGENCY_CONFIG.legalName}</strong> s'engage à traiter vos données personnelles avec loyauté, transparence et conformément à la législation sénégalaise relative à la protection des données à caractère personnel (Loi n° 2008-12 du 25 janvier 2008) supervisée par la <strong>Commission de Protection des Données Personnelles (CDP)</strong> du Sénégal.
            </p>
            <p className="text-sm leading-relaxed">
              Le responsable du traitement des données est l'Agence Immobilière D.DIALLO, sise à Colobane, Dakar.
            </p>
          </section>

          {/* Section 2: Données collectées */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
              <Database className="w-6 h-6 text-[#10243A]" />
              <h2 className="text-xl font-bold text-[#10243A]">
                2. Données personnelles collectées
              </h2>
            </div>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                Dans le cadre de l'utilisation de nos services et de nos formulaires, nous pouvons être amenés à collecter :
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700">
                <li><strong>Données d'identification :</strong> nom complet, civilité.</li>
                <li><strong>Données de contact :</strong> numéro de téléphone, messagerie WhatsApp, adresse email.</li>
                <li><strong>Données relatives au projet immobilier :</strong> critères de recherche (type de bien, surface, budget, localisation souhaitée, statut diaspora ou résident).</li>
                <li><strong>Échanges et correspondances :</strong> messages transmis via le formulaire de contact ou par messagerie instantanée.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Finalités du traitement */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
              <Eye className="w-6 h-6 text-[#10243A]" />
              <h2 className="text-xl font-bold text-[#10243A]">
                3. Finalités de traitement
              </h2>
            </div>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                Les informations collectées sont exclusivement destinées à :
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700">
                <li>Répondre précisément à vos demandes de renseignements immobiliers.</li>
                <li>Organiser des visites de biens ou de parcelles à Dakar et environs.</li>
                <li>Assurer l'exécution des mandats de vente, de location ou de gestion locative.</li>
                <li>Faciliter les vérifications foncières et la transmission documentaire sécurisée vers les notaires compétents.</li>
              </ul>
              <p className="mt-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-slate-600">
                <strong>Non-commercialisation :</strong> Vos coordonnées ne sont jamais vendues, cédées ou louées à des tiers pour du démarchage publicitaire.
              </p>
            </div>
          </section>

          {/* Section 4: Sécurité et Conservation */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
              <Lock className="w-6 h-6 text-[#10243A]" />
              <h2 className="text-xl font-bold text-[#10243A]">
                4. Sécurité des données & Durée de conservation
              </h2>
            </div>
            <p className="text-sm leading-relaxed mb-3">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées afin de préserver la sécurité de vos informations et d'empêcher tout accès non autorisé, altération ou perte.
            </p>
            <p className="text-sm leading-relaxed">
              Les données relatives aux demandes d'information sont conservées pour une durée strictement nécessaire au suivi de la relation commerciale, ne dépassant pas 3 ans à compter du dernier contact, sauf obligations légales comptables ou notariales spécifiques applicables au Sénégal.
            </p>
          </section>

          {/* Section 5: Droits des personnes */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <h2 className="text-xl font-bold text-[#10243A]">
                5. Vos droits et contact
              </h2>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Conformément à la réglementation sénégalaise, vous disposez d'un droit d'accès, de rectification, de mise à jour et de suppression des données personnelles vous concernant.
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-2">
              <p>Pour exercer vos droits, vous pouvez nous contacter directement :</p>
              <p className="font-semibold text-[#10243A]">
                Par courrier électronique : <a href={`mailto:${AGENCY_CONFIG.email}`} className="text-emerald-700 underline">{AGENCY_CONFIG.email}</a>
              </p>
              <p className="font-semibold text-[#10243A]">
                Par téléphone / WhatsApp : <a href={`tel:${AGENCY_CONFIG.phone}`} className="text-emerald-700">{AGENCY_CONFIG.phone}</a>
              </p>
              <p className="text-slate-500 text-xs">
                Agence Immobilière D.DIALLO, Colobane, angle Rue 41 × Rue 42, Dakar, Sénégal.
              </p>
            </div>
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
