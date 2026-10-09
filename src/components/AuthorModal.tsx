import React from 'react';
import { BOOK_CONFIG } from '../config/book';
import { X, ArrowRight, Quote } from 'lucide-react';

interface AuthorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenChariow?: () => void;
}

export const AuthorModal: React.FC<AuthorModalProps> = ({ isOpen, onClose, onOpenChariow }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#121215] border border-white/10 rounded-[32px] overflow-hidden text-white shadow-[0_30px_90px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modern Circular Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-[#FF5500] text-[#A1A1AA] hover:text-white border border-white/15 hover:border-[#FF5500] flex items-center justify-center transition-all duration-200"
          aria-label="Fermer la fenêtre"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Portrait column */}
          <div className="md:col-span-5 relative bg-[#09090B] min-h-[320px] md:min-h-full">
            <img
              src={BOOK_CONFIG.images.author}
              alt="Portrait officiel de l'auteur"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center grayscale contrast-125 select-none"
            />
            {/* Dark vignette blending into the modal */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent md:hidden" />
            <div className="hidden md:block absolute inset-y-0 right-0 w-8 bg-gradient-to-r from-transparent to-[#121215]" />
          </div>

          {/* Details column */}
          <div className="md:col-span-7 p-8 md:p-10 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#FF5500] font-mono font-bold block mb-1">
                Profil & Démarche
              </span>
              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                {BOOK_CONFIG.author.name}
              </h3>
              <p className="text-xs uppercase tracking-wider text-[#A1A1AA] font-mono mt-1">
                {BOOK_CONFIG.author.role}
              </p>
            </div>

            <div className="space-y-4 text-sm text-[#D4D4D8] font-normal leading-relaxed">
              <p>{BOOK_CONFIG.author.bioLead}</p>
              <p>{BOOK_CONFIG.author.bioText}</p>
            </div>

            {/* Vision Quote Box matching the site style */}
            <div className="p-5 rounded-2xl bg-[#18181D] border-l-4 border-[#FF5500] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF5500] font-bold">
                <Quote className="w-3.5 h-3.5" />
                <span>VISION STRATÉGIQUE</span>
              </div>
              <p className="text-sm font-medium text-white italic leading-relaxed">
                « {BOOK_CONFIG.author.visionQuote} »
              </p>
            </div>

            {/* Editorial Notice */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#71717A]">
              <strong className="text-white/80">Note de publication :</strong> {BOOK_CONFIG.author.note}
            </div>

            {/* Actions: Signature Orange Pill Button + Close */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={BOOK_CONFIG.chariowUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  onClose();
                  if (onOpenChariow) {
                    e.preventDefault();
                    onOpenChariow();
                  }
                }}
                className="group w-full sm:w-auto pl-6 pr-2 py-2 bg-[#FF5500] hover:bg-[#E04B00] text-white font-bold text-xs uppercase tracking-wider rounded-full inline-flex items-center justify-between sm:justify-start gap-4 transition-all shadow-lg hover:shadow-[0_10px_30px_rgba(255,85,0,0.4)]"
              >
                <span>Accéder au livre ({BOOK_CONFIG.commercial.price} {BOOK_CONFIG.commercial.currency})</span>
                <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/15 hover:border-white/30 text-[#A1A1AA] hover:text-white text-xs uppercase tracking-wider font-semibold transition-colors text-center"
              >
                Fermer
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
