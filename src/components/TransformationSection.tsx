import React from 'react';
import { BOOK_CONFIG } from '../config/book';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface TransformationSectionProps {
  onOpenChariow?: () => void;
}

export const TransformationSection: React.FC<TransformationSectionProps> = ({ onOpenChariow }) => {
  return (
    <section id="transformation" className="py-20 md:py-28 bg-[#09090B] text-white relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 md:mb-18"
        >
          <span className="text-sm font-bold text-[#FF5500] tracking-wide block uppercase font-mono mb-2">
            Le Pivot Stratégique
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Ce qui change concrètement après la lecture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] font-normal leading-relaxed">
            Ce livre est un outil de transformation opérationnelle conçu pour éliminer l'hésitation et installer des réflexes de décision de haut niveau.
          </p>
        </motion.div>

        {/* 2 Comparison Cards with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card Left: L'État de Dispersion */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-[28px] bg-[#121214] border border-white/10 space-y-6"
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono font-bold text-[#71717A] uppercase block">
                  AVANT LA LECTURE
                </span>
                <h3 className="text-2xl font-bold text-white/70 mt-1">
                  Le Piège de la Dispersion
                </h3>
              </div>
              <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#71717A] text-xs font-mono">
                ✕
              </span>
            </div>

            <div className="space-y-5">
              {BOOK_CONFIG.transformations.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 text-sm text-[#71717A] leading-relaxed">
                  <span className="font-mono text-xs pt-0.5 text-white/30 shrink-0">0{idx + 1}</span>
                  <p>{item.before}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card Right: Après la Méthode */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-[28px] bg-[#16161A] border border-[#FF5500]/40 space-y-6 relative shadow-[0_20px_50px_rgba(255,85,0,0.12)]"
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono font-bold text-[#FF5500] uppercase block">
                  APRÈS L'INTÉGRATION
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  La Clarté & L'Impact
                </h3>
              </div>
              <span className="w-8 h-8 rounded-full bg-[#FF5500]/20 border border-[#FF5500] flex items-center justify-center text-[#FF5500] text-xs font-mono">
                ✦
              </span>
            </div>

            <div className="space-y-5">
              {BOOK_CONFIG.transformations.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 text-sm text-white/95 leading-relaxed font-normal">
                  <span className="font-mono text-xs pt-0.5 text-[#FF5500] font-bold shrink-0">0{idx + 1}</span>
                  <p>{item.after}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
