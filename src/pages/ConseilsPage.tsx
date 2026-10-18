import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Filter } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { usePageMeta } from '../hooks/usePageMeta';
import { ARTICLES_DATA, AGENCY_CONFIG } from '../data';

export const ConseilsPage: React.FC = () => {
  usePageMeta({
    title: `Conseils & Pédagogie Foncière | ${AGENCY_CONFIG.name}`,
    description: `Guides pratiques et décryptages fonciers pour vos projets immobiliers à Dakar : comprendre le titre foncier, le bail, la délibération et éviter les fraudes.`,
    canonical: `${AGENCY_CONFIG.siteUrl}/conseils`,
    ogImage: '/logodiame.jpeg',
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredArticles = selectedCategory === 'all'
    ? ARTICLES_DATA
    : ARTICLES_DATA.filter((a) => a.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Header */}
      <div className="relative py-20 md:py-28 bg-[#10243A] overflow-hidden text-white">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, #C8A96B 1px, transparent 1px)`, backgroundSize: '28px 28px' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C8A96B] mb-3">
            Pédagogie & Prévention Foncière
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Les Conseils de Votre Partenaire Immobilier
          </h1>
          <p className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Comprendre les règles du jeu foncier au Sénégal est la première étape pour réussir et sécuriser votre investissement immobilier à Dakar et sur l'ensemble du territoire.
          </p>
        </div>
      </div>

      {/* Filter Tabs & Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#10243A] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Tous les guides
          </button>
          <button
            onClick={() => setSelectedCategory('foncier')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              selectedCategory === 'foncier'
                ? 'bg-[#10243A] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Droit Foncier & Statuts
          </button>
          <button
            onClick={() => setSelectedCategory('vigilance')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              selectedCategory === 'vigilance'
                ? 'bg-[#10243A] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Prévention des Fraudes
          </button>
          <button
            onClick={() => setSelectedCategory('diaspora')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              selectedCategory === 'diaspora'
                ? 'bg-[#10243A] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Investisseurs Diaspora
          </button>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="p-7">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C8A96B] bg-[#C8A96B]/10 px-3 py-1 rounded-full">
                    {article.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-400">{article.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-[#10243A] mb-3 leading-snug hover:text-[#C8A96B] transition-colors">
                  <Link to={`/conseils/${article.slug}`}>{article.title}</Link>
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {article.summary}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">À retenir :</p>
                  {article.keyTakeaways.slice(0, 3).map((takeaway, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-7 pb-6 pt-3 border-t border-slate-100">
                <Link
                  to={`/conseils/${article.slug}`}
                  className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#10243A] hover:text-[#C8A96B] transition-colors"
                >
                  <span>Lire l'analyse complète</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Ethical disclaimer box */}
        <div className="rounded-2xl bg-amber-500/10 border border-amber-400/30 p-6 max-w-4xl mx-auto flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-slate-900 font-semibold">Note d'information :</strong> Les articles et guides publiés sur ce site ont un objectif strictement pédagogique et informatif. Ils ne constituent en aucun cas une consultation juridique ou un acte notarié. L’Agence Immobilière D.DIALLO vous conseille et vous oriente vers les autorités compétentes et notaires assermentés du Sénégal.
          </p>
        </div>
      </div>
    </Layout>
  );
};
