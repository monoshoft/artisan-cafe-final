import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Eye, Send, Compass } from 'lucide-react';
import { ConceptId } from '../../types/cafe';
import { CAFE_CONCEPTS } from '../../data/cafeConcepts';

interface ConceptHubProps {
  onSelectConcept: (concept: ConceptId) => void;
  onOpenEnquiry: (conceptId?: ConceptId) => void;
}

export const ConceptHub: React.FC<ConceptHubProps> = ({
  onSelectConcept,
  onOpenEnquiry,
}) => {
  return (
    <div className="min-h-screen bg-[#06090E] text-stone-100 pt-20 pb-28 px-4 sm:px-6 max-w-7xl mx-auto space-y-16 selection:bg-cyan-500 selection:text-black">
      {/* Agency Header Banner */}
      <div className="space-y-5 text-center max-w-4xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>OBVERRA DIGITAL • Creative Direction & Architecture</span>
        </div>

        <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
          Bespoke Digital Showcases for Physical Cafés
        </h1>

        <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
          Explore five distinct creative concepts engineered for offline cafés, roasteries, and bakeries. Each concept features custom typography, verified high-resolution ambience photography, physical location guides, and interactive WebGL experiences.
        </p>

        {/* Agency Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onOpenEnquiry()}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105"
          >
            <Send className="w-4 h-4" />
            <span>Discuss Your Project</span>
          </button>

          <a
            href="#concepts-grid"
            className="px-5 py-3 rounded-xl bg-stone-900/80 hover:bg-stone-800 border border-stone-700/80 hover:border-cyan-500/40 text-stone-200 hover:text-white text-xs font-semibold transition-all flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>Explore All 5 Concepts Below</span>
          </a>
        </div>

        <p className="text-[11px] text-stone-500 font-mono">
          Custom proposals prepared per client scope, location count, and visual asset requirements.
        </p>
      </div>

      {/* Grid of 5 Distinct Concept Cards */}
      <div id="concepts-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CAFE_CONCEPTS.map((concept, index) => (
          <div
            key={concept.id}
            className="group rounded-3xl p-6 border border-stone-800/90 bg-[#0A0E17]/80 hover:border-cyan-500/50 hover:bg-[#0C121E] transition-all duration-300 flex flex-col justify-between shadow-2xl hover:-translate-y-1.5"
          >
            <div className="space-y-4">
              {/* Concept Thumbnail Preview */}
              <div
                onClick={() => onSelectConcept(concept.id)}
                className="aspect-[16/10] rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 cursor-pointer relative group-hover:border-cyan-500/50 transition-colors shadow-md"
              >
                <img
                  src={concept.heroImage}
                  alt={concept.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Badges on Thumbnail */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-mono text-[11px] font-bold">
                  {concept.designDirection}
                </div>
                <div className="absolute bottom-3 left-3 text-xs font-mono font-bold text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                  Concept 0{index + 1}
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <div className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  {concept.designDirection}
                </div>

                <h2 className="text-2xl font-bold text-white tracking-tight mt-1 group-hover:text-cyan-300 transition-colors">
                  {concept.name}
                </h2>

                <p className="text-xs text-amber-300/90 font-medium mt-0.5">
                  {concept.tagline}
                </p>
              </div>

              <p className="text-xs text-stone-400 leading-relaxed">
                {concept.aesthetic}
              </p>

              {/* Color Swatches */}
              <div className="pt-1">
                <span className="text-[10px] text-stone-500 uppercase tracking-wider block mb-1.5 font-semibold">
                  Brand Color Palette
                </span>
                <div className="flex items-center gap-2">
                  {concept.colors.map((c, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border border-white/20 shadow-sm"
                      style={{ backgroundColor: c }}
                      title={c}
                    />
                  ))}
                </div>
              </div>

              {/* Typography */}
              <div className="text-xs text-stone-400 pt-0.5">
                <span className="text-stone-500 text-[10px] uppercase tracking-wider block font-semibold">
                  Typography Specimen
                </span>
                <span className="font-mono text-stone-300 text-[11px]">
                  {concept.fonts}
                </span>
              </div>

              {/* Key Features List */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-semibold">
                  Key Interactive Features
                </span>
                {concept.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-stone-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Ideal Context */}
              <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800 text-[11px] text-stone-400">
                <span className="text-stone-300 font-semibold">Best Suited For: </span>
                <span>{concept.recommendedFor}</span>
              </div>
            </div>

            {/* Action Buttons: Explore Design + Discuss Concept */}
            <div className="mt-7 pt-4 border-t border-stone-800 space-y-2">
              <button
                onClick={() => onSelectConcept(concept.id)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.25)] group-hover:scale-[1.01]"
              >
                <Eye className="w-4 h-4" />
                <span>Explore This Design</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenEnquiry(concept.id)}
                className="w-full py-2 rounded-xl border border-stone-700/80 hover:border-cyan-500/50 bg-stone-900/60 hover:bg-stone-800 text-stone-300 hover:text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5 text-cyan-400" />
                <span>Discuss This Concept</span>
              </button>
            </div>
          </div>
        ))}

        {/* 6th Card: OBVERRA DIGITAL Bespoke Standards */}
        <div className="rounded-3xl p-6 border border-cyan-500/40 bg-gradient-to-br from-[#0A0E18] via-black to-[#070A0F] flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>OBVERRA DIGITAL GUARANTEE</span>
            </div>

            <h3 className="text-xl font-bold text-white">
              Bespoke Engineering Standards
            </h3>

            <p className="text-xs text-stone-400 leading-relaxed">
              Every website created under our agency banner is completely custom-coded with zero generic starter templates, verified photography, physical café visit conversion architecture, and production-ready responsiveness.
            </p>

            <div className="space-y-2 text-xs text-stone-300 pt-2 font-mono">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Zero Screenshot Substitutions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>100% Offline Hospitality Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Real Three.js WebGL 3D Engine</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Table Reservation & Tasting Profiles</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Tailored Quotes & Project Deliverables</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-stone-800 space-y-2">
            <button
              onClick={() => onOpenEnquiry()}
              className="w-full py-2.5 rounded-xl border border-cyan-400/40 bg-cyan-950/20 hover:bg-cyan-950/40 text-cyan-300 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <Send className="w-4 h-4 text-cyan-400" />
              <span>Request a Custom Quote</span>
            </button>
            <p className="text-[10px] text-stone-500 text-center font-mono">
              OBVERRA DIGITAL · Web Design & Creative Development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
