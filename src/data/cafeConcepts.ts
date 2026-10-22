import { ConceptId } from '../types/cafe';
import { CAFE_IMAGES } from './cafeImages';

export interface CafeConceptInfo {
  id: ConceptId;
  name: string;
  tagline: string;
  designDirection: string;
  aesthetic: string;
  heroImage: string;
  colors: string[];
  fonts: string;
  keyFeatures: string[];
  accentColor: string;
  recommendedFor: string;
}

export const CAFE_CONCEPTS: CafeConceptInfo[] = [
  {
    id: 'brewhaven',
    name: 'Brew Haven Coffee Co.',
    tagline: 'Dark Luxury Espresso & Cinematic Atmosphere',
    designDirection: 'Cinematic Dark Luxury',
    aesthetic: 'Rich espresso hues, warm amber and caramel lighting, whole-bean roastery storytelling, and elegant editorial typography.',
    heroImage: CAFE_IMAGES.brewHaven.hero,
    colors: ['#0C0A09', '#1C1613', '#C88A58', '#F5EBE1'],
    fonts: 'Playfair Display + Plus Jakarta Sans',
    keyFeatures: [
      'Cinematic Dark Espresso Visual System & Mood',
      'Dual Currency & In-Café Menu Pricing (₹ INR / $ USD)',
      'Roastery Packaging & Ethical Sourcing Narrative',
      'Interactive Tasting Notes Modal with Roast Profiles',
      'Indiranagar Physical Roastery Location & Hours Strip',
    ],
    accentColor: '#C88A58',
    recommendedFor: 'Specialty roasteries, luxury espresso bars, and evening coffee lounges.',
  },
  {
    id: 'harth',
    name: 'Harth Specialty Coffee',
    tagline: 'Scandinavian Architectural & Natural Daylight',
    designDirection: 'Architectural Editorial',
    aesthetic: 'Spacious modern café interiors, warm Scandinavian daylight, generous intentional whitespace, and refined serif typography.',
    heroImage: CAFE_IMAGES.harth.interior,
    colors: ['#F7F3EE', '#2C1F1A', '#8D7B70', '#1A1715'],
    fonts: 'Cormorant Garamond + DM Sans',
    keyFeatures: [
      'Kinfolk-Inspired Architectural Editorial Layout',
      'Interactive Table Reservation Modal & Time-Slot Picker',
      'Three Physical Café House Locations with Opening Hours',
      'Curated Seasonal Favorites & Drink Composition Notes',
      'Community Proof Counters & Craft Barista Highlights',
    ],
    accentColor: '#2C1F1A',
    recommendedFor: 'Architectural café spaces, urban roasteries, and quiet daytime study havens.',
  },
  {
    id: 'bean',
    name: 'Bean & Bloom',
    tagline: 'Botanical Bakery & Morning Kitchen',
    designDirection: 'Botanical Warm Ivory',
    aesthetic: 'Welcoming neighborhood bakery atmosphere, appetising morning food photography, earthy botanical accents, and artisan sourdough storytelling.',
    heroImage: CAFE_IMAGES.beanAndBloom.hero,
    colors: ['#FBF9F4', '#1E382B', '#C86D51', '#F4EFE6'],
    fonts: 'Fraunces + Caveat Script + Jakarta',
    keyFeatures: [
      'Artisanal Bakery & Fresh Morning Bake Schedule (7:15 AM)',
      'High-Resolution Pastry, Sourdough & Croissant Showcase',
      'Physical Greenhouse Bakery & Garden Patio Location Guide',
      'In-Café Menu Prices for Patrons & Dietary Tags',
      'Organic Sourcing Philosophy & Local Community Story',
    ],
    accentColor: '#1E382B',
    recommendedFor: 'Neighborhood bakeries, botanical brunch cafés, and morning coffee kitchens.',
  },
  {
    id: 'coffeee',
    name: 'Coffeeë (Sweet Moments)',
    tagline: 'Parisian Haute Pâtisserie & Specialty Coffee',
    designDirection: 'Refined Evergreen & Cream',
    aesthetic: 'Delicate pastel confections, artistic coffee imagery, elegant dessert cards (Pistachio, Berry, Chocolate), and a sophisticated boutique ambiance.',
    heroImage: CAFE_IMAGES.coffeee.heroCup,
    colors: ['#FAF7F2', '#1B382B', '#EAF2E8', '#FBECEE'],
    fonts: 'Playfair Display + Caveat + Manrope',
    keyFeatures: [
      'Interactive Dessert Trio Composition Cards',
      'Signature Müil Coffee Split Spotlight with Tasting Notes',
      'Sunlit Courtyard Terrace & Pastel Salon Experience',
      'In-House Tasting Notes & Belgian Cocoa Ingredient Breakdown',
      'Physical Salon Hours, High Tea Schedule & Directions',
    ],
    accentColor: '#1B382B',
    recommendedFor: 'Luxury dessert salons, Parisian-style pâtisseries, and boutique tea houses.',
  },
  {
    id: 'bodren',
    name: 'BODREN Premium Coffee',
    tagline: 'Modern Experiential & Interactive 3D Canvas',
    designDirection: 'Obsidian Slate & Radiant Gold',
    aesthetic: 'High-contrast modern branding, dramatic coffee splashing, real-time WebGL Three.js interactive 3D espresso cup, and bold numerical milestones.',
    heroImage: CAFE_IMAGES.bodren.heroSplash,
    colors: ['#09090B', '#111015', '#D4AF37', '#FFFFFF'],
    fonts: 'Outfit Display + Plus Jakarta Sans',
    keyFeatures: [
      'Interactive Three.js 3D Ceramic Cup & Orbit Controls',
      'Procedural Rising Steam Particle Simulation',
      'In-Bar Slayer Espresso Counter & Cupping Flight Schedule',
      'Drink Ratio Infographics & Roasted Bean Flavor Matrix',
      'Physical Obsidian Roastery Map, Hours & Creator Desk Perks',
    ],
    accentColor: '#D4AF37',
    recommendedFor: 'Cutting-edge roasteries, high-energy coffee labs, and flagship city locations.',
  },
];
