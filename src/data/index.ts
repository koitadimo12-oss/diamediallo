import { Property, ServiceItem, ArticleItem, VideoItem, FaqItem } from '../types';

// ────────────────────────────────────────────────────────────────────────────
// AGENCY CONFIGURATION — à renseigner avant mise en production
// ────────────────────────────────────────────────────────────────────────────
export const AGENCY_CONFIG = {
  name: 'Agence Immobilière D.DIALLO',
  commonName: 'Agence Diamé Diallo',
  legalName: 'Agence Immobilière D.DIALLO SUARL',
  shortName: 'D.DIALLO',
  tagline: "Bien plus qu'une agence immobilière, un partenaire de confiance pour vos projets fonciers au Sénégal.",
  heroHeadline: "Votre projet immobilier au Sénégal mérite un partenaire de confiance.",
  heroSubtitle: "Achat de terrain, vente, location et gestion locative : nous vous accompagnons dans vos projets immobiliers avec proximité, transparence et une attention particulière aux questions foncières.",
  experienceHeadline: "Une expérience de terrain au service de vos projets immobiliers au Sénégal.",
  
  // Localisation officielle
  address: 'Colobane, angle Rue 41 × Rue 42, Dakar, Sénégal',
  neighborhood: 'Colobane',
  city: 'Dakar',
  country: 'Sénégal',
  
  // Horaires officiels
  hours: 'Lun – Sam : 08h30 – 20h30 | Dim : 09h30 – 20h00',
  hoursDetail: [
    { day: 'Lundi', hours: '08 h 30 – 20 h 30' },
    { day: 'Mardi', hours: '08 h 30 – 20 h 30' },
    { day: 'Mercredi', hours: '08 h 30 – 20 h 30' },
    { day: 'Jeudi', hours: '08 h 30 – 20 h 30' },
    { day: 'Vendredi', hours: '08 h 30 – 20 h 30' },
    { day: 'Samedi', hours: '08 h 30 – 20 h 30' },
    { day: 'Dimanche', hours: '09 h 30 – 20 h 00' },
  ],

  // Coordonnées facilement configurables (à confirmer avant publication définitive)
  phone: '+221 77 644 26 26',
  whatsapp: '221776442626',
  whatsappDisplay: '+221 77 644 26 26',
  email: 'contact@diame-diallo.sn',
  siteUrl: 'https://www.diame-diallo.sn',

  // Direction Générale
  director: {
    name: 'Diamé Diallo',
    role: 'Directeur Général & Fondateur',
    photo: '/diame.jpeg',
    gender: 'homme' as const,
  },

  // Ancienneté & Équipe historique
  history: {
    estimatedYear: 2004,
    experienceIndicator: '20+ ans d’expérience',
    experienceNote: 'Ancienneté historique estimée aux alentours de 2004, sous réserve de validation définitive par la direction',
    historicTeam: ['Hamidou', 'Kandioura', 'Seydou', 'M. Ba'],
  },

  // Réseaux sociaux & Médias
  facebook: '',
  instagram: '',
  linkedin: '',
  youtube: 'https://www.youtube.com/watch?v=MJ367gMiRpM',
};

// ────────────────────────────────────────────────────────────────────────────
// IMAGE DE SECOURS
// ────────────────────────────────────────────────────────────────────────────
export const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';

// ────────────────────────────────────────────────────────────────────────────
// DONNÉES DE DÉMONSTRATION — ⚠️ À REMPLACER PAR DE VRAIES ANNONCES
// isDemoData: true = visible dans l'interface, mais clairement marqué
// comme exemples à remplacer lors de la mise en production réelle
// ────────────────────────────────────────────────────────────────────────────
export const DEMO_PROPERTIES: Property[] = [
  {
    id: 'demo-001',
    slug: 'maison-familiale-colobane-dakar',
    reference: 'DD-COL-001',
    title: 'Maison familiale R+1 – Colobane',
    description:
      'Belle maison familiale au cœur de Colobane, offrant des espaces généreux, une cour intérieure sécurisée et un garage privé. Proche des grands axes dakarois, des commerces et des transports. Parfaite pour une famille nombreuse ou un investissement locatif.',
    type: 'maison',
    transaction: 'vente',
    price: 35000000,
    priceDisplay: '35 000 000 FCFA',
    period: 'total',
    location: {
      neighborhood: 'Colobane',
      city: 'Dakar',
      fullAddress: 'Rue de Colobane, Dakar, Sénégal',
    },
    area: 250,
    bedrooms: 4,
    bathrooms: 3,
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    ],
    status: 'disponible',
    hasTitleDeed: true,
    features: [
      'Titre Foncier individuel',
      'Garage fermé pour 1 véhicule',
      'Cour arrière sécurisée',
      "Citerne d'eau & surpresseur",
      'Proche autoroute & commerces',
    ],
    featured: true,
    isDemoData: true,
  },
  {
    id: 'demo-002',
    slug: 'appartement-f3-grand-dakar',
    reference: 'DD-GDK-002',
    title: 'Appartement standing F3 – Grand Dakar',
    description:
      "Charmant appartement contemporain au 2ème étage d'un immeuble sécurisé à Grand Dakar. Salon lumineux ouvrant sur balcon, cuisine semi-équipée et finitions soignées. Idéal pour une famille ou un cadre dynamique.",
    type: 'appartement',
    transaction: 'location',
    price: 250000,
    priceDisplay: '250 000 FCFA/mois',
    period: 'mois',
    location: {
      neighborhood: 'Grand Dakar',
      city: 'Dakar',
      fullAddress: 'Avenue Grand Dakar, Dakar, Sénégal',
    },
    area: 85,
    bedrooms: 2,
    bathrooms: 1,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    ],
    status: 'disponible',
    features: [
      'Gardiennage 24h/24 & interphone',
      'Balcon dégagé',
      'Chauffe-eau solaire',
      'Compteur individuel',
    ],
    featured: true,
    isDemoData: true,
  },
  {
    id: 'demo-003',
    slug: 'terrain-viabilise-rufisque',
    reference: 'DD-RUF-003',
    title: 'Terrain résidentiel viabilisé – Rufisque',
    description:
      "Belle parcelle plate et bornée de 400 m² dans une zone résidentielle en plein essor à Rufisque. Raccordements eau et électricité disponibles à proximité immédiate. Idéal pour la construction d'une villa R+1 ou un investissement patrimonial.",
    type: 'terrain',
    transaction: 'vente',
    price: 15000000,
    priceDisplay: '15 000 000 FCFA',
    period: 'total',
    location: {
      neighborhood: 'Rufisque',
      city: 'Rufisque',
      fullAddress: 'Extension Résidentielle, Rufisque, Sénégal',
    },
    area: 400,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1200&q=80',
    ],
    status: 'disponible',
    isServiced: true,
    hasTitleDeed: true,
    features: [
      'Titre Foncier avec bail muté',
      'Parcelle viabilisée (eau + électricité)',
      'Accès goudronné à 150 m',
      'Zone non inondable',
      'Bornage certifié',
    ],
    featured: true,
    isDemoData: true,
  },
  {
    id: 'demo-004',
    slug: 'villa-prestige-almadies',
    reference: 'DD-ALM-004',
    title: 'Villa de prestige – Les Almadies',
    description:
      "Propriété d'exception au style architectural contemporain avec piscine à débordement, salon triple volume et domotique complète. Située dans le quartier le plus prisé de Dakar.",
    type: 'maison',
    transaction: 'vente',
    price: 220000000,
    priceDisplay: '220 000 000 FCFA',
    period: 'total',
    location: {
      neighborhood: 'Les Almadies',
      city: 'Dakar',
      fullAddress: 'Zone résidentielle Almadies, Dakar, Sénégal',
    },
    area: 550,
    bedrooms: 5,
    bathrooms: 5,
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    ],
    status: 'disponible',
    hasTitleDeed: true,
    features: [
      'Piscine à débordement & jardin paysager',
      'Groupe électrogène automatique',
      'Domotique & vidéosurveillance',
      'Logement pour personnel',
      'Vue mer partielle au rooftop',
    ],
    featured: true,
    isDemoData: true,
  },
  {
    id: 'demo-005',
    slug: 'penthouse-dakar-plateau',
    reference: 'DD-PLT-005',
    title: 'Penthouse de luxe – Dakar Plateau',
    description:
      "Penthouse d'exception avec terrasse panoramique dominant la baie de Dakar. Finitions soignées, ascenseur privatif et 2 places de parking en sous-sol.",
    type: 'appartement',
    transaction: 'location',
    price: 1200000,
    priceDisplay: '1 200 000 FCFA/mois',
    period: 'mois',
    location: {
      neighborhood: 'Plateau',
      city: 'Dakar',
      fullAddress: 'Boulevard de la République, Plateau, Dakar',
    },
    area: 210,
    bedrooms: 3,
    bathrooms: 3,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502005229762-ee1b2b8ab98f?auto=format&fit=crop&w=1200&q=80',
    ],
    status: 'disponible',
    features: [
      'Terrasse privative de 60 m²',
      'Ascenseur privatif direct',
      'Sécurité VIP & conciergerie 24/7',
      '2 parkings en sous-sol',
      'Climatisation centrale inverter',
    ],
    featured: true,
    isDemoData: true,
  },
  {
    id: 'demo-006',
    slug: 'villa-tropicale-saly',
    reference: 'DD-SLY-006',
    title: 'Villa tropicale avec piscine – Saly',
    description:
      'Magnifique villa de vacances et de résidence sur la Petite-Côte avec piscine privée, jardin arboré et terrasse ombragée. Rendement locatif exceptionnel en court séjour.',
    type: 'maison',
    transaction: 'vente',
    price: 85000000,
    priceDisplay: '85 000 000 FCFA',
    period: 'total',
    location: {
      neighborhood: 'Saly / Somone',
      city: 'Mbour',
      fullAddress: 'Zone résidentielle de Saly Portudal, Petite-Côte, Sénégal',
    },
    area: 320,
    bedrooms: 4,
    bathrooms: 3,
    images: [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    ],
    status: 'disponible',
    hasTitleDeed: true,
    features: [
      'Piscine privée et pool-house',
      'Jardin tropical paysager',
      'À 5 minutes des plages de Somone',
      'Titre Foncier certifié',
    ],
    featured: false,
    isDemoData: true,
  },
];

// ────────────────────────────────────────────────────────────────────────────
// LES QUATRE GRANDS SERVICES OFFICIELS
// ────────────────────────────────────────────────────────────────────────────
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'svc-terrains',
    slug: 'terrains',
    iconName: 'MapPin',
    title: 'Achat et vente de terrains',
    shortDescription:
      "Recherche de terrains et parcelles, collecte des informations disponibles et orientation dans les vérifications foncières.",
    fullDescription:
      "Nous vous accompagnons dans la recherche de terrains et de parcelles correspondant à votre projet immobilier. L'accompagnement comprend la collecte des informations disponibles, l'orientation dans les vérifications foncières et l'aide à la compréhension des documents présentés.",
    benefits: [
      'Recherche de terrains et de parcelles adaptés à vos critères',
      'Identification de biens correspondant au projet du client',
      'Collecte et examen des informations foncières disponibles',
      'Orientation dans les démarches de vérification de l’origine de propriété',
      'Accompagnement rigoureux des acquéreurs et des vendeurs',
    ],
  },
  {
    id: 'svc-gestion',
    slug: 'gestion-locative',
    iconName: 'Settings',
    title: 'Gestion locative et conciergerie',
    shortDescription:
      'Confiez la gestion de votre bien à une équipe de proximité à Dakar. Suivi locatif et assistance dédiée aux résidents et à la diaspora.',
    fullDescription:
      'Confiez la gestion de votre bien à une équipe de proximité. Selon le mandat et les prestations convenues, l’agence peut vous accompagner dans l’organisation des visites, la recherche de locataires et le suivi locatif.',
    benefits: [
      'Organisation des visites et valorisation du bien',
      'Recherche et sélection des locataires avec étude des dossiers',
      'Accompagnement dans la préparation des contrats de location',
      'Suivi administratif et technique locatif',
      'Encaissement et suivi des loyers selon les modalités convenues',
      'Assistance dédiée aux propriétaires qui vivent à l’étranger (diaspora)',
    ],
  },
  {
    id: 'svc-intermediation',
    slug: 'intermediation',
    iconName: 'Home',
    title: 'Achat, vente et location de biens immobiliers',
    shortDescription:
      'Accompagnement des propriétaires, acquéreurs et locataires pour appartements, maisons, villas et terrains à Dakar.',
    fullDescription:
      'Nous accompagnons les propriétaires, les acquéreurs et les locataires dans la recherche de biens immobiliers adaptés à leurs besoins, notamment à Dakar.',
    benefits: [
      'Recherche ciblée de biens (villas, appartements, maisons, parcelles)',
      'Présentation transparente des annonces disponibles',
      'Organisation et planification des visites sur le terrain',
      'Mise en relation directe et équilibrée des parties',
      'Accompagnement tout au long du processus de transaction',
    ],
  },
  {
    id: 'svc-assistance-fonciere',
    slug: 'assistance-fonciere',
    iconName: 'ShieldCheck',
    title: 'Conseil et assistance foncière',
    shortDescription:
      'Pédagogie et compréhension des documents fonciers (titre foncier, bail, délibération) et orientation vers les démarches de vérification.',
    fullDescription:
      'Comprendre les documents fonciers est une étape importante avant tout investissement immobilier. L’agence accompagne ses clients dans la compréhension des documents disponibles et les oriente vers les démarches de vérification adaptées à leur situation.',
    benefits: [
      'Comprendre le titre foncier, sa portée et ses mentions',
      'Comprendre le bail et ses conditions de cession ou mutation',
      'Comprendre une délibération et le statut coutumier / communal',
      'Identifier les vérifications clés à effectuer avant tout achat',
      'Comprendre les démarches administratives sénégalaises',
      'Reconnaître les signaux d’alerte d’une éventuelle fraude immobilière',
      'Être orienté vers les professionnels compétents (notaires, géomètres) lorsque la situation l’exige',
    ],
  },
];

// ────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────
// MOT DE DIAMÉ DIALLO — DIRECTEUR GÉNÉRAL & FONDATEUR
// ────────────────────────────────────────────────────────────────────────────
export const DIRECTEUR_MESSAGE = {
  quote: `Chers clients et partenaires,

L'immobilier représente bien plus qu'un simple bien : c'est un projet de vie, un investissement patrimonial et souvent la concrétisation d'années d'efforts.

À travers l'Agence Immobilière D.DIALLO, mon engagement quotidien est de vous accompagner avec écoute, rigueur et transparence dans chacune de vos démarches immobilières au Sénégal : achat ou vente de terrain, valorisation patrimoniale, gestion locative ou investissement depuis la diaspora.

Je suis convaincu qu'une relation de confiance durable repose sur la clarté juridique, la maîtrise du terrain dakarois et la loyauté envers chaque client. C'est pourquoi nous accordons une vigilance absolue à la vérification des pièces foncières et vous guidons pas à pas.

Votre confiance est notre plus belle réussite.

Au plaisir de vous accompagner dans la réussite de vos projets immobiliers.`,
  signature: 'Diamé Diallo',
  role: 'Directeur Général & Fondateur — Agence Immobilière D.DIALLO',
};

export const DIRECTRICE_MESSAGE = DIRECTEUR_MESSAGE; // Alias de compatibilité

// ────────────────────────────────────────────────────────────────────────────
// ARTICLES ET CONSEILS IMMOBILIERS PÉDAGOGIQUES
// ────────────────────────────────────────────────────────────────────────────
export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'art-001',
    slug: 'comprendre-titre-foncier-bail-deliberation-senegal',
    title: 'Comprendre le Titre Foncier, le Bail et la Délibération au Sénégal',
    summary:
      'Décryptage des trois principaux statuts fonciers au Sénégal pour mieux appréhender la nature juridique de votre future parcelle ou maison.',
    category: 'foncier',
    categoryLabel: 'Droit Foncier Pédagogique',
    readTime: '6 min',
    publishedDate: '15 Octobre 2026',
    content: [
      "Au Sénégal, l’accès à la propriété immobilière repose sur différents régimes juridiques qu'il convient de bien distinguer avant d'engager des fonds.",
      "1. Le Titre Foncier (TF) : C'est le titre le plus protecteur et définitif. Il confère un droit de propriété inattaquable et perpétuel sur l'immeuble immatriculé au livre foncier.",
      "2. Le Bail ordinaire ou emphytéotique : Il s'agit d'un contrat accordé par l'État sur le domaine privé de l'État, généralement pour une durée comprise entre 18 et 50 ans (renouvelable), avec possibilité sous certaines conditions de transformation en titre foncier.",
      "3. La Délibération municipale ou acte d'attribution : Souvent délivrée sur le domaine national en zone rurale ou périurbaine. Elle confère un droit d'usage ou d'exploitation, mais ne constitue pas un droit de propriété commerciale transférable sans régularisation préalable.",
      "Notre conseil : Ne signez aucun compromis et ne versez aucun acompte sans avoir consulté l'état des droits réels délivré par la conservation foncière compétente.",
    ],
    keyTakeaways: [
      'Le Titre Foncier offre la plus haute garantie juridique de propriété.',
      'Un bail étatique nécessite de vérifier la validité de la durée restante et les conditions de cession.',
      'Une simple délibération sur le domaine national n’est pas un titre foncier.',
      'Toujours exiger un état des droits réels récent auprès du conservateur de la propriété foncière.',
    ],
  },
  {
    id: 'art-002',
    slug: 'signaux-alerte-fraude-immobiliere-dakar',
    title: 'Vigilance foncière : comment reconnaître les signaux d’alerte d’une fraude immobilière',
    summary:
      'Précautions essentielles et réflexes de bon sens pour vous prémunir contre les litiges fonciers et les intermédiaires douteux.',
    category: 'vigilance',
    categoryLabel: 'Sécurité & Prévention',
    readTime: '5 min',
    publishedDate: '10 Octobre 2026',
    content: [
      "Le dynamisme du marché immobilier dakarois attire malheureusement des pratiques frauduleuses qui peuvent compromettre les économies d'une vie.",
      "Signal 1 (L'urgence injustifiée) : Un vendeur ou intermédiaire qui exige une avance immédiate sous prétexte que « d'autres acheteurs sont sur le coup » doit susciter votre méfiance.",
      "Signal 2 (Le refus d'accès aux originaux) : Exigez toujours de consulter les pièces originales et non de simples photocopies illisibles.",
      "Signal 3 (La contestation de limites ou de bornage) : Vérifiez physiquement la parcelle avec l'assistance d'un géomètre agréé avant toute conclusion.",
      "Signal 4 (Le contournement du notaire) : Pour les biens immatriculés (Titre Foncier), toute transaction doit obligatoirement être instrumentée par un notaire assermenté.",
    ],
    keyTakeaways: [
      'Ne cédez jamais à la pression de l’urgence pour verser une avance en liquide.',
      'Faites identifier physiquement les bornes par un géomètre assermenté.',
      'Passez impérativement devant notaire pour tout bien sous titre foncier.',
      'Vérifiez la concordance stricte entre l’identité du vendeur et le titulaire inscrit sur l’acte.',
    ],
  },
  {
    id: 'art-003',
    slug: 'investir-au-senegal-depuis-la-diaspora',
    title: 'Investir au Sénégal depuis la diaspora : méthode et accompagnement pas à pas',
    summary:
      'Guide pratique pour les Sénégalais de l’extérieur souhaitant bâtir ou acheter au pays en toute sérénité sans être sur place.',
    category: 'diaspora',
    categoryLabel: 'Guide Diaspora',
    readTime: '7 min',
    publishedDate: '02 Octobre 2026',
    content: [
      "Bâtir ou investir au Sénégal depuis l'Europe, l'Amérique ou l'Asie est le projet de nombreux compatriotes. Cependant, confier son investissement à des intermédiaires informels peut déboucher sur des déconvenues.",
      "Étape 1 (Définition claire du cahier des charges) : localisation (Dakar, Diamniadio, Petite-Côte), budget total, objectif (résidence personnelle ou rentabilité locative).",
      "Étape 2 (Visites filmées et rapports circonstanciés) : l’agence réalise pour vous des reportages vidéo complets de l’environnement immédiat et de l’état du bien.",
      "Étape 3 (Vérification documentaire en amont) : collecte préalable des documents disponibles avant d'engager des frais de notaire.",
      "Étape 4 (Mandat de gestion locative clair) : assurer l'entretien et le versement régulier des loyers si le bien est destiné à la location.",
    ],
    keyTakeaways: [
      'Privilégiez une structure professionnelle ayant pignon sur rue à Dakar.',
      'Exigez un compte-rendu vidéo horodaté et un état des lieux exhaustif.',
      'Prévoyez une procuration notariée formelle si vous ne pouvez pas vous déplacer pour la signature.',
      'Mettez en place un suivi de gestion locative avec reporting périodique.',
    ],
  },
];

// ────────────────────────────────────────────────────────────────────────────
// VIDÉOS ET INTERVIEWS DE DIAMÉ DIALLO SUR YOUTUBE
// ────────────────────────────────────────────────────────────────────────────
export const VIDEOS_DATA: VideoItem[] = [
  {
    id: 'vid-001',
    title: 'Interview exclusive avec le Directeur Général de l’Agence Immobilière Diamé Diallo',
    description:
      'Grand entretien exclusif sur Manael TV : présentation de l’agence, expertise foncière à Colobane et conseils clés pour sécuriser vos acquisitions à Dakar.',
    category: 'Interview Manael TV',
    duration: '14:20',
    youtubeId: 'MJ367gMiRpM',
    youtubeUrl: 'https://www.youtube.com/watch?v=MJ367gMiRpM',
    isPendingValidation: false,
  },
  {
    id: 'vid-002',
    title: 'Formalités administratives, papiers fonciers et impôts au Sénégal',
    description:
      'Décryptage pédagogique par Diamé Diallo : vérification des titres, cadastre dakarois, fiscalité et démarches administratives indispensables.',
    category: 'Conseils & Fiscalité',
    duration: '18:45',
    youtubeId: 'C43qUc8Zqvw',
    youtubeUrl: 'https://www.youtube.com/watch?v=C43qUc8Zqvw',
    isPendingValidation: false,
  },
  {
    id: 'vid-003',
    title: 'Visites de chantiers et immersion terrain à Colobane et Dakar',
    description:
      'Intervention de terrain par l’Agence Diamé Diallo : suivi de chantiers, conformité des accès, bornage et gestion des parcelles pour les propriétaires et la diaspora.',
    category: 'Visite de Chantier',
    duration: '11:15',
    youtubeId: 'tHfHp_IrrMc',
    youtubeUrl: 'https://www.youtube.com/watch?v=tHfHp_IrrMc',
    isPendingValidation: false,
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Comment se passe l’achat d’un terrain à Dakar ?',
    answer:
      'Nous identifions des parcelles correspondant à votre budget et à votre usage, collectons les informations disponibles, puis vous orientons vers les vérifications foncières (cadastre, notaire) avant toute signature.',
  },
  {
    question: 'Quelle est la différence entre titre foncier, bail et délibération ?',
    answer:
      'Le titre foncier est le droit de propriété le plus sécurisé. Le bail (souvent de longue durée) et la délibération relèvent d’autres régimes. Nous expliquons ces distinctions et recommandons toujours un audit notarial.',
  },
  {
    question: 'Puis-je investir depuis l’étranger (diaspora) ?',
    answer:
      'Oui. Nous assurons un suivi à distance : visites filmées, reporting, gestion locative et orientation administrative, avec une communication régulière par WhatsApp.',
  },
  {
    question: 'Proposez-vous la gestion locative ?',
    answer:
      'Oui. Nous organisons les visites, aidons à sélectionner les locataires, suivons les aspects administratifs et restons le relais de proximité pour les propriétaires, notamment ceux de la diaspora.',
  },
  {
    question: 'Les biens affichés sur le site sont-ils tous disponibles ?',
    answer:
      'Une partie des annonces est présentée à titre de démonstration. Contactez-nous pour connaître les biens réellement disponibles au moment de votre projet.',
  },
  {
    question: 'Comment vous joindre rapidement ?',
    answer: `WhatsApp et téléphone : ${AGENCY_CONFIG.phone}. Bureau à Colobane, angle Rue 41 × Rue 42, Dakar. Horaires : ${AGENCY_CONFIG.hours}.`,
  },
];

