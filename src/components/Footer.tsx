import React, { useState } from 'react';
import { BOOK_CONFIG } from '../config/book';
import { ArrowRight, X } from 'lucide-react';

interface FooterProps {
  onOpenChariow?: () => void;
  onOpenReader?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenChariow, onOpenReader }) => {
  const [legalModalContent, setLegalModalContent] = useState<string | null>(null);

  const handleBuyClick = (e: React.MouseEvent) => {
    if (onOpenChariow) {
      e.preventDefault();
      onOpenChariow();
    }
  };

  return (
    <>
      <footer className="bg-[#050507] text-white border-t border-white/10 pt-12 sm:pt-16 pb-10 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-white/10">
            
            {/* Column 1: Logo & Mission */}
            <div className="sm:col-span-2 lg:col-span-5 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 text-white font-extrabold text-xl sm:text-2xl tracking-tight">
                <span>{BOOK_CONFIG.title}</span>
                <span className="w-2 h-2 rounded-full bg-[#FF5500] inline-block" />
              </div>

              <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-sm leading-relaxed">
                Vitrine éditoriale officielle pour l'ouvrage de stratégie personnelle et de leadership. Vente et distribution opérées via Chariow.
              </p>

              <div className="pt-1 sm:pt-2 text-[11px] sm:text-xs text-[#71717A] flex items-center gap-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
                <span>Boutique Chariow : Statut Officiel</span>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="lg:col-span-3 space-y-3 text-xs sm:text-sm">
              <div className="text-[11px] sm:text-xs font-mono font-bold text-[#FF5500] uppercase mb-3 sm:mb-4">
                Navigation
              </div>
              <ul className="space-y-2 sm:space-y-2.5 text-[#A1A1AA]">
                <li><a href="#livre" className="hover:text-white transition-colors py-0.5 inline-block">Le Livre</a></li>
                <li><a href="#transformation" className="hover:text-white transition-colors py-0.5 inline-block">L'Impact Concret</a></li>
                <li><a href="#themes" className="hover:text-white transition-colors py-0.5 inline-block">Les 4 Piliers</a></li>
                <li><a href="#auteur" className="hover:text-white transition-colors py-0.5 inline-block">L'Auteur</a></li>
                <li><a href="#commander" className="hover:text-white transition-colors py-0.5 inline-block">Commander</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors py-0.5 inline-block">FAQ</a></li>
              </ul>
            </div>

            {/* Column 3: Chariow Quick Link */}
            <div className="lg:col-span-4 space-y-3 sm:space-y-4">
              <div className="text-[11px] sm:text-xs font-mono font-bold text-[#FF5500] uppercase mb-3 sm:mb-4">
                Boutique Officielle
              </div>

              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Toutes les commandes sont traitées et expédiées de manière sécurisée par la plateforme Chariow.
              </p>

              <div className="pt-2">
                <a
                  href={BOOK_CONFIG.chariowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleBuyClick}
                  className="group w-full sm:w-auto pl-4 sm:pl-5 pr-1.5 py-1.5 bg-white hover:bg-white/90 text-black font-semibold text-xs tracking-wider rounded-full inline-flex items-center justify-between sm:justify-start gap-3 transition-all"
                >
                  <span>Acheter sur Chariow</span>
                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FF5500] text-white flex items-center justify-center shrink-0">
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A] text-center sm:text-left">
            <div>
              © {new Date().getFullYear()} {BOOK_CONFIG.title}. Tous droits réservés. Vente officielle sur Chariow.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={() => setLegalModalContent('mentions')}
                className="hover:text-white transition-colors py-1"
              >
                Mentions Légales
              </button>
              <button
                type="button"
                onClick={() => setLegalModalContent('confidentialite')}
                className="hover:text-white transition-colors py-1"
              >
                Confidentialité
              </button>
              <button
                type="button"
                onClick={() => setLegalModalContent('cgv')}
                className="hover:text-white transition-colors py-1"
              >
                CGV Chariow
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Legal Information Modal */}
      {legalModalContent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={() => setLegalModalContent(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#141418] rounded-2xl sm:rounded-3xl border border-white/10 p-5 sm:p-8 text-white shadow-2xl max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLegalModalContent(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-1.5 sm:p-2 text-[#71717A] hover:text-white rounded-full border border-white/10 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>

            {legalModalContent === 'mentions' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#FF5500]">Mentions Légales</h3>
                <div className="text-sm text-[#A1A1AA] space-y-3 leading-relaxed">
                  <p><strong>Éditeur du site :</strong> Vitrine éditoriale officielle pour l'ouvrage « {BOOK_CONFIG.title} ».</p>
                  <p><strong>Rôle du site :</strong> Ce site présente le livre et redirige vers la boutique Chariow officielle.</p>
                  <p><strong>Plateforme de vente :</strong> Les transactions et facturations sont opérées sous l'entière responsabilité de Chariow.</p>
                </div>
              </div>
            )}

            {legalModalContent === 'confidentialite' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#FF5500]">Confidentialité</h3>
                <div className="text-sm text-[#A1A1AA] space-y-3 leading-relaxed">
                  <p>Ce site ne stocke aucune coordonnée bancaire. Lors du paiement, la politique de confidentialité de Chariow s'applique.</p>
                </div>
              </div>
            )}

            {legalModalContent === 'cgv' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#FF5500]">Conditions Générales de Vente</h3>
                <div className="text-sm text-[#A1A1AA] space-y-3 leading-relaxed">
                  <p>La vente et la livraison sont régies par les CGV de la boutique Chariow au moment de l'achat.</p>
                </div>
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setLegalModalContent(null)}
                className="px-6 py-2.5 bg-[#FF5500] hover:bg-[#E04B00] text-white rounded-full text-xs uppercase tracking-wider font-bold"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
