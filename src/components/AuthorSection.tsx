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
    <section id="auteur" className="py-20 md:py-28 bg-[#09090B] text-white relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-bold text-[#FF5500] tracking-wide block uppercase font-mono mb-2">
            La Voix du Livre
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Une transmission ancrée dans l'action réelle
          </h2>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Portrait */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[32px] overflow-hidden bg-[#141416] border border-white/10 group shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
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

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono font-bold text-[#FF5500] uppercase block">
                  Auteur & Entrepreneur
                </span>
                <h3 className="text-2xl font-bold text-white mt-0.5">
                  {BOOK_CONFIG.author.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Column 2: Bio & Vision Quote */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#FF5500] font-mono block mb-2">
                {BOOK_CONFIG.author.tagline}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                « Écrire pour clarifier, partager pour accélérer le passage à l'action. »
              </h3>
            </div>

            <div className="space-y-4 text-base text-[#A1A1AA] leading-relaxed">
              <p>{BOOK_CONFIG.author.bioLead}</p>
              <p>{BOOK_CONFIG.author.bioText}</p>
            </div>

            {/* Vision Quote Box */}
            <div className="p-8 rounded-[24px] bg-[#141418] border-l-4 border-[#FF5500] space-y-3">
              <p className="text-lg font-medium text-white italic leading-relaxed">
                « {BOOK_CONFIG.author.visionQuote} »
              </p>
              <span className="text-xs text-[#71717A] block">
                {BOOK_CONFIG.author.role} · Extrait de l'avant-propos
              </span>
            </div>

            {/* Pill button to open modal */}
            <div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="group pl-6 pr-2 py-2 bg-white hover:bg-[#F4F4F5] text-black font-bold text-xs uppercase tracking-wider rounded-full inline-flex items-center gap-3 transition-all"
              >
                <span>Découvrir la démarche de l'auteur</span>
                <span className="w-8 h-8 rounded-full bg-[#FF5500] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4" />
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
