import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Video, ArrowRight, ShieldCheck, FileText, CheckCircle2, Youtube } from 'lucide-react';
import { ARTICLES_DATA, VIDEOS_DATA, AGENCY_CONFIG } from '../../data';

export const ConseilsSection: React.FC = () => {
  return (
    <section
      id="conseils-immobiliers"
      className="py-20 md:py-28 bg-[#F5F6F8] relative overflow-hidden"
      aria-labelledby="conseils-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10243A]/8 text-[#10243A] text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#C8A96B]" />
              Pédagogie & Prévention
            </div>
            <h2
              id="conseils-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#10243A] tracking-tight leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Les conseils de votre partenaire immobilier
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Mieux comprendre le foncier au Sénégal, identifier les vérifications indispensables et sécuriser chaque étape de votre acquisition.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              to="/conseils"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#10243A] border border-slate-200 text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
            >
              Tous les articles
              <ArrowRight className="w-3.5 h-3.5 text-[#C8A96B]" />
            </Link>
            <Link
              to="/videos"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#10243A] hover:bg-[#1a3550] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
            >
              <Video className="w-3.5 h-3.5 text-amber-400" />
              Espace Vidéos
            </Link>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {ARTICLES_DATA.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C8A96B] bg-[#C8A96B]/10 px-2.5 py-1 rounded-full">
                    {article.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-400">{article.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-[#10243A] mb-3 leading-snug hover:text-[#C8A96B] transition-colors">
                  <Link to={`/conseils/${article.slug}`}>{article.title}</Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {article.summary}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  {article.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                <Link
                  to={`/conseils/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10243A] hover:text-[#C8A96B] transition-colors"
                >
                  Lire l'article complet
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Video Integration Teaser */}
        <div className="rounded-2xl bg-gradient-to-br from-[#10243A] via-[#122840] to-[#193553] p-8 sm:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl border border-white/10">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-300 text-xs font-bold uppercase tracking-wider border border-red-500/30">
              <Youtube className="w-4 h-4 text-red-400" />
              Interviews Vidéos Officielles
            </div>
            <h3 className="text-2xl sm:text-3xl font-black" style={{ fontFamily: 'Georgia, serif' }}>
              Interviews de M. Diamé Diallo sur YouTube
            </h3>
            <p className="text-white/75 text-sm leading-relaxed">
              Retrouvez les explications de M. Diamé Diallo, notamment diffusées sur Manael TV, abordant les formalités administratives, la vérification des titres fonciers et les visites de chantiers à Dakar.
            </p>
            <p className="text-amber-300 text-xs font-semibold flex items-center gap-1.5 justify-center lg:justify-start">
              <span>Entretiens vérifiés disponibles sur YouTube</span>
            </p>
          </div>

          <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link
              to="/videos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#10243A] hover:bg-slate-100 font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              <Video className="w-4 h-4 text-red-600" />
              Accéder à l'espace vidéo
            </Link>
            <a
              href="https://www.youtube.com/watch?v=MJ367gMiRpM"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              <Youtube className="w-4 h-4 fill-current" />
              Voir l'interview (YouTube)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
