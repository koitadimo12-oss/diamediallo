import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/ui/PageHeader';
import { usePageMeta } from '../hooks/usePageMeta';
import { ARTICLES_DATA, AGENCY_CONFIG } from '../data';
import { buildWhatsAppLink } from '../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';
export const ConseilDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES_DATA.find((a) => a.slug === slug) || ARTICLES_DATA[0];

  usePageMeta({
    title: `${article.title} | ${AGENCY_CONFIG.name}`,
    description: article.summary,
    canonical: `${AGENCY_CONFIG.siteUrl}/conseils/${article.slug}`,
    ogImage: '/logodiame.png',
  });

  const otherArticles = ARTICLES_DATA.filter((a) => a.id !== article.id);
  const waHelpLink = buildWhatsAppLink(
    `Bonjour Agence Immobilière D.DIALLO, j'ai lu votre article « ${article.title} » et j'aimerais échanger avec un conseiller concernant une situation foncière à Dakar.`
  );

  return (
    <Layout>
      <PageHeader
        kicker={`${article.categoryLabel} · ${article.readTime}`}
        title={article.title}
        subtitle={article.summary}
        crumbs={[
          { label: 'Accueil', path: '/' },
          { label: 'Conseils', path: '/conseils' },
          { label: article.title },
        ]}
      />

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        {/* Key Takeaways Box */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 mb-10">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#10243A] mb-4">
            Points clés à retenir :
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {article.keyTakeaways.map((takeaway, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-snug">{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Paragraphs */}
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed mb-12">
          {article.content.map((p, idx) => (
            <p key={idx} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Responsible Notice */}
        <div className="rounded-2xl bg-amber-500/10 border border-amber-400/30 p-5 sm:p-6 mb-12 flex items-start gap-4">
          <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-slate-700 leading-relaxed">
            <strong className="text-slate-900 font-semibold">Rappel déontologique :</strong> L’Agence Immobilière D.DIALLO n’émet pas d’avis juridiques opposables et recommande expressément de confier l’audit définitif des titres fonciers à une étude notariale assermentée du Sénégal.
          </p>
        </div>

        {/* Action Card */}
        <div className="rounded-2xl bg-[#10243A] text-white p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl mb-14">
          <div>
            <h3 className="text-xl font-bold mb-1">
              Une question spécifique sur votre projet ?
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              Échangez avec l’équipe de Diamé Diallo pour vous orienter dans vos vérifications.
            </p>
          </div>
          <a
            href={waHelpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1DB954] text-white text-xs font-bold uppercase tracking-wider transition-all"
          >
            <FaWhatsapp className="w-5 h-5" />
            Poser une question
          </a>
        </div>

        {/* Related Articles */}
        <div className="border-t border-slate-200 pt-10">
          <h3 className="text-lg font-bold text-[#10243A] mb-6">
            Poursuivre votre lecture
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherArticles.map((other) => (
              <Link
                key={other.id}
                to={`/conseils/${other.slug}`}
                className="group p-5 rounded-xl bg-white border border-slate-200 hover:border-[#C8A96B]/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8A96B] mb-2 block">
                    {other.categoryLabel}
                  </span>
                  <h4 className="text-sm font-bold text-[#10243A] group-hover:text-[#C8A96B] transition-colors line-clamp-2 mb-2">
                    {other.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">{other.summary}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#10243A] font-semibold">
                  <span>Lire l'article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
