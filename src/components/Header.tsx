import React, { useState, useEffect } from 'react';
import { BOOK_CONFIG } from '../config/book';
import { ArrowUpRight, Menu, X, ArrowRight, BookOpen } from 'lucide-react';

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
            ? 'bg-[#09090B]/90 backdrop-blur-md py-4 border-b border-white/[0.08]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-8">
          
          {/* Logo in Folioblox style */}
          <a
            href="#"
            className="flex items-center gap-2 text-white font-extrabold text-xl tracking-tight group shrink-0"
          >
            <span>{BOOK_CONFIG.title}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] inline-block" />
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A1A1AA]">
            <a
              href="#livre"
              className="hover:text-white transition-colors"
            >
              Le Livre
            </a>
            <a
              href="#transformation"
              className="hover:text-white transition-colors"
            >
              L'Impact
            </a>
            <a
              href="#themes"
              className="hover:text-white transition-colors"
            >
              Thèmes
            </a>
            <a
              href="#auteur"
              className="hover:text-white transition-colors"
            >
              L'Auteur
            </a>
            <a
              href="#commander"
              className="hover:text-white transition-colors"
            >
              Commander
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Right Action: Pill button matching reference image */}
          <div className="flex items-center gap-3 shrink-0">
            {onOpenReader && (
              <button
                type="button"
                onClick={onOpenReader}
                className="hidden lg:flex items-center gap-2 text-xs font-semibold text-[#A1A1AA] hover:text-white transition-colors px-3 py-2"
              >
                <BookOpen className="w-4 h-4 text-[#FF5500]" />
                <span>Extrait</span>
              </button>
            )}

            {/* Signature White Pill Button with Orange Circular Arrow */}
            <a
              href={BOOK_CONFIG.chariowUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleBuyClick}
              className="group pl-5 pr-1.5 py-1.5 bg-white hover:bg-[#F4F4F5] text-black font-semibold text-xs tracking-wide rounded-full flex items-center gap-3 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              <span>Acheter sur Chariow</span>
              <span className="w-7 h-7 rounded-full bg-[#FF5500] group-hover:bg-[#E04B00] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-[#FF5500] transition-colors focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#09090B]/98 backdrop-blur-2xl md:hidden flex flex-col justify-between pt-24 pb-10 px-8">
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#FF5500] font-mono">
              Navigation
            </div>

            <nav className="flex flex-col space-y-4 text-2xl font-bold text-white">
              <a
                href="#livre"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/[0.08] hover:text-[#FF5500] flex items-center justify-between"
              >
                <span>Le Livre & Vision</span>
                <span className="text-xs font-mono text-[#71717A]">01</span>
              </a>
              <a
                href="#transformation"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/[0.08] hover:text-[#FF5500] flex items-center justify-between"
              >
                <span>Ce que le livre change</span>
                <span className="text-xs font-mono text-[#71717A]">02</span>
              </a>
              <a
                href="#themes"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/[0.08] hover:text-[#FF5500] flex items-center justify-between"
              >
                <span>Les 4 Piliers Stratégiques</span>
                <span className="text-xs font-mono text-[#71717A]">03</span>
              </a>
              <a
                href="#auteur"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/[0.08] hover:text-[#FF5500] flex items-center justify-between"
              >
                <span>L'Auteur</span>
                <span className="text-xs font-mono text-[#71717A]">04</span>
              </a>
              <a
                href="#commander"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/[0.08] hover:text-[#FF5500] flex items-center justify-between"
              >
                <span>Commander ({BOOK_CONFIG.commercial.price} {BOOK_CONFIG.commercial.currency})</span>
                <span className="text-xs font-mono text-[#71717A]">05</span>
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/[0.08] hover:text-[#FF5500] flex items-center justify-between"
              >
                <span>FAQ</span>
                <span className="text-xs font-mono text-[#71717A]">06</span>
              </a>
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/[0.08]">
            {onOpenReader && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReader();
                }}
                className="w-full py-3.5 px-6 border border-white/20 rounded-full text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/5"
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
              className="w-full flex items-center justify-between pl-6 pr-2 py-2 bg-[#FF5500] hover:bg-[#E04B00] text-white font-bold text-xs uppercase tracking-wider rounded-full"
            >
              <span>Acheter sur Chariow ({BOOK_CONFIG.commercial.price} {BOOK_CONFIG.commercial.currency})</span>
              <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
