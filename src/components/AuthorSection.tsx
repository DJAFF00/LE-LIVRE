import React, { useState } from 'react';
import { BOOK_CONFIG } from '../config/book';
import { ArrowRight, Quote } from 'lucide-react';
import { AuthorModal } from './AuthorModal';

interface AuthorSectionProps {
  onOpenChariow?: () => void;
}

export const AuthorSection: React.FC<AuthorSectionProps> = ({ onOpenChariow }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="auteur" className="py-14 sm:py-20 md:py-28 bg-[#09090B] text-white relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#FF5500] tracking-wide block uppercase font-mono mb-2">
            La Voix du Livre
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Une transmission ancrée dans l'action réelle
          </h2>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Column 1: Portrait */}
          <div className="lg:col-span-5 max-w-md mx-auto lg:max-w-none w-full">
            <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#141416] border border-white/10 group shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={BOOK_CONFIG.images.author}
                  alt="Portrait officiel de l'auteur"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6">
                <span className="text-[11px] sm:text-xs font-mono font-bold text-[#FF5500] uppercase block">
                  Auteur & Entrepreneur
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {BOOK_CONFIG.author.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Column 2: Bio & Vision Quote */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#FF5500] font-mono block mb-2 font-bold">
                {BOOK_CONFIG.author.tagline}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                « Écrire pour clarifier, partager pour accélérer le passage à l'action. »
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              <p>{BOOK_CONFIG.author.bioLead}</p>
              <p>{BOOK_CONFIG.author.bioText}</p>
            </div>

            {/* Vision Quote Box */}
            <div className="p-5 sm:p-8 rounded-[20px] sm:rounded-[24px] bg-[#141418] border-l-4 border-[#FF5500] space-y-2.5 sm:space-y-3">
              <p className="text-base sm:text-lg font-medium text-white italic leading-relaxed">
                « {BOOK_CONFIG.author.visionQuote} »
              </p>
              <span className="text-xs text-[#71717A] block font-mono">
                {BOOK_CONFIG.author.role} · Extrait de l'avant-propos
              </span>
            </div>

            {/* Pill button to open modal */}
            <div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="group w-full sm:w-auto pl-5 sm:pl-6 pr-2 py-2 sm:py-2.5 bg-white hover:bg-[#F4F4F5] text-black font-bold text-xs uppercase tracking-wider rounded-full inline-flex items-center justify-between sm:justify-start gap-3 transition-all active:scale-[0.98]"
              >
                <span>Découvrir la démarche de l'auteur</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FF5500] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>
              </button>
            </div>

          </div>

        </div>

      </div>

      <AuthorModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onOpenChariow={onOpenChariow}
      />
    </section>
  );
};
