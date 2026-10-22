import React, { useState } from 'react';
import {
  ArrowRight,
  Star,
  Coffee,
  Heart,
  UserCheck,
  Award,
  Sparkles,
  Check,
  Send,
  Zap,
  MapPin,
  Clock,
} from 'lucide-react';
import { ProductItem } from '../../types/cafe';
import { CAFE_IMAGES } from '../../data/cafeImages';
import { ThreeCoffeeCanvas } from '../common/ThreeCoffeeCanvas';

interface BodrenCoffeeProps {
  onQuickView: (product: ProductItem) => void;
}

const BODREN_DRINKS: ProductItem[] = [
  {
    id: 'bodren-1',
    name: 'Cappuccino',
    category: 'Popular Drinks',
    price: 4.5,
    currency: 'USD',
    currencySymbol: '$',
    rating: 4.9,
    description: '20% espresso, 40% steamed milk, 40% microfoam. Perfectly balanced and dusted with single-origin cocoa.',
    imageType: 'latte-cup',
    imageUrl: CAFE_IMAGES.bodren.cappuccino,
    ingredients: ['20% Single Espresso', '40% Steamed Milk', '40% Velvet Foam'],
  },
  {
    id: 'bodren-2',
    name: 'Latte',
    category: 'Popular Drinks',
    price: 4.9,
    currency: 'USD',
    currencySymbol: '$',
    rating: 5.0,
    description: '30% espresso, 70% silky steamed milk. Ultra-smooth profile with sweet caramel undertones.',
    imageType: 'latte-cup',
    imageUrl: CAFE_IMAGES.bodren.latte,
    ingredients: ['30% Ristretto', '70% Steamed Whole Milk'],
  },
  {
    id: 'bodren-3',
    name: 'Mocha',
    category: 'Popular Drinks',
    price: 4.9,
    currency: 'USD',
    currencySymbol: '$',
    rating: 4.7,
    description: '30% espresso, 60% dark chocolate ganache, 10% steamed milk. An indulgent coffee-dessert hybrid.',
    imageType: 'latte-cup',
    imageUrl: CAFE_IMAGES.bodren.mocha,
    ingredients: ['30% Espresso', '60% Dark Chocolate', '10% Steamed Milk'],
  },
];

const TESTIMONIALS = [
  {
    quote: "The best coffee I've ever had! The flavor is incredible and the atmosphere is amazing.",
    author: 'Sarah J.',
    role: 'Loyal Customer',
  },
  {
    quote: 'Every visit is a wonderful experience. The single-origin roasts are truly world-class. Highly recommended!',
    author: 'Michael T.',
    role: 'Coffee Enthusiast',
  },
  {
    quote: 'Professional baristas and premium quality. BODREN never disappoints with its exquisite taste.',
    author: 'Emma R.',
    role: 'Food & Wine Editor',
  },
];

export const BodrenCoffee: React.FC<BodrenCoffeeProps> = ({ onQuickView }) => {
  const [view3D, setView3D] = useState(false);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setEmailSubscribed(true);
      setTimeout(() => setEmailSubscribed(false), 3500);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-[#F4F4F5] font-jakarta selection:bg-[#D4AF37] selection:text-black pt-15">
      {/* Discreet Agency Design Attribution */}
      <div className="bg-[#121118] border-b border-stone-800/80 px-6 py-1.5 text-center">
        <span className="text-[11px] tracking-wider text-stone-400 font-mono">
          Website concept by <span className="text-cyan-400 font-bold">OBVERRA DIGITAL</span> · High-Impact Coffee Storefront
        </span>
      </div>

      {/* Café Header */}
      <nav className="border-b border-stone-800/80 bg-[#09090B]/95 sticky top-15 z-30 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-outfit text-2xl font-black tracking-widest text-white">
              BODR<span className="text-[#D4AF37]">≡</span>N
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-7 text-xs font-medium text-stone-400">
            <a href="#bodren-home" className="text-white hover:text-[#D4AF37] transition-colors">
              Home
            </a>
            <a href="#bodren-menu" className="hover:text-[#D4AF37] transition-colors">
              Menu
            </a>
            <a href="#bodren-about" className="hover:text-[#D4AF37] transition-colors">
              About
            </a>
            <a href="#bodren-features" className="hover:text-[#D4AF37] transition-colors">
              Services
            </a>
            <a href="#bodren-reviews" className="hover:text-[#D4AF37] transition-colors">
              Reviews
            </a>
            <a href="#bodren-visit" className="hover:text-[#D4AF37] transition-colors">
              Visit & Hours
            </a>
            <a href="#bodren-footer" className="hover:text-[#D4AF37] transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#bodren-visit"
              className="px-5 py-2.5 rounded-full bg-[#D4AF37] hover:bg-[#E5C358] text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#D4AF37]/20"
            >
              Visit Lounge
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="bodren-home" className="relative py-12 md:py-18 max-w-6xl mx-auto px-6 overflow-hidden">
        {/* Floating Trust Badges */}
        <div className="flex flex-wrap items-center gap-3 pb-6">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-stone-800 text-xs text-stone-300 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Flagship Espresso Bar & Roastery</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-stone-800 text-xs text-stone-300 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>100% Single-Origin Arabica</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              <span>• PREMIUM COFFEE</span>
            </div>

            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
              Unlock a Superior Taste in <br />
              <span className="text-[#D4AF37]">Every Sip!</span>
            </h1>

            <p className="text-stone-300 text-sm sm:text-base max-w-md leading-relaxed">
              Coffee is not just a drink, it's an art. We invite you on a unique coffee journey, where every sip is a meeting with the perfect flavor.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#bodren-menu"
                className="px-6 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#E5C358] text-black font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center gap-2"
              >
                <span>Explore Our Coffee</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setView3D(!view3D)}
                className="px-4 py-3.5 rounded-full border border-stone-700 bg-stone-900 text-stone-200 hover:text-white text-xs font-medium flex items-center gap-2 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>{view3D ? 'View Photo' : 'Interactive 3D'}</span>
              </button>
            </div>
          </div>

          {/* Right Visual: Dramatic Splash Hero or 3D */}
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-stone-800 shadow-2xl relative bg-stone-950 group">
              {view3D ? (
                <div className="w-full h-full bg-black">
                  <ThreeCoffeeCanvas cupColor="#1A140F" saucerColor="#120E0A" accentTheme="gold" />
                </div>
              ) : (
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={CAFE_IMAGES.bodren.heroSplash}
                    alt="BODREN Premium Coffee dramatic roast and extraction"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-bold">
                    Single-Origin Arabica • Dark Italian Roast
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Our Popular Drinks Section with Real Photography */}
      <section id="bodren-menu" className="py-16 bg-[#111015] border-y border-stone-800/80">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
              OUR POPULAR DRINKS
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">
              Signature Brews
            </h2>
          </div>

          {/* 3 Drink Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BODREN_DRINKS.map((drink) => (
              <div
                key={drink.id}
                className="rounded-2xl bg-[#18171C] border border-stone-800 hover:border-[#D4AF37]/60 p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-stone-400 font-medium">{drink.name}</span>
                    <span className="flex items-center gap-1 text-xs font-bold text-black bg-[#D4AF37] px-2 py-0.5 rounded-md">
                      <Star className="w-3 h-3 fill-black text-black" />
                      {drink.rating}
                    </span>
                  </div>

                  {/* Artwork Box */}
                  <div
                    onClick={() => onQuickView(drink)}
                    className="aspect-square rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-center cursor-pointer relative overflow-hidden"
                  >
                    <img
                      src={drink.imageUrl}
                      alt={drink.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] bg-black/80 text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity">
                      Inspect
                    </span>
                  </div>

                  <h3
                    onClick={() => onQuickView(drink)}
                    className="font-outfit text-xl font-bold text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
                  >
                    {drink.name}
                  </h3>

                  <p className="text-xs text-stone-400 leading-relaxed">
                    {drink.description}
                  </p>
                </div>

                {/* Price and In-Bar Tasting Notes */}
                <div className="mt-5 pt-3 border-t border-stone-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">
                      In-Bar
                    </span>
                    <span className="text-base font-bold font-mono text-white">
                      ${drink.price.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => onQuickView(drink)}
                    className="px-3.5 py-1.5 rounded-full bg-[#D4AF37] hover:bg-[#E5C358] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                    title={`View tasting notes for ${drink.name}`}
                  >
                    Tasting Notes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Feature Badges Section */}
      <section id="bodren-features" className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Premium Quality Beans</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              We carefully select the best beans from around the world to ensure exceptional quality.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Cozy Atmosphere & Comfort</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Our cozy spaces are designed for relaxation, work, and meaningful conversations.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Personalized Experience</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              We tailor every cup to your taste with the expertise of our professional baristas.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center">
              <Coffee className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Professional Baristas</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Our team has years of experience and a true passion for creating perfect coffee.
            </p>
          </div>
        </div>
      </section>

      {/* About BODREN with Real Barista Pouring Photography + 4 Numerical Stats */}
      <section id="bodren-about" className="py-20 bg-[#111015] border-y border-stone-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Barista Pour Photography */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-stone-800 shadow-2xl bg-black group">
              <img
                src={CAFE_IMAGES.bodren.baristaPour}
                alt="Professional barista pouring velvety latte art"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right: Text + 4 Stats */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] block mb-1">
                ABOUT BODREN
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">
                Crafting Coffee Into an Art Form
              </h2>
            </div>

            <p className="text-stone-300 text-sm leading-relaxed">
              BODREN was born from a passion for coffee and a desire to deliver the perfect experience. From bean to cup, we control every detail to bring you unmatched flavor and quality.
            </p>

            {/* 4 Stat Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-stone-800">
              <div>
                <div className="font-outfit text-3xl font-extrabold text-[#D4AF37]">10+</div>
                <div className="text-[11px] text-stone-400 mt-0.5">Years Experience</div>
              </div>
              <div>
                <div className="font-outfit text-3xl font-extrabold text-[#D4AF37]">25+</div>
                <div className="text-[11px] text-stone-400 mt-0.5">Coffee Varieties</div>
              </div>
              <div>
                <div className="font-outfit text-3xl font-extrabold text-[#D4AF37]">50K+</div>
                <div className="text-[11px] text-stone-400 mt-0.5">Happy Customers</div>
              </div>
              <div>
                <div className="font-outfit text-3xl font-extrabold text-[#D4AF37]">4.9</div>
                <div className="text-[11px] text-stone-400 mt-0.5">Customer Rating</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#bodren-menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#E5C358] text-black font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="bodren-reviews" className="py-18 max-w-6xl mx-auto px-6 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
            TESTIMONIALS
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-4 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-stone-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-stone-800/80">
                <div className="text-xs font-bold text-white">{t.author}</div>
                <div className="text-[10px] text-stone-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Our Flagship Roastery Bar CTA Banner */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-stone-900 via-[#1C1812] to-black border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-lg">
            <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white">
              Experience Our Flagship Roastery Bar
            </h3>
            <p className="text-xs text-stone-400">
              Immerse yourself in our obsidian sanctuary of acoustic soundscapes, master-pulled single origins, and artisanal tasting flights.
            </p>
          </div>

          <a
            href="#bodren-visit"
            className="px-8 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#E5C358] text-black font-extrabold text-xs tracking-wider uppercase transition-colors shrink-0 flex items-center gap-2 shadow-lg shadow-[#D4AF37]/20"
          >
            <span>Plan Your Visit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Visit Us — Physical Flagship Roastery & Hours */}
      <section id="bodren-visit" className="py-20 bg-[#0F0E13] border-y border-stone-800">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
              OUR PHYSICAL SANCTUARY
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">
              Visit Our Obsidian Roastery & Bar
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Engineered with industrial obsidian stonework, precision Slayer espresso machinery, and dedicated acoustically treated creator corners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#15141A] border border-stone-800 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-outfit text-xl font-bold text-white">Roastery Location</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                100 Obsidian Boulevard, Design District<br />
                Next to Contemporary Architecture Centre
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Obsidian+Design+District+Coffee"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:underline font-bold"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#15141A] border border-stone-800 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-outfit text-xl font-bold text-white">Bar Hours</h3>
              <div className="space-y-1.5 text-xs text-stone-300">
                <div className="flex justify-between border-b border-stone-800 pb-1">
                  <span>Monday – Friday</span>
                  <span className="font-mono font-bold text-white">08:00 – 23:00</span>
                </div>
                <div className="flex justify-between border-b border-stone-800 pb-1">
                  <span>Saturday – Sunday</span>
                  <span className="font-mono font-bold text-white">08:30 – 23:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Public Cupping Flight:</span>
                  <span className="font-bold text-[#D4AF37]">Every Sun at 10:30 AM</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#15141A] border border-stone-800 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-outfit text-xl font-bold text-white">In-Bar Experience</h3>
              <ul className="space-y-1.5 text-xs text-stone-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Interactive Walk-in Slayer Espresso Counter</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Whole Bean Micro-Roast Tasting Bar</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>High-Speed Gigabit Creator Desks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Acoustic Ambient Jazz Listening Space</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Footer */}
      <footer id="bodren-footer" className="py-14 bg-black border-t border-stone-900 text-stone-400 text-xs">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-4">
              <span className="font-outfit text-2xl font-black tracking-widest text-white">
                BODR<span className="text-[#D4AF37]">≡</span>N
              </span>
              <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
                Premium coffee crafted with passion and quality for true coffee lovers. Experience the extraordinary in every single sip.
              </p>
              <div className="flex items-center gap-4 text-stone-400">
                <span className="hover:text-[#D4AF37] cursor-pointer">Facebook</span>
                <span className="hover:text-[#D4AF37] cursor-pointer">Instagram</span>
                <span className="hover:text-[#D4AF37] cursor-pointer">Twitter</span>
                <span className="hover:text-[#D4AF37] cursor-pointer">Pinterest</span>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">Quick Links</h5>
              <ul className="space-y-2 text-stone-400">
                <li><a href="#bodren-home" className="hover:text-white">Home</a></li>
                <li><a href="#bodren-menu" className="hover:text-white">Menu</a></li>
                <li><a href="#bodren-about" className="hover:text-white">About Us</a></li>
                <li><a href="#bodren-visit" className="hover:text-white">Visit & Hours</a></li>
                <li><a href="#bodren-reviews" className="hover:text-white">Reviews</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">Hospitality</h5>
              <ul className="space-y-2 text-stone-400">
                <li><a href="#bodren-visit" className="hover:text-white">Roastery Tours</a></li>
                <li><a href="#bodren-visit" className="hover:text-white">Cupping Masterclasses</a></li>
                <li><a href="#bodren-visit" className="hover:text-white">Private Event Hire</a></li>
                <li><a href="#bodren-visit" className="hover:text-white">Espresso Flights</a></li>
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">Newsletter</h5>
              <p className="text-xs text-stone-400">
                Subscribe to get special offers, new products and updates.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-white placeholder:text-stone-600 focus:outline-none focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#E5C358] text-black font-bold flex items-center justify-center transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {emailSubscribed && (
                <div className="text-[11px] text-[#D4AF37] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Subscribed! Check your inbox for your first perk.</span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
            <div>© 2026 BODREN. All Rights Reserved.</div>
            <div className="font-mono text-cyan-400 text-[11px]">
              Website presentation concept by OBVERRA DIGITAL
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
