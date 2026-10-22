import React, { useState } from 'react';
import {
  ArrowRight,
  Play,
  Star,
  Plus,
  Compass,
  Coffee,
  Heart,
  Home,
  Check,
  Calendar,
  X,
  Globe,
  Lock,
} from 'lucide-react';
import { ProductItem } from '../../types/cafe';
import { CAFE_IMAGES } from '../../data/cafeImages';

interface HarthCoffeeProps {
  onQuickView: (product: ProductItem) => void;
}

const SEASONAL_FAVOURITES: ProductItem[] = [
  {
    id: 'harth-1',
    name: 'Classic Latte',
    category: 'Coffee',
    subtitle: 'Rich. Smooth. Timeless.',
    price: 4.5,
    currency: 'USD',
    currencySymbol: '$',
    description: 'Double espresso blended with perfectly textured microfoam milk, creating a velvety mouthfeel.',
    imageType: 'latte-cup',
    imageUrl: CAFE_IMAGES.harth.classicLatte,
    ingredients: ['Ethiopian Yirgacheffe Espresso', 'Oat or Whole Milk'],
    roast: 'Light-Medium',
  },
  {
    id: 'harth-2',
    name: 'Iced Vanilla',
    category: 'Cold Brew',
    subtitle: 'Cool. Creamy. Refreshing.',
    price: 5.0,
    currency: 'USD',
    currencySymbol: '$',
    description: '18-hour cold brew steeped slowly, mixed with Madagascar Bourbon vanilla bean and cold milk.',
    imageType: 'iced-coffee',
    imageUrl: CAFE_IMAGES.harth.icedVanilla,
    ingredients: ['18h Cold Brew', 'Madagascar Vanilla Bean', 'Cold Milk'],
    roast: 'Medium Roast',
  },
  {
    id: 'harth-3',
    name: 'Avocado Toast',
    category: 'All Day',
    subtitle: 'Fresh. Wholesome. Delicious.',
    price: 8.5,
    currency: 'USD',
    currencySymbol: '$',
    description: 'Artisanal sourdough toast topped with smashed Hass avocado, chili flakes, sea salt and microgreens.',
    imageType: 'croissant',
    imageUrl: CAFE_IMAGES.harth.avocadoToast,
    ingredients: ['Artisan Sourdough', 'Hass Avocado', 'Chili Flakes', 'Microgreens'],
  },
  {
    id: 'harth-4',
    name: 'Almond Croissant',
    category: 'Bakery',
    subtitle: 'Buttery. Flaky. Irresistible.',
    price: 4.9,
    currency: 'USD',
    currencySymbol: '$',
    description: 'Twice-baked butter croissant loaded with almond frangipane cream and toasted sliced almonds.',
    imageType: 'croissant',
    imageUrl: CAFE_IMAGES.harth.almondCroissant,
    ingredients: ['French Butter', 'Almond Frangipane', 'Powdered Sugar'],
  },
];

export const HarthCoffee: React.FC<HarthCoffeeProps> = ({ onQuickView }) => {
  const [tableModalOpen, setTableModalOpen] = useState(false);
  const [reservationConfirmed, setReservationConfirmed] = useState(false);
  const [reservationForm, setReservationForm] = useState({
    name: '',
    guests: '2 Guests',
    date: 'Today, 4:00 PM',
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setReservationConfirmed(true);
    setTimeout(() => {
      setReservationConfirmed(false);
      setTableModalOpen(false);
    }, 2500);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setTimeout(() => setNewsletterSuccess(false), 3500);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F3EE] text-[#1A1715] font-dmsans selection:bg-[#8D7B70] selection:text-white pt-15">
      {/* Agency Design Credit Bar */}
      <div className="bg-[#EFE9DF] border-b border-[#E2DAD0] px-6 py-1.5 text-center">
        <span className="text-[11px] tracking-wider text-[#71655D] font-mono">
          Website concept by <span className="text-cyan-600 font-bold">OBVERRA DIGITAL</span> · Architectural Specialty Coffee
        </span>
      </div>

      {/* Safari / Browser Mockup Bar (Exact aesthetic from Reference 02) */}
      <div className="max-w-6xl mx-auto px-6 pt-4 hidden sm:block">
        <div className="bg-[#ECE5DB] border border-[#DDD4C7] rounded-t-2xl px-4 py-2 flex items-center justify-between text-xs text-[#71655D]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E06C75]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5C07B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#98C379]" />
          </div>
          <div className="flex items-center gap-2 bg-[#F7F3EE] px-4 py-1 rounded-full border border-[#DDD4C7] font-mono text-[11px] text-[#4E443F]">
            <Lock className="w-3 h-3 text-[#8D7B70]" />
            <span>harthcoffee.co</span>
          </div>
          <div className="w-10" />
        </div>
      </div>

      {/* Editorial Navigation */}
      <div className="max-w-6xl mx-auto sm:px-6">
        <nav className="border-b border-[#E8E2D9] bg-[#F7F3EE]/95 sticky top-15 z-30 backdrop-blur-md sm:rounded-b-none border-x-0 sm:border-x border-[#DDD4C7]">
          <div className="px-6 h-18 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-cormorant text-2xl font-bold tracking-widest text-[#1A1715]">
                HARTH
              </span>
              <span className="text-[10px] tracking-widest text-[#8D7B70] uppercase font-mono">
                COFFEE
              </span>
            </div>

            <div className="hidden md:flex items-center gap-7 text-xs tracking-wider text-[#4E443F]">
              <a href="#harth-home" className="hover:text-black font-medium transition-colors">
                Home
              </a>
              <a href="#harth-menu" className="hover:text-black font-medium transition-colors">
                Menu
              </a>
              <a href="#harth-story" className="hover:text-black font-medium transition-colors">
                Our Story
              </a>
              <a href="#harth-visit" className="hover:text-black font-medium transition-colors">
                Locations & Hours
              </a>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setTableModalOpen(true)}
                className="px-5 py-2.5 rounded-full bg-[#2C1F1A] text-[#F7F3EE] hover:bg-[#433028] text-xs font-medium tracking-wide transition-colors shadow-sm"
              >
                Reserve a Table
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto sm:px-6">
        <div className="bg-[#F7F3EE] sm:border-x border-[#DDD4C7] px-6 py-10 sm:py-14 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-5">
              <div className="text-[11px] tracking-widest uppercase text-[#8D7B70] font-mono">
                SPECIALTY COFFEE • A WARMER TODAY
              </div>

              <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1A1715] leading-[1.05]">
                More than just <br />
                <span className="italic font-normal">coffee.</span>
              </h1>

              <p className="text-[#5E534C] text-sm sm:text-base max-w-lg leading-relaxed">
                Thoughtfully sourced beans, seasonal flavours and a cozy space to slow down.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#harth-menu"
                  className="px-6 py-3.5 rounded-full bg-[#2C1F1A] hover:bg-[#433028] text-[#F7F3EE] text-xs font-semibold tracking-wider flex items-center gap-2 transition-all shadow-md"
                >
                  <span>Explore Our Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#harth-story"
                  className="px-5 py-3.5 rounded-full border border-[#D5CCC0] hover:border-[#8D7B70] text-[#2C1F1A] text-xs font-medium tracking-wider flex items-center gap-2 transition-colors"
                >
                  <span>Watch Our Story</span>
                  <Play className="w-3.5 h-3.5 fill-current" />
                </a>
              </div>
            </div>

            {/* Social Proof Strip */}
            <div className="lg:col-span-4 flex items-center justify-between sm:justify-start sm:gap-8 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#E5DDD2]">
              <div>
                <div className="font-cormorant text-2xl font-bold text-[#1A1715]">10K+</div>
                <div className="text-[11px] text-[#8D7B70] tracking-wide">Happy Customers</div>
              </div>
              <div>
                <div className="font-cormorant text-2xl font-bold text-[#1A1715] flex items-center gap-1">
                  4.8 <Star className="w-4 h-4 fill-amber-500 text-amber-500 inline" />
                </div>
                <div className="text-[11px] text-[#8D7B70] tracking-wide">Average Rating</div>
              </div>
              <div>
                <div className="font-cormorant text-2xl font-bold text-[#1A1715]">3</div>
                <div className="text-[11px] text-[#8D7B70] tracking-wide">Locations</div>
              </div>
            </div>
          </div>

          {/* Large Architectural Café Interior Hero Image with Real Photography */}
          <div className="aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden border border-[#E8E2D9] shadow-xl relative group">
            <img
              src={CAFE_IMAGES.harth.interior}
              alt="Harth Specialty Coffee sunlit architectural interior"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 right-6 text-right text-white drop-shadow-md">
              <span className="font-serif italic text-lg sm:text-xl block">Good Coffee</span>
              <span className="font-sans font-bold tracking-widest text-xs uppercase opacity-90">Brighter Days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Seasonal Favourites Section */}
      <section id="harth-menu" className="py-18 bg-[#EFE9DF] border-y border-[#E2DAD0]">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[11px] tracking-widest uppercase text-[#8D7B70] font-mono">
                OUR MENU
              </span>
              <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#1A1715]">
                Seasonal favourites.
              </h2>
            </div>
            <div className="max-w-md space-y-3">
              <p className="text-xs text-[#5E534C] leading-relaxed">
                Crafted with care, using the finest ingredients. From bold classics to unique seasonal creations, there's something for every coffee lover.
              </p>
              <div>
                <a
                  href="#harth-menu"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#2C1F1A] hover:underline"
                >
                  <span>View Full Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Cards Grid with Real Photography */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SEASONAL_FAVOURITES.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#F7F3EE] border border-[#E5DDD2] hover:border-[#8D7B70] p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl"
              >
                {/* Visual Area */}
                <div
                  onClick={() => onQuickView(item)}
                  className="aspect-square rounded-xl overflow-hidden bg-[#FAF6F0] border border-[#EAE3D8] mb-4 cursor-pointer relative"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] bg-white/90 backdrop-blur-sm text-stone-800 opacity-0 group-hover:opacity-100 transition-opacity">
                    View
                  </span>
                </div>

                {/* Text Metadata */}
                <div className="space-y-1.5 flex-1">
                  <div className="text-[10px] tracking-wider uppercase text-[#8D7B70] font-mono">
                    {item.category}
                  </div>
                  <h3
                    onClick={() => onQuickView(item)}
                    className="font-cormorant text-xl font-bold text-[#1A1715] group-hover:text-[#8D7B70] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#71655D] italic">
                    {item.subtitle}
                  </p>
                </div>

                {/* Price and In-Café Tasting Notes */}
                <div className="mt-4 pt-3 border-t border-[#E8E2D9] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#8D7B70] uppercase tracking-wider block">
                      In-Café
                    </span>
                    <span className="text-base font-bold font-mono text-[#1A1715]">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => onQuickView(item)}
                    className="px-3 py-1.5 rounded-full bg-[#2C1F1A] hover:bg-[#433028] text-[#F7F3EE] text-xs font-medium tracking-wide transition-colors"
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

      {/* Our Story Section: "A space for good people" */}
      <section id="harth-story" className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] tracking-widest uppercase text-[#8D7B70] font-mono">
              OUR STORY
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#1A1715] leading-tight">
              A space <br />
              for good people.
            </h2>

            <p className="text-sm text-[#5E534C] leading-relaxed">
              Harth Coffee started with a simple idea — great coffee brings people together. We're here to create a welcoming space for meaningful conversations, slower days and a brighter tomorrow.
            </p>

            <a
              href="#harth-menu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2C1F1A] hover:bg-[#433028] text-[#F7F3EE] text-xs font-semibold tracking-wider transition-colors"
            >
              <span>Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Kinfolk Table Photography & Quote */}
          <div className="lg:col-span-7 space-y-4">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-[#E5DDD2] shadow-xl relative group">
              <img
                src={CAFE_IMAGES.harth.kinfolkTable}
                alt="Harth Coffee Kinfolk Table reading and coffee moment"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="p-5 rounded-xl bg-[#EFE9DF] border border-[#E2DAD0] flex items-center justify-between text-xs text-[#5E534C]">
              <div>
                <span className="font-semibold text-[#1A1715] uppercase tracking-wider block">
                  GOOD PEOPLE GOOD COFFEE
                </span>
                <span className="text-[11px] italic text-[#8D7B70]">
                  Always A Warmer Tomorrow.
                </span>
              </div>
              <button
                onClick={() => setTableModalOpen(true)}
                className="px-4 py-2 rounded-full border border-[#2C1F1A] text-[#2C1F1A] hover:bg-[#2C1F1A] hover:text-white transition-colors text-xs font-medium"
              >
                Visit Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Strip (4 items) */}
      <section className="py-10 bg-[#FAF6F0] border-y border-[#E8E2D9]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#EFE9DF] flex items-center justify-center text-[#2C1F1A]">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-[#1A1715]">Sustainably Sourced</h4>
              <p className="text-[11px] text-[#71655D]">Better beans for a brighter planet.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#EFE9DF] flex items-center justify-center text-[#2C1F1A]">
              <Coffee className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-[#1A1715]">Locally Roasted</h4>
              <p className="text-[11px] text-[#71655D]">Supporting local communities.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#EFE9DF] flex items-center justify-center text-[#2C1F1A]">
              <Home className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-[#1A1715]">Cozy Spaces</h4>
              <p className="text-[11px] text-[#71655D]">Designed for connection.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#EFE9DF] flex items-center justify-center text-[#2C1F1A]">
              <Heart className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-[#1A1715]">Specialty Drinks</h4>
              <p className="text-[11px] text-[#71655D]">Seasonal. Creative. Delicious.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations & Opening Hours Section */}
      <section id="harth-visit" className="py-20 bg-[#F4EFE6] border-y border-[#DDD4C7]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[11px] tracking-widest uppercase text-[#8D7B70] font-mono">
              VISIT OUR CAFÉ HOUSES
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#1A1715]">
              Three spaces to slow down.
            </h2>
            <p className="text-xs sm:text-sm text-[#5E534C] leading-relaxed">
              Every Harth Coffee house is shaped around natural daylight, Danish architectural timber, and serene acoustic calm. Walk in anytime or reserve your favorite corner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F7F3EE] border border-[#DDD4C7] space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#8D7B70] block">
                HOUSE 01 • FLAGSHIP
              </span>
              <h3 className="font-cormorant text-2xl font-bold text-[#1A1715]">
                North End Roastery
              </h3>
              <p className="text-xs text-[#5E534C] leading-relaxed">
                248 Elm Street, North End Historic Quarter<br />
                Featuring our primary cupping bar and open roasting studio.
              </p>
              <div className="pt-2 text-xs font-mono text-[#8D7B70] space-y-1">
                <div className="flex justify-between">
                  <span>Mon – Fri:</span>
                  <span className="font-semibold text-[#1A1715]">07:30 – 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat – Sun:</span>
                  <span className="font-semibold text-[#1A1715]">08:00 – 18:00</span>
                </div>
              </div>
              <div className="pt-3 border-t border-[#E8E2D9] flex items-center justify-between">
                <a
                  href="https://maps.google.com/?q=Harth+Coffee+Roastery"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#2C1F1A] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Directions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setTableModalOpen(true)}
                  className="text-xs px-3 py-1.5 rounded-full bg-[#2C1F1A] text-white hover:bg-[#433028] transition-colors"
                >
                  Reserve Table
                </button>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F3EE] border border-[#DDD4C7] space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#8D7B70] block">
                HOUSE 02 • STUDIO
              </span>
              <h3 className="font-cormorant text-2xl font-bold text-[#1A1715]">
                Arts Quarter Sanctuary
              </h3>
              <p className="text-xs text-[#5E534C] leading-relaxed">
                12 Gallery Mews, Arts & Design Precinct<br />
                High ceilings, garden reading tables and slow-brew filter bar.
              </p>
              <div className="pt-2 text-xs font-mono text-[#8D7B70] space-y-1">
                <div className="flex justify-between">
                  <span>Mon – Fri:</span>
                  <span className="font-semibold text-[#1A1715]">08:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat – Sun:</span>
                  <span className="font-semibold text-[#1A1715]">09:00 – 19:00</span>
                </div>
              </div>
              <div className="pt-3 border-t border-[#E8E2D9] flex items-center justify-between">
                <a
                  href="https://maps.google.com/?q=Harth+Coffee+Arts+Quarter"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#2C1F1A] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Directions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setTableModalOpen(true)}
                  className="text-xs px-3 py-1.5 rounded-full bg-[#2C1F1A] text-white hover:bg-[#433028] transition-colors"
                >
                  Reserve Table
                </button>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F3EE] border border-[#DDD4C7] space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#8D7B70] block">
                HOUSE 03 • PROMENADE
              </span>
              <h3 className="font-cormorant text-2xl font-bold text-[#1A1715]">
                Sunlit Promenade
              </h3>
              <p className="text-xs text-[#5E534C] leading-relaxed">
                89 Waterfront Walkway, Harbor Side<br />
                Outdoor terrace with ocean breeze and daily fresh artisan bakes.
              </p>
              <div className="pt-2 text-xs font-mono text-[#8D7B70] space-y-1">
                <div className="flex justify-between">
                  <span>Mon – Sun:</span>
                  <span className="font-semibold text-[#1A1715]">07:00 – 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Espresso Bar:</span>
                  <span className="font-semibold text-[#8D7B70]">Open All Day</span>
                </div>
              </div>
              <div className="pt-3 border-t border-[#E8E2D9] flex items-center justify-between">
                <a
                  href="https://maps.google.com/?q=Harth+Coffee+Promenade"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#2C1F1A] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Directions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setTableModalOpen(true)}
                  className="text-xs px-3 py-1.5 rounded-full bg-[#2C1F1A] text-white hover:bg-[#433028] transition-colors"
                >
                  Reserve Table
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Footer */}
      <footer className="py-14 bg-[#1A1715] text-[#D8CECA]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between border-b border-stone-800 pb-10">
            <div className="md:col-span-4">
              <span className="font-cormorant text-2xl font-bold tracking-widest text-[#F7F3EE]">
                HARTH
              </span>
              <p className="text-[11px] tracking-widest text-[#8D7B70] uppercase font-mono mt-0.5">
                COFFEE ROASTERS
              </p>
            </div>

            <div className="md:col-span-8 flex flex-col sm:flex-row sm:items-center justify-end gap-4">
              <div className="text-xs text-stone-300">
                <span className="block font-medium text-white">Join our newsletter</span>
                <span className="text-[11px] text-stone-400">
                  Be the first to know about new drinks, events and more.
                </span>
              </div>

              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="px-4 py-2.5 rounded-full bg-stone-900 border border-stone-700 text-xs text-white placeholder:text-stone-500 focus:outline-none focus:border-stone-400"
                />
                <button
                  type="submit"
                  className="w-9 h-9 rounded-full bg-white hover:bg-stone-200 text-black flex items-center justify-center transition-colors shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {newsletterSuccess && (
            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Thank you! You've joined the Harth Coffee community newsletter.</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
            <div>© 2026 Harth Coffee. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <span className="hover:text-stone-300 cursor-pointer">Privacy</span>
              <span className="hover:text-stone-300 cursor-pointer">Terms</span>
              <span className="hover:text-stone-300 cursor-pointer">Contact</span>
              <span className="font-mono text-cyan-400 text-[11px]">Concept by OBVERRA DIGITAL</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Table Reservation Modal */}
      {tableModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setTableModalOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-md rounded-2xl bg-[#F7F3EE] text-[#1A1715] p-6 shadow-2xl z-10 border border-[#E2DAD0]">
            <button
              onClick={() => setTableModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-stone-200"
            >
              <X className="w-5 h-5 text-stone-500" />
            </button>

            {reservationConfirmed ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-cormorant text-2xl font-bold">Table Reserved</h3>
                <p className="text-xs text-[#5E534C]">
                  We look forward to welcoming you at Harth Coffee for a cozy moment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReservation} className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#8D7B70]">
                    HARTH SPECIALTY COFFEE
                  </span>
                  <h3 className="font-cormorant text-2xl font-bold">
                    Reserve a Cozy Table
                  </h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-[#4E443F] font-medium mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jordan Miller"
                      value={reservationForm.name}
                      onChange={(e) => setReservationForm({ ...reservationForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD3C7] focus:outline-none focus:border-[#2C1F1A]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#4E443F] font-medium mb-1">Party Size</label>
                      <select
                        value={reservationForm.guests}
                        onChange={(e) => setReservationForm({ ...reservationForm, guests: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#DDD3C7] focus:outline-none focus:border-[#2C1F1A]"
                      >
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>4 Guests</option>
                        <option>6+ Group</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#4E443F] font-medium mb-1">Time Slot</label>
                      <select
                        value={reservationForm.date}
                        onChange={(e) => setReservationForm({ ...reservationForm, date: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#DDD3C7] focus:outline-none focus:border-[#2C1F1A]"
                      >
                        <option>Today, 3:30 PM</option>
                        <option>Today, 5:00 PM</option>
                        <option>Tomorrow, 10:00 AM</option>
                        <option>Tomorrow, 2:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#2C1F1A] hover:bg-[#433028] text-white font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 mt-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Reservation</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
