import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Search, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { AGENCY_INFO } from '../data/properties';
import { PropertyType, TransactionType } from '../types';

interface HeroProps {
  onDiscoverClick?: () => void;
  onFilterChange?: (filters: {
    type?: PropertyType | 'all';
    transaction?: TransactionType | 'all';
    neighborhood?: string;
  }) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onDiscoverClick,
  onFilterChange,
}) => {
  const [type, setType] = useState<PropertyType | 'all'>('all');
  const [transaction, setTransaction] = useState<
    TransactionType | 'all'
  >('all');
  const [neighborhood, setNeighborhood] = useState('');

  const whatsappNumber = String(AGENCY_INFO.whatsapp).replace(
    /\D/g,
    ''
  );

  const whatsappMessage = encodeURIComponent(
    "Bonjour Agence Immobilière D.DIALLO ! Je souhaite avoir des informations sur vos services immobiliers au Sénégal."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const rechercherBiens = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onFilterChange?.({
      type,
      transaction,
      neighborhood: neighborhood.trim(),
    });

    if (onDiscoverClick) {
      onDiscoverClick();
    } else {
      document.getElementById('biens')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const decouvrirBiens = () => {
    if (onDiscoverClick) {
      onDiscoverClick();
    } else {
      document.getElementById('biens')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="accueil"
      aria-labelledby="hero-main-title"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* Image d'arrière-plan */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Maison contemporaine"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Voile pour assurer la lisibilité du texte */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-white/75" />

      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-24">
        {/* Contenu principal */}
        <div className="max-w-3xl">
          {/* Nom de l'agence : première information visible */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-[#d97706]" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9a5b08] sm:text-sm">
                Votre partenaire immobilier au Sénégal
              </span>
            </div>

            <p className="font-['Manrope'] text-2xl font-black leading-tight tracking-tight text-[#00152a] sm:text-3xl md:text-4xl">
              Agence Immobilière{' '}
              <span className="text-[#d97706]">D.DIALLO</span>
            </p>

            <p className="mt-3 max-w-xl text-sm font-medium leading-relaxed text-gray-600 sm:text-base">
              Bien plus qu'une agence immobilière, un partenaire de
              confiance pour vos projets fonciers au Sénégal.
            </p>
          </motion.div>

          {/* Localisation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d97706]/20 bg-white/90 px-4 py-2 shadow-sm"
          >
            <MapPin size={17} className="text-[#d97706]" />

            <span className="text-sm font-semibold text-[#00152a]">
              Colobane, Dakar — Sénégal
            </span>
          </motion.div>

          {/* Grand titre */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            id="hero-main-title"
            className="mb-6 font-['Manrope'] text-4xl font-black leading-[1.12] tracking-tight text-[#00152a] sm:text-5xl lg:text-6xl"
          >
            Votre projet immobilier au Sénégal mérite un{' '}
            <span className="relative inline-block text-[#d97706]">
              partenaire de confiance.
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-1 left-0 h-1 rounded-full bg-[#d97706]/30"
              />
            </span>
          </motion.h1>

          {/* Description des services */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-8 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg"
          >
            Achat de terrains, vente, location et gestion locative :
            nous vous accompagnons dans vos projets immobiliers avec
            <strong className="font-semibold text-[#00152a]">
              {' '}
              proximité, transparence et une attention particulière
              aux questions foncières.
            </strong>
          </motion.p>

          {/* Boutons d'action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mb-10 flex flex-col gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={decouvrirBiens}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#d97706] px-7 py-4 font-bold text-white shadow-lg shadow-orange-900/15 transition hover:bg-[#b96305] focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              Découvrir nos biens
              <ArrowRight size={20} />
            </button>

            <a
              id="hero-whatsapp-btn"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter l'Agence Immobilière D.DIALLO sur WhatsApp"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-green-600 bg-white px-7 py-4 font-bold text-green-700 transition hover:bg-green-50 focus:outline-none focus:ring-4 focus:ring-green-200"
            >
              <FaWhatsapp size={22} />
              Nous contacter
            </a>
          </motion.div>

          {/* Services résumés */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            {[
              'Achat et vente de terrains',
              'Location immobilière',
              'Gestion locative',
              'Conseil foncier',
            ].map((service) => (
              <span
                key={service}
                className="rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-xs font-semibold text-gray-700 shadow-sm sm:text-sm"
              >
                {service}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Bloc de recherche */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto w-full max-w-lg"
        >
          <div className="rounded-2xl border border-white/80 bg-white/95 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-md sm:p-8">
            <div className="mb-6">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[#d97706]">
                Votre recherche immobilière
              </span>

              <h2 className="text-2xl font-extrabold text-[#00152a] sm:text-3xl">
                Trouvons votre bien
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Précisez vos critères pour trouver un bien adapté à
                votre projet.
              </p>
            </div>

            <form onSubmit={rechercherBiens} className="space-y-5">
              {/* Type de transaction */}
              <div>
                <label
                  htmlFor="hero-transaction"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Quel est votre projet ?
                </label>

                <select
                  id="hero-transaction"
                  value={transaction}
                  onChange={(event) =>
                    setTransaction(
                      event.target.value as TransactionType | 'all'
                    )
                  }
                  className="min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-800 outline-none transition focus:border-[#d97706] focus:ring-2 focus:ring-orange-100"
                >
                  <option value="all">Tous les projets</option>
                  <option value="vente">Acheter un bien</option>
                  <option value="location">Louer un bien</option>
                </select>
              </div>

              {/* Type de bien */}
              <div>
                <label
                  htmlFor="hero-type"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Type de bien
                </label>

                <select
                  id="hero-type"
                  value={type}
                  onChange={(event) =>
                    setType(event.target.value as PropertyType | 'all')
                  }
                  className="min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-800 outline-none transition focus:border-[#d97706] focus:ring-2 focus:ring-orange-100"
                >
                  <option value="all">Tous les types</option>
                  <option value="terrain">Terrain</option>
                  <option value="maison">Maison / Villa</option>
                  <option value="appartement">Appartement</option>
                </select>
              </div>

              {/* Localisation */}
              <div>
                <label
                  htmlFor="hero-neighborhood"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Ville ou quartier
                </label>

                <div className="relative">
                  <MapPin
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="hero-neighborhood"
                    type="text"
                    value={neighborhood}
                    onChange={(event) =>
                      setNeighborhood(event.target.value)
                    }
                    placeholder="Ex. : Dakar, Almadies, Rufisque..."
                    className="min-h-12 w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-base text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#d97706] focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>

              {/* Bouton de recherche */}
              <button
                type="submit"
                className="flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#00152a] px-6 py-4 font-bold text-white transition hover:bg-[#0b3152] focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                <Search size={20} />
                Rechercher un bien
              </button>
            </form>

            <div className="mt-6 flex items-start gap-3 border-t border-gray-100 pt-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#d97706]">
                <MapPin size={20} />
              </div>

              <div>
                <p className="font-bold text-[#00152a]">
                  Un accompagnement de proximité
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Nous vous accompagnons dans vos démarches
                  immobilières et vos questions foncières au Sénégal.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;