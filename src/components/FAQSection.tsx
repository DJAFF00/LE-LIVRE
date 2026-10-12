import React, { useState } from 'react';
import { BOOK_CONFIG } from '../config/book';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface FAQSectionProps {
  onOpenChariow?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenChariow }) => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    [BOOK_CONFIG.faq[0].id]: true,
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const categories = ['Tous', 'Achat & Paiement', 'Format & Contenu', 'Expédition & Suivi'];

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaq = selectedCategory === 'Tous'
    ? BOOK_CONFIG.faq
    : BOOK_CONFIG.faq.filter((item) => item.category === selectedCategory);

  return (
    <section id="faq" className="py-14 sm:py-20 md:py-28 bg-[#09090B] text-white relative border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold text-[#FF5500] tracking-wide block uppercase font-mono mb-2">
            Questions Fréquentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Tout Ce Que Vous Devez Savoir
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#A1A1AA]">
            Informations sur votre commande, le paiement sécurisé et l'expédition via Chariow.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#FF5500] text-white shadow-lg'
                  : 'bg-[#141416] text-[#A1A1AA] hover:bg-[#1C1C20] hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Cards */}
        <div className="space-y-3 sm:space-y-4">
          {filteredFaq.map((item) => {
            const isOpen = !!openIds[item.id];

            return (
              <div
                key={item.id}
                className={`rounded-xl sm:rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#FF5500]/50 bg-[#16161A]' : 'border-white/10 bg-[#121214] hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3.5">
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-[#FF5500] shrink-0 hidden sm:inline">
                      {item.category}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white">
                      {item.question}
                    </span>
                  </div>

                  <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                    isOpen ? 'bg-[#FF5500] text-white border-[#FF5500]' : 'border-white/10 text-white/70'
                  }`}>
                    <ChevronDown
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed border-t border-white/10">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Chariow Direct Banner */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#141418] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-[#A1A1AA] text-center sm:text-left">
            <span className="font-bold text-white block text-sm sm:text-base">Besoin d'aide supplémentaire ?</span>
            <span>Le service client Chariow est disponible pour le suivi de votre commande.</span>
          </div>

          <a
            href={BOOK_CONFIG.chariowUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (onOpenChariow) {
                e.preventDefault();
                onOpenChariow();
              }
            }}
            className="group w-full sm:w-auto pl-4 sm:pl-5 pr-1.5 py-1.5 bg-white hover:bg-white/90 text-black font-semibold text-xs uppercase tracking-wider rounded-full inline-flex items-center justify-between sm:justify-start gap-3 transition-all shrink-0"
          >
            <span>Accéder à Chariow</span>
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FF5500] text-white flex items-center justify-center shrink-0">
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};
