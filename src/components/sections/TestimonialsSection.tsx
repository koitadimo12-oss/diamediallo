import React from 'react';
import { MessageSquare, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { AGENCY_CONFIG } from '../../data';
import { buildWhatsAppLink } from '../../utils/whatsapp';

export const TestimonialsSection: React.FC = () => {
  const waReviewLink = buildWhatsAppLink(
    "Bonjour Agence Immobilière D.DIALLO, j'ai réalisé un projet avec votre agence et je souhaite vous partager mon témoignage d'expérience."
  );

  return (
    <section
      id="temoignages"
      className="py-16 md:py-20 bg-white border-t border-slate-100 relative overflow-hidden"
      aria-labelledby="temoignages-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-[#10243A] text-xs font-bold uppercase tracking-wider mb-4">
          <HeartHandshake className="w-3.5 h-3.5 text-[#C8A96B]" />
          Confiance & Authenticité
        </div>

        <h2
          id="temoignages-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-black text-[#10243A] tracking-tight leading-tight mb-4"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          La relation de confiance avec nos clients
        </h2>

        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
          Conformément à notre charte d'intégrité, nous ne publions aucun avis anonyme ou fictif. L'espace témoignages certifiés sera ouvert dès validation écrite des retours de nos clients partenaires.
        </p>

        {/* Ethical Commitment Box */}
        <div className="rounded-2xl bg-[#F5F6F8] border border-slate-200/70 p-6 sm:p-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-left">
          <div className="w-14 h-14 rounded-2xl bg-[#10243A] text-[#C8A96B] flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div className="space-y-1.5 flex-1">
            <h3 className="text-base font-bold text-[#10243A]">
              Vous avez collaboré avec l'Agence Immobilière D.DIALLO ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Votre avis nous permet de maintenir nos standards d'excellence à Dakar et d'améliorer continuellement notre accompagnement foncier.
            </p>
          </div>
          <a
            href={waReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#10243A] hover:bg-[#1a3550] text-white text-xs font-bold uppercase tracking-wider transition-all"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            Partager mon retour
          </a>
        </div>
      </div>
    </section>
  );
};
