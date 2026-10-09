import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Spring smoothing for silky responsive scroll tracking
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none bg-white/[0.05]">
      <motion.div
        className="h-full bg-gradient-to-r from-[#D43800] via-[#FF5500] to-[#FFA24A] origin-left shadow-[0_0_10px_rgba(255,85,0,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
};
