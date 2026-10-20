import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Search,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { AGENCY_INFO } from "../../data/properties";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    category: 'Achat',
    question: 'Comment acheter un bien immobilier avec votre agence ?',
    answer:
      'Commencez par nous présenter votre projet, votre budget et vos critères de recherche. Nous pourrons vous orienter vers les biens correspondant à vos besoins et vous accompagner dans les différentes étapes de votre acquisition.',
  },
  {
    category: 'Achat',
    question: 'Quels documents faut-il vérifier avant un achat immobilier ?',
    answer:
      'Les documents à examiner dépendent du bien et de sa situation juridique. Il est notamment important de vérifier les documents de propriété, l’identité du vendeur et les éventuelles charges ou contraintes liées au bien. Faites-vous accompagner par un professionnel compétent avant de vous engager.',
  },
  {
    category: 'Vente',
    question: 'Comment mettre mon bien immobilier en vente ?',
    answer:
      'Contactez notre agence en nous présentant votre bien, sa localisation et ses principales caractéristiques. Nous pourrons échanger avec vous sur votre projet, les informations nécessaires et les prochaines étapes pour organiser sa mise en vente.',
  },
  {
    category: 'Vente',
    question: 'Comment estimer la valeur de mon bien immobilier ?',
    answer:
      'Une estimation dépend notamment de la localisation, de la superficie, de l’état du bien, de ses caractéristiques et du marché local. Contactez-nous pour discuter de votre bien et des informations nécessaires à son estimation.',
  },
  {
    category: 'Location',
    question: 'Comment trouver un logement à louer ?',
    answer:
      'Indiquez-nous la zone recherchée, votre budget, le type de logement et la date à laquelle vous souhaitez emménager. Ces informations nous aideront à vous orienter vers les offres susceptibles de correspondre à vos critères.',
  },
  {
    category: 'Location',
    question: 'Quels documents peuvent être demandés pour louer un logement ?',
    answer:
      'Les justificatifs demandés peuvent varier selon le logement et les conditions de location. Avant de transmettre des documents personnels, vérifiez les exigences applicables et assurez-vous de l’identité de votre interlocuteur.',
  },
  {
    category: 'Investissement',
    question: 'Pouvez-vous m’accompagner dans un investissement immobilier ?',
    answer:
      'Nous pouvons échanger sur vos objectifs, votre budget, la localisation recherchée et le type de bien envisagé. Tout investissement comporte des risques ; prenez le temps d’étudier les coûts, les revenus potentiels et les caractéristiques du marché avant de prendre votre décision.',
  },
  {
    category: 'Accompagnement',
    question: 'Comment contacter votre agence pour obtenir des renseignements ?',
    answer:
      'Vous pouvez nous joindre par téléphone ou par e-mail, ou nous envoyer un message via WhatsApp à partir des boutons de contact présents sur le site. Présentez-nous votre besoin afin que nous puissions mieux vous orienter.',
  },
];

const CATEGORIES = [
  'Toutes',
  'Achat',
  'Vente',
  'Location',
  'Investissement',
  'Accompagnement',
];

interface FAQProps {
  onNavigate?: (sectionId: string) => void;
}

export const FAQ: React.FC<FAQProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('Toutes');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQs = FAQ_DATA.filter((item) => {
    const matchesCategory =
      activeCategory === 'Toutes' || item.category === activeCategory;

    const search = searchTerm.trim().toLowerCase();

    const matchesSearch =
      search.length === 0 ||
      item.question.toLowerCase().includes(search) ||
      item.answer.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search);

    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      'Bonjour Agence Immobilière Diame Diallo, j’ai une question concernant vos services immobiliers.'
    );

    const phone = AGENCY_INFO.whatsapp.replace(/\D/g, '');

    window.open(
      `https://wa.me/${phone}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-[#061321] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10"
    >
      {/* Décoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-amber-400/5 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-sky-400/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-400 sm:text-sm">
            <HelpCircle className="h-4 w-4" />
            Centre d’aide
          </span>

          <h2
            id="faq-title"
            className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl"
          >
            Questions fréquentes
            <span className="mt-2 block text-amber-400">
              Nous vous répondons.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Vous avez un projet immobilier ? Retrouvez ici les réponses aux
            questions les plus fréquentes sur nos services et notre
            accompagnement.
          </p>
        </motion.div>

        {/* Recherche */}
        <div className="mx-auto mb-8 max-w-2xl">
          <label htmlFor="faq-search" className="sr-only">
            Rechercher une question
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 transition-colors focus-within:border-amber-400/50">
            <Search className="h-5 w-5 shrink-0 text-amber-400" />

            <input
              id="faq-search"
              type="search"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
                setOpenIndex(null);
              }}
              placeholder="Rechercher une question..."
              className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Filtres */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null);
                }}
                className={`rounded-full border px-4 py-2.5 text-xs font-bold transition-all duration-300 sm:text-sm ${
                  isActive
                    ? 'border-amber-400 bg-amber-400 text-[#071321]'
                    : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-amber-400/40 hover:text-amber-400'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Liste des questions */}
        <div className="space-y-3">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? 'border-amber-400/40 bg-white/[0.06]'
                      : 'border-white/10 bg-white/[0.025] hover:border-white/20'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-black ${
                          isOpen
                            ? 'bg-amber-400 text-[#071321]'
                            : 'bg-white/5 text-amber-400'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span>
                        <span className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-amber-400">
                          {item.category}
                        </span>

                        <span className="block text-sm font-bold leading-6 text-white sm:text-base">
                          {item.question}
                        </span>
                      </span>
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-amber-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 pb-6 pl-16 sm:px-6 sm:pl-[4.5rem]">
                          <div className="border-l-2 border-amber-400/30 pl-4">
                            <p className="text-sm leading-7 text-slate-400 sm:text-base">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center">
              <Search className="mx-auto mb-4 h-8 w-8 text-amber-400" />

              <h3 className="text-lg font-bold text-white">
                Aucune question trouvée
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Essayez un autre mot-clé ou choisissez une autre catégorie.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('Toutes');
                  setOpenIndex(0);
                }}
                className="mt-5 text-sm font-bold text-amber-400 transition-colors hover:text-amber-300"
              >
                Réinitialiser la recherche
              </button>
            </div>
          )}
        </div>

        {/* Bloc de contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-br from-[#10243a] to-[#091827] p-7 text-center sm:p-10"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10">
            <MessageCircle className="h-7 w-7 text-amber-400" />
          </div>

          <h3 className="mt-5 text-xl font-black text-white sm:text-2xl">
            Vous avez encore une question ?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Notre équipe est disponible pour échanger avec vous et vous
            orienter dans votre projet immobilier.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleWhatsAppContact}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-black text-[#071321] transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300"
            >
              <FaWhatsapp className="h-5 w-5" />
              Poser une question sur WhatsApp
            </button>

            {onNavigate && (
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-amber-400/40 hover:bg-white/10"
              >
                Contacter l’agence
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;