import React from 'react';
import { ChevronDown, MessageCircle, Sparkles } from 'lucide-react';
import { FAQ_DATA } from '../../data';

export const FaqSection: React.FC = () => {
return ( <section
   id="faq"
   className="relative overflow-hidden bg-[#faf7f1] py-20 sm:py-24 lg:py-28"
   aria-labelledby="faq-heading"
 >
{/* Décoration du fond */} <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#b08a3c]/10 blur-3xl" /> <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#10243A]/5 blur-3xl" />


  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">

      {/* Colonne gauche : présentation */}
      <div className="lg:sticky lg:top-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b08a3c]/25 bg-white/80 px-4 py-2 shadow-sm">
          <Sparkles size={15} className="text-[#b08a3c]" />
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a6a2a]">
            Questions fréquentes
          </span>
        </div>

        <h2
          id="faq-heading"
          className="max-w-xl text-3xl font-black leading-tight tracking-tight text-[#10243A] sm:text-4xl lg:text-5xl"
        >
          Ce que nos clients
          <span className="mt-2 block text-[#b08a3c]">
            demandent le plus
          </span>
        </h2>

        <div className="mt-6 h-1 w-20 rounded-full bg-[#b08a3c]" />

        <p className="mt-6 max-w-lg text-base leading-8 text-[#5c6570]">
          Retrouvez les réponses aux questions les plus courantes pour
          mieux comprendre nos services et avancer sereinement dans votre
          projet immobilier.
        </p>

        {/* Carte d'accompagnement */}
        <div className="mt-9 flex items-start gap-4 rounded-2xl border border-[#e9dfcc] bg-white/80 p-5 shadow-sm sm:p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#10243A] text-[#e7c783]">
            <MessageCircle size={23} />
          </div>

          <div>
            <h3 className="font-bold text-[#10243A]">
              Vous avez une autre question ?
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#5c6570]">
              Notre équipe reste à votre disposition pour vous accompagner
              dans votre projet immobilier.
            </p>
          </div>
        </div>
      </div>

      {/* Colonne droite : questions et réponses */}
      <div className="space-y-3">
        {FAQ_DATA.map((item, index) => (
          <details
            key={item.question}
            className="group overflow-hidden rounded-2xl border border-[#e8e0d2] bg-white shadow-[0_3px_14px_rgba(16,36,58,0.035)] transition-all duration-300 hover:border-[#b08a3c]/50 hover:shadow-[0_8px_24px_rgba(16,36,58,0.07)] open:border-[#b08a3c]/50 open:shadow-[0_8px_24px_rgba(16,36,58,0.06)]"
          >
            <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 text-left sm:px-6 sm:py-6 [&::-webkit-details-marker]:hidden">
              {/* Numéro de la question */}
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#faf7f1] text-sm font-extrabold text-[#b08a3c] transition-colors duration-300 group-open:bg-[#10243A] group-open:text-[#e7c783]">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Question existante, inchangée */}
              <span className="flex-1 text-sm font-bold leading-6 text-[#10243A] sm:text-base">
                {item.question}
              </span>

              {/* Icône animée */}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e8e0d2] text-[#b08a3c] transition-all duration-300 group-hover:border-[#b08a3c] group-open:rotate-180 group-open:border-[#10243A] group-open:bg-[#10243A] group-open:text-white">
                <ChevronDown size={17} />
              </span>
            </summary>

            {/* Réponse existante, inchangée */}
            <div className="px-5 pb-5 pl-[4.75rem] sm:px-6 sm:pb-6 sm:pl-[5.5rem]">
              <div className="mb-4 h-px w-full bg-gradient-to-r from-[#b08a3c]/40 via-[#e8e0d2] to-transparent" />

              <p className="text-sm leading-7 text-[#5c6570] sm:text-[15px]">
                {item.answer}
              </p>
            </div>
          </details>
        ))}
      </div>

    </div>
  </div>
</section>


);
};
