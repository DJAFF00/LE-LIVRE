import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BOOK_CONFIG } from '../config/book';

interface PreloaderProps {
  onComplete: () => void;
}

const KEYWORDS = [
  'Ambition',
  'Discipline',
  'Stratégie',
  'Exécution',
  'Souveraineté',
];

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Disable body scroll while preloader is active
    document.body.style.overflow = 'hidden';

    const duration = 1800; // 1.8s total loading time
    const intervalTime = 25;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => {
              document.body.style.overflow = '';
              onComplete();
            }, 600); // Wait for exit animation
          }, 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  // Synchronized keyword based on progress percentage
  const currentKeywordIndex = Math.min(
    KEYWORDS.length - 1,
    Math.floor((progress / 100) * KEYWORDS.length)
  );
  const currentKeyword = KEYWORDS[currentKeywordIndex];

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09090B] text-white select-none cursor-default"
        >
          {/* Background Ambient Sunset Glow */}
          <div 
            className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-40 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #FF5500 0%, #B82E00 45%, transparent 75%)'
            }}
          />

          {/* Central Logo & Animation */}
          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            
            {/* Brand Logo with Orange Dot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="font-extrabold text-3xl sm:text-4xl tracking-tight text-white">
                {BOOK_CONFIG.title}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] inline-block animate-pulse" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-xs uppercase tracking-[0.25em] text-[#A1A1AA] font-mono mb-6"
            >
              {BOOK_CONFIG.titleSuffix}
            </motion.p>

            {/* Animated Morphing Keywords: Ambition, Discipline, Stratégie, ... */}
            <div className="h-8 flex items-center justify-center mb-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentKeyword}
                  initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(3px)' }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#FFA24A] font-mono"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                  <span>{currentKeyword}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Bar Container */}
            <div className="w-64 sm:w-72 h-[3px] bg-white/10 rounded-full overflow-hidden relative mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-[#D43800] via-[#FF5500] to-[#FFA24A] rounded-full shadow-[0_0_12px_rgba(255,85,0,0.9)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Numeric Percentage & Status */}
            <div className="flex items-center justify-between w-64 sm:w-72 text-xs font-mono text-[#71717A]">
              <span className="tracking-wider">CHARGEMENT</span>
              <span className="text-white font-semibold tabular-nums">
                {Math.round(progress)}%
              </span>
            </div>

          </div>

          {/* Subtle Bottom Note */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-8 text-[11px] font-mono text-[#52525B] tracking-widest uppercase"
          >
            Édition Officielle Chariow
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
