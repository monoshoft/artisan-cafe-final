import React from 'react';
import { X, Star, Coffee, Sparkles } from 'lucide-react';
import { ProductItem } from '../../types/cafe';

interface QuickViewModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0C0F17] border border-stone-800 text-stone-100 overflow-hidden shadow-2xl p-6 sm:p-7 z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col sm:flex-row gap-5 items-start">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-stone-950 border border-stone-800 overflow-hidden shadow-inner shrink-0 relative">
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-3xl text-amber-500">
                ☕
              </div>
            )}
          </div>

          <div className="flex-1 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold font-mono">
                {product.category}
              </span>
              {product.rating && (
                <span className="flex items-center gap-1 text-xs text-amber-300 font-semibold bg-amber-500/10 px-2 py-0.5 rounded-full">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  {product.rating}
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold tracking-tight text-white font-serif">
              {product.name}
            </h3>

            {product.subtitle && (
              <p className="text-xs text-stone-400 italic">
                {product.subtitle}
              </p>
            )}

            <div className="text-base font-bold text-stone-200 font-mono pt-1">
              Menu Price: <span className="text-amber-400">{product.currencySymbol}{product.price.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-800/80 pt-3">
          {product.description}
        </p>

        {product.ingredients && product.ingredients.length > 0 && (
          <div className="mt-3.5 pt-3 border-t border-stone-800/60">
            <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-1.5 font-mono">
              In-House Preparation & Composition
            </span>
            <div className="flex flex-wrap gap-1.5">
              {product.ingredients.map((ing, i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-1 rounded-md bg-stone-900 border border-stone-800 text-stone-300"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono">
            <Coffee className="w-3.5 h-3.5 text-amber-400" />
            <span>Handcrafted fresh on order in our café</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white text-xs font-semibold transition-colors"
          >
            Close Menu Card
          </button>
        </div>
      </div>
    </div>
  );
};
