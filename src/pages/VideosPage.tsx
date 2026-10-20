import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Video, Youtube, Clock, ExternalLink, ArrowLeft, Play, X, ShieldCheck } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/ui/PageHeader';
import { usePageMeta } from '../hooks/usePageMeta';
import { VIDEOS_DATA, AGENCY_CONFIG } from '../data';

export const VideosPage: React.FC = () => {
  usePageMeta({
    title: `Interviews & Vidéos Officielles | ${AGENCY_CONFIG.name}`,
    description: `Découvrez les interviews et décryptages fonciers de M. Diamé Diallo sur YouTube (Manael TV). Formalités de titres fonciers, baux et chantiers à Dakar et Colobane.`,
    canonical: `${AGENCY_CONFIG.siteUrl}/videos`,
    ogImage: '/logodiame.png',
  });

  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <Layout>
      <PageHeader
        kicker="Interviews & médias"
        title="Interviews de M. Diamé Diallo sur YouTube"
        subtitle="Retrouvez les interventions, visites de chantiers et conseils pratiques, notamment diffusés sur Manael TV."
        crumbs={[{ label: 'Accueil', path: '/' }, { label: 'Vidéos' }]}
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Media Channel Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-red-950/20 via-slate-50 to-slate-100 border border-slate-200 p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <Youtube className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-[#10243A]">
                  Manael TV & Interventions Officielles
                </h2>
                <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[10px] font-bold rounded">
                  Vérifié
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Les prises de parole de Diamé Diallo portent sur la sécurisation des investissements fonciers au Sénégal, les formalités administratives et l'accompagnement de la diaspora.
              </p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/results?search_query=Manael+TV+Diame+Diallo+immobilier"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
          >
            <Youtube className="w-4 h-4 fill-current" />
            Voir sur YouTube
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {VIDEOS_DATA.map((vid) => {
            const ytWatchUrl = vid.youtubeUrl || `https://www.youtube.com/watch?v=${vid.youtubeId}`;
            const thumbUrl = vid.youtubeId
              ? `https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`
              : '/diame.jpeg';

            return (
              <div
                key={vid.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 hover:border-[#C8A96B]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Video Thumbnail */}
                <div
                  className="relative aspect-video bg-[#10243A] overflow-hidden cursor-pointer"
                  onClick={() => vid.youtubeId && setActiveVideoId(vid.youtubeId)}
                >
                  <img
                    src={thumbUrl}
                    alt={vid.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 group-hover:bg-black/40 transition-colors" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-md">
                      {vid.category}
                    </span>
                  </div>
                  {vid.duration && (
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[11px] font-bold text-white bg-black/80 px-2 py-0.5 rounded">
                      <Clock className="w-3 h-3 text-[#C8A96B]" />
                      <span>{vid.duration}</span>
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#10243A] mb-2 leading-snug group-hover:text-[#C8A96B] transition-colors">
                      {vid.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {vid.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => vid.youtubeId && setActiveVideoId(vid.youtubeId)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10243A] hover:text-[#C8A96B] transition-colors cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      Visionner ici
                    </button>

                    <a
                      href={ytWatchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <Youtube className="w-3.5 h-3.5 fill-current" />
                      Ouvrir YouTube
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Back Link */}
        <div className="text-center pt-6 border-t border-slate-200">
          <Link
            to="/conseils"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#10243A] hover:text-[#C8A96B] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Consulter nos guides et conseils fonciers écrits
          </Link>
        </div>
      </div>

      {/* Embedded Video Modal */}
      {activeVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveVideoId(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Fermer la vidéo"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title="Interview de M. Diamé Diallo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};
