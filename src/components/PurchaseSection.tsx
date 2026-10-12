import React from 'react';
import { BOOK_CONFIG } from '../config/book';
import { ArrowRight, ShieldCheck, Lock, Truck, BookCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface PurchaseSectionProps {
  onOpenChariow?: () => void;
}

export const PurchaseSection: React.FC<PurchaseSectionProps> = ({ onOpenChariow }) => {
  const handleBuyClick = (e: React.MouseEvent) => {
    if (onOpenChariow) {
      e.preventDefault();
      onOpenChariow();
    }
  };

  return (
    <section id="commander" className="py-14 sm:py-20 md:py-28 bg-[#09090B] text-white relative border-t border-white/[0.08]">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] lg:w-[700px] h-[350px] sm:h-[500px] lg:h-[700px] pointer-events-none rounded-full blur-[140px] sm:blur-[180px] opacity-20"
        style={{ background: 'radial-gradient(circle, #FF5500 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="text-xs sm:text-sm font-bold text-[#FF5500] tracking-wide block uppercase font-mono mb-2">
            Boutique Officielle Chariow
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Commandez Votre Exemplaire
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#A1A1AA]">
            Une édition collector reliée avec un soin artisanal pour vous accompagner sur le long terme.
          </p>
        </motion.div>

        {/* Commercial Box with rounded corners and glowing border */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center bg-[#121214] border border-white/10 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] p-5 sm:p-8 md:p-12 lg:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.9)]"
        >
          
          {/* Column 1: Book in Studio Lighting */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-[240px] sm:max-w-[320px] md:max-w-[360px] w-full">
              
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#FF5500]/30 to-transparent blur-2xl opacity-60 rounded-3xl" />

              <div className="relative aspect-[3/4] bg-[#09090B] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src={BOOK_CONFIG.images.cover}
                  alt={`Couverture de ${BOOK_CONFIG.title}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FF5500]/15 to-white/20 pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity" />
              </div>

              <div className="mt-3 sm:mt-4 flex items-center justify-between text-[11px] sm:text-xs text-[#71717A] px-1 font-mono">
                <span>RÉF. PRESTIGE-2026</span>
                <span className="text-[#FF5500] font-bold">✦ PREMIER TIRAGE</span>
              </div>
            </div>
          </div>

          {/* Column 2: Specs & Signature Orange Buy Button */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            <div className="border-b border-white/10 pb-5 sm:pb-6">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-[#FF5500] uppercase block mb-1">
                LIVRE PHYSIQUE & EXPÉDITION INTERNATIONALE
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {BOOK_CONFIG.title} — {BOOK_CONFIG.titleSuffix}
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] mt-2 leading-relaxed">
                {BOOK_CONFIG.heroSubtitle}
              </p>
            </div>

            {/* Price Block */}
            <div className="flex flex-wrap items-baseline gap-3 sm:gap-4">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tabular-nums tracking-tight">
                  {BOOK_CONFIG.commercial.price}
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-[#FF5500]">
                  {BOOK_CONFIG.commercial.currency}
                </span>
              </div>

              {BOOK_CONFIG.commercial.originalPrice && (
                <span className="text-lg sm:text-xl text-[#71717A] line-through tabular-nums">
                  {BOOK_CONFIG.commercial.originalPrice} {BOOK_CONFIG.commercial.currency}
                </span>
              )}

              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#FF5500] font-bold bg-[#FF5500]/10 border border-[#FF5500]/30 px-3 py-1 rounded-full">
                Tarif de Lancement
              </span>
            </div>

            {/* Technical Specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 text-xs">
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#16161A] border border-white/10 space-y-1">
                <span className="text-[#71717A] uppercase font-mono block text-[10px]">Format & Reliure</span>
                <span className="text-white font-bold block">{BOOK_CONFIG.commercial.format}</span>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#16161A] border border-white/10 space-y-1">
                <span className="text-[#71717A] uppercase font-mono block text-[10px]">Pagination</span>
                <span className="text-white font-bold block tabular-nums">{BOOK_CONFIG.commercial.pages} · Signet satin</span>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#16161A] border border-white/10 space-y-1">
                <span className="text-[#71717A] uppercase font-mono block text-[10px]">Papier Intérieur</span>
                <span className="text-white font-bold block">{BOOK_CONFIG.commercial.paperQuality}</span>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#16161A] border border-white/10 space-y-1">
                <span className="text-[#71717A] uppercase font-mono block text-[10px]">Disponibilité</span>
                <span className="text-[#FF5500] font-bold block">{BOOK_CONFIG.commercial.availability}</span>
              </div>
            </div>

            {/* Validation Notice */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#18181D] border border-white/10 text-xs text-[#A1A1AA] flex items-start gap-3">
              <BookCheck className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-bold">Synchronisation boutique Chariow :</strong>
                <span>{BOOK_CONFIG.commercial.toConfigureNotice}</span>
              </div>
            </div>

            {/* The Signature Orange Pill Button with Circular Arrow */}
            <div className="space-y-4 pt-1 sm:pt-2">
              <a
                href={BOOK_CONFIG.chariowUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBuyClick}
                className="group w-full pl-5 sm:pl-8 pr-2 sm:pr-2.5 py-3 sm:py-3.5 bg-[#FF5500] hover:bg-[#E04B00] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full flex items-center justify-between transition-all shadow-[0_10px_35px_rgba(255,85,0,0.35)] hover:shadow-[0_15px_45px_rgba(255,85,0,0.5)] active:scale-[0.99]"
              >
                <span className="truncate pr-2">Acheter sur Chariow ({BOOK_CONFIG.commercial.price} {BOOK_CONFIG.commercial.currency})</span>
                <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-md shrink-0">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </a>

              {/* Security badges */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs text-[#71717A]">
                <span className="flex items-center gap-1.5 text-white/80">
                  <Lock className="w-3.5 h-3.5 text-[#FF5500]" />
                  Paiement SSL 256 bits Chariow
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5 text-white/80">
                  <Truck className="w-3.5 h-3.5 text-[#FF5500]" />
                  Expédition avec numéro de suivi
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5 text-white/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF5500]" />
                  Tirage certifié officiel
                </span>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
