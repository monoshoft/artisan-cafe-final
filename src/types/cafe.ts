export type ConceptId = 'brewhaven' | 'harth' | 'bean' | 'coffeee' | 'bodren' | 'hub';

export interface ProductItem {
  id: string;
  name: string;
  subtitle?: string;
  category: string;
  price: number;
  currency: string;
  currencySymbol: string;
  description: string;
  rating?: number;
  imageType: string;
  imageUrl?: string;
  accentColor?: string;
  ingredients?: string[];
  calories?: string;
  roast?: string;
  isPopular?: boolean;
}

export interface EnquiryData {
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  cafeName: string;
  preferredConcept?: ConceptId | 'custom';
  timeline?: string;
  message?: string;
}

