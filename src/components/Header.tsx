import React, { useState, useEffect } from 'react';
import { BOOK_CONFIG } from '../config/book';
import { Menu, X, ArrowRight, BookOpen } from 'lucide-react';

interface HeaderProps {
  onOpenChariow?: () => void;
  onOpenReader?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenChariow, onOpenReader }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleBuyClick = (e: React.MouseEvent) => {
    if (onOpenChariow) {
      e.preventDefault();
      onOpenChariow();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090B]/95 backdrop-blur-md py-2.5 sm:py-4 border-b border-white/[0.08] shadow-lg'
            : 'bg-transparent py-3 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-12 flex items-center justify-between gap-2 sm:gap-6">
          
          {/* Logo in Folioblox style */}
          <a
            href="#"
            className="flex items-center gap-1.5 sm:gap-2 text-white font-extrabold text-base sm:text-lg md:text-xl tracking-tight group shrink-0"
          >
            <span className="truncate max-w-[150px] sm:max-w-none">{BOOK_CONFIG.title}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] inline-block animate-pulse shrink-0" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#A1A1AA]">
            <a href="#livre" className="hover:text-white transition-colors">
              Le Livre
            </a>
            <a href="#transformation" className="hover:text-white transition-colors">
              L'Impact
            </a>
            <a href="#themes" className="hover:text-white transition-colors">
              Thèmes
            </a>
            <a href="#auteur" className="hover:text-white transition-colors">
              L'Auteur
            </a>
            <a href="#commander" className="hover:text-white transition-colors">
              Commander
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Action: Pill button matching reference image */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {onOpenReader && (
              <button
                type="button"
                onClick={onOpenReader}
                className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-[#A1A1AA] hover:text-white transition-colors px-2.5 sm:px-3 py-2 rounded-full hover:bg-white/5"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>Extrait</span>
              </button>
            )}

            {/* Signature White Pill Button with Orange Circular Arrow */}
            <a
              href={BOOK_CONFIG.chariowUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleBuyClick}
              className="group pl-3 sm:pl-4 md:pl-5 pr-1 sm:pr-1.5 py-1 sm:py-1.5 bg-white hover:bg-[#F4F4F5] text-black font-bold text-[11px] sm:text-xs tracking-wide rounded-full flex items-center gap-1.5 sm:gap-2.5 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              <span>
                Acheter<span className="hidden sm:inline"> sur Chariow</span>
              </span>
              <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-[#FF5500] group-hover:bg-[#E04B00] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 shrink-0">
                <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </span>
            </a>

            {/* Mobile / Tablet menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-white hover:text-[#FF5500] transition-colors focus:outline-none rounded-lg"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer (Responsive on all screen heights & landscape phones) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#09090B]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-16 sm:pt-20 pb-6 sm:pb-8 px-4 sm:px-8 overflow-y-auto overscroll-contain">
          <div className="space-y-4 sm:space-y-6 max-w-md w-full mx-auto">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-[11px] uppercase tracking-widest text-[#FF5500] font-mono">
                Menu de Navigation
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Fermer le menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-2 sm:space-y-3 text-lg sm:text-2xl font-bold text-white">
              <a
                href="#livre"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-white/[0.08] hover:text-[#FF5500] flex items-center justify-between active:bg-white/5 px-1 rounded-md"
              >
                <span>Le Livre & Vision</span>
                <span className="text-xs font-mono text-[#71717A]">01</span>
              </a>
              <a
                href="#transformation"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-white/[0.08] hover:text-[#FF5500] flex items-center justify-between active:bg-white/5 px-1 rounded-md"
              >
                <span>Ce que le livre change</span>
                <span className="text-xs font-mono text-[#71717A]">02</span>
              </a>
              <a
                href="#themes"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-white/[0.08] hover:text-[#FF5500] flex items-center justify-between active:bg-white/5 px-1 rounded-md"
              >
                <span>Les 4 Piliers Stratégiques</span>
                <span className="text-xs font-mono text-[#71717A]">03</span>
              </a>
              <a
                href="#auteur"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-white/[0.08] hover:text-[#FF5500] flex items-center justify-between active:bg-white/5 px-1 rounded-md"
              >
                <span>L'Auteur</span>
                <span className="text-xs font-mono text-[#71717A]">04</span>
              </a>
              <a
                href="#commander"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-white/[0.08] hover:text-[#FF5500] flex items-center justify-between active:bg-white/5 px-1 rounded-md"
              >
                <span>Commander ({BOOK_CONFIG.commercial.price} {BOOK_CONFIG.commercial.currency})</span>
                <span className="text-xs font-mono text-[#71717A]">05</span>
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-white/[0.08] hover:text-[#FF5500] flex items-center justify-between active:bg-white/5 px-1 rounded-md"
              >
                <span>FAQ</span>
                <span className="text-xs font-mono text-[#71717A]">06</span>
              </a>
            </nav>
          </div>

          <div className="space-y-3 pt-4 sm:pt-6 border-t border-white/[0.08] max-w-md w-full mx-auto">
            {onOpenReader && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReader();
                }}
                className="w-full py-3 px-5 border border-white/20 rounded-full text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/5 active:scale-[0.98] transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#FF5500]" />
                <span>Feuilleter l'Extrait</span>
              </button>
            )}

            <a
              href={BOOK_CONFIG.chariowUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleBuyClick(e);
              }}
              className="w-full flex items-center justify-between pl-4 sm:pl-6 pr-2 py-2.5 bg-[#FF5500] hover:bg-[#E04B00] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg active:scale-[0.98] transition-all"
            >
              <span className="truncate pr-2">Acheter sur Chariow ({BOOK_CONFIG.commercial.price} {BOOK_CONFIG.commercial.currency})</span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-black flex items-center justify-center shrink-0">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
