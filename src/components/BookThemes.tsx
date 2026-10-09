import React, { useState } from 'react';
import { BOOK_CONFIG } from '../config/book';
import { Compass, Flame, Scale, TrendingUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface BookThemesProps {
  onOpenChariow?: () => void;
}

const iconMap = {
  Compass,
  Flame,
  TrendingUp,
  Scale,
};

export const BookThemes: React.FC<BookThemesProps> = ({ onOpenChariow }) => {
  const [activeThemeId, setActiveThemeId] = useState<string>(BOOK_CONFIG.themes[0].id);

  return (
    <section id="themes" className="py-20 md:py-28 bg-[#09090B] text-white relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <span className="text-sm font-bold text-[#FF5500] tracking-wide block uppercase font-mono mb-2">
              Le Sommaire Exécutif
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-xl">
              Les 4 Thèmes Stratégiques
            </h2>
          </div>

          <p className="text-base text-[#A1A1AA] max-w-md font-normal leading-relaxed">
            Chaque partie de l'ouvrage s'attaque à une friction majeure pour vous donner des règles de décision claires.
          </p>
        </motion.div>

        {/* 4 Cards Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOOK_CONFIG.themes.map((theme, index) => {
            const IconComponent = iconMap[theme.iconName] || Compass;
            const isSelected = activeThemeId === theme.id;

            return (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveThemeId(theme.id)}
                onClick={() => setActiveThemeId(theme.id)}
                className={`relative p-8 rounded-[28px] transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[380px] border ${
                  isSelected
                    ? 'bg-[#18181C] border-[#FF5500] shadow-[0_16px_50px_rgba(255,85,0,0.2)] -translate-y-1'
                    : 'bg-[#121214] border-white/10 hover:border-white/20 hover:bg-[#151518]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-mono font-bold text-[#FF5500]">
                      # 0{index + 1}
                    </span>
                    <div className={`p-2.5 rounded-full border ${
                      isSelected ? 'border-[#FF5500] text-[#FF5500] bg-[#FF5500]/10' : 'border-white/10 text-[#71717A]'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#71717A] font-mono mb-2">
                    <Clock className="w-3 h-3 text-[#FF5500]" />
                    <span>{theme.readTime}</span>
                  </div>

                  <span className="text-xs uppercase tracking-wider text-[#A1A1AA] block mb-2 font-mono">
                    {theme.subtitle}
                  </span>

                  <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                    {theme.title}
                  </h3>

                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {theme.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <span className="text-xs text-[#FF5500] font-bold block">
                    ✦ {theme.keyTakeaway}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
