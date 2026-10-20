import React from 'react';
import { Globe, Video, FileText, Search, MapPin, Compass, ArrowRight, MessageSquare, AlertCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';
const STEPS = [
  {
    step: '01',
    icon: Compass,
    title: 'Compréhension du projet',
    description: "Échange approfondi sur vos objectifs (résidence principale, investissement locatif, achat de terrain), votre budget et vos critères de localisation.",
  },
  {
    step: '02',
    icon: Search,
    title: 'Recherche ciblée de biens',
    description: "Prospection sur le marché dakarois et sélection des opportunités correspondant réellement à votre cahier des charges.",
  },
  {
    step: '03',
    icon: FileText,
    title: 'Transmission des informations disponibles',
    description: "Partage transparent des documents communicables, photographies de l’état réel et historique connu du bien.",
  },
  {
    step: '04',
    icon: Video,
    title: 'Organisation des visites sur place',
    description: "Visites de terrain pour vos mandataires sur place ou réalisation de vidéos commentées de l'environnement et des accès.",
  },
  {
    step: '05',
    icon: MapPin,
    title: 'Orientation dans les vérifications foncières',
    description: "Conseils pour solliciter les états de droits réels auprès de la conservation foncière et orientation vers un notaire avant tout engagement.",
  },
  {
    step: '06',
    icon: Globe,
    title: 'Accompagnement selon les prestations convenues',
    description: "Coordination et suivi personnalisé jusqu'à la conclusion de la transaction et possibilité de prise en charge en gestion locative.",
  },
];

export const DiasporaSection: React.FC = () => {
  const waHref = buildWhatsAppLink(
    "Bonjour Agence Immobilière D.DIALLO, je réside à l'étranger et je souhaite être accompagné(e) dans un projet immobilier au Sénégal."
  );

  return (
    <section
      id="diaspora-accompagnement"
      className="py-20 md:py-28 bg-[#10243A] relative overflow-hidden text-white"
      aria-labelledby="diaspora-heading"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#C8A96B]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-500/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A96B]/15 border border-[#C8A96B]/30 text-[#C8A96B] text-xs font-bold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5" />
            Diaspora & Résidents à l'Étranger
          </div>

          <h2
            id="diaspora-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4"
           
          >
            Investir au Sénégal, même à distance.
          </h2>

          <p className="text-white/75 text-sm sm:text-base leading-relaxed">
            Pour les Sénégalais de l’extérieur et les investisseurs internationaux, l'éloignement ne doit pas être un frein. Nous mettons à votre disposition une méthode structurée et transparente pour suivre vos démarches à Dakar sans intermédiaires improvisés.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#C8A96B]/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#C8A96B]/15 text-[#C8A96B] flex items-center justify-center font-bold text-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-white/20 group-hover:text-[#C8A96B]/40 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#C8A96B] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Responsible Notice Alert */}
        <div className="rounded-2xl bg-black/30 border border-white/10 p-5 sm:p-6 backdrop-blur-md mb-10 flex items-start gap-3.5 text-xs text-white/70">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Transparence juridique :</strong> Aucun achat immobilier ne peut être garanti « sans risque » sans une vérification documentaire indépendante et une instruction formelle par un notaire compétent au Sénégal. L’agence vous conseille et vous oriente, mais ne se substitue pas aux autorités publiques et judiciaires.
          </p>
        </div>

        {/* CTA Bar */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1DB954] text-white font-bold text-sm shadow-xl transition-all"
          >
            <FaWhatsapp className="w-5 h-5" />
            Échanger sur mon projet à distance
          </a>
          <a
            href="/services/gestion-locative"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
          >
            Découvrir la gestion locative
            <ArrowRight className="w-4 h-4 text-[#C8A96B]" />
          </a>
        </div>
      </div>
    </section>
  );
};
