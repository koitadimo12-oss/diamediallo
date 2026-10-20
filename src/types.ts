// ─── Property Types ───────────────────────────────────────────────────────────
export type PropertyType = 'maison' | 'appartement' | 'terrain' | 'commercial';
export type TransactionType = 'vente' | 'location';
export type AvailabilityStatus = 'disponible' | 'reserve' | 'vendu' | 'loue';

export interface PropertyLocation {
  neighborhood: string;
  city: string;
  fullAddress: string;
  region?: string;
  isColobaneNearby?: boolean;
}

export interface Property {
  id: string;
  slug?: string;
  reference: string;
  title: string;
  description: string;
  type: PropertyType;
  transaction: TransactionType;
  price: number; // in FCFA
  priceDisplay: string;
  period?: 'mois' | 'an' | 'total';
  location: PropertyLocation;
  area: number; // m²
  bedrooms?: number;
  bathrooms?: number;
  images?: string[]; // first is cover
  imageUrl?: string;
  galleryUrls?: string[];
  status?: AvailabilityStatus;
  features: string[];
  isServiced?: boolean;
  hasTitleDeed?: boolean;
  featured?: boolean;
  /** True = données de démonstration, à remplacer avant mise en production */
  isDemoData?: boolean;
}

// ─── Service Types ────────────────────────────────────────────────────────────
export interface ServiceItem {
  id: string;
  slug: string;
  iconName: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
}

// ─── Contact / Forms ──────────────────────────────────────────────────────────
export interface ContactFormData {
  fullName: string;
  phone: string;
  email?: string;
  subject?: string;
  message: string;
}

// ─── Search / Filters ─────────────────────────────────────────────────────────
export interface PropertyFilters {
  type?: PropertyType | 'all';
  transaction?: TransactionType | 'all';
  neighborhood?: string;
  minPrice?: number;
  maxPrice?: number;
}

// ─── Articles / Conseils ──────────────────────────────────────────────────────
export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: 'foncier' | 'vigilance' | 'diaspora' | 'guide';
  categoryLabel: string;
  readTime: string;
  publishedDate: string;
  coverImage?: string;
  content: string[];
  keyTakeaways: string[];
}

// ─── Videos ───────────────────────────────────────────────────────────────────
export interface VideoItem {
  id: string;
  title: string;
  description: string;
  category: string;
  duration?: string;
  youtubeId?: string;
  youtubeUrl?: string;
  isPendingValidation?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// ─── SEO Meta ─────────────────────────────────────────────────────────────────
export interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

