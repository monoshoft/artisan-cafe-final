import React, { useState } from 'react';
import {
  ArrowRight,
  Play,
  Heart,
  Award,
  Flame,
  Clock,
  Sparkles,
  Check,
  MapPin,
  Coffee,
  Music,
  Compass,
} from 'lucide-react';
import { ProductItem } from '../../types/cafe';
import { CAFE_IMAGES } from '../../data/cafeImages';
import { ThreeCoffeeCanvas } from '../common/ThreeCoffeeCanvas';

interface BrewHavenProps {
  onQuickView: (product: ProductItem) => void;
}

const POPULAR_PICKS: ProductItem[] = [
  {
    id: 'bh-1',
    name: 'Iced Caramel Latte',
    category: 'Cold Coffee',
    price: 199,
    currency: 'INR',
    currencySymbol: '₹',
    description: 'Smooth espresso layered with creamy chilled milk and artisanal buttery caramel syrup.',
    imageType: 'iced-coffee',
    imageUrl: CAFE_IMAGES.brewHaven.icedCaramelLatte,
    ingredients: ['Double Espresso', 'Caramel Drizzle', 'Cold Milk', 'Ice'],
    roast: 'Medium Roast',
  },
  {
    id: 'bh-2',
    name: 'Cappuccino',
    category: 'Hot Coffee',
    price: 169,
    currency: 'INR',
    currencySymbol: '₹',
    description: 'Classic velvety cappuccino crowned with rich microfoam and dusted with dark cocoa.',
    imageType: 'latte-cup',
    imageUrl: CAFE_IMAGES.brewHaven.cappuccino,
    ingredients: ['Espresso Shot', 'Steamed Whole Milk', 'Velvet Foam'],
    roast: 'Dark Roast',
  },
  {
    id: 'bh-3',
    name: 'Mocha',
    category: 'Hot Coffee',
    price: 189,
    currency: 'INR',
    currencySymbol: '₹',
    description: 'Espresso balanced with decadent single-origin chocolate and silky steamed milk.',
    imageType: 'latte-cup',
    imageUrl: CAFE_IMAGES.brewHaven.mocha,
    ingredients: ['Espresso', 'Dark Chocolate Ganache', 'Steamed Milk', 'Whipped Cream'],
    roast: 'Medium-Dark Roast',
  },
  {
    id: 'bh-4',
    name: 'Espresso',
    category: 'Espresso Bar',
    price: 139,
    currency: 'INR',
    currencySymbol: '₹',
    description: 'Strong, bold and pure espresso shot extracted at 9 bars for intense caramel crema.',
    imageType: 'latte-cup',
    imageUrl: CAFE_IMAGES.brewHaven.espresso,
    ingredients: ['100% Arabica Blend', 'Pure 18g Extraction'],
    roast: 'Bold Dark Roast',
  },
];

export const BrewHaven: React.FC<BrewHavenProps> = ({ onQuickView }) => {
  const [view3D, setView3D] = useState(false);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setEmailSubscribed(true);
      setTimeout(() => setEmailSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0A09] text-[#F5EBE1] font-jakarta selection:bg-[#C88A58] selection:text-white pt-15">
      {/* Discreet Agency Design Attribution Banner */}
      <div className="bg-[#120E0C] border-b border-[#241C16] px-6 py-1.5 text-center">
        <span className="text-[11px] tracking-wider text-stone-400 font-mono">
          Website concept by <span className="text-cyan-400 font-bold">OBVERRA DIGITAL</span> · Dark Luxury Coffee Architecture
        </span>
      </div>

      {/* Café Header */}
      <nav className="border-b border-[#241C16] bg-[#0C0A09]/95 sticky top-15 z-30 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-playfair text-2xl font-bold tracking-wider text-[#F5EBE1]">
              BREW HAVEN
            </span>
            <span className="text-[10px] tracking-widest text-[#C88A58] uppercase font-mono hidden sm:inline">
              COFFEE CO.
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-stone-400">
            <a href="#bh-home" className="hover:text-[#C88A58] text-[#F5EBE1] transition-colors">
              Home
            </a>
            <a href="#bh-about" className="hover:text-[#C88A58] transition-colors">
              About
            </a>
            <a href="#bh-menu" className="hover:text-[#C88A58] transition-colors">
              Menu
            </a>
            <a href="#bh-visit" className="hover:text-[#C88A58] transition-colors">
              Visit & Hours
            </a>
            <a href="#bh-contact" className="hover:text-[#C88A58] transition-colors">
              Contact
            </a>
          </div>

          <a
            href="#bh-visit"
            className="px-5 py-2.5 rounded-lg bg-[#C88A58] hover:bg-[#DDA374] text-[#0C0A09] text-xs font-semibold tracking-wider uppercase transition-colors shadow-md shadow-[#C88A58]/20"
          >
            Visit Lounge
          </a>
        </div>
      </nav>

      {/* Hero Section — Balanced Viewport Presence */}
      <section id="bh-home" className="relative py-12 lg:py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block text-[#C88A58] font-serif italic text-base md:text-lg">
              Rich. Smooth. Perfect.
            </div>

            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
              Experience Coffee Like <br />
              <span className="text-[#C88A58]">Never Before</span>
            </h1>

            <p className="text-stone-300 text-sm md:text-base max-w-md leading-relaxed">
              Handcrafted coffee made from the finest beans, brewed to perfection for you.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#bh-menu"
                className="px-6 py-3.5 rounded-lg bg-[#C88A58] hover:bg-[#DDA374] text-[#0C0A09] font-semibold text-xs tracking-wider uppercase flex items-center gap-2 transition-all shadow-lg shadow-[#C88A58]/20"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#bh-about"
                className="px-5 py-3.5 rounded-lg border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-white font-medium text-xs tracking-wider uppercase flex items-center gap-2 transition-colors"
              >
                <span>Our Story</span>
                <Play className="w-3.5 h-3.5 fill-current" />
              </a>

              <button
                onClick={() => setView3D(!view3D)}
                className="px-3.5 py-3.5 rounded-lg border border-[#C88A58]/40 bg-[#C88A58]/10 text-[#C88A58] hover:bg-[#C88A58]/20 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                title="Toggle interactive 3D Three.js view"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{view3D ? 'View Real Photo' : 'Interactive 3D'}</span>
              </button>
            </div>

            {/* 3 Trust Strip Badges */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-stone-800/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#1C1613] border border-[#3A2A20] flex items-center justify-center text-[#C88A58] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-[11px] leading-tight text-stone-300 font-medium">
                  Premium Quality Beans
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#1C1613] border border-[#3A2A20] flex items-center justify-center text-[#C88A58] shrink-0">
                  <Flame className="w-4 h-4" />
                </div>
                <div className="text-[11px] leading-tight text-stone-300 font-medium">
                  Expertly Roasted
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#1C1613] border border-[#3A2A20] flex items-center justify-center text-[#C88A58] shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div className="text-[11px] leading-tight text-stone-300 font-medium">
                  Made With Love
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Coffee Photography & Steam Ambiance */}
          <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-[#2B2018] shadow-2xl shadow-black/80 group">
            {view3D ? (
              <div className="w-full h-full bg-[#120E0C]">
                <ThreeCoffeeCanvas cupColor="#1A1512" saucerColor="#120E0C" />
              </div>
            ) : (
              <div className="relative w-full h-full overflow-hidden bg-stone-950">
                <img
                  src={CAFE_IMAGES.brewHaven.hero}
                  alt="Brew Haven Artisan Coffee with latte art on rustic wood"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Vignette Overlay matching the cinematic reference */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09] via-transparent to-black/30 pointer-events-none" />
                <div className="absolute inset-0 bg-radial from-transparent via-[#0C0A09]/20 to-[#0C0A09]/70 pointer-events-none" />
                
                {/* Visual badge */}
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-xs text-stone-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C88A58]" />
                  <span>Slow Drip Single-Origin Blend</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section: "More Than Just a Coffee" */}
      <section id="bh-about" className="py-18 bg-[#120E0C] border-y border-[#241C16]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Authentic Packaging pouch photography */}
          <div className="lg:col-span-5 aspect-[4/3] rounded-3xl overflow-hidden border border-[#2B2018] shadow-2xl relative group">
            <img
              src={CAFE_IMAGES.brewHaven.packaging}
              alt="Brew Haven Coffee packaging pouch on wooden bar"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
              <span className="text-xs font-serif text-[#C88A58] block font-semibold">BREW HAVEN COFFEE CO.</span>
              <span className="text-[11px] text-stone-300">Signature Roast • 100% Arabica Whole Bean</span>
            </div>
          </div>

          {/* Right: Story details */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#C88A58] font-serif italic text-base">About Us</span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white">
              More Than Just a Coffee
            </h2>

            <p className="text-stone-300 text-sm leading-relaxed">
              At Brew Haven, we believe coffee is more than a drink — it's an experience. Every cup we serve is a blend of passion, quality, and perfection.
            </p>

            {/* 4 Feature Checklist Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#181310] border border-[#2A1E17]">
                <div className="w-6 h-6 rounded-full bg-[#C88A58]/20 text-[#C88A58] flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
                <span className="text-xs font-medium text-stone-200">Sustainably Sourced Beans</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#181310] border border-[#2A1E17]">
                <div className="w-6 h-6 rounded-full bg-[#C88A58]/20 text-[#C88A58] flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
                <span className="text-xs font-medium text-stone-200">Ethically Traded</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#181310] border border-[#2A1E17]">
                <div className="w-6 h-6 rounded-full bg-[#C88A58]/20 text-[#C88A58] flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
                <span className="text-xs font-medium text-stone-200">Freshly Roasted</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#181310] border border-[#2A1E17]">
                <div className="w-6 h-6 rounded-full bg-[#C88A58]/20 text-[#C88A58] flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
                <span className="text-xs font-medium text-stone-200">Barista Crafted</span>
              </div>
            </div>

            <div>
              <a
                href="#bh-menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C88A58] hover:bg-[#DDA374] text-[#0C0A09] text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Picks Section */}
      <section id="bh-menu" className="py-20 bg-[#0C0A09]">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-[#C88A58] font-serif italic text-base">Our Signature</span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white">
              Popular Picks
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {POPULAR_PICKS.map((drink) => (
              <div
                key={drink.id}
                className="group relative rounded-2xl bg-[#16120E] border border-[#271E18] hover:border-[#C88A58]/60 p-4 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-[#C88A58]/10"
              >
                {/* Visual Drink Area with Photographic Asset */}
                <div
                  onClick={() => onQuickView(drink)}
                  className="cursor-pointer aspect-square rounded-xl overflow-hidden bg-[#0F0B09] border border-[#221711] mb-4 relative"
                >
                  <img
                    src={drink.imageUrl}
                    alt={drink.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] bg-black/80 backdrop-blur-sm text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    Quick View
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-1.5 flex-1">
                  <h3
                    onClick={() => onQuickView(drink)}
                    className="font-playfair text-lg font-bold text-white group-hover:text-[#C88A58] transition-colors cursor-pointer"
                  >
                    {drink.name}
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                    {drink.description}
                  </p>
                </div>

                {/* In-Café Menu Pricing & Tasting Profile */}
                <div className="mt-4 pt-3 border-t border-[#271E18] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-mono text-stone-400 block">
                      In-Café Price
                    </span>
                    <span className="text-base font-bold font-mono text-[#F5EBE1]">
                      ₹{drink.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onQuickView(drink)}
                    className="px-3 py-1.5 rounded-lg bg-[#241B15] hover:bg-[#C88A58] text-stone-300 hover:text-[#0C0A09] text-xs font-semibold tracking-wider transition-colors shadow-sm"
                    title="View drink composition and tasting profile"
                  >
                    Tasting Notes
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <a
              href="#bh-visit"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-[#C88A58] text-[#C88A58] hover:bg-[#C88A58] hover:text-[#0C0A09] font-medium text-xs tracking-wider uppercase transition-all shadow-sm"
            >
              <span>Visit Our Roastery Lounge</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Offline Hospitality Pillars */}
      <section className="py-10 bg-[#140F0C] border-y border-[#241C16]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#201712] border border-[#35251C] flex items-center justify-center text-[#C88A58] shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">Daily In-House Roasting</h4>
                <p className="text-[11px] text-stone-400">Micro-batches on our Diedrich roaster</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#201712] border border-[#35251C] flex items-center justify-center text-[#C88A58] shrink-0">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">Master Barista Craft</h4>
                <p className="text-[11px] text-stone-400">SCA certified 9-bar extraction</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#201712] border border-[#35251C] flex items-center justify-center text-[#C88A58] shrink-0">
                <Music className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">Acoustic Lounge</h4>
                <p className="text-[11px] text-stone-400">Ambient jazz & velvet seating</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#201712] border border-[#35251C] flex items-center justify-center text-[#C88A58] shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">Single-Origin Flights</h4>
                <p className="text-[11px] text-stone-400">Weekly cupping ceremonies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us — Physical Flagship Roastery Bar & Hours */}
      <section id="bh-visit" className="py-20 bg-[#0F0C0A] border-b border-[#241C16]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[#C88A58] font-serif italic text-base">In-Person Hospitality</span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white">
              Visit Our Flagship Roastery & Lounge
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Step into our aroma-filled sanctum. Whether you are seeking a quiet morning pour-over or a lively afternoon tasting flight, our doors are open.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#16120E] border border-[#271E18] space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#241B15] text-[#C88A58] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-playfair text-lg font-bold text-white">Address & District</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                48 Artisan Avenue, Downtown Arts Quarter<br />
                Indiranagar, Bangalore - 560038
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Bangalore+Indiranagar+Coffee"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C88A58] hover:underline font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#16120E] border border-[#271E18] space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#241B15] text-[#C88A58] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-playfair text-lg font-bold text-white">Lounge Hours</h3>
              <div className="space-y-1.5 text-xs text-stone-300">
                <div className="flex justify-between border-b border-[#241B15] pb-1">
                  <span className="text-stone-400">Monday – Friday</span>
                  <span className="font-mono font-semibold text-white">07:30 – 22:00</span>
                </div>
                <div className="flex justify-between border-b border-[#241B15] pb-1">
                  <span className="text-stone-400">Saturday – Sunday</span>
                  <span className="font-mono font-semibold text-white">08:00 – 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Cupping Sessions</span>
                  <span className="font-mono text-[#C88A58]">Every Sat at 11:00</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#16120E] border border-[#271E18] space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#241B15] text-[#C88A58] flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-playfair text-lg font-bold text-white">In-Store Experience</h3>
              <ul className="space-y-1.5 text-xs text-stone-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C88A58]" />
                  <span>Walk-in Espresso & Pour-Over Bar</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C88A58]" />
                  <span>Fresh Roasted Whole Bean Retail Counter</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C88A58]" />
                  <span>High-Speed Wi-Fi & Quiet Focus Nooks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C88A58]" />
                  <span>Pet-Friendly Outdoor Deck</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="bh-contact" className="py-14 bg-[#090807] border-t border-[#1C1613]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Stay in the Loop Newsletter */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="font-playfair text-lg font-bold text-white">
                Stay in the Loop
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Subscribe to receive announcements on seasonal single-origins, weekend jazz nights, and barista workshop dates.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-3.5 py-2.5 rounded-lg bg-[#16120E] border border-[#2E221A] text-xs text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-[#C88A58]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-lg bg-[#C88A58] hover:bg-[#DDA374] text-[#0C0A09] font-bold text-xs transition-colors flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              {emailSubscribed && (
                <div className="text-[11px] text-[#C88A58] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Welcome to the Brew Haven circle!</span>
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-3">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
                Explore Café
              </h5>
              <ul className="space-y-2 text-xs text-stone-400">
                <li><a href="#bh-home" className="hover:text-[#C88A58]">Home</a></li>
                <li><a href="#bh-menu" className="hover:text-[#C88A58]">Menu</a></li>
                <li><a href="#bh-about" className="hover:text-[#C88A58]">Our Story</a></li>
                <li><a href="#bh-visit" className="hover:text-[#C88A58]">Visit & Hours</a></li>
                <li><a href="#bh-contact" className="hover:text-[#C88A58]">Contact</a></li>
              </ul>
            </div>

            {/* Hospitality Information */}
            <div className="lg:col-span-3 space-y-3">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
                Hospitality
              </h5>
              <ul className="space-y-2 text-xs text-stone-400">
                <li><a href="#bh-visit" className="hover:text-[#C88A58]">Roastery Tours</a></li>
                <li><a href="#bh-visit" className="hover:text-[#C88A58]">Weekly Tasting Flights</a></li>
                <li><a href="#bh-visit" className="hover:text-[#C88A58]">Private Event Hire</a></li>
                <li><a href="#bh-visit" className="hover:text-[#C88A58]">Barista Workshops</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="lg:col-span-3 space-y-3">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
                Location & Enquiries
              </h5>
              <div className="space-y-2 text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-stone-300">Desk:</span>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-stone-300">Email:</span>
                  <span>lounge@brewhaven.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C88A58] shrink-0 mt-0.5" />
                  <span>48 Artisan Avenue, Indiranagar, Bangalore - 560038</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#1C1613] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
            <div>© 2026 Brew Haven Coffee Co. All rights reserved.</div>
            <div className="font-mono text-cyan-400/80 text-[11px]">
              Crafted as a client presentation by OBVERRA DIGITAL
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
