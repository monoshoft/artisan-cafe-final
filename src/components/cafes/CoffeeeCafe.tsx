import React from 'react';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Heart,
  Coffee,
  Sparkles,
} from 'lucide-react';
import { ProductItem } from '../../types/cafe';
import { CAFE_IMAGES } from '../../data/cafeImages';

interface CoffeeeCafeProps {
  onQuickView: (product: ProductItem) => void;
}

const DESSERT_TRIO: ProductItem[] = [
  {
    id: 'c4-1',
    name: 'Aatis',
    subtitle: 'Pistachio Bliss',
    category: 'Confect',
    price: 6.5,
    currency: 'USD',
    currencySymbol: '$',
    description: 'Layered Sicilian pistachio sponge infused with white chocolate mousse and roasted pistachio crumble.',
    imageType: 'pistachio-cake',
    imageUrl: CAFE_IMAGES.coffeee.aatisPistachio,
    accentColor: '#1B382B',
  },
  {
    id: 'c4-2',
    name: 'Lermi',
    subtitle: 'Chocolate Dream',
    category: 'Confect',
    price: 6.9,
    currency: 'USD',
    currencySymbol: '$',
    description: 'Decadent 70% dark Belgian chocolate mirror glaze cake with hazelnut praline core and sculpted cocoa heart.',
    imageType: 'chocolate-cake',
    imageUrl: CAFE_IMAGES.coffeee.lermiChocolate,
    accentColor: '#9C5828',
  },
  {
    id: 'c4-3',
    name: 'Flitre',
    subtitle: 'Berry Delight',
    category: 'Confect',
    price: 6.8,
    currency: 'USD',
    currencySymbol: '$',
    description: 'Silky mascarpone cheesecake base layered with wild forest blackberries, blueberries and butter biscuit.',
    imageType: 'berry-cake',
    imageUrl: CAFE_IMAGES.coffeee.flitreBerry,
    accentColor: '#B8455A',
  },
];

export const CoffeeeCafe: React.FC<CoffeeeCafeProps> = ({ onQuickView }) => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#221B16] font-jakarta selection:bg-[#1B382B] selection:text-white pt-15">
      {/* Discreet Agency Design Attribution */}
      <div className="bg-[#EFECE5] border-b border-[#E2DAD0] px-6 py-1.5 text-center">
        <span className="text-[11px] tracking-wider text-[#6A786C] font-mono">
          Website concept by <span className="text-cyan-600 font-bold">OBVERRA DIGITAL</span> · Boutique Pâtisserie & Specialty Roast
        </span>
      </div>

      {/* Header */}
      <nav className="border-b border-[#EAE3D8] bg-[#FAF7F2]/95 sticky top-15 z-30 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="font-playfair text-2xl font-bold tracking-tight text-[#1B382B]">
              Coffeeë
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-medium text-stone-600">
            <a href="#c4-home" className="text-[#1B382B] font-semibold border-b-2 border-[#1B382B] pb-0.5">
              Home
            </a>
            <a href="#c4-desserts" className="hover:text-[#1B382B] transition-colors">
              Cosset
            </a>
            <a href="#c4-desserts" className="hover:text-[#1B382B] transition-colors">
              Confect
            </a>
            <a href="#c4-special" className="hover:text-[#1B382B] transition-colors">
              Abouts
            </a>
            <a href="#c4-visit" className="hover:text-[#1B382B] transition-colors">
              Visit & Hours
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#c4-visit"
              className="px-4 py-2 rounded-full bg-[#1B382B] hover:bg-[#284F3E] text-white text-xs font-semibold tracking-wide transition-colors"
            >
              Visit Pâtisserie
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="c4-home" className="py-12 md:py-18 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="font-caveat text-2xl text-[#8E5E3A] font-bold">
              Life Happens, Coffee Helps
            </div>

            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B382B] leading-[1.12]">
              Sweet Moments <br />
              <span className="italic font-normal">Start Here.</span>
            </h1>

            <p className="text-stone-600 text-sm sm:text-base max-w-md leading-relaxed">
              Indulge in handcrafted coffee and delicious treats made to brighten your day and warm your heart.
            </p>

            <div className="pt-2">
              <a
                href="#c4-desserts"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1B382B] hover:bg-[#2A5240] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md"
              >
                <span>Explore More</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Hero Visual: Real Dark Green Ceramic Cup Photo */}
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-[#EAE3D8] shadow-xl relative group">
              <img
                src={CAFE_IMAGES.coffeee.heroCup}
                alt="Coffeeë handcrafted specialty brew"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl bg-white/80 backdrop-blur-md text-xs font-serif font-bold text-[#1B382B]">
                Hand-Pulled Botanical Espresso
              </div>
            </div>
          </div>
        </div>

        {/* 3 Circular Features */}
        <div className="mt-14 pt-10 border-t border-[#EAE3D8] grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/80 border border-[#ECE5DA] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#1B382B]/10 text-[#1B382B] flex items-center justify-center shrink-0 text-base">
              🍃
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1B382B]">Finest Ingredients</h4>
              <p className="text-[11px] text-stone-500">Sourced from the best coffee farms.</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/80 border border-[#ECE5DA] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 text-base">
              ☕
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1B382B]">Perfected Brewed</h4>
              <p className="text-[11px] text-stone-500">Expertly roasted for rich flavor.</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/80 border border-[#ECE5DA] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-rose-500/10 text-rose-700 flex items-center justify-center shrink-0 text-base">
              ♡
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1B382B]">Made with Love</h4>
              <p className="text-[11px] text-stone-500">Crafted with passion for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Dessert Cards Section with Real High-Res Pastry Photos */}
      <section id="c4-desserts" className="py-16 bg-[#F4EFE6] border-y border-[#E8E0D2]">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="text-center space-y-2">
            <span className="font-caveat text-2xl text-[#8E5E3A] font-bold">
              Artisanal Pâtisserie
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#1B382B]">
              Handcrafted Confections
            </h2>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Aatis Pistachio Bliss */}
            <div className="rounded-3xl bg-[#EAF2E8] border border-[#D5E5D1] p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div>
                <div className="text-center pb-3">
                  <h3 className="font-playfair text-2xl font-bold text-[#1B382B]">
                    Aatis
                  </h3>
                  <span className="font-caveat text-lg text-[#527749]">
                    Pistachio Bliss
                  </span>
                </div>

                <div
                  onClick={() => onQuickView(DESSERT_TRIO[0])}
                  className="aspect-square rounded-2xl overflow-hidden bg-white/80 border border-[#DCEAD7] my-3 cursor-pointer shadow-sm relative"
                >
                  <img
                    src={DESSERT_TRIO[0].imageUrl}
                    alt="Aatis Pistachio Bliss gourmet cake"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              <div className="pt-4 border-t border-[#D5E5D1] flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-[#3E5C36]">Rich. Nutty. Irresistible.</span>
                  <div className="text-sm font-bold font-mono text-[#1B382B] mt-0.5">$6.50</div>
                </div>
                <button
                  onClick={() => onQuickView(DESSERT_TRIO[0])}
                  className="px-3.5 py-1.5 rounded-full bg-[#1B382B] hover:bg-[#294F3D] text-white text-xs font-semibold tracking-wide transition-colors shadow-sm"
                  title="View dessert notes"
                >
                  Tasting Notes
                </button>
              </div>
            </div>

            {/* Card 2: Lermi Chocolate Dream */}
            <div className="rounded-3xl bg-[#F6EFE6] border border-[#E8DDCE] p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div>
                <div className="text-center pb-3">
                  <h3 className="font-playfair text-2xl font-bold text-[#3B2215]">
                    Lermi
                  </h3>
                  <span className="font-caveat text-lg text-[#8C552D]">
                    Chocolate Dream
                  </span>
                </div>

                <div
                  onClick={() => onQuickView(DESSERT_TRIO[1])}
                  className="aspect-square rounded-2xl overflow-hidden bg-white/80 border border-[#ECE0D0] my-3 cursor-pointer shadow-sm relative"
                >
                  <img
                    src={DESSERT_TRIO[1].imageUrl}
                    alt="Lermi Chocolate Dream gourmet cake"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8DDCE] flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-[#7A4B29]">Decadent. Smooth. Heavenly.</span>
                  <div className="text-sm font-bold font-mono text-[#3B2215] mt-0.5">$6.90</div>
                </div>
                <button
                  onClick={() => onQuickView(DESSERT_TRIO[1])}
                  className="px-3.5 py-1.5 rounded-full bg-[#8C552D] hover:bg-[#734320] text-white text-xs font-semibold tracking-wide transition-colors shadow-sm"
                  title="View dessert notes"
                >
                  Tasting Notes
                </button>
              </div>
            </div>

            {/* Card 3: Flitre Berry Delight */}
            <div className="rounded-3xl bg-[#FBECEE] border border-[#F3D7DC] p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div>
                <div className="text-center pb-3">
                  <h3 className="font-playfair text-2xl font-bold text-[#4B1E29]">
                    Flitre
                  </h3>
                  <span className="font-caveat text-lg text-[#A2485E]">
                    Berry Delight
                  </span>
                </div>

                <div
                  onClick={() => onQuickView(DESSERT_TRIO[2])}
                  className="aspect-square rounded-2xl overflow-hidden bg-white/80 border border-[#F5DCE1] my-3 cursor-pointer shadow-sm relative"
                >
                  <img
                    src={DESSERT_TRIO[2].imageUrl}
                    alt="Flitre Berry Delight gourmet cake"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              <div className="pt-4 border-t border-[#F3D7DC] flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-[#8F3C50]">Fruity. Fresh. Delightful.</span>
                  <div className="text-sm font-bold font-mono text-[#4B1E29] mt-0.5">$6.80</div>
                </div>
                <button
                  onClick={() => onQuickView(DESSERT_TRIO[2])}
                  className="px-3.5 py-1.5 rounded-full bg-[#B8455A] hover:bg-[#9E364A] text-white text-xs font-semibold tracking-wide transition-colors shadow-sm"
                  title="View dessert notes"
                >
                  Tasting Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Müil Coffee Split Section */}
      <section id="c4-special" className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Rustic Cup on Wood Photo */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-[#EAE3D8] shadow-xl relative group">
              <img
                src={CAFE_IMAGES.coffeee.muilSpecial}
                alt="Müil Coffee artisanal handcrafted preparation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right: Müil Coffee Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="font-caveat text-2xl text-[#8E5E3A] font-bold">
                Our Special
              </div>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#1B382B]">
                Müil Coffee
              </h2>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              A perfect blend of bold flavors and smooth taste, crafted to give you a moment of pure bliss.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <CheckCircle className="w-4 h-4 text-[#1B382B]" />
                <span>100% Arabica Beans</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <CheckCircle className="w-4 h-4 text-[#1B382B]" />
                <span>Medium Dark Roast</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <CheckCircle className="w-4 h-4 text-[#1B382B]" />
                <span>Rich Aroma & Smooth Finish</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() =>
                  onQuickView({
                    id: 'muil-1',
                    name: 'Müil Coffee Special',
                    category: 'Signature',
                    price: 5.5,
                    currency: 'USD',
                    currencySymbol: '$',
                    description: 'Our house specialty single-origin medium dark roast, extracted slowly to unlock stonefruit notes.',
                    imageType: 'latte-cup',
                    imageUrl: CAFE_IMAGES.coffeee.muilSpecial,
                    ingredients: ['Single-Origin Arabica', 'Velvet Foam', 'Turbinado Sugar Crust'],
                  })
                }
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1B382B] hover:bg-[#294F3D] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-md"
              >
                <span>Tasting Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-right border-l border-stone-300 pl-4">
                <span className="text-[11px] font-mono text-stone-400 uppercase tracking-widest block">
                  In-Café Price
                </span>
                <span className="font-playfair font-bold text-base text-[#1B382B]">$5.50</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offline Hospitality Pillars */}
      <section className="py-10 bg-[#1B382B] text-[#E4EDE7]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Fresh Daily Bakes</h4>
              <p className="text-[11px] text-[#A6C4B2]">Hand-laminated at 5:30 AM</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Artisanal Confections</h4>
              <p className="text-[11px] text-[#A6C4B2]">Mirror glazes & Belgian cocoa</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <Coffee className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Master Roasted</h4>
              <p className="text-[11px] text-[#A6C4B2]">100% single-origin beans</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Courtyard Terrace</h4>
              <p className="text-[11px] text-[#A6C4B2]">Sunlit garden seating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us — Physical Boutique Pâtisserie & Hours */}
      <section id="c4-visit" className="py-20 bg-[#FAF7F2] border-b border-[#E8E0D2]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="font-caveat text-2xl text-[#8E5E3A] font-bold">
              Visit Our Boutique Pâtisserie
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#1B382B]">
              Sweet Moments in Person
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Step into our pastel salon for an afternoon of handcrafted confections, botanical tea pairings, and fresh-pulled espresso in our tranquil courtyard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#EAE3D8] space-y-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#1B382B]/10 text-[#1B382B] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1B382B]">Pâtisserie Address</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                17 Rosewood Court, Pâtisserie Row<br />
                Heritage Arts Quarter
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Heritage+Patisserie+Coffee"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#1B382B] hover:underline font-bold"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#EAE3D8] space-y-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1B382B]">Salon Hours</h3>
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between border-b border-[#ECE5DA] pb-1">
                  <span>Tuesday – Sunday</span>
                  <span className="font-mono font-bold text-[#1B382B]">08:00 – 19:00</span>
                </div>
                <div className="flex justify-between border-b border-[#ECE5DA] pb-1">
                  <span>Monday</span>
                  <span className="text-stone-400 italic">Closed for R&D</span>
                </div>
                <div className="flex justify-between">
                  <span>High Tea Seatings:</span>
                  <span className="font-bold text-[#8E5E3A]">14:00 & 16:30 Daily</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#EAE3D8] space-y-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-700 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1B382B]">In-Store Ambiance</h3>
              <ul className="space-y-1.5 text-xs text-stone-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B382B]" />
                  <span>Sunlit Garden Courtyard Seating</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B382B]" />
                  <span>Glass Display of Daily Fresh Confections</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B382B]" />
                  <span>Curated Tea & Single-Origin Espresso Pairings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Hospitality Footer */}
      <footer className="py-10 bg-[#FAF7F2] border-t border-[#E8E0D2] text-xs text-stone-600">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-playfair text-lg font-bold text-[#1B382B]">Coffeeë</span>
            <span>·</span>
            <span>© 2026 Coffeeë Boutique Pâtisserie. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-stone-500">
            <a href="#c4-home" className="hover:text-[#1B382B]">Home</a>
            <a href="#c4-desserts" className="hover:text-[#1B382B]">Confections</a>
            <a href="#c4-visit" className="hover:text-[#1B382B]">Visit & Hours</a>
          </div>

          <div className="text-stone-500 font-mono text-[11px]">
            Showcase concept by <span className="text-cyan-600 font-semibold">OBVERRA DIGITAL</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
