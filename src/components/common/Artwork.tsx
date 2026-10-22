import React from 'react';

interface ArtworkProps {
  className?: string;
  variant?:
    | 'brewhaven-hero'
    | 'brewhaven-bag'
    | 'harth-interior'
    | 'harth-kinfolk'
    | 'bean-hero'
    | 'croissant'
    | 'iced-coffee'
    | 'latte-cup'
    | 'cheesecake'
    | 'pistachio-cake'
    | 'chocolate-cake'
    | 'berry-cake'
    | 'muil-coffee'
    | 'bodren-hero'
    | 'bodren-barista'
    | 'bodren-cup-cup'
    | 'bodren-cup-latte'
    | 'bodren-cup-mocha';
}

export const Artwork: React.FC<ArtworkProps> = ({ variant = 'latte-cup', className = '' }) => {
  switch (variant) {
    case 'brewhaven-hero':
      return (
        <div className={`relative w-full h-full min-h-[380px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900 via-stone-950 to-black ${className}`}>
          <svg viewBox="0 0 800 600" className="w-full h-full object-cover select-none">
            <defs>
              <radialGradient id="bhGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C88A58" stopOpacity="0.4" />
                <stop offset="60%" stopColor="#8A4A1C" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#0C0A09" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="bhWood" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2A1B14" />
                <stop offset="50%" stopColor="#1A110D" />
                <stop offset="100%" stopColor="#0E0806" />
              </linearGradient>
              <linearGradient id="bhCupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2C241E" />
                <stop offset="40%" stopColor="#1C1613" />
                <stop offset="100%" stopColor="#0D0907" />
              </linearGradient>
              <radialGradient id="bhCrema" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#6E3812" />
                <stop offset="50%" stopColor="#9E5828" />
                <stop offset="100%" stopColor="#4A2209" />
              </radialGradient>
              <filter id="bhBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="14" />
              </filter>
            </defs>

            {/* Ambient Background Warmth */}
            <circle cx="500" cy="280" r="340" fill="url(#bhGlow)" />
            <circle cx="200" cy="450" r="220" fill="url(#bhGlow)" opacity="0.6" />

            {/* Rustic Wooden Counter Slice */}
            <ellipse cx="480" cy="440" rx="360" ry="140" fill="url(#bhWood)" stroke="#3E261C" strokeWidth="2" />
            <ellipse cx="480" cy="442" rx="330" ry="120" fill="none" stroke="#523223" strokeWidth="1.5" opacity="0.4" strokeDasharray="18,12" />

            {/* Scattered Coffee Beans on Table */}
            <g fill="#3D1E11" stroke="#220F08" strokeWidth="1">
              <ellipse cx="290" cy="420" rx="14" ry="9" transform="rotate(-25 290 420)" />
              <path d="M282 420 Q290 416 298 420" stroke="#1A0D07" strokeWidth="2" fill="none" />
              <ellipse cx="325" cy="450" rx="16" ry="10" transform="rotate(40 325 450)" />
              <path d="M317 447 Q325 450 333 453" stroke="#1A0D07" strokeWidth="2" fill="none" />
              <ellipse cx="370" cy="430" rx="13" ry="8" transform="rotate(15 370 430)" />
              <ellipse cx="610" cy="435" rx="15" ry="9" transform="rotate(-35 610 435)" />
              <ellipse cx="645" cy="460" rx="14" ry="9" transform="rotate(20 645 460)" />
              <ellipse cx="580" cy="470" rx="13" ry="8" transform="rotate(70 580 470)" />
              <ellipse cx="240" cy="445" rx="12" ry="7" transform="rotate(-10 240 445)" />
            </g>

            {/* Contact Shadow for Saucer */}
            <ellipse cx="490" cy="380" rx="180" ry="60" fill="#000000" opacity="0.6" filter="url(#bhBlur)" />

            {/* Ceramic Saucer */}
            <ellipse cx="490" cy="360" rx="160" ry="50" fill="url(#bhCupGrad)" stroke="#4A3B30" strokeWidth="1.5" />
            <ellipse cx="490" cy="358" rx="135" ry="38" fill="#140F0D" />

            {/* Ceramic Coffee Cup */}
            <g transform="translate(490, 310)">
              {/* Cup Shadow */}
              <ellipse cx="0" cy="30" rx="90" ry="25" fill="#000" opacity="0.45" filter="url(#bhBlur)" />

              {/* Cup Handle */}
              <path d="M 70 -15 C 130 -15, 130 50, 60 45" fill="none" stroke="url(#bhCupGrad)" strokeWidth="18" strokeLinecap="round" />
              <path d="M 70 -15 C 130 -15, 130 50, 60 45" fill="none" stroke="#5C4536" strokeWidth="3" opacity="0.5" />

              {/* Cup Outer Body */}
              <path d="M -80 -40 C -85 30, -50 55, 0 55 C 50 55, 85 30, 80 -40 Z" fill="url(#bhCupGrad)" stroke="#3E3027" strokeWidth="2" />
              {/* Rim highlight */}
              <ellipse cx="0" cy="-40" rx="80" ry="28" fill="#1C1613" stroke="#C88A58" strokeWidth="1.2" opacity="0.8" />

              {/* Coffee Liquid */}
              <ellipse cx="0" cy="-38" rx="72" ry="24" fill="url(#bhCrema)" />

              {/* Intricate Latte Art Rosetta */}
              <g fill="#F8EADB" opacity="0.95">
                <ellipse cx="0" cy="-44" rx="30" ry="10" />
                <ellipse cx="0" cy="-40" rx="38" ry="11" />
                <ellipse cx="0" cy="-35" rx="42" ry="12" />
                <ellipse cx="0" cy="-30" rx="36" ry="10" />
                <ellipse cx="0" cy="-25" rx="26" ry="8" />
                <ellipse cx="0" cy="-20" rx="14" ry="5" />
                <path d="M 0 -48 L 0 -16" stroke="#4A2209" strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="-5" cy="-45" r="4" fill="#F8EADB" />
                <circle cx="5" cy="-45" r="4" fill="#F8EADB" />
              </g>
            </g>

            {/* Rising Delicate Steam Waves */}
            <g stroke="rgba(255,240,225,0.22)" strokeWidth="6" fill="none" strokeLinecap="round" filter="url(#bhBlur)">
              <path d="M 470 240 Q 450 170 480 110 T 465 40" />
              <path d="M 505 230 Q 535 160 495 90 T 520 30" strokeWidth="8" stroke="rgba(255,240,225,0.18)" />
              <path d="M 530 245 Q 560 180 540 120 T 555 50" strokeWidth="5" stroke="rgba(255,240,225,0.14)" />
            </g>
          </svg>
        </div>
      );

    case 'brewhaven-bag':
      return (
        <div className={`relative w-full h-full min-h-[360px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-tr from-stone-950 via-stone-900 to-amber-950/40 ${className}`}>
          <svg viewBox="0 0 600 500" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="bagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2A2420" />
                <stop offset="50%" stopColor="#171311" />
                <stop offset="100%" stopColor="#0B0908" />
              </linearGradient>
              <linearGradient id="foilGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C88A58" />
                <stop offset="50%" stopColor="#E2AB7E" />
                <stop offset="100%" stopColor="#9C5A2A" />
              </linearGradient>
            </defs>

            {/* Ambient Lighting & Shelving Background */}
            <rect x="0" y="0" width="600" height="500" fill="#120E0C" />
            <rect x="40" y="380" width="520" height="120" fill="#241712" stroke="#3D291F" strokeWidth="2" />
            <circle cx="150" cy="180" r="160" fill="#C88A58" opacity="0.12" filter="blur(30px)" />

            {/* Espresso Portafilter & Grinder Silhouettes in Background */}
            <path d="M 420 380 L 420 220 L 490 220 L 490 380 Z" fill="#1C1613" opacity="0.7" />
            <rect x="440" y="160" width="30" height="60" fill="#2A211B" />
            <circle cx="455" cy="140" r="45" fill="#362922" opacity="0.8" />

            {/* Coffee Packaging Pouch */}
            <g transform="translate(190, 110)">
              {/* Bag Drop Shadow */}
              <path d="M 20 290 Q 90 310 160 290 L 180 320 L 0 320 Z" fill="#000" opacity="0.6" filter="blur(10px)" />

              {/* Main Matte Black Bag */}
              <path d="M 15 30 L 165 30 L 175 285 Q 90 295 5 285 Z" fill="url(#bagGrad)" stroke="#3A2D25" strokeWidth="1.5" />
              {/* Sealed Top Fold */}
              <polygon points="10,15 170,15 165,30 15,30" fill="#322822" stroke="#4A3A30" strokeWidth="1" />
              <line x1="12" y1="22" x2="168" y2="22" stroke="#C88A58" strokeWidth="1" opacity="0.4" strokeDasharray="3,3" />

              {/* Bag Branding Frame */}
              <rect x="35" y="60" width="110" height="180" rx="4" fill="#0C0A09" stroke="url(#foilGrad)" strokeWidth="1.2" />

              {/* Brand Logo & Typography */}
              <circle cx="90" cy="95" r="18" fill="none" stroke="#C88A58" strokeWidth="1.5" />
              <path d="M 83 97 Q 90 102 97 97 L 97 90 L 83 90 Z" fill="#C88A58" />
              <text x="90" y="132" fill="#F5EBE1" fontSize="11" fontWeight="700" letterSpacing="1.5" textAnchor="middle" fontFamily="serif">BREW HAVEN</text>
              <text x="90" y="145" fill="#C88A58" fontSize="7" letterSpacing="2" textAnchor="middle">COFFEE CO.</text>

              <line x1="55" y1="158" x2="125" y2="158" stroke="#3A2D25" strokeWidth="1" />

              <text x="90" y="174" fill="#F5EBE1" fontSize="8" letterSpacing="1" textAnchor="middle" fontWeight="600">PREMIUM BLEND</text>
              <text x="90" y="188" fill="#A89485" fontSize="6.5" textAnchor="middle">100% ARABICA</text>
              <text x="90" y="200" fill="#C88A58" fontSize="6" textAnchor="middle">DARK ROAST • WHOLE BEAN</text>
              <text x="90" y="222" fill="#E2AB7E" fontSize="7" textAnchor="middle">250g / 8.8 OZ</text>
            </g>

            {/* Foreground Wooden Details & Loose Beans */}
            <g fill="#422215" stroke="#1D0E08" strokeWidth="1">
              <ellipse cx="140" cy="395" rx="16" ry="10" transform="rotate(-15 140 395)" />
              <ellipse cx="170" cy="410" rx="14" ry="9" transform="rotate(25 170 410)" />
              <ellipse cx="370" cy="405" rx="15" ry="9" transform="rotate(-30 370 405)" />
              <ellipse cx="400" cy="425" rx="13" ry="8" transform="rotate(45 400 425)" />
              <ellipse cx="430" cy="410" rx="14" ry="9" transform="rotate(-10 430 410)" />
            </g>
          </svg>
        </div>
      );

    case 'harth-interior':
      return (
        <div className={`relative w-full h-full min-h-[380px] flex items-center justify-center overflow-hidden rounded-2xl bg-stone-100 ${className}`}>
          <svg viewBox="0 0 800 500" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="sunbeam" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFDF7" stopOpacity="0.85" />
                <stop offset="40%" stopColor="#F6EBDD" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#EDE0CE" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="oakWood" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#B68E6B" />
                <stop offset="100%" stopColor="#875E3D" />
              </linearGradient>
            </defs>

            {/* Café Wall Background */}
            <rect x="0" y="0" width="800" height="500" fill="#F4EFEA" />

            {/* Sunlit Arched Window */}
            <path d="M 220 80 Q 320 20 420 80 L 420 320 L 220 320 Z" fill="#E6DDD2" stroke="#C8BCAF" strokeWidth="3" />
            <line x1="320" y1="45" x2="320" y2="320" stroke="#C8BCAF" strokeWidth="2.5" />
            <line x1="220" y1="180" x2="420" y2="180" stroke="#C8BCAF" strokeWidth="2.5" />

            {/* Diagonal Sun Rays Streaming In */}
            <polygon points="220,80 420,80 750,500 350,500" fill="url(#sunbeam)" />

            {/* Modern Architectural Bar Counter */}
            <polygon points="120,310 760,260 760,420 120,500" fill="url(#oakWood)" stroke="#5B3E26" strokeWidth="2" />
            <polygon points="120,310 760,260 720,248 80,298" fill="#DFCBB9" stroke="#C2A892" strokeWidth="1.5" />

            {/* Hanging Brass Pendant Lights */}
            <line x1="260" y1="0" x2="260" y2="140" stroke="#2B2118" strokeWidth="2" />
            <path d="M 240 140 Q 260 125 280 140 L 275 155 L 245 155 Z" fill="#D4AF37" stroke="#9A7B1C" strokeWidth="1" />
            <circle cx="260" cy="162" r="14" fill="#FFF1D0" opacity="0.8" filter="blur(4px)" />

            <line x1="520" y1="0" x2="520" y2="110" stroke="#2B2118" strokeWidth="2" />
            <path d="M 500 110 Q 520 95 540 110 L 535 125 L 505 125 Z" fill="#D4AF37" stroke="#9A7B1C" strokeWidth="1" />
            <circle cx="520" cy="132" r="14" fill="#FFF1D0" opacity="0.8" filter="blur(4px)" />

            {/* Minimalist Ficus Plant Pot */}
            <g transform="translate(140, 160)">
              <polygon points="30,130 55,130 62,175 23,175" fill="#3D4B3F" />
              <path d="M 42 130 Q 30 70 10 40" stroke="#2E3D30" strokeWidth="4" fill="none" />
              <ellipse cx="10" cy="40" rx="18" ry="10" fill="#4B6050" transform="rotate(-30 10 40)" />
              <ellipse cx="25" cy="75" rx="16" ry="9" fill="#3D4F41" transform="rotate(25 25 75)" />
              <ellipse cx="48" cy="60" rx="17" ry="10" fill="#58705E" transform="rotate(-15 48 60)" />
            </g>

            {/* Bar Stools */}
            <g transform="translate(380, 310)">
              <ellipse cx="30" cy="10" rx="28" ry="10" fill="#422F24" />
              <line x1="12" y1="18" x2="4" y2="150" stroke="#221812" strokeWidth="4" />
              <line x1="48" y1="18" x2="56" y2="150" stroke="#221812" strokeWidth="4" />
              <line x1="30" y1="18" x2="30" y2="150" stroke="#18110D" strokeWidth="3" />
            </g>

            {/* Wall Typographic Neon / Sign Accent */}
            <text x="640" y="110" fill="#3E2C22" opacity="0.85" fontSize="13" letterSpacing="3" fontWeight="700" fontFamily="sans-serif">GOOD COFFEE</text>
            <text x="640" y="130" fill="#875E3D" opacity="0.85" fontSize="13" letterSpacing="3" fontWeight="700" fontFamily="sans-serif">BRIGHTER DAYS</text>
          </svg>
        </div>
      );

    case 'harth-kinfolk':
      return (
        <div className={`relative w-full h-full min-h-[340px] flex items-center justify-center overflow-hidden rounded-2xl bg-stone-900 ${className}`}>
          <svg viewBox="0 0 600 450" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="tableWood" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A3427" />
                <stop offset="50%" stopColor="#2E1E16" />
                <stop offset="100%" stopColor="#1C110C" />
              </linearGradient>
            </defs>

            {/* Warm dark table */}
            <rect x="0" y="0" width="600" height="450" fill="url(#tableWood)" />
            <circle cx="340" cy="220" r="260" fill="#D4AF37" opacity="0.08" filter="blur(40px)" />

            {/* Open Kinfolk Editorial Book */}
            <g transform="translate(180, 190)">
              <polygon points="0,70 120,40 250,55 130,85" fill="#EAE4DC" stroke="#CCC2B4" strokeWidth="1" />
              <polygon points="120,40 250,55 250,75 120,60" fill="#D2C8BA" />
              <text x="180" y="66" fill="#4B3A2C" fontSize="10" letterSpacing="4" fontFamily="serif" fontWeight="600">THE KINFOLK TABLE</text>
            </g>

            {/* Stoneware Ceramic Cup on Table */}
            <g transform="translate(340, 160)">
              <ellipse cx="0" cy="50" rx="60" ry="22" fill="#000" opacity="0.5" filter="blur(6px)" />
              <ellipse cx="0" cy="38" rx="55" ry="18" fill="#5A4739" />
              <path d="M -45 -10 C -45 35, 45 35, 45 -10 Z" fill="#8C735E" stroke="#5E4837" strokeWidth="1.5" />
              <ellipse cx="0" cy="-10" rx="45" ry="16" fill="#3D2619" />
              {/* Latte heart */}
              <ellipse cx="0" cy="-10" rx="22" ry="7" fill="#F4EAE0" />
              <path d="M 0 -15 L 0 -5" stroke="#3D2619" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Delicate Ceramic Bud Vase with Olive Sprig */}
            <g transform="translate(430, 90)">
              <path d="M 10 50 Q 5 100 25 110 Q 45 100 40 50 Z" fill="#D9CFC3" stroke="#B8A998" strokeWidth="1" />
              <line x1="25" y1="50" x2="15" y2="0" stroke="#4F4233" strokeWidth="2" />
              <ellipse cx="8" cy="8" rx="8" ry="4" fill="#6A7A64" transform="rotate(-30 8 8)" />
              <ellipse cx="22" cy="18" rx="9" ry="4" fill="#586753" transform="rotate(25 22 18)" />
            </g>
          </svg>
        </div>
      );

    case 'croissant':
      return (
        <div className={`relative w-full h-full min-h-[220px] flex items-center justify-center overflow-hidden rounded-xl bg-stone-100 ${className}`}>
          <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="crPastry" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DF9B4E" />
                <stop offset="45%" stopColor="#BE6E23" />
                <stop offset="100%" stopColor="#7B3A09" />
              </linearGradient>
            </defs>
            <ellipse cx="200" cy="220" rx="160" ry="50" fill="#000" opacity="0.12" filter="blur(6px)" />
            {/* Ceramic Plate */}
            <ellipse cx="200" cy="200" rx="150" ry="45" fill="#FAF6F0" stroke="#E6DCCF" strokeWidth="2" />

            {/* Crescent Flaky Croissant */}
            <g transform="translate(200, 160)">
              <path d="M -110 20 C -70 -45, 70 -45, 110 20 C 60 55, -60 55, -110 20 Z" fill="url(#crPastry)" stroke="#663108" strokeWidth="2" />
              {/* Flaky Laminated Ribs */}
              <path d="M -75 -10 Q -65 -30 -50 20" stroke="#F5C07A" strokeWidth="3.5" fill="none" opacity="0.75" />
              <path d="M -35 -28 Q -20 -40 -10 32" stroke="#F5C07A" strokeWidth="4" fill="none" opacity="0.8" />
              <path d="M 10 -35 Q 25 -42 35 30" stroke="#F5C07A" strokeWidth="4" fill="none" opacity="0.8" />
              <path d="M 55 -22 Q 70 -26 80 18" stroke="#F5C07A" strokeWidth="3.5" fill="none" opacity="0.75" />
              {/* Chocolate drizzle / almond flakes */}
              <circle cx="-15" cy="-8" r="4" fill="#FDE1BD" />
              <circle cx="20" cy="2" r="5" fill="#FDE1BD" />
              <circle cx="-40" cy="6" r="3" fill="#FDE1BD" />
              <circle cx="48" cy="-5" r="4" fill="#FDE1BD" />
            </g>
          </svg>
        </div>
      );

    case 'iced-coffee':
      return (
        <div className={`relative w-full h-full min-h-[220px] flex items-center justify-center overflow-hidden rounded-xl bg-stone-100 ${className}`}>
          <svg viewBox="0 0 300 360" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="icedDrink" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F5EFE6" />
                <stop offset="35%" stopColor="#D4A77D" />
                <stop offset="70%" stopColor="#874C1D" />
                <stop offset="100%" stopColor="#3F200A" />
              </linearGradient>
            </defs>
            <ellipse cx="150" cy="315" rx="75" ry="20" fill="#000" opacity="0.15" filter="blur(6px)" />
            {/* Wooden Coaster */}
            <ellipse cx="150" cy="305" rx="70" ry="16" fill="#C59B76" stroke="#936842" strokeWidth="2" />

            {/* Glass Cup */}
            <path d="M 95 90 L 108 290 Q 150 302 192 290 L 205 90 Z" fill="url(#icedDrink)" stroke="rgba(255,255,255,0.7)" strokeWidth="3" />

            {/* Glass Ribs / Highlights */}
            <line x1="110" y1="100" x2="118" y2="280" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" />
            <line x1="190" y1="100" x2="182" y2="280" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" />

            {/* Ice Cubes Floating */}
            <rect x="120" y="115" width="32" height="28" rx="4" fill="rgba(255,255,255,0.65)" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" transform="rotate(12 136 129)" />
            <rect x="145" y="145" width="28" height="26" rx="4" fill="rgba(255,255,255,0.55)" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" transform="rotate(-18 159 158)" />

            {/* Straw */}
            <line x1="175" y1="30" x2="135" y2="280" stroke="#1F2937" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'pistachio-cake':
      return (
        <div className={`relative w-full h-full min-h-[220px] flex items-center justify-center overflow-hidden rounded-xl bg-emerald-50/50 ${className}`}>
          <svg viewBox="0 0 360 300" className="w-full h-full object-cover">
            <ellipse cx="180" cy="230" rx="130" ry="40" fill="#000" opacity="0.1" filter="blur(5px)" />
            {/* Square/Diamond Layered Pistachio Slice */}
            <g transform="translate(180, 140)">
              {/* Top Surface */}
              <polygon points="0,-40 85,-10 0,20 -85,-10" fill="#9BC57D" stroke="#719C52" strokeWidth="2" />
              {/* Crushed Pistachio Nut Texture on Top */}
              <circle cx="-25" cy="-12" r="3" fill="#4B6E32" />
              <circle cx="15" cy="-8" r="3.5" fill="#58823C" />
              <circle cx="35" cy="-15" r="2.5" fill="#4B6E32" />
              <circle cx="-10" cy="2" r="3" fill="#3D5A28" />

              {/* Left Facet Layers */}
              <polygon points="-85,-10 0,20 0,90 -85,60" fill="#7FA961" />
              {/* Right Facet Layers */}
              <polygon points="0,20 85,-10 85,60 0,90" fill="#698F4C" />

              {/* Cream Separator Lines */}
              <line x1="-85" y1="12" x2="0" y2="42" stroke="#FFF7ED" strokeWidth="4" />
              <line x1="0" y1="42" x2="85" y2="12" stroke="#FFF7ED" strokeWidth="4" />
              <line x1="-85" y1="35" x2="0" y2="65" stroke="#FFF7ED" strokeWidth="4" />
              <line x1="0" y1="65" x2="85" y2="35" stroke="#FFF7ED" strokeWidth="4" />
            </g>
          </svg>
        </div>
      );

    case 'chocolate-cake':
      return (
        <div className={`relative w-full h-full min-h-[220px] flex items-center justify-center overflow-hidden rounded-xl bg-amber-50/60 ${className}`}>
          <svg viewBox="0 0 360 300" className="w-full h-full object-cover">
            <ellipse cx="180" cy="230" rx="130" ry="40" fill="#000" opacity="0.15" filter="blur(5px)" />
            <g transform="translate(180, 140)">
              {/* Glossy Chocolate Top */}
              <polygon points="0,-45 85,-15 0,15 -85,-15" fill="#381D14" stroke="#25120B" strokeWidth="2" />
              {/* Molded Chocolate Heart on Top */}
              <path d="M 0,-25 C -15,-40 -25,-20 0, -5 C 25,-20 15,-40 0,-25 Z" fill="#5A2E1D" stroke="#7A402B" strokeWidth="1.5" />

              {/* Left Side Ganache */}
              <polygon points="-85,-15 0,15 0,85 -85,55" fill="#2B150E" />
              {/* Right Side Ganache */}
              <polygon points="0,15 85,-15 85,55 0,85" fill="#1E0E09" />

              {/* Delicate Cocoa Glaze Lines */}
              <line x1="-85" y1="8" x2="0" y2="38" stroke="#4C2619" strokeWidth="3" />
              <line x1="0" y1="38" x2="85" y2="8" stroke="#3D1E14" strokeWidth="3" />
            </g>
          </svg>
        </div>
      );

    case 'berry-cake':
      return (
        <div className={`relative w-full h-full min-h-[220px] flex items-center justify-center overflow-hidden rounded-xl bg-rose-50/60 ${className}`}>
          <svg viewBox="0 0 360 300" className="w-full h-full object-cover">
            <ellipse cx="180" cy="230" rx="130" ry="40" fill="#000" opacity="0.12" filter="blur(5px)" />
            <g transform="translate(180, 140)">
              {/* Berries on Top */}
              <g fill="#431733" stroke="#2D0B22" strokeWidth="1">
                <circle cx="-35" cy="-25" r="9" />
                <circle cx="-18" cy="-30" r="11" fill="#2E1128" />
                <circle cx="2" cy="-28" r="10" />
                <circle cx="22" cy="-26" r="11" fill="#240D1F" />
                <circle cx="38" cy="-22" r="8" />
                <circle cx="-8" cy="-18" r="9" fill="#581F44" />
                <circle cx="12" cy="-16" r="10" fill="#4B183A" />
              </g>

              {/* Cream Layer Facet Left */}
              <polygon points="-85,-10 0,20 0,55 -85,25" fill="#FFFBF5" stroke="#E6DACD" strokeWidth="1" />
              {/* Right */}
              <polygon points="0,20 85,-10 85,25 0,55" fill="#F4EAE0" stroke="#DDD0C1" strokeWidth="1" />

              {/* Biscuit Crust Bottom */}
              <polygon points="-85,25 0,55 0,85 -85,55" fill="#C98B50" />
              <polygon points="0,55 85,25 85,55 0,85" fill="#A86D36" />
            </g>
          </svg>
        </div>
      );

    case 'bodren-hero':
      return (
        <div className={`relative w-full h-full min-h-[420px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-stone-950 via-black to-stone-900 ${className}`}>
          <svg viewBox="0 0 800 600" className="w-full h-full object-cover">
            <defs>
              <radialGradient id="bodrenGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.45" />
                <stop offset="60%" stopColor="#8A6715" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#09090B" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="kraftCup" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B38B67" />
                <stop offset="50%" stopColor="#8C6643" />
                <stop offset="100%" stopColor="#5E4025" />
              </linearGradient>
            </defs>

            {/* Radiant Ambient Core */}
            <circle cx="480" cy="280" r="320" fill="url(#bodrenGlow)" />

            {/* Dynamic Espresso Splash Arc */}
            <path d="M 460 210 Q 560 60 620 140 Q 660 200 590 260 Q 510 320 460 210 Z" fill="#4B2713" opacity="0.9" />
            <path d="M 470 200 Q 550 80 600 145 Q 630 190 580 240 Z" fill="#6B3B1F" opacity="0.9" />

            {/* Splash Droplets */}
            <circle cx="630" cy="90" r="8" fill="#5C3117" />
            <circle cx="670" cy="140" r="6" fill="#6E3B1C" />
            <circle cx="580" cy="60" r="5" fill="#4B2713" />
            <circle cx="510" cy="85" r="7" fill="#6B3B1F" />
            <circle cx="690" cy="210" r="5" fill="#4A2612" />

            {/* Floating Whole Coffee Beans in Mid-Air */}
            <g fill="#2B150C" stroke="#D4AF37" strokeWidth="0.75">
              <ellipse cx="320" cy="160" rx="18" ry="11" transform="rotate(-35 320 160)" />
              <ellipse cx="620" cy="360" rx="16" ry="10" transform="rotate(40 620 360)" />
              <ellipse cx="380" cy="380" rx="15" ry="9" transform="rotate(20 380 380)" />
              <ellipse cx="660" cy="270" rx="14" ry="8" transform="rotate(-65 660 270)" />
            </g>

            {/* Main BODREN Takeaway Kraft Paper Cup */}
            <g transform="translate(480, 290)">
              {/* Cup Drop Shadow */}
              <ellipse cx="0" cy="170" rx="90" ry="24" fill="#000" opacity="0.7" filter="blur(10px)" />

              {/* Cup Body */}
              <path d="M -75 -100 L 75 -100 L 55 160 Q 0 170 -55 160 Z" fill="url(#kraftCup)" stroke="#3D2919" strokeWidth="2" />

              {/* Black Plastic Sip Lid */}
              <path d="M -80 -100 L 80 -100 L 75 -120 L -75 -120 Z" fill="#1C1815" stroke="#3D342C" strokeWidth="1.5" />
              <rect x="-25" y="-126" width="50" height="6" rx="2" fill="#2E2822" />

              {/* Textured Corrugated Cup Sleeve */}
              <path d="M -68 -20 L 68 -20 L 60 70 L -60 70 Z" fill="#3D2919" stroke="#5E4025" strokeWidth="1.5" />
              {/* Sleeve Branding */}
              <text x="0" y="32" fill="#D4AF37" fontSize="22" letterSpacing="4" textAnchor="middle" fontWeight="800" fontFamily="sans-serif">BODR≡N</text>
              <text x="0" y="48" fill="#F3E5C8" fontSize="8" letterSpacing="2" textAnchor="middle">PREMIUM COFFEE</text>
            </g>

            {/* Secondary Coffee Cup in Background */}
            <g transform="translate(370, 240) scale(0.8)">
              <path d="M -75 -100 L 75 -100 L 55 160 Q 0 170 -55 160 Z" fill="#4B3320" />
              <path d="M -80 -100 L 80 -100 L 75 -120 L -75 -120 Z" fill="#14110E" />
              <path d="M -68 -20 L 68 -20 L 60 70 L -60 70 Z" fill="#2A1B10" />
              <text x="0" y="32" fill="#B38B37" fontSize="22" letterSpacing="4" textAnchor="middle" fontWeight="800">BODR≡N</text>
            </g>
          </svg>
        </div>
      );

    case 'bodren-barista':
      return (
        <div className={`relative w-full h-full min-h-[320px] flex items-center justify-center overflow-hidden rounded-2xl bg-stone-950 ${className}`}>
          <svg viewBox="0 0 600 450" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="pitcherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E2E8F0" />
                <stop offset="50%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="600" height="450" fill="#0C0A09" />
            <circle cx="300" cy="280" r="180" fill="#D4AF37" opacity="0.12" filter="blur(30px)" />

            {/* Steaming Milk Pitcher pouring */}
            <g transform="translate(230, 80)">
              <path d="M 0 0 L 80 40 L 40 120 L -20 80 Z" fill="url(#pitcherGrad)" stroke="#CBD5E1" strokeWidth="2" />
              {/* Milk Stream */}
              <path d="M 80 40 Q 95 120 70 200" stroke="#FFFBF5" strokeWidth="9" fill="none" strokeLinecap="round" />
            </g>

            {/* Ceramic Cup receiving latte art */}
            <g transform="translate(300, 310)">
              <ellipse cx="0" cy="30" rx="90" ry="25" fill="#000" opacity="0.7" filter="blur(8px)" />
              <path d="M -80 -30 C -85 30, -50 50, 0 50 C 50 50, 85 30, 80 -30 Z" fill="#1C1816" stroke="#D4AF37" strokeWidth="1.5" />
              <ellipse cx="0" cy="-30" rx="80" ry="26" fill="#4B2713" />
              {/* Emerging Rosetta in cup */}
              <ellipse cx="0" cy="-30" rx="42" ry="14" fill="#FFFDF8" />
              <ellipse cx="0" cy="-36" rx="30" ry="10" fill="#FFFDF8" />
              <ellipse cx="0" cy="-22" rx="20" ry="7" fill="#FFFDF8" />
              <line x1="0" y1="-42" x2="0" y2="-16" stroke="#4B2713" strokeWidth="3" />
            </g>
          </svg>
        </div>
      );

    default: // latte-cup
      return (
        <div className={`relative w-full h-full min-h-[220px] flex items-center justify-center overflow-hidden rounded-xl bg-stone-900/60 ${className}`}>
          <svg viewBox="0 0 300 240" className="w-full h-full object-cover">
            <ellipse cx="150" cy="180" rx="100" ry="30" fill="#000" opacity="0.3" filter="blur(5px)" />
            <ellipse cx="150" cy="160" rx="90" ry="26" fill="#241E1A" stroke="#4A3C33" strokeWidth="1.5" />
            <g transform="translate(150, 130)">
              <path d="M -55 -25 C -60 25, 60 25, 55 -25 Z" fill="#1A1512" stroke="#3D3027" strokeWidth="1.5" />
              <ellipse cx="0" cy="-25" rx="55" ry="18" fill="#5C3117" />
              <ellipse cx="0" cy="-25" rx="28" ry="9" fill="#FFF9F2" opacity="0.9" />
              <path d="M 0 -30 L 0 -18" stroke="#5C3117" strokeWidth="2.5" />
            </g>
          </svg>
        </div>
      );
  }
};
