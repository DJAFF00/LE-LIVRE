import React from 'react';
import { BOOK_CONFIG } from '../config/book';
import { ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

interface BookIntroductionProps {
  onOpenReader?: () => void;
  onOpenChariow?: () => void;
}

export const BookIntroduction: React.FC<BookIntroductionProps> = ({
  onOpenReader,
  onOpenChariow,
}) => {
  const handleBuyClick = (e: React.MouseEvent) => {
    if (onOpenChariow) {
      e.preventDefault();
      onOpenChariow();
    }
  };

  return (
    <section id="livre" className="py-20 md:py-32 bg-[#09090B] text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Header Split with Framer Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 md:mb-20"
        >
          
          {/* Left Column: Orange Kicker + Giant Bold Headline */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-sm md:text-base font-bold text-[#FF5500] tracking-wide block uppercase font-mono">
              Au Cœur de la Méthode
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
              Des Principes Clairs<br />
              Pour Dépasser<br />
              Vos Limites
            </h2>
          </div>

          {/* Right Column: Paragraph + Signature Orange Pill Button */}
          <div className="lg:col-span-5 space-y-6 lg:pt-4">
            <p className="text-base sm:text-lg text-[#A1A1AA] font-normal leading-relaxed">
              Ce livre n'est pas un recueil de théories abstraites. C'est un protocole opérationnel éprouvé, conçu pour vous aider à reprendre le contrôle de votre temps, aiguiser votre jugement et bâtir une trajectoire d'exception.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={BOOK_CONFIG.chariowUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBuyClick}
                className="group pl-6 pr-2 py-2 bg-[#FF5500] hover:bg-[#E04B00] text-white font-bold text-xs uppercase tracking-wider rounded-full inline-flex items-center gap-3 transition-all shadow-lg hover:shadow-[0_10px_30px_rgba(255,85,0,0.4)]"
              >
                <span>Acheter sur Chariow</span>
                <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>

              {onOpenReader && (
                <button
                  type="button"
                  onClick={onOpenReader}
                  className="px-5 py-3 rounded-full text-xs font-semibold text-white/90 hover:text-white border border-white/20 hover:border-white/40 transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>Feuilleter l'extrait</span>
                </button>
              )}
            </div>
          </div>

        </motion.div>

        {/* 3 Vertical Rounded Cards with Staggered Scroll Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1: Open Book Reading Photography */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-[28px] overflow-hidden bg-[#141416] border border-white/10 hover:border-[#FF5500]/50 transition-all duration-300"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img
                src={BOOK_CONFIG.images.reading}
                alt="Lecture du livre sur table en travertin"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            <div className="p-6 relative">
              <span className="text-xs font-mono font-bold text-[#FF5500] uppercase block mb-1">
                01 · Format & Lecture
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Une Expérience Immersive
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                Pagination aérée, typographie soignée et chapitrage rythmé pour favoriser l'assimilation durable des concepts.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Author Profile in Brutalist Architecture */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-[28px] overflow-hidden bg-[#141416] border border-white/10 hover:border-[#FF5500]/50 transition-all duration-300"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img
                src={BOOK_CONFIG.images.author}
                alt="Portrait de l'auteur en studio architectural"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            <div className="p-6 relative">
              <span className="text-xs font-mono font-bold text-[#FF5500] uppercase block mb-1">
                02 · L'Auteur & Vision
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                La Voix du Terrain
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                Né de l'épreuve réelle des affaires et des arbitrages stratégiques, sans concession ni faux semblants.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Macro Craft Details of the Book */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-[28px] overflow-hidden bg-[#141416] border border-white/10 hover:border-[#FF5500]/50 transition-all duration-300"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img
                src={BOOK_CONFIG.images.craftDetail}
                alt="Reliure cousue et dorure à chaud"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            <div className="p-6 relative">
              <span className="text-xs font-mono font-bold text-[#FF5500] uppercase block mb-1">
                03 · L'Objet d'Art
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Fabrication Prestige
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                Couverture rigide toilée, marquage à chaud or et papier bouffant crème 100g pour durer des décennies.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
