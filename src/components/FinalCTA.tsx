import React from 'react';
import { BOOK_CONFIG } from '../config/book';
import { ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onOpenChariow?: () => void;
  onOpenReader?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenChariow, onOpenReader }) => {
  const handleBuyClick = (e: React.MouseEvent) => {
    if (onOpenChariow) {
      e.preventDefault();
      onOpenChariow();
    }
  };

  return (
    <section className="relative py-24 md:py-36 overflow-hidden bg-[#09090B] text-white">
      {/* Background panoramic image with fiery warm overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={BOOK_CONFIG.images.studyPanoramic}
          alt="Ambiance bibliothèque"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-[0.25] contrast-125"
          loading="lazy"
        />
        {/* Warm Orange Gradient Lighting from Top */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            background: 'radial-gradient(circle at 50% 30%, #FF5500 0%, #B82E00 40%, transparent 80%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/80 to-[#09090B]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        
        <span className="text-xs font-mono font-bold text-[#FF5500] uppercase tracking-widest block mb-4">
          ✦ Passer à l'Action
        </span>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
          Prêt à Développer Votre Plein Potentiel ?
        </h2>

        <p className="text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto mb-10 leading-relaxed">
          Commandez votre exemplaire dès maintenant sur la boutique officielle Chariow et recevez votre tirage collector numéroté à domicile.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={BOOK_CONFIG.chariowUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleBuyClick}
            className="group pl-8 pr-2.5 py-3 bg-[#FF5500] hover:bg-[#E04B00] text-white font-bold text-xs uppercase tracking-wider rounded-full inline-flex items-center gap-4 transition-all shadow-[0_10px_35px_rgba(255,85,0,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Commander sur Chariow ({BOOK_CONFIG.commercial.price} {BOOK_CONFIG.commercial.currency})</span>
            <span className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          {onOpenReader && (
            <button
              type="button"
              onClick={onOpenReader}
              className="px-6 py-3.5 rounded-full text-xs font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all backdrop-blur-sm flex items-center gap-2"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Feuilleter l'extrait</span>
            </button>
          )}
        </div>

        {/* Reassurance */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-[#71717A]">
          <span className="flex items-center gap-1.5 text-white/80">
            <ShieldCheck className="w-4 h-4 text-[#FF5500]" />
            Boutique Chariow Sécurisée
          </span>
          <span aria-hidden="true">·</span>
          <span>Expédition protégée sous étui renforcé</span>
          <span aria-hidden="true">·</span>
          <span>Tirage limité disponible</span>
        </div>

      </div>
    </section>
  );
};
