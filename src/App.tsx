import React, { useState, useEffect } from 'react';
import { ConceptId, ProductItem } from './types/cafe';
import { ShowcaseBar } from './components/common/ShowcaseBar';
import { QuickViewModal } from './components/common/QuickViewModal';
import { EnquiryModal } from './components/common/EnquiryModal';
import { BrewHaven } from './components/cafes/BrewHaven';
import { HarthCoffee } from './components/cafes/HarthCoffee';
import { BeanAndBloom } from './components/cafes/BeanAndBloom';
import { CoffeeeCafe } from './components/cafes/CoffeeeCafe';
import { BodrenCoffee } from './components/cafes/BodrenCoffee';
import { ConceptHub } from './components/hub/ConceptHub';
import { ArrowLeft, Send } from 'lucide-react';

export default function App() {
  const [activeConcept, setActiveConcept] = useState<ConceptId>('hub');
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryConceptId, setEnquiryConceptId] = useState<ConceptId | 'custom'>('harth');

  // Sync with URL hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as ConceptId;
      if (['brewhaven', 'harth', 'bean', 'coffeee', 'bodren', 'hub'].includes(hash)) {
        setActiveConcept(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectConcept = (concept: ConceptId) => {
    setActiveConcept(concept);
    window.location.hash = concept;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (conceptId?: ConceptId | 'custom') => {
    if (conceptId) setEnquiryConceptId(conceptId);
    setIsEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#06090E] text-stone-100 flex flex-col font-sans">
      {/* Floating Showcase Navigation Switcher */}
      <ShowcaseBar
        activeConcept={activeConcept}
        onSelectConcept={handleSelectConcept}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Main View: Renders the active offline café or the Concept Matrix Hub */}
      <main className="flex-1">
        {activeConcept === 'brewhaven' && (
          <BrewHaven
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        )}

        {activeConcept === 'harth' && (
          <HarthCoffee
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        )}

        {activeConcept === 'bean' && (
          <BeanAndBloom
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        )}

        {activeConcept === 'coffeee' && (
          <CoffeeeCafe
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        )}

        {activeConcept === 'bodren' && (
          <BodrenCoffee
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        )}

        {activeConcept === 'hub' && (
          <ConceptHub
            onSelectConcept={handleSelectConcept}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}
      </main>

      {/* Floating Navigation (visible inside individual demo websites) */}
      {activeConcept !== 'hub' && (
        <aside
          aria-label="Agency showcase navigation"
          className="fixed bottom-6 left-6 z-40 flex items-center gap-2"
        >
          <button
            onClick={() => handleSelectConcept('hub')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-black/85 hover:bg-black text-white border border-cyan-500/40 text-xs font-semibold shadow-2xl backdrop-blur-md transition-all hover:scale-105 group"
            title="Return to OBVERRA DIGITAL Agency Showcase"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>← Return to Showcase</span>
          </button>

          <button
            onClick={() => handleOpenEnquiry(activeConcept)}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl bg-cyan-950/80 hover:bg-cyan-900/90 text-cyan-300 hover:text-white border border-cyan-500/40 text-xs font-semibold shadow-xl backdrop-blur-md transition-all"
            title="Discuss this café website design with OBVERRA DIGITAL"
          >
            <Send className="w-3.5 h-3.5 text-cyan-400" />
            <span>Discuss This Concept</span>
          </button>
        </aside>
      )}

      {/* Quick View Item Dialog (In-Café Tasting Profile) */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Project Custom Quote / Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        initialConceptId={enquiryConceptId}
      />
    </div>
  );
}
