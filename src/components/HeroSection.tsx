import React from 'react';
import { BOOK_CONFIG } from '../config/book';
import { ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroDustParticles } from './HeroDustParticles';

interface HeroSectionProps {
  onOpenChariow?: () => void;
  onOpenReader?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenChariow,
  onOpenReader,
}) => {
  const handleBuyClick = (e: React.MouseEvent) => {
    if (onOpenChariow) {
      e.preventDefault();
      onOpenChariow();
    }
  };

  return (
    <div className="relative bg-[#09090B]">
      {/* 1. Main Hero Container with Luxury Villa Sunset Background */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 md:pb-20 px-6 lg:px-12 rounded-b-[40px] md:rounded-b-[56px] overflow-hidden border-b border-white/[0.08] shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
        
        {/* Real Luxury Villa Image in the background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={BOOK_CONFIG.images.villa}
            alt="Villa d'architecte contemporaine au coucher du soleil"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.88] contrast-110 select-none transition-transform duration-1000"
          />

          {/* Warm sunset orange atmospheric tint blending with the villa sky */}
          <div 
            className="absolute inset-0 opacity-45 mix-blend-color"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #FF5500 0%, #D43800 40%, transparent 80%)'
            }}
          />

          {/* Top dark gradient for header legibility */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none" />

          {/* Lateral left vignette so the main title pops with 100% clarity */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-black/85 via-black/50 to-transparent pointer-events-none" />

          {/* Bottom dark blend into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#09090B] via-[#09090B]/80 to-transparent pointer-events-none" />
        </div>

        {/* Subtle Ambient Dust Particles Field */}
        <HeroDustParticles />

        {/* Content Overlay */}
        <div className="relative max-w-7xl mx-auto w-full z-10 my-auto">
          
          {/* Top Row: Giant Title on Left + Punchy Philosophy Quote on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16 md:mb-24">
            
            {/* Left Headline */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-4"
            >
              <span className="text-xs sm:text-sm font-semibold text-white/95 tracking-wide block uppercase font-mono drop-shadow-md">
                {BOOK_CONFIG.categoryLabel}
              </span>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.96] tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
                Un état d'esprit<br />
                <span className="text-white drop-shadow-[0_4px_35px_rgba(255,85,0,0.7)]">
                  qui change tout.
                </span>
              </h1>
            </motion.div>

            {/* Right Statement + CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 lg:pt-6 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3 p-6 sm:p-7 rounded-3xl bg-black/50 backdrop-blur-md border border-white/15 shadow-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                  La réussite durable n'est jamais un hasard.
                </h2>
                <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed max-w-md drop-shadow">
                  {BOOK_CONFIG.heroSubtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href={BOOK_CONFIG.chariowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleBuyClick}
                  className="group pl-6 pr-2 py-2 bg-white hover:bg-[#F4F4F5] text-black font-bold text-xs uppercase tracking-wider rounded-full flex items-center gap-4 transition-all shadow-[0_10px_35px_rgba(0,0,0,0.7)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Acheter sur Chariow ({BOOK_CONFIG.commercial.price} {BOOK_CONFIG.commercial.currency})</span>
                  <span className="w-8 h-8 rounded-full bg-[#FF5500] group-hover:bg-[#E04B00] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>

                {onOpenReader && (
                  <button
                    type="button"
                    onClick={onOpenReader}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold text-white/95 hover:text-white bg-black/60 hover:bg-black/80 border border-white/25 transition-all backdrop-blur-md shadow-lg"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#FFA040]" />
                    <span>Feuilleter l'extrait</span>
                  </button>
                )}
              </div>
            </motion.div>

          </div>

          {/* Bottom Row of Hero: Numbered Category Pillars (# 01, # 02, # 03, # 04) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
          >
            <div className="p-4 rounded-2xl bg-black/55 backdrop-blur-md border border-white/10 hover:border-[#FF5500]/50 transition-colors">
              <span className="text-xs font-mono font-bold text-[#FFA040] block mb-1"># 01</span>
              <span className="text-sm md:text-base font-bold text-white block">Clarté Stratégique</span>
              <span className="text-xs text-white/80">Éliminer le superflu</span>
            </div>

            <div className="p-4 rounded-2xl bg-black/55 backdrop-blur-md border border-white/10 hover:border-[#FF5500]/50 transition-colors">
              <span className="text-xs font-mono font-bold text-[#FFA040] block mb-1"># 02</span>
              <span className="text-sm md:text-base font-bold text-white block">Discipline Pure</span>
              <span className="text-xs text-white/80">Construire des rituels</span>
            </div>

            <div className="p-4 rounded-2xl bg-black/55 backdrop-blur-md border border-white/10 hover:border-[#FF5500]/50 transition-colors">
              <span className="text-xs font-mono font-bold text-[#FFA040] block mb-1"># 03</span>
              <span className="text-sm md:text-base font-bold text-white block">Vitesse d'Exécution</span>
              <span className="text-xs text-white/80">Boucles de rétroaction</span>
            </div>

            <div className="p-4 rounded-2xl bg-black/55 backdrop-blur-md border border-white/10 hover:border-[#FF5500]/50 transition-colors">
              <span className="text-xs font-mono font-bold text-[#FFA040] block mb-1"># 04</span>
              <span className="text-sm md:text-base font-bold text-white block">Souveraineté Business</span>
              <span className="text-xs text-white/80">Actifs & levier pérenne</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Trust Strip directly below the curved hero */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 lg:px-12 py-10 md:py-14"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-[#A1A1AA]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#71717A] shrink-0 font-mono">
            Boutique Officielle Chariow
          </span>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-sm font-semibold text-white/80">
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="w-4 h-4 rounded-full border-2 border-[#FF5500] inline-block" />
              <span>Paiement SSL 256 bits</span>
            </div>

            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="text-[#FF5500] font-bold text-base">⧗</span>
              <span>Expédition Suivie</span>
            </div>

            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="text-[#FF5500] font-bold text-base">◑</span>
              <span>Édition Reliée Collector</span>
            </div>

            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="text-[#FF5500] font-bold text-base">✦</span>
              <span>Tirage Officiel</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
