export type PropertyType = 'maison' | 'appartement' | 'terrain' | 'commercial';
export type TransactionType = 'vente' | 'location';

export interface Property {
  id: string;
  reference: string;
  title: string;
  type: PropertyType;
  transaction: TransactionType;
  price: number; // in FCFA
  priceDisplay?: string;
  period?: 'mois' | 'total';
  location: {
    neighborhood: string;
    city: string;
    fullAddress: string;
    isColobaneNearby?: boolean;
  };
  bedrooms?: number;
  bathrooms?: number;
  area: number; // in m²
  isServiced?: boolean; // viabilisé
  hasTitleDeed?: boolean; // titre foncier
  imageUrl: string;
  galleryUrls?: string[];
  description: string;
  features: string[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  details?: string[];
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email?: string;
  interestType?: string;
  message: string;
}
