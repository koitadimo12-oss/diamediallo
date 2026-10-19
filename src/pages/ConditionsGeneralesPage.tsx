import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, FileCheck, ShieldCheck, ArrowLeft, Clock, DollarSign, Building, AlertCircle } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { usePageMeta } from '../hooks/usePageMeta';
import { AGENCY_CONFIG } from '../data';

export const ConditionsGeneralesPage: React.FC = () => {
  usePageMeta({
    title: `Conditions Générales d'Utilisation & Prestations | ${AGENCY_CONFIG.name}`,
    description: `Conditions générales d'utilisation du site et cadre d'exercice des prestations de l'${AGENCY_CONFIG.legalName} à Dakar. Mandats, barème et déontologie foncière.`,
    canonical: `${AGENCY_CONFIG.siteUrl}/conditions`,
  });

  return (
    <Layout>
      {/* Hero Header */}
      <div className="relative py-20 md:py-24 bg-[#10243A] overflow-hidden text-white">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, #C8A96B 1px, transparent 1px)`, backgroundSize: '28px 28px' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#C8A96B] text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
            <Scale className="w-4 h-4 text-[#C8A96B]" />
            Transparence Contractuelle & Déontologie
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Conditions Générales d'Utilisation & Prestations
          </h1>
          <p className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Modalités d'utilisation des services de l'Agence Immobilière D.DIALLO, cadre des mandats professionnels et barème indicatif des honoraires au Sénégal.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12 text-[#334155] leading-relaxed">

          {/* Section 1: Objet & Champ d'application */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
              <FileCheck className="w-6 h-6 text-[#10243A]" />
              <h2 className="text-xl font-bold text-[#10243A]" style={{ fontFamily: 'Georgia, serif' }}>
                1. Objet et champ d'application
              </h2>
            </div>
            <p className="text-sm leading-relaxed mb-3">
              Les présentes Conditions Générales régissent les relations contractuelles et d'information entre l'<strong>{AGENCY_CONFIG.legalName}</strong> (Agence Diamé Diallo), sise à Colobane (Dakar), et toute personne physique ou morale consultant son site ou sollicitant ses prestations d'intermédiation, de gestion ou de conseil.
            </p>
            <p className="text-sm leading-relaxed">
              Toute démarche engagée auprès de l'agence emporte acceptation sans réserve des présentes conditions ainsi que de notre charte déontologique.
            </p>
          </section>

          {/* Section 2: Annonces et Informations Immobilières */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
              <Building className="w-6 h-6 text-[#10243A]" />
              <h2 className="text-xl font-bold text-[#10243A]" style={{ fontFamily: 'Georgia, serif' }}>
                2. Nature des informations et annonces immobilières
              </h2>
            </div>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                Les annonces, photographies, descriptifs et superficies publiés sur le site ont pour objet de présenter les opportunités disponibles à Dakar et au Sénégal.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-slate-700">
                <li><strong>Vérification préalable obligatoire :</strong> Bien que l'agence effectue un contrôle rigoureux des documents transmis par les propriétaires, les informations sont communiquées sous réserve de confirmation du dossier cadastral et de l'état des droits réels délivré par la conservation foncière compétente.</li>
                <li><strong>Disponibilité :</strong> Les offres sont valables dans la limite des disponibilités et peuvent faire l'objet d'une réservation ou d'une modification de prix par le mandant avant la conclusion d'un accord formel.</li>
                <li><strong>Exemples de démonstration :</strong> Toute annonce portant la mention « exemple de démonstration » a une vocation purement illustrative et ne constitue pas une offre ferme.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Mandats & Modalités d'Intervention */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
              <ShieldCheck className="w-6 h-6 text-[#10243A]" />
              <h2 className="text-xl font-bold text-[#10243A]" style={{ fontFamily: 'Georgia, serif' }}>
                3. Mandats d'intermédiation et de gestion
              </h2>
            </div>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                Toute mission d'envergure confiée à l'agence fait l'objet d'un mandat écrit et signé précisant l'étendue exacte des pouvoirs conférés :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-[#10243A] text-sm mb-1">Mandat de Vente / Location</h3>
                  <p className="text-xs text-slate-600">
                    Autorise l'agence à prospecter, valoriser le bien, organiser les visites qualifiées et collecter les offres d'acquéreurs ou locataires solvables.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-[#10243A] text-sm mb-1">Mandat de Gestion Locative</h3>
                  <p className="text-xs text-slate-600">
                    Définit la gestion courante, le suivi des encaissements, les états des lieux d'entrée/sortie et l'entretien technique pour le compte du bailleur.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Barème et Honoraires */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
              <DollarSign className="w-6 h-6 text-[#C8A96B]" />
              <h2 className="text-xl font-bold text-[#10243A]" style={{ fontFamily: 'Georgia, serif' }}>
                4. Barème indicatif des honoraires et rémunérations
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                Conformément aux usages professionnels établis sur le marché immobilier sénégalais et aux stipulations contractuelles de chaque mandat :
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm bg-slate-50 p-4 rounded-xl border border-slate-200">
                <li className="flex items-start gap-2">
                  <strong className="text-[#10243A] min-w-44">Vente d'immeuble ou terrain :</strong>
                  <span>Commission d'entremise fixée par mandat écrit (usuellement partagée ou à la charge de la partie convenue lors du compromis).</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#10243A] min-w-44">Location résidentielle ou pro :</strong>
                  <span>Honoraires équivalents à un (1) mois de loyer hors charges, partagés selon les règles en vigueur entre bailleur et preneur.</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#10243A] min-w-44">Gestion locative courante :</strong>
                  <span>Pourcentage convenu sur les encaissements effectifs de loyers (généralement 8 % à 10 % selon les prestations incluses).</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#10243A] min-w-44">Conseil & Audit foncier :</strong>
                  <span>Sur devis personnalisé selon la complexité des vérifications cadastrales demandées.</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 italic">
                * Les frais d'acte notarié, droits d'enregistrement domaniaux et droits de mutation foncière perçus par l'État du Sénégal sont distincts des honoraires d'agence et demeurent à la charge de l'acquéreur.
              </p>
            </div>
          </section>

          {/* Section 5: Modalités Spécifiques Diaspora */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
              <Clock className="w-6 h-6 text-[#10243A]" />
              <h2 className="text-xl font-bold text-[#10243A]" style={{ fontFamily: 'Georgia, serif' }}>
                5. Modalités spécifiques pour la diaspora sénégalaise
              </h2>
            </div>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                Pour les acquéreurs et propriétaires résidant à l'étranger (Europe, Amériques, Afrique, Asie) :
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700">
                <li>L'agence fournit des comptes-rendus photographiques et vidéo détaillés des parcelles et biens visités.</li>
                <li>Tout versement d'acompte ou de prix principal doit obligatoirement transiter par le <strong>compte séquestre de l'étude notariale instrumentaire</strong> désignée au Sénégal, pour une protection financière totale.</li>
                <li>Si le client ne peut se déplacer, la signature des actes s'effectue via procuration spéciale authentifiée auprès du consulat compétent ou par acte notarié.</li>
              </ul>
            </div>
          </section>

          {/* Section 6: Litiges et Droit Applicable */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
              <Scale className="w-6 h-6 text-[#10243A]" />
              <h2 className="text-xl font-bold text-[#10243A]" style={{ fontFamily: 'Georgia, serif' }}>
                6. Droit applicable et juridiction compétente
              </h2>
            </div>
            <p className="text-sm leading-relaxed">
              Les présentes conditions sont soumises au <strong>droit sénégalais</strong>. En cas de différend relatif à l'interprétation ou à l'exécution d'un mandat, les parties s'engagent à rechercher prioritairement un règlement amiable. À défaut d'accord, compétence exclusive est attribuée aux tribunaux territorialement compétents de <strong>Dakar (Sénégal)</strong>.
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
