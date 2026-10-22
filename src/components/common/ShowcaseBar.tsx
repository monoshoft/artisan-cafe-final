import React, { useState } from 'react';
import { LayoutGrid, ChevronDown, Send, ArrowLeft, Sparkles } from 'lucide-react';
import { ConceptId } from '../../types/cafe';

interface ShowcaseBarProps {
  activeConcept: ConceptId;
  onSelectConcept: (concept: ConceptId) => void;
  onOpenEnquiry: (conceptId?: ConceptId) => void;
}

const CONCEPTS: { id: ConceptId; label: string; tag: string; number: string }[] = [
  { id: 'brewhaven', label: 'Brew Haven', tag: 'Dark Luxury', number: '01' },
  { id: 'harth', label: 'Harth Coffee', tag: 'Architectural', number: '02' },
  { id: 'bean', label: 'Bean & Bloom', tag: 'Botanical Bakery', number: '03' },
  { id: 'coffeee', label: 'Coffeeë', tag: 'Haute Pâtisserie', number: '04' },
  { id: 'bodren', label: 'BODREN', tag: 'Experiential 3D', number: '05' },
];

export const ShowcaseBar: React.FC<ShowcaseBarProps> = ({
  activeConcept,
  onSelectConcept,
  onOpenEnquiry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isViewingDemo = activeConcept !== 'hub';

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#070A0F]/95 backdrop-blur-xl border-b border-cyan-500/20 text-stone-100 transition-all shadow-[0_4px_30px_rgba(0,240,255,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-15 flex items-center justify-between gap-3">
        {/* Left: OBVERRA DIGITAL Brand Lockup + Return to Showcase Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onSelectConcept('hub')}
            className="flex items-center gap-2.5 cursor-pointer group text-left"
            title="Return to OBVERRA DIGITAL Agency Showcase"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 opacity-60 blur-sm group-hover:opacity-90 transition-opacity" />
              <div className="relative w-8 h-8 rounded-lg bg-black border border-cyan-400/50 flex items-center justify-center text-cyan-400 font-black text-xs tracking-tighter">
                OD
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xs tracking-[0.18em] uppercase text-white group-hover:text-cyan-300 transition-colors">
                  OBVERRA <span className="text-cyan-400">DIGITAL</span>
                </span>
              </div>
              <span className="text-[10px] text-stone-400 tracking-wider hidden sm:inline">
                Café Website Showcase
              </span>
            </div>
          </button>

          {/* Quick Return button if inside a café demo */}
          {isViewingDemo && (
            <button
              onClick={() => onSelectConcept('hub')}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-cyan-500/30 text-xs font-semibold text-stone-200 hover:text-white transition-all shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
              <span>Agency Showcase</span>
            </button>
          )}
        </div>

        {/* Center: Desktop Concept Switcher Tabs */}
        <nav className="hidden xl:flex items-center gap-1 bg-black/60 p-1 rounded-2xl border border-stone-800/80 shadow-inner">
          {CONCEPTS.map((c) => {
            const isActive = activeConcept === c.id;
            return (
              <button
                key={c.id}
                onClick={() => onSelectConcept(c.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800/50'
                }`}
              >
                <span className={`text-[10px] font-mono ${isActive ? 'text-black font-extrabold' : 'text-cyan-400'}`}>
                  {c.number}
                </span>
                <span>{c.label}</span>
                <span className={`text-[10px] opacity-75 hidden 2xl:inline ${isActive ? 'text-stone-900 font-bold' : 'text-stone-400'}`}>
                  • {c.tag}
                </span>
              </button>
            );
          })}

          <div className="w-px h-5 bg-stone-800 mx-1" />

          {/* Hub Matrix Toggle */}
          <button
            onClick={() => onSelectConcept('hub')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeConcept === 'hub'
                ? 'bg-white text-black font-bold shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/50'
            }`}
            title="View all 5 concepts matrix"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Showcase Hub</span>
          </button>
        </nav>

        {/* Mobile Concept Dropdown Trigger */}
        <div className="xl:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-stone-900 border border-cyan-500/30 text-xs text-stone-200"
          >
            <span className="font-semibold text-cyan-400">
              {activeConcept === 'hub'
                ? 'Showcase Hub'
                : CONCEPTS.find((c) => c.id === activeConcept)?.label}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
          </button>
        </div>

        {/* Right Action: Request a Custom Quote / Discuss Project */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <button
            onClick={() => onOpenEnquiry(activeConcept !== 'hub' ? activeConcept : undefined)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            title="Discuss your café website project with OBVERRA DIGITAL"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Discuss Your Project</span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A0D14] border-b border-cyan-500/20 p-3 space-y-1.5 shadow-2xl">
          <div className="text-[10px] uppercase tracking-widest text-cyan-400/80 px-3 py-1 font-mono flex items-center justify-between">
            <span>SELECT CAFÉ CONCEPT</span>
            <Sparkles className="w-3 h-3 text-cyan-400" />
          </div>
          {CONCEPTS.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                onSelectConcept(c.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                activeConcept === c.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold'
                  : 'text-stone-300 hover:bg-stone-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] opacity-75">{c.number}</span>
                <span>{c.label}</span>
              </div>
              <span className={`text-[10px] ${activeConcept === c.id ? 'text-black font-bold' : 'text-stone-400'}`}>
                {c.tag}
              </span>
            </button>
          ))}
          <div className="pt-2 border-t border-stone-800 flex gap-2">
            <button
              onClick={() => {
                onSelectConcept('hub');
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 rounded-xl bg-stone-900 text-stone-200 text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Showcase Hub</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="flex-1 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Request Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
