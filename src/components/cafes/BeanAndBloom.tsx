import React from 'react';
import {
  ArrowRight,
  Coffee,
  Sparkles,
  Heart,
  Leaf,
  Users,
  MapPin,
  Clock,
} from 'lucide-react';
import { ProductItem } from '../../types/cafe';
import { CAFE_IMAGES } from '../../data/cafeImages';

interface BeanAndBloomProps {
  onQuickView: (product: ProductItem) => void;
}

const SPECIAL_PICKS: ProductItem[] = [
  {
    id: 'bb-1',
    name: 'Caffè Latte',
    category: 'Coffee',
    price: 4.5,
    currency: 'USD',
    currencySymbol: '$',
    description: 'Smooth espresso with velvety steamed milk and a signature latte art rosetta on top.',
    imageType: 'latte-cup',
    imageUrl: CAFE_IMAGES.beanAndBloom.caffeLatte,
    ingredients: ['Specialty Espresso', 'Whole or Oat Milk'],
  },
  {
    id: 'bb-2',
    name: 'Chocolate Croissant',
    category: 'Bakery',
    price: 3.9,
    currency: 'USD',
    currencySymbol: '$',
    description: 'Buttery French laminated pastry baked fresh daily with twin batons of rich Belgian dark chocolate.',
    imageType: 'croissant',
    imageUrl: CAFE_IMAGES.beanAndBloom.chocolateCroissant,
    ingredients: ['Normandy Butter', 'Belgian Chocolate', 'Organic Flour'],
  },
  {
    id: 'bb-3',
    name: 'Iced Coffee',
    category: 'Chilled',
    price: 3.5,
    currency: 'USD',
    currencySymbol: '$',
    description: 'Chilled, smooth and refreshing drip coffee brewed over crystal clear ice with a hint of vanilla.',
    imageType: 'iced-coffee',
    imageUrl: CAFE_IMAGES.beanAndBloom.icedCoffee,
    ingredients: ['Cold Drip Coffee', 'Vanilla Essence', 'Spring Water'],
  },
  {
    id: 'bb-4',
    name: 'Blueberry Cheesecake',
    category: 'Bakery & Dessert',
    price: 4.9,
    currency: 'USD',
    currencySymbol: '$',
    description: 'Creamy, fresh and irresistible New York style cheesecake crowned with wild mountain blueberry compote.',
    imageType: 'berry-cake',
    imageUrl: CAFE_IMAGES.beanAndBloom.blueberryCheesecake,
    ingredients: ['Cultured Cream Cheese', 'Graham Crust', 'Wild Blueberries'],
  },
];

export const BeanAndBloom: React.FC<BeanAndBloomProps> = ({ onQuickView }) => {
  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#222B24] font-jakarta selection:bg-[#C86D51] selection:text-white pt-15">
      {/* Discreet Agency Design Attribution */}
      <div className="bg-[#EFECE5] border-b border-[#E0D9CB] px-6 py-1.5 text-center">
        <span className="text-[11px] tracking-wider text-[#6A786C] font-mono">
          Website concept by <span className="text-cyan-600 font-bold">OBVERRA DIGITAL</span> · Botanical Bakery & Coffee
        </span>
      </div>

      {/* Café Header */}
      <nav className="border-b border-[#EBE6DC] bg-[#FBF9F4]/95 sticky top-15 z-30 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#1E382B] text-[#FBF9F4] flex items-center justify-center font-bold text-sm shadow-sm">
              ☕
            </div>
            <div>
              <span className="font-fraunces text-xl font-bold tracking-tight text-[#1E382B] block">
                Bean & Bloom
              </span>
              <span className="text-[9px] tracking-widest text-[#C86D51] font-semibold block uppercase">
                COFFEE • BAKERY • GOOD VIBES
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-7 text-xs font-medium text-[#465449]">
            <a href="#bb-home" className="text-[#1E382B] font-bold hover:text-[#C86D51] transition-colors">
              Home
            </a>
            <a href="#bb-menu" className="hover:text-[#C86D51] transition-colors">
              Menu
            </a>
            <a href="#bb-about" className="hover:text-[#C86D51] transition-colors">
              About
            </a>
            <a href="#bb-visit" className="hover:text-[#C86D51] transition-colors">
              Visit & Bakery Hours
            </a>
            <a href="#bb-footer" className="hover:text-[#C86D51] transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#bb-visit"
              className="px-4 py-2 rounded-full bg-[#1E382B] hover:bg-[#2A4C3B] text-white text-xs font-semibold tracking-wide transition-colors"
            >
              Visit Bakery
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="bb-home" className="py-12 md:py-18 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C86D51]">
              <div className="w-6 h-0.5 bg-[#C86D51]" />
              <span>PREMIUM COFFEE & FRESH BITES</span>
            </div>

            <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E382B] leading-[1.12]">
              Good Coffee <br />
              <span className="text-[#C86D51] italic font-normal">Better Days</span>
            </h1>

            <p className="text-[#59665B] text-sm sm:text-base max-w-md leading-relaxed">
              Freshly brewed coffee, handcrafted treats and a cozy space to slow down.
            </p>

            <div className="pt-2">
              <a
                href="#bb-menu"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C86D51] hover:bg-[#B55B40] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md shadow-[#C86D51]/20"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Hero Image + Handwritten Note with Real Photography */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-[#EBE6DC] shadow-xl relative group">
              <img
                src={CAFE_IMAGES.beanAndBloom.hero}
                alt="Bean & Bloom artisan coffee and bakery atmosphere"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Handwritten Note Overlay (From Reference 03 blueprint) */}
              <div className="absolute top-4 right-5 rotate-3 bg-[#FFFDF9]/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-[#EAE3D5] shadow-lg">
                <span className="font-caveat text-xl sm:text-2xl text-[#1E382B] font-bold">
                  Coffee makes everything better ♡
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Circles */}
        <div className="mt-14 pt-10 border-t border-[#EAE4D7] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#EAF0EB] text-[#1E382B] flex items-center justify-center">
              <Leaf className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-[#1E382B]">Premium Beans</h4>
            <p className="text-[11px] text-[#69786C] max-w-[150px]">Sourced from the best coffee farms.</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#FCEEEA] text-[#C86D51] flex items-center justify-center">
              <Coffee className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-[#1E382B]">Freshly Brewed</h4>
            <p className="text-[11px] text-[#69786C] max-w-[150px]">Rich flavor, every time.</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#FFF5E6] text-amber-700 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-[#1E382B]">Homemade Treats</h4>
            <p className="text-[11px] text-[#69786C] max-w-[150px]">Baked with love.</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#EBF3FB] text-sky-800 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-[#1E382B]">Cozy Ambience</h4>
            <p className="text-[11px] text-[#69786C] max-w-[150px]">Perfect for work or relax.</p>
          </div>
        </div>
      </section>

      {/* Featured Menu: "Our Special Picks" with Real Photography */}
      <section id="bb-menu" className="py-16 bg-[#F4EFE6] border-y border-[#E8E0D2]">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#C86D51] font-bold block mb-1">
                FEATURED MENU
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#1E382B]">
                Our Special Picks
              </h2>
            </div>
            <div className="font-caveat text-2xl text-[#C86D51] font-bold">
              Made with passion ♡
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIAL_PICKS.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl bg-[#FBF9F4] border border-[#E8E2D6] p-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Artwork */}
                <div
                  onClick={() => onQuickView(item)}
                  className="aspect-square rounded-2xl overflow-hidden bg-white border border-[#EAE4D7] mb-3.5 cursor-pointer relative"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] bg-white/90 text-stone-800 opacity-0 group-hover:opacity-100 transition-opacity">
                    View
                  </span>
                </div>

                <div className="space-y-1 flex-1">
                  <h3
                    onClick={() => onQuickView(item)}
                    className="font-fraunces text-lg font-bold text-[#1E382B] hover:text-[#C86D51] cursor-pointer transition-colors"
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#6A786C] line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* In-Bakery Price and Tasting Notes */}
                <div className="mt-4 pt-3 border-t border-[#ECE5D9] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#6A786C] block">
                      In-Bakery
                    </span>
                    <span className="text-base font-bold font-mono text-[#1E382B]">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => onQuickView(item)}
                    className="px-3 py-1.5 rounded-full bg-[#1E382B] hover:bg-[#2A4C3B] text-white text-xs font-medium tracking-wide transition-colors"
                    title={`View tasting notes for ${item.name}`}
                  >
                    Tasting Notes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Split Section */}
      <section id="bb-about" className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual: Real photography with handwritten script */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-[#E6DECE] shadow-xl relative group">
              <img
                src={CAFE_IMAGES.beanAndBloom.storyLatte}
                alt="Bean & Bloom comforting freshly made latte"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-[#1E382B]/95 text-white font-caveat text-xl px-4 py-1.5 rounded-2xl shadow-md">
                Good Food Good Mood ♡
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C86D51] mb-1">
                <div className="w-6 h-0.5 bg-[#C86D51]" />
                <span>OUR STORY</span>
              </div>
              <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#1E382B]">
                More Than Just Coffee
              </h2>
            </div>

            <p className="text-[#59665B] text-sm leading-relaxed">
              At Bean & Bloom, we believe coffee brings people together. We serve more than just drinks — we serve moments. From rich brews to fresh bakes, everything here is made with love, quality and a passion for good food.
            </p>

            <a
              href="#bb-menu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E382B] hover:bg-[#2C4E3D] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Right 3 Botanical Feature Bullets */}
            <div className="pt-4 border-t border-[#EAE3D5] space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EAF0EB] text-[#1E382B] flex items-center justify-center shrink-0">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#1E382B]">Freshly Brewed Every Day</h5>
                  <p className="text-[11px] text-[#6A786C]">Signature espresso roasts crafted every morning.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EAF0EB] text-[#1E382B] flex items-center justify-center shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#1E382B]">Locally Sourced Ingredients</h5>
                  <p className="text-[11px] text-[#6A786C]">Organic dairy and locally harvested flour.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EAF0EB] text-[#1E382B] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#1E382B]">A Place for Everyone</h5>
                  <p className="text-[11px] text-[#6A786C]">Warm seating for reading, catching up and relaxed focus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us — Physical Botanical Greenhouse Bakery & Hours */}
      <section id="bb-visit" className="py-20 bg-[#F4EFE6] border-y border-[#E8E0D2]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[11px] uppercase tracking-widest text-[#C86D51] font-bold block">
              COME VISIT OUR GREENHOUSE
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#1E382B]">
              Fresh bakes & botanical calm.
            </h2>
            <p className="text-xs sm:text-sm text-[#59665B] leading-relaxed">
              Nestled inside a restored glasshouse garden, Bean & Bloom offers indoor sunlit seating alongside flowering jasmine and our morning pastry deck.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#FBF9F4] border border-[#E6DECE] space-y-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#EAF0EB] text-[#1E382B] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-fraunces text-xl font-bold text-[#1E382B]">Our Location</h3>
              <p className="text-xs text-[#59665B] leading-relaxed">
                42 Greenhouse Lane, Floral Quarter<br />
                Opposite Botanical Conservatory
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Botanical+Garden+Bakery"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C86D51] hover:underline font-bold"
                >
                  <span>Get Directions on Map</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#FBF9F4] border border-[#E6DECE] space-y-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#FCEEEA] text-[#C86D51] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-fraunces text-xl font-bold text-[#1E382B]">Bakery Hours</h3>
              <div className="space-y-1.5 text-xs text-[#59665B]">
                <div className="flex justify-between border-b border-[#ECE5D9] pb-1">
                  <span>Monday – Saturday</span>
                  <span className="font-mono font-bold text-[#1E382B]">07:00 – 18:00</span>
                </div>
                <div className="flex justify-between border-b border-[#ECE5D9] pb-1">
                  <span>Sunday</span>
                  <span className="font-mono font-bold text-[#1E382B]">08:00 – 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Warm Pastry Tray:</span>
                  <span className="font-bold text-[#C86D51]">Fresh at 07:15 AM</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#FBF9F4] border border-[#E6DECE] space-y-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF5E6] text-amber-700 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-fraunces text-xl font-bold text-[#1E382B]">In-Store Amenities</h3>
              <ul className="space-y-1.5 text-xs text-[#59665B]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E382B]" />
                  <span>Glasshouse Indoor & Garden Outdoor Patio</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E382B]" />
                  <span>Fresh Loaves & Pastry Display Counter</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E382B]" />
                  <span>Pet-Friendly Shaded Veranda</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E382B]" />
                  <span>Free High-Speed Wi-Fi for Reading</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Green Footer */}
      <footer id="bb-footer" className="py-12 bg-[#1E382B] text-[#DCE6DE]">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#2C4E3D] pb-8">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white text-[#1E382B] flex items-center justify-center font-bold text-sm">
                ☕
              </div>
              <span className="font-fraunces text-2xl font-bold text-white">
                Bean & Bloom
              </span>
            </div>

            <div className="flex items-center gap-6 text-xs text-stone-300">
              <a href="#bb-home" className="hover:text-white">Home</a>
              <a href="#bb-menu" className="hover:text-white">Menu</a>
              <a href="#bb-about" className="hover:text-white">About</a>
              <a href="#bb-visit" className="hover:text-white">Visit & Hours</a>
              <a href="#bb-footer" className="hover:text-white">Contact</a>
            </div>

            <div className="flex items-center gap-4 text-stone-300 text-xs">
              <span className="hover:text-white cursor-pointer">Instagram</span>
              <span className="hover:text-white cursor-pointer">Facebook</span>
              <span className="hover:text-white cursor-pointer">Pinterest</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
            <div>© 2026 Bean & Bloom. All rights reserved.</div>
            <div className="text-[11px] font-mono tracking-widest text-[#E2AB7E]">
              GOOD COFFEE • GOOD FOOD • GOOD VIBES · <span className="text-cyan-400">Client showcase by OBVERRA DIGITAL</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
